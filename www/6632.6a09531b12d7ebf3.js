"use strict";(self.webpackChunktech_rise=self.webpackChunktech_rise||[]).push([[6632],{6632:(C,p,r)=>{r.r(p),r.d(p,{UserProfileEditModule:()=>n});var l=r(6895),m=r(125),a=r(9299),d=r(2722),v=r(7322),e=r(4650),U=r(3071),S=r(1279),y=r(9383),g=r(9353);function E(o,t){if(1&o){const s=e.EpF();e.TgZ(0,"app-profile-info",1),e.NdJ("onSave",function(f){e.CHM(s);const u=e.oxw();return e.KtG(u.update(f))}),e.qZA()}2&o&&e.Q6J("user",t.ngIf)}class c{constructor(t,s,h,f,u){this.userService=t,this.router=s,this.alertService=h,this.translateService=f,this.destroy$=u,this.user$=this.userService.currentUser$}ngOnInit(){this.userService.getCurrentUser().pipe((0,d.R)(this.destroy$)).subscribe()}update(t){this.userService.updateUser(t).pipe((0,d.R)(this.destroy$)).subscribe(()=>{this.alertService.onSuccess(this.translateService.instant("editProfile.successfullyUpdated")),this.router.navigateByUrl("profile/view")})}}c.\u0275fac=function(t){return new(t||c)(e.Y36(U.K),e.Y36(a.F0),e.Y36(S.c),e.Y36(y.sK),e.Y36(v.Y,2))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-user-profile-edit"]],features:[e._Bn([v.Y])],decls:2,vars:3,consts:[[3,"user","onSave",4,"ngIf"],[3,"user","onSave"]],template:function(t,s){1&t&&(e.YNc(0,E,1,1,"app-profile-info",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,s.user$))},dependencies:[l.O5,g.K,l.Ov],changeDetection:0});const P=[{path:"",component:c}];class i{}i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[a.Bz.forChild(P),a.Bz]});class n{}n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,i,m.N]})}}]);