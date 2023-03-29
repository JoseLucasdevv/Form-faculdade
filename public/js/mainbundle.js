/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var title = document.querySelector(".title h1");
function effectLetter(text) {
  var letterArray = text.innerText.split("");
  text.innerText = "";
  letterArray.map(function (item, idx) {
    setTimeout(function () {
      text.innerText += item;
    }, 200 * idx);
  });
}
effectLetter(title);
/******/ })()
;
//# sourceMappingURL=mainbundle.js.map