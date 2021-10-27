import Image from "components/Image";

import styles from "./Section5.module.scss";

export const Section5 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image src="/images/section5-title.png" width="1068" height="122" alt="title" />
      </div>
      <div className={styles.tags}>
        <div>#해시태그1</div>
        <div>#해시태그1</div>
        <div>#해시태그1</div>
      </div>
      <div className={styles.posts}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
