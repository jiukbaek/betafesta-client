import Image from "components/Image";
import styles from "./Section1.module.scss";

export const Section1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <div className={styles.poster}>
          <Image src="/images/image-ideaton.jpeg" width="960" height="1354" />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>『2021 BETA 페스티벌』 아이디어톤</div>
          <div className={styles.info}>
            <div>일시</div>
            <div>2021. 11. 18. (목) ~ 2021. 11. 19. (금)</div>
            <div>접수기간</div>
            <div>2021. 10. 29. (금) ~ 2021. 11. 12. (금)</div>
            <div>참가 구분</div>
            <div>예비창업자 / 창업기업(스타트업)</div>
            <div>평가 장소</div>
            <div>안동그랜드호텔(특설무대)</div>
          </div>
          <div className={styles.buttons}>
            <div>공고문 다운받기</div>
            <div>참가신청</div>
          </div>
        </div>
      </div>
    </div>
  );
};