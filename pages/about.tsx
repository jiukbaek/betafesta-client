import Image from "components/Image";
import Layout from "components/layout/Layout";
import { openLink } from "util/base";

import styles from "./About.module.scss";

const Title: React.FC = ({ children }) => (
  <div className={styles.title}>
    <div className={styles.titleIcon} />
    <div>{children}</div>
  </div>
);

const About = () => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.display}>
        <div className={styles.top}>
          <Image src="/images/image-about.png" width="739" height="190" />
        </div>
        <div className={styles.content}>
          <div className={styles.section}>
            <Title>목적</Title>
            <div className={styles.text1}>
              안동 지역을 중심으로 한 경북 북부 지역 창업 지원 기관과 기업의
              육성을 통한 성과 공유 확산 및 창업 활성화 분위기를 조성하고,
              스타트업 홍보 및 창업 문화 전파를 위해 마련되었습니다.
            </div>
          </div>
          <div className={styles.section}>
            <Title>기간</Title>
            <div className={styles.text2}>
              2021. <span className={styles.textBold}>11. 18.</span>(목) ~
              <span className={styles.textBold}>11. 19.</span>(금)
            </div>
          </div>
          <div className={styles.section}>
            <Title>장소</Title>
            <div className={styles.text3}>
              안동 그랜드호텔 컨벤션 홀
              <div
                className={styles.textIcon}
                onClick={() =>
                  openLink(
                    "https://www.youtube.com/channel/UCX7IRsH1eGOruoGZhY-kebw"
                  )
                }
              >
                <Image
                  src="/images/image-betafesta-youtube.png"
                  width="390"
                  height="40"
                />
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <Title>주요내용</Title>
            <div className={styles.text1}>
              스타트업 전시관 | 창업 컨설팅 | 기업투자 상담 | 창업특강 |
              아이디어톤 | 버스킹 공연 | 라이브 커머스
            </div>
          </div>
        </div>
        <div className={styles.logo}>
          <div className={styles.logoLeft}>
            <div className={styles.logoItem}>
              <div className={styles.logoTitle}>주최</div>
              <div>
                <Image
                  src="/images/image-about-locale.png"
                  width="150"
                  height="32"
                />
              </div>
            </div>
            <div className={styles.logoItem}>
              <div className={styles.logoTitle}>주관</div>
              <div>
                <Image
                  src="/images/image-about-subject.png"
                  width="196"
                  height="32"
                />
              </div>
            </div>
          </div>
          <div className={styles.logoRight}>
            <div className={styles.logoTitle}>후원</div>
            <div className={styles.logos}>
              <div>
                <Image
                  src="/images/image-about-support1.png"
                  width="285"
                  height="32"
                />
              </div>
              <div>
                <Image
                  src="/images/image-about-support2.png"
                  width="168"
                  height="32"
                />
              </div>
              <div>
                <Image
                  src="/images/image-about-support3.png"
                  width="150"
                  height="32"
                />
              </div>
              <div>
                <Image
                  src="/images/image-about-support4.png"
                  width="188"
                  height="32"
                />
              </div>
              <div>
                <Image
                  src="/images/image-about-support5.png"
                  width="134"
                  height="32"
                />
              </div>
              <div className={styles.sk}>
                <Image
                  src="/images/image-about-support6.png"
                  width="153"
                  height="45"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
