import Image from "components/Image";

import styles from "./Section3.module.scss";

export const Section3 = () => {
  return (
    <div id="schedule" className={styles.container}>
      <div className={styles.display}>
        <div className={styles.title}>
          <Image src="/images/section3-title.png" width="1068" height="122" alt="title" />
        </div>
        <div className={styles.schedules}>
          {new Array(2).fill(null).map((_, index) => (
            <div key={index} className={styles.schedule}>
              <Image
                src={`/images/image-schedule${index + 1}.png`}
                width="1347"
                height="1551"
                alt="schedule"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
