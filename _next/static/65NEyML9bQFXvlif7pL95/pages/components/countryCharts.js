(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"30+C":function(t,e,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),s=(a("17x9"),a("iuhU")),c=a("kKAo"),i=a("H2TA"),d=r.forwardRef((function(t,e){var a=t.classes,i=t.className,d=t.raised,u=void 0!==d&&d,l=Object(o.a)(t,["classes","className","raised"]);return r.createElement(c.a,Object(n.a)({className:Object(s.a)(a.root,i),elevation:u?8:1,ref:e},l))}));e.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(d)},"3QqY":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/countryCharts",function(){return a("DBhK")}])},"50B7":function(t,e,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),s=(a("17x9"),a("iuhU")),c=a("H2TA"),i=a("ofer"),d=r.forwardRef((function(t,e){var a=t.action,c=t.avatar,d=t.classes,u=t.className,l=t.component,f=void 0===l?"div":l,p=t.disableTypography,m=void 0!==p&&p,h=t.subheader,v=t.subheaderTypographyProps,y=t.title,b=t.titleTypographyProps,C=Object(o.a)(t,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=y;null==E||E.type===i.a||m||(E=r.createElement(i.a,Object(n.a)({variant:c?"body2":"h5",className:d.title,component:"span",display:"block"},b),E));var O=h;return null==O||O.type===i.a||m||(O=r.createElement(i.a,Object(n.a)({variant:c?"body2":"body1",className:d.subheader,color:"textSecondary",component:"span",display:"block"},v),O)),r.createElement(f,Object(n.a)({className:Object(s.a)(d.root,u),ref:e},C),c&&r.createElement("div",{className:d.avatar},c),r.createElement("div",{className:d.content},E,O),a&&r.createElement("div",{className:d.action},a))}));e.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(d)},DBhK:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return S}));var n=a("1OyB"),o=a("vuIU"),r=a("JX7q"),s=a("Ji7U"),c=a("md7G"),i=a("foSv"),d=a("rePB"),u=a("30+C"),l=a("50B7"),f=a("oa/T"),p=a("de8u"),m=a("vDqi"),h=a.n(m),v=a("LvDl"),y=a("wd/R"),b=a.n(y),C=a("q1tI"),E=a.n(C),O=a("4XXU"),D=a("n4y3"),j=E.a.createElement;function g(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function w(t){return b()(t).format("MMM-DD")}var A="https://covid-19-uk-datasette-65tzkjlxkq-ew.a.run.app/"+"covid-19-uk"+".json?sql="+encodeURIComponent("\nwith _confirmed AS (\n    SELECT\n      Date,\n      Country,\n      Value AS ConfirmedCases\n    FROM\n      indicators\n    WHERE\n      Indicator = 'ConfirmedCases'\n  ),\n  _tests AS (\n    SELECT\n      Date,\n      Country,\n      Value AS Tests\n    FROM\n      indicators\n    WHERE\n      Indicator = 'Tests'\n  ),\n  _deaths AS (\n    SELECT\n      Date,\n      Country,\n      Value AS Deaths\n    FROM\n      indicators\n    WHERE\n      Indicator = 'Deaths'\n  ),\n  collapsed AS (\n    SELECT\n      _confirmed.Date,\n      _Confirmed.Country,\n      COALESCE(ConfirmedCases, 0) AS ConfirmedCases,\n      COALESCE(Tests, 0) AS Tests,\n      COALESCE(Deaths, 0) AS Deaths\n    FROM\n      _confirmed\n      LEFT JOIN _tests ON (\n        _confirmed.Country = _tests.Country\n        AND _confirmed.Date = _tests.Date\n      )\n      LEFT JOIN _deaths ON (\n        _confirmed.Country = _deaths.Country\n        AND _confirmed.Date = _deaths.Date\n      )\n  )\n  SELECT\n    *\n  FROM\n    collapsed\n  WHERE\n    Country IN ('Scotland')\n  ORDER BY\n    Date ASC\n");var S=function(t){Object(s.a)(m,t);var e,a=(e=m,function(){var t,a=Object(i.a)(e);if(g()){var n=Object(i.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)});function m(){var t;Object(n.a)(this,m);for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return t=a.call.apply(a,[this].concat(o)),Object(d.a)(Object(r.a)(t),"state",{data:[],loading:!0}),t}return Object(o.a)(m,[{key:"componentDidMount",value:function(){var t=this;h.a.get(A).then((function(e){var a=[];v.map(e.data.rows,(function(t){a.push(v.mapKeys(t,(function(t,a){return e.data.columns[a]})))})),t.setState({data:v.groupBy(a,"Country"),loading:!1})}))}},{key:"render",value:function(){return this.state.loading?j(p.a,null):j("div",null,(t="Scotland Confirmed Cases, Tests and Deaths",e=this.state.data.Scotland,j(u.a,null,j(l.a,{subheader:t}),j(f.a,null,j(O.h,{width:"100%",height:350},j(O.g,null,j(O.f,{dataKey:"ConfirmedCases",data:e,stroke:D.a}),j(O.f,{dataKey:"Tests",data:e,stroke:D.d}),j(O.f,{dataKey:"Deaths",data:e,stroke:D.b}),j(O.e,null),j(O.i,null),j(O.c,{strokeDasharray:"5 5"}),j(O.k,null),j(O.b,{dataKey:"Date",height:30,stroke:"#8884d8"}),j(O.j,{dataKey:"Date",allowDuplicatedCategory:!1,tickFormatter:w})))))));var t,e}}]),m}(E.a.Component)},kKAo:function(t,e,a){"use strict";var n=a("Ff2n"),o=a("wx14"),r=a("q1tI"),s=(a("17x9"),a("iuhU")),c=a("H2TA"),i=r.forwardRef((function(t,e){var a=t.classes,c=t.className,i=t.component,d=void 0===i?"div":i,u=t.square,l=void 0!==u&&u,f=t.elevation,p=void 0===f?1:f,m=t.variant,h=void 0===m?"elevation":m,v=Object(n.a)(t,["classes","className","component","square","elevation","variant"]);return r.createElement(d,Object(o.a)({className:Object(s.a)(a.root,c,"outlined"===h?a.outlined:a["elevation".concat(p)],!l&&a.rounded),ref:e},v))}));e.a=Object(c.a)((function(t){var e={};return t.shadows.forEach((function(t,a){e["elevation".concat(a)]={boxShadow:t}})),Object(o.a)({root:{backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},rounded:{borderRadius:t.shape.borderRadius},outlined:{border:"1px solid ".concat(t.palette.divider)}},e)}),{name:"MuiPaper"})(i)},n4y3:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"d",(function(){return o})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return s}));var n="#B6B0FF",o="#3049AD",r="#FF994E",s=["#01B8AA","#374649","#FD625E","#F2C80F","#5F6B6D","#8AD4EB","#FE9666","#A66999"]},"oa/T":function(t,e,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),s=(a("17x9"),a("iuhU")),c=a("H2TA"),i=r.forwardRef((function(t,e){var a=t.classes,c=t.className,i=t.component,d=void 0===i?"div":i,u=Object(o.a)(t,["classes","className","component"]);return r.createElement(d,Object(n.a)({className:Object(s.a)(a.root,c),ref:e},u))}));e.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)}},[["3QqY",0,1,5,2,3,4]]]);