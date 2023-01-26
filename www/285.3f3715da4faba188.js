"use strict";(self.webpackChunktech_rise=self.webpackChunktech_rise||[]).push([[285],{7352:(T,M,n)=>{n.d(M,{$:()=>d});const d=["png","jpeg","jpg"]},285:(T,M,n)=>{n.r(M),n.d(M,{ProductsModule:()=>f});var d=n(6895),c=n(4006),a=n(5412),w=n(6921),U=n(1069),t=n(4650);class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[d.ez,w.m,a.Is]});var A=n(9299),v=n(9300),u=n(2722),g=n(7322),J=n(701),Z=n(8505),b=n(5631),Y=n(7352),L=n(2340),B=n(3551),I=n(529);class p{constructor(e){this.http=e,this.apiUrl=L.N.apiUrl}getAllProducts(){return this.http.get(`${this.apiUrl}posts`)}addProduct(e){const o=this.generateFormData(e);return this.http.post(`${this.apiUrl}posts`,o)}updateProduct(e,o){const i=this.generateFormData(e);return this.http.post(`${this.apiUrl}posts/${o}`,i)}deleteProduct(e){return this.http.post(`${this.apiUrl}posts/delete/${e}`,{})}generateFormData(e){const o=new FormData;return Object.entries(e).forEach(([i,s])=>{"image"===i?(0,B.ZE)(i,s,o):o.append(i,s)}),o}}p.\u0275fac=function(e){return new(e||p)(t.LFG(I.eN))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"});var S=n(1279),_=n(6742),F=n(7392),$=n(3030),y=n(9383);function N(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"button")(1,"label",10),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"input",11),t.NdJ("change",function(s){t.CHM(o);const O=t.oxw();return t.KtG(O.selectPhoto(s))}),t.qZA()()}if(2&r){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"products.popups.addProduct.uploadImage")),t.xp6(2),t.Q6J("accept",o.possibleFormats)}}function j(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"div",12)(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"mat-icon",1),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.deletePhoto())}),t.qZA()()}if(2&r){const o=t.oxw();t.xp6(2),t.Oqu(o.fileName)}}class m{constructor(e,o,i,s,O,X,H){this.formBuilder=e,this.dialogRef=o,this.productsService=i,this.alertService=s,this.cdr=O,this.destroy$=X,this.data=H,this.btnColor=b.n5.blue,this.availableFormats=Y.$,o.addPanelClass(["add-product-popup"])}ngOnInit(){this.initForm()}deletePhoto(){this.addProductForm.get("image")?.reset(),this.fileName=""}addProduct(){const e=this.addProductForm.getRawValue();this.data?this.productsService.updateProduct(e,this.data.product.id).pipe((0,Z.b)(()=>this.close(!0)),(0,u.R)(this.destroy$)).subscribe():this.productsService.addProduct(e).pipe((0,Z.b)(()=>this.close(!0)),(0,u.R)(this.destroy$)).subscribe()}selectPhoto(e){if(!this.isValidatePhoto(e?.target.files[0]))return;const o=new FileReader;o.onloadend=()=>{this.fileName=e.target.files[0].name,this.addProductForm.get("image")?.setValue(o.result),this.cdr.markForCheck()},o.readAsDataURL(e.target.files[0])}isValidatePhoto(e){return!!this.availableFormats.includes(e.type.split("/")[1])||(this.showError("Invalid format"),!1)}close(e){this.dialogRef.close(e)}get possibleFormats(){return"."+this.availableFormats.join(", .")}initForm(){if(this.addProductForm=this.formBuilder.group({title:["",[c.kI.required]],content:["",[c.kI.required]],price:["",[c.kI.required]],image:["",[c.kI.required]]}),this.data){const{id:e,...o}=this.data.product;this.addProductForm.setValue(o),this.fileName=o.image,console.log(this.data.product,this.addProductForm)}}showError(e){this.alertService.onError(e)}}m.\u0275fac=function(e){return new(e||m)(t.Y36(c.qu),t.Y36(a.so),t.Y36(p),t.Y36(S.c),t.Y36(t.sBO),t.Y36(g.Y,2),t.Y36(a.WI))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-add-product-popup"]],features:[t._Bn([g.Y])],decls:13,vars:17,consts:[[1,"header"],["svgIcon","close",3,"click"],[3,"formGroup"],["formControlName","title",3,"label","placeholder"],["formControlName","content",3,"label","placeholder"],["formControlName","price",3,"label","placeholder","type"],[4,"ngIf"],["class","file-name",4,"ngIf"],[1,"actions"],[3,"disabledButton","isFullWidth","btnColor","text","click"],["for","files"],["id","files","type","file",3,"accept","change"],[1,"file-name"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"span"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"mat-icon",1),t.NdJ("click",function(){return o.close()}),t.qZA()(),t.TgZ(5,"form",2),t._UZ(6,"app-input",3)(7,"app-input",4)(8,"app-input",5),t.YNc(9,N,5,4,"button",6),t.YNc(10,j,4,1,"div",7),t.qZA(),t.TgZ(11,"div",8)(12,"app-button",9),t.NdJ("click",function(){return o.addProduct()}),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,15,"products.popups.addProduct.title")),t.xp6(3),t.Q6J("formGroup",o.addProductForm),t.xp6(1),t.Q6J("label","fields.title")("placeholder","fields.title"),t.xp6(1),t.Q6J("label","fields.content")("placeholder","fields.content"),t.xp6(1),t.Q6J("label","fields.price")("placeholder","fields.price")("type","number"),t.xp6(1),t.Q6J("ngIf",!o.fileName),t.xp6(1),t.Q6J("ngIf",o.fileName),t.xp6(2),t.Q6J("disabledButton",o.addProductForm.invalid)("isFullWidth",!0)("btnColor",o.btnColor)("text","buttons.addProduct"))},dependencies:[d.O5,_.r,F.Hw,$.a,c._Y,c.JJ,c.JL,c.sg,c.u,y.X$],styles:[".add-product-popup{max-width:600px!important;width:100%;padding:20px}  .add-product-popup .mat-mdc-dialog-surface{overflow-y:hidden}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;margin:20px;color:var(--dark-gray);font-size:20px;box-sizing:border-box}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:auto}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:auto;width:15px;height:15px;cursor:pointer}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{padding:20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;box-sizing:border-box;transition:all .1s ease-in-out;white-space:nowrap;cursor:pointer;font-weight:700;font-size:17px;line-height:23px;height:50px;background-color:var(--light-gray);color:var(--dark-gray);-webkit-text-fill-color:var(--dark-gray);border:1px solid var(--light-gray-90);padding:0;width:208px}@media (max-width: 1023px){[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex-direction:column;height:40px;font-size:14px}}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not([disabled]){background-color:var(--light-gray-90)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:not([disabled]){background-color:var(--light-gray-80)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;cursor:pointer;width:100%;height:100%}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin-top:5px;font-size:14px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer;margin-left:5px;width:14px;height:14px;filter:var(--filter-red)}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;padding:10px 20px}"],changeDetection:0});var z=n(3071),Q=n(2523),R=n(3900);class P{constructor(e,o){this.dialogRef=o,this.btnColor=b.n5.blue,this.modalConfig=e,this.dialogRef.addPanelClass(["popup-confirm"])}}P.\u0275fac=function(e){return new(e||P)(t.Y36(a.WI),t.Y36(a.so))},P.\u0275cmp=t.Xpm({type:P,selectors:[["app-popup-confirm"]],decls:11,vars:12,consts:[[1,"header"],[1,"title"],["svgIcon","close",3,"mat-dialog-close"],[1,"description"],[1,"actions"],[3,"btnColor","mat-dialog-close","text"],[3,"text","mat-dialog-close"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t._UZ(4,"mat-icon",2),t.qZA(),t.TgZ(5,"div",3),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"div",4),t._UZ(9,"app-button",5)(10,"app-button",6),t.qZA()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,8,o.modalConfig.title)),t.xp6(2),t.Q6J("mat-dialog-close",!1),t.xp6(2),t.Oqu(t.lcZ(7,10,o.modalConfig.description)),t.xp6(3),t.Q6J("btnColor",o.btnColor)("mat-dialog-close",!0)("text",o.modalConfig.confirmBtn),t.xp6(1),t.Q6J("text",o.modalConfig.cancelBtn)("mat-dialog-close",!1))},dependencies:[_.r,F.Hw,a.ZT,y.X$],styles:[".popup-confirm{max-width:400px!important;width:100%;padding:20px}  .popup-confirm .mat-mdc-dialog-surface{overflow-y:hidden}[_nghost-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;margin:20px;color:var(--dark-gray);font-size:20px;box-sizing:border-box}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:auto}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:auto;width:15px;height:15px;cursor:pointer}[_nghost-%COMP%]   .description[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;width:100;text-align:center;padding:5px 20px;font-size:18px}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:10px 20px;box-sizing:border-box}"],changeDetection:0});const D={title:"products.popups.deleteProduct.title",description:"products.popups.deleteProduct.description",confirmBtn:"buttons.yes",cancelBtn:"buttons.no"};var k=n(312);class C{constructor(e,o,i){this.dialog=e,this.productsService=o,this.destroy$=i,this.updateList=new t.vpe,this.btnColor=b.n5}editProduct(){this.dialog.open(m,{data:{product:this.product}}).afterClosed().pipe((0,v.h)(Boolean),(0,u.R)(this.destroy$)).subscribe(()=>{this.updateList.emit()})}deleteProduct(){this.dialog.open(P,{data:D}).afterClosed().pipe((0,v.h)(Boolean),(0,R.w)(()=>this.productsService.deleteProduct(this.product.id)),(0,u.R)(this.destroy$)).subscribe(()=>this.updateList.emit())}}function E(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"app-product-item",4),t.NdJ("updateList",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.updateList())}),t.qZA()}if(2&r){const o=e.$implicit,i=t.oxw();t.Q6J("currentUser",i.currentUser)("product",o)}}C.\u0275fac=function(e){return new(e||C)(t.Y36(a.uw),t.Y36(p),t.Y36(g.Y,2))},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-product-item"]],inputs:{product:"product",currentUser:"currentUser"},outputs:{updateList:"updateList"},features:[t._Bn([g.Y])],decls:16,vars:16,consts:[[1,"image-container"],[3,"src"],[1,"title"],[1,"price"],[1,"label"],[1,"content"],[1,"actions"],["appShowForAdmin","",3,"user","text","click"],["appShowForAdmin","",3,"user","text","btnColor","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.qZA(),t.TgZ(2,"div",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3)(5,"span",4),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"span"),t._uU(9),t.ALo(10,"currency"),t.qZA()(),t.TgZ(11,"div",5),t._uU(12),t.qZA(),t.TgZ(13,"div",6)(14,"app-button",7),t.NdJ("click",function(){return o.editProduct()}),t.qZA(),t.TgZ(15,"app-button",8),t.NdJ("click",function(){return o.deleteProduct()}),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("src",o.product.image,t.LSH),t.xp6(2),t.Oqu(o.product.title),t.xp6(3),t.hij("",t.lcZ(7,10,"products.price"),":"),t.xp6(3),t.Oqu(t.Dn7(10,12,o.product.price,"\u20b4","symbol")),t.xp6(3),t.Oqu(o.product.content),t.xp6(2),t.Q6J("user",o.currentUser)("text","buttons.edit"),t.xp6(1),t.Q6J("user",o.currentUser)("text","buttons.delete")("btnColor",o.btnColor.red))},dependencies:[_.r,k.C,d.H9,y.X$],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;border:1px solid var(--light-gray-70);padding:20px}[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%]{width:150px;height:150px}@media (max-width: 1023px){[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%]{width:150px;height:150px}}[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{margin:10px 0;font-size:24px}[_nghost-%COMP%]   .price[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;padding:10px 0;font-size:20px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;width:100%}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;padding-top:15px}"],changeDetection:0});class x{constructor(e,o,i,s,O){this.productsService=e,this.dialog=o,this.cdr=i,this.userService=s,this.destroy$=O,this.products$=this.productsService.getAllProducts(),this.btnShowOnMedia=J.t.always}ngOnInit(){this.getCurrentUser()}updateList(){this.products$=this.productsService.getAllProducts(),this.cdr.markForCheck()}openAddProductPopup(){this.dialog.open(m).afterClosed().pipe((0,v.h)(Boolean),(0,u.R)(this.destroy$)).subscribe(()=>{this.updateList()})}getCurrentUser(){this.userService.currentUser$.pipe((0,u.R)(this.destroy$)).subscribe(e=>this.currentUser=e)}}x.\u0275fac=function(e){return new(e||x)(t.Y36(p),t.Y36(a.uw),t.Y36(t.sBO),t.Y36(z.K),t.Y36(g.Y,2))},x.\u0275cmp=t.Xpm({type:x,selectors:[["app-products"]],features:[t._Bn([g.Y])],decls:5,vars:8,consts:[[3,"title","currentUser","showBtnForAdmin","btnShowOnMedia","btnText","onClick"],[1,"container"],[1,"wrapper"],[3,"currentUser","product","updateList",4,"ngFor","ngForOf"],[3,"currentUser","product","updateList"]],template:function(e,o){1&e&&(t.TgZ(0,"app-title",0),t.NdJ("onClick",function(){return o.openAddProductPopup()}),t.qZA(),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,E,1,2,"app-product-item",3),t.ALo(4,"async"),t.qZA()()),2&e&&(t.Q6J("title","pageTitle.products")("currentUser",o.currentUser)("showBtnForAdmin",!0)("btnShowOnMedia",o.btnShowOnMedia)("btnText","buttons.addProduct"),t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,6,o.products$)))},dependencies:[d.sg,Q.r,C,d.Ov],styles:[".container[_ngcontent-%COMP%]{padding:0 7%;position:relative}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;gap:90px;background-color:var(--white);padding:50px 50px 50px 52px;margin:-40px auto 0}@media (max-width: 598px){.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{margin:-134px auto 0}}@media (max-width: 1023px){.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{flex-direction:column;padding:24px 20px 40px;gap:20px}}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{padding-top:12px;width:100%;max-width:150px}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{justify-content:space-evenly;gap:20px;flex-wrap:wrap}@media (max-width: 1023px){.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{flex-direction:row}}"],changeDetection:0});const q=[{path:"",component:x}];class h{}h.\u0275fac=function(e){return new(e||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[A.Bz.forChild(q),A.Bz]});class f{}f.\u0275fac=function(e){return new(e||f)},f.\u0275mod=t.oAB({type:f}),f.\u0275inj=t.cJS({imports:[d.ez,h,w.m,a.Is,U.T,c.UX,l]})}}]);