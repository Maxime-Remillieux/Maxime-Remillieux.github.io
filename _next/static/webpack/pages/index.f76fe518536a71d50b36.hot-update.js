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
    contentRef.current.style.height = '0px';
    contentRef.current.style.display = 'block';
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
        lineNumber: 44,
        columnNumber: 17
      }, _this), focus ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowUp, {
        size: "20px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 42
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosArrowDown, {
        size: "20px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 73
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      onTransitionEnd: handleTransitionEnd,
      ref: contentRef,
      className: "content" + (focus ? " focus" : ""),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bi5qcyJdLCJuYW1lcyI6WyJEcm9wZG93biIsImNoaWxkcmVuIiwidGl0bGUiLCJ1c2VTdGF0ZSIsImZvY3VzIiwic2V0Rm9jdXMiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInN0eWxlIiwiaGVpZ2h0IiwiZGlzcGxheSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbEhlaWdodCIsImhhbmRsZVRyYW5zaXRpb25FbmQiLCJ0b2dnbGVGb2N1cyIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXVCO0FBQUE7O0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVzs7QUFBQSxrQkFDVkMsK0NBQVEsQ0FBQyxLQUFELENBREU7QUFBQSxNQUM3QkMsS0FENkI7QUFBQSxNQUN0QkMsUUFEc0I7O0FBRXBDLE1BQU1DLFVBQVUsR0FBR0MsNkNBQU0sRUFBekI7QUFFQUMsa0RBQVMsQ0FBQyxZQUFJO0FBQ1ZGLGNBQVUsQ0FBQ0csT0FBWCxDQUFtQkMsS0FBbkIsQ0FBeUJDLE1BQXpCLEdBQWtDLEtBQWxDO0FBQ0FMLGNBQVUsQ0FBQ0csT0FBWCxDQUFtQkMsS0FBbkIsQ0FBeUJFLE9BQXpCLEdBQW1DLE9BQW5DO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBSixrREFBUyxDQUFDLFlBQUk7QUFDVksseUJBQXFCLENBQUMsWUFBSTtBQUN0QixVQUFHVCxLQUFILEVBQVM7QUFDTEUsa0JBQVUsQ0FBQ0csT0FBWCxDQUFtQkMsS0FBbkIsQ0FBeUJDLE1BQXpCLEdBQWtDLEtBQWxDO0FBQ0FFLDZCQUFxQixDQUFDLFlBQUs7QUFDdkJQLG9CQUFVLENBQUNHLE9BQVgsQ0FBbUJDLEtBQW5CLENBQXlCQyxNQUF6QixHQUFrQ0wsVUFBVSxDQUFDRyxPQUFYLENBQW1CSyxZQUFuQixHQUFrQyxJQUFwRTtBQUNILFNBRm9CLENBQXJCO0FBR0gsT0FMRCxNQUtLO0FBQ0RSLGtCQUFVLENBQUNHLE9BQVgsQ0FBbUJDLEtBQW5CLENBQXlCQyxNQUF6QixHQUFrQ0wsVUFBVSxDQUFDRyxPQUFYLENBQW1CSyxZQUFuQixHQUFrQyxJQUFwRTtBQUNBRCw2QkFBcUIsQ0FBQyxZQUFLO0FBQ3ZCUCxvQkFBVSxDQUFDRyxPQUFYLENBQW1CQyxLQUFuQixDQUF5QkMsTUFBekIsR0FBa0MsS0FBbEM7QUFDSCxTQUZvQixDQUFyQjtBQUdIO0FBQ0osS0Fab0IsQ0FBckI7QUFhSCxHQWRRLEVBY04sQ0FBQ1AsS0FBRCxDQWRNLENBQVQ7O0FBZ0JBLE1BQU1XLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBSTtBQUM1QixRQUFHWCxLQUFILEVBQ0lFLFVBQVUsQ0FBQ0csT0FBWCxDQUFtQkMsS0FBbkIsQ0FBeUJDLE1BQXpCLEdBQWtDLElBQWxDO0FBQ1AsR0FIRDs7QUFLQSxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQUs7QUFDckJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBYixZQUFRLENBQUMsQ0FBQ0QsS0FBRixDQUFSO0FBQ0gsR0FIRDs7QUFLQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQTBCLGtCQUFZQSxLQUF0QztBQUFBLDRCQUNJO0FBQUssYUFBTyxFQUFFWSxXQUFkO0FBQTJCLGVBQVMsRUFBRSxXQUFXWixLQUFLLEdBQUcsUUFBSCxHQUFjLEVBQTlCLENBQXRDO0FBQUEsOEJBQ0k7QUFBQSxrQkFBS0Y7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFDcUJFLEtBQUssZ0JBQUcsOERBQUMsd0RBQUQ7QUFBYyxZQUFJLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILGdCQUFrQyw4REFBQywwREFBRDtBQUFnQixZQUFJLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJO0FBQUsscUJBQWUsRUFBRVcsbUJBQXRCO0FBQTJDLFNBQUcsRUFBRVQsVUFBaEQ7QUFBNEQsZUFBUyxFQUFFLGFBQWFGLEtBQUssR0FBRyxRQUFILEdBQWMsRUFBaEMsQ0FBdkU7QUFBQSxnQkFDS0g7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQTdDRDs7R0FBTUQsUTs7S0FBQUEsUTtBQStDTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNzZmZTUxODUzNmE3MWQ1MGIzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVzQ29udGV4dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93VXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIlxyXG5pbXBvcnQgeyBJb0lvc0Fycm93RG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiXHJcblxyXG5jb25zdCBEcm9wZG93biA9ICh7Y2hpbGRyZW4sIHRpdGxlfSkgPT4ge1xyXG4gICAgY29uc3QgW2ZvY3VzLCBzZXRGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29udGVudFJlZi5jdXJyZW50LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG4gICAgICAgIGNvbnRlbnRSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e1xyXG4gICAgICAgICAgICBpZihmb2N1cyl7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50UmVmLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50UmVmLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gY29udGVudFJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29udGVudFJlZi5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGNvbnRlbnRSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFJlZi5jdXJyZW50LnN0eWxlLmhlaWdodCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtmb2N1c10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVHJhbnNpdGlvbkVuZCA9ICgpPT57XHJcbiAgICAgICAgaWYoZm9jdXMpXHJcbiAgICAgICAgICAgIGNvbnRlbnRSZWYuY3VycmVudC5zdHlsZS5oZWlnaHQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUZvY3VzID0gKGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEZvY3VzKCFmb2N1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24nIGRhdGEtZm9jdXM9e2ZvY3VzfSA+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17dG9nZ2xlRm9jdXN9IGNsYXNzTmFtZT17XCJ0aXRsZVwiICsgKGZvY3VzID8gXCIgZm9jdXNcIiA6IFwiXCIpfT5cclxuICAgICAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj57Zm9jdXMgPyA8SW9Jb3NBcnJvd1VwIHNpemU9XCIyMHB4XCIgLz4gOiA8SW9Jb3NBcnJvd0Rvd24gc2l6ZT1cIjIwcHhcIiAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25UcmFuc2l0aW9uRW5kPXtoYW5kbGVUcmFuc2l0aW9uRW5kfSByZWY9e2NvbnRlbnRSZWZ9IGNsYXNzTmFtZT17XCJjb250ZW50XCIgKyAoZm9jdXMgPyBcIiBmb2N1c1wiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjsiXSwic291cmNlUm9vdCI6IiJ9