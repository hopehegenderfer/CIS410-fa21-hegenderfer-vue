(function(e){function t(t){for(var a,s,o=t[0],l=t[1],i=t[2],b=0,d=[];b<o.length;b++)s=o[b],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&d.push(c[s][0]),c[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==c[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},c={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12a1":function(e,t,n){},3536:function(e,t,n){"use strict";n("4637")},4637:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={class:"container-fluid"},r={class:"row justify-content-center"},s={class:"col-md-10 col-lg-7"};function o(e,t,n,o,l,i){var u=Object(a["z"])("my-header"),b=Object(a["z"])("router-view");return Object(a["s"])(),Object(a["f"])(a["a"],null,[Object(a["j"])(u),Object(a["g"])("div",c,[Object(a["g"])("div",r,[Object(a["g"])("div",s,[Object(a["j"])(b)])])])],64)}var l=function(e){return Object(a["v"])("data-v-90bcc016"),e=e(),Object(a["t"])(),e},i={class:"navbar navbar-expand-lg navbar-light bg-light"},u={class:"container-fluid"},b=Object(a["i"])("Shoes Reviews"),d=l((function(){return Object(a["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["g"])("span",{class:"navbar-toggler-icon"})],-1)})),p={class:"collapse navbar-collapse",id:"navbarNav"},g={class:"navbar-nav ms-auto"},j={class:"nav-item"},m=Object(a["i"])("Shoes"),O={key:0,class:"nav-item"},h=Object(a["i"])("My Account"),v={key:1,class:"nav-item"},f=l((function(){return Object(a["g"])("button",{class:"btn btn-warning"},"Login",-1)})),y={key:2,class:"nav-item"},w=l((function(){return Object(a["g"])("button",{class:"btn btn-outline-warning text-dark"}," Sign Up ",-1)})),k={key:3,class:"nav-item"};function S(e,t,n,c,r,s){var o=Object(a["z"])("router-link");return Object(a["s"])(),Object(a["f"])("nav",i,[Object(a["g"])("div",u,[Object(a["j"])(o,{class:"navbar-brand",to:"/"},{default:Object(a["F"])((function(){return[b]})),_:1}),d,Object(a["g"])("div",p,[Object(a["g"])("ul",g,[Object(a["g"])("li",j,[Object(a["j"])(o,{class:"nav-link active","aria-current":"page",to:"/shoes"},{default:Object(a["F"])((function(){return[m]})),_:1})]),s.auth?(Object(a["s"])(),Object(a["f"])("li",O,[Object(a["j"])(o,{class:"nav-link active","aria-current":"page",to:"/account"},{default:Object(a["F"])((function(){return[h]})),_:1})])):Object(a["e"])("",!0),s.auth?Object(a["e"])("",!0):(Object(a["s"])(),Object(a["f"])("li",v,[Object(a["j"])(o,{class:"nav-link active","aria-current":"page",to:"/login"},{default:Object(a["F"])((function(){return[f]})),_:1})])),s.auth?Object(a["e"])("",!0):(Object(a["s"])(),Object(a["f"])("li",y,[Object(a["j"])(o,{class:"nav-link active","aria-current":"page",to:"/signup"},{default:Object(a["F"])((function(){return[w]})),_:1})])),s.auth?(Object(a["s"])(),Object(a["f"])("li",k,[Object(a["g"])("button",{class:"btn btn-warning",onClick:t[0]||(t[0]=function(){return s.onLogout&&s.onLogout.apply(s,arguments)})},"Logout")])):Object(a["e"])("",!0)])])])])}var x={computed:{auth:function(){return this.$store.state.token}},methods:{onLogout:function(){this.$store.dispatch("logout")}}},A=(n("db6b"),n("6b0d")),N=n.n(A);const U=N()(x,[["render",S],["__scopeId","data-v-90bcc016"]]);var R=U,C={name:"App",components:{"my-header":R},created:function(){this.$store.dispatch("getShoes")}};n("3536");const B=N()(C,[["render",o]]);var E=B,P=n("bc3a"),q=n.n(P),D=n("6c02"),F=Object(a["h"])('<h1>Welcome!</h1><div class="my-container-outer" id="hero-home" style="padding:100px 20px;background:linear-gradient(;"><h4>Shoe Preview</h4><div class="row"><div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel"><div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button></div><div class="carousel-inner"><div class="carousel-item active"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmA5HFjp-PUncRQ0I864053IBhym8TNYkDiA&amp;usqp=CAU" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>Nike Blazers</h5></div></div><div class="carousel-item"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0IG5y286JDVh4v8D6uyzjMrHvlYNFMOadA&amp;usqp=CAU" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>Converse High Tops</h5></div></div><div class="carousel-item"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcib-IjfjoK0yWih-N5u7lb4E0tnn2aLELQ&amp;usqp=CAU" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>Vans</h5></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div></div><hr><h4>About Shoes Reviews:</h4><br><p> Welcome to ShoesReviews.com! Go ahead and browse our shoes and let us know what you think about them! Sign in to leave a review, and if you don&#39;t have an account, sign up! Leave your honest opinion and help other users decide which sho is best to buy. Happy reviewing! </p><br><div class="row imagecards justify-content-center"><h2>Review these Shoes:</h2></div><div class="row imagecards justify-content-center"><div class="card" style="width:18rem;"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7Ix0rjkOyLc4UuoGHQweX-w-AwsZ4TgWRQ&amp;usqp=CAU" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title" style="color:rgba(26, 35, 126, 0.9);"> Nike Air Force 1&#39;s </h5><p class="card-text" style="color:black;"> Sign in to leave a review! </p></div></div><div class="card" style="width:18rem;"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkXdAAR8hFRDdXormAmerEo196PXwNjcQwg&amp;usqp=CAU" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title" style="color:rgba(26, 35, 126, 0.9);"> Timberland Boots </h5><p class="card-text" style="color:black;"> Sign in to leave a review! </p></div></div><div class="card" style="width:18rem;"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRix5lJ3hPpyv_974ANdt2KB7vc3SYaSZGLfg&amp;usqp=CAU" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title" style="color:rgba(26, 35, 126, 0.9);"> Adidas Ultra Boosts </h5><p class="card-text" style="color:black;"> Sign in to leave a review! </p></div></div><div class="card" style="width:18rem;"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSuQV56CD7_KzRgAxWKjgiouVH36L1hCX0A&amp;usqp=CAU" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title" style="color:rgba(26, 35, 126, 0.9);"> Ugg Boots </h5><p class="card-text" style="color:black;"> Sign in to leave a review! </p></div></div></div></div>',2),$=[F];function z(e,t,n,c,r,s){return Object(a["s"])(),Object(a["f"])("div",null,$)}var G={};const _=N()(G,[["render",z]]);var I=_,L=Object(a["g"])("h1",null,"Login",-1),M={key:0,class:"alert alert-success"},T={class:"mb-3"},V=Object(a["g"])("label",{for:"email-input",class:"form-label"},"Password",-1),H={class:"mb-3"},K=Object(a["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),Q=Object(a["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),W={key:0,class:"form-text text-danger"},X={key:1,class:"form-text text-danger"};function J(e,t,n,c,r,s){return Object(a["s"])(),Object(a["f"])("div",null,[L,this.$route.query.signupsuccess?(Object(a["s"])(),Object(a["f"])("div",M," Thanks for signing up! Please log in now. ")):Object(a["e"])("",!0),Object(a["g"])("form",{onSubmit:t[2]||(t[2]=Object(a["H"])((function(){return s.onSubmit&&s.onSubmit.apply(s,arguments)}),["prevent"]))},[Object(a["g"])("div",T,[V,Object(a["G"])(Object(a["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.email=e})},null,512),[[a["D"],r.email]])]),Object(a["g"])("div",H,[K,Object(a["G"])(Object(a["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.password=e})},null,512),[[a["D"],r.password]])]),Q,r.credentialsError?(Object(a["s"])(),Object(a["f"])("p",W," Invalid credentials ")):Object(a["e"])("",!0),e.loginError?(Object(a["s"])(),Object(a["f"])("p",X," Could not log you in, please try again later. ")):Object(a["e"])("",!0)],32)])}n("ac1f"),n("5319");var Y={data:function(){return{email:"",password:"",login:!1,credentialsError:!1}},methods:{onSubmit:function(){var e=this,t={email:this.email,password:this.password};q.a.post("/member/login",t).then((function(t){e.$store.commit("storeTokenInApp",t.data.token),e.$store.commit("storeUserInApp",t.data.user),e.$router.replace("/account")})).catch((function(t){console.log("error in /member/login",t),401==t.response.status?e.credentialsError=!0:e.loginError=!0}))}}};const Z=N()(Y,[["render",J]]);var ee=Z,te=(n("b0c0"),{class:"card"}),ne={class:"card-body"},ae={class:"text-primary"},ce=Object(a["g"])("br",null,null,-1),re=Object(a["i"])(" Shoe Size: "),se=Object(a["g"])("br",null,null,-1),oe=Object(a["i"])(" Shoe Price: "),le=Object(a["g"])("br",null,null,-1),ie=Object(a["g"])("br",null,null,-1),ue=Object(a["g"])("button",{class:"btn btn-success"},"Add a Review",-1),be=Object(a["g"])("button",{class:"btn btn-outline-success"}," Sign In to Add a Review ",-1),de=Object(a["g"])("br",null,null,-1),pe=Object(a["g"])("br",null,null,-1);function ge(e,t,n,c,r,s){var o=Object(a["z"])("router-link"),l=Object(a["z"])("router-view");return Object(a["s"])(),Object(a["f"])("div",null,[Object(a["g"])("div",te,[Object(a["g"])("div",ne,[Object(a["g"])("h2",ae,Object(a["B"])(s.shoe.name),1),ce,Object(a["g"])("p",null,[re,se,Object(a["g"])("strong",null,Object(a["B"])(s.shoe.size),1)]),Object(a["g"])("p",null,[oe,le,Object(a["g"])("strong",null,Object(a["B"])(s.formattedCost),1)])])]),ie,s.auth?(Object(a["s"])(),Object(a["d"])(o,{key:0,to:"/shoes/".concat(this.$route.params.pk,"/review")},{default:Object(a["F"])((function(){return[ue]})),_:1},8,["to"])):(Object(a["s"])(),Object(a["d"])(o,{key:1,to:"/login"},{default:Object(a["F"])((function(){return[be]})),_:1})),de,pe,Object(a["j"])(l)])}n("7db0"),n("d3b7");var je={computed:{shoe:function(){var e=this,t=this.$store.state.shoes,n=t.find((function(t){return t.shoeID==e.$route.params.pk}));return n},formattedCost:function(){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(this.shoe.cost)},auth:function(){return this.$store.state.token}}};const me=N()(je,[["render",ge]]);var Oe=me,he=Object(a["g"])("h1",null,"Shoes",-1),ve=Object(a["g"])("hr",null,null,-1),fe={class:"table"},ye=Object(a["g"])("thead",null,[Object(a["g"])("tr",null,[Object(a["g"])("th",null,"Name"),Object(a["g"])("th",null,"Size"),Object(a["g"])("th",null,"Cost"),Object(a["g"])("th")])],-1),we=Object(a["g"])("button",{class:"btn btn-primary"},"Details",-1);function ke(e,t,n,c,r,s){var o=Object(a["z"])("router-link");return Object(a["s"])(),Object(a["f"])("div",null,[he,ve,Object(a["g"])("table",fe,[ye,Object(a["g"])("tbody",null,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(s.theShoes,(function(e){return Object(a["s"])(),Object(a["f"])("tr",{key:e.shoeID},[Object(a["g"])("th",null,Object(a["B"])(e.name),1),Object(a["g"])("th",null,Object(a["B"])(e.size),1),Object(a["g"])("th",null,Object(a["B"])(e.cost),1),Object(a["g"])("th",null,[Object(a["j"])(o,{to:"/shoes/".concat(e.shoeID)},{default:Object(a["F"])((function(){return[we]})),_:2},1032,["to"])])])})),128))])])])}var Se={computed:{theShoes:function(){return this.$store.state.shoes}}};const xe=N()(Se,[["render",ke]]);var Ae=xe,Ne=Object(a["g"])("h1",null,"Not Found",-1),Ue=Object(a["g"])("h4",null,"Sorry, this page cannot be found",-1),Re=[Ne,Ue];function Ce(e,t,n,c,r,s){return Object(a["s"])(),Object(a["f"])("div",null,Re)}var Be={};const Ee=N()(Be,[["render",Ce]]);var Pe=Ee,qe={class:"row justify-content-center"},De={class:"col-lg-10"},Fe={class:"card"},$e={class:"card-body"},ze=Object(a["g"])("h4",null,"Create a Review",-1),Ge={class:"mb-3"},_e=Object(a["g"])("label",{for:"rating-input",class:"form-label"},"Score",-1),Ie={class:"mb-3"},Le=Object(a["g"])("label",{for:"summary-input",class:"form-label"},"Review",-1),Me=Object(a["g"])("button",{type:"submit",class:"btn btn-primary"}," Submit Review",-1),Te={key:0,class:"form-text text-danger"};function Ve(e,t,n,c,r,s){return Object(a["s"])(),Object(a["f"])("div",null,[Object(a["g"])("div",qe,[Object(a["g"])("div",De,[Object(a["g"])("div",Fe,[Object(a["g"])("div",$e,[ze,Object(a["g"])("form",{id:"review-form",onSubmit:t[3]||(t[3]=Object(a["H"])((function(){return s.submitReview&&s.submitReview.apply(s,arguments)}),["prevent"]))},[Object(a["g"])("div",Ge,[_e,Object(a["G"])(Object(a["g"])("input",{type:"number",class:"form-control",id:"rating-input",required:"",min:"1",max:"10","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.score=e})},null,512),[[a["D"],r.score]])]),Object(a["g"])("div",Ie,[Le,Object(a["G"])(Object(a["g"])("input",{type:"text",row:"3",class:"form-control",id:"summary-input",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.review=e})},null,512),[[a["D"],r.review]])]),Me,Object(a["g"])("button",{onClick:t[2]||(t[2]=function(){return s.cancelReview&&s.cancelReview.apply(s,arguments)}),type:"clear",class:"btn btn-outline-danger"}," Cancel "),r.errorMessage?(Object(a["s"])(),Object(a["f"])("p",Te,Object(a["B"])(r.errorMessage),1)):Object(a["e"])("",!0)],32)])])])])])}var He={data:function(){return{score:null,review:"",errorMessage:null}},methods:{submitReview:function(){var e=this,t={review:this.review,score:this.score,shoeFK:this.$route.params.pk};q.a.post("/ratings",t,{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(){e.$router.replace("/account")})).catch((function(){e.errorMessage="Unable to create a review. Please try again later."}))},cancelReview:function(){this.$router.go(-1)}}};n("7c38");const Ke=N()(He,[["render",Ve]]);var Qe=Ke,We=Object(a["g"])("h1",null,"Sign Up",-1),Xe={class:"mb-3"},Je=Object(a["g"])("label",{for:"fname-input",class:"form-label"},"First name",-1),Ye={class:"mb-3"},Ze=Object(a["g"])("label",{for:"lname-input",class:"form-label"},"Last name",-1),et={class:"mb-3"},tt=Object(a["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),nt={key:0,class:"text-danger"},at={class:"mb-3"},ct=Object(a["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),rt=Object(a["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),st={id:"error-signup",class:"text-danger"};function ot(e,t,n,c,r,s){return Object(a["s"])(),Object(a["f"])("div",null,[We,Object(a["g"])("form",{onSubmit:t[4]||(t[4]=Object(a["H"])((function(){return s.onSubmit&&s.onSubmit.apply(s,arguments)}),["prevent"]))},[Object(a["g"])("div",Xe,[Je,Object(a["G"])(Object(a["g"])("input",{type:"text",class:"form-control",id:"fname-input",required:"",placeholder:"First name","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.firstName=e})},null,512),[[a["D"],r.firstName]])]),Object(a["g"])("div",Ye,[Ze,Object(a["G"])(Object(a["g"])("input",{type:"text",class:"form-control",id:"lname-input",required:"",placeholder:"Last name","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.lastName=e})},null,512),[[a["D"],r.lastName]])]),Object(a["g"])("div",et,[tt,Object(a["G"])(Object(a["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.email=e})},null,512),[[a["D"],r.email]]),r.dupEmail?(Object(a["s"])(),Object(a["f"])("small",nt,"Please choose a different email")):Object(a["e"])("",!0)]),Object(a["g"])("div",at,[ct,Object(a["G"])(Object(a["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.password=e})},null,512),[[a["D"],r.password]])]),rt,Object(a["g"])("p",st,Object(a["B"])(r.errorMessage),1)],32)])}var lt={data:function(){return{firstName:"",lastName:"",email:"",password:"",errorMessage:"",dupEmail:!1}},methods:{onSubmit:function(){var e=this;console.log("form submitted");var t={firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password};console.log(t),q.a.post("/member",t).then((function(t){console.log("the response",t),e.$router.replace("/login?signupsuccess=true")})).catch((function(t){409===t.response.status?e.dupEmail=!0:e.errorMessage="Cannot sign you up. Please try again later."}))}}};const it=N()(lt,[["render",ot]]);var ut=it,bt=Object(a["g"])("h1",null,"Account",-1),dt=Object(a["g"])("hr",null,null,-1),pt={key:0,class:"text-danger"},gt={key:1,class:"table"},jt=Object(a["g"])("thead",null,[Object(a["g"])("th",null,"Title"),Object(a["g"])("th",null,"Summary"),Object(a["g"])("th",null,"Rating")],-1);function mt(e,t,n,c,r,s){var o=Object(a["z"])("router-link");return Object(a["s"])(),Object(a["f"])("div",null,[bt,dt,Object(a["g"])("h3",null,Object(a["B"])(s.firstName)+"'s Reviews",1),r.accountError?(Object(a["s"])(),Object(a["f"])("p",pt," Cannot get your account information. Please try again later. ")):Object(a["e"])("",!0),r.reviewsByUser?(Object(a["s"])(),Object(a["f"])("table",gt,[jt,Object(a["g"])("tbody",null,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(r.reviewsByUser,(function(e){return Object(a["s"])(),Object(a["f"])("tr",{key:e.review},[Object(a["g"])("th",null,[Object(a["j"])(o,{to:"/shoes/".concat(e.shoeFK)},{default:Object(a["F"])((function(){return[Object(a["i"])(Object(a["B"])(e.shoeFK),1)]})),_:2},1032,["to"])]),Object(a["g"])("th",null,Object(a["B"])(e.review),1),Object(a["g"])("th",null,Object(a["B"])(e.score),1)])})),128))])])):Object(a["e"])("",!0)])}var Ot={data:function(){return{reviewsByUser:null,accountError:!1}},computed:{firstName:function(){return console.log("here is the store so far",this.$store.state),this.$store.state.user.firstName}},created:function(){var e=this;q.a.get("/ratings/me",{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(t){console.log("here is the response",t),e.reviewsByUser=t.data})).catch((function(){e.accountError=!0}))}};const ht=N()(Ot,[["render",mt]]);var vt=ht,ft=n("5502"),yt=Object(ft["a"])({state:{token:null,user:null,shoes:[]},mutations:{storeTokenInApp:function(e,t){e.token=t},storeUserInApp:function(e,t){e.user=t},storeShoes:function(e,t){e.shoes=t},clearAuthData:function(e){e.token=null,e.user=null}},actions:{getShoes:function(e){var t=e.commit;q.a.get("/shoes").then((function(e){console.log("response in /shoes",e),t("storeShoes",e.data)}))},logout:function(e){var t=e.commit,n=e.state;q.a.post("/member/logout",null,{headers:{Authorization:"Bearer ".concat(n.token)}}).then((function(){t("clearAuthData"),kt.replace("/")})).catch((function(){console.log("error in logging out")}))}}}),wt=Object(D["a"])({history:Object(D["b"])(),routes:[{path:"/",component:I},{path:"/account",component:vt,beforeEnter:function(e,t,n){yt.state.token?n():n("/login")}},{path:"/login",component:ee},{path:"/shoes",component:Ae},{path:"/shoes/:pk",component:Oe,children:[{path:"review",component:Qe}]},{path:"/signup",component:ut},{path:"/:invalidroute(.*)",component:Pe}]}),kt=wt;q.a.defaults.baseURL="https://cis410-fa21-hender.azurewebsites.net";var St=Object(a["c"])(E);St.use(kt),St.use(yt),St.mount("#app")},"67b3":function(e,t,n){},"7c38":function(e,t,n){"use strict";n("12a1")},db6b:function(e,t,n){"use strict";n("67b3")}});
//# sourceMappingURL=app.cf98b35a.js.map