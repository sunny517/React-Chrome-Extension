export default function popup(myFun) {
  // eslint-disable-next-line
  chrome.extension.onMessage.addListener(function (
    objRequest,
    _,
    sendResponse
  ) {
    console.info(111, objRequest);

    myFun(objRequest);
  });
}
