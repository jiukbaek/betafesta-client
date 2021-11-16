import Layout from "components/layout/Layout";
import Image from "components/Image";

import data from "public/consult.json";
import styles from "./Consult.module.scss";
import Button from "components/Button";
import { useEffect, useState } from "react";
import useMobile from "util/useMobile";
import { openLink } from "util/base";

const Consult = () => {
  const [active, setActive] = useState(null);
  const isMobile = useMobile();
  useEffect(() => {}, [isMobile]);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.display}>
          <div className={styles.title}>START-UP CONSULTING</div>
          <div className={styles.company}>
            {data.consults.length <= 0
              ? Array(3)
                  .fill(null)
                  .map((_, index) => (
                    <div className={styles.item} key={index}>
                      <div className={styles.itemArea} />
                      <div className={styles.itemImage}>
                        <Image
                          src="/images/logo-color.png"
                          width="500"
                          height="500"
                          objectFit="contain"
                        />
                      </div>
                      <div className={styles.itemEvent} />
                      <div className={styles.itemEventMobile} />
                      <div className={styles.itemActive}>
                        <div className={styles.itemCompany}>준비 중</div>
                      </div>
                    </div>
                  ))
              : data.consults.map(({ company, logo, field, link }) => (
                  <div className={styles.item} key={company}>
                    <div className={styles.itemArea} />
                    <div className={styles.itemImage}>
                      <Image src={`/images/consult/${logo}`} width="500" height="500" />
                    </div>
                    <div className={styles.itemEvent} />
                    <div className={styles.itemEventMobile} />
                    <div className={styles.itemActive}>
                      <div className={styles.itemCompany}>{company}</div>
                      <div className={styles.itemField}>{field}</div>
                      <Button className={styles.itemButton} onClick={() => openLink(link)}>
                        예약하기
                      </Button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Consult;
