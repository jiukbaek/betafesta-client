import axios from "axios";
import Layout from "components/layout/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { formatDate } from "util/base";

import styles from "./Notice.module.scss";

const Notice = () => {
  const { apiHost } = process.env;
  const router = useRouter();
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    axios.get(`${apiHost}/board`).then(({ data }) => setList(data));
  }, []);

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
            {list.length > 0 ? (
              list.map((item: any, index: number) => (
                <div
                  className={styles.itemRow}
                  key={item.id}
                  onClick={() => router.push(`${router.asPath}/${item.id}`)}
                >
                  <div>{list.length - index}</div>
                  <div>{item.title}</div>
                  <div>{formatDate(item.createdAt)}</div>
                </div>
              ))
            ) : (
              <div className={styles.emptyNotice}>
                등록된 공지사항이 없습니다.
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notice;
