webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/app.tsx":
/*!**********************************!*\
  !*** ./pages/components/app.tsx ***!
  \**********************************/
/*! exports provided: areaExpansions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaExpansions", function() { return areaExpansions; });
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
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ICUTrendCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ICUTrendCard */ "./pages/components/ICUTrendCard.tsx");
/* harmony import */ var _StaffAbsencesCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./StaffAbsencesCard */ "./pages/components/StaffAbsencesCard.tsx");
/* harmony import */ var _AreaExpansionPanelDetail__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AreaExpansionPanelDetail */ "./pages/components/AreaExpansionPanelDetail.tsx");





var _jsxFileName = "/Users/jamiechung/Development/COVID/scotland-covid-dashboard/pages/components/app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }















var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    }
  };
});
function areaExpansions() {
  var classes = {
    heading: {
      flexBasis: '33.33%',
      flexShrink: 0
    }
  };
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ExpansionPanel"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ExpansionPanelSummary"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 52
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "Areas #1"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, "Descripton of Area #1")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ExpansionPanelDetails"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx(_AreaExpansionPanelDetail__WEBPACK_IMPORTED_MODULE_18__["default"], {
    area: "Area #1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ExpansionPanel"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ExpansionPanelSummary"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, "Areas #2"))));
}

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
          lineNumber: 65,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
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
          lineNumber: 67,
          columnNumber: 17
        }
      }, "Updated Daily - BST/GMT"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        container: true,
        spacing: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 25
        }
      }, "Scotland Overview")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }
      }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Total number of confirmed cases in Scotland",
        query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_TOTAL_CONFIRMED_CASES_SCOTLAND"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }
      }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Latest daily number of confirmed cases in Scotland",
        query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_DAILY_CHANGE_CONFIRMED_CASES_SCOTLAND"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }
      }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Total number of tests in Scotland",
        query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_TOTAL_TESTS_SCOTLAND"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }
      }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Latest daily number of tests in Scotland",
        query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_DAILY_CHANGE_TESTS_SCOTLAND"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 25
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }
      }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Total number of deaths in Scotland",
        query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_TOTAL_DEATHS_SCOTLAND"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 25
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }
      }, __jsx(_components_singleKPICard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Latest daily number of deaths in Scotland",
        query: _utils_queries__WEBPACK_IMPORTED_MODULE_9__["QUERY_DAILY_CHANGE_DEATHS_SCOTLAND"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 25
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }
      }, __jsx(_components_countryCharts__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 25
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      }, __jsx(_ICUTrendCard__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "ICU",
        query: "2141",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 25
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }
      }, __jsx(_StaffAbsencesCard__WEBPACK_IMPORTED_MODULE_17__["default"], {
        title: "Staff Absences",
        query: "2141",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 25
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 25
        }
      }, "Scotland Regions")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }
      }, __jsx(_components_topAreasTable__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 25
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 25
        }
      }, "United Kingdom Overview")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }
      }, __jsx(_components_topCountriesTable__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 25
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }
      }, __jsx(_components_areasCharts__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 25
        }
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

/***/ "./pages/components/topAreasTable.tsx":
/*!********************************************!*\
  !*** ./pages/components/topAreasTable.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopAreasTable; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _AreaExpansionPanelDetail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AreaExpansionPanelDetail */ "./pages/components/AreaExpansionPanelDetail.tsx");







var _jsxFileName = "/Users/jamiechung/Development/COVID/scotland-covid-dashboard/pages/components/topAreasTable.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var query = "\nSELECT\n  Area,\n  AreaCode,\n  CAST(COALESCE(TotalCases, 0) AS Integer) AS TotalCases,\n  Date\nFROM\n  cases\nWHERE\n  Country = 'Scotland'\n  AND Date = (\n    SELECT\n      MAX(Date)\n    FROM\n      cases\n  )\nORDER BY\n  TotalCases DESC\n";

function createBaseWithDB(db) {
  return 'https://covid-19-uk-datasette-65tzkjlxkq-ew.a.run.app/' + db + '.json';
}

var baseURL = createBaseWithDB('covid-19-uk') + '?sql=' + encodeURIComponent(query);

var TopAreasTable = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TopAreasTable, _React$Component);

  var _super = _createSuper(TopAreasTable);

  function TopAreasTable() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopAreasTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      data: [],
      loading: true
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TopAreasTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(baseURL).then(function (response) {
        var _build_data = []; // hyrate array of JSON object with rows based on the columns

        lodash__WEBPACK_IMPORTED_MODULE_10__["map"](response.data.rows, function (r) {
          _build_data.push(lodash__WEBPACK_IMPORTED_MODULE_10__["mapKeys"](r, function (v, k) {
            return response.data.columns[k];
          }));
        });

        _this2.setState({
          data: _build_data
        });

        _this2.setState({
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.loading) {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["LinearProgress"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 20
          }
        });
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      }, this.state.data.map(function (row) {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ExpansionPanel"], {
          key: row.AreaCode,
          TransitionProps: {
            unmountOnExit: true
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ExpansionPanelSummary"], {
          expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a, {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 60
            }
          }),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
          style: {
            flexBasis: '80%'
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 29
          }
        }, row.Area), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
          style: {
            color: '#AAA'
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 29
          }
        }, "Confirmed Cases: ", numeral__WEBPACK_IMPORTED_MODULE_11___default()(row.TotalCases).format('0,0'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ExpansionPanelDetails"], {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }
        }, __jsx(_AreaExpansionPanelDetail__WEBPACK_IMPORTED_MODULE_13__["default"], {
          areaCode: row.AreaCode,
          area: row.Area,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 29
          }
        })));
      }));
    }
  }]);

  return TopAreasTable;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.c1195ceaaf10c8da55f6.hot-update.js.map