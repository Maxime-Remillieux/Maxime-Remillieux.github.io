self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/DropdownLink.js":
/*!************************************!*\
  !*** ./components/DropdownLink.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\components\\DropdownLink.js",
    _this = undefined,
    _s = $RefreshSig$();




var DropdownLink = function DropdownLink(_ref) {
  _s();

  var children = _ref.children,
      label = _ref.label;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      focus = _useState[0],
      setFocus = _useState[1];

  var toggleFocus = function toggleFocus(e) {
    e.preventDefault();
    setFocus(!focus);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "dropdown",
    "data-focus": focus,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      onClick: toggleFocus,
      className: "title" + (focus ? " focus" : ""),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this), focus ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowUp, {
        size: "20px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 42
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IoIosArrowDown, {
        size: "20px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 73
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this), focus && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "content" + (focus ? " focus" : ""),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, _this);
};

_s(DropdownLink, "JcMW5INHEFpLqO0Ud660bC8g4FE=");

_c = DropdownLink;
/* harmony default export */ __webpack_exports__["default"] = (DropdownLink);

var _c;

$RefreshReg$(_c, "DropdownLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bkxpbmsuanMiXSwibmFtZXMiOlsiRHJvcGRvd25MaW5rIiwiY2hpbGRyZW4iLCJsYWJlbCIsInVzZVN0YXRlIiwiZm9jdXMiLCJzZXRGb2N1cyIsInRvZ2dsZUZvY3VzIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ2hCQywrQ0FBUSxDQUFDLEtBQUQsQ0FEUTtBQUFBLE1BQ25DQyxLQURtQztBQUFBLE1BQzVCQyxRQUQ0Qjs7QUFHMUMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUgsWUFBUSxDQUFDLENBQUNELEtBQUYsQ0FBUjtBQUNILEdBSEQ7O0FBS0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixrQkFBWUEsS0FBdEM7QUFBQSw0QkFDSTtBQUFLLGFBQU8sRUFBRUUsV0FBZDtBQUEyQixlQUFTLEVBQUUsV0FBV0YsS0FBSyxHQUFHLFFBQUgsR0FBYyxFQUE5QixDQUF0QztBQUFBLDhCQUNJO0FBQUEsa0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBQ3FCRSxLQUFLLGdCQUFHLDhEQUFDLHdEQUFEO0FBQWMsWUFBSSxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxnQkFBa0MsOERBQUMsY0FBRDtBQUFnQixZQUFJLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUlLQSxLQUFLLGlCQUNGO0FBQUssZUFBUyxFQUFFLGFBQWFBLEtBQUssR0FBRyxRQUFILEdBQWMsRUFBaEMsQ0FBaEI7QUFBQSxnQkFDS0g7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFZSCxDQXBCRDs7R0FBTUQsWTs7S0FBQUEsWTtBQXNCTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MzY1MzQyNzM0Y2I4MjY4ODM1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93VXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIlxyXG5cclxuXHJcbmNvbnN0IERyb3Bkb3duTGluayA9ICh7IGNoaWxkcmVuLCBsYWJlbCB9KSA9PiB7XHJcbiAgICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVGb2N1cyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEZvY3VzKCFmb2N1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24nIGRhdGEtZm9jdXM9e2ZvY3VzfSA+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17dG9nZ2xlRm9jdXN9IGNsYXNzTmFtZT17XCJ0aXRsZVwiICsgKGZvY3VzID8gXCIgZm9jdXNcIiA6IFwiXCIpfT5cclxuICAgICAgICAgICAgICAgIDxoMj57bGFiZWx9PC9oMj57Zm9jdXMgPyA8SW9Jb3NBcnJvd1VwIHNpemU9XCIyMHB4XCIgLz4gOiA8SW9Jb3NBcnJvd0Rvd24gc2l6ZT1cIjIwcHhcIiAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtmb2N1cyAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29udGVudFwiICsgKGZvY3VzID8gXCIgZm9jdXNcIiA6IFwiXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duTGluazsiXSwic291cmNlUm9vdCI6IiJ9