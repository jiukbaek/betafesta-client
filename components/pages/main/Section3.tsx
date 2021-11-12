import Image from "components/Image";

import styles from "./Section3.module.scss";

export const Section3 = () => {
  const schedules = ["11.18.Thu", "11.19.Fri"];
  return (
    <div id="schedule" className={styles.container}>
      <div className={styles.display}>
        <div className={styles.title}>
          <Image src="/images/section3-title.png" width="1068" height="122" alt="title" />
        </div>
        <div className={styles.schedules}>
          {schedules.map((date, index) => (
            <div key={index} className={styles.schedule}>
              <div className={styles.scheduleDate}>{date}</div>
              <div>
                <Image
                  src={`/images/image-schedule${index + 1}.png`}
                  width="1347"
                  height="1551"
                  alt="schedule"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
