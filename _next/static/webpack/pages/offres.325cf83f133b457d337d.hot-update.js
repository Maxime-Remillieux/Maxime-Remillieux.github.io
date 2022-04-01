self["webpackHotUpdate_N_E"]("pages/offres",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SocialButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocialButton */ "./components/SocialButton.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\components\\Footer.js",
    _this = undefined,
    _s = $RefreshSig$();




var Footer = function Footer(_ref) {
  _s();

  var footer = _ref.footer;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(footer.select_language),
      langs = _useState[0],
      setLang = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    country: "France",
    country_flag: "/images/100ppi/France.png"
  }),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var translate = function translate(e) {
    var tab = langs.find(function (lang) {
      return lang.country === e.target.value;
    });
    setCurrent({
      country: tab.country,
      country_flag: tab.country_flag.url
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: "footer",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "footer_container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "footer_container-logo",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "".concat(footer.logo_footer.url),
          alt: footer.logo_footer.alternativeText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "footer-socials",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "footer-socials-heading",
          children: footer.block_social_heading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "footer-socials-list",
          children: footer.reseau_social.map(function (rs, idx) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SocialButton__WEBPACK_IMPORTED_MODULE_2__.default, {
                href: rs.href,
                icon: rs.icon
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, _this)
            }, "".concat(rs + idx), false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "footer_container_footer-nav",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "navItems",
        children: [footer.navItem.map(function (nv, jx) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: nv.link_href,
              children: nv.link_label
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this)
          }, "".concat(nv + jx), false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this);
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/privacy",
            children: "Data privacy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/mentions-legales",
            children: "Mentions L\xE9gales"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/cgv",
            children: "CGV"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "footer_nav-bottom",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "footer_nav-bottom-com",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "footer_nav-bottom-com-list",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "lang",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: current.country === "France" ? "/images/100ppi/France.png" : "".concat(current.country_flag),
              className: "flag",
              alt: "klox-language-website"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              id: "language",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                name: "lang",
                onChange: translate,
                children: footer.select_language.map(function (lang, index) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                    value: lang.country,
                    children: lang.country
                  }, "".concat(lang + index), false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(Footer, "l45Fb7lyMSeiy64V+Q3TSLHMtYM=");

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

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


/***/ }),

/***/ "./components/SocialButton.js":
/*!************************************!*\
  !*** ./components/SocialButton.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\components\\SocialButton.js",
    _this = undefined;




var SocialButton = function SocialButton(_ref) {
  var href = _ref.href,
      icon = _ref.icon;

  var renderIcon = function renderIcon(icon) {
    switch (icon) {
      case "FaFacebookF":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaFacebookF, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 16
        }, _this);

      case "FaTwitter":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTwitter, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 16
        }, _this);

      case "FaInstagram":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaInstagram, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 16
        }, _this);

      case "FaLinkedinIn":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaLinkedinIn, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 16
        }, _this);

      default:
        return;
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: href,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      target: "_blank",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "btn-socials",
        children: renderIcon(icon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_c = SocialButton;
/* harmony default export */ __webpack_exports__["default"] = (SocialButton);

var _c;

$RefreshReg$(_c, "SocialButton");

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


/***/ }),

/***/ "./pages/offres.js":
/*!*************************!*\
  !*** ./pages/offres.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_offres_Block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/offres/Block */ "./components/offres/Block.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_offres_ModelCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/offres/ModelCard */ "./components/offres/ModelCard.js");
/* harmony import */ var _components_offres_PackCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/offres/PackCard */ "./components/offres/PackCard.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\pages\\offres.js",
    _s = $RefreshSig$();






 // import ArrowForwardIcon from '@mui/icons-material/ArrowForward';







 // const theme = createTheme({
//     status: {
//         danger: '#e53e3e',
//     },
//     palette: {
//         primary: {
//             main: '#3055D3',
//             darker: '#053e85',
//         },
//         secondary: {
//             main: 'rgba(253, 254, 255, 0.15)',
//             contrastText: 'white',
//             darker: '#053e85',
//         },
//         neutral: {
//             main: '#64748B',
//             contrastText: '#fff',
//         },
//     },
// });

