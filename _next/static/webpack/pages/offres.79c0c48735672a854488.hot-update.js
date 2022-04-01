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
    },
    '& .MuiSlider-valueLabel': {
      fontSize: 12,
      fontWeight: 'normal',
      top: -6,
      backgroundColor: 'unset',
      // color: theme.palette.text.primary,
      '&:before': {
        display: 'none'
      },
      '& *': {
        background: 'transparent' //   color: theme.palette.mode === 'dark' ? '#fff' : '#000',

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
        lineNumber: 123,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {
      theme: theme,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {
          navbar: ssd.navbar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pricing-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pricing",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: pricing.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: pricing.subtitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: pricing.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "model",
            children: models.map(function (model, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_ModelCard__WEBPACK_IMPORTED_MODULE_4__.default, {
                model: model
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "services",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "services-top",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: "Des packs adapt\xE9s \xE0 vos besoins"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "offers",
            children: packs.map(function (pack, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_PackCard__WEBPACK_IMPORTED_MODULE_5__.default, {
                pack: pack
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
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
            lineNumber: 155,
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
                  lineNumber: 159,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  children: "400\xA0K\xA0\u20AC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    textAlign: 'center'
                  },
                  children: "annuels"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "Customisation possible\xA0!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
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
                lineNumber: 164,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 157,
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
                      lineNumber: 171,
                      columnNumber: 118
                    }, _this), content]
                  }, idx, true, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "arguments-offers",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "arguments-title",
            children: "Peu importe l'offre, on vous garantit\xA0:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "blocks",
            children: blocks.map(function (block, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_Block__WEBPACK_IMPORTED_MODULE_2__.default, {
                block: block
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "discover",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Envie d'en d\xE9couvrir plus\xA0?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
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
            lineNumber: 189,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
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
                  lineNumber: 210,
                  columnNumber: 74
                }, this), " par mois ?"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  marginBottom: '30px'
                },
                children: "(Estimez en moyenne par mois)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
                value: valueSlider,
                onChange: handleChange,
                valueLabelDisplay: "on"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 209,
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
                  lineNumber: 216,
                  columnNumber: 74
                }, this), " allez-vous connecter ?"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  marginBottom: '30px'
                },
                children: "(Le nombre de comptes au sein d'un m\xEAme banque est illimit\xE9)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Slider, {
                value: valueSlider2,
                onChange: handleChange2,
                valueLabelDisplay: "on",
                min: 1,
                max: 20
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 215,
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
                lineNumber: 221,
                columnNumber: 40
              }, this), " vos services."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "subscription",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "price",
              children: "19\u20AC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ht",
              children: "HT/Mois"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: ["\u2713 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "Acc\xE8s \xE0 l'ensemble des fonctionnalit\xE9s"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 39
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "\u2713 Support client"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "\u2713 \xC9quip\xE9 d\xE9di\xE9e au lancement et \xE0 l'accompagnement"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
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
              lineNumber: 232,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb2ZmcmVzLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlVGhlbWUiLCJzdGF0dXMiLCJkYW5nZXIiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJkYXJrZXIiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJuZXV0cmFsIiwiY29sb3JzIiwibGlnaHRHcmVlbiIsImRhcmtlckdyZWVuIiwiYmxvY2tzIiwidGl0bGUiLCJjb250ZW50IiwiaWNvbiIsIkZhRGVza3RvcCIsIkZhTGF5ZXJHcm91cCIsInZhcmlhbnQiLCJGYVBhaW50QnJ1c2giLCJwcmljaW5nIiwic3VidGl0bGUiLCJ0ZXh0IiwibW9kZWxzIiwidGFnIiwiaW1hZ2UiLCJzcGVjcyIsImNvbG9yIiwicGFja3MiLCJkZXNjcmlwdGlvbiIsImJ1ZGdldCIsInByZW1pdW1Db250ZW50IiwiU3R5bGVkU2xpZGVyIiwic3R5bGVkIiwiU2xpZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0b3AiLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsIkhvbWUiLCJzc2QiLCJ1c2VTdGF0ZSIsInZhbHVlU2xpZGVyIiwic2V0VmFsdWVTbGlkZXIiLCJ2YWx1ZVNsaWRlcjIiLCJzZXRWYWx1ZVNsaWRlcjIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmV3VmFsdWUiLCJoYW5kbGVDaGFuZ2UyIiwibmF2YmFyIiwibWFwIiwibW9kZWwiLCJpZHgiLCJwYWNrIiwidGV4dEFsaWduIiwiYmdjb2xvciIsInBhZGRpbmciLCJtYXJnaW4iLCJhbGlnbkl0ZW1zIiwiZ2FwIiwiYmxvY2siLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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QUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0k7QUFBQSxzQ0FDSTtBQUFBLG1EQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKLGVBUUksOERBQUMsMERBQUQ7QUFBUSxxQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGtCQUFJLEVBQUMsR0FBakM7QUFBcUMsZ0JBQUUsRUFBRTtBQUNyQ21ELHVCQUFPLEVBQUVwRCxNQUFNLENBQUNDLFVBRHFCO0FBRXJDLDJCQUFXO0FBQUVtRCx5QkFBTyxFQUFFcEQsTUFBTSxDQUFDRTtBQUFsQjtBQUYwQixlQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEhIOztHQXZJdUJpQyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29mZnJlcy43OWMwYzQ4NzM1NjcyYTg1NDQ4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9vZmZyZXMvQmxvY2snXHJcbmltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIHdpdGhUaGVtZSB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgeyBGYURlc2t0b3AsIEZhTGF5ZXJHcm91cCwgRmFQYWludEJydXNoLCBGYUNoZWNrQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbi8vIGltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcclxuaW1wb3J0IHsgYXBvbGxvQ2xpZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0cmFwaVwiO1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IE1vZGVsQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL29mZnJlcy9Nb2RlbENhcmQnXHJcbmltcG9ydCBQYWNrQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL29mZnJlcy9QYWNrQ2FyZCdcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gICAgc3RhdHVzOiB7XHJcbiAgICAgICAgZGFuZ2VyOiAnI2U1M2UzZScsXHJcbiAgICB9LFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICAgICAgbWFpbjogJyMzMDU1RDMnLFxyXG4gICAgICAgICAgICBkYXJrZXI6ICcjMDUzZTg1JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgICAgICBtYWluOiAncmdiYSgyNTMsIDI1NCwgMjU1LCAwLjE1KScsXHJcbiAgICAgICAgICAgIGNvbnRyYXN0VGV4dDogJ3doaXRlJyxcclxuICAgICAgICAgICAgZGFya2VyOiAnIzA1M2U4NScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXV0cmFsOiB7XHJcbiAgICAgICAgICAgIG1haW46ICcjNjQ3NDhCJyxcclxuICAgICAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgY29sb3JzID0ge1xyXG4gICAgbGlnaHRHcmVlbjogJyMyN0Q2QkQnLFxyXG4gICAgZGFya2VyR3JlZW46ICcjMmI5Mzg0J1xyXG59XHJcblxyXG5jb25zdCBibG9ja3MgPSBbXHJcbiAgICB7IHRpdGxlOiAnU3VwcG9ydCBkw6lkacOpJywgY29udGVudDogWyfinJMgRkFRJywgJ+KckyBSZXNzb3VyY2VzJywgJ+KckyBDaGF0Ym90J10sIGljb246IEZhRGVza3RvcCB9LFxyXG4gICAgeyB0aXRsZTogJ09ubGluZSBSZXBvcnRpbmcnLCBjb250ZW50OiAnVG91cyB2b3MgcsOpc3VsdGF0cyBkZSBjYW1wYWduZSwgY3Jvc3MgcGxhdHRmb3JtcyBldCBjcm9zcyBkZXZpY2VzLCBhdSBjb2V1ciBkXFwndW5lIG3Dqm1lIGluZmVyZmFjZSBwZXJzb25uYWxpc2FibGUnLCBpY29uOiBGYUxheWVyR3JvdXAsIHZhcmlhbnQ6IGNvbG9ycy5saWdodEdyZWVuIH0sXHJcbiAgICB7IHRpdGxlOiAnTWFya2V0cGxhY2UnLCBjb250ZW50OiBbJ+KckyBJbmZsdWVuY2UnLCAn4pyTIFZSICYgSW4tR2FtaW5nLUFkcycsICfinJMgRm9ybWF0cyBpbm5vdmFudHMnLCAn4pyTIEFzc2V0cyBjcsOpYXMnXSwgaWNvbjogRmFQYWludEJydXNoIH0sXHJcbiAgICB7IHRpdGxlOiAnUsOpYWN0aXZpdMOpJywgY29udGVudDogJ0xhbmNlbWVudCBldCBvcHRpbWlzYXRpb25zIGRlIGNhbXBhZ25lcyA3LzcnLCBpY29uOiBGYURlc2t0b3AgfSxcclxuICAgIHsgdGl0bGU6ICdFeHBlcnRpc2UnLCBjb250ZW50OiAnVW5lIHNxdWFkIG11bHRpLWNlcnRpZmnDqWUnLCBpY29uOiBGYUxheWVyR3JvdXAsIHZhcmlhbnQ6IGNvbG9ycy5saWdodEdyZWVuIH0sXHJcbiAgICB7IHRpdGxlOiAnUGVyZm9ybWFuY2UnLCBjb250ZW50OiAnTGVzIGFjdGl2YXRpb25zIGxlcyBwbHVzIHBlcmZvcm1hbnRlcyBzZWxvbiB2b3Mgb2JqZWN0aWZzJywgaWNvbjogRmFQYWludEJydXNoIH0sXHJcbl1cclxuXHJcblxyXG5jb25zdCBwcmljaW5nID0geyB0aXRsZTogJ1ByaWNpbmcnLCBzdWJ0aXRsZTogJ0F1Y3VuIGhvbm9yYWlyZSwgYXVjdW4gZnJhaXMsIGF1Y3VuZSBjb21taXNzaW9uLCB0b3V0IGVzdCBjb21wcmlzIGRhbnMgbGUgcHJpeCAhJywgdGV4dDogJ1VuIHRhcmlmIHVuaXF1ZSBjb21wcmVuYW50IGxcXCdhY2hhdCBkXFwnZXNwYWNlIG3DqWRpYXMsIG5vcyBob25vcmFpcmVzLCBub3MgZnJhaXMgZFxcJ2FkLXNlcnZpbmcsIGxcXCdhdWRpdCBkZXMgY3LDqWFzLCBsZSB0ZW1wcyBodW1haW4gcGFzc8OpIHN1ciBsYSBjYW1wYWduZSwgbGVzIGZlZXMgRFNQLi4uIE9wdGV6IHBvdXIgbGUgYWxsLWluY2x1c2l2ZSAhJyB9XHJcblxyXG5jb25zdCBtb2RlbHMgPSBbXHJcbiAgICB7IHRhZzogJ01pc2UgZW4gcGxhY2UnLCBpbWFnZTogJy9pbWFnZXMvb2ZmcmVzL3BheV9vbmxpbmUuc3ZnJywgdGl0bGU6ICdVbiBtb2TDqGxlIHNpbXBsaWZpw6knLCBzcGVjczogWydQdWJsaXNoaW5nJywgJ1RyYWRpbmcnLCAnQ3VzdG9tIFN1Y2Nlc3MgTWFuYWdlbWVudCcsICdUcmFmZmljIE1hbmFnZW1lbnQnLCAnQ29uc3VsdGluZycsICdNYXJrZXRwbGFjZScsICc9PiA8Yj4xIHNldWw8L2I+IGNvbnRhY3QgcG91ciB0b3VzIHZvcyBiZXNvaW5zJ10sIGNvbG9yOiAnIzI3RDZCRCcgfSxcclxuICAgIHsgdGFnOiAnRnJhaXMgdGVjaG5vbG9naXF1ZXMnLCBpbWFnZTogJy9pbWFnZXMvb2ZmcmVzL3VuZHJhdy5zdmcnLCB0aXRsZTogJ0F1Y3VuIGZyYWlzIGFkZGl0aW9ubmVscycsIHNwZWNzOiBbJzAgZnJhaXMgZFxcJ0F1ZGl0IGRlIGNyw6lhcycsICcwIGZyYWlzIGRcXCdBZHNlcnZpbmcnLCAnMCBmcmFpcyBkZSBEU1AnLCAnMCBmcmFpcyBkZSBEYXRhJywgJzAgZnJhaXMgZGUgY2libGFnZSBjb250ZXh0dWVsJywgJzAgZnJhaXMgZGUgcGFydGVuYWlyZXMgZGl2ZXJzZXMnXSwgY29sb3I6ICcjNTlBMEQ4JyB9LFxyXG4gICAgeyB0YWc6ICdTb3VwbGVzc2UnLCBpbWFnZTogJy9pbWFnZXMvb2ZmcmVzL3NoYXJlZF9nb2Fscy5zdmcnLCB0aXRsZTogJ1NhbnMgZW5nYWdlbWVudCcsIHNwZWNzOiBbJ0NhbXBhZ25lcyDDoCBsYSBwZXJmb3JtYW5jZScsICdUZXN0ICYgTGVhcm4nLCAnQWdpbGl0w6kgJiBSw6lhY3Rpdml0w6knXSwgY29sb3I6ICcjODk2QUY0JyB9LFxyXG5dXHJcblxyXG5jb25zdCBwYWNrcyA9IFtcclxuICAgIHsgdGl0bGU6ICdEaWdpdGFsIE5vbWFkJywgZGVzY3JpcHRpb246ICdQb3VyIGNldXggcXVpIHZldWxlbnQgdW5lIGV4cMOpcmllbmNlIDEwMCAlIFNlbGYtU2VydmljZScsIGJ1ZGdldDogJycsIGNvbnRlbnQ6IFsnTGFuY2VtZW50IGRlIGNhbXBhZ25lcyBlbiBzZWxmIHNlcnZpY2UnLCAnVG91cyBsZXMgaW52ZW50YWlyZXMgcHJvZ3JhbW1hdGlxdWVzJywgJ1N0cmF0w6lnaWVzIGNsw6kgZW4gbWFpbiBzZWxvbiB2b3Mgb2JqZWN0aWZzJywgJ1RpY2tldGluZyBTdXBwb3J0J10gfSxcclxuICAgIHsgdGl0bGU6ICdEaWdpdGFsIEV4cGVydCcsIGRlc2NyaXB0aW9uOiAnUG91ciBjZXV4IHF1aSB2ZXVsZW50IGxlcyBtZWlsbGV1cnMgZXhwZXJ0cycsIGJ1ZGdldDogJ8OAIFBBUlRJUiBERSAxMDAgSyBBTk5VRUxTJywgY29udGVudDogWydBY2NvdW50IFN0cmF0ZWdpc3QgU2VuaW9yIMOgIHZvdHJlIHNlcnZpY2UnLCAnVW4gZGlyZWN0ZXVyIGNvbnNlaWwgcHLDqXNlbnQgc3VyIGxlcyBtZWV0aW5ncyBzdHJhdMOpZ2lxdWVzJywgJ0EvQiBUZXN0aW5nIGV0IG11bHRpLXNjw6luYXJpc2F0aW9uIGRlcyBjYW1wYWduZXMnLCAnQsOqdGEtVGVzdGluZyBlbiBleGNsdXNpdml0w6kgZGVzIGRlcm5pw6hyZXMgaW5ub3ZhdGlvbnMgZGlnaXRhbGVzJywgJ0FjY8OocyDDoCBub3RyZSBzcXVhZCBkXFwnZXhwZXJ0cyBzZWxvbiB2b3MgYmVzb2lucyAoUHVibGlzaGluZywgQXR0cmlidXRpb24sIFRyYWZpYywgU0VBLCBTb2NpYWwuLi4pJ10sIHZhcmlhbnQ6IGNvbG9ycy5saWdodEdyZWVuIH0sXHJcbiAgICB7IHRpdGxlOiAnRGlnaXRhbCBGcmllbmQnLCBkZXNjcmlwdGlvbjogJ1BvdXIgY2V1eCBxdWkgdmV1bGVudCBkZSBsXFwnYWlkZSBzdXIgbGV1cnMgc3RyYXTDqWdpZXMgZGlnaXRhbGVzJywgYnVkZ2V0OiAnw4AgUEFSVElSIERFIDI1IEsgQU5OVUVMUycsIGNvbnRlbnQ6IFsnQWNjb3VudCBTdHJhdGVnaXN0IGTDqWRpw6knLCAnVG91dCBub3RyZSBjYXRhbG9ndWUgcHJvZHVpdHMnLCAnUmVjb21tYW5kYXRpb25zIHN0cmF0w6lnaXF1ZXMgc3VyIG1lc3VyZScsICdBY2NvbXBhZ2VtZW50IG91IGTDqXZlbG9wcGVtZW50IGRlcyBhc3NldHMgY3LDqWFzJywgJ1N1cHBvcnQgdGVjaG5pcXVlIGh1bWFpbiBzdXIgbGUgdHJhY2tpbmcnXSB9XHJcbl1cclxuXHJcbmNvbnN0IHByZW1pdW1Db250ZW50ID0gW1xyXG4gICAgJ0xlcyBtZWlsbGV1cnMgQWNjb3VudCBTdHJhdGVnaXN0cyAmIEtleSBBY2NvdW50IE1hbmFnZXJzJyxcclxuICAgICdOb3RyZSBTcXVhZCBkXFwnZXhwZXJ0cyDDoCB2b3RyZSBzZXJ2aWNlIChQdWJsaXNoaW5nLCBUcmFmaWMsIFNFQSwgQXNzZXRzIGNyw6lhcy4uLiknLFxyXG4gICAgJ0EvQiBUZXN0aW5nIGV0IG11bHRpLXNjw6luYXJpc2F0aW9uIGRlcyBjYW1wYWduZXMnLFxyXG4gICAgJ01lZGlhIFBsYW5uaW5nIGV0IEF1ZGllbmNlcyBQbGFubmluZycsXHJcbiAgICAnQW5hbHlzZSBjb25jdXJlbnRpZWxsZScsXHJcbiAgICAnQmVuY2htYXJrIFBlcmZvcm1hbmNlcyBldCDDiXR1ZGVzJyxcclxuICAgICdDb25zdWx0aW5nIChDb250ZW50cywgU3RyYXTDqWdpZSwgU0VPLi4pJyxcclxuICAgICdGb3JtYXRpb24nXHJcbl1cclxuXHJcbmNvbnN0IFN0eWxlZFNsaWRlciA9IHN0eWxlZChTbGlkZXIpKCgpID0+ICh7XHJcbiAgICAnJiAuTXVpU2xpZGVyLXRodW1iJzoge1xyXG4gICAgICAgIGhlaWdodDogMjgsXHJcbiAgICAgICAgd2lkdGg6IDI4LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIGJveFNoYWRvdzogJzAgM3B4IDFweCByZ2JhKDAsMCwwLDAuMSksMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4xMyksMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4wMiknLFxyXG4gICAgICAgICcmOmZvY3VzLCAmOmhvdmVyLCAmLk11aS1hY3RpdmUnOiB7XHJcbiAgICAgICAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICAgICAgICAnMCAzcHggMXB4IHJnYmEoMCwwLDAsMC4xKSwwIDRweCA4cHggcmdiYSgwLDAsMCwwLjMpLDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDIpJyxcclxuICAgICAgICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcclxuICAgICAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xyXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgM3B4IDFweCByZ2JhKDAsMCwwLDAuMSksMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4xMyksMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4wMiknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpU2xpZGVyLXZhbHVlTGFiZWwnOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgIHRvcDogLTYsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndW5zZXQnLFxyXG4gICAgICAgIC8vIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJiAqJzoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAvLyAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdkYXJrJyA/ICcjZmZmJyA6ICcjMDAwJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBzc2QgfSkge1xyXG4gICAgY29uc3QgW3ZhbHVlU2xpZGVyLCBzZXRWYWx1ZVNsaWRlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt2YWx1ZVNsaWRlcjIsIHNldFZhbHVlU2xpZGVyMl0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZVNsaWRlcihuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UyID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVTbGlkZXIyKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItb2ZmcmVzJz5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+S2xveCB8IE5vcyBvZmZyZXM8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIG5hdmJhcj17c3NkLm5hdmJhcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwcmljaW5nLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3ByaWNpbmcuc3VidGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcmljaW5nLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21vZGVscy5tYXAoKG1vZGVsLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kZWxDYXJkIGtleT17aWR4fSBtb2RlbD17bW9kZWx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+RGVzIHBhY2tzIGFkYXB0w6lzIMOgIHZvcyBiZXNvaW5zPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFja3MubWFwKChwYWNrLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFja0NhcmQgcGFjaz17cGFja30ga2V5PXtpZHh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZW1pdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnNTBweCcgfX0+RW52aWUgZCd1bmUgb2ZmcmUgUHJlbWl1bcKgPzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbWl1bS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJlbWl1bS1jb250ZW50LWxlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PsOAIHBhcnRpciBkZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj40MDDCoEvCoOKCrDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5hbm51ZWxzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5DdXN0b21pc2F0aW9uIHBvc3NpYmxlwqAhPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIHN4PXt7IGJnY29sb3I6IGNvbG9ycy5saWdodEdyZWVuLCBjb2xvcjogJ3doaXRlJywgJyY6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhcmtlckdyZWVuIH0sIHBhZGRpbmc6ICcxNXB4JywgbWFyZ2luOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIHNhdm9pciBwbHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmVtaXVtLWNvbnRlbnQtcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZW1pdW1Db250ZW50Lm1hcCgoY29udGVudCwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnMTBweCcgfX0ga2V5PXtpZHh9PjxGYUNoZWNrQ2lyY2xlIHNpemU9ezIwfSBjb2xvcj17Y29sb3JzLmxpZ2h0R3JlZW59IC8+e2NvbnRlbnR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmd1bWVudHMtb2ZmZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2FyZ3VtZW50cy10aXRsZSc+UGV1IGltcG9ydGUgbCdvZmZyZSwgb24gdm91cyBnYXJhbnRpdMKgOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvY2tzLm1hcCgoYmxvY2ssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9jayBibG9jaz17YmxvY2t9IGtleT17aWR4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjb3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+RW52aWUgZCdlbiBkw6ljb3V2cmlyIHBsdXPCoD88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2FuYWx5dGljcy1idXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6IGNvbG9ycy5saWdodEdyZWVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5kYXJrZXJHcmVlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+Q29udGFjdGV6LW5vdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlcnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnMtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJzLWNvbnRlbnQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXItbGFiZWwnPkNvbWJpZW4gZGUgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGNvbG9ycy5saWdodEdyZWVuIH19PmZhY3R1cmVzIGZvdXJuaXNzZXVycyB0cmFpdGV6LXZvdXM8L3NwYW4+IHBhciBtb2lzID88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzMwcHgnIH19PihFc3RpbWV6IGVuIG1veWVubmUgcGFyIG1vaXMpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxTbGlkZXIgdmFsdWU9e3ZhbHVlU2xpZGVyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZUxhYmVsRGlzcGxheT1cIm9uXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNsaWRlciB2YWx1ZT17dmFsdWVTbGlkZXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlTGFiZWxEaXNwbGF5PVwib25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnMtY29udGVudC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1sYWJlbCc+Q29tYmllbiBkZSA8c3BhbiBzdHlsZT17eyBjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4gfX0+YmFucXVlczwvc3Bhbj4gYWxsZXotdm91cyBjb25uZWN0ZXIgPzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMzBweCcgfX0+KExlIG5vbWJyZSBkZSBjb21wdGVzIGF1IHNlaW4gZCd1biBtw6ptZSBiYW5xdWUgZXN0IGlsbGltaXTDqSk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIHZhbHVlPXt2YWx1ZVNsaWRlcjJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UyfSB2YWx1ZUxhYmVsRGlzcGxheT1cIm9uXCIgbWluPXsxfSBtYXg9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnMtY29udGVudC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmFpdGVzIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBjb2xvcnMubGlnaHRHcmVlbiB9fT4gY29sbGFib3Jlcjwvc3Bhbj4gdm9zIHNlcnZpY2VzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByaWNlJz4xOeKCrDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2h0Jz5IVC9Nb2lzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuKckyA8Yj5BY2PDqHMgw6AgbCdlbnNlbWJsZSBkZXMgZm9uY3Rpb25uYWxpdMOpczwvYj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7inJMgU3VwcG9ydCBjbGllbnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7inJMgw4lxdWlww6kgZMOpZGnDqWUgYXUgbGFuY2VtZW50IGV0IMOgIGwnYWNjb21wYWduZW1lbnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBocmVmPScvJyBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6IGNvbG9ycy5saWdodEdyZWVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzogeyBiZ2NvbG9yOiBjb2xvcnMuZGFya2VyR3JlZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRMOpbWFycmVyIG1haW50ZW5hbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBjb25zdCBHRVRCWVNMVUcgPSBncWxgXHJcbiAgICB7XHJcbiAgICAgICAgbWVudShpZDogMSkge1xyXG4gICAgICAgICAgICBuYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19ocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY3RhIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyKGlkOiAxKSB7XHJcbiAgICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICBsb2dvX2Zvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBibG9ja19zb2NpYWxfaGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzZWF1X3NvY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5hdkl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2hyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdF9sYW5ndWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeV9mbGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBtZW51OiB7IG5hdmJhciB9LFxyXG4gICAgICAgICAgICBmb290ZXI6IHsgZm9vdGVyIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5OiBHRVRCWVNMVUcsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHNzZDoge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyLFxyXG4gICAgICAgICAgICAgICAgZm9vdGVyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=