import{S as z,i as F,s as G,k as w,l as E,m as q,h as b,n as g,b as P,B as L,q as I,a as C,r as M,c as R,I as ee,G as v,u as D,e as W,f as y,g as J,t as A,d as K,J as re,w as Q,x as j,y as X,z as Y,H as T,o as le,K as U}from"../../chunks/index-80600910.js";import{B as oe,t as O,C as ce,M as V}from"../../chunks/index-601ae9d9.js";function te(l){let e,a,t,s,n,r,m,o=l[2].text.toUpperCase()+"",_,p,S,d=l[2].surveyCount+"",k;return{c(){e=w("div"),a=w("div"),t=w("span"),s=I(l[1]),n=C(),r=w("div"),m=w("span"),_=I(o),p=C(),S=w("span"),k=I(d),this.h()},l(h){e=E(h,"DIV",{class:!0});var c=q(e);a=E(c,"DIV",{class:!0});var B=q(a);t=E(B,"SPAN",{class:!0});var i=q(t);s=M(i,l[1]),i.forEach(b),B.forEach(b),n=R(c),r=E(c,"DIV",{class:!0});var u=q(r);m=E(u,"SPAN",{class:!0});var f=q(m);_=M(f,o),f.forEach(b),p=R(u),S=E(u,"SPAN",{class:!0});var N=q(S);k=M(N,d),N.forEach(b),u.forEach(b),c.forEach(b),this.h()},h(){g(t,"class","svelte-uoeqan"),g(a,"class","front svelte-uoeqan"),g(m,"class","text svelte-uoeqan"),g(S,"class","survey-count svelte-uoeqan"),g(r,"class","back svelte-uoeqan"),g(e,"class","inner svelte-uoeqan"),ee(e,"revealed",l[0])},m(h,c){P(h,e,c),v(e,a),v(a,t),v(t,s),v(e,n),v(e,r),v(r,m),v(m,_),v(r,p),v(r,S),v(S,k)},p(h,c){c&2&&D(s,h[1]),c&4&&o!==(o=h[2].text.toUpperCase()+"")&&D(_,o),c&4&&d!==(d=h[2].surveyCount+"")&&D(k,d),c&1&&ee(e,"revealed",h[0])},d(h){h&&b(e)}}}function ie(l){let e,a=l[2],t=te(l);return{c(){e=w("div"),t.c(),this.h()},l(s){e=E(s,"DIV",{class:!0});var n=q(e);t.l(n),n.forEach(b),this.h()},h(){g(e,"class","flip-card svelte-uoeqan")},m(s,n){P(s,e,n),t.m(e,null)},p(s,[n]){n&4&&G(a,a=s[2])?(t.d(1),t=te(s),t.c(),t.m(e,null)):t.p(s,n)},i:L,o:L,d(s){s&&b(e),t.d(s)}}}function ue(l,e,a){let{revealed:t=!1}=e,{rank:s}=e,{answer:n}=e;return l.$$set=r=>{"revealed"in r&&a(0,t=r.revealed),"rank"in r&&a(1,s=r.rank),"answer"in r&&a(2,n=r.answer)},[t,s,n]}class fe extends z{constructor(e){super(),F(this,e,ue,ie,G,{revealed:0,rank:1,answer:2})}}function ae(l,e,a){const t=l.slice();return t[5]=e[a],t[7]=a,t}function se(l){let e,a,t,s,n,r,m,o,_,p,S,d,k,h=l[0].answers,c=[];for(let i=0;i<h.length;i+=1)c[i]=ne(ae(l,h,i));const B=i=>A(c[i],1,1,()=>{c[i]=null});return{c(){e=w("div"),a=w("div"),t=I(l[3]),s=C(),n=w("div"),r=w("span"),m=I(l[1]),o=C(),_=w("div");for(let i=0;i<c.length;i+=1)c[i].c();p=C(),S=w("span"),d=I(l[2]),this.h()},l(i){e=E(i,"DIV",{class:!0});var u=q(e);a=E(u,"DIV",{class:!0,id:!0});var f=q(a);t=M(f,l[3]),f.forEach(b),s=R(u),n=E(u,"DIV",{class:!0});var N=q(n);r=E(N,"SPAN",{class:!0,id:!0});var Z=q(r);m=M(Z,l[1]),Z.forEach(b),o=R(N),_=E(N,"DIV",{class:!0});var x=q(_);for(let H=0;H<c.length;H+=1)c[H].l(x);x.forEach(b),p=R(N),S=E(N,"SPAN",{class:!0,id:!0});var $=q(S);d=M($,l[2]),$.forEach(b),N.forEach(b),u.forEach(b),this.h()},h(){g(a,"class","score svelte-c43bty"),g(a,"id","board-score"),g(r,"class","score svelte-c43bty"),g(r,"id","team1"),g(_,"class","answers svelte-c43bty"),g(S,"class","score svelte-c43bty"),g(S,"id","team2"),g(n,"class","main-row svelte-c43bty"),g(e,"class","container svelte-c43bty")},m(i,u){P(i,e,u),v(e,a),v(a,t),v(e,s),v(e,n),v(n,r),v(r,m),v(n,o),v(n,_);for(let f=0;f<c.length;f+=1)c[f].m(_,null);v(n,p),v(n,S),v(S,d),k=!0},p(i,u){if((!k||u&8)&&D(t,i[3]),(!k||u&2)&&D(m,i[1]),u&17){h=i[0].answers;let f;for(f=0;f<h.length;f+=1){const N=ae(i,h,f);c[f]?(c[f].p(N,u),y(c[f],1)):(c[f]=ne(N),c[f].c(),y(c[f],1),c[f].m(_,null))}for(J(),f=h.length;f<c.length;f+=1)B(f);K()}(!k||u&4)&&D(d,i[2])},i(i){if(!k){for(let u=0;u<h.length;u+=1)y(c[u]);k=!0}},o(i){c=c.filter(Boolean);for(let u=0;u<c.length;u+=1)A(c[u]);k=!1},d(i){i&&b(e),re(c,i)}}}function de(l){let e,a;return e=new oe({}),{c(){Q(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){X(e,t,s),a=!0},p:L,i(t){a||(y(e.$$.fragment,t),a=!0)},o(t){A(e.$$.fragment,t),a=!1},d(t){Y(e,t)}}}function _e(l){let e,a;return e=new fe({props:{revealed:l[4].has(l[7]+1),answer:l[5],rank:l[7]+1}}),{c(){Q(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){X(e,t,s),a=!0},p(t,s){const n={};s&16&&(n.revealed=t[4].has(t[7]+1)),s&1&&(n.answer=t[5]),e.$set(n)},i(t){a||(y(e.$$.fragment,t),a=!0)},o(t){A(e.$$.fragment,t),a=!1},d(t){Y(e,t)}}}function ne(l){let e,a,t,s;const n=[_e,de],r=[];function m(o,_){return o[5]!==null?0:1}return e=m(l),a=r[e]=n[e](l),{c(){a.c(),t=W()},l(o){a.l(o),t=W()},m(o,_){r[e].m(o,_),P(o,t,_),s=!0},p(o,_){let p=e;e=m(o),e===p?r[e].p(o,_):(J(),A(r[p],1,1,()=>{r[p]=null}),K(),a=r[e],a?a.p(o,_):(a=r[e]=n[e](o),a.c()),y(a,1),a.m(t.parentNode,t))},i(o){s||(y(a),s=!0)},o(o){A(a),s=!1},d(o){r[e].d(o),o&&b(t)}}}function me(l){let e,a,t=l[0]!==null&&se(l);return{c(){t&&t.c(),e=W()},l(s){t&&t.l(s),e=W()},m(s,n){t&&t.m(s,n),P(s,e,n),a=!0},p(s,[n]){s[0]!==null?t?(t.p(s,n),n&1&&y(t,1)):(t=se(s),t.c(),y(t,1),t.m(e.parentNode,e)):t&&(J(),A(t,1,1,()=>{t=null}),K())},i(s){a||(y(t),a=!0)},o(s){A(t),a=!1},d(s){t&&t.d(s),s&&b(e)}}}function he(l,e,a){let{question:t}=e,{team1Score:s}=e,{team2Score:n}=e,{boardScore:r}=e,{revealed:m}=e;return l.$$set=o=>{"question"in o&&a(0,t=o.question),"team1Score"in o&&a(1,s=o.team1Score),"team2Score"in o&&a(2,n=o.team2Score),"boardScore"in o&&a(3,r=o.boardScore),"revealed"in o&&a(4,m=o.revealed)},[t,s,n,r,m]}class ve extends z{constructor(e){super(),F(this,e,he,me,G,{question:0,team1Score:1,team2Score:2,boardScore:3,revealed:4})}}function be(l){let e,a,t;return a=new ve({props:{question:l[1],revealed:l[0],team1Score:Math.round(l[2]),team2Score:Math.round(l[3]),boardScore:Math.round(l[4])}}),{c(){e=w("div"),Q(a.$$.fragment),this.h()},l(s){e=E(s,"DIV",{class:!0});var n=q(e);j(a.$$.fragment,n),n.forEach(b),this.h()},h(){g(e,"class","backdrop svelte-16pbnum")},m(s,n){P(s,e,n),X(a,e,null),t=!0},p(s,[n]){const r={};n&2&&(r.question=s[1]),n&1&&(r.revealed=s[0]),n&4&&(r.team1Score=Math.round(s[2])),n&8&&(r.team2Score=Math.round(s[3])),n&16&&(r.boardScore=Math.round(s[4])),a.$set(r)},i(s){t||(y(a.$$.fragment,s),t=!0)},o(s){A(a.$$.fragment,s),t=!1},d(s){s&&b(e),Y(a)}}}function Se(l,e,a){let t,s,n,r=new Set;const m=O(0,{duration:250,easing:U});T(l,m,d=>a(2,t=d));const o=O(0,{duration:250,easing:U});T(l,o,d=>a(3,s=d));const _=O(0,{duration:250,easing:U});T(l,_,d=>a(4,n=d));let p=null,S=null;return le(()=>{S=new BroadcastChannel(ce),S.onmessage=d=>{switch(d.data.type){case V.NEW_QUESTION:a(1,p=d.data.question),a(0,r=new Set);break;case V.REVEAL_ANSWER:const k=new Set(r);k.add(d.data.answerRank),a(0,r=k);break;case V.HIDE_ANSWER:const h=new Set(r);h.delete(d.data.answerRank),a(0,r=h);break;case V.WRONG_ANSWER:break;case V.REFRESH_POINTS:m.set(d.data.team1Points),o.set(d.data.team2Points),_.set(d.data.boardPoints);break;default:throw Error("Unknown MessageType received.")}}}),[r,p,t,s,n,m,o,_]}class pe extends z{constructor(e){super(),F(this,e,Se,be,G,{})}}export{pe as default};