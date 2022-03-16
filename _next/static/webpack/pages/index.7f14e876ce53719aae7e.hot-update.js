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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\components\\DropdownLink.js",
    _this = undefined,
    _s = $RefreshSig$();



var DropdownLink = function DropdownLink(_ref) {
  _s();

  var children = _ref.children,
      label = _ref.label;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      focus = _useState[0],
      setFocus = _useState[1];

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
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this), focus ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IoIosArrowUp, {
        size: "20px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 42
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IoIosArrowDown, {
        size: "20px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 73
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), focus && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "content" + (focus ? " focus" : ""),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, _this);
};

_s(DropdownLink, "JcMW5INHEFpLqO0Ud660bC8g4FE=");

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


/***/ }),

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
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dropdown */ "./components/Dropdown.js");
/* harmony import */ var _DropdownLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropdownLink */ "./components/DropdownLink.js");
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
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "navbar_primary-right",
        onClick: renderNavMobile,
        children: isOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineClose, {
          className: "ham"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiMenuAlt3, {
          className: "ham"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
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
                lineNumber: 99,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_8__.IoIosArrowForward, {
                style: {
                  position: 'relative',
                  left: '20px',
                  top: '4px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
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
                  lineNumber: 106,
                  columnNumber: 23
                }, _this)
              }, "".concat(item + a), false, {
                fileName: _jsxFileName,
                lineNumber: 105,
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
                  lineNumber: 117,
                  columnNumber: 23
                }, _this)
              }, "".concat(g + h), false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 21
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 15
        }, _this), activeMenu == 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pourVousMenuMobile",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsArrowLeft, {
            size: 40,
            onClick: function onClick() {
              return setActiveMenu(0);
            },
            className: "backButton"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "pourVousList",
            children: pourVous.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownLink__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 23
                }, _this), item.links.map(function (link, idx) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: link.href,
                      children: link.label
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 27
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 25
                  }, _this);
                })]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navMobile_background",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }, _this)]
      }, void 0, true) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
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
              lineNumber: 165,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
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
                children: ["Pour vous ", dropdownActive ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_8__.IoIosArrowUp, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 47
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_8__.IoIosArrowDown, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 66
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
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
                  lineNumber: 178,
                  columnNumber: 19
                }, _this)
              }, "".concat(item + i), false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 17
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
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
              lineNumber: 191,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
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
              lineNumber: 204,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: item.links.map(function (dropdownLink, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: dropdownLink.href,
                    children: dropdownLink.label
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 23
                  }, _this)
                }, idx, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 17
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
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
    lineNumber: 232,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bkxpbmsuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIkRyb3Bkb3duTGluayIsImNoaWxkcmVuIiwibGFiZWwiLCJ1c2VTdGF0ZSIsImZvY3VzIiwic2V0Rm9jdXMiLCJ0b2dnbGVGb2N1cyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxpbmtzIiwibGlua19sYWJlbCIsImxpbmtfaHJlZiIsInBvdXJWb3VzIiwiaHJlZiIsIk5hdmJhciIsIm5hdmJhciIsImxvZ28iLCJsaW5rIiwiY3RhIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsImlzT3BlbiIsInNldElzT3BlbiIsImRyb3Bkb3duQWN0aXZlIiwic2V0RHJvcGRvd25BY3RpdmUiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVdpbmRvdyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyZW5kZXJOYXZNb2JpbGUiLCJ1c2VFZmZlY3QiLCJyZW5kZXJOYXZiYXIiLCJpbWFnZSIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsImN1cnNvciIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsIm1hcCIsIml0ZW0iLCJhIiwicm91dGUiLCJnIiwiaCIsImNsYXNzTmFtZSIsImluZGV4IiwiaWR4IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJnYXAiLCJwb2ludGVyIiwiaSIsImIiLCJqIiwiZHJvcGRvd25MaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FB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SUFBdEI7QUFBQSw4QkFBNkI2QyxZQUFZLENBQUN4RDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBQVNnRCxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRGM7QUFBQSxlQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBLGFBQXNDRCxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURZO0FBQUEsU0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4Q0o7QUFBQSxvQkFuRkY7QUE4SUQsR0FuSkQ7O0FBcUpBaEIsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsS0FBQ2QsV0FBRCxHQUFlQyxjQUFjLENBQUNVLE1BQU0sQ0FBQ0MsVUFBUixDQUE3QixHQUFtRCxJQUFuRDtBQUVBRCxVQUFNLENBQUM2QixnQkFBUCxDQUF3QixRQUF4QixFQUFrQzlCLFlBQWxDO0FBRUEsV0FBTyxZQUFNO0FBQ1hDLFlBQU0sQ0FBQzhCLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDL0IsWUFBckM7QUFDRCxLQUZEO0FBR0QsR0FSUSxFQVFOLENBQUNWLFdBQUQsQ0FSTSxDQUFUO0FBVUEsc0JBQU87QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBLGNBQXlCZSxZQUFZO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztHQXhMdUJwQixNO1VBUVBjLGtEOzs7S0FST2QsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZjE0ZTg3NmNlNTM3MTlhYWU3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRHJvcGRvd25MaW5rID0gKHsgY2hpbGRyZW4sIGxhYmVsIH0pID0+IHtcclxuICAgIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUZvY3VzID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0Rm9jdXMoIWZvY3VzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bicgZGF0YS1mb2N1cz17Zm9jdXN9ID5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0b2dnbGVGb2N1c30gY2xhc3NOYW1lPXtcInRpdGxlXCIgKyAoZm9jdXMgPyBcIiBmb2N1c1wiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgPGgyPntsYWJlbH08L2gyPntmb2N1cyA/IDxJb0lvc0Fycm93VXAgc2l6ZT1cIjIwcHhcIiAvPiA6IDxJb0lvc0Fycm93RG93biBzaXplPVwiMjBweFwiIC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2ZvY3VzICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb250ZW50XCIgKyAoZm9jdXMgPyBcIiBmb2N1c1wiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25MaW5rOyIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGlNZW51QWx0MyB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93VXAsIElvSW9zQXJyb3dEb3duLCBJb0lvc0Fycm93Rm9yd2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHsgQnNBcnJvd0xlZnQgfSBmcm9tICdyZWFjdC1pY29ucy9icydcclxuaW1wb3J0IHsgTW9iaWxlRnJpZW5kbHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9Ecm9wZG93blwiO1xyXG5pbXBvcnQgRHJvcGRvd25MaW5rIGZyb20gXCIuL0Ryb3Bkb3duTGlua1wiO1xyXG5cclxuY29uc3QgbGlua3MgPSBbXHJcbiAgeyBsaW5rX2xhYmVsOiAnT2ZmcmVzJywgbGlua19ocmVmOiAnL3Byb2R1Y3QnIH0sXHJcbiAgeyBsaW5rX2xhYmVsOiAnQmxvZycsIGxpbmtfaHJlZjogJ2h0dHBzOi9cXC9ibG9nLmtsb3guaW8vJyB9LFxyXG4gIHsgbGlua19sYWJlbDogJ0NvbnRhY3QnLCBsaW5rX2hyZWY6ICcvY29udGFjdCcgfSxcclxuXVxyXG5cclxuY29uc3QgcG91clZvdXMgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICdFbmpldXgnLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAgeyBsYWJlbDogJ0NhbXBhZ25lJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdDb25zZWlsJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdNYXJrZXRwbGFjZScsIGhyZWY6ICcvbWFya2V0cGxhY2UnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1R5cG9sb2dpZScsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7IGxhYmVsOiAnTm90b3Jpw6l0w6knLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ1BlcmZvcm1hbmNlJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdUcmFmaWMnLCBocmVmOiAnLycgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdTZWN0ZXVyJyxcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIHsgbGFiZWw6ICdTdGFydC11cCcsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnRS1jb21tZXJjZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnw4l2w6luZW1lbnRzJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdBZ2VuY2UnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ1RQRS9QTUUnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ1wiUHJvZHVpdCBwaHlzaXF1ZVwiJywgaHJlZjogJy8nIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHsgbmF2YmFyOiB7IGxvZ28sIGxpbmssIGN0YSB9IH0pIHtcclxuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duQWN0aXZlLCBzZXREcm9wZG93bkFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gY29uc3QgW2lzQ2xpY2tlZCwgc2V0SXNDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyBjb25zdCBbZmlyc3RNZW51QWN0aXZlLCBzZXRGaXJzdE1lbnVBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVXaW5kb3cgPSAoKSA9PiB7XHJcbiAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTmF2TW9iaWxlID0gKGUpID0+IHtcclxuICAgIHJldHVybiBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNPcGVuKSB7XHJcbiAgICAgIHNldEFjdGl2ZU1lbnUoMCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzT3Blbl0pXHJcblxyXG4gIGNvbnN0IHJlbmRlck5hdmJhciA9ICgpID0+IHtcclxuICAgIC8vIGlmICghd2luZG93V2lkdGgpIHtcclxuICAgIC8vICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudCAvPjtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gd2luZG93V2lkdGggPCAxMDQ3ID8gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1sb2dvXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtsb2dvLmhyZWZ9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7bG9nby5pbWFnZS51cmx9YH0gYWx0PXtsb2dvLmltYWdlLmFsdGVybmF0aXZlVGV4dH0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LXJpZ2h0XCIgb25DbGljaz17cmVuZGVyTmF2TW9iaWxlfT5cclxuICAgICAgICAgIHtpc09wZW4gPyAoXHJcbiAgICAgICAgICAgIDxBaU91dGxpbmVDbG9zZSBjbGFzc05hbWU9XCJoYW1cIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEhpTWVudUFsdDMgY2xhc3NOYW1lPVwiaGFtXCIgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHt3aW5kb3dXaWR0aCA8IDEwNDcgJiYgaXNPcGVuID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge2FjdGl2ZU1lbnUgPT0gMCAmJlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2TW9iaWxlSXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQb3VyIHZvdXNcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsZWZ0OiAnMjBweCcsIHRvcDogJzRweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAge2xpbmtzLm1hcCgoaXRlbSwgYSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2l0ZW0gKyBhfWB9IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2l0ZW0ubGlua19ocmVmID09PSByb3V0ZXIucm91dGUgJiYgXCJhY3RpdmVcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmtfaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua19sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtjdGEubWFwKChnLCBoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7ZyArIGh9YH0gY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuLSR7Zy5jbGFzc05hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17Zy5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Zy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHthY3RpdmVNZW51ID09IDEgJiZcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvdXJWb3VzTWVudU1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPEJzQXJyb3dMZWZ0IHNpemU9ezQwfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KDApfSBjbGFzc05hbWU9XCJiYWNrQnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwb3VyVm91c0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAge3BvdXJWb3VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaW5rIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rcy5tYXAoKGxpbmssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsuaHJlZn0+e2xpbmsubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8RHJvcGRvd24gdGl0bGU9e2l0ZW0ubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua3MubWFwKChsaW5rLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsuaHJlZn0+e2xpbmsubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZNb2JpbGVfYmFja2dyb3VuZFwiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LWxvZ29cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj17bG9nby5ocmVmfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7bG9nby5pbWFnZS51cmx9YH0gYWx0PXtsb2dvLmltYWdlLmFsdGVybmF0aXZlVGV4dH0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeV9saW5rc1wiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlfbGlua3MtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbXNcIiBvbk1vdXNlRW50ZXI9eygpID0+IHNldERyb3Bkb3duQWN0aXZlKHRydWUpfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17ZHJvcGRvd25BY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnNXB4JywgY3Vyc29yOiAncG9pbnRlcicsIHBvaW50ZXI6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgUG91ciB2b3VzIHtkcm9wZG93bkFjdGl2ZSA/IDxJb0lvc0Fycm93VXAgLz4gOiA8SW9Jb3NBcnJvd0Rvd24gLz59XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7bGlua3MubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtpdGVtICsgaX1gfSBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXRlbS5saW5rX2hyZWYgPT09IHJvdXRlci5yb3V0ZSAmJiBcImFjdGl2ZVwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rX2hyZWZ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rX2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1yaWdodFwiPlxyXG4gICAgICAgICAgICB7Y3RhLm1hcCgoYiwgaikgPT4gKFxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGtleT17YCR7YiArIGp9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0bi0ke2IuY2xhc3NOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtiLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17Yi5sYWJlbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtkcm9wZG93bkFjdGl2ZSAmJlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bk1lbnVcIiBvbk1vdXNlTGVhdmU9eygpID0+IHNldERyb3Bkb3duQWN0aXZlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIHtwb3VyVm91cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blNlY3Rpb25cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxoMj57aXRlbS5sYWJlbH08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5saW5rcy5tYXAoKGRyb3Bkb3duTGluaywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Ryb3Bkb3duTGluay5ocmVmfT57ZHJvcGRvd25MaW5rLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIXdpbmRvd1dpZHRoID8gc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpIDogbnVsbDtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVXaW5kb3cpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvdyk7XHJcbiAgICB9O1xyXG4gIH0sIFt3aW5kb3dXaWR0aF0pO1xyXG5cclxuICByZXR1cm4gPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj57cmVuZGVyTmF2YmFyKCl9PC9uYXY+O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=