var colors = {
  lightGreen: '#27D6BD',
  darkerGreen: '#2b9384',
  violet: '#896af4'
};
var blocks = [{
  title: 'Support dédié',
  content: ['✓ FAQ', '✓ Ressources', '✓ Chatbot'],
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaDesktop
}, {
  title: 'Online Reporting',
  content: 'Tous vos résultats de campagne, cross plattforms et cross devices, au coeur d\'une même inferface personnalisable',
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaLayerGroup,
  variant: colors.lightGreen
}, {
  title: 'Marketplace',
  content: ['✓ Influence', '✓ VR & In-Gaming-Ads', '✓ Formats innovants', '✓ Assets créas'],
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaPaintBrush
}, {
  title: 'Réactivité',
  content: 'Lancement et optimisations de campagnes 7/7',
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaDesktop
}, {
  title: 'Expertise',
  content: 'Une squad multi-certifiée',
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaLayerGroup,
  variant: colors.lightGreen
}, {
  title: 'Performance',
  content: 'Les activations les plus performantes selon vos objectifs',
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaPaintBrush
}];
var pricing = {
  title: 'Pricing',
  subtitle: 'Aucun honoraire, aucun frais, aucune commission, tout est compris dans le prix !',
  text: 'Un tarif unique comprenant l\'achat d\'espace médias, nos honoraires, nos frais d\'ad-serving, l\'audit des créas, le temps humain passé sur la campagne, les fees DSP... Optez pour le all-inclusive !'
};
var models = [{
  tag: 'Mise en place',
  image: '/images/offres/pay_online.svg',
  title: 'Un modèle simplifié',
  specs: ['Publishing', 'Trading', 'Custom Success Management', 'Traffic Management', 'Consulting', 'Marketplace', '=> <b>1 seul</b> contact pour tous vos besoins'],
  color: '#27D6BD'
}, {
  tag: 'Frais technologiques',
  image: '/images/offres/undraw.svg',
  title: 'Aucun frais additionnels',
  specs: ['0 frais d\'Audit de créas', '0 frais d\'Adserving', '0 frais de DSP', '0 frais de Data', '0 frais de ciblage contextuel', '0 frais de partenaires diverses'],
  color: '#59A0D8'
}, {
  tag: 'Souplesse',
  image: '/images/offres/shared_goals.svg',
  title: 'Sans engagement',
  specs: ['Campagnes à la performance', 'Test & Learn', 'Agilité & Réactivité'],
  color: '#896AF4'
}];
var packs = [{
  title: 'Digital Nomad',
  description: 'Pour ceux qui veulent une expérience 100 % Self-Service',
  budget: '',
  content: ['Lancement de campagnes en self service', 'Tous les inventaires programmatiques', 'Stratégies clé en main selon vos objectifs', 'Ticketing Support']
}, {
  title: 'Digital Expert',
  description: 'Pour ceux qui veulent les meilleurs experts',
  budget: 'À PARTIR DE 100 K ANNUELS',
  content: ['Account Strategist Senior à votre service', 'Un directeur conseil présent sur les meetings stratégiques', 'A/B Testing et multi-scénarisation des campagnes', 'Bêta-Testing en exclusivité des dernières innovations digitales', 'Accès à notre squad d\'experts selon vos besoins (Publishing, Attribution, Trafic, SEA, Social...)'],
  variant: colors.lightGreen
}, {
  title: 'Digital Friend',
  description: 'Pour ceux qui veulent de l\'aide sur leurs stratégies digitales',
  budget: 'À PARTIR DE 25 K ANNUELS',
  content: ['Account Strategist dédié', 'Tout notre catalogue produits', 'Recommandations stratégiques sur mesure', 'Accompagement ou développement des assets créas', 'Support technique humain sur le tracking']
}];
var premiumContent = ['Les meilleurs Account Strategists & Key Account Managers', 'Notre Squad d\'experts à votre service (Publishing, Trafic, SEA, Assets créas...)', 'A/B Testing et multi-scénarisation des campagnes', 'Media Planning et Audiences Planning', 'Analyse concurentielle', 'Benchmark Performances et Études', 'Consulting (Contents, Stratégie, SEO..)', 'Formation'];
var StyledSlider = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Slider)(function () {
  return {
    '& .MuiSlider-thumb': {
      height: 43,
      width: 43,
      backgroundColor: '#fff',
      marginTop: 0,
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)',
      '&:focus, &:hover, &.Mui-active': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)'
        }
      }
    },
    '& .MuiSlider-valueLabel': {
      fontSize: 12,
      fontWeight: 'normal',
      backgroundColor: 'unset',
      // color: theme.palette.text.primary,
      '&:before': {
        display: 'none'
      },
      '& *': {
        background: 'transparent',
        color: 'black' //   color: theme.palette.mode === 'dark' ? '#fff' : '#000',

      }
    },
    '& .MuiSlider-track': {
      height: 6,
      borderRadius: 3,
      color: colors.lightGreen
    },
    '& .MuiSlider-rail': {
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
      height: 6,
      borderRadius: 3
    }
  };
});
var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this;

  var ssd = _ref.ssd;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      valueSlider = _useState[0],
      setValueSlider = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1),
      valueSlider2 = _useState2[0],
      setValueSlider2 = _useState2[1];

  var handleChange = function handleChange(e, newValue) {
    setValueSlider(newValue);
  };

  var handleChange2 = function handleChange2(e, newValue) {
    setValueSlider2(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container-offres",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Klox | Nos offres"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {
        navbar: ssd.navbar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "pricing-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pricing",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: pricing.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: pricing.subtitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: pricing.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "model",
          children: models.map(function (model, idx) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_ModelCard__WEBPACK_IMPORTED_MODULE_4__.default, {
              model: model
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "services",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "services-top",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Des packs adapt\xE9s \xE0 vos besoins"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "offers",
          children: packs.map(function (pack, idx) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_PackCard__WEBPACK_IMPORTED_MODULE_5__.default, {
              pack: pack
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "premium",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          style: {
            textAlign: 'center',
            fontSize: '50px'
          },
          children: "Envie d'une offre Premium\xA0?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "premium-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "premium-content-left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                style: {
                  textAlign: 'center'
                },
                children: "\xC0 partir de"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "400\xA0K\xA0\u20AC"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  textAlign: 'center'
                },
                children: "annuels"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "Customisation possible\xA0!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "contained",
              sx: {
                bgcolor: colors.lightGreen,
                color: 'white',
                '&:hover': {
                  backgroundColor: colors.darkerGreen
                },
                padding: '15px',
                margin: '20px'
              },
              children: "En savoir plus"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "premium-content-right",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: premiumContent.map(function (content, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaCheckCircle, {
                    size: 20,
                    color: colors.lightGreen
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 55
                  }, _this), content]
                }, idx, true, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 41
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "arguments-offers",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "arguments-title",
          children: "Peu importe l'offre, on vous garantit\xA0:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "blocks",
          children: blocks.map(function (block, idx) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_Block__WEBPACK_IMPORTED_MODULE_2__.default, {
              block: block
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "discover",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Envie d'en d\xE9couvrir plus\xA0?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
          href: "/contact",
          className: "analytics-button",
          variant: "contained",
          sx: {
            bgcolor: colors.lightGreen,
            color: 'white',
            '&:hover': {
              backgroundColor: colors.darkerGreen
            },
            borderRadius: "40px",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "30px",
            paddingRight: "30px"
          },
          children: "Contactez-nous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sliders",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "sliders-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "sliders-content-section",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "slider-label",
              children: ["Combien de ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                  color: colors.lightGreen
                },
                children: "factures fournisseurs traitez-vous"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 74
              }, this), " par mois ?"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "(Estimez en moyenne par mois)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
              id: "styled-slider",
              value: valueSlider,
              onChange: handleChange,
              valueLabelDisplay: "on",
              min: 0,
              max: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "sliders-content-section",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "slider-label",
              children: ["Combien de ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                  color: colors.lightGreen
                },
                children: "banques"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 74
              }, this), " allez-vous connecter ?"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "(Le nombre de comptes au sein d'un m\xEAme banque est illimit\xE9)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
              id: "styled-slider2",
              value: valueSlider2,
              onChange: handleChange2,
              valueLabelDisplay: "on",
              min: 1,
              max: 20
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "sliders-content-section",
            children: ["Faites ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                color: colors.lightGreen
              },
              children: " collaborer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 40
            }, this), " vos services."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "subscription",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "price",
            children: "19\u20AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ht",
            children: "HT/Mois"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["\u2713 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: "Acc\xE8s \xE0 l'ensemble des fonctionnalit\xE9s"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 39
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u2713 Support client"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u2713 \xC9quip\xE9 d\xE9di\xE9e au lancement et \xE0 l'accompagnement"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
            variant: "contained",
            href: "/",
            sx: {
              bgcolor: colors.lightGreen,
              '&:hover': {
                bgcolor: colors.darkerGreen
              }
            },
            children: "D\xE9marrer maintenant"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__.default, {
      footer: ssd.footer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 9
  }, this);
}

