webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/countryCharts.tsx":
/*!********************************************!*\
  !*** ./pages/components/countryCharts.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryCharts; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _utils_chartcolors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/chartcolors */ "./utils/chartcolors.ts");







var _jsxFileName = "/Users/jamiechung/Development/COVID/scotland-covid-dashboard/pages/components/countryCharts.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var query = "\nwith _confirmed AS (\n    SELECT\n      Date,\n      Country,\n      Value AS ConfirmedCases\n    FROM\n      indicators\n    WHERE\n      Indicator = 'ConfirmedCases'\n  ),\n  _tests AS (\n    SELECT\n      Date,\n      Country,\n      Value AS Tests\n    FROM\n      indicators\n    WHERE\n      Indicator = 'Tests'\n  ),\n  _deaths AS (\n    SELECT\n      Date,\n      Country,\n      Value AS Deaths\n    FROM\n      indicators\n    WHERE\n      Indicator = 'Deaths'\n  ),\n  collapsed AS (\n    SELECT\n      _confirmed.Date,\n      _Confirmed.Country,\n      COALESCE(ConfirmedCases, 0) AS ConfirmedCases,\n      COALESCE(Tests, 0) AS Tests,\n      COALESCE(Deaths, 0) AS Deaths\n    FROM\n      _confirmed\n      LEFT JOIN _tests ON (\n        _confirmed.Country = _tests.Country\n        AND _confirmed.Date = _tests.Date\n      )\n      LEFT JOIN _deaths ON (\n        _confirmed.Country = _deaths.Country\n        AND _confirmed.Date = _deaths.Date\n      )\n  )\n  SELECT\n    *\n  FROM\n    collapsed\n  WHERE\n    Country IN ('Scotland')\n  ORDER BY\n    Date ASC\n";

function formatDateLabel(label) {
  // return new Date(label).getMonth () + '-' + new Date(label).getDay();
  return moment__WEBPACK_IMPORTED_MODULE_10___default()(label).format('MMM-DD');
}

function createBaseWithDB(db) {
  return 'https://covid-19-uk-datasette-65tzkjlxkq-ew.a.run.app/' + db + '.json';
}

var baseURL = createBaseWithDB('covid-19-uk') + '?sql=' + encodeURIComponent(query);

function singleCountryChart(title, data) {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
    subheader: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["ResponsiveContainer"], {
    width: "100%",
    height: 350,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["LineChart"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
    dataKey: "ConfirmedCases",
    data: data,
    stroke: _utils_chartcolors__WEBPACK_IMPORTED_MODULE_13__["COLOR_CONFIRMED_CASES_HEX"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
    dataKey: "Tests",
    data: data,
    stroke: _utils_chartcolors__WEBPACK_IMPORTED_MODULE_13__["COLOR_TESTS_HEX"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
    dataKey: "Deaths",
    data: data,
    stroke: _utils_chartcolors__WEBPACK_IMPORTED_MODULE_13__["COLOR_DEATHS_HEX"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Legend"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["CartesianGrid"], {
    strokeDasharray: "5 5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["YAxis"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Brush"], {
    dataKey: "Date",
    height: 30,
    stroke: "#8884d8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["XAxis"], {
    dataKey: "Date",
    allowDuplicatedCategory: false,
    tickFormatter: formatDateLabel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  })))));
}

var CountryCharts = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CountryCharts, _React$Component);

  var _super = _createSuper(CountryCharts);

  function CountryCharts() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CountryCharts);

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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CountryCharts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(baseURL).then(function (response) {
        var _build_data = []; // hyrate array of JSON object with rows based on the columns

        lodash__WEBPACK_IMPORTED_MODULE_9__["map"](response.data.rows, function (r) {
          _build_data.push(lodash__WEBPACK_IMPORTED_MODULE_9__["mapKeys"](r, function (v, k) {
            return response.data.columns[k];
          }));
        });

        _this2.setState({
          data: lodash__WEBPACK_IMPORTED_MODULE_9__["groupBy"](_build_data, 'Country'),
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["LinearProgress"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 14
          }
        });
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 7
        }
      }, singleCountryChart('Scotland Confirmed Cases, Tests and Deaths', this.state.data['Scotland']));
    }
  }]);

  return CountryCharts;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.7b4da9bba042160cc798.hot-update.js.map