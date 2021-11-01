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
    axios.get("http://localhost:3000/board").then(({ data }) => setList(data));
  }, []);

  return (
    <Layout>
      <div>
        <div>공지사항</div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div>번호</div>
            <div>제목</div>
            <div>작성 일</div>
          </div>
          {list.map((item) => (
            <div
              key={item.id}
              className={styles.item}
              onClick={() => router.push(`/admin/board/${item.id}`)}
            >
              <div>{item.id}</div>
              <div>{item.title}</div>
              <div>{formatDate(item.createdAt)}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Board;
