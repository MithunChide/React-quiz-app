(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o=n(7),i=n(0),c=n(19),r=n.n(c),s=(n(27),n(28),n(2)),a=n(21),p=n(16),h=n(17),j=n(22),d=n(1),l=["children"];var u=function(e){var t=e.children,n=Object(j.a)(e,l);return Object(d.jsx)("button",Object(h.a)(Object(h.a)({},n),{},{children:t}))};var b=function(e){var t=e.onResponse,n=e.question,o=(n.id,n.prompt),i=n.options;return Object(d.jsxs)("div",{className:"question",children:[Object(d.jsx)("h1",{children:o}),i.map((function(e,n){return Object(d.jsx)(u,{onClick:function(){t(n)},children:e},e)}))]})},O=[{id:101,prompt:"Who created React Js?",options:["Elon Musk","Ben Jeffos","Jordan Walke","Ratan Tata"],correctOption:2},{id:102,prompt:"Who Won WTC 2021?",options:["India","England","New Zealand","Virat Kolhi"],correctOption:2},{id:103,prompt:"What is favourate color of Mithun?",options:["Blue","Black","Red","Pink"],correctOption:1},{id:104,prompt:"Who created Facebook?",options:["Bill Gate","Mark Zuckerberg","Narendra Modi","Mukesh Ambani"],correctOption:1},{id:105,prompt:"How many player in Cricket in One team?",options:[10,7,9,11],correctOption:3},{id:106,prompt:"Which is the favourite game of Mithun?",options:["Kabaddi","Carrom","Cards","Cricket"],correctOption:0},{id:107,prompt:"What is nickname MS. Dhoni?",options:["Viru","Avi","Mahi","Yuzi"],correctOption:2},{id:108,prompt:"Who is PM of India?",options:["Amit Shah","Narendra Modi","Mithun Chide","Akshay Kapur"],correctOption:1},{id:109,prompt:"Who is Akshay Kumar?",options:["Actor","Singer","Thiefer","Painter"],correctOption:0},{id:110,prompt:"What is the Capital of India?",options:["Surat","Asam","New Dilhi","Mumbai"],correctOption:2}];var m=function(e){var t=e.responses,n=void 0===t?[]:t,i=e.questions,c=void 0===i?[]:i,r=c.reduce((function(e,t,o){return t.correctOption===n[o]?e+1:e}),0);return Object(d.jsxs)("div",{className:"height",children:[Object(d.jsx)(o.b,{to:"/",className:"take-home",children:"Take me HomePage..."}),Object(d.jsx)("h1",{children:"Report"}),Object(d.jsxs)("h1",{children:[" \u2728\u2728\u2728You Scored ",r,"\u2728\u2728\u2728"]}),c.map((function(e,t){var o=e.prompt,i=e.options,c=e.correctOption,r=i[n[t]],s=i[c];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"question--Prompt",children:o}),Object(d.jsxs)("p",{children:["Your Response = ",Object(d.jsx)("span",{style:{color:"#b4ba65"},children:r})]}),Object(d.jsxs)("p",{children:["Correct Response =",Object(d.jsx)("span",{style:{color:"#65afba"},children:s})," "]}),Object(d.jsx)("hr",{})]})}))]})};var x=function(){var e=Object(i.useState)(0),t=Object(p.a)(e,2),n=t[0],o=t[1],c=Object(i.useState)([]),r=Object(p.a)(c,2),s=r[0],h=r[1],j=O[n];return n===O.length?Object(d.jsx)(m,{responses:s,questions:O}):(console.log(s),Object(d.jsx)(b,{onResponse:function(e){h([].concat(Object(a.a)(s),[e])),o(n+1)},question:j}))};var f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(s.c,{children:[Object(d.jsxs)("homepage",{className:"homepage",children:[Object(d.jsxs)(s.a,{exact:!0,path:"/",children:[Object(d.jsx)("h1",{children:"\ud83e\udd70\ud83e\udd70 Welcome to my KBC Round \ud83e\udd70\ud83e\udd70"}),Object(d.jsx)(o.b,{className:"lets-begin-link",to:"/quiz",children:"\u2764\ufe0f\u200d\ud83d\udd25 Let's Begin \u2764\ufe0f\u200d\ud83d\udd25"})]}),Object(d.jsx)(s.a,{exact:!0,path:"/quiz",children:Object(d.jsx)(x,{questions:O})})]}),Object(d.jsxs)(s.a,{exact:!0,path:"/",children:[Object(d.jsx)("h1",{children:"\ud83e\udd70\ud83e\udd70 Welcome to my KBC Round \ud83e\udd70\ud83e\udd70"}),Object(d.jsx)(o.b,{className:"lets-begin-link",to:"/quiz",children:"\u2764\ufe0f\u200d\ud83d\udd25 Let's Begin \u2764\ufe0f\u200d\ud83d\udd25"})]}),Object(d.jsx)(s.a,{exact:!0,path:"/quiz",children:Object(d.jsx)(x,{questions:O})})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(o.a,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[35,1,2]]]);
//# sourceMappingURL=main.a922f3bb.chunk.js.map