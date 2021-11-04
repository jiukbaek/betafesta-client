import Image from "components/Image";

import main from "public/main.json";
import { openLink } from "util/base";

import styles from "./Section5.module.scss";

export const Section5 = () => (
  <div id="event" className={styles.container}>
    <div className={styles.display}>
      <div
        className={styles.title}
        onClick={() => openLink("https://www.instagram.com/beta_festival_/")}
      >
        <span className={styles.title1}>INSTAGRAM</span>
        <span className={styles.title2}>@beta_festival_</span>
      </div>
      <div className={styles.tags}>
        {main.sns.tags.map((tag) => (
          <div key={tag}>#{tag}</div>
        ))}
      </div>
      <div className={styles.posts}>
        {main.sns.posts.map(({ image, link }, index) => (
          <div key={index} onClick={() => openLink(link)}>
            <Image src={image} width="500" height="500" />
          </div>
        ))}
      </div>
    </div>
  </div>
);
