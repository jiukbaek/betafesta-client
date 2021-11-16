/* eslint-disable @next/next/no-sync-scripts */
import clsx from "clsx";
import { useEffect } from "react";

import Layout from "components/layout/Layout";
import Image from "components/Image";

import styles from "./Location.module.scss";

declare const naver: any;

interface TimeTableProp {
  type: 1 | 2;
}

const TimeTable: React.FC<TimeTableProp> = ({ type }) => (
  <div className={styles[`timeTable${type}`]}>
    <div className={styles[`timeTable${type}Head`]}>
      {type === 1 ? "11월 18일 목요일" : "11월 19일 금요일"}
    </div>
    <div>1차</div>
    <div>09:30</div>
    <div>1차</div>
    <div>10:00</div>
    <div>1차</div>
    <div>10:10</div>
    <div>1차</div>
    <div>10:30</div>
    <div>1차 도착</div>
    <div className={styles[`timeTable${type}Alive`]}>
      <div>
        <div className={clsx(styles[`timeTableNum`], styles[`timeTable${type}BG`])}>1</div>
        <div>10:20</div>
      </div>
      <div>
        <div className={clsx(styles[`timeTableNum`], styles[`timeTable${type}BG`])}>2</div>
        <div>11:00</div>
      </div>
    </div>
    <div>2차</div>
    <div>11:50</div>
    <div>2차</div>
    <div>12:10</div>
    <div>2차</div>
    <div>12:20</div>
    <div>2차</div>
    <div>12:40</div>
    <div>2차 도착</div>
    <div className={styles[`timeTable${type}Alive`]}>
      <div>
        <div className={clsx(styles[`timeTableNum`], styles[`timeTable${type}BG`])}>1</div>
        12:30
      </div>
      <div>
        <div className={clsx(styles[`timeTableNum`], styles[`timeTable${type}BG`])}>2</div>
        13:00
      </div>
    </div>
    <div className={styles.timeTableCourse}>
      <div>
        <div>노선</div>
        <div className={clsx(styles[`timeTableNum`], styles[`timeTable${type}BG`])}>1</div>
        <div>안동과학대학교 ▶ 가톨릭상지대학교 ▶ 모디684 ▶ 안동 그랜드호텔</div>
      </div>
      <div>
        <div>노선</div>
        <div className={clsx(styles[`timeTableNum`], styles[`timeTable${type}BG`])}>2</div>
        안동대학교 ▶ 안동 그랜드호텔
      </div>
    </div>
    <div className={styles[`timeTable${type}BG`]}>1차 출차</div>
    <div className={styles.bgGray}>{type === 1 ? "15:30" : "14:30"}</div>

    <div className={styles[`timeTable${type}BG`]}>2차 출차</div>
    <div className={styles.bgGray}>{type === 1 ? "18:30" : "17:30"}</div>
  </div>
);

const Location = () => {
  useEffect(() => {
    const position = new naver.maps.LatLng(36.5672341, 128.7804888);
    const map = new naver.maps.Map("map", {
      center: position,
      zoom: 20,
    });
    new naver.maps.Marker({
      map,
      position,
      title: "안동그랜드호텔 컨벤션홀",
    });
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.display}>
          <div className={styles.section}>
            <div className={styles.title}>LOCATION</div>
            <div className={styles.sectionTitle}>
              <div className={styles.sectionTitleIcon} />
              오시는 길
              <span className={styles.address}>
                안동그랜드호텔 | 경상북도 안동시 성곡동 1569 (우편번호 : 36710)
              </span>
            </div>
            <div className={styles.location}>
              <div id="map" className={styles.locationMap} />
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.sectionTitle}>
              <div className={styles.sectionTitleIcon} />
              무료 셔틀버스
            </div>
            <div className={styles.shuttleBG}>
              <div className={styles.shuttleBGObj} />
            </div>
            <div className={styles.shuttle}>
              <div className={styles.shuttleInfo}>
                <div className={styles.shuttleTitle}>· 운행기간</div>
                <div className={styles.shuttleContent}>11월 18일 ~ 19일 (2일간)</div>
              </div>
              <div className={styles.shuttleInfo}>
                <div className={styles.shuttleTitle}>· 운행시간</div>
                <div className={styles.shuttleContent}>09:00 ~ 19:00</div>
              </div>
              <div className={styles.shuttleInfo}>
                <div className={styles.shuttleTitle}>· 운행대수</div>
                <div className={styles.shuttleContent}>1시간당 1대 운행</div>
              </div>
              <div className={styles.shuttleInfo}>
                <div className={styles.shuttleTitle}>· 운행구간</div>
                <div className={styles.shuttleContent}>모디 684 → 용상사거리 → 안동그랜드호텔</div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.course}>
              <div className={styles.courseImage}>
                <Image src="/images/image-location1.png" width="708" height="653" />
              </div>
              <div className={styles.courseImage}>
                <Image src="/images/image-location2.png" width="708" height="653" />
              </div>
              <div className={styles.courseImage}>
                <Image src="/images/image-location3.png" width="708" height="653" />
              </div>
              <div className={styles.courseImage}>
                <Image src="/images/image-location4.png" width="708" height="653" />
              </div>
              <div className={styles.courseImage}>
                <Image src="/images/image-location5.png" width="708" height="653" />
              </div>
            </div>
          </div>
          <div>
            <TimeTable type={1} />
            <TimeTable type={2} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Location;
