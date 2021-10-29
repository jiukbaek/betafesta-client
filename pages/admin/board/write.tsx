import { useEffect, useRef } from "react";
import Layout from "../layout";

import styles from "./edit.module.scss";

declare const nhn: any;

const Write = () => {
  let oEditors: any = [];
  const ref = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    nhn.husky.EZCreator.createInIFrame({
      oAppRef: oEditors,
      elPlaceHolder: "editor",
      sSkinURI: "/smarteditor/SmartEditor2Skin.html",
      fCreator: "createSEditor2",
    });
  }, []);

  const update = () => {
    oEditors.getById["editor"].exec("UPDATE_CONTENTS_FIELD", []);
    console.log(ref.current?.value);
  };

  return (
    <Layout>
      <div>Write</div>
      <textarea className={styles.editor} id="editor" ref={ref} />
      <input type="file" id="file1" />
      <div onClick={update}>등록</div>
    </Layout>
  );
};

export default Write;
