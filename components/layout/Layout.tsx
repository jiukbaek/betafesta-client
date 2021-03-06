import Footer from "./Footer";
import Header from "./Header";

import styles from "./Layout.module.scss";

const Layout: React.FC = ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
