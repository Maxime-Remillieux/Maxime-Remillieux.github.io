self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navbar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dropdown */ "./components/Dropdown.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\components\\Navbar.js",
    _s = $RefreshSig$();











var links = [{
  link_label: 'Offres',
  link_href: '/product'
}, {
  link_label: 'Blog',
  link_href: 'https:/\/blog.klox.io/'
}, {
  link_label: 'Contact',
  link_href: '/contact'
}];
var pourVous = [{
  label: 'Enjeux',
  links: [{
    label: 'Campagne',
    href: '/'
  }, {
    label: 'Conseil',
    href: '/'
  }, {
    label: 'Marketplace',
    href: '/marketplace'
  }]
}, {
  label: 'Typologie',
  links: [{
    label: 'Notoriété',
    href: '/'
  }, {
    label: 'Performance',
    href: '/'
  }, {
    label: 'Trafic',
    href: '/'
  }]
}, {
  label: 'Secteur',
  links: [{
    label: 'Start-up',
    href: '/'
  }, {
    label: 'E-commerce',
    href: '/'
  }, {
    label: 'Événements',
    href: '/'
  }, {
    label: 'Agence',
    href: '/'
  }, {
    label: 'TPE/PME',
    href: '/'
  }, {
    label: '"Produit physique"',
    href: '/'
  }]
}];
function Navbar(_ref) {
  _s();

  var _this = this;

  var _ref$navbar = _ref.navbar,
      logo = _ref$navbar.logo,
      link = _ref$navbar.link,
      cta = _ref$navbar.cta;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      windowWidth = _useState[0],
      setWindowWidth = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      dropdownActive = _useState3[0],
      setDropdownActive = _useState3[1]; // const [isClicked, setIsClicked] = useState(false);
  // const [firstMenuActive, setFirstMenuActive] = useState(true);


  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      activeMenu = _useState4[0],
      setActiveMenu = _useState4[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var handleWindow = function handleWindow() {
    setWindowWidth(window.innerWidth);
  };

  var renderNavMobile = function renderNavMobile(e) {
    return setIsOpen(!isOpen);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!isOpen) {
      setActiveMenu(0);
    }
  }, [isOpen]);

  var renderNavbar = function renderNavbar() {
    // if (!windowWidth) {
    //   return <React.Fragment />;
    // }
    return windowWidth < 1047 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "navbar_primary",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "navbar_primary-logo",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: logo.href,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "".concat(logo.image.url),
            alt: logo.image.alternativeText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "navbar_primary-right",
        onClick: renderNavMobile,
        children: isOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineClose, {
          className: "ham"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiMenuAlt3, {
          className: "ham"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), windowWidth < 1047 && isOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [activeMenu == 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navMobile",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "navMobileItems",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "items",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                style: {
                  cursor: 'pointer'
                },
                onClick: function onClick() {
                  return setActiveMenu(1);
                },
                children: "Pour vous"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
                style: {
                  position: 'relative',
                  left: '20px',
                  top: '4px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 19
            }, _this), links.map(function (item, a) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "items",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "".concat(item.link_href === router.route && "active"),
                  href: item.link_href,
                  children: item.link_label
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 23
                }, _this)
              }, "".concat(item + a), false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 21
              }, _this);
            }), cta.map(function (g, h) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "login",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
                  className: "btn-".concat(g.className),
                  href: g.href,
                  label: g.label
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 23
                }, _this)
              }, "".concat(g + h), false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 21
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 15
        }, _this), activeMenu == 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pourVousMenuMobile",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsArrowLeft, {
            size: 40,
            onClick: function onClick() {
              return setActiveMenu(0);
            },
            className: "backButton"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "pourVousList",
            children: pourVous.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {}, index, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navMobile_background",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 13
        }, _this)]
      }, void 0, true) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "navbar_primary",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navbar_primary-logo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: logo.href,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "".concat(logo.image.url),
              alt: logo.image.alternativeText
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navbar_primary_links",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "navbar_primary_links--item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "items",
              onMouseEnter: function onMouseEnter() {
                return setDropdownActive(true);
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: dropdownActive ? "active" : "",
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  cursor: 'pointer',
                  pointer: 'none'
                },
                children: ["Pour vous ", dropdownActive ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowUp, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 47
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowDown, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 66
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, _this), links.map(function (item, i) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "items",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "".concat(item.link_href === router.route && "active"),
                  href: item.link_href,
                  children: item.link_label
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 19
                }, _this)
              }, "".concat(item + i), false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 17
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navbar_primary-right",
          children: cta.map(function (b, j) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
              className: "btn-".concat(b.className),
              href: b.href,
              label: b.label
            }, "".concat(b + j), false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, _this), dropdownActive && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "dropdownMenu",
        onMouseLeave: function onMouseLeave() {
          return setDropdownActive(false);
        },
        children: pourVous.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "dropdownSection",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: item.label
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: item.links.map(function (dropdownLink, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: dropdownLink.href,
                    children: dropdownLink.label
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 200,
                    columnNumber: 23
                  }, _this)
                }, idx, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 17
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }, _this)]
    }, void 0, true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    !windowWidth ? setWindowWidth(window.innerWidth) : null;
    window.addEventListener("resize", handleWindow);
    return function () {
      window.removeEventListener("resize", handleWindow);
    };
  }, [windowWidth]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "navbar",
    children: renderNavbar()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 224,
    columnNumber: 10
  }, this);
}

