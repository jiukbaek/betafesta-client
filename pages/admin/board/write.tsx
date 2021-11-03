import axios from "axios";
import router from "next/router";
import { useEffect, useRef, useState } from "react";
import Layout from "pages/admin/layout";

import common from "./board.module.scss";
import styles from "./edit.module.scss";
import { File } from "./[id]/edit";
import { clone } from "lodash";

declare const nhn: any;

const oEditors: any = [];

const Write = () => {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState<any>([]);
  const editorRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/me", {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      })
      .catch(() => router.push("/admin/login"));
  }, []);

  useEffect(() => {
    nhn.husky.EZCreator.createInIFrame({
      oAppRef: oEditors,
      elPlaceHolder: "editor",
      sSkinURI: "/smarteditor/SmartEditor2Skin.html",
      fCreator: "createSEditor2",
    });
  }, []);

  useEffect(() => {
    if (files.length < 5) {
      setFiles(files.concat(Array(5 - files.length).fill(null)));
    }
  }, [files]);

  const write = async () => {
    oEditors.getById["editor"].exec("UPDATE_CONTENTS_FIELD", []);
    const content = editorRef.current?.value;
    const { data: writed } = await axios.post(
      "http://localhost:3000/board/write",
      {
        content,
        title,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );

    const addFiles = files.filter((f: any) => f && !f.originalName);

    if (addFiles.length) {
      const formData = new FormData();
      formData.append("content-type", "multipart/form-data");
      formData.append("boardId", writed.id);
      addFiles.forEach((file: any) => {
        formData.append("files", file);
      });
      await axios.post("http://localhost:3000/board/upload/files", formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
    }

    alert("게시글이 등록 되었습니다.");
    router.push("/admin/board");
  };

  const handleFiles = (updated: any, index: number) => {
    const cloneFiles = clone(files);

    if (updated) {
      cloneFiles[index] = updated;
    } else {
      cloneFiles.splice(index, 1);
    }

    setFiles(cloneFiles);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={common.title}>공지사항 등록</div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>제목</div>
          <input
            className={styles.titleInput}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>본문</div>
          <textarea className={styles.editor} id="editor" ref={editorRef} />
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>첨부파일</div>
          <div>
            {files.map((file: any, index: any) => (
              <File
                file={file}
                key={index}
                setFile={(updated: any) => handleFiles(updated, index)}
              />
            ))}
          </div>
        </div>
        <div className={common.buttons}>
          <div onClick={() => confirm("등록 하시겠습니까?") && write()}>
            등록
          </div>
          <div
            onClick={() =>
              confirm("취소 하시겠습니까?") && router.push("/admin/board")
            }
          >
            취소
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Write;
