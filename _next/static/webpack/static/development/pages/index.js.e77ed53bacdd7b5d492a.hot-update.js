webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/queries.ts":
/*!**************************!*\
  !*** ./utils/queries.ts ***!
  \**************************/
/*! exports provided: QUERY_TOTAL_CONFIRMED_CASES_SCOTLAND, QUERY_DAILY_CHANGE_CONFIRMED_CASES_SCOTLAND, QUERY_TOTAL_TESTS_SCOTLAND, QUERY_DAILY_CHANGE_TESTS_SCOTLAND, QUERY_TOTAL_DEATHS_SCOTLAND, QUERY_DAILY_CHANGE_DEATHS_SCOTLAND, QUERY_TOTAL_CASES_BY_AREA, QUERY_DAILY_CHANGE_CASES_SCOTLAND */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_DAILY_CHANGE_CASES_SCOTLAND", function() { return QUERY_DAILY_CHANGE_CASES_SCOTLAND; });
var QUERY_TOTAL_CONFIRMED_CASES_SCOTLAND = "\n\nSELECT\n  Value\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'ConfirmedCases'\nORDER BY Date DESC LIMIT 1\n\n";
var QUERY_DAILY_CHANGE_CONFIRMED_CASES_SCOTLAND = "\nSELECT\n  Value - COALESCE(\n    LAG(Value) OVER (\n      PARTITION BY Indicator\n      ORDER BY\n        Date\n    ),\n    0\n  )\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'ConfirmedCases'\nORDER BY\n  Date DESC\nLIMIT 1\n";
var QUERY_TOTAL_TESTS_SCOTLAND = "\n\nSELECT\n  Value\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'Tests'\nORDER BY Date DESC LIMIT 1\n\n";
var QUERY_DAILY_CHANGE_TESTS_SCOTLAND = "\nSELECT\n  Value - COALESCE(\n    LAG(Value) OVER (\n      PARTITION BY Indicator\n      ORDER BY\n        Date\n    ),\n    0\n  )\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'Tests'\nORDER BY\n  Date DESC\nLIMIT 1\n";
var QUERY_TOTAL_DEATHS_SCOTLAND = "\n\nSELECT\n  Value\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'Deaths'\nORDER BY Date DESC LIMIT 1\n\n";
var QUERY_DAILY_CHANGE_DEATHS_SCOTLAND = "\nSELECT\n  Value - COALESCE(\n    LAG(Value) OVER (\n      PARTITION BY Indicator\n      ORDER BY\n        Date\n    ),\n    0\n  )\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'Deaths'\nORDER BY\n  Date DESC\nLIMIT 1\n";
var QUERY_TOTAL_CASES_BY_AREA = "\nSELECT\n  Area,\n  AreaCode,\n  CAST(COALESCE(TotalCases, 0) AS Integer) AS TotalCases,\n  Date\nFROM\n  cases\nWHERE\n  Country = 'Scotland'\n  AND (AreaCode = '##AREACODE##' OR Area = '##AREA##')\nORDER BY Date ASC\n";
var QUERY_DAILY_CHANGE_CASES_SCOTLAND = "\nwith _confirmed AS (\n  SELECT\n    Date,\n    Country,\n    Value AS ConfirmedCases\n  FROM\n    indicators\n  WHERE\n    Indicator = 'ConfirmedCases'\n),\n_tests AS (\n  SELECT\n    Date,\n    Country,\n    Value AS Tests\n  FROM\n    indicators\n  WHERE\n    Indicator = 'Tests'\n),\n_deaths AS (\n  SELECT\n    Date,\n    Country,\n    Value AS Deaths\n  FROM\n    indicators\n  WHERE\n    Indicator = 'Deaths'\n),\ncollapsed AS (\n  SELECT\n    _confirmed.Date,\n    _Confirmed.Country,\n    COALESCE(ConfirmedCases, 0) AS ConfirmedCases,\n    COALESCE(Tests, 0) AS Tests,\n    COALESCE(Deaths, 0) AS Deaths\n  FROM\n    _confirmed\n    LEFT JOIN _tests ON (\n      _confirmed.Country = _tests.Country\n      AND _confirmed.Date = _tests.Date\n    )\n    LEFT JOIN _deaths ON (\n      _confirmed.Country = _deaths.Country\n      AND _confirmed.Date = _deaths.Date\n    )\n),\nlatest AS (\n  SELECT\n    Date,\n    ConfirmedCases - COALESCE(\n      LAG(ConfirmedCases) OVER (\n        PARTITION BY Country\n        ORDER BY\n          Date\n      ),\n      0\n    ) AS DalyChangeConfirmedCases,\n    Tests - COALESCE(\n      LAG(Tests) OVER (\n        PARTITION BY Country\n        ORDER BY\n          Date\n      ),\n      0\n    ) AS DailyChangeTests,\n    Deaths - COALESCE(\n      LAG(Deaths) OVER (\n        PARTITION BY Country\n        ORDER BY\n          Date\n      ),\n      0\n    ) AS DailyChangeDeaths\n  FROM\n    collapsed\n  WHERE\n    Country IN ('Scotland')\n  ORDER BY\n    Date DESC\n  LIMIT\n    45\n)\nSELECT\n  *\nFROM\n  latest\nORDER BY\n  Date ASC\n";

/***/ })

})
//# sourceMappingURL=index.js.e77ed53bacdd7b5d492a.hot-update.js.map