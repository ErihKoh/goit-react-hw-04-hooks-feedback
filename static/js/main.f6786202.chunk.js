(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){},,,,function(e,t,n){e.exports={setBtn:"FeedbackOptions_setBtn__38iz6",optionsBtn:"FeedbackOptions_optionsBtn__2lqy1"}},,function(e,t,n){e.exports={section:"Section_section__1uSD7"}},function(e,t,n){},function(e,t,n){e.exports={appBlock:"FeedbackView_appBlock__HNUEr"}},,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),i=n(7),r=n.n(i),o=(n(16),n(17),n(3)),l=n(5),j=n.n(l),b=n(8),d=n.n(b);function u(e){var t=e.title,n=e.children;return Object(c.jsxs)("div",{className:d.a.section,children:[Object(c.jsx)("h2",{children:t}),n]})}u.protoType={children:j.a.node,title:j.a.string};var h=u,p=n(6),O=n.n(p);var x=function(e){var t=e.labels,n=e.onLeaveFeedback;return Object(c.jsx)("div",{className:O.a.setBtn,children:t.map((function(e){return Object(c.jsx)("button",{type:"button",className:O.a.optionsBtn,onClick:function(){return n(e)},children:e},e)}))})},f=n(2),v=n.n(f);var m=function(e){var t=e.good,n=e.neutral,s=e.bad,a=e.total,i=e.positivePercentage;return Object(c.jsxs)("ul",{className:v.a.list,children:[Object(c.jsxs)("li",{className:v.a.item,children:[Object(c.jsx)("span",{children:"good: "}),Object(c.jsx)("span",{children:t})]}),Object(c.jsxs)("li",{className:v.a.item,children:[Object(c.jsx)("span",{children:"neutral: "}),Object(c.jsx)("span",{children:n})]}),Object(c.jsxs)("li",{className:v.a.item,children:[Object(c.jsx)("span",{children:"bad: "}),Object(c.jsx)("span",{children:s})]}),Object(c.jsxs)("li",{className:v.a.item,children:[Object(c.jsx)("span",{children:"total: "}),Object(c.jsx)("span",{children:a})]}),t>0&&Object(c.jsxs)("li",{className:v.a.item,children:[Object(c.jsx)("span",{children:"positivePercentage: "}),Object(c.jsxs)("span",{children:[i,"%"]})]})]})},g=n(9),k=n.n(g);var N=function(e){var t=e.message;return Object(c.jsx)("span",{className:k.a.notify,children:t})},_=n(10),B=n.n(_);function F(){var e=Object(s.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(0),r=Object(o.a)(i,2),l=r[0],j=r[1],b=Object(s.useState)(0),d=Object(o.a)(b,2),u=d[0],p=d[1],O=function(){return n+l+u};return Object(c.jsxs)("div",{className:B.a.appBlock,children:[Object(c.jsx)(h,{title:"Please leave feedback",children:Object(c.jsx)(x,{labels:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":j((function(e){return e+1}));break;case"bad":p((function(e){return e+1}));break;default:return}}})}),O()?Object(c.jsx)(h,{title:"Statistics",children:Object(c.jsx)(m,{good:n,neutral:l,bad:u,total:O(),positivePercentage:Math.round(100*n/(n+l+u))})}):Object(c.jsx)(N,{message:"No feedback given"})]})}var S=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(F,{})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),w()}],[[20,1,2]]]);
//# sourceMappingURL=main.f6786202.chunk.js.map