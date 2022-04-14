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
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var linkXpos = articlesLink.current.getBoundingClientRect().left;
    simpleDropdown.current.style.left = linkXpos;
  }, []);

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
            lineNumber: 89,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "navbar_primary-right",
        onClick: renderNavMobile,
        children: isOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineClose, {
          className: "ham"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiMenuAlt3, {
          className: "ham"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
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
                lineNumber: 105,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
                style: {
                  position: 'relative',
                  left: '20px',
                  top: '4px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
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
                    lineNumber: 114,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
                    style: {
                      position: 'relative',
                      left: '20px',
                      top: '4px'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 25
                  }, _this)]
                }, "".concat(item + a), true, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
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
                    lineNumber: 123,
                    columnNumber: 25
                  }, _this)
                }, "".concat(item + a), false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
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
                  lineNumber: 136,
                  columnNumber: 21
                }, _this)
              }, "".concat(g + h), false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 19
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
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
                lineNumber: 147,
                columnNumber: 41
              }, _this), "Pour vous"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
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
                      lineNumber: 151,
                      columnNumber: 96
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 23
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
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
                lineNumber: 160,
                columnNumber: 41
              }, _this), pourVous[contentId].label]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 160,
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
                              lineNumber: 170,
                              columnNumber: 35
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: sublink.href,
                              children: sublink.label
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 170,
                              columnNumber: 56
                            }, _this)]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 169,
                            columnNumber: 33
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 167,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 166,
                      columnNumber: 27
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 25
                  }, _this);
                } else {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: link.href,
                      children: link.label
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 47
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 31
                  }, _this);
                }
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
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
                lineNumber: 188,
                columnNumber: 41
              }, _this), 'Articles']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 188,
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
                    lineNumber: 191,
                    columnNumber: 37
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navMobile_background",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 13
        }, _this)]
      }, void 0, true) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
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
              lineNumber: 206,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
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
                  lineNumber: 214,
                  columnNumber: 47
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowDown, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 66
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
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
                      lineNumber: 222,
                      columnNumber: 62
                    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowDown, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 81
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
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
            lineNumber: 211,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
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
        lineNumber: 203,
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
                lineNumber: 292,
                columnNumber: 17
              }, _this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsibGlua3MiLCJsaW5rX2xhYmVsIiwibGlua19ocmVmIiwidHlwZSIsImNvbnRlbnQiLCJwb3VyVm91cyIsImxhYmVsIiwic3VibGlua3MiLCJocmVmIiwiTmF2YmFyIiwibmF2YmFyIiwibG9nbyIsImxpbmsiLCJjdGEiLCJ1c2VTdGF0ZSIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkcm9wZG93bkFjdGl2ZSIsInNldERyb3Bkb3duQWN0aXZlIiwiZHJvcGRvd25BY3RpdmUyIiwic2V0RHJvcGRvd25BY3RpdmUyIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJjb250ZW50SWQiLCJzZXRDb250ZW50SWQiLCJzaW1wbGVEcm9wZG93biIsInVzZVJlZiIsImFydGljbGVzTGluayIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVdpbmRvdyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyZW5kZXJOYXZNb2JpbGUiLCJlIiwidXNlRWZmZWN0IiwibGlua1hwb3MiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsInN0eWxlIiwicmVuZGVyTmF2YmFyIiwiaW1hZ2UiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJjdXJzb3IiLCJwb3NpdGlvbiIsInRvcCIsIm1hcCIsIml0ZW0iLCJhIiwicm91dGUiLCJnIiwiaCIsImNsYXNzTmFtZSIsImluZGV4Iiwic3VibGluayIsImkiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImdhcCIsInBvaW50ZXIiLCJiIiwiaiIsImRyb3Bkb3duTGluayIsImlkeCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNB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QUFLLGFBQVMsRUFBQyxRQUFmO0FBQUEsY0FBeUI0QixZQUFZO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztHQXhRdUJsQyxNO1VBV1BzQixrRDs7O0tBWE90QixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA5NDA1YjUxM2VhMmI0M2UyZGEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGlNZW51QWx0MyB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93VXAsIElvSW9zQXJyb3dEb3duLCBJb0lvc0Fycm93Rm9yd2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHsgQnNBcnJvd0xlZnQgfSBmcm9tICdyZWFjdC1pY29ucy9icydcclxuaW1wb3J0IHsgTW9iaWxlRnJpZW5kbHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBEcm9wZG93bkxpbmsgZnJvbSBcIi4vRHJvcGRvd25MaW5rXCI7XHJcblxyXG5jb25zdCBsaW5rcyA9IFtcclxuICB7IGxpbmtfbGFiZWw6ICdPZmZyZXMnLCBsaW5rX2hyZWY6ICcvb2ZmcmVzJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAge1xyXG4gICAgbGlua19sYWJlbDogJ0FydGljbGVzJywgdHlwZTogJ2Ryb3Bkb3duJywgY29udGVudDogW1xyXG4gICAgICB7IGxpbmtfbGFiZWw6ICdCbG9nJywgbGlua19ocmVmOiAnaHR0cHM6L1xcL2Jsb2cua2xveC5pby8nIH0sXHJcbiAgICAgIHsgbGlua19sYWJlbDogJ1ByZXNzIHJvb20nLCBsaW5rX2hyZWY6ICcvcHJlc3Mtcm9vbScgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHsgbGlua19sYWJlbDogJ0NvbnRhY3QnLCBsaW5rX2hyZWY6ICcvY29udGFjdCcsIHR5cGU6ICdsaW5rJyB9LFxyXG5dXHJcblxyXG5jb25zdCBwb3VyVm91cyA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ1NlcnZpY2VzJyxcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ0NhbXBhZ25lcyBtYXJrZXRpbmcnLCB0eXBlOiAnZHJvcGRvd24nLCBzdWJsaW5rczogW1xyXG4gICAgICAgICAgeyBsYWJlbDogJ0JyYW5kaW5nJywgaHJlZjogJy8nIH0sXHJcbiAgICAgICAgICB7IGxhYmVsOiAnVHJhZmljJywgaHJlZjogJy8nIH0sXHJcbiAgICAgICAgICB7IGxhYmVsOiAnUGVyZm9ybWFuY2UnLCBocmVmOiAnLycgfSxcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdDb25zdWx0aW5nJywgdHlwZTogJ2xpbmsnLCBocmVmOiAnLycgfSxcclxuICAgICAgeyBsYWJlbDogJ01hcmtldHBsYWNlJywgdHlwZTogJ2xpbmsnLCBocmVmOiAnL21hcmtldHBsYWNlJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdUeXBvbG9naWUnLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAgeyBsYWJlbDogJ1N0YXJ0LXVwJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdUUEUvUE1FJywgaHJlZjogJy9vZmZyZXMtcG1lJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnQWdlbmNlJywgaHJlZjogJy8nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdFdmVudCcsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnRS1jb21tZXJjZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnRHJpdmUgdG8gc3RvcmUnLCBocmVmOiAnLycgfVxyXG4gICAgXVxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcih7IG5hdmJhcjogeyBsb2dvLCBsaW5rLCBjdGEgfSB9KSB7XHJcbiAgY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkcm9wZG93bkFjdGl2ZSwgc2V0RHJvcGRvd25BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkcm9wZG93bkFjdGl2ZTIsIHNldERyb3Bkb3duQWN0aXZlMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NvbnRlbnRJZCwgc2V0Q29udGVudElkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBzaW1wbGVEcm9wZG93biA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBhcnRpY2xlc0xpbmsgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVXaW5kb3cgPSAoKSA9PiB7XHJcbiAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTmF2TW9iaWxlID0gKGUpID0+IHtcclxuICAgIHJldHVybiBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNPcGVuKSB7XHJcbiAgICAgIHNldEFjdGl2ZU1lbnUoMCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzT3Blbl0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgbGV0IGxpbmtYcG9zID0gYXJ0aWNsZXNMaW5rLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgIHNpbXBsZURyb3Bkb3duLmN1cnJlbnQuc3R5bGUubGVmdCA9IGxpbmtYcG9zO1xyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCByZW5kZXJOYXZiYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIHdpbmRvd1dpZHRoIDwgMTA0NyA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnktbG9nb1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj17bG9nby5ocmVmfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake2xvZ28uaW1hZ2UudXJsfWB9IGFsdD17bG9nby5pbWFnZS5hbHRlcm5hdGl2ZVRleHR9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeS1yaWdodFwiIG9uQ2xpY2s9e3JlbmRlck5hdk1vYmlsZX0+XHJcbiAgICAgICAgICB7aXNPcGVuID8gKFxyXG4gICAgICAgICAgICA8QWlPdXRsaW5lQ2xvc2UgY2xhc3NOYW1lPVwiaGFtXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxIaU1lbnVBbHQzIGNsYXNzTmFtZT1cImhhbVwiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7d2luZG93V2lkdGggPCAxMDQ3ICYmIGlzT3BlbiA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1vYmlsZVwiICsgKGFjdGl2ZU1lbnUgPT09IDAgPyAnIHNlbGVjdGVkJyA6ICcnKX0+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdk1vYmlsZUl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgUG91ciB2b3VzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dGb3J3YXJkIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsZWZ0OiAnMjBweCcsIHRvcDogJzRweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB7bGlua3MubWFwKChpdGVtLCBhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7aXRlbSArIGF9YH0gY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGlua19sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0ZvcndhcmQgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxlZnQ6ICcyMHB4JywgdG9wOiAnNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2l0ZW0gKyBhfWB9IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpdGVtLmxpbmtfaHJlZiA9PT0gcm91dGVyLnJvdXRlICYmIFwiYWN0aXZlXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmtfaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtfbGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICB7Y3RhLm1hcCgoZywgaCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtnICsgaH1gfSBjbGFzc05hbWU9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0bi0ke2cuY2xhc3NOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtnLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Zy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1lbnVDb250YWluZXJcIiArIChhY3RpdmVNZW51ID09PSAxID8gJyBzZWxlY3RlZCcgOiAnJyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG91clZvdXNNZW51TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPjxCc0Fycm93TGVmdCBzaXplPXs0MH0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgwKX0gY2xhc3NOYW1lPVwiYmFja0J1dHRvblwiIC8+UG91ciB2b3VzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvdXJWb3VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cG91clZvdXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHsgc2V0QWN0aXZlTWVudSgyKTsgc2V0Q29udGVudElkKGluZGV4KSB9fT57aXRlbS5sYWJlbH08SW9Jb3NBcnJvd0ZvcndhcmQgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1lbnVDb250YWluZXJcIiArIChhY3RpdmVNZW51ID09PSAyID8gJyBzZWxlY3RlZCcgOiAnJyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG91clZvdXNNZW51TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPjxCc0Fycm93TGVmdCBzaXplPXs0MH0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgxKX0gY2xhc3NOYW1lPVwiYmFja0J1dHRvblwiIC8+e3BvdXJWb3VzW2NvbnRlbnRJZF0ubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvdXJWb3VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cG91clZvdXNbY29udGVudElkXS5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmsudHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpbmsgbGFiZWw9e2xpbmsubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGluay5zdWJsaW5rcy5tYXAoKHN1YmxpbmssIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93Rm9yd2FyZCAvPjxhIGhyZWY9e3N1YmxpbmsuaHJlZn0+e3N1YmxpbmsubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGxpIGtleT17aW5kZXh9PjxhIGhyZWY9e2xpbmsuaHJlZn0+e2xpbmsubGFiZWx9PC9hPjwvbGk+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdk1lbnVDb250YWluZXJcIiArIChhY3RpdmVNZW51ID09PSAzID8gJyBzZWxlY3RlZCcgOiAnJyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG91clZvdXNNZW51TW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPjxCc0Fycm93TGVmdCBzaXplPXs0MH0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudSgwKX0gY2xhc3NOYW1lPVwiYmFja0J1dHRvblwiIC8+eydBcnRpY2xlcyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvdXJWb3VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7bGlua3NbMV0uY29udGVudC5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PjxhIGhyZWY9e2xpbmsubGlua19ocmVmfT57bGluay5saW5rX2xhYmVsfTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZNb2JpbGVfYmFja2dyb3VuZFwiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9wcmltYXJ5LWxvZ29cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj17bG9nby5ocmVmfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7bG9nby5pbWFnZS51cmx9YH0gYWx0PXtsb2dvLmltYWdlLmFsdGVybmF0aXZlVGV4dH0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfcHJpbWFyeV9saW5rc1wiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnlfbGlua3MtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbXNcIiBvbk1vdXNlRW50ZXI9eygpID0+IHNldERyb3Bkb3duQWN0aXZlKHRydWUpfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17ZHJvcGRvd25BY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnNXB4JywgY3Vyc29yOiAncG9pbnRlcicsIHBvaW50ZXI6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgUG91ciB2b3VzIHtkcm9wZG93bkFjdGl2ZSA/IDxJb0lvc0Fycm93VXAgLz4gOiA8SW9Jb3NBcnJvd0Rvd24gLz59XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7bGlua3MubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZHJvcGRvd24nKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHJlZj17YXJ0aWNsZXNMaW5rfSBjbGFzc05hbWU9XCJpdGVtc1wiIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0RHJvcGRvd25BY3RpdmUyKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17ZHJvcGRvd25BY3RpdmUyID8gXCJhY3RpdmVcIiA6IFwiXCJ9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzVweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBwb2ludGVyOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmtfbGFiZWx9IHtkcm9wZG93bkFjdGl2ZTIgPyA8SW9Jb3NBcnJvd1VwIC8+IDogPElvSW9zQXJyb3dEb3duIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7aXRlbSArIGl9YH0gY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXRlbS5saW5rX2hyZWYgPT09IHJvdXRlci5yb3V0ZSAmJiBcImFjdGl2ZVwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ubGlua19ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rX2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3ByaW1hcnktcmlnaHRcIj5cclxuICAgICAgICAgICAge2N0YS5tYXAoKGIsIGopID0+IChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake2IgKyBqfWB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4tJHtiLmNsYXNzTmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgaHJlZj17Yi5ocmVmfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2IubGFiZWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkcm9wZG93bk1lbnVcIiArIChkcm9wZG93bkFjdGl2ZSA/ICcgb3BlbmVkJyA6ICcnKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXREcm9wZG93bkFjdGl2ZShmYWxzZSl9PlxyXG4gICAgICAgICAge3BvdXJWb3VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blNlY3Rpb25cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8aDI+e2l0ZW0ubGFiZWx9PC9oMj5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5saW5rcy5tYXAoKGRyb3Bkb3duTGluaywgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bkxpbmsudHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaW5rIGxhYmVsPXtkcm9wZG93bkxpbmsubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ryb3Bkb3duTGluay5zdWJsaW5rcy5tYXAoKHN1YmxpbmssIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN1YmxpbmtcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93Rm9yd2FyZCAvPjxhIGhyZWY9e3N1YmxpbmsuaHJlZn0+e3N1YmxpbmsubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBkYXRhLWNvbnRlbnQ9e2Ryb3Bkb3duTGluay5sYWJlbH0gaHJlZj17ZHJvcGRvd25MaW5rLmhyZWZ9Pntkcm9wZG93bkxpbmsubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgcmVmPXtzaW1wbGVEcm9wZG93bn0gY2xhc3NOYW1lPXtcInNpbXBsZURyb3Bkb3duTWVudVwiICsgKGRyb3Bkb3duQWN0aXZlMiA/ICcgb3BlbmVkJyA6ICcnKX0gb25Nb3VzZUxlYXZlPXsoKT0+eyBzZXREcm9wZG93bkFjdGl2ZTIodHJ1ZSkgfX0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtsaW5rc1sxXS5jb250ZW50Lm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rLmxpbmtfaHJlZn0+e2xpbmsubGlua19sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICF3aW5kb3dXaWR0aCA/IHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKSA6IG51bGw7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVXaW5kb3cpO1xyXG4gICAgfTtcclxuICB9LCBbd2luZG93V2lkdGhdKTtcclxuXHJcbiAgcmV0dXJuIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+e3JlbmRlck5hdmJhcigpfTwvbmF2PjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9