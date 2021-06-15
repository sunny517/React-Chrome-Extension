chrome.contextMenus.create(
  {
    type: "normal",
    title: "跳转百度翻译",
    id: "menuDemo",
    contexts: ["selection"],
    onclick: genericOnClick,
  },
  function () {
    console.log("contextMenus are create.");
  }
);

function genericOnClick(info, tab) {
  let log = JSON.parse(localStorage.getItem("tLog"));
  let tLog = log ? log : [];
  localStorage.setItem("tLog", JSON.stringify([...tLog, info.selectionText]));
  // chrome.extension.sendMessage(
  //   { background: info.selectionText },
  //   function (d) {
  //     console.log(d);
  //   }
  // );

  chrome.tabs.create({
    url:
      "https://fanyi.baidu.com/?aldtype=16047#zh/en/" +
      encodeURI(info.selectionText),
  });
}

chrome.extension.onMessage.addListener(function (objRequest, _, sendResponse) {
  var strText = objRequest.content;
  console.info(strText);
  sendResponse({ status: 200 });
});
