self["webpackHotUpdate_N_E"]("pages/offres-pme",{

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
      transition = _ref.transition,
      setStateInParent = _ref.setStateInParent;

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
    if (setStateInParent) {
      setStateInParent(function (s) {
        return !s;
      });
    }

    setFocus(!focus);
  };

  var handleClick = function handleClick() {
    if (selectedType === 'click') toggleFocus();
  };

  var handleMouseEnter = function handleMouseEnter() {
    if (selectedType === 'hover') {
      if (setStateInParent) {
        setStateInParent(true);
      } else {
        setFocus(true);
      }
    }
  };

  var handleMouseLeave = function handleMouseLeave() {
    if (selectedType === 'hover') {
      if (setStateInParent) {
        setStateInParent(false);
      } else {
        setFocus(false);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "dropdown items",
    "data-focus": focus,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      className: "title" + (focus ? " focus" : ""),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        "data-content": label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this), focus ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowUp, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 67
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowDown, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 86
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (transitionType === 'height' ? "dropContent" : "dropContentOpacity") + (focus ? " focus" : ""),
      onMouseLeave: handleMouseLeave,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bkxpbmsuanMiXSwibmFtZXMiOlsiRHJvcGRvd25MaW5rIiwiY2hpbGRyZW4iLCJsYWJlbCIsInR5cGUiLCJ0cmFuc2l0aW9uIiwic2V0U3RhdGVJblBhcmVudCIsInVzZVN0YXRlIiwiZm9jdXMiLCJzZXRGb2N1cyIsInNlbGVjdGVkVHlwZSIsInNldFNlbGVjdGVkVHlwZSIsInRyYW5zaXRpb25UeXBlIiwic2V0VHJhbnNpdGlvblR5cGUiLCJ1c2VFZmZlY3QiLCJ0b2dnbGVGb2N1cyIsInMiLCJoYW5kbGVDbGljayIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUE2RDtBQUFBOztBQUFBLE1BQTFEQyxRQUEwRCxRQUExREEsUUFBMEQ7QUFBQSxNQUFoREMsS0FBZ0QsUUFBaERBLEtBQWdEO0FBQUEsTUFBekNDLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLE1BQW5DQyxVQUFtQyxRQUFuQ0EsVUFBbUM7QUFBQSxNQUF2QkMsZ0JBQXVCLFFBQXZCQSxnQkFBdUI7O0FBQUEsa0JBQ3BEQywrQ0FBUSxDQUFDLEtBQUQsQ0FENEM7QUFBQSxNQUN2RUMsS0FEdUU7QUFBQSxNQUNoRUMsUUFEZ0U7O0FBQUEsbUJBRXRDRiwrQ0FBUSxDQUFDLE9BQUQsQ0FGOEI7QUFBQSxNQUV2RUcsWUFGdUU7QUFBQSxNQUV6REMsZUFGeUQ7O0FBQUEsbUJBR2xDSiwrQ0FBUSxDQUFDLFFBQUQsQ0FIMEI7QUFBQSxNQUd2RUssY0FIdUU7QUFBQSxNQUd2REMsaUJBSHVEOztBQUs5RUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVYsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDbEJPLHFCQUFlLENBQUMsT0FBRCxDQUFmO0FBQ0g7QUFDSixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0FHLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlULFVBQVUsS0FBSyxTQUFuQixFQUE4QjtBQUMxQlEsdUJBQWlCLENBQUMsU0FBRCxDQUFqQjtBQUNIO0FBQ0osR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQUdULGdCQUFILEVBQW9CO0FBQ2hCQSxzQkFBZ0IsQ0FBQyxVQUFBVSxDQUFDO0FBQUEsZUFBRyxDQUFDQSxDQUFKO0FBQUEsT0FBRixDQUFoQjtBQUNIOztBQUNEUCxZQUFRLENBQUMsQ0FBQ0QsS0FBRixDQUFSO0FBQ0gsR0FMRDs7QUFPQSxNQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQUlQLFlBQVksS0FBSyxPQUFyQixFQUNJSyxXQUFXO0FBQ2xCLEdBSEQ7O0FBS0EsTUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQUlSLFlBQVksS0FBSyxPQUFyQixFQUE2QjtBQUN6QixVQUFHSixnQkFBSCxFQUFvQjtBQUNoQkEsd0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNILE9BRkQsTUFFSztBQUNERyxnQkFBUSxDQUFDLElBQUQsQ0FBUjtBQUNIO0FBQ0o7QUFDSixHQVJEOztBQVVBLE1BQU1VLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQixRQUFJVCxZQUFZLEtBQUssT0FBckIsRUFBNkI7QUFDekIsVUFBR0osZ0JBQUgsRUFBb0I7QUFDaEJBLHdCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDSCxPQUZELE1BRUs7QUFDREcsZ0JBQVEsQ0FBQyxLQUFELENBQVI7QUFDSDtBQUNKO0FBQ0osR0FSRDs7QUFVQSxzQkFDSTtBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUErQixrQkFBWUQsS0FBM0M7QUFBQSw0QkFDSTtBQUFHLGFBQU8sRUFBRVMsV0FBWjtBQUF5QixrQkFBWSxFQUFFQyxnQkFBdkM7QUFBeUQsZUFBUyxFQUFFLFdBQVdWLEtBQUssR0FBRyxRQUFILEdBQWMsRUFBOUIsQ0FBcEU7QUFBQSw4QkFDSTtBQUFNLHdCQUFjTCxLQUFwQjtBQUFBLGtCQUE0QkE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBQzhDSyxLQUFLLGdCQUFHLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxnQkFBc0IsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJO0FBQUssZUFBUyxFQUFHLENBQUNJLGNBQWMsS0FBSyxRQUFuQixHQUE4QixhQUE5QixHQUE4QyxvQkFBL0MsS0FBd0VKLEtBQUssR0FBRyxRQUFILEdBQWMsRUFBM0YsQ0FBakI7QUFBaUgsa0JBQVksRUFBRVcsZ0JBQS9IO0FBQUEsZ0JBQ0tqQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBMUREOztHQUFNRCxZOztLQUFBQSxZO0FBNEROLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29mZnJlcy1wbWUuYzI2ODNjYzljYThjZWMwNDU3NzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93VXAsIElvSW9zQXJyb3dEb3duIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCJcclxuXHJcblxyXG5jb25zdCBEcm9wZG93bkxpbmsgPSAoeyBjaGlsZHJlbiwgbGFiZWwsIHR5cGUsIHRyYW5zaXRpb24sIHNldFN0YXRlSW5QYXJlbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgW2ZvY3VzLCBzZXRGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUeXBlLCBzZXRTZWxlY3RlZFR5cGVdID0gdXNlU3RhdGUoJ2NsaWNrJyk7XHJcbiAgICBjb25zdCBbdHJhbnNpdGlvblR5cGUsIHNldFRyYW5zaXRpb25UeXBlXSA9IHVzZVN0YXRlKCdoZWlnaHQnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnaG92ZXInKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVHlwZSgnaG92ZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb24gPT09ICdvcGFjaXR5Jykge1xyXG4gICAgICAgICAgICBzZXRUcmFuc2l0aW9uVHlwZSgnb3BhY2l0eScpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUZvY3VzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNldFN0YXRlSW5QYXJlbnQpe1xyXG4gICAgICAgICAgICBzZXRTdGF0ZUluUGFyZW50KHM9PiAhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEZvY3VzKCFmb2N1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVHlwZSA9PT0gJ2NsaWNrJylcclxuICAgICAgICAgICAgdG9nZ2xlRm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFR5cGUgPT09ICdob3Zlcicpe1xyXG4gICAgICAgICAgICBpZihzZXRTdGF0ZUluUGFyZW50KXtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlSW5QYXJlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0Rm9jdXModHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUeXBlID09PSAnaG92ZXInKXtcclxuICAgICAgICAgICAgaWYoc2V0U3RhdGVJblBhcmVudCl7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZUluUGFyZW50KGZhbHNlKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRGb2N1cyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93biBpdGVtcycgZGF0YS1mb2N1cz17Zm9jdXN9ID5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlQ2xpY2t9IG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn0gY2xhc3NOYW1lPXtcInRpdGxlXCIgKyAoZm9jdXMgPyBcIiBmb2N1c1wiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1jb250ZW50PXtsYWJlbH0+e2xhYmVsfTwvc3Bhbj57Zm9jdXMgPyA8SW9Jb3NBcnJvd1VwIC8+IDogPElvSW9zQXJyb3dEb3duIC8+fVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgKHRyYW5zaXRpb25UeXBlID09PSAnaGVpZ2h0JyA/IFwiZHJvcENvbnRlbnRcIiA6IFwiZHJvcENvbnRlbnRPcGFjaXR5XCIpICsgKGZvY3VzID8gXCIgZm9jdXNcIiA6IFwiXCIpfSBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duTGluazsiXSwic291cmNlUm9vdCI6IiJ9