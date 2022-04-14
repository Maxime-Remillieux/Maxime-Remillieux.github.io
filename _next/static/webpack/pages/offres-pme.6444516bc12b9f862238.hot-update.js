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

  var handleMouseLeaveTitle = function handleMouseLeaveTitle(e) {
    if (selectedType === 'hover') {
      console.log(e.relatedTarget.classList);
      var className = transitionType === 'height' ? "dropContent" : "dropContentOpacity";

      if (!e.relatedTarget.classList.contains(className)) {
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
      onMouseLeave: handleMouseLeaveTitle,
      className: "title" + (focus ? " focus" : ""),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        "data-content": label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this), focus ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowUp, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 67
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowDown, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 86
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (transitionType === 'height' ? "dropContent" : "dropContentOpacity") + (focus ? " focus" : ""),
      onMouseLeave: handleMouseLeave,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bkxpbmsuanMiXSwibmFtZXMiOlsiRHJvcGRvd25MaW5rIiwiY2hpbGRyZW4iLCJsYWJlbCIsInR5cGUiLCJ0cmFuc2l0aW9uIiwidXNlU3RhdGUiLCJmb2N1cyIsInNldEZvY3VzIiwic2VsZWN0ZWRUeXBlIiwic2V0U2VsZWN0ZWRUeXBlIiwidHJhbnNpdGlvblR5cGUiLCJzZXRUcmFuc2l0aW9uVHlwZSIsInVzZUVmZmVjdCIsInRvZ2dsZUZvY3VzIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImhhbmRsZU1vdXNlTGVhdmVUaXRsZSIsImUiLCJjb25zb2xlIiwibG9nIiwicmVsYXRlZFRhcmdldCIsImNsYXNzTGlzdCIsImNsYXNzTmFtZSIsImNvbnRhaW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUEyQztBQUFBOztBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsTUFBdkJDLElBQXVCLFFBQXZCQSxJQUF1QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsa0JBQ2xDQywrQ0FBUSxDQUFDLEtBQUQsQ0FEMEI7QUFBQSxNQUNyREMsS0FEcUQ7QUFBQSxNQUM5Q0MsUUFEOEM7O0FBQUEsbUJBRXBCRiwrQ0FBUSxDQUFDLE9BQUQsQ0FGWTtBQUFBLE1BRXJERyxZQUZxRDtBQUFBLE1BRXZDQyxlQUZ1Qzs7QUFBQSxtQkFHaEJKLCtDQUFRLENBQUMsUUFBRCxDQUhRO0FBQUEsTUFHckRLLGNBSHFEO0FBQUEsTUFHckNDLGlCQUhxQzs7QUFLNURDLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlULElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ2xCTSxxQkFBZSxDQUFDLE9BQUQsQ0FBZjtBQUNIO0FBQ0osR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQUtBRyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFJUixVQUFVLEtBQUssU0FBbkIsRUFBOEI7QUFDMUJPLHVCQUFpQixDQUFDLFNBQUQsQ0FBakI7QUFDSDtBQUNKLEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0Qk4sWUFBUSxDQUFDLENBQUNELEtBQUYsQ0FBUjtBQUNILEdBRkQ7O0FBSUEsTUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixRQUFJTixZQUFZLEtBQUssT0FBckIsRUFDSUssV0FBVztBQUNsQixHQUhEOztBQUtBLE1BQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQixRQUFJUCxZQUFZLEtBQUssT0FBckIsRUFDSUQsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNQLEdBSEQ7O0FBS0EsTUFBTVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQUlSLFlBQVksS0FBSyxPQUFyQixFQUNJRCxRQUFRLENBQUMsS0FBRCxDQUFSO0FBQ1AsR0FIRDs7QUFLQSxNQUFNVSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLENBQUQsRUFBTztBQUNqQyxRQUFJVixZQUFZLEtBQUssT0FBckIsRUFBNkI7QUFDekJXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLGFBQUYsQ0FBZ0JDLFNBQTVCO0FBRUEsVUFBTUMsU0FBUyxHQUFHYixjQUFjLEtBQUssUUFBbkIsR0FBOEIsYUFBOUIsR0FBOEMsb0JBQWhFOztBQUNBLFVBQUcsQ0FBQ1EsQ0FBQyxDQUFDRyxhQUFGLENBQWdCQyxTQUFoQixDQUEwQkUsUUFBMUIsQ0FBbUNELFNBQW5DLENBQUosRUFBa0Q7QUFDOUNoQixnQkFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNIO0FBQ0o7QUFDSixHQVREOztBQVdBLHNCQUNJO0FBQUksYUFBUyxFQUFDLGdCQUFkO0FBQStCLGtCQUFZRCxLQUEzQztBQUFBLDRCQUNJO0FBQUcsYUFBTyxFQUFFUSxXQUFaO0FBQXlCLGtCQUFZLEVBQUVDLGdCQUF2QztBQUF5RCxrQkFBWSxFQUFFRSxxQkFBdkU7QUFBOEYsZUFBUyxFQUFFLFdBQVdYLEtBQUssR0FBRyxRQUFILEdBQWMsRUFBOUIsQ0FBekc7QUFBQSw4QkFDSTtBQUFNLHdCQUFjSixLQUFwQjtBQUFBLGtCQUE0QkE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBQzhDSSxLQUFLLGdCQUFHLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxnQkFBc0IsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJO0FBQUssZUFBUyxFQUFHLENBQUNJLGNBQWMsS0FBSyxRQUFuQixHQUE4QixhQUE5QixHQUE4QyxvQkFBL0MsS0FBd0VKLEtBQUssR0FBRyxRQUFILEdBQWMsRUFBM0YsQ0FBakI7QUFBaUgsa0JBQVksRUFBRVUsZ0JBQS9IO0FBQUEsZ0JBQ0tmO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0F4REQ7O0dBQU1ELFk7O0tBQUFBLFk7QUEwRE4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb2ZmcmVzLXBtZS42NDQ0NTE2YmMxMmI5Zjg2MjIzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dVcCwgSW9Jb3NBcnJvd0Rvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIlxyXG5cclxuXHJcbmNvbnN0IERyb3Bkb3duTGluayA9ICh7IGNoaWxkcmVuLCBsYWJlbCwgdHlwZSwgdHJhbnNpdGlvbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFR5cGUsIHNldFNlbGVjdGVkVHlwZV0gPSB1c2VTdGF0ZSgnY2xpY2snKTtcclxuICAgIGNvbnN0IFt0cmFuc2l0aW9uVHlwZSwgc2V0VHJhbnNpdGlvblR5cGVdID0gdXNlU3RhdGUoJ2hlaWdodCcpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdob3ZlcicpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUeXBlKCdob3ZlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHJhbnNpdGlvbiA9PT0gJ29wYWNpdHknKSB7XHJcbiAgICAgICAgICAgIHNldFRyYW5zaXRpb25UeXBlKCdvcGFjaXR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlRm9jdXMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9jdXMoIWZvY3VzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUeXBlID09PSAnY2xpY2snKVxyXG4gICAgICAgICAgICB0b2dnbGVGb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVHlwZSA9PT0gJ2hvdmVyJylcclxuICAgICAgICAgICAgc2V0Rm9jdXModHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUeXBlID09PSAnaG92ZXInKVxyXG4gICAgICAgICAgICBzZXRGb2N1cyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZVRpdGxlID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUeXBlID09PSAnaG92ZXInKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS5yZWxhdGVkVGFyZ2V0LmNsYXNzTGlzdCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSB0cmFuc2l0aW9uVHlwZSA9PT0gJ2hlaWdodCcgPyBcImRyb3BDb250ZW50XCIgOiBcImRyb3BDb250ZW50T3BhY2l0eVwiO1xyXG4gICAgICAgICAgICBpZighZS5yZWxhdGVkVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKXtcclxuICAgICAgICAgICAgICAgIHNldEZvY3VzKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2Ryb3Bkb3duIGl0ZW1zJyBkYXRhLWZvY3VzPXtmb2N1c30gPlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVDbGlja30gb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfSBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmVUaXRsZX0gY2xhc3NOYW1lPXtcInRpdGxlXCIgKyAoZm9jdXMgPyBcIiBmb2N1c1wiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1jb250ZW50PXtsYWJlbH0+e2xhYmVsfTwvc3Bhbj57Zm9jdXMgPyA8SW9Jb3NBcnJvd1VwIC8+IDogPElvSW9zQXJyb3dEb3duIC8+fVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgKHRyYW5zaXRpb25UeXBlID09PSAnaGVpZ2h0JyA/IFwiZHJvcENvbnRlbnRcIiA6IFwiZHJvcENvbnRlbnRPcGFjaXR5XCIpICsgKGZvY3VzID8gXCIgZm9jdXNcIiA6IFwiXCIpfSBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duTGluazsiXSwic291cmNlUm9vdCI6IiJ9