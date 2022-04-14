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
      articlesDropdownState = _useState4[0],
      setArticlesDropdownState = _useState4[1];

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

  var closeAllDropdowns = function closeAllDropdowns() {
    setDropdownActive(false);
    setArticlesDropdownState(false);
  };

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
            lineNumber: 87,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "navbar_primary-right",
        onClick: renderNavMobile,
        children: isOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineClose, {
          className: "ham"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiMenuAlt3, {
          className: "ham"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
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
                lineNumber: 103,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
                style: {
                  position: 'relative',
                  left: '20px',
                  top: '4px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
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
                    lineNumber: 112,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
                    style: {
                      position: 'relative',
                      left: '20px',
                      top: '4px'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 25
                  }, _this)]
                }, "".concat(item + a), true, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
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
                    lineNumber: 121,
                    columnNumber: 25
                  }, _this)
                }, "".concat(item + a), false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
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
                  lineNumber: 134,
                  columnNumber: 21
                }, _this)
              }, "".concat(g + h), false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 19
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
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
                lineNumber: 145,
                columnNumber: 41
              }, _this), "Pour vous"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 145,
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
                      lineNumber: 149,
                      columnNumber: 96
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 23
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
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
                lineNumber: 158,
                columnNumber: 41
              }, _this), pourVous[contentId].label]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
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
                              lineNumber: 168,
                              columnNumber: 35
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: sublink.href,
                              children: sublink.label
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 168,
                              columnNumber: 56
                            }, _this)]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 167,
                            columnNumber: 33
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 165,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 164,
                      columnNumber: 27
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 25
                  }, _this);
                } else {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: link.href,
                      children: link.label
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 47
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 31
                  }, _this);
                }
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
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
                lineNumber: 186,
                columnNumber: 41
              }, _this), 'Articles']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 186,
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
                    lineNumber: 189,
                    columnNumber: 37
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navMobile_background",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 13
        }, _this)]
      }, void 0, true) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "navbar_primary",
        onMouseLeave: closeAllDropdowns,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navbar_primary-logo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: logo.href,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "".concat(logo.image.url),
              alt: logo.image.alternativeText
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navbar_primary_links",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "navbar_primary_links--item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "items dropdown",
              onMouseEnter: function onMouseEnter() {
                return setDropdownActive(true);
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "title" + (dropdownActive ? " active" : ""),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  "data-content": "Pour vous",
                  children: "Pour vous"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 19
                }, _this), " ", dropdownActive ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowUp, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 85
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowDown, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 104
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, _this), links.map(function (item, i) {
              if (item.type === 'dropdown') {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownLink__WEBPACK_IMPORTED_MODULE_4__.default, {
                  label: item.link_label,
                  type: "hover",
                  transition: 'opacity',
                  setStateInParent: setArticlesDropdownState,
                  state: articlesDropdownState,
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
                            lineNumber: 223,
                            columnNumber: 31
                          }, _this)
                        }, index, false, {
                          fileName: _jsxFileName,
                          lineNumber: 222,
                          columnNumber: 29
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 220,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 21
                }, _this);
              } else {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "items",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    "data-content": item.link_label,
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
            lineNumber: 209,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
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
              lineNumber: 250,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
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
              lineNumber: 262,
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
                              lineNumber: 272,
                              columnNumber: 33
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: sublink.href,
                              children: sublink.label
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 272,
                              columnNumber: 54
                            }, _this)]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 271,
                            columnNumber: 31
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 269,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 268,
                      columnNumber: 25
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 267,
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
                      lineNumber: 283,
                      columnNumber: 25
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 23
                  }, _this);
                }
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 15
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
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
    lineNumber: 320,
    columnNumber: 10
  }, this);
}

