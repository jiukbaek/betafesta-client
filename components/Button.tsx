import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProp {
  className?: string;
  onClick: (args: any) => any;
}

const Button: React.FC<ButtonProp> = ({ className, onClick, children }) => (
  <div onClick={onClick} className={clsx(styles.outter, className)}>
    <div className={styles.inner}>{children}</div>
  </div>
);

export default Button;
