import clsx from "clsx";
import { useState } from "react";

import Button from "components/Button";
import Layout from "components/layout/Layout";
import Image from "components/Image";

import styles from "./Schedule.module.scss";

const Day1 = () => (
  <>
    <div
      className={clsx(styles.daySchedule, styles.bgGray)}
      style={{ gridRow: "2 / 10", gridColumn: 2 }}
    >
      <div>스타트업 전시관</div>
      <div className={styles.divide} />
      <div>창업컨설팅</div>
      <div className={styles.divide} />
      <div>기업투자상담</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgPink)}
      style={{
        animationDelay: "0.1s",
        gridRow: "6",
        gridColumn: 3,
        flexDirection: "row",
      }}
    >
      <div className={styles.icon}>
        <Image src="/images/icon-check.png" width="30" height="30" />
      </div>
      <span className={styles.bigText}>개막식</span>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgBlue)}
      style={{ animationDelay: "0.13s", gridRow: "7", gridColumn: 3 }}
    >
      <div>
        창업특강 ① - <span className={styles.name}>허경환</span>
      </div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgYellow)}
      style={{ animationDelay: "0.16s", gridRow: "8 / 10", gridColumn: 3 }}
    >
      <div>아이디어톤 ①</div>
      <div>예비창업자 경진대회</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgPurple)}
      style={{ animationDelay: "0.19s", gridRow: "4", gridColumn: 4 }}
    >
      <div>버스킹 공연</div>
      <div>(아티스트 커니)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgPurple)}
      style={{ animationDelay: "0.22s", gridRow: "7", gridColumn: 4 }}
    >
      <div>버스킹 공연</div>
      <div>(어쿠스틱 정인용)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgPurple)}
      style={{ animationDelay: "0.25s", gridRow: "9", gridColumn: 4 }}
    >
      <div>버스킹 공연</div>
      <div>(보컬리스트 최정호)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgGreen)}
      style={{ animationDelay: "0.28s", gridRow: "2", gridColumn: 5 }}
    >
      <div>스타트업</div>
      <div>라이브 커머스</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgGreen)}
      style={{ animationDelay: "0.31s", gridRow: "5", gridColumn: 5 }}
    >
      <div>스타트업</div>
      <div>라이브 커머스</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgGreen)}
      style={{ animationDelay: "0.34s", gridRow: "8", gridColumn: 5 }}
    >
      <div>스타트업</div>
      <div>라이브 커머스</div>
    </div>
  </>
);

const Day2 = () => (
  <>
    <div
      className={clsx(styles.daySchedule, styles.bgGray)}
      style={{ gridRow: "2 / 10", gridColumn: 2 }}
    >
      <div>스타트업 전시관</div>
      <div className={styles.divide} />
      <div>창업컨설팅</div>
      <div className={styles.divide} />
      <div>기업투자상담</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgYellow)}
      style={{ animationDelay: "0.1s", gridRow: "4/7", gridColumn: 3 }}
    >
      <div>아이디어톤 ②</div>
      <div>창업기업 경진대회</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgBlue)}
      style={{ animationDelay: "0.13s", gridRow: "7", gridColumn: 3 }}
    >
      <div>
        창업특강 ① - <span className={styles.name}>조용민</span>
      </div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgPink)}
      style={{ animationDelay: "0.16s", gridRow: "8", gridColumn: 3 }}
    >
      <div>시상 및 폐막식</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgPurple)}
      style={{ animationDelay: "0.19s", gridRow: "4", gridColumn: 4 }}
    >
      <div>버스킹 공연</div>
      <div>(보컬리스트 이의정)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgPurple)}
      style={{ animationDelay: "0.22s", gridRow: "6", gridColumn: 4 }}
    >
      <div>버스킹 공연</div>
      <div>(랩퍼 Rearkraz)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgGreen)}
      style={{ animationDelay: "0.25s", gridRow: "2", gridColumn: 5 }}
    >
      <div>스타트업</div>
      <div>라이브 커머스</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgGreen)}
      style={{ animationDelay: "0.28s", gridRow: "5", gridColumn: 5 }}
    >
      <div>스타트업</div>
      <div>라이브 커머스</div>
    </div>
  </>
);

const Schedule = () => {
  const [displayed, display] = useState(1);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.display}>
          <div className={styles.title}>
            <div>PROGRAM</div>
            <div className={styles.titleSmall}>schedule</div>
          </div>
          <div className={styles.buttons}>
            <Button onClick={() => display(1)}>11.18 Thu</Button>
            <Button onClick={() => display(2)}>11.19 Fri</Button>
          </div>
          <div className={styles.schedule}>
            <div className={styles.item}>
              <div className={styles.itemHead1}>스타트업 ZONE</div>
              <div className={styles.itemHead2}>문화소통 ZONE</div>
              <div className={styles.itemHead3}>부대행사 ZONE</div>
              <div className={styles.itemHead4}>온라인 ZONE</div>
              <div className={styles.itemTime} style={{ gridRow: "2" }}>
                10:00 - 11:00
              </div>
              <div className={styles.itemTime} style={{ gridRow: "3" }}>
                11:00 - 12:00
              </div>
              <div className={styles.itemTime} style={{ gridRow: "4" }}>
                12:00 - 13:00
              </div>
              <div className={styles.itemTime} style={{ gridRow: "5" }}>
                13:00 - 14:00
              </div>
              <div className={styles.itemTime} style={{ gridRow: "6" }}>
                14:00 - 15:00
              </div>
              <div className={styles.itemTime} style={{ gridRow: "7" }}>
                15:00 - 16:00
              </div>
              <div className={styles.itemTime} style={{ gridRow: "8" }}>
                16:00 - 17:00
              </div>
              <div className={styles.itemTime} style={{ gridRow: "9" }}>
                17:00 - 18:00
              </div>
              <div className={styles.itemTime} style={{ gridRow: "10" }}>
                18:00 - 19:00
              </div>
              {displayed === 1 ? <Day1 /> : <Day2 />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
