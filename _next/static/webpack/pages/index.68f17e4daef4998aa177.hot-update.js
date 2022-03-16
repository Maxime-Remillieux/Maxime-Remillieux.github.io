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
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: item.links.map(function (link, idx) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: link.href,
                      children: link.label
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 31
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 29
                  }, _this);
                })
              }, index, false, {
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
          lineNumber: 154,
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
              lineNumber: 163,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
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
                  lineNumber: 171,
                  columnNumber: 47
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowDown, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 66
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
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
                  lineNumber: 176,
                  columnNumber: 19
                }, _this)
              }, "".concat(item + i), false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
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
              lineNumber: 189,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
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
              lineNumber: 202,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: item.links.map(function (dropdownLink, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: dropdownLink.href,
                    children: dropdownLink.label
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 23
                  }, _this)
                }, idx, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 17
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
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
    lineNumber: 230,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsibGlua3MiLCJsaW5rX2xhYmVsIiwibGlua19ocmVmIiwicG91clZvdXMiLCJsYWJlbCIsImhyZWYiLCJOYXZiYXIiLCJuYXZiYXIiLCJsb2dvIiwibGluayIsImN0YSIsInVzZVN0YXRlIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsImlzT3BlbiIsInNldElzT3BlbiIsImRyb3Bkb3duQWN0aXZlIiwic2V0RHJvcGRvd25BY3RpdmUiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVdpbmRvdyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyZW5kZXJOYXZNb2JpbGUiLCJlIiwidXNlRWZmZWN0IiwicmVuZGVyTmF2YmFyIiwiaW1hZ2UiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJjdXJzb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJtYXAiLCJpdGVtIiwiYSIsInJvdXRlIiwiZyIsImgiLCJjbGFzc05hbWUiLCJpbmRleCIsImlkeCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwicG9pbnRlciIsImkiLCJiIiwiaiIsImRyb3Bkb3duTGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFBRUMsWUFBVSxFQUFFLFFBQWQ7QUFBd0JDLFdBQVMsRUFBRTtBQUFuQyxDQURZLEVBRVo7QUFBRUQsWUFBVSxFQUFFLE1BQWQ7QUFBc0JDLFdBQVMsRUFBRTtBQUFqQyxDQUZZLEVBR1o7QUFBRUQsWUFBVSxFQUFFLFNBQWQ7QUFBeUJDLFdBQVMsRUFBRTtBQUFwQyxDQUhZLENBQWQ7QUFNQSxJQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxPQUFLLEVBQUUsUUFEVDtBQUVFSixPQUFLLEVBQUUsQ0FDTDtBQUFFSSxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsUUFBSSxFQUFFO0FBQTNCLEdBREssRUFFTDtBQUFFRCxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsUUFBSSxFQUFFO0FBQTFCLEdBRkssRUFHTDtBQUFFRCxTQUFLLEVBQUUsYUFBVDtBQUF3QkMsUUFBSSxFQUFFO0FBQTlCLEdBSEs7QUFGVCxDQURlLEVBU2Y7QUFDRUQsT0FBSyxFQUFFLFdBRFQ7QUFFRUosT0FBSyxFQUFFLENBQ0w7QUFBRUksU0FBSyxFQUFFLFdBQVQ7QUFBc0JDLFFBQUksRUFBRTtBQUE1QixHQURLLEVBRUw7QUFBRUQsU0FBSyxFQUFFLGFBQVQ7QUFBd0JDLFFBQUksRUFBRTtBQUE5QixHQUZLLEVBR0w7QUFBRUQsU0FBSyxFQUFFLFFBQVQ7QUFBbUJDLFFBQUksRUFBRTtBQUF6QixHQUhLO0FBRlQsQ0FUZSxFQWlCZjtBQUNFRCxPQUFLLEVBQUUsU0FEVDtBQUVFSixPQUFLLEVBQUUsQ0FDTDtBQUFFSSxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsUUFBSSxFQUFFO0FBQTNCLEdBREssRUFFTDtBQUFFRCxTQUFLLEVBQUUsWUFBVDtBQUF1QkMsUUFBSSxFQUFFO0FBQTdCLEdBRkssRUFHTDtBQUFFRCxTQUFLLEVBQUUsWUFBVDtBQUF1QkMsUUFBSSxFQUFFO0FBQTdCLEdBSEssRUFJTDtBQUFFRCxTQUFLLEVBQUUsUUFBVDtBQUFtQkMsUUFBSSxFQUFFO0FBQXpCLEdBSkssRUFLTDtBQUFFRCxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsUUFBSSxFQUFFO0FBQTFCLEdBTEssRUFNTDtBQUFFRCxTQUFLLEVBQUUsb0JBQVQ7QUFBK0JDLFFBQUksRUFBRTtBQUFyQyxHQU5LO0FBRlQsQ0FqQmUsQ0FBakI7QUE4QmUsU0FBU0MsTUFBVCxPQUFpRDtBQUFBOztBQUFBOztBQUFBLHlCQUEvQkMsTUFBK0I7QUFBQSxNQUFyQkMsSUFBcUIsZUFBckJBLElBQXFCO0FBQUEsTUFBZkMsSUFBZSxlQUFmQSxJQUFlO0FBQUEsTUFBVEMsR0FBUyxlQUFUQSxHQUFTOztBQUFBLGtCQUN4QkMsK0NBQVEsQ0FBQyxJQUFELENBRGdCO0FBQUEsTUFDdkRDLFdBRHVEO0FBQUEsTUFDMUNDLGNBRDBDOztBQUFBLG1CQUVsQ0YsK0NBQVEsQ0FBQyxLQUFELENBRjBCO0FBQUEsTUFFdkRHLE1BRnVEO0FBQUEsTUFFL0NDLFNBRitDOztBQUFBLG1CQUdsQkosK0NBQVEsQ0FBQyxLQUFELENBSFU7QUFBQSxNQUd2REssY0FIdUQ7QUFBQSxNQUd2Q0MsaUJBSHVDLGtCQUk5RDtBQUNBOzs7QUFMOEQsbUJBTTFCTiwrQ0FBUSxDQUFDLENBQUQsQ0FOa0I7QUFBQSxNQU12RE8sVUFOdUQ7QUFBQSxNQU0zQ0MsYUFOMkM7O0FBUTlELE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QlQsa0JBQWMsQ0FBQ1UsTUFBTSxDQUFDQyxVQUFSLENBQWQ7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzdCLFdBQU9YLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWhCO0FBQ0QsR0FGRDs7QUFJQWEsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDYixNQUFMLEVBQWE7QUFDWEssbUJBQWEsQ0FBQyxDQUFELENBQWI7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDTCxNQUFELENBSk0sQ0FBVDs7QUFNQSxNQUFNYyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUVBLFdBQU9oQixXQUFXLEdBQUcsSUFBZCxnQkFDTDtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFFSixJQUFJLENBQUNILElBQWQ7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsWUFBS0csSUFBSSxDQUFDcUIsS0FBTCxDQUFXQyxHQUFoQixDQUFSO0FBQStCLGVBQUcsRUFBRXRCLElBQUksQ0FBQ3FCLEtBQUwsQ0FBV0U7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBc0MsZUFBTyxFQUFFTixlQUEvQztBQUFBLGtCQUNHWCxNQUFNLGdCQUNMLDhEQUFDLDBEQUFEO0FBQWdCLG1CQUFTLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESyxnQkFHTCw4REFBQyxzREFBRDtBQUFZLG1CQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixFQWNHRixXQUFXLEdBQUcsSUFBZCxJQUFzQkUsTUFBdEIsZ0JBQ0M7QUFBQSxtQkFDR0ksVUFBVSxJQUFJLENBQWQsaUJBQ0M7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDRTtBQUFJLHFCQUFTLEVBQUMsZ0JBQWQ7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUMsT0FBZDtBQUFBLHNDQUNFO0FBQUcscUJBQUssRUFBRTtBQUFFYyx3QkFBTSxFQUFFO0FBQVYsaUJBQVY7QUFBaUMsdUJBQU8sRUFBRTtBQUFBLHlCQUFNYixhQUFhLENBQUMsQ0FBRCxDQUFuQjtBQUFBLGlCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFLDhEQUFDLDZEQUFEO0FBQW1CLHFCQUFLLEVBQUU7QUFBRWMsMEJBQVEsRUFBRSxVQUFaO0FBQXdCQyxzQkFBSSxFQUFFLE1BQTlCO0FBQXNDQyxxQkFBRyxFQUFFO0FBQTNDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBT0duQyxLQUFLLENBQUNvQyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsa0NBQ1Q7QUFBd0IseUJBQVMsRUFBQyxPQUFsQztBQUFBLHVDQUNFO0FBQ0UsMkJBQVMsWUFBS0QsSUFBSSxDQUFDbkMsU0FBTCxLQUFtQmtCLE1BQU0sQ0FBQ21CLEtBQTFCLElBQW1DLFFBQXhDLENBRFg7QUFFRSxzQkFBSSxFQUFFRixJQUFJLENBQUNuQyxTQUZiO0FBQUEsNEJBSUdtQyxJQUFJLENBQUNwQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERiwyQkFBWW9DLElBQUksR0FBR0MsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEUztBQUFBLGFBQVYsQ0FQSCxFQWtCRzVCLEdBQUcsQ0FBQzBCLEdBQUosQ0FBUSxVQUFDSSxDQUFELEVBQUlDLENBQUo7QUFBQSxrQ0FDUDtBQUFxQix5QkFBUyxFQUFDLE9BQS9CO0FBQUEsdUNBQ0UsOERBQUMsNENBQUQ7QUFDRSwyQkFBUyxnQkFBU0QsQ0FBQyxDQUFDRSxTQUFYLENBRFg7QUFFRSxzQkFBSSxFQUFFRixDQUFDLENBQUNuQyxJQUZWO0FBR0UsdUJBQUssRUFBRW1DLENBQUMsQ0FBQ3BDO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLDJCQUFZb0MsQ0FBQyxHQUFHQyxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURPO0FBQUEsYUFBUixDQWxCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBaUNHdkIsVUFBVSxJQUFJLENBQWQsaUJBQ0M7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQUEsa0NBQ0UsOERBQUMsdURBQUQ7QUFBYSxnQkFBSSxFQUFFLEVBQW5CO0FBQXVCLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUMsYUFBYSxDQUFDLENBQUQsQ0FBbkI7QUFBQSxhQUFoQztBQUF3RCxxQkFBUyxFQUFDO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFJLHFCQUFTLEVBQUMsY0FBZDtBQUFBLHNCQUNHaEIsUUFBUSxDQUFDaUMsR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT00sS0FBUDtBQUFBLGtDQUNaO0FBQUEsMEJBQzZCTixJQUFJLENBQUNyQyxLQUFMLENBQVdvQyxHQUFYLENBQWUsVUFBQzNCLElBQUQsRUFBT21DLEdBQVA7QUFBQSxzQ0FDcEM7QUFBQSwyQ0FDRTtBQUFHLDBCQUFJLEVBQUVuQyxJQUFJLENBQUNKLElBQWQ7QUFBQSxnQ0FBcUJJLElBQUksQ0FBQ0w7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQUFTd0MsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURvQztBQUFBLGlCQUFmO0FBRDdCLGlCQUFTRCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFk7QUFBQSxhQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbENKLGVBNkRFO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3REY7QUFBQSxzQkFERCxHQWdFRyxJQTlFTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxnQkFrRkw7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBQSxpQ0FDRTtBQUFHLGdCQUFJLEVBQUVuQyxJQUFJLENBQUNILElBQWQ7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLFlBQUtHLElBQUksQ0FBQ3FCLEtBQUwsQ0FBV0MsR0FBaEIsQ0FBUjtBQUErQixpQkFBRyxFQUFFdEIsSUFBSSxDQUFDcUIsS0FBTCxDQUFXRTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFLLG1CQUFTLEVBQUMsc0JBQWY7QUFBQSxpQ0FDRTtBQUFJLHFCQUFTLEVBQUMsNEJBQWQ7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUMsT0FBZDtBQUFzQiwwQkFBWSxFQUFFO0FBQUEsdUJBQU1kLGlCQUFpQixDQUFDLElBQUQsQ0FBdkI7QUFBQSxlQUFwQztBQUFBLHFDQUNFO0FBQUcseUJBQVMsRUFBRUQsY0FBYyxHQUFHLFFBQUgsR0FBYyxFQUExQztBQUE4QyxxQkFBSyxFQUFFO0FBQUU2Qix5QkFBTyxFQUFFLE1BQVg7QUFBbUJDLDRCQUFVLEVBQUUsUUFBL0I7QUFBeUNDLHFCQUFHLEVBQUUsS0FBOUM7QUFBcURmLHdCQUFNLEVBQUUsU0FBN0Q7QUFBd0VnQix5QkFBTyxFQUFFO0FBQWpGLGlCQUFyRDtBQUFBLHlDQUNhaEMsY0FBYyxnQkFBRyw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFILGdCQUFzQiw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBTUdoQixLQUFLLENBQUNvQyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPWSxDQUFQO0FBQUEsa0NBQ1Q7QUFBd0IseUJBQVMsRUFBQyxPQUFsQztBQUFBLHVDQUNFO0FBQ0UsMkJBQVMsWUFBS1osSUFBSSxDQUFDbkMsU0FBTCxLQUFtQmtCLE1BQU0sQ0FBQ21CLEtBQTFCLElBQW1DLFFBQXhDLENBRFg7QUFFRSxzQkFBSSxFQUFFRixJQUFJLENBQUNuQyxTQUZiO0FBQUEsNEJBSUdtQyxJQUFJLENBQUNwQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERiwyQkFBWW9DLElBQUksR0FBR1ksQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEUztBQUFBLGFBQVYsQ0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBMkJFO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBLG9CQUNHdkMsR0FBRyxDQUFDMEIsR0FBSixDQUFRLFVBQUNjLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGdDQUNQLDhEQUFDLDRDQUFEO0FBRUUsdUJBQVMsZ0JBQVNELENBQUMsQ0FBQ1IsU0FBWCxDQUZYO0FBR0Usa0JBQUksRUFBRVEsQ0FBQyxDQUFDN0MsSUFIVjtBQUlFLG1CQUFLLEVBQUU2QyxDQUFDLENBQUM5QztBQUpYLHlCQUNVOEMsQ0FBQyxHQUFHQyxDQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRE87QUFBQSxXQUFSO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUF1Q0duQyxjQUFjLGlCQUNiO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQThCLG9CQUFZLEVBQUU7QUFBQSxpQkFBTUMsaUJBQWlCLENBQUMsS0FBRCxDQUF2QjtBQUFBLFNBQTVDO0FBQUEsa0JBQ0dkLFFBQVEsQ0FBQ2lDLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU9NLEtBQVA7QUFBQSw4QkFDWjtBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxvQ0FDRTtBQUFBLHdCQUFLTixJQUFJLENBQUNqQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLHdCQUNHaUMsSUFBSSxDQUFDckMsS0FBTCxDQUFXb0MsR0FBWCxDQUFlLFVBQUNnQixZQUFELEVBQWVSLEdBQWY7QUFBQSxvQ0FDZDtBQUFBLHlDQUNFO0FBQUcsd0JBQUksRUFBRVEsWUFBWSxDQUFDL0MsSUFBdEI7QUFBQSw4QkFBNkIrQyxZQUFZLENBQUNoRDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBQVN3QyxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRGM7QUFBQSxlQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBLGFBQXNDRCxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURZO0FBQUEsU0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4Q0o7QUFBQSxvQkFsRkY7QUE2SUQsR0FsSkQ7O0FBb0pBaEIsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsS0FBQ2YsV0FBRCxHQUFlQyxjQUFjLENBQUNVLE1BQU0sQ0FBQ0MsVUFBUixDQUE3QixHQUFtRCxJQUFuRDtBQUVBRCxVQUFNLENBQUM4QixnQkFBUCxDQUF3QixRQUF4QixFQUFrQy9CLFlBQWxDO0FBRUEsV0FBTyxZQUFNO0FBQ1hDLFlBQU0sQ0FBQytCLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDaEMsWUFBckM7QUFDRCxLQUZEO0FBR0QsR0FSUSxFQVFOLENBQUNWLFdBQUQsQ0FSTSxDQUFUO0FBVUEsc0JBQU87QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBLGNBQXlCZ0IsWUFBWTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0F2THVCdEIsTTtVQVFQZSxrRDs7O0tBUk9mLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjhmMTdlNGRhZWY0OTk4YWExNzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGlNZW51QWx0MyB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93VXAsIElvSW9zQXJyb3dEb3duLCBJb0lvc0Fycm93Rm9yd2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHsgQnNBcnJvd0xlZnQgfSBmcm9tICdyZWFjdC1pY29ucy9icydcclxuaW1wb3J0IHsgTW9iaWxlRnJpZW5kbHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9Ecm9wZG93blwiO1xyXG5cclxuY29uc3QgbGlua3MgPSBbXHJcbiAgeyBsaW5rX2xhYmVsOiAnT2ZmcmVzJywgbGlua19ocmVmOiAnL3Byb2R1Y3QnIH0sXHJcbiAgeyBsaW5rX2xhYmVsOiAnQmxvZycsIGxpbmtfaHJlZjogJ2h0dHBzOi9cXC9ibG9nLmtsb3guaW8vJyB9LFxyXG4gIHsgbGlua19sYWJlbDogJ0NvbnRhY3QnLCBsaW5rX2hyZWY6ICcvY29udGFjdCcgfSxcclxuXVxyXG5cclxuY29uc3QgcG91clZvdXMgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICdFbmpldXgnLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAgeyBsYWJlbDogJ0NhbXBhZ25lJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdDb25zZWlsJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdNYXJrZXRwbGFjZScsIGhyZWY6ICcvbWFya2V0cGxhY2UnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1R5cG9sb2dpZScsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7IGxhYmVsOiAnTm90b3Jpw6l0w6knLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ1BlcmZvcm1hbmNlJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdUcmFmaWMnLCBocmVmOiAnLycgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdTZWN0ZXVyJyxcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIHsgbGFiZWw6ICdTdGFydC11cCcsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnRS1jb21tZXJjZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnw4l2w6luZW1lbnRzJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdBZ2VuY2UnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ1RQRS9QTUUnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ1wiUHJvZHVpdCBwaHlzaXF1ZVwiJywgaHJlZjogJy8nIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHsgbmF2YmFyOiB7IGxvZ28sIGxpbmssIGN0YSB9IH0pIHtcclxuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duQWN0aXZlLCBzZXREcm9wZG93bkFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gY29uc3QgW2lzQ2xpY2tlZCwgc2V0SXNDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyBjb25zdCBbZmlyc3RNZW51QWN0aXZlLCBzZXRGaXJzdE1lbnVBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVXaW5kb3cgPSAoKSA9PiB7XHJcbiAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTmF2TW9iaWxlID0gKGUpID0+IHtcclxuICAgIHJldHVybiBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNPcGVuKSB7XHJcbiAgICAgIHNldEFjdGl2ZU1lbnUoMCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzT3Blbl0pXHJcblxyXG4gIGNvbnN0IHJlbmRlck5hdmJhciA9ICgpID0+IHtcclxuICAgIC8vIGlmICghd2luZG93V2lkdGgpIHtcclxuICAgIC8vICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudCAvPjtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gd2luZG93V2lkdGggPCAxMDQ3ID8gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1sb2dvXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtsb2dvLmhyZWZ9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7bG9nby5pbWFnZS51cmx9YH0gYWx0PXtsb2dvLmltYWdlLmFsdGVybmF0aXZlVGV4dH0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LXJpZ2h0XCIgb25DbGljaz17cmVuZGVyTmF2TW9iaWxlfT5cclxuICAgICAgICAgIHtpc09wZW4gPyAoXHJcbiAgICAgICAgICAgIDxBaU91dGxpbmVDbG9zZSBjbGFzc05hbWU9XCJoYW1cIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEhpTWVudUFsdDMgY2xhc3NOYW1lPVwiaGFtXCIgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHt3aW5kb3dXaWR0aCA8IDEwNDcgJiYgaXNPcGVuID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge2FjdGl2ZU1lbnUgPT0gMCAmJlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2TW9iaWxlSXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQb3VyIHZvdXNcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsZWZ0OiAnMjBweCcsIHRvcDogJzRweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAge2xpbmtzLm1hcCgoaXRlbSwgYSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2l0ZW0gKyBhfWB9IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2l0ZW0ubGlua19ocmVmID09PSByb3V0ZXIucm91dGUgJiYgXCJhY3RpdmVcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmtfaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua19sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtjdGEubWFwKChnLCBoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7ZyArIGh9YH0gY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuLSR7Zy5jbGFzc05hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17Zy5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Zy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHthY3RpdmVNZW51ID09IDEgJiZcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvdXJWb3VzTWVudU1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPEJzQXJyb3dMZWZ0IHNpemU9ezQwfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KDApfSBjbGFzc05hbWU9XCJiYWNrQnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwb3VyVm91c0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAge3BvdXJWb3VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtzLm1hcCgobGluaywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rLmhyZWZ9PntsaW5rLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPERyb3Bkb3duIHRpdGxlPXtpdGVtLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtzLm1hcCgobGluaywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rLmhyZWZ9PntsaW5rLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2TW9iaWxlX2JhY2tncm91bmRcIj4mbmJzcDs8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgOiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1sb2dvXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2xvZ28uaHJlZn0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2xvZ28uaW1hZ2UudXJsfWB9IGFsdD17bG9nby5pbWFnZS5hbHRlcm5hdGl2ZVRleHR9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlfbGlua3NcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5X2xpbmtzLS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1zXCIgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXREcm9wZG93bkFjdGl2ZSh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ryb3Bkb3duQWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJ9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzVweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBwb2ludGVyOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIFBvdXIgdm91cyB7ZHJvcGRvd25BY3RpdmUgPyA8SW9Jb3NBcnJvd1VwIC8+IDogPElvSW9zQXJyb3dEb3duIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAge2xpbmtzLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17YCR7aXRlbSArIGl9YH0gY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2l0ZW0ubGlua19ocmVmID09PSByb3V0ZXIucm91dGUgJiYgXCJhY3RpdmVcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ubGlua19ocmVmfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua19sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnktcmlnaHRcIj5cclxuICAgICAgICAgICAge2N0YS5tYXAoKGIsIGopID0+IChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake2IgKyBqfWB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4tJHtiLmNsYXNzTmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgaHJlZj17Yi5ocmVmfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2IubGFiZWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7ZHJvcGRvd25BY3RpdmUgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25NZW51XCIgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXREcm9wZG93bkFjdGl2ZShmYWxzZSl9PlxyXG4gICAgICAgICAgICB7cG91clZvdXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25TZWN0aW9uXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8aDI+e2l0ZW0ubGFiZWx9PC9oMj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua3MubWFwKChkcm9wZG93bkxpbmssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtkcm9wZG93bkxpbmsuaHJlZn0+e2Ryb3Bkb3duTGluay5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICF3aW5kb3dXaWR0aCA/IHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKSA6IG51bGw7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVXaW5kb3cpO1xyXG4gICAgfTtcclxuICB9LCBbd2luZG93V2lkdGhdKTtcclxuXHJcbiAgcmV0dXJuIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+e3JlbmRlck5hdmJhcigpfTwvbmF2PjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9