(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1Npv":function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return A}));var a=e("1OyB"),i=e("vuIU"),r=e("JX7q"),o=e("Ji7U"),s=e("md7G"),c=e("foSv"),d=e("rePB"),l=e("Ji2X"),u=e("tRbT"),f=e("de8u"),p=e("ofer"),E=e("vDqi"),C=e.n(E),m=e("LvDl"),g=e("q1tI"),h=e.n(g),x=e("4XXU"),D=e("n4y3"),R=e("R+fU"),O=e("sv1E"),S=e("TXyo"),v=e.n(S),b=h.a.createElement;function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var A=function(n){Object(o.a)(E,n);var t,e=(t=E,function(){var n,e=Object(c.a)(t);if(y()){var a=Object(c.a)(this).constructor;n=Reflect.construct(e,arguments,a)}else n=e.apply(this,arguments);return Object(s.a)(this,n)});function E(n){var t;return Object(a.a)(this,E),t=e.call(this,n),Object(d.a)(Object(r.a)(t),"state",{ready:!1,data_total_cases:[],data_regional_hospitalizatons:[]}),t.state={ready:!1,data_total_cases:[],data_regional_hospitalizatons:[]},t}return Object(i.a)(E,[{key:"componentDidMount",value:function(){var n=this;C.a.all([C.a.get(O.a(R.e.replace("##AREA##",this.props.area).replace("##AREACODE##",this.props.areaCode))),C.a.get("https://raw.githubusercontent.com/watty62/Scot_covid19/master/data/processed/regional_hospitalisations.csv")]).then(C.a.spread((function(t,e){var a=[];m.map(t.data.rows,(function(n){a.push(m.mapKeys(n,(function(n,e){return t.data.columns[e]})))})),n.setState({data_total_cases:a}),v()({checkType:!0}).fromString(e.data).then((function(t){n.setState({data_regional_hospitalizatons:t})}))}))).then((function(){n.setState({ready:!0})}))}},{key:"render",value:function(){return this.state.ready?b(l.a,null,b(u.a,null,b(p.a,{variant:"subtitle2",style:{marginBottom:10}},"Total Cases"),b(x.h,{width:"100%",height:200},b(x.g,{data:this.state.data_total_cases},b(x.f,{type:"monotone",fill:D.c[0],dataKey:"TotalCases",name:"Total Cases"}),b(x.i,null),b(x.c,{strokeDasharray:"5 5"}),b(x.b,{dataKey:"Date",height:30,stroke:"#8884d8"}),b(x.k,null),b(x.j,{dataKey:"Date"}))),b(p.a,{variant:"subtitle2",style:{marginBottom:10,marginTop:25}},"Total Hospitalisations"),b(x.h,{width:"100%",height:200},b(x.g,{data:this.state.data_regional_hospitalizatons},b(x.f,{type:"monotone",fill:D.c[1],dataKey:this.props.area,name:"Regional Hospitalizations"}),b(x.i,null),b(x.c,{strokeDasharray:"5 5"}),b(x.b,{dataKey:"Date",height:30,stroke:"#8884d8"}),b(x.k,null),b(x.j,{dataKey:"Date"}))))):b(f.a,null)}}]),E}(h.a.Component)},Ji2X:function(n,t,e){"use strict";var a=e("wx14"),i=e("Ff2n"),r=e("rePB"),o=e("q1tI"),s=(e("17x9"),e("iuhU")),c=e("H2TA"),d=e("NqtD"),l=o.forwardRef((function(n,t){var e=n.classes,r=n.className,c=n.component,l=void 0===c?"div":c,u=n.disableGutters,f=void 0!==u&&u,p=n.fixed,E=void 0!==p&&p,C=n.maxWidth,m=void 0===C?"lg":C,g=Object(i.a)(n,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(l,Object(a.a)({className:Object(s.a)(e.root,r,E&&e.fixed,f&&e.disableGutters,!1!==m&&e["maxWidth".concat(Object(d.a)(String(m)))]),ref:t},g))}));t.a=Object(c.a)((function(n){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:n.spacing(2),paddingRight:n.spacing(2),display:"block"},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(n.breakpoints.values).reduce((function(t,e){var a=n.breakpoints.values[e];return 0!==a&&(t[n.breakpoints.up(e)]={maxWidth:a}),t}),{}),maxWidthXs:Object(r.a)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},n.breakpoints.up("sm"),{maxWidth:n.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},n.breakpoints.up("md"),{maxWidth:n.breakpoints.values.md}),maxWidthLg:Object(r.a)({},n.breakpoints.up("lg"),{maxWidth:n.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},n.breakpoints.up("xl"),{maxWidth:n.breakpoints.values.xl})}}),{name:"MuiContainer"})(l)},"R+fU":function(n,t,e){"use strict";e.d(t,"f",(function(){return a})),e.d(t,"b",(function(){return i})),e.d(t,"h",(function(){return r})),e.d(t,"d",(function(){return o})),e.d(t,"g",(function(){return s})),e.d(t,"c",(function(){return c})),e.d(t,"e",(function(){return d})),e.d(t,"a",(function(){return l}));var a="\n\nSELECT\n  Value\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'ConfirmedCases'\nORDER BY Date DESC LIMIT 1\n\n",i="\nSELECT\n  Value - COALESCE(\n    LAG(Value) OVER (\n      PARTITION BY Indicator\n      ORDER BY\n        Date\n    ),\n    0\n  )\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'ConfirmedCases'\nORDER BY\n  Date DESC\nLIMIT 1\n",r="\n\nSELECT\n  Value\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'Tests'\nORDER BY Date DESC LIMIT 1\n\n",o="\nSELECT\n  Value - COALESCE(\n    LAG(Value) OVER (\n      PARTITION BY Indicator\n      ORDER BY\n        Date\n    ),\n    0\n  )\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'Tests'\nORDER BY\n  Date DESC\nLIMIT 1\n",s="\n\nSELECT\n  Value\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'Deaths'\nORDER BY Date DESC LIMIT 1\n\n",c="\nSELECT\n  Value - COALESCE(\n    LAG(Value) OVER (\n      PARTITION BY Indicator\n      ORDER BY\n        Date\n    ),\n    0\n  )\nFROM\n  indicators\nWHERE\n  Country = 'Scotland'\n  AND Indicator = 'Deaths'\nORDER BY\n  Date DESC\nLIMIT 1\n",d="\nSELECT\n  Area,\n  AreaCode,\n  CAST(COALESCE(TotalCases, 0) AS Integer) AS TotalCases,\n  Date\nFROM\n  cases\nWHERE\n  Country = 'Scotland'\n  AND (AreaCode = '##AREACODE##' OR Area = '##AREA##')\nORDER BY Date ASC\n",l="\nwith _confirmed AS (\n  SELECT\n    Date,\n    Country,\n    Value AS ConfirmedCases\n  FROM\n    indicators\n  WHERE\n    Indicator = 'ConfirmedCases'\n),\n_tests AS (\n  SELECT\n    Date,\n    Country,\n    Value AS Tests\n  FROM\n    indicators\n  WHERE\n    Indicator = 'Tests'\n),\n_deaths AS (\n  SELECT\n    Date,\n    Country,\n    Value AS Deaths\n  FROM\n    indicators\n  WHERE\n    Indicator = 'Deaths'\n),\ncollapsed AS (\n  SELECT\n    _confirmed.Date,\n    _Confirmed.Country,\n    COALESCE(ConfirmedCases, 0) AS ConfirmedCases,\n    COALESCE(Tests, 0) AS Tests,\n    COALESCE(Deaths, 0) AS Deaths\n  FROM\n    _confirmed\n    LEFT JOIN _tests ON (\n      _confirmed.Country = _tests.Country\n      AND _confirmed.Date = _tests.Date\n    )\n    LEFT JOIN _deaths ON (\n      _confirmed.Country = _deaths.Country\n      AND _confirmed.Date = _deaths.Date\n    )\n)\nSELECT\n  Date,\n  ConfirmedCases - COALESCE(\n    LAG(ConfirmedCases) OVER (\n      PARTITION BY Country\n      ORDER BY\n        Date\n    ),\n    0\n  ) AS DalyChangeConfirmedCases,\n  Tests - COALESCE(\n    LAG(Tests) OVER (\n      PARTITION BY Country\n      ORDER BY\n        Date\n    ),\n    0\n  ) AS DailyChangeTests,\n  Deaths - COALESCE(\n    LAG(Deaths) OVER (\n      PARTITION BY Country\n      ORDER BY\n        Date\n    ),\n    0\n  ) AS DailyChangeDeaths\nFROM\n  collapsed\nWHERE\n  Country IN ('Scotland')\nORDER BY\n  Date ASC\n"},n4y3:function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"d",(function(){return i})),e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return o}));var a="#B6B0FF",i="#3049AD",r="#FF994E",o=["#01B8AA","#374649","#FD625E","#F2C80F","#5F6B6D","#8AD4EB","#FE9666","#A66999"]},sv1E:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));e("wd/R");function a(n){return"https://covid-19-uk-datasette-65tzkjlxkq-ew.a.run.app/"+"covid-19-uk"+".json?sql="+encodeURIComponent(n)}},tRbT:function(n,t,e){"use strict";var a=e("Ff2n"),i=e("wx14"),r=e("q1tI"),o=(e("17x9"),e("iuhU")),s=e("H2TA"),c=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function l(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=parseFloat(n);return"".concat(e/t).concat(String(n).replace(String(e),"")||"px")}var u=r.forwardRef((function(n,t){var e=n.alignContent,s=void 0===e?"stretch":e,c=n.alignItems,d=void 0===c?"stretch":c,l=n.classes,u=n.className,f=n.component,p=void 0===f?"div":f,E=n.container,C=void 0!==E&&E,m=n.direction,g=void 0===m?"row":m,h=n.item,x=void 0!==h&&h,D=n.justify,R=void 0===D?"flex-start":D,O=n.lg,S=void 0!==O&&O,v=n.md,b=void 0!==v&&v,y=n.sm,A=void 0!==y&&y,T=n.spacing,I=void 0===T?0:T,w=n.wrap,j=void 0===w?"wrap":w,L=n.xl,W=void 0!==L&&L,k=n.xs,_=void 0!==k&&k,B=n.zeroMinWidth,M=void 0!==B&&B,N=Object(a.a)(n,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(o.a)(l.root,u,C&&[l.container,0!==I&&l["spacing-xs-".concat(String(I))]],x&&l.item,M&&l.zeroMinWidth,"row"!==g&&l["direction-xs-".concat(String(g))],"wrap"!==j&&l["wrap-xs-".concat(String(j))],"stretch"!==d&&l["align-items-xs-".concat(String(d))],"stretch"!==s&&l["align-content-xs-".concat(String(s))],"flex-start"!==R&&l["justify-xs-".concat(String(R))],!1!==_&&l["grid-xs-".concat(String(_))],!1!==A&&l["grid-sm-".concat(String(A))],!1!==b&&l["grid-md-".concat(String(b))],!1!==S&&l["grid-lg-".concat(String(S))],!1!==W&&l["grid-xl-".concat(String(W))]);return r.createElement(p,Object(i.a)({className:F,ref:t},N))})),f=Object(s.a)((function(n){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(n,t){var e={};return c.forEach((function(a){var i=n.spacing(a);0!==i&&(e["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(l(i,2)),width:"calc(100% + ".concat(l(i),")"),"& > $item":{padding:l(i,2)}})})),e}(n,"xs"),{},n.breakpoints.keys.reduce((function(t,e){return function(n,t,e){var a={};d.forEach((function(n){var t="grid-".concat(e,"-").concat(n);if(!0!==n)if("auto"!==n){var i="".concat(Math.round(n/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===e?Object(i.a)(n,a):n[t.breakpoints.up(e)]=a}(t,n,e),t}),{}))}),{name:"MuiGrid"})(u);t.a=f}}]);