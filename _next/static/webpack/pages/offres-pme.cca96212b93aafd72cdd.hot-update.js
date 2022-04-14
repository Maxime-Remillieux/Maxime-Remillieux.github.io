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
                  innerRef: articlesDropdown,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsibGlua3MiLCJsaW5rX2xhYmVsIiwibGlua19ocmVmIiwidHlwZSIsImNvbnRlbnQiLCJwb3VyVm91cyIsImxhYmVsIiwic3VibGlua3MiLCJocmVmIiwiTmF2YmFyIiwibmF2YmFyIiwibG9nbyIsImxpbmsiLCJjdGEiLCJ1c2VTdGF0ZSIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkcm9wZG93bkFjdGl2ZSIsInNldERyb3Bkb3duQWN0aXZlIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJjb250ZW50SWQiLCJzZXRDb250ZW50SWQiLCJhcnRpY2xlc0Ryb3Bkb3duIiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlV2luZG93Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJlbmRlck5hdk1vYmlsZSIsImUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVEcm9wZG93bkNsb3NlIiwiY3VycmVudCIsInNldEZvY3VzIiwicmVuZGVyTmF2YmFyIiwiaW1hZ2UiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJjdXJzb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJtYXAiLCJpdGVtIiwiYSIsInJvdXRlIiwiZyIsImgiLCJjbGFzc05hbWUiLCJpbmRleCIsInN1YmxpbmsiLCJpIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJnYXAiLCJwb2ludGVyIiwiYiIsImoiLCJkcm9wZG93bkxpbmsiLCJpZHgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQUVD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R0FBbUQsSUFBbkQ7QUFFQUQsVUFBTSxDQUFDa0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NuQyxZQUFsQztBQUVBLFdBQU8sWUFBTTtBQUNYQyxZQUFNLENBQUNtQyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ3BDLFlBQXJDO0FBQ0QsS0FGRDtBQUdELEdBUlEsRUFRTixDQUFDZCxXQUFELENBUk0sQ0FBVDtBQVVBLHNCQUFPO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSxjQUF5QnVCLFlBQVk7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBM1F1QjdCLE07VUFRUG1CLGtEOzs7S0FST25CLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb2ZmcmVzLXBtZS5jY2E5NjIxMmI5M2FhZmQ3MmNkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhpTWVudUFsdDMgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd1VwLCBJb0lvc0Fycm93RG93biwgSW9Jb3NBcnJvd0ZvcndhcmQgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCB7IEJzQXJyb3dMZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXHJcbmltcG9ydCB7IE1vYmlsZUZyaWVuZGx5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgRHJvcGRvd25MaW5rIGZyb20gXCIuL0Ryb3Bkb3duTGlua1wiO1xyXG5cclxuY29uc3QgbGlua3MgPSBbXHJcbiAgeyBsaW5rX2xhYmVsOiAnT2ZmcmVzJywgbGlua19ocmVmOiAnL29mZnJlcycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gIHtcclxuICAgIGxpbmtfbGFiZWw6ICdBcnRpY2xlcycsIHR5cGU6ICdkcm9wZG93bicsIGNvbnRlbnQ6IFtcclxuICAgICAgeyBsaW5rX2xhYmVsOiAnQmxvZycsIGxpbmtfaHJlZjogJ2h0dHBzOi9cXC9ibG9nLmtsb3guaW8vJyB9LFxyXG4gICAgICB7IGxpbmtfbGFiZWw6ICdQcmVzcyByb29tJywgbGlua19ocmVmOiAnL3ByZXNzLXJvb20nIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7IGxpbmtfbGFiZWw6ICdDb250YWN0JywgbGlua19ocmVmOiAnL2NvbnRhY3QnLCB0eXBlOiAnbGluaycgfSxcclxuXVxyXG5cclxuY29uc3QgcG91clZvdXMgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICdTZXJ2aWNlcycsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdDYW1wYWduZXMgbWFya2V0aW5nJywgdHlwZTogJ2Ryb3Bkb3duJywgc3VibGlua3M6IFtcclxuICAgICAgICAgIHsgbGFiZWw6ICdCcmFuZGluZycsIGhyZWY6ICcvJyB9LFxyXG4gICAgICAgICAgeyBsYWJlbDogJ1RyYWZpYycsIGhyZWY6ICcvJyB9LFxyXG4gICAgICAgICAgeyBsYWJlbDogJ1BlcmZvcm1hbmNlJywgaHJlZjogJy8nIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7IGxhYmVsOiAnQ29uc3VsdGluZycsIHR5cGU6ICdsaW5rJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdNYXJrZXRwbGFjZScsIHR5cGU6ICdsaW5rJywgaHJlZjogJy9tYXJrZXRwbGFjZScgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnVHlwb2xvZ2llJyxcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIHsgbGFiZWw6ICdTdGFydC11cCcsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnVFBFL1BNRScsIGhyZWY6ICcvb2ZmcmVzLXBtZScgfSxcclxuICAgICAgeyBsYWJlbDogJ0FnZW5jZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnRXZlbnQnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ0UtY29tbWVyY2UnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ0RyaXZlIHRvIHN0b3JlJywgaHJlZjogJy8nIH1cclxuICAgIF1cclxuICB9LFxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoeyBuYXZiYXI6IHsgbG9nbywgbGluaywgY3RhIH0gfSkge1xyXG4gIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZHJvcGRvd25BY3RpdmUsIHNldERyb3Bkb3duQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY29udGVudElkLCBzZXRDb250ZW50SWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgYXJ0aWNsZXNEcm9wZG93biA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlV2luZG93ID0gKCkgPT4ge1xyXG4gICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlck5hdk1vYmlsZSA9IChlKSA9PiB7XHJcbiAgICByZXR1cm4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzT3Blbikge1xyXG4gICAgICBzZXRBY3RpdmVNZW51KDApO1xyXG4gICAgfVxyXG4gIH0sIFtpc09wZW5dKVxyXG5cclxuICBjb25zdCBoYW5kbGVEcm9wZG93bkNsb3NlID0gKCk9PntcclxuICAgIGFydGljbGVzRHJvcGRvd24uY3VycmVudC5zZXRGb2N1cyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJOYXZiYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIHdpbmRvd1dpZHRoIDwgMTA0NyA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeVwiIG9uTW91c2VMZWF2ZT17aGFuZGxlRHJvcGRvd25DbG9zZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1sb2dvXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtsb2dvLmhyZWZ9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7bG9nby5pbWFnZS51cmx9YH0gYWx0PXtsb2dvLmltYWdlLmFsdGVybmF0aXZlVGV4dH0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LXJpZ2h0XCIgb25DbGljaz17cmVuZGVyTmF2TW9iaWxlfT5cclxuICAgICAgICAgIHtpc09wZW4gPyAoXHJcbiAgICAgICAgICAgIDxBaU91dGxpbmVDbG9zZSBjbGFzc05hbWU9XCJoYW1cIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEhpTWVudUFsdDMgY2xhc3NOYW1lPVwiaGFtXCIgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHt3aW5kb3dXaWR0aCA8IDEwNDcgJiYgaXNPcGVuID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibmF2TW9iaWxlXCIgKyAoYWN0aXZlTWVudSA9PT0gMCA/ICcgc2VsZWN0ZWQnIDogJycpfT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2TW9iaWxlSXRlbXNcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KDEpfT5cclxuICAgICAgICAgICAgICAgICAgICBQb3VyIHZvdXNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0ZvcndhcmQgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxlZnQ6ICcyMHB4JywgdG9wOiAnNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGl0ZW0sIGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtpdGVtICsgYX1gfSBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KDMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rX2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93Rm9yd2FyZCBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGVmdDogJzIwcHgnLCB0b3A6ICc0cHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7aXRlbSArIGF9YH0gY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2l0ZW0ubGlua19ocmVmID09PSByb3V0ZXIucm91dGUgJiYgXCJhY3RpdmVcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ubGlua19ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua19sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgIHtjdGEubWFwKChnLCBoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2cgKyBofWB9IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuLSR7Zy5jbGFzc05hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2cuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtnLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibmF2TWVudUNvbnRhaW5lclwiICsgKGFjdGl2ZU1lbnUgPT09IDEgPyAnIHNlbGVjdGVkJyA6ICcnKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3VyVm91c01lbnVNb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+PEJzQXJyb3dMZWZ0IHNpemU9ezQwfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KDApfSBjbGFzc05hbWU9XCJiYWNrQnV0dG9uXCIgLz5Qb3VyIHZvdXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicG91clZvdXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwb3VyVm91cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4geyBzZXRBY3RpdmVNZW51KDIpOyBzZXRDb250ZW50SWQoaW5kZXgpIH19PntpdGVtLmxhYmVsfTxJb0lvc0Fycm93Rm9yd2FyZCAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibmF2TWVudUNvbnRhaW5lclwiICsgKGFjdGl2ZU1lbnUgPT09IDIgPyAnIHNlbGVjdGVkJyA6ICcnKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3VyVm91c01lbnVNb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+PEJzQXJyb3dMZWZ0IHNpemU9ezQwfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KDEpfSBjbGFzc05hbWU9XCJiYWNrQnV0dG9uXCIgLz57cG91clZvdXNbY29udGVudElkXS5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicG91clZvdXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwb3VyVm91c1tjb250ZW50SWRdLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGluay50eXBlID09PSAnZHJvcGRvd24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTGluayBsYWJlbD17bGluay5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rLnN1YmxpbmtzLm1hcCgoc3VibGluaywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIC8+PGEgaHJlZj17c3VibGluay5ocmVmfT57c3VibGluay5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8bGkga2V5PXtpbmRleH0+PGEgaHJlZj17bGluay5ocmVmfT57bGluay5sYWJlbH08L2E+PC9saT4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibmF2TWVudUNvbnRhaW5lclwiICsgKGFjdGl2ZU1lbnUgPT09IDMgPyAnIHNlbGVjdGVkJyA6ICcnKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3VyVm91c01lbnVNb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+PEJzQXJyb3dMZWZ0IHNpemU9ezQwfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KDApfSBjbGFzc05hbWU9XCJiYWNrQnV0dG9uXCIgLz57J0FydGljbGVzJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicG91clZvdXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtsaW5rc1sxXS5jb250ZW50Lm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+PGEgaHJlZj17bGluay5saW5rX2hyZWZ9PntsaW5rLmxpbmtfbGFiZWx9PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdk1vYmlsZV9iYWNrZ3JvdW5kXCI+Jm5ic3A7PC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApIDogKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnktbG9nb1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtsb2dvLmhyZWZ9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtsb2dvLmltYWdlLnVybH1gfSBhbHQ9e2xvZ28uaW1hZ2UuYWx0ZXJuYXRpdmVUZXh0fSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5X2xpbmtzXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeV9saW5rcy0taXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtc1wiIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0RHJvcGRvd25BY3RpdmUodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtkcm9wZG93bkFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwifSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICc1cHgnLCBjdXJzb3I6ICdwb2ludGVyJywgcG9pbnRlcjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICBQb3VyIHZvdXMge2Ryb3Bkb3duQWN0aXZlID8gPElvSW9zQXJyb3dVcCAvPiA6IDxJb0lvc0Fycm93RG93biAvPn1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaW5rIGlubmVyUmVmPXthcnRpY2xlc0Ryb3Bkb3dufSBsYWJlbD17aXRlbS5saW5rX2xhYmVsfSB0eXBlPVwiaG92ZXJcIiB0cmFuc2l0aW9uPXsnb3BhY2l0eSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2ltcGxlRHJvcGRvd25NZW51XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29udGVudC5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsubGlua19ocmVmfT57bGluay5saW5rX2xhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTGluaz5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtpdGVtICsgaX1gfSBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpdGVtLmxpbmtfaHJlZiA9PT0gcm91dGVyLnJvdXRlICYmIFwiYWN0aXZlXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rX2hyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtfbGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1yaWdodFwiPlxyXG4gICAgICAgICAgICB7Y3RhLm1hcCgoYiwgaikgPT4gKFxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGtleT17YCR7YiArIGp9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0bi0ke2IuY2xhc3NOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtiLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17Yi5sYWJlbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRyb3Bkb3duTWVudVwiICsgKGRyb3Bkb3duQWN0aXZlID8gJyBvcGVuZWQnIDogJycpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldERyb3Bkb3duQWN0aXZlKGZhbHNlKX0+XHJcbiAgICAgICAgICB7cG91clZvdXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duU2VjdGlvblwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxoMj57aXRlbS5sYWJlbH08L2gyPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtzLm1hcCgoZHJvcGRvd25MaW5rLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duTGluay50eXBlID09PSAnZHJvcGRvd24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpbmsgbGFiZWw9e2Ryb3Bkb3duTGluay5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1YmxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHJvcGRvd25MaW5rLnN1YmxpbmtzLm1hcCgoc3VibGluaywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3VibGlua1wiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIC8+PGEgaHJlZj17c3VibGluay5ocmVmfT57c3VibGluay5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGRhdGEtY29udGVudD17ZHJvcGRvd25MaW5rLmxhYmVsfSBocmVmPXtkcm9wZG93bkxpbmsuaHJlZn0+e2Ryb3Bkb3duTGluay5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgcmVmPXtzaW1wbGVEcm9wZG93bn0gY2xhc3NOYW1lPXtcInNpbXBsZURyb3Bkb3duTWVudVwiICsgKGRyb3Bkb3duQWN0aXZlMiA/ICcgb3BlbmVkJyA6ICcnKX0gb25Nb3VzZUxlYXZlPXsoKT0+eyBzZXREcm9wZG93bkFjdGl2ZTIodHJ1ZSkgfX0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtsaW5rc1sxXS5jb250ZW50Lm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rLmxpbmtfaHJlZn0+e2xpbmsubGlua19sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhd2luZG93V2lkdGggPyBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCkgOiBudWxsO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvdyk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93KTtcclxuICAgIH07XHJcbiAgfSwgW3dpbmRvd1dpZHRoXSk7XHJcblxyXG4gIHJldHVybiA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPntyZW5kZXJOYXZiYXIoKX08L25hdj47XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==