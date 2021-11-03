import axios from "axios";
import router, { useRouter } from "next/router";
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
  const { apiHost } = process.env;
  const router = useRouter();
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
    }
    axios
      .post(`${apiHost}/auth/login`, { username: id, password })
      .then(({ data }) => {
        sessionStorage.setItem("token", data.access_token);
        router.push("/admin");
      })
      .catch(() => setError("계정 정보가 일치하지 않습니다."));
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
          <button className={styles.submit} onClick={submit}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
