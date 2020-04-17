webpackHotUpdate("static/development/pages/index.js",{

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
//# sourceMappingURL=index.js.27733be48d09ab671f1b.hot-update.js.map