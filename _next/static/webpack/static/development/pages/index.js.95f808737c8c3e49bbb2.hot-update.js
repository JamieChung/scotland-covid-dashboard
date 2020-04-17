webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/app.tsx":
/*!**********************************!*\
  !*** ./pages/components/app.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/queries */ "./utils/queries.ts");
/* harmony import */ var _components_areasCharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/areasCharts */ "./pages/components/areasCharts.tsx");
/* harmony import */ var _components_countryCharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/countryCharts */ "./pages/components/countryCharts.tsx");
/* harmony import */ var _components_singleKPICard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/singleKPICard */ "./pages/components/singleKPICard.tsx");
/* harmony import */ var _components_topAreasTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/topAreasTable */ "./pages/components/topAreasTable.tsx");
/* harmony import */ var _components_topCountriesTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/topCountriesTable */ "./pages/components/topCountriesTable.tsx");





var _jsxFileName = "/Users/jamiechung/Development/COVID/scotland-covid-dashboard/pages/components/app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var App = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }
      }, "Scotland COVID-19 Dashboard"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "overline",
        style: {
          marginBottom: 25,
          display: 'block'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }
      }, "Updated Daily - BST/GMT"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        container: true,
        spacing: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }
      }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Total number of confirmed cases in Scotland",
        query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_TOTAL_CONFIRMED_CASES_SCOTLAND"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }
      }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Latest daily number of confirmed cases in Scotland",
        query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_DAILY_CHANGE_CONFIRMED_CASES_SCOTLAND"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }
      }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Total number of tests in Scotland",
        query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_TOTAL_TESTS_SCOTLAND"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Latest daily number of tests in Scotland",
        query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_DAILY_CHANGE_TESTS_SCOTLAND"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Total number of deaths in Scotland",
        query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_TOTAL_DEATHS_SCOTLAND"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Latest daily number of deaths in Scotland",
        query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_DAILY_CHANGE_DEATHS_SCOTLAND"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }
      }, __jsx(_components_countryCharts__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }
      }, __jsx(_components_topAreasTable__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }
      }, __jsx(_components_topCountriesTable__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }, __jsx(_components_areasCharts__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }
      }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
        variant: "middle",
        style: {
          marginTop: 50,
          marginBottom: 50
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }
      }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "body1",
        style: {
          textAlign: 'center'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }
      }, __jsx(ReactGA.OutboundLink, {
        eventLabel: "outbound-github.com/jamiechung/scotland-covid-dashboard",
        target: "_blank",
        to: "https://github.com/JamieChung/scotland-covid-dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, "Contribute on GitHub"), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      }, " - Made with \u2764\uFE0F in Edinburgh, Scotland - "), __jsx(ReactGA.OutboundLink, {
        eventLabel: "outbound-github.com/tomwhite/covid-19-uk-data",
        target: "_blank",
        to: "https://github.com/tomwhite/covid-19-uk-data",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }
      }, "Data provided by Tom White")));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.95f808737c8c3e49bbb2.hot-update.js.map