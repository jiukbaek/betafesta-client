import Image from "components/Image";
import clsx from "clsx";
import { useState } from "react";

import styles from "./SectionHeader.module.scss";

interface SliderProp {
  images: Array<string>;
}

const Slider: React.FC<SliderProp> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);
  const isFirst = () => index === 0;
  const isLast = () => index === images.length - 1;

  return (
    <div className={styles.container}>
      <div className={styles.controller}>
        {!isFirst() && (
          <div
            className={styles.prev}
            onClick={() =>
              setIndex((prev) => Math.abs(prev - 1) % images.length)
            }
          >
            <Image
              src="/images/icon-prev.svg"
              width="180"
              height="180"
              alt="prev"
            />
          </div>
        )}
        {!isLast() && (
          <div
            className={styles.next}
            onClick={() => setIndex((prev) => (prev + 1) % images.length)}
          >
            <Image
              src="/images/icon-next.svg"
              width="180"
              height="180"
              alt="next"
            />
          </div>
        )}
        <div className={styles.nav}>
          {images.map((_, i) => (
            <div
              className={clsx(styles.point, i === index && styles.active)}
              key={i}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
      <div className={styles.imageDisplay}>
        <div
          className={styles.images}
          style={{ transform: `translateX(-${index * 100}vw)` }}
        >
          {images.map((src, i) => (
            <div key={i} className={styles.image}>
              <Image src={src} width="3840" height="2060" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SectionHeader = () => {
  return (
    <div>
      <Slider
        images={["/images/image-poster1.png", "/images/image-poster2.png"]}
      />
    </div>
  );
};
