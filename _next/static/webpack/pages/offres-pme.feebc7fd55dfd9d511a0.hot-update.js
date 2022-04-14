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
      setStateInParent = _ref.setStateInParent,
      state = _ref.state;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      focus = _useState[0],
      setFocus = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('click'),
      selectedType = _useState2[0],
      setSelectedType = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('height'),
      transitionType = _useState3[0],
      setTransitionType = _useState3[1];

  var stateHandleByParent = setStateInParent ? true : false;
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
    if (stateHandleByParent) {
      setStateInParent(function (s) {
        return !s;
      });
    } else {
      setFocus(!focus);
    }
  };

  var handleClick = function handleClick() {
    if (selectedType === 'click') toggleFocus();
  };

  var handleMouseEnter = function handleMouseEnter() {
    if (selectedType === 'hover') {
      if (stateHandleByParent) {
        setStateInParent(true);
      } else {
        setFocus(true);
      }
    }
  };

  var handleMouseLeave = function handleMouseLeave() {
    if (selectedType === 'hover') {
      if (stateHandleByParent) {
        setStateInParent(false);
      } else {
        setFocus(false);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "dropdown items",
    "data-focus": stateHandleByParent ? state : focus,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      className: "title" + (focus ? " focus" : ""),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        "data-content": label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this), stateHandleByParent ? state ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowUp, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 90
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowDown, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 109
      }, _this) : focus ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowUp, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 140
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowDown, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 159
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (transitionType === 'height' ? "dropContent" : "dropContentOpacity") + (stateHandleByParent ? state ? " focus" : "" : focus ? " focus" : ""),
      onMouseLeave: handleMouseLeave,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bkxpbmsuanMiXSwibmFtZXMiOlsiRHJvcGRvd25MaW5rIiwiY2hpbGRyZW4iLCJsYWJlbCIsInR5cGUiLCJ0cmFuc2l0aW9uIiwic2V0U3RhdGVJblBhcmVudCIsInN0YXRlIiwidXNlU3RhdGUiLCJmb2N1cyIsInNldEZvY3VzIiwic2VsZWN0ZWRUeXBlIiwic2V0U2VsZWN0ZWRUeXBlIiwidHJhbnNpdGlvblR5cGUiLCJzZXRUcmFuc2l0aW9uVHlwZSIsInN0YXRlSGFuZGxlQnlQYXJlbnQiLCJ1c2VFZmZlY3QiLCJ0b2dnbGVGb2N1cyIsInMiLCJoYW5kbGVDbGljayIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFvRTtBQUFBOztBQUFBLE1BQWpFQyxRQUFpRSxRQUFqRUEsUUFBaUU7QUFBQSxNQUF2REMsS0FBdUQsUUFBdkRBLEtBQXVEO0FBQUEsTUFBaERDLElBQWdELFFBQWhEQSxJQUFnRDtBQUFBLE1BQTFDQyxVQUEwQyxRQUExQ0EsVUFBMEM7QUFBQSxNQUE5QkMsZ0JBQThCLFFBQTlCQSxnQkFBOEI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQzNEQywrQ0FBUSxDQUFDLEtBQUQsQ0FEbUQ7QUFBQSxNQUM5RUMsS0FEOEU7QUFBQSxNQUN2RUMsUUFEdUU7O0FBQUEsbUJBRTdDRiwrQ0FBUSxDQUFDLE9BQUQsQ0FGcUM7QUFBQSxNQUU5RUcsWUFGOEU7QUFBQSxNQUVoRUMsZUFGZ0U7O0FBQUEsbUJBR3pDSiwrQ0FBUSxDQUFDLFFBQUQsQ0FIaUM7QUFBQSxNQUc5RUssY0FIOEU7QUFBQSxNQUc5REMsaUJBSDhEOztBQUlyRixNQUFNQyxtQkFBbUIsR0FBR1QsZ0JBQWdCLEdBQUcsSUFBSCxHQUFVLEtBQXREO0FBRUFVLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlaLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ2xCUSxxQkFBZSxDQUFDLE9BQUQsQ0FBZjtBQUNIO0FBQ0osR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQUtBSSxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFJWCxVQUFVLEtBQUssU0FBbkIsRUFBOEI7QUFDMUJTLHVCQUFpQixDQUFDLFNBQUQsQ0FBakI7QUFDSDtBQUNKLEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixRQUFHRixtQkFBSCxFQUF1QjtBQUNuQlQsc0JBQWdCLENBQUMsVUFBQVksQ0FBQztBQUFBLGVBQUksQ0FBQ0EsQ0FBTDtBQUFBLE9BQUYsQ0FBaEI7QUFDSCxLQUZELE1BRUs7QUFDRFIsY0FBUSxDQUFDLENBQUNELEtBQUYsQ0FBUjtBQUNIO0FBQ0osR0FORDs7QUFRQSxNQUFNVSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQUlSLFlBQVksS0FBSyxPQUFyQixFQUNJTSxXQUFXO0FBQ2xCLEdBSEQ7O0FBS0EsTUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQUlULFlBQVksS0FBSyxPQUFyQixFQUE2QjtBQUN6QixVQUFHSSxtQkFBSCxFQUF1QjtBQUNuQlQsd0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNILE9BRkQsTUFFSztBQUNESSxnQkFBUSxDQUFDLElBQUQsQ0FBUjtBQUNIO0FBQ0o7QUFDSixHQVJEOztBQVVBLE1BQU1XLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQixRQUFJVixZQUFZLEtBQUssT0FBckIsRUFBNkI7QUFDekIsVUFBR0ksbUJBQUgsRUFBdUI7QUFDbkJULHdCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDSCxPQUZELE1BRUs7QUFDREksZ0JBQVEsQ0FBQyxLQUFELENBQVI7QUFDSDtBQUNKO0FBQ0osR0FSRDs7QUFVQSxzQkFDSTtBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUErQixrQkFBWUssbUJBQW1CLEdBQUdSLEtBQUgsR0FBV0UsS0FBekU7QUFBQSw0QkFDSTtBQUFHLGFBQU8sRUFBRVUsV0FBWjtBQUF5QixrQkFBWSxFQUFFQyxnQkFBdkM7QUFBeUQsZUFBUyxFQUFFLFdBQVdYLEtBQUssR0FBRyxRQUFILEdBQWMsRUFBOUIsQ0FBcEU7QUFBQSw4QkFDSTtBQUFNLHdCQUFjTixLQUFwQjtBQUFBLGtCQUE0QkE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBQzhDWSxtQkFBbUIsR0FBSVIsS0FBSyxnQkFBRyw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsZ0JBQXNCLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBL0IsR0FBc0RFLEtBQUssZ0JBQUcsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILGdCQUFzQiw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUk7QUFBSyxlQUFTLEVBQUcsQ0FBQ0ksY0FBYyxLQUFLLFFBQW5CLEdBQThCLGFBQTlCLEdBQThDLG9CQUEvQyxLQUF3RUUsbUJBQW1CLEdBQUlSLEtBQUssR0FBRyxRQUFILEdBQWMsRUFBdkIsR0FBOEJFLEtBQUssR0FBRyxRQUFILEdBQWMsRUFBNUksQ0FBakI7QUFBbUssa0JBQVksRUFBRVksZ0JBQWpMO0FBQUEsZ0JBQ0tuQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBNUREOztHQUFNRCxZOztLQUFBQSxZO0FBOEROLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29mZnJlcy1wbWUuZmVlYmM3ZmQ1NWRmZDlkNTExYTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93VXAsIElvSW9zQXJyb3dEb3duIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCJcclxuXHJcblxyXG5jb25zdCBEcm9wZG93bkxpbmsgPSAoeyBjaGlsZHJlbiwgbGFiZWwsIHR5cGUsIHRyYW5zaXRpb24sIHNldFN0YXRlSW5QYXJlbnQsIHN0YXRlIH0pID0+IHtcclxuICAgIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVHlwZSwgc2V0U2VsZWN0ZWRUeXBlXSA9IHVzZVN0YXRlKCdjbGljaycpO1xyXG4gICAgY29uc3QgW3RyYW5zaXRpb25UeXBlLCBzZXRUcmFuc2l0aW9uVHlwZV0gPSB1c2VTdGF0ZSgnaGVpZ2h0Jyk7XHJcbiAgICBjb25zdCBzdGF0ZUhhbmRsZUJ5UGFyZW50ID0gc2V0U3RhdGVJblBhcmVudCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnaG92ZXInKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVHlwZSgnaG92ZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb24gPT09ICdvcGFjaXR5Jykge1xyXG4gICAgICAgICAgICBzZXRUcmFuc2l0aW9uVHlwZSgnb3BhY2l0eScpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUZvY3VzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHN0YXRlSGFuZGxlQnlQYXJlbnQpe1xyXG4gICAgICAgICAgICBzZXRTdGF0ZUluUGFyZW50KHMgPT4gIXMpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRGb2N1cyghZm9jdXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUeXBlID09PSAnY2xpY2snKVxyXG4gICAgICAgICAgICB0b2dnbGVGb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVHlwZSA9PT0gJ2hvdmVyJyl7XHJcbiAgICAgICAgICAgIGlmKHN0YXRlSGFuZGxlQnlQYXJlbnQpe1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGVJblBhcmVudCh0cnVlKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRGb2N1cyh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFR5cGUgPT09ICdob3Zlcicpe1xyXG4gICAgICAgICAgICBpZihzdGF0ZUhhbmRsZUJ5UGFyZW50KXtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlSW5QYXJlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldEZvY3VzKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2Ryb3Bkb3duIGl0ZW1zJyBkYXRhLWZvY3VzPXtzdGF0ZUhhbmRsZUJ5UGFyZW50ID8gc3RhdGUgOiBmb2N1c30gPlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVDbGlja30gb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfSBjbGFzc05hbWU9e1widGl0bGVcIiArIChmb2N1cyA/IFwiIGZvY3VzXCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWNvbnRlbnQ9e2xhYmVsfT57bGFiZWx9PC9zcGFuPntzdGF0ZUhhbmRsZUJ5UGFyZW50ID8gKHN0YXRlID8gPElvSW9zQXJyb3dVcCAvPiA6IDxJb0lvc0Fycm93RG93biAvPikgOiAoZm9jdXMgPyA8SW9Jb3NBcnJvd1VwIC8+IDogPElvSW9zQXJyb3dEb3duIC8+KX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICh0cmFuc2l0aW9uVHlwZSA9PT0gJ2hlaWdodCcgPyBcImRyb3BDb250ZW50XCIgOiBcImRyb3BDb250ZW50T3BhY2l0eVwiKSArIChzdGF0ZUhhbmRsZUJ5UGFyZW50ID8gKHN0YXRlID8gXCIgZm9jdXNcIiA6IFwiXCIpIDogKGZvY3VzID8gXCIgZm9jdXNcIiA6IFwiXCIpKX0gb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bkxpbms7Il0sInNvdXJjZVJvb3QiOiIifQ==