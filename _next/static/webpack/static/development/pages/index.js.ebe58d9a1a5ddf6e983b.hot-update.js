webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/queries.ts":
/*!**************************!*\
  !*** ./utils/queries.ts ***!
  \**************************/
/*! exports provided: QUERY_TOTAL_CONFIRMED_CASES_SCOTLAND, QUERY_DAILY_CHANGE_CONFIRMED_CASES_SCOTLAND, QUERY_TOTAL_TESTS_SCOTLAND, QUERY_DAILY_CHANGE_TESTS_SCOTLAND, QUERY_TOTAL_DEATHS_SCOTLAND, QUERY_DAILY_CHANGE_DEATHS_SCOTLAND, QUERY_TOTAL_CASES_BY_AREA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_TOTAL_CONFIRMED_CASES_SCOTLAND", function() { return QUERY_TOTAL_CONFIRMED_CASES_SCOTLAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_DAILY_CHANGE_CONFIRMED_CASES_SCOTLAND", function() { return QUERY_DAILY_CHANGE_CONFIRMED_CASES_SCOTLAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_TOTAL_TESTS_SCOTLAND", function() { return QUERY_TOTAL_TESTS_SCOTLAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_DAILY_CHANGE_TESTS_SCOTLAND", function() { return QUERY_DAILY_CHANGE_TESTS_SCOTLAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_TOTAL_DEATHS_SCOTLAND", function() { return QUERY_TOTAL_DEATHS_SCOTLAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_DAILY_CHANGE_DEATHS_SCOTLAND", function() { return QUERY_DAILY_CHANGE_DEATHS_SCOTLAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_TOTAL_CASES_BY_AREA", function() { return QUERY_TOTAL_CASES_BY_AREA; });
var QUERY_TOTAL_CONFIRMED_CASES_SCOTLAND = "\n\nSELECT\n  Value\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'ConfirmedCases'\nORDER BY Date DESC LIMIT 1\n\n";
var QUERY_DAILY_CHANGE_CONFIRMED_CASES_SCOTLAND = "\nSELECT\n  Value - COALESCE(\n    LAG(Value) OVER (\n      PARTITION BY Indicator\n      ORDER BY\n        Date\n    ),\n    0\n  )\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'ConfirmedCases'\nORDER BY\n  Date DESC\nLIMIT 1\n";
var QUERY_TOTAL_TESTS_SCOTLAND = "\n\nSELECT\n  Value\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'Tests'\nORDER BY Date DESC LIMIT 1\n\n";
var QUERY_DAILY_CHANGE_TESTS_SCOTLAND = "\nSELECT\n  Value - COALESCE(\n    LAG(Value) OVER (\n      PARTITION BY Indicator\n      ORDER BY\n        Date\n    ),\n    0\n  )\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'Tests'\nORDER BY\n  Date DESC\nLIMIT 1\n";
var QUERY_TOTAL_DEATHS_SCOTLAND = "\n\nSELECT\n  Value\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'Deaths'\nORDER BY Date DESC LIMIT 1\n\n";
var QUERY_DAILY_CHANGE_DEATHS_SCOTLAND = "\nSELECT\n  Value - COALESCE(\n    LAG(Value) OVER (\n      PARTITION BY Indicator\n      ORDER BY\n        Date\n    ),\n    0\n  )\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'Deaths'\nORDER BY\n  Date DESC\nLIMIT 1\n";
var QUERY_TOTAL_CASES_BY_AREA = "\nSELECT\n  Area,\n  AreaCode,\n  CAST(COALESCE(TotalCases, 0) AS Integer) AS TotalCases,\n  Date\nFROM\n  cases\nWHERE\n  Country = 'Scotland'\n  AND AreaCode = ''\nORDER BY Date ASC\n";

/***/ })

})
//# sourceMappingURL=index.js.ebe58d9a1a5ddf6e983b.hot-update.js.map