export const openLink = (link: string) => {
  const ele = document.createElement("a");
  ele.setAttribute("href", link);
  ele.setAttribute("target", "_blank");

  ele.click();
};
