import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Image from "components/Image";

import main from "public/main.json";

import styles from "./SectionHeader.module.scss";

interface SliderProp {
  data: Array<{
    image: {
      desktop: string;
      mobile: string;
    };
    link: string;
  }>;
}

const useMobile = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  const isMobile = useMediaQuery({
    query: `(max-width: 767px)`,
  });

  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);

  return mobile;
};

const Slider: React.FC<SliderProp> = ({ data }) => {
  const isMobile = useMobile();
  const [index, setIndex] = useState<number>(0);
  const isFirst = () => index === 0;
  const isLast = () => index === data.length - 1;

  return (
    <div className={styles.container}>
      <div className={styles.controller}>
        {!isFirst() && (
          <div
            className={styles.prev}
            onClick={() => setIndex((prev) => Math.abs(prev - 1) % data.length)}
          >
            <Image src="/images/icon-prev.svg" width="180" height="180" alt="prev" />
          </div>
        )}
        {!isLast() && (
          <div className={styles.next} onClick={() => setIndex((prev) => (prev + 1) % data.length)}>
            <Image src="/images/icon-next.svg" width="180" height="180" alt="next" />
          </div>
        )}
        <div className={styles.nav}>
          {data.map((_, i) => (
            <div
              className={clsx(styles.point, i === index && styles.active)}
              key={i}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
      <div className={styles.imageDisplay}>
        <div className={styles.images} style={{ transform: `translateX(-${index * 100}vw)` }}>
          {data.map(({ image, link }, i) => (
            <Link key={i} href={link}>
              <div
                key={i}
                className={styles.image}
                style={{ backgroundImage: `url(${isMobile ? image["mobile"] : image["desktop"]})` }}
              >
                <div />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SectionHeader = () => (
  <div>
    <Slider data={main.banner} />
  </div>
);
