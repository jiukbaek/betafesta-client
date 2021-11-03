import axios from "axios";
import Layout from "components/layout/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { formatDate } from "util/base";

import styles from "./Notice.module.scss";

const Notice = () => {
  const router = useRouter();
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/board").then(({ data }) => setList(data));
  }, []);

  console.log(list);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.display}>
          <div className={styles.title}>NOTICE</div>
          <div>
            <div className={styles.itemHead}>
              <div>번호</div>
              <div>제목</div>
              <div>날짜</div>
            </div>
            {list.map((item: any) => (
              <div
                className={styles.itemRow}
                key={item.id}
                onClick={() => router.push(`${router.asPath}/${item.id}`)}
              >
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{formatDate(item.createdAt)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notice;