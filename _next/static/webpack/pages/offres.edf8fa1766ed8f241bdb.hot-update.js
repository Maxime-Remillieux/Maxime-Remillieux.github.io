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
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_offres_Block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/offres/Block */ "./components/offres/Block.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_offres_ModelCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/offres/ModelCard */ "./components/offres/ModelCard.js");
/* harmony import */ var _components_offres_PackCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/offres/PackCard */ "./components/offres/PackCard.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
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
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaDesktop
}, {
  title: 'Online Reporting',
  content: 'Tous vos résultats de campagne, cross plattforms et cross devices, au coeur d\'une même inferface personnalisable',
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaLayerGroup,
  variant: colors.lightGreen
}, {
  title: 'Marketplace',
  content: ['✓ Influence', '✓ VR & In-Gaming-Ads', '✓ Formats innovants', '✓ Assets créas'],
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaPaintBrush
}, {
  title: 'Réactivité',
  content: 'Lancement et optimisations de campagnes 7/7',
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaDesktop
}, {
  title: 'Expertise',
  content: 'Une squad multi-certifiée',
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaLayerGroup,
  variant: colors.lightGreen
}, {
  title: 'Performance',
  content: 'Les activations les plus performantes selon vos objectifs',
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaPaintBrush
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
var StyledSlider = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Slider)(function () {
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
        lineNumber: 135,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {
        navbar: ssd.navbar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "pricing-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pricing",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: pricing.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: pricing.subtitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: pricing.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "model",
          children: models.map(function (model, idx) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_ModelCard__WEBPACK_IMPORTED_MODULE_4__.default, {
              model: model
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "services",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "services-top",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Des packs adapt\xE9s \xE0 vos besoins"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "offers",
          children: packs.map(function (pack, idx) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_PackCard__WEBPACK_IMPORTED_MODULE_5__.default, {
              pack: pack
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
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
          lineNumber: 167,
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
                lineNumber: 171,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "400\xA0K\xA0\u20AC"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  textAlign: 'center'
                },
                children: "annuels"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "Customisation possible\xA0!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
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
              lineNumber: 176,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
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
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaCheckCircle, {
                    size: 20,
                    color: colors.lightGreen
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 118
                  }, _this), content]
                }, idx, true, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 41
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "arguments-offers",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "arguments-title",
          children: "Peu importe l'offre, on vous garantit\xA0:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "blocks",
          children: blocks.map(function (block, idx) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_Block__WEBPACK_IMPORTED_MODULE_2__.default, {
              block: block
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "discover",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Envie d'en d\xE9couvrir plus\xA0?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
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
          lineNumber: 201,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
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
                lineNumber: 222,
                columnNumber: 74
              }, this), " par mois ?"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "(Estimez en moyenne par mois)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
              id: "styled-slider",
              value: valueSlider,
              onChange: handleChange,
              valueLabelDisplay: "on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 221,
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
                lineNumber: 228,
                columnNumber: 74
              }, this), " allez-vous connecter ?"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                marginBottom: '30px'
              },
              children: "(Le nombre de comptes au sein d'un m\xEAme banque est illimit\xE9)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
              value: valueSlider2,
              onChange: handleChange2,
              valueLabelDisplay: "on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 227,
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
              lineNumber: 233,
              columnNumber: 40
            }, this), " vos services."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "subscription",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "price",
            children: "19\u20AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ht",
            children: "HT/Mois"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["\u2713 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: "Acc\xE8s \xE0 l'ensemble des fonctionnalit\xE9s"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 39
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u2713 Support client"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u2713 \xC9quip\xE9 d\xE9di\xE9e au lancement et \xE0 l'accompagnement"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
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
            lineNumber: 244,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 133,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb2ZmcmVzLmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsImxpZ2h0R3JlZW4iLCJkYXJrZXJHcmVlbiIsInZpb2xldCIsImJsb2NrcyIsInRpdGxlIiwiY29udGVudCIsImljb24iLCJGYURlc2t0b3AiLCJGYUxheWVyR3JvdXAiLCJ2YXJpYW50IiwiRmFQYWludEJydXNoIiwicHJpY2luZyIsInN1YnRpdGxlIiwidGV4dCIsIm1vZGVscyIsInRhZyIsImltYWdlIiwic3BlY3MiLCJjb2xvciIsInBhY2tzIiwiZGVzY3JpcHRpb24iLCJidWRnZXQiLCJwcmVtaXVtQ29udGVudCIsIlN0eWxlZFNsaWRlciIsInN0eWxlZCIsIlNsaWRlciIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luVG9wIiwiYm94U2hhZG93IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJvcGFjaXR5IiwiSG9tZSIsInNzZCIsInVzZVN0YXRlIiwidmFsdWVTbGlkZXIiLCJzZXRWYWx1ZVNsaWRlciIsInZhbHVlU2xpZGVyMiIsInNldFZhbHVlU2xpZGVyMiIsImhhbmRsZUNoYW5nZSIsImUiLCJuZXdWYWx1ZSIsImhhbmRsZUNoYW5nZTIiLCJuYXZiYXIiLCJtYXAiLCJtb2RlbCIsImlkeCIsInBhY2siLCJ0ZXh0QWxpZ24iLCJiZ2NvbG9yIiwicGFkZGluZyIsIm1hcmdpbiIsImFsaWduSXRlbXMiLCJnYXAiLCJibG9jayIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ1hDLFlBQVUsRUFBRSxTQUREO0FBRVhDLGFBQVcsRUFBRSxTQUZGO0FBR1hDLFFBQU0sRUFBRTtBQUhHLENBQWY7QUFNQSxJQUFNQyxNQUFNLEdBQUcsQ0FDWDtBQUFFQyxPQUFLLEVBQUUsZUFBVDtBQUEwQkMsU0FBTyxFQUFFLENBQUMsT0FBRCxFQUFVLGNBQVYsRUFBMEIsV0FBMUIsQ0FBbkM7QUFBMkVDLE1BQUksRUFBRUMscURBQVNBO0FBQTFGLENBRFcsRUFFWDtBQUFFSCxPQUFLLEVBQUUsa0JBQVQ7QUFBNkJDLFNBQU8sRUFBRSxtSEFBdEM7QUFBMkpDLE1BQUksRUFBRUUsd0RBQWpLO0FBQStLQyxTQUFPLEVBQUVWLE1BQU0sQ0FBQ0M7QUFBL0wsQ0FGVyxFQUdYO0FBQUVJLE9BQUssRUFBRSxhQUFUO0FBQXdCQyxTQUFPLEVBQUUsQ0FBQyxhQUFELEVBQWdCLHNCQUFoQixFQUF3QyxxQkFBeEMsRUFBK0QsZ0JBQS9ELENBQWpDO0FBQW1IQyxNQUFJLEVBQUVJLHdEQUFZQTtBQUFySSxDQUhXLEVBSVg7QUFBRU4sT0FBSyxFQUFFLFlBQVQ7QUFBdUJDLFNBQU8sRUFBRSw2Q0FBaEM7QUFBK0VDLE1BQUksRUFBRUMscURBQVNBO0FBQTlGLENBSlcsRUFLWDtBQUFFSCxPQUFLLEVBQUUsV0FBVDtBQUFzQkMsU0FBTyxFQUFFLDJCQUEvQjtBQUE0REMsTUFBSSxFQUFFRSx3REFBbEU7QUFBZ0ZDLFNBQU8sRUFBRVYsTUFBTSxDQUFDQztBQUFoRyxDQUxXLEVBTVg7QUFBRUksT0FBSyxFQUFFLGFBQVQ7QUFBd0JDLFNBQU8sRUFBRSwyREFBakM7QUFBOEZDLE1BQUksRUFBRUksd0RBQVlBO0FBQWhILENBTlcsQ0FBZjtBQVNBLElBQU1DLE9BQU8sR0FBRztBQUFFUCxPQUFLLEVBQUUsU0FBVDtBQUFvQlEsVUFBUSxFQUFFLGtGQUE5QjtBQUFrSEMsTUFBSSxFQUFFO0FBQXhILENBQWhCO0FBRUEsSUFBTUMsTUFBTSxHQUFHLENBQ1g7QUFBRUMsS0FBRyxFQUFFLGVBQVA7QUFBd0JDLE9BQUssRUFBRSwrQkFBL0I7QUFBZ0VaLE9BQUssRUFBRSxxQkFBdkU7QUFBOEZhLE9BQUssRUFBRSxDQUFDLFlBQUQsRUFBZSxTQUFmLEVBQTBCLDJCQUExQixFQUF1RCxvQkFBdkQsRUFBNkUsWUFBN0UsRUFBMkYsYUFBM0YsRUFBMEcsZ0RBQTFHLENBQXJHO0FBQWtRQyxPQUFLLEVBQUU7QUFBelEsQ0FEVyxFQUVYO0FBQUVILEtBQUcsRUFBRSxzQkFBUDtBQUErQkMsT0FBSyxFQUFFLDJCQUF0QztBQUFtRVosT0FBSyxFQUFFLDBCQUExRTtBQUFzR2EsT0FBSyxFQUFFLENBQUMsMkJBQUQsRUFBOEIsc0JBQTlCLEVBQXNELGdCQUF0RCxFQUF3RSxpQkFBeEUsRUFBMkYsK0JBQTNGLEVBQTRILGlDQUE1SCxDQUE3RztBQUE2UUMsT0FBSyxFQUFFO0FBQXBSLENBRlcsRUFHWDtBQUFFSCxLQUFHLEVBQUUsV0FBUDtBQUFvQkMsT0FBSyxFQUFFLGlDQUEzQjtBQUE4RFosT0FBSyxFQUFFLGlCQUFyRTtBQUF3RmEsT0FBSyxFQUFFLENBQUMsNEJBQUQsRUFBK0IsY0FBL0IsRUFBK0Msc0JBQS9DLENBQS9GO0FBQXVLQyxPQUFLLEVBQUU7QUFBOUssQ0FIVyxDQUFmO0FBTUEsSUFBTUMsS0FBSyxHQUFHLENBQ1Y7QUFBRWYsT0FBSyxFQUFFLGVBQVQ7QUFBMEJnQixhQUFXLEVBQUUseURBQXZDO0FBQWtHQyxRQUFNLEVBQUUsRUFBMUc7QUFBOEdoQixTQUFPLEVBQUUsQ0FBQyx3Q0FBRCxFQUEyQyxzQ0FBM0MsRUFBbUYsNENBQW5GLEVBQWlJLG1CQUFqSTtBQUF2SCxDQURVLEVBRVY7QUFBRUQsT0FBSyxFQUFFLGdCQUFUO0FBQTJCZ0IsYUFBVyxFQUFFLDZDQUF4QztBQUF1RkMsUUFBTSxFQUFFLDJCQUEvRjtBQUE0SGhCLFNBQU8sRUFBRSxDQUFDLDJDQUFELEVBQThDLDREQUE5QyxFQUE0RyxrREFBNUcsRUFBZ0ssaUVBQWhLLEVBQW1PLG9HQUFuTyxDQUFySTtBQUErY0ksU0FBTyxFQUFFVixNQUFNLENBQUNDO0FBQS9kLENBRlUsRUFHVjtBQUFFSSxPQUFLLEVBQUUsZ0JBQVQ7QUFBMkJnQixhQUFXLEVBQUUsaUVBQXhDO0FBQTJHQyxRQUFNLEVBQUUsMEJBQW5IO0FBQStJaEIsU0FBTyxFQUFFLENBQUMsMEJBQUQsRUFBNkIsK0JBQTdCLEVBQThELHlDQUE5RCxFQUF5RyxpREFBekcsRUFBNEosMENBQTVKO0FBQXhKLENBSFUsQ0FBZDtBQU1BLElBQU1pQixjQUFjLEdBQUcsQ0FDbkIsMERBRG1CLEVBRW5CLG1GQUZtQixFQUduQixrREFIbUIsRUFJbkIsc0NBSm1CLEVBS25CLHdCQUxtQixFQU1uQixrQ0FObUIsRUFPbkIseUNBUG1CLEVBUW5CLFdBUm1CLENBQXZCO0FBV0EsSUFBTUMsWUFBWSxHQUFHQyw0REFBTSxDQUFDQyxxREFBRCxDQUFOLENBQWU7QUFBQSxTQUFPO0FBQ3ZDLDBCQUFzQjtBQUNsQkMsWUFBTSxFQUFFLEVBRFU7QUFFbEJDLFdBQUssRUFBRSxFQUZXO0FBR2xCQyxxQkFBZSxFQUFFLE1BSEM7QUFJbEJDLGVBQVMsRUFBRSxDQUpPO0FBS2xCQyxlQUFTLEVBQUUsaUZBTE87QUFNbEIsd0NBQWtDO0FBQzlCQSxpQkFBUyxFQUNQLGdGQUY0QjtBQUc5QjtBQUNBLGdDQUF3QjtBQUN0QkEsbUJBQVMsRUFBRTtBQURXO0FBSk07QUFOaEIsS0FEaUI7QUFnQnZDLCtCQUEyQjtBQUN2QkMsY0FBUSxFQUFFLEVBRGE7QUFFdkJDLGdCQUFVLEVBQUUsUUFGVztBQUd2QkoscUJBQWUsRUFBRSxPQUhNO0FBSXZCO0FBQ0Esa0JBQVk7QUFDVkssZUFBTyxFQUFFO0FBREMsT0FMVztBQVF2QixhQUFPO0FBQ0xDLGtCQUFVLEVBQUUsYUFEUDtBQUVMaEIsYUFBSyxFQUFFLE9BRkYsQ0FHUDs7QUFITztBQVJnQixLQWhCWTtBQThCckMsMEJBQXNCO0FBQ3BCUSxZQUFNLEVBQUUsQ0FEWTtBQUVwQlMsa0JBQVksRUFBRSxDQUZNO0FBR3BCakIsV0FBSyxFQUFFbkIsTUFBTSxDQUFDQztBQUhNLEtBOUJlO0FBbUNyQyx5QkFBcUI7QUFDbkJvQyxhQUFPLEVBQUUsR0FEVTtBQUVuQlIscUJBQWUsRUFBRSxTQUZFO0FBR25CRixZQUFNLEVBQUUsQ0FIVztBQUluQlMsa0JBQVksRUFBRTtBQUpLO0FBbkNnQixHQUFQO0FBQUEsQ0FBZixDQUFyQjs7QUEyQ2UsU0FBU0UsSUFBVCxPQUF1QjtBQUFBOztBQUFBOztBQUFBLE1BQVBDLEdBQU8sUUFBUEEsR0FBTzs7QUFBQSxrQkFDSUMsK0NBQVEsQ0FBQyxDQUFELENBRFo7QUFBQSxNQUMzQkMsV0FEMkI7QUFBQSxNQUNkQyxjQURjOztBQUFBLG1CQUVNRiwrQ0FBUSxDQUFDLENBQUQsQ0FGZDtBQUFBLE1BRTNCRyxZQUYyQjtBQUFBLE1BRWJDLGVBRmE7O0FBSWxDLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBSUMsUUFBSixFQUFpQjtBQUNsQ0wsa0JBQWMsQ0FBQ0ssUUFBRCxDQUFkO0FBQ0gsR0FGRDs7QUFHQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNGLENBQUQsRUFBSUMsUUFBSixFQUFpQjtBQUNuQ0gsbUJBQWUsQ0FBQ0csUUFBRCxDQUFmO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQU9RO0FBQUEsOEJBQ0ksOERBQUMsdURBQUQ7QUFBUSxjQUFNLEVBQUVSLEdBQUcsQ0FBQ1U7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxrQ0FDSTtBQUFBLHNCQUFLckMsT0FBTyxDQUFDUDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBLHNCQUFLTyxPQUFPLENBQUNDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUEsc0JBQUlELE9BQU8sQ0FBQ0U7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU1JO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQUEsb0JBQ0tDLE1BQU0sQ0FBQ21DLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLEdBQVI7QUFBQSxnQ0FDUiw4REFBQyxpRUFBRDtBQUFxQixtQkFBSyxFQUFFRDtBQUE1QixlQUFnQkMsR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUTtBQUFBLFdBQVg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBZUk7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsb0JBQ0toQyxLQUFLLENBQUM4QixHQUFOLENBQVUsVUFBQ0csSUFBRCxFQUFPRCxHQUFQO0FBQUEsZ0NBQ1AsOERBQUMsZ0VBQUQ7QUFBVSxrQkFBSSxFQUFFQztBQUFoQixlQUEyQkQsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFETztBQUFBLFdBQVY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZKLGVBMEJJO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0k7QUFBSSxlQUFLLEVBQUU7QUFBRUUscUJBQVMsRUFBRSxRQUFiO0FBQXVCdEIsb0JBQVEsRUFBRTtBQUFqQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLHNCQUFmO0FBQUEsb0NBQ0k7QUFBQSxzQ0FDSTtBQUFJLHFCQUFLLEVBQUU7QUFBRXNCLDJCQUFTLEVBQUU7QUFBYixpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBR0k7QUFBSyxxQkFBSyxFQUFFO0FBQUVBLDJCQUFTLEVBQUU7QUFBYixpQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOSixlQU9JLDhEQUFDLDBEQUFEO0FBQVEscUJBQU8sRUFBQyxXQUFoQjtBQUE0QixnQkFBRSxFQUFFO0FBQUVDLHVCQUFPLEVBQUV2RCxNQUFNLENBQUNDLFVBQWxCO0FBQThCa0IscUJBQUssRUFBRSxPQUFyQztBQUE4QywyQkFBVztBQUFFVSxpQ0FBZSxFQUFFN0IsTUFBTSxDQUFDRTtBQUExQixpQkFBekQ7QUFBa0dzRCx1QkFBTyxFQUFFLE1BQTNHO0FBQW1IQyxzQkFBTSxFQUFFO0FBQTNILGVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQVlJO0FBQUsscUJBQVMsRUFBQyx1QkFBZjtBQUFBLG1DQUNJO0FBQUEsd0JBQ0tsQyxjQUFjLENBQUMyQixHQUFmLENBQW1CLFVBQUM1QyxPQUFELEVBQVU4QyxHQUFWO0FBQUEsb0NBQ2hCO0FBQUksdUJBQUssRUFBRTtBQUFFbEIsMkJBQU8sRUFBRSxNQUFYO0FBQW1Cd0IsOEJBQVUsRUFBRSxRQUEvQjtBQUF5Q0MsdUJBQUcsRUFBRTtBQUE5QyxtQkFBWDtBQUFBLDBDQUE2RSw4REFBQyx5REFBRDtBQUFlLHdCQUFJLEVBQUUsRUFBckI7QUFBeUIseUJBQUssRUFBRTNELE1BQU0sQ0FBQ0M7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBN0UsRUFBbUlLLE9BQW5JO0FBQUEsbUJBQXdFOEMsR0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEZ0I7QUFBQSxlQUFuQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQkosZUFrREk7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxvQkFDS2hELE1BQU0sQ0FBQzhDLEdBQVAsQ0FBVyxVQUFDVSxLQUFELEVBQVFSLEdBQVI7QUFBQSxnQ0FDUiw4REFBQyw2REFBRDtBQUFPLG1CQUFLLEVBQUVRO0FBQWQsZUFBMEJSLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFE7QUFBQSxXQUFYO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsREosZUEyREk7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLDhEQUFDLDBEQUFEO0FBQ0ksbUJBQVMsRUFBQyxrQkFEZDtBQUVJLGlCQUFPLEVBQUMsV0FGWjtBQUdJLFlBQUUsRUFBRTtBQUNBRyxtQkFBTyxFQUFFdkQsTUFBTSxDQUFDQyxVQURoQjtBQUVBa0IsaUJBQUssRUFBRSxPQUZQO0FBR0EsdUJBQVc7QUFDUFUsNkJBQWUsRUFBRTdCLE1BQU0sQ0FBQ0U7QUFEakIsYUFIWDtBQU1Ba0Msd0JBQVksRUFBRSxNQU5kO0FBT0F5QixzQkFBVSxFQUFFLE1BUFo7QUFRQUMseUJBQWEsRUFBRSxNQVJmO0FBU0FDLHVCQUFXLEVBQUUsTUFUYjtBQVVBQyx3QkFBWSxFQUFFO0FBVmQsV0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzREosZUErRUk7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMseUJBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHFEQUF5QztBQUFNLHFCQUFLLEVBQUU7QUFBRTdDLHVCQUFLLEVBQUVuQixNQUFNLENBQUNDO0FBQWhCLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUlJLDhEQUFDLFlBQUQ7QUFBYyxnQkFBRSxFQUFDLGVBQWpCO0FBQWlDLG1CQUFLLEVBQUV3QyxXQUF4QztBQUFxRCxzQkFBUSxFQUFFSSxZQUEvRDtBQUE2RSwrQkFBaUIsRUFBQztBQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQU9JO0FBQUsscUJBQVMsRUFBQyx5QkFBZjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBQyxjQUFmO0FBQUEscURBQXlDO0FBQU0scUJBQUssRUFBRTtBQUFFMUIsdUJBQUssRUFBRW5CLE1BQU0sQ0FBQ0M7QUFBaEIsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUssbUJBQUssRUFBRTtBQUFFZ0UsNEJBQVksRUFBRTtBQUFoQixlQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0ksOERBQUMsWUFBRDtBQUFjLG1CQUFLLEVBQUV0QixZQUFyQjtBQUFtQyxzQkFBUSxFQUFFSyxhQUE3QztBQUE0RCwrQkFBaUIsRUFBQztBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSixlQVlJO0FBQUsscUJBQVMsRUFBQyx5QkFBZjtBQUFBLCtDQUNXO0FBQU0sbUJBQUssRUFBRTtBQUFFN0IscUJBQUssRUFBRW5CLE1BQU0sQ0FBQ0M7QUFBaEIsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBaUJJO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFLLHFCQUFTLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUEsb0NBQ0k7QUFBQSxpREFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQVFJLDhEQUFDLDBEQUFEO0FBQVEsbUJBQU8sRUFBQyxXQUFoQjtBQUE0QixnQkFBSSxFQUFDLEdBQWpDO0FBQXFDLGNBQUUsRUFBRTtBQUNyQ3NELHFCQUFPLEVBQUV2RCxNQUFNLENBQUNDLFVBRHFCO0FBRXJDLHlCQUFXO0FBQUVzRCx1QkFBTyxFQUFFdkQsTUFBTSxDQUFDRTtBQUFsQjtBQUYwQixhQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9FSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRISDs7R0F2SXVCb0MsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vZmZyZXMuZWRmOGZhMTc2NmVkOGYyNDFiZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvb2ZmcmVzL0Jsb2NrJ1xyXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCB3aXRoVGhlbWUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHsgRmFEZXNrdG9wLCBGYUxheWVyR3JvdXAsIEZhUGFpbnRCcnVzaCwgRmFDaGVja0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG4vLyBpbXBvcnQgQXJyb3dGb3J3YXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCB7IGFwb2xsb0NsaWVudCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHJhcGlcIjtcclxuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBNb2RlbENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9vZmZyZXMvTW9kZWxDYXJkJ1xyXG5pbXBvcnQgUGFja0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9vZmZyZXMvUGFja0NhcmQnXHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcblxyXG4vLyBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuLy8gICAgIHN0YXR1czoge1xyXG4vLyAgICAgICAgIGRhbmdlcjogJyNlNTNlM2UnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHBhbGV0dGU6IHtcclxuLy8gICAgICAgICBwcmltYXJ5OiB7XHJcbi8vICAgICAgICAgICAgIG1haW46ICcjMzA1NUQzJyxcclxuLy8gICAgICAgICAgICAgZGFya2VyOiAnIzA1M2U4NScsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBzZWNvbmRhcnk6IHtcclxuLy8gICAgICAgICAgICAgbWFpbjogJ3JnYmEoMjUzLCAyNTQsIDI1NSwgMC4xNSknLFxyXG4vLyAgICAgICAgICAgICBjb250cmFzdFRleHQ6ICd3aGl0ZScsXHJcbi8vICAgICAgICAgICAgIGRhcmtlcjogJyMwNTNlODUnLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbmV1dHJhbDoge1xyXG4vLyAgICAgICAgICAgICBtYWluOiAnIzY0NzQ4QicsXHJcbi8vICAgICAgICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICB9LFxyXG4vLyB9KTtcclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICAgIGxpZ2h0R3JlZW46ICcjMjdENkJEJyxcclxuICAgIGRhcmtlckdyZWVuOiAnIzJiOTM4NCcsXHJcbiAgICB2aW9sZXQ6ICcjODk2YWY0J1xyXG59XHJcblxyXG5jb25zdCBibG9ja3MgPSBbXHJcbiAgICB7IHRpdGxlOiAnU3VwcG9ydCBkw6lkacOpJywgY29udGVudDogWyfinJMgRkFRJywgJ+KckyBSZXNzb3VyY2VzJywgJ+KckyBDaGF0Ym90J10sIGljb246IEZhRGVza3RvcCB9LFxyXG4gICAgeyB0aXRsZTogJ09ubGluZSBSZXBvcnRpbmcnLCBjb250ZW50OiAnVG91cyB2b3MgcsOpc3VsdGF0cyBkZSBjYW1wYWduZSwgY3Jvc3MgcGxhdHRmb3JtcyBldCBjcm9zcyBkZXZpY2VzLCBhdSBjb2V1ciBkXFwndW5lIG3Dqm1lIGluZmVyZmFjZSBwZXJzb25uYWxpc2FibGUnLCBpY29uOiBGYUxheWVyR3JvdXAsIHZhcmlhbnQ6IGNvbG9ycy5saWdodEdyZWVuIH0sXHJcbiAgICB7IHRpdGxlOiAnTWFya2V0cGxhY2UnLCBjb250ZW50OiBbJ+KckyBJbmZsdWVuY2UnLCAn4pyTIFZSICYgSW4tR2FtaW5nLUFkcycsICfinJMgRm9ybWF0cyBpbm5vdmFudHMnLCAn4pyTIEFzc2V0cyBjcsOpYXMnXSwgaWNvbjogRmFQYWludEJydXNoIH0sXHJcbiAgICB7IHRpdGxlOiAnUsOpYWN0aXZpdMOpJywgY29udGVudDogJ0xhbmNlbWVudCBldCBvcHRpbWlzYXRpb25zIGRlIGNhbXBhZ25lcyA3LzcnLCBpY29uOiBGYURlc2t0b3AgfSxcclxuICAgIHsgdGl0bGU6ICdFeHBlcnRpc2UnLCBjb250ZW50OiAnVW5lIHNxdWFkIG11bHRpLWNlcnRpZmnDqWUnLCBpY29uOiBGYUxheWVyR3JvdXAsIHZhcmlhbnQ6IGNvbG9ycy5saWdodEdyZWVuIH0sXHJcbiAgICB7IHRpdGxlOiAnUGVyZm9ybWFuY2UnLCBjb250ZW50OiAnTGVzIGFjdGl2YXRpb25zIGxlcyBwbHVzIHBlcmZvcm1hbnRlcyBzZWxvbiB2b3Mgb2JqZWN0aWZzJywgaWNvbjogRmFQYWludEJydXNoIH0sXHJcbl1cclxuXHJcbmNvbnN0IHByaWNpbmcgPSB7IHRpdGxlOiAnUHJpY2luZycsIHN1YnRpdGxlOiAnQXVjdW4gaG9ub3JhaXJlLCBhdWN1biBmcmFpcywgYXVjdW5lIGNvbW1pc3Npb24sIHRvdXQgZXN0IGNvbXByaXMgZGFucyBsZSBwcml4ICEnLCB0ZXh0OiAnVW4gdGFyaWYgdW5pcXVlIGNvbXByZW5hbnQgbFxcJ2FjaGF0IGRcXCdlc3BhY2UgbcOpZGlhcywgbm9zIGhvbm9yYWlyZXMsIG5vcyBmcmFpcyBkXFwnYWQtc2VydmluZywgbFxcJ2F1ZGl0IGRlcyBjcsOpYXMsIGxlIHRlbXBzIGh1bWFpbiBwYXNzw6kgc3VyIGxhIGNhbXBhZ25lLCBsZXMgZmVlcyBEU1AuLi4gT3B0ZXogcG91ciBsZSBhbGwtaW5jbHVzaXZlICEnIH1cclxuXHJcbmNvbnN0IG1vZGVscyA9IFtcclxuICAgIHsgdGFnOiAnTWlzZSBlbiBwbGFjZScsIGltYWdlOiAnL2ltYWdlcy9vZmZyZXMvcGF5X29ubGluZS5zdmcnLCB0aXRsZTogJ1VuIG1vZMOobGUgc2ltcGxpZmnDqScsIHNwZWNzOiBbJ1B1Ymxpc2hpbmcnLCAnVHJhZGluZycsICdDdXN0b20gU3VjY2VzcyBNYW5hZ2VtZW50JywgJ1RyYWZmaWMgTWFuYWdlbWVudCcsICdDb25zdWx0aW5nJywgJ01hcmtldHBsYWNlJywgJz0+IDxiPjEgc2V1bDwvYj4gY29udGFjdCBwb3VyIHRvdXMgdm9zIGJlc29pbnMnXSwgY29sb3I6ICcjMjdENkJEJyB9LFxyXG4gICAgeyB0YWc6ICdGcmFpcyB0ZWNobm9sb2dpcXVlcycsIGltYWdlOiAnL2ltYWdlcy9vZmZyZXMvdW5kcmF3LnN2ZycsIHRpdGxlOiAnQXVjdW4gZnJhaXMgYWRkaXRpb25uZWxzJywgc3BlY3M6IFsnMCBmcmFpcyBkXFwnQXVkaXQgZGUgY3LDqWFzJywgJzAgZnJhaXMgZFxcJ0Fkc2VydmluZycsICcwIGZyYWlzIGRlIERTUCcsICcwIGZyYWlzIGRlIERhdGEnLCAnMCBmcmFpcyBkZSBjaWJsYWdlIGNvbnRleHR1ZWwnLCAnMCBmcmFpcyBkZSBwYXJ0ZW5haXJlcyBkaXZlcnNlcyddLCBjb2xvcjogJyM1OUEwRDgnIH0sXHJcbiAgICB7IHRhZzogJ1NvdXBsZXNzZScsIGltYWdlOiAnL2ltYWdlcy9vZmZyZXMvc2hhcmVkX2dvYWxzLnN2ZycsIHRpdGxlOiAnU2FucyBlbmdhZ2VtZW50Jywgc3BlY3M6IFsnQ2FtcGFnbmVzIMOgIGxhIHBlcmZvcm1hbmNlJywgJ1Rlc3QgJiBMZWFybicsICdBZ2lsaXTDqSAmIFLDqWFjdGl2aXTDqSddLCBjb2xvcjogJyM4OTZBRjQnIH0sXHJcbl1cclxuXHJcbmNvbnN0IHBhY2tzID0gW1xyXG4gICAgeyB0aXRsZTogJ0RpZ2l0YWwgTm9tYWQnLCBkZXNjcmlwdGlvbjogJ1BvdXIgY2V1eCBxdWkgdmV1bGVudCB1bmUgZXhww6lyaWVuY2UgMTAwICUgU2VsZi1TZXJ2aWNlJywgYnVkZ2V0OiAnJywgY29udGVudDogWydMYW5jZW1lbnQgZGUgY2FtcGFnbmVzIGVuIHNlbGYgc2VydmljZScsICdUb3VzIGxlcyBpbnZlbnRhaXJlcyBwcm9ncmFtbWF0aXF1ZXMnLCAnU3RyYXTDqWdpZXMgY2zDqSBlbiBtYWluIHNlbG9uIHZvcyBvYmplY3RpZnMnLCAnVGlja2V0aW5nIFN1cHBvcnQnXSB9LFxyXG4gICAgeyB0aXRsZTogJ0RpZ2l0YWwgRXhwZXJ0JywgZGVzY3JpcHRpb246ICdQb3VyIGNldXggcXVpIHZldWxlbnQgbGVzIG1laWxsZXVycyBleHBlcnRzJywgYnVkZ2V0OiAnw4AgUEFSVElSIERFIDEwMCBLIEFOTlVFTFMnLCBjb250ZW50OiBbJ0FjY291bnQgU3RyYXRlZ2lzdCBTZW5pb3Igw6Agdm90cmUgc2VydmljZScsICdVbiBkaXJlY3RldXIgY29uc2VpbCBwcsOpc2VudCBzdXIgbGVzIG1lZXRpbmdzIHN0cmF0w6lnaXF1ZXMnLCAnQS9CIFRlc3RpbmcgZXQgbXVsdGktc2PDqW5hcmlzYXRpb24gZGVzIGNhbXBhZ25lcycsICdCw6p0YS1UZXN0aW5nIGVuIGV4Y2x1c2l2aXTDqSBkZXMgZGVybmnDqHJlcyBpbm5vdmF0aW9ucyBkaWdpdGFsZXMnLCAnQWNjw6hzIMOgIG5vdHJlIHNxdWFkIGRcXCdleHBlcnRzIHNlbG9uIHZvcyBiZXNvaW5zIChQdWJsaXNoaW5nLCBBdHRyaWJ1dGlvbiwgVHJhZmljLCBTRUEsIFNvY2lhbC4uLiknXSwgdmFyaWFudDogY29sb3JzLmxpZ2h0R3JlZW4gfSxcclxuICAgIHsgdGl0bGU6ICdEaWdpdGFsIEZyaWVuZCcsIGRlc2NyaXB0aW9uOiAnUG91ciBjZXV4IHF1aSB2ZXVsZW50IGRlIGxcXCdhaWRlIHN1ciBsZXVycyBzdHJhdMOpZ2llcyBkaWdpdGFsZXMnLCBidWRnZXQ6ICfDgCBQQVJUSVIgREUgMjUgSyBBTk5VRUxTJywgY29udGVudDogWydBY2NvdW50IFN0cmF0ZWdpc3QgZMOpZGnDqScsICdUb3V0IG5vdHJlIGNhdGFsb2d1ZSBwcm9kdWl0cycsICdSZWNvbW1hbmRhdGlvbnMgc3RyYXTDqWdpcXVlcyBzdXIgbWVzdXJlJywgJ0FjY29tcGFnZW1lbnQgb3UgZMOpdmVsb3BwZW1lbnQgZGVzIGFzc2V0cyBjcsOpYXMnLCAnU3VwcG9ydCB0ZWNobmlxdWUgaHVtYWluIHN1ciBsZSB0cmFja2luZyddIH1cclxuXVxyXG5cclxuY29uc3QgcHJlbWl1bUNvbnRlbnQgPSBbXHJcbiAgICAnTGVzIG1laWxsZXVycyBBY2NvdW50IFN0cmF0ZWdpc3RzICYgS2V5IEFjY291bnQgTWFuYWdlcnMnLFxyXG4gICAgJ05vdHJlIFNxdWFkIGRcXCdleHBlcnRzIMOgIHZvdHJlIHNlcnZpY2UgKFB1Ymxpc2hpbmcsIFRyYWZpYywgU0VBLCBBc3NldHMgY3LDqWFzLi4uKScsXHJcbiAgICAnQS9CIFRlc3RpbmcgZXQgbXVsdGktc2PDqW5hcmlzYXRpb24gZGVzIGNhbXBhZ25lcycsXHJcbiAgICAnTWVkaWEgUGxhbm5pbmcgZXQgQXVkaWVuY2VzIFBsYW5uaW5nJyxcclxuICAgICdBbmFseXNlIGNvbmN1cmVudGllbGxlJyxcclxuICAgICdCZW5jaG1hcmsgUGVyZm9ybWFuY2VzIGV0IMOJdHVkZXMnLFxyXG4gICAgJ0NvbnN1bHRpbmcgKENvbnRlbnRzLCBTdHJhdMOpZ2llLCBTRU8uLiknLFxyXG4gICAgJ0Zvcm1hdGlvbidcclxuXVxyXG5cclxuY29uc3QgU3R5bGVkU2xpZGVyID0gc3R5bGVkKFNsaWRlcikoKCkgPT4gKHtcclxuICAgICcmIC5NdWlTbGlkZXItdGh1bWInOiB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MyxcclxuICAgICAgICB3aWR0aDogNDMsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAwLFxyXG4gICAgICAgIGJveFNoYWRvdzogJzAgM3B4IDFweCByZ2JhKDAsMCwwLDAuMSksMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4xMyksMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4wMiknLFxyXG4gICAgICAgICcmOmZvY3VzLCAmOmhvdmVyLCAmLk11aS1hY3RpdmUnOiB7XHJcbiAgICAgICAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICAgICAgICAnMCAzcHggMXB4IHJnYmEoMCwwLDAsMC4xKSwwIDRweCA4cHggcmdiYSgwLDAsMCwwLjMpLDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDIpJyxcclxuICAgICAgICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcclxuICAgICAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xyXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgM3B4IDFweCByZ2JhKDAsMCwwLDAuMSksMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4xMyksMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4wMiknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpU2xpZGVyLXZhbHVlTGFiZWwnOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3Vuc2V0JyxcclxuICAgICAgICAvLyBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyYgKic6IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAvLyAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdkYXJrJyA/ICcjZmZmJyA6ICcjMDAwJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICAnJiAuTXVpU2xpZGVyLXRyYWNrJzoge1xyXG4gICAgICAgIGhlaWdodDogNixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDMsXHJcbiAgICAgICAgY29sb3I6IGNvbG9ycy5saWdodEdyZWVuLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiAuTXVpU2xpZGVyLXJhaWwnOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNiZmJmYmYnLFxyXG4gICAgICAgIGhlaWdodDogNixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDMsXHJcbiAgICAgIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHNzZCB9KSB7XHJcbiAgICBjb25zdCBbdmFsdWVTbGlkZXIsIHNldFZhbHVlU2xpZGVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3ZhbHVlU2xpZGVyMiwgc2V0VmFsdWVTbGlkZXIyXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlU2xpZGVyKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZTIgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZVNsaWRlcjIobmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1vZmZyZXMnPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5LbG94IHwgTm9zIG9mZnJlczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgey8qIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+ICovfVxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBuYXZiYXI9e3NzZC5uYXZiYXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57cHJpY2luZy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntwcmljaW5nLnN1YnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJpY2luZy50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlbHMubWFwKChtb2RlbCwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGVsQ2FyZCBrZXk9e2lkeH0gbW9kZWw9e21vZGVsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRlcyBwYWNrcyBhZGFwdMOpcyDDoCB2b3MgYmVzb2luczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhY2tzLm1hcCgocGFjaywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhY2tDYXJkIHBhY2s9e3BhY2t9IGtleT17aWR4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVtaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250U2l6ZTogJzUwcHgnIH19PkVudmllIGQndW5lIG9mZnJlIFByZW1pdW3CoD88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZW1pdW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZW1pdW0tY29udGVudC1sZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT7DgCBwYXJ0aXIgZGU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+NDAwwqBLwqDigqw8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+YW5udWVsczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Q3VzdG9taXNhdGlvbiBwb3NzaWJsZcKgITwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBzeD17eyBiZ2NvbG9yOiBjb2xvcnMubGlnaHRHcmVlbiwgY29sb3I6ICd3aGl0ZScsICcmOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5kYXJrZXJHcmVlbiB9LCBwYWRkaW5nOiAnMTVweCcsIG1hcmdpbjogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbiBzYXZvaXIgcGx1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJlbWl1bS1jb250ZW50LXJpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmVtaXVtQ29udGVudC5tYXAoKGNvbnRlbnQsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzEwcHgnIH19IGtleT17aWR4fT48RmFDaGVja0NpcmNsZSBzaXplPXsyMH0gY29sb3I9e2NvbG9ycy5saWdodEdyZWVufSAvPntjb250ZW50fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJndW1lbnRzLW9mZmVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdhcmd1bWVudHMtdGl0bGUnPlBldSBpbXBvcnRlIGwnb2ZmcmUsIG9uIHZvdXMgZ2FyYW50aXTCoDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2Nrc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2Nrcy5tYXAoKGJsb2NrLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2sgYmxvY2s9e2Jsb2NrfSBrZXk9e2lkeH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY292ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkVudmllIGQnZW4gZMOpY291dnJpciBwbHVzwqA/PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhbmFseXRpY3MtYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiBjb2xvcnMubGlnaHRHcmVlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZGFya2VyR3JlZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPkNvbnRhY3Rlei1ub3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXJzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVycy1jb250ZW50LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyLWxhYmVsJz5Db21iaWVuIGRlIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBjb2xvcnMubGlnaHRHcmVlbiB9fT5mYWN0dXJlcyBmb3Vybmlzc2V1cnMgdHJhaXRlei12b3VzPC9zcGFuPiBwYXIgbW9pcyA/PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4oRXN0aW1leiBlbiBtb3llbm5lIHBhciBtb2lzKTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8U2xpZGVyIHZhbHVlPXt2YWx1ZVNsaWRlcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWVMYWJlbERpc3BsYXk9XCJvblwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTbGlkZXIgaWQ9J3N0eWxlZC1zbGlkZXInIHZhbHVlPXt2YWx1ZVNsaWRlcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWVMYWJlbERpc3BsYXk9XCJvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJzLWNvbnRlbnQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXItbGFiZWwnPkNvbWJpZW4gZGUgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGNvbG9ycy5saWdodEdyZWVuIH19PmJhbnF1ZXM8L3NwYW4+IGFsbGV6LXZvdXMgY29ubmVjdGVyID88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzMwcHgnIH19PihMZSBub21icmUgZGUgY29tcHRlcyBhdSBzZWluIGQndW4gbcOqbWUgYmFucXVlIGVzdCBpbGxpbWl0w6kpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNsaWRlciB2YWx1ZT17dmFsdWVTbGlkZXIyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlMn0gdmFsdWVMYWJlbERpc3BsYXk9XCJvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJzLWNvbnRlbnQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhaXRlcyA8c3BhbiBzdHlsZT17eyBjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4gfX0+IGNvbGxhYm9yZXI8L3NwYW4+IHZvcyBzZXJ2aWNlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmljZSc+MTnigqw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdodCc+SFQvTW9pczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7inJMgPGI+QWNjw6hzIMOgIGwnZW5zZW1ibGUgZGVzIGZvbmN0aW9ubmFsaXTDqXM8L2I+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+4pyTIFN1cHBvcnQgY2xpZW50PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+4pyTIMOJcXVpcMOpIGTDqWRpw6llIGF1IGxhbmNlbWVudCBldCDDoCBsJ2FjY29tcGFnbmVtZW50PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgaHJlZj0nLycgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiBjb2xvcnMubGlnaHRHcmVlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHsgYmdjb2xvcjogY29sb3JzLmRhcmtlckdyZWVuIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIETDqW1hcnJlciBtYWludGVuYW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIHsvKiA8L1RoZW1lUHJvdmlkZXI+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBjb25zdCBHRVRCWVNMVUcgPSBncWxgXHJcbiAgICB7XHJcbiAgICAgICAgbWVudShpZDogMSkge1xyXG4gICAgICAgICAgICBuYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19ocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY3RhIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyKGlkOiAxKSB7XHJcbiAgICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICBsb2dvX2Zvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBibG9ja19zb2NpYWxfaGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzZWF1X3NvY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5hdkl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2hyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdF9sYW5ndWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeV9mbGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBtZW51OiB7IG5hdmJhciB9LFxyXG4gICAgICAgICAgICBmb290ZXI6IHsgZm9vdGVyIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5OiBHRVRCWVNMVUcsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHNzZDoge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyLFxyXG4gICAgICAgICAgICAgICAgZm9vdGVyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=