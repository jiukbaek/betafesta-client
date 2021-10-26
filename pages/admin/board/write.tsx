import { useEffect } from "react";
import Layout from "../layout";

import styles from "./edit.module.scss";

declare const nhn: any;

const Write = () => {
  useEffect(() => {
    let oEditors: any = [];
    nhn.husky.EZCreator.createInIFrame({
      oAppRef: oEditors,
      elPlaceHolder: "editor",
      sSkinURI: "/smarteditor/SmartEditor2Skin.html",
      fCreator: "createSEditor2",
    });
  }, []);

  return (
    <Layout>
      <div>Write</div>
      <div>
        <textarea className={styles.editor} id="editor"></textarea>
      </div>
    </Layout>
  );
};

export default Write;
