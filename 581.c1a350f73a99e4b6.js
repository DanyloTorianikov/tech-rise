"use strict";(self.webpackChunktech_rise=self.webpackChunktech_rise||[]).push([[581],{5581:(F,m,t)=>{t.r(m),t.d(m,{RegistrationModule:()=>r});var h=t(6895),f=t(4006),d=t(7274),u=t(4466),s=t(4650);class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#s=this.\u0275mod=s.oAB({type:e});static#o=this.\u0275inj=s.cJS({imports:[h.ez]})}var p=t(125),v=t(6818),g=t(1069),c=t(9299),y=t(7579),S=t(2722);const R=[{name:"Home",path:"/"},{name:"Register"}];var B=t(7556),A=t(9353);class n{constructor(i,o){this.authService=i,this.router=o,this.registrationBreadcrumbs=R,this.destroy$=new y.x}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}save(i){this.authService.registration(i).pipe((0,S.R)(this.destroy$)).subscribe(()=>{this.router.navigate(["profile"])})}static#t=this.\u0275fac=function(o){return new(o||n)(s.Y36(B.e),s.Y36(c.F0))};static#s=this.\u0275cmp=s.Xpm({type:n,selectors:[["app-registration"]],decls:1,vars:2,consts:[[3,"breadcrumbs","title","onSave"]],template:function(o,l){1&o&&(s.TgZ(0,"app-profile-info",0),s.NdJ("onSave",function(T){return l.save(T)}),s.qZA()),2&o&&s.Q6J("breadcrumbs",l.registrationBreadcrumbs)("title","Profile Registration")},dependencies:[A.K],changeDetection:0})}const C=[{path:"",component:n}];class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#s=this.\u0275mod=s.oAB({type:a});static#o=this.\u0275inj=s.cJS({imports:[c.Bz.forChild(C),c.Bz]})}class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#s=this.\u0275mod=s.oAB({type:r});static#o=this.\u0275inj=s.cJS({imports:[h.ez,a,u.m,v.Z,g.T,f.UX,d.Is,e,p.N]})}}}]);