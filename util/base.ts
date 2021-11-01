import dayjs from "dayjs";

export const openLink = (link: string) => {
  const ele = document.createElement("a");
  ele.setAttribute("href", link);
  ele.setAttribute("target", "_blank");

  ele.click();
};

export const downloadPdf = () => {
  const ele = document.createElement("a");
  ele.setAttribute("href", "/download/betafesta.pdf");
  ele.setAttribute(
    "download",
    "2021 BETA 페스티벌 창업경진대회_참가자 모집 공고문.pdf"
  );

  ele.click();
};

export const formatDate = (date: Date) => dayjs(date).format("YYYY-MM-DD");
