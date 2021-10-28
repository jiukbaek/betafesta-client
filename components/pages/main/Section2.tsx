import Button from "components/Button";
import DigitalNumber from "components/DigitalNumber";
import dayjs from "dayjs";
import Image from "components/Image";
import { useEffect, useState } from "react";
import styles from "./Section2.module.scss";
import useMobile from "util/useMobile";
import { downloadPdf, openLink } from "util/base";

const parseDate = (date: number) => {
  if (date <= 0) {
    return { day: 0, hour: 0, minute: 0 };
  }

  const perMinute = 60;
  const perHour = perMinute * 60;
  const perDay = perHour * 24;

  const day = Math.floor(date / perDay);
  const hour = Math.floor((date % perDay) / perHour);
  const minute = Math.floor((date % perHour) / perMinute);

  return { day, hour, minute };
};

export const Section2 = () => {
  const isMobile = useMobile();
  const limitDate = dayjs("2021-11-12 23:59:59");
  const [countdown, setCountdown] = useState<Record<string, number>>({
    day: 0,
    hour: 0,
    minute: 0,
  });

  useEffect(() => {
    const update = () => {
      const diffSecond = limitDate.diff(new Date(), "second");
      const parsed = parseDate(diffSecond);
      setCountdown(parsed);
    };
    update();
    const id = setInterval(update, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {isMobile ? (
          <Image
            src="/images/section2-title-mobile.png"
            width="1000"
            height="500"
            alt="title"
          />
        ) : (
          <Image
            src="/images/section2-title.png"
            width="2000"
            height="210"
            alt="title"
          />
        )}
      </div>
      <div className={styles.subtitle}>
        <Image
          src="/images/section2-subtitle.png"
          width="1200"
          height="166"
          alt="title"
        />
      </div>
      <div className={styles.countdown}>
        <div className={styles.led}>
          <div>DAY</div>
          <DigitalNumber nums={String(countdown.day).padStart(2, "0")} />
        </div>
        <div className={styles.divide}>:</div>
        <div className={styles.led}>
          <div>HOUR</div>
          <DigitalNumber nums={String(countdown.hour).padStart(2, "0")} />
        </div>
        <div className={styles.divide}>:</div>
        <div className={styles.led}>
          <div>MINUTE</div>
          <DigitalNumber nums={String(countdown.minute).padStart(2, "0")} />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button className={styles.button} onClick={downloadPdf}>
          공고문 다운받기
        </Button>
        <Button
          className={styles.button}
          onClick={() => openLink("https://forms.gle/tZB2wMkPh8UFm7jY7")}
        >
          신청하기
        </Button>
      </div>
    </div>
  );
};
