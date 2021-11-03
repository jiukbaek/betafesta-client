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
    axios
      .get("http://betafesta.kr:3000/auth/me", {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      })
      .catch(() => router.push("/admin/login"));
  }, []);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://betafesta.kr:3000/board/${id}`)
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
          {item.files.length > 0 && (
            <div style={{ margin: "20px 0" }}>
              <div style={{ fontSize: 18 }}>첨부파일</div>
              <div>
                {item.files.map((file: any) => (
                  <div
                    style={{ cursor: "pointer" }}
                    key={file.id}
                    onClick={() =>
                      window.location.assign(
                        `http://betafesta.kr:3000/board/file/${file.id}`
                      )
                    }
                  >
                    {file.originalName}
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className={styles.buttons}>
            <div onClick={() => router.push(`${asPath}/edit`)}>수정</div>
            <div onClick={() => router.push("/admin/board")}>목록</div>
            <div
              onClick={() =>
                confirm("삭제하시겠습니까?") &&
                axios
                  .delete(`http://betafesta.kr:3000/board/${item.id}`, {
                    headers: {
                      Authorization: `Bearer ${sessionStorage.getItem(
                        "token"
                      )}`,
                    },
                  })
                  .then(() => {
                    alert("삭제되었습니다.");
                    router.push("/admin/board");
                  })
                  .catch(() => alert("예기치 못한 이유로 삭제되지 않았습니다"))
              }
            >
              삭제
            </div>
          </div>
        </div>
      </Layout>
    )
  );
};

export default Detail;
