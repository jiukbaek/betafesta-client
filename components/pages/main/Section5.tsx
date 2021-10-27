import Image from "components/Image";

import main from "public/main.json";

import styles from "./Section5.module.scss";

export const Section5 = () => {
  return (
    <div id="event" className={styles.container}>
      <div className={styles.title}>
        <span className={styles.title1}>INSTAGRAM</span>
        <span className={styles.title2}>@beta_festival_</span>
      </div>
      <div className={styles.tags}>
        {main.sns.tags.map((tag) => (
          <div key={tag}>#{tag}</div>
        ))}
      </div>
      <div className={styles.posts}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
