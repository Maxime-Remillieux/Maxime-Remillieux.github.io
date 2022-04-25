self["webpackHotUpdate_N_E"]("pages/success-stories/[slug]",{

/***/ "./pages/success-stories/[slug].js":
/*!*****************************************!*\
  !*** ./pages/success-stories/[slug].js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Seo */ "./components/Seo.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Canvas */ "./components/Canvas.js");
/* harmony import */ var _services_scrollTrigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/scrollTrigger */ "./services/scrollTrigger.js");
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap/dist/gsap */ "./node_modules/gsap/dist/gsap.js");
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gsap/dist/CSSRulePlugin */ "./node_modules/gsap/dist/CSSRulePlugin.js");
/* harmony import */ var gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var gsap_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap/dist/MotionPathPlugin */ "./node_modules/gsap/dist/MotionPathPlugin.js");
/* harmony import */ var gsap_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\pages\\success-stories\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();














gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.registerPlugin(gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_10__.CSSRulePlugin, gsap_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_11__.MotionPathPlugin);
var detailsData = {
  title: "LES CAMPAGNES GÉOLOCALISÉES",
  strats: {
    title: 'Stratégie',
    context: {
      title: 'Contexte & Objectifs',
      content: 'Pendant l\'été les clubs ont plus de difficulté à remplir leur stade car une partie de leurs "core fans" ne sont pas sur place. Le challenge est donc d\'aller chercher de nouvelles cibles notamment sur l\'audience Touriste.'
    },
    strat: {
      title: 'Stratégie proposée',
      content: 'Nous avons donc proposé de travailler sur de la géolocalisation mobile sur les lieux touristiques les plus visités de la région du client pour enrichir leur expérience avec un match.'
    },
    budget: {
      title: 'Budget',
      content: '1500€ à 3000€'
    },
    target: {
      title: 'Cibles',
      content: ['Visiteurs des lieux touristiques de la région (Géolocalisation Mobile)', 'Fans de rugby et de sports de la région (Médias Premiums)']
    }
  },
  results: [{
    value: '27M',
    subtext: 'd\'impressions'
  }, {
    value: '8',
    subtext: 'ROI'
  }, {
    value: '20%',
    subtext: 'nouveaux clients'
  }, {
    value: '56M',
    subtext: 'de clics'
  }],
  secretSauce: {
    title: 'La « secret sauce » Klox',
    description: 'Diffusion de <b>publicités géo-ciblées</b> pendant des plages horaires spécifiques afin de couvrir le maximum de touristes'
  }
};

var strategy = function strategy() {
  var tl = gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.timeline({
    ease: "linear"
  });
  tl.fromTo(".not", {
    opacity: 0
  }, {
    opacity: 1,
    stagger: {
      each: 0.5,
      yoyo: true
    },
    duration: 1.5
  }).fromTo(".other", {
    opacity: 0
  }, {
    stagger: {
      each: 0.1,
      yoyo: true
    },
    opacity: 1,
    duration: 0.8
  }).fromTo(".cible", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1
  }, "-=1").fromTo(".fleche", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1.5
  }).fromTo(".fleche", {
    strokeDashoffset: -1000
  }, {
    strokeDashoffset: 0,
    duration: 2
  }, "-=0.5").fromTo(".fleche", {
    fill: "none"
  }, {
    fill: "black",
    duration: 1
  }, "-=0.5");
};

