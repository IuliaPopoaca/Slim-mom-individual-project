"use strict";(self.webpackChunkslim_mom_individual_project=self.webpackChunkslim_mom_individual_project||[]).push([[591],{8624:function(e,n,t){var i=t(9055),r=t(184);n.Z=function(e){var n=e.type,t=e.id,s=e.onClick,a=e.text,l=e.isOpen;return(0,r.jsx)(i.z,{type:n,id:t,onClick:s,minW:"181px",w:"min-content",py:"13px",px:"25px",open:l,background:"#FC842D",color:"#FFFFFF",boxShadow:"0px 4px 10px rgba(252, 132, 45, 0.5)",rounded:"30px",_hover:{background:"#c0580f"},children:a})}},5492:function(e,n,t){t.d(n,{Z:function(){return W}});var i,r,s,a,l,d,o,x=t(824),c=t(2831),u=t(8624),p=t(168),h=t(225),g=h.Z.form(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 60px;\n\n  width: 100%;\n  padding-bottom: 41px;\n\n  @media screen and (min-width: 768px) {\n    align-items: start;\n\n    width: 512px;\n    padding-bottom: 48px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    align-items: end;\n    /* padding-bottom: 111px; */\n  }\n"]))),m=h.Z.h1(r||(r=(0,p.Z)(["\n  width: 100%;\n  margin-top: 72px;\n  margin-bottom: 10px;\n\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.44;\n\n  color: #212121;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    margin-top: 140px;\n    margin-bottom: 48px;\n\n    font-size: 34px;\n    line-height: 1.2;\n  }\n"]))),f=h.Z.p(s||(s=(0,p.Z)(["\n  margin-top: 5px;\n  margin-bottom: 8px;\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.21;\n  letter-spacing: 0.04em;\n\n  color: #fc842d;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 12px;\n  }\n"]))),y=h.Z.label(a||(a=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  @media screen and (min-width: 768px) {\n    gap: 4px;\n  }\n"]))),j=h.Z.input(l||(l=(0,p.Z)(["\n  /* display: none; */\n  position: absolute;\n  width: 0px;\n  height: 0px;\n\n  &&:checked ~ span {\n    font-weight: 700;\n\n    color: #fc842d;\n  }\n  &&:checked + div div {\n    background-color: #fc842d;\n  }\n"]))),b=h.Z.span(d||(d=(0,p.Z)(["\n  font-size: 14px;\n  line-height: 1.21;\n  letter-spacing: 0.04em;\n\n  color: #9b9faa;\n  transition: color 300ms ease, font-size 300ms ease, font-weight 300ms ease;\n"]))),w=h.Z.div(o||(o=(0,p.Z)(["\n  width: 10px;\n  height: 10px;\n  border-radius: 50px;\n\n  background-color: transparent;\n\n  transition: background-color 300ms ease;\n"]))),Z=t(2949),v=t(6848),F=t(1463),k=t(3959),C="CalculatorAddProductForm_alert_box__ZY1oT",S="CalculatorAddProductForm_alert_title__dmR1c",_=t(184);function T(){return(0,_.jsxs)(Z.b,{status:"error",className:C,position:"absolute",top:{xs:"calc(-100% - 30px)",md:"calc(-100% - 10px)"},left:{xs:"calc(100% - 30px)",md:"calc(100% + 5px)"},display:"flex",flexDirection:"column",gap:"4px",w:{xs:"100px",lg:"120px"},p:{xs:"5px",lg:"7px"},fontSize:{xs:"8px",lg:"10px"},background:"#ffffff",rounded:"10px",boxShadow:"0px 4px 10px rgba(252, 132, 45, 0.5)",children:[(0,_.jsxs)("div",{className:S,children:[(0,_.jsx)(v.z,{m:"0"}),(0,_.jsx)(F.C,{lineHeight:"10px",m:"0",children:"Input fields are empty!"})]}),(0,_.jsx)(k.X,{lineHeight:"10px",fontSize:"8px",textAlign:"center",children:"Enter your details and try again."})]})}var U=t(2715);t(2791);function E(e){var n=e.text;return(0,_.jsx)(U.x,{fontSize:"8px",m:"0",position:"absolute",top:{xs:"48px",md:"63px"},color:"red",children:n})}function W(e){var n=e.handleSubmit,t=e.handleChange,i=e.handleInputBlur,r=e.renderAlert,s=e.showValidationInput,a=e.blurOnInput,l=e.dataUser,d=e.bloodTypeUser;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{children:"Calculate your daily calorie intake right now"}),(0,_.jsxs)(g,{onSubmit:n,children:[(0,_.jsxs)(x.xu,{display:"flex",gap:{md:"32px"},flexDirection:{xs:"column",md:"row"},width:{xs:"100%"},children:[(0,_.jsxs)(x.xu,{display:"flex",flexDirection:"column",gap:"10px",minWidth:{xs:"100%",md:"240px"},pb:{xs:"10px",md:"0px"},children:[(0,_.jsxs)(x.xu,{position:"relative",children:[(0,_.jsx)(c.Z,{labelName:"Height *",type:"number",name:"heightUser",handlerEvent:t,onBlur:i,width:"100%"}),a&&s&&(0===l.height||null===l.height)&&(0,_.jsx)(E,{text:"Please, enter your height"}),s&&0!==l.height&&null!==l.height&&(l.height<140||l.height>220)&&(0,_.jsx)(E,{text:"The height must be between 140cm and 220cm."})]}),(0,_.jsxs)(x.xu,{position:"relative",children:[(0,_.jsx)(c.Z,{labelName:"Age *",type:"number",name:"ageUser",handlerEvent:t,onBlur:i,width:"100%"}),a&&s&&(0===l.age||null===l.age)&&(0,_.jsx)(E,{text:"Please enter your age"}),s&&0!==l.age&&null!==l.age&&(l.age<16||l.age>120)&&(0,_.jsx)(E,{text:"The age should be between 16 years and 120 years."})]}),(0,_.jsxs)(x.xu,{position:"relative",children:[(0,_.jsx)(c.Z,{labelName:"Current weight *",type:"number",name:"currentWeightUser",handlerEvent:t,onBlur:i,width:"100%"}),a&&s&&(0===l.weight||null===l.weight)&&(0,_.jsx)(E,{text:"Please enter your current weight"}),s&&0!==l.weight&&null!==l.weight&&(l.weight<40||l.weight>150)&&(0,_.jsx)(E,{text:"The current weight should be between 40kg and 150kg."})]})]}),(0,_.jsxs)(x.xu,{display:"flex",flexDirection:"column",gap:"10px",minWidth:{xs:"100%",md:"240px"},children:[(0,_.jsxs)(x.xu,{position:"relative",children:[(0,_.jsx)(c.Z,{labelName:"Desired weight *",type:"number",name:"desiredWeightUser",handlerEvent:t,onBlur:i,width:"100%"}),a&&s&&(0===l.desiredWeight||null===l.desiredWeight)&&(0,_.jsx)(E,{text:"Please enter your desired weight"}),s&&0!==l.desiredWeight&&null!==l.desiredWeight&&(l.desiredWeight<40||l.desiredWeight>150)&&(0,_.jsx)(E,{text:"The desired weight should be between 40kg and 150kg."})]}),(0,_.jsxs)(x.xu,{children:[(0,_.jsx)(f,{children:"Blood type *"}),(0,_.jsxs)(x.xu,{display:"flex",gap:{xs:"24px",md:"28px"},children:[(0,_.jsxs)(y,{children:[(0,_.jsx)(j,{type:"radio",name:"bloodTypeUser",value:"1",checked:1===d,onChange:t}),(0,_.jsx)(x.xu,{display:"flex",justifyContent:"center",alignItems:"center",w:"20px",h:"20px",background:"#FFFFFF",border:"1px solid #E0E0E0",borderRadius:"50%",children:(0,_.jsx)(w,{})}),(0,_.jsx)(b,{children:"1"})]}),(0,_.jsxs)(y,{children:[(0,_.jsx)(j,{type:"radio",name:"bloodTypeUser",value:"2",onChange:t,checked:2===d}),(0,_.jsx)(x.xu,{display:"flex",justifyContent:"center",alignItems:"center",w:"20px",h:"20px",background:"#FFFFFF",border:"1px solid #E0E0E0",borderRadius:"50%",children:(0,_.jsx)(w,{})}),(0,_.jsx)(b,{children:"2"})]}),(0,_.jsxs)(y,{children:[(0,_.jsx)(j,{type:"radio",name:"bloodTypeUser",value:"3",onChange:t,checked:3===d}),(0,_.jsx)(x.xu,{display:"flex",justifyContent:"center",alignItems:"center",w:"20px",h:"20px",background:"#FFFFFF",border:"1px solid #E0E0E0",borderRadius:"50%",children:(0,_.jsx)(w,{})}),(0,_.jsx)(b,{children:"3"})]}),(0,_.jsxs)(y,{children:[(0,_.jsx)(j,{type:"radio",name:"bloodTypeUser",value:"4",onChange:t,checked:4===d}),(0,_.jsx)(x.xu,{display:"flex",justifyContent:"center",alignItems:"center",w:"20px",h:"20px",background:"#FFFFFF",border:"1px solid #E0E0E0",borderRadius:"50%",children:(0,_.jsx)(w,{})}),(0,_.jsx)(b,{children:"4"})]})]})]})]})]}),(0,_.jsxs)(x.xu,{position:"relative",children:[(0,_.jsx)(u.Z,{type:"submit",text:"Start losing weight"}),r&&(0,_.jsx)(T,{})]})]})]})}},223:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var i=t(9439),r=t(2791),s=t(9434),a=t(5492),l=t(5272),d=t(7746),o=t(824),x=t(7872),c=t(4289),u=t(341),p=t(184);function h(){var e=(0,s.v9)(c.u.userId),n=(0,s.I0)(),t=(0,r.useState)(null),h=(0,i.Z)(t,2),g=h[0],m=h[1],f=(0,r.useState)(null),y=(0,i.Z)(f,2),j=y[0],b=y[1],w=(0,r.useState)(null),Z=(0,i.Z)(w,2),v=Z[0],F=Z[1],k=(0,r.useState)(null),C=(0,i.Z)(k,2),S=C[0],_=C[1],T=(0,r.useState)(1),U=(0,i.Z)(T,2),E=U[0],W=U[1],N=(0,r.useState)(!1),I=(0,i.Z)(N,2),L=I[0],z=I[1],P=(0,r.useState)(!1),A=(0,i.Z)(P,2),B=A[0],D=A[1],V=(0,r.useState)(!1),G=(0,i.Z)(V,2),H=G[0],O=G[1],R={weight:v,height:g,age:j,desiredWeight:S,bloodType:E};return(0,p.jsxs)(d.i,{children:[(0,p.jsx)(o.xu,{children:(0,p.jsx)(a.Z,{handleSubmit:function(t){if(t.preventDefault(),D(!0),O(!0),z(!1),Object.values(R).some((function(e){return 0===e||null===e})))return z(!0),void setTimeout((function(){z(!1)}),3500);if(!(g<140||g>220||j<16||j>120||v<40||v>150||S<40||S>150)){n((0,u.VW)(R));var i={userId:e,dataUser:R};n((0,x.Ww)(i))}},handleChange:function(e){var n=e.target.name,t=Number(e.target.value);switch(n){case"heightUser":m(t);break;case"ageUser":b(t);break;case"currentWeightUser":F(t);break;case"desiredWeightUser":_(t);break;case"bloodTypeUser":W(t)}},handleInputBlur:function(){O(!1)},bloodTypeUser:E,renderAlert:L,showValidationInput:B,blurOnInput:H,dataUser:R})}),(0,p.jsxs)(o.xu,{position:"relative",children:[(0,p.jsx)(l.Z,{}),(0,p.jsx)(d.A,{})]})]})}},6661:function(e,n,t){t.d(n,{HC:function(){return v},aV:function(){return Z}});var i=t(1413),r=t(4942),s=t(5987),a=t(9439),l=t(9640),d=t(9886),o=t(7200),x=t(5597),c=t(6516),u=t(2996),p=t(1665),h=t(184),g=["children","styleType","stylePosition","spacing"],m=["as"],f=["as"],y=(0,d.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),j=(0,a.Z)(y,2),b=j[0],w=j[1],Z=(0,x.G)((function(e,n){var t=(0,c.jC)("List",e),a=(0,u.Lr)(e),l=a.children,d=a.styleType,x=void 0===d?"none":d,m=a.stylePosition,f=a.spacing,y=(0,s.Z)(a,g),j=(0,o.W)(l),w=f?(0,r.Z)({},"& > *:not(style) ~ *:not(style)",{mt:f}):{};return(0,h.jsx)(b,{value:t,children:(0,h.jsx)(p.m.ul,(0,i.Z)((0,i.Z)({ref:n,listStyleType:x,listStylePosition:m,role:"list",__css:(0,i.Z)((0,i.Z)({},t.container),w)},y),{},{children:j}))})}));Z.displayName="List",(0,x.G)((function(e,n){e.as;var t=(0,s.Z)(e,m);return(0,h.jsx)(Z,(0,i.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList",(0,x.G)((function(e,n){e.as;var t=(0,s.Z)(e,f);return(0,h.jsx)(Z,(0,i.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},t))})).displayName="UnorderedList";var v=(0,x.G)((function(e,n){var t=w();return(0,h.jsx)(p.m.li,(0,i.Z)((0,i.Z)({ref:n},e),{},{__css:t.item}))}));v.displayName="ListItem",(0,x.G)((function(e,n){var t=w();return(0,h.jsx)(l.J,(0,i.Z)((0,i.Z)({ref:n,role:"presentation"},e),{},{__css:t.icon}))})).displayName="ListIcon"},9589:function(e,n,t){t.d(n,{X:function(){return u}});var i=t(1413),r=t(5987),s=t(5597),a=t(6516),l=t(2996),d=t(1665),o=t(6992),x=t(184),c=["className"],u=(0,s.G)((function(e,n){var t=(0,a.mq)("Heading",e),s=(0,l.Lr)(e),u=(s.className,(0,r.Z)(s,c));return(0,x.jsx)(d.m.h2,(0,i.Z)((0,i.Z)({ref:n,className:(0,o.cx)("chakra-heading",e.className)},u),{},{__css:t}))}));u.displayName="Heading"},7200:function(e,n,t){t.d(n,{W:function(){return r}});var i=t(2791);function r(e){return i.Children.toArray(e).filter((function(e){return(0,i.isValidElement)(e)}))}}}]);
//# sourceMappingURL=591.25fc68dc.chunk.js.map