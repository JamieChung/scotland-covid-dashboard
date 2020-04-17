webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/topCountriesTable.tsx":
/*!************************************************!*\
  !*** ./pages/components/topCountriesTable.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopCountriesTable; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Users/jamiechung/Development/COVID/scotland-covid-dashboard/pages/components/topCountriesTable.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var query = "\nwith _confirmed AS (\n    SELECT\n      Date,\n      Country,\n      Value AS ConfirmedCases\n    FROM\n      indicators\n    WHERE\n      Indicator = 'ConfirmedCases'\n  ),\n  _tests AS (\n    SELECT\n      Date,\n      Country,\n      Value AS Tests\n    FROM\n      indicators\n    WHERE\n      Indicator = 'Tests'\n  ),\n  _deaths AS (\n    SELECT\n      Date,\n      Country,\n      Value AS Deaths\n    FROM\n      indicators\n    WHERE\n      Indicator = 'Deaths'\n  ),\n  collapsed AS (\n    SELECT\n      _confirmed.Date,\n      _Confirmed.Country,\n      COALESCE(ConfirmedCases, 0) AS ConfirmedCases,\n      COALESCE(Tests, 0) AS Tests,\n      COALESCE(Deaths, 0) AS Deaths\n    FROM\n      _confirmed\n      LEFT JOIN _tests ON (\n        _confirmed.Country = _tests.Country\n        AND _confirmed.Date = _tests.Date\n      )\n      LEFT JOIN _deaths ON (\n        _confirmed.Country = _deaths.Country\n        AND _confirmed.Date = _deaths.Date\n      )\n    WHERE\n      _confirmed.Date = (\n        SELECT\n          MAX(Date)\n        FROM\n          indicators\n      )\n  )\n  SELECT\n    *\n  FROM\n    collapsed\n  --WHERE\n    --Country NOT IN ('UK')\n  ORDER BY\n    ConfirmedCases DESC\n";

function createBaseWithDB(db) {
  return 'https://covid-19-uk-datasette-65tzkjlxkq-ew.a.run.app/' + db + '.json';
}

var baseURL = createBaseWithDB('covid-19-uk') + '?sql=' + encodeURIComponent(query);

function mapCountryToEmojiFlag(country) {
  var flag = '🇬🇧';

  switch (country) {
    case 'Scotland':
      flag = '🏴󠁧󠁢󠁳󠁣󠁴󠁿';
      break;

    case 'Wales':
      flag = '🏴󠁧󠁢󠁷󠁬󠁳󠁿';
      break;

    case 'England':
      flag = '🏴󠁧󠁢󠁥󠁮󠁧󠁿';
      break;
  }

  return flag ? flag : '🇬🇧';
}

var TopCountriesTable = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TopCountriesTable, _React$Component);

  var _super = _createSuper(TopCountriesTable);

  function TopCountriesTable() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopCountriesTable);

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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TopCountriesTable, [{
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
        return __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 14
          }
        });
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableContainer"], {
        component: _material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Table"], {
        size: "small",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableHead"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableRow"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }
      }, "Country"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }
      }, "Confirmed Cases"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 17
        }
      }, "Tests"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 17
        }
      }, "Deaths"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }
      }, this.state.data.map(function (row) {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableRow"], {
          key: row.Date + row.Country,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 43
          }
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 17
          }
        }, mapCountryToEmojiFlag(row.Country), " ", row.Country), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 17
          }
        }, numeral__WEBPACK_IMPORTED_MODULE_11___default()(row.ConfirmedCases).format('0,0')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 17
          }
        }, numeral__WEBPACK_IMPORTED_MODULE_11___default()(row.Tests).format('0,0')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 17
          }
        }, numeral__WEBPACK_IMPORTED_MODULE_11___default()(row.Deaths).format('0,0')));
      })))));
    }
  }]);

  return TopCountriesTable;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.d29b0f4a3e58dae6c717.hot-update.js.map