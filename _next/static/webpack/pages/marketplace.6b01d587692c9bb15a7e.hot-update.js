self["webpackHotUpdate_N_E"]("pages/marketplace",{

/***/ "./components/PartnerCard.js":
/*!***********************************!*\
  !*** ./components/PartnerCard.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\components\\PartnerCard.js",
    _this = undefined;



var PartnerCard = function PartnerCard(_ref) {
  var partner = _ref.partner,
      industry = _ref.industry;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "partnerCard",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "cardTop",
        style: {
          backgroundImage: "url(\"".concat(partner.image, "\"")
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: "logo",
          src: partner.logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "cardBottom",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: partner.name.toUpperCase()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "description",
          children: partner.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "cardTag",
        children: industry.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, _this);
};

_c = PartnerCard;
/* harmony default export */ __webpack_exports__["default"] = (PartnerCard);

var _c;

$RefreshReg$(_c, "PartnerCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXJ0bmVyQ2FyZC5qcyJdLCJuYW1lcyI6WyJQYXJ0bmVyQ2FyZCIsInBhcnRuZXIiLCJpbmR1c3RyeSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwibG9nbyIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQTJCO0FBQUEsTUFBeEJDLE9BQXdCLFFBQXhCQSxPQUF3QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUMzQyxzQkFDSTtBQUFJLGFBQVMsRUFBQyxhQUFkO0FBQUEsMkJBQ0k7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUF5QixhQUFLLEVBQUU7QUFBRUMseUJBQWUsa0JBQVVGLE9BQU8sQ0FBQ0csS0FBbEI7QUFBakIsU0FBaEM7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFzQixhQUFHLEVBQUVILE9BQU8sQ0FBQ0k7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBS0osT0FBTyxDQUFDSyxJQUFSLENBQWFDLFdBQWI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFDLGFBQWI7QUFBQSxvQkFDS04sT0FBTyxDQUFDTztBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFVSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGtCQUNLTixRQUFRLENBQUNJO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtCSCxDQW5CRDs7S0FBTU4sVztBQXFCTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXJrZXRwbGFjZS42YjAxZDU4NzY5MmM5YmIxNWE3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFBhcnRuZXJDYXJkID0gKHsgcGFydG5lciwgaW5kdXN0cnkgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdwYXJ0bmVyQ2FyZCc+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRUb3AnIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7cGFydG5lci5pbWFnZX1cImAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPXtwYXJ0bmVyLmxvZ299IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZEJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57cGFydG5lci5uYW1lLnRvVXBwZXJDYXNlKCl9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFydG5lci5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFRhZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmR1c3RyeS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRuZXJDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=