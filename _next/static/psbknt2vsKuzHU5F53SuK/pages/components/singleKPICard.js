(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"30+C":function(t,a,e){"use strict";var o=e("wx14"),r=e("Ff2n"),n=e("q1tI"),i=(e("17x9"),e("iuhU")),c=e("kKAo"),l=e("H2TA"),s=n.forwardRef((function(t,a){var e=t.classes,l=t.className,s=t.raised,p=void 0!==s&&s,u=Object(r.a)(t,["classes","className","raised"]);return n.createElement(c.a,Object(o.a)({className:Object(i.a)(e.root,l),elevation:p?8:1,ref:a},u))}));a.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},"50B7":function(t,a,e){"use strict";var o=e("wx14"),r=e("Ff2n"),n=e("q1tI"),i=(e("17x9"),e("iuhU")),c=e("H2TA"),l=e("ofer"),s=n.forwardRef((function(t,a){var e=t.action,c=t.avatar,s=t.classes,p=t.className,u=t.component,d=void 0===u?"div":u,h=t.disableTypography,y=void 0!==h&&h,f=t.subheader,m=t.subheaderTypographyProps,b=t.title,v=t.titleTypographyProps,g=Object(r.a)(t,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),j=b;null==j||j.type===l.a||y||(j=n.createElement(l.a,Object(o.a)({variant:c?"body2":"h5",className:s.title,component:"span",display:"block"},v),j));var O=f;return null==O||O.type===l.a||y||(O=n.createElement(l.a,Object(o.a)({variant:c?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},m),O)),n.createElement(d,Object(o.a)({className:Object(i.a)(s.root,p),ref:a},g),c&&n.createElement("div",{className:s.avatar},c),n.createElement("div",{className:s.content},j,O),e&&n.createElement("div",{className:s.action},e))}));a.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},NGTN:function(t,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return N}));var o=e("1OyB"),r=e("vuIU"),n=e("JX7q"),i=e("Ji7U"),c=e("md7G"),l=e("foSv"),s=e("rePB"),p=e("q1tI"),u=e.n(p),d=e("30+C"),h=e("50B7"),y=e("oa/T"),f=e("ofer"),m=e("de8u"),b=e("vDqi"),v=e.n(b),g=e("ZhIB"),j=e.n(g),O=e("sv1E"),w=u.a.createElement;function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var N=function(t){Object(i.a)(p,t);var a,e=(a=p,function(){var t,e=Object(l.a)(a);if(x()){var o=Object(l.a)(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return Object(c.a)(this,t)});function p(){var t;Object(o.a)(this,p);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r)),Object(s.a)(Object(n.a)(t),"state",{value:0,ready:!1}),t}return Object(r.a)(p,[{key:"componentDidMount",value:function(){var t=this;v.a.get(O.a(this.props.query)).then((function(a){t.setState({value:a.data.rows[0],ready:!0})}))}},{key:"render",value:function(){return w(d.a,null,w(h.a,{subheader:this.props.title}),this.state.ready?w(y.a,null,w(f.a,{variant:"h5"},j()(this.state.value).format("0,0"))):w(m.a,null))}}]),p}(u.a.Component)},XbG4:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/singleKPICard",function(){return e("NGTN")}])},"oa/T":function(t,a,e){"use strict";var o=e("wx14"),r=e("Ff2n"),n=e("q1tI"),i=(e("17x9"),e("iuhU")),c=e("H2TA"),l=n.forwardRef((function(t,a){var e=t.classes,c=t.className,l=t.component,s=void 0===l?"div":l,p=Object(r.a)(t,["classes","className","component"]);return n.createElement(s,Object(o.a)({className:Object(i.a)(e.root,c),ref:a},p))}));a.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},ofer:function(t,a,e){"use strict";var o=e("wx14"),r=e("Ff2n"),n=e("q1tI"),i=(e("17x9"),e("iuhU")),c=e("H2TA"),l=e("NqtD"),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},p=n.forwardRef((function(t,a){var e=t.align,c=void 0===e?"inherit":e,p=t.classes,u=t.className,d=t.color,h=void 0===d?"initial":d,y=t.component,f=t.display,m=void 0===f?"initial":f,b=t.gutterBottom,v=void 0!==b&&b,g=t.noWrap,j=void 0!==g&&g,O=t.paragraph,w=void 0!==O&&O,x=t.variant,N=void 0===x?"body1":x,T=t.variantMapping,E=void 0===T?s:T,R=Object(r.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),k=y||(w?"p":E[N]||s[N])||"span";return n.createElement(k,Object(o.a)({className:Object(i.a)(p.root,u,"inherit"!==N&&p[N],"initial"!==h&&p["color".concat(Object(l.a)(h))],j&&p.noWrap,v&&p.gutterBottom,w&&p.paragraph,"inherit"!==c&&p["align".concat(Object(l.a)(c))],"initial"!==m&&p["display".concat(Object(l.a)(m))]),ref:a},R))}));a.a=Object(c.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(p)},sv1E:function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));e("wd/R");function o(t){return"https://covid-19-uk-datasette-65tzkjlxkq-ew.a.run.app/"+"covid-19-uk"+".json?sql="+encodeURIComponent(t)}}},[["XbG4",0,1,2,5,7]]]);