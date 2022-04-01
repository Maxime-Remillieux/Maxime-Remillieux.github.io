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
    height: 2,
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
      backgroundColor: 'unset',
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
      border: 'none'
    },
    '& .MuiSlider-rail': {
      opacity: 0.5,
      backgroundColor: '#bfbfbf'
    },
    '& .MuiSlider-mark': {
      backgroundColor: '#bfbfbf',
      height: 8,
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
    },
    '& .MuiSlider-valueLabel': {
      fontSize: 12,
      fontWeight: 'normal',
      top: 8,
      left: 5,
      backgroundColor: 'unset',
      // color: theme.palette.text.primary,
      '&:before': {
        display: 'none'
      },
      '& *': {
        background: 'transparent',
        color: 'black' //   color: theme.palette.mode === 'dark' ? '#fff' : '#000',

      }
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
        lineNumber: 193,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {
      theme: theme,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {
          navbar: ssd.navbar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pricing-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pricing",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: pricing.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: pricing.subtitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: pricing.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "model",
            children: models.map(function (model, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_ModelCard__WEBPACK_IMPORTED_MODULE_4__.default, {
                model: model
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "services",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "services-top",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: "Des packs adapt\xE9s \xE0 vos besoins"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "offers",
            children: packs.map(function (pack, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_PackCard__WEBPACK_IMPORTED_MODULE_5__.default, {
                pack: pack
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
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
            lineNumber: 225,
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
                  lineNumber: 229,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  children: "400\xA0K\xA0\u20AC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    textAlign: 'center'
                  },
                  children: "annuels"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "Customisation possible\xA0!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
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
                lineNumber: 234,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
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
                      lineNumber: 241,
                      columnNumber: 118
                    }, _this), content]
                  }, idx, true, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "arguments-offers",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "arguments-title",
            children: "Peu importe l'offre, on vous garantit\xA0:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "blocks",
            children: blocks.map(function (block, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_Block__WEBPACK_IMPORTED_MODULE_2__.default, {
                block: block
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "discover",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Envie d'en d\xE9couvrir plus\xA0?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
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
            lineNumber: 259,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 257,
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
                  lineNumber: 280,
                  columnNumber: 74
                }, this), " par mois ?"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  marginBottom: '30px'
                },
                children: "(Estimez en moyenne par mois)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
                value: valueSlider,
                onChange: handleChange,
                valueLabelDisplay: "on"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 279,
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
                  lineNumber: 286,
                  columnNumber: 74
                }, this), " allez-vous connecter ?"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  marginBottom: '30px'
                },
                children: "(Le nombre de comptes au sein d'un m\xEAme banque est illimit\xE9)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IOSSlider, {
                value: valueSlider2,
                onChange: handleChange2,
                valueLabelDisplay: "on",
                marks: marks
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 288,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 285,
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
                lineNumber: 291,
                columnNumber: 40
              }, this), " vos services."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "subscription",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "price",
              children: "19\u20AC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ht",
              children: "HT/Mois"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: ["\u2713 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "Acc\xE8s \xE0 l'ensemble des fonctionnalit\xE9s"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 298,
                  columnNumber: 39
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "\u2713 Support client"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "\u2713 \xC9quip\xE9 d\xE9di\xE9e au lancement et \xE0 l'accompagnement"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 297,
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
              lineNumber: 302,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 191,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb2ZmcmVzLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlVGhlbWUiLCJzdGF0dXMiLCJkYW5nZXIiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJkYXJrZXIiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJuZXV0cmFsIiwiY29sb3JzIiwibGlnaHRHcmVlbiIsImRhcmtlckdyZWVuIiwiYmxvY2tzIiwidGl0bGUiLCJjb250ZW50IiwiaWNvbiIsIkZhRGVza3RvcCIsIkZhTGF5ZXJHcm91cCIsInZhcmlhbnQiLCJGYVBhaW50QnJ1c2giLCJwcmljaW5nIiwic3VidGl0bGUiLCJ0ZXh0IiwibW9kZWxzIiwidGFnIiwiaW1hZ2UiLCJzcGVjcyIsImNvbG9yIiwicGFja3MiLCJkZXNjcmlwdGlvbiIsImJ1ZGdldCIsInByZW1pdW1Db250ZW50IiwiaU9TQm94U2hhZG93IiwibWFya3MiLCJ2YWx1ZSIsIklPU1NsaWRlciIsInN0eWxlZCIsIlNsaWRlciIsIm1vZGUiLCJoZWlnaHQiLCJwYWRkaW5nIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0b3AiLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImJvcmRlciIsIm9wYWNpdHkiLCJTdHlsZWRTbGlkZXIiLCJsZWZ0IiwiSG9tZSIsInNzZCIsInVzZVN0YXRlIiwidmFsdWVTbGlkZXIiLCJzZXRWYWx1ZVNsaWRlciIsInZhbHVlU2xpZGVyMiIsInNldFZhbHVlU2xpZGVyMiIsImhhbmRsZUNoYW5nZSIsImUiLCJuZXdWYWx1ZSIsImhhbmRsZUNoYW5nZTIiLCJuYXZiYXIiLCJtYXAiLCJtb2RlbCIsImlkeCIsInBhY2siLCJ0ZXh0QWxpZ24iLCJiZ2NvbG9yIiwibWFyZ2luIiwiYWxpZ25JdGVtcyIsImdhcCIsImJsb2NrIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZ1RvcCIsInBhZGRp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QUFBQTtBQUFBO0FBQUEsZ0JBL0VKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRISDs7R0F2SXVCMEMsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vZmZyZXMuNTkyNDkxMDM3ZjE0NTMzODk1N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvb2ZmcmVzL0Jsb2NrJ1xyXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCB3aXRoVGhlbWUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHsgRmFEZXNrdG9wLCBGYUxheWVyR3JvdXAsIEZhUGFpbnRCcnVzaCwgRmFDaGVja0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG4vLyBpbXBvcnQgQXJyb3dGb3J3YXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCB7IGFwb2xsb0NsaWVudCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHJhcGlcIjtcclxuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBNb2RlbENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9vZmZyZXMvTW9kZWxDYXJkJ1xyXG5pbXBvcnQgUGFja0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9vZmZyZXMvUGFja0NhcmQnXHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICAgIHN0YXR1czoge1xyXG4gICAgICAgIGRhbmdlcjogJyNlNTNlM2UnLFxyXG4gICAgfSxcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgICAgIG1haW46ICcjMzA1NUQzJyxcclxuICAgICAgICAgICAgZGFya2VyOiAnIzA1M2U4NScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICAgICAgbWFpbjogJ3JnYmEoMjUzLCAyNTQsIDI1NSwgMC4xNSknLFxyXG4gICAgICAgICAgICBjb250cmFzdFRleHQ6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIGRhcmtlcjogJyMwNTNlODUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV1dHJhbDoge1xyXG4gICAgICAgICAgICBtYWluOiAnIzY0NzQ4QicsXHJcbiAgICAgICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICAgIGxpZ2h0R3JlZW46ICcjMjdENkJEJyxcclxuICAgIGRhcmtlckdyZWVuOiAnIzJiOTM4NCdcclxufVxyXG5cclxuY29uc3QgYmxvY2tzID0gW1xyXG4gICAgeyB0aXRsZTogJ1N1cHBvcnQgZMOpZGnDqScsIGNvbnRlbnQ6IFsn4pyTIEZBUScsICfinJMgUmVzc291cmNlcycsICfinJMgQ2hhdGJvdCddLCBpY29uOiBGYURlc2t0b3AgfSxcclxuICAgIHsgdGl0bGU6ICdPbmxpbmUgUmVwb3J0aW5nJywgY29udGVudDogJ1RvdXMgdm9zIHLDqXN1bHRhdHMgZGUgY2FtcGFnbmUsIGNyb3NzIHBsYXR0Zm9ybXMgZXQgY3Jvc3MgZGV2aWNlcywgYXUgY29ldXIgZFxcJ3VuZSBtw6ptZSBpbmZlcmZhY2UgcGVyc29ubmFsaXNhYmxlJywgaWNvbjogRmFMYXllckdyb3VwLCB2YXJpYW50OiBjb2xvcnMubGlnaHRHcmVlbiB9LFxyXG4gICAgeyB0aXRsZTogJ01hcmtldHBsYWNlJywgY29udGVudDogWyfinJMgSW5mbHVlbmNlJywgJ+KckyBWUiAmIEluLUdhbWluZy1BZHMnLCAn4pyTIEZvcm1hdHMgaW5ub3ZhbnRzJywgJ+KckyBBc3NldHMgY3LDqWFzJ10sIGljb246IEZhUGFpbnRCcnVzaCB9LFxyXG4gICAgeyB0aXRsZTogJ1LDqWFjdGl2aXTDqScsIGNvbnRlbnQ6ICdMYW5jZW1lbnQgZXQgb3B0aW1pc2F0aW9ucyBkZSBjYW1wYWduZXMgNy83JywgaWNvbjogRmFEZXNrdG9wIH0sXHJcbiAgICB7IHRpdGxlOiAnRXhwZXJ0aXNlJywgY29udGVudDogJ1VuZSBzcXVhZCBtdWx0aS1jZXJ0aWZpw6llJywgaWNvbjogRmFMYXllckdyb3VwLCB2YXJpYW50OiBjb2xvcnMubGlnaHRHcmVlbiB9LFxyXG4gICAgeyB0aXRsZTogJ1BlcmZvcm1hbmNlJywgY29udGVudDogJ0xlcyBhY3RpdmF0aW9ucyBsZXMgcGx1cyBwZXJmb3JtYW50ZXMgc2Vsb24gdm9zIG9iamVjdGlmcycsIGljb246IEZhUGFpbnRCcnVzaCB9LFxyXG5dXHJcblxyXG5cclxuY29uc3QgcHJpY2luZyA9IHsgdGl0bGU6ICdQcmljaW5nJywgc3VidGl0bGU6ICdBdWN1biBob25vcmFpcmUsIGF1Y3VuIGZyYWlzLCBhdWN1bmUgY29tbWlzc2lvbiwgdG91dCBlc3QgY29tcHJpcyBkYW5zIGxlIHByaXggIScsIHRleHQ6ICdVbiB0YXJpZiB1bmlxdWUgY29tcHJlbmFudCBsXFwnYWNoYXQgZFxcJ2VzcGFjZSBtw6lkaWFzLCBub3MgaG9ub3JhaXJlcywgbm9zIGZyYWlzIGRcXCdhZC1zZXJ2aW5nLCBsXFwnYXVkaXQgZGVzIGNyw6lhcywgbGUgdGVtcHMgaHVtYWluIHBhc3PDqSBzdXIgbGEgY2FtcGFnbmUsIGxlcyBmZWVzIERTUC4uLiBPcHRleiBwb3VyIGxlIGFsbC1pbmNsdXNpdmUgIScgfVxyXG5cclxuY29uc3QgbW9kZWxzID0gW1xyXG4gICAgeyB0YWc6ICdNaXNlIGVuIHBsYWNlJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy9wYXlfb25saW5lLnN2ZycsIHRpdGxlOiAnVW4gbW9kw6hsZSBzaW1wbGlmacOpJywgc3BlY3M6IFsnUHVibGlzaGluZycsICdUcmFkaW5nJywgJ0N1c3RvbSBTdWNjZXNzIE1hbmFnZW1lbnQnLCAnVHJhZmZpYyBNYW5hZ2VtZW50JywgJ0NvbnN1bHRpbmcnLCAnTWFya2V0cGxhY2UnLCAnPT4gPGI+MSBzZXVsPC9iPiBjb250YWN0IHBvdXIgdG91cyB2b3MgYmVzb2lucyddLCBjb2xvcjogJyMyN0Q2QkQnIH0sXHJcbiAgICB7IHRhZzogJ0ZyYWlzIHRlY2hub2xvZ2lxdWVzJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy91bmRyYXcuc3ZnJywgdGl0bGU6ICdBdWN1biBmcmFpcyBhZGRpdGlvbm5lbHMnLCBzcGVjczogWycwIGZyYWlzIGRcXCdBdWRpdCBkZSBjcsOpYXMnLCAnMCBmcmFpcyBkXFwnQWRzZXJ2aW5nJywgJzAgZnJhaXMgZGUgRFNQJywgJzAgZnJhaXMgZGUgRGF0YScsICcwIGZyYWlzIGRlIGNpYmxhZ2UgY29udGV4dHVlbCcsICcwIGZyYWlzIGRlIHBhcnRlbmFpcmVzIGRpdmVyc2VzJ10sIGNvbG9yOiAnIzU5QTBEOCcgfSxcclxuICAgIHsgdGFnOiAnU291cGxlc3NlJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy9zaGFyZWRfZ29hbHMuc3ZnJywgdGl0bGU6ICdTYW5zIGVuZ2FnZW1lbnQnLCBzcGVjczogWydDYW1wYWduZXMgw6AgbGEgcGVyZm9ybWFuY2UnLCAnVGVzdCAmIExlYXJuJywgJ0FnaWxpdMOpICYgUsOpYWN0aXZpdMOpJ10sIGNvbG9yOiAnIzg5NkFGNCcgfSxcclxuXVxyXG5cclxuY29uc3QgcGFja3MgPSBbXHJcbiAgICB7IHRpdGxlOiAnRGlnaXRhbCBOb21hZCcsIGRlc2NyaXB0aW9uOiAnUG91ciBjZXV4IHF1aSB2ZXVsZW50IHVuZSBleHDDqXJpZW5jZSAxMDAgJSBTZWxmLVNlcnZpY2UnLCBidWRnZXQ6ICcnLCBjb250ZW50OiBbJ0xhbmNlbWVudCBkZSBjYW1wYWduZXMgZW4gc2VsZiBzZXJ2aWNlJywgJ1RvdXMgbGVzIGludmVudGFpcmVzIHByb2dyYW1tYXRpcXVlcycsICdTdHJhdMOpZ2llcyBjbMOpIGVuIG1haW4gc2Vsb24gdm9zIG9iamVjdGlmcycsICdUaWNrZXRpbmcgU3VwcG9ydCddIH0sXHJcbiAgICB7IHRpdGxlOiAnRGlnaXRhbCBFeHBlcnQnLCBkZXNjcmlwdGlvbjogJ1BvdXIgY2V1eCBxdWkgdmV1bGVudCBsZXMgbWVpbGxldXJzIGV4cGVydHMnLCBidWRnZXQ6ICfDgCBQQVJUSVIgREUgMTAwIEsgQU5OVUVMUycsIGNvbnRlbnQ6IFsnQWNjb3VudCBTdHJhdGVnaXN0IFNlbmlvciDDoCB2b3RyZSBzZXJ2aWNlJywgJ1VuIGRpcmVjdGV1ciBjb25zZWlsIHByw6lzZW50IHN1ciBsZXMgbWVldGluZ3Mgc3RyYXTDqWdpcXVlcycsICdBL0IgVGVzdGluZyBldCBtdWx0aS1zY8OpbmFyaXNhdGlvbiBkZXMgY2FtcGFnbmVzJywgJ0LDqnRhLVRlc3RpbmcgZW4gZXhjbHVzaXZpdMOpIGRlcyBkZXJuacOocmVzIGlubm92YXRpb25zIGRpZ2l0YWxlcycsICdBY2PDqHMgw6Agbm90cmUgc3F1YWQgZFxcJ2V4cGVydHMgc2Vsb24gdm9zIGJlc29pbnMgKFB1Ymxpc2hpbmcsIEF0dHJpYnV0aW9uLCBUcmFmaWMsIFNFQSwgU29jaWFsLi4uKSddLCB2YXJpYW50OiBjb2xvcnMubGlnaHRHcmVlbiB9LFxyXG4gICAgeyB0aXRsZTogJ0RpZ2l0YWwgRnJpZW5kJywgZGVzY3JpcHRpb246ICdQb3VyIGNldXggcXVpIHZldWxlbnQgZGUgbFxcJ2FpZGUgc3VyIGxldXJzIHN0cmF0w6lnaWVzIGRpZ2l0YWxlcycsIGJ1ZGdldDogJ8OAIFBBUlRJUiBERSAyNSBLIEFOTlVFTFMnLCBjb250ZW50OiBbJ0FjY291bnQgU3RyYXRlZ2lzdCBkw6lkacOpJywgJ1RvdXQgbm90cmUgY2F0YWxvZ3VlIHByb2R1aXRzJywgJ1JlY29tbWFuZGF0aW9ucyBzdHJhdMOpZ2lxdWVzIHN1ciBtZXN1cmUnLCAnQWNjb21wYWdlbWVudCBvdSBkw6l2ZWxvcHBlbWVudCBkZXMgYXNzZXRzIGNyw6lhcycsICdTdXBwb3J0IHRlY2huaXF1ZSBodW1haW4gc3VyIGxlIHRyYWNraW5nJ10gfVxyXG5dXHJcblxyXG5jb25zdCBwcmVtaXVtQ29udGVudCA9IFtcclxuICAgICdMZXMgbWVpbGxldXJzIEFjY291bnQgU3RyYXRlZ2lzdHMgJiBLZXkgQWNjb3VudCBNYW5hZ2VycycsXHJcbiAgICAnTm90cmUgU3F1YWQgZFxcJ2V4cGVydHMgw6Agdm90cmUgc2VydmljZSAoUHVibGlzaGluZywgVHJhZmljLCBTRUEsIEFzc2V0cyBjcsOpYXMuLi4pJyxcclxuICAgICdBL0IgVGVzdGluZyBldCBtdWx0aS1zY8OpbmFyaXNhdGlvbiBkZXMgY2FtcGFnbmVzJyxcclxuICAgICdNZWRpYSBQbGFubmluZyBldCBBdWRpZW5jZXMgUGxhbm5pbmcnLFxyXG4gICAgJ0FuYWx5c2UgY29uY3VyZW50aWVsbGUnLFxyXG4gICAgJ0JlbmNobWFyayBQZXJmb3JtYW5jZXMgZXQgw4l0dWRlcycsXHJcbiAgICAnQ29uc3VsdGluZyAoQ29udGVudHMsIFN0cmF0w6lnaWUsIFNFTy4uKScsXHJcbiAgICAnRm9ybWF0aW9uJ1xyXG5dXHJcblxyXG5jb25zdCBpT1NCb3hTaGFkb3cgPVxyXG4gICcwIDNweCAxcHggcmdiYSgwLDAsMCwwLjEpLDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMTMpLDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDIpJztcclxuXHJcbmNvbnN0IG1hcmtzID0gW1xyXG4gIHtcclxuICAgIHZhbHVlOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDIwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDM3LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDEwMCxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgSU9TU2xpZGVyID0gc3R5bGVkKFNsaWRlcikoKHsgdGhlbWUgfSkgPT4gKHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdkYXJrJyA/ICcjMzg4MGZmJyA6ICcjMzg4MGZmJyxcclxuICAgIGhlaWdodDogMixcclxuICAgIHBhZGRpbmc6ICcxNXB4IDAnLFxyXG4gICAgJyYgLk11aVNsaWRlci10aHVtYic6IHtcclxuICAgICAgaGVpZ2h0OiAyOCxcclxuICAgICAgd2lkdGg6IDI4LFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgYm94U2hhZG93OiBpT1NCb3hTaGFkb3csXHJcbiAgICAgICcmOmZvY3VzLCAmOmhvdmVyLCAmLk11aS1hY3RpdmUnOiB7XHJcbiAgICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgICAgJzAgM3B4IDFweCByZ2JhKDAsMCwwLDAuMSksMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4zKSwwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjAyKScsXHJcbiAgICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcclxuICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XHJcbiAgICAgICAgICBib3hTaGFkb3c6IGlPU0JveFNoYWRvdyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlTbGlkZXItdmFsdWVMYWJlbCc6IHtcclxuICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgdG9wOiAtNixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndW5zZXQnLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIConOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyAnI2ZmZicgOiAnIzAwMCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aVNsaWRlci10cmFjayc6IHtcclxuICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aVNsaWRlci1yYWlsJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNiZmJmYmYnLFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlTbGlkZXItbWFyayc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2JmYmZiZicsXHJcbiAgICAgIGhlaWdodDogOCxcclxuICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICcmLk11aVNsaWRlci1tYXJrQWN0aXZlJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuY29uc3QgU3R5bGVkU2xpZGVyID0gc3R5bGVkKFNsaWRlcikoKCkgPT4gKHtcclxuICAgICcmIC5NdWlTbGlkZXItdGh1bWInOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyOCxcclxuICAgICAgICB3aWR0aDogMjgsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgYm94U2hhZG93OiAnMCAzcHggMXB4IHJnYmEoMCwwLDAsMC4xKSwwIDRweCA4cHggcmdiYSgwLDAsMCwwLjEzKSwwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjAyKScsXHJcbiAgICAgICAgJyY6Zm9jdXMsICY6aG92ZXIsICYuTXVpLWFjdGl2ZSc6IHtcclxuICAgICAgICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgICAgICAgICcwIDNweCAxcHggcmdiYSgwLDAsMCwwLjEpLDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMyksMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4wMiknLFxyXG4gICAgICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxyXG4gICAgICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAzcHggMXB4IHJnYmEoMCwwLDAsMC4xKSwwIDRweCA4cHggcmdiYSgwLDAsMCwwLjEzKSwwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjAyKScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlTbGlkZXItdmFsdWVMYWJlbCc6IHtcclxuICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgdG9wOiA4LFxyXG4gICAgICAgIGxlZnQ6IDUsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndW5zZXQnLFxyXG4gICAgICAgIC8vIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJiAqJzoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIC8vICAgY29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2RhcmsnID8gJyNmZmYnIDogJyMwMDAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHNzZCB9KSB7XHJcbiAgICBjb25zdCBbdmFsdWVTbGlkZXIsIHNldFZhbHVlU2xpZGVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3ZhbHVlU2xpZGVyMiwgc2V0VmFsdWVTbGlkZXIyXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlU2xpZGVyKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZTIgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZVNsaWRlcjIobmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1vZmZyZXMnPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5LbG94IHwgTm9zIG9mZnJlczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgbmF2YmFyPXtzc2QubmF2YmFyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3ByaWNpbmcudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cHJpY2luZy5zdWJ0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3ByaWNpbmcudGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZWxzLm1hcCgobW9kZWwsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RlbENhcmQga2V5PXtpZHh9IG1vZGVsPXttb2RlbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlcy10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5EZXMgcGFja3MgYWRhcHTDqXMgw6Agdm9zIGJlc29pbnM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYWNrcy5tYXAoKHBhY2ssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWNrQ2FyZCBwYWNrPXtwYWNrfSBrZXk9e2lkeH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbWl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFNpemU6ICc1MHB4JyB9fT5FbnZpZSBkJ3VuZSBvZmZyZSBQcmVtaXVtwqA/PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVtaXVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmVtaXVtLWNvbnRlbnQtbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+w4AgcGFydGlyIGRlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjQwMMKgS8Kg4oKsPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PmFubnVlbHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkN1c3RvbWlzYXRpb24gcG9zc2libGXCoCE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgc3g9e3sgYmdjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sIGNvbG9yOiAnd2hpdGUnLCAnJjpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZGFya2VyR3JlZW4gfSwgcGFkZGluZzogJzE1cHgnLCBtYXJnaW46ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW4gc2F2b2lyIHBsdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZW1pdW0tY29udGVudC1yaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlbWl1bUNvbnRlbnQubWFwKChjb250ZW50LCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxMHB4JyB9fSBrZXk9e2lkeH0+PEZhQ2hlY2tDaXJjbGUgc2l6ZT17MjB9IGNvbG9yPXtjb2xvcnMubGlnaHRHcmVlbn0gLz57Y29udGVudH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyZ3VtZW50cy1vZmZlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nYXJndW1lbnRzLXRpdGxlJz5QZXUgaW1wb3J0ZSBsJ29mZnJlLCBvbiB2b3VzIGdhcmFudGl0wqA6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9ja3MubWFwKChibG9jaywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrIGJsb2NrPXtibG9ja30ga2V5PXtpZHh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5FbnZpZSBkJ2VuIGTDqWNvdXZyaXIgcGx1c8KgPzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYW5hbHl0aWNzLWJ1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhcmtlckdyZWVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5Db250YWN0ZXotbm91c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVycy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnMtY29udGVudC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1sYWJlbCc+Q29tYmllbiBkZSA8c3BhbiBzdHlsZT17eyBjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4gfX0+ZmFjdHVyZXMgZm91cm5pc3NldXJzIHRyYWl0ZXotdm91czwvc3Bhbj4gcGFyIG1vaXMgPzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMzBweCcgfX0+KEVzdGltZXogZW4gbW95ZW5uZSBwYXIgbW9pcyk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFNsaWRlciB2YWx1ZT17dmFsdWVTbGlkZXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlTGFiZWxEaXNwbGF5PVwib25cIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU2xpZGVyIHZhbHVlPXt2YWx1ZVNsaWRlcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWVMYWJlbERpc3BsYXk9XCJvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJzLWNvbnRlbnQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXItbGFiZWwnPkNvbWJpZW4gZGUgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGNvbG9ycy5saWdodEdyZWVuIH19PmJhbnF1ZXM8L3NwYW4+IGFsbGV6LXZvdXMgY29ubmVjdGVyID88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzMwcHgnIH19PihMZSBub21icmUgZGUgY29tcHRlcyBhdSBzZWluIGQndW4gbcOqbWUgYmFucXVlIGVzdCBpbGxpbWl0w6kpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElPU1NsaWRlciB2YWx1ZT17dmFsdWVTbGlkZXIyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlMn0gdmFsdWVMYWJlbERpc3BsYXk9XCJvblwiIG1hcmtzPXttYXJrc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnMtY29udGVudC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmFpdGVzIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBjb2xvcnMubGlnaHRHcmVlbiB9fT4gY29sbGFib3Jlcjwvc3Bhbj4gdm9zIHNlcnZpY2VzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByaWNlJz4xOeKCrDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2h0Jz5IVC9Nb2lzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuKckyA8Yj5BY2PDqHMgw6AgbCdlbnNlbWJsZSBkZXMgZm9uY3Rpb25uYWxpdMOpczwvYj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7inJMgU3VwcG9ydCBjbGllbnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7inJMgw4lxdWlww6kgZMOpZGnDqWUgYXUgbGFuY2VtZW50IGV0IMOgIGwnYWNjb21wYWduZW1lbnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBocmVmPScvJyBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6IGNvbG9ycy5saWdodEdyZWVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzogeyBiZ2NvbG9yOiBjb2xvcnMuZGFya2VyR3JlZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRMOpbWFycmVyIG1haW50ZW5hbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBjb25zdCBHRVRCWVNMVUcgPSBncWxgXHJcbiAgICB7XHJcbiAgICAgICAgbWVudShpZDogMSkge1xyXG4gICAgICAgICAgICBuYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19ocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY3RhIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyKGlkOiAxKSB7XHJcbiAgICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICBsb2dvX2Zvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBibG9ja19zb2NpYWxfaGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzZWF1X3NvY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5hdkl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2hyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdF9sYW5ndWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeV9mbGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBtZW51OiB7IG5hdmJhciB9LFxyXG4gICAgICAgICAgICBmb290ZXI6IHsgZm9vdGVyIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5OiBHRVRCWVNMVUcsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHNzZDoge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyLFxyXG4gICAgICAgICAgICAgICAgZm9vdGVyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=