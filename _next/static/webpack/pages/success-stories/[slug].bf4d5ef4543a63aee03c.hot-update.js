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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
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
          lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VjY2Vzcy1zdG9yaWVzL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJnc2FwIiwiQ1NTUnVsZVBsdWdpbiIsIk1vdGlvblBhdGhQbHVnaW4iLCJkZXRhaWxzRGF0YSIsInRpdGxlIiwic3RyYXRzIiwiY29udGV4dCIsImNvbnRlbnQiLCJzdHJhdCIsImJ1ZGdldCIsInRhcmdldCIsInJlc3VsdHMiLCJ2YWx1ZSIsInN1YnRleHQiLCJzZWNyZXRTYXVjZSIsImRlc2NyaXB0aW9uIiwic3RyYXRlZ3kiLCJ0bCIsImVhc2UiLCJmcm9tVG8iLCJvcGFjaXR5Iiwic3RhZ2dlciIsImVhY2giLCJ5b3lvIiwiZHVyYXRpb24iLCJzdHJva2VEYXNob2Zmc2V0IiwiZmlsbCIsIkRldGFpbHMiLCJzc2QiLCJwYXJ0bmVyIiwibmF2YmFyIiwiZm9vdGVyIiwidXNlRWZmZWN0IiwiYW5pbWF0ZSIsImxvZ28iLCJpbWFnZSIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsInJlcGxhY2UiLCJtYXAiLCJyZXN1bHQiLCJpIiwiaXRlbSIsImluZGV4IiwiY29uc3RhbnRzIiwic3ZnMSIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLCtEQUFBLENBQW9CQyxtRUFBcEIsRUFBbUNDLHlFQUFuQztBQUdBLElBQU1DLFdBQVcsR0FBRztBQUNoQkMsT0FBSyxFQUFFLDZCQURTO0FBRWhCQyxRQUFNLEVBQUU7QUFDSkQsU0FBSyxFQUFFLFdBREg7QUFFSkUsV0FBTyxFQUFFO0FBQUVGLFdBQUssRUFBRSxzQkFBVDtBQUFpQ0csYUFBTyxFQUFFO0FBQTFDLEtBRkw7QUFHSkMsU0FBSyxFQUFFO0FBQUVKLFdBQUssRUFBRSxvQkFBVDtBQUErQkcsYUFBTyxFQUFF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Sko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQXVGSSw4REFBQyx1REFBRDtBQUFRLFlBQU0sRUFBRWdCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEyRkgsQ0FsR0Q7O0dBQU1KLE87O0tBQUFBLE87O0FBb0dOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N1Y2Nlc3Mtc3Rvcmllcy9bc2x1Z10uYmY0ZDVlZjQ1NDNhNjNhZWUwM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZW8nO1xyXG5pbXBvcnQgeyBhcG9sbG9DbGllbnQgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyYXBpXCI7XHJcbmltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IHsgSW1Dcm9zcyB9IGZyb20gJ3JlYWN0LWljb25zL2ltJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IENhbnZhcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhbnZhcyc7XHJcbmltcG9ydCB7IHRyaWdnZXIsIGFuaW1hdGUgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2Nyb2xsVHJpZ2dlclwiO1xyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXAvZGlzdC9nc2FwXCI7XHJcbmltcG9ydCB7IENTU1J1bGVQbHVnaW4gfSBmcm9tIFwiZ3NhcC9kaXN0L0NTU1J1bGVQbHVnaW5cIjtcclxuaW1wb3J0IHsgTW90aW9uUGF0aFBsdWdpbiB9IGZyb20gXCJnc2FwL2Rpc3QvTW90aW9uUGF0aFBsdWdpblwiO1xyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKENTU1J1bGVQbHVnaW4sIE1vdGlvblBhdGhQbHVnaW4pO1xyXG5cclxuXHJcbmNvbnN0IGRldGFpbHNEYXRhID0ge1xyXG4gICAgdGl0bGU6IFwiTEVTIENBTVBBR05FUyBHw4lPTE9DQUxJU8OJRVNcIixcclxuICAgIHN0cmF0czoge1xyXG4gICAgICAgIHRpdGxlOiAnU3RyYXTDqWdpZScsXHJcbiAgICAgICAgY29udGV4dDogeyB0aXRsZTogJ0NvbnRleHRlICYgT2JqZWN0aWZzJywgY29udGVudDogJ1BlbmRhbnQgbFxcJ8OpdMOpIGxlcyBjbHVicyBvbnQgcGx1cyBkZSBkaWZmaWN1bHTDqSDDoCByZW1wbGlyIGxldXIgc3RhZGUgY2FyIHVuZSBwYXJ0aWUgZGUgbGV1cnMgXCJjb3JlIGZhbnNcIiBuZSBzb250IHBhcyBzdXIgcGxhY2UuIExlIGNoYWxsZW5nZSBlc3QgZG9uYyBkXFwnYWxsZXIgY2hlcmNoZXIgZGUgbm91dmVsbGVzIGNpYmxlcyBub3RhbW1lbnQgc3VyIGxcXCdhdWRpZW5jZSBUb3VyaXN0ZS4nIH0sXHJcbiAgICAgICAgc3RyYXQ6IHsgdGl0bGU6ICdTdHJhdMOpZ2llIHByb3Bvc8OpZScsIGNvbnRlbnQ6ICdOb3VzIGF2b25zIGRvbmMgcHJvcG9zw6kgZGUgdHJhdmFpbGxlciBzdXIgZGUgbGEgZ8Opb2xvY2FsaXNhdGlvbiBtb2JpbGUgc3VyIGxlcyBsaWV1eCB0b3VyaXN0aXF1ZXMgbGVzIHBsdXMgdmlzaXTDqXMgZGUgbGEgcsOpZ2lvbiBkdSBjbGllbnQgcG91ciBlbnJpY2hpciBsZXVyIGV4cMOpcmllbmNlIGF2ZWMgdW4gbWF0Y2guJyB9LFxyXG4gICAgICAgIGJ1ZGdldDogeyB0aXRsZTogJ0J1ZGdldCcsIGNvbnRlbnQ6ICcxNTAw4oKsIMOgIDMwMDDigqwnIH0sXHJcbiAgICAgICAgdGFyZ2V0OiB7IHRpdGxlOiAnQ2libGVzJywgY29udGVudDogWydWaXNpdGV1cnMgZGVzIGxpZXV4IHRvdXJpc3RpcXVlcyBkZSBsYSByw6lnaW9uIChHw6lvbG9jYWxpc2F0aW9uIE1vYmlsZSknLCAnRmFucyBkZSBydWdieSBldCBkZSBzcG9ydHMgZGUgbGEgcsOpZ2lvbiAoTcOpZGlhcyBQcmVtaXVtcyknXSB9XHJcbiAgICB9LFxyXG4gICAgcmVzdWx0czogW1xyXG4gICAgICAgIHsgdmFsdWU6ICcyN00nLCBzdWJ0ZXh0OiAnZFxcJ2ltcHJlc3Npb25zJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6ICc4Jywgc3VidGV4dDogJ1JPSScgfSxcclxuICAgICAgICB7IHZhbHVlOiAnMjAlJywgc3VidGV4dDogJ25vdXZlYXV4IGNsaWVudHMnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogJzU2TScsIHN1YnRleHQ6ICdkZSBjbGljcycgfVxyXG4gICAgXSxcclxuICAgIHNlY3JldFNhdWNlOiB7XHJcbiAgICAgICAgdGl0bGU6ICdMYSDCqyBzZWNyZXQgc2F1Y2UgwrsgS2xveCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdEaWZmdXNpb24gZGUgPGI+cHVibGljaXTDqXMgZ8Opby1jaWJsw6llczwvYj4gcGVuZGFudCBkZXMgcGxhZ2VzIGhvcmFpcmVzIHNww6ljaWZpcXVlcyBhZmluIGRlIGNvdXZyaXIgbGUgbWF4aW11bSBkZSB0b3VyaXN0ZXMnXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0cmF0ZWd5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHtcclxuICAgICAgICBlYXNlOiBcImxpbmVhclwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGwuZnJvbVRvKFxyXG4gICAgICAgIFwiLm5vdFwiLFxyXG4gICAgICAgIHsgb3BhY2l0eTogMCB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgc3RhZ2dlcjoge1xyXG4gICAgICAgICAgICAgICAgZWFjaDogMC41LFxyXG4gICAgICAgICAgICAgICAgeW95bzogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcclxuICAgICAgICB9XHJcbiAgICApXHJcbiAgICAgICAgLmZyb21UbyhcclxuICAgICAgICAgICAgXCIub3RoZXJcIixcclxuICAgICAgICAgICAgeyBvcGFjaXR5OiAwIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YWdnZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoOiAwLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgeW95bzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAuOCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuZnJvbVRvKFwiLmNpYmxlXCIsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAxIH0sIFwiLT0xXCIpXHJcbiAgICAgICAgLmZyb21UbyhcIi5mbGVjaGVcIiwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDEuNSB9KVxyXG4gICAgICAgIC5mcm9tVG8oXHJcbiAgICAgICAgICAgIFwiLmZsZWNoZVwiLFxyXG4gICAgICAgICAgICB7IHN0cm9rZURhc2hvZmZzZXQ6IC0xMDAwIH0sXHJcbiAgICAgICAgICAgIHsgc3Ryb2tlRGFzaG9mZnNldDogMCwgZHVyYXRpb246IDIgfSxcclxuICAgICAgICAgICAgXCItPTAuNVwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5mcm9tVG8oXHJcbiAgICAgICAgICAgIFwiLmZsZWNoZVwiLFxyXG4gICAgICAgICAgICB7IGZpbGw6IFwibm9uZVwiIH0sXHJcbiAgICAgICAgICAgIHsgZmlsbDogXCJibGFja1wiLCBkdXJhdGlvbjogMSB9LFxyXG4gICAgICAgICAgICBcIi09MC41XCJcclxuICAgICAgICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IERldGFpbHMgPSAoeyBzc2QsIHBhcnRuZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYXZiYXIsIGZvb3RlciB9ID0gc3NkO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYW5pbWF0ZShzdHJhdGVneSgpLCBcIiNzdHJhdGVneVwiLCBcInRvcCBjZW50ZXJcIiwgc3RyYXRlZ3kpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3VjY2Vzcy1zdG9yaWVzLWRldGFpbHMnPlxyXG4gICAgICAgICAgICA8U2VvIC8+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgbmF2YmFyPXtuYXZiYXJ9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPENhbnZhcyBwYXJhbXM9e2NvbnN0YW50cy5zdWNjZXNzUGFydGljdWxlc30gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlckxlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2RldGFpbHNEYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJMb2dvcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nbG9nby1rbG94JyBzcmM9e25hdmJhci5sb2dvLmltYWdlLnVybH0gYWx0PXtuYXZiYXIubG9nby5pbWFnZS5hbHRlcm5hdGl2ZVRleHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1Dcm9zcyBjb2xvcj0nd2hpdGUnIHNpemU9JzMwcHgnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGFydG5lci5sb2dvfSBjbGFzc05hbWU9J2xvZ28tcGFydG5lcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BhcnRuZXIuaW1hZ2UucmVwbGFjZSgnMzAwLzIwMCcsICc4MDAvNjAwJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0cy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbHNEYXRhLnJlc3VsdHMubWFwKChyZXN1bHQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXN1bHREaXYnIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VsdFZhbHVlJz57cmVzdWx0LnZhbHVlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGV4dFwiPntyZXN1bHQuc3VidGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cmF0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyYXRcIiBpZD1cInN0cmF0ZWd5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyYXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbHNEYXRhLnN0cmF0cy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdHJhdC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3N0cmF0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbGFiZWwnPntkZXRhaWxzRGF0YS5zdHJhdHMuY29udGV4dC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RldGFpbHNEYXRhLnN0cmF0cy5jb250ZXh0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdzdHJhdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2xhYmVsJz57ZGV0YWlsc0RhdGEuc3RyYXRzLnN0cmF0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGV0YWlsc0RhdGEuc3RyYXRzLnN0cmF0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdzdHJhdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2xhYmVsJz57ZGV0YWlsc0RhdGEuc3RyYXRzLmJ1ZGdldC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RldGFpbHNEYXRhLnN0cmF0cy5idWRnZXQuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdHJhdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdsYWJlbCc+e2RldGFpbHNEYXRhLnN0cmF0cy50YXJnZXQudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsc0RhdGEuc3RyYXRzLnRhcmdldC5jb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdHJhdEFuaW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnN0YW50cy5zdmcxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNyZXRTYXVjZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3JldFNhdWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RpdGxlLXNlY3JldCc+e2RldGFpbHNEYXRhLnNlY3JldFNhdWNlLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGV0YWlsc0RhdGEuc2VjcmV0U2F1Y2UuZGVzY3JpcHRpb24gfX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nbGVhcm4tbW9yZS1idXR0b24nIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVm91cyBzb3VoYWl0ZXogZW4gc2F2b2lyIHBsdXMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J2xlYXJuLW1vcmUtYnV0dG9uJyBocmVmPVwiL3N1Y2Nlc3Mtc3Rvcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVm9pciB1bmUgYXV0cmUgc3VjY2VzcyBzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvb3RlciBmb290ZXI9e2Zvb3Rlcn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgcGFydG5lcnMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9wYXJ0bmVycycpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcclxuXHJcbiAgICBjb25zdCBzbHVnUGF0aHMgPSBwYXJ0bmVycy5tYXAoKHBhcnRuZXIpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXJhbXM6IHsgc2x1ZzogcGFydG5lci5uYW1lLnRvTG93ZXJDYXNlKCkgfSxcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogc2x1Z1BhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCBHRVRCWVNMVUcgPSBncWxgXHJcbiAgICB7XHJcbiAgICAgICAgbWVudShpZDogMSkge1xyXG4gICAgICAgICAgICBuYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19ocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY3RhIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyKGlkOiAxKSB7XHJcbiAgICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICBsb2dvX2Zvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBibG9ja19zb2NpYWxfaGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzZWF1X3NvY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5hdkl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2hyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdF9sYW5ndWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeV9mbGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBtZW51OiB7IG5hdmJhciB9LFxyXG4gICAgICAgICAgICBmb290ZXI6IHsgZm9vdGVyIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5OiBHRVRCWVNMVUcsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwYXJ0bmVycyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDA0L3BhcnRuZXJzJykudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xyXG4gICAgY29uc3QgcGFydG5lclN0cmluZyA9IHBhcmFtcy5zbHVnO1xyXG4gICAgY29uc3QgcGFydG5lciA9IHBhcnRuZXJzLmZpbmQocHJ0biA9PiBwcnRuLm5hbWUgPT09IChwYXJ0bmVyU3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGFydG5lclN0cmluZy5zbGljZSgxKSkpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBzc2Q6IHtcclxuICAgICAgICAgICAgICAgIG5hdmJhcixcclxuICAgICAgICAgICAgICAgIGZvb3RlcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFydG5lcixcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=