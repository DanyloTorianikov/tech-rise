"use strict";(self.webpackChunktech_rise=self.webpackChunktech_rise||[]).push([[632],{6632:($,f,s)=>{s.r(f),s.d(f,{UserProfileEditModule:()=>n});var a=s(6895),h=s(125),p=s(9299),d=s(7579),l=s(2722),t=s(4650),v=s(6361),m=s(1279),y=s(9353);function S(u,i){if(1&u){const e=t.EpF();t.TgZ(0,"app-profile-info",1),t.NdJ("onSave",function(U){t.CHM(e);const C=t.oxw();return t.KtG(C.update(U))}),t.qZA()}2&u&&t.Q6J("user",i.ngIf)}class o{constructor(i,e,c){this.userService=i,this.router=e,this.alertService=c,this.user$=this.userService.currentUser$,this.destroy$=new d.x}ngOnInit(){this.userService.getCurrentUser().pipe((0,l.R)(this.destroy$)).subscribe()}update(i){this.userService.updateUser(i).pipe((0,l.R)(this.destroy$)).subscribe(()=>{this.alertService.onSuccess("Profile updated successfully"),this.router.navigateByUrl("profile/view")})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(v.K),t.Y36(p.F0),t.Y36(m.c))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-user-profile-edit"]],decls:2,vars:3,consts:[[3,"user","onSave",4,"ngIf"],[3,"user","onSave"]],template:function(e,c){1&e&&(t.YNc(0,S,1,1,"app-profile-info",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,c.user$))},dependencies:[a.O5,y.K,a.Ov],changeDetection:0})}const g=[{path:"",component:o}];class r{static#t=this.\u0275fac=function(e){return new(e||r)};static#e=this.\u0275mod=t.oAB({type:r});static#s=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(g),p.Bz]})}class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=t.oAB({type:n});static#s=this.\u0275inj=t.cJS({imports:[a.ez,r,h.N]})}}}]);