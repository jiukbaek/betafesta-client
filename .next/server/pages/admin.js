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
exports.id = "pages/admin";
exports.ids = ["pages/admin"];
exports.modules = {

/***/ "./pages/admin/index.tsx":
/*!*******************************!*\
  !*** ./pages/admin/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Admin = () => {\n  const {\n    apiHost\n  } = process.env;\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${apiHost}/auth/me`, {\n      headers: {\n        Authorization: `Bearer ${sessionStorage.getItem(\"token\")}`\n      }\n    }).then(() => next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/admin/analytics\")).catch(() => next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/admin/login\"));\n  }, []);\n  return null;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRyxLQUFLLEdBQUcsTUFBTTtBQUNsQixRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBY0MsT0FBTyxDQUFDQyxHQUE1QjtBQUVBSixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZEYsSUFBQUEsZ0RBQUEsQ0FDUSxHQUFFSSxPQUFRLFVBRGxCLEVBQzZCO0FBQ3pCSSxNQUFBQSxPQUFPLEVBQUU7QUFBRUMsUUFBQUEsYUFBYSxFQUFHLFVBQVNDLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixPQUF2QixDQUFnQztBQUEzRDtBQURnQixLQUQ3QixFQUlHQyxJQUpILENBSVEsTUFBTVgsdURBQUEsQ0FBWSxrQkFBWixDQUpkLEVBS0dhLEtBTEgsQ0FLUyxNQUFNYix1REFBQSxDQUFZLGNBQVosQ0FMZjtBQU1ELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxTQUFPLElBQVA7QUFDRCxDQWJEOztBQWVBLGlFQUFlRSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmV0YWZlc3RhLWNsaWVudC8uL3BhZ2VzL2FkbWluL2luZGV4LnRzeD9iNjBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQWRtaW4gPSAoKSA9PiB7XG4gIGNvbnN0IHsgYXBpSG9zdCB9ID0gcHJvY2Vzcy5lbnY7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChgJHthcGlIb3N0fS9hdXRoL21lYCwge1xuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIil9YCB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHJvdXRlci5wdXNoKFwiL2FkbWluL2FuYWx5dGljc1wiKSlcbiAgICAgIC5jYXRjaCgoKSA9PiByb3V0ZXIucHVzaChcIi9hZG1pbi9sb2dpblwiKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwicm91dGVyIiwidXNlRWZmZWN0IiwiQWRtaW4iLCJhcGlIb3N0IiwicHJvY2VzcyIsImVudiIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidGhlbiIsInB1c2giLCJjYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admin/index.tsx"));
module.exports = __webpack_exports__;

})();