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

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      activeMenu = _useState4[0],
      setActiveMenu = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      contentId = _useState5[0],
      setContentId = _useState5[1];

  var articlesDropdown = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
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

  var handleDropdownClose = function handleDropdownClose() {
    articlesDropdown.current.setFocus(false);
  };

  var renderNavbar = function renderNavbar() {
    return windowWidth < 1047 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "navbar_primary",
      onMouseLeave: handleDropdownClose,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "navbar_primary-logo",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: logo.href,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "".concat(logo.image.url),
            alt: logo.image.alternativeText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "navbar_primary-right",
        onClick: renderNavMobile,
        children: isOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineClose, {
          className: "ham"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiMenuAlt3, {
          className: "ham"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
                lineNumber: 101,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
                style: {
                  position: 'relative',
                  left: '20px',
                  top: '4px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
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
                    lineNumber: 110,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
                    style: {
                      position: 'relative',
                      left: '20px',
                      top: '4px'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 25
                  }, _this)]
                }, "".concat(item + a), true, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
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
                    lineNumber: 119,
                    columnNumber: 25
                  }, _this)
                }, "".concat(item + a), false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
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
                  lineNumber: 132,
                  columnNumber: 21
                }, _this)
              }, "".concat(g + h), false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 19
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
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
                lineNumber: 143,
                columnNumber: 41
              }, _this), "Pour vous"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 143,
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
                      lineNumber: 147,
                      columnNumber: 96
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 23
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
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
                lineNumber: 156,
                columnNumber: 41
              }, _this), pourVous[contentId].label]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 156,
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
                              lineNumber: 166,
                              columnNumber: 35
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: sublink.href,
                              children: sublink.label
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 166,
                              columnNumber: 56
                            }, _this)]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 165,
                            columnNumber: 33
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 163,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 27
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 25
                  }, _this);
                } else {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: link.href,
                      children: link.label
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 175,
                      columnNumber: 47
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 31
                  }, _this);
                }
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
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
                lineNumber: 184,
                columnNumber: 41
              }, _this), 'Articles']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
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
                    lineNumber: 187,
                    columnNumber: 37
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navMobile_background",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 13
        }, _this)]
      }, void 0, true) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
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
              lineNumber: 202,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
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
                  lineNumber: 210,
                  columnNumber: 47
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowDown, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 66
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, _this), links.map(function (item, i) {
              if (item.type === 'dropdown') {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownLink__WEBPACK_IMPORTED_MODULE_4__.default, {
                  ref: articlesDropdown,
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
                            lineNumber: 221,
                            columnNumber: 31
                          }, _this)
                        }, index, false, {
                          fileName: _jsxFileName,
                          lineNumber: 220,
                          columnNumber: 29
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
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
                    lineNumber: 232,
                    columnNumber: 23
                  }, _this)
                }, "".concat(item + i), false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 21
                }, _this);
              }
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
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
              lineNumber: 247,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
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
              lineNumber: 259,
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
                              lineNumber: 269,
                              columnNumber: 33
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: sublink.href,
                              children: sublink.label
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 269,
                              columnNumber: 54
                            }, _this)]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 268,
                            columnNumber: 31
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 266,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 25
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
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
                      lineNumber: 280,
                      columnNumber: 25
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 279,
                    columnNumber: 23
                  }, _this);
                }
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
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
    lineNumber: 317,
    columnNumber: 10
  }, this);
}

