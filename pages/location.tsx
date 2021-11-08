/* eslint-disable @next/next/no-sync-scripts */
import Layout from "components/layout/Layout";
import { useEffect } from "react";
import styles from "./Location.module.scss";

declare const naver: any;

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
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <div className={styles.sectionTitleIcon} />
              무료 셔틀버스
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
            <div></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Location;
