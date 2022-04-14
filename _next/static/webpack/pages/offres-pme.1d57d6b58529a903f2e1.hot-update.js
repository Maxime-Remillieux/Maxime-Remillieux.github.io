self["webpackHotUpdate_N_E"]("pages/offres-pme",{

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
/* harmony import */ var _DropdownLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropdownLink */ "./components/DropdownLink.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\components\\Navbar.js",
    _s = $RefreshSig$();











var links = [{
  link_label: 'Offres',
  link_href: '/offres',
  type: 'link'
}, {
  link_label: 'Articles',
  type: 'dropdown',
  content: [{
    link_label: 'Blog',
    link_href: 'https:/\/blog.klox.io/'
  }, {
    link_label: 'Press room',
    link_href: '/press-room'
  }]
}, {
  link_label: 'Contact',
  link_href: '/contact',
  type: 'link'
}];
var pourVous = [{
  label: 'Services',
  links: [{
    label: 'Campagnes marketing',
    type: 'dropdown',
    sublinks: [{
      label: 'Branding',
      href: '/'
    }, {
      label: 'Trafic',
      href: '/'
    }, {
      label: 'Performance',
      href: '/'
    }]
  }, {
    label: 'Consulting',
    type: 'link',
    href: '/'
  }, {
    label: 'Marketplace',
    type: 'link',
    href: '/marketplace'
  }]
}, {
  label: 'Typologie',
  links: [{
    label: 'Start-up',
    href: '/'
  }, {
    label: 'TPE/PME',
    href: '/offres-pme'
  }, {
    label: 'Agence',
    href: '/'
  }, {
    label: 'Event',
    href: '/'
  }, {
    label: 'E-commerce',
    href: '/'
  }, {
    label: 'Drive to store',
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
      setDropdownActive = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      dropdownActive2 = _useState4[0],
      setDropdownActive2 = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      activeMenu = _useState5[0],
      setActiveMenu = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      contentId = _useState6[0],
      setContentId = _useState6[1];

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
        children: isOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineClose, {
          className: "ham"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiMenuAlt3, {
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navMobile" + (activeMenu === 0 ? ' selected' : ''),
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
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
                style: {
                  position: 'relative',
                  left: '20px',
                  top: '4px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, _this), links.map(function (item, a) {
              if (item.type === 'dropdown') {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "items",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    style: {
                      cursor: 'pointer'
                    },
                    onClick: function onClick() {
                      return setActiveMenu(3);
                    },
                    children: item.link_label
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
                    style: {
                      position: 'relative',
                      left: '20px',
                      top: '4px'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 25
                  }, _this)]
                }, "".concat(item + a), true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 23
                }, _this);
              } else {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "items",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "".concat(item.link_href === router.route && "active"),
                    href: item.link_href,
                    children: item.link_label
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 25
                  }, _this)
                }, "".concat(item + a), false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 23
                }, _this);
              }
            }), cta.map(function (g, h) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "login",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
                  className: "btn-".concat(g.className),
                  href: g.href,
                  label: g.label
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 21
                }, _this)
              }, "".concat(g + h), false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 19
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navMenuContainer" + (activeMenu === 1 ? ' selected' : ''),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pourVousMenuMobile",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsArrowLeft, {
                size: 40,
                onClick: function onClick() {
                  return setActiveMenu(0);
                },
                className: "backButton"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 41
              }, _this), "Pour vous"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: "pourVousList",
              children: pourVous.map(function (item, index) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    onClick: function onClick() {
                      setActiveMenu(2);
                      setContentId(index);
                    },
                    children: [item.label, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 96
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 23
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navMenuContainer" + (activeMenu === 2 ? ' selected' : ''),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pourVousMenuMobile",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsArrowLeft, {
                size: 40,
                onClick: function onClick() {
                  return setActiveMenu(1);
                },
                className: "backButton"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 41
              }, _this), pourVous[contentId].label]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: "pourVousList",
              children: pourVous[contentId].links.map(function (link, index) {
                if (link.type === 'dropdown') {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownLink__WEBPACK_IMPORTED_MODULE_4__.default, {
                      label: link.label,
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                        children: link.sublinks.map(function (sublink, i) {
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 163,
                              columnNumber: 35
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: sublink.href,
                              children: sublink.label
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 163,
                              columnNumber: 56
                            }, _this)]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 162,
                            columnNumber: 33
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 27
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 25
                  }, _this);
                } else {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: link.href,
                      children: link.label
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 47
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 31
                  }, _this);
                }
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navMenuContainer" + (activeMenu === 3 ? ' selected' : ''),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pourVousMenuMobile",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsArrowLeft, {
                size: 40,
                onClick: function onClick() {
                  return setActiveMenu(0);
                },
                className: "backButton"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 41
              }, _this), 'Articles']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: "pourVousList",
              children: links[1].content.map(function (link, index) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: link.link_href,
                    children: link.link_label
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 37
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navMobile_background",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
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
              lineNumber: 199,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
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
                  lineNumber: 207,
                  columnNumber: 47
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowDown, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 66
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, _this), links.map(function (item, i) {
              if (item.type === 'dropdown') {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownLink__WEBPACK_IMPORTED_MODULE_4__.default, {
                  label: item.link_label,
                  type: "hover",
                  transition: 'opacity',
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "simpleDropdownMenu",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                      children: item.content.map(function (link, index) {
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                            href: link.link_href,
                            children: link.link_label
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 218,
                            columnNumber: 31
                          }, _this)
                        }, index, false, {
                          fileName: _jsxFileName,
                          lineNumber: 217,
                          columnNumber: 29
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 21
                }, _this);
              } else {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "items",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "".concat(item.link_href === router.route && "active"),
                    href: item.link_href,
                    children: item.link_label
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 23
                  }, _this)
                }, "".concat(item + i), false, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 21
                }, _this);
              }
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
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
              lineNumber: 244,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "dropdownMenu" + (dropdownActive ? ' opened' : ''),
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
              lineNumber: 256,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: item.links.map(function (dropdownLink, idx) {
                if (dropdownLink.type === 'dropdown') {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownLink__WEBPACK_IMPORTED_MODULE_4__.default, {
                      label: dropdownLink.label,
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                        className: "sublinks",
                        children: dropdownLink.sublinks.map(function (sublink, i) {
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                            className: "sublink",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 266,
                              columnNumber: 33
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: sublink.href,
                              children: sublink.label
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 266,
                              columnNumber: 54
                            }, _this)]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 265,
                            columnNumber: 31
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 263,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 262,
                      columnNumber: 25
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 23
                  }, _this);
                } else {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      "data-content": dropdownLink.label,
                      href: dropdownLink.href,
                      children: dropdownLink.label
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 277,
                      columnNumber: 25
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 276,
                    columnNumber: 23
                  }, _this);
                }
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 15
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 9
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
    lineNumber: 314,
    columnNumber: 10
  }, this);
}

