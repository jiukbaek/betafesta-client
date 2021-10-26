import Image from "components/Image";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import styles from "./SectionHeader.module.scss";

interface SliderProp {
  images: Array<string>;
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

const Slider: React.FC<SliderProp> = ({ images }) => {
  const isMobile = useMobile();
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
              <Image
                src={src}
                width={isMobile ? "768" : "3840"}
                height={isMobile ? "1367" : "2160"}
                alt="image"
              />
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
      <div className={styles.sliderDesktop}>
        <Slider
          images={["/images/image-poster1.png", "/images/image-poster2.png"]}
        />
      </div>
      <div className={styles.sliderMobile}>
        <Slider
          images={[
            "/images/image-poster1-mobile.png",
            "/images/image-poster2-mobile.png",
          ]}
        />
      </div>
    </div>
  );
};
