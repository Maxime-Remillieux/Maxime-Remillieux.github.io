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
                lineNumber: 97,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
                style: {
                  position: 'relative',
                  left: '20px',
                  top: '4px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
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
                    lineNumber: 106,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
                    style: {
                      position: 'relative',
                      left: '20px',
                      top: '4px'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 25
                  }, _this)]
                }, "".concat(item + a), true, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
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
                    lineNumber: 115,
                    columnNumber: 25
                  }, _this)
                }, "".concat(item + a), false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
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
                  lineNumber: 128,
                  columnNumber: 21
                }, _this)
              }, "".concat(g + h), false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 19
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
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
                lineNumber: 139,
                columnNumber: 41
              }, _this), "Pour vous"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 139,
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
                      lineNumber: 143,
                      columnNumber: 96
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 23
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
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
                lineNumber: 152,
                columnNumber: 41
              }, _this), pourVous[contentId].label]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
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
                              lineNumber: 162,
                              columnNumber: 35
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: sublink.href,
                              children: sublink.label
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 162,
                              columnNumber: 56
                            }, _this)]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 161,
                            columnNumber: 33
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 158,
                      columnNumber: 27
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 25
                  }, _this);
                } else {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: link.href,
                      children: link.label
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 171,
                      columnNumber: 47
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 31
                  }, _this);
                }
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
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
                lineNumber: 180,
                columnNumber: 41
              }, _this), 'Articles']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
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
                    lineNumber: 183,
                    columnNumber: 37
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navMobile_background",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
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
              lineNumber: 198,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
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
                  lineNumber: 206,
                  columnNumber: 47
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowDown, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 66
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
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
                            lineNumber: 217,
                            columnNumber: 31
                          }, _this)
                        }, index, false, {
                          fileName: _jsxFileName,
                          lineNumber: 216,
                          columnNumber: 29
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 214,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 213,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
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
                    lineNumber: 228,
                    columnNumber: 23
                  }, _this)
                }, "".concat(item + i), false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 21
                }, _this);
              }
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
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
              lineNumber: 243,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
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
              lineNumber: 255,
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
                              lineNumber: 265,
                              columnNumber: 33
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: sublink.href,
                              children: sublink.label
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 265,
                              columnNumber: 54
                            }, _this)]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 264,
                            columnNumber: 31
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 262,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 261,
                      columnNumber: 25
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
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
                      lineNumber: 276,
                      columnNumber: 25
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 23
                  }, _this);
                }
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 15
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
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
    lineNumber: 313,
    columnNumber: 10
  }, this);
}

