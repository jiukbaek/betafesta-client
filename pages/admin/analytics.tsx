import axios from "axios";
import { max } from "lodash";
import Image from "components/Image";
import dayjs from "dayjs";
import Chart from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./analytics.module.scss";
import Layout from "./layout";
import { formatDate } from "util/base";
import router from "next/router";

const VisitorChart = ({
  dateVisitor,
}: {
  dateVisitor: Array<Record<string, any>>;
}) => {
  const [chart, setChart] = useState<any>();
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current) {
      const canvas = ref.current;
      const maxCount = max(dateVisitor.map(({ count }) => parseInt(count)));
      const options: any = maxCount
        ? {
            scales: {
              y: {
                ticks: {
                  stepSize: "1".padEnd(String(maxCount).length, "0"),
                },
                min: 0,
                max:
                  maxCount + parseInt("1".padEnd(String(maxCount).length, "0")),
              },
            },
          }
        : {};
      if (chart) {
        chart.destroy();
      }
      setChart(
        new Chart(canvas, {
          type: "line",
          data: {
            labels: dateVisitor.map(({ date }) => formatDate(date)),
            datasets: [
              {
                label: "방문자 수",
                data: dateVisitor.map(({ count }) => count),
                backgroundColor: "rgb(75, 192, 192)",
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                borderWidth: 1,
              },
            ],
          },
          options,
        })
      );
    }
  }, [dateVisitor]);

  return <canvas ref={ref} className={styles.chart}></canvas>;
};

const Main = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [loading, setLoading] = useState<boolean>(false);
  const [report, setReport] = useState<Record<string, any>>();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/me", {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      })
      .then(() => router.push("/admin/analytics"))
      .catch(() => router.push("/admin/login"));
  }, []);

  const fetchReport = () => {
    if (!startDate || !endDate) {
      alert("날짜를 선택 해주세요");
    } else if (startDate > endDate) {
      alert("날짜 범위가 올바르지 않습니다.");
    } else {
      setLoading(true);
      axios
        .get(
          `http://localhost:3000/analytics/report?startDate=${formatDate(
            startDate
          )}&endDate=${formatDate(endDate)}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        )
        .then(({ data }) => {
          setLoading(false);
          setReport(data);
        })
        .catch(() => router.push("/admin"));
    }
  };

  useEffect(() => {
    if (startDate && endDate) {
      fetchReport();
    }
  }, []);

  return (
    <Layout>
      {loading && (
        <div className={styles.loading}>
          <div className={styles.loadingIcon}>
            <Image
              src="/images/icon-loading.svg"
              width="48"
              height="48"
              alt="loading"
            />
          </div>
        </div>
      )}
      <div className={styles.title}>방문자 통계</div>
      <div className={styles.dates}>
        <div className={styles.dateTitle}>기간설정</div>
        <div className={styles.picker}>
          <DatePicker
            onChange={(date: Date) => setStartDate(date)}
            selected={startDate}
            dateFormat="yyyy-MM-dd"
            className={styles.input}
          />
        </div>
        <div className={styles.divide}>~</div>
        <div className={styles.picker}>
          <DatePicker
            onChange={(date: Date) => setEndDate(date)}
            selected={endDate}
            dateFormat="yyyy-MM-dd"
            className={styles.input}
          />
        </div>
        <div onClick={fetchReport} className={styles.button}>
          검색
        </div>
      </div>
      <div className={styles.reportContainer}>
        {report && (
          <div>
            <div className={styles.visitor}>
              <div>방문자 수</div>
              <div className={styles.visitorCount}>{report.totalVisitor}</div>
            </div>
            <div>
              <VisitorChart dateVisitor={report.dateVisitor} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Main;
