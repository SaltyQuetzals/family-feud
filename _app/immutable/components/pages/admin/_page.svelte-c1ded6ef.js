import{S as X,i as Y,s as J,k as w,l as y,m as T,h as E,n as S,b as O,B as j,a as D,q as U,c as V,r as R,G as h,O as H,u as Q,P as re,e as W,f as I,g as Z,t as M,d as $,Q as ce,J as ie,w as x,x as ee,y as te,z as se,R as ue,H as z,o as fe,K as G}from"../../../chunks/index-80600910.js";import{B as de,t as K,C as _e,M as F}from"../../../chunks/index-601ae9d9.js";function ne(a){let e,s,t,n,o,l=a[0].text.toUpperCase()+"",g,c,d,b=a[0].surveyCount+"",i,k,A;return{c(){e=w("div"),s=w("div"),t=w("input"),n=D(),o=w("span"),g=U(l),c=D(),d=w("span"),i=U(b),this.h()},l(_){e=y(_,"DIV",{class:!0});var u=T(e);s=y(u,"DIV",{class:!0});var v=T(s);t=y(v,"INPUT",{type:!0,id:!0,name:!0,class:!0}),n=V(v),o=y(v,"SPAN",{class:!0});var r=T(o);g=R(r,l),r.forEach(E),c=V(v),d=y(v,"SPAN",{class:!0});var f=T(d);i=R(f,b),f.forEach(E),v.forEach(E),u.forEach(E),this.h()},h(){S(t,"type","checkbox"),S(t,"id","reveal-checkbox"),S(t,"name","Revealed"),S(t,"class","svelte-6tx1nf"),S(o,"class","text svelte-6tx1nf"),S(d,"class","survey-count svelte-6tx1nf"),S(s,"class","back svelte-6tx1nf"),S(e,"class","inner svelte-6tx1nf")},m(_,u){O(_,e,u),h(e,s),h(s,t),h(s,n),h(s,o),h(o,g),h(s,c),h(s,d),h(d,i),k||(A=H(t,"change",a[1]),k=!0)},p(_,u){u&1&&l!==(l=_[0].text.toUpperCase()+"")&&Q(g,l),u&1&&b!==(b=_[0].surveyCount+"")&&Q(i,b)},d(_){_&&E(e),k=!1,A()}}}function me(a){let e,s=a[0],t=ne(a);return{c(){e=w("div"),t.c(),this.h()},l(n){e=y(n,"DIV",{class:!0});var o=T(e);t.l(o),o.forEach(E),this.h()},h(){S(e,"class","flip-card svelte-6tx1nf")},m(n,o){O(n,e,o),t.m(e,null)},p(n,[o]){o&1&&J(s,s=n[0])?(t.d(1),t=ne(n),t.c(),t.m(e,null)):t.p(n,o)},i:j,o:j,d(n){n&&E(e),t.d(n)}}}function he(a,e,s){let{answer:t}=e;function n(o){re.call(this,a,o)}return a.$$set=o=>{"answer"in o&&s(0,t=o.answer)},[t,n]}class ve extends X{constructor(e){super(),Y(this,e,he,me,J,{answer:0})}}function oe(a,e,s){const t=a.slice();return t[8]=e[s],t[10]=s,t}function ae(a){let e,s,t,n,o,l,g,c,d,b,i,k,A,_=a[0].answers,u=[];for(let r=0;r<_.length;r+=1)u[r]=le(oe(a,_,r));const v=r=>M(u[r],1,1,()=>{u[r]=null});return{c(){e=w("div"),s=w("div"),t=U(a[3]),n=D(),o=w("div"),l=w("span"),g=U(a[1]),c=D(),d=w("div");for(let r=0;r<u.length;r+=1)u[r].c();b=D(),i=w("span"),k=U(a[2]),this.h()},l(r){e=y(r,"DIV",{class:!0});var f=T(e);s=y(f,"DIV",{class:!0,id:!0});var m=T(s);t=R(m,a[3]),m.forEach(E),n=V(f),o=y(f,"DIV",{class:!0});var P=T(o);l=y(P,"SPAN",{class:!0,id:!0});var q=T(l);g=R(q,a[1]),q.forEach(E),c=V(P),d=y(P,"DIV",{class:!0});var C=T(d);for(let N=0;N<u.length;N+=1)u[N].l(C);C.forEach(E),b=V(P),i=y(P,"SPAN",{class:!0,id:!0});var p=T(i);k=R(p,a[2]),p.forEach(E),P.forEach(E),f.forEach(E),this.h()},h(){S(s,"class","score svelte-c43bty"),S(s,"id","board-score"),S(l,"class","score svelte-c43bty"),S(l,"id","team1"),S(d,"class","answers svelte-c43bty"),S(i,"class","score svelte-c43bty"),S(i,"id","team2"),S(o,"class","main-row svelte-c43bty"),S(e,"class","container svelte-c43bty")},m(r,f){O(r,e,f),h(e,s),h(s,t),h(e,n),h(e,o),h(o,l),h(l,g),h(o,c),h(o,d);for(let m=0;m<u.length;m+=1)u[m].m(d,null);h(o,b),h(o,i),h(i,k),A=!0},p(r,f){if((!A||f&8)&&Q(t,r[3]),(!A||f&2)&&Q(g,r[1]),f&49){_=r[0].answers;let m;for(m=0;m<_.length;m+=1){const P=oe(r,_,m);u[m]?(u[m].p(P,f),I(u[m],1)):(u[m]=le(P),u[m].c(),I(u[m],1),u[m].m(d,null))}for(Z(),m=_.length;m<u.length;m+=1)v(m);$()}(!A||f&4)&&Q(k,r[2])},i(r){if(!A){for(let f=0;f<_.length;f+=1)I(u[f]);A=!0}},o(r){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)M(u[f]);A=!1},d(r){r&&E(e),ie(u,r)}}}function pe(a){let e,s;return e=new de({}),{c(){x(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,n){te(e,t,n),s=!0},p:j,i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){se(e,t)}}}function ge(a){let e,s;function t(){return a[6](a[10])}return e=new ve({props:{revealed:a[4].has(a[10]+1),answer:a[8]}}),e.$on("change",t),{c(){x(e.$$.fragment)},l(n){ee(e.$$.fragment,n)},m(n,o){te(e,n,o),s=!0},p(n,o){a=n;const l={};o&16&&(l.revealed=a[4].has(a[10]+1)),o&1&&(l.answer=a[8]),e.$set(l)},i(n){s||(I(e.$$.fragment,n),s=!0)},o(n){M(e.$$.fragment,n),s=!1},d(n){se(e,n)}}}function le(a){let e,s,t,n;const o=[ge,pe],l=[];function g(c,d){return c[8]!==null?0:1}return e=g(a),s=l[e]=o[e](a),{c(){s.c(),t=W()},l(c){s.l(c),t=W()},m(c,d){l[e].m(c,d),O(c,t,d),n=!0},p(c,d){let b=e;e=g(c),e===b?l[e].p(c,d):(Z(),M(l[b],1,1,()=>{l[b]=null}),$(),s=l[e],s?s.p(c,d):(s=l[e]=o[e](c),s.c()),I(s,1),s.m(t.parentNode,t))},i(c){n||(I(s),n=!0)},o(c){M(s),n=!1},d(c){l[e].d(c),c&&E(t)}}}function Se(a){let e,s,t=a[0]&&ae(a);return{c(){t&&t.c(),e=W()},l(n){t&&t.l(n),e=W()},m(n,o){t&&t.m(n,o),O(n,e,o),s=!0},p(n,[o]){n[0]?t?(t.p(n,o),o&1&&I(t,1)):(t=ae(n),t.c(),I(t,1),t.m(e.parentNode,e)):t&&(Z(),M(t,1,1,()=>{t=null}),$())},i(n){s||(I(t),s=!0)},o(n){M(t),s=!1},d(n){t&&t.d(n),n&&E(e)}}}function be(a,e,s){const t=ce();let{question:n}=e,{team1Score:o}=e,{team2Score:l}=e,{boardScore:g}=e,{revealed:c}=e;const d=i=>t("answerToggled",{answerRank:i}),b=i=>d(i+1);return a.$$set=i=>{"question"in i&&s(0,n=i.question),"team1Score"in i&&s(1,o=i.team1Score),"team2Score"in i&&s(2,l=i.team2Score),"boardScore"in i&&s(3,g=i.boardScore),"revealed"in i&&s(4,c=i.revealed)},[n,o,l,g,c,d,b]}class Ee extends X{constructor(e){super(),Y(this,e,be,Se,J,{question:0,team1Score:1,team2Score:2,boardScore:3,revealed:4})}}function ke(a){let e,s,t,n,o,l,g,c,d,b,i,k,A,_,u;return s=new Ee({props:{question:a[1],revealed:a[0],team1Score:Math.round(a[4]),team2Score:Math.round(a[3]),boardScore:Math.round(a[5])}}),s.$on("answerToggled",a[10]),{c(){e=w("div"),x(s.$$.fragment),t=D(),n=w("div"),o=w("div"),l=w("button"),g=U("Add Points to Team 1"),c=D(),d=w("button"),b=U("Add Points to Team 2"),i=D(),k=w("input"),this.h()},l(v){e=y(v,"DIV",{class:!0});var r=T(e);ee(s.$$.fragment,r),t=V(r),n=y(r,"DIV",{class:!0});var f=T(n);o=y(f,"DIV",{class:!0});var m=T(o);l=y(m,"BUTTON",{class:!0});var P=T(l);g=R(P,"Add Points to Team 1"),P.forEach(E),c=V(m),d=y(m,"BUTTON",{class:!0});var q=T(d);b=R(q,"Add Points to Team 2"),q.forEach(E),m.forEach(E),i=V(f),k=y(f,"INPUT",{type:!0,class:!0}),f.forEach(E),r.forEach(E),this.h()},h(){S(l,"class","svelte-17si6fn"),S(d,"class","svelte-17si6fn"),S(o,"class","svelte-17si6fn"),S(k,"type","file"),S(k,"class","svelte-17si6fn"),S(n,"class","buttons svelte-17si6fn"),S(e,"class","container svelte-17si6fn")},m(v,r){O(v,e,r),te(s,e,null),h(e,t),h(e,n),h(n,o),h(o,l),h(l,g),h(o,c),h(o,d),h(d,b),h(n,i),h(n,k),A=!0,_||(u=[H(l,"click",a[12]),H(d,"click",a[13]),H(k,"change",a[14]),H(k,"change",a[9])],_=!0)},p(v,[r]){const f={};r&2&&(f.question=v[1]),r&1&&(f.revealed=v[0]),r&16&&(f.team1Score=Math.round(v[4])),r&8&&(f.team2Score=Math.round(v[3])),r&32&&(f.boardScore=Math.round(v[5])),s.$set(f)},i(v){A||(I(s.$$.fragment,v),A=!0)},o(v){M(s.$$.fragment,v),A=!1},d(v){v&&E(e),se(s),_=!1,ue(u)}}}function we(a,e,s){let t,n,o,l=new Set,g=null,c;const d=K(0,{duration:250,easing:G});z(a,d,p=>s(4,n=p));const b=K(0,{duration:250,easing:G});z(a,b,p=>s(3,t=p));const i=K(0,{duration:250,easing:G});z(a,i,p=>s(5,o=p));const k=()=>{c&&c[0]&&c[0].text().then(p=>{s(1,g=JSON.parse(p)),s(0,l=new Set),i.set(0),A(g)})},A=p=>{const N={type:F.NEW_QUESTION,question:p};_==null||_.postMessage(N)};let _=null;fe(()=>{_=new BroadcastChannel(_e)});const u=()=>{const p={type:F.REFRESH_POINTS,boardPoints:o,team1Points:n,team2Points:t};_==null||_.postMessage(p)},v=p=>{const{answerRank:N}=p.detail;(l.has(N)?f:r)(N).then(u)},r=p=>{const N=new Set(l);N.add(p),s(0,l=N);const B={type:F.REVEAL_ANSWER,answerRank:p};_==null||_.postMessage(B);const L=o;return i.set(L+g.answers[p-1].surveyCount)},f=p=>{const N=new Set(l);N.delete(p),s(0,l=N);const B={type:F.HIDE_ANSWER,answerRank:p};_==null||_.postMessage(B);const L=o;return i.set(L-g.answers[p-1].surveyCount)},m=p=>{const N=o;if(p===1){const B=n;d.set(B+N)}else{const B=t;b.set(B+N)}i.set(0).then(u)},P=()=>m(1),q=()=>m(2);function C(){c=this.files,s(2,c)}return[l,g,c,t,n,o,d,b,i,k,v,m,P,q,C]}class Ne extends X{constructor(e){super(),Y(this,e,we,ke,J,{})}}export{Ne as default};