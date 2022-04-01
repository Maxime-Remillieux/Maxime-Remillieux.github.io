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
      borderRadius: 3
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
        lineNumber: 204,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {
      theme: theme,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {
          navbar: ssd.navbar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pricing-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pricing",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: pricing.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: pricing.subtitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: pricing.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "model",
            children: models.map(function (model, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_ModelCard__WEBPACK_IMPORTED_MODULE_4__.default, {
                model: model
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
          lineNumber: 211,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "services",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "services-top",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: "Des packs adapt\xE9s \xE0 vos besoins"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "offers",
            children: packs.map(function (pack, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_PackCard__WEBPACK_IMPORTED_MODULE_5__.default, {
                pack: pack
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
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
            lineNumber: 236,
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
                  lineNumber: 240,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  children: "400\xA0K\xA0\u20AC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    textAlign: 'center'
                  },
                  children: "annuels"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "Customisation possible\xA0!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
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
                lineNumber: 245,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 238,
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
                      lineNumber: 252,
                      columnNumber: 118
                    }, _this), content]
                  }, idx, true, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "arguments-offers",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "arguments-title",
            children: "Peu importe l'offre, on vous garantit\xA0:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "blocks",
            children: blocks.map(function (block, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_Block__WEBPACK_IMPORTED_MODULE_2__.default, {
                block: block
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "discover",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Envie d'en d\xE9couvrir plus\xA0?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
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
            lineNumber: 270,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 268,
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
                  lineNumber: 291,
                  columnNumber: 74
                }, this), " par mois ?"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 291,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  marginBottom: '30px'
                },
                children: "(Estimez en moyenne par mois)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 292,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
                id: "styled-slider",
                value: valueSlider,
                onChange: handleChange,
                valueLabelDisplay: "on"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 290,
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
                  lineNumber: 297,
                  columnNumber: 74
                }, this), " allez-vous connecter ?"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  marginBottom: '30px'
                },
                children: "(Le nombre de comptes au sein d'un m\xEAme banque est illimit\xE9)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IOSSlider, {
                value: valueSlider2,
                onChange: handleChange2,
                valueLabelDisplay: "on",
                marks: marks
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 296,
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
                lineNumber: 302,
                columnNumber: 40
              }, this), " vos services."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "subscription",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "price",
              children: "19\u20AC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ht",
              children: "HT/Mois"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: ["\u2713 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "Acc\xE8s \xE0 l'ensemble des fonctionnalit\xE9s"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 309,
                  columnNumber: 39
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "\u2713 Support client"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 310,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "\u2713 \xC9quip\xE9 d\xE9di\xE9e au lancement et \xE0 l'accompagnement"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 308,
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
              lineNumber: 313,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 202,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb2ZmcmVzLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlVGhlbWUiLCJzdGF0dXMiLCJkYW5nZXIiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJkYXJrZXIiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJuZXV0cmFsIiwiY29sb3JzIiwibGlnaHRHcmVlbiIsImRhcmtlckdyZWVuIiwiYmxvY2tzIiwidGl0bGUiLCJjb250ZW50IiwiaWNvbiIsIkZhRGVza3RvcCIsIkZhTGF5ZXJHcm91cCIsInZhcmlhbnQiLCJGYVBhaW50QnJ1c2giLCJwcmljaW5nIiwic3VidGl0bGUiLCJ0ZXh0IiwibW9kZWxzIiwidGFnIiwiaW1hZ2UiLCJzcGVjcyIsImNvbG9yIiwicGFja3MiLCJkZXNjcmlwdGlvbiIsImJ1ZGdldCIsInByZW1pdW1Db250ZW50IiwiaU9TQm94U2hhZG93IiwibWFya3MiLCJ2YWx1ZSIsIklPU1NsaWRlciIsInN0eWxlZCIsIlNsaWRlciIsIm1vZGUiLCJoZWlnaHQiLCJwYWRkaW5nIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0b3AiLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm9wYWNpdHkiLCJTdHlsZWRTbGlkZXIiLCJIb21lIiwic3NkIiwidXNlU3RhdGUiLCJ2YWx1ZVNsaWRlciIsInNldFZhbHVlU2xpZGVyIiwidmFsdWVTbGlkZXIyIiwic2V0VmFsdWVTbGlkZXIyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5ld1ZhbHVlIiwiaGFuZGxlQ2hhbmdlMiIsIm5hdmJhciIsIm1hcCIsIm1vZGVsIiwiaWR4IiwicGFjayIsInRleHRBbGlnbiIsImJnY29sb3IiLCJtYXJnaW4iLCJhbGlnbkl0ZW1zIiwiZ2FwIiwiYmxvY2siLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRv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RUFBQyxXQUFoQjtBQUE0QixrQkFBSSxFQUFDLEdBQWpDO0FBQXFDLGdCQUFFLEVBQUU7QUFDckM0RCx1QkFBTyxFQUFFN0QsTUFBTSxDQUFDQyxVQURxQjtBQUVyQywyQkFBVztBQUFFNEQseUJBQU8sRUFBRTdELE1BQU0sQ0FBQ0U7QUFBbEI7QUFGMEIsZUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL0VKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRISDs7R0F2SXVCMEMsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vZmZyZXMuMjY2MmNjNjhlOTdhMjU4NmVkYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvb2ZmcmVzL0Jsb2NrJ1xyXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCB3aXRoVGhlbWUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHsgRmFEZXNrdG9wLCBGYUxheWVyR3JvdXAsIEZhUGFpbnRCcnVzaCwgRmFDaGVja0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG4vLyBpbXBvcnQgQXJyb3dGb3J3YXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCB7IGFwb2xsb0NsaWVudCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHJhcGlcIjtcclxuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBNb2RlbENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9vZmZyZXMvTW9kZWxDYXJkJ1xyXG5pbXBvcnQgUGFja0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9vZmZyZXMvUGFja0NhcmQnXHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICAgIHN0YXR1czoge1xyXG4gICAgICAgIGRhbmdlcjogJyNlNTNlM2UnLFxyXG4gICAgfSxcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgICAgIG1haW46ICcjMzA1NUQzJyxcclxuICAgICAgICAgICAgZGFya2VyOiAnIzA1M2U4NScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICAgICAgbWFpbjogJ3JnYmEoMjUzLCAyNTQsIDI1NSwgMC4xNSknLFxyXG4gICAgICAgICAgICBjb250cmFzdFRleHQ6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIGRhcmtlcjogJyMwNTNlODUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV1dHJhbDoge1xyXG4gICAgICAgICAgICBtYWluOiAnIzY0NzQ4QicsXHJcbiAgICAgICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICAgIGxpZ2h0R3JlZW46ICcjMjdENkJEJyxcclxuICAgIGRhcmtlckdyZWVuOiAnIzJiOTM4NCdcclxufVxyXG5cclxuY29uc3QgYmxvY2tzID0gW1xyXG4gICAgeyB0aXRsZTogJ1N1cHBvcnQgZMOpZGnDqScsIGNvbnRlbnQ6IFsn4pyTIEZBUScsICfinJMgUmVzc291cmNlcycsICfinJMgQ2hhdGJvdCddLCBpY29uOiBGYURlc2t0b3AgfSxcclxuICAgIHsgdGl0bGU6ICdPbmxpbmUgUmVwb3J0aW5nJywgY29udGVudDogJ1RvdXMgdm9zIHLDqXN1bHRhdHMgZGUgY2FtcGFnbmUsIGNyb3NzIHBsYXR0Zm9ybXMgZXQgY3Jvc3MgZGV2aWNlcywgYXUgY29ldXIgZFxcJ3VuZSBtw6ptZSBpbmZlcmZhY2UgcGVyc29ubmFsaXNhYmxlJywgaWNvbjogRmFMYXllckdyb3VwLCB2YXJpYW50OiBjb2xvcnMubGlnaHRHcmVlbiB9LFxyXG4gICAgeyB0aXRsZTogJ01hcmtldHBsYWNlJywgY29udGVudDogWyfinJMgSW5mbHVlbmNlJywgJ+KckyBWUiAmIEluLUdhbWluZy1BZHMnLCAn4pyTIEZvcm1hdHMgaW5ub3ZhbnRzJywgJ+KckyBBc3NldHMgY3LDqWFzJ10sIGljb246IEZhUGFpbnRCcnVzaCB9LFxyXG4gICAgeyB0aXRsZTogJ1LDqWFjdGl2aXTDqScsIGNvbnRlbnQ6ICdMYW5jZW1lbnQgZXQgb3B0aW1pc2F0aW9ucyBkZSBjYW1wYWduZXMgNy83JywgaWNvbjogRmFEZXNrdG9wIH0sXHJcbiAgICB7IHRpdGxlOiAnRXhwZXJ0aXNlJywgY29udGVudDogJ1VuZSBzcXVhZCBtdWx0aS1jZXJ0aWZpw6llJywgaWNvbjogRmFMYXllckdyb3VwLCB2YXJpYW50OiBjb2xvcnMubGlnaHRHcmVlbiB9LFxyXG4gICAgeyB0aXRsZTogJ1BlcmZvcm1hbmNlJywgY29udGVudDogJ0xlcyBhY3RpdmF0aW9ucyBsZXMgcGx1cyBwZXJmb3JtYW50ZXMgc2Vsb24gdm9zIG9iamVjdGlmcycsIGljb246IEZhUGFpbnRCcnVzaCB9LFxyXG5dXHJcblxyXG5cclxuY29uc3QgcHJpY2luZyA9IHsgdGl0bGU6ICdQcmljaW5nJywgc3VidGl0bGU6ICdBdWN1biBob25vcmFpcmUsIGF1Y3VuIGZyYWlzLCBhdWN1bmUgY29tbWlzc2lvbiwgdG91dCBlc3QgY29tcHJpcyBkYW5zIGxlIHByaXggIScsIHRleHQ6ICdVbiB0YXJpZiB1bmlxdWUgY29tcHJlbmFudCBsXFwnYWNoYXQgZFxcJ2VzcGFjZSBtw6lkaWFzLCBub3MgaG9ub3JhaXJlcywgbm9zIGZyYWlzIGRcXCdhZC1zZXJ2aW5nLCBsXFwnYXVkaXQgZGVzIGNyw6lhcywgbGUgdGVtcHMgaHVtYWluIHBhc3PDqSBzdXIgbGEgY2FtcGFnbmUsIGxlcyBmZWVzIERTUC4uLiBPcHRleiBwb3VyIGxlIGFsbC1pbmNsdXNpdmUgIScgfVxyXG5cclxuY29uc3QgbW9kZWxzID0gW1xyXG4gICAgeyB0YWc6ICdNaXNlIGVuIHBsYWNlJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy9wYXlfb25saW5lLnN2ZycsIHRpdGxlOiAnVW4gbW9kw6hsZSBzaW1wbGlmacOpJywgc3BlY3M6IFsnUHVibGlzaGluZycsICdUcmFkaW5nJywgJ0N1c3RvbSBTdWNjZXNzIE1hbmFnZW1lbnQnLCAnVHJhZmZpYyBNYW5hZ2VtZW50JywgJ0NvbnN1bHRpbmcnLCAnTWFya2V0cGxhY2UnLCAnPT4gPGI+MSBzZXVsPC9iPiBjb250YWN0IHBvdXIgdG91cyB2b3MgYmVzb2lucyddLCBjb2xvcjogJyMyN0Q2QkQnIH0sXHJcbiAgICB7IHRhZzogJ0ZyYWlzIHRlY2hub2xvZ2lxdWVzJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy91bmRyYXcuc3ZnJywgdGl0bGU6ICdBdWN1biBmcmFpcyBhZGRpdGlvbm5lbHMnLCBzcGVjczogWycwIGZyYWlzIGRcXCdBdWRpdCBkZSBjcsOpYXMnLCAnMCBmcmFpcyBkXFwnQWRzZXJ2aW5nJywgJzAgZnJhaXMgZGUgRFNQJywgJzAgZnJhaXMgZGUgRGF0YScsICcwIGZyYWlzIGRlIGNpYmxhZ2UgY29udGV4dHVlbCcsICcwIGZyYWlzIGRlIHBhcnRlbmFpcmVzIGRpdmVyc2VzJ10sIGNvbG9yOiAnIzU5QTBEOCcgfSxcclxuICAgIHsgdGFnOiAnU291cGxlc3NlJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy9zaGFyZWRfZ29hbHMuc3ZnJywgdGl0bGU6ICdTYW5zIGVuZ2FnZW1lbnQnLCBzcGVjczogWydDYW1wYWduZXMgw6AgbGEgcGVyZm9ybWFuY2UnLCAnVGVzdCAmIExlYXJuJywgJ0FnaWxpdMOpICYgUsOpYWN0aXZpdMOpJ10sIGNvbG9yOiAnIzg5NkFGNCcgfSxcclxuXVxyXG5cclxuY29uc3QgcGFja3MgPSBbXHJcbiAgICB7IHRpdGxlOiAnRGlnaXRhbCBOb21hZCcsIGRlc2NyaXB0aW9uOiAnUG91ciBjZXV4IHF1aSB2ZXVsZW50IHVuZSBleHDDqXJpZW5jZSAxMDAgJSBTZWxmLVNlcnZpY2UnLCBidWRnZXQ6ICcnLCBjb250ZW50OiBbJ0xhbmNlbWVudCBkZSBjYW1wYWduZXMgZW4gc2VsZiBzZXJ2aWNlJywgJ1RvdXMgbGVzIGludmVudGFpcmVzIHByb2dyYW1tYXRpcXVlcycsICdTdHJhdMOpZ2llcyBjbMOpIGVuIG1haW4gc2Vsb24gdm9zIG9iamVjdGlmcycsICdUaWNrZXRpbmcgU3VwcG9ydCddIH0sXHJcbiAgICB7IHRpdGxlOiAnRGlnaXRhbCBFeHBlcnQnLCBkZXNjcmlwdGlvbjogJ1BvdXIgY2V1eCBxdWkgdmV1bGVudCBsZXMgbWVpbGxldXJzIGV4cGVydHMnLCBidWRnZXQ6ICfDgCBQQVJUSVIgREUgMTAwIEsgQU5OVUVMUycsIGNvbnRlbnQ6IFsnQWNjb3VudCBTdHJhdGVnaXN0IFNlbmlvciDDoCB2b3RyZSBzZXJ2aWNlJywgJ1VuIGRpcmVjdGV1ciBjb25zZWlsIHByw6lzZW50IHN1ciBsZXMgbWVldGluZ3Mgc3RyYXTDqWdpcXVlcycsICdBL0IgVGVzdGluZyBldCBtdWx0aS1zY8OpbmFyaXNhdGlvbiBkZXMgY2FtcGFnbmVzJywgJ0LDqnRhLVRlc3RpbmcgZW4gZXhjbHVzaXZpdMOpIGRlcyBkZXJuacOocmVzIGlubm92YXRpb25zIGRpZ2l0YWxlcycsICdBY2PDqHMgw6Agbm90cmUgc3F1YWQgZFxcJ2V4cGVydHMgc2Vsb24gdm9zIGJlc29pbnMgKFB1Ymxpc2hpbmcsIEF0dHJpYnV0aW9uLCBUcmFmaWMsIFNFQSwgU29jaWFsLi4uKSddLCB2YXJpYW50OiBjb2xvcnMubGlnaHRHcmVlbiB9LFxyXG4gICAgeyB0aXRsZTogJ0RpZ2l0YWwgRnJpZW5kJywgZGVzY3JpcHRpb246ICdQb3VyIGNldXggcXVpIHZldWxlbnQgZGUgbFxcJ2FpZGUgc3VyIGxldXJzIHN0cmF0w6lnaWVzIGRpZ2l0YWxlcycsIGJ1ZGdldDogJ8OAIFBBUlRJUiBERSAyNSBLIEFOTlVFTFMnLCBjb250ZW50OiBbJ0FjY291bnQgU3RyYXRlZ2lzdCBkw6lkacOpJywgJ1RvdXQgbm90cmUgY2F0YWxvZ3VlIHByb2R1aXRzJywgJ1JlY29tbWFuZGF0aW9ucyBzdHJhdMOpZ2lxdWVzIHN1ciBtZXN1cmUnLCAnQWNjb21wYWdlbWVudCBvdSBkw6l2ZWxvcHBlbWVudCBkZXMgYXNzZXRzIGNyw6lhcycsICdTdXBwb3J0IHRlY2huaXF1ZSBodW1haW4gc3VyIGxlIHRyYWNraW5nJ10gfVxyXG5dXHJcblxyXG5jb25zdCBwcmVtaXVtQ29udGVudCA9IFtcclxuICAgICdMZXMgbWVpbGxldXJzIEFjY291bnQgU3RyYXRlZ2lzdHMgJiBLZXkgQWNjb3VudCBNYW5hZ2VycycsXHJcbiAgICAnTm90cmUgU3F1YWQgZFxcJ2V4cGVydHMgw6Agdm90cmUgc2VydmljZSAoUHVibGlzaGluZywgVHJhZmljLCBTRUEsIEFzc2V0cyBjcsOpYXMuLi4pJyxcclxuICAgICdBL0IgVGVzdGluZyBldCBtdWx0aS1zY8OpbmFyaXNhdGlvbiBkZXMgY2FtcGFnbmVzJyxcclxuICAgICdNZWRpYSBQbGFubmluZyBldCBBdWRpZW5jZXMgUGxhbm5pbmcnLFxyXG4gICAgJ0FuYWx5c2UgY29uY3VyZW50aWVsbGUnLFxyXG4gICAgJ0JlbmNobWFyayBQZXJmb3JtYW5jZXMgZXQgw4l0dWRlcycsXHJcbiAgICAnQ29uc3VsdGluZyAoQ29udGVudHMsIFN0cmF0w6lnaWUsIFNFTy4uKScsXHJcbiAgICAnRm9ybWF0aW9uJ1xyXG5dXHJcblxyXG5jb25zdCBpT1NCb3hTaGFkb3cgPVxyXG4gICcwIDNweCAxcHggcmdiYSgwLDAsMCwwLjEpLDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMTMpLDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDIpJztcclxuXHJcbmNvbnN0IG1hcmtzID0gW1xyXG4gIHtcclxuICAgIHZhbHVlOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDIwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDM3LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDEwMCxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgSU9TU2xpZGVyID0gc3R5bGVkKFNsaWRlcikoKHsgdGhlbWUgfSkgPT4gKHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdkYXJrJyA/ICcjMzg4MGZmJyA6ICcjMzg4MGZmJyxcclxuICAgIGhlaWdodDogOCxcclxuICAgIHBhZGRpbmc6ICcxNXB4IDAnLFxyXG4gICAgJyYgLk11aVNsaWRlci10aHVtYic6IHtcclxuICAgICAgaGVpZ2h0OiAyOCxcclxuICAgICAgd2lkdGg6IDI4LFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgYm94U2hhZG93OiBpT1NCb3hTaGFkb3csXHJcbiAgICAgICcmOmZvY3VzLCAmOmhvdmVyLCAmLk11aS1hY3RpdmUnOiB7XHJcbiAgICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgICAgJzAgM3B4IDFweCByZ2JhKDAsMCwwLDAuMSksMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4zKSwwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjAyKScsXHJcbiAgICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcclxuICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XHJcbiAgICAgICAgICBib3hTaGFkb3c6IGlPU0JveFNoYWRvdyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlTbGlkZXItdmFsdWVMYWJlbCc6IHtcclxuICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgdG9wOiAtNixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMubGlnaHRHcmVlbixcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiAqJzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2RhcmsnID8gJyNmZmYnIDogJyMwMDAnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlTbGlkZXItdHJhY2snOiB7XHJcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICBoZWlnaHQ6IDgsXHJcbiAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpU2xpZGVyLXJhaWwnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2JmYmZiZicsXHJcbiAgICAgIGhlaWdodDogOCxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpU2xpZGVyLW1hcmsnOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNiZmJmYmYnLFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICB3aWR0aDogMSxcclxuICAgICAgJyYuTXVpU2xpZGVyLW1hcmtBY3RpdmUnOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5jb25zdCBTdHlsZWRTbGlkZXIgPSBzdHlsZWQoU2xpZGVyKSgoKSA9PiAoe1xyXG4gICAgJyYgLk11aVNsaWRlci10aHVtYic6IHtcclxuICAgICAgICBoZWlnaHQ6IDMyLFxyXG4gICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICBib3hTaGFkb3c6ICcwIDNweCAxcHggcmdiYSgwLDAsMCwwLjEpLDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMTMpLDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDIpJyxcclxuICAgICAgICAnJjpmb2N1cywgJjpob3ZlciwgJi5NdWktYWN0aXZlJzoge1xyXG4gICAgICAgICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgICAgICAgJzAgM3B4IDFweCByZ2JhKDAsMCwwLDAuMSksMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4zKSwwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjAyKScsXHJcbiAgICAgICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XHJcbiAgICAgICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcclxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDNweCAxcHggcmdiYSgwLDAsMCwwLjEpLDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMTMpLDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDIpJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aVNsaWRlci12YWx1ZUxhYmVsJzoge1xyXG4gICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd1bnNldCcsXHJcbiAgICAgICAgLy8gY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmIConOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgLy8gICBjb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyAnI2ZmZicgOiAnIzAwMCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgJyYgLk11aVNsaWRlci10cmFjayc6IHtcclxuICAgICAgICBoZWlnaHQ6IDYsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiAuTXVpU2xpZGVyLXJhaWwnOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNiZmJmYmYnLFxyXG4gICAgICAgIGhlaWdodDogNixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDMsXHJcbiAgICAgIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHNzZCB9KSB7XHJcbiAgICBjb25zdCBbdmFsdWVTbGlkZXIsIHNldFZhbHVlU2xpZGVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3ZhbHVlU2xpZGVyMiwgc2V0VmFsdWVTbGlkZXIyXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlU2xpZGVyKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZTIgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZVNsaWRlcjIobmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1vZmZyZXMnPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5LbG94IHwgTm9zIG9mZnJlczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgbmF2YmFyPXtzc2QubmF2YmFyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3ByaWNpbmcudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cHJpY2luZy5zdWJ0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3ByaWNpbmcudGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZWxzLm1hcCgobW9kZWwsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RlbENhcmQga2V5PXtpZHh9IG1vZGVsPXttb2RlbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlcy10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5EZXMgcGFja3MgYWRhcHTDqXMgw6Agdm9zIGJlc29pbnM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYWNrcy5tYXAoKHBhY2ssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWNrQ2FyZCBwYWNrPXtwYWNrfSBrZXk9e2lkeH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbWl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFNpemU6ICc1MHB4JyB9fT5FbnZpZSBkJ3VuZSBvZmZyZSBQcmVtaXVtwqA/PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVtaXVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmVtaXVtLWNvbnRlbnQtbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+w4AgcGFydGlyIGRlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjQwMMKgS8Kg4oKsPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PmFubnVlbHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkN1c3RvbWlzYXRpb24gcG9zc2libGXCoCE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgc3g9e3sgYmdjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sIGNvbG9yOiAnd2hpdGUnLCAnJjpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZGFya2VyR3JlZW4gfSwgcGFkZGluZzogJzE1cHgnLCBtYXJnaW46ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW4gc2F2b2lyIHBsdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZW1pdW0tY29udGVudC1yaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlbWl1bUNvbnRlbnQubWFwKChjb250ZW50LCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxMHB4JyB9fSBrZXk9e2lkeH0+PEZhQ2hlY2tDaXJjbGUgc2l6ZT17MjB9IGNvbG9yPXtjb2xvcnMubGlnaHRHcmVlbn0gLz57Y29udGVudH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyZ3VtZW50cy1vZmZlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nYXJndW1lbnRzLXRpdGxlJz5QZXUgaW1wb3J0ZSBsJ29mZnJlLCBvbiB2b3VzIGdhcmFudGl0wqA6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9ja3MubWFwKChibG9jaywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrIGJsb2NrPXtibG9ja30ga2V5PXtpZHh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5FbnZpZSBkJ2VuIGTDqWNvdXZyaXIgcGx1c8KgPzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYW5hbHl0aWNzLWJ1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhcmtlckdyZWVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5Db250YWN0ZXotbm91c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVycy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnMtY29udGVudC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1sYWJlbCc+Q29tYmllbiBkZSA8c3BhbiBzdHlsZT17eyBjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4gfX0+ZmFjdHVyZXMgZm91cm5pc3NldXJzIHRyYWl0ZXotdm91czwvc3Bhbj4gcGFyIG1vaXMgPzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMzBweCcgfX0+KEVzdGltZXogZW4gbW95ZW5uZSBwYXIgbW9pcyk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFNsaWRlciB2YWx1ZT17dmFsdWVTbGlkZXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlTGFiZWxEaXNwbGF5PVwib25cIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU2xpZGVyIGlkPSdzdHlsZWQtc2xpZGVyJyB2YWx1ZT17dmFsdWVTbGlkZXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlTGFiZWxEaXNwbGF5PVwib25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVycy1jb250ZW50LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyLWxhYmVsJz5Db21iaWVuIGRlIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBjb2xvcnMubGlnaHRHcmVlbiB9fT5iYW5xdWVzPC9zcGFuPiBhbGxlei12b3VzIGNvbm5lY3RlciA/PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICczMHB4JyB9fT4oTGUgbm9tYnJlIGRlIGNvbXB0ZXMgYXUgc2VpbiBkJ3VuIG3Dqm1lIGJhbnF1ZSBlc3QgaWxsaW1pdMOpKTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJT1NTbGlkZXIgdmFsdWU9e3ZhbHVlU2xpZGVyMn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTJ9IHZhbHVlTGFiZWxEaXNwbGF5PVwib25cIiBtYXJrcz17bWFya3N9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJzLWNvbnRlbnQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhaXRlcyA8c3BhbiBzdHlsZT17eyBjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4gfX0+IGNvbGxhYm9yZXI8L3NwYW4+IHZvcyBzZXJ2aWNlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmljZSc+MTnigqw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdodCc+SFQvTW9pczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7inJMgPGI+QWNjw6hzIMOgIGwnZW5zZW1ibGUgZGVzIGZvbmN0aW9ubmFsaXTDqXM8L2I+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+4pyTIFN1cHBvcnQgY2xpZW50PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+4pyTIMOJcXVpcMOpIGTDqWRpw6llIGF1IGxhbmNlbWVudCBldCDDoCBsJ2FjY29tcGFnbmVtZW50PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgaHJlZj0nLycgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiBjb2xvcnMubGlnaHRHcmVlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHsgYmdjb2xvcjogY29sb3JzLmRhcmtlckdyZWVuIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIETDqW1hcnJlciBtYWludGVuYW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgY29uc3QgR0VUQllTTFVHID0gZ3FsYFxyXG4gICAge1xyXG4gICAgICAgIG1lbnUoaWQ6IDEpIHtcclxuICAgICAgICAgICAgbmF2YmFyIHtcclxuICAgICAgICAgICAgICAgIGxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfaHJlZlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGN0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlcihpZDogMSkge1xyXG4gICAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICAgICAgbG9nb19mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmxvY2tfc29jaWFsX2hlYWRpbmdcclxuICAgICAgICAgICAgICAgIHJlc2VhdV9zb2NpYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25cclxuICAgICAgICAgICAgICAgICAgICBocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuYXZJdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19ocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RfbGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnlfZmxhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZVRleHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbWVudTogeyBuYXZiYXIgfSxcclxuICAgICAgICAgICAgZm9vdGVyOiB7IGZvb3RlciB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogR0VUQllTTFVHLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBzc2Q6IHtcclxuICAgICAgICAgICAgICAgIG5hdmJhcixcclxuICAgICAgICAgICAgICAgIGZvb3RlcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9