_s(Navbar, "1goYcGLIet+D2+FqFWcWtQrcdIY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsibGlua3MiLCJsaW5rX2xhYmVsIiwibGlua19ocmVmIiwidHlwZSIsImNvbnRlbnQiLCJwb3VyVm91cyIsImxhYmVsIiwic3VibGlua3MiLCJocmVmIiwiTmF2YmFyIiwibmF2YmFyIiwibG9nbyIsImxpbmsiLCJjdGEiLCJ1c2VTdGF0ZSIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkcm9wZG93bkFjdGl2ZSIsInNldERyb3Bkb3duQWN0aXZlIiwiZHJvcGRvd25BY3RpdmUyIiwic2V0RHJvcGRvd25BY3RpdmUyIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJjb250ZW50SWQiLCJzZXRDb250ZW50SWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVXaW5kb3ciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmVuZGVyTmF2TW9iaWxlIiwiZSIsInVzZUVmZmVjdCIsInJlbmRlck5hdmJhciIsImltYWdlIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0IiwiY3Vyc29yIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwibWFwIiwiaXRlbSIsImEiLCJyb3V0ZSIsImciLCJoIiwiY2xhc3NOYW1lIiwiaW5kZXgiLCJzdWJsaW5rIiwiaSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwicG9pbnRlciIsImIiLCJqIiwiZHJvcGRvd25MaW5rIiwiaWR4IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUFFQyxZQUFVLEVBQUUsUUFBZDtBQUF3QkMsV0FBUyxFQUFF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Q2QsV0FBRCxDQVJNLENBQVQ7QUFVQSxzQkFBTztBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUEsY0FBeUJvQixZQUFZO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztHQXhRdUIxQixNO1VBUVBtQixrRDs7O0tBUk9uQixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29mZnJlcy1wbWUuMWQ1N2Q2YjU4NTI5YTkwM2YyZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIaU1lbnVBbHQzIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZUNsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dVcCwgSW9Jb3NBcnJvd0Rvd24sIElvSW9zQXJyb3dGb3J3YXJkIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBCc0Fycm93TGVmdCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xyXG5pbXBvcnQgeyBNb2JpbGVGcmllbmRseSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IERyb3Bkb3duTGluayBmcm9tIFwiLi9Ecm9wZG93bkxpbmtcIjtcclxuXHJcbmNvbnN0IGxpbmtzID0gW1xyXG4gIHsgbGlua19sYWJlbDogJ09mZnJlcycsIGxpbmtfaHJlZjogJy9vZmZyZXMnLCB0eXBlOiAnbGluaycgfSxcclxuICB7XHJcbiAgICBsaW5rX2xhYmVsOiAnQXJ0aWNsZXMnLCB0eXBlOiAnZHJvcGRvd24nLCBjb250ZW50OiBbXHJcbiAgICAgIHsgbGlua19sYWJlbDogJ0Jsb2cnLCBsaW5rX2hyZWY6ICdodHRwczovXFwvYmxvZy5rbG94LmlvLycgfSxcclxuICAgICAgeyBsaW5rX2xhYmVsOiAnUHJlc3Mgcm9vbScsIGxpbmtfaHJlZjogJy9wcmVzcy1yb29tJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAgeyBsaW5rX2xhYmVsOiAnQ29udGFjdCcsIGxpbmtfaHJlZjogJy9jb250YWN0JywgdHlwZTogJ2xpbmsnIH0sXHJcbl1cclxuXHJcbmNvbnN0IHBvdXJWb3VzID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiAnU2VydmljZXMnLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnQ2FtcGFnbmVzIG1hcmtldGluZycsIHR5cGU6ICdkcm9wZG93bicsIHN1YmxpbmtzOiBbXHJcbiAgICAgICAgICB7IGxhYmVsOiAnQnJhbmRpbmcnLCBocmVmOiAnLycgfSxcclxuICAgICAgICAgIHsgbGFiZWw6ICdUcmFmaWMnLCBocmVmOiAnLycgfSxcclxuICAgICAgICAgIHsgbGFiZWw6ICdQZXJmb3JtYW5jZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgeyBsYWJlbDogJ0NvbnN1bHRpbmcnLCB0eXBlOiAnbGluaycsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnTWFya2V0cGxhY2UnLCB0eXBlOiAnbGluaycsIGhyZWY6ICcvbWFya2V0cGxhY2UnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1R5cG9sb2dpZScsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7IGxhYmVsOiAnU3RhcnQtdXAnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ1RQRS9QTUUnLCBocmVmOiAnL29mZnJlcy1wbWUnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdBZ2VuY2UnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ0V2ZW50JywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdFLWNvbW1lcmNlJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdEcml2ZSB0byBzdG9yZScsIGhyZWY6ICcvJyB9XHJcbiAgICBdXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHsgbmF2YmFyOiB7IGxvZ28sIGxpbmssIGN0YSB9IH0pIHtcclxuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duQWN0aXZlLCBzZXREcm9wZG93bkFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duQWN0aXZlMiwgc2V0RHJvcGRvd25BY3RpdmUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY29udGVudElkLCBzZXRDb250ZW50SWRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVXaW5kb3cgPSAoKSA9PiB7XHJcbiAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTmF2TW9iaWxlID0gKGUpID0+IHtcclxuICAgIHJldHVybiBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNPcGVuKSB7XHJcbiAgICAgIHNldEFjdGl2ZU1lbnUoMCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzT3Blbl0pXHJcblxyXG5cclxuICBjb25zdCByZW5kZXJOYXZiYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIHdpbmRvd1dpZHRoIDwgMTA0NyA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnktbG9nb1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj17bG9nby5ocmVmfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake2xvZ28uaW1hZ2UudXJsfWB9IGFsdD17bG9nby5pbWFnZS5hbHRlcm5hdGl2ZVRleHR9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1yaWdodFwiIG9uQ2xpY2s9e3JlbmRlck5hdk1vYmlsZX0+XHJcbiAgICAgICAgICB7aXNPcGVuID8gKFxyXG4gICAgICAgICAgICA8QWlPdXRsaW5lQ2xvc2UgY2xhc3NOYW1lPVwiaGFtXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxIaU1lbnVBbHQzIGNsYXNzTmFtZT1cImhhbVwiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7d2luZG93V2lkdGggPCAxMDQ3ICYmIGlzT3BlbiA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1vYmlsZVwiICsgKGFjdGl2ZU1lbnUgPT09IDAgPyAnIHNlbGVjdGVkJyA6ICcnKX0+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdk1vYmlsZUl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgUG91ciB2b3VzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsZWZ0OiAnMjBweCcsIHRvcDogJzRweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB7bGlua3MubWFwKChpdGVtLCBhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7aXRlbSArIGF9YH0gY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua19sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0ZvcndhcmQgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxlZnQ6ICcyMHB4JywgdG9wOiAnNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2l0ZW0gKyBhfWB9IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpdGVtLmxpbmtfaHJlZiA9PT0gcm91dGVyLnJvdXRlICYmIFwiYWN0aXZlXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmtfaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtfbGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICB7Y3RhLm1hcCgoZywgaCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtnICsgaH1gfSBjbGFzc05hbWU9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0bi0ke2cuY2xhc3NOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtnLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Zy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1lbnVDb250YWluZXJcIiArIChhY3RpdmVNZW51ID09PSAxID8gJyBzZWxlY3RlZCcgOiAnJyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG91clZvdXNNZW51TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPjxCc0Fycm93TGVmdCBzaXplPXs0MH0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgwKX0gY2xhc3NOYW1lPVwiYmFja0J1dHRvblwiIC8+UG91ciB2b3VzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvdXJWb3VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cG91clZvdXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHsgc2V0QWN0aXZlTWVudSgyKTsgc2V0Q29udGVudElkKGluZGV4KSB9fT57aXRlbS5sYWJlbH08SW9Jb3NBcnJvd0ZvcndhcmQgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1lbnVDb250YWluZXJcIiArIChhY3RpdmVNZW51ID09PSAyID8gJyBzZWxlY3RlZCcgOiAnJyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG91clZvdXNNZW51TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPjxCc0Fycm93TGVmdCBzaXplPXs0MH0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgxKX0gY2xhc3NOYW1lPVwiYmFja0J1dHRvblwiIC8+e3BvdXJWb3VzW2NvbnRlbnRJZF0ubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvdXJWb3VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cG91clZvdXNbY29udGVudElkXS5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmsudHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpbmsgbGFiZWw9e2xpbmsubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGluay5zdWJsaW5rcy5tYXAoKHN1YmxpbmssIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93Rm9yd2FyZCAvPjxhIGhyZWY9e3N1YmxpbmsuaHJlZn0+e3N1YmxpbmsubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGxpIGtleT17aW5kZXh9PjxhIGhyZWY9e2xpbmsuaHJlZn0+e2xpbmsubGFiZWx9PC9hPjwvbGk+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1lbnVDb250YWluZXJcIiArIChhY3RpdmVNZW51ID09PSAzID8gJyBzZWxlY3RlZCcgOiAnJyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG91clZvdXNNZW51TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPjxCc0Fycm93TGVmdCBzaXplPXs0MH0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgwKX0gY2xhc3NOYW1lPVwiYmFja0J1dHRvblwiIC8+eydBcnRpY2xlcyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvdXJWb3VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7bGlua3NbMV0uY29udGVudC5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PjxhIGhyZWY9e2xpbmsubGlua19ocmVmfT57bGluay5saW5rX2xhYmVsfTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZNb2JpbGVfYmFja2dyb3VuZFwiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LWxvZ29cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj17bG9nby5ocmVmfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7bG9nby5pbWFnZS51cmx9YH0gYWx0PXtsb2dvLmltYWdlLmFsdGVybmF0aXZlVGV4dH0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeV9saW5rc1wiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlfbGlua3MtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbXNcIiBvbk1vdXNlRW50ZXI9eygpID0+IHNldERyb3Bkb3duQWN0aXZlKHRydWUpfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17ZHJvcGRvd25BY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnNXB4JywgY3Vyc29yOiAncG9pbnRlcicsIHBvaW50ZXI6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgUG91ciB2b3VzIHtkcm9wZG93bkFjdGl2ZSA/IDxJb0lvc0Fycm93VXAgLz4gOiA8SW9Jb3NBcnJvd0Rvd24gLz59XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7bGlua3MubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZHJvcGRvd24nKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTGluayBsYWJlbD17aXRlbS5saW5rX2xhYmVsfSB0eXBlPVwiaG92ZXJcIiB0cmFuc2l0aW9uPXsnb3BhY2l0eSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2ltcGxlRHJvcGRvd25NZW51XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29udGVudC5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsubGlua19ocmVmfT57bGluay5saW5rX2xhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTGluaz5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtpdGVtICsgaX1gfSBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpdGVtLmxpbmtfaHJlZiA9PT0gcm91dGVyLnJvdXRlICYmIFwiYWN0aXZlXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rX2hyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtfbGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1yaWdodFwiPlxyXG4gICAgICAgICAgICB7Y3RhLm1hcCgoYiwgaikgPT4gKFxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGtleT17YCR7YiArIGp9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0bi0ke2IuY2xhc3NOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtiLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17Yi5sYWJlbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRyb3Bkb3duTWVudVwiICsgKGRyb3Bkb3duQWN0aXZlID8gJyBvcGVuZWQnIDogJycpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldERyb3Bkb3duQWN0aXZlKGZhbHNlKX0+XHJcbiAgICAgICAgICB7cG91clZvdXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duU2VjdGlvblwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxoMj57aXRlbS5sYWJlbH08L2gyPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtzLm1hcCgoZHJvcGRvd25MaW5rLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duTGluay50eXBlID09PSAnZHJvcGRvd24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpbmsgbGFiZWw9e2Ryb3Bkb3duTGluay5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1YmxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHJvcGRvd25MaW5rLnN1YmxpbmtzLm1hcCgoc3VibGluaywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3VibGlua1wiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIC8+PGEgaHJlZj17c3VibGluay5ocmVmfT57c3VibGluay5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGRhdGEtY29udGVudD17ZHJvcGRvd25MaW5rLmxhYmVsfSBocmVmPXtkcm9wZG93bkxpbmsuaHJlZn0+e2Ryb3Bkb3duTGluay5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgcmVmPXtzaW1wbGVEcm9wZG93bn0gY2xhc3NOYW1lPXtcInNpbXBsZURyb3Bkb3duTWVudVwiICsgKGRyb3Bkb3duQWN0aXZlMiA/ICcgb3BlbmVkJyA6ICcnKX0gb25Nb3VzZUxlYXZlPXsoKT0+eyBzZXREcm9wZG93bkFjdGl2ZTIodHJ1ZSkgfX0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtsaW5rc1sxXS5jb250ZW50Lm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rLmxpbmtfaHJlZn0+e2xpbmsubGlua19sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhd2luZG93V2lkdGggPyBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCkgOiBudWxsO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvdyk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93KTtcclxuICAgIH07XHJcbiAgfSwgW3dpbmRvd1dpZHRoXSk7XHJcblxyXG4gIHJldHVybiA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPntyZW5kZXJOYXZiYXIoKX08L25hdj47XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==