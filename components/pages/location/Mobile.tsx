import Image from "components/Image";

import styles from "./Location.module.scss";

const Mobile = () => (
  <div className={styles.mContainer}>
    <div>
      <div className={styles.mHead}>
        <div>출차 노선 |</div>
        <div className={styles.mHeadMiddle}>
          안동그랜드호텔 ▶ 국립안동대학교 ▶ 모디684 ▶ 가톨릭상지대학교 ▶
          안동과학대학교
        </div>
        <div className={styles.mHeadDate} style={{ color: "#ff537f" }}>
          18일 ▶
        </div>
        <div className={styles.mHeadTime}>
          <div>1차 출차</div>
          <div>15:30</div>
          <div>2차 출차</div>
          <div>18:30</div>
        </div>
        <div className={styles.mHeadDate} style={{ color: "#6e50d4" }}>
          19일 ▶
        </div>
        <div className={styles.mHeadTime}>
          <div>1차 출차</div>
          <div>14:30</div>
          <div>2차 출차</div>
          <div>17:30</div>
        </div>
      </div>
    </div>
    <div>
      <div className={styles.mTitle} style={{ backgroundColor: "#ff537f" }}>
        노선 ①
      </div>
      <div className={styles.mCourse}>
        <div className={styles.mCourseHead}>
          <div>
            <Image src="/images/icon-point1-1.png" width="179" height="219" />
          </div>
          <div>&lt;정차구간&gt;</div>
          <div>
            <Image src="/images/icon-point1-2.png" width="179" height="219" />
          </div>
        </div>
        <div>
          <div className={styles.mCourseLine} />
          <div className={styles.mCourseTime}>
            <div className={styles.mCourseTimeArea} />
            <div className={styles.mCourseTimeText}>09:30</div>
          </div>
          <div className={styles.mCourseImage}>
            <Image src="/images/image-location1.png" width="300" height="300" />
          </div>
          <div className={styles.mCourseTime}>
            <div className={styles.mCourseTimeArea} />
            <div className={styles.mCourseTimeText}>11:50</div>
          </div>
        </div>
        <div>
          <div className={styles.mNext}>
            <Image src="/images/icon-next-1-m.png" width="127" height="89" />
          </div>
        </div>
        <div>
          <div className={styles.mCourseLine} />
          <div className={styles.mCourseTime}>
            <div className={styles.mCourseTimeArea} />
            <div className={styles.mCourseTimeText}>10:00</div>
          </div>
          <div className={styles.mCourseImage}>
            <Image src="/images/image-location2.png" width="300" height="300" />
          </div>
          <div className={styles.mCourseTime}>
            <div className={styles.mCourseTimeArea} />
            <div className={styles.mCourseTimeText}>12:10</div>
          </div>
        </div>
        <div>
          <div className={styles.mNext}>
            <Image src="/images/icon-next-1-m.png" width="127" height="89" />
          </div>
        </div>
        <div>
          <div className={styles.mCourseLine} />
          <div className={styles.mCourseTime}>
            <div className={styles.mCourseTimeArea} />
            <div className={styles.mCourseTimeText}>10:10</div>
          </div>
          <div className={styles.mCourseImage}>
            <Image src="/images/image-location3.png" width="300" height="300" />
          </div>
          <div className={styles.mCourseTime}>
            <div className={styles.mCourseTimeArea} />
            <div className={styles.mCourseTimeText}>12:20</div>
          </div>
        </div>
        <div>
          <div className={styles.mNext}>
            <Image src="/images/icon-next-1-m.png" width="127" height="89" />
          </div>
        </div>
        <div style={{ color: "#ff537f", fontFamily: "NanumEB" }}>
          <div className={styles.mCourseLine} />
          <div
            className={styles.mCourseTime}
            style={{ borderWidth: 2, borderColor: "#ff537f" }}
          >
            <div className={styles.mCourseTimeArea} />
            <div className={styles.mCourseTimeText}>10:20</div>
          </div>
          <div className={styles.mCourseImage}>
            <Image src="/images/image-location4.png" width="300" height="300" />
          </div>
          <div
            className={styles.mCourseTime}
            style={{ borderWidth: 2, borderColor: "#ff537f" }}
          >
            <div className={styles.mCourseTimeArea} />
            <div className={styles.mCourseTimeText}>12:30</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className={styles.mTitle} style={{ backgroundColor: "#6e50d4" }}>
        노선 ②
      </div>
      <div className={styles.mCourse}>
        <div className={styles.mCourseHead}>
          <div>
            <Image src="/images/icon-point2-1.png" width="179" height="219" />
          </div>
          <div style={{ color: "#6e50d4" }}>&lt;정차구간&gt;</div>
          <div>
            <Image src="/images/icon-point2-2.png" width="179" height="219" />
          </div>
        </div>
        <div>
          <div className={styles.mCourseLine} />
          <div className={styles.mCourseTime}>
            <div className={styles.mCourseTimeArea} />
            <div className={styles.mCourseTimeText}>10:30</div>
          </div>
          <div className={styles.mCourseImage}>
            <Image
              src="/images/image-location2_1.png"
              width="300"
              height="300"
            />
          </div>
          <div className={styles.mCourseTime}>
            <div className={styles.mCourseTimeArea} />
            <div className={styles.mCourseTimeText}>12:40</div>
          </div>
        </div>
        <div>
          <div className={styles.mNext}>
            <Image src="/images/icon-next-1-m.png" width="127" height="89" />
          </div>
        </div>
        <div style={{ color: "#6e50d4", fontFamily: "NanumEB" }}>
          <div className={styles.mCourseLine} />
          <div
            className={styles.mCourseTime}
            style={{ borderWidth: 2, borderColor: "#6e50d4" }}
          >
            <div className={styles.mCourseTimeArea} />
            <div className={styles.mCourseTimeText}>11:00</div>
          </div>
          <div className={styles.mCourseImage}>
            <Image src="/images/image-location4.png" width="300" height="300" />
          </div>
          <div
            className={styles.mCourseTime}
            style={{ borderWidth: 2, borderColor: "#6e50d4" }}
          >
            <div className={styles.mCourseTimeArea} />
            <div className={styles.mCourseTimeText}>13:00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Mobile;
