import clsx from "clsx";
import { useState } from "react";

import Layout from "components/layout/Layout";
import Image from "components/Image";

import styles from "./Schedule.module.scss";

const Day1 = () => (
  <>
    <div
      className={clsx(styles.daySchedule, styles.bgGray)}
      style={{ gridRow: "2 / 13", gridColumn: 2 }}
    >
      <div>스타트업 전시관</div>
      <div className={styles.divide} />
      <div>창업 컨설팅</div>
      <div className={styles.divide} />
      <div>기업투자 상담</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgPink2)}
      style={{
        animationDelay: "0.1s",
        gridRow: "5",
        gridColumn: 3,
      }}
    >
      <div>식전 공연</div>
      <div>(코맨스 밴드)</div>
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
      className={clsx(styles.daySchedule, styles.bgBlue2)}
      style={{
        animationDelay: "0.1s",
        gridRow: "11 / 13",
        gridColumn: 3,
      }}
    >
      <div>창업 교육</div>
      <div>(MBC 최별 PD)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgOrange)}
      style={{ animationDelay: "0.19s", gridRow: "2 / 5", gridColumn: 4 }}
    >
      <div>베타 놀이터</div>
      <div>(카페, 휴식공간)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgPurple)}
      style={{ animationDelay: "0.19s", gridRow: "5", gridColumn: 4 }}
    >
      <div>버스킹 공연</div>
      <div>(아티스트 커니)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgOrange)}
      style={{ animationDelay: "0.19s", gridRow: "6 / 8", gridColumn: 2 / 4 }}
    >
      <div>베타 놀이터</div>
      <div>(카페, 휴식공간)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgPurple)}
      style={{ animationDelay: "0.22s", gridRow: "8", gridColumn: 4 }}
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
      style={{ animationDelay: "0.28s", gridRow: "3", gridColumn: 5 }}
    >
      <div>스타트업 라이브 커머스</div>
      <div>(연화단지-두부,순두부)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgGreen)}
      style={{ animationDelay: "0.31s", gridRow: "6", gridColumn: 5 }}
    >
      <div>스타트업 라이브 커머스</div>
      <div>(안동종가문화원-생강청)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgGreen)}
      style={{ animationDelay: "0.34s", gridRow: "9", gridColumn: 5 }}
    >
      <div>스타트업 라이브 커머스</div>
      <div>(리더스팜-후지불고기)</div>
    </div>
  </>
);

const Day2 = () => (
  <>
    <div
      className={clsx(styles.daySchedule, styles.bgGray)}
      style={{ gridRow: "2 / 9", gridColumn: 2 }}
    >
      <div>스타트업 전시관</div>
      <div className={styles.divide} />
      <div>창업 컨설팅</div>
      <div className={styles.divide} />
      <div>기업투자 상담</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgYellow2)}
      style={{ animationDelay: "0.1s", gridRow: "2", gridColumn: 3 }}
    >
      <div>스마트팜</div>
      <div>기업 네트워킹</div>
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
        창업특강 ② - <span className={styles.name}>조용민</span>
      </div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgPink)}
      style={{ animationDelay: "0.16s", gridRow: "8", gridColumn: 3 }}
    >
      <div>시상 및 폐막식</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgOrange)}
      style={{ animationDelay: "0.19s", gridRow: "2 / 4", gridColumn: 2 / 4 }}
    >
      <div>베타 놀이터</div>
      <div>(카페, 휴식공간)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgPurple)}
      style={{ animationDelay: "0.19s", gridRow: "4", gridColumn: 4 }}
    >
      <div>버스킹 공연</div>
      <div>(보컬리스트 이의정)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgOrange)}
      style={{ animationDelay: "0.19s", gridRow: "5", gridColumn: 2 / 4 }}
    >
      <div>베타 놀이터</div>
      <div>(카페, 휴식공간)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgPurple)}
      style={{ animationDelay: "0.22s", gridRow: "6", gridColumn: 4 }}
    >
      <div>버스킹 공연</div>
      <div>(랩퍼 Rearkraz)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgOrange)}
      style={{ animationDelay: "0.19s", gridRow: "7 / 9", gridColumn: 2 / 4 }}
    >
      <div>베타 놀이터</div>
      <div>(카페, 휴식공간)</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgGreen)}
      style={{ animationDelay: "0.25s", gridRow: "2", gridColumn: 5 }}
    >
      <div>스타트업 라이브 커머스</div>
      <div>(정진푸드몰-목애(액상차))</div>
    </div>
    <div
      className={clsx(styles.daySchedule, styles.bgGreen)}
      style={{ animationDelay: "0.28s", gridRow: "5", gridColumn: 5 }}
    >
      <div>스타트업 라이브 커머스</div>
      <div>(세중투어몰-관광상품)</div>
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
            <div onClick={() => display(1)} className={displayed === 1 ? styles.button1 : ""}>
              <div className={styles.buttonText}>11.18. Thu</div>
              <div className={styles.buttonIcon}>
                {displayed === 1 ? (
                  <Image src="/images/icon-down.png" width="32" height="32" />
                ) : (
                  <Image src="/images/icon-down-default.png" width="32" height="32" />
                )}
              </div>
            </div>
            <div onClick={() => display(2)} className={displayed === 2 ? styles.button2 : ""}>
              <div className={styles.buttonText}>11.19 Fri</div>
              <div className={styles.buttonIcon}>
                {displayed === 2 ? (
                  <Image src="/images/icon-down.png" width="32" height="32" />
                ) : (
                  <Image src="/images/icon-down-default.png" width="32" height="32" />
                )}
              </div>
            </div>
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
              <div className={styles.itemTime} style={{ gridRow: "11" }}>
                19:00 - 20:00
              </div>
              <div className={styles.itemTime} style={{ gridRow: "12" }}>
                20:00 - 21:00
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