_s(Navbar, "eYvdFh6+6X3h4JzV/ElbSjO98C8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsibGlua3MiLCJsaW5rX2xhYmVsIiwibGlua19ocmVmIiwidHlwZSIsImNvbnRlbnQiLCJwb3VyVm91cyIsImxhYmVsIiwic3VibGlua3MiLCJocmVmIiwiTmF2YmFyIiwibmF2YmFyIiwibG9nbyIsImxpbmsiLCJjdGEiLCJ1c2VTdGF0ZSIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkcm9wZG93bkFjdGl2ZSIsInNldERyb3Bkb3duQWN0aXZlIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJjb250ZW50SWQiLCJzZXRDb250ZW50SWQiLCJhcnRpY2xlc0Ryb3Bkb3duIiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlV2luZG93Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJlbmRlck5hdk1vYmlsZSIsImUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVEcm9wZG93bkNsb3NlIiwiY3VycmVudCIsInNldEZvY3VzIiwicmVuZGVyTmF2YmFyIiwiaW1hZ2UiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJjdXJzb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJtYXAiLCJpdGVtIiwiYSIsInJvdXRlIiwiZyIsImgiLCJjbGFzc05hbWUiLCJpbmRleCIsInN1YmxpbmsiLCJpIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJnYXAiLCJwb2ludGVyIiwiYiIsImoiLCJkcm9wZG93bkxpbmsiLCJpZHgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQUVD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R0FBbUQsSUFBbkQ7QUFFQUQsVUFBTSxDQUFDa0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NuQyxZQUFsQztBQUVBLFdBQU8sWUFBTTtBQUNYQyxZQUFNLENBQUNtQyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ3BDLFlBQXJDO0FBQ0QsS0FGRDtBQUdELEdBUlEsRUFRTixDQUFDZCxXQUFELENBUk0sQ0FBVDtBQVVBLHNCQUFPO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSxjQUF5QnVCLFlBQVk7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBM1F1QjdCLE07VUFRUG1CLGtEOzs7S0FST25CLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODE5OGUxNmM4MDU4ZDY4ZDU4ZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIaU1lbnVBbHQzIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZUNsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dVcCwgSW9Jb3NBcnJvd0Rvd24sIElvSW9zQXJyb3dGb3J3YXJkIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBCc0Fycm93TGVmdCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xyXG5pbXBvcnQgeyBNb2JpbGVGcmllbmRseSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IERyb3Bkb3duTGluayBmcm9tIFwiLi9Ecm9wZG93bkxpbmtcIjtcclxuXHJcbmNvbnN0IGxpbmtzID0gW1xyXG4gIHsgbGlua19sYWJlbDogJ09mZnJlcycsIGxpbmtfaHJlZjogJy9vZmZyZXMnLCB0eXBlOiAnbGluaycgfSxcclxuICB7XHJcbiAgICBsaW5rX2xhYmVsOiAnQXJ0aWNsZXMnLCB0eXBlOiAnZHJvcGRvd24nLCBjb250ZW50OiBbXHJcbiAgICAgIHsgbGlua19sYWJlbDogJ0Jsb2cnLCBsaW5rX2hyZWY6ICdodHRwczovXFwvYmxvZy5rbG94LmlvLycgfSxcclxuICAgICAgeyBsaW5rX2xhYmVsOiAnUHJlc3Mgcm9vbScsIGxpbmtfaHJlZjogJy9wcmVzcy1yb29tJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAgeyBsaW5rX2xhYmVsOiAnQ29udGFjdCcsIGxpbmtfaHJlZjogJy9jb250YWN0JywgdHlwZTogJ2xpbmsnIH0sXHJcbl1cclxuXHJcbmNvbnN0IHBvdXJWb3VzID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiAnU2VydmljZXMnLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnQ2FtcGFnbmVzIG1hcmtldGluZycsIHR5cGU6ICdkcm9wZG93bicsIHN1YmxpbmtzOiBbXHJcbiAgICAgICAgICB7IGxhYmVsOiAnQnJhbmRpbmcnLCBocmVmOiAnLycgfSxcclxuICAgICAgICAgIHsgbGFiZWw6ICdUcmFmaWMnLCBocmVmOiAnLycgfSxcclxuICAgICAgICAgIHsgbGFiZWw6ICdQZXJmb3JtYW5jZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgeyBsYWJlbDogJ0NvbnN1bHRpbmcnLCB0eXBlOiAnbGluaycsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnTWFya2V0cGxhY2UnLCB0eXBlOiAnbGluaycsIGhyZWY6ICcvbWFya2V0cGxhY2UnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1R5cG9sb2dpZScsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7IGxhYmVsOiAnU3RhcnQtdXAnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ1RQRS9QTUUnLCBocmVmOiAnL29mZnJlcy1wbWUnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdBZ2VuY2UnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ0V2ZW50JywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdFLWNvbW1lcmNlJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdEcml2ZSB0byBzdG9yZScsIGhyZWY6ICcvJyB9XHJcbiAgICBdXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHsgbmF2YmFyOiB7IGxvZ28sIGxpbmssIGN0YSB9IH0pIHtcclxuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duQWN0aXZlLCBzZXREcm9wZG93bkFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NvbnRlbnRJZCwgc2V0Q29udGVudElkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGFydGljbGVzRHJvcGRvd24gPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVdpbmRvdyA9ICgpID0+IHtcclxuICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJOYXZNb2JpbGUgPSAoZSkgPT4ge1xyXG4gICAgcmV0dXJuIHNldElzT3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc09wZW4pIHtcclxuICAgICAgc2V0QWN0aXZlTWVudSgwKTtcclxuICAgIH1cclxuICB9LCBbaXNPcGVuXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJvcGRvd25DbG9zZSA9ICgpPT57XHJcbiAgICBhcnRpY2xlc0Ryb3Bkb3duLmN1cnJlbnQuc2V0Rm9jdXMoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiB3aW5kb3dXaWR0aCA8IDEwNDcgPyAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlcIiBvbk1vdXNlTGVhdmU9e2hhbmRsZURyb3Bkb3duQ2xvc2V9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnktbG9nb1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj17bG9nby5ocmVmfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake2xvZ28uaW1hZ2UudXJsfWB9IGFsdD17bG9nby5pbWFnZS5hbHRlcm5hdGl2ZVRleHR9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1yaWdodFwiIG9uQ2xpY2s9e3JlbmRlck5hdk1vYmlsZX0+XHJcbiAgICAgICAgICB7aXNPcGVuID8gKFxyXG4gICAgICAgICAgICA8QWlPdXRsaW5lQ2xvc2UgY2xhc3NOYW1lPVwiaGFtXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxIaU1lbnVBbHQzIGNsYXNzTmFtZT1cImhhbVwiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7d2luZG93V2lkdGggPCAxMDQ3ICYmIGlzT3BlbiA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1vYmlsZVwiICsgKGFjdGl2ZU1lbnUgPT09IDAgPyAnIHNlbGVjdGVkJyA6ICcnKX0+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdk1vYmlsZUl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgUG91ciB2b3VzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsZWZ0OiAnMjBweCcsIHRvcDogJzRweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB7bGlua3MubWFwKChpdGVtLCBhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7aXRlbSArIGF9YH0gY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua19sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0ZvcndhcmQgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxlZnQ6ICcyMHB4JywgdG9wOiAnNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2l0ZW0gKyBhfWB9IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpdGVtLmxpbmtfaHJlZiA9PT0gcm91dGVyLnJvdXRlICYmIFwiYWN0aXZlXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmtfaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtfbGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICB7Y3RhLm1hcCgoZywgaCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtnICsgaH1gfSBjbGFzc05hbWU9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0bi0ke2cuY2xhc3NOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtnLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Zy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1lbnVDb250YWluZXJcIiArIChhY3RpdmVNZW51ID09PSAxID8gJyBzZWxlY3RlZCcgOiAnJyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG91clZvdXNNZW51TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPjxCc0Fycm93TGVmdCBzaXplPXs0MH0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgwKX0gY2xhc3NOYW1lPVwiYmFja0J1dHRvblwiIC8+UG91ciB2b3VzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvdXJWb3VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cG91clZvdXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHsgc2V0QWN0aXZlTWVudSgyKTsgc2V0Q29udGVudElkKGluZGV4KSB9fT57aXRlbS5sYWJlbH08SW9Jb3NBcnJvd0ZvcndhcmQgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1lbnVDb250YWluZXJcIiArIChhY3RpdmVNZW51ID09PSAyID8gJyBzZWxlY3RlZCcgOiAnJyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG91clZvdXNNZW51TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPjxCc0Fycm93TGVmdCBzaXplPXs0MH0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgxKX0gY2xhc3NOYW1lPVwiYmFja0J1dHRvblwiIC8+e3BvdXJWb3VzW2NvbnRlbnRJZF0ubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvdXJWb3VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cG91clZvdXNbY29udGVudElkXS5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmsudHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpbmsgbGFiZWw9e2xpbmsubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGluay5zdWJsaW5rcy5tYXAoKHN1YmxpbmssIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93Rm9yd2FyZCAvPjxhIGhyZWY9e3N1YmxpbmsuaHJlZn0+e3N1YmxpbmsubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGxpIGtleT17aW5kZXh9PjxhIGhyZWY9e2xpbmsuaHJlZn0+e2xpbmsubGFiZWx9PC9hPjwvbGk+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1lbnVDb250YWluZXJcIiArIChhY3RpdmVNZW51ID09PSAzID8gJyBzZWxlY3RlZCcgOiAnJyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG91clZvdXNNZW51TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPjxCc0Fycm93TGVmdCBzaXplPXs0MH0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgwKX0gY2xhc3NOYW1lPVwiYmFja0J1dHRvblwiIC8+eydBcnRpY2xlcyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvdXJWb3VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7bGlua3NbMV0uY29udGVudC5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PjxhIGhyZWY9e2xpbmsubGlua19ocmVmfT57bGluay5saW5rX2xhYmVsfTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZNb2JpbGVfYmFja2dyb3VuZFwiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LWxvZ29cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj17bG9nby5ocmVmfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7bG9nby5pbWFnZS51cmx9YH0gYWx0PXtsb2dvLmltYWdlLmFsdGVybmF0aXZlVGV4dH0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeV9saW5rc1wiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlfbGlua3MtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbXNcIiBvbk1vdXNlRW50ZXI9eygpID0+IHNldERyb3Bkb3duQWN0aXZlKHRydWUpfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17ZHJvcGRvd25BY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnNXB4JywgY3Vyc29yOiAncG9pbnRlcicsIHBvaW50ZXI6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgUG91ciB2b3VzIHtkcm9wZG93bkFjdGl2ZSA/IDxJb0lvc0Fycm93VXAgLz4gOiA8SW9Jb3NBcnJvd0Rvd24gLz59XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7bGlua3MubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZHJvcGRvd24nKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTGluayByZWY9e2FydGljbGVzRHJvcGRvd259IGxhYmVsPXtpdGVtLmxpbmtfbGFiZWx9IHR5cGU9XCJob3ZlclwiIHRyYW5zaXRpb249eydvcGFjaXR5J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzaW1wbGVEcm9wZG93bk1lbnVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50Lm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bGluay5saW5rX2hyZWZ9PntsaW5rLmxpbmtfbGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25MaW5rPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2l0ZW0gKyBpfWB9IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2l0ZW0ubGlua19ocmVmID09PSByb3V0ZXIucm91dGUgJiYgXCJhY3RpdmVcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmtfaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua19sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIHtjdGEubWFwKChiLCBqKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHtiICsgan1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuLSR7Yi5jbGFzc05hbWV9YH1cclxuICAgICAgICAgICAgICAgIGhyZWY9e2IuaHJlZn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtiLmxhYmVsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHJvcGRvd25NZW51XCIgKyAoZHJvcGRvd25BY3RpdmUgPyAnIG9wZW5lZCcgOiAnJyl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0RHJvcGRvd25BY3RpdmUoZmFsc2UpfT5cclxuICAgICAgICAgIHtwb3VyVm91cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25TZWN0aW9uXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGgyPntpdGVtLmxhYmVsfTwvaDI+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubGlua3MubWFwKChkcm9wZG93bkxpbmssIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZHJvcGRvd25MaW5rLnR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTGluayBsYWJlbD17ZHJvcGRvd25MaW5rLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3VibGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkcm9wZG93bkxpbmsuc3VibGlua3MubWFwKChzdWJsaW5rLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdWJsaW5rXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0ZvcndhcmQgLz48YSBocmVmPXtzdWJsaW5rLmhyZWZ9PntzdWJsaW5rLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS1jb250ZW50PXtkcm9wZG93bkxpbmsubGFiZWx9IGhyZWY9e2Ryb3Bkb3duTGluay5ocmVmfT57ZHJvcGRvd25MaW5rLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiByZWY9e3NpbXBsZURyb3Bkb3dufSBjbGFzc05hbWU9e1wic2ltcGxlRHJvcGRvd25NZW51XCIgKyAoZHJvcGRvd25BY3RpdmUyID8gJyBvcGVuZWQnIDogJycpfSBvbk1vdXNlTGVhdmU9eygpPT57IHNldERyb3Bkb3duQWN0aXZlMih0cnVlKSB9fT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2xpbmtzWzFdLmNvbnRlbnQubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsubGlua19ocmVmfT57bGluay5saW5rX2xhYmVsfTwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICF3aW5kb3dXaWR0aCA/IHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKSA6IG51bGw7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVXaW5kb3cpO1xyXG4gICAgfTtcclxuICB9LCBbd2luZG93V2lkdGhdKTtcclxuXHJcbiAgcmV0dXJuIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+e3JlbmRlck5hdmJhcigpfTwvbmF2PjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9