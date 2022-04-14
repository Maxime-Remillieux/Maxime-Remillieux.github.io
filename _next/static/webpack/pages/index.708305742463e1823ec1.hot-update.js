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
      label = _ref.label,
      type = _ref.type,
      transition = _ref.transition;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      focus = _useState[0],
      setFocus = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('click'),
      selectedType = _useState2[0],
      setSelectedType = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('height'),
      transitionType = _useState3[0],
      setTransitionType = _useState3[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (type === 'hover') {
      setSelectedType('hover');
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (transition === 'opacity') {
      setTransitionType('opacity');
    }
  }, []);

  var toggleFocus = function toggleFocus() {
    setFocus(!focus);
  };

  var handleClick = function handleClick() {
    if (selectedType === 'click') toggleFocus();
  };

  var handleMouseEnter = function handleMouseEnter() {
    if (selectedType === 'hover') setFocus(true);
  };

  var handleMouseLeave = function handleMouseLeave() {
    if (selectedType === 'hover') setFocus(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "dropdown items",
    "data-focus": focus,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      className: "title" + (focus ? " focus" : ""),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        "data-content": label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), focus ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowUp, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 67
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowDown, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 86
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "dropContent" + (focus ? " focus" : ""),
      onMouseLeave: handleMouseLeave,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, _this);
};

