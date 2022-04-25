self["webpackHotUpdate_N_E"]("pages/typologie/[slug]",{

/***/ "./pages/typologie/[slug].js":
/*!***********************************!*\
  !*** ./pages/typologie/[slug].js ***!
  \***********************************/
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
/* harmony import */ var _components_offres_Block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/offres/Block */ "./components/offres/Block.js");
/* harmony import */ var _components_offres_OfferCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/offres/OfferCard */ "./components/offres/OfferCard.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/ArrowForward */ "./node_modules/@mui/icons-material/ArrowForward.js");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Seo */ "./components/Seo.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_PartnerCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PartnerCard */ "./components/PartnerCard.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\pages\\typologie\\[slug].js";












var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__.createTheme)({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    primary: {
      main: '#3055D3',
      darker: '#053e85'
    },
    secondary: {
      main: 'rgba(253, 254, 255, 0.15)',
      contrastText: 'white',
      darker: '#053e85'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff'
    }
  }
}); // const data = {
//   header: {
//     title: "Bla bla bla pour les PME",
//     title_2: "7 DAY FREE TRIAL",
//     description: "Business-to-consumer angel investor channels focus product management crowdsource stock funding.",
//     description_2: "Cancel anytime without any hassle.",
//     button: {
//       label: "Contactez-nous",
//       href: "/contact"
//     }
//   },
//   offers: {
//     title: "Notre offre de services",
//     description: "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do.",
//     offer_blocks: [
//       { label: 'BASIC', line_2: '10€', line_3: 'PAR MOIS', target: 'For Small Startup', content: ['Unlimited Websites', '200+ UI Blocks', 'Advanced Builder', 'Free SSL/HTTPS Certificate'], button: { label: "Get started now", href: "/" }, bottom_text: '30 DAYS TRIAL' },
//       { label: 'PREMIUM', line_2: '20€', line_3: 'PAR MOIS', target: 'For Enterprise', content: ['Unlimited Websites', '200+ UI Blocks', 'Advanced Builder', 'Free SSL/HTTPS Certificate'], variant: '#27D6BD', button: { label: "Get started now", href: "/" }, bottom_text: '30 DAYS TRIAL' },
//       { label: 'STANDARD', line_2: '15€', line_3: 'PAR MOIS', target: 'For Mid-Size Team', content: ['Unlimited Websites', '200+ UI Blocks', 'Advanced Builder', 'Free SSL/HTTPS Certificate'], button: { label: "Get started now", href: "/" }, bottom_text: '30 DAYS TRIAL' }
//     ],
//   },
//   argument: {
//     title: "Les Arguments pour les PME",
//     description: "Influencer startup interaction design. Paradigm shift research & development partner network iteration lean startup return on investment.",
//     blocks: [
//       { title: 'Responsive Design', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vitae suscipit? Dolor, ipsam?', icon: FaDesktop },
//       { title: 'Blocks library', content: 'Incidunt suscipit officiis nostrum vel quos consequuntur tenetur, ut reiciendis unde ea eos.', icon: FaLayerGroup, variant: '#27D6BD' },
//       { title: 'Global Styles', content: 'Repellat animi placeat nam eaque temporibus blanditiis, dolor architecto molestiae fuga labore accusantium!', icon: FaPaintBrush },
//       { title: 'Lorem ipsum', content: 'Consequuntur, exercitationem voluptate! Eius, voluptas deleniti. Nam reprehenderit tempora officia porro recusandae! Eligendi.', icon: FaPaintBrush },
//       { title: 'Reiciendis illo', content: 'Nulla est tenetur similique ab, doloribus nobis soluta facere blanditiis, error architecto pariatur?', icon: FaPaintBrush },
//       { title: 'Repellat cupiditate', content: 'Aliquid voluptatibus sequi nemo doloremque laudantium perferendis nobis, quas dolore, dolorum quos ducimus.', icon: FaPaintBrush },
//     ],
//   },
//   cta: {
//     label: "Start getting analytics of your startup",
//     button: {
//       label: "Get started now",
//       href: '/'
//     }
//   },
//   partners: {
//     title: 'Les success stories des PME',
//     button: {
//       label: 'Voir d\'autres success stories',
//       href: '/success-stories'
//     }
//   }
// }

