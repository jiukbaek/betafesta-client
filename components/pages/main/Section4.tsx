import Button from "components/Button";
import styles from "./Section4.module.scss";

export const Section4 = () => {
  const ready = () => alert("준비중 입니다");

  return (
    <div className={styles.container}>
      <div className={styles.vedio}>
        <iframe
          style={{ position: "absolute", top: 0, left: 0 }}
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className={styles.buttons}>
        <Button onClick={ready}>유튜브 바로가기</Button>
        <Button onClick={ready}>라이브 커머스 바로가기</Button>
      </div>
    </div>
  );
};
