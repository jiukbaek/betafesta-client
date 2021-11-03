import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Layout from "components/layout/Layout";
import Image from "components/Image";
import { formatDate, openLink } from "util/base";

import styles from "./Detail.module.scss";

const Detail = () => {
  const [item, setItem] = useState<any>(null);
  const { query, push } = useRouter();

  useEffect(() => {
    if (query.id) {
      axios
        .get(`http://localhost:3000/board/${query.id}`)
        .then(({ data }) => setItem(data));
    }
  }, [query]);

  return (
    item && (
      <Layout>
        <div className={styles.container}>
          <div className={styles.display}>
            <div className={styles.detail}>
              <div className={styles.header}>
                <div className={styles.headerTitle}>{item.title}</div>
                <div className={styles.headerDate}>
                  {formatDate(item.createdAt)}
                </div>
              </div>
              <div className={styles.detailContent}>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
              {item.files.length > 0 && (
                <div className={styles.files}>
                  {item.files.map((file: any) => (
                    <div
                      className={styles.file}
                      key={file.id}
                      onClick={() =>
                        window.location.assign(
                          `http://localhost:3000/board/file/${file.id}`
                        )
                      }
                    >
                      <div>{file.originalName}</div>
                      <div className={styles.fileDownload}>
                        <Image
                          src="/images/icon-download.png"
                          width="48"
                          height="48px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className={styles.buttons} onClick={() => push("/notice")}>
                <div>목록</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  );
};

export default Detail;
