(() => {
var vi=Object.defineProperty;var xi=(_e,A,be)=>A in _e?vi(_e,A,{enumerable:!0,configurable:!0,writable:!0,value:be}):_e[A]=be;var $o=(_e,A,be)=>xi(_e,typeof A!="symbol"?A+"":A,be);(function(){"use strict";var _e,A,be,we,kt,Tt,Mt,tt,Ne,Ie,It,nt,ot,rt,Ct,De={},Ue=[],ko=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ce=Array.isArray;function he(e,t){for(var n in t)e[n]=t[n];return e}function at(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Ee(e,t,n){var o,r,a,i={};for(a in t)a=="key"?o=t[a]:a=="ref"?r=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?_e.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return Xe(e,i,o,r,null)}function Xe(e,t,n,o,r){var a={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++be,__i:-1,__u:0};return r==null&&A.vnode!=null&&A.vnode(a),a}function Z(e){return e.children}function me(e,t){this.props=e,this.context=t}function ke(e,t){if(t==null)return e.__?ke(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ke(e):null}function To(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,o=[],r=[],a=he({},t);a.__v=t.__v+1,A.vnode&&A.vnode(a),ct(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,o,n??ke(t),!!(32&t.__u),r),a.__v=t.__v,a.__.__k[a.__i]=a,zt(o,a,r),t.__e=t.__=null,a.__e!=n&&Et(a)}}function Et(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Et(e)}function it(e){(!e.__d&&(e.__d=!0)&&we.push(e)&&!He.__r++||kt!=A.debounceRendering)&&((kt=A.debounceRendering)||Tt)(He)}function He(){try{for(var e,t=1;we.length;)we.length>t&&we.sort(Mt),e=we.shift(),t=we.length,To(e)}finally{we.length=He.__r=0}}function Lt(e,t,n,o,r,a,i,l,s,c,g){var f,u,p,m,_,h,w,v=o&&o.__k||Ue,y=t.length;for(s=Mo(n,t,v,s,y),f=0;f<y;f++)(p=n.__k[f])!=null&&(u=p.__i!=-1&&v[p.__i]||De,p.__i=f,h=ct(e,p,u,r,a,i,l,s,c,g),m=p.__e,p.ref&&u.ref!=p.ref&&(u.ref&&st(u.ref,null,p),g.push(p.ref,p.__c||m,p)),_==null&&m!=null&&(_=m),(w=!!(4&p.__u))||u.__k===p.__k?(s=Pt(p,s,e,w),w&&u.__e&&(u.__e=null)):typeof p.type=="function"&&h!==void 0?s=h:m&&(s=m.nextSibling),p.__u&=-7);return n.__e=_,s}function Mo(e,t,n,o,r){var a,i,l,s,c,g=n.length,f=g,u=0;for(e.__k=new Array(r),a=0;a<r;a++)(i=t[a])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?i=e.__k[a]=Xe(null,i,null,null,null):Ce(i)?i=e.__k[a]=Xe(Z,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?i=e.__k[a]=Xe(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):e.__k[a]=i,s=a+u,i.__=e,i.__b=e.__b+1,l=null,(c=i.__i=Io(i,n,s,f))!=-1&&(f--,(l=n[c])&&(l.__u|=2)),l==null||l.__v==null?(c==-1&&(r>g?u--:r<g&&u++),typeof i.type!="function"&&(i.__u|=4)):c!=s&&(c==s-1?u--:c==s+1?u++:(c>s?u--:u++,i.__u|=4))):e.__k[a]=null;if(f)for(a=0;a<g;a++)(l=n[a])!=null&&!(2&l.__u)&&(l.__e==o&&(o=ke(l)),Ft(l,l));return o}function Pt(e,t,n,o){var r,a;if(typeof e.type=="function"){for(r=e.__k,a=0;r&&a<r.length;a++)r[a]&&(r[a].__=e,t=Pt(r[a],t,n,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=ke(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Be(e,t){return t=t||[],e==null||typeof e=="boolean"||(Ce(e)?e.some(function(n){Be(n,t)}):t.push(e)),t}function Io(e,t,n,o){var r,a,i,l=e.key,s=e.type,c=t[n],g=c!=null&&(2&c.__u)==0;if(c===null&&l==null||g&&l==c.key&&s==c.type)return n;if(o>(g?1:0)){for(r=n-1,a=n+1;r>=0||a<t.length;)if((c=t[i=r>=0?r--:a++])!=null&&!(2&c.__u)&&l==c.key&&s==c.type)return i}return-1}function Rt(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||ko.test(t)?n:n+"px"}function We(e,t,n,o,r){var a,i;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||Rt(e.style,t,"");if(n)for(t in n)o&&n[t]==o[t]||Rt(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(It,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?o?n[Ie]=o[Ie]:(n[Ie]=nt,e.addEventListener(t,a?rt:ot,a)):e.removeEventListener(t,a?rt:ot,a);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function At(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[Ne]==null)t[Ne]=nt++;else if(t[Ne]<n[Ie])return;return n(A.event?A.event(t):t)}}}function ct(e,t,n,o,r,a,i,l,s,c){var g,f,u,p,m,_,h,w,v,y,b,T,P,M,x,S=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),a=[l=t.__e=n.__e]),(g=A.__b)&&g(t);e:if(typeof S=="function")try{if(w=t.props,v=S.prototype&&S.prototype.render,y=(g=S.contextType)&&o[g.__c],b=g?y?y.props.value:g.__:o,n.__c?h=(f=t.__c=n.__c).__=f.__E:(v?t.__c=f=new S(w,b):(t.__c=f=new me(w,b),f.constructor=S,f.render=Eo),y&&y.sub(f),f.state||(f.state={}),f.__n=o,u=f.__d=!0,f.__h=[],f._sb=[]),v&&f.__s==null&&(f.__s=f.state),v&&S.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=he({},f.__s)),he(f.__s,S.getDerivedStateFromProps(w,f.__s))),p=f.props,m=f.state,f.__v=t,u)v&&S.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),v&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(v&&S.getDerivedStateFromProps==null&&w!==p&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(w,b),t.__v==n.__v||!f.__e&&f.shouldComponentUpdate!=null&&f.shouldComponentUpdate(w,f.__s,b)===!1){t.__v!=n.__v&&(f.props=w,f.state=f.__s,f.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(k){k&&(k.__=t)}),Ue.push.apply(f.__h,f._sb),f._sb=[],f.__h.length&&i.push(f);break e}f.componentWillUpdate!=null&&f.componentWillUpdate(w,f.__s,b),v&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(p,m,_)})}if(f.context=b,f.props=w,f.__P=e,f.__e=!1,T=A.__r,P=0,v)f.state=f.__s,f.__d=!1,T&&T(t),g=f.render(f.props,f.state,f.context),Ue.push.apply(f.__h,f._sb),f._sb=[];else do f.__d=!1,T&&T(t),g=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++P<25);f.state=f.__s,f.getChildContext!=null&&(o=he(he({},o),f.getChildContext())),v&&!u&&f.getSnapshotBeforeUpdate!=null&&(_=f.getSnapshotBeforeUpdate(p,m)),M=g!=null&&g.type===Z&&g.key==null?Ot(g.props.children):g,l=Lt(e,Ce(M)?M:[M],t,n,o,r,a,i,l,s,c),f.base=t.__e,t.__u&=-161,f.__h.length&&i.push(f),h&&(f.__E=f.__=null)}catch(k){if(t.__v=null,s||a!=null)if(k.then){for(t.__u|=s?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;a[a.indexOf(l)]=null,t.__e=l}else{for(x=a.length;x--;)at(a[x]);lt(t)}else t.__e=n.__e,t.__k=n.__k,k.then||lt(t);A.__e(k,t,n)}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=Co(n.__e,t,n,o,r,a,i,s,c);return(g=A.diffed)&&g(t),128&t.__u?void 0:l}function lt(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(lt))}function zt(e,t,n){for(var o=0;o<n.length;o++)st(n[o],n[++o],n[++o]);A.__c&&A.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(a){a.call(r)})}catch(a){A.__e(a,r.__v)}})}function Ot(e){return typeof e!="object"||e==null||e.__b>0?e:Ce(e)?e.map(Ot):e.constructor!==void 0?null:he({},e)}function Co(e,t,n,o,r,a,i,l,s){var c,g,f,u,p,m,_,h=n.props||De,w=t.props,v=t.type;if(v=="svg"?r="http://www.w3.org/2000/svg":v=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),a!=null){for(c=0;c<a.length;c++)if((p=a[c])&&"setAttribute"in p==!!v&&(v?p.localName==v:p.nodeType==3)){e=p,a[c]=null;break}}if(e==null){if(v==null)return document.createTextNode(w);e=document.createElementNS(r,v,w.is&&w),l&&(A.__m&&A.__m(t,a),l=!1),a=null}if(v==null)h===w||l&&e.data==w||(e.data=w);else{if(a=v=="textarea"&&w.defaultValue!=null?null:a&&_e.call(e.childNodes),!l&&a!=null)for(h={},c=0;c<e.attributes.length;c++)h[(p=e.attributes[c]).name]=p.value;for(c in h)p=h[c],c=="dangerouslySetInnerHTML"?f=p:c=="children"||c in w||c=="value"&&"defaultValue"in w||c=="checked"&&"defaultChecked"in w||We(e,c,null,p,r);for(c in w)p=w[c],c=="children"?u=p:c=="dangerouslySetInnerHTML"?g=p:c=="value"?m=p:c=="checked"?_=p:l&&typeof p!="function"||h[c]===p||We(e,c,p,h[c],r);if(g)l||f&&(g.__html==f.__html||g.__html==e.innerHTML)||(e.innerHTML=g.__html),t.__k=[];else if(f&&(e.innerHTML=""),Lt(t.type=="template"?e.content:e,Ce(u)?u:[u],t,n,o,v=="foreignObject"?"http://www.w3.org/1999/xhtml":r,a,i,a?a[0]:n.__k&&ke(n,0),l,s),a!=null)for(c=a.length;c--;)at(a[c]);l&&v!="textarea"||(c="value",v=="progress"&&m==null?e.removeAttribute("value"):m!=null&&(m!==e[c]||v=="progress"&&!m||v=="option"&&m!=h[c])&&We(e,c,m,h[c],r),c="checked",_!=null&&_!=e[c]&&We(e,c,_,h[c],r))}return e}function st(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(r){A.__e(r,n)}}function Ft(e,t,n){var o,r;if(A.unmount&&A.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||st(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(a){A.__e(a,t)}o.base=o.__P=null}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&Ft(o[r],t,n||typeof e.type!="function");n||at(e.__e),e.__c=e.__=e.__e=void 0}function Eo(e,t,n){return this.constructor(e,n)}function je(e,t,n){var o,r,a,i;t==document&&(t=document.documentElement),A.__&&A.__(e,t),r=(o=!1)?null:t.__k,a=[],i=[],ct(t,e=t.__k=Ee(Z,null,[e]),r||De,De,t.namespaceURI,r?null:t.firstChild?_e.call(t.childNodes):null,a,r?r.__e:t.firstChild,o,i),zt(a,e,i)}function Lo(e){function t(n){var o,r;return this.getChildContext||(o=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(a){this.props.value!=a.value&&o.forEach(function(i){i.__e=!0,it(i)})},this.sub=function(a){o.add(a);var i=a.componentWillUnmount;a.componentWillUnmount=function(){o&&o.delete(a),i&&i.call(a)}}),n.children}return t.__c="__cC"+Ct++,t.__=e,t.Provider=t.__l=(t.Consumer=function(n,o){return n.children(o)}).contextType=t,t}_e=Ue.slice,A={__e:function(e,t,n,o){for(var r,a,i;t=t.__;)if((r=t.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(e)),i=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),i=r.__d),i)return r.__E=r}catch(l){e=l}throw e}},be=0,me.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=he({},this.state),typeof e=="function"&&(e=e(he({},n),this.props)),e&&he(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),it(this))},me.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),it(this))},me.prototype.render=Z,we=[],Tt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Mt=function(e,t){return e.__v.__b-t.__v.__b},He.__r=0,tt=Math.random().toString(8),Ne="__d"+tt,Ie="__a"+tt,It=/(PointerCapture)$|Capture$/i,nt=0,ot=At(!1),rt=At(!0),Ct=0;var Po=0;function d(e,t,n,o,r,a){t||(t={});var i,l,s=t;if("ref"in s)for(l in s={},t)l=="ref"?i=t[l]:s[l]=t[l];var c={type:e,props:s,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Po,__i:-1,__u:0,__source:r,__self:a};if(typeof e=="function"&&(i=e.defaultProps))for(l in i)s[l]===void 0&&(s[l]=i[l]);return A.vnode&&A.vnode(c),c}var ye,q,dt,Nt,Le=0,Dt=[],te=A,Ut=te.__b,Xt=te.__r,Ht=te.diffed,Bt=te.__c,Wt=te.unmount,jt=te.__;function Pe(e,t){te.__h&&te.__h(q,e,Le||t),Le=0;var n=q.__H||(q.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function K(e){return Le=1,Ro(Yt,e)}function Ro(e,t,n){var o=Pe(ye++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):Yt(void 0,t),function(l){var s=o.__N?o.__N[0]:o.__[0],c=o.t(s,l);s!==c&&(o.__N=[c,o.__[1]],o.__c.setState({}))}],o.__c=q,!q.__f)){var r=function(l,s,c){if(!o.__c.__H)return!0;var g=o.__c.__H.__.filter(function(u){return u.__c});if(g.every(function(u){return!u.__N}))return!a||a.call(this,l,s,c);var f=o.__c.props!==l;return g.some(function(u){if(u.__N){var p=u.__[0];u.__=u.__N,u.__N=void 0,p!==u.__[0]&&(f=!0)}}),a&&a.call(this,l,s,c)||f};q.__f=!0;var a=q.shouldComponentUpdate,i=q.componentWillUpdate;q.componentWillUpdate=function(l,s,c){if(this.__e){var g=a;a=void 0,r(l,s,c),a=g}i&&i.call(this,l,s,c)},q.shouldComponentUpdate=r}return o.__N||o.__}function X(e,t){var n=Pe(ye++,3);!te.__s&&pt(n.__H,t)&&(n.__=e,n.u=t,q.__H.__h.push(n))}function ve(e,t){var n=Pe(ye++,4);!te.__s&&pt(n.__H,t)&&(n.__=e,n.u=t,q.__h.push(n))}function E(e){return Le=5,J(function(){return{current:e}},[])}function J(e,t){var n=Pe(ye++,7);return pt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function $(e,t){return Le=8,J(function(){return e},t)}function Ao(e){var t=q.context[e.__c],n=Pe(ye++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(q)),t.props.value):e.__}function zo(){for(var e;e=Dt.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Ge),t.__h.some(ft),t.__h=[]}catch(n){t.__h=[],te.__e(n,e.__v)}}}te.__b=function(e){q=null,Ut&&Ut(e)},te.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),jt&&jt(e,t)},te.__r=function(e){Xt&&Xt(e),ye=0;var t=(q=e.__c).__H;t&&(dt===q?(t.__h=[],q.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(Ge),t.__h.some(ft),t.__h=[],ye=0)),dt=q},te.diffed=function(e){Ht&&Ht(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Dt.push(t)!==1&&Nt===te.requestAnimationFrame||((Nt=te.requestAnimationFrame)||Oo)(zo)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),dt=q=null},te.__c=function(e,t){t.some(function(n){try{n.__h.some(Ge),n.__h=n.__h.filter(function(o){return!o.__||ft(o)})}catch(o){t.some(function(r){r.__h&&(r.__h=[])}),t=[],te.__e(o,n.__v)}}),Bt&&Bt(e,t)},te.unmount=function(e){Wt&&Wt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(o){try{Ge(o)}catch(r){t=r}}),n.__H=void 0,t&&te.__e(t,n.__v))};var Gt=typeof requestAnimationFrame=="function";function Oo(e){var t,n=function(){clearTimeout(o),Gt&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,35);Gt&&(t=requestAnimationFrame(n))}function Ge(e){var t=q,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),q=t}function ft(e){var t=q;e.__c=e.__(),q=t}function pt(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function Yt(e,t){return typeof t=="function"?t(e):t}function Fo(e,t){for(var n in t)e[n]=t[n];return e}function Vt(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var o in t)if(o!=="__source"&&e[o]!==t[o])return!0;return!1}function Zt(e,t){this.props=e,this.context=t}(Zt.prototype=new me).isPureReactComponent=!0,Zt.prototype.shouldComponentUpdate=function(e,t){return Vt(this.props,e)||Vt(this.state,t)};var qt=A.__b;A.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),qt&&qt(e)};var No=A.__e;A.__e=function(e,t,n,o){if(e.then){for(var r,a=t;a=a.__;)if((r=a.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}No(e,t,n,o)};var Jt=A.unmount;function Qt(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),e.__c.__H=null),(e=Fo({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(o){return Qt(o,t,n)})),e}function Kt(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(o){return Kt(o,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function ut(){this.__u=0,this.o=null,this.__b=null}function en(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function Ye(){this.i=null,this.l=null}A.unmount=function(e){var t=e.__c;t&&(t.__z=!0),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Jt&&Jt(e)},(ut.prototype=new me).__c=function(e,t){var n=t.__c,o=this;o.o==null&&(o.o=[]),o.o.push(n);var r=en(o.__v),a=!1,i=function(){a||o.__z||(a=!0,n.__R=null,r?r(s):s())};n.__R=i;var l=n.__P;n.__P=null;var s=function(){if(!--o.__u){if(o.state.__a){var c=o.state.__a;o.__v.__k[0]=Kt(c,c.__c.__P,c.__c.__O)}var g;for(o.setState({__a:o.__b=null});g=o.o.pop();)g.__P=l,g.forceUpdate()}};o.__u++||32&t.__u||o.setState({__a:o.__b=o.__v.__k[0]}),e.then(i,i)},ut.prototype.componentWillUnmount=function(){this.o=[]},ut.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=Qt(this.__b,n,o.__O=o.__P)}this.__b=null}var r=t.__a&&Ee(Z,null,e.fallback);return r&&(r.__u&=-33),[Ee(Z,null,t.__a?null:e.children),r]};var tn=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function Do(e){return this.getChildContext=function(){return e.context},e.children}function Uo(e){var t=this,n=e.h;if(t.componentWillUnmount=function(){je(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),!t.v){for(var o=t.__v;o!==null&&!o.__m&&o.__!==null;)o=o.__;t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],__k:{__m:o.__m},contains:function(){return!0},namespaceURI:n.namespaceURI,insertBefore:function(r,a){this.childNodes.push(r),t.h.insertBefore(r,a)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.h.removeChild(r)}}}je(Ee(Do,{context:t.context},e.__v),t.v)}function Xo(e,t){var n=Ee(Uo,{__v:e,h:t});return n.containerInfo=t,n}(Ye.prototype=new me).__a=function(e){var t=this,n=en(t.__v),o=t.l.get(e);return o[0]++,function(r){var a=function(){t.props.revealOrder?(o.push(r),tn(t,e,o)):r()};n?n(a):a()}},Ye.prototype.render=function(e){this.i=null,this.l=new Map;var t=Be(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},Ye.prototype.componentDidUpdate=Ye.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){tn(e,n,t)})};var Ho=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Bo=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Wo=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,jo=/[A-Z0-9]/g,Go=typeof document<"u",Yo=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};me.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(me.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var nn=A.event;A.event=function(e){return nn&&(e=nn(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var Vo={configurable:!0,get:function(){return this.class}},on=A.vnode;A.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,o=t.type,r={},a=o.indexOf("-")==-1;for(var i in n){var l=n[i];if(!(i==="value"&&"defaultValue"in n&&l==null||Go&&i==="children"&&o==="noscript"||i==="class"||i==="className")){var s=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&l===!0?l="":s==="translate"&&l==="no"?l=!1:s[0]==="o"&&s[1]==="n"?s==="ondoubleclick"?i="ondblclick":s!=="onchange"||o!=="input"&&o!=="textarea"||Yo(n.type)?s==="onfocus"?i="onfocusin":s==="onblur"?i="onfocusout":Wo.test(i)&&(i=s):s=i="oninput":a&&Bo.test(i)?i=i.replace(jo,"-$&").toLowerCase():l===null&&(l=void 0),s==="oninput"&&r[i=s]&&(i="oninputCapture"),r[i]=l}}o=="select"&&(r.multiple&&Array.isArray(r.value)&&(r.value=Be(n.children).forEach(function(c){c.props.selected=r.value.indexOf(c.props.value)!=-1})),r.defaultValue!=null&&(r.value=Be(n.children).forEach(function(c){c.props.selected=r.multiple?r.defaultValue.indexOf(c.props.value)!=-1:r.defaultValue==c.props.value}))),n.class&&!n.className?(r.class=n.class,Object.defineProperty(r,"className",Vo)):n.className&&(r.class=r.className=n.className),t.props=r}(e),e.$$typeof=Ho,on&&on(e)};var rn=A.__r;A.__r=function(e){rn&&rn(e),e.__c};var an=A.diffed;A.diffed=function(e){an&&an(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};const Zo=(e,t)=>{let n;return function(...o){const r=this;n&&clearTimeout(n),n=setTimeout(()=>{e.apply(r,o)},t)}},qo=(e,t=window.location.origin)=>{if(e.includes(":")||e.startsWith("/")||e.startsWith("./"))return e;let n;try{n=new URL(e).toString()}catch{try{n=new URL(`//${e}`,t).toString(),n===`https://${e}`&&(n=new URL(e,t).toString())}catch{n="#"}}return n},Jo=(e,t)=>{const n=e.toLowerCase();if(t.includes(n))return n;const o=n.split("-")[0];return t.find(r=>r.startsWith(o))||null},Qo=(e,t)=>`${e}.${t}`,Ko=e=>Object.keys(e.locales||{}),er=(e,t,n,o,r)=>{var a;if(!t||!e.locales)return r;const i=Qo(n,o);return((a=e.locales[t])==null?void 0:a[i])||r},tr=(e,t,n)=>{const o=Ko(e);if(o.length===0)return null;if(n&&o.includes(n))return n;const r=t();return r?Jo(r,o):null},nr=e=>["text","heading"].includes(e.type)&&!("width"in e),or=e=>e.type==="button"&&"desktopFontSize"in e,cn=e=>!("type"in e)&&"autoplay"in e,ln=e=>({type:"carousel",...e,mediaCount:e.mediaCount,autoplay:{...e.autoplay,type:e.autoplay.enabled?"classic":"none"},arrows:{show:e.arrows,variant:"haze",icon:"chevron"}}),rr=e=>{const{variant:t}=e;return cn(e[t])?ln(e[t]):{...e[t],type:t}},ar=e=>{const{variant:t,autoConfig:n,mode:o}=e,r=o==="custom"?t:n.variant,a=o==="custom"?e[t]:n[n.variant];return cn(a)?ln(a):{...a,type:r}},ir=e=>{if(e.layout==="grid"){const n=e.grid;return{desktop:{type:"grid",gap:(n==null?void 0:n.desktopGap)??"8px",columnCount:(n==null?void 0:n.desktopItemsPerRow)??4,rowCount:(n==null?void 0:n.desktopRowCount)??2},mobile:{type:"grid",gap:(n==null?void 0:n.mobileGap)??"4px",columnCount:(n==null?void 0:n.mobileItemsPerRow)??3,rowCount:(n==null?void 0:n.mobileRowCount)??2}}}const t=e.carousel;return{desktop:{type:"carousel",gap:(t==null?void 0:t.desktopGap)??"10px",columnCount:(t==null?void 0:t.desktopItemsPerRow)??4,mediaCount:20,arrows:{show:"hover",variant:"haze",icon:"chevron"},autoplay:{type:"classic",speed:3,enabled:!0}},mobile:{type:"carousel",gap:(t==null?void 0:t.mobileGap)??"8px",columnCount:(t==null?void 0:t.mobileItemsPerRow)??2,mediaCount:20,arrows:{show:"none",variant:"haze",icon:"chevron"},autoplay:{type:"classic",speed:3,enabled:!0}}}},cr=e=>{const t={...e},n=t;if(!e.desktopLayout&&"layout"in e){const r=ir(e);t.desktopLayout=r.desktop,t.mobileLayout=r.mobile,delete n.layout,delete n.grid,delete n.carousel}else{const{desktopLayout:r,mobileLayout:a}=e;t.desktopLayout=rr(r),t.mobileLayout=ar(a)}const{popup:o}=e;return t.blocks=t.blocks.map(r=>{if(r.type==="posts"&&r.padding===void 0&&(r.padding={desktop:{},mobile:{}}),r.type==="posts"&&r.radius.mobile===void 0){const a="value"in r.radius?r.radius.value:"12px";r.radius={desktop:a,mobile:a}}if(or(r)){const a={...r};r.alignment={desktop:"center",mobile:"center"},r.fontWeight={desktop:a.fontWeight,mobile:a.fontWeight};const{enabled:i,value:l}=a.radius;r.radius={desktop:i?l:"0px",mobile:i?l:"0px"},r.fontSize={desktop:a.desktopFontSize,mobile:a.mobileFontSize},"desktopLetterSpacing"in r&&delete r.desktopLetterSpacing,"mobileLetterSpacing"in r&&delete r.mobileLetterSpacing}if(nr(r)){const a={...r};r.width="100%",r.alignment={desktop:a.align,mobile:a.align},r.fontWeight={desktop:a.fontWeight,mobile:a.fontWeight},r.fontSize={desktop:a.desktopFontSize,mobile:a.mobileFontSize}}return r}),"arrows"in o||(t.popup.arrows={variant:"blur",icon:"chevron"}),t.version=1,t},sn=e=>"type"in e&&["carousel","editorial-carousel"].includes(e.type),dn=e=>"type"in e&&["grid","editorial-grid"].includes(e.type),fn=e=>e.type==="scattered-collage",pn=e=>e.type==="side-collage",un=e=>e.type==="vertical-scroll"&&"gap"in e,lr=e=>{const t={...e};return sn(t.desktopLayout)&&(t.desktopLayout.rotation=0,t.desktopLayout.scrollMode="row"),sn(t.mobileLayout)&&(t.mobileLayout.rotation=0,t.mobileLayout.scrollMode="row"),dn(t.desktopLayout)&&(t.desktopLayout.rotation=0),dn(t.mobileLayout)&&(t.mobileLayout.rotation=0),fn(t.desktopLayout)&&(t.desktopLayout.rotation=0,t.desktopLayout.mediaHover="zoom-card"),fn(t.mobileLayout)&&(t.mobileLayout.rotation=0,t.mobileLayout.mediaHover="zoom-card"),pn(t.desktopLayout)&&(t.desktopLayout.rotation=0,t.desktopLayout.mediaHover="zoom-card"),pn(t.mobileLayout)&&(t.mobileLayout.rotation=0,t.mobileLayout.mediaHover="zoom-card"),un(t.desktopLayout)&&(delete t.desktopLayout.gap,t.desktopLayout.mediaHover="zoom-card"),un(t.mobileLayout)&&(delete t.mobileLayout.gap,t.mobileLayout.mediaHover="zoom-card"),t.version=2,t},sr=e=>"permalink"in e&&!("hasGscLogo"in e),dr=e=>"hoverEffects"in e&&!("hasGscLogo"in e.hoverEffects),fr=e=>{const t={...e};return sr(e.popup)&&(t.popup.hasGscLogo=!0),t.blocks=t.blocks.map(n=>(dr(n)&&(n.hoverEffects.hasGscLogo=!0),n)),t.hasGscLogo&&delete t.hasGscLogo,t.version=3,t},gt=3,pr=e=>"version"in e&&e.version===gt,ur=e=>{switch(e.version){case 0:return{version:1,settings:cr(e.settings)};case 1:return{version:2,settings:lr(e.settings)};case 2:return{version:3,settings:fr(e.settings)};default:return e}};function gr(e){if(pr(e))return{isChanged:!1,settings:structuredClone(e)};let t={version:"version"in e?e.version:0,settings:structuredClone(e)};for(;t.version<gt;)t=ur(t);if(t.version!==gt)throw new Error(`Unsupported widget settings version: ${t.version}`);return{isChanged:!0,settings:t.settings}}const _r=e=>["grid","editorial-grid"].includes(e.type),_t=(e,t)=>_r(e)?e.rowCount*e.columnCount:e.mediaCount||t,gn=({title:e,body:t})=>d("div",{className:"gfa-block__error",children:[d("div",{className:"gfa-block__error-title",children:e}),d("div",{className:"gfa-block__error-body",children:t})]});class mr extends me{constructor(){super(...arguments);$o(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n.message}}componentDidCatch(n){console.error(n),this.setState({error:n.message})}render(){return this.state.error?d(gn,{title:"GSC Instafeed error",body:this.state.error}):this.props.children}}function _n(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=_n(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function O(){for(var e,t,n=0,o="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=_n(e))&&(o&&(o+=" "),o+=t);return o}const hr={"1:1":"100%","4:3":"133.3%","4:5":"80%","9:16":"177.7%",auto:"auto"},Ve=new Map,mn=e=>{var t;return e.mediaType==="CAROUSEL_ALBUM"&&((t=e.children)!=null&&t[0])?e.children[0].mediaUrl:e.mediaUrl},wr=e=>{var t;return e.mediaType==="CAROUSEL_ALBUM"&&((t=e.children)!=null&&t[0])?e.children[0].mediaType.toLowerCase():e.mediaType.toLowerCase()},vr=e=>new Promise((t,n)=>{const o=new Image;o.onload=()=>{const r=o.width,a=o.height;t({width:r,height:a,aspect:a>=r?`${r} / ${a}`:"1 / 1"})},o.onerror=()=>{n(new Error(`Failed to load image from src: ${e}`))},o.src=e}),xr=e=>new Promise((t,n)=>{const o=document.createElement("video");o.onloadedmetadata=()=>{const r=o.videoWidth,a=o.videoHeight;t({width:r,height:a,aspect:a>=r?`${r} / ${a}`:"1 / 1"})},o.onerror=()=>{n(new Error(`Failed to load video metadata from src: ${e}`))},o.src=e,o.load()}),hn=(e,t=!1)=>{if(!e||t)return;const n=mn(e);if(Ve.has(n))return;(wr(e)==="image"?vr(n):xr(n)).then(r=>Ve.set(n,r)).catch(()=>Ve.set(n,{aspect:"4 / 5",width:0,height:0}))},br=e=>{if(e)return Ve.get(mn(e))},wn=e=>{try{let t=e==null?void 0:e.settings;if(typeof(e==null?void 0:e.settings)=="string"&&(t=JSON.parse((e==null?void 0:e.settings)||"")),t&&typeof t=="object"&&"blocks"in t)return(e==null?void 0:e.platform)==="Preview"&&(t={...t,general:{...t.general,breakpoint:e.isMobilePreview?"9999px":"1px"}}),t}catch{}return null},vn=({mediaType:e,mediaUrl:t})=>{if(e==="IMAGE"){const n=new Image;n.src=t}if(e==="VIDEO"){const n=document.createElement("video");n.src=t}},yr=(e,t,n)=>{const o=n?t.mobileLayout:t.desktopLayout,r=_t(o,20),a=Math.max(_t(t.mobileLayout,20),_t(t.desktopLayout,20));return{layoutProps:o,mediaList:e.slice(0,r),popupMediaList:e.slice(0,a)}},xn=e=>{const[t,n]=K(()=>window.matchMedia(e).matches);return X(()=>{let o=!0;const r=window.matchMedia(e),a=()=>{o&&n(r.matches)};return r.addEventListener("change",a),()=>{o=!1,r.removeEventListener("change",a)}},[e]),t},bn=(e,t)=>{let n;return()=>{clearTimeout(n),n=setTimeout(()=>e(),t)}},mt=({inViewport:e,isPreview:t=!1})=>{const n=E(null),o=E(null),r=E(-.5),a=E(-.5),i=E(null),l=E(0),s={sectionRef:n,screenHeight:o,currentTransform:r,targetTransform:a,animationRef:i,lastTimeRef:l};X(()=>{var p;return e&&u(),!e&&t&&(s.currentTransform.current=-.5,(p=s.sectionRef.current)==null||p.style.setProperty("--transform",s.currentTransform.current.toString())),u()},[e,t]);const c=p=>{var v,y;s.lastTimeRef.current||(s.lastTimeRef.current=p);const m=(p-s.lastTimeRef.current)/1e3;s.lastTimeRef.current=p;const h=3/1,w=s.targetTransform.current-s.currentTransform.current;Math.abs(w)>.001?(s.currentTransform.current+=w*Math.min(1,h*m),(v=s.sectionRef.current)==null||v.style.setProperty("--transform",s.currentTransform.current.toString()),s.animationRef.current=requestAnimationFrame(c)):(s.currentTransform.current=s.targetTransform.current,(y=s.sectionRef.current)==null||y.style.setProperty("--transform",s.currentTransform.current.toString()),s.animationRef.current=null,s.lastTimeRef.current=0)},g=p=>{requestAnimationFrame(()=>{if(!e||!s.sectionRef.current||!s.screenHeight.current)return;const{top:m,height:_}=s.sectionRef.current.parentElement.getBoundingClientRect(),h=s.screenHeight.current/2,v=m+_/2-h,y=s.screenHeight.current/3,T=(1-v/y)*.5;s.targetTransform.current=T,s.animationRef.current||(s.lastTimeRef.current=0,s.animationRef.current=requestAnimationFrame(c))})},f=bn(()=>{s.screenHeight.current=window.innerHeight},100),u=()=>{if(s.sectionRef.current)return s.screenHeight.current=window.innerHeight,e&&(document.addEventListener("scroll",g),window.addEventListener("resize",f),g(new Event("scroll"))),()=>{document.removeEventListener("scroll",g),window.removeEventListener("resize",f),s.animationRef.current&&(cancelAnimationFrame(s.animationRef.current),s.animationRef.current=null)}};return{...s,setupAnimation:u,handleScroll:g,handleResize:f}},yn="https://shopify-apps.getsitectrl.com/collect",Sn=async(e,t)=>{var i,l;let n=!1;const o=(i=window.Shopify)==null?void 0:i.shop,r=(l=window.Shopify)==null?void 0:l.designMode;if(!o||r)return;const a=JSON.stringify({app:"instafeed",shop:o,metrics:[{widget:e,type:t,value:1}]});try{if(typeof window.navigator.sendBeacon=="function"){const s=new Blob([a],{type:"application/json"});n=window.navigator.sendBeacon(yn,s)}n||await fetch(yn,{method:"POST",headers:{"Content-Type":"application/json"},body:a})}catch(s){console.error("Failed to send metric:",s)}},Sr=Zo(Sn,250),$r=e=>{X(()=>{e&&$n(e,"view",!0)},[e])},$n=async(e,t,n=!1)=>{n?Sn(e,t):Sr(e,t)},pe=e=>`${(e==null?void 0:e.top)||"0"} ${(e==null?void 0:e.right)||"0"} ${(e==null?void 0:e.bottom)||"0"} ${(e==null?void 0:e.left)||"0"}`,Ze={full:"flex-start",left:"flex-start",center:"center",right:"flex-end"},Te=({type:e,size:t,flip:n})=>d("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":"title",role:"img",style:{transform:n?"scaleX(-1)":""},children:e==="chevron"?d("path",{d:"M7.5 4.16797L14.1667 10.0013L7.5 15.8346",stroke:"currentColor","stroke-width":"1.5"}):d(Z,{children:[d("path",{d:"M4.16602 10H15.8327",stroke:"currentColor","stroke-width":"1.25"}),d("path",{d:"M10 4.16797L15.8333 10.0013L10 15.8346",stroke:"currentColor","stroke-width":"1.25"})]})}),kn=({color:e="#FFFFFF"})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:d("path",{stroke:e,"stroke-width":"1.5",d:"M20 4 4 20m16 0L4 4"})}),kr=({color:e="#FFFFFF"})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:d("path",{fill:e,"fill-rule":"evenodd",d:"M11.903 3.994c-4.375 0-7.922 3.57-7.922 7.974s3.547 7.974 7.922 7.974a7.843 7.843 0 0 0 4.15-1.18l.387-.24 3.092.995-1.003-3.154.223-.383a7.972 7.972 0 0 0 1.074-4.012c0-4.404-3.547-7.974-7.923-7.974ZM2 11.968C2 6.463 6.434 2 11.903 2c5.47 0 9.904 4.463 9.904 9.968a9.982 9.982 0 0 1-1.126 4.62l1.265 3.98c.27.848-.525 1.65-1.369 1.378l-3.887-1.25a9.813 9.813 0 0 1-4.787 1.24C6.433 21.936 2 17.473 2 11.968Z","clip-rule":"evenodd"})}),Tr=({color:e="#FFFFFF"})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[d("path",{fill:e,d:"M20.453 8.5c.005.392.005.818.005 1.279v3.2c0 1.035 0 1.892-.057 2.591-.06.728-.187 1.403-.511 2.038a5.214 5.214 0 0 1-2.278 2.279c-.636.323-1.31.451-2.038.51-.699.058-1.556.058-2.59.058h-3.2c-.32 0-.624 0-.911-.002H5.395A3.856 3.856 0 0 0 8.485 22h7.724A5.793 5.793 0 0 0 22 16.207V8.483a3.856 3.856 0 0 0-1.548-3.093V8.5Z"}),d("path",{fill:e,"fill-rule":"evenodd",d:"M2 5.4A3.4 3.4 0 0 1 5.4 2h10.2A3.4 3.4 0 0 1 19 5.4v5.482l-1.91-1.25a4.037 4.037 0 0 0-4.767.253L7.87 13.528a2.763 2.763 0 0 1-3.262.173L2 11.994V5.4Zm14.392 5.299L19 12.406V15.6a3.4 3.4 0 0 1-3.4 3.4H5.4A3.4 3.4 0 0 1 2 15.6v-2.082l1.91 1.25a4.038 4.038 0 0 0 4.767-.253l4.453-3.643a2.763 2.763 0 0 1 3.262-.173ZM7.525 9.65a2.125 2.125 0 1 0 0-4.25 2.125 2.125 0 0 0 0 4.25Z","clip-rule":"evenodd"})]}),Mr=({color:e="#FFFFFF"})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[d("path",{fill:e,d:"M12 0C8.743 0 8.334.014 7.054.073 5.775.13 4.903.333 4.14.63a5.876 5.876 0 0 0-2.125 1.384A5.89 5.89 0 0 0 .63 4.139c-.298.763-.5 1.636-.558 2.913C.015 8.332 0 8.74 0 12c0 3.259.015 3.667.073 4.947.058 1.277.26 2.15.557 2.912a5.88 5.88 0 0 0 1.384 2.126 5.876 5.876 0 0 0 2.125 1.385c.764.297 1.636.499 2.913.557C8.332 23.986 8.741 24 12 24c3.259 0 3.667-.014 4.947-.073 1.277-.058 2.15-.26 2.914-.557a5.872 5.872 0 0 0 2.124-1.385 5.89 5.89 0 0 0 1.385-2.125c.295-.764.497-1.636.557-2.913.058-1.28.073-1.688.073-4.947 0-3.259-.015-3.668-.073-4.948-.06-1.277-.262-2.15-.557-2.912a5.89 5.89 0 0 0-1.385-2.126A5.865 5.865 0 0 0 19.86.63c-.765-.297-1.638-.499-2.915-.557C15.665.014 15.257 0 11.997 0h.004Zm0 2.163c3.205 0 3.585.011 4.85.069 1.17.053 1.805.248 2.228.413.56.217.96.477 1.379.897.42.42.68.82.898 1.38.164.423.36 1.058.413 2.228.058 1.265.07 1.645.07 4.847 0 3.203-.012 3.583-.07 4.848-.053 1.17-.249 1.805-.413 2.227a3.72 3.72 0 0 1-.898 1.379c-.42.42-.819.68-1.38.897-.422.165-1.057.36-2.227.414-1.265.057-1.645.07-4.85.07-3.203 0-3.583-.013-4.848-.07-1.17-.054-1.805-.25-2.228-.414a3.717 3.717 0 0 1-1.38-.897 3.72 3.72 0 0 1-.898-1.38c-.165-.422-.36-1.057-.414-2.227-.057-1.265-.069-1.645-.069-4.85 0-3.204.012-3.582.07-4.847.053-1.17.248-1.805.413-2.228.217-.56.478-.96.898-1.38.42-.42.82-.68 1.38-.898.423-.165 1.058-.36 2.228-.414 1.616-.073 3.232-.064 4.849-.064Z"}),d("path",{fill:e,d:"M18.38 4.126a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z"}),d("path",{fill:e,"fill-rule":"evenodd",d:"M11.975 5.808a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326ZM12 15.938a3.938 3.938 0 1 0 0-7.876 3.938 3.938 0 0 0 0 7.876Z","clip-rule":"evenodd"})]}),Ir=()=>d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:d("path",{fill:"#FFFFFF","fill-rule":"evenodd",d:"M19.683 5.386c-1.717-1.848-4.468-1.848-6.185 0L12 6.998l-1.498-1.612c-1.717-1.848-4.468-1.848-6.185 0-1.75 1.884-1.756 4.962-.019 6.854L12 19.615l7.702-7.375c1.737-1.892 1.73-4.97-.02-6.854Zm-7.65-1.361c2.508-2.7 6.607-2.7 9.115 0 2.47 2.658 2.47 6.939 0 9.597l-.02.021-8.09 7.748a1.5 1.5 0 0 1-2.075 0l-8.091-7.748-.02-.021c-2.47-2.658-2.47-6.94 0-9.597 2.508-2.7 6.607-2.7 9.116 0L12 4.06l.032-.035Z","clip-rule":"evenodd"})}),Cr=({size:e,color:t="#FFFFFF"})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,fill:"none",viewBox:"0 0 20 20",children:[d("path",{fill:t,"fill-opacity":".5",d:"M10 0C4.477 0 0 4.417 0 9.867v.266C0 15.583 4.477 20 10 20V0Z"}),d("path",{fill:t,"fill-opacity":".3",d:"M10 15a5 5 0 0 0 0-10v10Z"}),d("path",{fill:t,d:"M10 15a5 5 0 0 1 0-10v10Z"})]}),Tn=({color:e="#FFFFFF",size:t})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,fill:"none",viewBox:"0 0 24 24",children:d("path",{fill:e,"fill-rule":"evenodd",d:"M4.53 3.47a.75.75 0 0 0-1.06 1.06l3.47 3.472H6A2 2 0 0 0 4 10v3.998a2 2 0 0 0 2 2h2.334a2 2 0 0 1 1.2.399l4.266 3.199c1.302.975 3.152.071 3.2-1.537l2.47 2.47a.75.75 0 1 0 1.06-1.06l-16-16ZM17 6.003v7.936l-6.821-6.82L13.8 4.402c1.318-.988 3.2-.048 3.2 1.6Z","clip-rule":"evenodd"})}),Mn=({size:e})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,fill:"none",viewBox:"0 0 24 24",children:d("path",{fill:"#FFFFFF",d:"M17.986 13.736 10 18.29c-1.337.762-3-.2-3-1.736V7.446c0-1.535 1.663-2.498 3-1.736l7.986 4.554c1.347.767 1.347 2.705 0 3.472Z"})}),Er=()=>d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:d("path",{fill:"#ffffff","fill-rule":"evenodd",d:"M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm4.803-11.305a.8.8 0 0 0 0-1.386l-6.6-3.81a.8.8 0 0 0-1.2.693v7.62a.8.8 0 0 0 1.2.694l6.6-3.81Z","clip-rule":"evenodd"})}),In=({color:e="#FFFFFF",size:t})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,fill:"none",viewBox:"0 0 24 24",children:d("path",{fill:e,"fill-rule":"evenodd",d:"M7.533 7.602 11.8 4.403c1.318-.988 3.2-.048 3.2 1.6v11.994c0 1.648-1.882 2.588-3.2 1.6l-4.267-3.2a2 2 0 0 0-1.2-.399H4A2 2 0 0 1 2 14v-3.998a2 2 0 0 1 2-2h2.334a2 2 0 0 0 1.2-.399ZM17.4 6.365a.75.75 0 0 0-.298 1.47 4.252 4.252 0 0 1 0 8.33.75.75 0 1 0 .298 1.47 5.752 5.752 0 0 0 0-11.27Zm.227 3.253a.75.75 0 1 0-.752 1.299 1.249 1.249 0 0 1 0 2.166.75.75 0 1 0 .752 1.299 2.75 2.75 0 0 0 0-4.764Z","clip-rule":"evenodd"})}),Lr=({color:e="#FFFFFF"})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:d("path",{fill:e,"fill-rule":"evenodd",d:"M2 7.25h3.614L9.364 2H6a4 4 0 0 0-4 4v1.25Zm20 0h-6.543l3.641-5.097A4.002 4.002 0 0 1 22 6v1.25ZM2 8.75h20V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8.75Zm5.457-1.5L11.207 2h6.157l-3.75 5.25H7.457Zm7.404 7.953a.483.483 0 0 0 0-.837l-3.985-2.3a.483.483 0 0 0-.725.418v4.601c0 .372.403.605.725.419l3.985-2.301Z","clip-rule":"evenodd"})}),Pr=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),Cn=Lo(void 0),ie=()=>Ao(Cn),Rr=({children:e,bootstrap:t})=>{var M;const[n,o]=K(wn(t)),r=t.platform==="Preview",a=t.previewLocale??null,i=xn(`(max-width: ${(n==null?void 0:n.general.breakpoint)||"9999px"})`)||!!t.isMobilePreview,l=xn("(pointer: coarse)"),{layoutProps:s,mediaList:c,popupMediaList:g}=J(()=>yr(t.media,n,i),[t.media,n,i]),[f,u]=K(!1),[p,m]=K(-1),[_,h]=K(-1),[w,v]=K(!0);X(()=>{f||m(-1)},[t.media,f]),X(()=>o(wn(t)),[t]);const y=n==null?void 0:n.blocks.find(x=>x.type==="posts"),b=$((x,S=!1)=>{var F;if(f)return;const k=x?c.findIndex(D=>D.id===(x==null?void 0:x.id)):p>-1?p:0;m(k),u(!0),h(k),S&&((F=t.onPopupOpen)==null||F.call(t))},[c,t,f,p]),T=$((x=!0)=>{var S;u(!1),x&&((S=t.onPopupClose)==null||S.call(t))},[t]);X(()=>{r&&(t.selectedItemId==="popup"?b(null):T(!1))},[t.selectedItemId,r,b,T]);const P=J(()=>({bootstrap:t||{},isPreview:r,previewLocale:a,settings:n,popupIsOpen:f,setPopupIsOpen:u,isMobile:i,isTouchScreen:l,mediaList:c,popupMediaList:g,isMuted:w,setIsMuted:v,popupMediaIdx:p,popupMediaIdxOnOpen:_,setPopupMediaIdx:m,openPopup:b,closePopup:T,postsBlock:y,layoutProps:s,isSafari:Pr}),[t,a,n,f,i,l,c,g,p,_,w,v,b,T,r,y,s]);return n&&((M=window.Shopify)!=null&&M.designMode)&&n.enabled===!1?d(gn,{title:"Enable widget in App admin",body:"Widget will be hidden on the storefront."}):!n||!c.length?null:d(Cn.Provider,{value:P,children:e})},En=({label:e,className:t})=>d("a",{className:O("gfa-copyright",t),href:"https://apps.shopify.com/gsc-instagram-feed-instafeed?utm_source=gsc_instafeed&utm_medium=in_widget_logo",target:"_blank",children:[d(Cr,{size:20}),d("div",{className:"gfa-copyright__label",children:e??"Run on GSC Instagram Feed"})]}),Ln=Intl.NumberFormat("en",{notation:"compact"}),ht=({showCommentsCount:e=!0,showLikeCount:t=!0,showCaption:n=!0,media:o,inPopup:r,hasVideoBtn:a=!1,isOpen:i=!1,onCaptionClick:l})=>{const{settings:{key:s},isMobile:c}=ie(),g=t||e,f=O("gfa-media__counter",{"gfa-media__counter--popup":r}),u=r&&o.caption&&o.caption.length>(c?40:60),p=()=>{u&&(l==null||l())};return d("div",{className:O("gfa-media__meta",{"gfa-media__meta--has-video-btn":a,"gfa-media__meta--popup":r,"gfa-media__meta--caption-open":r&&i}),children:[g&&d("div",{className:O("gfa-media__counters"),onClick:p,children:[t&&d("div",{className:f,children:[d(Ir,{}),Ln.format(o.likeCount)]}),e&&d("div",{className:f,children:[d(kr,{}),Ln.format(o.commentsCount)]})]}),n&&o.caption&&d("div",{onClick:p,className:O("gfa-media__caption",s,{"gfa-media__caption--open":i,"gfa-media__meta--clickable":u}),children:d("div",{className:"gfa-media__caption-text",children:o.caption})})]})},Ar=".gfa-copyright",qe={maxRotation:16,perspective:1400},Pn=(e,t,n)=>{e.style.setProperty("transform",`perspective(${qe.perspective}px) rotateX(${t.toFixed(2)}deg) rotateY(${n.toFixed(2)}deg)`)},xe=({media:e,inViewport:t,skipPreload:n,hoverEffect:o="zoom-media"})=>{var le,ne,re,N;const{openPopup:r,isPreview:a,bootstrap:{selectedItemId:i},settings:{key:l},postsBlock:s,isMobile:c}=ie(),{videoAutoplay:g,hoverEffects:f,showMediaTypeIcon:u,mediaClickAction:p,id:m}=s,_=n||!t,h=E(null),w=E(null),v=u&&["CAROUSEL_ALBUM","VIDEO"].includes(e.mediaType),y=e.mediaType==="CAROUSEL_ALBUM",b=((ne=(le=e.children)==null?void 0:le[0])==null?void 0:ne.mediaUrl)??e.mediaUrl,T=e.mediaType==="VIDEO"||e.mediaType==="CAROUSEL_ALBUM"&&((N=(re=e.children)==null?void 0:re[0])==null?void 0:N.mediaType)==="VIDEO",{enabled:P,likeCount:M,commentsCount:x,caption:S,instLogo:k,hasGscLogo:F}=f,D=P&&(M||x||S||k||F)&&!c,z=y?Tr:T?Lr:null;hn(e,_),X(()=>{const W=w.current;if(W){if(_){W.pause();return}g?W.play().catch(()=>{}):W.pause()}},[g,_]);const j=W=>{const ae=W.target;if(!(ae!=null&&ae.closest(Ar))){if(p==="link"){window.open(e.permalink,"_blank");return}p==="popup"&&(!a||i===m)&&(r(e,!0),W.preventDefault(),W.stopPropagation())}},B=W=>{if(h.current){const{left:ae,top:C,width:L,height:U}=h.current.getBoundingClientRect(),Y=(W.clientX-ae)/L*2-1,ee=(W.clientY-C)/U*2-1;Pn(h.current,-ee*qe.maxRotation,Y*qe.maxRotation)}},G=()=>{h.current&&Pn(h.current,0,0)};return d("div",{ref:h,class:O("gfa-media",l,{"gfa-media--zoom-media":P&&o==="zoom-media","gfa-media--zoom-card":o==="zoom-card","gfa-media--rotation":o==="rotation"}),onClick:j,...o==="rotation"&&{onMouseMove:B,onMouseLeave:G,style:{transform:`perspective(${qe.perspective}px) rotateX(0deg) rotateY(0deg)`}},children:[T?d("video",{className:"gfa-media__source",preload:_?"none":"auto",src:b,ref:w,controls:!1,playsinline:!0,muted:!0,...e.thumbnailUrl&&{poster:e.thumbnailUrl},loop:!0},e.mediaUrl):d("img",{loading:_?"lazy":"eager",src:b,alt:e.caption,className:"gfa-media__source"},e.mediaUrl),v&&!!z&&d("div",{className:"gfa-media__overlay-media-type",children:d("div",{className:O("gfa-media__media-type",l),children:d(z,{})})}),D&&d("div",{className:O("gfa-media__overlay",l),children:[F&&d(En,{label:"Run on GSC"}),k&&d("div",{className:O("gfa-media__inst-logo",l),children:T?d(Er,{}):d(Mr,{})}),d("div",{className:O("gfa-media__overlay-content",l),children:d(ht,{media:e,inPopup:!1,showLikeCount:M,showCommentsCount:x,showCaption:S})})]})]})},zr=200,Or=1e4,Rn=500,Fr=.015,Nr=500,Dr=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,Ur=({autoplay:e,direction:t="right-to-left",engine:n,inViewport:o,isTouchScreen:r,popupIsOpen:a})=>{const{canLoop:i,canScroll:l,getMetrics:s,getOffset:c,isMeasured:g,scrollNext:f,scrollPrev:u,setOffset:p,stopMotion:m}=n,_=t==="right-to-left",h=E(0),w=E(!1),v=E(),y=E(!1),b=E({}),[T,P]=K(!1),[M,x]=K(!1),S=$(()=>{const L=b.current;cancelAnimationFrame(L.frame??0),cancelAnimationFrame(L.returnFrame??0),clearInterval(L.classicInterval),clearTimeout(L.edgePause),clearTimeout(L.postReturnPause),clearTimeout(L.resume),clearTimeout(L.start),b.current={}},[]),k=$(()=>{h.current+=1,S(),m(),x(!1)},[S,m]),F=e.enabled&&e.type!=="none"&&o&&!a&&l,D=$(L=>h.current===L&&F&&!y.current,[F]),z=$(()=>(h.current+=1,S(),h.current),[S]),j=$((L,U,Y)=>{let ee=0;const R=Y-U,V=H=>{if(!D(L))return;ee||(ee=H);const oe=Math.min((H-ee)/Nr,1),de=U+R*Dr(oe);if(p(de),oe<1){b.current.returnFrame=requestAnimationFrame(V);return}p(Y),b.current.postReturnPause=window.setTimeout(()=>{var ue;D(L)&&((ue=v.current)==null||ue.call(v))},Rn)};b.current.returnFrame=requestAnimationFrame(V)},[D,p]),B=$(()=>{const L=z();b.current.classicInterval=window.setInterval(()=>{if(D(L)){if(_){f(1);return}u(1)}},e.speed*1e3),x(!0)},[e.speed,z,_,D,f,u]),G=$(()=>{const L=z(),U=e.speed*Fr;let Y=0;const ee=R=>{if(!D(L))return;Y||(Y=R);const V=R-Y;Y=R;const H=s(),oe=c();if(H.measured&&i){p(oe+V*U*(_?1:-1)),b.current.frame=requestAnimationFrame(ee);return}const de=_?H.maxOffset:0,ue=_?0:H.maxOffset,se=oe+V*U*(_?1:-1);if(H.measured&&(_?se>=H.maxOffset:se<=0)){const ge=_?Math.min(se,de):Math.max(se,de);p(ge),x(!1),b.current.edgePause=window.setTimeout(()=>{D(L)&&j(L,ge,ue)},Rn);return}p(se),b.current.frame=requestAnimationFrame(ee)};b.current.frame=requestAnimationFrame(ee),x(!0)},[e.speed,z,i,s,c,_,D,j,p]);ve(()=>{v.current=G},[G]);const le=e.type==="classic"?B:G,ne=$((L=zr)=>{!F||y.current||(clearTimeout(b.current.start),b.current.start=window.setTimeout(()=>{!F||y.current||(le(),P(!0))},L))},[F,le]),re=$(()=>{F&&(w.current=!1,clearTimeout(b.current.resume),b.current.resume=window.setTimeout(()=>{ne(0)},Or))},[F,ne]),N=$(()=>{w.current=!0,k()},[k]),W=$(()=>{!r&&y.current||re()},[r,re]),ae=$(()=>{r||(y.current=!0,k())},[r,k]),C=$(()=>{if(!r){if(y.current=!1,w.current){re();return}ne(0)}},[r,re,ne]);return X(()=>{if(g)return F?(ne(),k):(P(!0),k(),k)},[F,g,ne,k]),{handleMouseEnter:ae,handleMouseLeave:C,inited:T,isPlaying:M,pauseForInteraction:N,resumeAfterInteraction:W}},ce=(e,t,n)=>Math.min(Math.max(e,t),n),An=(e,t,n)=>e+(t-e)*n,wt=e=>e,zn=(e,t)=>{if(!e.length)return 0;let n=0,o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),l=e[i];if(l===t)return i;l<t?n=i+1:o=i-1}const r=ce(o,0,e.length-1),a=ce(n,0,e.length-1);return Math.abs(e[r]-t)<=Math.abs(e[a]-t)?r:a},Xr=(e,t)=>{if(e.length<2)return Math.max(t,1);let n=0,o=0;for(let r=1;r<e.length;r+=1){const a=e[r]-e[r-1];a>0&&(n+=a,o+=1)}return o?n/o:Math.max(t,1)},On=(e,t)=>1-3*t+3*e,Fn=(e,t)=>3*t-6*e,Nn=e=>3*e,vt=(e,t,n)=>((On(t,n)*e+Fn(t,n))*e+Nn(t))*e,Hr=(e,t,n)=>3*On(t,n)*e*e+2*Fn(t,n)*e+Nn(t),Br=64,Wr=(e,t,n)=>{let o=e;for(let i=0;i<4;i+=1){const l=Hr(o,t,n);if(!l)break;const s=vt(o,t,n)-e;o-=s/l}let r=0,a=1;for(let i=0;i<Br&&r<a;i+=1){const l=vt(o,t,n);if(Math.abs(l-e)<1e-7)return o;e>l?r=o:a=o,o=(a-r)*.5+r}return o},jr=e=>{const t=e.match(/cubic-bezier\(([^)]+)\)/);if(!t)return wt;const n=t[1].split(",").map(l=>Number(l.trim())).filter(l=>Number.isFinite(l));if(n.length!==4)return wt;const[o,r,a,i]=n;return o===r&&a===i?wt:l=>l<=0?0:l>=1?1:vt(Wr(l,o,a),r,i)},Se={dragStartThresholdPx:1,dragVelocityMultiplier:8,maxDragVelocity:32,dragVelocitySmoothing:.72,snapProjectionFactor:26,minSnapDistanceForVelocityProjectionPx:118,edgeRubberBandFactor:.36},Gr=(e,t)=>e<0?e*Se.edgeRubberBandFactor:e>t?t+(e-t)*Se.edgeRubberBandFactor:e,Yr=({canLoop:e,metrics:t,rawOffset:n})=>Gr(n,t.maxOffset),Vr=({currentOffset:e,dragStartOffset:t,logicalSnaps:n,maxOffset:o,velocity:r})=>{const a=Math.abs(e-t),i=ce((a-Se.dragStartThresholdPx)/Math.max(Se.minSnapDistanceForVelocityProjectionPx-Se.dragStartThresholdPx,1),0,1),l=e+r*Se.snapProjectionFactor*i;return n.reduce((s,c,g)=>Math.abs(ce(c,0,o)-l)<Math.abs(ce(n[s],0,o)-l)?g:s,0)},Zr=3,xt=e=>Array.from({length:e},(t,n)=>n),Dn=(e,t)=>t<=1?0:Math.min(Math.max(Math.round(e),Zr),t-1),Un=(e,t)=>e.length<=1||t<=0?e:[...e.slice(t),...e.slice(0,t)],Xn=(e,t)=>e.length<=1||t<=0?e:[...e.slice(-t),...e.slice(0,-t)],Hn=(e,t)=>e.length===t.length&&e.every((n,o)=>n===t[o]),Me=e=>e.logicalSnaps.map(t=>ce(t,0,e.maxOffset)),qr=(e,t)=>e==="left-to-right"?t:0,Je=(e,t,n)=>{var i;if(t<=0||!e.slideRects.length)return 0;if(n==="start"){const l=e.slideRects[t-1];return Math.max(((l==null?void 0:l.end)??0)-(((i=e.slideRects[0])==null?void 0:i.start)??0),0)}const o=Math.max(e.slideRects.length-t,0),r=e.slideRects[o],a=e.slideRects[e.slideRects.length-1];return Math.max(((a==null?void 0:a.end)??0)-((r==null?void 0:r.start)??0),0)},Jr=({edgeThreshold:e=0,maxIterations:t,metrics:n,onAfterStep:o,order:r,recycleBatchSize:a,value:i})=>{let l=i,s=r,c=!1,g=0;const f=Math.max(e,0),u=Math.max(n.maxOffset-f,0);for(;l<f&&g<t;){const p=Je(n,a,"end");if(p<=0)break;s=Xn(s,a),l+=p,c=!0,g+=1,o==null||o(p,"end")}for(;l>u&&g<t;){const p=Je(n,a,"start");if(p<=0)break;s=Un(s,a),l-=p,c=!0,g+=1,o==null||o(p,"start")}return{changed:c,offset:l,order:s}},Qr=({canLoop:e,columnCount:t,metrics:n,order:o,offset:r,slidesLength:a,targetIndex:i})=>{if(!n.logicalSnaps.length)return{changed:!1,offset:r,order:o,targetIndex:0};const l=n.logicalSnaps.length-1,s=Math.round(i);if(!e)return{changed:!1,offset:r,order:o,targetIndex:ce(s,0,l)};const c=Dn(t,a);if(c<=0)return{changed:!1,offset:r,order:o,targetIndex:ce(s,0,l)};let g=s,f=r,u=o,p=!1,m=0;const _=a*2;for(;g<0&&m<_;){const h=Je(n,c,"end");if(h<=0)break;u=Xn(u,c),f+=h,g+=c,p=!0,m+=1}for(;g>l&&m<_;){const h=Je(n,c,"start");if(h<=0)break;u=Un(u,c),f-=h,g-=c,p=!0,m+=1}return{changed:p,offset:f,order:u,targetIndex:ce(g,0,l)}},Kr=({container:e,slideNodes:t,track:n})=>{const o=n.getBoundingClientRect(),r=t.map(g=>{const f=g.getBoundingClientRect(),u=f.left-o.left+n.scrollLeft;return{center:u+f.width/2,end:u+f.width,start:u,width:f.width}}),a=r,i=a.map(({start:g})=>g),l=a.map(({center:g})=>g),s=e.clientWidth,c=Math.max(n.scrollWidth-s,0);return{logicalSnaps:i,maxOffset:c,measured:!0,slideRects:r,slotSpan:Xr(l,s),viewportWidth:s}},ea=2,ta=.18,Bn=(e,t,n)=>{const o=e[n];if((o==null?void 0:o.element)===t)return o;const r={element:t};return e[n]=r,r},Qe=(e,t,n,o,r,a)=>{const i=Bn(e,t,n);i[o]!==a&&(i[o]=a,t.style.setProperty(r,a))},Re=(e,t,n,o,r)=>{const a=Bn(e,t,n);!(a!=null&&a[o])&&!t.style.getPropertyValue(r)||(a[o]=void 0,t.style.removeProperty(r))},Wn=(e,t,n)=>{Re(e,t,n,"distance","--gfa-distance"),Re(e,t,n,"scale","--gfa-scale"),Re(e,t,n,"shiftX","--gfa-shift-x"),Re(e,t,n,"zIndex","--gfa-z-index")},na=(e,t)=>{e.forEach((n,o)=>{n&&Wn(t,n,o)})},jn=(e,t,n)=>{let o=0,r=0;t.forEach(a=>{const i=a.width*(1-a.scale)/2;o+=r+i,Qe(e,a.slide,a.index,"shiftX","--gfa-shift-x",`${(n*o).toFixed(2)}px`),r=i})},oa=({metrics:e,renderedOffset:t,slideRefs:n,slideStyleStates:o,visualMode:r})=>{if(!n.length||r==="default")return;const a=t,i=t+e.viewportWidth,l=t+e.viewportWidth/2,s=Math.max(e.slotSpan,1),c=s*ea,g=a-c,f=i+c,u=[],p=[],m=[];n.forEach((_,h)=>{const w=e.slideRects[h];if(!_||!w)return;const v=w.end>a+1&&w.start<i-1,y=!v&&w.end>g&&w.start<f;if(!v&&!y){Wn(o,_,h);return}const b=(w.center-l)/s,T=ce(b,-6,6),P=Math.abs(b),M=1/(1+P*ta);if(Qe(o,_,h,"distance","--gfa-distance",T.toFixed(3)),r==="spotlight-stack"&&(Qe(o,_,h,"scale","--gfa-scale",M.toFixed(4)),m.push({absDistance:P,distance:T,index:h,slide:_}),P<=.001&&Re(o,_,h,"shiftX","--gfa-shift-x")),T<-.001){u.push({index:h,scale:M,slide:_,width:w.width});return}if(T>.001){p.push({index:h,scale:M,slide:_,width:w.width});return}}),r==="spotlight-stack"&&(m.sort((_,h)=>_.absDistance!==h.absDistance?_.absDistance-h.absDistance:_.distance!==h.distance?_.distance-h.distance:_.index-h.index).forEach((_,h)=>{Qe(o,_.slide,_.index,"zIndex","--gfa-z-index",String(m.length-h))}),jn(o,[...u].reverse(),1),jn(o,p,-1))},ra={logicalSnaps:[],maxOffset:0,measured:!1,slideRects:[],slotSpan:1,viewportWidth:0},aa=.3,ia=({canLoop:e,columnCount:t,metricsRef:n,slidesLength:o})=>{const r=xt(o),a=E(0),i=E(r),[l,s]=K(r),c=$(p=>{i.current=p,s(m=>Hn(m,p)?m:p)},[]),g=$((p,m)=>{const _=n.current;if(!e||!_.measured||_.logicalSnaps.length<2)return p;const h=Dn(t,o);if(h<=0)return p;const w=m!=null&&m.isDrag?Math.min(_.viewportWidth*aa,_.maxOffset/2):0,{changed:v,offset:y,order:b}=Jr({edgeThreshold:w,maxIterations:o*2,metrics:_,onAfterStep:m!=null&&m.isDrag?(T,P)=>{a.current+=P==="end"?T:-T}:void 0,order:i.current,recycleBatchSize:h,value:p});return v&&c(b),y},[e,t,c,n,o]),f=$(()=>{a.current=0},[]),u=$(()=>{c(xt(o))},[c,o]);return{commitRenderOrder:c,dragLoopAdjustmentRef:a,normalizeLoopOffset:g,renderOrder:l,renderOrderRef:i,resetDragLoopAdjustment:f,resetRenderOrder:u}},Gn=({getTargets:e,onResize:t})=>{X(()=>{const n=e().filter(Boolean);if(!n.length)return;const o=new ResizeObserver(()=>t());return n.forEach(r=>o.observe(r)),()=>o.disconnect()},[e,t])},ca=({containerRef:e,metricsRef:t,offsetRef:n,renderOffset:o,setCanScroll:r,setIsMeasured:a,setOffset:i,slideRefs:l,slideStyleStatesRef:s,slidesLength:c,trackRef:g})=>{const f=$(()=>{const p=e.current,m=g.current,_=l.current.slice(0,c);if(!p||!m||!_.length||_.some(v=>!v))return;const h=Kr({container:p,slideNodes:_,track:m}),w=n.current;if(t.current=h,a(!0),r(h.maxOffset>1),w<0||w>h.maxOffset){o(w);return}i(w)},[e,t,n,o,r,a,i,l,c,g]);ve(()=>{f()},[f,c]),X(()=>{l.current.length=c,s.current.length=c},[l,s,c]);const u=$(()=>[e.current,g.current,...l.current],[e,l,g]);Gn({getTargets:u,onResize:f})},la=({metricsRef:e,renderOrderRef:t,slideRefs:n,visualMode:o})=>{const r=E([]),a=E(0),[i,l]=K(0),s=$(f=>{const u=e.current,p=Me(u);if(!p.length)return;const m=zn(p,ce(f,0,u.maxOffset)),_=t.current[m]??m;_!==a.current&&(a.current=_,l(_))},[e,t]),c=$(f=>{s(f),oa({metrics:e.current,renderedOffset:f,slideRefs:n.current,slideStyleStates:r.current,visualMode:o})},[e,n,s,o]),g=$(()=>{a.current=0,l(0)},[]);return X(()=>{o==="default"&&na(n.current,r.current)},[n,o]),{currentIdx:i,resetCurrentIdx:g,slideStyleStatesRef:r,syncPresentation:c}},sa={cssEasing:"cubic-bezier(0.18, 0.96, 0.24, 1)",durationMs:520},da=({motion:e=sa}={})=>{const t=E(null),n=E(null),o=E(0),r=E(0),a=E(0),i=E(),l=E(0),s=J(()=>jr(e.cssEasing),[e.cssEasing]),c=$((p,m,_=n.current)=>({container:t.current,logicalOffset:p,renderedOffset:m,track:_}),[]),g=$((p,m=-p)=>{const _=-m,h=n.current;return o.current=p,a.current=m,r.current=_,h&&(h.style.transform=`translate3d(${m}px, 0, 0)`),_},[]),f=$(()=>{l.current+=1,cancelAnimationFrame(i.current??0),i.current=void 0},[]);return{animateTo:$(({onBeforeStart:p,onComplete:m,onRender:_,renderedTarget:h,target:w})=>{const v=n.current,y=o.current,b=a.current,T=h??-w;f();const P=l.current+1;if(!v||Math.abs(w-y)<.5&&Math.abs(T-b)<.5){const S=g(w,T);_==null||_(c(w,S,v)),m==null||m();return}l.current=P,p==null||p(c(w,-T,v));const M=S=>{if(l.current!==P)return;const k=e.durationMs<=0?1:Math.min((S-x)/e.durationMs,1),F=s(k),D=An(y,w,F),z=An(b,T,F),j=g(D,z);if(_==null||_(c(D,j,v)),k>=1){i.current=void 0,m==null||m();return}i.current=requestAnimationFrame(M)},x=performance.now();i.current=requestAnimationFrame(M)},[s,c,e.durationMs,g,f]),containerRef:t,offsetRef:o,renderedOffsetRef:r,renderOffset:g,stopTransition:f,trackRef:n}},Yn={active:!1,lastTime:0,lastX:0,moved:!1,pointerId:null,startOffset:0,startTime:0,startX:0,startY:0,velocity:0},bt=e=>"pointerId"in e?e.pointerId:null,Vn=({allowPressWithoutDrag:e=!1,direction:t=1,enabled:n,eventMode:o,getOffset:r,getTarget:a,onDragEnd:i,onDragMove:l,onInteractionEnd:s,onInteractionStart:c,shouldIgnoreTarget:g,tuning:f=Se})=>{const u=E(Yn),p=E(),m=E(null),_=E(!1),[h,w]=K(!1),v=$(()=>{cancelAnimationFrame(p.current??0),p.current=void 0},[]),y=$(()=>{var x;(x=m.current)==null||x.call(m),m.current=null},[]),b=$((x,S=!1)=>{if(x&&u.current.pointerId!==bt(x))return;y();const k=u.current;if(u.current=Yn,w(!1),!k.active){s==null||s();return}const F=r()-k.startOffset;_.current=k.moved,i({cancel:S,drag:k,dragDistance:F,event:x,moved:k.moved,velocity:k.velocity}),s==null||s()},[y,o,r,i,s]),T=$(x=>{const S=u.current;if(!S.active||S.pointerId!==bt(x))return;const k=x.clientX-S.startX,F=x.clientY-S.startY;if(!S.moved&&Math.abs(k)<=f.dragStartThresholdPx)return;const D=performance.now(),z=x.clientX-S.lastX,j=Math.max(D-S.lastTime,1),B=z/j*f.dragVelocityMultiplier*t,G=ce(B,-f.maxDragVelocity,f.maxDragVelocity);S.moved=!0,S.velocity=S.velocity?S.velocity*f.dragVelocitySmoothing+G*(1-f.dragVelocitySmoothing):G,S.lastTime=D,S.lastX=x.clientX,l({deltaX:k,deltaY:F,drag:S,event:x,rawOffset:S.startOffset+k*t}),x.preventDefault()},[t,o,l,f.dragStartThresholdPx,f.dragVelocityMultiplier,f.dragVelocitySmoothing,f.maxDragVelocity]),P=$(x=>{if(!n&&!e||"button"in x&&x.button!==0||u.current.pointerId!==null||u.current.active||g!=null&&g(x.target))return;v(),y(),c==null||c();const S=performance.now();w(!0),_.current=!1,u.current={active:n,lastTime:S,lastX:x.clientX,moved:!1,pointerId:bt(x),startOffset:r(),startTime:S,startX:x.clientX,startY:x.clientY,velocity:0};{const k=z=>T(z),F=z=>b(z),D=z=>b(z,!0);window.addEventListener("pointermove",k,{passive:!1}),window.addEventListener("pointerup",F),window.addEventListener("pointercancel",D),m.current=()=>{window.removeEventListener("pointermove",k),window.removeEventListener("pointerup",F),window.removeEventListener("pointercancel",D)};return}},[e,y,n,o,b,r,T,c,g,v]),M=$(x=>{_.current&&(_.current=!1,x.preventDefault(),x.stopPropagation())},[]);return X(()=>{const x=a();if(!x)return;const S="pointerdown";return x.addEventListener(S,P),x.addEventListener("click",M,!0),()=>{x.removeEventListener(S,P),x.removeEventListener("click",M,!0)}},[o,a,M,P]),X(()=>()=>{y(),v()},[y,v]),{isPressed:h,stopMotion:v}},fa=4,pa=({columnCount:e,direction:t="right-to-left",initialSlideIndex:n,interactionHandlersRef:o,loop:r,slides:a,step:i,visualMode:l})=>{const s=E([]),c=E(ra),g=E(!1),{animateTo:f,containerRef:u,offsetRef:p,renderedOffsetRef:m,renderOffset:_,stopTransition:h,trackRef:w}=da(),[v,y]=K(!1),[b,T]=K(!1),P=$(I=>ce(I,0,c.current.maxOffset),[]),M=r&&v&&a.length>e,{commitRenderOrder:x,dragLoopAdjustmentRef:S,normalizeLoopOffset:k,renderOrder:F,renderOrderRef:D,resetDragLoopAdjustment:z,resetRenderOrder:j}=ia({canLoop:M,columnCount:e,metricsRef:c,slidesLength:a.length}),B=J(()=>{const I=xt(a.length);return F.length!==a.length||F.some(Q=>Q<0||Q>=a.length)?I:F},[F,a.length]),G=J(()=>B.map(I=>a[I]),[B,a]),{currentIdx:le,resetCurrentIdx:ne,slideStyleStatesRef:re,syncPresentation:N}=la({metricsRef:c,renderOrderRef:D,slideRefs:s,visualMode:l}),W=E(()=>{});ve(()=>{Hn(F,B)||x(B)},[x,B,F]);const ae=$(()=>{const I=c.current;return I.logicalSnaps.length?zn(Me(I),P(p.current)):0},[P,p]),C=$(I=>c.current.measured?(_(I,-I),N(I),I):0,[_,N]),L=$(I=>{c.current.measured&&(p.current=I,C(I))},[p,C]),U=$(()=>{h(),N(m.current)},[m,h,N]),{stopMotion:Y}=Vn({direction:-1,enabled:v,eventMode:"pointer",getOffset:()=>p.current,getTarget:()=>u.current,onDragEnd:({drag:I,moved:Q,velocity:fe})=>{if(!Q){z();return}const $e=M?I.startOffset+S.current:I.startOffset,Fe=Vr({currentOffset:p.current,dragStartOffset:$e,logicalSnaps:Me(c.current),maxOffset:c.current.maxOffset,velocity:fe});z(),W.current(Fe)},onDragMove:({rawOffset:I})=>{const Q=c.current,fe=M?k(I+S.current,{isDrag:!0}):Yr({canLoop:!1,metrics:Q,rawOffset:I});C(fe)},onInteractionEnd:()=>{var I;return(I=o.current)==null?void 0:I.onEnd()},onInteractionStart:()=>{var I;z(),Y(),U(),(I=o.current)==null||I.onStart()}}),ee=$(I=>{const Q=M?k(I):P(I);L(Q)},[M,P,k,L]),R=$(I=>{const Q=c.current,fe=l==="default";if(Q.measured){if(Y(),U(),Math.abs(I-p.current)<.5||!w.current){ee(I);return}f({onBeforeStart:()=>N(fe?I:m.current),onRender:({renderedOffset:$e})=>!fe&&N($e),onComplete:()=>{ee(I)},renderedTarget:-I,target:I})}},[f,p,m,ee,Y,U,N,w,l]),V=$(I=>{const Q=c.current;if(!Q.logicalSnaps.length)return;const fe=Me(Q),$e=ce(Math.round(I),0,fe.length-1),Fe=fe[$e]??fe[0]??0;R(Fe)},[R]);ve(()=>{W.current=V},[V]);const H=$(I=>{const{changed:Q,offset:fe,order:$e,targetIndex:Fe}=Qr({canLoop:M,columnCount:e,metrics:c.current,order:D.current,offset:p.current,slidesLength:a.length,targetIndex:ae()+I});Q&&(x($e),L(fe)),V(Fe)},[M,e,x,ae,p,D,V,L,a.length]),oe=$((I=i)=>H(I),[H,i]),de=$((I=i)=>H(-I),[H,i]),ue=$((I,Q)=>{s.current[I]=Q},[]);ca({containerRef:u,metricsRef:c,offsetRef:p,renderOffset:C,setCanScroll:y,setIsMeasured:T,setOffset:ee,slideRefs:s,slideStyleStatesRef:re,slidesLength:a.length,trackRef:w}),ve(()=>{const I=c.current;if(!I.measured||g.current)return;g.current=!0;const Q=l==="spotlight-stack"?Me(I)[ce(n+fa,0,I.logicalSnaps.length-1)]:void 0,fe=t==="right-to-left"&&r&&n>0?Me(I)[ce(n,0,I.logicalSnaps.length-1)]:void 0;ee(Q??fe??qr(t,I.maxOffset))},[t,n,r,ee,a.length,l]),X(()=>{g.current=!1,z(),ne(),j()},[t,ne,z,j,a]),ve(()=>{!c.current.measured||l==="default"||N(p.current)},[p,F,N,l]),X(()=>()=>{Y(),U()},[Y,U]);const se=$(()=>c.current,[]),ge=$(()=>p.current,[p]);return{canScroll:v,canLoop:M,containerRef:u,currentIdx:le,getMetrics:se,getOffset:ge,isMeasured:b,renderedSlides:G,scrollNext:oe,scrollPrev:de,setOffset:ee,setSlideRef:ue,stopMotion:Y,trackRef:w}},ua={top:"flex-start",center:"center",bottom:"flex-end",mix:"flex-start"},Zn=(e,t,n)=>{switch(e){case 1.5:case 2:case 2.5:return{carouselVars:` 
          --chart-column-xxs: calc(22% + ${t}px${e===2.5?" - 9%":e===1.5?" + 15%":""}); 
          --chart-column-xs: calc(34% + ${t}px${e===2.5?" - 9%":e===1.5?" + 15%":""}); 
          --chart-column-s: calc(41% + ${t}px${e===2.5?" - 9%":e===1.5?" + 15%":""});
          --chart-column-m: calc(50% + ${t}px${e===2.5?" - 9%":e===1.5?" + 15%":""}); 
          --chart-column-l: calc(58% - ${t}px${e===2.5?" - 9%":e===1.5?" + 15%":""}); 
          --chart-column-xl: calc(66% + ${t}px${e===2.5?" - 9%":e===1.5?" + 15%":""}); 
          --chart-column-xxl: calc(78% + ${t}px${e===2.5?" - 9%":e===1.5?" + 15%":""}); `,gridVars:`
          --chart-column-xxs: calc(22% - ${t}px); 
          --chart-column-xs: calc(34% - ${t}px); 
          --chart-column-s: calc(42% - ${t}px);
          --chart-column-m: calc(47% - ${t}px); 
          --chart-column-l: calc(55% - ${t}px); 
          --chart-column-xl: calc(58% - ${t}px); 
          --chart-column-xxl: calc(78% - ${t}px); `,pattern:["s","l","xs","xl","m","m","xs","xl","xxl","xxs","xl","xs","xxl","xxs","xxl","xxs","xl","s","m","m"]};case 3:case 3.5:return{carouselVars:` 
          --chart-column-s: calc(24% + ${t}px${e===3.5?" - 5%":""});
          --chart-column-m: calc(31% + ${t}px${e===3.5?" - 5%":""});
          --chart-column-l: calc(41% + ${t}px${e===3.5?" - 5%":""});`,gridVars:`
          --chart-column-s: calc(25% - ${n/2}px);
          --chart-column-m: calc(33% - ${n/2}px);
          --chart-column-l: calc(42% - ${n}px);`,pattern:["l","s","m","s","m","l","m","l","s","l","s","m","m","s","l","s","l","m","l","s","m"]};case 4:case 4.5:return{carouselVars:` 
          --chart-column-s: calc(16% - ${t}px${e===4.5?" - 3%":""});
          --chart-column-m: calc(20% - ${t}px${e===4.5?" - 3%":""});
          --chart-column-l: calc(28% - ${t}px${e===4.5?" - 3%":""});
          --chart-column-xl: calc(33% + ${t}px${e===4.5?" - 3%":""});`,gridVars:`
          --chart-column-s: calc(17% - ${n/2}px);
          --chart-column-m: calc(21% - ${n/2}px);
          --chart-column-l: calc(29% - ${n}px);
          --chart-column-xl: calc(33% - ${n}px);`,pattern:["m","s","xl","l","m","xl","l","s","xl","m","l","s","m","xl","s","l","m","l","s","xl"]};case 5:return{carouselVars:` --chart-column-s: calc(14% + ${t}px);
          --chart-column-m: calc(19% + ${t}px);
          --chart-column-l: calc(24% - ${t}px);`,gridVars:`--chart-column-s: calc(15% - ${n/2}px);
          --chart-column-m: calc(20% - ${n}px);
          --chart-column-l: calc(25% - ${n}px);`,pattern:["s","l","m","s","l","m","l","s","l","s","l","m","s","l","s","m","s","l","s","l"]};case 6:return{carouselVars:`
          --chart-column-s: calc(11% + ${t*2}px);
          --chart-column-m: calc(16% + ${t*2}px);
          --chart-column-l: calc(20% + ${t}px);`,gridVars:`
          --chart-column-s: calc(12% - ${n/2}px);
          --chart-column-m: calc(17% - ${n}px);
          --chart-column-l: calc(21% - ${n}px);`,pattern:["s","m","s","l","m","l","m","s","l","s","m","l","s","m","l","m","s","l","s","m","s","l","m","l"]};case 7:return{carouselVars:`
          --chart-column-s: calc(9% + ${t*2}px);
          --chart-column-m: calc(11% - ${t}px);
          --chart-column-l: calc(15% - ${t}px);
          --chart-column-xl: calc(21% + ${t}px);`,gridVars:`
          --chart-column-s: calc(10% - ${n/2}px);
          --chart-column-m: calc(12% - ${n}px);
          --chart-column-l: calc(16% - ${n}px);
          --chart-column-xl: calc(22% - ${n}px);`,pattern:["m","l","s","xl","m","l","m","l","m","s","m","xl","l","m","l","xl","m","s","m","l","m","l","m","l","m","s","m","xl"]};case 8:return{carouselVars:`
          --chart-column-s: calc(7% + ${t}px);
          --chart-column-m: calc(11% + ${t}px);
          --chart-column-l: calc(16% + ${t}px);`,gridVars:`
          --chart-column-s: calc(8% - ${n/2}px);
          --chart-column-m: calc(12% - ${n}px);
          --chart-column-l: calc(18% - ${n}px);`,pattern:["m","l","s","m","s","m","l","m","l","m","l","m","s","m","s","m","s","l","m","m","l","m","s","m","s","m","m","l","m","s","m","l"]};case 9:return{carouselVars:`
          --chart-column-xs: calc(5% + ${t}px);
          --chart-column-s: calc(7% - ${t}px);
          --chart-column-m: calc(10% - ${t}px);
          --chart-column-l: calc(14% - ${t}px);
          --chart-column-xl: calc(18% - ${t}px);
          `,gridVars:`
          --chart-column-xs: calc(4% - ${t}px);
          --chart-column-s: calc(7% - ${t}px);
          --chart-column-m: calc(10% - ${t}px);
          --chart-column-l: calc(13% - ${t}px);
          --chart-column-xl: calc(15% - ${t}px);
          `,pattern:["m","s","xl","l","m","xs","m","s","m","l","s","m","l","xs","m","xl","m","s","m","xl","m","l","xs","s","l","m","s"]};case 10:return{carouselVars:`
          --chart-column-xs: calc(4% - ${t}px);
          --chart-column-s: calc(7% - ${t}px);
          --chart-column-m: calc(9% - ${t}px);
          --chart-column-l: calc(13% - ${t}px);
          --chart-column-xl: calc(17% - ${t}px);
          `,gridVars:`
          --chart-column-xs: 4%;
          --chart-column-s: 6%;
          --chart-column-m: 9%;
          --chart-column-l: 12%;
          --chart-column-xl: 16%;
          `,pattern:["s","m","s","l","xs","m","xl","s","xs","l","s","l","m","s","xl","xs","s","l","s","xs","xl","s","l","xs","m","s","l","s","xs","s"]};default:return null}},ga=(e,t)=>e[(t%e.length+e.length)%e.length],qn=(e,t,n)=>{const o=Zn(e,0,0);if(!(o!=null&&o.pattern.length))return;const a={"--gfa-editorial-width":`var(--chart-column-${ga(o.pattern,t)})`};return n==="mix"&&t%2===1&&(a["--gfa-editorial-align-self"]="flex-end"),a},Jn=(e,t,n,o,r)=>{const a=parseInt(o),i=a/n,l=ua[r],s=Zn(n,i,a);return s?`
    .gfa-widget.${t} .gfa-carousel__track--editorial.${t} {
      ${e==="grid"?"display:flex; flex-wrap: wrap;":""}
      align-items: ${l};
      ${e==="carousel"?s.carouselVars:s.gridVars}
    }

    .gfa-carousel__slide--editorial.${t} {
      ${e==="grid"?"flex: 0 0 auto;":""}
      min-width: var(--gfa-editorial-width);
      max-width: var(--gfa-editorial-width);
      align-self: var(--gfa-editorial-align-self, auto);
    }
  `:""},Qn={3:{"4:5":{translateX:5,rotate:4,arrowsTop:46},"4:3":{translateX:3,rotate:4.3,arrowsTop:46},"9:16":{translateX:2.1,rotate:4,arrowsTop:46},"1:1":{translateX:3.8,rotate:4,arrowsTop:46}},4:{"4:5":{translateX:5,rotate:4,arrowsTop:46},"4:3":{translateX:3,rotate:4.3,arrowsTop:46},"9:16":{translateX:2.1,rotate:4,arrowsTop:46},"1:1":{translateX:3.8,rotate:4,arrowsTop:46}},5:{"4:5":{translateX:5,rotate:4,arrowsTop:64},"4:3":{translateX:3,rotate:4.3,arrowsTop:80},"9:16":{translateX:2.1,rotate:4,arrowsTop:80},"1:1":{translateX:3.8,rotate:4,arrowsTop:80}},6:{"4:5":{translateX:5,rotate:4,arrowsTop:80},"4:3":{translateX:3,rotate:4,arrowsTop:80},"9:16":{translateX:2.2,rotate:4,arrowsTop:80},"1:1":{translateX:4,rotate:4,arrowsTop:80}},7:{"4:5":{translateX:4,rotate:3.2,arrowsTop:72},"4:3":{translateX:3,rotate:4.3,arrowsTop:72},"9:16":{translateX:2,rotate:3.6,arrowsTop:72},"1:1":{translateX:3,rotate:3,arrowsTop:72}},8:{"4:5":{translateX:4,rotate:3.2,arrowsTop:80},"4:3":{translateX:3,rotate:4,arrowsTop:80},"9:16":{translateX:2,rotate:3.5,arrowsTop:80},"1:1":{translateX:3,rotate:3,arrowsTop:80}},9:{"4:5":{translateX:3,rotate:2.5,arrowsTop:80},"4:3":{translateX:2.2,rotate:3,arrowsTop:80},"9:16":{translateX:2,rotate:3.5,arrowsTop:80},"1:1":{translateX:3,rotate:3,arrowsTop:80}},10:{"4:5":{translateX:2.6,rotate:2.1,arrowsTop:80},"4:3":{translateX:2,rotate:2.7,arrowsTop:80},"9:16":{translateX:1.8,rotate:3.5,arrowsTop:80},"1:1":{translateX:2,rotate:2,arrowsTop:80}}},_a=({alignment:e,arrowsMode:t,columnCount:n,gap:o,isEditorial:r,isMobile:a,postsBlock:i,rotation:l,type:s,widgetKey:c})=>{var p,m,_;const f=-(Number.parseFloat(o)||0)*(n-1)/n;let u=`
    .gfa-carousel.${c} {
      position: relative;
      display: flex;
      width: 100%;
      box-sizing: border-box;
      padding: ${pe(a?(p=i.padding)==null?void 0:p.mobile:(m=i.padding)==null?void 0:m.desktop)};
    }

    .gfa-carousel__viewport {
      width: 100%;
      box-sizing: border-box;
      overflow: visible;
    }

    .gfa-carousel--effect-default .gfa-carousel__viewport {
      overflow: hidden;
    }

    .gfa-carousel__track.${c} {
      display: flex;
      box-sizing: border-box;
      will-change: transform;
      align-items: flex-start;
      user-select: none;
      -webkit-user-select: none;
      width: 100%;
      ${l!==0?`padding-block: ${Math.abs(l)*(.7/n)}%;`:""}
      touch-action: pan-y;
    }

    .gfa-carousel__slide.${c} {
      position: relative;
      min-width: calc(${100/n}% + ${f}px);
      height: fit-content;
      box-sizing: border-box;
      scroll-snap-align: none;
      margin-left: ${o};
      z-index: var(--gfa-z-index, 0);
      pointer-events: none;
    }

    .gfa-carousel__slide.${c}:first-child {
      margin-left: 0;
    }

    .gfa-carousel__slide-media.${c} {
      --gfa-rotation: ${l}deg;
      position: relative;
      width: 100%;
      height: 100%;
      will-change: transform;
      transform: rotate(var(--gfa-rotation));
    }

    .gfa-carousel__slide--alternate-rotation.${c} .gfa-carousel__slide-media {
      --gfa-rotation: ${l>0?`-${l}`:Math.abs(l)}deg;
    }

    .gfa-carousel__slide--editorial.${c} .gfa-media {
      height: fit-content;
    }

    .gfa-carousel__viewport--with-autoplay {
      opacity: 0;
      will-change: opacity;
      transition: opacity 0.1s;
    }

    .gfa-carousel__viewport--autoplay-inited {
      opacity: 1;
    }
  `;if(s==="spotlight-stack"&&(u+=`
      .gfa-carousel--effect-spotlight-stack.${c} {
        min-width: 145vw;
      }

      .gfa-carousel--effect-spotlight-stack.${c} .gfa-arrow-left {
        left: 18%;
      }

      .gfa-carousel--effect-spotlight-stack.${c} .gfa-arrow-right {
        right: 18%;
      }

      .gfa-carousel--effect-spotlight-stack.${c} .gfa-carousel__slide-media {
        transform:
          translate3d(var(--gfa-shift-x, 0px), 0, 0)
          rotate(var(--gfa-rotation))
          scale(var(--gfa-scale, 1));
      }`),s==="arc-carousel"){const h=i.aspect==="auto"?"1:1":i.aspect,w=((_=Qn[n])==null?void 0:_[h])??Qn[3]["1:1"];u+=`
      .gfa-carousel--effect-arc-carousel.${c} .gfa-carousel__slide-media {
        ${l===0?"transform-origin: bottom;":""}        
        transform:
          translateY(calc(abs(var(--gfa-distance)) * abs(var(--gfa-distance)) * ${w.translateX}%))
          translateX(calc(calc(var(--gfa-distance) * abs(var(--gfa-distance))) * -0.3px))       
          ${l===0?`rotate(calc(var(--gfa-distance) * ${w.rotate}deg))`:"rotate(var(--gfa-rotation))"}
          ;
      }

      .gfa-carousel--effect-arc-carousel.${c} .gfa-arrow-button {
        top: ${w.arrowsTop}%;
        rotate: -10deg;
      }

      .gfa-carousel--effect-arc-carousel.${c} .gfa-arrow-right {
        rotate: 10deg;
      }`}return t==="hover"&&(u+=`
      .gfa-carousel.${c} .gfa-arrow-button.gfa-arrow-button--visible {
        opacity: 0;
        visibility: hidden;
      }

      .gfa-carousel.${c}:hover .gfa-arrow-button.gfa-arrow-button--visible {
        opacity: 1;
        visibility: visible;
      }
    `),a&&(u+=`
      .gfa-carousel.${c} .gfa-arrow-button.gfa-arrow-button--visible {
        opacity: 1;
        visibility: visible;
      }
    `),r&&e&&(u+=Jn("carousel",c,n,o,e)),u},ma=(e,t)=>!t||!e.length?e:[...e,...e,...e],ha=({options:e,mediaList:t,isMobile:n,postsBlock:o,widgetKey:r})=>{const{columnCount:a,arrows:i,autoplay:l,scrollMode:s,type:c,rotation:g}=e,f=Math.min(a,t.length||a),u=n&&c==="spotlight-stack"?"none":(i==null?void 0:i.show)||"hover",p=c==="editorial-carousel",m=e.gap,_=p?e.alignment:void 0,h=c==="carousel"||c==="editorial-carousel"?"default":c,w=e.loop??!1,v=J(()=>_a({type:c,widgetKey:r,columnCount:f,gap:m,isMobile:n,arrowsMode:u,postsBlock:o,isEditorial:p,alignment:_,rotation:g}),[c,r,f,m,n,u,o,p,_,g]),y=w?t.length:0,b=J(()=>{const T=ma(t,w),P=t.length||1;return T.map((M,x)=>({editorialStyle:p&&_?qn(f,x%P,_):void 0,key:`${M.id}-${x}`,logicalIndex:x%P,media:M}))},[_,f,p,w,t]);return J(()=>({arrowsMode:u,arrowsStyle:i,autoplay:l,columnCount:f,initialSlideIndex:y,isEditorial:p,loop:w,slides:b,sourceMedia:t,step:s==="card"?1:f,styles:v,visualMode:h,direction:e.direction??"right-to-left"}),[u,i,l,f,y,p,w,b,t,s,v,e.direction,h])},Kn=2,eo=(e,t,n,o)=>{if(n<=0||o<=0)return!1;const r=(t%o+o)%o;return((e-r)%o+o)%o<Math.min(n,o)},yt=({options:e,inViewport:t})=>{const{settings:n,isPreview:o,bootstrap:{selectedItemId:r,onItemSelect:a},mediaList:i,postsBlock:l,isMobile:s,isTouchScreen:c,popupIsOpen:g}=ie(),f=E({onEnd:()=>{},onStart:()=>{}}),{arrowsMode:u,arrowsStyle:p,autoplay:m,columnCount:_,initialSlideIndex:h,isEditorial:w,loop:v,slides:y,sourceMedia:b,step:T,styles:P,visualMode:M,direction:x}=ha({options:e,mediaList:i,isMobile:s,postsBlock:l,widgetKey:n.key}),S=pa({columnCount:_,direction:x,initialSlideIndex:h,interactionHandlersRef:f,loop:v,slides:y,step:T,visualMode:M}),k=Ur({autoplay:m,direction:x,engine:S,inViewport:t,isTouchScreen:c,popupIsOpen:g});ve(()=>{f.current={onEnd:k.resumeAfterInteraction,onStart:k.pauseForInteraction}},[k.pauseForInteraction,k.resumeAfterInteraction]);const F=S.canScroll&&u!=="none"&&(!s||Number.isInteger(_))&&!(s&&M==="arc-carousel"),D=Math.max(b.length-Math.ceil(_),0),z=S.canLoop?S.canScroll:S.canScroll&&S.currentIdx>0,j=S.canLoop?S.canScroll:S.canScroll&&S.currentIdx<D,B=s?16:p.variant==="plain"?24:20,G=Math.max(Math.ceil(_),1),le=G*(Kn*2+1),ne=S.currentIdx-G*Kn,re=b.length;return d(Z,{children:[d("style",{children:P}),d("div",{...o&&{onClick:N=>{a==null||a(l.id),N.preventDefault(),N.stopPropagation()}},onMouseEnter:k.handleMouseEnter,onMouseLeave:k.handleMouseLeave,ref:S.containerRef,className:O("gfa-carousel",`gfa-carousel--effect-${M}`,n.key,{"gfa--selectable":o,"gfa--selected":r===l.id}),children:[d("div",{className:O("gfa-carousel__viewport",n.key,{"gfa-carousel__viewport--with-autoplay":m.enabled,"gfa-carousel__viewport--autoplay-inited":k.inited}),onTouchEnd:k.resumeAfterInteraction,onTouchStart:k.pauseForInteraction,children:d("div",{className:O("gfa-carousel__track",n.key,{"gfa-carousel__track--editorial":w,[`gfa-carousel__track--${m.type}-running`]:k.isPlaying}),ref:S.trackRef,children:S.renderedSlides.map((N,W)=>{const ae=t&&eo(N.logicalIndex,S.currentIdx,G,re),C=eo(N.logicalIndex,ne,le,re);return d("div",{className:O("gfa-carousel__slide",n.key,{"gfa-carousel__slide--alternate-rotation":e.rotation!==0&&N.logicalIndex%2===1,"gfa-carousel__slide--editorial":w}),ref:L=>S.setSlideRef(W,L),style:N.editorialStyle,children:d("div",{className:O("gfa-carousel__slide-media",n.key),children:d(xe,{media:N.media,inViewport:ae,skipPreload:!C})})},N.key)})})}),F&&d(Z,{children:[d("button",{className:O(`gfa-arrow-button gfa-arrow-button__${p.variant} gfa-arrow-left`,{"gfa-arrow-button--visible":z}),onClick:N=>{N.preventDefault(),N.stopPropagation(),S.scrollPrev(),k.pauseForInteraction(),k.resumeAfterInteraction()},children:d(Te,{type:p.icon,flip:!0,size:B})}),d("button",{className:O(`gfa-arrow-button gfa-arrow-button__${p.variant} gfa-arrow-right`,{"gfa-arrow-button--visible":j}),onClick:N=>{N.preventDefault(),N.stopPropagation(),S.scrollNext(),k.pauseForInteraction(),k.resumeAfterInteraction()},children:d(Te,{type:p.icon,size:B})})]})]})]})},St=({carousel:e,inViewport:t,loop:n=!1})=>d(yt,{options:{...e,loop:n},inViewport:t}),wa=({columnCount:e,gap:t,rotation:n},o,r,a)=>{var i,l;return`
  .gfa-content__grid-container.${o} {
    display: grid;
    align-items: start;
    grid-template-columns: repeat(${e}, 1fr);
    grid-gap: ${t};
    width: 100%;
    padding: ${pe((i=a.padding)==null?void 0:i.desktop)};
    ${n!==0?`padding-block: ${Math.abs(n)*(.7/e)}%;`:""}
  }

  .gfa-content__grid-container.${o} > .gfa-content__grid-item.${o} {
    --gfa-rotation: ${n}deg;
    position: relative;
    transform: rotate(var(--gfa-rotation));
    will-change: transform;
  }

  .gfa-content__grid-container.${o} > .gfa-content__grid-item.${o}:nth-child(2n) {
    --gfa-rotation: ${n>0?-n:Math.abs(n)}deg;
  }

  .gfa-content__grid-container.${o} > .gfa-content__grid-item.${o} > .gfa-media {
    width: 100%;
  }

  ${r?`
    .gfa-content__grid-container.${o} {
      padding: ${pe((l=a.padding)==null?void 0:l.mobile)};
    }
  `:""}
`},va=({grid:e,inViewport:t})=>{const{settings:n,isPreview:o,bootstrap:{selectedItemId:r,onItemSelect:a},postsBlock:i,mediaList:l,isMobile:s}=ie(),{key:c}=n,{columnCount:g,gap:f}=e;let u=wa(e,c,s,i);const p=e.type==="editorial-grid";if(p){const m=Jn("grid",c,g,f,e.alignment);u+=m}return d(Z,{children:[d("style",{children:u}),d("div",{...o&&{onClick:m=>{a==null||a(i.id),m.preventDefault(),m.stopPropagation()}},className:O("gfa-content__grid-container",n.key,{"gfa-carousel__track--editorial":p,"gfa--selectable":o,"gfa--selected":r===i.id}),children:l.map((m,_)=>d("div",{className:O("gfa-content__grid-item",n.key,{"gfa-carousel__slide--editorial":p}),style:p?qn(g,_,e.alignment):void 0,children:d(xe,{media:m,inViewport:t,skipPreload:!1})},m.id))})]})},xa=()=>{var t;const e=(t=window.Shopify)==null?void 0:t.locale;return e?e.split("-")[0].toLowerCase():null},Ke=(e,t,n,o,r)=>J(()=>{const a=tr(e,xa,r);return er(e,a,t,n,o)},[e,t,n,o,r]),ba=(e,t)=>{const{background:n,border:o}=e;return`
  .gfa-content__button-container.${e.id} {
    width: ${e.width==="full"?"100%":"auto"};
    align-self: ${Ze[e.alignment.desktop]};
  }

  .gfa-content__button.${e.id} {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    text-decoration: none !important;
    text-align: center;
    cursor: pointer;
    transition: color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease;
    font-size: ${e.fontSize.desktop};
    font-weight: ${e.fontWeight.desktop};
    color: ${e.textColor};
    box-sizing: border-box;
    padding: ${pe(e.padding.desktop)};
    margin: ${e.margin?pe(e.margin.desktop):"unset"};
    background: ${n.enabled?n.color:"transparent"};
    border: ${o.enabled?`${o.size} solid ${o.color}`:"none"};
    width: ${e.width==="full"?"100%":"auto"};
    text-transform: ${e.textTransform};
    letter-spacing: 0;
    border-radius: ${e.radius.desktop};
  }

  .gfa-content__button.${e.id}:hover {
    color: ${e.textColor} !important;
    border: ${o.enabled?`${o.size} solid ${o.color} !important`:"none"};
    text-decoration: none !important;
    opacity: 0.9;
  }

  @media screen and (max-width: ${t.general.breakpoint}) {
    .gfa-content__button-container.${e.id} {
      align-self: ${Ze[e.alignment.mobile]};
    }

    .gfa-content__button.${e.id} {
      font-size: ${e.fontSize.mobile};
      padding: ${pe(e.padding.mobile)};
      margin: ${e.margin?pe(e.margin.mobile):"unset"};
      border-radius: ${e.radius.mobile};
      font-weight: ${e.fontWeight.mobile};
    }
  }
`},ya=e=>{const{isPreview:t,previewLocale:n,settings:o,bootstrap:{selectedItemId:r,onItemSelect:a}}=ie(),i=J(()=>ba(e,o),[e,o]),l=Ke(o,e.id,"label",e.label,n),s=()=>{t?a==null||a(e.id):$n(o.key,"openUrl",e.target!=="_blank")};return l?d("div",{className:O("gfa-content__button-container",e.id,{"gfa--selectable":t,"gfa--selected":r===e.id}),children:[d("style",{children:i}),d("a",{...!t&&{href:qo(e.href)},onClick:s,target:e.target,className:O("gfa-content__button",e.id),children:l})]}):null},to=({idx:e,count:t,hidden:n=!1})=>{const o=[...Array(t)].fill(0).map((r,a)=>a);return d("div",{className:O("gfa-media__dots",{"gfa-media__dots--hidden":n}),children:o.map(r=>d("div",{className:O("gfa-media__dot",{"gfa-media__dot-active":r===e}),children:d("div",{})},r))})},Sa=(e,t)=>`
  .gfa-content__text.${e.id} {
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    width: min(${e.width}, 100%);
    align-self: ${Ze[e.alignment.desktop]};
  }

  .gfa-content__text.${e.id} > h3,
  .gfa-content__text.${e.id} > span {
    text-align: ${e.alignment.desktop};
    font-size: ${e.fontSize.desktop};
    font-weight: ${e.fontWeight.desktop};
    line-height: 1.3;
    color: ${e.color};
    text-transform: ${e.textTransform};
    padding: ${pe(e.padding.desktop)};
    box-sizing: border-box;
    margin: 0;
  }

  @media screen and (max-width: ${t.general.breakpoint}) {
    .gfa-content__text.${e.id} {
      align-self: ${Ze[e.alignment.mobile]};
    }

    .gfa-content__text.${e.id} > h3,
    .gfa-content__text.${e.id} > span {
      font-size: ${e.fontSize.mobile};
      font-weight: ${e.fontWeight.mobile};
      line-height: 1.3;
      padding: ${pe(e.padding.mobile)};
      text-align: ${e.alignment.mobile};
    }
  }
`,$a=e=>{const{settings:t,isPreview:n,previewLocale:o,bootstrap:{selectedItemId:r,onItemSelect:a}}=ie(),i=J(()=>Sa(e,t),[e,t]),l=Ke(t,e.id,"value",e.value,o);return d(Z,{children:[d("style",{children:i}),d("div",{...n&&{onClick:()=>a==null?void 0:a(e.id)},className:O("gfa-content__text",e.id,{"gfa--selectable":n,"gfa--selected":r===e.id}),children:e.type==="text"?d("span",{children:l}):d("h3",{children:l})})]})},no=(e,t,n,o=!1)=>{const r=t/2,a=n/2,i=e.row+e.rowSpan/2,l=e.col+e.colSpan/2,s=o?30:150,c=(l-a)/n*s,g=(i-r)/t*s;return{startX:-c,startY:-g,endX:c,endY:g}},$t=(e,t)=>e%2===0?t:t>0?-t:Math.abs(t),Ae=(e,t)=>e==="9:16"||e==="auto"?"":`grid-template-rows: repeat(${t},minmax(0,1fr));`,ze=e=>e?e.map((t,n,o)=>`&:nth-child(${n+1}) { grid-row: ${t.row} / span ${t.rowSpan}; grid-column: ${t.col} / span ${t.colSpan}; z-index: ${o.length-n} }`).join(`
      `):"",oo={4:[{row:16,rowSpan:24,col:9,colSpan:24},{row:7,rowSpan:18,col:30,colSpan:18},{row:34,rowSpan:13,col:28,colSpan:13},{row:29,rowSpan:10,col:45,colSpan:10}],5:[{row:14,rowSpan:20,col:19,colSpan:20},{row:5,rowSpan:11,col:7,colSpan:11},{row:12,rowSpan:12,col:45,colSpan:12},{row:32,rowSpan:14,col:31,colSpan:14},{row:40,rowSpan:9,col:11,colSpan:9}],6:[{row:12,rowSpan:20,col:20,colSpan:20},{row:10,rowSpan:9,col:7,colSpan:9},{row:5,rowSpan:10,col:43,colSpan:10},{row:29,rowSpan:14,col:32,colSpan:14},{row:36,rowSpan:13,col:9,colSpan:13},{row:20,rowSpan:8,col:49,colSpan:8}],7:[{row:12,rowSpan:19,col:26,colSpan:19},{row:8,rowSpan:14,col:10,colSpan:14},{row:6,rowSpan:9,col:43,colSpan:9},{row:25,rowSpan:14,col:41,colSpan:14},{row:29,rowSpan:9,col:19,colSpan:9},{row:36,rowSpan:11,col:32,colSpan:11},{row:41,rowSpan:7,col:9,colSpan:7}],8:[{row:18,rowSpan:18,col:25,colSpan:18},{row:8,rowSpan:18,col:11,colSpan:18},{row:11,rowSpan:15,col:35,colSpan:15},{row:30,rowSpan:14,col:13,colSpan:14},{row:34,rowSpan:13,col:40,colSpan:13},{row:28,rowSpan:7,col:4,colSpan:7},{row:5,rowSpan:8,col:47,colSpan:8},{row:21,rowSpan:10,col:52,colSpan:10}]},ka=e=>`
  .gfa-collage__aside.${e} {
    opacity: 0;
    will-change: opacity;
    transition: opacity 200ms;
  }
  
  .gfa-collage__aside.${e}.gfa--in-viewport {
    opacity: 1;
    transition: opacity 750ms ease-in-out 300ms;
  }
`,Ta=e=>`
  .gfa-collage__aside.${e} .gfa-collage__item {
    opacity: 0;
    scale: 0;
    will-change: opacity, scale;
    transition: opacity 250ms, scale 250ms;
  }

  .gfa-collage__aside.${e}.gfa--selectable .gfa-collage__item{
    transition: none;
  }

  .gfa-collage__aside.${e} .gfa-collage__item {
    &:nth-child(1) { --transform-delay: 300ms }
    &:nth-child(2) { --transform-delay: 400ms }
    &:nth-child(3) { --transform-delay: 550ms }
    &:nth-child(4) { --transform-delay: 600ms }
    &:nth-child(5) { --transform-delay: 750ms }
    &:nth-child(6) { --transform-delay: 800ms }
    &:nth-child(7) { --transform-delay: 850ms }
    &:nth-child(8) { --transform-delay: 950ms }
  }

  .gfa-collage__aside.${e}.gfa--in-viewport .gfa-collage__item {
    opacity: 1;
    scale: 1;
    transition: opacity 750ms cubic-bezier(0, 0, 0.3, 1) var(--transform-delay), scale 750ms cubic-bezier(0, 0, 0.3, 1) var(--transform-delay);
  }

  .gfa-collage__aside.${e}.gfa--in-viewport:hover .gfa-collage__item  {
    transition: opacity 750ms cubic-bezier(0, 0, 0.3, 1), scale 750ms cubic-bezier(0, 0, 0.3, 1);
  }

  .gfa-collage__aside.${e}.gfa--in-viewport .gfa-collage__item:hover {
    scale: 1.1;
    z-index: 10 !important;
  }
`,Ma=({key:e,general:t},n,o)=>`
  .gfa-widget.${e}:has(.gfa-collage__aside) {
    display: flex;
    flex-direction: ${n.position==="right"?"row":"row-reverse"};
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
  }

  
  @media screen and (max-width: ${t.breakpoint}) {
    .gfa-widget.${e}:has(.gfa-collage__aside) {
      flex-direction: column-reverse;
    }

    .gfa-widget.${e}:has(.gfa-collage__aside) .gfa-content__text > h3,
    .gfa-widget.${e}:has(.gfa-collage__aside) .gfa-content__text > span,
    .gfa-widget.${e}:has(.gfa-collage__aside) .gfa-content__button-container {
      align-self: center;
      text-align: center;
    } 
  }

  .gfa-widget.${e}:has(.gfa-collage__aside) .gfa-content {
    --gfa-content-max-width: 100%;
    flex: ${n.proportion}%;
    padding-inline: 4% 20px;
    z-index: 1;
  }
  
  .gfa-collage__aside {
    flex: ${100-n.proportion}%;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(64,minmax(0,1fr));
    ${Ae(o.aspect,54)}
  }

  ${n.animationType==="slide"?ka(e):Ta(e)}
  
  .gfa-collage__aside .gfa-collage__item {
    border-radius: var(--gfa-media-border-radius);
    will-change: transform, scale;
    transition: scale .7s cubic-bezier(0, 0, 0.3, 1);
  }

  .gfa-collage__item:hover {
    z-index: 10 !important;
  }
    
  .gfa-collage__aside.gfa-collage__layout-${n.mediaCount} .gfa-collage__item { 
    ${ze(oo[n.mediaCount])}
  }
`,[Ia,Ca]=[54,64],Ea=({collage:e,inViewport:t})=>{const{settings:n,isPreview:o,bootstrap:r,postsBlock:a,mediaList:i}=ie(),l=e.rotation,s=e.mediaCount>8?8:e.mediaCount<4?4:e.mediaCount,c=e.animationType==="slide",{sectionRef:g,currentTransform:f}=mt(c?{inViewport:t,isPreview:o}:{inViewport:!1,isPreview:!1});return d(Z,{children:[d("style",{children:Ma(n,e,a)}),d("div",{ref:g,...o&&{onClick:u=>{var p;(p=r==null?void 0:r.onItemSelect)==null||p.call(r,a.id),u.preventDefault(),u.stopPropagation()}},className:O("gfa-collage__aside",`gfa-collage__layout-${s}`,n.key,{"gfa--selectable":o,"gfa--selected":(r==null?void 0:r.selectedItemId)===a.id,"gfa--in-viewport":t}),...c&&{style:{"--transform":f==null?void 0:f.current.toString()}},children:i.slice(0,s).map((u,p)=>{const m=c?no(oo[s][p],Ia,Ca):null;return d("div",{className:"gfa-collage__item",...c&&m&&{style:{transform:`translate3d(
                  calc(${m.startX}% * (1 - var(--transform)) + ${m.endX}% * var(--transform)), 
                  calc(${m.startY}% * (1 - var(--transform)) + ${m.endY}% * var(--transform)), 
                  0px
                ) rotate(${$t(p,l)}deg)`}},...!c&&{style:{transform:`rotate(${$t(p,l)}deg)`}},children:d(xe,{media:u,inViewport:t,skipPreload:!1,hoverEffect:e.mediaHover})},u.id)})})]})},La="1280px",Pa={5:{columns:4,rows:2,variants:[[{index:1,column:1,row:1}],[{index:3,column:2,row:1}],[{index:5,column:3,row:1}]]},6:{columns:6,rows:2,variants:[[{index:1,column:1,row:1},{index:4,column:4,row:1}],[{index:1,column:1,row:1},{index:6,column:5,row:1}],[{index:3,column:2,row:1},{index:4,column:4,row:1}],[{index:3,column:2,row:1},{index:6,column:5,row:1}]]},9:{columns:6,rows:2,variants:[[{index:1,column:1,row:1}],[{index:3,column:2,row:1}],[{index:5,column:3,row:1}],[{index:7,column:4,row:1}],[{index:9,column:5,row:1}]]},10:{columns:4,rows:4,variants:[[{index:3,column:2,row:1},{index:8,column:2,row:3}],[{index:5,column:3,row:1},{index:10,column:3,row:3}],[{index:1,column:1,row:1},{index:6,column:1,row:3}],[{index:1,column:1,row:1},{index:10,column:3,row:3}],[{index:5,column:3,row:1},{index:6,column:1,row:3}]]},12:{columns:6,rows:3,variants:[[{index:2,column:2,row:1},{index:9,column:4,row:2}],[{index:4,column:4,row:1},{index:8,column:2,row:2}],[{index:1,column:1,row:1},{index:12,column:5,row:2}],[{index:5,column:5,row:1},{index:6,column:1,row:2}],[{index:2,column:2,row:1},{index:3,column:4,row:1}],[{index:8,column:2,row:2},{index:9,column:4,row:2}],[{index:1,column:1,row:1},{index:4,column:5,row:1}],[{index:7,column:1,row:2},{index:10,column:5,row:2}]]},13:{columns:4,rows:4,variants:[[{index:1,column:1,row:1}],[{index:2,column:2,row:1}],[{index:3,column:3,row:1}],[{index:4,column:2,row:1}],[{index:5,column:1,row:3}],[{index:6,column:2,row:3}],[{index:7,column:3,row:3}]]}},ro={10:{columns:8,rows:2,variants:[[{index:3,column:2,row:1},{index:8,column:6,row:1}],[{index:5,column:3,row:1},{index:10,column:7,row:1}],[{index:1,column:1,row:1},{index:6,column:5,row:1}],[{index:1,column:1,row:1},{index:10,column:7,row:1}],[{index:5,column:3,row:1},{index:6,column:5,row:1}]]},13:{columns:8,rows:2,variants:[[{index:1,column:1,row:1}],[{index:2,column:2,row:1}],[{index:3,column:3,row:1}],[{index:4,column:4,row:1}],[{index:5,column:5,row:1}],[{index:6,column:6,row:1}],[{index:7,column:7,row:1}]]}},Ra=(e,{index:t,column:n,row:o})=>`${e} .gfa-media:nth-child(${t}) { grid-column: ${n} / span 2; grid-row: ${o} / span 2; }`,ao=(e,t,{columns:n,rows:o,variants:r})=>`
  .gfa-collage__classic--preset-${t}.${e} {
    grid-template-columns: repeat(${n}, 1fr);
    grid-template-rows: repeat(${o}, 1fr);
  }
  ${r.map((a,i)=>a.map(l=>Ra(`.gfa-collage__classic--preset-${t}.gfa-collage__classic--variant-${i+1}`,l)).join(`
`)).join(`
`)}
`,Aa=({general:e,key:t},{mediaCount:n,gap:o})=>`
  .gfa-collage__classic.${t} {
    display: grid;
    align-items: start;
    width: 100%;
    gap: ${o};
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${e.breakpoint}) {
    .gfa-collage__classic--variant-1.${t} .gfa-media { &:nth-child(3n+3) { grid-column: span 2; } }
    .gfa-collage__classic--variant-2.${t} .gfa-media { &:nth-child(3n+1) { grid-column: span 2; } }
    .gfa-collage__classic--variant-4.${t} .gfa-media { &:nth-child(4n+3), &:nth-child(4n+4) { grid-column: 1 / -1; } }
    .gfa-collage__classic--variant-3.${t} .gfa-media { &:nth-child(5n+1) { grid-column: 1 / -1; } }    
  }

  @media screen and (min-width: ${e.breakpoint}) {
    ${ao(t,n,Pa[n])}
  }

  @media screen and (min-width: ${La}) {
    ${ro[n]?ao(t,n,ro[n]):""}
  }
`,za=({collage:e,inViewport:t})=>{const{settings:n,isPreview:o,bootstrap:r,postsBlock:a,mediaList:i}=ie(),l=J(()=>Aa(n,e),[n,e]);return d(Z,{children:[d("style",{children:l}),d("div",{...o&&{onClick:s=>{var c;(c=r==null?void 0:r.onItemSelect)==null||c.call(r,a.id),s.preventDefault(),s.stopPropagation()}},className:O("gfa-collage__classic",`gfa-collage__classic--preset-${e.mediaCount}`,`gfa-collage__classic--variant-${e.variant}`,n.key,{"gfa--selectable":o,"gfa--selected":(r==null?void 0:r.selectedItemId)===a.id,"gfa--in-viewport":t}),children:i.map(s=>d(xe,{media:s,inViewport:t,skipPreload:!1},s.id))})]})},Oa={mobile:{rows:28,cols:22},desktop:{rows:27,cols:96}},Oe={4:{desktop:{top:[{row:5,rowSpan:20,col:4,colSpan:20},{row:8,rowSpan:16,col:69,colSpan:16}],bottom:[{row:5,rowSpan:15,col:21,colSpan:15},{row:9,rowSpan:14,col:79,colSpan:14}]},mobile:{top:[{row:2,rowSpan:11,col:2,colSpan:11},{row:12,rowSpan:6,col:15,colSpan:7}],bottom:[{row:1,rowSpan:8,col:2,colSpan:8},{row:6,rowSpan:9,col:12,colSpan:10}]}},5:{desktop:{top:[{row:6,rowSpan:20,col:3,colSpan:20},{row:3,rowSpan:16,col:77,colSpan:16},{row:9,rowSpan:10,col:48,colSpan:10}],bottom:[{row:10,rowSpan:15,col:26,colSpan:15},{row:5,rowSpan:13,col:69,colSpan:13}]},mobile:{top:[{row:1,rowSpan:10,col:1,colSpan:12},{row:15,rowSpan:10,col:5,colSpan:10},{row:9,rowSpan:7,col:16,colSpan:7}],bottom:[{row:1,rowSpan:8,col:2,colSpan:8},{row:9,rowSpan:9,col:12,colSpan:10}]}},6:{desktop:{top:[{row:11,rowSpan:9,col:2,colSpan:9},{row:4,rowSpan:14,col:36,colSpan:14},{row:13,rowSpan:10,col:70,colSpan:11}],bottom:[{row:3,rowSpan:10,col:17,colSpan:15},{row:11,rowSpan:14,col:59,colSpan:14},{row:2,rowSpan:8,col:87,colSpan:8}]},mobile:{top:[{row:1,rowSpan:10,col:1,colSpan:12},{row:15,rowSpan:10,col:5,colSpan:10},{row:9,rowSpan:7,col:16,colSpan:7}],bottom:[{row:1,rowSpan:8,col:2,colSpan:8},{row:16,rowSpan:6,col:5,colSpan:6},{row:7,rowSpan:9,col:12,colSpan:10}]}},7:{desktop:{top:[{row:20,rowSpan:8,col:3,colSpan:8},{row:7,rowSpan:12,col:24,colSpan:12},{row:3,rowSpan:14,col:51,colSpan:14},{row:14,rowSpan:10,col:77,colSpan:10}],bottom:[{row:5,rowSpan:15,col:17,colSpan:15},{row:12,rowSpan:12,col:60,colSpan:12},{row:4,rowSpan:8,col:88,colSpan:8}]},mobile:{top:[{row:1,rowSpan:6,col:14,colSpan:6},{row:6,rowSpan:7,col:4,colSpan:7},{row:13,rowSpan:8,col:14,colSpan:8},{row:18,rowSpan:11,col:1,colSpan:11}],bottom:[{row:1,rowSpan:8,col:2,colSpan:8},{row:8,rowSpan:9,col:13,colSpan:10},{row:19,rowSpan:6,col:5,colSpan:6}]}},8:{desktop:{top:[{row:20,rowSpan:8,col:3,colSpan:8},{row:10,rowSpan:12,col:26,colSpan:12},{row:3,rowSpan:14,col:55,colSpan:14},{row:16,rowSpan:10,col:77,colSpan:10}],bottom:[{row:13,rowSpan:11,col:13,colSpan:11},{row:9,rowSpan:9,col:36,colSpan:9},{row:13,rowSpan:11,col:64,colSpan:11},{row:4,rowSpan:8,col:88,colSpan:8}]},mobile:{top:[{row:1,rowSpan:11,col:1,colSpan:11},{row:10,rowSpan:9,col:13,colSpan:9},{row:17,rowSpan:8,col:3,colSpan:8},{row:24,rowSpan:5,col:16,colSpan:5},{row:5,rowSpan:8,col:47,colSpan:8},{row:21,rowSpan:10,col:52,colSpan:10}],bottom:[{row:1,rowSpan:6,col:4,colSpan:6},{row:6,rowSpan:7,col:13,colSpan:7},{row:12,rowSpan:8,col:2,colSpan:8},{row:18,rowSpan:10,col:12,colSpan:10}]}},9:{desktop:{top:[{row:11,rowSpan:8,col:5,colSpan:8},{row:4,rowSpan:12,col:26,colSpan:12},{row:1,rowSpan:14,col:53,colSpan:14},{row:14,rowSpan:10,col:77,colSpan:10}],bottom:[{row:16,rowSpan:7,col:4,colSpan:7},{row:1,rowSpan:11,col:16,colSpan:11},{row:11,rowSpan:9,col:36,colSpan:9},{row:13,rowSpan:13,col:62,colSpan:13},{row:5,rowSpan:8,col:88,colSpan:8}]}},10:{desktop:{top:[{row:2,rowSpan:8,col:4,colSpan:8},{row:7,rowSpan:12,col:28,colSpan:12},{row:1,rowSpan:14,col:58,colSpan:14},{row:16,rowSpan:10,col:76,colSpan:10},{row:2,rowSpan:7,col:87,colSpan:7}],bottom:[{row:19,rowSpan:7,col:4,colSpan:7},{row:1,rowSpan:11,col:12,colSpan:11},{row:12,rowSpan:13,col:32,colSpan:14},{row:10,rowSpan:11,col:63,colSpan:11},{row:16,rowSpan:8,col:86,colSpan:8}]}},11:{desktop:{top:[{row:13,rowSpan:8,col:4,colSpan:8},{row:6,rowSpan:12,col:22,colSpan:12},{row:2,rowSpan:14,col:48,colSpan:14},{row:13,rowSpan:10,col:71,colSpan:10},{row:2,rowSpan:7,col:87,colSpan:7}],bottom:[{row:18,rowSpan:7,col:4,colSpan:7},{row:1,rowSpan:11,col:15,colSpan:11},{row:13,rowSpan:14,col:35,colSpan:14},{row:10,rowSpan:11,col:63,colSpan:11},{row:5,rowSpan:8,col:81,colSpan:8},{row:19,rowSpan:5,col:90,colSpan:5}]}},12:{desktop:{top:[{row:13,rowSpan:8,col:4,colSpan:8},{row:2,rowSpan:5,col:9,colSpan:5},{row:6,rowSpan:12,col:22,colSpan:12},{row:2,rowSpan:14,col:48,colSpan:14},{row:11,rowSpan:10,col:71,colSpan:10},{row:2,rowSpan:7,col:87,colSpan:7}],bottom:[{row:16,rowSpan:7,col:4,colSpan:7},{row:1,rowSpan:11,col:15,colSpan:11},{row:10,rowSpan:14,col:35,colSpan:14},{row:10,rowSpan:11,col:63,colSpan:11},{row:5,rowSpan:8,col:81,colSpan:8},{row:19,rowSpan:5,col:90,colSpan:5}]}}},Fa=({key:e,general:t},n,o)=>{var r,a;return`
  .gfa-widget.${e}:has(.gfa-collage__top-line) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
  }  

  .gfa-collage__top-line .gfa-collage__item,
  .gfa-collage__bottom-line .gfa-collage__item {
    height: fit-content;
    border-radius: var(--gfa-media-border-radius);
    will-change: transform, scale;
    transition: scale .7s cubic-bezier(0, 0, 0.3, 1);
  }

  .gfa-collage__item:hover {
    z-index: 10 !important;
  }

  .gfa-collage__top-line,
  .gfa-collage__bottom-line {
    display: grid;
    grid-template-columns: repeat(96,minmax(0,1fr));
    ${Ae(o.aspect,27)}
    width: 100%;

    opacity: 0;
    will-change: opacity;
    transition: opacity 750ms ease-in-out 300ms;
  }

  .gfa-widget.${e}:has(.gfa--in-viewport) .gfa-collage__top-line,
  .gfa-widget.${e}:has(.gfa--in-viewport) .gfa-collage__bottom-line {
    opacity: 1;
  }

  .gfa-widget.${e}:has(.gfa-collage__top-line:not(.gfa--selectable)) .gfa-content {
    pointer-events: none;
  }
  .gfa-widget.${e}:has(.gfa-collage__top-line) .gfa-content__button-container {
    pointer-events: all;
  }

  .gfa-widget.${e}:has(.gfa-collage__top-line) .gfa-content {
    --gfa-content-max-width: 100%;
  }
  
  @media screen and (max-width: ${t.breakpoint}) {  
    .gfa-widget.${e}:has(.gfa-collage__top-line) .gfa-content {
      padding-block: 44px;
    }

    .gfa-collage__top-line,
    .gfa-collage__bottom-line {
      display: grid;
      grid-template-columns: repeat(22,minmax(0,1fr));
      width: 100%;
    }

    .gfa-collage__layout-4 {
      ${Ae(o.aspect,17)}
    }
      
    .gfa-collage__layout-5, .gfa-collage__layout-6 {
      ${Ae(o.aspect,22)}
    }
      
    .gfa-collage__layout-7  {      
      ${Ae(o.aspect,28)}
    }      

   .gfa-collage__top-line.gfa-collage__layout-${n} .gfa-collage__item { 
      ${ze((r=Oe[n].mobile)==null?void 0:r.top)} 
    }
    .gfa-collage__bottom-line.gfa-collage__layout-${n} .gfa-collage__item { 
      ${ze((a=Oe[n].mobile)==null?void 0:a.bottom)} 
    }
  }

  @media screen and (min-width: ${t.breakpoint}) {
    .gfa-widget.${e}:has(.gfa-collage__top-line) .gfa-content {
      position: absolute;
      z-index: 1;
    }

    .gfa-collage__top-line.gfa-collage__layout-${n} {
      .gfa-collage__item { ${ze(Oe[n].desktop.top)} }
    }
    .gfa-collage__bottom-line.gfa-collage__layout-${n} {
      .gfa-collage__item { ${ze(Oe[n].desktop.bottom)} }
    }
  }
`},Na={4:2,5:3,6:3,7:4,8:4,9:4,10:5,11:5,12:6},io=({line:e,collage:t,inViewport:n})=>{const{settings:o,isPreview:r,bootstrap:a,postsBlock:i,mediaList:l,isMobile:s}=ie(),{sectionRef:c,currentTransform:g}=mt({inViewport:n}),f=t.rotation,u=s?Math.min(t.mediaCount,8):t.mediaCount,p=Na[u],m=e==="top"?l.slice(0,p):l.slice(p,u),_=s?"mobile":"desktop",h=Oe[u][_],{rows:w,cols:v}=Oa[_];return d(Z,{children:[e==="top"&&d("style",{children:Fa(o,u,i)}),d("div",{ref:c,...r&&{onClick:y=>{var b;(b=a==null?void 0:a.onItemSelect)==null||b.call(a,i.id),y.preventDefault(),y.stopPropagation()}},className:O(`gfa-collage__${e}-line`,`gfa-collage__layout-${u}`,o.key,{"gfa--selectable":r,"gfa--selected":(a==null?void 0:a.selectedItemId)===i.id,"gfa--in-viewport":n}),style:{"--transform":g.current.toString()},children:m.map((y,b)=>{const T=h[e][b],P=no(T,w,v,s);return d("div",{className:"gfa-collage__item",style:{transform:`translate3d(
                  calc(${P.startX}% * (1 - var(--transform)) + ${P.endX}% * var(--transform)), 
                  calc(${P.startY}% * (1 - var(--transform)) + ${P.endY}% * var(--transform)), 
                  0px
                ) rotate(${$t(b,f)}deg)`},children:d(xe,{media:y,inViewport:n,skipPreload:!1,hoverEffect:t.mediaHover})},y.id)})})]})},Da=(e,t)=>`
  .gfa-widget.${e}:has(.gfa-dual-strip) {
    width: 100%;
    height: 100vh;
    min-height: 600px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .gfa-widget.${e}:has(.gfa-dual-strip) .gfa-content {
    z-index: 1;
  }

  .gfa-dual-strip.${e} {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    overflow: hidden;
    touch-action: pan-y;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .gfa-dual-strip.${e} .gfa-carousel:last-child .gfa-carousel__track {
    align-items: flex-end;
  }
  
  .gfa-dual-strip.${e} .gfa-carousel .gfa-media.${e} {
    border-radius: ${t.topPosts.radius};
  }
  
  .gfa-dual-strip.${e} .gfa-carousel:last-child .gfa-media.${e} {
    border-radius: ${t.bottomPosts.radius};
  }

  .gfa-dual-strip.${e} .gfa-carousel__slide--editorial:hover {
    z-index: 1;
  }
`,Ua=({options:e,inViewport:t})=>{const{settings:n,isPreview:o,bootstrap:{selectedItemId:r,onItemSelect:a},postsBlock:i}=ie(),{key:l}=n,s=J(()=>Da(l,e),[l,e]),c=J(()=>({type:"editorial-carousel",mediaCount:e.mediaCount,columnCount:e.columnCount,gap:e.gap,autoplay:e.autoplay,arrows:{...n.popup.arrows,show:"none"},alignment:"top",rotation:0,scrollMode:"card",loop:!0}),[e,n.popup.arrows]);return d(Z,{children:[d("style",{children:s}),d("div",{...o&&{onClick:g=>{a==null||a(i.id),g.preventDefault(),g.stopPropagation()}},className:O("gfa-dual-strip",l,{"gfa--selectable":o,"gfa--selected":r===i.id,"gfa--in-viewport":t}),children:[d(yt,{options:c,inViewport:t}),d(yt,{options:{...c,direction:"left-to-right"},inViewport:t})]})]})},et={dragStartThresholdPx:6,dragVelocityMultiplier:60,maxDragVelocity:36,dragVelocitySmoothing:.91},Xa=.55,Ha=.4,Ba=.5,Wa=.7,co=100,ja=.15,Ga=200,Ya=1e4,lo=500,Va=.015,Za=500,so=2,qa=.95,Ja=.95,Qa=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,Ka={maxOffset:0},ei=({autoplay:e,containerRef:t,inViewport:n=!0,isMobile:o=!1,itemCount:r,popupIsOpen:a=!1})=>{const i=E(Ka),l=E({}),s=E(0),c=E(!1),g=E(),f=E(null),u=E(),p=E(0),m=E(!1),_=E(null),h=t??_,w=E(0),[v,y]=K(!1),[b,T]=K(!1),P=J(()=>o?{...et,dragVelocityMultiplier:et.dragVelocityMultiplier*Xa,maxDragVelocity:et.maxDragVelocity*Ha}:et,[o]),M=$(R=>{var V;w.current=R,(V=h.current)==null||V.style.setProperty("--gfa-horizontal-scroll-offset",`${R}px`)},[h]),x=$(R=>ce(R,-i.current.maxOffset,0),[]),S=$(()=>w.current,[]),k=$(()=>{cancelAnimationFrame(u.current??0),u.current=void 0,p.current=0},[]),F=$(()=>{const R=h.current;return R?R.closest(".gfa-widget")??R:null},[h]),D=$(()=>{if(u.current!==void 0)return;const R=()=>{const V=p.current;if(Math.abs(V)<Ja){u.current=void 0,p.current=0;return}M(x(w.current+V)),p.current*=qa,u.current=requestAnimationFrame(R)};u.current=requestAnimationFrame(R)},[x,M]),z=(e==null?void 0:e.enabled)===!0&&e.type==="seamless"&&n&&!a&&v,j=$(()=>{const R=l.current;clearTimeout(R.edgePause),cancelAnimationFrame(R.frame??0),clearTimeout(R.postReturnPause),clearTimeout(R.resume),cancelAnimationFrame(R.returnFrame??0),clearTimeout(R.start),l.current={}},[]),B=$(()=>{s.current+=1,j()},[j]),G=$(R=>s.current===R&&z&&!c.current,[z]),le=$((R,V,H)=>{let oe=0;const de=H-V,ue=se=>{if(!G(R))return;oe||(oe=se);const ge=Math.min((se-oe)/Za,1),I=V+de*Qa(ge);if(M(I),ge<1){l.current.returnFrame=requestAnimationFrame(ue);return}M(H),l.current.postReturnPause=window.setTimeout(()=>{var Q;G(R)&&((Q=g.current)==null||Q.call(g))},lo)};l.current.returnFrame=requestAnimationFrame(ue)},[G,M]),ne=$(()=>{if(!z||(e==null?void 0:e.speed)===void 0)return;s.current+=1,j();const R=s.current,V=e.speed*Va;let H=0;const oe=de=>{if(!G(R))return;H||(H=de);const ue=de-H,se=-i.current.maxOffset,ge=w.current-ue*V;if(H=de,ge<=se){const I=Math.max(ge,se);M(I),l.current.edgePause=window.setTimeout(()=>{G(R)&&le(R,I,0)},lo);return}M(ge),l.current.frame=requestAnimationFrame(oe)};l.current.frame=requestAnimationFrame(oe)},[e==null?void 0:e.speed,G,z,j,M,le]);X(()=>{g.current=ne},[ne]);const re=$((R=Ga)=>{!z||c.current||(clearTimeout(l.current.start),l.current.start=window.setTimeout(()=>{!z||c.current||ne()},R))},[z,ne]),N=$(()=>{c.current=!0,B()},[B]),W=$(()=>{z&&(c.current=!1,clearTimeout(l.current.resume),l.current.resume=window.setTimeout(()=>{re(0)},Ya))},[z,re]),ae=$(({cancel:R,drag:V,moved:H})=>{f.current=null;const oe=m.current;if(m.current=!1,T(!1),!!V.active){if(R||!v){k(),M(x(w.current)),oe&&W();return}H||(p.current=0),oe&&W()}},[v,x,M,W,k]),C=$(({deltaX:R,deltaY:V,drag:H,rawOffset:oe})=>{if(!m.current){if(o&&Math.abs(V)>Math.abs(R))return;m.current=!0,T(!0),N(),k()}const de=f.current??H.startOffset,ue=oe-de,se=o?co*Ba:co,ge=1+Math.min(Math.abs(H.velocity)*se,ja),I=x(w.current+ue*ge);f.current=oe,M(I),p.current=H.velocity*(o?so*Wa:so),D()},[x,o,N,M,D,k]),L=$(R=>R instanceof Element&&!!R.closest("button, .gfa-content__button-container"),[]),{stopMotion:U}=Vn({direction:1,enabled:v,eventMode:"pointer",getOffset:S,getTarget:F,onDragEnd:ae,onDragMove:C,shouldIgnoreTarget:L,tuning:P}),Y=$(()=>{const R=h.current;R&&(i.current={maxOffset:Math.max(R.scrollWidth-R.clientWidth,0)},y(i.current.maxOffset>1),M(x(w.current)))},[x,h,M]),ee=$(()=>{var R;return[h.current,...Array.from(((R=h.current)==null?void 0:R.children)??[])]},[h]);return ve(()=>{Y()},[r,Y]),Gn({getTargets:ee,onResize:Y}),X(()=>z?(re(),B):(c.current=!1,B(),B),[B,z,re]),X(()=>()=>{m.current=!1,B(),k(),U()},[B,k,U]),{containerRef:h,isPressed:b}},ti=[0,10,14,20,24,30,34,40,50],ni=[5,6,7,8,10,12],fo="25%",po="55%",uo=e=>e[Math.floor(Math.random()*e.length)],go=()=>({"--gfa-horizontal-scroll-gap":`${uo(ni)}%`,"--gfa-horizontal-scroll-y":`${uo(ti)}%`}),oi=(e,t,n)=>`
  .gfa-widget.${e}:has(.gfa-horizontal-scroll) {
    width: 100%;
    height: 100vh;
    min-height: 600px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: grab;
  }

  .gfa-widget.${e}:has(.gfa-horizontal-scroll) .gfa-content {
    --gfa-content-max-width: 100%;
    isolation: isolate;
  }

  .gfa-widget.${e}:has(.gfa-horizontal-scroll) .gfa-content,
  .gfa-widget.${e}:has(.gfa-horizontal-scroll) .gfa-content__text {
    user-select: none;
    z-index: 2;
  }

  .gfa-horizontal-scroll {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    overflow: hidden;
    touch-action: pan-y;
    display: flex;
    align-items: stretch;
  }
    
  .gfa-widget.${e}:has(.gfa-horizontal-scroll:not(.gfa--selectable)) .gfa-content {
    pointer-events: none;
  }

  .gfa-widget.${e}:has(.gfa-horizontal-scroll) .gfa-content .gfa-content__button-container {
    pointer-events: auto;
  }

  .gfa-horizontal-scroll__item {
    flex: 0 0 ${n?po:fo};
    min-width: ${n?po:fo};
    margin: 0 var(--gfa-horizontal-scroll-gap);
    display: grid;
    align-items: start;
    justify-items: center;
    user-select: none;
    -webkit-user-select: none;
    z-index: 1;
    will-change: transform;
    transform: translate3d(calc(var(--gfa-horizontal-scroll-offset)), 0, 0);
  }

  .gfa-horizontal-scroll__item .gfa-horizontal-scroll__item-media {
    margin-top: var(--gfa-horizontal-scroll-y);
  }

  .gfa-horizontal-scroll__item:nth-child(2n+2) {
    align-items: end;
  }

  .gfa-horizontal-scroll__item:nth-child(2n+2) .gfa-horizontal-scroll__item-media {
    margin-bottom: var(--gfa-horizontal-scroll-y);
  }

  .gfa-horizontal-scroll__item:nth-child(3n+3) {
    z-index: 2;
  }

  .gfa-horizontal-scroll__item:nth-child(2n+4) .gfa-horizontal-scroll__item-media {
    width: ${t.slideSize*.75}%;
  }

  .gfa-horizontal-scroll__item:nth-child(3n+4) .gfa-horizontal-scroll__item-media {
    width: ${t.slideSize*.85}%;
  }

  .gfa-horizontal-scroll__item:nth-child(4n+4) .gfa-horizontal-scroll__item-media {
    width: ${t.slideSize*.7}%;
  }

  .gfa-horizontal-scroll__item-media {
    width: ${t.slideSize}%;
    transform: scale(var(--gfa-horizontal-scroll-scale, 1));
    transition: transform 1s cubic-bezier(0, 0.1, 0.3, 0.98);
    will-change: transform;
    transform-origin: center;
  }

  .gfa-horizontal-scroll.gfa-horizontal-scroll--pressed {
    --gfa-horizontal-scroll-scale: 0.92;
  }

  .gfa-horizontal-scroll.gfa-horizontal-scroll--pressed .gfa-horizontal-scroll__item-media {
    transition: transform 0.2s cubic-bezier(0.5, 0.3, 0.3, 1);
  }

  .gfa-widget.${e}:has(.gfa-horizontal-scroll--pressed) {
    cursor: grabbing;
  }
`,ri=({options:e,inViewport:t})=>{const{settings:n,isPreview:o,popupIsOpen:r,bootstrap:{selectedItemId:a,onItemSelect:i},postsBlock:l,mediaList:s,isMobile:c}=ie(),{key:g}=n,{autoplay:f,mediaHover:u}=e,p=J(()=>oi(g,e,c),[g,e,c]),m=E(null),_=E(new Map),h=y=>{const b=_.current.get(y);if(b)return b;const T=go();return _.current.set(y,T),T},w=J(()=>s.map(y=>o?h(y.id):go()),[o,s]),{isPressed:v}=ei({autoplay:f,containerRef:m,inViewport:t,isMobile:c,itemCount:s.length,popupIsOpen:r});return d(Z,{children:[d("style",{children:p}),d("div",{ref:m,...o&&{onClick:y=>{i==null||i(l.id),y.preventDefault(),y.stopPropagation()}},className:O("gfa-horizontal-scroll",g,{"gfa-horizontal-scroll--pressed":v,"gfa--selectable":o,"gfa--selected":a===l.id,"gfa--in-viewport":t}),children:s.map((y,b)=>d("div",{className:"gfa-horizontal-scroll__item",style:w[b],children:d("div",{className:"gfa-horizontal-scroll__item-media",children:d(xe,{media:y,inViewport:t,skipPreload:!1,hoverEffect:u})})},y.id))})]})},ai=(e,t,n)=>`
  .gfa-widget.${t}:has(.gfa-content__horizontal-container) {
    width: 100%;
    height: 100vh;
    min-height: 600px;
    z-index: 100;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .gfa-content__horizontal-container.${t} {
    width: 100%;
    height: 100%;
    display: grid;
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: -1;
  }

  .gfa-content__float-grids.${t} {
    grid-area: 1/-1;
    display: flex;
    flex-flow: row nowrap;
  }

  .gfa-content__float-grid {
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(28, 1fr);
    align-items: flex-start;
    will-change: transform;
    animation: gfa-float-list-animation linear infinite;
    animation-play-state: paused;
    pointer-events: none;
  }

  .gfa-content__horizontal-container.${t}.gfa--in-viewport .gfa-content__float-grid {
    animation-play-state: running;
  }

  .gfa-widget.${t}:has(.gfa-content__horizontal-container) .gfa-content {
    --gfa-content-max-width: 100%;
  }

  .gfa-widget.${t}:has(.gfa-content__horizontal-container:not(.gfa--selectable)) .gfa-content {   
    pointer-events: none;
  }

  .gfa-widget.${t}:has(.gfa-content__horizontal-container) .gfa-content .gfa-content__button-container {   
    pointer-events: auto;
  }  

  @media screen and (max-width: ${n.breakpoint}) {
    .gfa-content__float-grids-1 .gfa-content__float-grid { animation-duration: ${80/e.speed}s; }
    .gfa-content__float-grids-2 .gfa-content__float-grid { animation-duration: ${40/e.speed}s; }
    .gfa-content__float-grids-3 .gfa-content__float-grid { animation-duration: ${60/e.speed}s; }

    .gfa-content__float-grids-1 {
      .gfa-media:nth-child(1) { grid-row: 1 / span 6; grid-column: 1 / span 9; }
      .gfa-media:nth-child(2) { grid-row: 2 / span 4; grid-column: 12 / span 5; }
      .gfa-media:nth-child(3) { grid-row: 22 / span 3; grid-column: 25 / span 4; align-self: end; }
      .gfa-media:nth-child(4) { grid-row: 21 / span 4; grid-column: 5 / span 7; align-self: end; }
    }

    .gfa-content__float-grids-2 {
      .gfa-media:nth-child(1) { grid-row: 16 / span 4; grid-column: 19 / span 6; }
      .gfa-media:nth-child(2) { grid-row: 8 / span 4; grid-column: 21 / span 3; }
      .gfa-media:nth-child(3) { grid-row: 21 / span 2; grid-column: 17 / span 3; }
      .gfa-media:nth-child(4) { grid-row: 5 / span 4; grid-column: 1 / span 6; }
    }

    .gfa-content__float-grids-3 {
      .gfa-media:nth-child(1) { grid-row: 18 / span 3; grid-column: 10 / span 4; }
      .gfa-media:nth-child(2) { grid-row: 1 / span 4; grid-column: 21 / span 6; }
      .gfa-media:nth-child(3) { grid-row: 6 / span 3; grid-column: 24 / span 4; }
      .gfa-media:nth-child(4) { grid-row: 14 / span 3; grid-column: 1 / span 5; }
    }
  }
    
  @media screen and (min-width: ${n.breakpoint}) {
    .gfa-content__float-grids-1 .gfa-content__float-grid { animation-duration: ${250/e.speed}s; }
    .gfa-content__float-grids-2 .gfa-content__float-grid { animation-duration: ${180/e.speed}s; }
    .gfa-content__float-grids-3 .gfa-content__float-grid { animation-duration: ${200/e.speed}s; }

    .gfa-content__float-grids-1 {
      .gfa-media:nth-child(1) { grid-row: 1 / span 6; grid-column: 1 / span 5; }
      .gfa-media:nth-child(2) { grid-row: 10 / span 3; grid-column: 26 / span 3; align-self: end; }
      .gfa-media:nth-child(3) { grid-row: 2 / span 4; grid-column: 8 / span 3; }
      .gfa-media:nth-child(4) { grid-row: 10 / span 3; grid-column: 6 / span 4; align-self: end; }
    }

    .gfa-content__float-grids-2 {
      .gfa-media:nth-child(1) { grid-row: 9 / span 3; grid-column: 2 / span 3; }
      .gfa-media:nth-child(2) { grid-row: 3 / span 4; grid-column: 21 / span 3; }
      .gfa-media:nth-child(3) { grid-row: 8 / span 4; grid-column: 23 / span 4; align-self: start;}
      .gfa-media:nth-child(4) { grid-row: 9 / span 2; grid-column: 19 / span 2; }
    }

    .gfa-content__float-grids-3 {
      .gfa-media:nth-child(1) { grid-row: 1 / span 3; grid-column: 24 / span 4; }
      .gfa-media:nth-child(2) { grid-row: 10 / span 3; grid-column: 13 / span 3; align-self: end; }
      .gfa-media:nth-child(3) { grid-row: 4 / span 5; grid-column: 1 / span 3; }
      .gfa-media:nth-child(4) { grid-row: 1 / span 4; grid-column: 15 / span 4; }
    }
  }
`,ii=({infiniteFlow:e,inViewport:t})=>{const{settings:n,isPreview:o,bootstrap:{selectedItemId:r,onItemSelect:a},postsBlock:i,mediaList:l}=ie(),{key:s,general:c}=n,g=e.mediaCount,f=J(()=>ai(e,s,c),[e,s,c]);return d(Z,{children:[d("style",{children:f}),d("div",{...o&&{onClick:u=>{a==null||a(i.id),u.preventDefault(),u.stopPropagation()}},className:O("gfa-content__horizontal-container",s,{"gfa--selectable":o,"gfa--selected":r===i.id,"gfa--in-viewport":t}),children:new Array(3).fill(0).map((u,p)=>d("div",{className:O("gfa-content__float-grids",`gfa-content__float-grids-${p+1}`,s),children:new Array(3).fill(0).map((m,_)=>d("div",{className:O("gfa-content__float-grid",s),children:l.slice(p*(g/3),(p+1)*(g/3)).map(h=>d(xe,{media:h,inViewport:t,skipPreload:!1,hoverEffect:"zoom-card"},h.id))},_))},p))})]})},_o=[{row:1,rowSpan:3,col:7,colSpan:2},{row:3,rowSpan:6,col:1,colSpan:4},{row:6,rowSpan:5,col:6,colSpan:3},{row:11,rowSpan:5,col:2,colSpan:3},{row:15,rowSpan:3,col:6,colSpan:2},{row:18,rowSpan:3,col:1,colSpan:2},{row:21,rowSpan:6,col:5,colSpan:4},{row:25,rowSpan:5,col:1,colSpan:3},{row:31,rowSpan:2,col:3,colSpan:2},{row:34,rowSpan:5,col:6,colSpan:3},{row:36,rowSpan:6,col:1,colSpan:4},{row:42,rowSpan:3,col:6,colSpan:2},{row:44,rowSpan:5,col:2,colSpan:3}],mo=[{row:2,rowSpan:4,col:1,colSpan:4},{row:1,rowSpan:6,col:8,colSpan:2},{row:4,rowSpan:5,col:10,colSpan:3},{row:7,rowSpan:5,col:3,colSpan:3},{row:9,rowSpan:5,col:9,colSpan:2},{row:11,rowSpan:3,col:1,colSpan:2},{row:13,rowSpan:6,col:9,colSpan:4},{row:16,rowSpan:5,col:4,colSpan:3},{row:20,rowSpan:6,col:7,colSpan:2},{row:21,rowSpan:6,col:1,colSpan:4},{row:24,rowSpan:5,col:9,colSpan:3},{row:27,rowSpan:3,col:3,colSpan:2}],ho=e=>Math.max(...e.map(({row:t,rowSpan:n})=>t+n-1)),wo=(e,t)=>{if(e<=0)return 1;const n=ho(t);return Array.from({length:e},(o,r)=>{const{row:a,rowSpan:i}=t[r%t.length],l=Math.floor(r/t.length);return a+l*n+i-1}).reduce((o,r)=>Math.max(o,r),1)},vo=(e,t)=>{const n=ho(e);return Array.from({length:t},(o,r)=>{const{row:a,rowSpan:i,col:l,colSpan:s}=e[r%e.length],c=Math.floor(r/e.length);return`
      &:nth-child(${r+1}) {
        grid-row: ${a+c*n} / span ${i};
        grid-column: ${l} / span ${s};
      }
    `}).join(`
`)},ci=(e,t,n,o)=>`
  .gfa-widget.${t}:has(.gfa-vertical-scroll) {
    display: grid;
    justify-items: center;
    gap: 44px;
    overflow: visible;
    justify-content: stretch;
  }

  .gfa-vertical-scroll.${t} {
    max-width: var(--gfa-content-max-width);
    ${e.alignment==="center"?"grid-area: 1/-1;":""}
    opacity: 0;
    transform: translateY(2%);
    will-change: opacity, transform;
    transition: opacity 750ms ease-in-out 400ms, transform 750ms cubic-bezier(0, 0, 0.3, 1) 400ms;
  }

  .gfa-vertical-scroll.${t}.gfa--in-viewport {
    transform: translateY(0);
    opacity: 1;
  }

  ${e.alignment==="center"?`
        .gfa-widget.${t}:has(.gfa-vertical-scroll) {
          gap: 0;
        }
        .gfa-widget.${t}:has(.gfa-vertical-scroll) .gfa-content {
          position: sticky;
          height: fit-content;
          top: 44vh;
          z-index: 1;
          grid-area: 1/-1;
        }`:""}

  .gfa-vertical-scroll__item {
    will-change: transform;
  }

  .gfa-widget.${t}:has(.gfa-vertical-scroll:not(.gfa--selectable)) .gfa-content {
    pointer-events: none;
  }

  .gfa-widget.${t}:has(.gfa-vertical-scroll) .gfa-content__text,  
  .gfa-widget.${t}:has(.gfa-vertical-scroll) .gfa-content__button-container {    
    opacity: 0;
    transform: translateY(90px);
    will-change: opacity, transform;
    transition: opacity 750ms cubic-bezier(0, 0, 0.3, 1) var(--transition-delay), transform 750ms cubic-bezier(0, 0, 0.3, 1) var(--transition-delay);

    &:nth-child(2) { --transition-delay: 225ms; }
    &:nth-child(4) { --transition-delay: 150ms; }    
  }  

  .gfa-widget.${t}:has(.gfa-vertical-scroll) .gfa-content__button-container {  
    pointer-events: auto;  
    --transition-delay: 75ms;
  }  

  .gfa-widget.${t}:has(.gfa-vertical-scroll.gfa--in-viewport) .gfa-content__text,
  .gfa-widget.${t}:has(.gfa-vertical-scroll.gfa--in-viewport) .gfa-content__button-container {
    transform: translateY(0);
    opacity: 1;

    &:nth-child(2) { --transition-delay: 75ms; }
    &:nth-child(4) { --transition-delay: 150ms; }
  }

  .gfa-widget.${t}:has(.gfa-vertical-scroll.gfa--in-viewport) .gfa-content__button-container {
    --transition-delay: 225ms;
  }  

  @media screen and (max-width: ${n.breakpoint}) {
    .gfa-vertical-scroll.${t} {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(${wo(o,_o)}, 1fr);
      gap: 16px;
      width: 100%;
    }

    .gfa-vertical-scroll.${t} .gfa-vertical-scroll__item {
      height: fit-content;

      ${vo(_o,o)}
    }
  }

  @media screen and (min-width: ${n.breakpoint}) {
    .gfa-vertical-scroll.${t} {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(${wo(o,mo)}, 1fr);
      gap: 16px;
      width: 100%;
    }

    .gfa-vertical-scroll.${t} .gfa-vertical-scroll__item {
      height: fit-content;

      ${vo(mo,o)}
    }
  }
`,xo={startY:4,speedMultiplier:5.5},li=({verticalScroll:e,inViewport:t})=>{const{settings:n,isPreview:o,bootstrap:{selectedItemId:r,onItemSelect:a},postsBlock:i,mediaList:l}=ie(),{key:s,general:c}=n,{sectionRef:g,currentTransform:f}=mt({inViewport:t});return d(Z,{children:[d("style",{children:ci(e,s,c,l.length)}),d("div",{ref:g,...o&&{onClick:u=>{a==null||a(i.id),u.preventDefault(),u.stopPropagation()}},className:O("gfa-vertical-scroll",s,{"gfa--selectable":o,"gfa--selected":r===i.id,"gfa--in-viewport":t}),style:{"--transform":f.current.toString()},children:l.map((u,p)=>d("div",{className:"gfa-vertical-scroll__item",style:{transform:`translateY(calc((${xo.startY-p*.7} + var(--transform)) * -${xo.speedMultiplier+p*.15}%))`},children:d(xe,{media:u,inViewport:t,skipPreload:!1,hoverEffect:e.mediaHover},u.id)},u.id))})]})},si=(e,t,n)=>{const{key:o}=e;return`
    .gfa-popup.${o} .gfa-popup-media {
      background-color: #000000;
      aspect-ratio: unset;
      position: relative;
    }

    .gfa-media__overlay-popup.${o} {
      opacity: 1;
      background-image: linear-gradient(0deg, rgba(0, 0, 0, .35) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, .35) 100%);
      transition: all 0.2s ease-in-out;
    }

    .gfa-media__overlay-popup.${o}:hover {
      background-color: transparent;
    }

    .gfa-media-wrapper {
      position: relative;
      width: 100%;
      height: ${n?"100dvh":"100%"};
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }

    .gfa-media__caption-overlay {
      position: absolute;
      inset: 0;
      opacity: 1;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.35);
      animation: fade-in 0.2s ease-in-out;
    }

    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .gfa-popup .gfa-popup-media {
      position: relative;
      height: 100% !important;
      width: 100% !important;
      border-radius: ${n?"0":"20px"};
      overflow: hidden;
      user-select: none;
      cursor: default;
    }

    .gfa-album-track {
      display: flex;
      position: relative;
      height: ${n?"auto":"100%"};
      width: 100%;
      scrollbar-width: none;
      transition: transform 0.25s ease-in-out;
    }

    .gfa-popup .gfa-popup-media .gfa-popup__mobile-media-source {
      width: 100% !important;
      height: 100% !important;
      user-select: none;
      -webkit-user-drag: none;
    }

    .gfa-popup .gfa-popup-media .gfa-popup__media-source {
      width: 100% !important;
      height: 100% !important;
      object-fit: ${t?"cover":"contain"} !important;
    }

    .gfa-popup__mobile-meta {
      display: flex;
      flex-flow: column nowrap;
      gap: 10px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0px;
      padding: 20px 16px 20px 20px;
      background: linear-gradient(0deg, rgba(1, 1, 1, 0.40) 0%, rgba(1, 1, 1, 0.00) 100%);
    }

    .gfa-popup-album-arrow {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      width: 32px;
      height: 32px;
      padding: 0;
    }

    .gfa-arrow-button:not(:disabled):hover.gfa-popup-album-arrow {
      transform: translate(-50%, -50%) scale(1.1);
    }

    .gfa-popup-album-arrow--left {
      left: 32px;
    }

    .gfa-popup-album-arrow--right {
      left: unset;
      right: 0px;
    }

    .gfa-media__video-control-btn {
      position: absolute;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      line-height: 0;
      font-size: 0;
      background: rgba(0, 0, 0, 0.5);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      z-index: 2;
    }

    .gfa-media__video-control-btn:hover {
      transform: translate(-50%, -50%) scale(1.1);
    }

    .gfa-media__play-btn {
      top: 50%;
      left: 50%;
      width: 60px;
      height: 60px;
    }

    .gfa-media__volume-btn {
      right: 0;
      bottom: 10px;
      width: 32px;
      height: 32px;
    }

    .gfa-media__volume-btn--mobile {
      bottom: 0;
    }

    .gfa-media__volume-btn--mobile-album {
      bottom: 16px;
    }
  `},bo=({media:e,onLoad:t,isActive:n=!1})=>{const{settings:o,previewLocale:r,isMuted:a,setIsMuted:i,popupMediaList:l,popupMediaIdx:s,isMobile:c,isTouchScreen:g,isSafari:f}=ie(),{key:u,popup:p}=o,m=Ke(o,"popup","permalinkText",p.permalinkText,r),[_,h]=K(0),[w,v]=K(c),[y,b]=K(!1),[T,P]=K(!1);X(()=>{h(0),v(!1)},[e]),X(()=>{c&&v(!n)},[c,n]),X(()=>{n===!1&&b(!1)},[n]);const M=e.mediaType==="CAROUSEL_ALBUM",x=J(()=>e.children||[{id:e.id,mediaUrl:e.mediaUrl,mediaType:e.mediaType,thumbnailUrl:e.thumbnailUrl}],[e]),S=x[_]||x[0],k=S.mediaType==="VIDEO",F=E(0),D=E(null),z=E(null),j=E([]),B=()=>{if(!z.current)return[];const{left:C}=z.current.getBoundingClientRect();return j.current.filter(Boolean).map(U=>{const{left:Y}=U.getBoundingClientRect();return Y-C})};X(()=>{var C;(C=z.current)==null||C.setAttribute("style","transition: none;"),setTimeout(()=>{var L;(L=z.current)==null||L.setAttribute("style","transition: transform 0.25s ease-in-out;")},100)},[e]),X(()=>{var L;const C=B();(L=z.current)==null||L.setAttribute("style",`transform: translateX(${-C[_]}px);`)},[_]),X(()=>{if(!z.current)return;const C=new ResizeObserver(()=>{var L;return(L=z.current)==null?void 0:L.setAttribute("style",`transform: translateX(${-B()[_]}px);`)});return C.observe(z.current),()=>C.disconnect()},[_]),X(()=>{j.current.forEach((C,L)=>{if((C==null?void 0:C.nodeName)==="VIDEO"){const U=C;w?U.pause():!w&&L===_&&U.play(),a?(U.muted=!0,U.defaultMuted=!0):(U.muted=!1,U.defaultMuted=!1)}})},[_,w,a]);const G=$(()=>{_>0&&(h(C=>C-1),v(!1))},[_]),le=$(()=>{M&&x.length-1>_&&(h(C=>C+1),v(!1))},[x.length,M,_]);X(()=>{if(c)return;x.length&&x.forEach(L=>vn(L));const C=l[s+1];C&&vn(C)},[x,l,s,c]);const ne=M&&_<x.length-1,re=_>0,N=C=>{var L,U;if(C.target===C.currentTarget){if(T){P(!1);return}k&&(w?(L=j.current[_])==null||L.play():(U=j.current[_])==null||U.pause(),v(Y=>!Y),b(!0))}},W=$(C=>{var L;(L=D.current)!=null&&L.contains(C.target)&&(F.current=C.touches[0].clientX)},[]),ae=$(C=>{var ee;if(!((ee=D.current)!=null&&ee.contains(C.target)))return;const U=C.changedTouches[0].clientX-F.current;Math.abs(U)<40||!c||!g||(U>0?G():le())},[c,g,G,le]);return X(()=>{const C=D.current;if(C)return C.addEventListener("touchstart",W,{passive:!0}),C.addEventListener("touchend",ae,{passive:!0}),()=>{C.removeEventListener("touchstart",W),C.removeEventListener("touchend",ae)}},[W,ae]),d("div",{class:O("gfa-popup-media",u),ref:D,children:[d("div",{className:"gfa-media-wrapper",children:[T&&d("div",{className:"gfa-media__caption-overlay",onClick:()=>P(!1),children:d("div",{})}),d("div",{className:"gfa-album-track",ref:z,children:x.map((C,L)=>d("div",{className:"gfa-album-item",children:C.mediaType==="VIDEO"?d("video",{ref:U=>{j.current[L]=U},className:c?"gfa-popup__mobile-media-source":"gfa-popup__media-source",onClick:N,autoPlay:!c,src:C.mediaUrl,controls:!1,playsinline:!0,muted:a,loop:!0,...f&&C.thumbnailUrl&&{poster:C.thumbnailUrl},...L===0&&{onLoadedMetadata:t}}):d("img",{ref:U=>{j.current[L]=U},alt:e.caption,className:c?"gfa-popup__mobile-media-source":"gfa-popup__media-source",onClick:N,src:C.mediaUrl,...L===0&&{onLoad:t}})},`${C.id}`))}),c&&d("div",{className:"gfa-popup__mobile-meta",children:[d(ht,{media:e,inPopup:!0,showLikeCount:p.likeCount,showCommentsCount:p.commentsCount,showCaption:p.caption,hasVideoBtn:k,isOpen:T,onCaptionClick:()=>P(C=>!C)}),M&&d(to,{count:x.length,idx:_,hidden:T})]})]}),!c&&d(Z,{children:d("div",{onClick:N,className:O("gfa-media__overlay",u,"gfa-media__overlay-popup",{"gfa-media__overlay-popup-video":S.mediaType==="VIDEO"}),children:[!T&&d(Z,{children:[d("button",{onClick:G,className:O("gfa-arrow-button",`gfa-arrow-button__${p.arrows.variant}`,"gfa-popup-album-arrow","gfa-popup-album-arrow--left",{"gfa-arrow-button--visible":re}),children:d(Te,{type:p.arrows.icon,flip:!0,size:16})}),d("button",{onClick:le,className:O("gfa-arrow-button",`gfa-arrow-button__${p.arrows.variant}`,"gfa-popup-album-arrow","gfa-popup-album-arrow--right",{"gfa-arrow-button--visible":ne}),children:d(Te,{type:p.arrows.icon,size:16})})]}),d("div",{className:O("gfa-media__toolbar",u),children:[d("a",{href:`https://instagram.com/${e.username}`,target:"_blank",className:O("gfa-media__toolbar-account",u),children:[p.avatar&&d("img",{className:"gfa-media__toolbar-account-logo",src:e.avatarUrl}),p.username&&d("div",{className:"gfa-media__account-name",children:e.username})]}),p.permalink&&d("a",{className:"gfa-media__permalink",href:e.permalink,target:"_blank",children:m})]}),k&&w&&d("button",{onClick:()=>v(!1),className:"gfa-media__video-control-btn gfa-media__play-btn",children:d(Mn,{size:40})}),k&&d("button",{onClick:()=>i(!a),className:"gfa-media__video-control-btn gfa-media__volume-btn",children:a?d(Tn,{size:16}):d(In,{size:16})}),d("div",{className:O("gfa-media__overlay-content",u,{"gfa-media__overlay-content--with-volume":k}),children:[d(ht,{media:e,inPopup:!0,showLikeCount:p.likeCount,showCommentsCount:p.commentsCount,showCaption:p.caption,isOpen:T,onCaptionClick:()=>P(C=>!C)}),M&&d(to,{count:x.length,idx:_,hidden:T})]})]})}),c&&d("div",{className:"gfa-media__mobile-overlay",children:[k&&w&&y&&d("button",{onClick:()=>v(!1),className:"gfa-media__video-control-btn gfa-media__play-btn",children:d(Mn,{size:40})}),k&&d("button",{onClick:()=>i(!a),className:O("gfa-media__video-control-btn","gfa-media__volume-btn","gfa-media__volume-btn--mobile",{"gfa-media__volume-btn--mobile-album":M}),children:a?d(Tn,{size:16}):d(In,{size:16})})]})]})},di=e=>{const{key:t}=e;return`
    body:has(.gfa-popup) {
      overflow: hidden;
    }

    .gfa-popup {
      position: fixed;
      z-index: 9999;
      inset: 0;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(5px);
      border: none;
      padding: 0;
      outline: none;
      overscroll-behavior: contain;
      touch-action: none;
    }

    .gfa-popup.${t} .gfa-popup-content--loaded {
      width: unset;
      height: unset;
    }

    .gfa-popup.${t} .gfa-popup-content-safari {
      aspect-ratio: unset;
    }

    .gfa-popup-arrow {
      position: fixed;
      top: calc(50% - 40px);
    }
      
    .gfa-popup.${t} .gfa-arrow-button__outline,
    .gfa-popup.${t} .gfa-arrow-button__plain {
      --gfa-arrow-custom-bg: transparent;
      backdrop-filter: unset;
      --gfa-arrow-custom-color: #ffffff;
    }

    .gfa-popup-arrow-left {
      left: 20px;
    }

    .gfa-popup-arrow-right {
      right: 20px;
    }

    .gfa-popup__close-button {
      position: fixed;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      line-height: 0;
      font-size: 0;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      transition: rotate 0.2s;
    }

    .gfa-popup__close-button:hover {
      rotate: 90deg;
    }
`},fi=(e,t)=>`
    .gfa-popup.${e} .gfa-popup-content {
      display: flex;
      position: relative;
      flex-flow: column nowrap;
      aspect-ratio: ${t.aspect} !important;
      max-height: 80vh;
      max-width: 80vw;
    }
  `,pi=()=>{const{settings:e,popupIsOpen:t,closePopup:n,popupMediaIdx:o,setPopupMediaIdx:r,popupMediaList:a}=ie(),{popup:i}=e,l=a[o],s=E(null),c=E(null),[g,f]=K(!1),u=br(l);hn(a[o+1]);const p=o+1<a.length,m=o>0,_=i.arrows.variant==="plain"?24:20,h=$(()=>{p&&r(b=>b+1)},[p,r]),w=$(()=>{m&&r(b=>b-1)},[m,r]),v=$(b=>{switch(b.key){case"ArrowRight":h();break;case"ArrowLeft":w();break;case"Escape":b.stopPropagation(),n();break}},[h,w,n]);X(()=>(t&&window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)),[v,t]);const y=b=>{b.target===b.currentTarget&&n()};return d(Z,{children:[d("style",{children:fi(e.key,u||{aspect:"4 / 5"})}),d("div",{className:O("gfa-popup",e.key),ref:s,onClick:y,children:[d("div",{ref:c,className:O("gfa-popup-content",{"gfa-popup-content--loaded":g}),children:a[o]&&d(bo,{media:a[o],onLoad:()=>f(!0)})}),d("button",{onClick:w,disabled:!m,className:`gfa-arrow-button gfa-arrow-button__${i.arrows.variant} gfa-arrow-button--visible gfa-popup-arrow gfa-popup-arrow-left`,children:d(Te,{type:i.arrows.icon,flip:!0,size:_})}),d("button",{onClick:h,disabled:!p,className:`gfa-arrow-button gfa-arrow-button__${i.arrows.variant} gfa-arrow-button--visible gfa-popup-arrow gfa-popup-arrow-right`,children:d(Te,{type:i.arrows.icon,size:_})}),d("button",{className:"gfa-popup__close-button",onClick:()=>n(),children:d(kn,{})}),i.hasGscLogo&&d(En,{className:"gfa-copyright--popup"})]})]})},ui=e=>{const{key:t}=e;return`
    .gfa-popup {
      position: fixed;
      z-index: 9999;
      inset: 0;
      display: flex;
      flex-flow: column nowrap;
      background-color: rgb(0, 0, 0);
      border: none;
      padding: 0;
      outline: none;
      overscroll-behavior: contain;
      touch-action: none;
    }
    
    .gfa-popup__content {
        display: flex;
        flex-flow: column nowrap;
        width: 100%;
        height: 100dvh;
        min-height: 100dvh;
        color: white;
    }

    .gfa-popup__header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        height: 76px;
        background: linear-gradient(180deg, rgba(1, 1, 1, 0.40) 0%, rgba(1, 1, 1, 0.00) 100%);
        box-sizing: border-box;
    }

    .gfa-popup__header-profile {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 12px;
        cursor: pointer;
    }

    .gfa-popup__header-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        overflow: hidden;
    }

    .gfa-popup__header-username {
        display: flex;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        color: #FFFFFF;
    }

    .gfa-popup__header-actions {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 20px;
    }

    .gfa-popup__view-post {
        font-size: 12px;
        font-weight: 600;
        line-height: 20px;
        color: #FFFFFF;
    }

    .gfa-popup__close-button {
      position: initial;
      width: 24px;
      height: 24px;
      padding: 0;
    }

    .gfa-popup__close-button svg {
      width: 20px;
      height: 20px;
    }

    .gfa-popup__track {
        display: flex;
        flex-flow: column nowrap;
        width: 100%;
        height: 100dvh;
        min-height: 100dvh;
        scroll-snap-type: y mandatory;
        scroll-snap-stop: always;
        overflow-y: scroll;
        scrollbar-width: none;
    }

    .gfa-popup__slide {
        position: relative;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100dvh;
        scroll-snap-align: start;
    }

    .gfa-popup__slide-meta {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 16px;
        padding: 20px 0 20px 20px;
    }

    .gfa-popup__permalink {
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
      color: #FFFFFF;
      text-decoration: none;
    }

    .gfa-popup__permalink:hover {
      text-decoration: underline;
    }

    .gfa-media.${t} {
        position: relative;
        width: 100% !important;
        height: unset !important;
        aspect-ratio: unset;
        border-radius: unset;
        background-color: transparent;
        overflow: hidden;
        cursor: pointer;
        background-color: #0000003d;
    }
  `},gi=()=>{const{settings:e,previewLocale:t,closePopup:n,popupMediaIdx:o,setPopupMediaIdx:r,popupMediaList:a}=ie(),{key:i,popup:l}=e,s=Ke(e,"popup","permalinkText",l.permalinkText,t),[,c]=K(!1),g=a[o],f=E(null),u=E([]),p=E([]),m=E(null);X(()=>{var b,T,P;const{top:v}=((b=f.current)==null?void 0:b.getBoundingClientRect())??{top:0},y=u.current.filter(Boolean).map(M=>{const{top:x}=M.getBoundingClientRect();return x-v});p.current=y,(P=f.current)==null||P.scrollTo({top:(T=u.current[o])==null?void 0:T.offsetTop,behavior:"instant"})},[]),X(()=>{const v=f.current;if(!v||!u.current.length)return;const{height:y}=v.getBoundingClientRect(),b=()=>{const T=v.scrollTop;let P=Math.floor(T/y);P<0?P=0:P>=a.length&&(P=a.length-1),r(P)};return v.addEventListener("scroll",bn(b,30)),()=>v.removeEventListener("scroll",b)},[r,a.length]);const _=v=>{const y=v.touches[0];m.current={startX:y.clientX,startY:y.clientY,isHorizontal:null}},h=v=>{if(!m.current||!f.current)return;const y=v.touches[0],b=y.clientX-m.current.startX,T=y.clientY-m.current.startY;m.current.isHorizontal===null&&(m.current.isHorizontal=Math.abs(b)>Math.abs(T)),m.current.isHorizontal&&(f.current.style.overflow="hidden")},w=()=>{f.current&&(f.current.style.overflow="auto"),m.current=null};return d(Z,{children:[d("style",{children:ui(e)}),d("div",{className:O("gfa-popup",i),children:d("div",{className:"gfa-popup__content",children:[d("div",{className:"gfa-popup__header",children:[d("div",{className:"gfa-popup__header-profile",onClick:()=>{window.open(`https://instagram.com/${g.username}`,"_blank")},children:[l.avatar&&d("img",{className:"gfa-popup__header-avatar",src:g.avatarUrl,alt:g.username}),l.username&&d("div",{className:"gfa-popup__header-username",children:g.username})]}),d("div",{className:"gfa-popup__header-actions",children:[l.permalink&&d("a",{className:"gfa-popup__permalink",href:g.permalink,target:"_blank",children:s}),d("button",{className:"gfa-popup__close-button",onClick:()=>n(),children:d(kn,{})})]})]}),d("div",{className:"gfa-popup__track",ref:f,onTouchStart:_,onTouchMove:h,onTouchEnd:w,children:a.map((v,y)=>d("div",{className:"gfa-popup__slide",ref:b=>{b&&(u.current[y]=b)},children:v&&d(bo,{media:v,onLoad:()=>c(!0),isActive:y===o})},y))})]})})]})},_i='div[id*=instafeed_dev_instafeed],div[id*=gsc_instagram_feed]{width:-webkit-fill-available}.gfa-content{display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;gap:16px;width:100%}.gfa--selectable:hover{outline:1.7px dashed #005fd3;outline-offset:2px;cursor:pointer}.gfa--selected{outline:1.7px dashed #005fd3;outline-offset:2px}.gfa-media{container:gfa-media;container-type:inline-size}.gfa-media .gfa-media__source{height:100%!important;width:100%!important;will-change:transform;transition:transform .7s ease-in-out;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}@keyframes albumSlide{0%{transform:translate(0);filter:brightness(1)}50%{transform:translate(-50px);filter:brightness(1.1)}to{transform:translate(0);filter:brightness(1)}}.gfa-album-item{min-width:100%;scroll-snap-align:center;box-sizing:border-box}.gfa-media--zoom-media:hover .gfa-media__source{transform:scale(1.1)}.gfa-media--zoom-card{will-change:scale;transition:scale .7s cubic-bezier(0,0,.3,1)}.gfa-media--zoom-card:hover{scale:1.06}.gfa-media--rotation{transform-origin:center center;transform-style:preserve-3d;will-change:transform,scale;transition:transform .3s ease-out,scale .7s cubic-bezier(0,0,.3,1)}.gfa-media--rotation:hover{scale:1.05}.gfa-media__overlay{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;padding:min(24px,10%);padding-bottom:min(20px,10%);background-color:transparent;transition:background-color .2s ease-in-out,opacity .2s ease-in-out;opacity:0;display:flex;flex-flow:column nowrap;justify-content:space-between;-webkit-user-select:none;user-select:none;color:#fff;container:gfa-media__overlay/inline-size}.gfa-popup-media .gfa-media__overlay{justify-content:flex-end}.gfa-media__overlay-media-type{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;padding:min(24px,10%);display:flex;justify-content:flex-end;container:gfa-media__overlay-media-type/inline-size;-webkit-user-select:none;user-select:none;pointer-events:none}.gfa-media__overlay-media-type:hover+.gfa-media__overlay{background-color:#00000059;opacity:1}.gfa-media__overlay-content{display:flex;flex-flow:column nowrap;gap:16px;font-size:14px;line-height:20px;font-weight:400;color:#fff;z-index:2;margin-top:auto}.gfa-media__overlay-content--with-volume{margin-right:42px}.gfa-media__media-type svg{width:20px;height:20px;filter:drop-shadow(0px 0px 8px rgba(0,0,0,.2))}.gfa-media__inst-logo{position:absolute;z-index:2;top:50%;left:50%;transform:translate(-50%,-50%);width:24px;height:24px}.gfa-media__media-type:hover+.gfa-media__overlay{background-color:#00000059;opacity:1}.gfa-media__caption{display:flex;max-height:40px;transition:max-height .2s ease-in-out}.gfa-media__caption-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gfa-media__caption--open{max-height:50dvh;z-index:2;cursor:unset!important}.gfa-media__meta--clickable{cursor:pointer}.gfa-media__caption--open .gfa-media__caption-text{white-space:normal;text-overflow:unset}.gfa-media__counters{display:flex;flex-flow:row nowrap;gap:16px}.gfa-media__counter{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;font-size:12px;line-height:20px;gap:6px;font-weight:600}.gfa-media__counter svg{width:20px;height:20px}.gfa-media__counter--popup{gap:8px}.gfa-media__counter--popup svg{width:24px;height:24px}.gfa-media__overlay:hover{background-color:#00000059;opacity:1}@container gfa-media__overlay (max-width: 160px){.gfa-media__counters{gap:8px}.gfa-media__counter svg{width:16px;height:16px}}@container gfa-media__overlay-media-type (max-width: 160px){.gfa-media__media-type svg{width:16px;height:16px}}.gfa-media__meta{display:flex;flex-flow:column nowrap;gap:8px}.gfa-media__meta--popup{gap:12px}.gfa-media__meta--has-video-btn{margin-right:42px}.gfa-media__meta--caption-open{z-index:2}.gfa-media__toolbar{position:absolute;top:24px;left:24px;right:24px;display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;gap:8px;z-index:2}.gfa-media__toolbar .gfa-media__toolbar-account{display:flex;flex-flow:row nowrap;align-items:center;gap:8px;max-width:70%}.gfa-media__toolbar a{color:#fff;font-size:12px;font-style:normal;font-weight:600;line-height:20px;text-decoration:none;outline:none}.gfa-media__toolbar a:hover{text-decoration:underline}.gfa-media__toolbar-account-logo{flex:2 0 24px;width:24px;height:24px;border-radius:50%;overflow:hidden}.gfa-media__account-name{word-wrap:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gfa-media__permalink{display:inline-block;white-space:nowrap}.gfa-arrow-button{border:none;position:absolute;width:44px;height:44px;padding:0;border-radius:50%;display:flex;justify-content:center;align-items:center;z-index:3;transition:opacity .25s,visibility .25s,transform .2s linear;opacity:0;visibility:hidden;min-width:unset;box-shadow:none}.gfa-arrow-button__haze{background:linear-gradient(0deg,var(--gfa-arrow-custom-bg, rgba(201, 201, 201, .2)) 0%,var(--gfa-arrow-custom-bg, rgba(201, 201, 201, .2)) 100%),#fff;color:var(--gfa-arrow-custom-color, #000000)}.gfa-arrow-button__dark{background-color:var(--gfa-arrow-custom-bg, rgb(0, 0, 0));color:var(--gfa-arrow-custom-color, #ffffff)}.gfa-arrow-button__light{background-color:var(--gfa-arrow-custom-bg, rgb(255, 255, 255));color:var(--gfa-arrow-custom-color, #000000)}.gfa-arrow-button__blur{background-color:var(--gfa-arrow-custom-bg, rgba(255, 255, 255, .45));-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);color:var(--gfa-arrow-custom-color, #000000)}.gfa-arrow-button__outline{background-color:var(--gfa-arrow-custom-bg, rgba(0, 0, 0, .15));-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);color:var(--gfa-arrow-custom-color, #000000);border:1px solid var(--gfa-arrow-custom-color, #000000)}.gfa-arrow-button__plain{background-color:transparent;color:var(--gfa-arrow-custom-color, #000000)}.gfa-arrow-button__glass{background:#ffffff40;color:#fff;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.gfa-arrow-button__glass:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;padding:1.5px;border-radius:50%;background:linear-gradient(135deg,#ffffff,transparent 37%,transparent 64%,#ffffff);mask:linear-gradient(#000 0 0) exclude,linear-gradient(#000 0 0) content-box}.gfa-arrow-button:not(:disabled):hover{cursor:pointer;transform:scale(1.1)}.gfa-arrow-button:disabled{opacity:.2}.gfa-arrow-button:disabled:hover{cursor:not-allowed}.gfa-arrow-button--visible{opacity:1;visibility:visible}.gfa-arrow-left{top:calc(50% - 20px);left:24px}.gfa-arrow-right{top:calc(50% - 20px);right:24px}.gfa-media__dots{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:2px}.gfa-media__dots--hidden{opacity:0;visibility:hidden}.gfa-media__overlay-content--with-volume .gfa-media__dots{margin-right:-42px}.gfa-media__dot{width:6px;height:6px;margin:2px;border-radius:50%;background-color:#fff;opacity:.5;transition:all .2s}.gfa-media__dot-active{opacity:1}.gfa-copyright{display:flex;flex-flow:row nowrap;gap:4px;width:fit-content;cursor:pointer;filter:brightness(.9);text-decoration:none!important;transition:all .2s}.gfa-copyright--popup{justify-content:center;margin-top:20px;gap:8px}.gfa-copyright:hover{filter:brightness(1)}.gfa-copyright__label{color:#fff;font-size:12px;line-height:22px;font-weight:400;-webkit-user-select:none;user-select:none}@container gfa-media (max-width: 145px){.gfa-copyright__label{display:none}}.gfa-widget:has(.gfa-collage__aside) .gfa-content div,.gfa-widget:has(.gfa-collage__top-line) .gfa-content div{opacity:.01;transform:translateY(2rem);will-change:transform}.gfa-widget:has(.gfa-collage__aside.gfa--in-viewport) .gfa-content div,.gfa-widget:has(.gfa-collage__top-line.gfa--in-viewport) .gfa-content div{animation:gfa-slide-in .75s cubic-bezier(0,0,.3,1) forwards}.gfa-widget:has(.gfa-collage__aside.gfa--in-viewport) .gfa-content div:first-child,.gfa-widget:has(.gfa-collage__top-line.gfa--in-viewport) .gfa-content div:first-child{animation-delay:75ms}.gfa-widget:has(.gfa-collage__aside.gfa--in-viewport) .gfa-content div:nth-child(4),.gfa-widget:has(.gfa-collage__top-line.gfa--in-viewport) .gfa-content div:nth-child(4){animation-delay:.15s}.gfa-widget:has(.gfa-collage__aside.gfa--in-viewport) .gfa-content div:last-child,.gfa-widget:has(.gfa-collage__top-line.gfa--in-viewport) .gfa-content div:last-child{animation-delay:225ms}@keyframes gfa-slide-in{0%{transform:translateY(2rem);opacity:.01}to{transform:translateY(0);opacity:1}}@keyframes gfa-float-list-animation{0%{transform:translate(0)}to{transform:translate(-100%)}}',mi=(e,{key:t,general:n,container:{padding:o,margin:r,radius:a,background:i,containerWidthType:l,containerWidthValue:s}},c,g)=>{const f=e==="arc-carousel"&&c.aspect==="auto"?"1:1":c.aspect;return`
  .gfa-widget.${t} {
    display: flex;
    justify-content: center;
    ${a.enabled?`border-radius: ${a.value};`:""}
    ${i.enabled?`background: ${i.color};`:""}
    margin: ${pe(r.desktop)};
    padding: ${pe(o.desktop)};
    box-sizing: border-box;
    overflow: hidden;
    
    --gfa-content-max-width: ${l==="full"?"100%":s};
    --gfa-media-border-radius: ${c.radius.desktop};
  }

  ${g?`
        html:has(.gfa-widget.${t}) {
          overflow: visible;
          scrollbar-width: none;
        }
        body:has(.gfa-widget.${t}) {
          overflow: auto;
          scrollbar-width: none;
        }
      `:""}

  .gfa-content.${t} {
    max-width: var(--gfa-content-max-width, 100%);
  }  

  .gfa-media.${t} {
    display: flex;
    position: relative;
    border-radius: ${c.radius.desktop};
    overflow: hidden;
    ${c.mediaClickAction!=="none"&&"cursor: pointer;"}
    background-color: #0000003d;
    pointer-events: all;
  } 
    
  ${f!=="auto"?`.gfa-media.${t}:before {
          content: '';
          display: block;
          padding-top: ${hr[f]};
        }
          
        .gfa-media.${t} .gfa-media__source {
          position: absolute;
          left: 0;
          top: 0;
          object-fit: cover !important;
        }
    `:""}

  @media screen and (max-width: ${n.breakpoint}) {
    .gfa-widget.${t} {
      margin: ${pe(r.mobile)};
      padding: ${pe(o.mobile)};
      --gfa-media-border-radius: ${c.radius.mobile};
    }

    .gfa-content.${t} {
      gap: 12px;
    }

    .gfa-arrow-button {
      width: 32px;
      height: 32px;
    }

    .gfa-arrow-left {
      left: 12px;
    }

    .gfa-arrow-right {
      right: 12px;
    }
    
    .gfa-media.${t} {
      border-radius: ${c.radius.mobile};
    }

    .gfa-media__toolbar {
      top: 16px;
      left: 16px;
      right: 16px;
    }

    .gfa-media__overlay-content {
      font-size: 12px;
      line-height: 16px;
    }

    .gfa-media__caption {
      font-size: 14px;
      line-height: 20px;
    }
  }
`},hi=()=>{const{settings:e,popupIsOpen:t,postsBlock:n,layoutProps:o,isMobile:r,isSafari:a,isPreview:i}=ie(),{blocks:l}=e,s=n.mediaClickAction==="popup"&&t,c=E(null),[g,f]=K(!1);$r(e.key);const u=J(()=>r?e.mobileLayout.type:e.desktopLayout.type,[r,e]),p=J(()=>mi(u,e,n,i),[u,e,n,i]),m=J(()=>s?di(e)+si(e,a,r):"",[s,e,a,r]);return X(()=>{f(!1);const _=new IntersectionObserver(([h])=>f(h.isIntersecting),{threshold:.01,rootMargin:u==="vertical-scroll"?"-25%":"0px"});return c.current&&_.observe(["scattered-collage","vertical-scroll"].includes(u)?c.current.parentElement:c.current),()=>_.disconnect()},[i,u,e.desktopLayout,e.mobileLayout]),d(Z,{children:[d("style",{children:_i}),d("style",{children:p}),u==="scattered-collage"&&d(io,{line:"top",collage:o,inViewport:g}),d("div",{className:O("gfa-content",e.key),ref:c,children:l.filter(_=>_.enabled).map(_=>{if(["heading","text"].includes(_.type))return d($a,{..._},_.id);if(_.type==="posts")switch(u){case"grid":case"editorial-grid":return d(va,{grid:o,inViewport:g},_.id);case"carousel":case"editorial-carousel":return d(St,{carousel:o,inViewport:g},_.id);case"infinite-flow":return d(ii,{infiniteFlow:o,inViewport:g},_.id);case"classic-collage":return d(za,{collage:o,inViewport:g},_.id);case"arc-carousel":return d(St,{carousel:o,inViewport:g,loop:!0},_.id);case"spotlight-stack":return d(St,{carousel:o,inViewport:g,loop:!0},_.id);default:return null}else if(_.type==="button")return d(ya,{..._},_.id)})}),u==="vertical-scroll"&&d(li,{verticalScroll:o,inViewport:g}),u==="scattered-collage"&&d(io,{line:"bottom",collage:o,inViewport:g}),u==="side-collage"&&d(Ea,{collage:o,inViewport:g}),u==="horizontal-scroll"&&d(ri,{options:o,inViewport:g}),u==="dual-strip"&&d(Ua,{options:o,inViewport:g}),s&&Xo(d(Z,{children:[d("style",{children:m}),r?d(gi,{}):d(pi,{})]}),document.body)]})},yo=({bootstrap:e})=>d(mr,{children:d(Rr,{bootstrap:e,children:d(hi,{})})}),wi="GSC_INSTAFEED_RUNTIME";window[wi]=(e,t)=>{var n;je(d("div",{className:`gfa-widget ${(n=t==null?void 0:t.settings)==null?void 0:n.key}`,children:d(yo,{bootstrap:t})}),e)},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",So):So();function So(){Array.isArray(window.GSC_INSTAFEED_WIDGETS)&&window.GSC_INSTAFEED_WIDGETS.forEach(e=>{const{settings:t}=gr(e);if(t.enabled)try{document.querySelectorAll(`.gfa-widget.${t.key}`).forEach(o=>{var a;const r=Array.isArray(window.GSC_INSTAFEED_MEDIA)?((a=window.GSC_INSTAFEED_MEDIA.find(i=>i.id===t.key))==null?void 0:a.data)||[]:[];if(console.log(`%cGSC Instagram Feed, Instafeed. Widget ID: ${t.key||"N/A"}`,`color: white; background: rgb(69,32,94);
                    background: linear-gradient(111deg, rgba(42,102,124,1) 0%, rgba(177,59,39,1) 50%, rgba(252,176,69,1) 100%); font-size: 12px; font-weight: 600; border-radius: 6px; padding: 5px 10px;`,t,r),!r.length){console.log(`GSC Instafeed: Widget "${t.key}" is hidden; No media.`);return}je(d(yo,{bootstrap:{settings:t,platform:"Runtime",blockId:o.id,media:r}}),o)})}catch(n){console.log(n)}})}})();
})()