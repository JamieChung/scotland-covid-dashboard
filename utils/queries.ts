export const QUERY_TOTAL_CONFIRMED_CASES_SCOTLAND = `

SELECT
  Value
FROM
  indicators
WHERE
  Country = 'Scotland'
  AND Indicator = 'ConfirmedCases'
ORDER BY Date DESC LIMIT 1

`;

export const QUERY_DAILY_CHANGE_CONFIRMED_CASES_SCOTLAND = `
SELECT
  Value - COALESCE(
    LAG(Value) OVER (
      PARTITION BY Indicator
      ORDER BY
        Date
    ),
    0
  )
FROM
  indicators
WHERE
  Country = 'Scotland'
  AND Indicator = 'ConfirmedCases'
ORDER BY
  Date DESC
LIMIT 1
`;


export const QUERY_TOTAL_TESTS_SCOTLAND = `

SELECT
  Value
FROM
  indicators
WHERE
  Country = 'Scotland'
  AND Indicator = 'Tests'
ORDER BY Date DESC LIMIT 1

`;

export const QUERY_DAILY_CHANGE_TESTS_SCOTLAND = `
SELECT
  Value - COALESCE(
    LAG(Value) OVER (
      PARTITION BY Indicator
      ORDER BY
        Date
    ),
    0
  )
FROM
  indicators
WHERE
  Country = 'Scotland'
  AND Indicator = 'Tests'
ORDER BY
  Date DESC
LIMIT 1
`;


export const QUERY_TOTAL_DEATHS_SCOTLAND = `

SELECT
  Value
FROM
  indicators
WHERE
  Country = 'Scotland'
  AND Indicator = 'Deaths'
ORDER BY Date DESC LIMIT 1

`;

export const QUERY_DAILY_CHANGE_DEATHS_SCOTLAND = `
SELECT
  Value - COALESCE(
    LAG(Value) OVER (
      PARTITION BY Indicator
      ORDER BY
        Date
    ),
    0
  )
FROM
  indicators
WHERE
  Country = 'Scotland'
  AND Indicator = 'Deaths'
ORDER BY
  Date DESC
LIMIT 1
`;


export const QUERY_TOTAL_CASES_BY_AREA = `
SELECT
  Area,
  AreaCode,
  CAST(COALESCE(TotalCases, 0) AS Integer) AS TotalCases,
  Date
FROM
  cases
WHERE
  Country = 'Scotland'
  AND (AreaCode = '##AREACODE##' OR Area = '##AREA##')
ORDER BY Date ASC
`;