(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{DBhK:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));var a=n("1OyB"),r=n("vuIU"),c=n("JX7q"),o=n("Ji7U"),i=n("md7G"),u=n("foSv"),s=n("rePB"),l=n("30+C"),d=n("50B7"),f=n("oa/T"),h=n("de8u"),y=n("vDqi"),v=n.n(y),m=n("LvDl"),p=n("wd/R"),b=n.n(p),O=n("q1tI"),S=n.n(O),C=n("4XXU"),D=n("n4y3"),j=S.a.createElement;function R(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function g(t){return b()(t).format("MMM-DD")}var E="https://covid-19-uk-datasette-65tzkjlxkq-ew.a.run.app/"+"covid-19-uk"+".json?sql="+encodeURIComponent("\nwith _confirmed AS (\n    SELECT\n      Date,\n      Country,\n      Value AS ConfirmedCases\n    FROM\n      indicators\n    WHERE\n      Indicator = 'ConfirmedCases'\n  ),\n  _tests AS (\n    SELECT\n      Date,\n      Country,\n      Value AS Tests\n    FROM\n      indicators\n    WHERE\n      Indicator = 'Tests'\n  ),\n  _deaths AS (\n    SELECT\n      Date,\n      Country,\n      Value AS Deaths\n    FROM\n      indicators\n    WHERE\n      Indicator = 'Deaths'\n  ),\n  collapsed AS (\n    SELECT\n      _confirmed.Date,\n      _Confirmed.Country,\n      COALESCE(ConfirmedCases, 0) AS ConfirmedCases,\n      COALESCE(Tests, 0) AS Tests,\n      COALESCE(Deaths, 0) AS Deaths\n    FROM\n      _confirmed\n      LEFT JOIN _tests ON (\n        _confirmed.Country = _tests.Country\n        AND _confirmed.Date = _tests.Date\n      )\n      LEFT JOIN _deaths ON (\n        _confirmed.Country = _deaths.Country\n        AND _confirmed.Date = _deaths.Date\n      )\n  )\n  SELECT\n    *\n  FROM\n    collapsed\n  WHERE\n    Country IN ('Scotland')\n  ORDER BY\n    Date ASC\n");var k=function(t){Object(o.a)(y,t);var e,n=(e=y,function(){var t,n=Object(u.a)(e);if(R()){var a=Object(u.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(i.a)(this,t)});function y(){var t;Object(a.a)(this,y);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t=n.call.apply(n,[this].concat(r)),Object(s.a)(Object(c.a)(t),"state",{data:[],loading:!0}),t}return Object(r.a)(y,[{key:"componentDidMount",value:function(){var t=this;v.a.get(E).then((function(e){var n=[];m.map(e.data.rows,(function(t){n.push(m.mapKeys(t,(function(t,n){return e.data.columns[n]})))})),t.setState({data:m.groupBy(n,"Country"),loading:!1})}))}},{key:"render",value:function(){return this.state.loading?j(h.a,null):j("div",null,(t="Scotland Confirmed Cases, Tests and Deaths",e=this.state.data.Scotland,j(l.a,null,j(d.a,{subheader:t}),j(f.a,null,j(C.h,{width:"100%",height:350},j(C.g,null,j(C.f,{dataKey:"ConfirmedCases",data:e,stroke:D.a}),j(C.f,{dataKey:"Tests",data:e,stroke:D.d}),j(C.f,{dataKey:"Deaths",data:e,stroke:D.b}),j(C.e,null),j(C.i,null),j(C.c,{strokeDasharray:"5 5"}),j(C.k,null),j(C.b,{dataKey:"Date",height:30,stroke:"#8884d8"}),j(C.j,{dataKey:"Date",allowDuplicatedCategory:!1,tickFormatter:g})))))));var t,e}}]),y}(S.a.Component)},H6dW:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j}));var a=n("1OyB"),r=n("vuIU"),c=n("Ji7U"),o=n("md7G"),i=n("foSv"),u=n("tRbT"),s=n("Ji2X"),l=n("ofer"),d=n("q1tI"),f=n.n(d),h=n("R+fU"),y=n("WJZx"),v=n("DBhK"),m=n("NGTN"),p=n("bLCj"),b=n("+HKp"),O=n("yveZ"),S=n("OzJE"),C=f.a.createElement;function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var j=function(t){Object(c.a)(d,t);var e,n=(e=d,function(){var t,n=Object(i.a)(e);if(D()){var a=Object(i.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(o.a)(this,t)});function d(){return Object(a.a)(this,d),n.apply(this,arguments)}return Object(r.a)(d,[{key:"render",value:function(){return C(s.a,null,C(u.a,{container:!0,spacing:3},C(u.a,{item:!0,xs:12},C(l.a,{variant:"h5"},"Scotland Overview")),C(u.a,{item:!0,xs:12,md:6},C(m.default,{title:"Total number of confirmed cases in Scotland",query:h.e})),C(u.a,{item:!0,xs:12,md:6},C(m.default,{title:"Latest daily number of confirmed cases in Scotland",query:h.a})),C(u.a,{item:!0,xs:12,md:6},C(m.default,{title:"Total number of tests in Scotland",query:h.g})),C(u.a,{item:!0,xs:12,md:6},C(m.default,{title:"Latest daily number of tests in Scotland",query:h.c})),C(u.a,{item:!0,xs:12,md:6},C(m.default,{title:"Total number of deaths in Scotland",query:h.f})),C(u.a,{item:!0,xs:12,md:6},C(m.default,{title:"Latest daily number of deaths in Scotland",query:h.b})),C(u.a,{item:!0,xs:12},C(v.default,null)),C(u.a,{item:!0,xs:12},C(O.default,{title:"Scotland Intensive Care (ICU) Utilisation",query:"2141"})),C(u.a,{item:!0,xs:12},C(S.default,{title:"Scotland Hospital Staff Absences",query:"2141"})),C(u.a,{item:!0,xs:12},C(l.a,{variant:"h5"},"Scotland Regions")),C(u.a,{item:!0,xs:12},C(p.default,null)),C(u.a,{item:!0,xs:12},C(y.default,null)),C(u.a,{item:!0,xs:12},C(l.a,{variant:"h5"},"United Kingdom Overview")),C(u.a,{item:!0,xs:12},C(b.default,null))))}}]),d}(f.a.Component)},NGTN:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return R}));var a=n("1OyB"),r=n("vuIU"),c=n("JX7q"),o=n("Ji7U"),i=n("md7G"),u=n("foSv"),s=n("rePB"),l=n("q1tI"),d=n.n(l),f=n("30+C"),h=n("50B7"),y=n("oa/T"),v=n("ofer"),m=n("de8u"),p=n("vDqi"),b=n.n(p),O=n("ZhIB"),S=n.n(O),C=n("sv1E"),D=d.a.createElement;function j(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var R=function(t){Object(o.a)(l,t);var e,n=(e=l,function(){var t,n=Object(u.a)(e);if(j()){var a=Object(u.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(i.a)(this,t)});function l(){var t;Object(a.a)(this,l);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t=n.call.apply(n,[this].concat(r)),Object(s.a)(Object(c.a)(t),"state",{value:0,ready:!1}),t}return Object(r.a)(l,[{key:"componentDidMount",value:function(){var t=this;b.a.get(C.a(this.props.query)).then((function(e){t.setState({value:e.data.rows[0],ready:!0})}))}},{key:"render",value:function(){return D(f.a,null,D(h.a,{subheader:this.props.title}),this.state.ready?D(y.a,null,D(v.a,{variant:"h5"},S()(this.state.value).format("0,0"))):D(m.a,null))}}]),l}(d.a.Component)},OzJE:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return R}));var a=n("1OyB"),r=n("vuIU"),c=n("JX7q"),o=n("Ji7U"),i=n("md7G"),u=n("foSv"),s=n("rePB"),l=n("30+C"),d=n("50B7"),f=n("oa/T"),h=n("de8u"),y=n("vDqi"),v=n.n(y),m=n("TXyo"),p=n.n(m),b=n("q1tI"),O=n.n(b),S=n("4XXU"),C=n("n4y3"),D=O.a.createElement;function j(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var R=function(t){Object(o.a)(y,t);var e,n=(e=y,function(){var t,n=Object(u.a)(e);if(j()){var a=Object(u.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(i.a)(this,t)});function y(){var t;Object(a.a)(this,y);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t=n.call.apply(n,[this].concat(r)),Object(s.a)(Object(c.a)(t),"state",{value:0,ready:!1}),t}return Object(r.a)(y,[{key:"componentDidMount",value:function(){var t=this;v.a.get("https://raw.githubusercontent.com/watty62/Scot_covid19/master/data/processed/staff_absences.csv").then((function(e){p()({headers:["date","nurses_midwives","medical_dental","other","all"]}).fromString(e.data).then((function(e){t.setState({value:e,ready:!0})}))}))}},{key:"render",value:function(){return D(l.a,null,D(d.a,{subheader:this.props.title}),this.state.ready?D(f.a,null,D(S.h,{width:"100%",height:350},D(S.d,{data:this.state.value},D(S.a,{barSize:20,stackId:"a",fill:C.c[0],dataKey:"nurses_midwives",name:"Nurses and Midwives"}),D(S.a,{barSize:20,stackId:"a",fill:C.c[1],dataKey:"medical_dental",name:"Medical and Dental"}),D(S.a,{barSize:20,stackId:"a",fill:C.c[2],dataKey:"other",name:"Other"}),D(S.f,{type:"monotone",dataKey:"all",name:"All"}),D(S.e,null),D(S.i,null),D(S.c,{strokeDasharray:"5 5"}),D(S.b,{dataKey:"date",height:30,stroke:"#8884d8"}),D(S.k,null),D(S.j,{dataKey:"date"})))):D(h.a,null))}}]),y}(O.a.Component)},yveZ:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return R}));var a=n("1OyB"),r=n("vuIU"),c=n("JX7q"),o=n("Ji7U"),i=n("md7G"),u=n("foSv"),s=n("rePB"),l=n("q1tI"),d=n.n(l),f=n("30+C"),h=n("50B7"),y=n("oa/T"),v=n("de8u"),m=n("vDqi"),p=n.n(m),b=n("TXyo"),O=n.n(b),S=n("4XXU"),C=n("n4y3"),D=d.a.createElement;function j(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var R=function(t){Object(o.a)(l,t);var e,n=(e=l,function(){var t,n=Object(u.a)(e);if(j()){var a=Object(u.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(i.a)(this,t)});function l(){var t;Object(a.a)(this,l);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t=n.call.apply(n,[this].concat(r)),Object(s.a)(Object(c.a)(t),"state",{value:0,ready:!1}),t}return Object(r.a)(l,[{key:"componentDidMount",value:function(){var t=this;p.a.get("https://raw.githubusercontent.com/watty62/Scot_covid19/master/data/processed/intensive_care.csv").then((function(e){O()({colParser:{date:"string",icu_patients:"number"},checkType:!0}).fromString(e.data).then((function(e){t.setState({value:e,ready:!0})}))}))}},{key:"render",value:function(){return D(f.a,null,D(h.a,{subheader:this.props.title}),this.state.ready?D(y.a,null,D(S.h,{width:"100%",height:350},D(S.g,{data:this.state.value},D(S.f,{type:"monotone",fill:C.c[0],dataKey:"icu_patients",name:"ICU Patients"}),D(S.e,null),D(S.i,null),D(S.c,{strokeDasharray:"5 5"}),D(S.b,{dataKey:"date",height:30,stroke:"#8884d8"}),D(S.k,null),D(S.j,{dataKey:"date"})))):D(v.a,null))}}]),l}(d.a.Component)}}]);