_s(DropdownLink, "OItsWA8S61BXSZQhp/Dm/vgpXSU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bkxpbmsuanMiXSwibmFtZXMiOlsiRHJvcGRvd25MaW5rIiwiY2hpbGRyZW4iLCJsYWJlbCIsInR5cGUiLCJ0cmFuc2l0aW9uIiwidXNlU3RhdGUiLCJmb2N1cyIsInNldEZvY3VzIiwic2VsZWN0ZWRUeXBlIiwic2V0U2VsZWN0ZWRUeXBlIiwidHJhbnNpdGlvblR5cGUiLCJzZXRUcmFuc2l0aW9uVHlwZSIsInVzZUVmZmVjdCIsInRvZ2dsZUZvY3VzIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBMkM7QUFBQTs7QUFBQSxNQUF4Q0MsUUFBd0MsUUFBeENBLFFBQXdDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUNsQ0MsK0NBQVEsQ0FBQyxLQUFELENBRDBCO0FBQUEsTUFDckRDLEtBRHFEO0FBQUEsTUFDOUNDLFFBRDhDOztBQUFBLG1CQUVwQkYsK0NBQVEsQ0FBQyxPQUFELENBRlk7QUFBQSxNQUVyREcsWUFGcUQ7QUFBQSxNQUV2Q0MsZUFGdUM7O0FBQUEsbUJBR2hCSiwrQ0FBUSxDQUFDLFFBQUQsQ0FIUTtBQUFBLE1BR3JESyxjQUhxRDtBQUFBLE1BR3JDQyxpQkFIcUM7O0FBSzVEQyxrREFBUyxDQUFDLFlBQUk7QUFDVixRQUFHVCxJQUFJLEtBQUssT0FBWixFQUFvQjtBQUNoQk0scUJBQWUsQ0FBQyxPQUFELENBQWY7QUFDSDtBQUNKLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLQUcsa0RBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBR1IsVUFBVSxLQUFLLFNBQWxCLEVBQTRCO0FBQ3hCTyx1QkFBaUIsQ0FBQyxTQUFELENBQWpCO0FBQ0g7QUFDSixHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJOLFlBQVEsQ0FBQyxDQUFDRCxLQUFGLENBQVI7QUFDSCxHQUZEOztBQUlBLE1BQU1RLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUk7QUFDcEIsUUFBR04sWUFBWSxLQUFLLE9BQXBCLEVBQ0lLLFdBQVc7QUFDbEIsR0FIRDs7QUFLQSxNQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQUk7QUFDekIsUUFBR1AsWUFBWSxLQUFLLE9BQXBCLEVBQ0lELFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDUCxHQUhEOztBQUtBLE1BQU1TLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBSTtBQUN6QixRQUFHUixZQUFZLEtBQUssT0FBcEIsRUFDSUQsUUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNQLEdBSEQ7O0FBS0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBZ0Msa0JBQVlELEtBQTVDO0FBQUEsNEJBQ0k7QUFBSyxhQUFPLEVBQUVRLFdBQWQ7QUFBMkIsa0JBQVksRUFBRUMsZ0JBQXpDO0FBQTJELGVBQVMsRUFBRSxXQUFXVCxLQUFLLEdBQUcsUUFBSCxHQUFjLEVBQTlCLENBQXRFO0FBQUEsOEJBQ0k7QUFBTSx3QkFBY0osS0FBcEI7QUFBQSxrQkFBNEJBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUM4Q0ksS0FBSyxnQkFBRyw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsZ0JBQXNCLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLUTtBQUFLLGVBQVMsRUFBRSxpQkFBaUJBLEtBQUssR0FBRyxRQUFILEdBQWMsRUFBcEMsQ0FBaEI7QUFBeUQsa0JBQVksRUFBRVUsZ0JBQXZFO0FBQUEsZ0JBQ0tmO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBWUgsQ0EvQ0Q7O0dBQU1ELFk7O0tBQUFBLFk7QUFpRE4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzA4MzA1NzQyNDYzZTE4MjNlYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93VXAsICBJb0lvc0Fycm93RG93bn0gZnJvbSBcInJlYWN0LWljb25zL2lvXCJcclxuXHJcblxyXG5jb25zdCBEcm9wZG93bkxpbmsgPSAoeyBjaGlsZHJlbiwgbGFiZWwsIHR5cGUsIHRyYW5zaXRpb24gfSkgPT4ge1xyXG4gICAgY29uc3QgW2ZvY3VzLCBzZXRGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUeXBlLCBzZXRTZWxlY3RlZFR5cGVdID0gdXNlU3RhdGUoJ2NsaWNrJyk7XHJcbiAgICBjb25zdCBbdHJhbnNpdGlvblR5cGUsIHNldFRyYW5zaXRpb25UeXBlXSA9IHVzZVN0YXRlKCdoZWlnaHQnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih0eXBlID09PSAnaG92ZXInKXtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUeXBlKCdob3ZlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYodHJhbnNpdGlvbiA9PT0gJ29wYWNpdHknKXtcclxuICAgICAgICAgICAgc2V0VHJhbnNpdGlvblR5cGUoJ29wYWNpdHknKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCB0b2dnbGVGb2N1cyA9ICgpID0+IHtcclxuICAgICAgICBzZXRGb2N1cyghZm9jdXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCk9PntcclxuICAgICAgICBpZihzZWxlY3RlZFR5cGUgPT09ICdjbGljaycpXHJcbiAgICAgICAgICAgIHRvZ2dsZUZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpPT57XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRUeXBlID09PSAnaG92ZXInKVxyXG4gICAgICAgICAgICBzZXRGb2N1cyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCk9PntcclxuICAgICAgICBpZihzZWxlY3RlZFR5cGUgPT09ICdob3ZlcicpXHJcbiAgICAgICAgICAgIHNldEZvY3VzKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93biBpdGVtcycgZGF0YS1mb2N1cz17Zm9jdXN9ID5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVDbGlja30gb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfSBjbGFzc05hbWU9e1widGl0bGVcIiArIChmb2N1cyA/IFwiIGZvY3VzXCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWNvbnRlbnQ9e2xhYmVsfT57bGFiZWx9PC9zcGFuPntmb2N1cyA/IDxJb0lvc0Fycm93VXAgLz4gOiA8SW9Jb3NBcnJvd0Rvd24gLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogeyBmb2N1cyAmJiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRyb3BDb250ZW50XCIgKyAoZm9jdXMgPyBcIiBmb2N1c1wiIDogXCJcIil9IG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiB9ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duTGluazsiXSwic291cmNlUm9vdCI6IiJ9