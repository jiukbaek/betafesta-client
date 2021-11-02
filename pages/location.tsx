/* eslint-disable @next/next/no-sync-scripts */
import Layout from "components/layout/Layout";
import { useEffect } from "react";
import styles from "./Location.module.scss";

declare const naver: any;

const Location = () => {
  useEffect(() => {
    if (typeof naver !== "undefined") {
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
    }
  });

  return (
    <>
      <script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.mapId}`}
      ></script>
      <Layout>
        <div className={styles.container}>
          <div className={styles.display}>
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
        </div>
      </Layout>
    </>
  );
};

export default Location;
