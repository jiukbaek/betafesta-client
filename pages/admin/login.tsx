import router from "next/router";
import { KeyboardEvent, InputHTMLAttributes, useState } from "react";

import styles from "./login.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...inputProps }: InputProps) => (
  <div className={styles.input}>
    <div className={styles.inputLabel}>{label}</div>
    <input className={styles.textField} {...inputProps} />
  </div>
);

const Login = () => {
  const [error, setError] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onEnter = ({ key }: KeyboardEvent<HTMLInputElement>) =>
    key === "Enter" && submit();
  const submit = () => {
    if (!id) {
      setError("아이디를 입력해주세요");
    } else if (!password) {
      setError("패스워드를 입력해주세요");
    } else if (id !== "admin" || password !== "admin") {
      setError("아이디 또는 패스워드를 잘못 입력했습니다.");
    } else {
      sessionStorage.setItem("logged", "Y");
      router.push("/admin");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <div className={styles.title}>관리자 페이지</div>
        <div className={styles.form}>
          <Input
            label="아이디"
            type="text"
            onChange={(e) => setId(e.target.value)}
            onKeyPress={onEnter}
          />
          <Input
            label="비밀번호"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={onEnter}
          />
          <div className={styles.error}>{error}</div>
          <button className={styles.submit}>로그인</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
