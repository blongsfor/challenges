"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/random-characters";
exports.ids = ["pages/api/random-characters"];
exports.modules = {

/***/ "chance":
/*!*************************!*\
  !*** external "chance" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("chance");

/***/ }),

/***/ "(api)/./pages/api/random-characters.js":
/*!****************************************!*\
  !*** ./pages/api/random-characters.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ \"chance\");\n/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);\n\nconst chance = new (chance__WEBPACK_IMPORTED_MODULE_0___default())();\nfunction handler(request, response) {\n    const character = {\n        firstName: chance.first(),\n        lastName: chance.last(),\n        geoHash: chance.geohash(),\n        twittername: chance.twitter()\n    };\n    response.status(200).json(character);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmFuZG9tLWNoYXJhY3RlcnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRCO0FBRTVCLE1BQU1DLFNBQVMsSUFBSUQsK0NBQU1BO0FBRVYsU0FBU0UsUUFBUUMsT0FBTyxFQUFFQyxRQUFRO0lBQy9DLE1BQU1DLFlBQVk7UUFDaEJDLFdBQVdMLE9BQU9NO1FBQ2xCQyxVQUFVUCxPQUFPUTtRQUNqQkMsU0FBU1QsT0FBT1U7UUFDaEJDLGFBQWFYLE9BQU9ZO0lBQ3RCO0lBQ0FULFNBQVNVLE9BQU8sS0FBS0MsS0FBS1Y7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLWFwaS1yb3V0ZXNfcmFuZG9tLWNoYXJhY3Rlci8uL3BhZ2VzL2FwaS9yYW5kb20tY2hhcmFjdGVycy5qcz82MGRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFuY2UgZnJvbSBcImNoYW5jZVwiO1xuXG5jb25zdCBjaGFuY2UgPSBuZXcgQ2hhbmNlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgY29uc3QgY2hhcmFjdGVyID0ge1xuICAgIGZpcnN0TmFtZTogY2hhbmNlLmZpcnN0KCksXG4gICAgbGFzdE5hbWU6IGNoYW5jZS5sYXN0KCksXG4gICAgZ2VvSGFzaDogY2hhbmNlLmdlb2hhc2goKSxcbiAgICB0d2l0dGVybmFtZTogY2hhbmNlLnR3aXR0ZXIoKSxcbiAgfTtcbiAgcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbihjaGFyYWN0ZXIpO1xufVxuIl0sIm5hbWVzIjpbIkNoYW5jZSIsImNoYW5jZSIsImhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJjaGFyYWN0ZXIiLCJmaXJzdE5hbWUiLCJmaXJzdCIsImxhc3ROYW1lIiwibGFzdCIsImdlb0hhc2giLCJnZW9oYXNoIiwidHdpdHRlcm5hbWUiLCJ0d2l0dGVyIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/random-characters.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/random-characters.js"));
module.exports = __webpack_exports__;

})();