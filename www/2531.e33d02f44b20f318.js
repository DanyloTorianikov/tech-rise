"use strict";(self.webpackChunktech_rise=self.webpackChunktech_rise||[]).push([[2531],{2531:(W,m,E)=>{E.r(m),E.d(m,{startTapClick:()=>I});var u=E(5730);const I=s=>{let e,p,i,o=10*-h,r=0;const y=s.getBoolean("animated",!0)&&s.getBoolean("rippleEffect",!0),l=new WeakMap,L=t=>{o=(0,u.u)(t),R(t)},A=()=>{i&&clearTimeout(i),i=void 0,e&&(b(!1),e=void 0)},D=t=>{e||w(M(t),t)},R=t=>{w(void 0,t)},w=(t,n)=>{if(t&&t===e)return;i&&clearTimeout(i),i=void 0;const{x:d,y:a}=(0,u.p)(n);if(e){if(l.has(e))throw new Error("internal error");e.classList.contains(f)||C(e,d,a),b(!0)}if(t){const g=l.get(t);g&&(clearTimeout(g),l.delete(t));const O=v(t)?0:k;t.classList.remove(f),i=setTimeout(()=>{C(t,d,a),i=void 0},O)}e=t},C=(t,n,d)=>{if(r=Date.now(),t.classList.add(f),!y)return;const a=_(t);null!==a&&(S(),p=a.addRipple(n,d))},S=()=>{void 0!==p&&(p.then(t=>t()),p=void 0)},b=t=>{S();const n=e;if(!n)return;const d=T-Date.now()+r;if(t&&d>0&&!v(n)){const a=setTimeout(()=>{n.classList.remove(f),l.delete(n)},T);l.set(n,a)}else n.classList.remove(f)},c=document;c.addEventListener("ionGestureCaptured",A),c.addEventListener("touchstart",t=>{o=(0,u.u)(t),D(t)},!0),c.addEventListener("touchcancel",L,!0),c.addEventListener("touchend",L,!0),c.addEventListener("pointercancel",A,!0),c.addEventListener("mousedown",t=>{if(2===t.button)return;const n=(0,u.u)(t)-h;o<n&&D(t)},!0),c.addEventListener("mouseup",t=>{const n=(0,u.u)(t)-h;o<n&&R(t)},!0)},M=s=>{if(void 0===s.composedPath)return s.target.closest(".ion-activatable");{const o=s.composedPath();for(let r=0;r<o.length-2;r++){const e=o[r];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}},v=s=>s.classList.contains("ion-activatable-instant"),_=s=>{if(s.shadowRoot){const o=s.shadowRoot.querySelector("ion-ripple-effect");if(o)return o}return s.querySelector("ion-ripple-effect")},f="ion-activated",k=200,T=200,h=2500}}]);