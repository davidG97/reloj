(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},o={app:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),o=a.n(r);o.a},1:function(t,e){},"52a6":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[r("b-container",[r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-navbar-brand",{attrs:{href:"#/inicio"}},[r("img",{attrs:{alt:"Vue logo",src:a("cf05"),width:"55px"}}),t._v(" Reloj ")]),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{to:{name:"inicio"}}},[t._v("Inicio")]),r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("em",[t._v("Cuenta")])]},proxy:!0}])},[r("b-dropdown-item",{attrs:{href:"#/Login"}},[t._v("Registrese")]),r("b-dropdown-item",{attrs:{href:"#/Auth"}},[t._v("Ingrese")]),r("b-dropdown-item-button",{on:{click:t.salir}},[t._v("Salir")])],1)],1)],1)],1)],1),r("b-container",[r("router-view")],1)],1)},n=[],s={name:"app",data:function(){return{}},methods:{salir:function(){var t=this;console.log("Has salido"),localStorage.token=401,t.$router.push("/home")}}},i=s,c=(a("034f"),a("2877")),l=Object(c["a"])(i,o,n,!1,null,null,null),u=l.exports,d=a("8c4f"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("img",{attrs:{alt:"Vue logo",src:a("cf05"),width:"350px"}}),r("h1",[t._v(" Ingrese ")]),r("br"),305==t.state?r("div",[r("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[t._v(" Llene todos los campos para completar el registro ")])],1):306==t.state?r("div",[r("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[t._v(" contraseña incorrecta, intentelo de nuevo ")])],1):307==t.state?r("div",[r("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[t._v(" Correo incorrecto, intentelo de nuevo ")])],1):308==t.state?r("div",[r("b-alert",{attrs:{show:"",dismissible:"",variant:"danger"}},[t._v(" Error, verifique su cuenta para continuar ")])],1):400==t.state?r("div",[r("b-alert",{attrs:{show:"",dismissible:"",variant:"danger"}},[t._v(" Error, compruebe su conexion e intentelo de nuevo ")])],1):t._e(),r("br"),t._v(" Correo: "),r("b-form-input",{attrs:{type:"email",state:t.comprobarEmail,size:"sm",placeholder:"Escriba su correo electronico"},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}}),r("br"),t._v(" Contraseña: "),r("b-form-input",{attrs:{type:"password",state:t.comprobarPassword,size:"sm",placeholder:"Escriba su contraseña"},model:{value:t.userPassword,callback:function(e){t.userPassword=e},expression:"userPassword"}}),r("br"),r("b-button",{attrs:{variant:"outline-success"},on:{click:t.enviar}},[t._v("Ingrese")]),0==this.loading?r("div"):1==this.loading?r("div",[r("div",{staticClass:"clearfix"},[r("b-spinner",{staticClass:"float-right",attrs:{label:"Floated Right"}})],1)]):t._e(),r("br"),r("br")],1)},p=[],f={name:"auth",data:function(){return{state:"",userEmail:"",userPassword:"",loading:!1}},computed:{comprobarEmail:function(){return this.userEmail.length>0},comprobarPassword:function(){return this.userPassword.length>0}},methods:{enviar:function(){var t=this;t.loading=!0,console.log("enviado"),this.axios.post("/auth",{mail:this.userEmail,pass:this.userPassword}).then((function(e){t.state=e.data,e.data.length>6&&(console.log("token recibido"),localStorage.token=e.data,t.$router.push("/inicio"))})).catch((function(t){console.log("ERROR: "+t)}))}}},b=f,v=Object(c["a"])(b,m,p,!1,null,null,null),h=v.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 text-center"},[a("h1",[t._v(" Bienvenido ")]),a("br"),a("br"),a("b-col",[t._v(" temperatura: "+t._s(t.datos.temperatura)+" ")]),a("b-col",[a("div",[a("b-form",{attrs:{inline:""}},[a("label",{staticClass:"mr-sm-2",attrs:{for:"inline-form-custom-select-pref"}},[t._v("Hora")]),a("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{value:null,options:{"00":"00","01":"01","02":"02","03":"03","04":"04","05":"05","06":"06","07":"07","08":"08","09":"09",10:"10",11:"11",12:"12",13:"13",14:"14",15:"15",16:"16",17:"17",18:"18",19:"19",20:"20",21:"21",22:"22",23:"23"},id:"inline-form-custom-select-pref"},scopedSlots:t._u([{key:"first",fn:function(){return[a("option",{domProps:{value:null}},[t._v("Eliga una hora")])]},proxy:!0}])})],1)],1)])],1)},w=[],_=a("8055"),y=a.n(_),E={name:"Inicio",data:function(){return{socket:{},token:localStorage.token,datos:{temperatura:0}}},methods:{enviar:function(){this.axios.post("/inicio",{token:localStorage.token}).then((function(t){localStorage.token=t.data})).catch((function(t){console.log("ERROR: "+t)}))}},created:function(){this.enviar(),this.socket=y()("https://your-clock.herokuapp.com")},mounted:function(){var t=this;this.socket.on("datos",(function(e){t.datos=e,console.log(e)}))}},k=E,x=(a("775c"),Object(c["a"])(k,g,w,!1,null,"7e21766d",null)),C=x.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 text-center"},[a("b-img",{attrs:{center:"",src:"https://zero1.sg/img/accountlogin-icon.png",alt:"Center image",width:"175px"}}),a("br"),a("h1",[t._v(" Registrese ")]),a("br"),305==t.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[t._v(" Llene todos los campos para completar el registro ")])],1):304==t.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[t._v(" Usuario ya existente, intentelo de nuevo ")])],1):400==t.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"danger"}},[t._v(" Error, compruebe su conexion e intentelo de nuevo ")])],1):t._e(),a("br"),t._v(" Nombre: "),a("b-form-input",{attrs:{type:"text",state:t.comprobarName,size:"sm",placeholder:"Escriba su nombre completo"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),a("br"),t._v(" Correo: "),a("b-form-input",{attrs:{type:"email",state:t.comprobarEmail,size:"sm",placeholder:"Escriba su correo electronico"},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}}),a("br"),t._v(" Contraseña: "),a("b-form-input",{attrs:{type:"password",state:t.comprobarPassword,size:"sm",placeholder:"Escriba su contraseña"},model:{value:t.userPassword,callback:function(e){t.userPassword=e},expression:"userPassword"}}),a("br"),t._v(" Ciudad: "),a("b-form-input",{attrs:{type:"text",state:t.comprobarCity,size:"sm",placeholder:"Escriba su ciudad actual"},model:{value:t.userCity,callback:function(e){t.userCity=e},expression:"userCity"}}),a("br"),a("div",[a("b-button",{attrs:{variant:"outline-success"},on:{click:t.enviar}},[t._v("Registrarse")])],1),a("br"),a("br")],1)},R=[],O={name:"Login",data:function(){return{userName:"",userEmail:"",userPassword:"",userCity:"",state:"",token:""}},computed:{comprobarName:function(){return this.userName.length>0},comprobarEmail:function(){return this.userEmail.length>0},comprobarPassword:function(){return this.userPassword.length>0},comprobarCity:function(){return this.userCity.length>0}},methods:{enviar:function(){var t=this;console.log("enviado"),this.axios.post("/login",{mail:this.userEmail,pass:this.userPassword,name:this.userName,city:this.userCity}).then((function(e){console.log(e.data),t.state=e.data,300==e.data&&(alert("Usuario registrado correctamente, verifique su correo para autenticar su cuenta"),t.$router.push("/"))})).catch((function(t){console.log("ERROR: "+t)}))}}},j=O,S=Object(c["a"])(j,P,R,!1,null,null,null),$=S.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 text-center"},[305==t.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[t._v(" Llene todos los campos para completar el registro ")])],1):400==t.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"danger"}},[t._v(" Error, compruebe su conexion e intentelo de nuevo ")])],1):t._e(),a("br"),a("br"),t._v(" Correo: "),a("b-form-input",{attrs:{type:"email",size:"sm",placeholder:"Escriba su correo electronico"},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}}),a("br"),a("br"),a("div",[a("b-button",{attrs:{variant:"outline-success"},on:{click:t.enviar}},[t._v("Verificar")])],1)],1)},N=[],L={name:"Verify",data:function(){return{state:"",userEmail:""}},methods:{enviar:function(){var t=this;this.axios.post("/verify",{mail:this.userEmail}).then((function(e){console.log(e.data),t.state=e.data,310==e.data?(alert("Verificacion realizada correctamente, acceda a su cuenta"),t.$router.push("/")):309==e.data&&(alert("Esta cuenta ya ha sido verificada, acceda a su cuenta"),t.$router.push("/"))})).catch((function(t){console.log("ERROR: "+t)}))}}},I=L,V=Object(c["a"])(I,z,N,!1,null,null,null),M=V.exports,U=a("a7fe"),T=a.n(U),q=a("bc3a"),H=a.n(q);r["default"].use(T.a,H.a),H.a.defaults.baseURL="https://your-clock.herokuapp.com/api",r["default"].use(d["a"]);var J=new d["a"]({routes:[{path:"*",redirect:"/auth"},{path:"/",redirect:"/auth"},{path:"/login",name:"login",component:$,meta:{autentificado:!1}},{path:"/auth",name:"auth",component:h,meta:{autentificado:!1}},{path:"/inicio",name:"inicio",component:C,meta:{autentificado:!0}},{path:"/verify",name:"verify",component:M,meta:{autentificado:!1}}]});J.beforeEach((function(t,e,a){console.log(t);var r=t.matched.some((function(t){return t.meta.autentificado}));H.a.post("/token",{token:localStorage.token}).then((function(t){r&&0==t.data?a("auth"):r||1!=t.data?r&&1==t.data?a():r||0!=t.data||a():a()})).catch((function(t){console.log("ERROR: "+t)}))}));var A=J,B=a("2f62");r["default"].use(B["a"]);var F=new B["a"].Store({state:{},mutations:{},actions:{},modules:{}}),D=a("5f5b");a("f9e3"),a("2dd8");r["default"].use(D["a"]),r["default"].use(T.a,H.a),H.a.defaults.baseURL="https://your-clock.herokuapp.com/api",r["default"].config.productionTip=!1,new r["default"]({router:A,store:F,render:function(t){return t(u)}}).$mount("#app")},"775c":function(t,e,a){"use strict";var r=a("52a6"),o=a.n(r);o.a},"85ec":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.1e27fac4.js.map