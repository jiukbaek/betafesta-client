import Link from "next/link";
import Image from "components/Image";
import styles from "./Header.module.scss";
import { useState } from "react";

interface Menu {
  title: string;
  link: string;
}

interface MenuItemProp extends Menu {
  submenus?: Array<Menu>;
}

const MenuItem: React.FC<MenuItemProp> = ({ title, link, submenus = [] }) => (
  <div className={styles.menuItem}>
    <div>
      <Link href={link}>{title}</Link>
    </div>
    <div className={styles.submenus}>
      {submenus.map((menu) => (
        <div key={menu.title}>
          <Link href={menu.link}>{menu.title}</Link>
        </div>
      ))}
    </div>
  </div>
);

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
        <MenuItem
          title="행사안내"
          link="/about"
          submenus={[
            { title: "행사소개", link: "/about" },
            { title: "프로그램 일정", link: "/about" },
            { title: "오시는길", link: "/about" },
          ]}
        />
        <MenuItem title="아이디어톤" link="/ideaton" />
        <MenuItem title="창업컨설팅" link="/consult" />
        <MenuItem title="공지사항" link="/notice" />
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
            <Link href="/about">행사안내</Link>
          </div>
          <div>
            <Link href="/ideaton">아이디어톤</Link>
          </div>
          <div>
            <Link href="/consult">창업컨설팅</Link>
          </div>
          <div>
            <Link href="/notice">공지사항</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