var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var ssd = _ref.ssd,
      pmePartners = _ref.pmePartners,
      industries = _ref.industries,
      typo = _ref.typo;
  var _typo$ = typo[0],
      header = _typo$.header,
      offers = _typo$.offers,
      argument = _typo$.argument,
      cta = _typo$.cta,
      partners = _typo$.partners;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "offres-pme",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__.default, {
      navbar: ssd.navbar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {
      theme: theme,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "top",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "top-image",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/images/phone.png",
              alt: "phone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "top-right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "trial",
              children: header.title_2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: header.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "top-text",
              children: header.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "contained",
              className: "contact-button",
              href: header.button.href,
              sx: {
                bgcolor: '#27D6BD',
                '&:hover': {
                  bgcolor: '#2b9384'
                }
              },
              children: header.button.label
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: {
                textAlign: "center"
              },
              children: header.description_2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "arguments-offers",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "arguments-title",
            children: argument.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "arguments-p",
            children: argument.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "blocks",
            children: argument.blocks.map(function (block, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_Block__WEBPACK_IMPORTED_MODULE_2__.default, {
                block: block
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "services",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "services-top",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: offers.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: offers.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "offers",
            children: offers.offer_blocks.map(function (offer, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_OfferCard__WEBPACK_IMPORTED_MODULE_3__.default, {
                offer: offer
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "analytics-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "analytics",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: cta.label
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
              href: cta.button.href,
              className: "analytics-button",
              variant: "contained",
              endIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 26
              }, this),
              sx: {
                bgcolor: 'white',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#cccccc'
                }
              },
              children: cta.button.label
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "partners-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "partners-title",
            children: partners.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "partners",
            children: pmePartners.map(function (partner, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PartnerCard__WEBPACK_IMPORTED_MODULE_7__.default, {
                partner: partner,
                industry: industries.find(function (industry) {
                  return partner.industryId === industry.id;
                })
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
            href: partners.button.href,
            variant: "contained",
            sx: {
              margin: 'auto',
              padding: '10px',
              bgcolor: '#27D6BD',
              '&:hover': {
                bgcolor: '#2b9384'
              }
            },
            children: partners.button.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {
      footer: ssd.footer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHlwb2xvZ2llL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNyZWF0ZVRoZW1lIiwic3RhdHVzIiwiZGFuZ2VyIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiZGFya2VyIiwic2Vjb25kYXJ5IiwiY29udHJhc3RUZXh0IiwibmV1dHJhbCIsIkhvbWUiLCJzc2QiLCJwbWVQYXJ0bmVycyIsImluZHVzdHJpZXMiLCJ0eXBvIiwiaGVhZGVyIiwib2ZmZXJzIiwiYXJndW1lbnQiLCJjdGEiLCJwYXJ0bmVycyIsIm5hdmJhciIsInRpdGxlXzIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwiaHJlZiIsImJnY29sb3IiLCJsYWJlbCIsInRleHRBbGlnbiIsImRlc2NyaXB0aW9uXzIiLCJibG9ja3MiLCJtYXAiLCJibG9jayIsImlkeCIsIm9mZmVyX2Jsb2NrcyIsIm9mZmVyIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYXJ0bmVyIiwiZmluZCIsImluZHVzdHJ5IiwiaW5kdXN0cnlJZCIsImlkIiwibWFyZ2luIiwicGFkZGluZyIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxpRUFBVyxDQUFDO0FBQ3hCQyxRQUFNLEVBQUU7QUFDTkMsVUFBTSxFQUFFO0FBREYsR0FEZ0I7QUFJeEJDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFLFNBREM7QUFFUEMsWUFBTSxFQUFFO0FBRkQsS0FERjtBQUtQQyxhQUFTLEVBQUU7QUFDVEYsVUFBSSxFQUFFLDJCQURHO0FBRVRHLGtCQUFZLEVBQUUsT0FGTDtBQUdURixZQUFNLEVBQUU7QUFIQyxLQUxKO0FBVVBHLFdBQU8s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QywwREFBRDtBQUNBLGdCQUFJLEVBQUVkLFFBQVEsQ0FBQ0ssTUFBVCxDQUFnQkMsSUFEdEI7QUFFQSxtQkFBTyxFQUFDLFdBRlI7QUFHQSxjQUFFLEVBQUU7QUFBRWtCLG9CQUFNLEVBQUUsTUFBVjtBQUFrQkMscUJBQU8sRUFBRSxNQUEzQjtBQUFtQ2xCLHFCQUFPLEVBQUUsU0FBNUM7QUFBdUQseUJBQVc7QUFBRUEsdUJBQU8sRUFBRTtBQUFYO0FBQWxFLGFBSEo7QUFBQSxzQkFLR1AsUUFBUSxDQUFDSyxNQUFULENBQWdCRztBQUxuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBNEVFLDhEQUFDLHVEQUFEO0FBQVEsWUFBTSxFQUFFaEIsR0FBRyxDQUFDa0M7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdGRDtLQW5GdUJuQyxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3R5cG9sb2dpZS9bc2x1Z10uMTYzNTk4M2MyYjAwZGRlOTBjMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb2ZmcmVzL0Jsb2NrJ1xyXG5pbXBvcnQgT2ZmZXJDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb2ZmcmVzL09mZmVyQ2FyZCdcclxuaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcydcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgd2l0aFRoZW1lIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkJztcclxuaW1wb3J0IFNlbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Nlbyc7XHJcbmltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQgeyBhcG9sbG9DbGllbnQgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyYXBpXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFBhcnRuZXJDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFydG5lckNhcmQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgc3RhdHVzOiB7XHJcbiAgICBkYW5nZXI6ICcjZTUzZTNlJyxcclxuICB9LFxyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogJyMzMDU1RDMnLFxyXG4gICAgICBkYXJrZXI6ICcjMDUzZTg1JyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogJ3JnYmEoMjUzLCAyNTQsIDI1NSwgMC4xNSknLFxyXG4gICAgICBjb250cmFzdFRleHQ6ICd3aGl0ZScsXHJcbiAgICAgIGRhcmtlcjogJyMwNTNlODUnLFxyXG4gICAgfSxcclxuICAgIG5ldXRyYWw6IHtcclxuICAgICAgbWFpbjogJyM2NDc0OEInLFxyXG4gICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG4vLyBjb25zdCBkYXRhID0ge1xyXG4vLyAgIGhlYWRlcjoge1xyXG4vLyAgICAgdGl0bGU6IFwiQmxhIGJsYSBibGEgcG91ciBsZXMgUE1FXCIsXHJcbi8vICAgICB0aXRsZV8yOiBcIjcgREFZIEZSRUUgVFJJQUxcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIkJ1c2luZXNzLXRvLWNvbnN1bWVyIGFuZ2VsIGludmVzdG9yIGNoYW5uZWxzIGZvY3VzIHByb2R1Y3QgbWFuYWdlbWVudCBjcm93ZHNvdXJjZSBzdG9jayBmdW5kaW5nLlwiLFxyXG4vLyAgICAgZGVzY3JpcHRpb25fMjogXCJDYW5jZWwgYW55dGltZSB3aXRob3V0IGFueSBoYXNzbGUuXCIsXHJcbi8vICAgICBidXR0b246IHtcclxuLy8gICAgICAgbGFiZWw6IFwiQ29udGFjdGV6LW5vdXNcIixcclxuLy8gICAgICAgaHJlZjogXCIvY29udGFjdFwiXHJcbi8vICAgICB9XHJcbi8vICAgfSxcclxuLy8gICBvZmZlcnM6IHtcclxuLy8gICAgIHRpdGxlOiBcIk5vdHJlIG9mZnJlIGRlIHNlcnZpY2VzXCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogXCJUaGVzZSBjYXNlcyBhcmUgcGVyZmVjdGx5IHNpbXBsZSBhbmQgZWFzeSB0byBkaXN0aW5ndWlzaC4gSW4gYSBmcmVlIGhvdXIsIHdoZW4gb3VyIHBvd2VyIG9mIGNob2ljZSBpcyB1bnRyYW1tZWxsZWQgYW5kIHdoZW4gbm90aGluZyBwcmV2ZW50cyBvdXIgYmVpbmcgYWJsZSB0byBkby5cIixcclxuLy8gICAgIG9mZmVyX2Jsb2NrczogW1xyXG4vLyAgICAgICB7IGxhYmVsOiAnQkFTSUMnLCBsaW5lXzI6ICcxMOKCrCcsIGxpbmVfMzogJ1BBUiBNT0lTJywgdGFyZ2V0OiAnRm9yIFNtYWxsIFN0YXJ0dXAnLCBjb250ZW50OiBbJ1VubGltaXRlZCBXZWJzaXRlcycsICcyMDArIFVJIEJsb2NrcycsICdBZHZhbmNlZCBCdWlsZGVyJywgJ0ZyZWUgU1NML0hUVFBTIENlcnRpZmljYXRlJ10sIGJ1dHRvbjogeyBsYWJlbDogXCJHZXQgc3RhcnRlZCBub3dcIiwgaHJlZjogXCIvXCIgfSwgYm90dG9tX3RleHQ6ICczMCBEQVlTIFRSSUFMJyB9LFxyXG4vLyAgICAgICB7IGxhYmVsOiAnUFJFTUlVTScsIGxpbmVfMjogJzIw4oKsJywgbGluZV8zOiAnUEFSIE1PSVMnLCB0YXJnZXQ6ICdGb3IgRW50ZXJwcmlzZScsIGNvbnRlbnQ6IFsnVW5saW1pdGVkIFdlYnNpdGVzJywgJzIwMCsgVUkgQmxvY2tzJywgJ0FkdmFuY2VkIEJ1aWxkZXInLCAnRnJlZSBTU0wvSFRUUFMgQ2VydGlmaWNhdGUnXSwgdmFyaWFudDogJyMyN0Q2QkQnLCBidXR0b246IHsgbGFiZWw6IFwiR2V0IHN0YXJ0ZWQgbm93XCIsIGhyZWY6IFwiL1wiIH0sIGJvdHRvbV90ZXh0OiAnMzAgREFZUyBUUklBTCcgfSxcclxuLy8gICAgICAgeyBsYWJlbDogJ1NUQU5EQVJEJywgbGluZV8yOiAnMTXigqwnLCBsaW5lXzM6ICdQQVIgTU9JUycsIHRhcmdldDogJ0ZvciBNaWQtU2l6ZSBUZWFtJywgY29udGVudDogWydVbmxpbWl0ZWQgV2Vic2l0ZXMnLCAnMjAwKyBVSSBCbG9ja3MnLCAnQWR2YW5jZWQgQnVpbGRlcicsICdGcmVlIFNTTC9IVFRQUyBDZXJ0aWZpY2F0ZSddLCBidXR0b246IHsgbGFiZWw6IFwiR2V0IHN0YXJ0ZWQgbm93XCIsIGhyZWY6IFwiL1wiIH0sIGJvdHRvbV90ZXh0OiAnMzAgREFZUyBUUklBTCcgfVxyXG4vLyAgICAgXSxcclxuLy8gICB9LFxyXG4vLyAgIGFyZ3VtZW50OiB7XHJcbi8vICAgICB0aXRsZTogXCJMZXMgQXJndW1lbnRzIHBvdXIgbGVzIFBNRVwiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiSW5mbHVlbmNlciBzdGFydHVwIGludGVyYWN0aW9uIGRlc2lnbi4gUGFyYWRpZ20gc2hpZnQgcmVzZWFyY2ggJiBkZXZlbG9wbWVudCBwYXJ0bmVyIG5ldHdvcmsgaXRlcmF0aW9uIGxlYW4gc3RhcnR1cCByZXR1cm4gb24gaW52ZXN0bWVudC5cIixcclxuLy8gICAgIGJsb2NrczogW1xyXG4vLyAgICAgICB7IHRpdGxlOiAnUmVzcG9uc2l2ZSBEZXNpZ24nLCBjb250ZW50OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRnVnaWF0LCB2aXRhZSBzdXNjaXBpdD8gRG9sb3IsIGlwc2FtPycsIGljb246IEZhRGVza3RvcCB9LFxyXG4vLyAgICAgICB7IHRpdGxlOiAnQmxvY2tzIGxpYnJhcnknLCBjb250ZW50OiAnSW5jaWR1bnQgc3VzY2lwaXQgb2ZmaWNpaXMgbm9zdHJ1bSB2ZWwgcXVvcyBjb25zZXF1dW50dXIgdGVuZXR1ciwgdXQgcmVpY2llbmRpcyB1bmRlIGVhIGVvcy4nLCBpY29uOiBGYUxheWVyR3JvdXAsIHZhcmlhbnQ6ICcjMjdENkJEJyB9LFxyXG4vLyAgICAgICB7IHRpdGxlOiAnR2xvYmFsIFN0eWxlcycsIGNvbnRlbnQ6ICdSZXBlbGxhdCBhbmltaSBwbGFjZWF0IG5hbSBlYXF1ZSB0ZW1wb3JpYnVzIGJsYW5kaXRpaXMsIGRvbG9yIGFyY2hpdGVjdG8gbW9sZXN0aWFlIGZ1Z2EgbGFib3JlIGFjY3VzYW50aXVtIScsIGljb246IEZhUGFpbnRCcnVzaCB9LFxyXG4vLyAgICAgICB7IHRpdGxlOiAnTG9yZW0gaXBzdW0nLCBjb250ZW50OiAnQ29uc2VxdXVudHVyLCBleGVyY2l0YXRpb25lbSB2b2x1cHRhdGUhIEVpdXMsIHZvbHVwdGFzIGRlbGVuaXRpLiBOYW0gcmVwcmVoZW5kZXJpdCB0ZW1wb3JhIG9mZmljaWEgcG9ycm8gcmVjdXNhbmRhZSEgRWxpZ2VuZGkuJywgaWNvbjogRmFQYWludEJydXNoIH0sXHJcbi8vICAgICAgIHsgdGl0bGU6ICdSZWljaWVuZGlzIGlsbG8nLCBjb250ZW50OiAnTnVsbGEgZXN0IHRlbmV0dXIgc2ltaWxpcXVlIGFiLCBkb2xvcmlidXMgbm9iaXMgc29sdXRhIGZhY2VyZSBibGFuZGl0aWlzLCBlcnJvciBhcmNoaXRlY3RvIHBhcmlhdHVyPycsIGljb246IEZhUGFpbnRCcnVzaCB9LFxyXG4vLyAgICAgICB7IHRpdGxlOiAnUmVwZWxsYXQgY3VwaWRpdGF0ZScsIGNvbnRlbnQ6ICdBbGlxdWlkIHZvbHVwdGF0aWJ1cyBzZXF1aSBuZW1vIGRvbG9yZW1xdWUgbGF1ZGFudGl1bSBwZXJmZXJlbmRpcyBub2JpcywgcXVhcyBkb2xvcmUsIGRvbG9ydW0gcXVvcyBkdWNpbXVzLicsIGljb246IEZhUGFpbnRCcnVzaCB9LFxyXG4vLyAgICAgXSxcclxuLy8gICB9LFxyXG4vLyAgIGN0YToge1xyXG4vLyAgICAgbGFiZWw6IFwiU3RhcnQgZ2V0dGluZyBhbmFseXRpY3Mgb2YgeW91ciBzdGFydHVwXCIsXHJcbi8vICAgICBidXR0b246IHtcclxuLy8gICAgICAgbGFiZWw6IFwiR2V0IHN0YXJ0ZWQgbm93XCIsXHJcbi8vICAgICAgIGhyZWY6ICcvJ1xyXG4vLyAgICAgfVxyXG4vLyAgIH0sXHJcbi8vICAgcGFydG5lcnM6IHtcclxuLy8gICAgIHRpdGxlOiAnTGVzIHN1Y2Nlc3Mgc3RvcmllcyBkZXMgUE1FJyxcclxuLy8gICAgIGJ1dHRvbjoge1xyXG4vLyAgICAgICBsYWJlbDogJ1ZvaXIgZFxcJ2F1dHJlcyBzdWNjZXNzIHN0b3JpZXMnLFxyXG4vLyAgICAgICBocmVmOiAnL3N1Y2Nlc3Mtc3RvcmllcydcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHNzZCwgcG1lUGFydG5lcnMsIGluZHVzdHJpZXMsIHR5cG8gfSkge1xyXG4gIFxyXG4gIGNvbnN0IHsgaGVhZGVyLCBvZmZlcnMsIGFyZ3VtZW50LCBjdGEsIHBhcnRuZXJzIH0gPSB0eXBvWzBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nb2ZmcmVzLXBtZSc+XHJcbiAgICAgIDxTZW8gLz5cclxuICAgICAgPE5hdmJhciBuYXZiYXI9e3NzZC5uYXZiYXJ9IC8+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wLWltYWdlJz5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcGhvbmUucG5nXCIgYWx0PVwicGhvbmVcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvcC1yaWdodCc+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndHJpYWwnPntoZWFkZXIudGl0bGVfMn08L2gzPlxyXG4gICAgICAgICAgICAgIDxoMT57aGVhZGVyLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0b3AtdGV4dCc+e2hlYWRlci5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNsYXNzTmFtZT0nY29udGFjdC1idXR0b24nIGhyZWY9e2hlYWRlci5idXR0b24uaHJlZn0gc3g9e3sgYmdjb2xvcjogJyMyN0Q2QkQnLCAnJjpob3Zlcic6IHsgYmdjb2xvcjogJyMyYjkzODQnIH0gfX0+e2hlYWRlci5idXR0b24ubGFiZWx9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PntoZWFkZXIuZGVzY3JpcHRpb25fMn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyZ3VtZW50cy1vZmZlcnNcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nYXJndW1lbnRzLXRpdGxlJz57YXJndW1lbnQudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhcmd1bWVudHMtcCc+e2FyZ3VtZW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NcIj5cclxuICAgICAgICAgICAgICB7YXJndW1lbnQuYmxvY2tzLm1hcCgoYmxvY2ssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJsb2NrIGJsb2NrPXtibG9ja30ga2V5PXtpZHh9IC8+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMtdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGgyPntvZmZlcnMudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICA8cD57b2ZmZXJzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXJzXCI+XHJcbiAgICAgICAgICAgICAge29mZmVycy5vZmZlcl9ibG9ja3MubWFwKChvZmZlciwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8T2ZmZXJDYXJkIG9mZmVyPXtvZmZlcn0ga2V5PXtpZHh9IC8+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuYWx5dGljcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmFseXRpY3NcIj5cclxuICAgICAgICAgICAgICA8aDI+e2N0YS5sYWJlbH08L2gyPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGhyZWY9e2N0YS5idXR0b24uaHJlZn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYW5hbHl0aWNzLWJ1dHRvbidcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNjY2NjY2MnXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPntjdGEuYnV0dG9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVycy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncGFydG5lcnMtdGl0bGUnPntwYXJ0bmVycy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXJzXCI+XHJcbiAgICAgICAgICAgICAge3BtZVBhcnRuZXJzLm1hcCgocGFydG5lciwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UGFydG5lckNhcmQga2V5PXtpZHh9IHBhcnRuZXI9e3BhcnRuZXJ9IGluZHVzdHJ5PXtpbmR1c3RyaWVzLmZpbmQoaW5kdXN0cnkgPT4gcGFydG5lci5pbmR1c3RyeUlkID09PSBpbmR1c3RyeS5pZCl9IC8+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBocmVmPXtwYXJ0bmVycy5idXR0b24uaHJlZn1cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIHN4PXt7IG1hcmdpbjogJ2F1dG8nLCBwYWRkaW5nOiAnMTBweCcsIGJnY29sb3I6ICcjMjdENkJEJywgJyY6aG92ZXInOiB7IGJnY29sb3I6ICcjMmI5Mzg0JyB9fX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtwYXJ0bmVycy5idXR0b24ubGFiZWx9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDxGb290ZXIgZm9vdGVyPXtzc2QuZm9vdGVyfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgdHlwb2xvZ2llcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDA0L3R5cG9sb2dpZXMnKS50aGVuKHJlcz0+cmVzLmRhdGEpO1xyXG5cclxuICBjb25zdCBzbHVnUGF0aHMgPSB0eXBvbG9naWVzLm1hcCgodHlwb2xvZ3kpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczogeyBzbHVnOiB0eXBvbG9neS5zbHVnIH0sXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHNsdWdQYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBHRVRCWVNMVUcgPSBncWxgXHJcbiAgICB7XHJcbiAgICAgICAgbWVudShpZDogMSkge1xyXG4gICAgICAgICAgICBuYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19ocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY3RhIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyKGlkOiAxKSB7XHJcbiAgICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICBsb2dvX2Zvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBibG9ja19zb2NpYWxfaGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzZWF1X3NvY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5hdkl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2hyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdF9sYW5ndWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeV9mbGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YToge1xyXG4gICAgICBtZW51OiB7IG5hdmJhciB9LFxyXG4gICAgICBmb290ZXI6IHsgZm9vdGVyIH0sXHJcbiAgICB9LFxyXG4gIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgcXVlcnk6IEdFVEJZU0xVRyxcclxuICB9KTtcclxuICBjb25zdCB0eXBvID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDQvdHlwb2xvZ2llcz9zbHVnPSR7cGFyYW1zLnNsdWd9YCkudGhlbihyZXM9PnJlcy5kYXRhKVxyXG4gIGNvbnN0IHBhcnRuZXJzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDQvcGFydG5lcnMnKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XHJcbiAgY29uc3QgcG1lUGFydG5lcnMgPSBwYXJ0bmVycy5maWx0ZXIocGFydG5lciA9PiBwYXJ0bmVyLnR5cG9sb2d5SWQgPT09IHR5cG8uaWQpO1xyXG4gIGNvbnN0IGluZHVzdHJpZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9pbmR1c3RyaWVzJykudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xyXG5cclxuICBjb25zb2xlLmxvZyhwbWVQYXJ0bmVycyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzc2Q6IHtcclxuICAgICAgICBuYXZiYXIsXHJcbiAgICAgICAgZm9vdGVyLFxyXG4gICAgICB9LFxyXG4gICAgICBwbWVQYXJ0bmVycyxcclxuICAgICAgaW5kdXN0cmllcyxcclxuICAgICAgdHlwbyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9