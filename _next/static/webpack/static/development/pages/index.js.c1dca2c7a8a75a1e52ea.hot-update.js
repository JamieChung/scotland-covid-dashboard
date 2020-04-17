webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/StaffAbsencesCard.tsx":
/*!************************************************!*\
  !*** ./pages/components/StaffAbsencesCard.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StaffAbsencesCard; });
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
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! csvtojson */ "./node_modules/csvtojson/browser/browser.js");
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(csvtojson__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _utils_chartcolors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/chartcolors */ "./utils/chartcolors.ts");







var _jsxFileName = "/Users/jamiechung/Development/COVID/scotland-covid-dashboard/pages/components/StaffAbsencesCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var StaffAbsencesCard = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(StaffAbsencesCard, _React$Component);

  var _super = _createSuper(StaffAbsencesCard);

  function StaffAbsencesCard() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StaffAbsencesCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      value: 0,
      ready: false
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StaffAbsencesCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // axios.get(utilities.createbaseURLWithQuery(this.props.query))
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://raw.githubusercontent.com/watty62/Scot_covid19/master/data/processed/staff_absences.csv').then(function (response) {
        csvtojson__WEBPACK_IMPORTED_MODULE_9___default()({
          headers: ['date', 'nurses_midwives', 'medical_dental', 'other', 'all']
        }).fromString(response.data).then(function (json) {
          _this2.setState({
            value: json,
            ready: true
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
        subheader: this.props.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      }), this.state.ready ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardContent"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["ResponsiveContainer"], {
        width: "100%",
        height: 500,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["ComposedChart"], {
        data: this.state.value,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 29
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["Bar"], {
        barSize: 20,
        fill: _utils_chartcolors__WEBPACK_IMPORTED_MODULE_12__["COLOR_PBI_DEFAULT"][0],
        dataKey: "nurses_midwives",
        name: "Nurses and Midwives",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 33
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["Bar"], {
        barSize: 20,
        fill: _utils_chartcolors__WEBPACK_IMPORTED_MODULE_12__["COLOR_PBI_DEFAULT"][1],
        dataKey: "medical_dental",
        name: "Medical and Dental",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 33
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["Bar"], {
        barSize: 20,
        fill: _utils_chartcolors__WEBPACK_IMPORTED_MODULE_12__["COLOR_PBI_DEFAULT"][2],
        dataKey: "other",
        name: "Other",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 33
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["Legend"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 33
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 33
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["YAxis"], {
        label: {
          value: 'Staff Absences',
          angle: -90,
          position: 'insideLeft'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 33
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_11__["XAxis"], {
        dataKey: "date",
        allowDuplicatedCategory: false // tickFormatter={utilities.formatDateLabel}
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 33
        }
      })))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["LinearProgress"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }
      }));
    }
  }]);

  return StaffAbsencesCard;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.c1dca2c7a8a75a1e52ea.hot-update.js.map