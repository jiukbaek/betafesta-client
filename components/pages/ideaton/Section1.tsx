import Image from "components/Image";
import { downloadPdf, openLink } from "util/base";
import styles from "./Section1.module.scss";

export const Section1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <div className={styles.titleDesktop}>
          『2021 BETA 페스티벌』 아이디어톤
        </div>
        <div className={styles.content}>
          <div className={styles.poster}>
            <div className={styles.posterImage}>
              <Image
                src="/images/image-ideaton.jpeg"
                width="960"
                height="1354"
              />
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.titleMobile}>
              『2021 BETA 페스티벌』 아이디어톤
            </div>
            <div className={styles.infoContent}>
              <div>일 시</div>
              <div>2021. 11. 18. (목) ~ 2021. 11. 19. (금)</div>
              <div>접수 기간</div>
              <div>2021. 10. 29. (금) ~ 2021. 11. 12. (금)</div>
              <div>주최 주관</div>
              <div>안동시 / 안동대학교</div>
              <div>참가 구분</div>
              <div>예비창업자 / 창업기업(스타트업)</div>
              <div>평가 장소</div>
              <div>안동그랜드호텔(특설무대)</div>
              <div>총 상 금</div>
              <div>예비창업자 1천만 원 / 스타트업 5천만 원</div>
            </div>
            <div className={styles.buttons}>
              <div onClick={downloadPdf}>공고문 다운받기</div>
              <div
                onClick={() => openLink("https://forms.gle/tZB2wMkPh8UFm7jY7")}
              >
                참가신청
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
