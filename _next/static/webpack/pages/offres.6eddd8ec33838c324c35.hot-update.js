self["webpackHotUpdate_N_E"]("pages/offres",{

/***/ "./components/offres/PackCard.js":
/*!***************************************!*\
  !*** ./components/offres/PackCard.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\components\\offres\\PackCard.js",
    _this = undefined;





var PackCard = function PackCard(_ref) {
  var pack = _ref.pack;
  // const blue = '#27D6BD';
  var grey = '#2E2F3D';
  var darkerGrey = '#17171D';
  var lighterGrey = 'rgba(229, 234, 255, 0.7)';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "pack-card",
    style: pack.variant ? {
      borderColor: pack.variant
    } : {
      backgroundColor: grey
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pack-card-top",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "title",
        style: pack.variant ? {
          color: pack.variant
        } : {
          color: 'white'
        },
        children: pack.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "description",
        children: pack.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this), pack.budget && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "budget",
        children: pack.budget
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
      sx: {
        bgcolor: pack.variant ? pack.variant : grey,
        paddingTop: '15px',
        paddingBottom: '15px',
        paddingLeft: '20px',
        paddingRight: '20px',
        marginBottom: '30px',
        border: 1,
        borderColor: pack.variant ? pack.variant : lighterGrey,
        '&:hover': {
          bgcolor: darkerGrey
        }
      },
      variant: "contained",
      href: "/",
      children: "En savoir plus"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pack-card-bottom",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "content",
        children: pack.content.map(function (content, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "contentItem",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCheckCircle, {
                size: 20,
                color: pack.variant ? pack.variant : ''
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 35
              }, _this), content]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_c = PackCard;
/* harmony default export */ __webpack_exports__["default"] = (PackCard);

var _c;

$RefreshReg$(_c, "PackCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vZmZyZXMvUGFja0NhcmQuanMiXSwibmFtZXMiOlsiUGFja0NhcmQiLCJwYWNrIiwiZ3JleSIsImRhcmtlckdyZXkiLCJsaWdodGVyR3JleSIsInZhcmlhbnQiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImJ1ZGdldCIsImJnY29sb3IiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwiY29udGVudCIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBWTtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTtBQUN6QjtBQUNBLE1BQU1DLElBQUksR0FBRyxTQUFiO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLDBCQUFwQjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBMkIsU0FBSyxFQUFFSCxJQUFJLENBQUNJLE9BQUwsR0FBZTtBQUFDQyxpQkFBVyxFQUFFTCxJQUFJLENBQUNJO0FBQW5CLEtBQWYsR0FBNkM7QUFBQ0UscUJBQWUsRUFBRUw7QUFBbEIsS0FBL0U7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLE9BQWQ7QUFBc0IsYUFBSyxFQUFFRCxJQUFJLENBQUNJLE9BQUwsR0FBZTtBQUFDRyxlQUFLLEVBQUVQLElBQUksQ0FBQ0k7QUFBYixTQUFmLEdBQXVDO0FBQUNHLGVBQUssRUFBRTtBQUFSLFNBQXBFO0FBQUEsa0JBQXVGUCxJQUFJLENBQUNRO0FBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsa0JBQThCUixJQUFJLENBQUNTO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixFQUdNVCxJQUFJLENBQUNVLE1BQUwsaUJBQ0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSxrQkFBeUJWLElBQUksQ0FBQ1U7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBUVEsOERBQUMseURBQUQ7QUFBUSxRQUFFLEVBQUU7QUFDUkMsZUFBTyxFQUFFWCxJQUFJLENBQUNJLE9BQUwsR0FBZUosSUFBSSxDQUFDSSxPQUFwQixHQUE4QkgsSUFEL0I7QUFFUlcsa0JBQVUsRUFBRSxNQUZKO0FBR1JDLHFCQUFhLEVBQUUsTUFIUDtBQUlSQyxtQkFBVyxFQUFFLE1BSkw7QUFLUkMsb0JBQVksRUFBRSxNQUxOO0FBTVJDLG9CQUFZLEVBQUUsTUFOTjtBQU9SQyxjQUFNLEVBQUUsQ0FQQTtBQVFSWixtQkFBVyxFQUFFTCxJQUFJLENBQUNJLE9BQUwsR0FBZUosSUFBSSxDQUFDSSxPQUFwQixHQUE4QkQsV0FSbkM7QUFTUixtQkFBVztBQUNQUSxpQkFBTyxFQUFFVDtBQURGO0FBVEgsT0FBWjtBQVlHLGFBQU8sRUFBQyxXQVpYO0FBWXVCLFVBQUksRUFBQyxHQVo1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJSLGVBc0JJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsNkJBQ0k7QUFBSSxpQkFBUyxFQUFDLFNBQWQ7QUFBQSxrQkFDS0YsSUFBSSxDQUFDa0IsT0FBTCxDQUFhQyxHQUFiLENBQWlCLFVBQUNELE9BQUQsRUFBVUUsQ0FBVjtBQUFBLDhCQUNkO0FBQVkscUJBQVMsRUFBQyxhQUF0QjtBQUFBLG1DQUNJO0FBQUEsc0NBQU0sOERBQUMseURBQUQ7QUFBZSxvQkFBSSxFQUFFLEVBQXJCO0FBQXlCLHFCQUFLLEVBQUVwQixJQUFJLENBQUNJLE9BQUwsR0FBZUosSUFBSSxDQUFDSSxPQUFwQixHQUE4QjtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFOLEVBQTBFYyxPQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixhQUFTRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQSxTQUFqQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUNILENBekNEOztLQUFNckIsUTtBQTJDTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vZmZyZXMuNmVkZGQ4ZWMzMzgzOGMzMjRjMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYUNoZWNrQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuXHJcbmNvbnN0IFBhY2tDYXJkID0gKHtwYWNrfSkgPT4ge1xyXG4gICAgLy8gY29uc3QgYmx1ZSA9ICcjMjdENkJEJztcclxuICAgIGNvbnN0IGdyZXkgPSAnIzJFMkYzRCc7XHJcbiAgICBjb25zdCBkYXJrZXJHcmV5ID0gJyMxNzE3MUQnO1xyXG4gICAgY29uc3QgbGlnaHRlckdyZXkgPSAncmdiYSgyMjksIDIzNCwgMjU1LCAwLjcpJztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFjay1jYXJkXCIgc3R5bGU9e3BhY2sudmFyaWFudCA/IHtib3JkZXJDb2xvcjogcGFjay52YXJpYW50fSA6IHtiYWNrZ3JvdW5kQ29sb3I6IGdyZXl9IH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFjay1jYXJkLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnIHN0eWxlPXtwYWNrLnZhcmlhbnQgPyB7Y29sb3I6IHBhY2sudmFyaWFudH0gOiB7Y29sb3I6ICd3aGl0ZSd9fT57cGFjay50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz57cGFjay5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsgcGFjay5idWRnZXQgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnVkZ2V0Jz57cGFjay5idWRnZXR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJnY29sb3I6IHBhY2sudmFyaWFudCA/IHBhY2sudmFyaWFudCA6IGdyZXksXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcxNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzMwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogcGFjay52YXJpYW50ID8gcGFjay52YXJpYW50IDogbGlnaHRlckdyZXksXHJcbiAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6IGRhcmtlckdyZXlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fSB2YXJpYW50PSdjb250YWluZWQnIGhyZWY9Jy8nPkVuIHNhdm9pciBwbHVzPC9CdXR0b24+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRpb25cIj48L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFjay1jYXJkLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAge3BhY2suY29udGVudC5tYXAoKGNvbnRlbnQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPSdjb250ZW50SXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48RmFDaGVja0NpcmNsZSBzaXplPXsyMH0gY29sb3I9e3BhY2sudmFyaWFudCA/IHBhY2sudmFyaWFudCA6ICcnfS8+e2NvbnRlbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFja0NhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==