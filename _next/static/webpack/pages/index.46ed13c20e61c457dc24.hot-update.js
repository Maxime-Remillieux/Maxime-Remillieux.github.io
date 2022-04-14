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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bkxpbmsuanMiXSwibmFtZXMiOlsiRHJvcGRvd25MaW5rIiwiY2hpbGRyZW4iLCJsYWJlbCIsInR5cGUiLCJ0cmFuc2l0aW9uIiwic2V0U3RhdGVJblBhcmVudCIsInVzZVN0YXRlIiwiZm9jdXMiLCJzZXRGb2N1cyIsInNlbGVjdGVkVHlwZSIsInNldFNlbGVjdGVkVHlwZSIsInRyYW5zaXRpb25UeXBlIiwic2V0VHJhbnNpdGlvblR5cGUiLCJ1c2VFZmZlY3QiLCJ0b2dnbGVGb2N1cyIsInMiLCJoYW5kbGVDbGljayIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUE2RDtBQUFBOztBQUFBLE1BQTFEQyxRQUEwRCxRQUExREEsUUFBMEQ7QUFBQSxNQUFoREMsS0FBZ0QsUUFBaERBLEtBQWdEO0FBQUEsTUFBekNDLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLE1BQW5DQyxVQUFtQyxRQUFuQ0EsVUFBbUM7QUFBQSxNQUF2QkMsZ0JBQXVCLFFBQXZCQSxnQkFBdUI7O0FBQUEsa0JBQ3BEQywrQ0FBUSxDQUFDLEtBQUQsQ0FENEM7QUFBQSxNQUN2RUMsS0FEdUU7QUFBQSxNQUNoRUMsUUFEZ0U7O0FBQUEsbUJBRXRDRiwrQ0FBUSxDQUFDLE9BQUQsQ0FGOEI7QUFBQSxNQUV2RUcsWUFGdUU7QUFBQSxNQUV6REMsZUFGeUQ7O0FBQUEsbUJBR2xDSiwrQ0FBUSxDQUFDLFFBQUQsQ0FIMEI7QUFBQSxNQUd2RUssY0FIdUU7QUFBQSxNQUd2REMsaUJBSHVEOztBQUs5RUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVYsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDbEJPLHFCQUFlLENBQUMsT0FBRCxDQUFmO0FBQ0g7QUFDSixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0FHLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlULFVBQVUsS0FBSyxTQUFuQixFQUE4QjtBQUMxQlEsdUJBQWlCLENBQUMsU0FBRCxDQUFqQjtBQUNIO0FBQ0osR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQUdULGdCQUFILEVBQW9CO0FBQ2hCQSxzQkFBZ0IsQ0FBQyxVQUFBVSxDQUFDO0FBQUEsZUFBSSxDQUFDQSxDQUFMO0FBQUEsT0FBRixDQUFoQjtBQUNIOztBQUNEUCxZQUFRLENBQUMsQ0FBQ0QsS0FBRixDQUFSO0FBQ0gsR0FMRDs7QUFPQSxNQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQUlQLFlBQVksS0FBSyxPQUFyQixFQUNJSyxXQUFXO0FBQ2xCLEdBSEQ7O0FBS0EsTUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQUlSLFlBQVksS0FBSyxPQUFyQixFQUE2QjtBQUN6QixVQUFHSixnQkFBSCxFQUFvQjtBQUNoQkEsd0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNILE9BRkQsTUFFSztBQUNERyxnQkFBUSxDQUFDLElBQUQsQ0FBUjtBQUNIO0FBQ0o7QUFDSixHQVJEOztBQVVBLE1BQU1VLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQixRQUFJVCxZQUFZLEtBQUssT0FBckIsRUFBNkI7QUFDekIsVUFBR0osZ0JBQUgsRUFBb0I7QUFDaEJBLHdCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDSCxPQUZELE1BRUs7QUFDREcsZ0JBQVEsQ0FBQyxLQUFELENBQVI7QUFDSDtBQUNKO0FBQ0osR0FSRDs7QUFVQSxzQkFDSTtBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUErQixrQkFBWUQsS0FBM0M7QUFBQSw0QkFDSTtBQUFHLGFBQU8sRUFBRVMsV0FBWjtBQUF5QixrQkFBWSxFQUFFQyxnQkFBdkM7QUFBeUQsZUFBUyxFQUFFLFdBQVdWLEtBQUssR0FBRyxRQUFILEdBQWMsRUFBOUIsQ0FBcEU7QUFBQSw4QkFDSTtBQUFNLHdCQUFjTCxLQUFwQjtBQUFBLGtCQUE0QkE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBQzhDSyxLQUFLLGdCQUFHLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxnQkFBc0IsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJO0FBQUssZUFBUyxFQUFHLENBQUNJLGNBQWMsS0FBSyxRQUFuQixHQUE4QixhQUE5QixHQUE4QyxvQkFBL0MsS0FBd0VKLEtBQUssR0FBRyxRQUFILEdBQWMsRUFBM0YsQ0FBakI7QUFBaUgsa0JBQVksRUFBRVcsZ0JBQS9IO0FBQUEsZ0JBQ0tqQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBMUREOztHQUFNRCxZOztLQUFBQSxZO0FBNEROLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ2ZWQxM2MyMGU2MWM0NTdkYzI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd1VwLCBJb0lvc0Fycm93RG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiXHJcblxyXG5cclxuY29uc3QgRHJvcGRvd25MaW5rID0gKHsgY2hpbGRyZW4sIGxhYmVsLCB0eXBlLCB0cmFuc2l0aW9uLCBzZXRTdGF0ZUluUGFyZW50IH0pID0+IHtcclxuICAgIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVHlwZSwgc2V0U2VsZWN0ZWRUeXBlXSA9IHVzZVN0YXRlKCdjbGljaycpO1xyXG4gICAgY29uc3QgW3RyYW5zaXRpb25UeXBlLCBzZXRUcmFuc2l0aW9uVHlwZV0gPSB1c2VTdGF0ZSgnaGVpZ2h0Jyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ2hvdmVyJykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFR5cGUoJ2hvdmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0cmFuc2l0aW9uID09PSAnb3BhY2l0eScpIHtcclxuICAgICAgICAgICAgc2V0VHJhbnNpdGlvblR5cGUoJ29wYWNpdHknKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCB0b2dnbGVGb2N1cyA9ICgpID0+IHtcclxuICAgICAgICBpZihzZXRTdGF0ZUluUGFyZW50KXtcclxuICAgICAgICAgICAgc2V0U3RhdGVJblBhcmVudChzID0+ICFzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Rm9jdXMoIWZvY3VzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUeXBlID09PSAnY2xpY2snKVxyXG4gICAgICAgICAgICB0b2dnbGVGb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVHlwZSA9PT0gJ2hvdmVyJyl7XHJcbiAgICAgICAgICAgIGlmKHNldFN0YXRlSW5QYXJlbnQpe1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGVJblBhcmVudCh0cnVlKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRGb2N1cyh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFR5cGUgPT09ICdob3Zlcicpe1xyXG4gICAgICAgICAgICBpZihzZXRTdGF0ZUluUGFyZW50KXtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlSW5QYXJlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldEZvY3VzKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2Ryb3Bkb3duIGl0ZW1zJyBkYXRhLWZvY3VzPXtmb2N1c30gPlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVDbGlja30gb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfSBjbGFzc05hbWU9e1widGl0bGVcIiArIChmb2N1cyA/IFwiIGZvY3VzXCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWNvbnRlbnQ9e2xhYmVsfT57bGFiZWx9PC9zcGFuPntmb2N1cyA/IDxJb0lvc0Fycm93VXAgLz4gOiA8SW9Jb3NBcnJvd0Rvd24gLz59XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAodHJhbnNpdGlvblR5cGUgPT09ICdoZWlnaHQnID8gXCJkcm9wQ29udGVudFwiIDogXCJkcm9wQ29udGVudE9wYWNpdHlcIikgKyAoZm9jdXMgPyBcIiBmb2N1c1wiIDogXCJcIil9IG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25MaW5rOyJdLCJzb3VyY2VSb290IjoiIn0=