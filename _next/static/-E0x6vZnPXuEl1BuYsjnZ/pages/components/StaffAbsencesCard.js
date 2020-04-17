(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"30+C":function(e,a,t){"use strict";var n=t("wx14"),r=t("Ff2n"),o=t("q1tI"),c=(t("17x9"),t("iuhU")),s=t("kKAo"),i=t("H2TA"),l=o.forwardRef((function(e,a){var t=e.classes,i=e.className,l=e.raised,d=void 0!==l&&l,u=Object(r.a)(e,["classes","className","raised"]);return o.createElement(s.a,Object(n.a)({className:Object(c.a)(t.root,i),elevation:d?8:1,ref:a},u))}));a.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},"50B7":function(e,a,t){"use strict";var n=t("wx14"),r=t("Ff2n"),o=t("q1tI"),c=(t("17x9"),t("iuhU")),s=t("H2TA"),i=t("ofer"),l=o.forwardRef((function(e,a){var t=e.action,s=e.avatar,l=e.classes,d=e.className,u=e.component,f=void 0===u?"div":u,p=e.disableTypography,m=void 0!==p&&p,v=e.subheader,b=e.subheaderTypographyProps,h=e.title,y=e.titleTypographyProps,O=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),w=h;null==w||w.type===i.a||m||(w=o.createElement(i.a,Object(n.a)({variant:s?"body2":"h5",className:l.title,component:"span",display:"block"},y),w));var j=v;return null==j||j.type===i.a||m||(j=o.createElement(i.a,Object(n.a)({variant:s?"body2":"body1",className:l.subheader,color:"textSecondary",component:"span",display:"block"},b),j)),o.createElement(f,Object(n.a)({className:Object(c.a)(l.root,d),ref:a},O),s&&o.createElement("div",{className:l.avatar},s),o.createElement("div",{className:l.content},w,j),t&&o.createElement("div",{className:l.action},t))}));a.a=Object(s.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(l)},OzJE:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return x}));var n=t("1OyB"),r=t("vuIU"),o=t("JX7q"),c=t("Ji7U"),s=t("md7G"),i=t("foSv"),l=t("rePB"),d=t("30+C"),u=t("50B7"),f=t("oa/T"),p=t("de8u"),m=t("vDqi"),v=t.n(m),b=t("TXyo"),h=t.n(b),y=t("q1tI"),O=t.n(y),w=t("4XXU"),j=t("n4y3"),g=O.a.createElement;function N(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var x=function(e){Object(c.a)(m,e);var a,t=(a=m,function(){var e,t=Object(i.a)(a);if(N()){var n=Object(i.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(s.a)(this,e)});function m(){var e;Object(n.a)(this,m);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r)),Object(l.a)(Object(o.a)(e),"state",{value:0,ready:!1}),e}return Object(r.a)(m,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://raw.githubusercontent.com/watty62/Scot_covid19/master/data/processed/staff_absences.csv").then((function(a){h()({headers:["date","nurses_midwives","medical_dental","other","all"]}).fromString(a.data).then((function(a){e.setState({value:a,ready:!0})}))}))}},{key:"render",value:function(){return g(d.a,null,g(u.a,{subheader:this.props.title}),this.state.ready?g(f.a,null,g(w.h,{width:"100%",height:350},g(w.d,{data:this.state.value},g(w.a,{barSize:20,stackId:"a",fill:j.c[0],dataKey:"nurses_midwives",name:"Nurses and Midwives"}),g(w.a,{barSize:20,stackId:"a",fill:j.c[1],dataKey:"medical_dental",name:"Medical and Dental"}),g(w.a,{barSize:20,stackId:"a",fill:j.c[2],dataKey:"other",name:"Other"}),g(w.f,{type:"monotone",dataKey:"all",name:"All"}),g(w.e,null),g(w.i,null),g(w.c,{strokeDasharray:"5 5"}),g(w.b,{dataKey:"date",height:30,stroke:"#8884d8"}),g(w.k,null),g(w.j,{dataKey:"date"})))):g(p.a,null))}}]),m}(O.a.Component)},cUcQ:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/StaffAbsencesCard",function(){return t("OzJE")}])},kKAo:function(e,a,t){"use strict";var n=t("Ff2n"),r=t("wx14"),o=t("q1tI"),c=(t("17x9"),t("iuhU")),s=t("H2TA"),i=o.forwardRef((function(e,a){var t=e.classes,s=e.className,i=e.component,l=void 0===i?"div":i,d=e.square,u=void 0!==d&&d,f=e.elevation,p=void 0===f?1:f,m=e.variant,v=void 0===m?"elevation":m,b=Object(n.a)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(l,Object(r.a)({className:Object(c.a)(t.root,s,"outlined"===v?t.outlined:t["elevation".concat(p)],!u&&t.rounded),ref:a},b))}));a.a=Object(s.a)((function(e){var a={};return e.shadows.forEach((function(e,t){a["elevation".concat(t)]={boxShadow:e}})),Object(r.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},a)}),{name:"MuiPaper"})(i)},n4y3:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"d",(function(){return r})),t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return c}));var n="#B6B0FF",r="#3049AD",o="#FF994E",c=["#01B8AA","#374649","#FD625E","#F2C80F","#5F6B6D","#8AD4EB","#FE9666","#A66999"]},"oa/T":function(e,a,t){"use strict";var n=t("wx14"),r=t("Ff2n"),o=t("q1tI"),c=(t("17x9"),t("iuhU")),s=t("H2TA"),i=o.forwardRef((function(e,a){var t=e.classes,s=e.className,i=e.component,l=void 0===i?"div":i,d=Object(r.a)(e,["classes","className","component"]);return o.createElement(l,Object(n.a)({className:Object(c.a)(t.root,s),ref:a},d))}));a.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)}},[["cUcQ",0,1,6,2,3]]]);