_s(Navbar, "mB48QNE4QIpOUTtFdkKHjCCg+YE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsibGlua3MiLCJsaW5rX2xhYmVsIiwibGlua19ocmVmIiwidHlwZSIsImNvbnRlbnQiLCJwb3VyVm91cyIsImxhYmVsIiwic3VibGlua3MiLCJocmVmIiwiTmF2YmFyIiwibmF2YmFyIiwibG9nbyIsImxpbmsiLCJjdGEiLCJ1c2VTdGF0ZSIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkcm9wZG93bkFjdGl2ZSIsInNldERyb3Bkb3duQWN0aXZlIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJjb250ZW50SWQiLCJzZXRDb250ZW50SWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVXaW5kb3ciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmVuZGVyTmF2TW9iaWxlIiwiZSIsInVzZUVmZmVjdCIsInJlbmRlck5hdmJhciIsImhhbmRsZURyb3Bkb3duQ2xvc2UiLCJpbWFnZSIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsImN1cnNvciIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsIm1hcCIsIml0ZW0iLCJhIiwicm91dGUiLCJnIiwiaCIsImNsYXNzTmFtZSIsImluZGV4Iiwic3VibGluayIsImkiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImdhcCIsInBvaW50ZXIiLCJiIiwiaiIsImRyb3Bkb3duTGluayIsImlkeCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFBRUMsWUFBVSxFQUFFLFFBQWQ7QUFBd0JDLFdBQVMsRUFBRSxTQUFuQztBQUE4Q0MsTUFB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WUFBWTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0F2UXVCeEIsTTtVQU9QaUIsa0Q7OztLQVBPakIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vZmZyZXMtcG1lLjAyZTQ5ZDc0YjY5YWE4NDU3OWNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGlNZW51QWx0MyB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93VXAsIElvSW9zQXJyb3dEb3duLCBJb0lvc0Fycm93Rm9yd2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHsgQnNBcnJvd0xlZnQgfSBmcm9tICdyZWFjdC1pY29ucy9icydcclxuaW1wb3J0IHsgTW9iaWxlRnJpZW5kbHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBEcm9wZG93bkxpbmsgZnJvbSBcIi4vRHJvcGRvd25MaW5rXCI7XHJcblxyXG5jb25zdCBsaW5rcyA9IFtcclxuICB7IGxpbmtfbGFiZWw6ICdPZmZyZXMnLCBsaW5rX2hyZWY6ICcvb2ZmcmVzJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAge1xyXG4gICAgbGlua19sYWJlbDogJ0FydGljbGVzJywgdHlwZTogJ2Ryb3Bkb3duJywgY29udGVudDogW1xyXG4gICAgICB7IGxpbmtfbGFiZWw6ICdCbG9nJywgbGlua19ocmVmOiAnaHR0cHM6L1xcL2Jsb2cua2xveC5pby8nIH0sXHJcbiAgICAgIHsgbGlua19sYWJlbDogJ1ByZXNzIHJvb20nLCBsaW5rX2hyZWY6ICcvcHJlc3Mtcm9vbScgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHsgbGlua19sYWJlbDogJ0NvbnRhY3QnLCBsaW5rX2hyZWY6ICcvY29udGFjdCcsIHR5cGU6ICdsaW5rJyB9LFxyXG5dXHJcblxyXG5jb25zdCBwb3VyVm91cyA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ1NlcnZpY2VzJyxcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ0NhbXBhZ25lcyBtYXJrZXRpbmcnLCB0eXBlOiAnZHJvcGRvd24nLCBzdWJsaW5rczogW1xyXG4gICAgICAgICAgeyBsYWJlbDogJ0JyYW5kaW5nJywgaHJlZjogJy8nIH0sXHJcbiAgICAgICAgICB7IGxhYmVsOiAnVHJhZmljJywgaHJlZjogJy8nIH0sXHJcbiAgICAgICAgICB7IGxhYmVsOiAnUGVyZm9ybWFuY2UnLCBocmVmOiAnLycgfSxcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdDb25zdWx0aW5nJywgdHlwZTogJ2xpbmsnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ01hcmtldHBsYWNlJywgdHlwZTogJ2xpbmsnLCBocmVmOiAnL21hcmtldHBsYWNlJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdUeXBvbG9naWUnLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAgeyBsYWJlbDogJ1N0YXJ0LXVwJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdUUEUvUE1FJywgaHJlZjogJy9vZmZyZXMtcG1lJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnQWdlbmNlJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdFdmVudCcsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnRS1jb21tZXJjZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnRHJpdmUgdG8gc3RvcmUnLCBocmVmOiAnLycgfVxyXG4gICAgXVxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcih7IG5hdmJhcjogeyBsb2dvLCBsaW5rLCBjdGEgfSB9KSB7XHJcbiAgY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkcm9wZG93bkFjdGl2ZSwgc2V0RHJvcGRvd25BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVNZW51LCBzZXRBY3RpdmVNZW51XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjb250ZW50SWQsIHNldENvbnRlbnRJZF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVdpbmRvdyA9ICgpID0+IHtcclxuICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJOYXZNb2JpbGUgPSAoZSkgPT4ge1xyXG4gICAgcmV0dXJuIHNldElzT3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc09wZW4pIHtcclxuICAgICAgc2V0QWN0aXZlTWVudSgwKTtcclxuICAgIH1cclxuICB9LCBbaXNPcGVuXSlcclxuXHJcblxyXG4gIGNvbnN0IHJlbmRlck5hdmJhciA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gd2luZG93V2lkdGggPCAxMDQ3ID8gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5XCIgb25Nb3VzZUxlYXZlPXtoYW5kbGVEcm9wZG93bkNsb3NlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LWxvZ29cIj5cclxuICAgICAgICAgIDxhIGhyZWY9e2xvZ28uaHJlZn0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtsb2dvLmltYWdlLnVybH1gfSBhbHQ9e2xvZ28uaW1hZ2UuYWx0ZXJuYXRpdmVUZXh0fSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnktcmlnaHRcIiBvbkNsaWNrPXtyZW5kZXJOYXZNb2JpbGV9PlxyXG4gICAgICAgICAge2lzT3BlbiA/IChcclxuICAgICAgICAgICAgPEFpT3V0bGluZUNsb3NlIGNsYXNzTmFtZT1cImhhbVwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8SGlNZW51QWx0MyBjbGFzc05hbWU9XCJoYW1cIiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3dpbmRvd1dpZHRoIDwgMTA0NyAmJiBpc09wZW4gPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJuYXZNb2JpbGVcIiArIChhY3RpdmVNZW51ID09PSAwID8gJyBzZWxlY3RlZCcgOiAnJyl9PlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZNb2JpbGVJdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIFBvdXIgdm91c1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93Rm9yd2FyZCBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGVmdDogJzIwcHgnLCB0b3A6ICc0cHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAge2xpbmtzLm1hcCgoaXRlbSwgYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZHJvcGRvd24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2l0ZW0gKyBhfWB9IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoMyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtfbGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsZWZ0OiAnMjBweCcsIHRvcDogJzRweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtpdGVtICsgYX1gfSBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXRlbS5saW5rX2hyZWYgPT09IHJvdXRlci5yb3V0ZSAmJiBcImFjdGl2ZVwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rX2hyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rX2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAge2N0YS5tYXAoKGcsIGgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7ZyArIGh9YH0gY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4tJHtnLmNsYXNzTmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17Zy5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2cubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJuYXZNZW51Q29udGFpbmVyXCIgKyAoYWN0aXZlTWVudSA9PT0gMSA/ICcgc2VsZWN0ZWQnIDogJycpfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvdXJWb3VzTWVudU1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj48QnNBcnJvd0xlZnQgc2l6ZT17NDB9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoMCl9IGNsYXNzTmFtZT1cImJhY2tCdXR0b25cIiAvPlBvdXIgdm91czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwb3VyVm91c0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAge3BvdXJWb3VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7IHNldEFjdGl2ZU1lbnUoMik7IHNldENvbnRlbnRJZChpbmRleCkgfX0+e2l0ZW0ubGFiZWx9PElvSW9zQXJyb3dGb3J3YXJkIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJuYXZNZW51Q29udGFpbmVyXCIgKyAoYWN0aXZlTWVudSA9PT0gMiA/ICcgc2VsZWN0ZWQnIDogJycpfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvdXJWb3VzTWVudU1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj48QnNBcnJvd0xlZnQgc2l6ZT17NDB9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoMSl9IGNsYXNzTmFtZT1cImJhY2tCdXR0b25cIiAvPntwb3VyVm91c1tjb250ZW50SWRdLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwb3VyVm91c0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAge3BvdXJWb3VzW2NvbnRlbnRJZF0ubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5rLnR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaW5rIGxhYmVsPXtsaW5rLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmsuc3VibGlua3MubWFwKChzdWJsaW5rLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0ZvcndhcmQgLz48YSBocmVmPXtzdWJsaW5rLmhyZWZ9PntzdWJsaW5rLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxsaSBrZXk9e2luZGV4fT48YSBocmVmPXtsaW5rLmhyZWZ9PntsaW5rLmxhYmVsfTwvYT48L2xpPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJuYXZNZW51Q29udGFpbmVyXCIgKyAoYWN0aXZlTWVudSA9PT0gMyA/ICcgc2VsZWN0ZWQnIDogJycpfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvdXJWb3VzTWVudU1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj48QnNBcnJvd0xlZnQgc2l6ZT17NDB9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoMCl9IGNsYXNzTmFtZT1cImJhY2tCdXR0b25cIiAvPnsnQXJ0aWNsZXMnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwb3VyVm91c0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAge2xpbmtzWzFdLmNvbnRlbnQubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT48YSBocmVmPXtsaW5rLmxpbmtfaHJlZn0+e2xpbmsubGlua19sYWJlbH08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2TW9iaWxlX2JhY2tncm91bmRcIj4mbmJzcDs8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgOiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1sb2dvXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2xvZ28uaHJlZn0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2xvZ28uaW1hZ2UudXJsfWB9IGFsdD17bG9nby5pbWFnZS5hbHRlcm5hdGl2ZVRleHR9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlfbGlua3NcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5X2xpbmtzLS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1zXCIgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXREcm9wZG93bkFjdGl2ZSh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ryb3Bkb3duQWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJ9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzVweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBwb2ludGVyOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIFBvdXIgdm91cyB7ZHJvcGRvd25BY3RpdmUgPyA8SW9Jb3NBcnJvd1VwIC8+IDogPElvSW9zQXJyb3dEb3duIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAge2xpbmtzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpbmsgbGFiZWw9e2l0ZW0ubGlua19sYWJlbH0gdHlwZT1cImhvdmVyXCIgdHJhbnNpdGlvbj17J29wYWNpdHknfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpbXBsZURyb3Bkb3duTWVudVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnQubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rLmxpbmtfaHJlZn0+e2xpbmsubGlua19sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpbms+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7aXRlbSArIGl9YH0gY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXRlbS5saW5rX2hyZWYgPT09IHJvdXRlci5yb3V0ZSAmJiBcImFjdGl2ZVwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ubGlua19ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rX2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnktcmlnaHRcIj5cclxuICAgICAgICAgICAge2N0YS5tYXAoKGIsIGopID0+IChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake2IgKyBqfWB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4tJHtiLmNsYXNzTmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgaHJlZj17Yi5ocmVmfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2IubGFiZWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkcm9wZG93bk1lbnVcIiArIChkcm9wZG93bkFjdGl2ZSA/ICcgb3BlbmVkJyA6ICcnKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXREcm9wZG93bkFjdGl2ZShmYWxzZSl9PlxyXG4gICAgICAgICAge3BvdXJWb3VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blNlY3Rpb25cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8aDI+e2l0ZW0ubGFiZWx9PC9oMj5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5saW5rcy5tYXAoKGRyb3Bkb3duTGluaywgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bkxpbmsudHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaW5rIGxhYmVsPXtkcm9wZG93bkxpbmsubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ryb3Bkb3duTGluay5zdWJsaW5rcy5tYXAoKHN1YmxpbmssIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN1YmxpbmtcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93Rm9yd2FyZCAvPjxhIGhyZWY9e3N1YmxpbmsuaHJlZn0+e3N1YmxpbmsubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBkYXRhLWNvbnRlbnQ9e2Ryb3Bkb3duTGluay5sYWJlbH0gaHJlZj17ZHJvcGRvd25MaW5rLmhyZWZ9Pntkcm9wZG93bkxpbmsubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8ZGl2IHJlZj17c2ltcGxlRHJvcGRvd259IGNsYXNzTmFtZT17XCJzaW1wbGVEcm9wZG93bk1lbnVcIiArIChkcm9wZG93bkFjdGl2ZTIgPyAnIG9wZW5lZCcgOiAnJyl9IG9uTW91c2VMZWF2ZT17KCk9Pnsgc2V0RHJvcGRvd25BY3RpdmUyKHRydWUpIH19PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7bGlua3NbMV0uY29udGVudC5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bGluay5saW5rX2hyZWZ9PntsaW5rLmxpbmtfbGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIXdpbmRvd1dpZHRoID8gc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpIDogbnVsbDtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVXaW5kb3cpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvdyk7XHJcbiAgICB9O1xyXG4gIH0sIFt3aW5kb3dXaWR0aF0pO1xyXG5cclxuICByZXR1cm4gPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj57cmVuZGVyTmF2YmFyKCl9PC9uYXY+O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=