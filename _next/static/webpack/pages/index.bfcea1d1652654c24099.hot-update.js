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

  var simpleDropdown = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var articlesLink = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
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
            lineNumber: 84,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "navbar_primary-right",
        onClick: renderNavMobile,
        children: isOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineClose, {
          className: "ham"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiMenuAlt3, {
          className: "ham"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
                lineNumber: 100,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
                style: {
                  position: 'relative',
                  left: '20px',
                  top: '4px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
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
                    lineNumber: 109,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
                    style: {
                      position: 'relative',
                      left: '20px',
                      top: '4px'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 25
                  }, _this)]
                }, "".concat(item + a), true, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
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
                    lineNumber: 118,
                    columnNumber: 25
                  }, _this)
                }, "".concat(item + a), false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
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
                  lineNumber: 131,
                  columnNumber: 21
                }, _this)
              }, "".concat(g + h), false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 19
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
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
                lineNumber: 142,
                columnNumber: 41
              }, _this), "Pour vous"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
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
                      lineNumber: 146,
                      columnNumber: 96
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 23
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
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
                lineNumber: 155,
                columnNumber: 41
              }, _this), pourVous[contentId].label]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 155,
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
                              lineNumber: 165,
                              columnNumber: 35
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: sublink.href,
                              children: sublink.label
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 165,
                              columnNumber: 56
                            }, _this)]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 164,
                            columnNumber: 33
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 162,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 27
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 25
                  }, _this);
                } else {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: link.href,
                      children: link.label
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 47
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 31
                  }, _this);
                }
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
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
                lineNumber: 183,
                columnNumber: 41
              }, _this), 'Articles']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
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
                    lineNumber: 186,
                    columnNumber: 37
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navMobile_background",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 13
        }, _this)]
      }, void 0, true) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
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
              lineNumber: 201,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
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
                  lineNumber: 209,
                  columnNumber: 47
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowDown, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 66
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, _this), links.map(function (item, i) {
              if (item.type === 'dropdown') {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  ref: articlesLink,
                  className: "items",
                  onMouseEnter: function onMouseEnter() {
                    return setDropdownActive2(true);
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: dropdownActive2 ? "active" : "",
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      cursor: 'pointer',
                      pointer: 'none'
                    },
                    children: [item.link_label, " ", dropdownActive2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowUp, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 217,
                      columnNumber: 62
                    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowDown, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 217,
                      columnNumber: 81
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 216,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
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
                    lineNumber: 224,
                    columnNumber: 23
                  }, _this)
                }, "".concat(item + i), false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 21
                }, _this);
              }
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
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
              lineNumber: 239,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
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
              lineNumber: 251,
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
                              lineNumber: 261,
                              columnNumber: 33
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: sublink.href,
                              children: sublink.label
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 261,
                              columnNumber: 54
                            }, _this)]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 260,
                            columnNumber: 31
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 258,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 25
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
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
                      lineNumber: 272,
                      columnNumber: 25
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 271,
                    columnNumber: 23
                  }, _this);
                }
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 15
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                lineNumber: 287,
                columnNumber: 17
              }, _this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var linkXpos = articlesLink.current.getBoundingClientRect().left;
    simpleDropdown.current.style.left = linkXpos;
  }, []);
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
    lineNumber: 312,
    columnNumber: 10
  }, this);
}

