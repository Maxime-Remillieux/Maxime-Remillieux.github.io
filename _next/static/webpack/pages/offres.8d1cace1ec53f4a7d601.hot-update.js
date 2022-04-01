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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_offres_ModelCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/offres/ModelCard */ "./components/offres/ModelCard.js");
/* harmony import */ var _components_offres_PackCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/offres/PackCard */ "./components/offres/PackCard.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Max\\Documents\\Klox\\website\\pages\\offres.js",
    _s = $RefreshSig$();






 // import ArrowForwardIcon from '@mui/icons-material/ArrowForward';








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
var StyledSlider = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Slider)(function () {
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
        lineNumber: 116,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {
        navbar: ssd.navbar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "pricing-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pricing",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: pricing.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: pricing.subtitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: pricing.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "model",
          children: models.map(function (model, idx) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_ModelCard__WEBPACK_IMPORTED_MODULE_4__.default, {
              model: model
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "services",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "services-top",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Des packs adapt\xE9s \xE0 vos besoins"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "offers",
          children: packs.map(function (pack, idx) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_PackCard__WEBPACK_IMPORTED_MODULE_5__.default, {
              pack: pack
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
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
          lineNumber: 148,
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
                lineNumber: 152,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "400\xA0K\xA0\u20AC"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  textAlign: 'center'
                },
                children: "annuels"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "Customisation possible\xA0!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
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
              lineNumber: 157,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "premium-content-right",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: premiumContent.map(function (content, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaCheckCircle, {
                    size: 20,
                    color: colors.lightGreen
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 55
                  }, _this), content]
                }, idx, true, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 41
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "arguments-offers",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "arguments-title",
          children: "Peu importe l'offre, on vous garantit\xA0:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "blocks",
          children: blocks.map(function (block, idx) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_Block__WEBPACK_IMPORTED_MODULE_2__.default, {
              block: block
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "discover",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Envie d'en d\xE9couvrir plus\xA0?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
          href: "/contact",
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
          lineNumber: 182,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
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
                lineNumber: 204,
                columnNumber: 74
              }, this), " par mois ?"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontStyle: 'italic'
              },
              children: "(Estimez en moyenne par mois)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
              id: "styled-slider",
              value: valueSlider,
              onChange: handleChange,
              valueLabelDisplay: "on",
              min: 0,
              max: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
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
                lineNumber: 209,
                columnNumber: 74
              }, this), " allez-vous connecter ?"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontStyle: 'italic'
              },
              children: "(Le nombre de comptes au sein d'un m\xEAme banque est illimit\xE9)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
              id: "styled-slider2",
              value: valueSlider2,
              onChange: handleChange2,
              valueLabelDisplay: "on",
              min: 1,
              max: 20
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 208,
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
              lineNumber: 214,
              columnNumber: 40
            }, this), " vos services."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "subscription",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "price",
            children: "19\u20AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ht",
            children: "HT/Mois"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["\u2713 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: "Acc\xE8s \xE0 l'ensemble des fonctionnalit\xE9s"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 39
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u2713 Support client"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u2713 \xC9quip\xE9 d\xE9di\xE9e au lancement et \xE0 l'accompagnement"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 220,
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
            lineNumber: 225,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__.default, {
      footer: ssd.footer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb2ZmcmVzLmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsImxpZ2h0R3JlZW4iLCJkYXJrZXJHcmVlbiIsInZpb2xldCIsImJsb2NrcyIsInRpdGxlIiwiY29udGVudCIsImljb24iLCJGYURlc2t0b3AiLCJGYUxheWVyR3JvdXAiLCJ2YXJpYW50IiwiRmFQYWludEJydXNoIiwicHJpY2luZyIsInN1YnRpdGxlIiwidGV4dCIsIm1vZGVscyIsInRhZyIsImltYWdlIiwic3BlY3MiLCJjb2xvciIsInBhY2tzIiwiZGVzY3JpcHRpb24iLCJidWRnZXQiLCJwcmVtaXVtQ29udGVudCIsIlN0eWxlZFNsaWRlciIsInN0eWxlZCIsIlNsaWRlciIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luVG9wIiwiYm94U2hhZG93IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJvcGFjaXR5IiwiSG9tZSIsInNzZCIsInVzZVN0YXRlIiwidmFsdWVTbGlkZXIiLCJzZXRWYWx1ZVNsaWRlciIsInZhbHVlU2xpZGVyMiIsInNldFZhbHVlU2xpZGVyMiIsImhhbmRsZUNoYW5nZSIsImUiLCJuZXdWYWx1ZSIsImhhbmRsZUNoYW5nZTIiLCJuYXZiYXIiLCJtYXAiLCJtb2RlbCIsImlkeCIsInBhY2siLCJ0ZXh0QWxpZ24iLCJiZ2NvbG9yIiwicGFkZGluZyIsIm1hcmdpbiIsImJsb2NrIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImZvbnRTdHlsZSIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFN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QUFBQTtBQUFBLGtCQUhKLGVBUUksOERBQUMsMERBQUQ7QUFBUSxtQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGdCQUFJLEVBQUMsR0FBakM7QUFBcUMsY0FBRSxFQUFFO0FBQ3JDc0QscUJBQU8sRUFBRXZELE1BQU0sQ0FBQ0MsVUFEcUI7QUFFckMseUJBQVc7QUFBRXNELHVCQUFPLEVBQUV2RCxNQUFNLENBQUNFO0FBQWxCO0FBRjBCLGFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBSLGVBd0hRLDhEQUFDLHVEQUFEO0FBQVEsWUFBTSxFQUFFcUMsR0FBRyxDQUFDeUI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZISDs7R0F4SXVCMUIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vZmZyZXMuOGQxY2FjZTFlYzUzZjRhN2Q2MDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvb2ZmcmVzL0Jsb2NrJ1xyXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCB3aXRoVGhlbWUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHsgRmFEZXNrdG9wLCBGYUxheWVyR3JvdXAsIEZhUGFpbnRCcnVzaCwgRmFDaGVja0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG4vLyBpbXBvcnQgQXJyb3dGb3J3YXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCB7IGFwb2xsb0NsaWVudCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHJhcGlcIjtcclxuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBNb2RlbENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9vZmZyZXMvTW9kZWxDYXJkJ1xyXG5pbXBvcnQgUGFja0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9vZmZyZXMvUGFja0NhcmQnXHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXHJcblxyXG5cclxuY29uc3QgY29sb3JzID0ge1xyXG4gICAgbGlnaHRHcmVlbjogJyMyN0Q2QkQnLFxyXG4gICAgZGFya2VyR3JlZW46ICcjMmI5Mzg0JyxcclxuICAgIHZpb2xldDogJyM4OTZhZjQnXHJcbn1cclxuXHJcbmNvbnN0IGJsb2NrcyA9IFtcclxuICAgIHsgdGl0bGU6ICdTdXBwb3J0IGTDqWRpw6knLCBjb250ZW50OiBbJ+KckyBGQVEnLCAn4pyTIFJlc3NvdXJjZXMnLCAn4pyTIENoYXRib3QnXSwgaWNvbjogRmFEZXNrdG9wIH0sXHJcbiAgICB7IHRpdGxlOiAnT25saW5lIFJlcG9ydGluZycsIGNvbnRlbnQ6ICdUb3VzIHZvcyByw6lzdWx0YXRzIGRlIGNhbXBhZ25lLCBjcm9zcyBwbGF0dGZvcm1zIGV0IGNyb3NzIGRldmljZXMsIGF1IGNvZXVyIGRcXCd1bmUgbcOqbWUgaW5mZXJmYWNlIHBlcnNvbm5hbGlzYWJsZScsIGljb246IEZhTGF5ZXJHcm91cCwgdmFyaWFudDogY29sb3JzLmxpZ2h0R3JlZW4gfSxcclxuICAgIHsgdGl0bGU6ICdNYXJrZXRwbGFjZScsIGNvbnRlbnQ6IFsn4pyTIEluZmx1ZW5jZScsICfinJMgVlIgJiBJbi1HYW1pbmctQWRzJywgJ+KckyBGb3JtYXRzIGlubm92YW50cycsICfinJMgQXNzZXRzIGNyw6lhcyddLCBpY29uOiBGYVBhaW50QnJ1c2ggfSxcclxuICAgIHsgdGl0bGU6ICdSw6lhY3Rpdml0w6knLCBjb250ZW50OiAnTGFuY2VtZW50IGV0IG9wdGltaXNhdGlvbnMgZGUgY2FtcGFnbmVzIDcvNycsIGljb246IEZhRGVza3RvcCB9LFxyXG4gICAgeyB0aXRsZTogJ0V4cGVydGlzZScsIGNvbnRlbnQ6ICdVbmUgc3F1YWQgbXVsdGktY2VydGlmacOpZScsIGljb246IEZhTGF5ZXJHcm91cCwgdmFyaWFudDogY29sb3JzLmxpZ2h0R3JlZW4gfSxcclxuICAgIHsgdGl0bGU6ICdQZXJmb3JtYW5jZScsIGNvbnRlbnQ6ICdMZXMgYWN0aXZhdGlvbnMgbGVzIHBsdXMgcGVyZm9ybWFudGVzIHNlbG9uIHZvcyBvYmplY3RpZnMnLCBpY29uOiBGYVBhaW50QnJ1c2ggfSxcclxuXVxyXG5cclxuY29uc3QgcHJpY2luZyA9IHsgdGl0bGU6ICdQcmljaW5nJywgc3VidGl0bGU6ICdBdWN1biBob25vcmFpcmUsIGF1Y3VuIGZyYWlzLCBhdWN1bmUgY29tbWlzc2lvbiwgdG91dCBlc3QgY29tcHJpcyBkYW5zIGxlIHByaXggIScsIHRleHQ6ICdVbiB0YXJpZiB1bmlxdWUgY29tcHJlbmFudCBsXFwnYWNoYXQgZFxcJ2VzcGFjZSBtw6lkaWFzLCBub3MgaG9ub3JhaXJlcywgbm9zIGZyYWlzIGRcXCdhZC1zZXJ2aW5nLCBsXFwnYXVkaXQgZGVzIGNyw6lhcywgbGUgdGVtcHMgaHVtYWluIHBhc3PDqSBzdXIgbGEgY2FtcGFnbmUsIGxlcyBmZWVzIERTUC4uLiBPcHRleiBwb3VyIGxlIGFsbC1pbmNsdXNpdmUgIScgfVxyXG5cclxuY29uc3QgbW9kZWxzID0gW1xyXG4gICAgeyB0YWc6ICdNaXNlIGVuIHBsYWNlJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy9wYXlfb25saW5lLnN2ZycsIHRpdGxlOiAnVW4gbW9kw6hsZSBzaW1wbGlmacOpJywgc3BlY3M6IFsnUHVibGlzaGluZycsICdUcmFkaW5nJywgJ0N1c3RvbSBTdWNjZXNzIE1hbmFnZW1lbnQnLCAnVHJhZmZpYyBNYW5hZ2VtZW50JywgJ0NvbnN1bHRpbmcnLCAnTWFya2V0cGxhY2UnLCAnPT4gPGI+MSBzZXVsPC9iPiBjb250YWN0IHBvdXIgdG91cyB2b3MgYmVzb2lucyddLCBjb2xvcjogJyMyN0Q2QkQnIH0sXHJcbiAgICB7IHRhZzogJ0ZyYWlzIHRlY2hub2xvZ2lxdWVzJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy91bmRyYXcuc3ZnJywgdGl0bGU6ICdBdWN1biBmcmFpcyBhZGRpdGlvbm5lbHMnLCBzcGVjczogWycwIGZyYWlzIGRcXCdBdWRpdCBkZSBjcsOpYXMnLCAnMCBmcmFpcyBkXFwnQWRzZXJ2aW5nJywgJzAgZnJhaXMgZGUgRFNQJywgJzAgZnJhaXMgZGUgRGF0YScsICcwIGZyYWlzIGRlIGNpYmxhZ2UgY29udGV4dHVlbCcsICcwIGZyYWlzIGRlIHBhcnRlbmFpcmVzIGRpdmVyc2VzJ10sIGNvbG9yOiAnIzU5QTBEOCcgfSxcclxuICAgIHsgdGFnOiAnU291cGxlc3NlJywgaW1hZ2U6ICcvaW1hZ2VzL29mZnJlcy9zaGFyZWRfZ29hbHMuc3ZnJywgdGl0bGU6ICdTYW5zIGVuZ2FnZW1lbnQnLCBzcGVjczogWydDYW1wYWduZXMgw6AgbGEgcGVyZm9ybWFuY2UnLCAnVGVzdCAmIExlYXJuJywgJ0FnaWxpdMOpICYgUsOpYWN0aXZpdMOpJ10sIGNvbG9yOiAnIzg5NkFGNCcgfSxcclxuXVxyXG5cclxuY29uc3QgcGFja3MgPSBbXHJcbiAgICB7IHRpdGxlOiAnRGlnaXRhbCBOb21hZCcsIGRlc2NyaXB0aW9uOiAnUG91ciBjZXV4IHF1aSB2ZXVsZW50IHVuZSBleHDDqXJpZW5jZSAxMDAgJSBTZWxmLVNlcnZpY2UnLCBidWRnZXQ6ICcnLCBjb250ZW50OiBbJ0xhbmNlbWVudCBkZSBjYW1wYWduZXMgZW4gc2VsZiBzZXJ2aWNlJywgJ1RvdXMgbGVzIGludmVudGFpcmVzIHByb2dyYW1tYXRpcXVlcycsICdTdHJhdMOpZ2llcyBjbMOpIGVuIG1haW4gc2Vsb24gdm9zIG9iamVjdGlmcycsICdUaWNrZXRpbmcgU3VwcG9ydCddIH0sXHJcbiAgICB7IHRpdGxlOiAnRGlnaXRhbCBFeHBlcnQnLCBkZXNjcmlwdGlvbjogJ1BvdXIgY2V1eCBxdWkgdmV1bGVudCBsZXMgbWVpbGxldXJzIGV4cGVydHMnLCBidWRnZXQ6ICfDgCBQQVJUSVIgREUgMTAwIEsgQU5OVUVMUycsIGNvbnRlbnQ6IFsnQWNjb3VudCBTdHJhdGVnaXN0IFNlbmlvciDDoCB2b3RyZSBzZXJ2aWNlJywgJ1VuIGRpcmVjdGV1ciBjb25zZWlsIHByw6lzZW50IHN1ciBsZXMgbWVldGluZ3Mgc3RyYXTDqWdpcXVlcycsICdBL0IgVGVzdGluZyBldCBtdWx0aS1zY8OpbmFyaXNhdGlvbiBkZXMgY2FtcGFnbmVzJywgJ0LDqnRhLVRlc3RpbmcgZW4gZXhjbHVzaXZpdMOpIGRlcyBkZXJuacOocmVzIGlubm92YXRpb25zIGRpZ2l0YWxlcycsICdBY2PDqHMgw6Agbm90cmUgc3F1YWQgZFxcJ2V4cGVydHMgc2Vsb24gdm9zIGJlc29pbnMgKFB1Ymxpc2hpbmcsIEF0dHJpYnV0aW9uLCBUcmFmaWMsIFNFQSwgU29jaWFsLi4uKSddLCB2YXJpYW50OiBjb2xvcnMubGlnaHRHcmVlbiB9LFxyXG4gICAgeyB0aXRsZTogJ0RpZ2l0YWwgRnJpZW5kJywgZGVzY3JpcHRpb246ICdQb3VyIGNldXggcXVpIHZldWxlbnQgZGUgbFxcJ2FpZGUgc3VyIGxldXJzIHN0cmF0w6lnaWVzIGRpZ2l0YWxlcycsIGJ1ZGdldDogJ8OAIFBBUlRJUiBERSAyNSBLIEFOTlVFTFMnLCBjb250ZW50OiBbJ0FjY291bnQgU3RyYXRlZ2lzdCBkw6lkacOpJywgJ1RvdXQgbm90cmUgY2F0YWxvZ3VlIHByb2R1aXRzJywgJ1JlY29tbWFuZGF0aW9ucyBzdHJhdMOpZ2lxdWVzIHN1ciBtZXN1cmUnLCAnQWNjb21wYWdlbWVudCBvdSBkw6l2ZWxvcHBlbWVudCBkZXMgYXNzZXRzIGNyw6lhcycsICdTdXBwb3J0IHRlY2huaXF1ZSBodW1haW4gc3VyIGxlIHRyYWNraW5nJ10gfVxyXG5dXHJcblxyXG5jb25zdCBwcmVtaXVtQ29udGVudCA9IFtcclxuICAgICdMZXMgbWVpbGxldXJzIEFjY291bnQgU3RyYXRlZ2lzdHMgJiBLZXkgQWNjb3VudCBNYW5hZ2VycycsXHJcbiAgICAnTm90cmUgU3F1YWQgZFxcJ2V4cGVydHMgw6Agdm90cmUgc2VydmljZSAoUHVibGlzaGluZywgVHJhZmljLCBTRUEsIEFzc2V0cyBjcsOpYXMuLi4pJyxcclxuICAgICdBL0IgVGVzdGluZyBldCBtdWx0aS1zY8OpbmFyaXNhdGlvbiBkZXMgY2FtcGFnbmVzJyxcclxuICAgICdNZWRpYSBQbGFubmluZyBldCBBdWRpZW5jZXMgUGxhbm5pbmcnLFxyXG4gICAgJ0FuYWx5c2UgY29uY3VyZW50aWVsbGUnLFxyXG4gICAgJ0JlbmNobWFyayBQZXJmb3JtYW5jZXMgZXQgw4l0dWRlcycsXHJcbiAgICAnQ29uc3VsdGluZyAoQ29udGVudHMsIFN0cmF0w6lnaWUsIFNFTy4uKScsXHJcbiAgICAnRm9ybWF0aW9uJ1xyXG5dXHJcblxyXG5jb25zdCBTdHlsZWRTbGlkZXIgPSBzdHlsZWQoU2xpZGVyKSgoKSA9PiAoe1xyXG4gICAgJyYgLk11aVNsaWRlci10aHVtYic6IHtcclxuICAgICAgICBoZWlnaHQ6IDQzLFxyXG4gICAgICAgIHdpZHRoOiA0MyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICBtYXJnaW5Ub3A6IDAsXHJcbiAgICAgICAgYm94U2hhZG93OiAnMCAzcHggMXB4IHJnYmEoMCwwLDAsMC4xKSwwIDRweCA4cHggcmdiYSgwLDAsMCwwLjEzKSwwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjAyKScsXHJcbiAgICAgICAgJyY6Zm9jdXMsICY6aG92ZXIsICYuTXVpLWFjdGl2ZSc6IHtcclxuICAgICAgICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgICAgICAgICcwIDNweCAxcHggcmdiYSgwLDAsMCwwLjEpLDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMyksMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4wMiknLFxyXG4gICAgICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxyXG4gICAgICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAzcHggMXB4IHJnYmEoMCwwLDAsMC4xKSwwIDRweCA4cHggcmdiYSgwLDAsMCwwLjEzKSwwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjAyKScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlTbGlkZXItdmFsdWVMYWJlbCc6IHtcclxuICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndW5zZXQnLFxyXG4gICAgICAgIC8vIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJiAqJzoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIC8vICAgY29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2RhcmsnID8gJyNmZmYnIDogJyMwMDAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIC5NdWlTbGlkZXItdHJhY2snOiB7XHJcbiAgICAgICAgaGVpZ2h0OiA2LFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMyxcclxuICAgICAgICBjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICAgIH0sXHJcbiAgICAgICcmIC5NdWlTbGlkZXItcmFpbCc6IHtcclxuICAgICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2JmYmZiZicsXHJcbiAgICAgICAgaGVpZ2h0OiA2LFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMyxcclxuICAgICAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgc3NkIH0pIHtcclxuICAgIGNvbnN0IFt2YWx1ZVNsaWRlciwgc2V0VmFsdWVTbGlkZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdmFsdWVTbGlkZXIyLCBzZXRWYWx1ZVNsaWRlcjJdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVTbGlkZXIobmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlMiA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlU2xpZGVyMihuZXdWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLW9mZnJlcyc+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPktsb3ggfCBOb3Mgb2ZmcmVzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICB7LyogPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIG5hdmJhcj17c3NkLm5hdmJhcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwcmljaW5nLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3ByaWNpbmcuc3VidGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcmljaW5nLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21vZGVscy5tYXAoKG1vZGVsLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kZWxDYXJkIGtleT17aWR4fSBtb2RlbD17bW9kZWx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+RGVzIHBhY2tzIGFkYXB0w6lzIMOgIHZvcyBiZXNvaW5zPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFja3MubWFwKChwYWNrLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFja0NhcmQgcGFjaz17cGFja30ga2V5PXtpZHh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZW1pdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnNTBweCcgfX0+RW52aWUgZCd1bmUgb2ZmcmUgUHJlbWl1bcKgPzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbWl1bS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJlbWl1bS1jb250ZW50LWxlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PsOAIHBhcnRpciBkZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj40MDDCoEvCoOKCrDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5hbm51ZWxzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5DdXN0b21pc2F0aW9uIHBvc3NpYmxlwqAhPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIHN4PXt7IGJnY29sb3I6IGNvbG9ycy5saWdodEdyZWVuLCBjb2xvcjogJ3doaXRlJywgJyY6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhcmtlckdyZWVuIH0sIHBhZGRpbmc6ICcxNXB4JywgbWFyZ2luOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIHNhdm9pciBwbHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmVtaXVtLWNvbnRlbnQtcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZW1pdW1Db250ZW50Lm1hcCgoY29udGVudCwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9PjxGYUNoZWNrQ2lyY2xlIHNpemU9ezIwfSBjb2xvcj17Y29sb3JzLmxpZ2h0R3JlZW59IC8+e2NvbnRlbnR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmd1bWVudHMtb2ZmZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2FyZ3VtZW50cy10aXRsZSc+UGV1IGltcG9ydGUgbCdvZmZyZSwgb24gdm91cyBnYXJhbnRpdMKgOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvY2tzLm1hcCgoYmxvY2ssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9jayBibG9jaz17YmxvY2t9IGtleT17aWR4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjb3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+RW52aWUgZCdlbiBkw6ljb3V2cmlyIHBsdXPCoD88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPScvY29udGFjdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYW5hbHl0aWNzLWJ1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhcmtlckdyZWVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5Db250YWN0ZXotbm91c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVycy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnMtY29udGVudC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1sYWJlbCc+Q29tYmllbiBkZSA8c3BhbiBzdHlsZT17eyBjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4gfX0+ZmFjdHVyZXMgZm91cm5pc3NldXJzIHRyYWl0ZXotdm91czwvc3Bhbj4gcGFyIG1vaXMgPzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U3R5bGU6J2l0YWxpYyd9fT4oRXN0aW1leiBlbiBtb3llbm5lIHBhciBtb2lzKTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTbGlkZXIgaWQ9J3N0eWxlZC1zbGlkZXInIHZhbHVlPXt2YWx1ZVNsaWRlcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWVMYWJlbERpc3BsYXk9XCJvblwiIG1pbj17MH0gbWF4PXs1MH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnMtY29udGVudC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1sYWJlbCc+Q29tYmllbiBkZSA8c3BhbiBzdHlsZT17eyBjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4gfX0+YmFucXVlczwvc3Bhbj4gYWxsZXotdm91cyBjb25uZWN0ZXIgPzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U3R5bGU6J2l0YWxpYyd9fT4oTGUgbm9tYnJlIGRlIGNvbXB0ZXMgYXUgc2VpbiBkJ3VuIG3Dqm1lIGJhbnF1ZSBlc3QgaWxsaW1pdMOpKTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTbGlkZXIgaWQ9J3N0eWxlZC1zbGlkZXIyJyB2YWx1ZT17dmFsdWVTbGlkZXIyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlMn0gdmFsdWVMYWJlbERpc3BsYXk9XCJvblwiIG1pbj17MX0gbWF4PXsyMH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnMtY29udGVudC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmFpdGVzIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBjb2xvcnMubGlnaHRHcmVlbiB9fT4gY29sbGFib3Jlcjwvc3Bhbj4gdm9zIHNlcnZpY2VzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByaWNlJz4xOeKCrDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2h0Jz5IVC9Nb2lzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuKckyA8Yj5BY2PDqHMgw6AgbCdlbnNlbWJsZSBkZXMgZm9uY3Rpb25uYWxpdMOpczwvYj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7inJMgU3VwcG9ydCBjbGllbnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7inJMgw4lxdWlww6kgZMOpZGnDqWUgYXUgbGFuY2VtZW50IGV0IMOgIGwnYWNjb21wYWduZW1lbnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBocmVmPScvJyBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6IGNvbG9ycy5saWdodEdyZWVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzogeyBiZ2NvbG9yOiBjb2xvcnMuZGFya2VyR3JlZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRMOpbWFycmVyIG1haW50ZW5hbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgZm9vdGVyPXtzc2QuZm9vdGVyfSAvPlxyXG4gICAgICAgICAgICB7LyogPC9UaGVtZVByb3ZpZGVyPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgY29uc3QgR0VUQllTTFVHID0gZ3FsYFxyXG4gICAge1xyXG4gICAgICAgIG1lbnUoaWQ6IDEpIHtcclxuICAgICAgICAgICAgbmF2YmFyIHtcclxuICAgICAgICAgICAgICAgIGxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfaHJlZlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGN0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlcihpZDogMSkge1xyXG4gICAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICAgICAgbG9nb19mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmxvY2tfc29jaWFsX2hlYWRpbmdcclxuICAgICAgICAgICAgICAgIHJlc2VhdV9zb2NpYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25cclxuICAgICAgICAgICAgICAgICAgICBocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuYXZJdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19ocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RfbGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnlfZmxhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZVRleHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbWVudTogeyBuYXZiYXIgfSxcclxuICAgICAgICAgICAgZm9vdGVyOiB7IGZvb3RlciB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogR0VUQllTTFVHLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBzc2Q6IHtcclxuICAgICAgICAgICAgICAgIG5hdmJhcixcclxuICAgICAgICAgICAgICAgIGZvb3RlcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9