_s(Navbar, "YAPOliNJglwbpApLCkEqQEBhTso=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsibGlua3MiLCJsaW5rX2xhYmVsIiwibGlua19ocmVmIiwicG91clZvdXMiLCJsYWJlbCIsImhyZWYiLCJOYXZiYXIiLCJuYXZiYXIiLCJsb2dvIiwibGluayIsImN0YSIsInVzZVN0YXRlIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsImlzT3BlbiIsInNldElzT3BlbiIsImRyb3Bkb3duQWN0aXZlIiwic2V0RHJvcGRvd25BY3RpdmUiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVdpbmRvdyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyZW5kZXJOYXZNb2JpbGUiLCJlIiwidXNlRWZmZWN0IiwicmVuZGVyTmF2YmFyIiwiaW1hZ2UiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJjdXJzb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJtYXAiLCJpdGVtIiwiYSIsInJvdXRlIiwiZyIsImgiLCJjbGFzc05hbWUiLCJpbmRleCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwicG9pbnRlciIsImkiLCJiIiwiaiIsImRyb3Bkb3duTGluayIsImlkeCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFBRUMsWUFBVSxFQUFFLFFBQWQ7QUFBd0JDLFdBQVMsRUFBRTtBQUFuQyxDQURZLEVBRVo7QUFBRUQsWUFBVSxFQUFFLE1BQWQ7QUFBc0JDLFdBQVMsRUFBRTtBQUFqQyxDQUZZLEVBR1o7QUFBRUQsWUFBVSxFQUFFLFNBQWQ7QUFBeUJDLFdBQVMs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QUFxQ2hDLFlBQXJDO0FBQ0QsS0FGRDtBQUdELEdBUlEsRUFRTixDQUFDVixXQUFELENBUk0sQ0FBVDtBQVVBLHNCQUFPO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSxjQUF5QmdCLFlBQVk7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBakx1QnRCLE07VUFRUGUsa0Q7OztLQVJPZixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE4NzAwMDk5YzYwMWQ0NjE1ODEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhpTWVudUFsdDMgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd1VwLCBJb0lvc0Fycm93RG93biwgSW9Jb3NBcnJvd0ZvcndhcmQgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCB7IEJzQXJyb3dMZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXHJcbmltcG9ydCB7IE1vYmlsZUZyaWVuZGx5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4vRHJvcGRvd25cIjtcclxuXHJcbmNvbnN0IGxpbmtzID0gW1xyXG4gIHsgbGlua19sYWJlbDogJ09mZnJlcycsIGxpbmtfaHJlZjogJy9wcm9kdWN0JyB9LFxyXG4gIHsgbGlua19sYWJlbDogJ0Jsb2cnLCBsaW5rX2hyZWY6ICdodHRwczovXFwvYmxvZy5rbG94LmlvLycgfSxcclxuICB7IGxpbmtfbGFiZWw6ICdDb250YWN0JywgbGlua19ocmVmOiAnL2NvbnRhY3QnIH0sXHJcbl1cclxuXHJcbmNvbnN0IHBvdXJWb3VzID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiAnRW5qZXV4JyxcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIHsgbGFiZWw6ICdDYW1wYWduZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnQ29uc2VpbCcsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnTWFya2V0cGxhY2UnLCBocmVmOiAnL21hcmtldHBsYWNlJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdUeXBvbG9naWUnLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAgeyBsYWJlbDogJ05vdG9yacOpdMOpJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdQZXJmb3JtYW5jZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnVHJhZmljJywgaHJlZjogJy8nIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnU2VjdGV1cicsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7IGxhYmVsOiAnU3RhcnQtdXAnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ0UtY29tbWVyY2UnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ8OJdsOpbmVtZW50cycsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnQWdlbmNlJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdUUEUvUE1FJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdcIlByb2R1aXQgcGh5c2lxdWVcIicsIGhyZWY6ICcvJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcih7IG5hdmJhcjogeyBsb2dvLCBsaW5rLCBjdGEgfSB9KSB7XHJcbiAgY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkcm9wZG93bkFjdGl2ZSwgc2V0RHJvcGRvd25BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIGNvbnN0IFtpc0NsaWNrZWQsIHNldElzQ2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gY29uc3QgW2ZpcnN0TWVudUFjdGl2ZSwgc2V0Rmlyc3RNZW51QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFthY3RpdmVNZW51LCBzZXRBY3RpdmVNZW51XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlV2luZG93ID0gKCkgPT4ge1xyXG4gICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlck5hdk1vYmlsZSA9IChlKSA9PiB7XHJcbiAgICByZXR1cm4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzT3Blbikge1xyXG4gICAgICBzZXRBY3RpdmVNZW51KDApO1xyXG4gICAgfVxyXG4gIH0sIFtpc09wZW5dKVxyXG5cclxuICBjb25zdCByZW5kZXJOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICAvLyBpZiAoIXdpbmRvd1dpZHRoKSB7XHJcbiAgICAvLyAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQgLz47XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIHdpbmRvd1dpZHRoIDwgMTA0NyA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnktbG9nb1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj17bG9nby5ocmVmfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake2xvZ28uaW1hZ2UudXJsfWB9IGFsdD17bG9nby5pbWFnZS5hbHRlcm5hdGl2ZVRleHR9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1yaWdodFwiIG9uQ2xpY2s9e3JlbmRlck5hdk1vYmlsZX0+XHJcbiAgICAgICAgICB7aXNPcGVuID8gKFxyXG4gICAgICAgICAgICA8QWlPdXRsaW5lQ2xvc2UgY2xhc3NOYW1lPVwiaGFtXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxIaU1lbnVBbHQzIGNsYXNzTmFtZT1cImhhbVwiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7d2luZG93V2lkdGggPCAxMDQ3ICYmIGlzT3BlbiA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHthY3RpdmVNZW51ID09IDAgJiZcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdk1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdk1vYmlsZUl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgUG91ciB2b3VzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93Rm9yd2FyZCBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGVmdDogJzIwcHgnLCB0b3A6ICc0cHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGl0ZW0sIGEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtpdGVtICsgYX1gfSBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpdGVtLmxpbmtfaHJlZiA9PT0gcm91dGVyLnJvdXRlICYmIFwiYWN0aXZlXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rX2hyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtfbGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7Y3RhLm1hcCgoZywgaCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2cgKyBofWB9IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0bi0ke2cuY2xhc3NOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2cuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2cubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7YWN0aXZlTWVudSA9PSAxICYmXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3VyVm91c01lbnVNb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxCc0Fycm93TGVmdCBzaXplPXs0MH0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgwKX0gY2xhc3NOYW1lPVwiYmFja0J1dHRvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicG91clZvdXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwb3VyVm91cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxEcm9wZG93biB0aXRsZT17aXRlbS5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rcy5tYXAoKGxpbmssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bGluay5ocmVmfT57bGluay5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdk1vYmlsZV9iYWNrZ3JvdW5kXCI+Jm5ic3A7PC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApIDogKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnktbG9nb1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtsb2dvLmhyZWZ9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtsb2dvLmltYWdlLnVybH1gfSBhbHQ9e2xvZ28uaW1hZ2UuYWx0ZXJuYXRpdmVUZXh0fSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5X2xpbmtzXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeV9saW5rcy0taXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtc1wiIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0RHJvcGRvd25BY3RpdmUodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtkcm9wZG93bkFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwifSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICc1cHgnLCBjdXJzb3I6ICdwb2ludGVyJywgcG9pbnRlcjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICBQb3VyIHZvdXMge2Ryb3Bkb3duQWN0aXZlID8gPElvSW9zQXJyb3dVcCAvPiA6IDxJb0lvc0Fycm93RG93biAvPn1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2l0ZW0gKyBpfWB9IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpdGVtLmxpbmtfaHJlZiA9PT0gcm91dGVyLnJvdXRlICYmIFwiYWN0aXZlXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmtfaHJlZn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtfbGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIHtjdGEubWFwKChiLCBqKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHtiICsgan1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuLSR7Yi5jbGFzc05hbWV9YH1cclxuICAgICAgICAgICAgICAgIGhyZWY9e2IuaHJlZn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtiLmxhYmVsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2Ryb3Bkb3duQWN0aXZlICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duTWVudVwiIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0RHJvcGRvd25BY3RpdmUoZmFsc2UpfT5cclxuICAgICAgICAgICAge3BvdXJWb3VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duU2VjdGlvblwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGgyPntpdGVtLmxhYmVsfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtzLm1hcCgoZHJvcGRvd25MaW5rLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZHJvcGRvd25MaW5rLmhyZWZ9Pntkcm9wZG93bkxpbmsubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhd2luZG93V2lkdGggPyBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCkgOiBudWxsO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvdyk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93KTtcclxuICAgIH07XHJcbiAgfSwgW3dpbmRvd1dpZHRoXSk7XHJcblxyXG4gIHJldHVybiA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPntyZW5kZXJOYXZiYXIoKX08L25hdj47XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==