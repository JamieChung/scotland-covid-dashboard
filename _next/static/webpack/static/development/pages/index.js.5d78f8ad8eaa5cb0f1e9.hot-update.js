webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/AreaExpansionPanelDetail.tsx":
/*!*******************************************************!*\
  !*** ./pages/components/AreaExpansionPanelDetail.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AreaExpansionPanelDetail; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _utils_chartcolors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/chartcolors */ "./utils/chartcolors.ts");
/* harmony import */ var _utils_queries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/queries */ "./utils/queries.ts");
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/utilities */ "./utils/utilities.ts");
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! csvtojson */ "./node_modules/csvtojson/browser/browser.js");
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(csvtojson__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "/Users/jamiechung/Development/COVID/scotland-covid-dashboard/pages/components/AreaExpansionPanelDetail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var AreaExpansionPanelDetail = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AreaExpansionPanelDetail, _React$Component);

  var _super = _createSuper(AreaExpansionPanelDetail);

  function AreaExpansionPanelDetail(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AreaExpansionPanelDetail);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      ready: false,
      data_total_cases: [],
      data_regional_hospitalizatons: []
    });

    _this.state = {
      ready: false,
      data_total_cases: [],
      data_regional_hospitalizatons: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AreaExpansionPanelDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.all([axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_utils_utilities__WEBPACK_IMPORTED_MODULE_14__["createbaseURLWithQuery"](_utils_queries__WEBPACK_IMPORTED_MODULE_13__["QUERY_TOTAL_CASES_BY_AREA"].replace('##AREA##', this.props.area).replace('##AREACODE##', this.props.areaCode))), axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://raw.githubusercontent.com/watty62/Scot_covid19/master/data/processed/regional_hospitalisations.csv')]).then(axios__WEBPACK_IMPORTED_MODULE_8___default.a.spread(function (total_cases, regional_hospitalizations) {
        // console.log(total_cases);
        var _build_data = []; // hyrate array of JSON object with rows based on the columns

        lodash__WEBPACK_IMPORTED_MODULE_9__["map"](total_cases.data.rows, function (r) {
          _build_data.push(lodash__WEBPACK_IMPORTED_MODULE_9__["mapKeys"](r, function (v, k) {
            return total_cases.data.columns[k];
          }));
        });

        _this2.setState({
          data_total_cases: _build_data
        });

        csvtojson__WEBPACK_IMPORTED_MODULE_15___default()({
          checkType: true
        }).fromString(regional_hospitalizations.data).then(function (json) {
          console.log(json);
        });
      })).then(function () {
        _this2.setState({
          ready: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.ready ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["ResponsiveContainer"], {
        width: "100%",
        height: 500,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["LineChart"], {
        data: this.state.data_total_cases,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["Line"], {
        type: "monotone",
        fill: _utils_chartcolors__WEBPACK_IMPORTED_MODULE_12__["COLOR_PBI_DEFAULT"][0],
        dataKey: "TotalCases",
        name: "Total Cases",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 29
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["Legend"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 29
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 29
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["CartesianGrid"], {
        strokeDasharray: "5 5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 29
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["Brush"], {
        dataKey: "Date",
        height: 30,
        stroke: "#8884d8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 29
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["YAxis"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 29
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["XAxis"], {
        dataKey: "Date" // allowDuplicatedCategory={false}
        // tickFormatter={utilities.formatDateLabel}
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 29
        }
      }))))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["LinearProgress"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 28
        }
      });
    }
  }]);

  return AreaExpansionPanelDetail;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.5d78f8ad8eaa5cb0f1e9.hot-update.js.map