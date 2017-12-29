import { isFunction } from "./check";

export function listenVisibilityState(showCb, hideCb) {
  // 各种浏览器兼容
  var hidden, state, visibilityChange;
  if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
    state = "visibilityState";
  } else if (typeof document.mozHidden !== "undefined") {
    hidden = "mozHidden";
    visibilityChange = "mozvisibilitychange";
    state = "mozVisibilityState";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
    state = "msVisibilityState";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
    state = "webkitVisibilityState";
  }

  // 添加监听器，在title里显示状态变化
  document.addEventListener(
    visibilityChange,
    function() {
      console.log(document[state], "====");
      if (document[state] === "hidden") {
        document.title = "记得回来吃饭"; // 页面不可见时 ，可换成你的 title
        isFunction(hideCb) && hideCb();
      } else {
        document.title = "酱辛世家"; // 页面可见

        isFunction(showCb) && showCb();
      }
    },
    false
  );
}
