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
        lineNumber: 114,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {
        navbar: ssd.navbar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "pricing-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pricing",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: pricing.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: pricing.subtitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: pricing.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "model",
          children: models.map(function (model, idx) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_ModelCard__WEBPACK_IMPORTED_MODULE_4__.default, {
              model: model
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "services",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "services-top",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Des packs adapt\xE9s \xE0 vos besoins"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "offers",
          children: packs.map(function (pack, idx) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_PackCard__WEBPACK_IMPORTED_MODULE_5__.default, {
              pack: pack
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "premium",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "premium-title",
          children: "Envie d'une offre Premium\xA0?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
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
                lineNumber: 150,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "400\xA0K\xA0\u20AC"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  textAlign: 'center'
                },
                children: "annuels"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "Customisation possible\xA0!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
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
              lineNumber: 155,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
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
                    lineNumber: 162,
                    columnNumber: 55
                  }, _this), content]
                }, idx, true, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 41
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "arguments-offers",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "arguments-title",
          children: "Peu importe l'offre, on vous garantit\xA0:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "blocks",
          children: blocks.map(function (block, idx) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_offres_Block__WEBPACK_IMPORTED_MODULE_2__.default, {
              block: block
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "discover",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Envie d'en d\xE9couvrir plus\xA0?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
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
          lineNumber: 180,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
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
                lineNumber: 202,
                columnNumber: 74
              }, this), " par mois ?"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontStyle: 'italic'
              },
              children: "(Estimez en moyenne par mois)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
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
              lineNumber: 204,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
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
                lineNumber: 207,
                columnNumber: 74
              }, this), " allez-vous connecter ?"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontStyle: 'italic'
              },
              children: "(Le nombre de comptes au sein d'un m\xEAme banque est illimit\xE9)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
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
              lineNumber: 209,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
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
              lineNumber: 212,
              columnNumber: 40
            }, this), " vos services."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "subscription",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "price",
            children: "19\u20AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ht",
            children: "HT/Mois"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["\u2713 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: "Acc\xE8s \xE0 l'ensemble des fonctionnalit\xE9s"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 39
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u2713 Support client"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u2713 \xC9quip\xE9 d\xE9di\xE9e au lancement et \xE0 l'accompagnement"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 218,
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
            lineNumber: 223,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__.default, {
      footer: ssd.footer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb2ZmcmVzLmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsImxpZ2h0R3JlZW4iLCJkYXJrZXJHcmVlbiIsInZpb2xldCIsImJsb2NrcyIsInRpdGxlIiwiY29udGVudCIsImljb24iLCJGYURlc2t0b3AiLCJGYUxheWVyR3JvdXAiLCJ2YXJpYW50IiwiRmFQYWludEJydXNoIiwicHJpY2luZyIsInN1YnRpdGxlIiwidGV4dCIsIm1vZGVscyIsInRhZyIsImltYWdlIiwic3BlY3MiLCJjb2xvciIsInBhY2tzIiwiZGVzY3JpcHRpb24iLCJidWRnZXQiLCJwcmVtaXVtQ29udGVudCIsIlN0eWxlZFNsaWRlciIsInN0eWxlZCIsIlNsaWRlciIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luVG9wIiwiYm94U2hhZG93IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJvcGFjaXR5IiwiSG9tZSIsInNzZCIsInVzZVN0YXRlIiwidmFsdWVTbGlkZXIiLCJzZXRWYWx1ZVNsaWRlciIsInZhbHVlU2xpZGVyMiIsInNldFZhbHVlU2xpZGVyMiIsImhhbmRsZUNoYW5nZSIsImUiLCJuZXdWYWx1ZSIsImhhbmRsZUNoYW5nZTIiLCJuYXZiYXIiLCJtYXAiLCJtb2RlbCIsImlkeCIsInBhY2siLCJ0ZXh0QWxpZ24iLCJiZ2NvbG9yIiwicGFkZGluZyIsIm1hcmdpbiIsImJsb2NrIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImZvbnRTdHlsZSIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLE1BQU0sR0FB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QTRCLGdCQUFJLEVBQUMsR0FBakM7QUFBcUMsY0FBRSxFQUFFO0FBQ3JDc0QscUJBQU8sRUFBRXZELE1BQU0sQ0FBQ0MsVUFEcUI7QUFFckMseUJBQVc7QUFBRXNELHVCQUFPLEVBQUV2RCxNQUFNLENBQUNFO0FBQWxCO0FBRjBCLGFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBSLGVBd0hRLDhEQUFDLHVEQUFEO0FBQVEsWUFBTSxFQUFFcUMsR0FBRyxDQUFDeUI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZISDs7R0F4SXVCMUIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vZmZyZXMuZDFiNWE2Zjc0OWI3YzI3NDQ0ZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvb2ZmcmVzL0Jsb2NrJ1xyXG5pbXBvcnQgeyBGYURlc2t0b3AsIEZhTGF5ZXJHcm91cCwgRmFQYWludEJydXNoLCBGYUNoZWNrQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbi8vIGltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcclxuaW1wb3J0IHsgYXBvbGxvQ2xpZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0cmFwaVwiO1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IE1vZGVsQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL29mZnJlcy9Nb2RlbENhcmQnXHJcbmltcG9ydCBQYWNrQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL29mZnJlcy9QYWNrQ2FyZCdcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcclxuXHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgICBsaWdodEdyZWVuOiAnIzI3RDZCRCcsXHJcbiAgICBkYXJrZXJHcmVlbjogJyMyYjkzODQnLFxyXG4gICAgdmlvbGV0OiAnIzg5NmFmNCdcclxufVxyXG5cclxuY29uc3QgYmxvY2tzID0gW1xyXG4gICAgeyB0aXRsZTogJ1N1cHBvcnQgZMOpZGnDqScsIGNvbnRlbnQ6IFsn4pyTIEZBUScsICfinJMgUmVzc291cmNlcycsICfinJMgQ2hhdGJvdCddLCBpY29uOiBGYURlc2t0b3AgfSxcclxuICAgIHsgdGl0bGU6ICdPbmxpbmUgUmVwb3J0aW5nJywgY29udGVudDogJ1RvdXMgdm9zIHLDqXN1bHRhdHMgZGUgY2FtcGFnbmUsIGNyb3NzIHBsYXR0Zm9ybXMgZXQgY3Jvc3MgZGV2aWNlcywgYXUgY29ldXIgZFxcJ3VuZSBtw6ptZSBpbmZlcmZhY2UgcGVyc29ubmFsaXNhYmxlJywgaWNvbjogRmFMYXllckdyb3VwLCB2YXJpYW50OiBjb2xvcnMubGlnaHRHcmVlbiB9LFxyXG4gICAgeyB0aXRsZTogJ01hcmtldHBsYWNlJywgY29udGVudDogWyfinJMgSW5mbHVlbmNlJywgJ+KckyBWUiAmIEluLUdhbWluZy1BZHMnLCAn4pyTIEZvcm1hdHMgaW5ub3ZhbnRzJywgJ+KckyBBc3NldHMgY3LDqWFzJ10sIGljb246IEZhUGFpbnRCcnVzaCB9LFxyXG4gICAgeyB0aXRsZTogJ1LDqWFjdGl2aXTDqScsIGNvbnRlbnQ6ICdMYW5jZW1lbnQgZXQgb3B0aW1pc2F0aW9ucyBkZSBjYW1wYWduZXMgNy83JywgaWNvbjogRmFEZXNrdG9wIH0sXHJcbiAgICB7IHRpdGxlOiAnRXhwZXJ0aXNlJywgY29udGVudDogJ1VuZSBzcXVhZCBtdWx0aS1jZXJ0aWZpw6llJywgaWNvbjogRmFMYXllckdyb3VwLCB2YXJpYW50OiBjb2xvcnMubGlnaHRHcmVlbiB9LFxyXG4gICAgeyB0aXRsZTogJ1BlcmZvcm1hbmNlJywgY29udGVudDogJ0xlcyBhY3RpdmF0aW9ucyBsZXMgcGx1cyBwZXJmb3JtYW50ZXMgc2Vsb24gdm9zIG9iamVjdGlmcycsIGljb246IEZhUGFpbnRCcnVzaCB9LFxyXG5dXHJcblxyXG5jb25zdCBwcmljaW5nID0geyB0aXRsZTogJ1ByaWNpbmcnLCBzdWJ0aXRsZTogJ0F1Y3VuIGhvbm9yYWlyZSwgYXVjdW4gZnJhaXMsIGF1Y3VuZSBjb21taXNzaW9uLCB0b3V0IGVzdCBjb21wcmlzIGRhbnMgbGUgcHJpeCAhJywgdGV4dDogJ1VuIHRhcmlmIHVuaXF1ZSBjb21wcmVuYW50IGxcXCdhY2hhdCBkXFwnZXNwYWNlIG3DqWRpYXMsIG5vcyBob25vcmFpcmVzLCBub3MgZnJhaXMgZFxcJ2FkLXNlcnZpbmcsIGxcXCdhdWRpdCBkZXMgY3LDqWFzLCBsZSB0ZW1wcyBodW1haW4gcGFzc8OpIHN1ciBsYSBjYW1wYWduZSwgbGVzIGZlZXMgRFNQLi4uIE9wdGV6IHBvdXIgbGUgYWxsLWluY2x1c2l2ZSAhJyB9XHJcblxyXG5jb25zdCBtb2RlbHMgPSBbXHJcbiAgICB7IHRhZzogJ01pc2UgZW4gcGxhY2UnLCBpbWFnZTogJy9pbWFnZXMvb2ZmcmVzL3BheV9vbmxpbmUuc3ZnJywgdGl0bGU6ICdVbiBtb2TDqGxlIHNpbXBsaWZpw6knLCBzcGVjczogWydQdWJsaXNoaW5nJywgJ1RyYWRpbmcnLCAnQ3VzdG9tIFN1Y2Nlc3MgTWFuYWdlbWVudCcsICdUcmFmZmljIE1hbmFnZW1lbnQnLCAnQ29uc3VsdGluZycsICdNYXJrZXRwbGFjZScsICc9PiA8Yj4xIHNldWw8L2I+IGNvbnRhY3QgcG91ciB0b3VzIHZvcyBiZXNvaW5zJ10sIGNvbG9yOiAnIzI3RDZCRCcgfSxcclxuICAgIHsgdGFnOiAnRnJhaXMgdGVjaG5vbG9naXF1ZXMnLCBpbWFnZTogJy9pbWFnZXMvb2ZmcmVzL3VuZHJhdy5zdmcnLCB0aXRsZTogJ0F1Y3VuIGZyYWlzIGFkZGl0aW9ubmVscycsIHNwZWNzOiBbJzAgZnJhaXMgZFxcJ0F1ZGl0IGRlIGNyw6lhcycsICcwIGZyYWlzIGRcXCdBZHNlcnZpbmcnLCAnMCBmcmFpcyBkZSBEU1AnLCAnMCBmcmFpcyBkZSBEYXRhJywgJzAgZnJhaXMgZGUgY2libGFnZSBjb250ZXh0dWVsJywgJzAgZnJhaXMgZGUgcGFydGVuYWlyZXMgZGl2ZXJzZXMnXSwgY29sb3I6ICcjNTlBMEQ4JyB9LFxyXG4gICAgeyB0YWc6ICdTb3VwbGVzc2UnLCBpbWFnZTogJy9pbWFnZXMvb2ZmcmVzL3NoYXJlZF9nb2Fscy5zdmcnLCB0aXRsZTogJ1NhbnMgZW5nYWdlbWVudCcsIHNwZWNzOiBbJ0NhbXBhZ25lcyDDoCBsYSBwZXJmb3JtYW5jZScsICdUZXN0ICYgTGVhcm4nLCAnQWdpbGl0w6kgJiBSw6lhY3Rpdml0w6knXSwgY29sb3I6ICcjODk2QUY0JyB9LFxyXG5dXHJcblxyXG5jb25zdCBwYWNrcyA9IFtcclxuICAgIHsgdGl0bGU6ICdEaWdpdGFsIE5vbWFkJywgZGVzY3JpcHRpb246ICdQb3VyIGNldXggcXVpIHZldWxlbnQgdW5lIGV4cMOpcmllbmNlIDEwMCAlIFNlbGYtU2VydmljZScsIGJ1ZGdldDogJycsIGNvbnRlbnQ6IFsnTGFuY2VtZW50IGRlIGNhbXBhZ25lcyBlbiBzZWxmIHNlcnZpY2UnLCAnVG91cyBsZXMgaW52ZW50YWlyZXMgcHJvZ3JhbW1hdGlxdWVzJywgJ1N0cmF0w6lnaWVzIGNsw6kgZW4gbWFpbiBzZWxvbiB2b3Mgb2JqZWN0aWZzJywgJ1RpY2tldGluZyBTdXBwb3J0J10gfSxcclxuICAgIHsgdGl0bGU6ICdEaWdpdGFsIEV4cGVydCcsIGRlc2NyaXB0aW9uOiAnUG91ciBjZXV4IHF1aSB2ZXVsZW50IGxlcyBtZWlsbGV1cnMgZXhwZXJ0cycsIGJ1ZGdldDogJ8OAIFBBUlRJUiBERSAxMDAgSyBBTk5VRUxTJywgY29udGVudDogWydBY2NvdW50IFN0cmF0ZWdpc3QgU2VuaW9yIMOgIHZvdHJlIHNlcnZpY2UnLCAnVW4gZGlyZWN0ZXVyIGNvbnNlaWwgcHLDqXNlbnQgc3VyIGxlcyBtZWV0aW5ncyBzdHJhdMOpZ2lxdWVzJywgJ0EvQiBUZXN0aW5nIGV0IG11bHRpLXNjw6luYXJpc2F0aW9uIGRlcyBjYW1wYWduZXMnLCAnQsOqdGEtVGVzdGluZyBlbiBleGNsdXNpdml0w6kgZGVzIGRlcm5pw6hyZXMgaW5ub3ZhdGlvbnMgZGlnaXRhbGVzJywgJ0FjY8OocyDDoCBub3RyZSBzcXVhZCBkXFwnZXhwZXJ0cyBzZWxvbiB2b3MgYmVzb2lucyAoUHVibGlzaGluZywgQXR0cmlidXRpb24sIFRyYWZpYywgU0VBLCBTb2NpYWwuLi4pJ10sIHZhcmlhbnQ6IGNvbG9ycy5saWdodEdyZWVuIH0sXHJcbiAgICB7IHRpdGxlOiAnRGlnaXRhbCBGcmllbmQnLCBkZXNjcmlwdGlvbjogJ1BvdXIgY2V1eCBxdWkgdmV1bGVudCBkZSBsXFwnYWlkZSBzdXIgbGV1cnMgc3RyYXTDqWdpZXMgZGlnaXRhbGVzJywgYnVkZ2V0OiAnw4AgUEFSVElSIERFIDI1IEsgQU5OVUVMUycsIGNvbnRlbnQ6IFsnQWNjb3VudCBTdHJhdGVnaXN0IGTDqWRpw6knLCAnVG91dCBub3RyZSBjYXRhbG9ndWUgcHJvZHVpdHMnLCAnUmVjb21tYW5kYXRpb25zIHN0cmF0w6lnaXF1ZXMgc3VyIG1lc3VyZScsICdBY2NvbXBhZ2VtZW50IG91IGTDqXZlbG9wcGVtZW50IGRlcyBhc3NldHMgY3LDqWFzJywgJ1N1cHBvcnQgdGVjaG5pcXVlIGh1bWFpbiBzdXIgbGUgdHJhY2tpbmcnXSB9XHJcbl1cclxuXHJcbmNvbnN0IHByZW1pdW1Db250ZW50ID0gW1xyXG4gICAgJ0xlcyBtZWlsbGV1cnMgQWNjb3VudCBTdHJhdGVnaXN0cyAmIEtleSBBY2NvdW50IE1hbmFnZXJzJyxcclxuICAgICdOb3RyZSBTcXVhZCBkXFwnZXhwZXJ0cyDDoCB2b3RyZSBzZXJ2aWNlIChQdWJsaXNoaW5nLCBUcmFmaWMsIFNFQSwgQXNzZXRzIGNyw6lhcy4uLiknLFxyXG4gICAgJ0EvQiBUZXN0aW5nIGV0IG11bHRpLXNjw6luYXJpc2F0aW9uIGRlcyBjYW1wYWduZXMnLFxyXG4gICAgJ01lZGlhIFBsYW5uaW5nIGV0IEF1ZGllbmNlcyBQbGFubmluZycsXHJcbiAgICAnQW5hbHlzZSBjb25jdXJlbnRpZWxsZScsXHJcbiAgICAnQmVuY2htYXJrIFBlcmZvcm1hbmNlcyBldCDDiXR1ZGVzJyxcclxuICAgICdDb25zdWx0aW5nIChDb250ZW50cywgU3RyYXTDqWdpZSwgU0VPLi4pJyxcclxuICAgICdGb3JtYXRpb24nXHJcbl1cclxuXHJcbmNvbnN0IFN0eWxlZFNsaWRlciA9IHN0eWxlZChTbGlkZXIpKCgpID0+ICh7XHJcbiAgICAnJiAuTXVpU2xpZGVyLXRodW1iJzoge1xyXG4gICAgICAgIGhlaWdodDogNDMsXHJcbiAgICAgICAgd2lkdGg6IDQzLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIG1hcmdpblRvcDogMCxcclxuICAgICAgICBib3hTaGFkb3c6ICcwIDNweCAxcHggcmdiYSgwLDAsMCwwLjEpLDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMTMpLDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDIpJyxcclxuICAgICAgICAnJjpmb2N1cywgJjpob3ZlciwgJi5NdWktYWN0aXZlJzoge1xyXG4gICAgICAgICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgICAgICAgJzAgM3B4IDFweCByZ2JhKDAsMCwwLDAuMSksMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4zKSwwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjAyKScsXHJcbiAgICAgICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XHJcbiAgICAgICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcclxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDNweCAxcHggcmdiYSgwLDAsMCwwLjEpLDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMTMpLDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDIpJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aVNsaWRlci12YWx1ZUxhYmVsJzoge1xyXG4gICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd1bnNldCcsXHJcbiAgICAgICAgLy8gY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmIConOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgLy8gICBjb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyAnI2ZmZicgOiAnIzAwMCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgJyYgLk11aVNsaWRlci10cmFjayc6IHtcclxuICAgICAgICBoZWlnaHQ6IDYsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxyXG4gICAgICAgIGNvbG9yOiBjb2xvcnMubGlnaHRHcmVlbixcclxuICAgICAgfSxcclxuICAgICAgJyYgLk11aVNsaWRlci1yYWlsJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYmZiZmJmJyxcclxuICAgICAgICBoZWlnaHQ6IDYsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxyXG4gICAgICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBzc2QgfSkge1xyXG4gICAgY29uc3QgW3ZhbHVlU2xpZGVyLCBzZXRWYWx1ZVNsaWRlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt2YWx1ZVNsaWRlcjIsIHNldFZhbHVlU2xpZGVyMl0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZVNsaWRlcihuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UyID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVTbGlkZXIyKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItb2ZmcmVzJz5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+S2xveCB8IE5vcyBvZmZyZXM8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIHsvKiA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PiAqL31cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgbmF2YmFyPXtzc2QubmF2YmFyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3ByaWNpbmcudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cHJpY2luZy5zdWJ0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3ByaWNpbmcudGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZWxzLm1hcCgobW9kZWwsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RlbENhcmQga2V5PXtpZHh9IG1vZGVsPXttb2RlbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlcy10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5EZXMgcGFja3MgYWRhcHTDqXMgw6Agdm9zIGJlc29pbnM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYWNrcy5tYXAoKHBhY2ssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWNrQ2FyZCBwYWNrPXtwYWNrfSBrZXk9e2lkeH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbWl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdwcmVtaXVtLXRpdGxlJz5FbnZpZSBkJ3VuZSBvZmZyZSBQcmVtaXVtwqA/PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVtaXVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmVtaXVtLWNvbnRlbnQtbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+w4AgcGFydGlyIGRlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjQwMMKgS8Kg4oKsPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PmFubnVlbHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkN1c3RvbWlzYXRpb24gcG9zc2libGXCoCE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgc3g9e3sgYmdjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sIGNvbG9yOiAnd2hpdGUnLCAnJjpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZGFya2VyR3JlZW4gfSwgcGFkZGluZzogJzE1cHgnLCBtYXJnaW46ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW4gc2F2b2lyIHBsdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZW1pdW0tY29udGVudC1yaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlbWl1bUNvbnRlbnQubWFwKChjb250ZW50LCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+PEZhQ2hlY2tDaXJjbGUgc2l6ZT17MjB9IGNvbG9yPXtjb2xvcnMubGlnaHRHcmVlbn0gLz57Y29udGVudH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyZ3VtZW50cy1vZmZlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nYXJndW1lbnRzLXRpdGxlJz5QZXUgaW1wb3J0ZSBsJ29mZnJlLCBvbiB2b3VzIGdhcmFudGl0wqA6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9ja3MubWFwKChibG9jaywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrIGJsb2NrPXtibG9ja30ga2V5PXtpZHh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5FbnZpZSBkJ2VuIGTDqWNvdXZyaXIgcGx1c8KgPzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9Jy9jb250YWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhbmFseXRpY3MtYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiBjb2xvcnMubGlnaHRHcmVlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZGFya2VyR3JlZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPkNvbnRhY3Rlei1ub3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXJzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVycy1jb250ZW50LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyLWxhYmVsJz5Db21iaWVuIGRlIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBjb2xvcnMubGlnaHRHcmVlbiB9fT5mYWN0dXJlcyBmb3Vybmlzc2V1cnMgdHJhaXRlei12b3VzPC9zcGFuPiBwYXIgbW9pcyA/PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTdHlsZTonaXRhbGljJ319PihFc3RpbWV6IGVuIG1veWVubmUgcGFyIG1vaXMpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNsaWRlciBpZD0nc3R5bGVkLXNsaWRlcicgdmFsdWU9e3ZhbHVlU2xpZGVyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZUxhYmVsRGlzcGxheT1cIm9uXCIgbWluPXswfSBtYXg9ezUwfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVycy1jb250ZW50LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyLWxhYmVsJz5Db21iaWVuIGRlIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBjb2xvcnMubGlnaHRHcmVlbiB9fT5iYW5xdWVzPC9zcGFuPiBhbGxlei12b3VzIGNvbm5lY3RlciA/PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTdHlsZTonaXRhbGljJ319PihMZSBub21icmUgZGUgY29tcHRlcyBhdSBzZWluIGQndW4gbcOqbWUgYmFucXVlIGVzdCBpbGxpbWl0w6kpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNsaWRlciBpZD0nc3R5bGVkLXNsaWRlcjInIHZhbHVlPXt2YWx1ZVNsaWRlcjJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UyfSB2YWx1ZUxhYmVsRGlzcGxheT1cIm9uXCIgbWluPXsxfSBtYXg9ezIwfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVycy1jb250ZW50LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWl0ZXMgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGNvbG9ycy5saWdodEdyZWVuIH19PiBjb2xsYWJvcmVyPC9zcGFuPiB2b3Mgc2VydmljZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Vic2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJpY2UnPjE54oKsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naHQnPkhUL01vaXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+4pyTIDxiPkFjY8OocyDDoCBsJ2Vuc2VtYmxlIGRlcyBmb25jdGlvbm5hbGl0w6lzPC9iPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuKckyBTdXBwb3J0IGNsaWVudDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuKckyDDiXF1aXDDqSBkw6lkacOpZSBhdSBsYW5jZW1lbnQgZXQgw6AgbCdhY2NvbXBhZ25lbWVudDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGhyZWY9Jy8nIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7IGJnY29sb3I6IGNvbG9ycy5kYXJrZXJHcmVlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEw6ltYXJyZXIgbWFpbnRlbmFudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciBmb290ZXI9e3NzZC5mb290ZXJ9IC8+XHJcbiAgICAgICAgICAgIHsvKiA8L1RoZW1lUHJvdmlkZXI+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBjb25zdCBHRVRCWVNMVUcgPSBncWxgXHJcbiAgICB7XHJcbiAgICAgICAgbWVudShpZDogMSkge1xyXG4gICAgICAgICAgICBuYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2xhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19ocmVmXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY3RhIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyKGlkOiAxKSB7XHJcbiAgICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICBsb2dvX2Zvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBibG9ja19zb2NpYWxfaGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzZWF1X3NvY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5hdkl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX2hyZWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdF9sYW5ndWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeV9mbGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBtZW51OiB7IG5hdmJhciB9LFxyXG4gICAgICAgICAgICBmb290ZXI6IHsgZm9vdGVyIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5OiBHRVRCWVNMVUcsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHNzZDoge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyLFxyXG4gICAgICAgICAgICAgICAgZm9vdGVyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=