var Details = function Details(_ref) {
  _s();

  var ssd = _ref.ssd,
      partner = _ref.partner;
  var navbar = ssd.navbar,
      footer = ssd.footer;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (0,_services_scrollTrigger__WEBPACK_IMPORTED_MODULE_8__.animate)(strategy(), "#strategy", "top center", strategy);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "success-stories-details",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {
      navbar: navbar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "top",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "headerLeft",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Canvas__WEBPACK_IMPORTED_MODULE_7__.default, {
            params: _constants__WEBPACK_IMPORTED_MODULE_5__.default.successParticules
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: detailsData.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "headerLogos",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "logo-klox",
              src: navbar.logo.image.url,
              alt: navbar.logo.image.alternativeText
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_12__.ImCross, {
              color: "white",
              size: "30px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: partner.logo,
              className: "logo-partner"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "header-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: partner.image.replace('300/200', '800/600')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "results-container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "results",
          children: detailsData.results.map(function (result, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "resultDiv",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "resultValue",
                children: result.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "subtext",
                children: result.subtext
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 33
              }, _this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "strat-container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "strat",
          id: "strategy",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "strat-content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: "title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 33
              }, _this), detailsData.strats.title]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                className: "strat-section",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "strat-item",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    className: "label",
                    children: detailsData.strats.context.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: detailsData.strats.context.content
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "strat-item",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    className: "label",
                    children: detailsData.strats.strat.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: detailsData.strats.strat.content
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "strat-item",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    className: "label",
                    children: detailsData.strats.budget.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: detailsData.strats.budget.content
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "strat-item",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    className: "label",
                    children: detailsData.strats.target.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                    children: detailsData.strats.target.content.map(function (item, index) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: item
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 49
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "stratAnim",
            children: _constants__WEBPACK_IMPORTED_MODULE_5__.default.svg1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "secretSauce-container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "secretSauce",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "title-secret",
            children: detailsData.secretSauce.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            dangerouslySetInnerHTML: {
              __html: detailsData.secretSauce.description
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "buttons-container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "buttons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Button, {
            className: "learn-more-button",
            href: "/contact",
            children: "Vous souhaitez en savoir plus ?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Button, {
            className: "learn-more-button",
            href: "/success-stories",
            children: "Voir une autre success story"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__.default, {
      footer: footer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 9
  }, _this);
};

_s(Details, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Details;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Details);

var _c;

$RefreshReg$(_c, "Details");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VjY2Vzcy1zdG9yaWVzL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJnc2FwIiwiQ1NTUnVsZVBsdWdpbiIsIk1vdGlvblBhdGhQbHVnaW4iLCJkZXRhaWxzRGF0YSIsInRpdGxlIiwic3RyYXRzIiwiY29udGV4dCIsImNvbnRlbnQiLCJzdHJhdCIsImJ1ZGdldCIsInRhcmdldCIsInJlc3VsdHMiLCJ2YWx1ZSIsInN1YnRleHQiLCJzZWNyZXRTYXVjZSIsImRlc2NyaXB0aW9uIiwic3RyYXRlZ3kiLCJ0bCIsImVhc2UiLCJmcm9tVG8iLCJvcGFjaXR5Iiwic3RhZ2dlciIsImVhY2giLCJ5b3lvIiwiZHVyYXRpb24iLCJzdHJva2VEYXNob2Zmc2V0IiwiZmlsbCIsIkRldGFpbHMiLCJzc2QiLCJwYXJ0bmVyIiwibmF2YmFyIiwiZm9vdGVyIiwidXNlRWZmZWN0IiwiYW5pbWF0ZSIsImNvbnN0YW50cyIsInN1Y2Nlc3NQYXJ0aWN1bGVzIiwibG9nbyIsImltYWdlIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0IiwicmVwbGFjZSIsIm1hcCIsInJlc3VsdCIsImkiLCJpdGVtIiwiaW5kZXgiLCJzdmcxIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsK0RBQUEsQ0FBb0JDLG1FQUFwQixFQUFtQ0MseUVBQW5DO0FBR0EsSUFBTUMsV0FBVyxHQUFHO0FBQ2hCQyxPQUFLLEVBQUUsNkJBRFM7QUFFaEJDLFFBQU0sRUFBRTtBQUNKRCxTQUFLLEVBQUUsV0FESDtBQUVKRSxXQUFPLEVBQUU7QUFBRUYsV0FBSyxFQUFFLHNCQUFUO0FBQWlDRyxhQUFPLEVBQUU7QUFBMUMsS0FGTDtBQUdKQyxTQUFLLEVBQUU7QUFBRUosV0FBSyxFQUFFLG9C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SSw4REFBQyxzREFBRDtBQUFRLHFCQUFTLEVBQUMsbUJBQWxCO0FBQXNDLGdCQUFJLEVBQUMsa0JBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUF1RkksOERBQUMsdURBQUQ7QUFBUSxZQUFNLEVBQUVnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMkZILENBbEdEOztHQUFNSixPOztLQUFBQSxPOztBQW9HTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdWNjZXNzLXN0b3JpZXMvW3NsdWddLjhjYmIxZjQxYTQ2ZGQxZWNmZmNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VvJztcclxuaW1wb3J0IHsgYXBvbGxvQ2xpZW50IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0cmFwaVwiO1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCB7IEltQ3Jvc3MgfSBmcm9tICdyZWFjdC1pY29ucy9pbSc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBDYW52YXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYW52YXMnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBhbmltYXRlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3Njcm9sbFRyaWdnZXJcIjtcclxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwL2Rpc3QvZ3NhcFwiO1xyXG5pbXBvcnQgeyBDU1NSdWxlUGx1Z2luIH0gZnJvbSBcImdzYXAvZGlzdC9DU1NSdWxlUGx1Z2luXCI7XHJcbmltcG9ydCB7IE1vdGlvblBhdGhQbHVnaW4gfSBmcm9tIFwiZ3NhcC9kaXN0L01vdGlvblBhdGhQbHVnaW5cIjtcclxuZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NSdWxlUGx1Z2luLCBNb3Rpb25QYXRoUGx1Z2luKTtcclxuXHJcblxyXG5jb25zdCBkZXRhaWxzRGF0YSA9IHtcclxuICAgIHRpdGxlOiBcIkxFUyBDQU1QQUdORVMgR8OJT0xPQ0FMSVPDiUVTXCIsXHJcbiAgICBzdHJhdHM6IHtcclxuICAgICAgICB0aXRsZTogJ1N0cmF0w6lnaWUnLFxyXG4gICAgICAgIGNvbnRleHQ6IHsgdGl0bGU6ICdDb250ZXh0ZSAmIE9iamVjdGlmcycsIGNvbnRlbnQ6ICdQZW5kYW50IGxcXCfDqXTDqSBsZXMgY2x1YnMgb250IHBsdXMgZGUgZGlmZmljdWx0w6kgw6AgcmVtcGxpciBsZXVyIHN0YWRlIGNhciB1bmUgcGFydGllIGRlIGxldXJzIFwiY29yZSBmYW5zXCIgbmUgc29udCBwYXMgc3VyIHBsYWNlLiBMZSBjaGFsbGVuZ2UgZXN0IGRvbmMgZFxcJ2FsbGVyIGNoZXJjaGVyIGRlIG5vdXZlbGxlcyBjaWJsZXMgbm90YW1tZW50IHN1ciBsXFwnYXVkaWVuY2UgVG91cmlzdGUuJyB9LFxyXG4gICAgICAgIHN0cmF0OiB7IHRpdGxlOiAnU3RyYXTDqWdpZSBwcm9wb3PDqWUnLCBjb250ZW50OiAnTm91cyBhdm9ucyBkb25jIHByb3Bvc8OpIGRlIHRyYXZhaWxsZXIgc3VyIGRlIGxhIGfDqW9sb2NhbGlzYXRpb24gbW9iaWxlIHN1ciBsZXMgbGlldXggdG91cmlzdGlxdWVzIGxlcyBwbHVzIHZpc2l0w6lzIGRlIGxhIHLDqWdpb24gZHUgY2xpZW50IHBvdXIgZW5yaWNoaXIgbGV1ciBleHDDqXJpZW5jZSBhdmVjIHVuIG1hdGNoLicgfSxcclxuICAgICAgICBidWRnZXQ6IHsgdGl0bGU6ICdCdWRnZXQnLCBjb250ZW50OiAnMTUwMOKCrCDDoCAzMDAw4oKsJyB9LFxyXG4gICAgICAgIHRhcmdldDogeyB0aXRsZTogJ0NpYmxlcycsIGNvbnRlbnQ6IFsnVmlzaXRldXJzIGRlcyBsaWV1eCB0b3VyaXN0aXF1ZXMgZGUgbGEgcsOpZ2lvbiAoR8Opb2xvY2FsaXNhdGlvbiBNb2JpbGUpJywgJ0ZhbnMgZGUgcnVnYnkgZXQgZGUgc3BvcnRzIGRlIGxhIHLDqWdpb24gKE3DqWRpYXMgUHJlbWl1bXMpJ10gfVxyXG4gICAgfSxcclxuICAgIHJlc3VsdHM6IFtcclxuICAgICAgICB7IHZhbHVlOiAnMjdNJywgc3VidGV4dDogJ2RcXCdpbXByZXNzaW9ucycgfSxcclxuICAgICAgICB7IHZhbHVlOiAnOCcsIHN1YnRleHQ6ICdST0knIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogJzIwJScsIHN1YnRleHQ6ICdub3V2ZWF1eCBjbGllbnRzJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6ICc1Nk0nLCBzdWJ0ZXh0OiAnZGUgY2xpY3MnIH1cclxuICAgIF0sXHJcbiAgICBzZWNyZXRTYXVjZToge1xyXG4gICAgICAgIHRpdGxlOiAnTGEgwqsgc2VjcmV0IHNhdWNlIMK7IEtsb3gnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRGlmZnVzaW9uIGRlIDxiPnB1YmxpY2l0w6lzIGfDqW8tY2libMOpZXM8L2I+IHBlbmRhbnQgZGVzIHBsYWdlcyBob3JhaXJlcyBzcMOpY2lmaXF1ZXMgYWZpbiBkZSBjb3V2cmlyIGxlIG1heGltdW0gZGUgdG91cmlzdGVzJ1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHJhdGVneSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XHJcbiAgICAgICAgZWFzZTogXCJsaW5lYXJcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRsLmZyb21UbyhcclxuICAgICAgICBcIi5ub3RcIixcclxuICAgICAgICB7IG9wYWNpdHk6IDAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIHN0YWdnZXI6IHtcclxuICAgICAgICAgICAgICAgIGVhY2g6IDAuNSxcclxuICAgICAgICAgICAgICAgIHlveW86IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG4gICAgICAgIC5mcm9tVG8oXHJcbiAgICAgICAgICAgIFwiLm90aGVyXCIsXHJcbiAgICAgICAgICAgIHsgb3BhY2l0eTogMCB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdGFnZ2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFjaDogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgIHlveW86IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLmZyb21UbyhcIi5jaWJsZVwiLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMSB9LCBcIi09MVwiKVxyXG4gICAgICAgIC5mcm9tVG8oXCIuZmxlY2hlXCIsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAxLjUgfSlcclxuICAgICAgICAuZnJvbVRvKFxyXG4gICAgICAgICAgICBcIi5mbGVjaGVcIixcclxuICAgICAgICAgICAgeyBzdHJva2VEYXNob2Zmc2V0OiAtMTAwMCB9LFxyXG4gICAgICAgICAgICB7IHN0cm9rZURhc2hvZmZzZXQ6IDAsIGR1cmF0aW9uOiAyIH0sXHJcbiAgICAgICAgICAgIFwiLT0wLjVcIlxyXG4gICAgICAgIClcclxuICAgICAgICAuZnJvbVRvKFxyXG4gICAgICAgICAgICBcIi5mbGVjaGVcIixcclxuICAgICAgICAgICAgeyBmaWxsOiBcIm5vbmVcIiB9LFxyXG4gICAgICAgICAgICB7IGZpbGw6IFwiYmxhY2tcIiwgZHVyYXRpb246IDEgfSxcclxuICAgICAgICAgICAgXCItPTAuNVwiXHJcbiAgICAgICAgKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBEZXRhaWxzID0gKHsgc3NkLCBwYXJ0bmVyIH0pID0+IHtcclxuICAgIGNvbnN0IHsgbmF2YmFyLCBmb290ZXIgfSA9IHNzZDtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFuaW1hdGUoc3RyYXRlZ3koKSwgXCIjc3RyYXRlZ3lcIiwgXCJ0b3AgY2VudGVyXCIsIHN0cmF0ZWd5KTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N1Y2Nlc3Mtc3Rvcmllcy1kZXRhaWxzJz5cclxuICAgICAgICAgICAgPFNlbyAvPlxyXG4gICAgICAgICAgICA8TmF2YmFyIG5hdmJhcj17bmF2YmFyfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlckxlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FudmFzIHBhcmFtcz17Y29uc3RhbnRzLnN1Y2Nlc3NQYXJ0aWN1bGVzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2RldGFpbHNEYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJMb2dvcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nbG9nby1rbG94JyBzcmM9e25hdmJhci5sb2dvLmltYWdlLnVybH0gYWx0PXtuYXZiYXIubG9nby5pbWFnZS5hbHRlcm5hdGl2ZVRleHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1Dcm9zcyBjb2xvcj0nd2hpdGUnIHNpemU9JzMwcHgnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGFydG5lci5sb2dvfSBjbGFzc05hbWU9J2xvZ28tcGFydG5lcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BhcnRuZXIuaW1hZ2UucmVwbGFjZSgnMzAwLzIwMCcsICc4MDAvNjAwJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0cy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbHNEYXRhLnJlc3VsdHMubWFwKChyZXN1bHQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXN1bHREaXYnIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VsdFZhbHVlJz57cmVzdWx0LnZhbHVlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGV4dFwiPntyZXN1bHQuc3VidGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cmF0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyYXRcIiBpZD1cInN0cmF0ZWd5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyYXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbHNEYXRhLnN0cmF0cy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdHJhdC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3N0cmF0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbGFiZWwnPntkZXRhaWxzRGF0YS5zdHJhdHMuY29udGV4dC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RldGFpbHNEYXRhLnN0cmF0cy5jb250ZXh0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdzdHJhdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2xhYmVsJz57ZGV0YWlsc0RhdGEuc3RyYXRzLnN0cmF0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGV0YWlsc0RhdGEuc3RyYXRzLnN0cmF0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdzdHJhdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2xhYmVsJz57ZGV0YWlsc0RhdGEuc3RyYXRzLmJ1ZGdldC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RldGFpbHNEYXRhLnN0cmF0cy5idWRnZXQuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdHJhdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdsYWJlbCc+e2RldGFpbHNEYXRhLnN0cmF0cy50YXJnZXQudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsc0RhdGEuc3RyYXRzLnRhcmdldC5jb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdHJhdEFuaW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnN0YW50cy5zdmcxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNyZXRTYXVjZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3JldFNhdWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RpdGxlLXNlY3JldCc+e2RldGFpbHNEYXRhLnNlY3JldFNhdWNlLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGV0YWlsc0RhdGEuc2VjcmV0U2F1Y2UuZGVzY3JpcHRpb24gfX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nbGVhcm4tbW9yZS1idXR0b24nIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVm91cyBzb3VoYWl0ZXogZW4gc2F2b2lyIHBsdXMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J2xlYXJuLW1vcmUtYnV0dG9uJyBocmVmPVwiL3N1Y2Nlc3Mtc3Rvcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVm9pciB1bmUgYXV0cmUgc3VjY2VzcyBzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvb3RlciBmb290ZXI9e2Zvb3Rlcn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgcGFydG5lcnMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9wYXJ0bmVycycpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcclxuXHJcbiAgICBjb25zdCBzbHVnUGF0aHMgPSBwYXJ0bmVycy5tYXAoKHBhcnRuZXIpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXJhbXM6IHsgc2x1ZzogcGFydG5lci5uYW1lLnRvTG93ZXJDYXNlKCkgfSxcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogc2x1Z1BhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCBHRVRCWVNMVUcgPSBncWxgXHJcbiAgICB7XHJcbiAgICAgICAgbWVudShpZDogMSkge1xyXG4gICAgICAgICAgICBuYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19ocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY3RhIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyKGlkOiAxKSB7XHJcbiAgICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICBsb2dvX2Zvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBibG9ja19zb2NpYWxfaGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzZWF1X3NvY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5hdkl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2hyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdF9sYW5ndWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeV9mbGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBtZW51OiB7IG5hdmJhciB9LFxyXG4gICAgICAgICAgICBmb290ZXI6IHsgZm9vdGVyIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5OiBHRVRCWVNMVUcsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwYXJ0bmVycyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDA0L3BhcnRuZXJzJykudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xyXG4gICAgY29uc3QgcGFydG5lclN0cmluZyA9IHBhcmFtcy5zbHVnO1xyXG4gICAgY29uc3QgcGFydG5lciA9IHBhcnRuZXJzLmZpbmQocHJ0biA9PiBwcnRuLm5hbWUgPT09IChwYXJ0bmVyU3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGFydG5lclN0cmluZy5zbGljZSgxKSkpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBzc2Q6IHtcclxuICAgICAgICAgICAgICAgIG5hdmJhcixcclxuICAgICAgICAgICAgICAgIGZvb3RlcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFydG5lcixcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=