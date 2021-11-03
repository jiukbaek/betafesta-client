import axios from "axios";
import Layout from "pages/admin/layout";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "pages/admin/board/board.module.scss";
import { formatDate } from "util/base";

const Detail = () => {
  const {
    query: { id },
    asPath,
  } = useRouter();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/board/${id}`)
        .then(({ data }) => setItem(data));
    }
  }, [id]);

  return (
    item && (
      <Layout>
        <div className={styles.contentContainer}>
          <div className={styles.title}>공지사항</div>
          <div className={styles.contentTop}>
            <div className={styles.contentTitle}>{item.title}</div>
            <div className={styles.contentCreated}>
              {formatDate(item.createdAt)}
            </div>
          </div>
          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: item.content }} />
          </div>
          <div className={styles.buttons}>
            <div onClick={() => router.push(`${asPath}/edit`)}>수정</div>
            <div onClick={() => router.push("/admin/board")}>목록</div>
          </div>
        </div>
      </Layout>
    )
  );
};

export default Detail;
