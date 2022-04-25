self["webpackHotUpdate_N_E"]("pages/success-stories-test/[slug]",{

/***/ "./pages/success-stories-test/[slug].js":
/*!**********************************************!*\
  !*** ./pages/success-stories-test/[slug].js ***!
  \**********************************************/
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


var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\pages\\success-stories-test\\[slug].js",
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
    fill: "white",
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
    className: "success-stories-details-test",
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Canvas__WEBPACK_IMPORTED_MODULE_7__.default, {
        params: _constants__WEBPACK_IMPORTED_MODULE_5__.default.successParticules
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
        lineNumber: 100,
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
              children: detailsData.strats.title
            }, void 0, false, {
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
                    lineNumber: 132,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: detailsData.strats.context.content
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "strat-item",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    className: "label",
                    children: detailsData.strats.strat.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: detailsData.strats.strat.content
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "strat-item",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    className: "label",
                    children: detailsData.strats.budget.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: detailsData.strats.budget.content
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "strat-item",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    className: "label",
                    children: detailsData.strats.target.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                    children: detailsData.strats.target.content.map(function (item, index) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: item
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 147,
                        columnNumber: 49
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
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
            lineNumber: 157,
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
            lineNumber: 164,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            dangerouslySetInnerHTML: {
              __html: detailsData.secretSauce.description
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
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
            lineNumber: 170,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Button, {
            className: "learn-more-button",
            href: "/marketplace",
            children: "Voir une autre success story"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
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
      lineNumber: 179,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VjY2Vzcy1zdG9yaWVzLXRlc3QvW3NsdWddLmpzIl0sIm5hbWVzIjpbImdzYXAiLCJDU1NSdWxlUGx1Z2luIiwiTW90aW9uUGF0aFBsdWdpbiIsImRldGFpbHNEYXRhIiwidGl0bGUiLCJzdHJhdHMiLCJjb250ZXh0IiwiY29udGVudCIsInN0cmF0IiwiYnVkZ2V0IiwidGFyZ2V0IiwicmVzdWx0cyIsInZhbHVlIiwic3VidGV4dCIsInNlY3JldFNhdWNlIiwiZGVzY3JpcHRpb24iLCJzdHJhdGVneSIsInRsIiwiZWFzZSIsImZyb21UbyIsIm9wYWNpdHkiLCJzdGFnZ2VyIiwiZWFjaCIsInlveW8iLCJkdXJhdGlvbiIsInN0cm9rZURhc2hvZmZzZXQiLCJmaWxsIiwiRGV0YWlscyIsInNzZCIsInBhcnRuZXIiLCJuYXZiYXIiLCJmb290ZXIiLCJ1c2VFZmZlY3QiLCJhbmltYXRlIiwiY29uc3RhbnRzIiwic3VjY2Vzc1BhcnRpY3VsZXMiLCJsb2dvIiwiaW1hZ2UiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJyZXBsYWNlIiwibWFwIiwicmVzdWx0IiwiaSIsIml0ZW0iLCJpbmRleCIsInN2ZzEiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSwrREFBQSxDQUFvQkMsbUVBQXBCLEVBQW1DQyx5RUFBbkM7QUFHQSxJQUFNQyxXQUFXLEdBQUc7QUFDaEJDLE9BQUssRUFBRSw2QkFEUztBQUVoQkMsUUFBTSxFQUFFO0FBQ0pELFNBQUssRUFBRSxXQURIO0FBRUpFLFdBQU8sRUFBRTtBQUFFRixXQUFLLEVBQUUsc0JBQVQ7QUFBaUNHLGFBQU8sRUFBRTtBQUExQyxLQUZMO0FBR0pDLFNBQUssRUFBRTtBQUFFSixXQUFLLEVB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LGNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFvRkksOERBQUMsdURBQUQ7QUFBUSxZQUFNLEVBQUVnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0ZILENBL0ZEOztHQUFNSixPOztLQUFBQSxPOztBQWlHTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdWNjZXNzLXN0b3JpZXMtdGVzdC9bc2x1Z10uMTcyNWRlYzBmN2E5YjM3ZmQ1ZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZW8nO1xyXG5pbXBvcnQgeyBhcG9sbG9DbGllbnQgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyYXBpXCI7XHJcbmltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IHsgSW1Dcm9zcyB9IGZyb20gJ3JlYWN0LWljb25zL2ltJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IENhbnZhcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhbnZhcyc7XHJcbmltcG9ydCB7IHRyaWdnZXIsIGFuaW1hdGUgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2Nyb2xsVHJpZ2dlclwiO1xyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXAvZGlzdC9nc2FwXCI7XHJcbmltcG9ydCB7IENTU1J1bGVQbHVnaW4gfSBmcm9tIFwiZ3NhcC9kaXN0L0NTU1J1bGVQbHVnaW5cIjtcclxuaW1wb3J0IHsgTW90aW9uUGF0aFBsdWdpbiB9IGZyb20gXCJnc2FwL2Rpc3QvTW90aW9uUGF0aFBsdWdpblwiO1xyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKENTU1J1bGVQbHVnaW4sIE1vdGlvblBhdGhQbHVnaW4pO1xyXG5cclxuXHJcbmNvbnN0IGRldGFpbHNEYXRhID0ge1xyXG4gICAgdGl0bGU6IFwiTEVTIENBTVBBR05FUyBHw4lPTE9DQUxJU8OJRVNcIixcclxuICAgIHN0cmF0czoge1xyXG4gICAgICAgIHRpdGxlOiAnU3RyYXTDqWdpZScsXHJcbiAgICAgICAgY29udGV4dDogeyB0aXRsZTogJ0NvbnRleHRlICYgT2JqZWN0aWZzJywgY29udGVudDogJ1BlbmRhbnQgbFxcJ8OpdMOpIGxlcyBjbHVicyBvbnQgcGx1cyBkZSBkaWZmaWN1bHTDqSDDoCByZW1wbGlyIGxldXIgc3RhZGUgY2FyIHVuZSBwYXJ0aWUgZGUgbGV1cnMgXCJjb3JlIGZhbnNcIiBuZSBzb250IHBhcyBzdXIgcGxhY2UuIExlIGNoYWxsZW5nZSBlc3QgZG9uYyBkXFwnYWxsZXIgY2hlcmNoZXIgZGUgbm91dmVsbGVzIGNpYmxlcyBub3RhbW1lbnQgc3VyIGxcXCdhdWRpZW5jZSBUb3VyaXN0ZS4nIH0sXHJcbiAgICAgICAgc3RyYXQ6IHsgdGl0bGU6ICdTdHJhdMOpZ2llIHByb3Bvc8OpZScsIGNvbnRlbnQ6ICdOb3VzIGF2b25zIGRvbmMgcHJvcG9zw6kgZGUgdHJhdmFpbGxlciBzdXIgZGUgbGEgZ8Opb2xvY2FsaXNhdGlvbiBtb2JpbGUgc3VyIGxlcyBsaWV1eCB0b3VyaXN0aXF1ZXMgbGVzIHBsdXMgdmlzaXTDqXMgZGUgbGEgcsOpZ2lvbiBkdSBjbGllbnQgcG91ciBlbnJpY2hpciBsZXVyIGV4cMOpcmllbmNlIGF2ZWMgdW4gbWF0Y2guJyB9LFxyXG4gICAgICAgIGJ1ZGdldDogeyB0aXRsZTogJ0J1ZGdldCcsIGNvbnRlbnQ6ICcxNTAw4oKsIMOgIDMwMDDigqwnIH0sXHJcbiAgICAgICAgdGFyZ2V0OiB7IHRpdGxlOiAnQ2libGVzJywgY29udGVudDogWydWaXNpdGV1cnMgZGVzIGxpZXV4IHRvdXJpc3RpcXVlcyBkZSBsYSByw6lnaW9uIChHw6lvbG9jYWxpc2F0aW9uIE1vYmlsZSknLCAnRmFucyBkZSBydWdieSBldCBkZSBzcG9ydHMgZGUgbGEgcsOpZ2lvbiAoTcOpZGlhcyBQcmVtaXVtcyknXSB9XHJcbiAgICB9LFxyXG4gICAgcmVzdWx0czogW1xyXG4gICAgICAgIHsgdmFsdWU6ICcyN00nLCBzdWJ0ZXh0OiAnZFxcJ2ltcHJlc3Npb25zJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6ICc4Jywgc3VidGV4dDogJ1JPSScgfSxcclxuICAgICAgICB7IHZhbHVlOiAnMjAlJywgc3VidGV4dDogJ25vdXZlYXV4IGNsaWVudHMnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogJzU2TScsIHN1YnRleHQ6ICdkZSBjbGljcycgfVxyXG4gICAgXSxcclxuICAgIHNlY3JldFNhdWNlOiB7XHJcbiAgICAgICAgdGl0bGU6ICdMYSDCqyBzZWNyZXQgc2F1Y2UgwrsgS2xveCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdEaWZmdXNpb24gZGUgPGI+cHVibGljaXTDqXMgZ8Opby1jaWJsw6llczwvYj4gcGVuZGFudCBkZXMgcGxhZ2VzIGhvcmFpcmVzIHNww6ljaWZpcXVlcyBhZmluIGRlIGNvdXZyaXIgbGUgbWF4aW11bSBkZSB0b3VyaXN0ZXMnXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0cmF0ZWd5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHtcclxuICAgICAgICBlYXNlOiBcImxpbmVhclwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGwuZnJvbVRvKFxyXG4gICAgICAgIFwiLm5vdFwiLFxyXG4gICAgICAgIHsgb3BhY2l0eTogMCB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgc3RhZ2dlcjoge1xyXG4gICAgICAgICAgICAgICAgZWFjaDogMC41LFxyXG4gICAgICAgICAgICAgICAgeW95bzogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcclxuICAgICAgICB9XHJcbiAgICApXHJcbiAgICAgICAgLmZyb21UbyhcclxuICAgICAgICAgICAgXCIub3RoZXJcIixcclxuICAgICAgICAgICAgeyBvcGFjaXR5OiAwIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YWdnZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBlYWNoOiAwLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgeW95bzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAuOCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuZnJvbVRvKFwiLmNpYmxlXCIsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAxIH0sIFwiLT0xXCIpXHJcbiAgICAgICAgLmZyb21UbyhcIi5mbGVjaGVcIiwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDEuNSB9KVxyXG4gICAgICAgIC5mcm9tVG8oXHJcbiAgICAgICAgICAgIFwiLmZsZWNoZVwiLFxyXG4gICAgICAgICAgICB7IHN0cm9rZURhc2hvZmZzZXQ6IC0xMDAwIH0sXHJcbiAgICAgICAgICAgIHsgc3Ryb2tlRGFzaG9mZnNldDogMCwgZHVyYXRpb246IDIgfSxcclxuICAgICAgICAgICAgXCItPTAuNVwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5mcm9tVG8oXHJcbiAgICAgICAgICAgIFwiLmZsZWNoZVwiLFxyXG4gICAgICAgICAgICB7IGZpbGw6IFwibm9uZVwiIH0sXHJcbiAgICAgICAgICAgIHsgZmlsbDogXCJ3aGl0ZVwiLCBkdXJhdGlvbjogMSB9LFxyXG4gICAgICAgICAgICBcIi09MC41XCJcclxuICAgICAgICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IERldGFpbHMgPSAoeyBzc2QsIHBhcnRuZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYXZiYXIsIGZvb3RlciB9ID0gc3NkO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYW5pbWF0ZShzdHJhdGVneSgpLCBcIiNzdHJhdGVneVwiLCBcInRvcCBjZW50ZXJcIiwgc3RyYXRlZ3kpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3VjY2Vzcy1zdG9yaWVzLWRldGFpbHMtdGVzdCc+XHJcbiAgICAgICAgICAgIDxTZW8gLz5cclxuICAgICAgICAgICAgPE5hdmJhciBuYXZiYXI9e25hdmJhcn0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhbnZhcyBwYXJhbXM9e2NvbnN0YW50cy5zdWNjZXNzUGFydGljdWxlc30gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlckxlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2RldGFpbHNEYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJMb2dvcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nbG9nby1rbG94JyBzcmM9e25hdmJhci5sb2dvLmltYWdlLnVybH0gYWx0PXtuYXZiYXIubG9nby5pbWFnZS5hbHRlcm5hdGl2ZVRleHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1Dcm9zcyBjb2xvcj0nd2hpdGUnIHNpemU9JzMwcHgnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGFydG5lci5sb2dvfSBjbGFzc05hbWU9J2xvZ28tcGFydG5lcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BhcnRuZXIuaW1hZ2UucmVwbGFjZSgnMzAwLzIwMCcsICc4MDAvNjAwJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0cy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbHNEYXRhLnJlc3VsdHMubWFwKChyZXN1bHQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXN1bHREaXYnIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VsdFZhbHVlJz57cmVzdWx0LnZhbHVlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGV4dFwiPntyZXN1bHQuc3VidGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cmF0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyYXRcIiBpZD1cInN0cmF0ZWd5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyYXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUnPntkZXRhaWxzRGF0YS5zdHJhdHMudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0cmF0LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nc3RyYXQtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdsYWJlbCc+e2RldGFpbHNEYXRhLnN0cmF0cy5jb250ZXh0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGV0YWlsc0RhdGEuc3RyYXRzLmNvbnRleHQuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3N0cmF0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbGFiZWwnPntkZXRhaWxzRGF0YS5zdHJhdHMuc3RyYXQudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkZXRhaWxzRGF0YS5zdHJhdHMuc3RyYXQuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3N0cmF0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbGFiZWwnPntkZXRhaWxzRGF0YS5zdHJhdHMuYnVkZ2V0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGV0YWlsc0RhdGEuc3RyYXRzLmJ1ZGdldC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN0cmF0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2xhYmVsJz57ZGV0YWlsc0RhdGEuc3RyYXRzLnRhcmdldC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXRhaWxzRGF0YS5zdHJhdHMudGFyZ2V0LmNvbnRlbnQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0cmF0QW5pbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uc3RhbnRzLnN2ZzF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3JldFNhdWNlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjcmV0U2F1Y2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUtc2VjcmV0Jz57ZGV0YWlsc0RhdGEuc2VjcmV0U2F1Y2UudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXRhaWxzRGF0YS5zZWNyZXRTYXVjZS5kZXNjcmlwdGlvbiB9fT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdsZWFybi1tb3JlLWJ1dHRvbicgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb3VzIHNvdWhhaXRleiBlbiBzYXZvaXIgcGx1cyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nbGVhcm4tbW9yZS1idXR0b24nIGhyZWY9XCIvbWFya2V0cGxhY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvaXIgdW5lIGF1dHJlIHN1Y2Nlc3Mgc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgZm9vdGVyPXtmb290ZXJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlscztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHBhcnRuZXJzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDQvcGFydG5lcnMnKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XHJcblxyXG4gICAgY29uc3Qgc2x1Z1BhdGhzID0gcGFydG5lcnMubWFwKChwYXJ0bmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7IHNsdWc6IHBhcnRuZXIubmFtZS50b0xvd2VyQ2FzZSgpIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IHNsdWdQYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgR0VUQllTTFVHID0gZ3FsYFxyXG4gICAge1xyXG4gICAgICAgIG1lbnUoaWQ6IDEpIHtcclxuICAgICAgICAgICAgbmF2YmFyIHtcclxuICAgICAgICAgICAgICAgIGxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfaHJlZlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGN0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlcihpZDogMSkge1xyXG4gICAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICAgICAgbG9nb19mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmxvY2tfc29jaWFsX2hlYWRpbmdcclxuICAgICAgICAgICAgICAgIHJlc2VhdV9zb2NpYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25cclxuICAgICAgICAgICAgICAgICAgICBocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuYXZJdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19ocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RfbGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnlfZmxhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZVRleHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbWVudTogeyBuYXZiYXIgfSxcclxuICAgICAgICAgICAgZm9vdGVyOiB7IGZvb3RlciB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogR0VUQllTTFVHLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcGFydG5lcnMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9wYXJ0bmVycycpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcclxuICAgIGNvbnN0IHBhcnRuZXJTdHJpbmcgPSBwYXJhbXMuc2x1ZztcclxuICAgIGNvbnN0IHBhcnRuZXIgPSBwYXJ0bmVycy5maW5kKHBydG4gPT4gcHJ0bi5uYW1lID09PSAocGFydG5lclN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBhcnRuZXJTdHJpbmcuc2xpY2UoMSkpKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgc3NkOiB7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXIsXHJcbiAgICAgICAgICAgICAgICBmb290ZXIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhcnRuZXIsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9