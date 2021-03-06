import Image from "components/Image";

import styles from "./Location.module.scss";

const Desktop = () => (
  <div>
    <div className={styles.course}>
      <div className={styles.title1}>노선 ①</div>
      <div className={styles.courseRow1}>
        <div className={styles.courseItem}>
          <Image src="/images/image-location1.png" width="662" height="662" />
        </div>
        <div className={styles.next}>
          <Image src="/images/icon-next-1.png" width="89" height="127" />
        </div>
        <div className={styles.courseItem}>
          <Image src="/images/image-location2.png" width="662" height="662" />
        </div>
        <div className={styles.next}>
          <Image src="/images/icon-next-1.png" width="89" height="127" />
        </div>
        <div className={styles.courseItem}>
          <Image src="/images/image-location3.png" width="662" height="662" />
        </div>
        <div className={styles.next}>
          <Image src="/images/icon-next-1.png" width="89" height="127" />
        </div>
        <div className={styles.courseItem}>
          <Image src="/images/image-location4.png" width="662" height="662" />
        </div>
      </div>
      <div className={styles.timeHead}>1차</div>
      <div className={styles.timeTable}>
        <div>09:30</div>
        <div className={styles.divide}>
          <div />
        </div>
        <div>10:00</div>
        <div className={styles.divide}>
          <div />
        </div>
        <div>10:10</div>
        <div className={styles.divide}>
          <div />
        </div>
        <div style={{ color: "#ff537f" }}>10:20</div>
      </div>
      <div className={styles.timeHead}>2차</div>
      <div className={styles.timeTable}>
        <div>11:50</div>
        <div className={styles.divide}>
          <div />
        </div>
        <div>12:10</div>
        <div className={styles.divide}>
          <div />
        </div>
        <div>12:20</div>
        <div className={styles.divide}>
          <div />
        </div>
        <div style={{ color: "#ff537f" }}>12:30</div>
      </div>
    </div>
    <div className={styles.course}>
      <div className={styles.title2}>노선 ②</div>
      <div className={styles.courseRow1}>
        <div className={styles.courseItem}>
          <Image src="/images/image-location2_1.png" width="662" height="662" />
        </div>
        <div className={styles.next}>
          <Image src="/images/icon-next-2.png" width="89" height="127" />
        </div>
        <div className={styles.courseItem}>
          <Image src="/images/image-location4.png" width="662" height="662" />
        </div>
      </div>
      <div className={styles.timeHead}>1차</div>
      <div className={styles.timeTable}>
        <div>10:30</div>
        <div className={styles.divide}>
          <div />
        </div>
        <div style={{ color: "#6e50d4" }}>11:00</div>
      </div>
      <div className={styles.timeHead}>2차</div>
      <div className={styles.timeTable}>
        <div>12:40</div>
        <div className={styles.divide}>
          <div />
        </div>
        <div style={{ color: "#6e50d4" }}>13:00</div>
      </div>
    </div>
    <div className={styles.startTime}>
      <div>
        <div style={{ color: "#ff537f" }}>18일 ▶</div>
        <div>1차출차</div>
        <div>15:30</div>
        <div>2차출차</div>
        <div>18:30</div>
      </div>
      <div>
        <div style={{ color: "#6e50d4" }}>19일 ▶</div>
        <div>1차출차</div>
        <div>14:30</div>
        <div>2차출차</div>
        <div>17:30</div>
      </div>
    </div>
    <div className={styles.startCourse}>
      <div>출차 노선 |</div>
      <div>
        안동그랜드호텔 ▶ 국립안동대학교 ▶ 모디684 ▶ 가톨릭상지대학교 ▶
        안동과학대학교
      </div>
    </div>
  </div>
);

export default Desktop;
