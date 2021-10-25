import Script from "next/script";
import { useEffect } from "react";
import styles from "./hello.module.scss";

declare const nhn: any;

const Hello = () => {
  useEffect(() => {
    console.log(nhn);
    if (nhn) {
      let oEditors: any = [];
      nhn.husky.EZCreator.createInIFrame({
        oAppRef: oEditors,
        elPlaceHolder: "editor",
        sSkinURI: "/smarteditor/SmartEditor2Skin.html",
        fCreator: "createSEditor2",
      });
    }
  });

  return (
    <>
      <div className={styles.hello}>
        <textarea id="editor" style={{ width: "700px" }}></textarea>
      </div>
    </>
  );
};

export default Hello;
