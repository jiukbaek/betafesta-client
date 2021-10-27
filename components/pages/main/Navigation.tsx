import clsx from "clsx";
import Link from "next/link";
import { throttle } from "lodash";
import { useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import { openLink } from "util/base";

export const Navigation = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateScroll = throttle(() => {
        const windowHeight = window.innerHeight;
        const currentScrollTop = window.scrollY;
        if (currentScrollTop >= windowHeight * 0.6) {
          setShow(true);
        } else {
          setShow(false);
        }
      }, 300);
      window.addEventListener("scroll", updateScroll);
      window.addEventListener("resize", updateScroll);
      window.addEventListener("onload", updateScroll);
      return () => {
        window.removeEventListener("scroll", updateScroll);
        window.removeEventListener("resize", updateScroll);
        window.removeEventListener("onload", updateScroll);
      };
    }
  }, []);

  return (
    <div className={clsx(styles.nav, show && styles.show)}>
      <Link href="/notice">
        <div className={clsx(styles.icon, styles["icon-notice"])} />
      </Link>
      <Link href="#schedule">
        <div className={clsx(styles.icon, styles["icon-schedule"])} />
      </Link>
      <Link href="#event">
        <div className={clsx(styles.icon, styles["icon-event"])} />
      </Link>
      <div
        onClick={() =>
          openLink("https://www.youtube.com/channel/UCX7IRsH1eGOruoGZhY-kebw")
        }
        className={clsx(styles.icon, styles["icon-youtube"])}
      />
      <div
        onClick={() =>
          openLink("https://www.facebook.com/profile.php?id=100073682116389")
        }
        className={clsx(styles.icon, styles["icon-fb"])}
      />
      <div
        onClick={() => openLink("https://www.instagram.com/beta_festival_/")}
        className={clsx(styles.icon, styles["icon-insta"])}
      />
    </div>
  );
};
