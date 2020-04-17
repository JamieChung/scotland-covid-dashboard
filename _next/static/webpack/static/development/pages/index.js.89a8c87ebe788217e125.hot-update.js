webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-ga/dist/esm/components/OutboundLink.js":
false,

/***/ "./node_modules/react-ga/dist/esm/core.js":
false,

/***/ "./node_modules/react-ga/dist/esm/index.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/console/log.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/console/warn.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/format.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/loadGA.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/trim.js":
false,

/***/ "./pages/components/app.tsx":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_areasCharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/areasCharts */ "./pages/components/areasCharts.tsx");
/* harmony import */ var _components_countryCharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/countryCharts */ "./pages/components/countryCharts.tsx");
/* harmony import */ var _components_topAreasTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/topAreasTable */ "./pages/components/topAreasTable.tsx");
/* harmony import */ var _components_topCountriesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/topCountriesTable */ "./pages/components/topCountriesTable.tsx");
/* harmony import */ var _components_singleKPICard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/singleKPICard */ "./pages/components/singleKPICard.tsx");
/* harmony import */ var _utils_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/queries */ "./utils/queries.ts");
var _this = undefined,
    _jsxFileName = "/Users/jamiechung/Development/COVID/scotland-covid-dashboard/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var HomePage = function HomePage() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Scotland COVID-19 Dashboard"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "overline",
    style: {
      marginBottom: 25,
      display: 'block'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "Updated Daily - BST/GMT"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Total number of confirmed cases in Scotland",
    query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_TOTAL_CONFIRMED_CASES_SCOTLAND"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Latest daily number of confirmed cases in Scotland",
    query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_DAILY_CHANGE_CONFIRMED_CASES_SCOTLAND"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Total number of tests in Scotland",
    query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_TOTAL_TESTS_SCOTLAND"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Latest daily number of tests in Scotland",
    query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_DAILY_CHANGE_TESTS_SCOTLAND"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Total number of deaths in Scotland",
    query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_TOTAL_DEATHS_SCOTLAND"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Latest daily number of deaths in Scotland",
    query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_DAILY_CHANGE_DEATHS_SCOTLAND"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx(_components_countryCharts__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx(_components_topAreasTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx(_components_topCountriesTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(_components_areasCharts__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle",
    style: {
      marginTop: 50,
      marginBottom: 50
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1",
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "Contribute on GitHub - Made with \u2764\uFE0F in Edinburgh, Scotland - ", __jsx("a", {
    href: "https://github.com/tomwhite/covid-19-uk-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 86
    }
  }, "Data provided by Tom White"))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.89a8c87ebe788217e125.hot-update.js.map