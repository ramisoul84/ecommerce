import{a as D,d as K,e as Q,f as ee,h as te,i as ne,k as ie,l as oe,m as re,n as ce,o as le}from"./chunk-VGIKIMWI.js";import{$ as a,D as N,F as s,G as C,K as f,M as d,N as U,O as I,P as i,Q as o,R as m,U as y,V as p,W as u,aa as g,ba as w,d as x,ea as R,ja as q,ka as O,la as v,ma as Y,n as k,o as E,oa as W,pa as X,q as G,qa as Z,s as _,t as T,ta as J,va as j,w as b,wa as $,x as S,y as z,z as B}from"./chunk-GC2W3DRD.js";var ae=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=_({type:e,selectors:[["app-home"]],decls:11,vars:0,consts:[[1,"home"],[1,"grid1"],["src","https://www.next.co.uk/nxtcms/resource/blob/6216834/1765c22c180cfe0676249970f369061d/08-08-24-hero-default-dt-new-data.jpg","alt",""],[1,"grid2"],["src","https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemZoom/840164s.jpg","alt",""],[1,"grid3"],["src","https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/254215s.jpg","alt",""],[1,"grid4"],["src","https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/424560s.jpg","alt",""],[1,"grid5"],["src","https://cdn.shopify.com/s/files/1/2303/2711/files/Fashion_Photography_for_E-Commerce_How_to_Capture_Your_Model_and_Clothing_in_the_Best_Light_2.jpg?v=1684706557","alt",""]],template:function(r,c){r&1&&(i(0,"div",0)(1,"div",1),m(2,"img",2),o(),i(3,"div",3),m(4,"img",4),o(),i(5,"div",5),m(6,"img",6),o(),i(7,"div",7),m(8,"img",8),o(),i(9,"div",9),m(10,"img",10),o()())},styles:[".home[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:.2rem}.home[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.home[_ngcontent-%COMP%]   .grid1[_ngcontent-%COMP%]{grid-column:1/4}.home[_ngcontent-%COMP%]   .grid2[_ngcontent-%COMP%]{grid-column:1/2;grid-row:2}.home[_ngcontent-%COMP%]   .grid3[_ngcontent-%COMP%]{grid-column:2/3;grid-row:2}.home[_ngcontent-%COMP%]   .grid4[_ngcontent-%COMP%]{grid-column:3/4;grid-row:2}.home[_ngcontent-%COMP%]   .grid5[_ngcontent-%COMP%]{grid-column:1/4;grid-row:3}"]});let t=e;return t})();var A=(()=>{let e=class e{setGender(n){localStorage.setItem("gender",n)}getGender(){return localStorage.getItem("gender")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var P=(()=>{let e=class e{constructor(n){this.storage=n,this.filterShown=new x(!1),this.gender=new x(this.storage.getGender()?this.storage.getGender():"UNDEFINED"),this.gender$=this.gender.asObservable(),this.productSelected=new x(void 0),this.productSelected$=this.productSelected.asObservable(),this.filter=new x(null),this.filter$=this.filter.asObservable()}toggleFilter(){this.filterShown.next(!this.filterShown.value)}setFilter(n){this.filter.next(n)}selectGender(n){this.gender.next(n)}selectProduct(n){this.productSelected.next(n)}};e.\u0275fac=function(r){return new(r||e)(G(A))},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var xe=t=>({lineThrough:t});function be(t,e){if(t&1&&(i(0,"div",13),a(1),o()),t&2){let l=u().$implicit;s(),w(" ",((l.priceAfterDiscount-l.price)/l.price*100).toFixed(0)," % ")}}function Se(t,e){if(t&1&&m(0,"img",14),t&2){let l=u().$implicit;d("src",l.imagesUrl[0],N)("alt",l.title)}}function ye(t,e){if(t&1){let l=y();i(0,"div",2),p("click",function(){let r=b(l).$implicit,c=u();return S(c.selectProduct(r))}),i(1,"div",3),f(2,be,2,1,"div",4)(3,Se,1,2,"img",5),o(),i(4,"div",6)(5,"div",7)(6,"p",8),a(7),o(),i(8,"p",9),a(9),o(),i(10,"span",10),a(11,"SYP"),o()(),i(12,"p",11),a(13),o(),i(14,"p",12),a(15),o()()()}if(t&2){let l=e.$implicit;s(2),d("ngIf",l.priceAfterDiscount),s(),d("ngIf",l.imagesUrl),s(3),d("ngClass",R(7,xe,l.priceAfterDiscount)),s(),w(" ",l.price," "),s(2),g(l.priceAfterDiscount),s(4),g(l.brand),s(2),g(l.category)}}var me=(()=>{let e=class e{constructor(n,r){this.filterService=n,this.api=r}ngOnInit(){this.filterService.gender$.subscribe(n=>{this.genderSelected=n;let r={gender:this.genderSelected};this.filterService.filter$.subscribe(c=>{this.filter=c,this.api.getAllProducts(r).subscribe(h=>{this.products=h})})})}selectProduct(n){this.filterService.selectProduct(n)}};e.\u0275fac=function(r){return new(r||e)(C(P),C(D))},e.\u0275cmp=_({type:e,selectors:[["app-products"]],decls:2,vars:1,consts:[[1,"products"],["class","product","routerLink","/product",3,"click",4,"ngFor","ngForOf"],["routerLink","/product",1,"product",3,"click"],[1,"product-image"],["class","discount",4,"ngIf"],[3,"src","alt",4,"ngIf"],[1,"product-details"],[1,"product-price"],[1,"price",3,"ngClass"],[1,"priceAfterDiscount"],[1,"currency"],[1,"product-brand"],[1,"product-category"],[1,"discount"],[3,"src","alt"]],template:function(r,c){r&1&&(i(0,"div",0),f(1,ye,16,9,"div",1),o()),r&2&&(s(),d("ngForOf",c.products))},dependencies:[q,O,v,j],styles:[".products[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{width:calc((100vw - 3rem)/2);cursor:pointer}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]:hover{box-shadow:0 0 2px #ff4500}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]{position:relative}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%]{position:absolute;background-color:#ff4500;color:#fff;font-size:.8rem;padding:0 .4rem}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]{display:inline-flex}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{color:#ff4500;font-weight:700;padding-right:.2rem}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .priceAfterDiscount[_ngcontent-%COMP%]{color:#ff4500;font-weight:700}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]{font-size:.6rem;font-weight:700;margin-left:.4rem}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .lineThrough[_ngcontent-%COMP%]{color:#000;text-decoration:line-through}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-brand[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;word-wrap:break-word}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%]{font-size:.8rem;word-wrap:break-word}@media screen and (min-width: 1000px){.products[_ngcontent-%COMP%]{grid-template-columns:repeat(6,1fr)}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{width:calc((100vw - 9rem) / 6)}}"]});let t=e;return t})();var F=(()=>{let e=class e{constructor(){this.cart=new x([])}addToCart(n,r,c){let h=this.cart.value,Oe={title:n.title,color:r,size:c,price:n.priceAfterDiscount?n.priceAfterDiscount:n.price},ve=[...h,Oe];this.cart.next(ve)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function we(t,e){if(t&1){let l=y();i(0,"div",7),p("click",function(){let r=b(l).$implicit,c=u();return S(c.setSize(r))}),a(1),o()}if(t&2){let l=e.$implicit;s(),w(" ",l," ")}}function ke(t,e){if(t&1){let l=y();i(0,"div",8),p("click",function(){let r=b(l).$implicit,c=u();return S(c.setColor(r))}),o()}if(t&2){let l=e.$implicit;U("background-color",l)}}var pe=(()=>{let e=class e{constructor(n,r){this.filterService=n,this.cartService=r}ngOnInit(){this.filterService.productSelected$.subscribe(n=>{this.product=n})}setColor(n){this.color=n}setSize(n){this.size=n}addToCart(n){if(!this.color){alert("choose a color");return}if(!this.size){alert("choose a size");return}this.cartService.addToCart(n,this.color,this.size)}};e.\u0275fac=function(r){return new(r||e)(C(P),C(F))},e.\u0275cmp=_({type:e,selectors:[["app-product"]],decls:18,vars:5,consts:[[1,"product"],["alt","",3,"src"],[1,"sizes"],["class","size",3,"click",4,"ngFor","ngForOf"],[1,"colors"],["class","color",3,"backgroundColor","click",4,"ngFor","ngForOf"],[3,"click"],[1,"size",3,"click"],[1,"color",3,"click"]],template:function(r,c){r&1&&(i(0,"div",0),m(1,"img",1),i(2,"p"),a(3),o(),i(4,"p"),a(5),i(6,"span"),a(7,"SYP"),o()(),i(8,"p"),a(9,"Available Sizes"),o(),i(10,"div",2),f(11,we,2,1,"div",3),o(),i(12,"p"),a(13,"Available Colors"),o(),i(14,"div",4),f(15,ke,1,2,"div",5),o(),i(16,"button",6),p("click",function(){return c.addToCart(c.product)}),a(17,"Add to cart"),o()()),r&2&&(s(),d("src",c.product==null?null:c.product.imagesUrl,N),s(2),g(c.product==null?null:c.product.title),s(2),g(c.product==null?null:c.product.price),s(6),d("ngForOf",c.product==null?null:c.product.sizes),s(4),d("ngForOf",c.product==null?null:c.product.colors))},dependencies:[O],styles:[".product[_ngcontent-%COMP%]{margin-top:6rem;display:flex;flex-direction:column;grid-template-columns:1fr 1fr}.product[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.product[_ngcontent-%COMP%]   .sizes[_ngcontent-%COMP%]{display:flex;gap:1rem}.product[_ngcontent-%COMP%]   .sizes[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:2rem;height:2rem;background-color:#d3d3d3}.product[_ngcontent-%COMP%]   .sizes[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]:checked{background-color:red}.product[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]{display:flex;gap:1rem}.product[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:2rem;height:2rem;border:1px solid black}.product[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:1rem;background-color:tomato;border:none;outline:none;padding:.4rem 0;border-radius:1rem}"]});let t=e;return t})();function Fe(t,e){if(t&1&&(i(0,"tr")(1,"td"),a(2),o(),i(3,"td"),a(4),o(),i(5,"td"),a(6),o(),i(7,"td"),a(8),o()()),t&2){let l=e.$implicit;s(2),g(l.title),s(2),g(l.color),s(2),g(l.size),s(2),g(l.price)}}function Ie(t,e){if(t&1&&(i(0,"table",2)(1,"tr")(2,"th"),a(3,"Items"),o(),i(4,"td"),a(5),o()(),i(6,"tr")(7,"th"),a(8,"Sum"),o(),i(9,"td"),a(10),o()()()),t&2){let l=u();s(5),g(l.cart.length),s(5),w("",l.sum(l.cart)," SYP")}}var ge=(()=>{let e=class e{constructor(n){this.cartService=n}ngOnInit(){this.cartService.cart.subscribe(n=>this.cart=n)}sum(n){let r=0;return n.map(c=>{r+=c.price}),r}};e.\u0275fac=function(r){return new(r||e)(C(F))},e.\u0275cmp=_({type:e,selectors:[["app-cart"]],decls:14,vars:2,consts:[[4,"ngFor","ngForOf"],["class","result",4,"ngIf"],[1,"result"]],template:function(r,c){r&1&&(i(0,"table")(1,"thead")(2,"th"),a(3,"Title"),o(),i(4,"th"),a(5,"Color"),o(),i(6,"th"),a(7,"Size"),o(),i(8,"th"),a(9,"Price"),o()(),i(10,"tbody"),f(11,Fe,9,4,"tr",0),o()(),m(12,"br"),f(13,Ie,11,2,"table",1)),r&2&&(s(11),d("ngForOf",c.cart),s(2),d("ngIf",c.cart.length>0))},dependencies:[O,v],styles:["table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:#000;color:#fff}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;font-size:.8rem}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd){background-color:#d3d3d3}.result[_ngcontent-%COMP%]{border-collapse:separate}.result[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .result[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:left;background-color:#fff}"]});let t=e;return t})();var Ee=[{path:"",component:ae},{path:"",loadChildren:()=>import("./chunk-UJS3RJR6.js").then(t=>t.AccountModule)},{path:"",loadChildren:()=>import("./chunk-UD6F3DKP.js").then(t=>t.AdminModule)},{path:"products",component:me},{path:"product",component:pe},{path:"cart",component:ge}],fe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=T({type:e}),e.\u0275inj=E({imports:[$.forRoot(Ee),$]});let t=e;return t})();function Te(t,e){if(t&1&&(i(0,"p",12),a(1),o()),t&2){let l=u();s(),g(l.qtn)}}function ze(t,e){if(t&1){let l=y();i(0,"div",13),z(),i(1,"svg",14),m(2,"path",15),o(),i(3,"svg",16),p("click",function(){b(l);let r=u();return S(r.toggleFilter())}),m(4,"path",17),o()()}}var ue=(()=>{let e=class e{constructor(n,r,c){this.filterService=n,this.cartService=r,this.storage=c}ngOnInit(){this.filterService.gender$.subscribe(n=>this.gender=n),this.cartService.cart.subscribe(n=>this.qtn=n.length)}toggleFilter(){this.filterService.toggleFilter()}selectGender(n){this.storage.setGender(n),this.filterService.selectGender(n)}};e.\u0275fac=function(r){return new(r||e)(C(P),C(F),C(A))},e.\u0275cmp=_({type:e,selectors:[["app-header"]],decls:19,vars:6,consts:[[1,"upper-header"],["routerLink","",1,"logo",3,"click"],[1,"icons"],[1,"cart"],["src","assets/icons/cart.png","alt","cart-icon","routerLink","cart",1,"icon"],["class","qtn","aria-hidden","true",4,"ngIf"],["src","assets/icons/admin.png","alt","admin-icon","routerLink","admin",1,"icon"],["src","assets/icons/person.png","alt","person-icon","routerLink","login",1,"icon"],[1,"lower-header"],[1,"category"],["routerLink","products",1,"btn",3,"click"],["class","filter",4,"ngIf"],["aria-hidden","true",1,"qtn"],[1,"filter"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 16 16",1,"icon"],["fill-rule","evenodd","d","M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 16 16",1,"icon",3,"click"],["fill-rule","evenodd","d","M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"]],template:function(r,c){r&1&&(i(0,"header")(1,"div",0)(2,"div",1),p("click",function(){return c.selectGender("UNDEFINED")}),a(3," SAN"),i(4,"span"),a(5,"jwan"),o()(),i(6,"div",2)(7,"div",3),m(8,"img",4),f(9,Te,2,1,"p",5),o(),m(10,"img",6)(11,"img",7),o()(),i(12,"div",8)(13,"div",9)(14,"button",10),p("click",function(){return c.selectGender("WOMEN")}),a(15," Women "),o(),i(16,"button",10),p("click",function(){return c.selectGender("MEN")}),a(17," Men "),o()(),f(18,ze,5,0,"div",11),o()()),r&2&&(s(9),d("ngIf",c.qtn>0),s(5),I("active",c.gender==="WOMEN"),s(2),I("active",c.gender==="MEN"),s(2),d("ngIf",c.gender!=="UNDEFINED"))},dependencies:[v,j],styles:["header[_ngcontent-%COMP%]{position:fixed;top:0;right:0;left:0;z-index:1}header[_ngcontent-%COMP%]   .upper-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:2.8rem;padding:0 1rem;background-color:#fff}header[_ngcontent-%COMP%]   .upper-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:2rem;cursor:pointer}header[_ngcontent-%COMP%]   .upper-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8rem}header[_ngcontent-%COMP%]   .upper-header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]{display:flex;gap:.6rem}header[_ngcontent-%COMP%]   .upper-header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{fill:#000;height:1.6rem;cursor:pointer}header[_ngcontent-%COMP%]   .upper-header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]{position:relative}header[_ngcontent-%COMP%]   .upper-header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .qtn[_ngcontent-%COMP%]{position:absolute;top:0;right:-5px;width:1.2rem;height:1.2rem;border-radius:1.2rem;background-color:red;display:flex;justify-content:center;align-items:center}header[_ngcontent-%COMP%]   .lower-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:1.2rem;background-color:#000;height:2.8rem;padding:0 1rem}header[_ngcontent-%COMP%]   .lower-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{display:flex}header[_ngcontent-%COMP%]   .lower-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:#000;outline:none;border:none;cursor:pointer;font-size:1.2rem;height:2.8rem;width:4.8rem;text-align:center;color:#fff;transition:.2s ease}header[_ngcontent-%COMP%]   .lower-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#fff;color:#000}header[_ngcontent-%COMP%]   .lower-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%]{background-color:tomato;color:#000}header[_ngcontent-%COMP%]   .lower-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{display:flex;gap:1rem}header[_ngcontent-%COMP%]   .lower-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1.6rem;fill:#fff;cursor:pointer}header[_ngcontent-%COMP%]   .lower-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover{fill:tomato}"]});let t=e;return t})();function je(t,e){if(t&1&&(i(0,"option",14),a(1),o()),t&2){let l=e.$implicit;d("value",l),s(),g(l)}}function De(t,e){if(t&1&&(i(0,"select",12),f(1,je,2,2,"option",13),o()),t&2){let l=u();s(),d("ngForOf",l.brand)}}function Ae(t,e){if(t&1&&(i(0,"option",14),a(1),o()),t&2){let l=e.$implicit;d("value",l),s(),g(l)}}function Le(t,e){if(t&1&&(i(0,"select",15),f(1,Ae,2,2,"option",13),o()),t&2){let l=u();s(),d("ngForOf",l.category)}}function Ve(t,e){if(t&1&&(i(0,"option",14),a(1),o()),t&2){let l=e.$implicit;d("value",l),s(),g(l)}}function $e(t,e){if(t&1&&(i(0,"select",16),f(1,Ve,2,2,"option",13),o()),t&2){let l=u();s(),d("ngForOf",l.color)}}function He(t,e){if(t&1&&(i(0,"option",14),a(1),o()),t&2){let l=e.$implicit;d("value",l),s(),g(l)}}function Ge(t,e){if(t&1&&(i(0,"select",17),f(1,He,2,2,"option",13),o()),t&2){let l=u();s(),d("ngForOf",l.size)}}var _e=(()=>{let e=class e{constructor(n,r,c){this.filterService=n,this.api=r,this.fb=c,this.color=["Black","White","Blue","Green","Red","Orange","Yellow"],this.size=["XS","S","M","L","XL","XXL"],this.filterForm=this.fb.group({brand:[""],category:[""],color:[""],size:[""]})}ngOnInit(){this.filterService.filterShown.subscribe(n=>{this.filterShown=n}),this.filterService.gender$.subscribe(n=>{this.gender=n}),this.api.getBrands().subscribe(n=>{this.brand=n}),this.api.getCategories().subscribe(n=>{this.category=n})}toggleFilter(){this.filterService.toggleFilter()}onSubmit(){this.filter={gender:this.gender,brand:this.filterForm.value.brand,category:this.filterForm.value.category,color:this.filterForm.value.color,size:this.filterForm.value.size},this.filterService.setFilter(this.filter)}setTitle(n){this.title=n}};e.\u0275fac=function(r){return new(r||e)(C(P),C(D),C(ce))},e.\u0275cmp=_({type:e,selectors:[["app-filter"]],decls:27,vars:7,consts:[[1,"filter"],[1,"filter-header"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 16 16",1,"close",3,"click"],["d","M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"],[1,"filter-body"],[1,"filter-title"],[3,"click"],[3,"formGroup"],["formControlName","brand","multiple","",4,"ngIf"],["formControlName","category","multiple","",4,"ngIf"],["formControlName","color","multiple","",4,"ngIf"],["formControlName","size","multiple","",4,"ngIf"],["formControlName","brand","multiple",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["formControlName","category","multiple",""],["formControlName","color","multiple",""],["formControlName","size","multiple",""]],template:function(r,c){r&1&&(i(0,"div",0)(1,"div",1)(2,"p"),a(3,"Filter Products"),o(),z(),i(4,"svg",2),p("click",function(){return c.toggleFilter()}),m(5,"path",3),o()(),B(),i(6,"div",4)(7,"ul",5)(8,"li",6),p("click",function(){return c.setTitle("brand")}),a(9,"Brand"),o(),i(10,"li",6),p("click",function(){return c.setTitle("category")}),a(11,"Category"),o(),i(12,"li",6),p("click",function(){return c.setTitle("color")}),a(13,"Color"),o(),i(14,"li",6),p("click",function(){return c.setTitle("size")}),a(15,"Size"),o(),i(16,"li",6),p("click",function(){return c.setTitle("material")}),a(17,"Material"),o(),i(18,"li",6),p("click",function(){return c.setTitle("price")}),a(19,"Price"),o()(),i(20,"form",7),f(21,De,2,1,"select",8)(22,Le,2,1,"select",9)(23,$e,2,1,"select",10)(24,Ge,2,1,"select",11),o()(),i(25,"button",6),p("click",function(){return c.onSubmit()}),a(26,"Apply"),o()()),r&2&&(I("shown",c.filterShown),s(20),d("formGroup",c.filterForm),s(),d("ngIf",c.title==="brand"),s(),d("ngIf",c.title==="category"),s(),d("ngIf",c.title==="color"),s(),d("ngIf",c.title==="size"))},dependencies:[O,v,ee,ie,re,oe,K,Q,te,ne],styles:[".filter[_ngcontent-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:100vw;background-color:#fff;z-index:2;transition:left .6s ease}.filter.shown[_ngcontent-%COMP%]{left:0}.filter[_ngcontent-%COMP%]   .filter-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:5.6rem;padding:0 1rem;background-color:#d3d3d3;font-size:1.4rem;font-weight:700}.filter[_ngcontent-%COMP%]   .filter-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{height:1.8rem}.filter[_ngcontent-%COMP%]   .filter-body[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.filter[_ngcontent-%COMP%]   .filter-body[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]{list-style-type:none;border-right:1px solid lightgray}.filter[_ngcontent-%COMP%]   .filter-body[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;height:2.4rem;font-size:1.2rem;padding-left:1rem;border-bottom:1px solid lightgray;cursor:pointer}.filter[_ngcontent-%COMP%]   .filter-body[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:tomato}.filter[_ngcontent-%COMP%]   .filter-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}.filter[_ngcontent-%COMP%]   .filter-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:none;width:100%;height:100%}.filter[_ngcontent-%COMP%]   .filter-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{display:flex;align-items:center;height:2.4rem;font-size:1.2rem;padding-left:1rem;border-bottom:1px solid lightgray}.filter[_ngcontent-%COMP%]   .filter-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{border:none;outline:none}.filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{position:absolute;left:1rem;right:1rem;bottom:1rem;padding:.8rem;border-radius:1rem;border:none;outline:none;background-color:tomato}"]});let t=e;return t})();var Ce=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=_({type:e,selectors:[["app-footer"]],decls:3,vars:0,template:function(r,c){r&1&&(i(0,"footer")(1,"p"),a(2,"\xA9 2024 SANjwan Retail Ltd. All rights reserved."),o()())},styles:["footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:8rem}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8rem}"]});let t=e;return t})();var he=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=_({type:e,selectors:[["app-root"]],decls:5,vars:0,template:function(r,c){r&1&&(m(0,"app-header")(1,"app-filter"),i(2,"main"),m(3,"router-outlet"),o(),m(4,"app-footer"))},dependencies:[J,ue,_e,Ce]});let t=e;return t})();var Me=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=T({type:e,bootstrap:[he]}),e.\u0275inj=E({imports:[Z,W,Y,fe,le]});let t=e;return t})();X().bootstrapModule(Me).catch(t=>console.error(t));
