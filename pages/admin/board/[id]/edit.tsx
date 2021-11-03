import axios from "axios";
import { clone, isEqual } from "lodash";
import router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Layout from "pages/admin/layout";

import common from "pages/admin/board/board.module.scss";
import styles from "pages/admin/board/edit.module.scss";

declare const nhn: any;

const oEditors: any = [];

export const File = ({ file, setFile }: { file: any; setFile: any }) =>
  file ? (
    <div className={styles.file}>
      <div className={styles.fileName}>{file.originalName || file.name}</div>
      <div
        className={styles.fileDelete}
        onClick={() =>
          confirm("첨부파일을 삭제 하시겠습니까?") && setFile(null)
        }
      >
        X
      </div>
    </div>
  ) : (
    <input
      className={styles.file}
      accept=".hwp, .pdf, .jpg, .jpeg, .png"
      type="file"
      onChange={(e) => setFile(e.target.files?.[0])}
    />
  );

const Edit = () => {
  const {
    query: { id },
  } = useRouter();
  const [item, setItem] = useState<any>(null);
  const [files, setFiles] = useState<any>([]);
  const [title, setTitle] = useState("");
  const editorRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/board/${id}`)
        .then(({ data }) => setItem(data));
    }
  }, [id]);

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setFiles(item.files);
      nhn.husky.EZCreator.createInIFrame({
        oAppRef: oEditors,
        elPlaceHolder: "editor",
        sSkinURI: "/smarteditor/SmartEditor2Skin.html",
        fCreator: "createSEditor2",
      });
    }
  }, [item]);

  useEffect(() => {
    if (files.length < 5) {
      setFiles(files.concat(Array(5 - files.length).fill(null)));
    }
  }, [files]);

  const write = async () => {
    oEditors.getById["editor"].exec("UPDATE_CONTENTS_FIELD", []);
    const content = editorRef.current?.value;
    const deleteFiles = item.files.filter((prevFile: any) =>
      files.every((nextFile: any) => !isEqual(prevFile, nextFile))
    );

    await axios.put(`http://localhost:3000/board/${item.id}`, {
      content,
      deleteFiles,
      title,
    });

    const addFiles = files.filter((f: any) => f && !f.originalName);

    if (addFiles.length) {
      const formData = new FormData();
      formData.append("content-type", "multipart/form-data");
      formData.append("boardId", item.id);
      addFiles.forEach((file: any) => {
        formData.append("files", file);
      });
      await axios.post("http://localhost:3000/board/upload/files", formData);
    }

    alert("게시글이 수정 되었습니다.");
    router.push(`/admin/board/${item.id}`);
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
    item && (
      <Layout>
        <div className={styles.container}>
          <div className={common.title}>공지사항 수정</div>
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
            <textarea
              className={styles.editor}
              id="editor"
              ref={editorRef}
              value={item.content}
            />
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
            <div onClick={() => confirm("수정 하시겠습니까?") && write()}>
              수정
            </div>
            <div
              onClick={() =>
                confirm("취소 하시겠습니까?") &&
                router.push(`/admin/board/${item.id}`)
              }
            >
              취소
            </div>
          </div>
        </div>
      </Layout>
    )
  );
};

export default Edit;
