"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_alt=self.webpackChunkgoit_react_hw_08_phonebook_alt||[]).push([[419],{2419:function(n,e,s){s.r(e),s.d(e,{default:function(){return W}});var t,r,i,o,a,l,c,d,h,u,m,p,x,f,g=s(2606),Z=s(2713),j=s(168),v=s(225),b=s(5705),w=(0,v.Z)(b.l0)(t||(t=(0,j.Z)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 100%px;\n"]))),y=v.Z.label(r||(r=(0,j.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    font-size: ",";\n    transition: color 250ms;\n    & svg {\n        transition: fill 250ms;\n    }\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n    &:hover svg,\n    &:focus svg {\n        fill: ",";\n    }\n\n    &:nth-of-type(2) {\n        margin-bottom: 20px;\n    }\n"])),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.colors.hover}),(function(n){return n.theme.colors.hover})),A=v.Z.div(i||(i=(0,j.Z)(["\n    position: relative;\n    display: flex;\n"]))),z=v.Z.div(o||(o=(0,j.Z)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: #404040;\n    width: 33px;\n    height: 33px;\n    padding: 5px;\n"]))),_=(0,v.Z)(b.gN)(a||(a=(0,j.Z)(["\n    flex-grow: 1;\n    display: block;\n    margin: 0;\n    padding: 5px 33px 5px;\n    border: 1px solid grey;\n    border-radius: 4px;\n    font-size: 18px;\n"]))),S=v.Z.button(l||(l=(0,j.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    height: 40px;\n    border-radius: 4px;\n    font-size: 18px;\n    background-color: ",";\n    transition: color 250ms;\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.btn}),(function(n){return n.theme.colors.hover})),C=v.Z.span(c||(c=(0,j.Z)(["\n    font-size: ",";\n"])),(function(n){return n.theme.fontSizes.small})),$=s(6727),k=$.Ry().shape({email:$.Z_().matches(/^([A-Z0-9._%+-]{4,})+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,{message:"Invalid email address",test:function(n){return/^([A-Z0-9._%+-]{4,})+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n)}}).required("Invalid email address"),password:$.Z_().matches(/^[A-Z0-9!@#$%^&*]{8,16}$/i,{message:"The password must consist only of Latin letters, numbers and special characters. The length of the password is from 8 to 16",test:function(n){return/^[A-Z0-9!@#$%^&*]{8,16}$/i.test(n)}}).required("The password must consist only of Latin letters, numbers and special characters. The length of the password is from 8 to 16")}),L=$.Ry().shape({name:$.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]+(([' -][a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490 ])?[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]*)*$/,{message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",test:function(n){return/^[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]+(([' -][a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490 ])?[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]*)*$/.test(n)}}).nullable(!0).transform((function(n,e){return""===e.trim()?null:n})).required("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),email:$.Z_().matches(/^([A-Z0-9._%+-]{4,})+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,{message:"Invalid email address",test:function(n){return/^([A-Z0-9._%+-]{4,})+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n)}}).required("Invalid email address"),password:$.Z_().matches(/^[A-Z0-9!@#$%^&*]{8,16}$/i,{message:"The password must consist only of Latin letters, numbers and special characters. The length of the password is from 8 to 16",test:function(n){return/^[A-Z0-9!@#$%^&*]{8,16}$/i.test(n)}}).required("The password must consist only of Latin letters, numbers and special characters. The length of the password is from 8 to 16")}),T=s(4793),B=s(9434),E=s(6635),I=s(184),q=function(){var n=(0,B.I0)();return(0,I.jsx)(b.J9,{validationSchema:k,initialValues:{email:"",password:""},onSubmit:function(e,s){var t=s.resetForm;n((0,E.Sq)(e)),t()},children:function(n){var e=n.handleSubmit,s=n.handleChange;return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(w,{onSubmit:e,children:[(0,I.jsxs)(y,{children:["E-mail",(0,I.jsxs)(A,{children:[(0,I.jsx)(z,{children:(0,I.jsx)(Z.n,{w:23,h:23,use:"".concat(T.Z,"#icon-email")})}),(0,I.jsx)(_,{type:"email",name:"email",placeholder:"Enter e-mail",onChange:s})]}),(0,I.jsx)(b.Bc,{name:"email",children:function(n){return(0,I.jsx)(C,{children:n})}})]}),(0,I.jsxs)(y,{children:["Password",(0,I.jsxs)(A,{children:[(0,I.jsx)(z,{children:(0,I.jsx)(Z.n,{w:20,h:20,use:"".concat(T.Z,"#icon-key")})}),(0,I.jsx)(_,{type:"password",name:"password",placeholder:"Enter password",onChange:s})]}),(0,I.jsx)(b.Bc,{name:"password",children:function(n){return(0,I.jsx)(C,{children:n})}})]}),(0,I.jsxs)(S,{type:"submit",children:[(0,I.jsx)(Z.n,{w:20,h:20,use:"".concat(T.Z,"#icon-save-contact")}),"Sign In"]})]})})}})},N=(0,v.Z)(b.l0)(d||(d=(0,j.Z)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    max-width: 360px;\n"]))),F=v.Z.label(h||(h=(0,j.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    font-size: ",";\n    transition: color 250ms;\n    & svg {\n        transition: fill 250ms;\n    }\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n    &:hover svg,\n    &:focus svg {\n        fill: ",";\n    }\n\n    &:nth-of-type(3) {\n        margin-bottom: 20px;\n    }\n"])),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.colors.hover}),(function(n){return n.theme.colors.hover})),P=v.Z.div(u||(u=(0,j.Z)(["\n    position: relative;\n    display: flex;\n"]))),R=v.Z.div(m||(m=(0,j.Z)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #404040;\n    width: 33px;\n    height: 33px;\n    padding: 5px;\n"]))),J=(0,v.Z)(b.gN)(p||(p=(0,j.Z)(["\n    flex-grow: 1;\n    display: block;\n    margin: 0;\n    padding: 5px 33px 5px;\n    border: 1px solid grey;\n    border-radius: 4px;\n    font-size: 18px;\n"]))),M=v.Z.button(x||(x=(0,j.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    height: 40px;\n    border-radius: 4px;\n    font-size: 18px;\n    background-color: ",";\n    transition: color 250ms;\n    &:hover,\n    &:focus {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.btn}),(function(n){return n.theme.colors.hover})),V=v.Z.span(f||(f=(0,j.Z)(["\n    font-size: ",";\n"])),(function(n){return n.theme.fontSizes.small})),H=function(){var n=(0,B.I0)();return(0,I.jsx)(b.J9,{validationSchema:L,initialValues:{name:"",email:"",password:""},onSubmit:function(e,s){var t=s.resetForm;n((0,E.PH)(e)),t()},children:function(n){var e=n.handleSubmit,s=n.handleChange;return(0,I.jsxs)(N,{onSubmit:e,children:[(0,I.jsxs)(F,{children:["Name",(0,I.jsxs)(P,{children:[(0,I.jsx)(R,{children:(0,I.jsx)(Z.n,{w:23,h:23,use:"".concat(T.Z,"#icon-contact")})}),(0,I.jsx)(J,{type:"text",name:"name",placeholder:"Enter name",onChange:s})]}),(0,I.jsx)(b.Bc,{name:"name",children:function(n){return(0,I.jsx)(V,{children:n})}})]}),(0,I.jsxs)(F,{children:["E-mail",(0,I.jsxs)(P,{children:[(0,I.jsx)(R,{children:(0,I.jsx)(Z.n,{w:23,h:23,use:"".concat(T.Z,"#icon-email")})}),(0,I.jsx)(J,{type:"email",name:"email",placeholder:"Enter e-mail",onChange:s})]}),(0,I.jsx)(b.Bc,{name:"email",children:function(n){return(0,I.jsx)(V,{children:n})}})]}),(0,I.jsxs)(F,{children:["Password",(0,I.jsxs)(P,{children:[(0,I.jsx)(R,{children:(0,I.jsx)(Z.n,{w:20,h:20,use:"".concat(T.Z,"#icon-key")})}),(0,I.jsx)(J,{type:"password",name:"password",placeholder:"Enter password",onChange:s})]}),(0,I.jsx)(b.Bc,{name:"password",children:function(n){return(0,I.jsx)(V,{children:n})}})]}),(0,I.jsxs)(M,{type:"submit",children:[(0,I.jsx)(Z.n,{w:20,h:20,use:"".concat(T.Z,"#icon-save-contact")}),"Sign Up"]})]})}})},U=s(2791),W=function(){var n=(0,U.useRef)(),e=(0,U.useRef)(),s=(0,U.useRef)(),t=function(t){t.target.classList.contains("active")||(n.current.classList.toggle("active"),e.current.classList.toggle("active"),s.current.classList.toggle("toright"))};return(0,I.jsx)(g.$0,{children:(0,I.jsx)(g.W2,{children:(0,I.jsxs)(g.cX,{children:[(0,I.jsxs)(g.Z5,{children:[(0,I.jsx)(g.zx,{ref:n,onClick:t,className:"active",children:"Sign in"}),(0,I.jsx)(g.zx,{ref:e,onClick:t,children:"Sign up"})]}),(0,I.jsxs)(g.n5,{ref:s,children:[(0,I.jsx)(g.tP,{children:(0,I.jsx)(q,{})}),(0,I.jsx)(g.tP,{children:(0,I.jsx)(H,{})})]})]})})})}}}]);
//# sourceMappingURL=419.4774d7d1.chunk.js.map