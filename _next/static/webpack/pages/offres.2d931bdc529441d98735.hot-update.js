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
var iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
var marks = [{
  value: 0
}, {
  value: 20
}, {
  value: 37
}, {
  value: 100
}];
var IOSSlider = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Slider)(function (_ref) {
  var theme = _ref.theme;
  return {
    color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
    height: 8,
    padding: '15px 0',
    '& .MuiSlider-thumb': {
      height: 28,
      width: 28,
      backgroundColor: '#fff',
      boxShadow: iOSBoxShadow,
      '&:focus, &:hover, &.Mui-active': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: iOSBoxShadow
        }
      }
    },
    '& .MuiSlider-valueLabel': {
      fontSize: 12,
      fontWeight: 'normal',
      top: -6,
      backgroundColor: colors.lightGreen,
      color: theme.palette.text.primary,
      '&:before': {
        display: 'none'
      },
      '& *': {
        background: 'transparent',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000'
      }
    },
    '& .MuiSlider-track': {
      border: 'none',
      height: 8,
      borderRadius: 4
    },
    '& .MuiSlider-rail': {
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
      height: 8
    },
    '& .MuiSlider-mark': {
      backgroundColor: '#bfbfbf',
      height: 20,
      width: 1,
      '&.MuiSlider-markActive': {
        opacity: 1,
        backgroundColor: 'currentColor'
      }
    }
  };
});
var StyledSlider = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Slider)(function () {
  return {
    '& .MuiSlider-thumb': {
      height: 32,
      width: 32,
      backgroundColor: '#fff',
      marginTop: 0,
      border: 5,
      borderColor: colors.lightGreen,
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
function Home(_ref2) {
  _s();

  var _this = this;

  var ssd = _ref2.ssd;

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
        lineNumber: 209,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {
      theme: theme,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {
          navbar: ssd.navbar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pricing-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pricing",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: pricing.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: pricing.subtitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: pricing.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "model",
            children: models.map(function (model, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_ModelCard__WEBPACK_IMPORTED_MODULE_4__.default, {
                model: model
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "services",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "services-top",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: "Des packs adapt\xE9s \xE0 vos besoins"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "offers",
            children: packs.map(function (pack, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_PackCard__WEBPACK_IMPORTED_MODULE_5__.default, {
                pack: pack
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 229,
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
            lineNumber: 241,
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
                  lineNumber: 245,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  children: "400\xA0K\xA0\u20AC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    textAlign: 'center'
                  },
                  children: "annuels"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "Customisation possible\xA0!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
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
                lineNumber: 250,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 243,
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
                      lineNumber: 257,
                      columnNumber: 118
                    }, _this), content]
                  }, idx, true, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "arguments-offers",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "arguments-title",
            children: "Peu importe l'offre, on vous garantit\xA0:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "blocks",
            children: blocks.map(function (block, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_Block__WEBPACK_IMPORTED_MODULE_2__.default, {
                block: block
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "discover",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Envie d'en d\xE9couvrir plus\xA0?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
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
            lineNumber: 275,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 273,
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
                  lineNumber: 296,
                  columnNumber: 74
                }, this), " par mois ?"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 296,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "(Estimez en moyenne par mois)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
                id: "styled-slider",
                value: valueSlider,
                onChange: handleChange,
                valueLabelDisplay: "on"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 295,
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
                  lineNumber: 302,
                  columnNumber: 74
                }, this), " allez-vous connecter ?"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  marginBottom: '30px'
                },
                children: "(Le nombre de comptes au sein d'un m\xEAme banque est illimit\xE9)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IOSSlider, {
                value: valueSlider2,
                onChange: handleChange2,
                valueLabelDisplay: "on",
                marks: marks
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 304,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 301,
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
                lineNumber: 307,
                columnNumber: 40
              }, this), " vos services."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "subscription",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "price",
              children: "19\u20AC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ht",
              children: "HT/Mois"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: ["\u2713 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "Acc\xE8s \xE0 l'ensemble des fonctionnalit\xE9s"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 314,
                  columnNumber: 39
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 314,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "\u2713 Support client"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "\u2713 \xC9quip\xE9 d\xE9di\xE9e au lancement et \xE0 l'accompagnement"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 313,
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
              lineNumber: 318,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 207,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb2ZmcmVzLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlVGhlbWUiLCJzdGF0dXMiLCJkYW5nZXIiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJkYXJrZXIiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJuZXV0cmFsIiwiY29sb3JzIiwibGlnaHRHcmVlbiIsImRhcmtlckdyZWVuIiwidmlvbGV0IiwiYmxvY2tzIiwidGl0bGUiLCJjb250ZW50IiwiaWNvbiIsIkZhRGVza3RvcCIsIkZhTGF5ZXJHcm91cCIsInZhcmlhbnQiLCJGYVBhaW50QnJ1c2giLCJwcmljaW5nIiwic3VidGl0bGUiLCJ0ZXh0IiwibW9kZWxzIiwidGFnIiwiaW1hZ2UiLCJzcGVjcyIsImNvbG9yIiwicGFja3MiLCJkZXNjcmlwdGlvbiIsImJ1ZGdldCIsInByZW1pdW1Db250ZW50IiwiaU9TQm94U2hhZG93IiwibWFya3MiLCJ2YWx1ZSIsIklPU1NsaWRlciIsInN0eWxlZCIsIlNsaWRlciIsIm1vZGUiLCJoZWlnaHQiLCJwYWRkaW5nIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0b3AiLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm9wYWNpdHkiLCJTdHlsZWRTbGlkZXIiLCJtYXJnaW5Ub3AiLCJib3JkZXJDb2xvciIsIkhvbWUiLCJzc2QiLCJ1c2VTdGF0ZSIsInZhbHVlU2xpZGVyIiwic2V0VmFsdWVTbGlkZXIiLCJ2YWx1ZVNsaWRlcjIiLCJzZXRWYWx1ZVNsaWRlcjIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmV3VmFsdWUiLCJoYW5kbGVDaGFuZ2UyIiwibmF2YmFyIiwibWFwIiwibW9kZWwiLCJpZHgiLCJwYWNrIiwidGV4dEFsaWduIiwiYmdjb2xvciIsIm1hcmdpbiIsImFsaWduSXRlbXMiLCJnYXAiLCJibG9jayIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsaUVBQVcsQ0FBQztBQUN0QkMsUUFBTSxFQUFFO0FBQ0pDLFVBQU0sRUFBRTtBQURKLEdBRGM7QUFJdEJDLFNBQU8sRUFBRTtBQUNMQyxXQUFPLEVBQUU7QUFDTEMsVUFBSSxFQUFFLFNBREQ7QUFFTEMsWUFBTSxFQUFFO0FBRkgsS0FESjtBQUtMQyxhQUFTLEVBQUU7QUFDUEYsVUFBSSxFQUFFLDJCQURDO0FBRVBHLGtCQUFZLEVBQUUsT0FGUDtBQUdQRixZQUFNLEVBQUU7QUFIRCxLQUxOO0FBVUxHLFdBQU8sRUFBRTtBQUNMSixVQUFJLEVBQUUsU0FERDtBQUVMRyxrQkFBWSxFQUFFO0FBRlQ7QUFWSjtBQUphLENBQUQsQ0FBekI7QUFxQkEsSUFBTUUsTUFBTSxHQUFHO0FBQ1hDLFlBQVUsRUFBRSxTQUREO0FBRVhDLGFBQVcsRUFBRSxTQUZGO0FBR1hDLFFBQU0sRUFBRTtBQUhHLENBQWY7QUFNQSxJQUFNQyxNQUFNLEdBQUcsQ0FDWDtBQUFFQyxPQUFLLEVBQUUsZUFBVDtBQUEwQkMsU0FBTyxFQUFFLENBQUMsT0FBRCxFQUFVLGNBQVYsRUFBMEIsV0FBMUIsQ0FBbkM7QUFBMkVDLE1BQUksRUFBRUMscURBQVNBO0FBQTFGLENBRFcsRUFFWDtBQUFFSCxPQUFLLEVBQUUsa0JBQVQ7QUFBNkJDLFNBQU8sRUFBRSxtSEFBdEM7QUFBMkpDLE1BQUksRUFBRUUsd0RBQWpLO0FBQStLQyxTQUFPLEVBQUVWLE1BQU0sQ0FBQ0M7QUFBL0wsQ0FGVyxFQUdYO0FBQUVJLE9BQUssRUFBRSxhQUFUO0FBQXdCQyxTQUFPLEVBQUUs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEosZUFRSSw4REFBQywwREFBRDtBQUFRLHFCQUFPLEVBQUMsV0FBaEI7QUFBNEIsa0JBQUksRUFBQyxHQUFqQztBQUFxQyxnQkFBRSxFQUFFO0FBQ3JDK0QsdUJBQU8sRUFBRWhFLE1BQU0sQ0FBQ0MsVUFEcUI7QUFFckMsMkJBQVc7QUFBRStELHlCQUFPLEVBQUVoRSxNQUFNLENBQUNFO0FBQWxCO0FBRjBCLGVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9FSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0SEg7O0dBdkl1QjZDLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb2ZmcmVzLjJkOTMxYmRjNTI5NDQxZDk4NzM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBCbG9jayBmcm9tICcuLi9jb21wb25lbnRzL29mZnJlcy9CbG9jaydcclxuaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcydcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgd2l0aFRoZW1lIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXHJcbmltcG9ydCB7IEZhRGVza3RvcCwgRmFMYXllckdyb3VwLCBGYVBhaW50QnJ1c2gsIEZhQ2hlY2tDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuLy8gaW1wb3J0IEFycm93Rm9yd2FyZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xyXG5pbXBvcnQgeyBhcG9sbG9DbGllbnQgfSBmcm9tIFwiLi4vc2VydmljZXMvc3RyYXBpXCI7XHJcbmltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgTW9kZWxDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvb2ZmcmVzL01vZGVsQ2FyZCdcclxuaW1wb3J0IFBhY2tDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvb2ZmcmVzL1BhY2tDYXJkJ1xyXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgICBzdGF0dXM6IHtcclxuICAgICAgICBkYW5nZXI6ICcjZTUzZTNlJyxcclxuICAgIH0sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgICAgICBtYWluOiAnIzMwNTVEMycsXHJcbiAgICAgICAgICAgIGRhcmtlcjogJyMwNTNlODUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgICAgIG1haW46ICdyZ2JhKDI1MywgMjU0LCAyNTUsIDAuMTUpJyxcclxuICAgICAgICAgICAgY29udHJhc3RUZXh0OiAnd2hpdGUnLFxyXG4gICAgICAgICAgICBkYXJrZXI6ICcjMDUzZTg1JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5ldXRyYWw6IHtcclxuICAgICAgICAgICAgbWFpbjogJyM2NDc0OEInLFxyXG4gICAgICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgICBsaWdodEdyZWVuOiAnIzI3RDZCRCcsXHJcbiAgICBkYXJrZXJHcmVlbjogJyMyYjkzODQnLFxyXG4gICAgdmlvbGV0OiAnIzg5NmFmNCdcclxufVxyXG5cclxuY29uc3QgYmxvY2tzID0gW1xyXG4gICAgeyB0aXRsZTogJ1N1cHBvcnQgZMOpZGnDqScsIGNvbnRlbnQ6IFsn4pyTIEZBUScsICfinJMgUmVzc291cmNlcycsICfinJMgQ2hhdGJvdCddLCBpY29uOiBGYURlc2t0b3AgfSxcclxuICAgIHsgdGl0bGU6ICdPbmxpbmUgUmVwb3J0aW5nJywgY29udGVudDogJ1RvdXMgdm9zIHLDqXN1bHRhdHMgZGUgY2FtcGFnbmUsIGNyb3NzIHBsYXR0Zm9ybXMgZXQgY3Jvc3MgZGV2aWNlcywgYXUgY29ldXIgZFxcJ3VuZSBtw6ptZSBpbmZlcmZhY2UgcGVyc29ubmFsaXNhYmxlJywgaWNvbjogRmFMYXllckdyb3VwLCB2YXJpYW50OiBjb2xvcnMubGlnaHRHcmVlbiB9LFxyXG4gICAgeyB0aXRsZTogJ01hcmtldHBsYWNlJywgY29udGVudDogWyfinJMgSW5mbHVlbmNlJywgJ+KckyBWUiAmIEluLUdhbWluZy1BZHMnLCAn4pyTIEZvcm1hdHMgaW5ub3ZhbnRzJywgJ+KckyBBc3NldHMgY3LDqWFzJ10sIGljb246IEZhUGFpbnRCcnVzaCB9LFxyXG4gICAgeyB0aXRsZTogJ1LDqWFjdGl2aXTDqScsIGNvbnRlbnQ6ICdMYW5jZW1lbnQgZXQgb3B0aW1pc2F0aW9ucyBkZSBjYW1wYWduZXMgNy83JywgaWNvbjogRmFEZXNrdG9wIH0sXHJcbiAgICB7IHRpdGxlOiAnRXhwZXJ0aXNlJywgY29udGVudDogJ1VuZSBzcXVhZCBtdWx0aS1jZXJ0aWZpw6llJywgaWNvbjogRmFMYXllckdyb3VwLCB2YXJpYW50OiBjb2xvcnMubGlnaHRHcmVlbiB9LFxyXG4gICAgeyB0aXRsZTogJ1BlcmZvcm1hbmNlJywgY29udGVudDogJ0xlcyBhY3RpdmF0aW9ucyBsZXMgcGx1cyBwZXJmb3JtYW50ZXMgc2Vsb24gdm9zIG9iamVjdGlmcycsIGljb246IEZhUGFpbnRCcnVzaCB9LFxyXG5dXHJcblxyXG5cclxuY29uc3QgcHJpY2luZyA9IHsgdGl0bGU6ICdQcmljaW5nJywgc3VidGl0bGU6ICdBdWN1biBob25vcmFpcmUsIGF1Y3VuIGZyYWlzLCBhdWN1bmUgY29tbWlzc2lvbiwgdG91dCBlc3QgY29tcHJpcyBkYW5zIGxlIHByaXggIScsIHRleHQ6ICdVbiB0YXJpZiB1bmlxdWUgY29tcHJlbmFudCBsXFwnYWNoYXQgZFxcJ2VzcGFjZSBtw6lkaWFzLCBub3MgaG9ub3JhaXJlcywgbm9zIGZyYWlzIGRcXCdhZC1zZXJ2aW5nLCBsXFwnYXVkaXQgZGVzIGNyw6lhcywgbGUgdGVtcHMgaHVtYWluIHBhc3PDqSBzdXIgbGEgY2FtcGFnbmUsIGxlcyBmZWVzIERTUC4uLiBPcHRleiBwb3VyIGxlIGFsbC1pbmNsdXNpdmUgIScgfVxyXG5cclxuY29uc3QgbW9kZWxzID0gW1xyXG4gICAgeyB0YWc6ICdNaXNlIGVuIHBsYWNlJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy9wYXlfb25saW5lLnN2ZycsIHRpdGxlOiAnVW4gbW9kw6hsZSBzaW1wbGlmacOpJywgc3BlY3M6IFsnUHVibGlzaGluZycsICdUcmFkaW5nJywgJ0N1c3RvbSBTdWNjZXNzIE1hbmFnZW1lbnQnLCAnVHJhZmZpYyBNYW5hZ2VtZW50JywgJ0NvbnN1bHRpbmcnLCAnTWFya2V0cGxhY2UnLCAnPT4gPGI+MSBzZXVsPC9iPiBjb250YWN0IHBvdXIgdG91cyB2b3MgYmVzb2lucyddLCBjb2xvcjogJyMyN0Q2QkQnIH0sXHJcbiAgICB7IHRhZzogJ0ZyYWlzIHRlY2hub2xvZ2lxdWVzJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy91bmRyYXcuc3ZnJywgdGl0bGU6ICdBdWN1biBmcmFpcyBhZGRpdGlvbm5lbHMnLCBzcGVjczogWycwIGZyYWlzIGRcXCdBdWRpdCBkZSBjcsOpYXMnLCAnMCBmcmFpcyBkXFwnQWRzZXJ2aW5nJywgJzAgZnJhaXMgZGUgRFNQJywgJzAgZnJhaXMgZGUgRGF0YScsICcwIGZyYWlzIGRlIGNpYmxhZ2UgY29udGV4dHVlbCcsICcwIGZyYWlzIGRlIHBhcnRlbmFpcmVzIGRpdmVyc2VzJ10sIGNvbG9yOiAnIzU5QTBEOCcgfSxcclxuICAgIHsgdGFnOiAnU291cGxlc3NlJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy9zaGFyZWRfZ29hbHMuc3ZnJywgdGl0bGU6ICdTYW5zIGVuZ2FnZW1lbnQnLCBzcGVjczogWydDYW1wYWduZXMgw6AgbGEgcGVyZm9ybWFuY2UnLCAnVGVzdCAmIExlYXJuJywgJ0FnaWxpdMOpICYgUsOpYWN0aXZpdMOpJ10sIGNvbG9yOiAnIzg5NkFGNCcgfSxcclxuXVxyXG5cclxuY29uc3QgcGFja3MgPSBbXHJcbiAgICB7IHRpdGxlOiAnRGlnaXRhbCBOb21hZCcsIGRlc2NyaXB0aW9uOiAnUG91ciBjZXV4IHF1aSB2ZXVsZW50IHVuZSBleHDDqXJpZW5jZSAxMDAgJSBTZWxmLVNlcnZpY2UnLCBidWRnZXQ6ICcnLCBjb250ZW50OiBbJ0xhbmNlbWVudCBkZSBjYW1wYWduZXMgZW4gc2VsZiBzZXJ2aWNlJywgJ1RvdXMgbGVzIGludmVudGFpcmVzIHByb2dyYW1tYXRpcXVlcycsICdTdHJhdMOpZ2llcyBjbMOpIGVuIG1haW4gc2Vsb24gdm9zIG9iamVjdGlmcycsICdUaWNrZXRpbmcgU3VwcG9ydCddIH0sXHJcbiAgICB7IHRpdGxlOiAnRGlnaXRhbCBFeHBlcnQnLCBkZXNjcmlwdGlvbjogJ1BvdXIgY2V1eCBxdWkgdmV1bGVudCBsZXMgbWVpbGxldXJzIGV4cGVydHMnLCBidWRnZXQ6ICfDgCBQQVJUSVIgREUgMTAwIEsgQU5OVUVMUycsIGNvbnRlbnQ6IFsnQWNjb3VudCBTdHJhdGVnaXN0IFNlbmlvciDDoCB2b3RyZSBzZXJ2aWNlJywgJ1VuIGRpcmVjdGV1ciBjb25zZWlsIHByw6lzZW50IHN1ciBsZXMgbWVldGluZ3Mgc3RyYXTDqWdpcXVlcycsICdBL0IgVGVzdGluZyBldCBtdWx0aS1zY8OpbmFyaXNhdGlvbiBkZXMgY2FtcGFnbmVzJywgJ0LDqnRhLVRlc3RpbmcgZW4gZXhjbHVzaXZpdMOpIGRlcyBkZXJuacOocmVzIGlubm92YXRpb25zIGRpZ2l0YWxlcycsICdBY2PDqHMgw6Agbm90cmUgc3F1YWQgZFxcJ2V4cGVydHMgc2Vsb24gdm9zIGJlc29pbnMgKFB1Ymxpc2hpbmcsIEF0dHJpYnV0aW9uLCBUcmFmaWMsIFNFQSwgU29jaWFsLi4uKSddLCB2YXJpYW50OiBjb2xvcnMubGlnaHRHcmVlbiB9LFxyXG4gICAgeyB0aXRsZTogJ0RpZ2l0YWwgRnJpZW5kJywgZGVzY3JpcHRpb246ICdQb3VyIGNldXggcXVpIHZldWxlbnQgZGUgbFxcJ2FpZGUgc3VyIGxldXJzIHN0cmF0w6lnaWVzIGRpZ2l0YWxlcycsIGJ1ZGdldDogJ8OAIFBBUlRJUiBERSAyNSBLIEFOTlVFTFMnLCBjb250ZW50OiBbJ0FjY291bnQgU3RyYXRlZ2lzdCBkw6lkacOpJywgJ1RvdXQgbm90cmUgY2F0YWxvZ3VlIHByb2R1aXRzJywgJ1JlY29tbWFuZGF0aW9ucyBzdHJhdMOpZ2lxdWVzIHN1ciBtZXN1cmUnLCAnQWNjb21wYWdlbWVudCBvdSBkw6l2ZWxvcHBlbWVudCBkZXMgYXNzZXRzIGNyw6lhcycsICdTdXBwb3J0IHRlY2huaXF1ZSBodW1haW4gc3VyIGxlIHRyYWNraW5nJ10gfVxyXG5dXHJcblxyXG5jb25zdCBwcmVtaXVtQ29udGVudCA9IFtcclxuICAgICdMZXMgbWVpbGxldXJzIEFjY291bnQgU3RyYXRlZ2lzdHMgJiBLZXkgQWNjb3VudCBNYW5hZ2VycycsXHJcbiAgICAnTm90cmUgU3F1YWQgZFxcJ2V4cGVydHMgw6Agdm90cmUgc2VydmljZSAoUHVibGlzaGluZywgVHJhZmljLCBTRUEsIEFzc2V0cyBjcsOpYXMuLi4pJyxcclxuICAgICdBL0IgVGVzdGluZyBldCBtdWx0aS1zY8OpbmFyaXNhdGlvbiBkZXMgY2FtcGFnbmVzJyxcclxuICAgICdNZWRpYSBQbGFubmluZyBldCBBdWRpZW5jZXMgUGxhbm5pbmcnLFxyXG4gICAgJ0FuYWx5c2UgY29uY3VyZW50aWVsbGUnLFxyXG4gICAgJ0JlbmNobWFyayBQZXJmb3JtYW5jZXMgZXQgw4l0dWRlcycsXHJcbiAgICAnQ29uc3VsdGluZyAoQ29udGVudHMsIFN0cmF0w6lnaWUsIFNFTy4uKScsXHJcbiAgICAnRm9ybWF0aW9uJ1xyXG5dXHJcblxyXG5jb25zdCBpT1NCb3hTaGFkb3cgPVxyXG4gICcwIDNweCAxcHggcmdiYSgwLDAsMCwwLjEpLDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMTMpLDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDIpJztcclxuXHJcbmNvbnN0IG1hcmtzID0gW1xyXG4gIHtcclxuICAgIHZhbHVlOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDIwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDM3LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDEwMCxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgSU9TU2xpZGVyID0gc3R5bGVkKFNsaWRlcikoKHsgdGhlbWUgfSkgPT4gKHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdkYXJrJyA/ICcjMzg4MGZmJyA6ICcjMzg4MGZmJyxcclxuICAgIGhlaWdodDogOCxcclxuICAgIHBhZGRpbmc6ICcxNXB4IDAnLFxyXG4gICAgJyYgLk11aVNsaWRlci10aHVtYic6IHtcclxuICAgICAgaGVpZ2h0OiAyOCxcclxuICAgICAgd2lkdGg6IDI4LFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgYm94U2hhZG93OiBpT1NCb3hTaGFkb3csXHJcbiAgICAgICcmOmZvY3VzLCAmOmhvdmVyLCAmLk11aS1hY3RpdmUnOiB7XHJcbiAgICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgICAgJzAgM3B4IDFweCByZ2JhKDAsMCwwLDAuMSksMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4zKSwwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjAyKScsXHJcbiAgICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcclxuICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XHJcbiAgICAgICAgICBib3hTaGFkb3c6IGlPU0JveFNoYWRvdyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlTbGlkZXItdmFsdWVMYWJlbCc6IHtcclxuICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgdG9wOiAtNixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMubGlnaHRHcmVlbixcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiAqJzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2RhcmsnID8gJyNmZmYnIDogJyMwMDAnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlTbGlkZXItdHJhY2snOiB7XHJcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICBoZWlnaHQ6IDgsXHJcbiAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpU2xpZGVyLXJhaWwnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2JmYmZiZicsXHJcbiAgICAgIGhlaWdodDogOCxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpU2xpZGVyLW1hcmsnOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNiZmJmYmYnLFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICB3aWR0aDogMSxcclxuICAgICAgJyYuTXVpU2xpZGVyLW1hcmtBY3RpdmUnOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5jb25zdCBTdHlsZWRTbGlkZXIgPSBzdHlsZWQoU2xpZGVyKSgoKSA9PiAoe1xyXG4gICAgJyYgLk11aVNsaWRlci10aHVtYic6IHtcclxuICAgICAgICBoZWlnaHQ6IDMyLFxyXG4gICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICBtYXJnaW5Ub3A6IDAsXHJcbiAgICAgICAgYm9yZGVyOiA1LFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMubGlnaHRHcmVlbixcclxuICAgICAgICBib3hTaGFkb3c6ICcwIDNweCAxcHggcmdiYSgwLDAsMCwwLjEpLDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMTMpLDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDIpJyxcclxuICAgICAgICAnJjpmb2N1cywgJjpob3ZlciwgJi5NdWktYWN0aXZlJzoge1xyXG4gICAgICAgICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgICAgICAgJzAgM3B4IDFweCByZ2JhKDAsMCwwLDAuMSksMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4zKSwwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjAyKScsXHJcbiAgICAgICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XHJcbiAgICAgICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcclxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDNweCAxcHggcmdiYSgwLDAsMCwwLjEpLDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMTMpLDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDIpJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aVNsaWRlci12YWx1ZUxhYmVsJzoge1xyXG4gICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd1bnNldCcsXHJcbiAgICAgICAgLy8gY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmIConOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgLy8gICBjb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyAnI2ZmZicgOiAnIzAwMCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgJyYgLk11aVNsaWRlci10cmFjayc6IHtcclxuICAgICAgICBoZWlnaHQ6IDYsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxyXG4gICAgICAgIGNvbG9yOiBjb2xvcnMubGlnaHRHcmVlbixcclxuICAgICAgfSxcclxuICAgICAgJyYgLk11aVNsaWRlci1yYWlsJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYmZiZmJmJyxcclxuICAgICAgICBoZWlnaHQ6IDYsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxyXG4gICAgICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBzc2QgfSkge1xyXG4gICAgY29uc3QgW3ZhbHVlU2xpZGVyLCBzZXRWYWx1ZVNsaWRlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt2YWx1ZVNsaWRlcjIsIHNldFZhbHVlU2xpZGVyMl0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZVNsaWRlcihuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UyID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVTbGlkZXIyKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItb2ZmcmVzJz5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+S2xveCB8IE5vcyBvZmZyZXM8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIG5hdmJhcj17c3NkLm5hdmJhcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwcmljaW5nLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3ByaWNpbmcuc3VidGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcmljaW5nLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21vZGVscy5tYXAoKG1vZGVsLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kZWxDYXJkIGtleT17aWR4fSBtb2RlbD17bW9kZWx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+RGVzIHBhY2tzIGFkYXB0w6lzIMOgIHZvcyBiZXNvaW5zPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFja3MubWFwKChwYWNrLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFja0NhcmQgcGFjaz17cGFja30ga2V5PXtpZHh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZW1pdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnNTBweCcgfX0+RW52aWUgZCd1bmUgb2ZmcmUgUHJlbWl1bcKgPzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbWl1bS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJlbWl1bS1jb250ZW50LWxlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PsOAIHBhcnRpciBkZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj40MDDCoEvCoOKCrDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5hbm51ZWxzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5DdXN0b21pc2F0aW9uIHBvc3NpYmxlwqAhPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIHN4PXt7IGJnY29sb3I6IGNvbG9ycy5saWdodEdyZWVuLCBjb2xvcjogJ3doaXRlJywgJyY6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhcmtlckdyZWVuIH0sIHBhZGRpbmc6ICcxNXB4JywgbWFyZ2luOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIHNhdm9pciBwbHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmVtaXVtLWNvbnRlbnQtcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZW1pdW1Db250ZW50Lm1hcCgoY29udGVudCwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnMTBweCcgfX0ga2V5PXtpZHh9PjxGYUNoZWNrQ2lyY2xlIHNpemU9ezIwfSBjb2xvcj17Y29sb3JzLmxpZ2h0R3JlZW59IC8+e2NvbnRlbnR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmd1bWVudHMtb2ZmZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2FyZ3VtZW50cy10aXRsZSc+UGV1IGltcG9ydGUgbCdvZmZyZSwgb24gdm91cyBnYXJhbnRpdMKgOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvY2tzLm1hcCgoYmxvY2ssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9jayBibG9jaz17YmxvY2t9IGtleT17aWR4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjb3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+RW52aWUgZCdlbiBkw6ljb3V2cmlyIHBsdXPCoD88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2FuYWx5dGljcy1idXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6IGNvbG9ycy5saWdodEdyZWVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5kYXJrZXJHcmVlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+Q29udGFjdGV6LW5vdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlcnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnMtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJzLWNvbnRlbnQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXItbGFiZWwnPkNvbWJpZW4gZGUgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGNvbG9ycy5saWdodEdyZWVuIH19PmZhY3R1cmVzIGZvdXJuaXNzZXVycyB0cmFpdGV6LXZvdXM8L3NwYW4+IHBhciBtb2lzID88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PihFc3RpbWV6IGVuIG1veWVubmUgcGFyIG1vaXMpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxTbGlkZXIgdmFsdWU9e3ZhbHVlU2xpZGVyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZUxhYmVsRGlzcGxheT1cIm9uXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNsaWRlciBpZD0nc3R5bGVkLXNsaWRlcicgdmFsdWU9e3ZhbHVlU2xpZGVyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZUxhYmVsRGlzcGxheT1cIm9uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnMtY29udGVudC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1sYWJlbCc+Q29tYmllbiBkZSA8c3BhbiBzdHlsZT17eyBjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4gfX0+YmFucXVlczwvc3Bhbj4gYWxsZXotdm91cyBjb25uZWN0ZXIgPzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMzBweCcgfX0+KExlIG5vbWJyZSBkZSBjb21wdGVzIGF1IHNlaW4gZCd1biBtw6ptZSBiYW5xdWUgZXN0IGlsbGltaXTDqSk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SU9TU2xpZGVyIHZhbHVlPXt2YWx1ZVNsaWRlcjJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UyfSB2YWx1ZUxhYmVsRGlzcGxheT1cIm9uXCIgbWFya3M9e21hcmtzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVycy1jb250ZW50LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWl0ZXMgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGNvbG9ycy5saWdodEdyZWVuIH19PiBjb2xsYWJvcmVyPC9zcGFuPiB2b3Mgc2VydmljZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Vic2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJpY2UnPjE54oKsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naHQnPkhUL01vaXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+4pyTIDxiPkFjY8OocyDDoCBsJ2Vuc2VtYmxlIGRlcyBmb25jdGlvbm5hbGl0w6lzPC9iPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuKckyBTdXBwb3J0IGNsaWVudDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuKckyDDiXF1aXDDqSBkw6lkacOpZSBhdSBsYW5jZW1lbnQgZXQgw6AgbCdhY2NvbXBhZ25lbWVudDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGhyZWY9Jy8nIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7IGJnY29sb3I6IGNvbG9ycy5kYXJrZXJHcmVlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEw6ltYXJyZXIgbWFpbnRlbmFudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IEdFVEJZU0xVRyA9IGdxbGBcclxuICAgIHtcclxuICAgICAgICBtZW51KGlkOiAxKSB7XHJcbiAgICAgICAgICAgIG5hdmJhciB7XHJcbiAgICAgICAgICAgICAgICBsb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZVRleHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2hyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjdGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIoaWQ6IDEpIHtcclxuICAgICAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgIGxvZ29fZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZVRleHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJsb2NrX3NvY2lhbF9oZWFkaW5nXHJcbiAgICAgICAgICAgICAgICByZXNlYXVfc29jaWFsIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmF2SXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfaHJlZlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0X2xhbmd1YWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5X2ZsYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG1lbnU6IHsgbmF2YmFyIH0sXHJcbiAgICAgICAgICAgIGZvb3RlcjogeyBmb290ZXIgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICAgICAgcXVlcnk6IEdFVEJZU0xVRyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgc3NkOiB7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXIsXHJcbiAgICAgICAgICAgICAgICBmb290ZXIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==