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
                  label: item.link.link_label,
                  type: "hover",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    ref: simpleDropdown,
                    className: "simpleDropdownMenu" + (dropdownActive2 ? ' opened' : ''),
                    onMouseLeave: function onMouseLeave() {
                      setDropdownActive2(true);
                    },
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                      children: links[1].content.map(function (link, index) {
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
                }, _this) // <li className="items" onMouseEnter={() => setDropdownActive2(true)}>
                //   <a className={dropdownActive2 ? "active" : ""} style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', pointer: 'none' }}>
                //     {item.link_label} {dropdownActive2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                //   </a>
                // </li>
                ;
              } else {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "items",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "".concat(item.link_href === router.route && "active"),
                    href: item.link_href,
                    children: item.link_label
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 23
                  }, _this)
                }, "".concat(item + i), false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
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
              lineNumber: 249,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
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
              lineNumber: 261,
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
                              lineNumber: 271,
                              columnNumber: 33
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: sublink.href,
                              children: sublink.label
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 271,
                              columnNumber: 54
                            }, _this)]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 270,
                            columnNumber: 31
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 268,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 267,
                      columnNumber: 25
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 266,
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
                      lineNumber: 282,
                      columnNumber: 25
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 281,
                    columnNumber: 23
                  }, _this);
                }
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 258,
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
    lineNumber: 319,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsibGlua3MiLCJsaW5rX2xhYmVsIiwibGlua19ocmVmIiwidHlwZSIsImNvbnRlbnQiLCJwb3VyVm91cyIsImxhYmVsIiwic3VibGlua3MiLCJocmVmIiwiTmF2YmFyIiwibmF2YmFyIiwibG9nbyIsImxpbmsiLCJjdGEiLCJ1c2VTdGF0ZSIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkcm9wZG93bkFjdGl2ZSIsInNldERyb3Bkb3duQWN0aXZlIiwiZHJvcGRvd25BY3RpdmUyIiwic2V0RHJvcGRvd25BY3RpdmUyIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJjb250ZW50SWQiLCJzZXRDb250ZW50SWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVXaW5kb3ciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmVuZGVyTmF2TW9iaWxlIiwiZSIsInVzZUVmZmVjdCIsInJlbmRlck5hdmJhciIsImltYWdlIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0IiwiY3Vyc29yIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwibWFwIiwiaXRlbSIsImEiLCJyb3V0ZSIsImciLCJoIiwiY2xhc3NOYW1lIiwiaW5kZXgiLCJzdWJsaW5rIiwiaSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwicG9pbnRlciIsInNpbXBsZURyb3Bkb3duIiwiYiIsImoiLCJkcm9wZG93bkxpbmsiLCJpZHgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQUVDLFlBQVUsRUFBRSxRQUFk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LE1BQU0sQ0FBQ0MsVUFBUixDQUE3QixHQUFtRCxJQUFuRDtBQUVBRCxVQUFNLENBQUNnQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ2pDLFlBQWxDO0FBRUEsV0FBTyxZQUFNO0FBQ1hDLFlBQU0sQ0FBQ2lDLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDbEMsWUFBckM7QUFDRCxLQUZEO0FBR0QsR0FSUSxFQVFOLENBQUNkLFdBQUQsQ0FSTSxDQUFUO0FBVUEsc0JBQU87QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBLGNBQXlCb0IsWUFBWTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0E3UXVCMUIsTTtVQVFQbUIsa0Q7OztLQVJPbkIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMWQ2MDk2MzY1YjcwYWVkMDRjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhpTWVudUFsdDMgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd1VwLCBJb0lvc0Fycm93RG93biwgSW9Jb3NBcnJvd0ZvcndhcmQgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCB7IEJzQXJyb3dMZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXHJcbmltcG9ydCB7IE1vYmlsZUZyaWVuZGx5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgRHJvcGRvd25MaW5rIGZyb20gXCIuL0Ryb3Bkb3duTGlua1wiO1xyXG5cclxuY29uc3QgbGlua3MgPSBbXHJcbiAgeyBsaW5rX2xhYmVsOiAnT2ZmcmVzJywgbGlua19ocmVmOiAnL29mZnJlcycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gIHtcclxuICAgIGxpbmtfbGFiZWw6ICdBcnRpY2xlcycsIHR5cGU6ICdkcm9wZG93bicsIGNvbnRlbnQ6IFtcclxuICAgICAgeyBsaW5rX2xhYmVsOiAnQmxvZycsIGxpbmtfaHJlZjogJ2h0dHBzOi9cXC9ibG9nLmtsb3guaW8vJyB9LFxyXG4gICAgICB7IGxpbmtfbGFiZWw6ICdQcmVzcyByb29tJywgbGlua19ocmVmOiAnL3ByZXNzLXJvb20nIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7IGxpbmtfbGFiZWw6ICdDb250YWN0JywgbGlua19ocmVmOiAnL2NvbnRhY3QnLCB0eXBlOiAnbGluaycgfSxcclxuXVxyXG5cclxuY29uc3QgcG91clZvdXMgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICdTZXJ2aWNlcycsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdDYW1wYWduZXMgbWFya2V0aW5nJywgdHlwZTogJ2Ryb3Bkb3duJywgc3VibGlua3M6IFtcclxuICAgICAgICAgIHsgbGFiZWw6ICdCcmFuZGluZycsIGhyZWY6ICcvJyB9LFxyXG4gICAgICAgICAgeyBsYWJlbDogJ1RyYWZpYycsIGhyZWY6ICcvJyB9LFxyXG4gICAgICAgICAgeyBsYWJlbDogJ1BlcmZvcm1hbmNlJywgaHJlZjogJy8nIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7IGxhYmVsOiAnQ29uc3VsdGluZycsIHR5cGU6ICdsaW5rJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdNYXJrZXRwbGFjZScsIHR5cGU6ICdsaW5rJywgaHJlZjogJy9tYXJrZXRwbGFjZScgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnVHlwb2xvZ2llJyxcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIHsgbGFiZWw6ICdTdGFydC11cCcsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnVFBFL1BNRScsIGhyZWY6ICcvb2ZmcmVzLXBtZScgfSxcclxuICAgICAgeyBsYWJlbDogJ0FnZW5jZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnRXZlbnQnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ0UtY29tbWVyY2UnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ0RyaXZlIHRvIHN0b3JlJywgaHJlZjogJy8nIH1cclxuICAgIF1cclxuICB9LFxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoeyBuYXZiYXI6IHsgbG9nbywgbGluaywgY3RhIH0gfSkge1xyXG4gIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZHJvcGRvd25BY3RpdmUsIHNldERyb3Bkb3duQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZHJvcGRvd25BY3RpdmUyLCBzZXREcm9wZG93bkFjdGl2ZTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVNZW51LCBzZXRBY3RpdmVNZW51XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjb250ZW50SWQsIHNldENvbnRlbnRJZF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVdpbmRvdyA9ICgpID0+IHtcclxuICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJOYXZNb2JpbGUgPSAoZSkgPT4ge1xyXG4gICAgcmV0dXJuIHNldElzT3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc09wZW4pIHtcclxuICAgICAgc2V0QWN0aXZlTWVudSgwKTtcclxuICAgIH1cclxuICB9LCBbaXNPcGVuXSlcclxuXHJcblxyXG4gIGNvbnN0IHJlbmRlck5hdmJhciA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gd2luZG93V2lkdGggPCAxMDQ3ID8gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1sb2dvXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtsb2dvLmhyZWZ9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7bG9nby5pbWFnZS51cmx9YH0gYWx0PXtsb2dvLmltYWdlLmFsdGVybmF0aXZlVGV4dH0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LXJpZ2h0XCIgb25DbGljaz17cmVuZGVyTmF2TW9iaWxlfT5cclxuICAgICAgICAgIHtpc09wZW4gPyAoXHJcbiAgICAgICAgICAgIDxBaU91dGxpbmVDbG9zZSBjbGFzc05hbWU9XCJoYW1cIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEhpTWVudUFsdDMgY2xhc3NOYW1lPVwiaGFtXCIgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHt3aW5kb3dXaWR0aCA8IDEwNDcgJiYgaXNPcGVuID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibmF2TW9iaWxlXCIgKyAoYWN0aXZlTWVudSA9PT0gMCA/ICcgc2VsZWN0ZWQnIDogJycpfT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2TW9iaWxlSXRlbXNcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KDEpfT5cclxuICAgICAgICAgICAgICAgICAgICBQb3VyIHZvdXNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0ZvcndhcmQgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxlZnQ6ICcyMHB4JywgdG9wOiAnNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGl0ZW0sIGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtpdGVtICsgYX1gfSBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KDMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rX2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93Rm9yd2FyZCBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGVmdDogJzIwcHgnLCB0b3A6ICc0cHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7aXRlbSArIGF9YH0gY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2l0ZW0ubGlua19ocmVmID09PSByb3V0ZXIucm91dGUgJiYgXCJhY3RpdmVcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ubGlua19ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua19sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgIHtjdGEubWFwKChnLCBoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2cgKyBofWB9IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuLSR7Zy5jbGFzc05hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2cuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtnLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibmF2TWVudUNvbnRhaW5lclwiICsgKGFjdGl2ZU1lbnUgPT09IDEgPyAnIHNlbGVjdGVkJyA6ICcnKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3VyVm91c01lbnVNb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+PEJzQXJyb3dMZWZ0IHNpemU9ezQwfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KDApfSBjbGFzc05hbWU9XCJiYWNrQnV0dG9uXCIgLz5Qb3VyIHZvdXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicG91clZvdXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwb3VyVm91cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4geyBzZXRBY3RpdmVNZW51KDIpOyBzZXRDb250ZW50SWQoaW5kZXgpIH19PntpdGVtLmxhYmVsfTxJb0lvc0Fycm93Rm9yd2FyZCAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibmF2TWVudUNvbnRhaW5lclwiICsgKGFjdGl2ZU1lbnUgPT09IDIgPyAnIHNlbGVjdGVkJyA6ICcnKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3VyVm91c01lbnVNb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+PEJzQXJyb3dMZWZ0IHNpemU9ezQwfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KDEpfSBjbGFzc05hbWU9XCJiYWNrQnV0dG9uXCIgLz57cG91clZvdXNbY29udGVudElkXS5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicG91clZvdXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwb3VyVm91c1tjb250ZW50SWRdLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGluay50eXBlID09PSAnZHJvcGRvd24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTGluayBsYWJlbD17bGluay5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rLnN1YmxpbmtzLm1hcCgoc3VibGluaywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIC8+PGEgaHJlZj17c3VibGluay5ocmVmfT57c3VibGluay5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8bGkga2V5PXtpbmRleH0+PGEgaHJlZj17bGluay5ocmVmfT57bGluay5sYWJlbH08L2E+PC9saT4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibmF2TWVudUNvbnRhaW5lclwiICsgKGFjdGl2ZU1lbnUgPT09IDMgPyAnIHNlbGVjdGVkJyA6ICcnKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3VyVm91c01lbnVNb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+PEJzQXJyb3dMZWZ0IHNpemU9ezQwfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KDApfSBjbGFzc05hbWU9XCJiYWNrQnV0dG9uXCIgLz57J0FydGljbGVzJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicG91clZvdXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtsaW5rc1sxXS5jb250ZW50Lm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+PGEgaHJlZj17bGluay5saW5rX2hyZWZ9PntsaW5rLmxpbmtfbGFiZWx9PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdk1vYmlsZV9iYWNrZ3JvdW5kXCI+Jm5ic3A7PC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApIDogKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnktbG9nb1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtsb2dvLmhyZWZ9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtsb2dvLmltYWdlLnVybH1gfSBhbHQ9e2xvZ28uaW1hZ2UuYWx0ZXJuYXRpdmVUZXh0fSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5X2xpbmtzXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeV9saW5rcy0taXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtc1wiIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0RHJvcGRvd25BY3RpdmUodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtkcm9wZG93bkFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwifSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICc1cHgnLCBjdXJzb3I6ICdwb2ludGVyJywgcG9pbnRlcjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICBQb3VyIHZvdXMge2Ryb3Bkb3duQWN0aXZlID8gPElvSW9zQXJyb3dVcCAvPiA6IDxJb0lvc0Fycm93RG93biAvPn1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaW5rIGxhYmVsPXtpdGVtLmxpbmsubGlua19sYWJlbH0gdHlwZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17c2ltcGxlRHJvcGRvd259IGNsYXNzTmFtZT17XCJzaW1wbGVEcm9wZG93bk1lbnVcIiArIChkcm9wZG93bkFjdGl2ZTIgPyAnIG9wZW5lZCcgOiAnJyl9IG9uTW91c2VMZWF2ZT17KCkgPT4geyBzZXREcm9wZG93bkFjdGl2ZTIodHJ1ZSkgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlua3NbMV0uY29udGVudC5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsubGlua19ocmVmfT57bGluay5saW5rX2xhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAvLyA8bGkgY2xhc3NOYW1lPVwiaXRlbXNcIiBvbk1vdXNlRW50ZXI9eygpID0+IHNldERyb3Bkb3duQWN0aXZlMih0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA8YSBjbGFzc05hbWU9e2Ryb3Bkb3duQWN0aXZlMiA/IFwiYWN0aXZlXCIgOiBcIlwifSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICc1cHgnLCBjdXJzb3I6ICdwb2ludGVyJywgcG9pbnRlcjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB7aXRlbS5saW5rX2xhYmVsfSB7ZHJvcGRvd25BY3RpdmUyID8gPElvSW9zQXJyb3dVcCAvPiA6IDxJb0lvc0Fycm93RG93biAvPn1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAvLyA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2l0ZW0gKyBpfWB9IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2l0ZW0ubGlua19ocmVmID09PSByb3V0ZXIucm91dGUgJiYgXCJhY3RpdmVcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmtfaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua19sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIHtjdGEubWFwKChiLCBqKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHtiICsgan1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuLSR7Yi5jbGFzc05hbWV9YH1cclxuICAgICAgICAgICAgICAgIGhyZWY9e2IuaHJlZn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtiLmxhYmVsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHJvcGRvd25NZW51XCIgKyAoZHJvcGRvd25BY3RpdmUgPyAnIG9wZW5lZCcgOiAnJyl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0RHJvcGRvd25BY3RpdmUoZmFsc2UpfT5cclxuICAgICAgICAgIHtwb3VyVm91cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25TZWN0aW9uXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGgyPntpdGVtLmxhYmVsfTwvaDI+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubGlua3MubWFwKChkcm9wZG93bkxpbmssIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZHJvcGRvd25MaW5rLnR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTGluayBsYWJlbD17ZHJvcGRvd25MaW5rLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3VibGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkcm9wZG93bkxpbmsuc3VibGlua3MubWFwKChzdWJsaW5rLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdWJsaW5rXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0ZvcndhcmQgLz48YSBocmVmPXtzdWJsaW5rLmhyZWZ9PntzdWJsaW5rLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS1jb250ZW50PXtkcm9wZG93bkxpbmsubGFiZWx9IGhyZWY9e2Ryb3Bkb3duTGluay5ocmVmfT57ZHJvcGRvd25MaW5rLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiByZWY9e3NpbXBsZURyb3Bkb3dufSBjbGFzc05hbWU9e1wic2ltcGxlRHJvcGRvd25NZW51XCIgKyAoZHJvcGRvd25BY3RpdmUyID8gJyBvcGVuZWQnIDogJycpfSBvbk1vdXNlTGVhdmU9eygpPT57IHNldERyb3Bkb3duQWN0aXZlMih0cnVlKSB9fT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2xpbmtzWzFdLmNvbnRlbnQubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsubGlua19ocmVmfT57bGluay5saW5rX2xhYmVsfTwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICF3aW5kb3dXaWR0aCA/IHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKSA6IG51bGw7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVXaW5kb3cpO1xyXG4gICAgfTtcclxuICB9LCBbd2luZG93V2lkdGhdKTtcclxuXHJcbiAgcmV0dXJuIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+e3JlbmRlck5hdmJhcigpfTwvbmF2PjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9