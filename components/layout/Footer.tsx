import Link from "next/link";
import Image from "components/Image";
import { openLink } from "util/base";

import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.logo}>
      <Link href="/">
        <Image src="/images/logo-white.png" width="348" height="155" />
      </Link>
    </div>
    <div className={styles.center}>
      <div className={styles.sns}>
        <div
          onClick={() =>
            openLink("https://www.facebook.com/profile.php?id=100073682116389")
          }
        >
          <Image src="/images/icon-fb.png" width="70" height="70" />
        </div>
        <div
          onClick={() => openLink("https://www.instagram.com/beta_festival_/")}
        >
          <Image src="/images/icon-insta.png" width="70" height="70" />
        </div>
        <div
          onClick={() =>
            openLink("https://www.youtube.com/channel/UCX7IRsH1eGOruoGZhY-kebw")
          }
        >
          <Image src="/images/icon-youtube.png" width="70" height="70" />
        </div>
      </div>
      <div className={styles.info}>
        <div>(안동형 일자리 사업단)</div>
        <div>
          전화번호 : <a href="tel:054-820-6368">054-820-6368</a>~9
        </div>
        <div>
          이메일:{" "}
          <a href="mailto:andongbetafesta@gmail.com">betafesta@gmail.com</a>
        </div>
        <div>COPYRIGHT © 2021 안동형 일자리 BETA페스티벌</div>
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.locale}>
        <div className={styles.title}>주최</div>
        <div
          className={styles.symbol}
          onClick={() => openLink("https://www.andong.go.kr/main.do")}
        >
          <Image src="/images/icon-locale1.png" width="139" height="33" />
        </div>
        <div className={styles.title}>주관</div>
        <div
          className={styles.symbol}
          onClick={() => openLink("https://www.andong.ac.kr/main/index.do")}
        >
          <Image src="/images/image-subject.png" width="186" height="33" />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
