(this["webpackJsonptask-no-2"]=this["webpackJsonptask-no-2"]||[]).push([[0],{14:function(e,n,t){e.exports=t.p+"static/media/backgroundApp.8f5e10da.jpg"},17:function(e,n,t){e.exports=t(24)},24:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),c=t.n(o),i=t(4),u=t(9),l=t(10),m=t(16),s=t(15),p=t(1),f=t(2),d="375px",h="425px",b="768px",x="1024px",g="1440px",v="2560px",k={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(d,")"),mobileL:"(min-width: ".concat(h,")"),tablet:"(min-width: ".concat(b,")"),laptop:"(min-width: ".concat(x,")"),laptopL:"(min-width: ".concat(g,")"),desktop:"(min-width: ".concat(v,")"),desktopL:"(min-width: ".concat(v,")")};function w(){var e=Object(p.a)(["\n  ",";\n"]);return w=function(){return e},e}function E(){var e=Object(p.a)(["\n  ",";\n"]);return E=function(){return e},e}function V(){var e=Object(p.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 175px;\n  height: 45px;\n  transform: translate(-50%, -50%) rotate(0deg);\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 100px;\n  cursor: pointer;\n  transition: 0.2s linear;\n  outline: none;\n"]);return V=function(){return e},e}function O(){var e=Object(p.a)(["\n  position: relative;\n  top: 50%;\n  left: 50%;\n  width: 175px;\n  height: 45px;\n  transform: translate(-50%, -50%);\n  border: none;\n  background-color: transparent;\n  font-size: 1.3rem;\n  text-transform: uppercase;\n  color: white;\n  cursor: pointer;\n  z-index: 1;\n  outline: none;\n\n  &:hover ~ .spanEffect {\n    transform: translate(-50%, -50%) rotate(-45deg);\n  }\n\n  &:hover ~ .spanEffect1 {\n    transform: translate(-50%, -50%) rotate(45deg);\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(p.a)(["\n  position: relative;\n  margin-bottom: 40px;\n  overflow: hidden;\n"]);return j=function(){return e},e}var y=f.c.div(j()),F=f.c.button(O()),C=Object(f.b)(V()),z=f.c.span(E(),C),S=f.c.span(w(),C);var R=function(e){var n=e.validateFormFunc;return r.a.createElement(y,null,r.a.createElement(F,{onClick:function(e){return n(e)}},"Send"),r.a.createElement(z,{className:"spanEffect"}),r.a.createElement(S,{className:"spanEffect1"}))};function I(){var e=Object(p.a)(["\n  width: 100px;\n  height: 100px;\n  background-size: cover;\n  border: 2px solid #222;\n  margin: 0 auto 10px;\n"]);return I=function(){return e},e}function M(){var e=Object(p.a)(["\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  background-color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  margin: auto 0;\n  font-size: 1.6rem;\n  color: ",";\n  opacity: ",";\n  transition: 0.4s;\n"]);return M=function(){return e},e}function _(){var e=Object(p.a)(["\n  width: 85%;\n  margin: ",";\n  font-size: 13px;\n  font-weight: 600;\n  margin-top: 5px;\n"]);return _=function(){return e},e}function A(){var e=Object(p.a)(["\n  width: ",";\n  max-width: 400px;\n  margin: ",";\n  padding: 10px 15px;\n  border-radius: 100px;\n  border: 2px solid transparent;\n  transition: 0.1s;\n\n  &:focus {\n    border: ",";\n  }\n"]);return A=function(){return e},e}function T(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  height: 100vh;\n  min-height: 700px;\n  min-width: 300px;\n  max-width: 500px;\n  background-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 0 10px 1px #111;\n  padding: 20px 0px;\n  z-index: 2;\n\n  @media "," {\n    left: 75%;\n  }\n"]);return T=function(){return e},e}var X=f.c.form(T(),k.laptop),D=f.c.input(A(),(function(e){return e.checkBoxInput?"auto":"90%"}),(function(e){return e.checkBoxInput?"0 5px":"5px auto 15px"}),(function(e){return e.disabledFocus?"2px solid transparent":"2px solid #222"})),N=f.c.label(_(),(function(e){return e.biggerMargin?"7.5px auto":"0 auto"})),B=f.c.h2(M(),(function(e){return e.fontColor?"#61BD4F":"#CF513D"}),(function(e){return e.opacity?1:0})),L=f.c.div(I());var U=function(e){var n=e.formInputsChangeFunc,t=e.validateFormFunc,a=e.nameValue,o=e.mailValue,c=e.phoneValue,i=e.numberValue,u=e.checkboxOne,l=e.checkboxTwo,m=e.formResultMessage,s=e.formSendResult,p=e.file;return r.a.createElement(X,{className:"form"},r.a.createElement(N,{htmlfor:"name"},"Name*"),r.a.createElement(D,{placeholder:"e.g. Mateusz",id:"name",name:"nameValue",value:a,onChange:function(e){return n(e)}}),r.a.createElement(N,{htmlfor:"mail"},"E-mail*"),r.a.createElement(D,{placeholder:"example@example.pl",id:"mail",name:"mailValue",value:o,onChange:function(e){return n(e)}}),r.a.createElement(N,{htmlfor:"phone"},"Phone*"),r.a.createElement(D,{placeholder:"+48 XXX XXX XXX",id:"phone",name:"phoneValue",value:c,onChange:function(e){return n(e)}}),r.a.createElement(N,{htmlfor:"number"},"Number*"),r.a.createElement(D,{placeholder:"Number 0 to 9, 4-6 digits",id:"number",name:"numberValue",value:i,onChange:function(e){return n(e)}}),r.a.createElement(N,{htmlfor:"upload"},"Image Upload*"),r.a.createElement(D,{disabledFocus:!0,type:"file",id:"upload",name:"uploadValue",onChange:function(e){return n(e)}}),r.a.createElement(L,{style:{backgroundImage:"url(".concat(p,")")}}),r.a.createElement(N,{htmlfor:"checkboxOne",biggerMargin:!0},"Do You wanna send this form?*",r.a.createElement(D,{disabledFocus:!0,checkBoxInput:!0,type:"checkbox",id:"checkboxOne",name:"checkboxOne",checked:u,onChange:function(e){return n(e)}})),r.a.createElement(N,{htmlfor:"checkboxTwo",biggerMargin:!0},"...But Do You realy want it?*",r.a.createElement(D,{disabledFocus:!0,checkBoxInput:!0,autocomplete:"off",type:"checkbox",id:"checkboxTwo",name:"checkboxTwo",checked:l,onChange:function(e){return n(e)}})),r.a.createElement(B,{opacity:m,fontColor:s},m),r.a.createElement(R,{validateFormFunc:t}))},$=function(e){var n=document.querySelector(".form"),t="data:text/csv;charset=utf-16,"+e.map((function(e){return e})).join("\n"),a=encodeURI(t),r=document.createElement("a");r.setAttribute("href",a),r.setAttribute("download","form_data.csv"),r.setAttribute("class","csvLink"),r.textContent="Download form CSV file",n.appendChild(r)},J=function(e){Object(m.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={nameValue:"",mailValue:"",phoneValue:"",numberValue:"",uploadValue:"",file:null,checkboxOne:!1,checkboxTwo:!1,formResultMessage:"",formSendResult:!1},e.formInputsChangeFunc=function(n){var t=n.target;"file"===t.type?0!==t.files.length&&e.setState({uploadValue:t.files[0],file:URL.createObjectURL(t.files[0])}):"checkbox"===t.type?e.setState(Object(i.a)({},t.name,t.checked)):e.setState(Object(i.a)({},t.name,t.value))},e.validateFormFunc=function(n){n.preventDefault();var t=e.state,a=t.nameValue,r=t.mailValue,o=t.phoneValue,c=t.numberValue,i=t.uploadValue,u=t.checkboxOne,l=t.checkboxTwo;if(""!==a&&/^([a-zA-Z\u0119\xf3\u0142\u015b\u0105\u017c\u017a\u0107\u0144]{3,})@([a-zA-Z\u0119\xf3\u0142\u015b\u0105\u017c\u017a\u0107\u0144]{3,})\.pl$/.test(r)&&/^(\+48)\s([0-9]{3})\s([0-9]{3})\s([0-9]{3})$/.test(o)&&/^([0-9]{4,6})$/.test(c)&&10485760>i.size&&"image/jpeg"===i.type&&u&&l){var m=[a,r,o,c,i.name];$(m),e.setState({formResultMessage:"Form has been sent successfully!",formSendResult:!0,nameValue:"",mailValue:"",phoneValue:"",numberValue:"",checkboxOne:!1,checkboxTwo:!1,file:null})}else e.setState({formResultMessage:"Ups! Need correct the data in form!"});setTimeout((function(){e.setState({formResultMessage:"",formSendResult:!1})}),3e3)},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,n=e.nameValue,t=e.mailValue,a=e.phoneValue,o=e.numberValue,c=e.formResultMessage,i=e.formSendResult,u=e.file,l=e.checkboxOne,m=e.checkboxTwo;return r.a.createElement(U,{formInputsChangeFunc:this.formInputsChangeFunc,validateFormFunc:this.validateFormFunc,nameValue:n,mailValue:t,phoneValue:a,numberValue:o,checkboxOne:l,checkboxTwo:m,formResultMessage:c,formSendResult:i,file:u})}}]),t}(a.Component);function P(){var e=Object(p.a)(["\n  text-decoration: none;\n  transition: 0.2s linear;\n  color: #aaa;\n\n  &:hover {\n    color: #fff;\n  }\n"]);return P=function(){return e},e}function Y(){var e=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.1);\n  padding: 5px 5px;\n  color: #aaa;\n  z-index: 5;\n"]);return Y=function(){return e},e}var Z=f.c.div(Y()),q=f.c.a(P());var H=function(){return r.a.createElement(Z,null,"Image"," ",r.a.createElement(q,{href:"https://pixabay.com/pl/users/DarkmoonArt_de-1664300/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3561710"}," ","DarkmoonArt_de")," ","from"," ",r.a.createElement(q,{href:"https://pixabay.com/pl/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3561710"}," ","Pixabay"))};var G=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(J,null),r.a.createElement(H,null))},K=t(14),Q=t.n(K);function W(){var e=Object(p.a)(["\n  * {\n    margin:0;\n    padding:0;\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing:border-box;\n    border:none;\n    outline:0;\n  }\n\n  html{\n    font-size:10px;\n  }\n\n  body{\n    position:relative;\n    min-height:100vh;\n    background-image: url(",');\n    background-position:center;\n    background-size:cover;\n    z-index:0;\n\n    &:before{\n  content: "";\n  position: absolute;\n  width:50%;\n  height:100%;\n  background-color: rgba(100,100,100,0.3);\n  box-shadow: 0 0 15px 1px black;\n  z-index:1 \n    }\n  }\n\n  .app{\n    position:relative;\n    min-height:100vh;\n  }\n\n  .csvLink{\n    position:absolute;\n    bottom:0;\n    width:100%;\n    height: 25px;\n    line-height:25px;\n    text-align:center;\n    font-size:1.2rem;\n    background-color: rgba(0, 0, 0, 0.6);\n    color:#fff;\n    text-decoration:none;\n  }\n']);return W=function(){return e},e}var ee=Object(f.a)(W(),Q.a);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null),r.a.createElement(G,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.35873a40.chunk.js.map