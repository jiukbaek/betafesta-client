import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Layout from "pages/admin/layout";

import styles from "./board.module.scss";
import { formatDate } from "util/base";

const Board = () => {
  const router = useRouter();
  const [list, setList] = useState<Array<any>>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/me", {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      })
      .catch(() => router.push("/admin/login"));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/board").then(({ data }) => setList(data));
  }, []);

  return (
    <Layout>
      <div>
        <div className={styles.title}>공지사항</div>
        <div className={styles.list}>
          <div className={styles.itemHead}>
            <div>번호</div>
            <div>제목</div>
            <div>작성 일</div>
          </div>
          {list.map((item) => (
            <div
              key={item.id}
              className={styles.itemRow}
              onClick={() => router.push(`/admin/board/${item.id}`)}
            >
              <div>{item.id}</div>
              <div>{item.title}</div>
              <div>{formatDate(item.createdAt)}</div>
            </div>
          ))}
        </div>
        <div className={styles.buttons}>
          <div onClick={() => router.push("/admin/board/write")}>글 쓰기</div>
        </div>
      </div>
    </Layout>
  );
};

export default Board;
