import clsx from "clsx";
import { throttle } from "lodash";
import { useEffect, useState } from "react";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const [show, setShow] = useState<boolean>(false);
  const navs = ["notice", "schedule", "event", "youtube", "fb", "insta"];

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
      {navs.map((nav) => (
        <div className={clsx(styles.icon, styles[`icon-${nav}`])} key={nav} />
      ))}
    </div>
  );
};
