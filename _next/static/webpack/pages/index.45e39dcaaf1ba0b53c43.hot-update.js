self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Dropdown.js":
/*!********************************!*\
  !*** ./components/Dropdown.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\components\\Dropdown.js",
    _this = undefined,
    _s = $RefreshSig$();






var Dropdown = function Dropdown(_ref) {
  _s();

  var children = _ref.children,
      title = _ref.title;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      focus = _useState[0],
      setFocus = _useState[1];

  var contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {}, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    requestAnimationFrame(function () {
      if (focus) {
        contentRef.current.style.height = "0px";
        requestAnimationFrame(function () {
          contentRef.current.style.height = contentRef.current.scrollHeight + "px";
        });
      } else {
        contentRef.current.style.height = contentRef.current.scrollHeight + "px";
        requestAnimationFrame(function () {
          contentRef.current.style.height = "0px";
        });
      }
    });
  }, [focus]);

  var handleTransitionEnd = function handleTransitionEnd() {
    if (focus) contentRef.current.style.height = null;
  };

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
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), focus ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowUp, {
        size: "20px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 42
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowDown, {
        size: "20px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 73
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      onTransitionEnd: handleTransitionEnd,
      ref: contentRef,
      className: "content" + (focus ? " focus" : ""),
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

_s(Dropdown, "FcAt4ulYuMPg6AGy/8U+9IiE5D4=");

_c = Dropdown;
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

var _c;

$RefreshReg$(_c, "Dropdown");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bi5qcyJdLCJuYW1lcyI6WyJEcm9wZG93biIsImNoaWxkcmVuIiwidGl0bGUiLCJ1c2VTdGF0ZSIsImZvY3VzIiwic2V0Rm9jdXMiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3VycmVudCIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiaGFuZGxlVHJhbnNpdGlvbkVuZCIsInRvZ2dsZUZvY3VzIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBdUI7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXOztBQUFBLGtCQUNWQywrQ0FBUSxDQUFDLEtBQUQsQ0FERTtBQUFBLE1BQzdCQyxLQUQ2QjtBQUFBLE1BQ3RCQyxRQURzQjs7QUFFcEMsTUFBTUMsVUFBVSxHQUFHQyw2Q0FBTSxFQUF6QjtBQUVBQyxrREFBUyxDQUFDLFlBQUksQ0FFYixDQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFBLGtEQUFTLENBQUMsWUFBSTtBQUNWQyx5QkFBcUIsQ0FBQyxZQUFJO0FBQ3RCLFVBQUdMLEtBQUgsRUFBUztBQUNMRSxrQkFBVSxDQUFDSSxPQUFYLENBQW1CQyxLQUFuQixDQUF5QkMsTUFBekIsR0FBa0MsS0FBbEM7QUFDQUgsNkJBQXFCLENBQUMsWUFBSTtBQUN0Qkgsb0JBQVUsQ0FBQ0ksT0FBWCxDQUFtQkMsS0FBbkIsQ0FBeUJDLE1BQXpCLEdBQWtDTixVQUFVLENBQUNJLE9BQVgsQ0FBbUJHLFlBQW5CLEdBQWtDLElBQXBFO0FBQ0gsU0FGb0IsQ0FBckI7QUFHSCxPQUxELE1BS0s7QUFDRFAsa0JBQVUsQ0FBQ0ksT0FBWCxDQUFtQkMsS0FBbkIsQ0FBeUJDLE1BQXpCLEdBQWtDTixVQUFVLENBQUNJLE9BQVgsQ0FBbUJHLFlBQW5CLEdBQWtDLElBQXBFO0FBQ0FKLDZCQUFxQixDQUFDLFlBQUk7QUFDdEJILG9CQUFVLENBQUNJLE9BQVgsQ0FBbUJDLEtBQW5CLENBQXlCQyxNQUF6QixHQUFrQyxLQUFsQztBQUNILFNBRm9CLENBQXJCO0FBR0g7QUFDSixLQVpvQixDQUFyQjtBQWFILEdBZFEsRUFjTixDQUFDUixLQUFELENBZE0sQ0FBVDs7QUFnQkEsTUFBTVUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFJO0FBQzVCLFFBQUdWLEtBQUgsRUFDSUUsVUFBVSxDQUFDSSxPQUFYLENBQW1CQyxLQUFuQixDQUF5QkMsTUFBekIsR0FBa0MsSUFBbEM7QUFDUCxHQUhEOztBQUtBLE1BQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBSztBQUNyQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FaLFlBQVEsQ0FBQyxDQUFDRCxLQUFGLENBQVI7QUFDSCxHQUhEOztBQUtBLHNCQUNJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBMEIsa0JBQVlBLEtBQXRDO0FBQUEsNEJBQ0k7QUFBSyxhQUFPLEVBQUVXLFdBQWQ7QUFBMkIsZUFBUyxFQUFFLFdBQVdYLEtBQUssR0FBRyxRQUFILEdBQWMsRUFBOUIsQ0FBdEM7QUFBQSw4QkFDSTtBQUFBLGtCQUFLRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUNxQkUsS0FBSyxnQkFBRyw4REFBQyx3REFBRDtBQUFjLFlBQUksRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsZ0JBQWtDLDhEQUFDLDBEQUFEO0FBQWdCLFlBQUksRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRDVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUk7QUFBSyxxQkFBZSxFQUFFVSxtQkFBdEI7QUFBMkMsU0FBRyxFQUFFUixVQUFoRDtBQUE0RCxlQUFTLEVBQUUsYUFBYUYsS0FBSyxHQUFHLFFBQUgsR0FBYyxFQUFoQyxDQUF2RTtBQUFBLGdCQUNLSDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBNUNEOztHQUFNRCxROztLQUFBQSxRO0FBOENOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ1ZTM5ZGNhYWYxYmEwYjUzYzQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHlsZXNDb250ZXh0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dVcCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiXHJcbmltcG9ydCB7IElvSW9zQXJyb3dEb3duIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCJcclxuXHJcbmNvbnN0IERyb3Bkb3duID0gKHtjaGlsZHJlbiwgdGl0bGV9KSA9PiB7XHJcbiAgICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e1xyXG4gICAgICAgICAgICBpZihmb2N1cyl7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50UmVmLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRSZWYuY3VycmVudC5zdHlsZS5oZWlnaHQgPSBjb250ZW50UmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50UmVmLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gY29udGVudFJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRSZWYuY3VycmVudC5zdHlsZS5oZWlnaHQgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbZm9jdXNdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRyYW5zaXRpb25FbmQgPSAoKT0+e1xyXG4gICAgICAgIGlmKGZvY3VzKVxyXG4gICAgICAgICAgICBjb250ZW50UmVmLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2dnbGVGb2N1cyA9IChlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRGb2N1cyghZm9jdXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duJyBkYXRhLWZvY3VzPXtmb2N1c30gPlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RvZ2dsZUZvY3VzfSBjbGFzc05hbWU9e1widGl0bGVcIiArIChmb2N1cyA/IFwiIGZvY3VzXCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+e2ZvY3VzID8gPElvSW9zQXJyb3dVcCBzaXplPVwiMjBweFwiIC8+IDogPElvSW9zQXJyb3dEb3duIHNpemU9XCIyMHB4XCIgLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uVHJhbnNpdGlvbkVuZD17aGFuZGxlVHJhbnNpdGlvbkVuZH0gcmVmPXtjb250ZW50UmVmfSBjbGFzc05hbWU9e1wiY29udGVudFwiICsgKGZvY3VzID8gXCIgZm9jdXNcIiA6IFwiXCIpfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247Il0sInNvdXJjZVJvb3QiOiIifQ==