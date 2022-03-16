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
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownLink__WEBPACK_IMPORTED_MODULE_5__.default, {
                  label: item.label,
                  children: item.links.map(function (link, idx) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        href: link.href,
                        children: link.label
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 29
                      }, _this)
                    }, idx, false, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 27
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 23
                }, _this)
              }, index, false, {
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
          lineNumber: 157,
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
              lineNumber: 166,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
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
                  lineNumber: 174,
                  columnNumber: 47
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_8__.IoIosArrowDown, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 66
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
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
                  lineNumber: 179,
                  columnNumber: 19
                }, _this)
              }, "".concat(item + i), false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
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
              lineNumber: 192,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
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
              lineNumber: 205,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: item.links.map(function (dropdownLink, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: dropdownLink.href,
                    children: dropdownLink.label
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 23
                  }, _this)
                }, idx, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 17
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
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
    lineNumber: 233,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsibGlua3MiLCJsaW5rX2xhYmVsIiwibGlua19ocmVmIiwicG91clZvdXMiLCJsYWJlbCIsImhyZWYiLCJOYXZiYXIiLCJuYXZiYXIiLCJsb2dvIiwibGluayIsImN0YSIsInVzZVN0YXRlIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsImlzT3BlbiIsInNldElzT3BlbiIsImRyb3Bkb3duQWN0aXZlIiwic2V0RHJvcGRvd25BY3RpdmUiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVdpbmRvdyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyZW5kZXJOYXZNb2JpbGUiLCJlIiwidXNlRWZmZWN0IiwicmVuZGVyTmF2YmFyIiwiaW1hZ2UiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJjdXJzb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJtYXAiLCJpdGVtIiwiYSIsInJvdXRlIiwiZyIsImgiLCJjbGFzc05hbWUiLCJpbmRleCIsImlkeCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwicG9pbnRlciIsImkiLCJiIiwiaiIsImRyb3Bkb3duTGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFBRUMsWUFBVSxFQUFFLFFBQWQ7QUFBd0JDLFdBQVMsRUFBRTtBQUFuQyxDQURZLEVBRVo7QUFBRUQsWUFBVSxFQUFFLE1BQWQ7QUFBc0JDLFdBQVMsRUFBRTtBQUFqQyxDQUZZLEVBR1o7QUFBRUQsWUFBVSxFQUFFLFNBQWQ7QUFBeUJD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QUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUEsYUFBc0NELEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFk7QUFBQSxTQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhDSjtBQUFBLG9CQXBGRjtBQStJRCxHQXBKRDs7QUFzSkFoQixrREFBUyxDQUFDLFlBQU07QUFDZCxLQUFDZixXQUFELEdBQWVDLGNBQWMsQ0FBQ1UsTUFBTSxDQUFDQyxVQUFSLENBQTdCLEdBQW1ELElBQW5EO0FBRUFELFVBQU0sQ0FBQzhCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDL0IsWUFBbEM7QUFFQSxXQUFPLFlBQU07QUFDWEMsWUFBTSxDQUFDK0IsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNoQyxZQUFyQztBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sQ0FBQ1YsV0FBRCxDQVJNLENBQVQ7QUFVQSxzQkFBTztBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUEsY0FBeUJnQixZQUFZO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztHQXpMdUJ0QixNO1VBUVBlLGtEOzs7S0FST2YsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NWE5MGE1NWMyODI2M2RlM2MxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIaU1lbnVBbHQzIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZUNsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dVcCwgSW9Jb3NBcnJvd0Rvd24sIElvSW9zQXJyb3dGb3J3YXJkIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBCc0Fycm93TGVmdCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xyXG5pbXBvcnQgeyBNb2JpbGVGcmllbmRseSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuL0Ryb3Bkb3duXCI7XHJcbmltcG9ydCBEcm9wZG93bkxpbmsgZnJvbSBcIi4vRHJvcGRvd25MaW5rXCI7XHJcblxyXG5jb25zdCBsaW5rcyA9IFtcclxuICB7IGxpbmtfbGFiZWw6ICdPZmZyZXMnLCBsaW5rX2hyZWY6ICcvcHJvZHVjdCcgfSxcclxuICB7IGxpbmtfbGFiZWw6ICdCbG9nJywgbGlua19ocmVmOiAnaHR0cHM6L1xcL2Jsb2cua2xveC5pby8nIH0sXHJcbiAgeyBsaW5rX2xhYmVsOiAnQ29udGFjdCcsIGxpbmtfaHJlZjogJy9jb250YWN0JyB9LFxyXG5dXHJcblxyXG5jb25zdCBwb3VyVm91cyA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ0VuamV1eCcsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7IGxhYmVsOiAnQ2FtcGFnbmUnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ0NvbnNlaWwnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ01hcmtldHBsYWNlJywgaHJlZjogJy9tYXJrZXRwbGFjZScgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnVHlwb2xvZ2llJyxcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIHsgbGFiZWw6ICdOb3RvcmnDqXTDqScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnUGVyZm9ybWFuY2UnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ1RyYWZpYycsIGhyZWY6ICcvJyB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1NlY3RldXInLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAgeyBsYWJlbDogJ1N0YXJ0LXVwJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdFLWNvbW1lcmNlJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICfDiXbDqW5lbWVudHMnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ0FnZW5jZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnVFBFL1BNRScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnXCJQcm9kdWl0IHBoeXNpcXVlXCInLCBocmVmOiAnLycgfSxcclxuICAgIF1cclxuICB9LFxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoeyBuYXZiYXI6IHsgbG9nbywgbGluaywgY3RhIH0gfSkge1xyXG4gIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZHJvcGRvd25BY3RpdmUsIHNldERyb3Bkb3duQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyBjb25zdCBbaXNDbGlja2VkLCBzZXRJc0NsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIGNvbnN0IFtmaXJzdE1lbnVBY3RpdmUsIHNldEZpcnN0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVdpbmRvdyA9ICgpID0+IHtcclxuICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJOYXZNb2JpbGUgPSAoZSkgPT4ge1xyXG4gICAgcmV0dXJuIHNldElzT3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc09wZW4pIHtcclxuICAgICAgc2V0QWN0aXZlTWVudSgwKTtcclxuICAgIH1cclxuICB9LCBbaXNPcGVuXSlcclxuXHJcbiAgY29uc3QgcmVuZGVyTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgLy8gaWYgKCF3aW5kb3dXaWR0aCkge1xyXG4gICAgLy8gICByZXR1cm4gPFJlYWN0LkZyYWdtZW50IC8+O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiB3aW5kb3dXaWR0aCA8IDEwNDcgPyAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LWxvZ29cIj5cclxuICAgICAgICAgIDxhIGhyZWY9e2xvZ28uaHJlZn0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtsb2dvLmltYWdlLnVybH1gfSBhbHQ9e2xvZ28uaW1hZ2UuYWx0ZXJuYXRpdmVUZXh0fSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnktcmlnaHRcIiBvbkNsaWNrPXtyZW5kZXJOYXZNb2JpbGV9PlxyXG4gICAgICAgICAge2lzT3BlbiA/IChcclxuICAgICAgICAgICAgPEFpT3V0bGluZUNsb3NlIGNsYXNzTmFtZT1cImhhbVwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8SGlNZW51QWx0MyBjbGFzc05hbWU9XCJoYW1cIiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3dpbmRvd1dpZHRoIDwgMTA0NyAmJiBpc09wZW4gPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7YWN0aXZlTWVudSA9PSAwICYmXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZNb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZNb2JpbGVJdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KDEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIFBvdXIgdm91c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0ZvcndhcmQgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxlZnQ6ICcyMHB4JywgdG9wOiAnNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICB7bGlua3MubWFwKChpdGVtLCBhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7aXRlbSArIGF9YH0gY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXRlbS5saW5rX2hyZWYgPT09IHJvdXRlci5yb3V0ZSAmJiBcImFjdGl2ZVwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ubGlua19ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rX2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2N0YS5tYXAoKGcsIGgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtnICsgaH1gfSBjbGFzc05hbWU9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4tJHtnLmNsYXNzTmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtnLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtnLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2FjdGl2ZU1lbnUgPT0gMSAmJlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG91clZvdXNNZW51TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8QnNBcnJvd0xlZnQgc2l6ZT17NDB9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoMCl9IGNsYXNzTmFtZT1cImJhY2tCdXR0b25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvdXJWb3VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cG91clZvdXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpbmsgbGFiZWw9e2l0ZW0ubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rcy5tYXAoKGxpbmssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rLmhyZWZ9PntsaW5rLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8RHJvcGRvd24gdGl0bGU9e2l0ZW0ubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua3MubWFwKChsaW5rLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsuaHJlZn0+e2xpbmsubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZNb2JpbGVfYmFja2dyb3VuZFwiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LWxvZ29cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj17bG9nby5ocmVmfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7bG9nby5pbWFnZS51cmx9YH0gYWx0PXtsb2dvLmltYWdlLmFsdGVybmF0aXZlVGV4dH0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeV9saW5rc1wiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlfbGlua3MtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbXNcIiBvbk1vdXNlRW50ZXI9eygpID0+IHNldERyb3Bkb3duQWN0aXZlKHRydWUpfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17ZHJvcGRvd25BY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnNXB4JywgY3Vyc29yOiAncG9pbnRlcicsIHBvaW50ZXI6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgUG91ciB2b3VzIHtkcm9wZG93bkFjdGl2ZSA/IDxJb0lvc0Fycm93VXAgLz4gOiA8SW9Jb3NBcnJvd0Rvd24gLz59XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7bGlua3MubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtpdGVtICsgaX1gfSBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXRlbS5saW5rX2hyZWYgPT09IHJvdXRlci5yb3V0ZSAmJiBcImFjdGl2ZVwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rX2hyZWZ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rX2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1yaWdodFwiPlxyXG4gICAgICAgICAgICB7Y3RhLm1hcCgoYiwgaikgPT4gKFxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGtleT17YCR7YiArIGp9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0bi0ke2IuY2xhc3NOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtiLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17Yi5sYWJlbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtkcm9wZG93bkFjdGl2ZSAmJlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bk1lbnVcIiBvbk1vdXNlTGVhdmU9eygpID0+IHNldERyb3Bkb3duQWN0aXZlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIHtwb3VyVm91cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blNlY3Rpb25cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxoMj57aXRlbS5sYWJlbH08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5saW5rcy5tYXAoKGRyb3Bkb3duTGluaywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Ryb3Bkb3duTGluay5ocmVmfT57ZHJvcGRvd25MaW5rLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIXdpbmRvd1dpZHRoID8gc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpIDogbnVsbDtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVXaW5kb3cpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvdyk7XHJcbiAgICB9O1xyXG4gIH0sIFt3aW5kb3dXaWR0aF0pO1xyXG5cclxuICByZXR1cm4gPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj57cmVuZGVyTmF2YmFyKCl9PC9uYXY+O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=