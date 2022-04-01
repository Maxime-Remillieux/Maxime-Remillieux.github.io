self["webpackHotUpdate_N_E"]("pages/offres",{

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
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_offres_ModelCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/offres/ModelCard */ "./components/offres/ModelCard.js");
/* harmony import */ var _components_offres_PackCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/offres/PackCard */ "./components/offres/PackCard.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\pages\\offres.js",
    _s = $RefreshSig$();






 // import ArrowForwardIcon from '@mui/icons-material/ArrowForward';







var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.createTheme)({
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
});
var colors = {
  lightGreen: '#27D6BD',
  darkerGreen: '#2b9384'
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
var StyledSlider = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Slider)(function () {
  return {
    '& .MuiSlider-thumb': {
      height: 28,
      width: 28,
      backgroundColor: '#fff',
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)',
      '&:focus, &:hover, &.Mui-active': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)'
        }
      }
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
        lineNumber: 109,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {
      theme: theme,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {
          navbar: ssd.navbar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pricing-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pricing",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: pricing.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: pricing.subtitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: pricing.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "model",
            children: models.map(function (model, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_ModelCard__WEBPACK_IMPORTED_MODULE_4__.default, {
                model: model
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "services",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "services-top",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: "Des packs adapt\xE9s \xE0 vos besoins"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "offers",
            children: packs.map(function (pack, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_PackCard__WEBPACK_IMPORTED_MODULE_5__.default, {
                pack: pack
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
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
            lineNumber: 141,
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
                  lineNumber: 145,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  children: "400\xA0K\xA0\u20AC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    textAlign: 'center'
                  },
                  children: "annuels"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "Customisation possible\xA0!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
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
                lineNumber: 150,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "premium-content-right",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                children: premiumContent.map(function (content, idx) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaCheckCircle, {
                      size: 20,
                      color: colors.lightGreen
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 118
                    }, _this), content]
                  }, idx, true, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "arguments-offers",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "arguments-title",
            children: "Peu importe l'offre, on vous garantit\xA0:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "blocks",
            children: blocks.map(function (block, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_Block__WEBPACK_IMPORTED_MODULE_2__.default, {
                block: block
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "discover",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Envie d'en d\xE9couvrir plus\xA0?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
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
            lineNumber: 175,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
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
                  lineNumber: 196,
                  columnNumber: 74
                }, this), " par mois ?"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  marginBottom: '30px'
                },
                children: "(Estimez en moyenne par mois)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
                value: valueSlider,
                onChange: handleChange,
                valueLabelDisplay: "on"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 195,
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
                  lineNumber: 202,
                  columnNumber: 74
                }, this), " allez-vous connecter ?"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  marginBottom: '30px'
                },
                children: "(Le nombre de comptes au sein d'un m\xEAme banque est illimit\xE9)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Slider, {
                value: valueSlider2,
                onChange: handleChange2,
                valueLabelDisplay: "on",
                min: 1,
                max: 20
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 201,
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
                lineNumber: 207,
                columnNumber: 40
              }, this), " vos services."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "subscription",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "price",
              children: "19\u20AC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ht",
              children: "HT/Mois"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: ["\u2713 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "Acc\xE8s \xE0 l'ensemble des fonctionnalit\xE9s"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 39
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "\u2713 Support client"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "\u2713 \xC9quip\xE9 d\xE9di\xE9e au lancement et \xE0 l'accompagnement"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 213,
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
              lineNumber: 218,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb2ZmcmVzLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlVGhlbWUiLCJzdGF0dXMiLCJkYW5nZXIiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJkYXJrZXIiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJuZXV0cmFsIiwiY29sb3JzIiwibGlnaHRHcmVlbiIsImRhcmtlckdyZWVuIiwiYmxvY2tzIiwidGl0bGUiLCJjb250ZW50IiwiaWNvbiIsIkZhRGVza3RvcCIsIkZhTGF5ZXJHcm91cCIsInZhcmlhbnQiLCJGYVBhaW50QnJ1c2giLCJwcmljaW5nIiwic3VidGl0bGUiLCJ0ZXh0IiwibW9kZWxzIiwidGFnIiwiaW1hZ2UiLCJzcGVjcyIsImNvbG9yIiwicGFja3MiLCJkZXNjcmlwdGlvbiIsImJ1ZGdldCIsInByZW1pdW1Db250ZW50IiwiU3R5bGVkU2xpZGVyIiwic3R5bGVkIiwiU2xpZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJIb21lIiwic3NkIiwidXNlU3RhdGUiLCJ2YWx1ZVNsaWRlciIsInNldFZhbHVlU2xpZGVyIiwidmFsdWVTbGlkZXIyIiwic2V0VmFsdWVTbGlkZXIyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5ld1ZhbHVlIiwiaGFuZGxlQ2hhbmdlMiIsIm5hdmJhciIsIm1hcCIsIm1vZGVsIiwiaWR4IiwicGFjayIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiYmdjb2xvciIsInBhZGRpbmciLCJtYXJnaW4iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImdhcCIsImJsb2NrIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtB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MERBQUQ7QUFBUSxxQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGtCQUFJLEVBQUMsR0FBakM7QUFBcUMsZ0JBQUUsRUFBRTtBQUNyQytDLHVCQUFPLEVBQUVoRCxNQUFNLENBQUNDLFVBRHFCO0FBRXJDLDJCQUFXO0FBQUUrQyx5QkFBTyxFQUFFaEQsTUFBTSxDQUFDRTtBQUFsQjtBQUYwQixlQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEhIOztHQXZJdUI0QixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29mZnJlcy5lMmNkM2YxNDY0NjIzNTkyYzE3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9vZmZyZXMvQmxvY2snXHJcbmltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIHdpdGhUaGVtZSB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgeyBGYURlc2t0b3AsIEZhTGF5ZXJHcm91cCwgRmFQYWludEJydXNoLCBGYUNoZWNrQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbi8vIGltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcclxuaW1wb3J0IHsgYXBvbGxvQ2xpZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0cmFwaVwiO1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IE1vZGVsQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL29mZnJlcy9Nb2RlbENhcmQnXHJcbmltcG9ydCBQYWNrQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL29mZnJlcy9QYWNrQ2FyZCdcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gICAgc3RhdHVzOiB7XHJcbiAgICAgICAgZGFuZ2VyOiAnI2U1M2UzZScsXHJcbiAgICB9LFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICAgICAgbWFpbjogJyMzMDU1RDMnLFxyXG4gICAgICAgICAgICBkYXJrZXI6ICcjMDUzZTg1JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgICAgICBtYWluOiAncmdiYSgyNTMsIDI1NCwgMjU1LCAwLjE1KScsXHJcbiAgICAgICAgICAgIGNvbnRyYXN0VGV4dDogJ3doaXRlJyxcclxuICAgICAgICAgICAgZGFya2VyOiAnIzA1M2U4NScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXV0cmFsOiB7XHJcbiAgICAgICAgICAgIG1haW46ICcjNjQ3NDhCJyxcclxuICAgICAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgY29sb3JzID0ge1xyXG4gICAgbGlnaHRHcmVlbjogJyMyN0Q2QkQnLFxyXG4gICAgZGFya2VyR3JlZW46ICcjMmI5Mzg0J1xyXG59XHJcblxyXG5jb25zdCBibG9ja3MgPSBbXHJcbiAgICB7IHRpdGxlOiAnU3VwcG9ydCBkw6lkacOpJywgY29udGVudDogWyfinJMgRkFRJywgJ+KckyBSZXNzb3VyY2VzJywgJ+KckyBDaGF0Ym90J10sIGljb246IEZhRGVza3RvcCB9LFxyXG4gICAgeyB0aXRsZTogJ09ubGluZSBSZXBvcnRpbmcnLCBjb250ZW50OiAnVG91cyB2b3MgcsOpc3VsdGF0cyBkZSBjYW1wYWduZSwgY3Jvc3MgcGxhdHRmb3JtcyBldCBjcm9zcyBkZXZpY2VzLCBhdSBjb2V1ciBkXFwndW5lIG3Dqm1lIGluZmVyZmFjZSBwZXJzb25uYWxpc2FibGUnLCBpY29uOiBGYUxheWVyR3JvdXAsIHZhcmlhbnQ6IGNvbG9ycy5saWdodEdyZWVuIH0sXHJcbiAgICB7IHRpdGxlOiAnTWFya2V0cGxhY2UnLCBjb250ZW50OiBbJ+KckyBJbmZsdWVuY2UnLCAn4pyTIFZSICYgSW4tR2FtaW5nLUFkcycsICfinJMgRm9ybWF0cyBpbm5vdmFudHMnLCAn4pyTIEFzc2V0cyBjcsOpYXMnXSwgaWNvbjogRmFQYWludEJydXNoIH0sXHJcbiAgICB7IHRpdGxlOiAnUsOpYWN0aXZpdMOpJywgY29udGVudDogJ0xhbmNlbWVudCBldCBvcHRpbWlzYXRpb25zIGRlIGNhbXBhZ25lcyA3LzcnLCBpY29uOiBGYURlc2t0b3AgfSxcclxuICAgIHsgdGl0bGU6ICdFeHBlcnRpc2UnLCBjb250ZW50OiAnVW5lIHNxdWFkIG11bHRpLWNlcnRpZmnDqWUnLCBpY29uOiBGYUxheWVyR3JvdXAsIHZhcmlhbnQ6IGNvbG9ycy5saWdodEdyZWVuIH0sXHJcbiAgICB7IHRpdGxlOiAnUGVyZm9ybWFuY2UnLCBjb250ZW50OiAnTGVzIGFjdGl2YXRpb25zIGxlcyBwbHVzIHBlcmZvcm1hbnRlcyBzZWxvbiB2b3Mgb2JqZWN0aWZzJywgaWNvbjogRmFQYWludEJydXNoIH0sXHJcbl1cclxuXHJcblxyXG5jb25zdCBwcmljaW5nID0geyB0aXRsZTogJ1ByaWNpbmcnLCBzdWJ0aXRsZTogJ0F1Y3VuIGhvbm9yYWlyZSwgYXVjdW4gZnJhaXMsIGF1Y3VuZSBjb21taXNzaW9uLCB0b3V0IGVzdCBjb21wcmlzIGRhbnMgbGUgcHJpeCAhJywgdGV4dDogJ1VuIHRhcmlmIHVuaXF1ZSBjb21wcmVuYW50IGxcXCdhY2hhdCBkXFwnZXNwYWNlIG3DqWRpYXMsIG5vcyBob25vcmFpcmVzLCBub3MgZnJhaXMgZFxcJ2FkLXNlcnZpbmcsIGxcXCdhdWRpdCBkZXMgY3LDqWFzLCBsZSB0ZW1wcyBodW1haW4gcGFzc8OpIHN1ciBsYSBjYW1wYWduZSwgbGVzIGZlZXMgRFNQLi4uIE9wdGV6IHBvdXIgbGUgYWxsLWluY2x1c2l2ZSAhJyB9XHJcblxyXG5jb25zdCBtb2RlbHMgPSBbXHJcbiAgICB7IHRhZzogJ01pc2UgZW4gcGxhY2UnLCBpbWFnZTogJy9pbWFnZXMvb2ZmcmVzL3BheV9vbmxpbmUuc3ZnJywgdGl0bGU6ICdVbiBtb2TDqGxlIHNpbXBsaWZpw6knLCBzcGVjczogWydQdWJsaXNoaW5nJywgJ1RyYWRpbmcnLCAnQ3VzdG9tIFN1Y2Nlc3MgTWFuYWdlbWVudCcsICdUcmFmZmljIE1hbmFnZW1lbnQnLCAnQ29uc3VsdGluZycsICdNYXJrZXRwbGFjZScsICc9PiA8Yj4xIHNldWw8L2I+IGNvbnRhY3QgcG91ciB0b3VzIHZvcyBiZXNvaW5zJ10sIGNvbG9yOiAnIzI3RDZCRCcgfSxcclxuICAgIHsgdGFnOiAnRnJhaXMgdGVjaG5vbG9naXF1ZXMnLCBpbWFnZTogJy9pbWFnZXMvb2ZmcmVzL3VuZHJhdy5zdmcnLCB0aXRsZTogJ0F1Y3VuIGZyYWlzIGFkZGl0aW9ubmVscycsIHNwZWNzOiBbJzAgZnJhaXMgZFxcJ0F1ZGl0IGRlIGNyw6lhcycsICcwIGZyYWlzIGRcXCdBZHNlcnZpbmcnLCAnMCBmcmFpcyBkZSBEU1AnLCAnMCBmcmFpcyBkZSBEYXRhJywgJzAgZnJhaXMgZGUgY2libGFnZSBjb250ZXh0dWVsJywgJzAgZnJhaXMgZGUgcGFydGVuYWlyZXMgZGl2ZXJzZXMnXSwgY29sb3I6ICcjNTlBMEQ4JyB9LFxyXG4gICAgeyB0YWc6ICdTb3VwbGVzc2UnLCBpbWFnZTogJy9pbWFnZXMvb2ZmcmVzL3NoYXJlZF9nb2Fscy5zdmcnLCB0aXRsZTogJ1NhbnMgZW5nYWdlbWVudCcsIHNwZWNzOiBbJ0NhbXBhZ25lcyDDoCBsYSBwZXJmb3JtYW5jZScsICdUZXN0ICYgTGVhcm4nLCAnQWdpbGl0w6kgJiBSw6lhY3Rpdml0w6knXSwgY29sb3I6ICcjODk2QUY0JyB9LFxyXG5dXHJcblxyXG5jb25zdCBwYWNrcyA9IFtcclxuICAgIHsgdGl0bGU6ICdEaWdpdGFsIE5vbWFkJywgZGVzY3JpcHRpb246ICdQb3VyIGNldXggcXVpIHZldWxlbnQgdW5lIGV4cMOpcmllbmNlIDEwMCAlIFNlbGYtU2VydmljZScsIGJ1ZGdldDogJycsIGNvbnRlbnQ6IFsnTGFuY2VtZW50IGRlIGNhbXBhZ25lcyBlbiBzZWxmIHNlcnZpY2UnLCAnVG91cyBsZXMgaW52ZW50YWlyZXMgcHJvZ3JhbW1hdGlxdWVzJywgJ1N0cmF0w6lnaWVzIGNsw6kgZW4gbWFpbiBzZWxvbiB2b3Mgb2JqZWN0aWZzJywgJ1RpY2tldGluZyBTdXBwb3J0J10gfSxcclxuICAgIHsgdGl0bGU6ICdEaWdpdGFsIEV4cGVydCcsIGRlc2NyaXB0aW9uOiAnUG91ciBjZXV4IHF1aSB2ZXVsZW50IGxlcyBtZWlsbGV1cnMgZXhwZXJ0cycsIGJ1ZGdldDogJ8OAIFBBUlRJUiBERSAxMDAgSyBBTk5VRUxTJywgY29udGVudDogWydBY2NvdW50IFN0cmF0ZWdpc3QgU2VuaW9yIMOgIHZvdHJlIHNlcnZpY2UnLCAnVW4gZGlyZWN0ZXVyIGNvbnNlaWwgcHLDqXNlbnQgc3VyIGxlcyBtZWV0aW5ncyBzdHJhdMOpZ2lxdWVzJywgJ0EvQiBUZXN0aW5nIGV0IG11bHRpLXNjw6luYXJpc2F0aW9uIGRlcyBjYW1wYWduZXMnLCAnQsOqdGEtVGVzdGluZyBlbiBleGNsdXNpdml0w6kgZGVzIGRlcm5pw6hyZXMgaW5ub3ZhdGlvbnMgZGlnaXRhbGVzJywgJ0FjY8OocyDDoCBub3RyZSBzcXVhZCBkXFwnZXhwZXJ0cyBzZWxvbiB2b3MgYmVzb2lucyAoUHVibGlzaGluZywgQXR0cmlidXRpb24sIFRyYWZpYywgU0VBLCBTb2NpYWwuLi4pJ10sIHZhcmlhbnQ6IGNvbG9ycy5saWdodEdyZWVuIH0sXHJcbiAgICB7IHRpdGxlOiAnRGlnaXRhbCBGcmllbmQnLCBkZXNjcmlwdGlvbjogJ1BvdXIgY2V1eCBxdWkgdmV1bGVudCBkZSBsXFwnYWlkZSBzdXIgbGV1cnMgc3RyYXTDqWdpZXMgZGlnaXRhbGVzJywgYnVkZ2V0OiAnw4AgUEFSVElSIERFIDI1IEsgQU5OVUVMUycsIGNvbnRlbnQ6IFsnQWNjb3VudCBTdHJhdGVnaXN0IGTDqWRpw6knLCAnVG91dCBub3RyZSBjYXRhbG9ndWUgcHJvZHVpdHMnLCAnUmVjb21tYW5kYXRpb25zIHN0cmF0w6lnaXF1ZXMgc3VyIG1lc3VyZScsICdBY2NvbXBhZ2VtZW50IG91IGTDqXZlbG9wcGVtZW50IGRlcyBhc3NldHMgY3LDqWFzJywgJ1N1cHBvcnQgdGVjaG5pcXVlIGh1bWFpbiBzdXIgbGUgdHJhY2tpbmcnXSB9XHJcbl1cclxuXHJcbmNvbnN0IHByZW1pdW1Db250ZW50ID0gW1xyXG4gICAgJ0xlcyBtZWlsbGV1cnMgQWNjb3VudCBTdHJhdGVnaXN0cyAmIEtleSBBY2NvdW50IE1hbmFnZXJzJyxcclxuICAgICdOb3RyZSBTcXVhZCBkXFwnZXhwZXJ0cyDDoCB2b3RyZSBzZXJ2aWNlIChQdWJsaXNoaW5nLCBUcmFmaWMsIFNFQSwgQXNzZXRzIGNyw6lhcy4uLiknLFxyXG4gICAgJ0EvQiBUZXN0aW5nIGV0IG11bHRpLXNjw6luYXJpc2F0aW9uIGRlcyBjYW1wYWduZXMnLFxyXG4gICAgJ01lZGlhIFBsYW5uaW5nIGV0IEF1ZGllbmNlcyBQbGFubmluZycsXHJcbiAgICAnQW5hbHlzZSBjb25jdXJlbnRpZWxsZScsXHJcbiAgICAnQmVuY2htYXJrIFBlcmZvcm1hbmNlcyBldCDDiXR1ZGVzJyxcclxuICAgICdDb25zdWx0aW5nIChDb250ZW50cywgU3RyYXTDqWdpZSwgU0VPLi4pJyxcclxuICAgICdGb3JtYXRpb24nXHJcbl1cclxuXHJcbmNvbnN0IFN0eWxlZFNsaWRlciA9IHN0eWxlZChTbGlkZXIpKCgpID0+ICh7XHJcbiAgICAnJiAuTXVpU2xpZGVyLXRodW1iJzoge1xyXG4gICAgICAgIGhlaWdodDogMjgsXHJcbiAgICAgICAgd2lkdGg6IDI4LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIGJveFNoYWRvdzogJzAgM3B4IDFweCByZ2JhKDAsMCwwLDAuMSksMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4xMyksMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4wMiknLFxyXG4gICAgICAgICcmOmZvY3VzLCAmOmhvdmVyLCAmLk11aS1hY3RpdmUnOiB7XHJcbiAgICAgICAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICAgICAgICAnMCAzcHggMXB4IHJnYmEoMCwwLDAsMC4xKSwwIDRweCA4cHggcmdiYSgwLDAsMCwwLjMpLDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDIpJyxcclxuICAgICAgICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcclxuICAgICAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xyXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgM3B4IDFweCByZ2JhKDAsMCwwLDAuMSksMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4xMyksMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4wMiknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHNzZCB9KSB7XHJcbiAgICBjb25zdCBbdmFsdWVTbGlkZXIsIHNldFZhbHVlU2xpZGVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3ZhbHVlU2xpZGVyMiwgc2V0VmFsdWVTbGlkZXIyXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlU2xpZGVyKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZTIgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZVNsaWRlcjIobmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1vZmZyZXMnPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5LbG94IHwgTm9zIG9mZnJlczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgbmF2YmFyPXtzc2QubmF2YmFyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3ByaWNpbmcudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cHJpY2luZy5zdWJ0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3ByaWNpbmcudGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZWxzLm1hcCgobW9kZWwsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RlbENhcmQga2V5PXtpZHh9IG1vZGVsPXttb2RlbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlcy10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5EZXMgcGFja3MgYWRhcHTDqXMgw6Agdm9zIGJlc29pbnM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYWNrcy5tYXAoKHBhY2ssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWNrQ2FyZCBwYWNrPXtwYWNrfSBrZXk9e2lkeH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbWl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFNpemU6ICc1MHB4JyB9fT5FbnZpZSBkJ3VuZSBvZmZyZSBQcmVtaXVtwqA/PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVtaXVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmVtaXVtLWNvbnRlbnQtbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+w4AgcGFydGlyIGRlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjQwMMKgS8Kg4oKsPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PmFubnVlbHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkN1c3RvbWlzYXRpb24gcG9zc2libGXCoCE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgc3g9e3sgYmdjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sIGNvbG9yOiAnd2hpdGUnLCAnJjpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZGFya2VyR3JlZW4gfSwgcGFkZGluZzogJzE1cHgnLCBtYXJnaW46ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW4gc2F2b2lyIHBsdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZW1pdW0tY29udGVudC1yaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlbWl1bUNvbnRlbnQubWFwKChjb250ZW50LCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxMHB4JyB9fSBrZXk9e2lkeH0+PEZhQ2hlY2tDaXJjbGUgc2l6ZT17MjB9IGNvbG9yPXtjb2xvcnMubGlnaHRHcmVlbn0gLz57Y29udGVudH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyZ3VtZW50cy1vZmZlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nYXJndW1lbnRzLXRpdGxlJz5QZXUgaW1wb3J0ZSBsJ29mZnJlLCBvbiB2b3VzIGdhcmFudGl0wqA6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9ja3MubWFwKChibG9jaywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrIGJsb2NrPXtibG9ja30ga2V5PXtpZHh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5FbnZpZSBkJ2VuIGTDqWNvdXZyaXIgcGx1c8KgPzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYW5hbHl0aWNzLWJ1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhcmtlckdyZWVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5Db250YWN0ZXotbm91c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVycy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnMtY29udGVudC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1sYWJlbCc+Q29tYmllbiBkZSA8c3BhbiBzdHlsZT17eyBjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4gfX0+ZmFjdHVyZXMgZm91cm5pc3NldXJzIHRyYWl0ZXotdm91czwvc3Bhbj4gcGFyIG1vaXMgPzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMzBweCcgfX0+KEVzdGltZXogZW4gbW95ZW5uZSBwYXIgbW9pcyk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFNsaWRlciB2YWx1ZT17dmFsdWVTbGlkZXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlTGFiZWxEaXNwbGF5PVwib25cIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU2xpZGVyIHZhbHVlPXt2YWx1ZVNsaWRlcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWVMYWJlbERpc3BsYXk9XCJvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVycy1jb250ZW50LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyLWxhYmVsJz5Db21iaWVuIGRlIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBjb2xvcnMubGlnaHRHcmVlbiB9fT5iYW5xdWVzPC9zcGFuPiBhbGxlei12b3VzIGNvbm5lY3RlciA/PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICczMHB4JyB9fT4oTGUgbm9tYnJlIGRlIGNvbXB0ZXMgYXUgc2VpbiBkJ3VuIG3Dqm1lIGJhbnF1ZSBlc3QgaWxsaW1pdMOpKTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgdmFsdWU9e3ZhbHVlU2xpZGVyMn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTJ9IHZhbHVlTGFiZWxEaXNwbGF5PVwib25cIiBtaW49ezF9IG1heD17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVycy1jb250ZW50LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWl0ZXMgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGNvbG9ycy5saWdodEdyZWVuIH19PiBjb2xsYWJvcmVyPC9zcGFuPiB2b3Mgc2VydmljZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Vic2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJpY2UnPjE54oKsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naHQnPkhUL01vaXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+4pyTIDxiPkFjY8OocyDDoCBsJ2Vuc2VtYmxlIGRlcyBmb25jdGlvbm5hbGl0w6lzPC9iPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuKckyBTdXBwb3J0IGNsaWVudDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuKckyDDiXF1aXDDqSBkw6lkacOpZSBhdSBsYW5jZW1lbnQgZXQgw6AgbCdhY2NvbXBhZ25lbWVudDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGhyZWY9Jy8nIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7IGJnY29sb3I6IGNvbG9ycy5kYXJrZXJHcmVlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEw6ltYXJyZXIgbWFpbnRlbmFudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IEdFVEJZU0xVRyA9IGdxbGBcclxuICAgIHtcclxuICAgICAgICBtZW51KGlkOiAxKSB7XHJcbiAgICAgICAgICAgIG5hdmJhciB7XHJcbiAgICAgICAgICAgICAgICBsb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZVRleHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2hyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjdGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIoaWQ6IDEpIHtcclxuICAgICAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgIGxvZ29fZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZVRleHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJsb2NrX3NvY2lhbF9oZWFkaW5nXHJcbiAgICAgICAgICAgICAgICByZXNlYXVfc29jaWFsIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmF2SXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfaHJlZlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0X2xhbmd1YWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5X2ZsYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG1lbnU6IHsgbmF2YmFyIH0sXHJcbiAgICAgICAgICAgIGZvb3RlcjogeyBmb290ZXIgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICAgICAgcXVlcnk6IEdFVEJZU0xVRyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgc3NkOiB7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXIsXHJcbiAgICAgICAgICAgICAgICBmb290ZXIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==