_s(Navbar, "i8zjtDxjMqOkTjRaacWgVNjJkO0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsibGlua3MiLCJsaW5rX2xhYmVsIiwibGlua19ocmVmIiwidHlwZSIsImNvbnRlbnQiLCJwb3VyVm91cyIsImxhYmVsIiwic3VibGlua3MiLCJocmVmIiwiTmF2YmFyIiwibmF2YmFyIiwibG9nbyIsImxpbmsiLCJjdGEiLCJ1c2VTdGF0ZSIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkcm9wZG93bkFjdGl2ZSIsInNldERyb3Bkb3duQWN0aXZlIiwiZHJvcGRvd25BY3RpdmUyIiwic2V0RHJvcGRvd25BY3RpdmUyIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJjb250ZW50SWQiLCJzZXRDb250ZW50SWQiLCJzaW1wbGVEcm9wZG93biIsInVzZVJlZiIsImFydGljbGVzTGluayIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVdpbmRvdyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyZW5kZXJOYXZNb2JpbGUiLCJlIiwidXNlRWZmZWN0IiwicmVuZGVyTmF2YmFyIiwiaW1hZ2UiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJjdXJzb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJtYXAiLCJpdGVtIiwiYSIsInJvdXRlIiwiZyIsImgiLCJjbGFzc05hbWUiLCJpbmRleCIsInN1YmxpbmsiLCJpIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJnYXAiLCJwb2ludGVyIiwiYiIsImoiLCJkcm9wZG93bkxpbmsiLCJpZHgiLCJsaW5rWHBvcyIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNB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QVVBLHNCQUFPO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSxjQUF5QnVCLFlBQVk7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBdFF1QjdCLE07VUFXUHNCLGtEOzs7S0FYT3RCLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmZjZWExZDE2NTI2NTRjMjQwOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIaU1lbnVBbHQzIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZUNsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dVcCwgSW9Jb3NBcnJvd0Rvd24sIElvSW9zQXJyb3dGb3J3YXJkIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBCc0Fycm93TGVmdCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xyXG5pbXBvcnQgeyBNb2JpbGVGcmllbmRseSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IERyb3Bkb3duTGluayBmcm9tIFwiLi9Ecm9wZG93bkxpbmtcIjtcclxuXHJcbmNvbnN0IGxpbmtzID0gW1xyXG4gIHsgbGlua19sYWJlbDogJ09mZnJlcycsIGxpbmtfaHJlZjogJy9vZmZyZXMnLCB0eXBlOiAnbGluaycgfSxcclxuICB7XHJcbiAgICBsaW5rX2xhYmVsOiAnQXJ0aWNsZXMnLCB0eXBlOiAnZHJvcGRvd24nLCBjb250ZW50OiBbXHJcbiAgICAgIHsgbGlua19sYWJlbDogJ0Jsb2cnLCBsaW5rX2hyZWY6ICdodHRwczovXFwvYmxvZy5rbG94LmlvLycgfSxcclxuICAgICAgeyBsaW5rX2xhYmVsOiAnUHJlc3Mgcm9vbScsIGxpbmtfaHJlZjogJy9wcmVzcy1yb29tJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAgeyBsaW5rX2xhYmVsOiAnQ29udGFjdCcsIGxpbmtfaHJlZjogJy9jb250YWN0JywgdHlwZTogJ2xpbmsnIH0sXHJcbl1cclxuXHJcbmNvbnN0IHBvdXJWb3VzID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiAnU2VydmljZXMnLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnQ2FtcGFnbmVzIG1hcmtldGluZycsIHR5cGU6ICdkcm9wZG93bicsIHN1YmxpbmtzOiBbXHJcbiAgICAgICAgICB7IGxhYmVsOiAnQnJhbmRpbmcnLCBocmVmOiAnLycgfSxcclxuICAgICAgICAgIHsgbGFiZWw6ICdUcmFmaWMnLCBocmVmOiAnLycgfSxcclxuICAgICAgICAgIHsgbGFiZWw6ICdQZXJmb3JtYW5jZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgeyBsYWJlbDogJ0NvbnN1bHRpbmcnLCB0eXBlOiAnbGluaycsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnTWFya2V0cGxhY2UnLCB0eXBlOiAnbGluaycsIGhyZWY6ICcvbWFya2V0cGxhY2UnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1R5cG9sb2dpZScsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7IGxhYmVsOiAnU3RhcnQtdXAnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ1RQRS9QTUUnLCBocmVmOiAnL29mZnJlcy1wbWUnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdBZ2VuY2UnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ0V2ZW50JywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdFLWNvbW1lcmNlJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdEcml2ZSB0byBzdG9yZScsIGhyZWY6ICcvJyB9XHJcbiAgICBdXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHsgbmF2YmFyOiB7IGxvZ28sIGxpbmssIGN0YSB9IH0pIHtcclxuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duQWN0aXZlLCBzZXREcm9wZG93bkFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duQWN0aXZlMiwgc2V0RHJvcGRvd25BY3RpdmUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY29udGVudElkLCBzZXRDb250ZW50SWRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IHNpbXBsZURyb3Bkb3duID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGFydGljbGVzTGluayA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVdpbmRvdyA9ICgpID0+IHtcclxuICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJOYXZNb2JpbGUgPSAoZSkgPT4ge1xyXG4gICAgcmV0dXJuIHNldElzT3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc09wZW4pIHtcclxuICAgICAgc2V0QWN0aXZlTWVudSgwKTtcclxuICAgIH1cclxuICB9LCBbaXNPcGVuXSlcclxuXHJcbiAgY29uc3QgcmVuZGVyTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiB3aW5kb3dXaWR0aCA8IDEwNDcgPyAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LWxvZ29cIj5cclxuICAgICAgICAgIDxhIGhyZWY9e2xvZ28uaHJlZn0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtsb2dvLmltYWdlLnVybH1gfSBhbHQ9e2xvZ28uaW1hZ2UuYWx0ZXJuYXRpdmVUZXh0fSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnktcmlnaHRcIiBvbkNsaWNrPXtyZW5kZXJOYXZNb2JpbGV9PlxyXG4gICAgICAgICAge2lzT3BlbiA/IChcclxuICAgICAgICAgICAgPEFpT3V0bGluZUNsb3NlIGNsYXNzTmFtZT1cImhhbVwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8SGlNZW51QWx0MyBjbGFzc05hbWU9XCJoYW1cIiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3dpbmRvd1dpZHRoIDwgMTA0NyAmJiBpc09wZW4gPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJuYXZNb2JpbGVcIiArIChhY3RpdmVNZW51ID09PSAwID8gJyBzZWxlY3RlZCcgOiAnJyl9PlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZNb2JpbGVJdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIFBvdXIgdm91c1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93Rm9yd2FyZCBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGVmdDogJzIwcHgnLCB0b3A6ICc0cHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAge2xpbmtzLm1hcCgoaXRlbSwgYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZHJvcGRvd24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2l0ZW0gKyBhfWB9IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoMyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtfbGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsZWZ0OiAnMjBweCcsIHRvcDogJzRweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtpdGVtICsgYX1gfSBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXRlbS5saW5rX2hyZWYgPT09IHJvdXRlci5yb3V0ZSAmJiBcImFjdGl2ZVwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rX2hyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rX2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAge2N0YS5tYXAoKGcsIGgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7ZyArIGh9YH0gY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4tJHtnLmNsYXNzTmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17Zy5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2cubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJuYXZNZW51Q29udGFpbmVyXCIgKyAoYWN0aXZlTWVudSA9PT0gMSA/ICcgc2VsZWN0ZWQnIDogJycpfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvdXJWb3VzTWVudU1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj48QnNBcnJvd0xlZnQgc2l6ZT17NDB9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoMCl9IGNsYXNzTmFtZT1cImJhY2tCdXR0b25cIiAvPlBvdXIgdm91czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwb3VyVm91c0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAge3BvdXJWb3VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7IHNldEFjdGl2ZU1lbnUoMik7IHNldENvbnRlbnRJZChpbmRleCkgfX0+e2l0ZW0ubGFiZWx9PElvSW9zQXJyb3dGb3J3YXJkIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJuYXZNZW51Q29udGFpbmVyXCIgKyAoYWN0aXZlTWVudSA9PT0gMiA/ICcgc2VsZWN0ZWQnIDogJycpfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvdXJWb3VzTWVudU1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj48QnNBcnJvd0xlZnQgc2l6ZT17NDB9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoMSl9IGNsYXNzTmFtZT1cImJhY2tCdXR0b25cIiAvPntwb3VyVm91c1tjb250ZW50SWRdLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwb3VyVm91c0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAge3BvdXJWb3VzW2NvbnRlbnRJZF0ubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5rLnR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaW5rIGxhYmVsPXtsaW5rLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmsuc3VibGlua3MubWFwKChzdWJsaW5rLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0ZvcndhcmQgLz48YSBocmVmPXtzdWJsaW5rLmhyZWZ9PntzdWJsaW5rLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxsaSBrZXk9e2luZGV4fT48YSBocmVmPXtsaW5rLmhyZWZ9PntsaW5rLmxhYmVsfTwvYT48L2xpPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJuYXZNZW51Q29udGFpbmVyXCIgKyAoYWN0aXZlTWVudSA9PT0gMyA/ICcgc2VsZWN0ZWQnIDogJycpfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvdXJWb3VzTWVudU1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj48QnNBcnJvd0xlZnQgc2l6ZT17NDB9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoMCl9IGNsYXNzTmFtZT1cImJhY2tCdXR0b25cIiAvPnsnQXJ0aWNsZXMnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwb3VyVm91c0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAge2xpbmtzWzFdLmNvbnRlbnQubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT48YSBocmVmPXtsaW5rLmxpbmtfaHJlZn0+e2xpbmsubGlua19sYWJlbH08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2TW9iaWxlX2JhY2tncm91bmRcIj4mbmJzcDs8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgOiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1sb2dvXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2xvZ28uaHJlZn0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2xvZ28uaW1hZ2UudXJsfWB9IGFsdD17bG9nby5pbWFnZS5hbHRlcm5hdGl2ZVRleHR9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlfbGlua3NcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5X2xpbmtzLS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1zXCIgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXREcm9wZG93bkFjdGl2ZSh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ryb3Bkb3duQWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJ9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzVweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBwb2ludGVyOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIFBvdXIgdm91cyB7ZHJvcGRvd25BY3RpdmUgPyA8SW9Jb3NBcnJvd1VwIC8+IDogPElvSW9zQXJyb3dEb3duIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAge2xpbmtzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSByZWY9e2FydGljbGVzTGlua30gY2xhc3NOYW1lPVwiaXRlbXNcIiBvbk1vdXNlRW50ZXI9eygpID0+IHNldERyb3Bkb3duQWN0aXZlMih0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ryb3Bkb3duQWN0aXZlMiA/IFwiYWN0aXZlXCIgOiBcIlwifSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICc1cHgnLCBjdXJzb3I6ICdwb2ludGVyJywgcG9pbnRlcjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rX2xhYmVsfSB7ZHJvcGRvd25BY3RpdmUyID8gPElvSW9zQXJyb3dVcCAvPiA6IDxJb0lvc0Fycm93RG93biAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2l0ZW0gKyBpfWB9IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2l0ZW0ubGlua19ocmVmID09PSByb3V0ZXIucm91dGUgJiYgXCJhY3RpdmVcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmtfaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua19sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIHtjdGEubWFwKChiLCBqKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHtiICsgan1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuLSR7Yi5jbGFzc05hbWV9YH1cclxuICAgICAgICAgICAgICAgIGhyZWY9e2IuaHJlZn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtiLmxhYmVsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHJvcGRvd25NZW51XCIgKyAoZHJvcGRvd25BY3RpdmUgPyAnIG9wZW5lZCcgOiAnJyl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0RHJvcGRvd25BY3RpdmUoZmFsc2UpfT5cclxuICAgICAgICAgIHtwb3VyVm91cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25TZWN0aW9uXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGgyPntpdGVtLmxhYmVsfTwvaDI+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubGlua3MubWFwKChkcm9wZG93bkxpbmssIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZHJvcGRvd25MaW5rLnR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTGluayBsYWJlbD17ZHJvcGRvd25MaW5rLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3VibGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkcm9wZG93bkxpbmsuc3VibGlua3MubWFwKChzdWJsaW5rLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdWJsaW5rXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0ZvcndhcmQgLz48YSBocmVmPXtzdWJsaW5rLmhyZWZ9PntzdWJsaW5rLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS1jb250ZW50PXtkcm9wZG93bkxpbmsubGFiZWx9IGhyZWY9e2Ryb3Bkb3duTGluay5ocmVmfT57ZHJvcGRvd25MaW5rLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHJlZj17c2ltcGxlRHJvcGRvd259IGNsYXNzTmFtZT17XCJzaW1wbGVEcm9wZG93bk1lbnVcIiArIChkcm9wZG93bkFjdGl2ZTIgPyAnIG9wZW5lZCcgOiAnJyl9IG9uTW91c2VMZWF2ZT17KCk9Pnsgc2V0RHJvcGRvd25BY3RpdmUyKHRydWUpIH19PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7bGlua3NbMV0uY29udGVudC5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bGluay5saW5rX2hyZWZ9PntsaW5rLmxpbmtfbGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGxldCBsaW5rWHBvcyA9IGFydGljbGVzTGluay5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICBzaW1wbGVEcm9wZG93bi5jdXJyZW50LnN0eWxlLmxlZnQgPSBsaW5rWHBvcztcclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICF3aW5kb3dXaWR0aCA/IHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKSA6IG51bGw7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVXaW5kb3cpO1xyXG4gICAgfTtcclxuICB9LCBbd2luZG93V2lkdGhdKTtcclxuXHJcbiAgcmV0dXJuIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+e3JlbmRlck5hdmJhcigpfTwvbmF2PjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9