_s(Navbar, "1Mqy3v67MWW+/PvVYJUYYjXWEhw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsibGlua3MiLCJsaW5rX2xhYmVsIiwibGlua19ocmVmIiwidHlwZSIsImNvbnRlbnQiLCJwb3VyVm91cyIsImxhYmVsIiwic3VibGlua3MiLCJocmVmIiwiTmF2YmFyIiwibmF2YmFyIiwibG9nbyIsImxpbmsiLCJjdGEiLCJ1c2VTdGF0ZSIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkcm9wZG93bkFjdGl2ZSIsInNldERyb3Bkb3duQWN0aXZlIiwiYXJ0aWNsZXNEcm9wZG93blN0YXRlIiwic2V0QXJ0aWNsZXNEcm9wZG93blN0YXRlIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJjb250ZW50SWQiLCJzZXRDb250ZW50SWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVXaW5kb3ciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmVuZGVyTmF2TW9iaWxlIiwiZSIsInVzZUVmZmVjdCIsImNsb3NlQWxsRHJvcGRvd25zIiwicmVuZGVyTmF2YmFyIiwiaW1hZ2UiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJjdXJzb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJtYXAiLCJpdGVtIiwiYSIsInJvdXRlIiwiZyIsImgiLCJjbGFzc05hbWUiLCJpbmRleCIsInN1YmxpbmsiLCJpIiwiYiIsImoiLCJkcm9wZG93bkxpbmsiLCJpZHgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQUVDLFlBQVUsRUFBRSxRQUFkO0FBQXdCQyxXQUFTLEVBQUUsU0FBbkM7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RCxVQUFNLENBQUM0QixnQkFBUCxDQUF3QixRQUF4QixFQUFrQzdCLFlBQWxDO0FBRUEsV0FBTyxZQUFNO0FBQ1hDLFlBQU0sQ0FBQzZCLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDOUIsWUFBckM7QUFDRCxLQUZEO0FBR0QsR0FSUSxFQVFOLENBQUNkLFdBQUQsQ0FSTSxDQUFUO0FBVUEsc0JBQU87QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBLGNBQXlCcUIsWUFBWTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0E5UXVCM0IsTTtVQVFQbUIsa0Q7OztLQVJPbkIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vZmZyZXMtcG1lLjE5ODY4YzdjMjFhMGZmOTU4ZGZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGlNZW51QWx0MyB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93VXAsIElvSW9zQXJyb3dEb3duLCBJb0lvc0Fycm93Rm9yd2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHsgQnNBcnJvd0xlZnQgfSBmcm9tICdyZWFjdC1pY29ucy9icydcclxuaW1wb3J0IHsgTW9iaWxlRnJpZW5kbHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBEcm9wZG93bkxpbmsgZnJvbSBcIi4vRHJvcGRvd25MaW5rXCI7XHJcblxyXG5jb25zdCBsaW5rcyA9IFtcclxuICB7IGxpbmtfbGFiZWw6ICdPZmZyZXMnLCBsaW5rX2hyZWY6ICcvb2ZmcmVzJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAge1xyXG4gICAgbGlua19sYWJlbDogJ0FydGljbGVzJywgdHlwZTogJ2Ryb3Bkb3duJywgY29udGVudDogW1xyXG4gICAgICB7IGxpbmtfbGFiZWw6ICdCbG9nJywgbGlua19ocmVmOiAnaHR0cHM6L1xcL2Jsb2cua2xveC5pby8nIH0sXHJcbiAgICAgIHsgbGlua19sYWJlbDogJ1ByZXNzIHJvb20nLCBsaW5rX2hyZWY6ICcvcHJlc3Mtcm9vbScgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHsgbGlua19sYWJlbDogJ0NvbnRhY3QnLCBsaW5rX2hyZWY6ICcvY29udGFjdCcsIHR5cGU6ICdsaW5rJyB9LFxyXG5dXHJcblxyXG5jb25zdCBwb3VyVm91cyA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ1NlcnZpY2VzJyxcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ0NhbXBhZ25lcyBtYXJrZXRpbmcnLCB0eXBlOiAnZHJvcGRvd24nLCBzdWJsaW5rczogW1xyXG4gICAgICAgICAgeyBsYWJlbDogJ0JyYW5kaW5nJywgaHJlZjogJy8nIH0sXHJcbiAgICAgICAgICB7IGxhYmVsOiAnVHJhZmljJywgaHJlZjogJy8nIH0sXHJcbiAgICAgICAgICB7IGxhYmVsOiAnUGVyZm9ybWFuY2UnLCBocmVmOiAnLycgfSxcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdDb25zdWx0aW5nJywgdHlwZTogJ2xpbmsnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ01hcmtldHBsYWNlJywgdHlwZTogJ2xpbmsnLCBocmVmOiAnL21hcmtldHBsYWNlJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdUeXBvbG9naWUnLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAgeyBsYWJlbDogJ1N0YXJ0LXVwJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdUUEUvUE1FJywgaHJlZjogJy9vZmZyZXMtcG1lJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnQWdlbmNlJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdFdmVudCcsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnRS1jb21tZXJjZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnRHJpdmUgdG8gc3RvcmUnLCBocmVmOiAnLycgfVxyXG4gICAgXVxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcih7IG5hdmJhcjogeyBsb2dvLCBsaW5rLCBjdGEgfSB9KSB7XHJcbiAgY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkcm9wZG93bkFjdGl2ZSwgc2V0RHJvcGRvd25BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthcnRpY2xlc0Ryb3Bkb3duU3RhdGUsIHNldEFydGljbGVzRHJvcGRvd25TdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY29udGVudElkLCBzZXRDb250ZW50SWRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVXaW5kb3cgPSAoKSA9PiB7XHJcbiAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTmF2TW9iaWxlID0gKGUpID0+IHtcclxuICAgIHJldHVybiBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNPcGVuKSB7XHJcbiAgICAgIHNldEFjdGl2ZU1lbnUoMCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzT3Blbl0pXHJcblxyXG4gIGNvbnN0IGNsb3NlQWxsRHJvcGRvd25zID0gKCkgPT4ge1xyXG4gICAgc2V0RHJvcGRvd25BY3RpdmUoZmFsc2UpO1xyXG4gICAgc2V0QXJ0aWNsZXNEcm9wZG93blN0YXRlKGZhbHNlKTtcclxuICB9XHJcblxyXG5cclxuICBjb25zdCByZW5kZXJOYXZiYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIHdpbmRvd1dpZHRoIDwgMTA0NyA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnktbG9nb1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj17bG9nby5ocmVmfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake2xvZ28uaW1hZ2UudXJsfWB9IGFsdD17bG9nby5pbWFnZS5hbHRlcm5hdGl2ZVRleHR9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1yaWdodFwiIG9uQ2xpY2s9e3JlbmRlck5hdk1vYmlsZX0+XHJcbiAgICAgICAgICB7aXNPcGVuID8gKFxyXG4gICAgICAgICAgICA8QWlPdXRsaW5lQ2xvc2UgY2xhc3NOYW1lPVwiaGFtXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxIaU1lbnVBbHQzIGNsYXNzTmFtZT1cImhhbVwiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7d2luZG93V2lkdGggPCAxMDQ3ICYmIGlzT3BlbiA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1vYmlsZVwiICsgKGFjdGl2ZU1lbnUgPT09IDAgPyAnIHNlbGVjdGVkJyA6ICcnKX0+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdk1vYmlsZUl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgUG91ciB2b3VzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsZWZ0OiAnMjBweCcsIHRvcDogJzRweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB7bGlua3MubWFwKChpdGVtLCBhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7aXRlbSArIGF9YH0gY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua19sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0ZvcndhcmQgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxlZnQ6ICcyMHB4JywgdG9wOiAnNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2l0ZW0gKyBhfWB9IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpdGVtLmxpbmtfaHJlZiA9PT0gcm91dGVyLnJvdXRlICYmIFwiYWN0aXZlXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmtfaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtfbGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICB7Y3RhLm1hcCgoZywgaCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtnICsgaH1gfSBjbGFzc05hbWU9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0bi0ke2cuY2xhc3NOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtnLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Zy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1lbnVDb250YWluZXJcIiArIChhY3RpdmVNZW51ID09PSAxID8gJyBzZWxlY3RlZCcgOiAnJyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG91clZvdXNNZW51TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPjxCc0Fycm93TGVmdCBzaXplPXs0MH0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgwKX0gY2xhc3NOYW1lPVwiYmFja0J1dHRvblwiIC8+UG91ciB2b3VzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvdXJWb3VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cG91clZvdXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHsgc2V0QWN0aXZlTWVudSgyKTsgc2V0Q29udGVudElkKGluZGV4KSB9fT57aXRlbS5sYWJlbH08SW9Jb3NBcnJvd0ZvcndhcmQgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1lbnVDb250YWluZXJcIiArIChhY3RpdmVNZW51ID09PSAyID8gJyBzZWxlY3RlZCcgOiAnJyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG91clZvdXNNZW51TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPjxCc0Fycm93TGVmdCBzaXplPXs0MH0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgxKX0gY2xhc3NOYW1lPVwiYmFja0J1dHRvblwiIC8+e3BvdXJWb3VzW2NvbnRlbnRJZF0ubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvdXJWb3VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cG91clZvdXNbY29udGVudElkXS5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmsudHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpbmsgbGFiZWw9e2xpbmsubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGluay5zdWJsaW5rcy5tYXAoKHN1YmxpbmssIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93Rm9yd2FyZCAvPjxhIGhyZWY9e3N1YmxpbmsuaHJlZn0+e3N1YmxpbmsubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGxpIGtleT17aW5kZXh9PjxhIGhyZWY9e2xpbmsuaHJlZn0+e2xpbmsubGFiZWx9PC9hPjwvbGk+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1lbnVDb250YWluZXJcIiArIChhY3RpdmVNZW51ID09PSAzID8gJyBzZWxlY3RlZCcgOiAnJyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG91clZvdXNNZW51TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPjxCc0Fycm93TGVmdCBzaXplPXs0MH0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgwKX0gY2xhc3NOYW1lPVwiYmFja0J1dHRvblwiIC8+eydBcnRpY2xlcyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvdXJWb3VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7bGlua3NbMV0uY29udGVudC5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PjxhIGhyZWY9e2xpbmsubGlua19ocmVmfT57bGluay5saW5rX2xhYmVsfTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZNb2JpbGVfYmFja2dyb3VuZFwiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5XCIgb25Nb3VzZUxlYXZlPXtjbG9zZUFsbERyb3Bkb3duc30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LWxvZ29cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj17bG9nby5ocmVmfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7bG9nby5pbWFnZS51cmx9YH0gYWx0PXtsb2dvLmltYWdlLmFsdGVybmF0aXZlVGV4dH0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeV9saW5rc1wiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlfbGlua3MtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbXMgZHJvcGRvd25cIiBvbk1vdXNlRW50ZXI9eygpID0+IHNldERyb3Bkb3duQWN0aXZlKHRydWUpfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17XCJ0aXRsZVwiICsgKGRyb3Bkb3duQWN0aXZlID8gXCIgYWN0aXZlXCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtY29udGVudD0nUG91ciB2b3VzJz5Qb3VyIHZvdXM8L3NwYW4+IHtkcm9wZG93bkFjdGl2ZSA/IDxJb0lvc0Fycm93VXAgLz4gOiA8SW9Jb3NBcnJvd0Rvd24gLz59XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7bGlua3MubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZHJvcGRvd24nKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTGluayBsYWJlbD17aXRlbS5saW5rX2xhYmVsfSB0eXBlPVwiaG92ZXJcIiB0cmFuc2l0aW9uPXsnb3BhY2l0eSd9IHNldFN0YXRlSW5QYXJlbnQ9e3NldEFydGljbGVzRHJvcGRvd25TdGF0ZX0gc3RhdGU9e2FydGljbGVzRHJvcGRvd25TdGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzaW1wbGVEcm9wZG93bk1lbnVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50Lm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bGluay5saW5rX2hyZWZ9PntsaW5rLmxpbmtfbGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25MaW5rPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2l0ZW0gKyBpfWB9IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNvbnRlbnQ9e2l0ZW0ubGlua19sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpdGVtLmxpbmtfaHJlZiA9PT0gcm91dGVyLnJvdXRlICYmIFwiYWN0aXZlXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rX2hyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtfbGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1yaWdodFwiPlxyXG4gICAgICAgICAgICB7Y3RhLm1hcCgoYiwgaikgPT4gKFxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGtleT17YCR7YiArIGp9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0bi0ke2IuY2xhc3NOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtiLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17Yi5sYWJlbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRyb3Bkb3duTWVudVwiICsgKGRyb3Bkb3duQWN0aXZlID8gJyBvcGVuZWQnIDogJycpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldERyb3Bkb3duQWN0aXZlKGZhbHNlKX0+XHJcbiAgICAgICAgICB7cG91clZvdXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duU2VjdGlvblwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxoMj57aXRlbS5sYWJlbH08L2gyPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtzLm1hcCgoZHJvcGRvd25MaW5rLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duTGluay50eXBlID09PSAnZHJvcGRvd24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpbmsgbGFiZWw9e2Ryb3Bkb3duTGluay5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1YmxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHJvcGRvd25MaW5rLnN1YmxpbmtzLm1hcCgoc3VibGluaywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3VibGlua1wiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIC8+PGEgaHJlZj17c3VibGluay5ocmVmfT57c3VibGluay5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGRhdGEtY29udGVudD17ZHJvcGRvd25MaW5rLmxhYmVsfSBocmVmPXtkcm9wZG93bkxpbmsuaHJlZn0+e2Ryb3Bkb3duTGluay5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgcmVmPXtzaW1wbGVEcm9wZG93bn0gY2xhc3NOYW1lPXtcInNpbXBsZURyb3Bkb3duTWVudVwiICsgKGRyb3Bkb3duQWN0aXZlMiA/ICcgb3BlbmVkJyA6ICcnKX0gb25Nb3VzZUxlYXZlPXsoKT0+eyBzZXREcm9wZG93bkFjdGl2ZTIodHJ1ZSkgfX0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtsaW5rc1sxXS5jb250ZW50Lm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rLmxpbmtfaHJlZn0+e2xpbmsubGlua19sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhd2luZG93V2lkdGggPyBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCkgOiBudWxsO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvdyk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93KTtcclxuICAgIH07XHJcbiAgfSwgW3dpbmRvd1dpZHRoXSk7XHJcblxyXG4gIHJldHVybiA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPntyZW5kZXJOYXZiYXIoKX08L25hdj47XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==