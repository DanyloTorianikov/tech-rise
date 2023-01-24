"use strict";(self.webpackChunktech_rise=self.webpackChunktech_rise||[]).push([[255],{255:(A,u,e)=>{e.r(u),e.d(u,{UserProfileViewModule:()=>l});var a=e(6895),h=e(6921),d=e(9299),C=e(2722),P=e(5631),_=e(701),f=e(7322),t=e(4650),v=e(3071),O=e(6742),M=e(2523),m=e(7392),x=e(9383);class c{static#t=this.\u0275fac=function(n){return new(n||c)};static#n=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-user-data"]],inputs:{icon:"icon",value:"value",label:"label"},decls:7,vars:5,consts:[[3,"svgIcon"],[1,"info"],[1,"label"],[1,"value"]],template:function(n,r){1&n&&(t._UZ(0,"mat-icon",0),t.TgZ(1,"div",1)(2,"div",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3),t._uU(6),t.qZA()()),2&n&&(t.Q6J("svgIcon",r.icon),t.xp6(3),t.Oqu(t.lcZ(4,3,r.label)),t.xp6(3),t.Oqu(r.value||"--"))},dependencies:[m.Hw,x.X$],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;gap:14px;box-sizing:border-box}[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%]{min-width:30px;min-height:30px}[_nghost-%COMP%]   .info[_ngcontent-%COMP%]{width:100%;box-sizing:border-box}[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:22px;color:var(--dark-gray-70)}[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{box-sizing:border-box;font-weight:700;font-size:18px;line-height:25px;color:var(--dark-gray);padding-top:2px;word-break:break-all}"],changeDetection:0})}function w(o,i){1&o&&t.GkF(0)}function y(o,i){1&o&&t.GkF(0)}function b(o,i){1&o&&(t.TgZ(0,"div",15),t._UZ(1,"mat-icon",16),t.qZA())}function T(o,i){if(1&o&&t._UZ(0,"img",17),2&o){const n=t.oxw(2).ngIf;t.Q6J("src",n.avatar,t.LSH)}}function Z(o,i){if(1&o&&(t.YNc(0,b,2,0,"div",12),t.YNc(1,T,1,1,"img",13),t.TgZ(2,"div",14),t._uU(3),t.qZA()),2&o){const n=t.oxw().ngIf;t.Q6J("ngIf",!n.avatar),t.xp6(1),t.Q6J("ngIf",n.avatar),t.xp6(2),t.hij(" ",n.userName," ")}}function U(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t.YNc(2,w,1,0,"ng-container",4),t.TgZ(3,"app-button",5),t.NdJ("click",function(){t.CHM(n);const g=t.oxw();return t.KtG(g.navigateToEdit())}),t.qZA()(),t.TgZ(4,"div",6)(5,"div",7),t.YNc(6,y,1,0,"ng-container",4),t.qZA(),t.TgZ(7,"div",8),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"div",9),t._UZ(11,"app-user-data",10)(12,"app-user-data",10)(13,"app-user-data",10)(14,"app-user-data",10),t.ALo(15,"date"),t._UZ(16,"app-user-data",10),t.qZA()(),t.YNc(17,Z,4,3,"ng-template",null,11,t.W1O),t.qZA()}if(2&o){const n=i.ngIf,r=t.MAs(18),g=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",r),t.xp6(1),t.Q6J("icon","edit")("btnColor",g.btnColor)("text","Edit Profile"),t.xp6(3),t.Q6J("ngTemplateOutlet",r),t.xp6(2),t.hij(" ",t.lcZ(9,21,"profileInfo.title")," "),t.xp6(3),t.Q6J("icon","empty-user-v2")("label","fields.username")("value",n.userName),t.xp6(1),t.Q6J("icon","email")("label","fields.email")("value",n.email),t.xp6(1),t.Q6J("icon","phone")("label","fields.phone")("value",n.codeCountry.value+" "+n.phone),t.xp6(1),t.Q6J("icon","calendar")("label","fields.birthday")("value",t.xi3(15,23,n.birthday,"dd/MM/YYYY")),t.xp6(2),t.Q6J("icon","location")("label","fields.country")("value",n.country)}}class p{constructor(i,n,r){this.userService=i,this.router=n,this.destroy$=r,this.user$=this.userService.currentUser$,this.btnColor=P.n5.lightGray,this.titleSize=_.i.big}ngOnInit(){this.userService.getCurrentUser().pipe((0,C.R)(this.destroy$)).subscribe()}navigateToEdit(){this.router.navigateByUrl("profile/edit")}static#t=this.\u0275fac=function(n){return new(n||p)(t.Y36(v.K),t.Y36(d.F0),t.Y36(f.Y,2))};static#n=this.\u0275cmp=t.Xpm({type:p,selectors:[["app-user-profile-view"]],features:[t._Bn([f.Y])],decls:3,vars:6,consts:[[3,"titleSize","btnText","btnIcon","onClick"],["class","container",4,"ngIf"],[1,"container"],[1,"wrapper","wrapper-photo"],[4,"ngTemplateOutlet"],[3,"icon","btnColor","text","click"],[1,"wrapper","wrapper-info"],[1,"user-photo"],[1,"header"],[1,"user-info"],[3,"icon","label","value"],["userPhoto",""],["class","empty-user",4,"ngIf"],["alt","Profile Picture","class","profile-picture",3,"src",4,"ngIf"],[1,"user-name"],[1,"empty-user"],["svgIcon","empty-user"],["alt","Profile Picture",1,"profile-picture",3,"src"]],template:function(n,r){1&n&&(t.TgZ(0,"app-title",0),t.NdJ("onClick",function(){return r.navigateToEdit()}),t.qZA(),t.YNc(1,U,19,26,"div",1),t.ALo(2,"async")),2&n&&(t.Q6J("titleSize",r.titleSize)("btnText","pageTitle.editProfile")("btnIcon","edit"),t.xp6(1),t.Q6J("ngIf",t.lcZ(2,4,r.user$)))},dependencies:[a.O5,a.tP,O.r,M.r,m.Hw,c,a.Ov,a.uU,x.X$],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;gap:30px;padding:0 7%;position:relative}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{background-color:var(--white);margin:-96px auto 0}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .empty-user[_ngcontent-%COMP%]{display:block;width:200px;height:200px;border-radius:50%}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .empty-user[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:var(--gray-90)}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .empty-user[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--gray-80);width:132px;height:132px}@media (max-width: 1023px){.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{margin:-20px auto 0}}@media (max-width: 598px){.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{margin:-96px auto 0}}.container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{font-weight:700;font-size:30px;line-height:41px;color:var(--darkGray);white-space:nowrap;padding:24px 0 11px}.container[_ngcontent-%COMP%]   .wrapper-photo[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:28px 42px 34px;min-width:334px;box-sizing:border-box}@media (max-width: 1023px){.container[_ngcontent-%COMP%]   .wrapper-photo[_ngcontent-%COMP%]{display:none}}.container[_ngcontent-%COMP%]   .wrapper-info[_ngcontent-%COMP%]{padding:20px 30px 45px;width:100%;box-sizing:border-box}.container[_ngcontent-%COMP%]   .wrapper-info[_ngcontent-%COMP%]   .user-photo[_ngcontent-%COMP%]{display:none}@media (max-width: 1023px){.container[_ngcontent-%COMP%]   .wrapper-info[_ngcontent-%COMP%]   .user-photo[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:-120px}}.container[_ngcontent-%COMP%]   .wrapper-info[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-weight:700;font-size:18px;line-height:25px;padding-bottom:14px;border-bottom:1px solid var(--light-gray-90)}.container[_ngcontent-%COMP%]   .wrapper-info[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;flex-wrap:wrap;margin-top:-10px}.container[_ngcontent-%COMP%]   .wrapper-info[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   app-user-data[_ngcontent-%COMP%]{width:50%;padding-top:45px}@media (max-width: 1023px){.container[_ngcontent-%COMP%]   .wrapper-info[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   app-user-data[_ngcontent-%COMP%]{width:100%}}"],changeDetection:0})}const J=[{path:"",component:p}];class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#n=this.\u0275mod=t.oAB({type:s});static#e=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(J),d.Bz]})}class l{static#t=this.\u0275fac=function(n){return new(n||l)};static#n=this.\u0275mod=t.oAB({type:l});static#e=this.\u0275inj=t.cJS({imports:[a.ez,s,h.m]})}}}]);