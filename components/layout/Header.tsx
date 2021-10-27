import Link from "next/link";
import Image from "components/Image";
import styles from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div className={styles.header}>
      <Link href="/" passHref>
        <div className={styles.logo}>
          <Image
            src="/images/logo-color.png"
            width="252"
            height="113"
            alt="logo"
          />
        </div>
      </Link>
      <div className={styles.menu}>
        <div>
          <Link href="/">행사안내</Link>
        </div>
        <div>
          <Link href="/ideaton">아이디어톤</Link>
        </div>
        <div>
          <Link href="/">창업컨설팅</Link>
        </div>
        <div>
          <Link href="/">공지사항</Link>
        </div>
      </div>
      <div className={styles.hamburger}>
        <div onClick={() => toggle((prev) => !prev)}>
          <Image
            src={`/images/icon-menu-${!toggled ? "open" : "close"}-black.svg`}
            width="32"
            height="32"
            alt="menu"
          />
        </div>
        <div
          className={styles.mobileMenu}
          style={{ transform: `translateX(${!toggled ? "-100" : "0"}%)` }}
        >
          <div>
            <Link href="/">행사안내</Link>
          </div>
          <div>
            <Link href="/">아이디어톤</Link>
          </div>
          <div>
            <Link href="/">창업컨설팅</Link>
          </div>
          <div>
            <Link href="/">공지사항</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
