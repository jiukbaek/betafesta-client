import dayjs from "dayjs";

export const openLink = (link: string) => {
  const ele = document.createElement("a");
  ele.setAttribute("href", link);
  ele.setAttribute("target", "_blank");

  ele.click();
};

export const download = ({ path = "", fileName = "" }) => {
  console.log(fileName, path);
  const ele = document.createElement("a");
  ele.setAttribute("href", path);
  ele.setAttribute("download", fileName);

  console.log(ele);

  ele.click();
};

export const formatDate = (date: Date) => dayjs(date).format("YYYY-MM-DD");
