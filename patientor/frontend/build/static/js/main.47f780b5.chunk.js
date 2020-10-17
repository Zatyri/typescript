(this.webpackJsonppatientor=this.webpackJsonppatientor||[]).push([[0],{261:function(e,a,t){e.exports=t(437)},437:function(e,a,t){"use strict";t.r(a);var n,l=t(0),r=t.n(l),c=t(56),o=t.n(c),i=(t(265),t(69)),u=t.n(i),m=t(48),s=t(82),d=t.n(s),p=t(155),E=t(49),b=t(445),h=t(455),f=t(452),v=t(446),O="http://localhost:3001/api",g=t(83),C=t(73),y={patients:{}},T=Object(l.createContext)([y,function(){return y}]),j=function(){return Object(l.useContext)(T)},w=t(451),N=t(448),S=t(454),x=t(453),k=t(25),A=t(447),F=(t(450),function(e){var a=e.name,t=e.label,n=e.options;return r.a.createElement(A.a.Field,null,r.a.createElement("label",null,t),r.a.createElement(k.b,{as:"select",name:a,className:"ui dropdown"},n.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label||e.value)}))))}),H=function(e){var a=e.field,t=e.label,n=e.placeholder;return r.a.createElement(A.a.Field,null,r.a.createElement("label",null,t),r.a.createElement(k.b,Object.assign({placeholder:n},a)),r.a.createElement("div",{style:{color:"red"}},r.a.createElement(k.a,{name:a.name})))};!function(e){e.Male="male",e.Female="female",e.Other="other"}(n||(n={}));var I=[{value:n.Male,label:"Male"},{value:n.Female,label:"Female"},{value:n.Other,label:"Other"}],P=function(e){var a=e.onSubmit,t=e.onCancel;return r.a.createElement(k.d,{initialValues:{name:"",ssn:"",dateOfBirth:"",occupation:"",gender:n.Other},onSubmit:a,validate:function(e){var a={};return e.name||(a.name="Field is required"),e.ssn||(a.ssn="Field is required"),e.dateOfBirth||(a.dateOfBirth="Field is required"),e.occupation||(a.occupation="Field is required"),a}},(function(e){var a=e.isValid,n=e.dirty;return r.a.createElement(k.c,{className:"form ui"},r.a.createElement(k.b,{label:"Name",placeholder:"Name",name:"name",component:H}),r.a.createElement(k.b,{label:"Social Security Number",placeholder:"SSN",name:"ssn",component:H}),r.a.createElement(k.b,{label:"Date Of Birth",placeholder:"YYYY-MM-DD",name:"dateOfBirth",component:H}),r.a.createElement(k.b,{label:"Occupation",placeholder:"Occupation",name:"occupation",component:H}),r.a.createElement(F,{label:"Gender",name:"gender",options:I}),r.a.createElement(x.a,null,r.a.createElement(x.a.Column,{floated:"left",width:5},r.a.createElement(f.a,{type:"button",onClick:t,color:"red"},"Cancel")),r.a.createElement(x.a.Column,{floated:"right",width:5},r.a.createElement(f.a,{type:"submit",floated:"right",color:"green",disabled:!n||!a},"Add"))))}))},B=function(e){var a=e.modalOpen,t=e.onClose,n=e.onSubmit,l=e.error;return r.a.createElement(N.a,{open:a,onClose:t,centered:!1,closeIcon:!0},r.a.createElement(N.a.Header,null,"Add a new patient"),r.a.createElement(N.a.Content,null,l&&r.a.createElement(S.a,{inverted:!0,color:"red"},"Error: ".concat(l)),r.a.createElement(P,{onSubmit:n,onCancel:t})))},D=t(457),_=["The patient is in great shape","The patient has a low risk of getting sick","The patient has a high risk of getting sick","The patient has a diagnosed condition"],M=function(e){var a=e.rating,t=e.showText;return r.a.createElement("div",{className:"health-bar"},r.a.createElement(D.a,{icon:"heart",disabled:!0,rating:4-a,maxRating:4}),t?r.a.createElement("p",null,_[a]):null)},R=function(){var e=j(),a=Object(m.a)(e,2),t=a[0].patients,n=a[1],l=r.a.useState(!1),c=Object(m.a)(l,2),o=c[0],i=c[1],s=r.a.useState(),p=Object(m.a)(s,2),E=p[0],h=p[1],v=function(){i(!1),h(void 0)};return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,{textAlign:"center"},r.a.createElement("h3",null,"Patient list")),r.a.createElement(w.a,{celled:!0},r.a.createElement(w.a.Header,null,r.a.createElement(w.a.Row,null,r.a.createElement(w.a.HeaderCell,null,"Name"),r.a.createElement(w.a.HeaderCell,null,"Gender"),r.a.createElement(w.a.HeaderCell,null,"Occupation"),r.a.createElement(w.a.HeaderCell,null,"Health Rating"))),r.a.createElement(w.a.Body,null,Object.values(t).map((function(e){return r.a.createElement(w.a.Row,{key:e.id},r.a.createElement(w.a.Cell,null,e.name),r.a.createElement(w.a.Cell,null,e.gender),r.a.createElement(w.a.Cell,null,e.occupation),r.a.createElement(w.a.Cell,null,r.a.createElement(M,{showText:!1,rating:1})))})))),r.a.createElement(B,{modalOpen:o,onSubmit:function(e){var a,t;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,u.a.awrap(d.a.post("".concat(O,"/patients"),e));case 3:a=l.sent,t=a.data,n({type:"ADD_PATIENT",payload:t}),v(),l.next=13;break;case 9:l.prev=9,l.t0=l.catch(0),console.error(l.t0.response.data),h(l.t0.response.data.error);case 13:case"end":return l.stop()}}),null,null,[[0,9]])},error:E,onClose:v}),r.a.createElement(f.a,{onClick:function(){return i(!0)}},"Add New Patient"))},q=function(){var e=j(),a=Object(m.a)(e,2)[1];return r.a.useEffect((function(){d.a.get("".concat(O,"/ping"));!function(){var e,t;u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(d.a.get("".concat(O,"/patients")));case 3:e=n.sent,t=e.data,a({type:"SET_PATIENT_LIST",payload:t}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),null,null,[[0,8]])}()}),[a]),r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement(b.a,null,r.a.createElement(h.a,{as:"h1"},"Patientor"),r.a.createElement(f.a,{as:p.b,to:"/",primary:!0},"Home"),r.a.createElement(v.a,{hidden:!0}),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",render:function(){return r.a.createElement(R,null)}})))))};o.a.render(r.a.createElement((function(e){var a=e.reducer,t=e.children,n=Object(l.useReducer)(a,y),c=Object(m.a)(n,2),o=c[0],i=c[1];return r.a.createElement(T.Provider,{value:[o,i]},t)}),{reducer:function(e,a){switch(a.type){case"SET_PATIENT_LIST":return Object(C.a)({},e,{patients:Object(C.a)({},a.payload.reduce((function(e,a){return Object(C.a)({},e,Object(g.a)({},a.id,a))}),{}),{},e.patients)});case"ADD_PATIENT":return Object(C.a)({},e,{patients:Object(C.a)({},e.patients,Object(g.a)({},a.payload.id,a.payload))});default:return e}}},r.a.createElement(q,null)),document.getElementById("root"))}},[[261,1,2]]]);
//# sourceMappingURL=main.47f780b5.chunk.js.map