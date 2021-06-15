$(function () {
  $("button").click(() => {
    sendMessage("点击了<button>");
  });
  $("a").click(() => {
    sendMessage("点击了<a>");
  });
});

function sendMessage(val) {
  console.info("content.js", val);

  chrome.extension.sendMessage({ content: val }, function (d) {
    console.log(d); // 将返回信息打印到控制台里
  });
}
