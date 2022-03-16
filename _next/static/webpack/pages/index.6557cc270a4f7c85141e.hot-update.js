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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    contentRef.style.height;
  }, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bi5qcyJdLCJuYW1lcyI6WyJEcm9wZG93biIsImNoaWxkcmVuIiwidGl0bGUiLCJ1c2VTdGF0ZSIsImZvY3VzIiwic2V0Rm9jdXMiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3R5bGUiLCJoZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwiaGFuZGxlVHJhbnNpdGlvbkVuZCIsInRvZ2dsZUZvY3VzIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBdUI7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXOztBQUFBLGtCQUNWQywrQ0FBUSxDQUFDLEtBQUQsQ0FERTtBQUFBLE1BQzdCQyxLQUQ2QjtBQUFBLE1BQ3RCQyxRQURzQjs7QUFFcEMsTUFBTUMsVUFBVSxHQUFHQyw2Q0FBTSxFQUF6QjtBQUVBQyxrREFBUyxDQUFDLFlBQUk7QUFDVkYsY0FBVSxDQUFDRyxLQUFYLENBQWlCQyxNQUFqQjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQUYsa0RBQVMsQ0FBQyxZQUFJO0FBQ1ZHLHlCQUFxQixDQUFDLFlBQUk7QUFDdEIsVUFBR1AsS0FBSCxFQUFTO0FBQ0xFLGtCQUFVLENBQUNNLE9BQVgsQ0FBbUJILEtBQW5CLENBQXlCQyxNQUF6QixHQUFrQyxLQUFsQztBQUNBQyw2QkFBcUIsQ0FBQyxZQUFJO0FBQ3RCTCxvQkFBVSxDQUFDTSxPQUFYLENBQW1CSCxLQUFuQixDQUF5QkMsTUFBekIsR0FBa0NKLFVBQVUsQ0FBQ00sT0FBWCxDQUFtQkMsWUFBbkIsR0FBa0MsSUFBcEU7QUFDSCxTQUZvQixDQUFyQjtBQUdILE9BTEQsTUFLSztBQUNEUCxrQkFBVSxDQUFDTSxPQUFYLENBQW1CSCxLQUFuQixDQUF5QkMsTUFBekIsR0FBa0NKLFVBQVUsQ0FBQ00sT0FBWCxDQUFtQkMsWUFBbkIsR0FBa0MsSUFBcEU7QUFDQUYsNkJBQXFCLENBQUMsWUFBSTtBQUN0Qkwsb0JBQVUsQ0FBQ00sT0FBWCxDQUFtQkgsS0FBbkIsQ0FBeUJDLE1BQXpCLEdBQWtDLEtBQWxDO0FBQ0gsU0FGb0IsQ0FBckI7QUFHSDtBQUNKLEtBWm9CLENBQXJCO0FBYUgsR0FkUSxFQWNOLENBQUNOLEtBQUQsQ0FkTSxDQUFUOztBQWdCQSxNQUFNVSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQUk7QUFDNUIsUUFBR1YsS0FBSCxFQUNJRSxVQUFVLENBQUNNLE9BQVgsQ0FBbUJILEtBQW5CLENBQXlCQyxNQUF6QixHQUFrQyxJQUFsQztBQUNQLEdBSEQ7O0FBS0EsTUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFLO0FBQ3JCQSxLQUFDLENBQUNDLGNBQUY7QUFDQVosWUFBUSxDQUFDLENBQUNELEtBQUYsQ0FBUjtBQUNILEdBSEQ7O0FBS0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixrQkFBWUEsS0FBdEM7QUFBQSw0QkFDSTtBQUFLLGFBQU8sRUFBRVcsV0FBZDtBQUEyQixlQUFTLEVBQUUsV0FBV1gsS0FBSyxHQUFHLFFBQUgsR0FBYyxFQUE5QixDQUF0QztBQUFBLDhCQUNJO0FBQUEsa0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBQ3FCRSxLQUFLLGdCQUFHLDhEQUFDLHdEQUFEO0FBQWMsWUFBSSxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxnQkFBa0MsOERBQUMsMERBQUQ7QUFBZ0IsWUFBSSxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFENUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSTtBQUFLLHFCQUFlLEVBQUVVLG1CQUF0QjtBQUEyQyxTQUFHLEVBQUVSLFVBQWhEO0FBQTRELGVBQVMsRUFBRSxhQUFhRixLQUFLLEdBQUcsUUFBSCxHQUFjLEVBQWhDLENBQXZFO0FBQUEsZ0JBQ0tIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0E1Q0Q7O0dBQU1ELFE7O0tBQUFBLFE7QUE4Q04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjU1N2NjMjcwYTRmN2M4NTE0MWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0eWxlc0NvbnRleHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd1VwIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCJcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd0Rvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIlxyXG5cclxuY29uc3QgRHJvcGRvd24gPSAoe2NoaWxkcmVuLCB0aXRsZX0pID0+IHtcclxuICAgIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY29udGVudFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnRlbnRSZWYuc3R5bGUuaGVpZ2h0XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PntcclxuICAgICAgICAgICAgaWYoZm9jdXMpe1xyXG4gICAgICAgICAgICAgICAgY29udGVudFJlZi5jdXJyZW50LnN0eWxlLmhlaWdodCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50UmVmLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gY29udGVudFJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29udGVudFJlZi5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGNvbnRlbnRSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50UmVmLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSwgW2ZvY3VzXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRW5kID0gKCk9PntcclxuICAgICAgICBpZihmb2N1cylcclxuICAgICAgICAgICAgY29udGVudFJlZi5jdXJyZW50LnN0eWxlLmhlaWdodCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlRm9jdXMgPSAoZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0Rm9jdXMoIWZvY3VzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bicgZGF0YS1mb2N1cz17Zm9jdXN9ID5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0b2dnbGVGb2N1c30gY2xhc3NOYW1lPXtcInRpdGxlXCIgKyAoZm9jdXMgPyBcIiBmb2N1c1wiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgPGgyPnt0aXRsZX08L2gyPntmb2N1cyA/IDxJb0lvc0Fycm93VXAgc2l6ZT1cIjIwcHhcIiAvPiA6IDxJb0lvc0Fycm93RG93biBzaXplPVwiMjBweFwiIC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvblRyYW5zaXRpb25FbmQ9e2hhbmRsZVRyYW5zaXRpb25FbmR9IHJlZj17Y29udGVudFJlZn0gY2xhc3NOYW1lPXtcImNvbnRlbnRcIiArIChmb2N1cyA/IFwiIGZvY3VzXCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duOyJdLCJzb3VyY2VSb290IjoiIn0=