_s(Home, "jYfbNVYkpLjQBcW0rmIa5JbpotQ=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU29jaWFsQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9vZmZyZXMuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwiZm9vdGVyIiwidXNlU3RhdGUiLCJzZWxlY3RfbGFuZ3VhZ2UiLCJsYW5ncyIsInNldExhbmciLCJjb3VudHJ5IiwiY291bnRyeV9mbGFnIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJ0cmFuc2xhdGUiLCJlIiwidGFiIiwiZmluZCIsImxhbmciLCJ0YXJnZXQiLCJ2YWx1ZSIsInVybCIsImxvZ29fZm9vdGVyIiwiYWx0ZXJuYXRpdmVUZXh0IiwiYmxvY2tfc29jaWFsX2hlYWRpbmciLCJyZXNlYXVfc29jaWFsIiwibWFwIiwicnMiLCJpZHgiLCJocmVmIiwiaWNvbiIsIm5hdkl0ZW0iLCJudiIsImp4IiwibGlua19ocmVmIiwibGlua19sYWJlbCIsImluZGV4IiwiU29jaWFsQnV0dG9uIiwicmVuZGVySWNvbiIsImNvbG9ycyIsImxpZ2h0R3JlZW4iLCJkYXJrZXJHcmVlbiIsInZpb2xldCIsImJsb2NrcyIsInRpdGxlIiwiY29udGVudCIsIkZhRGVza3RvcCIsIkZhTGF5ZXJHcm91cCIsInZhcmlhbnQiLCJGYVBhaW50QnJ1c2giLCJwcmljaW5nIiwic3VidGl0bGUiLCJ0ZXh0IiwibW9kZWxzIiwidGFnIiwiaW1hZ2UiLCJzcGVjcyIsImNvbG9yIiwicGFja3MiLCJkZXNjcmlwdGlvbiIsImJ1ZGdldCIsInByZW1pdW1Db250ZW50IiwiU3R5bGVkU2xpZGVyIiwic3R5bGVkIiwiU2xpZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Ub3AiLCJib3hTaGFkb3ciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIm9wYWNpdHkiLCJIb21lIiwic3NkIiwidmFsdWVTbGlkZXIiLCJzZXRWYWx1ZVNsaWRlciIsInZhbHVlU2xpZGVyMiIsInNldFZhbHVlU2xpZGVyMiIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlIiwiaGFuZGxlQ2hhbmdlMiIsIm5hdmJhciIsIm1vZGVsIiwicGFjayIsInRleHRBbGlnbiIsImJnY29sb3IiLCJwYWRkaW5nIiwibWFyZ2luIiwiYmxvY2siLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDSkMsK0NBQVEsQ0FBQ0QsTUFBTSxDQUFDRSxlQUFSLENBREo7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxPQURlOztBQUFBLG1CQUVDSCwrQ0FBUSxDQUFDO0FBQ3JDSSxXQUFPLEVBQUUsUUFENEI7QUFFckNDLGdCQUFZLEVBQUU7QUFGdUIsR0FBRCxDQUZUO0FBQUEsTUFFdEJDLE9BRnNCO0FBQUEsTUFFYkMsVUFGYTs7QUFPN0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCLFFBQUlDLEdBQUcsR0FBR1IsS0FBSyxDQUFDUyxJQUFOLENBQVcsVUFBQ0MsSUFBRCxFQUFVO0FBQzdCLGFBQU9BLElBQUksQ0FBQ1IsT0FBTCxLQUFpQkssQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQWpDO0FBQ0QsS0FGUyxDQUFWO0FBSUFQLGNBQVUsQ0FBQztBQUNUSCxhQUFPLEVBQUVNLEdBQUcsQ0FBQ04sT0FESjtBQUVUQyxrQkFBWSxFQUFFSyxHQUFHLENBQUNMLFlBQUosQ0FBaUJVO0FBRnRCLEtBQUQsQ0FBVjtBQUlELEdBVEQ7O0FBV0Esc0JBQ0U7QUFBUSxhQUFT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QTtBQUFBO0FBQUE7QUFBQSxZQVBSLGVBeUhRLDhEQUFDLHVEQUFEO0FBQVEsWUFBTSxFQUFFb0MsR0FBRyxDQUFDeEU7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThISDs7R0F6SXVCdUUsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vZmZyZXMuMzI1Y2Y4M2YxMzNiNDU3ZDMzN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTb2NpYWxCdXR0b24gZnJvbSBcIi4vU29jaWFsQnV0dG9uXCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoeyBmb290ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFtsYW5ncywgc2V0TGFuZ10gPSB1c2VTdGF0ZShmb290ZXIuc2VsZWN0X2xhbmd1YWdlKTtcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjb3VudHJ5OiBcIkZyYW5jZVwiLFxyXG4gICAgY291bnRyeV9mbGFnOiBcIi9pbWFnZXMvMTAwcHBpL0ZyYW5jZS5wbmdcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdHJhbnNsYXRlID0gKGUpID0+IHtcclxuICAgIGxldCB0YWIgPSBsYW5ncy5maW5kKChsYW5nKSA9PiB7XHJcbiAgICAgIHJldHVybiBsYW5nLmNvdW50cnkgPT09IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0Q3VycmVudCh7XHJcbiAgICAgIGNvdW50cnk6IHRhYi5jb3VudHJ5LFxyXG4gICAgICBjb3VudHJ5X2ZsYWc6IHRhYi5jb3VudHJ5X2ZsYWcudXJsLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2NvbnRhaW5lci1sb2dvXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17YCR7Zm9vdGVyLmxvZ29fZm9vdGVyLnVybH1gfVxyXG4gICAgICAgICAgICBhbHQ9e2Zvb3Rlci5sb2dvX2Zvb3Rlci5hbHRlcm5hdGl2ZVRleHR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zb2NpYWxzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb290ZXItc29jaWFscy1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgIHtmb290ZXIuYmxvY2tfc29jaWFsX2hlYWRpbmd9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlci1zb2NpYWxzLWxpc3RcIj5cclxuICAgICAgICAgICAge2Zvb3Rlci5yZXNlYXVfc29jaWFsLm1hcCgocnMsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2Ake3JzICsgaWR4fWB9PlxyXG4gICAgICAgICAgICAgICAgPFNvY2lhbEJ1dHRvbiBocmVmPXtycy5ocmVmfSBpY29uPXtycy5pY29ufSAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZvb3Rlcl9jb250YWluZXJfZm9vdGVyLW5hdlwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZJdGVtc1wiPlxyXG4gICAgICAgICAge2Zvb3Rlci5uYXZJdGVtLm1hcCgobnYsIGp4KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2Ake252ICsganh9YH0gY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e252LmxpbmtfaHJlZn0+e252LmxpbmtfbGFiZWx9PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL3ByaXZhY3lcIj5EYXRhIHByaXZhY3k8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9tZW50aW9ucy1sZWdhbGVzXCI+TWVudGlvbnMgTMOpZ2FsZXM8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9jZ3ZcIj5DR1Y8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfbmF2LWJvdHRvbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX25hdi1ib3R0b20tY29tXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9uYXYtYm90dG9tLWNvbS1saXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnQuY291bnRyeSA9PT0gXCJGcmFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIvaW1hZ2VzLzEwMHBwaS9GcmFuY2UucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICA6IGAke2N1cnJlbnQuY291bnRyeV9mbGFnfWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsYWdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwia2xveC1sYW5ndWFnZS13ZWJzaXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8Zm9ybSBpZD1cImxhbmd1YWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJsYW5nXCIgb25DaGFuZ2U9e3RyYW5zbGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtmb290ZXIuc2VsZWN0X2xhbmd1YWdlLm1hcCgobGFuZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtsYW5nLmNvdW50cnl9IGtleT17YCR7bGFuZyArIGluZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xhbmcuY291bnRyeX1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gIEZhRmFjZWJvb2tGLFxyXG4gIEZhVHdpdHRlcixcclxuICBGYUluc3RhZ3JhbSxcclxuICBGYUxpbmtlZGluSW4sXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcblxyXG5jb25zdCBTb2NpYWxCdXR0b24gPSAoeyBocmVmLCBpY29uIH0pID0+IHtcclxuICBjb25zdCByZW5kZXJJY29uID0gKGljb24pID0+IHtcclxuICAgIHN3aXRjaCAoaWNvbikge1xyXG4gICAgICBjYXNlIFwiRmFGYWNlYm9va0ZcIjpcclxuICAgICAgICByZXR1cm4gPEZhRmFjZWJvb2tGIC8+O1xyXG5cclxuICAgICAgY2FzZSBcIkZhVHdpdHRlclwiOlxyXG4gICAgICAgIHJldHVybiA8RmFUd2l0dGVyIC8+O1xyXG5cclxuICAgICAgY2FzZSBcIkZhSW5zdGFncmFtXCI6XHJcbiAgICAgICAgcmV0dXJuIDxGYUluc3RhZ3JhbSAvPjtcclxuXHJcbiAgICAgIGNhc2UgXCJGYUxpbmtlZGluSW5cIjpcclxuICAgICAgICByZXR1cm4gPEZhTGlua2VkaW5JbiAvPjtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXNvY2lhbHNcIj5cclxuICAgICAgICB7cmVuZGVySWNvbihpY29uKX1cclxuICAgICAgXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvY2lhbEJ1dHRvbjtcclxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9vZmZyZXMvQmxvY2snXHJcbmltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIHdpdGhUaGVtZSB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgeyBGYURlc2t0b3AsIEZhTGF5ZXJHcm91cCwgRmFQYWludEJydXNoLCBGYUNoZWNrQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbi8vIGltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcclxuaW1wb3J0IHsgYXBvbGxvQ2xpZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0cmFwaVwiO1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IE1vZGVsQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL29mZnJlcy9Nb2RlbENhcmQnXHJcbmltcG9ydCBQYWNrQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL29mZnJlcy9QYWNrQ2FyZCdcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcclxuXHJcbi8vIGNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4vLyAgICAgc3RhdHVzOiB7XHJcbi8vICAgICAgICAgZGFuZ2VyOiAnI2U1M2UzZScsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgcGFsZXR0ZToge1xyXG4vLyAgICAgICAgIHByaW1hcnk6IHtcclxuLy8gICAgICAgICAgICAgbWFpbjogJyMzMDU1RDMnLFxyXG4vLyAgICAgICAgICAgICBkYXJrZXI6ICcjMDUzZTg1JyxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHNlY29uZGFyeToge1xyXG4vLyAgICAgICAgICAgICBtYWluOiAncmdiYSgyNTMsIDI1NCwgMjU1LCAwLjE1KScsXHJcbi8vICAgICAgICAgICAgIGNvbnRyYXN0VGV4dDogJ3doaXRlJyxcclxuLy8gICAgICAgICAgICAgZGFya2VyOiAnIzA1M2U4NScsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBuZXV0cmFsOiB7XHJcbi8vICAgICAgICAgICAgIG1haW46ICcjNjQ3NDhCJyxcclxuLy8gICAgICAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgIH0sXHJcbi8vIH0pO1xyXG5cclxuY29uc3QgY29sb3JzID0ge1xyXG4gICAgbGlnaHRHcmVlbjogJyMyN0Q2QkQnLFxyXG4gICAgZGFya2VyR3JlZW46ICcjMmI5Mzg0JyxcclxuICAgIHZpb2xldDogJyM4OTZhZjQnXHJcbn1cclxuXHJcbmNvbnN0IGJsb2NrcyA9IFtcclxuICAgIHsgdGl0bGU6ICdTdXBwb3J0IGTDqWRpw6knLCBjb250ZW50OiBbJ+KckyBGQVEnLCAn4pyTIFJlc3NvdXJjZXMnLCAn4pyTIENoYXRib3QnXSwgaWNvbjogRmFEZXNrdG9wIH0sXHJcbiAgICB7IHRpdGxlOiAnT25saW5lIFJlcG9ydGluZycsIGNvbnRlbnQ6ICdUb3VzIHZvcyByw6lzdWx0YXRzIGRlIGNhbXBhZ25lLCBjcm9zcyBwbGF0dGZvcm1zIGV0IGNyb3NzIGRldmljZXMsIGF1IGNvZXVyIGRcXCd1bmUgbcOqbWUgaW5mZXJmYWNlIHBlcnNvbm5hbGlzYWJsZScsIGljb246IEZhTGF5ZXJHcm91cCwgdmFyaWFudDogY29sb3JzLmxpZ2h0R3JlZW4gfSxcclxuICAgIHsgdGl0bGU6ICdNYXJrZXRwbGFjZScsIGNvbnRlbnQ6IFsn4pyTIEluZmx1ZW5jZScsICfinJMgVlIgJiBJbi1HYW1pbmctQWRzJywgJ+KckyBGb3JtYXRzIGlubm92YW50cycsICfinJMgQXNzZXRzIGNyw6lhcyddLCBpY29uOiBGYVBhaW50QnJ1c2ggfSxcclxuICAgIHsgdGl0bGU6ICdSw6lhY3Rpdml0w6knLCBjb250ZW50OiAnTGFuY2VtZW50IGV0IG9wdGltaXNhdGlvbnMgZGUgY2FtcGFnbmVzIDcvNycsIGljb246IEZhRGVza3RvcCB9LFxyXG4gICAgeyB0aXRsZTogJ0V4cGVydGlzZScsIGNvbnRlbnQ6ICdVbmUgc3F1YWQgbXVsdGktY2VydGlmacOpZScsIGljb246IEZhTGF5ZXJHcm91cCwgdmFyaWFudDogY29sb3JzLmxpZ2h0R3JlZW4gfSxcclxuICAgIHsgdGl0bGU6ICdQZXJmb3JtYW5jZScsIGNvbnRlbnQ6ICdMZXMgYWN0aXZhdGlvbnMgbGVzIHBsdXMgcGVyZm9ybWFudGVzIHNlbG9uIHZvcyBvYmplY3RpZnMnLCBpY29uOiBGYVBhaW50QnJ1c2ggfSxcclxuXVxyXG5cclxuY29uc3QgcHJpY2luZyA9IHsgdGl0bGU6ICdQcmljaW5nJywgc3VidGl0bGU6ICdBdWN1biBob25vcmFpcmUsIGF1Y3VuIGZyYWlzLCBhdWN1bmUgY29tbWlzc2lvbiwgdG91dCBlc3QgY29tcHJpcyBkYW5zIGxlIHByaXggIScsIHRleHQ6ICdVbiB0YXJpZiB1bmlxdWUgY29tcHJlbmFudCBsXFwnYWNoYXQgZFxcJ2VzcGFjZSBtw6lkaWFzLCBub3MgaG9ub3JhaXJlcywgbm9zIGZyYWlzIGRcXCdhZC1zZXJ2aW5nLCBsXFwnYXVkaXQgZGVzIGNyw6lhcywgbGUgdGVtcHMgaHVtYWluIHBhc3PDqSBzdXIgbGEgY2FtcGFnbmUsIGxlcyBmZWVzIERTUC4uLiBPcHRleiBwb3VyIGxlIGFsbC1pbmNsdXNpdmUgIScgfVxyXG5cclxuY29uc3QgbW9kZWxzID0gW1xyXG4gICAgeyB0YWc6ICdNaXNlIGVuIHBsYWNlJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy9wYXlfb25saW5lLnN2ZycsIHRpdGxlOiAnVW4gbW9kw6hsZSBzaW1wbGlmacOpJywgc3BlY3M6IFsnUHVibGlzaGluZycsICdUcmFkaW5nJywgJ0N1c3RvbSBTdWNjZXNzIE1hbmFnZW1lbnQnLCAnVHJhZmZpYyBNYW5hZ2VtZW50JywgJ0NvbnN1bHRpbmcnLCAnTWFya2V0cGxhY2UnLCAnPT4gPGI+MSBzZXVsPC9iPiBjb250YWN0IHBvdXIgdG91cyB2b3MgYmVzb2lucyddLCBjb2xvcjogJyMyN0Q2QkQnIH0sXHJcbiAgICB7IHRhZzogJ0ZyYWlzIHRlY2hub2xvZ2lxdWVzJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy91bmRyYXcuc3ZnJywgdGl0bGU6ICdBdWN1biBmcmFpcyBhZGRpdGlvbm5lbHMnLCBzcGVjczogWycwIGZyYWlzIGRcXCdBdWRpdCBkZSBjcsOpYXMnLCAnMCBmcmFpcyBkXFwnQWRzZXJ2aW5nJywgJzAgZnJhaXMgZGUgRFNQJywgJzAgZnJhaXMgZGUgRGF0YScsICcwIGZyYWlzIGRlIGNpYmxhZ2UgY29udGV4dHVlbCcsICcwIGZyYWlzIGRlIHBhcnRlbmFpcmVzIGRpdmVyc2VzJ10sIGNvbG9yOiAnIzU5QTBEOCcgfSxcclxuICAgIHsgdGFnOiAnU291cGxlc3NlJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy9zaGFyZWRfZ29hbHMuc3ZnJywgdGl0bGU6ICdTYW5zIGVuZ2FnZW1lbnQnLCBzcGVjczogWydDYW1wYWduZXMgw6AgbGEgcGVyZm9ybWFuY2UnLCAnVGVzdCAmIExlYXJuJywgJ0FnaWxpdMOpICYgUsOpYWN0aXZpdMOpJ10sIGNvbG9yOiAnIzg5NkFGNCcgfSxcclxuXVxyXG5cclxuY29uc3QgcGFja3MgPSBbXHJcbiAgICB7IHRpdGxlOiAnRGlnaXRhbCBOb21hZCcsIGRlc2NyaXB0aW9uOiAnUG91ciBjZXV4IHF1aSB2ZXVsZW50IHVuZSBleHDDqXJpZW5jZSAxMDAgJSBTZWxmLVNlcnZpY2UnLCBidWRnZXQ6ICcnLCBjb250ZW50OiBbJ0xhbmNlbWVudCBkZSBjYW1wYWduZXMgZW4gc2VsZiBzZXJ2aWNlJywgJ1RvdXMgbGVzIGludmVudGFpcmVzIHByb2dyYW1tYXRpcXVlcycsICdTdHJhdMOpZ2llcyBjbMOpIGVuIG1haW4gc2Vsb24gdm9zIG9iamVjdGlmcycsICdUaWNrZXRpbmcgU3VwcG9ydCddIH0sXHJcbiAgICB7IHRpdGxlOiAnRGlnaXRhbCBFeHBlcnQnLCBkZXNjcmlwdGlvbjogJ1BvdXIgY2V1eCBxdWkgdmV1bGVudCBsZXMgbWVpbGxldXJzIGV4cGVydHMnLCBidWRnZXQ6ICfDgCBQQVJUSVIgREUgMTAwIEsgQU5OVUVMUycsIGNvbnRlbnQ6IFsnQWNjb3VudCBTdHJhdGVnaXN0IFNlbmlvciDDoCB2b3RyZSBzZXJ2aWNlJywgJ1VuIGRpcmVjdGV1ciBjb25zZWlsIHByw6lzZW50IHN1ciBsZXMgbWVldGluZ3Mgc3RyYXTDqWdpcXVlcycsICdBL0IgVGVzdGluZyBldCBtdWx0aS1zY8OpbmFyaXNhdGlvbiBkZXMgY2FtcGFnbmVzJywgJ0LDqnRhLVRlc3RpbmcgZW4gZXhjbHVzaXZpdMOpIGRlcyBkZXJuacOocmVzIGlubm92YXRpb25zIGRpZ2l0YWxlcycsICdBY2PDqHMgw6Agbm90cmUgc3F1YWQgZFxcJ2V4cGVydHMgc2Vsb24gdm9zIGJlc29pbnMgKFB1Ymxpc2hpbmcsIEF0dHJpYnV0aW9uLCBUcmFmaWMsIFNFQSwgU29jaWFsLi4uKSddLCB2YXJpYW50OiBjb2xvcnMubGlnaHRHcmVlbiB9LFxyXG4gICAgeyB0aXRsZTogJ0RpZ2l0YWwgRnJpZW5kJywgZGVzY3JpcHRpb246ICdQb3VyIGNldXggcXVpIHZldWxlbnQgZGUgbFxcJ2FpZGUgc3VyIGxldXJzIHN0cmF0w6lnaWVzIGRpZ2l0YWxlcycsIGJ1ZGdldDogJ8OAIFBBUlRJUiBERSAyNSBLIEFOTlVFTFMnLCBjb250ZW50OiBbJ0FjY291bnQgU3RyYXRlZ2lzdCBkw6lkacOpJywgJ1RvdXQgbm90cmUgY2F0YWxvZ3VlIHByb2R1aXRzJywgJ1JlY29tbWFuZGF0aW9ucyBzdHJhdMOpZ2lxdWVzIHN1ciBtZXN1cmUnLCAnQWNjb21wYWdlbWVudCBvdSBkw6l2ZWxvcHBlbWVudCBkZXMgYXNzZXRzIGNyw6lhcycsICdTdXBwb3J0IHRlY2huaXF1ZSBodW1haW4gc3VyIGxlIHRyYWNraW5nJ10gfVxyXG5dXHJcblxyXG5jb25zdCBwcmVtaXVtQ29udGVudCA9IFtcclxuICAgICdMZXMgbWVpbGxldXJzIEFjY291bnQgU3RyYXRlZ2lzdHMgJiBLZXkgQWNjb3VudCBNYW5hZ2VycycsXHJcbiAgICAnTm90cmUgU3F1YWQgZFxcJ2V4cGVydHMgw6Agdm90cmUgc2VydmljZSAoUHVibGlzaGluZywgVHJhZmljLCBTRUEsIEFzc2V0cyBjcsOpYXMuLi4pJyxcclxuICAgICdBL0IgVGVzdGluZyBldCBtdWx0aS1zY8OpbmFyaXNhdGlvbiBkZXMgY2FtcGFnbmVzJyxcclxuICAgICdNZWRpYSBQbGFubmluZyBldCBBdWRpZW5jZXMgUGxhbm5pbmcnLFxyXG4gICAgJ0FuYWx5c2UgY29uY3VyZW50aWVsbGUnLFxyXG4gICAgJ0JlbmNobWFyayBQZXJmb3JtYW5jZXMgZXQgw4l0dWRlcycsXHJcbiAgICAnQ29uc3VsdGluZyAoQ29udGVudHMsIFN0cmF0w6lnaWUsIFNFTy4uKScsXHJcbiAgICAnRm9ybWF0aW9uJ1xyXG5dXHJcblxyXG5jb25zdCBTdHlsZWRTbGlkZXIgPSBzdHlsZWQoU2xpZGVyKSgoKSA9PiAoe1xyXG4gICAgJyYgLk11aVNsaWRlci10aHVtYic6IHtcclxuICAgICAgICBoZWlnaHQ6IDQzLFxyXG4gICAgICAgIHdpZHRoOiA0MyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICBtYXJnaW5Ub3A6IDAsXHJcbiAgICAgICAgYm94U2hhZG93OiAnMCAzcHggMXB4IHJnYmEoMCwwLDAsMC4xKSwwIDRweCA4cHggcmdiYSgwLDAsMCwwLjEzKSwwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjAyKScsXHJcbiAgICAgICAgJyY6Zm9jdXMsICY6aG92ZXIsICYuTXVpLWFjdGl2ZSc6IHtcclxuICAgICAgICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgICAgICAgICcwIDNweCAxcHggcmdiYSgwLDAsMCwwLjEpLDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMyksMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4wMiknLFxyXG4gICAgICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxyXG4gICAgICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAzcHggMXB4IHJnYmEoMCwwLDAsMC4xKSwwIDRweCA4cHggcmdiYSgwLDAsMCwwLjEzKSwwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjAyKScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlTbGlkZXItdmFsdWVMYWJlbCc6IHtcclxuICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndW5zZXQnLFxyXG4gICAgICAgIC8vIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJiAqJzoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIC8vICAgY29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2RhcmsnID8gJyNmZmYnIDogJyMwMDAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIC5NdWlTbGlkZXItdHJhY2snOiB7XHJcbiAgICAgICAgaGVpZ2h0OiA2LFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMyxcclxuICAgICAgICBjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIC5NdWlTbGlkZXItcmFpbCc6IHtcclxuICAgICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2JmYmZiZicsXHJcbiAgICAgICAgaGVpZ2h0OiA2LFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMyxcclxuICAgICAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgc3NkIH0pIHtcclxuICAgIGNvbnN0IFt2YWx1ZVNsaWRlciwgc2V0VmFsdWVTbGlkZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdmFsdWVTbGlkZXIyLCBzZXRWYWx1ZVNsaWRlcjJdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVTbGlkZXIobmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlMiA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlU2xpZGVyMihuZXdWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLW9mZnJlcyc+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPktsb3ggfCBOb3Mgb2ZmcmVzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICB7LyogPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIG5hdmJhcj17c3NkLm5hdmJhcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwcmljaW5nLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3ByaWNpbmcuc3VidGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcmljaW5nLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21vZGVscy5tYXAoKG1vZGVsLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kZWxDYXJkIGtleT17aWR4fSBtb2RlbD17bW9kZWx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+RGVzIHBhY2tzIGFkYXB0w6lzIMOgIHZvcyBiZXNvaW5zPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFja3MubWFwKChwYWNrLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFja0NhcmQgcGFjaz17cGFja30ga2V5PXtpZHh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZW1pdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnNTBweCcgfX0+RW52aWUgZCd1bmUgb2ZmcmUgUHJlbWl1bcKgPzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbWl1bS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJlbWl1bS1jb250ZW50LWxlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PsOAIHBhcnRpciBkZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj40MDDCoEvCoOKCrDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5hbm51ZWxzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5DdXN0b21pc2F0aW9uIHBvc3NpYmxlwqAhPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIHN4PXt7IGJnY29sb3I6IGNvbG9ycy5saWdodEdyZWVuLCBjb2xvcjogJ3doaXRlJywgJyY6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhcmtlckdyZWVuIH0sIHBhZGRpbmc6ICcxNXB4JywgbWFyZ2luOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIHNhdm9pciBwbHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmVtaXVtLWNvbnRlbnQtcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZW1pdW1Db250ZW50Lm1hcCgoY29udGVudCwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9PjxGYUNoZWNrQ2lyY2xlIHNpemU9ezIwfSBjb2xvcj17Y29sb3JzLmxpZ2h0R3JlZW59IC8+e2NvbnRlbnR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmd1bWVudHMtb2ZmZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2FyZ3VtZW50cy10aXRsZSc+UGV1IGltcG9ydGUgbCdvZmZyZSwgb24gdm91cyBnYXJhbnRpdMKgOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvY2tzLm1hcCgoYmxvY2ssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9jayBibG9jaz17YmxvY2t9IGtleT17aWR4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjb3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+RW52aWUgZCdlbiBkw6ljb3V2cmlyIHBsdXPCoD88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPScvY29udGFjdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYW5hbHl0aWNzLWJ1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhcmtlckdyZWVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5Db250YWN0ZXotbm91c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVycy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnMtY29udGVudC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1sYWJlbCc+Q29tYmllbiBkZSA8c3BhbiBzdHlsZT17eyBjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4gfX0+ZmFjdHVyZXMgZm91cm5pc3NldXJzIHRyYWl0ZXotdm91czwvc3Bhbj4gcGFyIG1vaXMgPzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+KEVzdGltZXogZW4gbW95ZW5uZSBwYXIgbW9pcyk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFNsaWRlciB2YWx1ZT17dmFsdWVTbGlkZXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlTGFiZWxEaXNwbGF5PVwib25cIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU2xpZGVyIGlkPSdzdHlsZWQtc2xpZGVyJyB2YWx1ZT17dmFsdWVTbGlkZXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlTGFiZWxEaXNwbGF5PVwib25cIiBtaW49ezB9IG1heD17NTB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJzLWNvbnRlbnQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXItbGFiZWwnPkNvbWJpZW4gZGUgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGNvbG9ycy5saWdodEdyZWVuIH19PmJhbnF1ZXM8L3NwYW4+IGFsbGV6LXZvdXMgY29ubmVjdGVyID88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PihMZSBub21icmUgZGUgY29tcHRlcyBhdSBzZWluIGQndW4gbcOqbWUgYmFucXVlIGVzdCBpbGxpbWl0w6kpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNsaWRlciBpZD0nc3R5bGVkLXNsaWRlcjInIHZhbHVlPXt2YWx1ZVNsaWRlcjJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UyfSB2YWx1ZUxhYmVsRGlzcGxheT1cIm9uXCIgbWluPXsxfSBtYXg9ezIwfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVycy1jb250ZW50LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWl0ZXMgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGNvbG9ycy5saWdodEdyZWVuIH19PiBjb2xsYWJvcmVyPC9zcGFuPiB2b3Mgc2VydmljZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Vic2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJpY2UnPjE54oKsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naHQnPkhUL01vaXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+4pyTIDxiPkFjY8OocyDDoCBsJ2Vuc2VtYmxlIGRlcyBmb25jdGlvbm5hbGl0w6lzPC9iPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuKckyBTdXBwb3J0IGNsaWVudDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuKckyDDiXF1aXDDqSBkw6lkacOpZSBhdSBsYW5jZW1lbnQgZXQgw6AgbCdhY2NvbXBhZ25lbWVudDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGhyZWY9Jy8nIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7IGJnY29sb3I6IGNvbG9ycy5kYXJrZXJHcmVlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEw6ltYXJyZXIgbWFpbnRlbmFudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciBmb290ZXI9e3NzZC5mb290ZXJ9IC8+XHJcbiAgICAgICAgICAgIHsvKiA8L1RoZW1lUHJvdmlkZXI+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBjb25zdCBHRVRCWVNMVUcgPSBncWxgXHJcbiAgICB7XHJcbiAgICAgICAgbWVudShpZDogMSkge1xyXG4gICAgICAgICAgICBuYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19ocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY3RhIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyKGlkOiAxKSB7XHJcbiAgICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICBsb2dvX2Zvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBibG9ja19zb2NpYWxfaGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzZWF1X3NvY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5hdkl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2hyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdF9sYW5ndWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeV9mbGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBtZW51OiB7IG5hdmJhciB9LFxyXG4gICAgICAgICAgICBmb290ZXI6IHsgZm9vdGVyIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5OiBHRVRCWVNMVUcsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHNzZDoge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyLFxyXG4gICAgICAgICAgICAgICAgZm9vdGVyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=