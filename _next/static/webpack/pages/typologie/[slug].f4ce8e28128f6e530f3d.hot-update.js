self["webpackHotUpdate_N_E"]("pages/typologie/[slug]",{

/***/ "./components/offres/Block.js":
/*!************************************!*\
  !*** ./components/offres/Block.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\components\\offres\\Block.js",
    _this = undefined;




var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      size = _ref.size;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "icon",
    style: {
      fontSize: size
    },
    children: icon === "FaDesktop" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaDesktop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }, _this) : icon === "FaLayerGroup" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaLayerGroup, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }, _this) : icon === "FaPaintBrush" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaPaintBrush, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }, _this) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }, _this);
};

_c = Icon;

var Block = function Block(_ref2) {
  var block = _ref2.block;
  // const Icon = block.icon;
  // const blue = '#3055D3';
  var grey = '#2E2F3D';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "block",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: block.variant ? {
        backgroundColor: block.variant
      } : {
        backgroundColor: grey
      },
      className: "logo",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
        icon: block.icon,
        size: "27px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 120
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: block.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), typeof block.content === 'object' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: block.content.map(function (item, idx) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: item
        }, idx, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: block.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_c2 = Block;
/* harmony default export */ __webpack_exports__["default"] = (Block);

var _c, _c2;

$RefreshReg$(_c, "Icon");
$RefreshReg$(_c2, "Block");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vZmZyZXMvQmxvY2suanMiXSwibmFtZXMiOlsiSWNvbiIsImljb24iLCJzaXplIiwiZm9udFNpemUiLCJCbG9jayIsImJsb2NrIiwiZ3JleSIsInZhcmlhbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSIsImNvbnRlbnQiLCJtYXAiLCJpdGVtIiwiaWR4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9CO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM3QixzQkFDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQXNCLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUVEO0FBQVosS0FBN0I7QUFBQSxjQUNHRCxJQUFJLEtBQUssV0FBVCxnQkFDQyw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsR0FFR0EsSUFBSSxLQUFLLGNBQVQsZ0JBQ0YsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURFLEdBRUFBLElBQUksS0FBSyxjQUFULGdCQUNGLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERSxHQUVBO0FBUE47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0FaSDs7S0FBTUQsSTs7QUFjTixJQUFNSSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxRQUFlO0FBQUEsTUFBWkMsS0FBWSxTQUFaQSxLQUFZO0FBQ3pCO0FBQ0E7QUFDQSxNQUFNQyxJQUFJLEdBQUcsU0FBYjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQSw0QkFDSTtBQUFLLFdBQUssRUFBR0QsS0FBSyxDQUFDRSxPQUFQLEdBQWtCO0FBQUNDLHVCQUFlLEVBQUVILEtBQUssQ0FBQ0U7QUFBeEIsT0FBbEIsR0FBcUQ7QUFBQ0MsdUJBQWUsRUFBRUY7QUFBbEIsT0FBakU7QUFBMEYsZUFBUyxFQUFDLE1BQXBHO0FBQUEsNkJBQTJHLDhEQUFDLElBQUQ7QUFBTSxZQUFJLEVBQUVELEtBQUssQ0FBQ0osSUFBbEI7QUFBd0IsWUFBSSxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQSxnQkFBS0ksS0FBSyxDQUFDSTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixFQUdNLE9BQU9KLEtBQUssQ0FBQ0ssT0FBYixLQUEwQixRQUExQixnQkFDRTtBQUFBLGdCQUNNTCxLQUFLLENBQUNLLE9BQU4sQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSw0QkFDaEI7QUFBQSxvQkFBZUQ7QUFBZixXQUFTQyxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCO0FBQUEsT0FBbEI7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZ0JBT0U7QUFBQSxnQkFBSVIsS0FBSyxDQUFDSztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWVILENBcEJEOztNQUFNTixLO0FBc0JOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3R5cG9sb2dpZS9bc2x1Z10uZjRjZThlMjgxMjhmNmU1MzBmM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7RmFEZXNrdG9wLCBGYUxheWVyR3JvdXAsIEZhUGFpbnRCcnVzaH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuY29uc3QgSWNvbiA9ICh7IGljb24sIHNpemUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24nIHN0eWxlPXt7IGZvbnRTaXplOiBzaXplIH19PlxyXG4gICAgICAgIHtpY29uID09PSBcIkZhRGVza3RvcFwiID8gKFxyXG4gICAgICAgICAgPEZhRGVza3RvcCAvPlxyXG4gICAgICAgICkgOiBpY29uID09PSBcIkZhTGF5ZXJHcm91cFwiID8gKFxyXG4gICAgICAgICAgPEZhTGF5ZXJHcm91cCAvPlxyXG4gICAgICAgICkgOiBpY29uID09PSBcIkZhUGFpbnRCcnVzaFwiID8gKFxyXG4gICAgICAgICAgPEZhUGFpbnRCcnVzaCAvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbmNvbnN0IEJsb2NrID0gKHsgYmxvY2sgfSkgPT4ge1xyXG4gICAgLy8gY29uc3QgSWNvbiA9IGJsb2NrLmljb247XHJcbiAgICAvLyBjb25zdCBibHVlID0gJyMzMDU1RDMnO1xyXG4gICAgY29uc3QgZ3JleSA9ICcjMkUyRjNEJztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17KGJsb2NrLnZhcmlhbnQpID8ge2JhY2tncm91bmRDb2xvcjogYmxvY2sudmFyaWFudH0gOiB7YmFja2dyb3VuZENvbG9yOiBncmV5fX0gY2xhc3NOYW1lPVwibG9nb1wiPjxJY29uIGljb249e2Jsb2NrLmljb259IHNpemU9JzI3cHgnLz48L2Rpdj5cclxuICAgICAgICAgICAgPGgyPntibG9jay50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICB7IHR5cGVvZihibG9jay5jb250ZW50KSA9PT0gJ29iamVjdCcgP1xyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgYmxvY2suY29udGVudC5tYXAoKGl0ZW0sIGlkeCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT57aXRlbX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD4gOlxyXG4gICAgICAgICAgICAgICAgPHA+e2Jsb2NrLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvY2s7Il0sInNvdXJjZVJvb3QiOiIifQ==