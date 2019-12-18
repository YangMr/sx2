document.addEventListener("DOMContentLoaded",function () {
  //获取html标签
  const html = document.querySelector("html");
  //设置字体大小为文档宽度的十分之一
  let fontSize = window.innerWidth / 10;
  //判断如果字体的大小大于50，那么就给字体的大小设置为50，如果不大于，则设置字体的大小为文档的十分之一
  fontSize = fontSize > 50 ? 50 : fontSize;
  //给html元素设置字体大小
  html.style.fontSize = fontSize+ "px";
});
