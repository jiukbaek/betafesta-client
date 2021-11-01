import axios from "axios";
import router from "next/router";
import { useEffect, useRef, createRef, RefObject, useState } from "react";
import Layout from "pages/admin/layout";

import styles from "./edit.module.scss";

declare const nhn: any;

const oEditors: any = [];

const Write = () => {
  const [title, setTitle] = useState("");
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<Array<RefObject<HTMLInputElement>>>(
    Array(5)
      .fill(null)
      .map(() => createRef())
  );

  useEffect(() => {
    nhn.husky.EZCreator.createInIFrame({
      oAppRef: oEditors,
      elPlaceHolder: "editor",
      sSkinURI: "/smarteditor/SmartEditor2Skin.html",
      fCreator: "createSEditor2",
    });
  }, []);

  const write = async () => {
    console.log(oEditors);
    oEditors.getById["editor"].exec("UPDATE_CONTENTS_FIELD", []);
    const content = editorRef.current?.value;
    const { data: writed } = await axios.post("http://localhost:3000/board/write", {
      content,
      title,
    });

    const files = fileRef.current.reduce((prev: Array<File>, { current }) => {
      if (current && current.files?.length) {
        prev.push(current.files[0]);
      }
      return prev;
    }, []);

    if (files.length) {
      const formData = new FormData();
      formData.append("content-type", "multipart/form-data");
      formData.append("boardId", writed.id);
      files.forEach((file) => {
        formData.append("files", file);
      });
      await axios.post("http://localhost:3000/board/upload/files", formData);
    }

    alert("게시글이 등록 되었습니다.");
    router.push("/admin/board");
  };

  return (
    <Layout>
      <div>공지사항 등록</div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className={styles.editor} id="editor" ref={editorRef} />
      <input
        type="file"
        id="file1"
        ref={fileRef.current[0]}
        accept=".hwp, .pdf, .jpg, .jpeg, .png"
      />
      <input
        type="file"
        id="file2"
        ref={fileRef.current[1]}
        accept=".hwp, .pdf, .jpg, .jpeg, .png"
      />
      <input
        type="file"
        id="file3"
        ref={fileRef.current[2]}
        accept=".hwp, .pdf, .jpg, .jpeg, .png"
      />
      <input
        type="file"
        id="file4"
        ref={fileRef.current[3]}
        accept=".hwp, .pdf, .jpg, .jpeg, .png"
      />
      <input
        type="file"
        id="file5"
        ref={fileRef.current[4]}
        accept=".hwp, .pdf, .jpg, .jpeg, .png"
      />
      <div
        onClick={() => {
          if (confirm("등록 하시겠습니까?")) {
            write();
          }
        }}
      >
        등록
      </div>
    </Layout>
  );
};

export default Write;
