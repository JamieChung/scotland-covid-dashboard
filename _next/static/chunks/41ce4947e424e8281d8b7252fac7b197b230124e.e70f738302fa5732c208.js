(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"30+C":function(t,a,e){"use strict";var n=e("wx14"),o=e("Ff2n"),r=e("q1tI"),i=(e("17x9"),e("iuhU")),s=e("kKAo"),c=e("H2TA"),l=r.forwardRef((function(t,a){var e=t.classes,c=t.className,l=t.raised,d=void 0!==l&&l,u=Object(o.a)(t,["classes","className","raised"]);return r.createElement(s.a,Object(n.a)({className:Object(i.a)(e.root,c),elevation:d?8:1,ref:a},u))}));a.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},"50B7":function(t,a,e){"use strict";var n=e("wx14"),o=e("Ff2n"),r=e("q1tI"),i=(e("17x9"),e("iuhU")),s=e("H2TA"),c=e("ofer"),l=r.forwardRef((function(t,a){var e=t.action,s=t.avatar,l=t.classes,d=t.className,u=t.component,p=void 0===u?"div":u,h=t.disableTypography,y=void 0!==h&&h,f=t.subheader,m=t.subheaderTypographyProps,g=t.title,b=t.titleTypographyProps,v=Object(o.a)(t,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),C=g;null==C||C.type===c.a||y||(C=r.createElement(c.a,Object(n.a)({variant:s?"body2":"h5",className:l.title,component:"span",display:"block"},b),C));var O=f;return null==O||O.type===c.a||y||(O=r.createElement(c.a,Object(n.a)({variant:s?"body2":"body1",className:l.subheader,color:"textSecondary",component:"span",display:"block"},m),O)),r.createElement(p,Object(n.a)({className:Object(i.a)(l.root,d),ref:a},v),s&&r.createElement("div",{className:l.avatar},s),r.createElement("div",{className:l.content},C,O),e&&r.createElement("div",{className:l.action},e))}));a.a=Object(s.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(l)},DBhK:function(t,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return T}));var n=e("1OyB"),o=e("vuIU"),r=e("JX7q"),i=e("Ji7U"),s=e("md7G"),c=e("foSv"),l=e("rePB"),d=e("30+C"),u=e("50B7"),p=e("oa/T"),h=e("de8u"),y=e("vDqi"),f=e.n(y),m=e("LvDl"),g=e("wd/R"),b=e.n(g),v=e("q1tI"),C=e.n(v),O=e("4XXU"),E=e("n4y3"),j=C.a.createElement;function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function A(t){return b()(t).format("MMM-DD")}var S="https://covid-19-uk-datasette-65tzkjlxkq-ew.a.run.app/"+"covid-19-uk"+".json?sql="+encodeURIComponent("\nwith _confirmed AS (\n    SELECT\n      Date,\n      Country,\n      Value AS ConfirmedCases\n    FROM\n      indicators\n    WHERE\n      Indicator = 'ConfirmedCases'\n  ),\n  _tests AS (\n    SELECT\n      Date,\n      Country,\n      Value AS Tests\n    FROM\n      indicators\n    WHERE\n      Indicator = 'Tests'\n  ),\n  _deaths AS (\n    SELECT\n      Date,\n      Country,\n      Value AS Deaths\n    FROM\n      indicators\n    WHERE\n      Indicator = 'Deaths'\n  ),\n  collapsed AS (\n    SELECT\n      _confirmed.Date,\n      _Confirmed.Country,\n      COALESCE(ConfirmedCases, 0) AS ConfirmedCases,\n      COALESCE(Tests, 0) AS Tests,\n      COALESCE(Deaths, 0) AS Deaths\n    FROM\n      _confirmed\n      LEFT JOIN _tests ON (\n        _confirmed.Country = _tests.Country\n        AND _confirmed.Date = _tests.Date\n      )\n      LEFT JOIN _deaths ON (\n        _confirmed.Country = _deaths.Country\n        AND _confirmed.Date = _deaths.Date\n      )\n  )\n  SELECT\n    *\n  FROM\n    collapsed\n  WHERE\n    Country IN ('Scotland')\n  ORDER BY\n    Date ASC\n");var T=function(t){Object(i.a)(y,t);var a,e=(a=y,function(){var t,e=Object(c.a)(a);if(D()){var n=Object(c.a)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Object(s.a)(this,t)});function y(){var t;Object(n.a)(this,y);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),Object(l.a)(Object(r.a)(t),"state",{data:[],loading:!0}),t}return Object(o.a)(y,[{key:"componentDidMount",value:function(){var t=this;f.a.get(S).then((function(a){var e=[];m.map(a.data.rows,(function(t){e.push(m.mapKeys(t,(function(t,e){return a.data.columns[e]})))})),t.setState({data:m.groupBy(e,"Country"),loading:!1})}))}},{key:"render",value:function(){return this.state.loading?j(h.a,null):j("div",null,(t="Scotland - Confirmed Cases, Tests and Cases",a=this.state.data.Scotland,j(d.a,null,j(u.a,{subheader:t}),j(p.a,null,j(O.g,{width:"100%",height:500},j(O.f,null,j(O.e,{dataKey:"ConfirmedCases",data:a,stroke:E.a}),j(O.e,{dataKey:"Tests",data:a,stroke:E.d}),j(O.e,{dataKey:"Deaths",data:a,stroke:E.b}),j(O.d,null),j(O.h,null),j(O.b,{strokeDasharray:"5 5"}),j(O.j,{label:{value:"Frequency",angle:-90,position:"insideLeft"}}),j(O.i,{dataKey:"Date",allowDuplicatedCategory:!1,tickFormatter:A})))))));var t,a}}]),y}(C.a.Component)},n4y3:function(t,a,e){"use strict";e.d(a,"a",(function(){return n})),e.d(a,"d",(function(){return o})),e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return i}));var n="#B6B0FF",o="#3049AD",r="#FF994E",i=["#01B8AA","#374649","#FD625E","#F2C80F","#5F6B6D","#8AD4EB","#FE9666","#A66999"]},"oa/T":function(t,a,e){"use strict";var n=e("wx14"),o=e("Ff2n"),r=e("q1tI"),i=(e("17x9"),e("iuhU")),s=e("H2TA"),c=r.forwardRef((function(t,a){var e=t.classes,s=t.className,c=t.component,l=void 0===c?"div":c,d=Object(o.a)(t,["classes","className","component"]);return r.createElement(l,Object(n.a)({className:Object(i.a)(e.root,s),ref:a},d))}));a.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},ofer:function(t,a,e){"use strict";var n=e("wx14"),o=e("Ff2n"),r=e("q1tI"),i=(e("17x9"),e("iuhU")),s=e("H2TA"),c=e("NqtD"),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=r.forwardRef((function(t,a){var e=t.align,s=void 0===e?"inherit":e,d=t.classes,u=t.className,p=t.color,h=void 0===p?"initial":p,y=t.component,f=t.display,m=void 0===f?"initial":f,g=t.gutterBottom,b=void 0!==g&&g,v=t.noWrap,C=void 0!==v&&v,O=t.paragraph,E=void 0!==O&&O,j=t.variant,D=void 0===j?"body1":j,A=t.variantMapping,S=void 0===A?l:A,T=Object(o.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),w=y||(E?"p":S[D]||l[D])||"span";return r.createElement(w,Object(n.a)({className:Object(i.a)(d.root,u,"inherit"!==D&&d[D],"initial"!==h&&d["color".concat(Object(c.a)(h))],C&&d.noWrap,b&&d.gutterBottom,E&&d.paragraph,"inherit"!==s&&d["align".concat(Object(c.a)(s))],"initial"!==m&&d["display".concat(Object(c.a)(m))]),ref:a},T))}));a.a=Object(s.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)}}]);