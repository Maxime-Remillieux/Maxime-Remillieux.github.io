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
    } else {
      setFocus(!focus);
    }
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
    "data-focus": setStateInParent ? state : focus,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      className: "title" + (focus ? " focus" : ""),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        "data-content": label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this), focus ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowUp, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 67
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowDown, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 86
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (transitionType === 'height' ? "dropContent" : "dropContentOpacity") + (focus ? " focus" : ""),
      onMouseLeave: handleMouseLeave,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bkxpbmsuanMiXSwibmFtZXMiOlsiRHJvcGRvd25MaW5rIiwiY2hpbGRyZW4iLCJsYWJlbCIsInR5cGUiLCJ0cmFuc2l0aW9uIiwic2V0U3RhdGVJblBhcmVudCIsInN0YXRlIiwidXNlU3RhdGUiLCJmb2N1cyIsInNldEZvY3VzIiwic2VsZWN0ZWRUeXBlIiwic2V0U2VsZWN0ZWRUeXBlIiwidHJhbnNpdGlvblR5cGUiLCJzZXRUcmFuc2l0aW9uVHlwZSIsInVzZUVmZmVjdCIsInRvZ2dsZUZvY3VzIiwicyIsImhhbmRsZUNsaWNrIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQW9FO0FBQUE7O0FBQUEsTUFBakVDLFFBQWlFLFFBQWpFQSxRQUFpRTtBQUFBLE1BQXZEQyxLQUF1RCxRQUF2REEsS0FBdUQ7QUFBQSxNQUFoREMsSUFBZ0QsUUFBaERBLElBQWdEO0FBQUEsTUFBMUNDLFVBQTBDLFFBQTFDQSxVQUEwQztBQUFBLE1BQTlCQyxnQkFBOEIsUUFBOUJBLGdCQUE4QjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDM0RDLCtDQUFRLENBQUMsS0FBRCxDQURtRDtBQUFBLE1BQzlFQyxLQUQ4RTtBQUFBLE1BQ3ZFQyxRQUR1RTs7QUFBQSxtQkFFN0NGLCtDQUFRLENBQUMsT0FBRCxDQUZxQztBQUFBLE1BRTlFRyxZQUY4RTtBQUFBLE1BRWhFQyxlQUZnRTs7QUFBQSxtQkFHekNKLCtDQUFRLENBQUMsUUFBRCxDQUhpQztBQUFBLE1BRzlFSyxjQUg4RTtBQUFBLE1BRzlEQyxpQkFIOEQ7O0FBS3JGQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFJWCxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNsQlEscUJBQWUsQ0FBQyxPQUFELENBQWY7QUFDSDtBQUNKLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLQUcsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVYsVUFBVSxLQUFLLFNBQW5CLEVBQThCO0FBQzFCUyx1QkFBaUIsQ0FBQyxTQUFELENBQWpCO0FBQ0g7QUFDSixHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsUUFBR1YsZ0JBQUgsRUFBb0I7QUFDaEJBLHNCQUFnQixDQUFDLFVBQUFXLENBQUM7QUFBQSxlQUFJLENBQUNBLENBQUw7QUFBQSxPQUFGLENBQWhCO0FBQ0gsS0FGRCxNQUVLO0FBQ0RQLGNBQVEsQ0FBQyxDQUFDRCxLQUFGLENBQVI7QUFDSDtBQUNKLEdBTkQ7O0FBUUEsTUFBTVMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixRQUFJUCxZQUFZLEtBQUssT0FBckIsRUFDSUssV0FBVztBQUNsQixHQUhEOztBQUtBLE1BQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQixRQUFJUixZQUFZLEtBQUssT0FBckIsRUFBNkI7QUFDekIsVUFBR0wsZ0JBQUgsRUFBb0I7QUFDaEJBLHdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDSCxPQUZELE1BRUs7QUFDREksZ0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDSDtBQUNKO0FBQ0osR0FSRDs7QUFVQSxNQUFNVSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0IsUUFBSVQsWUFBWSxLQUFLLE9BQXJCLEVBQTZCO0FBQ3pCLFVBQUdMLGdCQUFILEVBQW9CO0FBQ2hCQSx3QkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0gsT0FGRCxNQUVLO0FBQ0RJLGdCQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0g7QUFDSjtBQUNKLEdBUkQ7O0FBVUEsc0JBQ0k7QUFBSSxhQUFTLEVBQUMsZ0JBQWQ7QUFBK0Isa0JBQVlKLGdCQUFnQixHQUFHQyxLQUFILEdBQVdFLEtBQXRFO0FBQUEsNEJBQ0k7QUFBRyxhQUFPLEVBQUVTLFdBQVo7QUFBeUIsa0JBQVksRUFBRUMsZ0JBQXZDO0FBQXlELGVBQVMsRUFBRSxXQUFXVixLQUFLLEdBQUcsUUFBSCxHQUFjLEVBQTlCLENBQXBFO0FBQUEsOEJBQ0k7QUFBTSx3QkFBY04sS0FBcEI7QUFBQSxrQkFBNEJBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUM4Q00sS0FBSyxnQkFBRyw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsZ0JBQXNCLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSTtBQUFLLGVBQVMsRUFBRyxDQUFDSSxjQUFjLEtBQUssUUFBbkIsR0FBOEIsYUFBOUIsR0FBOEMsb0JBQS9DLEtBQXdFSixLQUFLLEdBQUcsUUFBSCxHQUFjLEVBQTNGLENBQWpCO0FBQWlILGtCQUFZLEVBQUVXLGdCQUEvSDtBQUFBLGdCQUNLbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQTNERDs7R0FBTUQsWTs7S0FBQUEsWTtBQTZETiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vZmZyZXMtcG1lLjRlMWI5YzNmYmZlMTE3Mzc4ZGQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd1VwLCBJb0lvc0Fycm93RG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiXHJcblxyXG5cclxuY29uc3QgRHJvcGRvd25MaW5rID0gKHsgY2hpbGRyZW4sIGxhYmVsLCB0eXBlLCB0cmFuc2l0aW9uLCBzZXRTdGF0ZUluUGFyZW50LCBzdGF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFR5cGUsIHNldFNlbGVjdGVkVHlwZV0gPSB1c2VTdGF0ZSgnY2xpY2snKTtcclxuICAgIGNvbnN0IFt0cmFuc2l0aW9uVHlwZSwgc2V0VHJhbnNpdGlvblR5cGVdID0gdXNlU3RhdGUoJ2hlaWdodCcpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdob3ZlcicpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUeXBlKCdob3ZlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHJhbnNpdGlvbiA9PT0gJ29wYWNpdHknKSB7XHJcbiAgICAgICAgICAgIHNldFRyYW5zaXRpb25UeXBlKCdvcGFjaXR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlRm9jdXMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2V0U3RhdGVJblBhcmVudCl7XHJcbiAgICAgICAgICAgIHNldFN0YXRlSW5QYXJlbnQocyA9PiAhcyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldEZvY3VzKCFmb2N1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFR5cGUgPT09ICdjbGljaycpXHJcbiAgICAgICAgICAgIHRvZ2dsZUZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUeXBlID09PSAnaG92ZXInKXtcclxuICAgICAgICAgICAgaWYoc2V0U3RhdGVJblBhcmVudCl7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZUluUGFyZW50KHRydWUpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldEZvY3VzKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVHlwZSA9PT0gJ2hvdmVyJyl7XHJcbiAgICAgICAgICAgIGlmKHNldFN0YXRlSW5QYXJlbnQpe1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGVJblBhcmVudChmYWxzZSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0Rm9jdXMoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24gaXRlbXMnIGRhdGEtZm9jdXM9e3NldFN0YXRlSW5QYXJlbnQgPyBzdGF0ZSA6IGZvY3VzfSA+XHJcbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9IGNsYXNzTmFtZT17XCJ0aXRsZVwiICsgKGZvY3VzID8gXCIgZm9jdXNcIiA6IFwiXCIpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtY29udGVudD17bGFiZWx9PntsYWJlbH08L3NwYW4+e2ZvY3VzID8gPElvSW9zQXJyb3dVcCAvPiA6IDxJb0lvc0Fycm93RG93biAvPn1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICh0cmFuc2l0aW9uVHlwZSA9PT0gJ2hlaWdodCcgPyBcImRyb3BDb250ZW50XCIgOiBcImRyb3BDb250ZW50T3BhY2l0eVwiKSArIChmb2N1cyA/IFwiIGZvY3VzXCIgOiBcIlwiKX0gb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bkxpbms7Il0sInNvdXJjZVJvb3QiOiIifQ==