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
      className: (transitionType === 'height' ? "dropContent" : "dropContentOpacity") + (focus ? " focus" : ""),
      onMouseLeave: handleMouseLeave,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bkxpbmsuanMiXSwibmFtZXMiOlsiRHJvcGRvd25MaW5rIiwiY2hpbGRyZW4iLCJsYWJlbCIsInR5cGUiLCJ0cmFuc2l0aW9uIiwidXNlU3RhdGUiLCJmb2N1cyIsInNldEZvY3VzIiwic2VsZWN0ZWRUeXBlIiwic2V0U2VsZWN0ZWRUeXBlIiwidHJhbnNpdGlvblR5cGUiLCJzZXRUcmFuc2l0aW9uVHlwZSIsInVzZUVmZmVjdCIsInRvZ2dsZUZvY3VzIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBMkM7QUFBQTs7QUFBQSxNQUF4Q0MsUUFBd0MsUUFBeENBLFFBQXdDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUNsQ0MsK0NBQVEsQ0FBQyxLQUFELENBRDBCO0FBQUEsTUFDckRDLEtBRHFEO0FBQUEsTUFDOUNDLFFBRDhDOztBQUFBLG1CQUVwQkYsK0NBQVEsQ0FBQyxPQUFELENBRlk7QUFBQSxNQUVyREcsWUFGcUQ7QUFBQSxNQUV2Q0MsZUFGdUM7O0FBQUEsbUJBR2hCSiwrQ0FBUSxDQUFDLFFBQUQsQ0FIUTtBQUFBLE1BR3JESyxjQUhxRDtBQUFBLE1BR3JDQyxpQkFIcUM7O0FBSzVEQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFJVCxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNsQk0scUJBQWUsQ0FBQyxPQUFELENBQWY7QUFDSDtBQUNKLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLQUcsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVIsVUFBVSxLQUFLLFNBQW5CLEVBQThCO0FBQzFCTyx1QkFBaUIsQ0FBQyxTQUFELENBQWpCO0FBQ0g7QUFDSixHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJOLFlBQVEsQ0FBQyxDQUFDRCxLQUFGLENBQVI7QUFDSCxHQUZEOztBQUlBLE1BQU1RLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsUUFBSU4sWUFBWSxLQUFLLE9BQXJCLEVBQ0lLLFdBQVc7QUFDbEIsR0FIRDs7QUFLQSxNQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0IsUUFBSVAsWUFBWSxLQUFLLE9BQXJCLEVBQ0lELFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDUCxHQUhEOztBQUtBLE1BQU1TLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQixRQUFJUixZQUFZLEtBQUssT0FBckIsRUFDSUQsUUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNQLEdBSEQ7O0FBS0Esc0JBQ0k7QUFBSSxhQUFTLEVBQUMsZ0JBQWQ7QUFBK0Isa0JBQVlELEtBQTNDO0FBQUEsNEJBQ0k7QUFBRyxhQUFPLEVBQUVRLFdBQVo7QUFBeUIsa0JBQVksRUFBRUMsZ0JBQXZDO0FBQXlELGVBQVMsRUFBRSxXQUFXVCxLQUFLLEdBQUcsUUFBSCxHQUFjLEVBQTlCLENBQXBFO0FBQUEsOEJBQ0k7QUFBTSx3QkFBY0osS0FBcEI7QUFBQSxrQkFBNEJBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUM4Q0ksS0FBSyxnQkFBRyw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsZ0JBQXNCLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSTtBQUFLLGVBQVMsRUFBRyxDQUFDSSxjQUFjLEtBQUssUUFBbkIsR0FBOEIsYUFBOUIsR0FBOEMsb0JBQS9DLEtBQXdFSixLQUFLLEdBQUcsUUFBSCxHQUFjLEVBQTNGLENBQWpCO0FBQWlILGtCQUFZLEVBQUVVLGdCQUEvSDtBQUFBLGdCQUNLZjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBN0NEOztHQUFNRCxZOztLQUFBQSxZO0FBK0NOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI1YjMwYjQxNmNiYTZlMjRjNzc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd1VwLCBJb0lvc0Fycm93RG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiXHJcblxyXG5cclxuY29uc3QgRHJvcGRvd25MaW5rID0gKHsgY2hpbGRyZW4sIGxhYmVsLCB0eXBlLCB0cmFuc2l0aW9uIH0pID0+IHtcclxuICAgIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVHlwZSwgc2V0U2VsZWN0ZWRUeXBlXSA9IHVzZVN0YXRlKCdjbGljaycpO1xyXG4gICAgY29uc3QgW3RyYW5zaXRpb25UeXBlLCBzZXRUcmFuc2l0aW9uVHlwZV0gPSB1c2VTdGF0ZSgnaGVpZ2h0Jyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ2hvdmVyJykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFR5cGUoJ2hvdmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0cmFuc2l0aW9uID09PSAnb3BhY2l0eScpIHtcclxuICAgICAgICAgICAgc2V0VHJhbnNpdGlvblR5cGUoJ29wYWNpdHknKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCB0b2dnbGVGb2N1cyA9ICgpID0+IHtcclxuICAgICAgICBzZXRGb2N1cyghZm9jdXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFR5cGUgPT09ICdjbGljaycpXHJcbiAgICAgICAgICAgIHRvZ2dsZUZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUeXBlID09PSAnaG92ZXInKVxyXG4gICAgICAgICAgICBzZXRGb2N1cyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFR5cGUgPT09ICdob3ZlcicpXHJcbiAgICAgICAgICAgIHNldEZvY3VzKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2Ryb3Bkb3duIGl0ZW1zJyBkYXRhLWZvY3VzPXtmb2N1c30gPlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVDbGlja30gb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfSBjbGFzc05hbWU9e1widGl0bGVcIiArIChmb2N1cyA/IFwiIGZvY3VzXCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWNvbnRlbnQ9e2xhYmVsfT57bGFiZWx9PC9zcGFuPntmb2N1cyA/IDxJb0lvc0Fycm93VXAgLz4gOiA8SW9Jb3NBcnJvd0Rvd24gLz59XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAodHJhbnNpdGlvblR5cGUgPT09ICdoZWlnaHQnID8gXCJkcm9wQ29udGVudFwiIDogXCJkcm9wQ29udGVudE9wYWNpdHlcIikgKyAoZm9jdXMgPyBcIiBmb2N1c1wiIDogXCJcIil9IG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25MaW5rOyJdLCJzb3VyY2VSb290IjoiIn0=