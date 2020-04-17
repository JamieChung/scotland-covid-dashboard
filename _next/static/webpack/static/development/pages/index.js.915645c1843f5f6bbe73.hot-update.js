webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/app */ "./pages/components/app.tsx");





var _jsxFileName = "/Users/jamiechung/Development/COVID/scotland-covid-dashboard/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var HomePage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HomePage, _React$Component);

  var _super = _createSuper(HomePage);

  function HomePage() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      react_ga__WEBPACK_IMPORTED_MODULE_10__["default"].initialize('UA-163866086-1');
      react_ga__WEBPACK_IMPORTED_MODULE_10__["default"].pageview(window.location.pathname + window.location.search);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }
      }, "Scotland COVID Dashboard"), __jsx("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }
      }), __jsx("meta", {
        name: "description",
        content: "Scotland COVID Dashboard tracking daily COVID-19 cases.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
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
          lineNumber: 25,
          columnNumber: 21
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }
      }, "Updated Daily - BST/GMT"))), __jsx(_components_app__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }
      }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          marginTop: 50,
          marginBottom: 50
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
        variant: "middle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "body1",
        style: {
          textAlign: 'center',
          marginTop: 25
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }
      }, "Made with \u2764\uFE0F by "), __jsx(react_ga__WEBPACK_IMPORTED_MODULE_10__["default"].OutboundLink, {
        style: {
          color: '#0366d6'
        },
        eventLabel: "outbound-twitter.com/jamiechung",
        target: "_blank",
        to: "https://twitter.com/jamiechung",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }
      }, "Jamie Chung"), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }
      }, " in Edinburgh, Scotland "), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }
      }), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }
      }, " Data provided by "), __jsx(react_ga__WEBPACK_IMPORTED_MODULE_10__["default"].OutboundLink, {
        style: {
          color: '#0366d6'
        },
        eventLabel: "outbound-github.com/tomwhite/covid-19-uk-data",
        target: "_blank",
        to: "https://github.com/tomwhite/covid-19-uk-data",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }
      }, "Tom White"), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }
      }, " - "), __jsx(react_ga__WEBPACK_IMPORTED_MODULE_10__["default"].OutboundLink, {
        style: {
          color: '#0366d6'
        },
        eventLabel: "outbound-github.com/watty62/Scot_covid19",
        target: "_blank",
        to: "https://github.com/watty62/Scot_covid19",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }
      }, "Ian Watty"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }
      }), __jsx(react_ga__WEBPACK_IMPORTED_MODULE_10__["default"].OutboundLink, {
        style: {
          color: '#0366d6'
        },
        eventLabel: "outbound-github.com/jamiechung/scotland-covid-dashboard",
        target: "_blank",
        to: "https://github.com/JamieChung/scotland-covid-dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }
      }, "Contribute on GitHub"))));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.915645c1843f5f6bbe73.hot-update.js.map