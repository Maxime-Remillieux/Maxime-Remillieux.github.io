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
      type = _ref.type;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      focus = _useState[0],
      setFocus = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('click'),
      selectedType = _useState2[0],
      setSelectedType = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (type === 'hover') {
      setSelectedType('hover');
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
    className: "dropdown",
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
        lineNumber: 37,
        columnNumber: 17
      }, _this), focus ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowUp, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 67
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowDown, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 86
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "dropContent" + (focus ? " focus" : ""),
      onMouseLeave: handleMouseLeave,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, _this);
};

_s(DropdownLink, "RELriAfjJTWD0qophiOs38sEiIs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bkxpbmsuanMiXSwibmFtZXMiOlsiRHJvcGRvd25MaW5rIiwiY2hpbGRyZW4iLCJsYWJlbCIsInR5cGUiLCJ1c2VTdGF0ZSIsImZvY3VzIiwic2V0Rm9jdXMiLCJzZWxlY3RlZFR5cGUiLCJzZXRTZWxlY3RlZFR5cGUiLCJ1c2VFZmZlY3QiLCJ0b2dnbGVGb2N1cyIsImhhbmRsZUNsaWNrIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ3RCQywrQ0FBUSxDQUFDLEtBQUQsQ0FEYztBQUFBLE1BQ3pDQyxLQUR5QztBQUFBLE1BQ2xDQyxRQURrQzs7QUFBQSxtQkFFUkYsK0NBQVEsQ0FBQyxPQUFELENBRkE7QUFBQSxNQUV6Q0csWUFGeUM7QUFBQSxNQUUzQkMsZUFGMkI7O0FBSWhEQyxrREFBUyxDQUFDLFlBQUk7QUFDVixRQUFHTixJQUFJLEtBQUssT0FBWixFQUFvQjtBQUNoQksscUJBQWUsQ0FBQyxPQUFELENBQWY7QUFDSDtBQUNKLEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QkosWUFBUSxDQUFDLENBQUNELEtBQUYsQ0FBUjtBQUNILEdBRkQ7O0FBSUEsTUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBSTtBQUNwQixRQUFHSixZQUFZLEtBQUssT0FBcEIsRUFDSUcsV0FBVztBQUNsQixHQUhEOztBQUtBLE1BQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBSTtBQUN6QixRQUFHTCxZQUFZLEtBQUssT0FBcEIsRUFDSUQsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNQLEdBSEQ7O0FBS0EsTUFBTU8sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFJO0FBQ3pCLFFBQUdOLFlBQVksS0FBSyxPQUFwQixFQUNJRCxRQUFRLENBQUMsS0FBRCxDQUFSO0FBQ1AsR0FIRDs7QUFLQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQTBCLGtCQUFZRCxLQUF0QztBQUFBLDRCQUNJO0FBQUssYUFBTyxFQUFFTSxXQUFkO0FBQTJCLGtCQUFZLEVBQUVDLGdCQUF6QztBQUEyRCxlQUFTLEVBQUUsV0FBV1AsS0FBSyxHQUFHLFFBQUgsR0FBYyxFQUE5QixDQUF0RTtBQUFBLDhCQUNJO0FBQU0sd0JBQWNILEtBQXBCO0FBQUEsa0JBQTRCQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFDOENHLEtBQUssZ0JBQUcsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILGdCQUFzQiw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBS1E7QUFBSyxlQUFTLEVBQUUsaUJBQWlCQSxLQUFLLEdBQUcsUUFBSCxHQUFjLEVBQXBDLENBQWhCO0FBQXlELGtCQUFZLEVBQUVRLGdCQUF2RTtBQUFBLGdCQUNLWjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVlILENBekNEOztHQUFNRCxZOztLQUFBQSxZO0FBMkNOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzNzQ5ZGRlYmYzYTg5MjQ2ZWNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd1VwLCAgSW9Jb3NBcnJvd0Rvd259IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiXHJcblxyXG5cclxuY29uc3QgRHJvcGRvd25MaW5rID0gKHsgY2hpbGRyZW4sIGxhYmVsLCB0eXBlIH0pID0+IHtcclxuICAgIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVHlwZSwgc2V0U2VsZWN0ZWRUeXBlXSA9IHVzZVN0YXRlKCdjbGljaycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHR5cGUgPT09ICdob3Zlcicpe1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFR5cGUoJ2hvdmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlRm9jdXMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9jdXMoIWZvY3VzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpPT57XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRUeXBlID09PSAnY2xpY2snKVxyXG4gICAgICAgICAgICB0b2dnbGVGb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKT0+e1xyXG4gICAgICAgIGlmKHNlbGVjdGVkVHlwZSA9PT0gJ2hvdmVyJylcclxuICAgICAgICAgICAgc2V0Rm9jdXModHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpPT57XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRUeXBlID09PSAnaG92ZXInKVxyXG4gICAgICAgICAgICBzZXRGb2N1cyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24nIGRhdGEtZm9jdXM9e2ZvY3VzfSA+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlQ2xpY2t9IG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn0gY2xhc3NOYW1lPXtcInRpdGxlXCIgKyAoZm9jdXMgPyBcIiBmb2N1c1wiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1jb250ZW50PXtsYWJlbH0+e2xhYmVsfTwvc3Bhbj57Zm9jdXMgPyA8SW9Jb3NBcnJvd1VwIC8+IDogPElvSW9zQXJyb3dEb3duIC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIHsgZm9jdXMgJiYgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkcm9wQ29udGVudFwiICsgKGZvY3VzID8gXCIgZm9jdXNcIiA6IFwiXCIpfSBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bkxpbms7Il0sInNvdXJjZVJvb3QiOiIifQ==