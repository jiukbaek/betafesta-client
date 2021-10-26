import Link from "next/link";
import styles from "./layout.module.scss";

const Layout: React.FC = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.nav}>
      <div></div>
      <div className={styles.menus}>
        <Link href="/admin/analytics" passHref>
          <div>방문자 통계</div>
        </Link>
        <Link href="/admin/board" passHref>
          <div>공지사항 관리</div>
        </Link>
      </div>
      <div></div>
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Layout;
