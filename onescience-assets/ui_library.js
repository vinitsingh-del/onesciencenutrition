!function(){"use strict";var e,t,i,r,o,a,n,s,l,p,c,d={},_=[],g=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,b=Array.isArray;function f(e,t){for(var i in t)e[i]=t[i];return e}function m(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function u(t,i,r){var o,a,n,s={};for(n in i)"key"==n?o=i[n]:"ref"==n?a=i[n]:s[n]=i[n];if(arguments.length>2&&(s.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(n in t.defaultProps)void 0===s[n]&&(s[n]=t.defaultProps[n]);return x(t,s,o,a,null)}function x(e,r,o,a,n){var s={type:e,props:r,key:o,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==n?++i:n,__i:-1,__u:0};return null==n&&null!=t.vnode&&t.vnode(s),s}function h(e){return e.children}function $(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__i+1):null;for(var i;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e)return i.__e;return"function"==typeof e.type?v(e):null}function y(e){var t,i;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e){e.__e=e.__c.base=i.__e;break}return y(e)}}function w(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!z.__r++||o!==t.debounceRendering)&&((o=t.debounceRendering)||a)(z)}function z(){var e,i,o,a,s,l,p,c;for(r.sort(n);e=r.shift();)e.__d&&(i=r.length,a=void 0,l=(s=(o=e).__v).__e,p=[],c=[],o.__P&&((a=f({},s)).__v=s.__v+1,t.vnode&&t.vnode(a),P(o.__P,a,s,o.__n,o.__P.namespaceURI,32&s.__u?[l]:null,p,null==l?v(s):l,!!(32&s.__u),c),a.__v=s.__v,a.__.__k[a.__i]=a,R(p,a,c),a.__e!=l&&y(a)),r.length>i&&r.sort(n));z.__r=0}function k(e,t,i,r,o,a,n,s,l,p,c){var g,b,f,m,u,x,h=r&&r.__k||_,$=t.length;for(l=N(i,t,h,l,$),g=0;g<$;g++)null!=(f=i.__k[g])&&(b=-1===f.__i?d:h[f.__i]||d,f.__i=g,x=P(e,f,b,o,a,n,s,l,p,c),m=f.__e,f.ref&&b.ref!=f.ref&&(b.ref&&q(b.ref,null,f),c.push(f.ref,f.__c||m,f)),null==u&&null!=m&&(u=m),4&f.__u||b.__k===f.__k?l=C(f,l,e):"function"==typeof f.type&&void 0!==x?l=x:m&&(l=m.nextSibling),f.__u&=-7);return i.__e=u,l}function N(e,t,i,r,o){var a,n,s,l,p,c=i.length,d=c,_=0;for(e.__k=new Array(o),a=0;a<o;a++)null!=(n=t[a])&&"boolean"!=typeof n&&"function"!=typeof n?(l=a+_,(n=e.__k[a]="string"==typeof n||"number"==typeof n||"bigint"==typeof n||n.constructor==String?x(null,n,null,null,null):b(n)?x(h,{children:n},null,null,null):void 0===n.constructor&&n.__b>0?x(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n).__=e,n.__b=e.__b+1,s=null,-1!==(p=n.__i=S(n,i,l,d))&&(d--,(s=i[p])&&(s.__u|=2)),null==s||null===s.__v?(-1==p&&_--,"function"!=typeof n.type&&(n.__u|=4)):p!=l&&(p==l-1?_--:p==l+1?_++:(p>l?_--:_++,n.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<c;a++)null!=(s=i[a])&&!(2&s.__u)&&(s.__e==r&&(r=v(s)),j(s,s));return r}function C(e,t,i){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=C(r[o],t,i));return t}e.__e!=t&&(t&&e.type&&!i.contains(t)&&(t=v(e)),i.insertBefore(e.__e,t||null),t=e.__e);do{t=t&&t.nextSibling}while(null!=t&&8==t.nodeType);return t}function S(e,t,i,r){var o,a,n=e.key,s=e.type,l=t[i];if(null===l||l&&n==l.key&&s===l.type&&!(2&l.__u))return i;if(r>(null==l||2&l.__u?0:1))for(o=i-1,a=i+1;o>=0||a<t.length;){if(o>=0){if((l=t[o])&&!(2&l.__u)&&n==l.key&&s===l.type)return o;o--}if(a<t.length){if((l=t[a])&&!(2&l.__u)&&n==l.key&&s===l.type)return a;a++}}return-1}function T(e,t,i){"-"==t[0]?e.setProperty(t,null==i?"":i):e[t]=null==i?"":"number"!=typeof i||g.test(t)?i:i+"px"}function V(e,t,i,r,o){var a;e:if("style"==t)if("string"==typeof i)e.style.cssText=i;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)i&&t in i||T(e.style,t,"");if(i)for(t in i)r&&i[t]===r[t]||T(e.style,t,i[t])}else if("o"==t[0]&&"n"==t[1])a=t!=(t=t.replace(s,"$1")),t=t.toLowerCase()in e||"onFocusOut"==t||"onFocusIn"==t?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=i,i?r?i.u=r.u:(i.u=l,e.addEventListener(t,a?c:p,a)):e.removeEventListener(t,a?c:p,a);else{if("http://www.w3.org/2000/svg"==o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=null==i?"":i;break e}catch(e){}"function"==typeof i||(null==i||!1===i&&"-"!=t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==i?"":i))}}function D(e){return function(i){if(this.l){var r=this.l[i.type+e];if(null==i.t)i.t=l++;else if(i.t<r.u)return;return r(t.event?t.event(i):i)}}}function P(e,i,r,o,a,n,s,l,p,c){var d,_,g,u,x,v,y,w,z,N,C,S,T,V,D,P,R,q=i.type;if(void 0!==i.constructor)return null;128&r.__u&&(p=!!(32&r.__u),n=[l=i.__e=r.__e]),(d=t.__b)&&d(i);e:if("function"==typeof q)try{if(w=i.props,z="prototype"in q&&q.prototype.render,N=(d=q.contextType)&&o[d.__c],C=d?N?N.props.value:d.__:o,r.__c?y=(_=i.__c=r.__c).__=_.__E:(z?i.__c=_=new q(w,C):(i.__c=_=new $(w,C),_.constructor=q,_.render=I),N&&N.sub(_),_.props=w,_.state||(_.state={}),_.context=C,_.__n=o,g=_.__d=!0,_.__h=[],_._sb=[]),z&&null==_.__s&&(_.__s=_.state),z&&null!=q.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=f({},_.__s)),f(_.__s,q.getDerivedStateFromProps(w,_.__s))),u=_.props,x=_.state,_.__v=i,g)z&&null==q.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),z&&null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(z&&null==q.getDerivedStateFromProps&&w!==u&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(w,C),!_.__e&&(null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(w,_.__s,C)||i.__v==r.__v)){for(i.__v!=r.__v&&(_.props=w,_.state=_.__s,_.__d=!1),i.__e=r.__e,i.__k=r.__k,i.__k.some((function(e){e&&(e.__=i)})),S=0;S<_._sb.length;S++)_.__h.push(_._sb[S]);_._sb=[],_.__h.length&&s.push(_);break e}null!=_.componentWillUpdate&&_.componentWillUpdate(w,_.__s,C),z&&null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(u,x,v)}))}if(_.context=C,_.props=w,_.__P=e,_.__e=!1,T=t.__r,V=0,z){for(_.state=_.__s,_.__d=!1,T&&T(i),d=_.render(_.props,_.state,_.context),D=0;D<_._sb.length;D++)_.__h.push(_._sb[D]);_._sb=[]}else do{_.__d=!1,T&&T(i),d=_.render(_.props,_.state,_.context),_.state=_.__s}while(_.__d&&++V<25);_.state=_.__s,null!=_.getChildContext&&(o=f(f({},o),_.getChildContext())),z&&!g&&null!=_.getSnapshotBeforeUpdate&&(v=_.getSnapshotBeforeUpdate(u,x)),l=k(e,b(P=null!=d&&d.type===h&&null==d.key?d.props.children:d)?P:[P],i,r,o,a,n,s,l,p,c),_.base=i.__e,i.__u&=-161,_.__h.length&&s.push(_),y&&(_.__E=_.__=null)}catch(e){if(i.__v=null,p||null!=n)if(e.then){for(i.__u|=p?160:128;l&&8==l.nodeType&&l.nextSibling;)l=l.nextSibling;n[n.indexOf(l)]=null,i.__e=l}else for(R=n.length;R--;)m(n[R]);else i.__e=r.__e,i.__k=r.__k;t.__e(e,i,r)}else null==n&&i.__v==r.__v?(i.__k=r.__k,i.__e=r.__e):l=i.__e=B(r.__e,i,r,o,a,n,s,p,c);return(d=t.diffed)&&d(i),128&i.__u?void 0:l}function R(e,i,r){for(var o=0;o<r.length;o++)q(r[o],r[++o],r[++o]);t.__c&&t.__c(i,e),e.some((function(i){try{e=i.__h,i.__h=[],e.some((function(e){e.call(i)}))}catch(e){t.__e(e,i.__v)}}))}function B(i,r,o,a,n,s,l,p,c){var _,g,f,u,x,h,$,y=o.props,w=r.props,z=r.type;if("svg"==z?n="http://www.w3.org/2000/svg":"math"==z?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),null!=s)for(_=0;_<s.length;_++)if((x=s[_])&&"setAttribute"in x==!!z&&(z?x.localName==z:3==x.nodeType)){i=x,s[_]=null;break}if(null==i){if(null==z)return document.createTextNode(w);i=document.createElementNS(n,z,w.is&&w),p&&(t.__m&&t.__m(r,s),p=!1),s=null}if(null===z)y===w||p&&i.data===w||(i.data=w);else{if(s=s&&e.call(i.childNodes),y=o.props||d,!p&&null!=s)for(y={},_=0;_<i.attributes.length;_++)y[(x=i.attributes[_]).name]=x.value;for(_ in y)if(x=y[_],"children"==_);else if("dangerouslySetInnerHTML"==_)f=x;else if(!(_ in w)){if("value"==_&&"defaultValue"in w||"checked"==_&&"defaultChecked"in w)continue;V(i,_,null,x,n)}for(_ in w)x=w[_],"children"==_?u=x:"dangerouslySetInnerHTML"==_?g=x:"value"==_?h=x:"checked"==_?$=x:p&&"function"!=typeof x||y[_]===x||V(i,_,x,y[_],n);if(g)p||f&&(g.__html===f.__html||g.__html===i.innerHTML)||(i.innerHTML=g.__html),r.__k=[];else if(f&&(i.innerHTML=""),k(i,b(u)?u:[u],r,o,a,"foreignObject"==z?"http://www.w3.org/1999/xhtml":n,s,l,s?s[0]:o.__k&&v(o,0),p,c),null!=s)for(_=s.length;_--;)m(s[_]);p||(_="value","progress"==z&&null==h?i.removeAttribute("value"):void 0!==h&&(h!==i[_]||"progress"==z&&!h||"option"==z&&h!==y[_])&&V(i,_,h,y[_],n),_="checked",void 0!==$&&$!==i[_]&&V(i,_,$,y[_],n))}return i}function q(e,i,r){try{if("function"==typeof e){var o="function"==typeof e.__u;o&&e.__u(),o&&null==i||(e.__u=e(i))}else e.current=i}catch(e){t.__e(e,r)}}function j(e,i,r){var o,a;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||q(o,null,i)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,i)}o.base=o.__P=null}if(o=e.__k)for(a=0;a<o.length;a++)o[a]&&j(o[a],i,r||"function"!=typeof e.type);r||m(e.__e),e.__c=e.__=e.__e=void 0}function I(e,t,i){return this.constructor(e,i)}function A(e,t){void 0===t&&(t={});var i=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===i&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}e=_.slice,t={__e:function(e,t,i,r){for(var o,a,n;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&null!=a.getDerivedStateFromError&&(o.setState(a.getDerivedStateFromError(e)),n=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),n=o.__d),n)return o.__E=o}catch(t){e=t}throw e}},i=0,$.prototype.setState=function(e,t){var i;i=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(f({},i),this.props)),e&&f(i,e),null!=e&&this.__v&&(t&&this._sb.push(t),w(this))},$.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),w(this))},$.prototype.render=h,r=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,n=function(e,t){return e.__v.__b-t.__v.__b},z.__r=0,s=/(PointerCapture)$|Capture$/i,l=0,p=D(!1),c=D(!0);var M={offer_list_wrapper:"pb-8f0f",title:"pb-0f0e",title_container:"pb-e052",title_line:"pb-fd48",bottom_container:"pb-3865",bottom_text:"pb-2328",button_container:"pb-dbf2",add_to_cart_button_container:"pb-2928",add_to_cart_button:"pb-f373",bottom_btn:"pb-f542",offer_list_type3_wrapper:"pb-e009",single_offer_container:"pb-aac6",offer_inner_container:"pb-b174",badge_wrapper:"pb-fe0a",badge2_wrapper:"pb-3f1d",badge3_wrapper:"pb-4b05",badge5_wrapper:"pb-07a8",badge7_wrapper:"pb-d52a",badge8_wrapper:"pb-564e",content_wrapper:"pb-342e",check_input:"pb-ced1",content_container:"pb-5279",heading:"pb-2543",discount:"pb-5673",right_container:"pb-3662",currency:"pb-ca09",offer_price:"pb-0993",heading_container:"pb-a047",heading_inner_container:"pb-abd0",variant_select_wrapper:"pb-74c2",selected:"pb-199d",variant_select_container:"pb-3cf1",variant_select_label:"pb-4a3e",variant_select:"pb-1bcc",variant_select_option:"pb-01f8",quantity_button:"pb-9665",quantity_controls:"pb-0d31",free_gift_badge_container:"pb-4e82",free_gift_badge:"pb-31a0",plus_container:"pb-0ada",free_gift_left_container:"pb-362d",free_gift_left_wrapper:"pb-0863",free_gift_title_container:"pb-ea58",free_gift_title:"pb-2ed2",free_gift_right_container:"pb-95ae",free_gift_product_container:"pb-b955",free_gift_product_image_container:"pb-3034",free_gift_image:"pb-de17",free_gift_product_image:"pb-7a49",free_gift_quantity:"pb-3245",free_gift_variant_container:"pb-e6fa",free_gift_price_container:"pb-dc54"};A(".pb-8f0f *{box-sizing:border-box;margin:0;padding:0}.pb-8f0f{grid-gap:10px;gap:10px;height:100%;margin-bottom:10px;min-height:190px}.pb-0f0e{font-weight:500;text-align:center}.pb-e052{grid-gap:10px;align-items:center;display:flex;gap:10px;margin-bottom:10px}.pb-fd48{display:block!important;flex-grow:1;height:4px}.pb-3865{margin-top:100px;text-align:center;width:100%}.pb-2328{font-size:18px;font-weight:600;margin-bottom:10px}.pb-2928,.pb-dbf2{width:100%}.pb-2928{display:flex;justify-content:center;margin-top:15px}.pb-f373{border:none;cursor:pointer;display:inline-block;font-weight:500;outline:none;text-align:center;text-decoration:none;transition:all .2s ease;width:100%}.pb-f373:hover{opacity:.9;transform:translateY(-1px)}.pb-f373:active{transform:translateY(0)}.pb-f542{background-color:#000;border:none;border-radius:10px;color:#fff;cursor:pointer;padding:10px 12px;width:100%}.pb-e009{grid-gap:15px;display:flex;gap:15px}.pb-aac6{cursor:pointer;margin:10px 0;position:relative;z-index:5}.pb-aac6,.pb-b174{border-radius:10px}.pb-b174{grid-gap:10px;align-items:center;display:flex;gap:10px}.pb-fe0a{right:15px;top:-12px}.pb-3f1d,.pb-fe0a{position:absolute;z-index:4}.pb-3f1d{right:-44px;top:-33px;transform:rotate(45deg)}.pb-4b05{right:5px;top:-17px}.pb-07a8,.pb-4b05{position:absolute;z-index:4}.pb-07a8{right:-15px;top:-20px}.pb-d52a{left:-2px;right:unset;top:-6px}.pb-564e,.pb-d52a{position:absolute;z-index:4}.pb-564e{right:-1px;top:-12px}.pb-342e{align-items:center;display:flex;justify-content:space-between;width:100%}.pb-ced1{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:50%;cursor:pointer;display:block!important;height:16px!important;margin:0;max-height:16px!important;max-width:16px!important;min-height:16px!important;min-width:16px!important;padding:0;position:relative!important;width:16px!important}.pb-5279{grid-gap:5px;display:flex;flex-direction:column;gap:5px;width:100%}.pb-2543{color:#000;color:var(--bar-title-color,#000);display:inline-block;font-size:15px;font-size:var(--bar-title-font-size,15px);font-style:var(--bar-title-font-style);font-weight:500;font-weight:var(--bar-title-font-weight,500);word-break:break-word}.pb-5673{border-radius:8px;font-size:9px;padding:4px 6px}.pb-3662{grid-gap:6px;align-items:flex-end;display:flex;flex-direction:column;gap:6px;min-width:70px;text-align:right}.pb-ca09{color:#000;color:var(--bar-title-color,#000);display:inline-block;font-size:13px;font-size:var(--bar-title-font-size,13px);font-style:var(--bar-title-font-style);font-weight:500;font-weight:var(--bar-title-font-weight,500);word-break:break-word}.pb-0993{font-size:10px;text-decoration:line-through}.pb-a047{grid-gap:5px;display:flex;gap:5px;justify-content:space-between;width:100%}.pb-abd0{grid-gap:10px;align-items:center;display:flex;gap:10px}.pb-74c2{max-height:0;opacity:0;overflow-y:auto;scrollbar-color:var(--primary-color) transparent;scrollbar-width:thin;transition:all .3s ease-in-out}.pb-74c2::-webkit-scrollbar{width:6px}.pb-74c2::-webkit-scrollbar-track{background:transparent}.pb-74c2::-webkit-scrollbar-thumb{background-color:var(--primary-color);border-radius:3px}.pb-199d{margin-top:10px;max-height:120px;opacity:1}.pb-3cf1{grid-gap:10px;align-items:center;display:flex;gap:10px;margin-bottom:10px}.pb-4a3e{color:#333;font-size:12px}.pb-1bcc{border:1px solid #059669;border-radius:4px;box-shadow:none;color:#000;color:var(--bar-title-color,#000);font-size:12px;height:30px;max-width:100%;min-width:40px;outline:none;padding:3px 2px;width:calc(100% - 10px);width:100%}.pb-01f8{border:1px solid #333;border-radius:5px;padding:2px 3px;width:calc(100% - 10px)}.pb-9665{background:none;border:none;cursor:pointer;height:24px;justify-content:center;transition:all .2s ease;width:24px}.pb-0d31,.pb-9665{align-items:center;display:flex}.pb-0d31{grid-gap:5px;gap:5px}.pb-4e82{position:relative}.pb-31a0{width:100%}.pb-0ada{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;left:50%;position:absolute;top:-10px;transform:translateX(-50%);width:20px;z-index:99}.pb-362d{grid-gap:20px;gap:20px}.pb-0863,.pb-362d{align-items:center;display:flex;padding:5px 10px}.pb-0863{justify-content:space-between}.pb-ea58{grid-gap:5px;align-items:center;display:flex;flex:1 1;gap:5px;min-width:0}.pb-2ed2{display:inline-block;max-width:100%;overflow:hidden;text-decoration:none;text-overflow:ellipsis;white-space:nowrap}.pb-95ae{display:flex;flex-direction:column}.pb-b955{grid-gap:5px;align-items:center;display:flex;gap:5px;justify-content:space-between;padding:8px 15px}.pb-3034{position:relative}.pb-7a49,.pb-de17{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.pb-3245,.pb-7a49{position:absolute}.pb-3245{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;left:-10%;top:-10%;transform:translate(-10%,-10%);width:20px}.pb-e6fa{padding:0 15px}.pb-dc54{grid-gap:2px;display:flex;flex-direction:column;gap:2px;text-align:right}");var L=function(e,t,i,r){var o;t[0]=0;for(var a=1;a<t.length;a++){var n=t[a++],s=t[a]?(t[0]|=n?1:2,i[t[a++]]):t[++a];3===n?r[0]=s:4===n?r[1]=Object.assign(r[1]||{},s):5===n?(r[1]=r[1]||{})[t[++a]]=s:6===n?r[1][t[++a]]+=s+"":n?(o=e.apply(s,L(e,s,i,["",null])),r.push(o),s[0]?t[0]|=2:(t[a-2]=0,t[a]=o)):r.push(s)}return r},O=new Map;function E(e){var t=O.get(this);return t||(t=new Map,O.set(this,t)),(t=L(this,t.get(e)||(t.set(e,t=function(e){for(var t,i,r=1,o="",a="",n=[0],s=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?n.push(0,e,o):3===r&&(e||o)?(n.push(3,e,o),r=2):2===r&&"..."===o&&e?n.push(4,e,0):2===r&&o&&!e?n.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(n.push(r,0,o,i),r=6),e&&(n.push(r,e,0,i),r=6)),o=""},l=0;l<e.length;l++){l&&(1===r&&s(),s(l));for(var p=0;p<e[l].length;p++)t=e[l][p],1===r?"<"===t?(s(),n=[n],r=3):o+=t:4===r?"--"===o&&">"===t?(r=1,o=""):o=t+o[0]:a?t===a?a="":o+=t:'"'===t||"'"===t?a=t:">"===t?(s(),r=1):r&&("="===t?(r=5,i=o,o=""):"/"===t&&(r<5||">"===e[l][p+1])?(s(),3===r&&(n=n[0]),r=n,(n=n[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(s(),r=2):o+=t),3===r&&"!--"===o&&(r=4,n=n[0])}return s(),n}(e)),t),arguments,[])).length>1?t:t[0]}const U=E.bind(u),F=e=>U`
    <div
      style=${{width:e.size?e.size:20,height:e.size?e.size:20}}
    >
      <svg
        fill=${e.color?e.color:"#000000"}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        space="preserve"
      >
        <g>
          <g>
            <rect x="272.696" y="280.342" width="183.118" height="231.658" />
          </g>
        </g>
        <g>
          <g>
            <rect x="56.186" y="280.342" width="183.118" height="231.658" />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M398.762,94.432c4.953-9.075,7.772-19.474,7.772-30.521C406.535,28.67,377.864,0,342.624,0
                c-26.065,0-52.735,13.468-73.168,36.951c-5.057,5.811-9.561,12.056-13.456,18.56c-3.895-6.504-8.399-12.749-13.456-18.56
                C222.111,13.468,195.442,0,169.376,0c-35.24,0-63.911,28.671-63.911,63.911c0,11.046,2.818,21.446,7.772,30.521H26.2v152.519
                h213.104V94.432h33.391v152.519H485.8V94.432H398.762z M169.376,94.432c-16.828,0-30.52-13.692-30.52-30.521
                c0-16.829,13.692-30.52,30.52-30.52c30.299,0,59.106,30.993,67.489,61.04H169.376z M342.624,94.432h-67.489
                c8.383-30.048,37.19-61.04,67.489-61.04c16.828,0,30.52,13.692,30.52,30.52C373.143,80.741,359.452,94.432,342.624,94.432z"
            />
          </g>
        </g>
      </svg>
    </div>
  `,G={"pt-pt":"pt",pt_pt:"pt","pt-br":"pt",pt_br:"pt",pt:"pt","en-us":"en",en_us:"en","en-gb":"en",en_gb:"en","en-ca":"en",en_ca:"en","en-au":"en",en_au:"en","en-nz":"en",en_nz:"en",en:"en","es-es":"es",es_es:"es","es-mx":"es",es_mx:"es","es-ar":"es",es_ar:"es","es-co":"es",es_co:"es","es-cl":"es",es_cl:"es",es:"es","fr-fr":"fr",fr_fr:"fr","fr-ca":"fr",fr_ca:"fr","fr-be":"fr",fr_be:"fr","fr-ch":"fr",fr_ch:"fr",fr:"fr","de-de":"de",de_de:"de","de-at":"de",de_at:"de","de-ch":"de",de_ch:"de",de:"de","it-it":"it",it_it:"it","it-ch":"it",it_ch:"it",it:"it","zh-cn":"zh",zh_cn:"zh","zh-tw":"zh_tw",zh_tw:"zh_tw","zh-hk":"zh_tw",zh_hk:"zh_tw",zh:"zh","ja-jp":"ja",ja_jp:"ja",ja:"ja","ko-kr":"ko",ko_kr:"ko",ko:"ko","ru-ru":"ru",ru_ru:"ru",ru:"ru","nl-nl":"nl",nl_nl:"nl","nl-be":"nl",nl_be:"nl",nl:"nl","sv-se":"sv",sv_se:"sv",sv:"sv","no-no":"no",no_no:"no","nb-no":"no",nb_no:"no",no:"no","da-dk":"da",da_dk:"da",da:"da","fi-fi":"fi",fi_fi:"fi",fi:"fi","pl-pl":"pl",pl_pl:"pl",pl:"pl","tr-tr":"tr",tr_tr:"tr",tr:"tr","ar-sa":"ar",ar_sa:"ar","ar-ae":"ar",ar_ae:"ar","ar-eg":"ar",ar_eg:"ar",ar:"ar","hi-in":"hi",hi_in:"hi",hi:"hi","th-th":"th",th_th:"th",th:"th","he-il":"he",he_il:"he",he:"he","id-id":"id",id_id:"id",id:"id","ms-my":"ms",ms_my:"ms",ms:"ms","ro-ro":"ro",ro_ro:"ro",ro:"ro","hu-hu":"hu",hu_hu:"hu",hu:"hu","uk-ua":"uk",uk_ua:"uk",uk:"uk","vi-vn":"vi",vi_vn:"vi",vi:"vi","cs-cz":"cs",cs_cz:"cs",cs:"cs","el-gr":"el",el_gr:"el",el:"el","sk-sk":"sk",sk_sk:"sk",sk:"sk"};const W=E.bind(u),H=({temp:e,styles:t,item:i,active:r,getThemeValue:o,formatPrice:a,freeGiftOptionSelections:n={},handleFreeGiftOptionChange:s,findVariantIdByOptions:l,shopify_domain:p,admin:c=!1,lang:d})=>{const _="type_3"===e.template_type&&i.enable_badge&&"bottom"===i.badge_position;return W`
    <div
      className=${t.free_gift_badge_container}
      style=${{top:_?"0":"type_2"==e.template_type?"95%":"100%",borderLeft:"type_3"==e.template_type?"none":`${o(e.settings,r?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r?o(e.settings,"active_bar_border_color",e.settings.theme_primary_color):o(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderRight:"type_3"==e.template_type?"none":`${o(e.settings,r?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r?o(e.settings,"active_bar_border_color",e.settings.theme_primary_color):o(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderBottom:"type_3"==e.template_type?"none":`${o(e.settings,r?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r?o(e.settings,"active_bar_border_color",e.settings.theme_primary_color):o(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderTop:"none",borderBottomLeftRadius:_?0:`${o(e.settings,"bar_border_radius",10)}px`,borderBottomRightRadius:_?0:`${o(e.settings,"bar_border_radius",10)}px`,borderTopLeftRadius:_?`${o(e.settings,"bar_border_radius",10)}px`:0,borderTopRightRadius:_?`${o(e.settings,"bar_border_radius",10)}px`:0}}
    >
      ${r&&"type_3"!==e.template_type&&W`
        <div
          style=${{color:o(e.settings,"active_bar_bg_color",e.settings.theme_primary_color),backgroundColor:"#fff",border:`1px solid ${o(e.settings,"active_bar_bg_color",e.settings.theme_primary_color)}`}}
          className=${t.plus_container}
        >
          +
        </div>
      `}
      <div
        className=${t.free_gift_badge}
        style=${{backgroundColor:r?o(e.settings,"free_gift_badge_bg_color",o(e.settings,"active_bar_bg_color",e.settings.theme_primary_color)):o(e.settings,"inactive_free_gift_badge_bg_color",`${e.settings.theme_primary_color}66`),borderBottomLeftRadius:_?0:`${o(e.settings,"bar_border_radius",10)}px`,borderBottomRightRadius:_?0:`${o(e.settings,"bar_border_radius",10)}px`,borderTopLeftRadius:_?`${o(e.settings,"bar_border_radius",10)}px`:0,borderTopRightRadius:_?`${o(e.settings,"bar_border_radius",10)}px`:0}}
      >
        <div className=${t.free_gift_inner_container}>
          ${o(e.settings,"always_show_free_gift_products",!1)||r?W`
                <div className=${t.free_gift_right_container}>
                  ${!!i&&!!i.free_gift_products&&Array.isArray(i.free_gift_products)&&i.free_gift_products.length>0&&W`
                    ${i.free_gift_products.map(((_,g)=>W`
                          <div className=${t.free_gift_product_container}>
                            ${"type_3"!==e.template_type?W`
                                  <a
                                    target=${c?"_blank":"_self"}
                                    href=${`https://${p}/products/${_.handle}`}
                                    className=${t.free_gift_product_image_container}
                                    style=${{width:o(e.settings,"free_gift_product_image_size",35),height:o(e.settings,"free_gift_product_image_size",35),borderRadius:o(e.settings,"free_gift_product_image_border_radius",5)}}
                                  >
                                    <img
                                      src=${_?.image?_?.image:"https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?v=1530129458"}
                                      style=${{objectFit:"cover",borderRadius:o(e.settings,"free_gift_product_image_border_radius",5)}}
                                      alt="free gift"
                                      className=${t.free_gift_product_image}
                                    />
                                    <span
                                      className=${t.free_gift_quantity}
                                      style=${{color:o(e.settings,"free_gift_quantity_text_color","#000"),fontSize:o(e.settings,"free_gift_quantity_text_size",10),backgroundColor:o(e.settings,"free_gift_quantity_bg_color","#f0f0f0"),boxShadow:`0 0 0 1px ${o(e.settings,"free_gift_quantity_bg_color","#f0f0f0")}`}}
                                      >x${_?.quantity}</span
                                    >
                                  </a>
                                `:W``}
                            <p
                              className=${t.free_gift_title_container}
                              title=${Array.isArray(i.free_gift_products)?i.free_gift_products.map((e=>e.title)).join("& "):""}
                            >
                              <a
                                target=${c?"_blank":"_self"}
                                href=${`https://${p}/products/${_.handle}`}
                                style=${{fontSize:o(e.settings,"free_gift_primary_text_size",14),color:o(e.settings,"free_gift_primary_text_color","#fff")}}
                                className=${t.free_gift_title}
                              >
                                ${_?.title?.replace("- Default Title","")}
                              </a>
                            </p>
                            ${"type_3"!==e.template_type?W`
                                  <div
                                    className=${t.free_gift_price_container}
                                  >
                                    <p
                                      style=${{color:o(e.settings,"free_gift_price_text_color","#fff"),fontSize:o(e.settings,"free_gift_price_text_size",10),textDecoration:"line-through"}}
                                    >
                                      ${a(parseFloat(_?.price)*Number(_?.quantity))}
                                    </p>
                                    <p
                                      style=${{color:o(e.settings,"free_gift_primary_text_color","#fff"),fontSize:o(e.settings,"free_gift_primary_text_size",14),fontWeight:"bold"}}
                                    >
                                      ${function(e){const t={en:"Free",es:"Gratis",fr:"Gratuit",de:"Kostenlos",it:"Gratuito",pt:"Grátis",ru:"Бесплатно",zh:"免费",zh_Tw:"免費",ja:"無料",ko:"무료",hi:"नि:शुल्क",ar:"مجاني",tr:"Ücretsiz",nl:"Gratis",sv:"Gratis",no:"Gratis",da:"Gratis",fi:"Ilmainen",pl:"Darmowy",cs:"Zdarma",el:"Δωρεάν",th:"ฟรี",he:"חינם",id:"Gratis",ms:"Percuma",ro:"Gratuit",hu:"Ingyenes",uk:"Безкоштовно",vi:"Miễn phí"},i=(e=>{if("string"!=typeof e)return"en";const t=e.toLowerCase().trim();if(G[t])return G[t];const i=t.split(/[-_]/)[0];return G[i]?G[i]:i&&2===i.length?i:"en"})(e);return t[i]||t.en}(d||"en")}
                                    </p>
                                  </div>
                                `:W``}
                          </div>
                          ${"type_3"!==e.template_type?W`
                                <div
                                  className=${t.free_gift_variant_container}
                                >
                                  ${r&&!i.enable_variant_selection&&_.variants?.length>1&&W`
                                    <div
                                      className=${`${t.selected} ${t.variant_select_wrapper}`}
                                      style=${{margin:0,padding:0,"--primary-color":e.settings.theme_primary_color}}
                                    >
                                      ${Array.from({length:Math.max(1,parseInt(_.quantity)||1)}).map(((i,r)=>W`
                                          <div
                                            className=${t.variant_select_container}
                                            key=${`${g}_${r}`}
                                          >
                                            ${Array.isArray(_.options)?_.options.map(((i,a)=>W`
                                                    <div
                                                      key=${i.name}
                                                      style=${{marginBottom:"8px",width:"100%"}}
                                                    >
                                                      <select
                                                        className=${t.variant_select}
                                                        style=${{border:`${o(e.settings,"select_border_size",1)}px solid ${o(e.settings,"select_border_color",e.settings.theme_primary_color)}`,backgroundColor:o(e.settings,"select_bg_color","#ffffff"),fontSize:o(e.settings,"product_variant_size",12),color:e.settings.product_variant_text_color,borderRadius:e.settings.select_border_radius,padding:"8px 12px",width:"100%",cursor:"pointer",maxWidth:_.options.length>1?"100%":"50%"}}
                                                        id=${`free_gift_variant_select_${g}_${r}_${a}`}
                                                        value=${n[`${g}_${r}`]?.[i.name]||Array.isArray(i.values)&&i.values[0]||""}
                                                        onChange=${e=>s(`${g}_${r}`,i.name,e.target.value)}
                                                      >
                                                        ${Array.isArray(i.values)?i.values.map((o=>{const a={...n[`${g}_${r}`],[i.name]:o},s="function"==typeof l?l(_.variants,_.options,a):null,p=s&&Array.isArray(_.variants)&&_.variants.find((e=>String(e.id)===String(s))),c=p&&!1===p.available;return W`
                                                                  <option
                                                                    key=${o}
                                                                    className=${t.variant_select_option}
                                                                    value=${o}
                                                                    disabled=${c}
                                                                    style=${{backgroundColor:e.settings.select_bg_color,color:e.settings.product_variant_text_color}}
                                                                  >
                                                                    ${o}${c?" - unavailable":""}
                                                                  </option>
                                                                `})):W``}
                                                      </select>
                                                    </div>
                                                  `)):W``}
                                          </div>
                                        `))}
                                    </div>
                                  `}
                                </div>
                              `:W``}
                          ${g!==i.free_gift_products.length-1&&W` <div
                            style=${{height:o(e.settings,"free_gift_product_divider_size",1),display:"block",width:"100%",backgroundColor:o(e.settings,"free_gift_product_divider_color","#fff")}}
                            className=${t.divider}
                          ></div>`}
                        `))}
                  `}
                </div>
              `:W`
                <div className=${t.free_gift_left_wrapper}>
                  <div className=${t.free_gift_left_container}>
                    ${i.free_gift_image?W`
                          <img
                            src=${i.free_gift_image}
                            style=${{width:o(e.settings,"free_gift_icon_size","type_3"===e.settings.template_type?16:20),height:o(e.settings,"free_gift_icon_size","type_3"===e.settings.template_type?16:20)}}
                            alt="free gift"
                            className=${t.free_gift_image}
                          />
                        `:W`
                          <${F}
                            size=${o(e.settings,"free_gift_icon_size","type_3"===e.settings.template_type?16:20)}
                            color=${r?o(e.settings,"active_free_gift_icon_color","#ffffff"):o(e.settings,"free_gift_icon_color","#000000")}
                          />
                        `}
                    <p
                      style=${{color:r?o(e.settings,"active_free_gift_badge_text_color","#ffffff"):o(e.settings,"free_gift_badge_text_color","#000000"),fontSize:`${o(e.settings,"free_gift_badge_text_size",14)}px`,minWidth:60}}
                    >
                      ${o(i,"free_gift_badge_text","Free Gift")}
                    </p>
                  </div>
                  ${i?.free_gift_products?.length>1&&W`
                    <p
                      style=${{color:r?o(e.settings,"active_free_gift_badge_text_color","#ffffff"):o(e.settings,"free_gift_badge_text_color","#000000"),fontSize:`${o(e.settings,"free_gift_badge_text_size",14)}px`,fontWeight:"bold"}}
                    >
                      ${i?.free_gift_products?.length}x
                    </p>
                  `}
                </div>
              `}
        </div>
      </div>
    </div>
  `};E.bind(u);const X=({temp:e,remove_branding:t})=>null,Y=E.bind(u),Q=E.bind(u),Z=E.bind(u),K=E.bind(u);A('.pb-207b{height:40px;text-align:center;transform:rotate(-45deg);width:40px}.pb-207b,.pb-207b span{align-items:center;display:flex;justify-content:center}.pb-207b span{background:inherit;font-size:12px;height:100%;transform:rotate(45deg);width:100%}.pb-207b span:after,.pb-207b span:before,.pb-207b:after,.pb-207b:before{background:inherit;content:"";height:100%;left:0;position:absolute;top:0;transform:rotate(30deg);width:100%;z-index:-1}.pb-207b:after{transform:rotate(-30deg)}.pb-207b span:after{transform:rotate(30deg)}.pb-207b span:before{transform:rotate(-30deg)}');const J=E.bind(u);A('.pb-2491{background-color:#000;border-bottom-left-radius:5px;border-bottom-right-radius:5px;color:#fff;font-size:9px;font-weight:700;min-width:80px;padding:3px 8px!important;text-align:center;z-index:1}.pb-2491:after,.pb-2491:before{border-bottom-style:solid;border-bottom-width:11px;border-left:8px solid transparent;content:"";display:block;filter:brightness(.7);height:0;position:absolute;top:0;width:0}.pb-2491:before{left:-8px;top:2px}.pb-2491:after{right:-8px;top:2px;transform:rotateY(180deg)}');const ee=E.bind(u),te=E.bind(u),ie=E.bind(u),re={Badge1:({text:e="Most Popular",offerData:t,getThemeValue:i,getBadgeSetting:r})=>Y`
    <div
      style=${{color:r("shipping_text_color","#fff"),fontSize:r("badge_size",10),backgroundColor:r("shipping_background_color",i(t.settings,"theme_primary_color","#059669")),borderRadius:12,padding:"4px 12px"}}
    >
      ${e}
    </div>
  `,Badge2:({text:e="Limited Offer",offerData:t,getThemeValue:i,getBadgeSetting:r})=>Q`
    <svg width="100" height="70" viewBox="0 0 120 120">
      <g transform="translate(60,60) scale(1.4, 1)">
        <!-- Makes it elliptical -->
        <path
          d="${function(){const e=Math.PI/36;let t="";for(let i=0;i<72;i++){const r=i%2==0?40:35,o=i*e;t+=`${0===i?"M":"L"}${Math.cos(o)*r},${Math.sin(o)*r} `}return t+"Z"}()}"
          fill=${r("shipping_background_color",i(t.settings,"theme_primary_color","#059669"))}
        />
      </g>
      <text
        x="60"
        y="66"
        text-anchor="middle"
        font-size=${r("badge_size",12)}
        font-weight="bold"
        fill=${r("shipping_text_color","#fff")}
        font-family="Arial, sans-serif"
      >
        ${e}
      </text>
    </svg>
  `,Badge3:({text:e="Most Popular",offerData:t,getThemeValue:i,getBadgeSetting:r,width:o="130"})=>Z`
    <svg
      width=${o}
      height="29"
      viewBox="0 0 130 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Background grey fold tabs -->
      <path
        d="M0.173828 16.6016L15.8615 0.664062H117.506L129.229 17.2293L0.173828 16.6016Z"
        fill="#B3B3B3"
      />

      <g transform="translate(15.1)">
        {/* Green ribbon (dark base shadow) */}
        <path
          d="M100.835 24.332L51.862 30.6645C51.763 30.6539 51.664 30.6539 51.5685 30.6645L2.32681 24.3356C1.52405 24.424 0.820312 23.7945 0.820312 22.9847V1.66504H102.341V22.9811C102.341 23.791 101.638 24.4205 100.835 24.332Z"
          fill="#285841"
        />

        {/* Green ribbon (lighter top face) */}
        <path
          d="M100.835 23.3311L51.862 29.6635C51.763 29.6529 51.664 29.6529 51.5685 29.6635L2.32681 23.3346C1.52405 23.423 0.820312 22.7935 0.820312 21.9837V0.664062H102.341V21.9802C102.341 22.79 101.638 23.4195 100.835 23.3311Z"
          fill=${r("shipping_background_color",i(t.settings,"theme_primary_color","#059669"))}
        />

        {/* White inner border line) */}
        <path
          d="M98.6639 0.664062V18.9389C98.6639 19.6532 98.045 20.2084 97.3342 20.1306L51.834 26.845C51.7491 26.8344 51.6607 26.8344 51.5723 26.845L5.83163 20.1342C5.12082 20.212 4.50195 19.6568 4.50195 18.9424V0.664062"
          stroke="white"
          stroke-linejoin="round"
        />

        {/* Text: Most Popular */}
        <text
          x="51.5"
          y="17"
          font-weight="bold"
          text-anchor="middle"
          fill=${r("shipping_text_color","#fff")}
          font-family="Arial, sans-serif"
          style=${{fontSize:r("badge_size",10)}}
        >
          ${e}
        </text>
      </g>
    </svg>
  `,Badge4:({text:e="Most Popular",offerData:t,getThemeValue:i,getBadgeSetting:r,width:o="89"})=>{const a=r("badge_size",10);return K`
    <svg
      width=${o}
      height="80"
      viewBox="0 0 89 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M88.2523 68.4709V50.4731L25.0735 0.5H0.871094L88.2523 68.4709Z"
        fill=${r("shipping_background_color",i(t.settings,"theme_primary_color","#08769b"))}
      />

      <defs>
        <path id="diagonalPath" d="M12.972 0.25 L88.2523 59.472" />
      </defs>

      <text
        font-size=${a}
        font-weight="bold"
        fill=${r("shipping_text_color","#FFFFFF")}
        text-anchor="middle"
        dominant-baseline="middle"
      >
        <textPath
          href="#diagonalPath"
          startOffset="50%"
          dy=${(.15*a).toFixed(1)}
        >
          ${e}
        </textPath>
      </text>
    </svg>
  `},Badge5:({text:e="Most Popular",offerData:t,getThemeValue:i,getBadgeSetting:r})=>J`
    <div
      className=${"pb-207b"}
      style=${{backgroundColor:r("shipping_background_color",i(t.settings,"theme_primary_color","#059669"))}}
    >
      <span
        style=${{color:r("shipping_text_color","#fff"),fontSize:r("badge_size",10)}}
        >${e}</span
      >
    </div>
  `,Badge6:({text:e="Most Popular",offerData:t,getThemeValue:i,getBadgeSetting:r})=>ee`
    <div
      style=${{position:"relative"}}
    >
      <div
        className=${"pb-2491"}
        style=${{backgroundColor:r("shipping_background_color",i(t.settings,"theme_primary_color","#059669")),color:r("shipping_text_color","#fff"),borderBottomLeftRadius:i(t.settings,"bar_border_radius",10),borderBottomRightRadius:i(t.settings,"bar_border_radius",10)}}
      >
        <span
          style=${{color:r("shipping_text_color","#fff"),fontSize:r("badge_size",9)+"px"}}
        >
          ${e}
        </span>
      </div>
    </div>
  `,Badge7:({text:e="Most Popular",offerData:t,getThemeValue:i,getBadgeSetting:r,width:o="135"})=>te`
    <svg
      width=${o}
      height="31"
      viewBox="0 0 135 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M134.165 5.69325C133.346 7.43562 129.63 11.5033 124.561 18.0675C121.65 21.8358 118.944 24.7334 116.098 27.028C115.259 27.704 113.674 28.9259 112.284 29.6294C111.428 29.8928 110.41 30.1255 109.194 30.298C109.163 30.3011 109.134 30.3032 109.104 30.3054C109.003 30.3128 108.908 30.3191 108.822 30.3244H108.817C108.745 30.3286 108.678 30.3329 108.619 30.335C108.12 30.3572 107.597 30.3794 107.05 30.3985C106.006 30.4376 104.875 30.4704 103.668 30.5021C98.8446 30.5021 90.8542 30.5021 81.8938 30.5021C59.5573 30.5021 1.18325 30.1615 0.755859 30.1615V5.26798C0.755859 5.26798 101.319 5.64142 125.462 5.64142C126.108 5.64142 126.691 5.5991 127.215 5.52293C132.334 4.77711 132.017 0.766602 132.017 0.766602L134.165 5.69325Z"
        fill="url(#paint0_linear_8787_3009)"
      />
      <path
        d="M134.497 5.93127C134.362 6.35655 131.971 9.86244 126.698 16.2617C122.744 21.0582 118.602 25.3523 116.099 27.6077C115.459 28.1843 114.342 28.9946 112.285 29.6283C111.429 29.8917 110.41 30.1244 109.195 30.2969C108.785 30.3561 108.356 30.4069 107.901 30.4503C107.624 30.4757 107.265 30.4323 107.051 30.3974C106.938 30.3794 106.865 30.3646 106.865 30.3646C106.865 30.3646 112.22 30.5011 115.788 26.6535C117.428 24.8847 117.291 21.2878 113.778 20.2045C113.753 20.196 113.728 20.1886 113.702 20.1812C115.741 17.7893 122.537 10.531 127.216 5.52186C129.725 2.83585 131.625 0.796213 131.859 0.5L131.91 0.502116C134.25 2.15773 135.021 4.27354 134.497 5.93127Z"
        fill="url(#paint1_linear_8787_3009)"
      />
      <path
        d="M115.929 26.7474C115.266 27.654 114.262 28.4496 112.942 29.115C111.845 29.6683 110.499 30.0798 109.103 30.3041C108.312 30.4321 107.504 30.4987 106.715 30.4998C105.931 30.4998 104.904 30.4998 103.668 30.4998C98.8446 30.4998 90.8542 30.4998 81.8938 30.4998C59.5573 30.4998 1.18325 30.1591 0.755859 30.1591V29.8068C1.18325 29.8068 59.5583 30.1475 81.8938 30.1475C93.1531 30.1475 102.874 30.1475 106.714 30.1454C108.842 30.1454 111.111 29.6408 112.784 28.7987C114.052 28.1597 115.015 27.3991 115.642 26.5379C116.475 25.3975 116.747 23.8826 116.338 22.6766C115.957 21.5531 114.674 20.657 113.294 20.2508L113.881 20.0879C115.449 20.5629 116.379 21.7023 116.671 22.5634C117.117 23.8752 116.824 25.517 115.928 26.7463L115.929 26.7474Z"
        fill="url(#paint2_linear_8787_3009)"
      />
      <text
        x="50%"
        y="58%"
        text-anchor="middle"
        dominant-baseline="middle"
        fill=${r("shipping_text_color","#fff")}
        font-size=${r("badge_size",10)}
        font-weight="bold"
      >
        ${e}
      </text>
      <defs>
        <linearGradient
          id="paint0_linear_8787_3009"
          x1="132.395"
          y1="15.6344"
          x2="10.1077"
          y2="15.6344"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.04"
            stop-color=${`${r("shipping_background_color",i(t.settings,"theme_primary_color","#059669"))}E6`}
          />
          <stop
            offset="0.12"
            stop-color=${`${r("shipping_background_color",i(t.settings,"theme_primary_color","#059669"))}E6`}
          />
          <stop
            offset="0.3"
            stop-color=${`${r("shipping_background_color",i(t.settings,"theme_primary_color","#059669"))}E6`}
          />
          <stop
            offset="0.48"
            stop-color=${`${r("shipping_background_color",i(t.settings,"theme_primary_color","#059669"))}E6`}
          />
          <stop
            offset="0.65"
            stop-color=${r("shipping_background_color",i(t.settings,"theme_primary_color","#059669"))}
          />
          <stop
            offset="0.83"
            stop-color=${r("shipping_background_color",i(t.settings,"theme_primary_color","#059669"))}
          />
          <stop
            offset="1"
            stop-color=${r("shipping_background_color",i(t.settings,"theme_primary_color","#059669"))}
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_8787_3009"
          x1="123.722"
          y1="19.7358"
          x2="116.689"
          y2="12.5961"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#135032" />
          <stop offset="0.1" stop-color="#185839" />
          <stop offset="0.31" stop-color="#28734E" />
          <stop offset="0.49" stop-color="#34835C" />
          <stop
            offset="0.65"
            stop-color=${r("shipping_background_color",i(t.settings,"theme_primary_color","#059669"))}
          />
          <stop
            offset="0.77"
            stop-color=${r("shipping_background_color",i(t.settings,"theme_primary_color","#059669"))}
          />
        </linearGradient>
        <linearGradient
          id="paint2_linear_8787_3009"
          x1="79.6796"
          y1="8.57156"
          x2="62.9616"
          y2="61.6825"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7FD4AA" />
          <stop offset="0.19" stop-color="#5AB98A" />
          <stop offset="0.45" stop-color="#20935A" />
          <stop offset="0.68" stop-color="#0F4A2D" />
          <stop offset="0.87" stop-color="#0F4A2D" />
          <stop offset="1" stop-color="#0F4A2D" />
        </linearGradient>
      </defs>
    </svg>
  `,Badge8:({text:e="Most Popular",offerData:t,getThemeValue:i,getBadgeSetting:r})=>ie`
    <svg
      width="110"
      height="21"
      viewBox="0 0 110 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9284 20.8916H109.496V0.891602H10.9284C5.40641 0.891602 0.928398 5.36961 0.928398 10.8916C0.928398 16.4136 5.40641 20.8916 10.9284 20.8916Z"
        fill=${r("shipping_background_color",i(t.settings,"theme_primary_color","#059669"))}
      />
      <path
        d="M10.9277 19.5834H109.461V19.2927H10.9315C6.29668 19.2927 2.52612 15.5222 2.52612 10.8874C2.52612 6.25259 6.29668 2.48204 10.9315 2.48204H109.461V2.19141H10.9315C6.13606 2.19141 2.2355 6.09198 2.2355 10.8874C2.2355 15.6828 6.13606 19.5834 10.9315 19.5834H10.9277Z"
        fill="white"
      />
      <text
        x="50%"
        y="52%"
        text-anchor="middle"
        dominant-baseline="middle"
        fill=${r("shipping_text_color","#fff")}
        font-size=${r("badge_size",10)}
        font-weight="bold"
        font-family="Arial, sans-serif"
      >
        ${e}
      </text>
    </svg>
  `},oe=({text:e,badge:t,offerData:i,getThemeValue:r,lang:o,width:a,blockIndex:n=null,isPreview:s=!1})=>{const l=(e,t)=>{if(!1===i.settings.apply_badge_styling_to_all_blocks&&null!==n){const o=i.bars?.[n]?.badge_settings;if(o&&void 0!==o[e])return o[e];const a=`${e}_block_${n}`;return void 0!==i.settings[a]?i.settings[a]:r(i.settings,e,t)}return r(i.settings,e,t)};let p=t;if(!s&&!1===i.settings.apply_badge_styling_to_all_blocks&&null!==n){const e=i.bars?.[n]?.badge_settings?.badge_type;e&&(p=e)}const c={...i,settings:{...i.settings,badge_size:l("badge_size",i.settings.badge_size||10),shipping_text_color:l("shipping_text_color",i.settings.shipping_text_color||"#fff"),shipping_background_color:l("shipping_background_color",i.settings.shipping_background_color||i.settings.theme_primary_color)}};return re[p]({text:e,offerData:c,getThemeValue:r,getBadgeSetting:l,lang:o,width:a,blockIndex:n})},ae=E.bind(u),ne=({children:e,text:t})=>{let i=null,r=null;const o=()=>{i&&i.parentNode&&(i.parentNode.removeChild(i),i=null)};return ae`
    <span
      ref=${e=>r=e}
      onMouseEnter=${e=>{if(!r)return;document.querySelectorAll('[data-tooltip="color-swatch"]').forEach((e=>{e.parentNode&&e.parentNode.removeChild(e)})),o();const a=r.getBoundingClientRect();i=document.createElement("div"),i.textContent=t,i.setAttribute("data-tooltip","color-swatch"),Object.assign(i.style,{position:"absolute",top:a.top+window.scrollY-8+"px",left:a.left+a.width/2+window.scrollX+"px",transform:"translateX(-50%) translateY(-100%)",backgroundColor:"black",color:"white",padding:"5px 8px",borderRadius:"6px",fontSize:"12px",whiteSpace:"nowrap",zIndex:9999,pointerEvents:"none"}),document.body.appendChild(i)}}
      onMouseLeave=${o}
      style=${{display:"inline-block"}}
    >
      ${e}
    </span>
  `},se=E.bind(u),le=({optionName:e,optionValues:t,selectedValue:i,onValueChange:r,swatchSettings:o,offerData:a,getThemeValue:n,styles:s})=>{const{size:l=20,shape:p="circle",variants:c={}}=o||{};return se`
    <div
      className="color-swatch-container"
      style=${{display:"flex",alignItems:"center",gap:"6px",marginTop:"4px",padding:"4px 0"}}
    >
      ${t.map((e=>se`
          <${ne} text=${e} key=${e}>
            <div
              style=${(e=>{const t=c[e]?.color||"transparent",r=i===e,o={width:`${l}px`,height:`${l}px`,backgroundColor:t,border:`${n(a?.settings,"select_border_size",1)}px solid ${r?n(a?.settings,"select_border_color",a?.settings?.theme_primary_color||"#000"):n(a?.settings,"inactive_bar_border_color","#d1d5db")}`,cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",margin:"2px",transition:"all 0.2s ease",boxShadow:r?`0 0 0 1px ${n(a?.settings,"select_border_color",a?.settings?.theme_primary_color||"#000")}`:"none",position:"relative"};switch(p){case"circle":o.borderRadius="50%";break;case"rounded":o.borderRadius=n(a?.settings,"select_border_radius",4);break;default:o.borderRadius="0px"}return o})(e)}
              onClick=${t=>{t.stopPropagation(),(e=>{r&&r(e)})(e)}}
              onMouseOver=${t=>{i!==e&&(t.target.style.borderColor=n(a?.settings,"select_border_color",a?.settings?.theme_primary_color||"#000"),t.target.style.opacity="0.8")}}
              onMouseOut=${t=>{i!==e&&(t.target.style.borderColor=n(a?.settings,"inactive_bar_border_color","#d1d5db"),t.target.style.opacity="1")}}
            ></div>
          <//>
        `))}
    </div>
  `},pe=E.bind(u),ce=({value:i,options:r,onChange:o,renderSelected:a,renderOption:n,placeholder:s,offerData:l,getThemeValue:p,styles:c={}})=>{let _=null,g=null,b=!1,f=null;const m=()=>{_&&_.parentNode&&(_.parentNode.removeChild(_),_=null),b=!1,f&&(document.removeEventListener("click",f,!0),f=null)};return pe`
    <div style=${{position:"relative",width:"100%"}}>
      <div
        ref=${e=>g=e}
        className="dropdown-trigger ${c.variant_select}"
        style=${{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"4px 6px",border:`${p(l?.settings,"select_border_size",1)}px solid ${p(l?.settings,"select_border_color",l?.settings?.theme_primary_color||"#cccccc")}`,backgroundColor:p(l?.settings,"select_bg_color","#ffffff"),borderRadius:p(l?.settings,"select_border_radius",4)+"px",cursor:"pointer",fontSize:p(l?.settings,"product_variant_size",12),minHeight:"30px",boxSizing:"border-box",...c}}
        onClick=${a=>{a.stopPropagation(),b?m():(()=>{if(b||!g)return;const a=g.getBoundingClientRect();_=document.createElement("div"),_.className="dropdown-portal",Object.assign(_.style,{position:"absolute",top:a.bottom+window.scrollY+"px",left:a.left+window.scrollX+"px",minWidth:a.width+"px",zIndex:9999,backgroundColor:p(l?.settings,"select_bg_color","#fff"),border:`${p(l?.settings,"select_border_size",1)}px solid ${p(l?.settings,"select_border_color",l?.settings?.theme_primary_color||"#ccc")}`,borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",maxHeight:"200px",overflowY:"auto"}),r.forEach((r=>{const a=document.createElement("div");if(n){const i=n(r);i&&"object"==typeof i&&i.type?function(i,r){var o,a,n;r==document&&(r=document.documentElement),t.__&&t.__(i,r),o=r.__k,a=[],n=[],P(r,i=r.__k=u(h,null,[i]),o||d,d,r.namespaceURI,o?null:r.firstChild?e.call(r.childNodes):null,a,o?o.__e:r.firstChild,!1,n),R(a,i,n)}(i,a):a.textContent=i||r.label}else a.textContent=r.label;Object.assign(a.style,{padding:"8px 12px",cursor:"pointer",fontSize:p(l?.settings,"product_variant_size",12),color:l?.settings?.product_variant_text_color||"#333",backgroundColor:i===r.value?p(l?.settings,"theme_primary_color","#f0f0f0")+"30":"transparent"}),a.onclick=()=>{o&&o(r.value),m()},_.appendChild(a)})),document.body.appendChild(_),b=!0,setTimeout((()=>{f&&document.removeEventListener("click",f,!0),f=e=>{e.target&&_&&g&&b&&!_.contains(e.target)&&!g.contains(e.target)&&m()},document.addEventListener("click",f,!0)}),0)})()}}
        tabindex="0"
        role="button"
        aria-haspopup="listbox"
      >
        <div style=${{display:"flex",alignItems:"center",gap:"8px"}}>
          ${(()=>{if(!i)return s||"Select...";const e=r.find((e=>e.value===i));return e?a?a(e):e.label:s||"Select..."})()}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style=${{width:"16px",height:"16px",opacity:.6}}
        >
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      </div>
    </div>
  `},de=E.bind(u),_e=({optionName:e,optionValues:t,selectedValue:i,onValueChange:r,swatchSettings:o,offerData:a,getThemeValue:n,styles:s})=>{const{size:l=20,shape:p="circle",variants:c={}}=o||{},d=t.map((e=>({value:e,label:e,color:c[e]?.color||"#cccccc"})));return de`
    <div
      className="color-swatch-dropdown-container"
      style=${{marginTop:"4px"}}
    >
      <${ce}
        value=${i}
        options=${d}
        onChange=${e=>{r&&r(e)}}
        renderSelected=${e=>de`
    <div style=${{display:"flex",alignItems:"center",gap:"8px"}}>
      <div style=${(e=>{const t=c[e]?.color||"transparent",i={width:`${l}px`,height:`${l}px`,backgroundColor:t,border:`${n(a?.settings,"select_border_size",1)}px solid ${n(a?.settings,"select_border_color",a?.settings?.theme_primary_color||"#cccccc")}`,display:"inline-block",marginRight:"8px",verticalAlign:"middle",flexShrink:0};switch(p){case"circle":i.borderRadius="50%";break;case"rounded":i.borderRadius=n(a?.settings,"select_border_radius",4);break;default:i.borderRadius="0px"}return i})(e.value)}></div>
      <span>${e.label}</span>
    </div>
  `}
        renderOption=${e=>{const t=e.color||c[e.value]?.color||"#cccccc";return de`
      <div style=${{display:"flex",alignItems:"center",gap:"8px"}}>
        <div
          style=${{width:`${Math.min(l,16)}px`,height:`${Math.min(l,16)}px`,backgroundColor:t,border:`2px solid ${n(a?.settings,"inactive_bar_border_color","#e1e1e1")}`,borderRadius:"circle"===p?"50%":"rounded"===p?"2px":"1px",flexShrink:0,minWidth:`${Math.min(l,16)}px`,minHeight:`${Math.min(l,16)}px`,display:"inline-block"}}
        ></div>
        <span>${e.label}</span>
      </div>
    `}}
        placeholder="Select color..."
        offerData=${a}
        getThemeValue=${n}
        style=${{minWidth:"140px"}}
      />
    </div>
  `},ge=E.bind(u),be=({optionName:e,optionValues:t,selectedValue:i,onValueChange:r,swatchSettings:o,offerData:a,getThemeValue:n,styles:s})=>{const{size:l=20,shape:p="circle",variants:c={}}=o||{};return ge`
    <div
      className="image-swatch-container"
      style=${{display:"flex",alignItems:"center",gap:"6px",marginTop:"4px",padding:"4px 0"}}
    >
      ${t.map((e=>ge`
          <${ne} text=${e} key=${e}>
            <div
              style=${(e=>{const t=c[e]?.image_url,r=i===e,o={border:`${n(a?.settings,"select_border_size",1)}px solid ${r?n(a?.settings,"select_border_color",a?.settings?.theme_primary_color||"#000"):n(a?.settings,"inactive_bar_border_color","#d1d5db")}`,cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",margin:"2px",transition:"all 0.2s ease",boxShadow:r?`0 0 0 1px ${n(a?.settings,"select_border_color",a?.settings?.theme_primary_color||"#000")}`:"none",position:"relative",overflow:"hidden",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"#f3f4f6"};switch(t&&(o.backgroundImage=`url(${t})`),p){case"circle":o.borderRadius="50%";break;case"rounded":o.borderRadius=n(a?.settings,"select_border_radius",4);break;default:o.borderRadius="0px"}return o})(e)}
              onClick=${t=>{t.stopPropagation(),(e=>{r&&r(e)})(e)}}
              onMouseOver=${t=>{i!==e&&(t.target.style.borderColor=n(a?.settings,"select_border_color",a?.settings?.theme_primary_color||"#000"),t.target.style.opacity="0.8")}}
              onMouseOut=${t=>{i!==e&&(t.target.style.borderColor=n(a?.settings,"inactive_bar_border_color","#d1d5db"),t.target.style.opacity="1")}}
            >
              ${!c[e]?.imageUrl&&ge`
                <div
                  style=${{color:"#9ca3af",fontSize:`${Math.max(.25*l,8)}px`,textAlign:"center",fontWeight:"500",width:`${l}px`,height:`${l}px`}}
                >
                  IMG
                </div>
              `}
            </div>
          <//>
        `))}
    </div>
  `},fe=E.bind(u),me=({optionName:e,optionValues:t,selectedValue:i,onValueChange:r,swatchSettings:o,offerData:a,getThemeValue:n,styles:s})=>{const{size:l=20,shape:p="circle",variants:c={}}=o||{},d=t.map((e=>({value:e,label:e,imageUrl:c[e]?.image_url})));return fe`
    <div
      className="image-swatch-dropdown-container"
      style=${{marginTop:"4px"}}
    >
      <${ce}
        value=${i}
        options=${d}
        onChange=${e=>{r&&r(e)}}
        renderSelected=${e=>fe`
    <div style=${{display:"flex",alignItems:"center",gap:"8px"}}>
      <div style=${(e=>{const t=c[e]?.image_url,i={width:`${l}px`,height:`${l}px`,border:`${n(a?.settings,"select_border_size",1)}px solid ${n(a?.settings,"select_border_color",a?.settings?.theme_primary_color||"#cccccc")}`,display:"inline-block",marginRight:"8px",verticalAlign:"middle",flexShrink:0,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"#f3f4f6",overflow:"hidden",position:"relative"};switch(t&&(i.backgroundImage=`url(${t})`),p){case"circle":i.borderRadius="50%";break;case"rounded":i.borderRadius=n(a?.settings,"select_border_radius",4);break;default:i.borderRadius="0px"}return i})(e.value)}>
        ${!e.imageUrl&&fe`
          <div
            style=${{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#9ca3af",fontSize:`${Math.max(.25*l,8)}px`,fontWeight:"500"}}
          >
            IMG
          </div>
        `}
      </div>
      <span>${e.label}</span>
    </div>
  `}
        renderOption=${e=>fe`
    <div style=${{display:"flex",alignItems:"center",gap:"8px"}}>
      <div
        style=${{width:`${Math.min(l,16)}px`,height:`${Math.min(l,16)}px`,border:`1px solid ${n(a?.settings,"inactive_bar_border_color","#e1e1e1")}`,borderRadius:"circle"===p?"50%":"rounded"===p?"2px":"1px",flexShrink:0,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"#f3f4f6",backgroundImage:e.imageUrl?`url(${e.imageUrl})`:"none",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}
      >
        ${!e.imageUrl&&fe`
          <div
            style=${{color:"#9ca3af",fontSize:"8px",fontWeight:"500"}}
          >
            IMG
          </div>
        `}
      </div>
      <span>${e.label}</span>
    </div>
  `}
        placeholder="Select image..."
        offerData=${a}
        getThemeValue=${n}
        style=${{minWidth:"140px"}}
      />
    </div>
  `},ue=E.bind(u),xe=({optionName:e,optionValues:t,selectedValue:i,onValueChange:r,swatchSettings:o,offerData:a,getThemeValue:n,styles:s,productVariants:l})=>{const{size:p=20,shape:c="square"}=o||{},d=e=>{if(!l||!Array.isArray(l))return null;const t=l.find((t=>!(!t.options||!Array.isArray(t.options))&&t.options.some((t=>String(t).toLowerCase()===String(e).toLowerCase()))));return t?.featured_image?.src||t?.image?.src||t?.featured_image||t?.image};return ue`
    <div
      className="product-image-swatch-container"
      style=${{display:"flex",alignItems:"center",gap:"6px",marginTop:"4px",padding:"4px 0"}}
    >
      ${t.map((e=>ue`
          <div
            key=${e}
            title=${e}
            style=${(e=>{const t=d(e),r=i===e,o={width:`${p}px`,height:`${p}px`,border:`${n(a?.settings,"select_border_size",1)}px solid ${r?n(a?.settings,"select_border_color",a?.settings?.theme_primary_color||"#000"):n(a?.settings,"inactive_bar_border_color","#d1d5db")}`,cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",margin:"2px",transition:"all 0.2s ease",boxShadow:r?`0 0 0 1px ${n(a?.settings,"select_border_color",a?.settings?.theme_primary_color||"#000")}`:"none",position:"relative",overflow:"hidden",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"#f3f4f6"};switch(t&&(o.backgroundImage=`url(${t})`),c){case"circle":o.borderRadius="50%";break;case"rounded":o.borderRadius=n(a?.settings,"select_border_radius",4);break;default:o.borderRadius="0px"}return o})(e)}
            onClick=${t=>{t.stopPropagation(),(e=>{r&&r(e)})(e)}}
            onMouseOver=${t=>{i!==e&&(t.target.style.borderColor=n(a?.settings,"select_border_color",a?.settings?.theme_primary_color||"#000"),t.target.style.opacity="0.8")}}
            onMouseOut=${t=>{i!==e&&(t.target.style.borderColor=n(a?.settings,"inactive_bar_border_color","#d1d5db"),t.target.style.opacity="1")}}
          >
            ${!d(e)&&ue`
              <div
                title=${e}
                style=${{color:"#9ca3af",fontSize:`${Math.max(.25*p,8)}px`,textAlign:"center",fontWeight:"500",width:`${p}px`,height:`${p}px`,display:"flex",alignItems:"center",justifyContent:"center"}}
              >
                IMG
              </div>
            `}
          </div>
        `))}
    </div>
  `},he=E.bind(u),$e=({optionName:e,optionValues:t,selectedValue:i,onValueChange:r,swatchSettings:o,offerData:a,getThemeValue:n,styles:s,productVariants:l})=>{const{size:p=20,shape:c="square"}=o||{},d=e=>{if(!l||!Array.isArray(l))return null;const t=l.find((t=>!(!t.options||!Array.isArray(t.options))&&t.options.some((t=>String(t).toLowerCase()===String(e).toLowerCase()))));return t?.featured_image?.src||t?.image?.src||t?.featured_image||t?.image},_=t.map((e=>({value:e,label:e,imageUrl:d(e)})));return he`
    <div
      className="product-image-swatch-dropdown-container"
      style=${{marginTop:"4px"}}
    >
      <${ce}
        value=${i}
        options=${_}
        onChange=${e=>{r&&r(e)}}
        renderSelected=${e=>he`
    <div style=${{display:"flex",alignItems:"center",gap:"8px"}}>
      <div style=${(e=>{const t=d(e),i={width:`${p}px`,height:`${p}px`,border:`${n(a?.settings,"select_border_size",1)}px solid ${n(a?.settings,"select_border_color",a?.settings?.theme_primary_color||"#cccccc")}`,display:"inline-block",marginRight:"8px",verticalAlign:"middle",flexShrink:0,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"#f3f4f6",overflow:"hidden",position:"relative"};switch(t&&(i.backgroundImage=`url(${t})`),c){case"circle":i.borderRadius="50%";break;case"rounded":i.borderRadius=n(a?.settings,"select_border_radius",4);break;default:i.borderRadius="0px"}return i})(e.value)}>
        ${!e.imageUrl&&he`
          <div
            style=${{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#9ca3af",fontSize:`${Math.max(.25*p,8)}px`,fontWeight:"500"}}
          >
            IMG
          </div>
        `}
      </div>
      <span>${e.label}</span>
    </div>
  `}
        renderOption=${e=>he`
    <div style=${{display:"flex",alignItems:"center",gap:"8px"}}>
      <div
        style=${{width:`${Math.min(p,16)}px`,height:`${Math.min(p,16)}px`,border:`1px solid ${n(a?.settings,"inactive_bar_border_color","#e1e1e1")}`,borderRadius:"circle"===c?"50%":"rounded"===c?"2px":"1px",flexShrink:0,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"#f3f4f6",backgroundImage:e.imageUrl?`url(${e.imageUrl})`:"none",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}
      >
        ${!e.imageUrl&&he`
          <div
            style=${{color:"#9ca3af",fontSize:"8px",fontWeight:"500"}}
          >
            IMG
          </div>
        `}
      </div>
      <span>${e.label}</span>
    </div>
  `}
        placeholder="Select variant..."
        offerData=${a}
        getThemeValue=${n}
        style=${{minWidth:"140px"}}
      />
    </div>
  `},ve=E.bind(u),ye=({offerData:e,optionName:t,optionValues:i,selectedValue:r,onValueChange:o,getThemeValue:a,styles:n,productVariants:s})=>{if(!e?.enable_swatches)return null;const l=e?.swatch_settings;if(!l||!l.type)return null;const p=l.option,c=t?.toLowerCase().replace(/\s+/g,"_"),d=p?.toLowerCase().replace(/\s+/g,"_");if(c!==d)return null;const{type:_}=l;if(!["color_swatch","color_swatch_dropdown","image_swatch","image_swatch_dropdown","product_image_swatch","product_image_swatch_dropdown"].includes(_))return null;const g={optionName:t,optionValues:i,selectedValue:r,onValueChange:o,swatchSettings:l,offerData:e,getThemeValue:a,styles:n,productVariants:s};switch(_){case"color_swatch":return ve`<${le} ...${g} />`;case"color_swatch_dropdown":return ve`<${_e} ...${g} />`;case"image_swatch":return ve`<${be} ...${g} />`;case"image_swatch_dropdown":return ve`<${me} ...${g} />`;case"product_image_swatch":return ve`<${xe} ...${g} />`;case"product_image_swatch_dropdown":return ve`<${$e} ...${g} />`;default:return null}},we=(e,t)=>{if(!e?.enable_swatches)return!1;const i=e?.swatch_settings;if(!i||!i.type)return!1;const r=i.option,o=t?.toLowerCase().replace(/\s+/g,"_"),a=r?.toLowerCase().replace(/\s+/g,"_");if(o!==a)return!1;const{type:n}=i;return["color_swatch","color_swatch_dropdown","image_swatch","image_swatch_dropdown","product_image_swatch","product_image_swatch_dropdown"].includes(n)},ze=E.bind(u),ke=({item:e,getThemeValue:t,styles:i,selected:r,index:o,offerData:a,selectedVariants:n,currentVariantId:s})=>ze`
    ${e?.product_image&&"no_image"!==t(e?.product_image,"mode","no_image")?ze`
          ${"upload_image"===e?.product_image?.mode?ze`
                ${e?.product_image?.image_url&&ze`
                  <img
                    src=${e?.product_image?.image_url||""}
                    alt=${e?.heading}
                    width=${e?.product_image?.image_size}
                    height=${e?.product_image?.image_size}
                    style=${{borderRadius:`${e?.product_image?.image_border_radius}px`}}
                  />
                `}
              `:"product_variant_image"===e?.product_image?.mode?ze`
                <img
                  src=${(()=>{if(!a?.variants)return a?.images?.[0]||e?.product_image?.variant_image_url||e?.product_image?.image_url;const t=n&&n.length>0?n[0]:s;if(!t)return a?.images?.[0]||e?.product_image?.variant_image_url||e?.product_image?.image_url;const i=a.variants.find((e=>String(e.id)===String(t)));return i?.featured_image?.src?i.featured_image.src:a?.images?.[0]||e?.product_image?.variant_image_url||e?.product_image?.image_url})()}
                  alt=${e?.heading}
                  width=${t(e.product_image,"image_size",20)}
                  height=${t(e?.product_image,"image_size",20)}
                  style=${{borderRadius:`${t(e?.product_image,"image_border_radius",5)}px`}}
                />
              `:ze`
                <img
                  src=${e?.product_image?.variant_image_url||e?.product_image?.image_url}
                  alt=${e?.heading}
                  width=${t(e.product_image,"image_size",20)}
                  height=${t(e?.product_image,"image_size",20)}
                  style=${{borderRadius:`${t(e?.product_image,"image_border_radius",5)}px`}}
                />
              `}
        `:ze`
          <input
            type="radio"
            id=${e.heading}
            name="offer"
            checked=${r===o}
            readonly
            className=${i.check_input}
            style=${{border:`${t(a.settings,"radio_border_size",2)}px solid ${t(a.settings,"radio_border_color","#ffffff")}`,backgroundColor:r===o?t(a.settings,"active_radio_bg_color",a.settings.theme_primary_color):t(a.settings,"inactive_radio_bg_color","#fff"),boxShadow:r===o?`0 0 2px ${a.settings.theme_primary_color}`:`0 0 2px ${a.settings.theme_primary_color}4D`}}
          />
        `}
  `,Ne=E.bind(u);var Ce={offer_list_wrapper:"pb-a602",single_offer_container:"pb-7338",content_wrapper:"pb-bfb1",check_input:"pb-7089",content_container:"pb-07ec",heading:"pb-5879",heading_inner_container:"pb-7fcc",discount:"pb-3ecf",title:"pb-3b04",title_container:"pb-13de",title_line:"pb-59ff",right_container:"pb-7467",currency:"pb-a7e2",offer_price:"pb-1d39",heading_container:"pb-f329",variant_select_wrapper:"pb-850a",selected:"pb-ac71",variant_select_container:"pb-5e13",variant_select_label:"pb-bd8d",variant_select:"pb-f814",variant_select_option:"pb-b06f",quantity_button:"pb-c581",quantity_controls:"pb-4cd1",free_gift_badge_container:"pb-ce39",free_gift_badge:"pb-b393",plus_container:"pb-74dd",free_gift_left_container:"pb-d7a5",free_gift_left_wrapper:"pb-2969",free_gift_title_container:"pb-ba68",free_gift_title:"pb-1986",free_gift_right_container:"pb-726f",free_gift_product_container:"pb-96fa",free_gift_product_image_container:"pb-6cf9",free_gift_image:"pb-84a7",free_gift_product_image:"pb-5fa2",free_gift_quantity:"pb-12dd",free_gift_variant_container:"pb-e9f1",free_gift_price_container:"pb-edf8",add_to_cart_button_container:"pb-78ad",add_to_cart_button:"pb-b9c4"};A(".pb-a602 *{box-sizing:border-box;margin:0;padding:0}.pb-7338{grid-gap:10px;align-items:center;border-radius:10px;cursor:pointer;gap:10px;margin:10px 0;padding:8px;position:relative}.pb-7338,.pb-bfb1{display:flex;width:100%}.pb-bfb1{justify-content:space-between}.pb-7089{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:50%;cursor:pointer;display:block!important;height:14px!important;margin-top:6px;max-height:14px!important;max-width:14px!important;min-height:14px!important;min-width:14px!important;position:relative!important;width:14px!important}.pb-07ec{grid-gap:5px;display:flex;flex-direction:column;gap:5px;width:100%}.pb-7089:checked:before{background-color:#333}.pb-5879{color:#000;color:var(--bar-title-color,#000);display:inline-block;font-size:16px;font-size:var(--bar-title-font-size,16px);font-style:var(--bar-title-font-style);font-weight:500;font-weight:var(--bar-title-font-weight,500);word-break:break-word}.pb-7fcc{grid-gap:5px;align-items:center;display:flex;gap:5px}.pb-3ecf{border-radius:8px;font-size:9px;padding:4px 6px}.pb-3b04{font-weight:500;text-align:center}.pb-13de{grid-gap:10px;align-items:center;display:flex;gap:10px;margin-bottom:10px}.pb-59ff{display:block!important;flex-grow:1;height:4px}.pb-7467{grid-gap:5px;align-items:center;display:flex;gap:5px}.pb-a7e2{color:#000;color:var(--bar-title-color,#000);display:inline-block;font-size:13px;font-size:var(--bar-title-font-size,13px);font-style:var(--bar-title-font-style);font-weight:500;font-weight:var(--bar-title-font-weight,500);word-break:break-word}.pb-1d39{font-size:12px;text-decoration:line-through}.pb-a602{grid-gap:10px;gap:10px;height:100%;margin-bottom:10px;min-height:190px}.pb-f329{grid-gap:5px;display:flex;gap:5px;justify-content:space-between;width:100%}.pb-850a{max-height:0;opacity:0;overflow-y:auto;scrollbar-color:var(--primary-color) transparent;scrollbar-width:thin;transition:all .3s ease-in-out}.pb-850a::-webkit-scrollbar{width:6px}.pb-850a::-webkit-scrollbar-track{background:transparent}.pb-850a::-webkit-scrollbar-thumb{background-color:var(--primary-color);border-radius:3px}.pb-ac71{margin-top:10px;max-height:120px;opacity:1}.pb-5e13{grid-gap:10px;display:flex;gap:10px;margin-bottom:10px}.pb-bd8d{color:#333;font-size:12px}.pb-f814{border:1px solid #059669;border-radius:4px;box-shadow:none;color:#000;color:var(--bar-title-color,#000);font-size:12px;height:30px;max-width:100%;min-width:40px;outline:none;padding:3px 2px;width:calc(100% - 10px);width:100%}.pb-b06f{border:1px solid #333;border-radius:5px;padding:2px 3px;width:calc(100% - 10px)}.pb-c581{background:none;border:none;cursor:pointer;height:24px;justify-content:center;transition:all .2s ease;width:24px}.pb-4cd1,.pb-c581{align-items:center;display:flex}.pb-4cd1{grid-gap:5px;gap:5px;justify-content:flex-end}.pb-ce39{position:relative}.pb-b393{width:100%}.pb-74dd{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;left:50%;position:absolute;top:-10px;transform:translateX(-50%);width:20px;z-index:99}.pb-d7a5{grid-gap:20px;gap:20px}.pb-2969,.pb-d7a5{align-items:center;display:flex;padding:5px 10px}.pb-2969{justify-content:space-between}.pb-ba68{grid-gap:5px;align-items:center;display:flex;flex:1 1;gap:5px;min-width:0}.pb-1986{display:inline-block;max-width:100%;overflow:hidden;text-decoration:none;text-overflow:ellipsis;white-space:nowrap}.pb-726f{display:flex;flex-direction:column}.pb-96fa{grid-gap:5px;align-items:center;display:flex;gap:5px;justify-content:space-between;padding:8px 15px}.pb-6cf9{position:relative}.pb-5fa2,.pb-84a7{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.pb-12dd,.pb-5fa2{position:absolute}.pb-12dd{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;left:-10%;top:-10%;transform:translate(-10%,-10%);width:20px}.pb-e9f1{padding:0 15px}.pb-edf8{grid-gap:2px;display:flex;flex-direction:column;gap:2px;text-align:right}.pb-78ad{display:flex;justify-content:center;margin-top:15px;width:100%}.pb-b9c4{border:none;cursor:pointer;display:inline-block;font-weight:500;outline:none;text-align:center;text-decoration:none;transition:all .2s ease;width:100%}.pb-b9c4:hover{opacity:.9;transform:translateY(-1px)}.pb-b9c4:active{transform:translateY(0)}");const Se=E.bind(u);var Te={offer_list_wrapper:"pb-0dbb",single_offer_container:"pb-3026",badges_wrapper:"pb-4922",badge1_wrapper:"pb-83d9",badge2_wrapper:"pb-fe7c",badge3_wrapper:"pb-718c",badge4_wrapper:"pb-7464",badge5_wrapper:"pb-77e1",badge8_wrapper:"pb-a987",badge7_wrapper:"pb-b580",badge6_wrapper:"pb-f9ef",top_content_wrapper:"pb-4553",bottom_content_wrapper:"pb-69b2",bottom_content:"pb-7621",top_content:"pb-da74",input_container:"pb-9080",content_wrapper:"pb-64d1",check_input:"pb-9cd6",content_container:"pb-5a5a",heading:"pb-b618",discount:"pb-e74a",right_container:"pb-ba12",title:"pb-6c1f",title_container:"pb-c3eb",title_line:"pb-3d96",currency:"pb-fbd2",offer_price:"pb-1687",bottom_container:"pb-2316",bottom_text:"pb-9ddd",button_container:"pb-2de3",bottom_btn:"pb-efe6",offer_list_type3_wrapper:"pb-b19e",variant_select_wrapper:"pb-003b",selected:"pb-295e",variant_select_container:"pb-fa7c",variant_select_label:"pb-fdd6",variant_select:"pb-a616",variant_select_option:"pb-4de8",free_gift_badge_container:"pb-bde7",free_gift_badge:"pb-7a60",plus_container:"pb-6c12",free_gift_left_container:"pb-66d4",free_gift_left_wrapper:"pb-1da2",free_gift_title_container:"pb-2c49",free_gift_title:"pb-37e6",free_gift_right_container:"pb-2269",free_gift_product_container:"pb-bd4e",free_gift_image:"pb-3b2b",free_gift_variant_container:"pb-1032",add_to_cart_button_container:"pb-2508",add_to_cart_button:"pb-86b6"};A(".pb-0dbb *{box-sizing:border-box;margin:0;padding:0}.pb-3026{grid-gap:10px;border-radius:10px;cursor:pointer;gap:10px;margin-bottom:30px;max-width:115px;position:relative;width:100%}.pb-4922{max-width:100%;position:absolute}.pb-83d9{left:50%;min-width:90px;top:-10px;transform:translateX(-50%)}.pb-fe7c{right:-42px;top:-30px;transform:rotate(45deg)}.pb-718c{left:50%;top:-15px;transform:translateX(-50%);width:100%}.pb-7464{position:absolute;right:-2px;top:-12px}.pb-77e1{right:-8px;top:-15px}.pb-a987{right:-2px;top:-2px}.pb-b580{left:-2px;top:-10px}.pb-f9ef{left:50%;top:-12px;transform:translateX(-50%)}.pb-4553{display:block!important}.pb-4553,.pb-69b2{font-size:14px;height:30px;max-height:30px;min-height:30px;text-align:center;width:100%}.pb-69b2{align-items:flex-end;bottom:0;display:flex;position:absolute}.pb-7621{border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top:1px solid;width:100%}.pb-7621,.pb-da74{font-size:9px;padding:2px}.pb-da74{border-bottom:1px solid;border-top-left-radius:8px;border-top-right-radius:8px}.pb-9080{margin:16px 0 10px}.pb-64d1{align-items:center;display:flex;flex-direction:column;justify-content:space-between;text-align:center;width:100%}.pb-9cd6{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:50%;cursor:pointer;display:block!important;height:16px!important;max-height:16px!important;max-width:16px!important;min-height:16px!important;min-width:16px!important;padding:2px;position:relative!important;width:16px!important}.pb-9cd6:checked:before{background-color:#333}.pb-5a5a{grid-gap:5px;align-items:center;display:flex;gap:5px}.pb-b618{font-size:22px;font-weight:500!important}.pb-e74a{border-radius:8px;font-size:14px;padding:4px 6px}.pb-ba12{grid-gap:5px;align-items:center;display:flex;flex-direction:column;gap:5px;margin-top:16px}.pb-6c1f{font-weight:500!important;text-align:center}.pb-c3eb{grid-gap:10px;align-items:center;display:flex;gap:10px;margin-bottom:10px}.pb-3d96{display:block!important;flex-grow:1;height:4px}.pb-fbd2{font-size:14px;font-weight:600!important}.pb-1687{font-size:12px;text-decoration:line-through}.pb-0dbb{grid-gap:10px;gap:10px;height:100%;margin-bottom:10px;min-height:200px}.pb-2316{margin-top:100px;text-align:center;width:100%}.pb-9ddd{font-size:18px;font-weight:600!important;margin-bottom:10px}.pb-2de3,.pb-efe6{width:100%}.pb-efe6{background-color:#000;border:none;border-radius:10px;color:#fff;cursor:pointer;padding:10px 12px}.pb-b19e{grid-gap:15px;display:grid;gap:15px;grid-template-columns:repeat(3,1fr)}.pb-003b{max-height:0;opacity:0;overflow-y:auto;scrollbar-color:var(--primary-color) transparent;scrollbar-width:thin;transition:all .3s ease-in-out}.pb-003b::-webkit-scrollbar{width:6px}.pb-003b::-webkit-scrollbar-track{background:transparent}.pb-003b::-webkit-scrollbar-thumb{background-color:var(--primary-color);border-radius:3px}.pb-295e{margin-top:10px;max-height:120px;opacity:1}.pb-fa7c{grid-gap:10px;gap:10px;margin-bottom:10px;padding:0 5px;width:100%}.pb-fdd6{color:#333;font-size:12px;text-align:center}.pb-a616{border:1px solid #059669;border-radius:4px;box-shadow:none;color:#000;color:var(--bar-title-color,#000);font-size:12px;height:30px;margin-bottom:5px;max-width:100%;min-width:40px;outline:none;padding:3px 2px;width:calc(100% - 10px);width:100%}.pb-4de8{border:1px solid #333;border-radius:5px;padding:2px 3px;width:calc(100% - 20px)}.pb-bde7{position:relative}.pb-7a60{width:100%}.pb-6c12{border-radius:50%;height:20px;justify-content:center;left:50%;position:absolute;top:-10px;transform:translateX(-50%);width:20px;z-index:99}.pb-66d4,.pb-6c12{align-items:center;display:flex}.pb-66d4{grid-gap:5px;gap:5px}.pb-1da2{justify-content:space-between;padding:5px 10px}.pb-1da2,.pb-2c49{align-items:center;display:flex}.pb-2c49{grid-gap:5px;flex:1 1;gap:5px;min-width:0}.pb-37e6{display:inline-block;max-width:100%;text-decoration:none}.pb-2269{display:flex;flex-direction:column}.pb-bd4e{grid-gap:5px;align-items:center;display:flex;gap:5px;justify-content:space-between;padding:8px 15px}.pb-3b2b{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.pb-1032{padding:0 15px}.pb-2508{display:flex;justify-content:center;margin-top:15px;width:100%}.pb-86b6{border:none;cursor:pointer;display:inline-block;font-weight:500;outline:none;text-align:center;text-decoration:none;transition:all .2s ease;width:100%}.pb-86b6:hover{opacity:.9;transform:translateY(-1px)}.pb-86b6:active{transform:translateY(0)}");const Ve=E.bind(u);var De={offer_list_wrapper:"pb-0570",title:"pb-2846",title_container:"pb-8f74",title_line:"pb-1f33",bottom_container:"pb-71d2",bottom_text:"pb-45d2",button_container:"pb-c267",bottom_btn:"pb-51a1",offer_list_type3_wrapper:"pb-2ffe",single_offer_container:"pb-6b5d",offer_inner_container:"pb-3dbe",badge_wrapper:"pb-a685",badge2_wrapper:"pb-642c",badge3_wrapper:"pb-9761",badge5_wrapper:"pb-2479",badge7_wrapper:"pb-f2d6",badge8_wrapper:"pb-a7ce",content_wrapper:"pb-837e",check_input:"pb-484a",content_container:"pb-faeb",heading:"pb-56aa",discount:"pb-1856",right_container:"pb-3373",currency:"pb-1aad",offer_price:"pb-0bed",sizes_container:"pb-f03d",selected_sizes_container:"pb-892b",sizes_inner_container:"pb-64a2",selected_sizes_inner_container:"pb-9c90",size_heading:"pb-da5e",sizes_content_container:"pb-9a57",single_row:"pb-250e",heading_container:"pb-19ed",heading_inner_container:"pb-c3a6",variant_select_wrapper:"pb-1ca7",selected:"pb-d64f",variant_select_container:"pb-3531",variant_select_label:"pb-eb25",variant_select:"pb-5e67",variant_select_option:"pb-1ede",quantity_button:"pb-f2d1",quantity_controls:"pb-c973",free_gift_badge_container:"pb-c818",free_gift_badge:"pb-3a6c",plus_container:"pb-73c0",free_gift_left_container:"pb-3093",free_gift_left_wrapper:"pb-94f8",free_gift_title_container:"pb-43cd",free_gift_title:"pb-5e32",free_gift_right_container:"pb-d25e",free_gift_product_container:"pb-c5bf",free_gift_product_image_container:"pb-e3c9",free_gift_image:"pb-aaea",free_gift_product_image:"pb-6c67",free_gift_quantity:"pb-aaba",free_gift_variant_container:"pb-3dae",free_gift_price_container:"pb-b7d0",add_to_cart_button_container:"pb-9312",add_to_cart_button:"pb-11df"};A(".pb-0570 *{box-sizing:border-box;margin:0;padding:0}.pb-0570{grid-gap:10px;gap:10px;height:100%;margin-bottom:10px;min-height:190px}.pb-2846{font-weight:500;text-align:center}.pb-8f74{grid-gap:10px;align-items:center;display:flex;gap:10px;margin-bottom:10px}.pb-1f33{display:block!important;flex-grow:1;height:4px}.pb-71d2{margin-top:100px;text-align:center;width:100%}.pb-45d2{font-size:18px;font-weight:600;margin-bottom:10px}.pb-51a1,.pb-c267{width:100%}.pb-51a1{background-color:#000;border:none;border-radius:10px;color:#fff;cursor:pointer;padding:10px 12px}.pb-2ffe{grid-gap:15px;display:flex;gap:15px}.pb-6b5d{cursor:pointer;position:relative;z-index:5}.pb-3dbe,.pb-6b5d{border-radius:10px}.pb-3dbe{grid-gap:10px;align-items:center;display:flex;gap:10px}.pb-a685{right:15px;top:-12px}.pb-642c,.pb-a685{position:absolute;z-index:4}.pb-642c{right:-44px;top:-33px;transform:rotate(45deg)}.pb-9761{right:5px;top:-17px}.pb-2479,.pb-9761{position:absolute;z-index:4}.pb-2479{right:-15px;top:-20px}.pb-f2d6{left:-2px;right:unset;top:-6px}.pb-a7ce,.pb-f2d6{position:absolute;z-index:4}.pb-a7ce{right:-1px;top:-12px}.pb-837e{align-items:center;display:flex;justify-content:space-between;width:100%}.pb-484a{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:50%;cursor:pointer;display:block!important;height:16px!important;margin:0;max-height:16px!important;max-width:16px!important;min-height:16px!important;min-width:16px!important;padding:0;position:relative!important;width:16px!important}.pb-faeb{grid-gap:5px;display:flex;flex-direction:column;gap:5px;width:100%}.pb-56aa{font-size:22px;font-weight:500}.pb-1856{border-radius:8px}.pb-3373{grid-gap:6px;align-items:flex-end;display:flex;flex-direction:column;gap:6px;justify-content:center;min-width:70px;text-align:right}.pb-1aad{color:#000;color:var(--bar-title-color,#000);display:inline-block;font-size:14px;font-size:var(--bar-title-font-size,14px);font-style:var(--bar-title-font-style);font-weight:500;font-weight:var(--bar-title-font-weight,500);word-break:break-word}.pb-0bed{font-size:12px;text-decoration:line-through}.pb-f03d{height:0;transition:all .3s ease-in-out}.pb-892b{height:inherit}.pb-64a2{display:none;padding:10px;transition:all .3s ease-in-out}.pb-9c90{display:block}.pb-da5e{font-size:14px}.pb-9a57{padding:5px}.pb-250e{grid-gap:10px;align-items:center;display:flex;gap:10px;margin:4px 0;margin-bottom:10px}.pb-19ed{align-items:center;justify-content:space-between;width:100%}.pb-19ed,.pb-c3a6{grid-gap:5px;display:flex;gap:5px}.pb-c3a6{flex-direction:column}.pb-1ca7{max-height:0;opacity:0;overflow-y:auto;scrollbar-color:var(--primary-color) transparent;scrollbar-width:thin;transition:all .3s ease-in-out}.pb-1ca7::-webkit-scrollbar{width:6px}.pb-1ca7::-webkit-scrollbar-track{background:transparent}.pb-1ca7::-webkit-scrollbar-thumb{background-color:var(--primary-color);border-radius:3px}.pb-d64f{margin-top:10px;max-height:120px;opacity:1}.pb-3531{grid-gap:10px;align-items:center;display:flex;gap:10px;margin-bottom:10px}.pb-eb25{color:#333;font-size:12px}.pb-5e67{border:1px solid #059669;border-radius:4px;box-shadow:none;color:#000;color:var(--bar-title-color,#000);font-size:12px;height:30px;max-width:100%;min-width:40px;outline:none;padding:3px 2px;width:calc(100% - 10px);width:100%}.pb-1ede{border:1px solid #333;border-radius:5px;padding:2px 3px;width:calc(100% - 10px)}.pb-f2d1{background:none;border:none;cursor:pointer;height:24px;justify-content:center;transition:all .2s ease;width:24px}.pb-c973,.pb-f2d1{align-items:center;display:flex}.pb-c973{grid-gap:5px;gap:5px}.pb-c818{position:relative}.pb-3a6c{width:100%}.pb-73c0{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;left:50%;position:absolute;top:-10px;transform:translateX(-50%);width:20px;z-index:99}.pb-3093{grid-gap:20px;gap:20px}.pb-3093,.pb-94f8{align-items:center;display:flex;padding:5px 10px}.pb-94f8{justify-content:space-between}.pb-43cd{grid-gap:5px;align-items:center;display:flex;flex:1 1;gap:5px;min-width:0}.pb-5e32{display:inline-block;max-width:100%;overflow:hidden;text-decoration:none;text-overflow:ellipsis;white-space:nowrap}.pb-d25e{display:flex;flex-direction:column}.pb-c5bf{grid-gap:5px;align-items:center;display:flex;gap:5px;justify-content:space-between;padding:8px 15px}.pb-e3c9{position:relative}.pb-6c67,.pb-aaea{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.pb-6c67,.pb-aaba{position:absolute}.pb-aaba{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;left:-10%;top:-10%;transform:translate(-10%,-10%);width:20px}.pb-3dae{padding:0 15px}.pb-b7d0{grid-gap:2px;display:flex;flex-direction:column;gap:2px;text-align:right}.pb-9312{display:flex;justify-content:center;margin-top:15px;width:100%}.pb-11df{border:none;cursor:pointer;display:inline-block;font-weight:500;outline:none;text-align:center;text-decoration:none;transition:all .2s ease;width:100%}.pb-11df:hover{opacity:.9;transform:translateY(-1px)}.pb-11df:active{transform:translateY(0)}");const Pe=E.bind(u);var Re={bundlesContainer:"pb-bdb0",title:"pb-32de",title_container:"pb-8689",item_container:"pb-704a",item_container_auto:"pb-120a",left_container:"pb-81ae",left_content_container:"pb-97ec",title_and_variants_container:"pb-3d6e",product_title:"pb-7638",quantity:"pb-9e22",image_container:"pb-5652",offer_list_container:"pb-572b",plus_container:"pb-9bc3",plus:"pb-0f4e",cta_wrapper:"pb-8dff",cta_btn:"pb-ec66",footer_container:"pb-91f2",popular_tag_container:"pb-2add",popular_tag:"pb-ae5f",right_container:"pb-fddf",offer_price:"pb-9033",price:"pb-c63e",footer_text:"pb-18f8",discount:"pb-1d43",quantity_container:"pb-7c91",variant_select_wrapper:"pb-16cc",variant_select_container:"pb-51e8",variant_select_label:"pb-449b",variant_select:"pb-2087",variant_select_option:"pb-33d0",free_gift_container:"pb-1dcd",free_gift_badge:"pb-a40f",free_gift_content_wrapper:"pb-4bf9",product_container:"pb-65c7"};A('.pb-bdb0 *{box-sizing:border-box;margin:0;padding:0}.pb-bdb0{border:1px solid #000;border-radius:5px;padding:16px}.pb-32de{color:#000;color:var(--bar-title-color,#000);display:inline-block;font-size:15px;font-size:17px;font-size:var(--bar-title-font-size,17px);font-style:var(--bar-title-font-style);font-weight:500;font-weight:var(--bar-title-font-weight,500);text-decoration:none;word-break:break-word}.pb-8689{margin-bottom:20px}.pb-704a{align-items:flex-start;border:1px solid #000;border-radius:10px;display:flex;height:75px;justify-content:space-between;max-height:75px;overflow:hidden}.pb-120a{height:auto;max-height:none}.pb-81ae{grid-gap:10px;flex:1 1;gap:10px}.pb-81ae,.pb-97ec{align-items:flex-start;display:flex;min-width:0}.pb-97ec{grid-gap:5px;flex:1 1;flex-direction:column!important;gap:5px;width:100%}.pb-3d6e{grid-gap:8px;display:flex;flex-direction:column;gap:8px;width:100%}.pb-7638{flex-shrink:1;margin:0;overflow:hidden;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;width:100%}.pb-7638,.pb-9e22{font-weight:500}.pb-5652{align-items:center;display:flex;flex-shrink:0;height:42px;text-decoration:none;width:42px}.pb-5652 img{max-height:100%;max-width:100%;-o-object-fit:contain;object-fit:contain}.pb-572b{grid-gap:15px;display:flex;flex-direction:column;gap:15px}.pb-0f4e,.pb-9bc3{align-items:center;display:flex;justify-content:center}.pb-0f4e{font-size:16px;height:24px;padding:5px;width:24px}.pb-8dff{margin-top:20px}.pb-ec66{align-items:center;border:none;cursor:pointer;display:flex;height:44px;justify-content:center;width:100%}.pb-91f2{align-items:flex-start;align-items:center;border-radius:10px;display:flex;height:50px;justify-content:space-between;margin-top:40px;padding:10px 20px;position:relative}.pb-2add{display:inline-block;position:absolute;right:15px;top:-13px;z-index:4}.pb-ae5f{background-color:#000;border-bottom-left-radius:5px;border-bottom-right-radius:5px;border-radius:5px;color:#fff;font-size:10px;font-weight:700;padding:4px 12px;position:relative;z-index:2}.pb-ae5f:after,.pb-ae5f:before{border-bottom-style:solid;border-bottom-width:11px;border-left:8px solid transparent;content:"";display:block;filter:brightness(.7);height:0;position:absolute;top:0;width:0;z-index:1}.pb-ae5f:before{left:-6px}.pb-ae5f:after{right:-6px;transform:rotateY(180deg)}.pb-fddf{grid-gap:10px;align-items:center;display:flex;flex-shrink:0;gap:10px;justify-content:flex-end;min-width:100px}.pb-c63e{color:#000;color:var(--bar-title-color,#000);display:inline-block;font-size:15px;font-size:var(--bar-title-font-size,15px);font-style:var(--bar-title-font-style);font-weight:500;font-weight:var(--bar-title-font-weight,500);word-break:break-word}.pb-18f8{font-size:14px;font-weight:600}.pb-1d43{border-radius:8px;font-size:9px;padding:4px 6px}.pb-9033{font-size:10px;text-decoration:line-through}.pb-7c91{grid-gap:10px;align-items:flex-start;display:flex;gap:10px}.pb-16cc{max-height:120px;opacity:1;overflow-y:auto;scrollbar-color:var(--primary-color) transparent;scrollbar-width:thin;transition:all .3s ease-in-out}.pb-16cc::-webkit-scrollbar{width:6px}.pb-16cc::-webkit-scrollbar-track{background:transparent}.pb-16cc::-webkit-scrollbar-thumb{background-color:var(--primary-color);border-radius:3px}.pb-51e8{grid-gap:10px;align-items:center;display:flex;gap:10px;margin-bottom:10px;width:100%}.pb-449b{color:#333;font-size:12px}.pb-2087{border:1px solid #059669;border-radius:4px;box-shadow:none;color:#000;color:var(--bar-title-color,#000);flex:1 1;font-size:12px;min-width:80px;outline:none;padding:3px 2px}.pb-33d0{border:1px solid #333;border-radius:5px;padding:2px 3px;width:calc(100% - 10px)}.pb-1dcd{border:1px solid;overflow:unset!important;padding:35px 10px 0!important;position:relative}.pb-a40f{height:30px;left:0;margin-bottom:5px;max-height:30px;padding:4px 8px;position:absolute;top:0;width:100%}.pb-4bf9{align-items:flex-start;padding-top:10px}.pb-4bf9,.pb-65c7{display:flex;justify-content:space-between;width:100%}.pb-65c7{align-items:center}');const Be=E.bind(u),qe=({temp:e,styles:t,showPlus:i=!1,getThemeValue:r,formatPrice:o,shopify_domain:a,admin:n=!1})=>Be`
    ${e.settings.free_gift_products?.length>0?Be`
          ${i&&Be`
            <div className=${t.plus_container}>
              <div
                style=${{backgroundColor:e.settings.connector_bg_color?e.settings.connector_bg_color:e.settings.theme_secondary_color,color:e.settings.connector_color?e.settings.connector_color:e.settings.theme_primary_color,fontSize:`${r(e.settings,"connector_size",16)}px`,borderRadius:`${r(e.settings,"connector_border_radius",0)}px`}}
                className=${t.plus}
              >
                +
              </div>
            </div>
          `}
          <div
            style=${{borderRadius:`${r(e.settings,"bar_border_radius",10)}px`,border:`${r(e.settings,"bar_border_size",1)}px solid ${e.settings.bar_border_color?e.settings.bar_border_color:`${e.settings.theme_primary_color}33`}`,backgroundColor:`${e.settings.bar_bg_color?e.settings.bar_bg_color:`${e.settings.theme_primary_color}0D`}`}}
            className=${t.free_gift_container}
          >
            <div
              className=${t.free_gift_badge}
              style=${{backgroundColor:`${r(e.settings,"free_gift_badge_bg_color",e.settings.theme_primary_color)}`,borderTopLeftRadius:`${r(e.settings,"bar_border_radius",10)}px`,borderTopRightRadius:`${r(e.settings,"bar_border_radius",10)}px`}}
            >
              <p
                style=${{color:r(e.settings,"free_gift_badge_text_color","#fff"),fontSize:`${r(e.settings,"free_gift_badge_text_size",14)}px`,display:"flex",alignItems:"center",gap:"10px"}}
              >
                ${e.settings?.free_gift_image?Be`<img
                      width=${r(e.settings,"free_gift_icon_size",16)}
                      height=${r(e.settings,"free_gift_icon_size",16)}
                      style=${{objectFit:"cover"}}
                      src=${e.settings?.free_gift_image}
                    />`:Be` <span>
                      <${F}
                        size=${r(e.settings,"free_gift_icon_size",16)}
                        color=${r(e.settings,"free_gift_icon_color","#ffffff")}
                      />
                    </span>`}
                <span>${e.settings.free_gift_badge_text}</span>
              </p>
            </div>
            <div>
              ${e.settings.free_gift_products.map(((i,s)=>Be`
                  <div className=${t.product_container}>
                    <div
                      style=${{alignItems:"center"}}
                      className=${t.left_container}
                    >
                      ${i.image&&Be`
                        <a
                          target=${n?"_blank":"_self"}
                          href=${`https://${a}/products/${i.handle}`}
                          className=${t.free_gift_image_container}
                        >
                          <img
                            src=${i.image}
                            className=${t.free_gift_image}
                            width=${30}
                            height=${30}
                          />
                        </a>
                      `}
                      <div className=${t.left_content_container}>
                        <a
                          target=${n?"_blank":"_self"}
                          href=${`https://${a}/products/${i.handle}`}
                          style=${{fontSize:e.settings.product_title_size,color:e.settings.product_title_text_color}}
                          className=${t.title}
                        >
                          ${i.title.replace("- Default Title","").length>20?i.title.replace("- Default Title","").slice(0,20)+"...":i.title.replace("- Default Title","")}
                        </a>
                        <p
                          style=${{fontSize:r(e.settings,"quantity_text_size",e.settings.subtitle_size),color:r(e.settings,"quantity_text_color",e.settings.secondary_text_color)}}
                          className=${t.quantity}
                        >
                          x${i.quantity}
                        </p>
                      </div>
                    </div>
                    <div className=${t.right_container}>
                      <p
                        className=${t.price}
                        style=${{color:r(e.settings,"total_price_color",e.settings.secondary_text_color),fontSize:r(e.settings,"total_price_size",10),textDecoration:"line-through"}}
                      >
                        ${o(parseFloat(i.price)*parseFloat(i.quantity))}
                      </p>
                    </div>
                  </div>
                `))}
            </div>
          </div>
        `:Be`
          ${i&&Be`
            <div className=${t.plus_container}>
              <div
                style=${{backgroundColor:e.settings.connector_bg_color?e.settings.connector_bg_color:e.settings.theme_secondary_color,color:e.settings.connector_color?e.settings.connector_color:e.settings.theme_primary_color,fontSize:`${r(e.settings,"connector_size",16)}px`,borderRadius:`${r(e.settings,"connector_border_radius",0)}px`}}
                className=${t.plus}
              >
                +
              </div>
            </div>
          `}
          <div
            style=${{borderRadius:`${r(e.settings,"bar_border_radius",10)}px`,border:`${r(e.settings,"bar_border_size",1)}px solid ${e.settings.bar_border_color?e.settings.bar_border_color:`${e.settings.theme_primary_color}33`}`,backgroundColor:`${e.settings.bar_bg_color?e.settings.bar_bg_color:`${e.settings.theme_primary_color}0D`}`}}
            className=${`${t.free_gift_container} ${t.item_container}`}
          >
            <div
              className=${t.free_gift_badge}
              style=${{backgroundColor:`${r(e.settings,"free_gift_badge_bg_color",e.settings.theme_primary_color)}`,borderTopLeftRadius:`${r(e.settings,"bar_border_radius",10)}px`,borderTopRightRadius:`${r(e.settings,"bar_border_radius",10)}px`}}
            >
              <p
                style=${{color:r(e.settings,"free_gift_badge_text_color","#fff"),fontSize:`${r(e.settings,"free_gift_badge_text_size",14)}px`}}
              >
                ${e.settings.free_gift_badge_text}
              </p>
            </div>
            <div className=${t.free_gift_content_wrapper}>
              <div
                style=${{alignItems:"center"}}
                className=${t.left_container}
              >
                <div className=${t.left_content_container}>
                  <p
                    style=${{fontSize:e.settings.product_title_size,color:e.settings.product_title_text_color}}
                    className=${t.title}
                  >
                    Product Title
                  </p>
                  <p
                    style=${{fontSize:r(e.settings,"quantity_text_size",e.settings.subtitle_size),color:r(e.settings,"quantity_text_color",e.settings.secondary_text_color)}}
                    className=${t.quantity}
                  >
                    x1
                  </p>
                </div>
              </div>
              <div className=${t.right_container}>
                <p
                  className=${t.price}
                  style=${{color:r(e.settings,"price_text_color",e.settings.secondary_text_color),fontSize:r(e.settings,"price_text_size",10),textDecoration:"line-through"}}
                >
                  ${e.settings.currency} 400.00
                </p>
              </div>
            </div>
          </div>
        `}
  `,je=E.bind(u);var Ie={bundlesContainer:"pb-1418",title:"pb-eebf",title_container:"pb-9c2c",item_container:"pb-376a",item_container_auto:"pb-6577",left_container:"pb-2cbc",left_content_container:"pb-ccda",product_title:"pb-eca0",quantity:"pb-5247",image_container:"pb-f7f3",offer_list_container:"pb-ba65",plus_container:"pb-41e4",plus:"pb-5e8d",cta_wrapper:"pb-fafe",cta_btn:"pb-f16c",dot:"pb-1416",currency:"pb-0425",offer_price:"pb-4bcf",footer_container:"pb-0836",popular_tag:"pb-0141",right_container:"pb-2c7c",price:"pb-e5f6",footer_text:"pb-2815",discount:"pb-214e",quantity_container:"pb-2272",variant_select_wrapper:"pb-c2af",variant_select:"pb-e15c",variant_select_container:"pb-20d6",variant_select_option:"pb-20cc",free_gift_container:"pb-6bcb",free_gift_badge:"pb-b72c",free_gift_content_wrapper:"pb-d75c",product_container:"pb-472a"};A(".pb-1418 *{box-sizing:border-box;margin:0;padding:0}.pb-1418{border:1px solid #000;border-radius:5px;padding:16px}.pb-eebf{color:#000;color:var(--bar-title-color,#000);display:inline-block;font-size:15px;font-size:17px;font-size:var(--bar-title-font-size,17px);font-style:var(--bar-title-font-style);font-weight:500;font-weight:var(--bar-title-font-weight,500);text-decoration:none;word-break:break-word}.pb-9c2c{margin-bottom:20px}.pb-376a{align-items:flex-start;border:1px solid #000;border-radius:10px;display:flex;height:75px;justify-content:space-between;max-height:75px;overflow:hidden}.pb-6577{height:auto;max-height:none}.pb-2cbc{grid-gap:10px;flex:1 1;gap:10px;max-width:100%;width:100%}.pb-2cbc,.pb-ccda{align-items:center;display:flex}.pb-ccda{grid-gap:5px;gap:5px}.pb-eca0{flex:1 1;margin:0;min-width:0;overflow:hidden;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;width:100%}.pb-5247,.pb-eca0{font-weight:500}.pb-f7f3{align-items:center;align-self:flex-start;display:flex;flex-shrink:0;height:42px;text-decoration:none;width:42px}.pb-f7f3 img{max-height:100%;max-width:100%;-o-object-fit:contain;object-fit:contain}.pb-ba65{grid-gap:15px;display:flex;flex-direction:column;gap:15px}.pb-41e4{align-items:center;display:flex;justify-content:center}.pb-5e8d{font-size:16px;padding:5px}.pb-fafe{margin-top:20px}.pb-f16c{grid-gap:4px;align-items:center;border:none;cursor:pointer;display:flex;gap:4px;height:44px;justify-content:center;padding:0 16px;width:100%}.pb-1416{background-color:currentColor;border-radius:50%;display:inline-block;height:3px;margin:0 4px;position:relative;top:1px;width:3px}.pb-0425{font-weight:500}.pb-4bcf{opacity:.7;text-decoration:line-through}.pb-0836{align-items:flex-start;align-items:center;border-radius:10px;display:flex;height:50px;justify-content:space-between;margin-top:40px;padding:10px 20px;position:relative}.pb-0141{background-color:#000;border-bottom-left-radius:5px;border-bottom-right-radius:5px;border-radius:5px;color:#fff;display:inline-block;font-size:10px;font-weight:700;padding:4px 12px;position:absolute;right:15px;top:-18px;z-index:1;z-index:4}.pb-2c7c{grid-gap:10px;align-items:center;display:flex;gap:10px}.pb-e5f6{color:#000;color:var(--bar-title-color,#000);display:inline-block;font-size:15px;font-size:var(--bar-title-font-size,15px);font-style:var(--bar-title-font-style);font-weight:500;font-weight:var(--bar-title-font-weight,500);word-break:break-word}.pb-2815{font-size:14px;font-weight:600}.pb-214e{border-radius:8px;font-size:9px;padding:4px 6px}.pb-2272{grid-gap:10px;align-items:flex-start;display:flex;gap:10px}.pb-c2af{max-height:120px;opacity:1;overflow-y:auto;scrollbar-color:var(--primary-color) transparent;scrollbar-width:thin;transition:all .3s ease-in-out}.pb-c2af::-webkit-scrollbar{width:6px}.pb-c2af::-webkit-scrollbar-track{background:transparent}.pb-c2af::-webkit-scrollbar-thumb{background-color:var(--primary-color);border-radius:3px}.pb-e15c{appearance:none;-webkit-appearance:none;-moz-appearance:none;background:none;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='10' width='10' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E\");background-position:right 0 center;background-repeat:no-repeat;border:none;color:#000;cursor:pointer;font-size:14px;margin:0;outline:none;padding:0 16px 0 0;position:relative;transition:all .3s ease-in-out}.pb-e15c:hover{background-position:right 3px center}.pb-20d6{display:flex;margin-bottom:8px}.pb-20cc{background:none;color:#000}.pb-6bcb{border:1px solid;overflow:unset!important;padding:35px 10px 0!important;position:relative}.pb-b72c{height:30px;left:0;margin-bottom:5px;max-height:30px;padding:4px 8px;position:absolute;top:0;width:100%}.pb-d75c{align-items:flex-start;padding-top:10px}.pb-472a,.pb-d75c{display:flex;justify-content:space-between;width:100%}.pb-472a{align-items:center}");const Ae=E.bind(u);var Me={timer_wrapper:"pb-9119",title_container:"pb-32b9",title:"pb-e23b",timer_container:"pb-88b0",timer_block:"pb-b500",timer_number:"pb-c5a2",timer_label:"pb-8376",separator:"pb-0fb5",stock_container:"pb-58dc",stock_text:"pb-fdf9"};A(".pb-9119 *{box-sizing:border-box;margin:0;padding:0}.pb-9119{margin:15px auto!important;padding:20px!important;text-align:center;width:100%!important}.pb-32b9{margin-bottom:15px!important}.pb-e23b{color:#333;font-size:1.5rem;margin:0!important}.pb-88b0{grid-gap:8px;gap:8px;justify-content:center}.pb-88b0,.pb-b500{align-items:center;display:flex}.pb-b500{flex-direction:column}.pb-c5a2{color:#333;font-size:20px;font-weight:700;line-height:1}.pb-8376{color:#666;font-size:1rem;margin-top:4px!important}.pb-0fb5{color:#333;font-size:3.5rem;font-weight:700;line-height:1;margin:0 4px!important;padding-bottom:24px!important}.pb-58dc{margin-top:15px!important}.pb-fdf9{color:#666;font-size:1.1rem;margin:0!important}");const Le=E.bind(u);var Oe={slider_outer:"pb-2122",slider_header:"pb-25f1",slider_title:"pb-b92f",button_container:"pb-1fac",slider_arrow:"pb-c9ed",slider_container:"pb-c52f",slider_card:"pb-85e0",slider_card_wrapper:"pb-1b5c",slider_card_left_container:"pb-7fd6",slider_card_left_inner_container:"pb-485c",slider_card_right_inner_container:"pb-ece0",slider_card_content:"pb-249c",slider_card_title:"pb-a627",slider_card_color:"pb-7ac8",slider_card_prices:"pb-4e4b",slider_card_discounted:"pb-0740",slider_card_original:"pb-1ec8",slider_add_btn:"pb-8985",slideInRight:"pb-b9e0",slideInLeft:"pb-146b",slideOutLeft:"pb-da18",slideOutRight:"pb-745e",variant_select_wrapper:"pb-261f",variant_select_container:"pb-b334",variant_select:"pb-0627",variant_select_option:"pb-1e14",dots_container:"pb-83bb",dot:"pb-8a57",active_dot:"pb-bc63"};A(".pb-2122 *{box-sizing:border-box;margin:0;padding:0}.pb-2122{margin:10px 0}.pb-25f1{align-items:center;display:flex;justify-content:space-between;margin-bottom:10px}.pb-b92f{font-size:18px;font-weight:700}.pb-1fac{grid-gap:20px;gap:20px}.pb-1fac,.pb-c9ed{align-items:center;display:flex}.pb-c9ed{background:none;border:none;border-radius:50%;cursor:pointer;font-size:18px;height:30px;justify-content:center;padding:8px;width:30px}.pb-c52f{height:160px;overflow:hidden;position:relative;width:100%}.pb-85e0{border-radius:12px;height:100%;left:0;position:absolute;top:0;transition:transform .3s ease-in-out}.pb-1b5c,.pb-85e0{align-items:center;display:flex;width:100%}.pb-1b5c{grid-gap:10px;flex-wrap:wrap;gap:10px;justify-content:space-between;min-width:0;padding:10px 14px}.pb-7fd6{grid-gap:8px;align-items:center;display:flex;flex:1 1;gap:8px;min-width:0}.pb-485c{border-radius:12px;flex-shrink:0;height:60px;width:60px}.pb-485c img{border-radius:12px;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.pb-ece0{flex:1 1;min-width:0}.pb-249c{display:flex;flex:1 1;flex-direction:column;justify-content:center;min-width:0}.pb-a627{color:#222;font-weight:600;max-width:100%;overflow:hidden;text-decoration:none;text-overflow:ellipsis;white-space:nowrap}.pb-7ac8{color:#8a94a6}.pb-4e4b{grid-gap:10px;align-items:center;display:flex;flex-wrap:wrap;gap:10px}.pb-0740{color:#f44336;font-weight:600}.pb-1ec8{color:#b0b7c3;text-decoration:line-through}.pb-8985{align-items:center;background:#000;border:none;border-radius:12px;color:#fff;cursor:pointer;display:flex;font-weight:600;padding:4px 8px;white-space:nowrap}@keyframes pb-b9e0{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes pb-da18{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes pb-146b{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes pb-745e{0%{transform:translateX(0)}to{transform:translateX(100%)}}.pb-b9e0{animation:pb-b9e0 .3s ease-in-out forwards}.pb-146b{animation:pb-146b .3s ease-in-out forwards}.pb-da18{animation:pb-da18 .3s ease-in-out forwards}.pb-745e{animation:pb-745e .3s ease-in-out forwards}.pb-261f{grid-gap:6px;gap:6px;margin-top:8px}.pb-261f,.pb-b334{display:flex;flex-wrap:wrap}.pb-b334{grid-gap:8px;gap:8px;width:100%}.pb-0cda{color:#333;font-size:12px}.pb-0627{border:1px solid #059669;border-radius:4px;flex:1 1 100px;font-size:12px;height:30px;max-width:100%;max-width:75px;min-width:0;outline:none;padding:4px 8px}.pb-1e14{border:1px solid #333;border-radius:5px;padding:2px 3px}.pb-83bb{grid-gap:8px;-ms-overflow-style:none;align-items:center;display:flex;gap:8px;justify-content:center;margin-top:8px;max-width:100%;overflow-x:auto;padding:12px 4px;scrollbar-width:none}.pb-83bb::-webkit-scrollbar{display:none}.pb-8a57{border:1px solid;border-radius:50%;cursor:pointer;flex-shrink:0;height:8px;padding:0;transition:all .3s ease;width:8px}.pb-8a57:hover{transform:scale(1.1)}.pb-bc63{transform:scale(1.2)}");const Ee=E.bind(u);var Ue="pb-200e";A('.pb-82b0 *{box-sizing:border-box;margin:0;padding:0}.pb-82b0{grid-gap:10px;gap:10px;height:100%;margin-bottom:10px;min-height:190px}.pb-c167{font-weight:500;text-align:center}.pb-d9ff{grid-gap:10px;align-items:center;display:flex;gap:10px;margin-bottom:10px}.pb-200e{display:block!important;flex-grow:1;height:4px}.pb-8abe{margin-top:100px;text-align:center;width:100%}.pb-1e93{font-size:18px;font-weight:600;margin-bottom:10px}.pb-2472,.pb-bb5d{width:100%}.pb-2472{background-color:#000;border:none;border-radius:10px;color:#fff;cursor:pointer;padding:10px 12px}.pb-3200{grid-gap:15px;display:flex;gap:15px}.pb-8d58{border-radius:10px;cursor:pointer;margin:10px 0;position:relative;z-index:5}.pb-b527{grid-gap:10px;align-items:center;display:flex;gap:10px}.pb-2485{background-color:#000;border-bottom-left-radius:5px;border-bottom-right-radius:5px;color:#fff;display:inline-block;font-size:9px;font-weight:700;padding:1px 8px;position:absolute;right:15px;top:-12px;z-index:1;z-index:4}.pb-2485:after,.pb-2485:before{border-bottom-style:solid;border-bottom-width:11px;border-left:8px solid transparent;content:"";display:block;filter:brightness(.7);height:0;position:absolute;top:0;width:0}.pb-2485:before{left:-8px}.pb-2485:after{right:-8px;transform:rotateY(180deg)}.pb-acdf{align-items:center;display:flex;justify-content:space-between;width:100%}.pb-39b5{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:50%;cursor:pointer;display:block!important;height:13px!important;margin:0;max-height:13px!important;max-width:13px!important;min-height:13px!important;min-width:13px!important;padding:0;position:relative!important;width:13px!important}.pb-9603{grid-gap:5px;display:flex;flex-direction:column;gap:5px}.pb-3f45{font-size:22px;font-weight:500}.pb-2e6c{border-radius:8px}.pb-d440{grid-gap:2px;align-items:flex-end;display:flex;flex-direction:column;gap:2px;justify-content:center;min-width:70px;text-align:right}.pb-081e{color:#000;color:var(--bar-title-color,#000);display:inline-block;font-size:14px;font-size:var(--bar-title-font-size,14px);font-style:var(--bar-title-font-style);font-weight:500;font-weight:var(--bar-title-font-weight,500);word-break:break-word}.pb-f98c{font-size:12px;text-decoration:line-through}.pb-d6df{height:0;transition:all .3s ease-in-out}.pb-c305{height:inherit}.pb-6dd9{display:none;padding:10px;transition:all .3s ease-in-out}.pb-8ecf{display:block}.pb-61e3{font-size:14px}.pb-3017{padding:5px}.pb-228f{grid-gap:10px;align-items:center;display:flex;gap:10px;margin:4px 0;margin-bottom:10px}.pb-2ebd{justify-content:space-between;width:100%}.pb-2ebd,.pb-da79{grid-gap:5px;display:flex;gap:5px}.pb-da79{flex-direction:column}.pb-0aa3{max-height:0;opacity:0;overflow-y:auto;scrollbar-color:var(--primary-color) transparent;scrollbar-width:thin;transition:all .3s ease-in-out}.pb-0aa3::-webkit-scrollbar{width:6px}.pb-0aa3::-webkit-scrollbar-track{background:transparent}.pb-0aa3::-webkit-scrollbar-thumb{background-color:var(--primary-color);border-radius:3px}.pb-4e18{margin-top:10px;max-height:120px;opacity:1}.pb-b080{grid-gap:10px;display:flex;gap:10px;margin-bottom:10px}.pb-5228{color:#333;font-size:12px}.pb-cb14{border:1px solid #059669;border-radius:4px;box-shadow:none;color:#000;color:var(--bar-title-color,#000);font-size:12px;height:30px;max-width:100%;min-width:40px;outline:none;padding:3px 2px;width:calc(100% - 10px);width:100%}.pb-7671{border:1px solid #333;border-radius:5px;padding:2px 3px;width:calc(100% - 10px)}.pb-9323{align-items:flex-start;display:flex;justify-content:space-between;max-height:40px}.pb-cb9d{left:-1.2px;padding:5px 10px;position:absolute;top:100%;width:calc(100% + 2px)}.pb-9f30{grid-gap:20px;align-items:center;display:flex;gap:20px}.pb-30ee{grid-gap:5px;gap:5px}.pb-30ee,.pb-e066{display:flex;flex-direction:column}.pb-e066{text-align:right}.pb-058d,.pb-e066{align-items:flex-end}.pb-058d{grid-gap:5px;display:flex;gap:5px}');const Fe=E.bind(u);var Ge={offer_list_wrapper:"pb-ef73",title:"pb-0df2",title_container:"pb-bfd6",single_offer_container:"pb-138a",offer_inner_container:"pb-b282",product_image_container:"pb-1ff6",product_image:"pb-901d",quantity:"pb-9548",content_wrapper:"pb-4b38",content_container:"pb-ca13",heading:"pb-3b44",right_container:"pb-b30b",offer_price:"pb-b4d9",heading_container:"pb-fa0c",heading_inner_container:"pb-156c",variant_select_wrapper:"pb-163b",selected:"pb-9950",variant_select_container:"pb-60b5",variant_select_label:"pb-2779",variant_select:"pb-6974",variant_select_option:"pb-dfdf"};A(".pb-ef73 *{box-sizing:border-box;margin:0;padding:0}.pb-ef73{grid-gap:10px;gap:10px;height:100%;margin-bottom:10px;min-height:190px}.pb-0df2{font-weight:500;text-align:center}.pb-bfd6{grid-gap:10px;align-items:center;display:flex;gap:10px;justify-content:space-between;margin-bottom:10px}.pb-138a{border-radius:10px;cursor:pointer;margin:10px 0;position:relative;z-index:5}.pb-b282{grid-gap:10px;border-radius:10px;gap:10px}.pb-1ff6,.pb-b282{align-items:center;display:flex}.pb-1ff6{flex-shrink:0;height:50px;justify-content:center;position:relative;width:50px}.pb-901d{border-radius:50%;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.pb-9548{background-color:#f0f0f0;border-radius:50%;color:#333;font-size:10px;font-weight:500;height:20px;justify-content:center;left:-5%;position:absolute;top:-5%;transform:translate(-5%,-5%);width:20px}.pb-4b38,.pb-9548{align-items:center;display:flex}.pb-4b38{justify-content:space-between;width:100%}.pb-ca13{grid-gap:5px;display:flex;flex-direction:column;gap:5px;width:100%}.pb-3b44{color:#000;color:var(--bar-title-color,#000);display:inline-block;font-size:15px;font-size:var(--bar-title-font-size,15px);font-style:var(--bar-title-font-style);font-weight:500;font-weight:var(--bar-title-font-weight,500);text-decoration:none;word-break:break-word}.pb-b30b{grid-gap:6px;align-items:flex-end;display:flex;flex-direction:column;gap:6px;min-width:70px;text-align:right}.pb-b4d9{font-size:10px}.pb-fa0c{grid-gap:5px;display:flex;gap:5px;justify-content:space-between;width:100%}.pb-156c{grid-gap:10px;align-items:center;display:flex;gap:10px}.pb-163b{max-height:0;opacity:0;overflow-y:auto;scrollbar-color:var(--primary-color) transparent;scrollbar-width:thin;transition:all .3s ease-in-out}.pb-163b::-webkit-scrollbar{width:6px}.pb-163b::-webkit-scrollbar-track{background:transparent}.pb-163b::-webkit-scrollbar-thumb{background-color:var(--primary-color);border-radius:3px}.pb-9950{margin-top:10px;max-height:120px;opacity:1}.pb-60b5{grid-gap:10px;align-items:center;display:flex;gap:10px;margin-bottom:10px}.pb-2779{color:#333;font-size:12px}.pb-6974{border:1px solid #059669;border-radius:4px;box-shadow:none;color:#000;color:var(--bar-title-color,#000);font-size:12px;height:30px;max-width:100%;min-width:40px;outline:none;padding:3px 2px;width:calc(100% - 10px);width:100%}.pb-dfdf{border:1px solid #333;border-radius:5px;padding:2px 3px;width:calc(100% - 10px)}");const We=E.bind(u);A(':root{--charcoal:#292627;--pink:#ff2267;--gray:#e6e7e8;--base-background-color:var(--charcoal);--base-font-color:var(--gray);--base-muted-color:var(--gray)}@keyframes pb-cdcc{0%{transform:scale(1)}33%{transform:scale(.9)}66%{transform:scale(1.1)}to{transform:scale(1)}}@keyframes pb-e260{0%{background-color:#fff;background-color:var(--inactive-step-bg-color,#fff);border-color:var(--inactive-step-border-color,var(--base-muted-color));transform:scale(1)}50%{background-color:var(--pink);background-color:var(--active-step-bg-color,var(--pink));border-color:var(--active-step-border-color,var(--pink));transform:scale(1.2)}to{background-color:var(--pink);background-color:var(--active-step-bg-color,var(--pink));border-color:var(--active-step-border-color,var(--pink));transform:scale(1)}}.pb-eaf2{list-style:none;margin:0;padding:60px 0 20px;width:100%}.pb-c52c,.pb-eaf2{display:flex;position:relative}.pb-c52c{align-items:center;flex:1 1;flex-direction:column;justify-content:center;pointer-events:none}.pb-e663,.pb-ed14{cursor:pointer;pointer-events:all}.pb-eaf2:before{background-color:var(--base-muted-color);background-color:var(--inactive-line-bg-color,var(--base-muted-color));width:100%;z-index:0}.pb-eaf2:after,.pb-eaf2:before{border-radius:3px;content:"";height:6px;left:0;position:absolute;top:calc(50% + 20px);transform:translateY(-50%)}.pb-eaf2:after{background-color:var(--pink);background-color:var(--active-line-bg-color,var(--pink));transition:width .6s ease-in-out;width:0;width:var(--progress-percentage,0);z-index:1}.pb-a32d{align-items:center;background-color:#fff;background-color:var(--inactive-step-bg-color,#fff);border:3px solid var(--inactive-step-border-color,var(--base-muted-color));border-radius:50%;color:transparent;display:flex;font-size:.8rem;height:24px;justify-content:center;position:relative;transition:border-color .3s ease-in-out,background-color .3s ease-in-out;width:24px;z-index:3}.pb-a32d:before{content:"\\2713";display:block}.pb-a32d:before,.pb-ed14.pb-e663 .pb-a32d{color:#fff;color:var(--tick-mark-color,#fff)}.pb-ed14.pb-e663 .pb-a32d{transition:background-color .3s ease-in-out,border-color .3s ease-in-out,color .3s ease-in-out}.pb-ed14 .pb-a32d{background-color:var(--pink);background-color:var(--active-step-bg-color,var(--pink));border-color:var(--active-step-border-color,var(--pink));color:#fff;color:var(--tick-mark-color,#fff)}.pb-ed14.pb-5002 .pb-a32d,.step--complete.step--newly-completed .pb-a32d{animation:pb-e260 .6s ease-in-out}.pb-9e35{color:#333;color:var(--active-text-color,#333);font-size:.75rem;font-weight:600;left:50%;overflow:hidden;position:absolute;text-align:center;text-overflow:ellipsis;top:-45px;transform:translateX(-50%);white-space:nowrap;z-index:2}.pb-93d1.pb-67d4 .pb-9e35{color:var(--base-muted-color);color:var(--inactive-description-text-color,var(--base-muted-color))}.pb-ed14 .pb-9e35{color:#333;color:var(--active-description-text-color,#333)}@media (max-width:768px){.pb-9e35{font-size:.7rem;top:-40px}}@media (max-width:480px){.pb-9e35{font-size:.65rem;top:-35px}}.pb-3956{color:#333;color:var(--active-text-color,#333);font-size:.85rem;font-weight:600;left:50%;position:absolute;text-align:center;top:35px;transform:translateX(-50%);white-space:nowrap}.pb-93d1.pb-67d4 .pb-3956{color:var(--base-muted-color);color:var(--inactive-text-color,var(--base-muted-color))}.pb-ed14 .pb-3956{color:#333;color:var(--active-text-color,#333)}');const He=E.bind(u);window.PBOfferUI={Template1UI:({offerData:e,getThemeValue:t,getDefaultText:i,selected:r,getDefaultBarText:o,hasDiscount:a,getDiscountedPrice:n,formatPrice:s,getTotalPrice:l,handleOffer:p,handleOptionChange:c,remove_branding:d,usingCurrencyConverter:_,selectedVariants:g,currentVariantId:b,optionSelections:f,getDiscount:m,findVariantIdByOptions:u,Timer:x,handleAddQuantity:h,handleRemoveQuantity:$,remove_decimals:v,dynamicQuantities:y,shopify_domain:w,selectedOffer:z,getEachUnitPriceText:k,getSelectedBlockTotalPrice:N,admin:C=!1,...S})=>{const T=(e,i)=>{let r=t(i?.settings,"bar_vertical_padding",10);return e.enable_badge&&("Badge7"===i.settings?.badge_type&&(r=Math.max(r,30)),"Badge5"===i.settings?.badge_type&&(r=Math.max(r,25)),"Badge3"===i.settings?.badge_type&&(r=Math.max(r,20)),"Badge2"===i.settings?.badge_type&&(r=Math.max(r,22)),"Badge1"===i.settings?.badge_type&&(r=Math.max(r,20)),"Badge6"===i.settings?.badge_type&&(r=Math.max(r,18))),r};return Ne`
    <div className=${M.offer_list_wrapper}>
      ${t(e.settings,"show_title")&&Ne`
        <div className=${M.title_container}>
          <span
            style=${{backgroundColor:t(e.settings,"title_border_color",e.settings.title_text_color),height:t(e.settings,"title_border_size",4)}}
            className=${M.title_line}
          ></span>
          <p
            style=${{color:e.settings.title_text_color,fontSize:e.settings.title_size}}
            className=${M.title}
          >
            ${i(S.lang,e,"title")}
          </p>
          <span
            style=${{backgroundColor:t(e.settings,"title_border_color",e.settings.title_text_color),height:t(e.settings,"title_border_size",4)}}
            className=${M.title_line}
          ></span>
        </div>
      `}
      ${e?.settings?.countdown_timer?.enable&&"above"===e?.settings?.countdown_timer?.position&&x}
      ${e.bars.map(((i,d)=>Ne`
          <div
            key=${i.id}
            className=${`${M.single_offer_container} ${r===d?M.selected_single_offer_container:""}`}
            style=${{alignItems:e?.settings?.include_variants&&Array.isArray(e?.variants)&&e?.variants?.length>1&&(e?.settings?.allow_variant_selector_single_qty||i.quantity>1)&&r===d?"flex-start":"center",padding:`${T(i,e)}px ${t(e?.settings,"bar_horizontal_padding",8)}px ${T(i,e)}px ${t(e?.settings,"bar_horizontal_padding",8)}px`,borderRadius:t(e.settings,"bar_border_radius",10),borderBottomLeftRadius:i.enable_free_gift?"0":t(e.settings,"bar_border_radius",10),borderBottomRightRadius:i.enable_free_gift?"0":t(e.settings,"bar_border_radius",10),backgroundColor:r===d?t(e.settings,"active_bar_bg_color","transparent"):t(e.settings,"inactive_bar_bg_color",`${e.settings.theme_primary_color}0D`),borderLeft:`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderRight:`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderTop:`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderBottom:i?.enable_free_gift?"none":`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,marginBottom:i.enable_free_gift?"0":"10px"}}
            onClick=${()=>p(d)}
          >
            <div className=${M.offer_inner_container}>
              ${i.enable_badge&&Ne`
                <div
                  className=${(()=>{const t=!1===e.settings?.apply_badge_styling_to_all_blocks&&e.bars?.[d]?.badge_settings?.badge_type?e.bars[d].badge_settings.badge_type:e.settings?.badge_type||"Badge6";return"Badge2"===t?M.badge2_wrapper:"Badge3"===t?M.badge3_wrapper:"Badge5"===t?M.badge5_wrapper:"Badge7"===t?M.badge7_wrapper:"Badge8"===t?M.badge8_wrapper:M.badge_wrapper})()}
                >
                  <${oe}
                    text=${o(S.lang,e,"badge_text",d)}
                    badge=${!1===e.settings?.apply_badge_styling_to_all_blocks&&e.bars?.[d]?.badge_settings?.badge_type?e.bars[d].badge_settings.badge_type:e.settings?.badge_type||"Badge6"}
                    offerData=${e}
                    getThemeValue=${t}
                    lang=${S.lang}
                    blockIndex=${d}
                  />
                </div>
              `}
              <${ke}
                item=${i}
                getThemeValue=${t}
                styles=${M}
                selected=${r}
                index=${d}
                offerData=${e}
                selectedVariants=${g}
                currentVariantId=${b}
              />
              <div className=${M.content_wrapper}>
                <div className=${M.content_container}>
                  <div className=${M.heading_container}>
                    <div className=${M.heading_inner_container}>
                      <span
                        style=${{fontSize:e.settings.bar_title_size,color:t(e.settings,"bar_title_text_color",e.settings.primary_text_color)}}
                        className=${M.heading}
                      >
                        ${o(S.lang,e,"heading",d)}
                      </span>
                      ${a(i,d,r,g,b,e)&&Ne`
                        <p
                          className=${M.discount}
                          style=${{color:t(e.settings,"subtitle_text_color","#000"),backgroundColor:t(e.settings,"discount_background_color",`${e.settings.theme_primary_color}66`),fontSize:e.settings.subtitle_size}}
                        >
                          -
                          ${m(i,e,d,r,g,b,_)}
                        </p>
                      `}
                    </div>
                    <div className=${M.right_container}>
                      <span
                        style=${{color:t(e.settings,"discounted_price_color",e.settings.primary_text_color),fontSize:t(e.settings,"discounted_price_size",13)}}
                        className=${`${M.currency} money`}
                      >
                        ${s(n(i,d,r,g,b,e,y,z),_,v,e.settings?.enable_price_rounding,e.settings?.price_rounding_value)}${e.settings?.show_each_unit_price&&k?k(S.lang,e):""}
                      </span>
                      ${a(i,d,r,g,b,e)&&Ne`
                        <span
                          className=${`${M.offer_price} money`}
                          style=${{color:t(e.settings,"total_price_color",e.settings.secondary_text_color),fontSize:t(e.settings,"total_price_size",10)}}
                        >
                          ${s(l(i,d,r,g,b,e),_,v,e.settings?.enable_price_rounding,e.settings?.price_rounding_value)}
                        </span>
                      `}
                      ${i.show_add_to_cart&&Ne`
                        <button
                          className=${M.add_to_cart_button}
                          onMouseDown=${e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}}
                          onClick=${e=>(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),e.nativeEvent&&(e.nativeEvent.stopPropagation(),e.nativeEvent.stopImmediatePropagation()),S.handleAddToCartClick&&S.handleAddToCartClick(i),!1)}
                          style=${{backgroundColor:t(e.settings,"add_to_cart_button_bg_color",e.settings.theme_primary_color||"#059669"),color:t(e.settings,"add_to_cart_button_text_color","#ffffff"),fontSize:t(e.settings,"add_to_cart_button_text_size",12),border:`${t(e.settings,"add_to_cart_button_border_size",1)}px solid ${t(e.settings,"add_to_cart_button_border_color",e.settings.theme_primary_color||"#059669")}`,borderRadius:t(e.settings,"add_to_cart_button_border_radius",6),padding:`${t(e.settings,"add_to_cart_button_vertical_padding",8)}px ${t(e.settings,"add_to_cart_button_horizontal_padding",16)}px`,marginTop:"8px",width:"100%",cursor:"pointer",fontWeight:"500",transition:"all 0.2s ease"}}
                        >
                          ${o(S.lang,e,"add_to_cart_button_text",d)||"Add"}
                        </button>
                      `}
                      ${Array.isArray(e?.variants)&&!e?.settings?.include_variants&&e?.settings?.enable_quantity_selector&&r===d&&d===e?.bars?.length-1&&Ne`
                        <div className=${M.quantity_controls}>
                          <button
                            onClick=${e=>(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),$(i.id),!1)}
                            className=${M.quantity_button}
                            style=${{color:e.settings.theme_primary_color}}
                          >
                            −
                          </button>
                          <span
                            className=${M.quantity_display}
                            style=${{color:e.settings.primary_text_color||"#333",fontSize:t(e.settings,"discounted_price_size",10)}}
                          >
                            ${y&&z&&y[z.id]||i.quantity}
                          </span>
                          <button
                            onClick=${e=>(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),h(i.id),!1)}
                            className=${M.quantity_button}
                            style=${{color:e.settings.theme_primary_color}}
                          >
                            +
                          </button>
                        </div>
                      `}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ${e?.settings?.include_variants&&Array.isArray(e?.variants)&&e?.variants?.length>1&&(e?.settings?.allow_variant_selector_single_qty||(y&&z?(y[z.id]||i.quantity)>1:i.quantity>1))&&r===d&&Ne`
              <div
                className=${`${M.selected} ${M.variant_select_wrapper}`}
                style=${{"--primary-color":e.settings.theme_primary_color}}
              >
                ${Array.from({length:y&&z&&y[z.id]||i.quantity}).map(((i,o)=>Ne`
                    <div
                      className=${M.variant_select_container}
                      key=${o}
                    >
                      <label
                        className=${M.variant_select_label}
                        htmlFor=${`variant_select_${r}_${o}`}
                        style=${{fontSize:t(e.settings,"select_label_size",12),color:t(e.settings,"select_label_color","#333333")}}
                      >
                        #${o+1}
                      </label>
                      ${e.options.map(((i,a)=>Ne`
                          <div
                            key=${i.name}
                            style=${{marginBottom:"8px",width:"100%"}}
                          >
                            <${ye}
                              offerData=${e}
                              optionName=${i.name}
                              optionValues=${i.values}
                              selectedValue=${f[o]?.[i.name]||i.values[0]}
                              onValueChange=${e=>c(o,i.name,e)}
                              getThemeValue=${t}
                              styles=${M}
                              productVariants=${e.variants}
                            />
                            ${!we(e,i.name)||"color_swatch"!==e?.swatch_settings?.type&&"image_swatch"!==e?.swatch_settings?.type&&"product_image_swatch"!==e?.swatch_settings?.type?Ne`
                                  <select
                                    className=${M.variant_select}
                                    style=${{border:`${t(e.settings,"select_border_size",1)}px solid ${t(e.settings,"select_border_color",e.settings.theme_primary_color)}`,backgroundColor:t(e.settings,"select_bg_color","#ffffff"),fontSize:t(e.settings,"product_variant_size",12),color:e.settings.product_variant_text_color,borderRadius:e.settings.select_border_radius,padding:t(e.settings,"select_border_size",0)>0?"4px 16px 4px 0":"0 16px 0 0",marginTop:"4px",display:!we(e,i.name)||"color_swatch_dropdown"!==e?.swatch_settings?.type&&"image_swatch_dropdown"!==e?.swatch_settings?.type&&"product_image_swatch_dropdown"!==e?.swatch_settings?.type?"block":"none"}}
                                    id=${`variant_select_${r}_${o}_${a}`}
                                    value=${f[o]?.[i.name]||i.values[0]}
                                    onChange=${e=>c(o,i.name,e.target.value)}
                                  >
                                    ${i.values.map((t=>{const r={...f[o],[i.name]:t},a=u(e.variants,e.options,r),n=e.variants.find((e=>String(e.id)===String(a))),s=n&&!1===n.available;return Ne`
                                        <option
                                          key=${t}
                                          className=${M.variant_select_option}
                                          value=${t}
                                          disabled=${s}
                                          style=${{backgroundColor:e.settings.select_bg_color,color:e.settings.product_variant_text_color}}
                                        >
                                          ${t}${s?" - unavailable":""}
                                        </option>
                                      `}))}
                                  </select>
                                `:""}
                          </div>
                        `))}
                    </div>
                  `))}
              </div>
            `}
          </div>
          ${i.enable_free_gift&&Ne`
            <${H}
              active=${r===d}
              temp=${e}
              item=${i}
              styles=${M}
              lang=${S.lang}
              getThemeValue=${t}
              formatPrice=${s}
              freeGiftOptionSelections=${S.freeGiftOptionSelections||{}}
              handleFreeGiftOptionChange=${S.handleFreeGiftOptionChange}
              findVariantIdByOptions=${u}
              shopify_domain=${w}
              admin=${C}
            />
          `}
        `))}
      ${e?.settings?.countdown_timer?.enable&&"below"===e?.settings?.countdown_timer?.position&&x}
      ${e?.settings?.show_bottom_total_price&&Ne`
        <p
          style=${{textAlign:t(e.settings,"bottom_total_price_text_align","right"),display:"flex",gap:"4px",justifyContent:"right"===t(e.settings,"bottom_total_price_text_align","right")?"flex-end":"left"===t(e.settings,"bottom_total_price_text_align","left")?"flex-start":"center"}}
        >
          <span
            style=${{fontSize:t(e.settings,"bottom_total_price_text_size",14),color:t(e.settings,"bottom_total_price_text_color","#333"),fontWeight:500}}
          >
            ${i(S.lang,e,"bottom_total_price_text")||"Total : "}
          </span>
          <span
            style=${{fontSize:t(e.settings,"bottom_total_price_size",12),color:t(e.settings,"bottom_total_price_color","#333")}}
          >
            ${s(N?N(e,r,g,b,y,z):0,_,v,e.settings?.enable_price_rounding,e.settings?.price_rounding_value)}
          </span>
        </p>
      `}
      ${Ne`
        <${X} temp=${e} remove_branding=${d} />
      `}
    </div>
  `},Template2UI:({offerData:e,getThemeValue:t,getDefaultText:i,selected:r,getDefaultBarText:o,hasDiscount:a,getDiscountedPrice:n,formatPrice:s,getTotalPrice:l,handleOffer:p,handleOptionChange:c,remove_branding:d,usingCurrencyConverter:_,selectedVariants:g,currentVariantId:b,optionSelections:f,getDiscount:m,findVariantIdByOptions:u,Timer:x,remove_decimals:h,handleAddQuantity:$,handleRemoveQuantity:v,dynamicQuantities:y,selectedOffer:w,shopify_domain:z,getEachUnitPriceText:k,getSelectedBlockTotalPrice:N,admin:C=!1,...S})=>Se`
    <div className=${Ce.offer_list_wrapper}>
      ${t(e.settings,"show_title")&&Se`
        <div className=${Ce.title_container}>
          <span
            style=${{backgroundColor:t(e.settings,"title_border_color",e.settings.title_text_color),height:t(e.settings,"title_border_size",4)}}
            className=${Ce.title_line}
          ></span>
          <p
            style=${{color:e.settings.title_text_color,fontSize:e.settings.title_size}}
            className=${Ce.title}
          >
            ${i(S.lang,e,"title")}
          </p>
          <span
            style=${{backgroundColor:t(e.settings,"title_border_color",e.settings.title_text_color),height:t(e.settings,"title_border_size",4)}}
            className=${Ce.title_line}
          ></span>
        </div>
      `}
      ${e?.settings?.countdown_timer?.enable&&"above"===e?.settings?.countdown_timer?.position&&x}
      ${e.bars.map(((i,d)=>Se`
          <div>
            <div
              key=${i.id}
              className=${`${Ce.single_offer_container} ${r===d?Ce.selected_single_offer_container:""}`}
              onClick=${()=>p(d)}
              style=${{borderBottom:"none",..."no_image"!==t(i?.product_image,"mode","no_image")&&{borderLeft:`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderRight:`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderTop:`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderBottom:i?.enable_free_gift?"none":`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`}}}
            >
              <${ke}
                item=${i}
                getThemeValue=${t}
                styles=${Ce}
                selected=${r}
                index=${d}
                offerData=${e}
                selectedVariants=${g}
                currentVariantId=${b}
              />
              <div className=${Ce.content_wrapper}>
                <div className=${Ce.content_container}>
                  <div className=${Ce.heading_container}>
                    <div className=${Ce.heading_inner_container}>
                      <p
                        className=${Ce.heading}
                        style=${{fontSize:e.settings.bar_title_size,color:t(e.settings,"bar_title_text_color",e.settings.primary_text_color)}}
                      >
                        ${o(S.lang,e,"heading",d)}
                      </p>
                      ${a(i,d,r,g,b,e)&&Se`
                        <p
                          className=${Ce.discount}
                          style=${{color:t(e.settings,"subtitle_text_color","#000"),backgroundColor:t(e.settings,"discount_background_color",`${e.settings.theme_primary_color}66`),fontSize:e.settings.subtitle_size}}
                        >
                          -
                          ${m(i,e,d,r,g,b,_)}
                        </p>
                      `}
                    </div>

                    <div className=${Ce.right_container_wrapper}>
                      <div
                        className=${Ce.right_container}
                        style=${{color:e.settings?.primary_text_color?e.settings.primary_text_color:"#000"}}
                      >
                        <p
                          style=${{color:t(e.settings,"discounted_price_color",e.settings.primary_text_color),fontSize:t(e.settings,"discounted_price_size",13)}}
                          className=${`${Ce.currency} money`}
                        >
                          ${s(n(i,d,r,g,b,e,y,w),_,h,e.settings?.enable_price_rounding,e.settings?.price_rounding_value)}${e.settings?.show_each_unit_price&&k?k(S.lang,e):""}
                        </p>
                        ${a(i,d,r,g,b,e)&&Se`
                          <div>
                            <p
                              className=${`${Ce.offer_price} money`}
                              style=${{color:t(e.settings,"total_price_color",e.settings.secondary_text_color),fontSize:t(e.settings,"total_price_size",10)}}
                            >
                              ${s(l(i,d,r,g,b,e),_,h,e.settings?.enable_price_rounding,e.settings?.price_rounding_value)}
                            </p>
                          </div>
                          ${i.show_add_to_cart&&Se`
                            <p>
                              <button
                                className=${Ce.add_to_cart_button}
                                onMouseDown=${e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}}
                                onClick=${e=>(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),e.nativeEvent&&(e.nativeEvent.stopPropagation(),e.nativeEvent.stopImmediatePropagation()),S.handleAddToCartClick&&S.handleAddToCartClick(i),!1)}
                                style=${{backgroundColor:t(e.settings,"add_to_cart_button_bg_color",e.settings.theme_primary_color||"#059669"),color:t(e.settings,"add_to_cart_button_text_color","#ffffff"),fontSize:t(e.settings,"add_to_cart_button_text_size",12),border:`${t(e.settings,"add_to_cart_button_border_size",1)}px solid ${t(e.settings,"add_to_cart_button_border_color",e.settings.theme_primary_color||"#059669")}`,borderRadius:t(e.settings,"add_to_cart_button_border_radius",6),padding:`${t(e.settings,"add_to_cart_button_vertical_padding",8)}px ${t(e.settings,"add_to_cart_button_horizontal_padding",16)}px`,marginTop:"8px",width:"100%",cursor:"pointer",fontWeight:"500",transition:"all 0.2s ease"}}
                              >
                                ${o(S.lang,e,"add_to_cart_button_text",d)||"Add"}
                              </button>
                            </p>
                          `}
                        `}
                      </div>
                      ${Array.isArray(e?.variants)&&!e?.settings?.include_variants&&e?.settings?.enable_quantity_selector&&r===d&&d===e?.bars?.length-1&&Se`
                        <div className=${Ce.quantity_controls}>
                          <button
                            onClick=${e=>(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),v(i.id),!1)}
                            className=${Ce.quantity_button}
                            style=${{color:e.settings.theme_primary_color}}
                          >
                            −
                          </button>
                          <span
                            className=${Ce.quantity_display}
                            style=${{color:e.settings.primary_text_color||"#333",fontSize:t(e.settings,"discounted_price_size",10)}}
                          >
                            ${y&&w&&y[w.id]||i.quantity}
                          </span>
                          <button
                            onClick=${e=>(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),$(i.id),!1)}
                            className=${Ce.quantity_button}
                            style=${{color:e.settings.theme_primary_color}}
                          >
                            +
                          </button>
                        </div>
                      `}
                    </div>
                  </div>
                  ${e?.settings?.include_variants&&Array.isArray(e?.variants)&&e?.variants?.length>1&&(e?.settings?.allow_variant_selector_single_qty||i.quantity>1)&&r===d&&Se`
                    <div
                      className=${`${Ce.selected} ${Ce.variant_select_wrapper}`}
                      style=${{"--primary-color":e.settings.theme_primary_color}}
                    >
                      ${Array.from({length:i.quantity}).map(((i,o)=>Se`
                          <div
                            className=${Ce.variant_select_container}
                            key=${o}
                            style=${{display:"flex",gap:8}}
                          >
                            <label
                              className=${Ce.variant_select_label}
                              htmlFor=${`variant_select_${r}_${o}`}
                              style=${{fontSize:t(e.settings,"select_label_size",12),color:t(e.settings,"select_label_color","#333333")}}
                            >
                              #${o+1}
                            </label>
                            ${e.options.map(((i,a)=>Se`
                                <div
                                  key=${i.name}
                                  style=${{marginBottom:"8px",width:"100%"}}
                                >
                                  <${ye}
                                    offerData=${e}
                                    optionName=${i.name}
                                    optionValues=${i.values}
                                    selectedValue=${f[o]?.[i.name]||i.values[0]}
                                    onValueChange=${e=>c(o,i.name,e)}
                                    getThemeValue=${t}
                                    styles=${Ce}
                                    productVariants=${e.variants}
                                  />
                                  ${!we(e,i.name)||"color_swatch"!==e?.swatch_settings?.type&&"image_swatch"!==e?.swatch_settings?.type&&"product_image_swatch"!==e?.swatch_settings?.type?Se`
                                        <select
                                          className=${Ce.variant_select}
                                          style=${{border:`${t(e.settings,"select_border_size",1)}px solid ${t(e.settings,"select_border_color",e.settings.theme_primary_color)}`,backgroundColor:t(e.settings,"select_bg_color","#ffffff"),fontSize:t(e.settings,"product_variant_size",12),color:e.settings.product_variant_text_color,borderRadius:e.settings.select_border_radius,padding:t(e.settings,"select_border_size",0)>0?"4px 16px 4px 0":"0 16px 0 0",marginTop:"4px",display:!we(e,i.name)||"color_swatch_dropdown"!==e?.swatch_settings?.type&&"image_swatch_dropdown"!==e?.swatch_settings?.type&&"product_image_swatch_dropdown"!==e?.swatch_settings?.type?"block":"none"}}
                                          id=${`variant_select_${r}_${o}_${a}`}
                                          value=${f[o]?.[i.name]||i.values[0]}
                                          onChange=${e=>c(o,i.name,e.target.value)}
                                        >
                                          ${i.values.map((t=>{const r={...f[o],[i.name]:t},a=u(e.variants,e.options,r),n=e.variants.find((e=>String(e.id)===String(a))),s=n&&!1===n.available;return Se`
                                              <option
                                                key=${t}
                                                className=${Ce.variant_select_option}
                                                value=${t}
                                                disabled=${s}
                                                style=${{backgroundColor:e.settings.select_bg_color,color:e.settings.product_variant_text_color}}
                                              >
                                                ${t}${s?" - unavailable":""}
                                              </option>
                                            `}))}
                                        </select>
                                      `:""}
                                </div>
                              `))}
                          </div>
                        `))}
                    </div>
                  `}
                </div>
              </div>
            </div>
            ${i.enable_free_gift&&Se`
              <${H}
                active=${r===d}
                temp=${e}
                item=${i}
                styles=${Ce}
                lang=${S.lang}
                getThemeValue=${t}
                formatPrice=${s}
                shopify_domain=${z}
                admin=${C}
              />
            `}
          </div>
        `))}
      ${e?.settings?.countdown_timer?.enable&&"below"===e?.settings?.countdown_timer?.position&&x}
      ${e?.settings?.show_bottom_total_price&&Se`
        <p
          style=${{textAlign:t(e.settings,"bottom_total_price_text_align","right"),display:"flex",gap:"4px",justifyContent:"right"===t(e.settings,"bottom_total_price_text_align","right")?"flex-end":"left"===t(e.settings,"bottom_total_price_text_align","left")?"flex-start":"center"}}
        >
          <span
            style=${{fontSize:t(e.settings,"bottom_total_price_text_size",14),color:t(e.settings,"bottom_total_price_text_color","#333"),fontWeight:500}}
          >
            ${i(S.lang,e,"bottom_total_price_text")||"Total : "}
          </span>
          <span
            style=${{fontSize:t(e.settings,"bottom_total_price_size",12),color:t(e.settings,"bottom_total_price_color","#333")}}
          >
            ${s(N?N(e,r,g,b,y,w):0,_,h,e.settings?.enable_price_rounding,e.settings?.price_rounding_value)}
          </span>
        </p>
      `}
      ${Se`
        <${X} temp=${e} remove_branding=${d} />
      `}
    </div>
  `,Template3UI:({offerData:e,getThemeValue:t,getDefaultText:i,selected:r,getDefaultBarText:o,hasDiscount:a,getDiscountedPrice:n,formatPrice:s,getTotalPrice:l,handleOffer:p,handleOptionChange:c,remove_branding:d,usingCurrencyConverter:_,selectedVariants:g,currentVariantId:b,optionSelections:f,getDiscount:m,findVariantIdByOptions:u,Timer:x,remove_decimals:h,handleAddQuantity:$,handleRemoveQuantity:v,dynamicQuantities:y,selectedOffer:w,shopify_domain:z,getEachUnitPriceText:k,getSelectedBlockTotalPrice:N,admin:C=!1,...S})=>Ve`
    <div className=${Te.offer_list_wrapper}>
      ${t(e.settings,"show_title")&&Ve`
        <div className=${Te.title_container}>
          <span
            style=${{backgroundColor:t(e.settings,"title_border_color",e.settings.title_text_color),height:t(e.settings,"title_border_size",4)}}
            className=${Te.title_line}
          ></span>
          <p
            style=${{color:e.settings.title_text_color,fontSize:e.settings.title_size}}
            className=${Te.title}
          >
            ${i(S.lang,e,"title")}
          </p>
          <span
            style=${{backgroundColor:t(e.settings,"title_border_color",e.settings.title_text_color),height:t(e.settings,"title_border_size",4)}}
            className=${Te.title_line}
          ></span>
        </div>
      `}
      ${e?.settings?.countdown_timer?.enable&&"above"===e?.settings?.countdown_timer?.position&&x}
      <div
        className=${"type_3"===e.template_type?Te.offer_list_type3_wrapper:""}
      >
        ${e.bars.map(((i,d)=>Ve`
            <div
              key=${i.id}
              className=${`${Te.single_offer_container} ${r===d?Te.selected_single_offer_container:""}`}
              style=${{borderRadius:t(e.settings,"bar_border_radius",10),borderBottomLeftRadius:i.enable_free_gift?"bottom"===i.badge_position&&i.enable_badge?t(e.settings,"bar_border_radius",10):"0":t(e.settings,"bar_border_radius",10),borderBottomRightRadius:i.enable_free_gift?"bottom"===i.badge_position&&i.enable_badge?t(e.settings,"bar_border_radius",10):"0":t(e.settings,"bar_border_radius",10),backgroundColor:r===d?t(e.settings,"active_bar_bg_color","transparent"):t(e.settings,"inactive_bar_bg_color",`${e.settings.theme_primary_color}0D`),borderLeft:`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderRight:`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderTop:`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderBottom:i?.enable_free_gift?"none":`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,boxShadow:`4px 4px 4px ${t(e.settings,"inactive_bar_border_color",`${e.settings.theme_secondary_color}`)}`}}
              onClick=${()=>p(d)}
            >
              ${i.enable_free_gift&&Ve`<${H}
                active=${r===d}
                temp=${e}
                item=${i}
                styles=${Te}
                getThemeValue=${t}
                formatPrice=${s}
                lang=${S.lang}
                shopify_domain=${z}
                admin=${C}
              />`}
              <div className=${Te.top_content_wrapper}>
                ${i.enable_badge&&"bottom"!==i.badge_position&&Ve`
                  <div
                    className=${`${Te.badges_wrapper} ${(()=>{const t=!1===e.settings?.apply_badge_styling_to_all_blocks&&e.bars?.[d]?.badge_settings?.badge_type?e.bars[d].badge_settings.badge_type:e.settings?.badge_type||"Badge6";return"Badge1"===t?Te.badge1_wrapper:"Badge2"===t?Te.badge2_wrapper:"Badge3"===t?Te.badge3_wrapper:"Badge4"===t?Te.badge4_wrapper:"Badge5"===t?Te.badge5_wrapper:"Badge7"===t?Te.badge7_wrapper:"Badge8"===t?Te.badge8_wrapper:"Badge6"===t?Te.badge6_wrapper:Te.badge_wrapper})()}`}
                  >
                    <${oe}
                      text=${o(S.lang,e,"badge_text",d)}
                      badge=${!1===e.settings?.apply_badge_styling_to_all_blocks&&e.bars?.[d]?.badge_settings?.badge_type?e.bars[d].badge_settings.badge_type:e.settings?.badge_type||"Badge6"}
                      offerData=${e}
                      getThemeValue=${t}
                      lang=${S.lang}
                      width=${!1===e.settings?.apply_badge_styling_to_all_blocks&&e.bars?.[d]?.badge_settings?.badge_type?"Badge7"===e.bars[d].badge_settings.badge_type||"Badge3"===e.bars[d].badge_settings.badge_type?"100%":"Badge4"===e.bars[d].badge_settings.badge_type?"76":null:"Badge7"===e.settings?.badge_type||"Badge3"===e.settings?.badge_type?"100%":"Badge4"===e.settings?.badge_type?"76":null}
                      blockIndex=${d}
                    />
                  </div>
                `}
              </div>
              <div
                className=${Te.content_wrapper}
                style=${{marginBottom:i.enable_badge&&"bottom"!==i.badge_position?30:0}}
              >
                <div className=${Te.input_container}>
                  <${ke}
                    item=${i}
                    getThemeValue=${t}
                    styles=${Te}
                    selected=${r}
                    index=${d}
                    offerData=${e}
                    selectedVariants=${g}
                    currentVariantId=${b}
                  />
                </div>

                <div className=${Te.content_wrapper}>
                  <div className=${Te.content_container}>
                    <p
                      className=${Te.heading}
                      style=${{fontSize:e.settings.bar_title_size,color:t(e.settings,"bar_title_text_color",e.settings.primary_text_color)}}
                    >
                      ${o(S.lang,e,"heading",d)}
                    </p>
                  </div>
                  <p
                    className=${Te.discount}
                    style=${{color:t(e.settings,"subtitle_text_color","#000"),fontSize:e.settings.subtitle_size}}
                  >
                    ${o(S.lang,e,"sub_text",d)?.includes("{{discount_text}}")?o(S.lang,e,"sub_text",d).replace("{{discount_text}}",m(i,e,d,r,g,b,_)):o(S.lang,e,"sub_text",d)}
                  </p>
                  <div
                    className=${Te.right_container}
                    style=${{color:e.settings?.primary_text_color?e.settings.primary_text_color:"#000"}}
                  >
                    ${Array.isArray(e?.variants)&&!e?.settings?.include_variants&&e?.settings?.enable_quantity_selector&&r===d&&d===e?.bars?.length-1&&Ve`
                      <div className=${Te.quantity_controls}>
                        <button
                          onClick=${e=>(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),v(i.id),!1)}
                          className=${Te.quantity_button}
                          style=${{color:e.settings.theme_primary_color}}
                        >
                          −
                        </button>
                        <span
                          className=${Te.quantity_display}
                          style=${{color:e.settings.primary_text_color||"#333",fontSize:t(e.settings,"discounted_price_size",13)}}
                        >
                          ${y&&w&&y[w.id]||i.quantity}
                        </span>
                        <button
                          onClick=${e=>(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),$(i.id),!1)}
                          className=${Te.quantity_button}
                          style=${{color:e.settings.theme_primary_color}}
                        >
                          +
                        </button>
                      </div>
                    `}
                    <p
                      style=${{color:t(e.settings,"discounted_price_color",e.settings.primary_text_color),fontSize:t(e.settings,"discounted_price_size",10)}}
                      className=${Te.currency}
                    >
                      ${s(n(i,d,r,g,b,e,y,w),_,h,e.settings?.enable_price_rounding,e.settings?.price_rounding_value)}${e.settings?.show_each_unit_price&&k?k(S.lang,e):""}
                    </p>
                    ${a(i,d,r,g,b,e)&&Ve`
                      <p
                        className=${Te.offer_price}
                        style=${{color:t(e.settings,"total_price_color",e.settings.secondary_text_color),fontSize:t(e.settings,"total_price_size",10)}}
                      >
                        ${s(l(i,d,r,g,b,e),_,h,e.settings?.enable_price_rounding,e.settings?.price_rounding_value)}
                      </p>
                    `}
                    ${i.show_add_to_cart&&Ve`
                      <button
                        className=${Te.add_to_cart_button}
                        onMouseDown=${e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}}
                        onClick=${e=>(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),e.nativeEvent&&(e.nativeEvent.stopPropagation(),e.nativeEvent.stopImmediatePropagation()),S.handleAddToCartClick&&S.handleAddToCartClick(i),!1)}
                        style=${{backgroundColor:t(e.settings,"add_to_cart_button_bg_color",e.settings.theme_primary_color||"#059669"),color:t(e.settings,"add_to_cart_button_text_color","#ffffff"),fontSize:t(e.settings,"add_to_cart_button_text_size",12),border:`${t(e.settings,"add_to_cart_button_border_size",1)}px solid ${t(e.settings,"add_to_cart_button_border_color",e.settings.theme_primary_color||"#059669")}`,borderRadius:t(e.settings,"add_to_cart_button_border_radius",6),padding:`${t(e.settings,"add_to_cart_button_vertical_padding",8)}px ${t(e.settings,"add_to_cart_button_horizontal_padding",16)}px`,marginTop:"8px",width:"100%",cursor:"pointer",fontWeight:"500",transition:"all 0.2s ease"}}
                      >
                        ${o(S.lang,e,"add_to_cart_button_text",d)||"Add"}
                      </button>
                    `}
                  </div>
                  ${e?.settings?.include_variants&&Array.isArray(e?.variants)&&e?.variants?.length>1&&(e?.settings?.allow_variant_selector_single_qty||i.quantity>1)&&r===d&&Ve`
                    <div
                      className=${`${Te.selected} ${Te.variant_select_wrapper}`}
                      style=${{"--primary-color":e.settings.theme_primary_color,...i.enable_badge&&"bottom"===i.badge_position&&{paddingBottom:30}}}
                    >
                      ${Array.from({length:i.quantity}).map(((i,o)=>Ve`
                          <div
                            className=${Te.variant_select_container}
                            key=${o}
                          >
                            <label
                              className=${Te.variant_select_label}
                              htmlFor=${`variant_select_${r}_${o}`}
                              style=${{fontSize:t(e.settings,"select_label_size",12),color:t(e.settings,"select_label_color","#333333")}}
                            >
                              #${o+1}
                            </label>
                            ${e.options.map(((i,a)=>Ve`
                                <div
                                  key=${i.name}
                                  style=${{marginBottom:"8px"}}
                                >
                                  <${ye}
                                    offerData=${e}
                                    optionName=${i.name}
                                    optionValues=${i.values}
                                    selectedValue=${f[o]?.[i.name]||i.values[0]}
                                    onValueChange=${e=>c(o,i.name,e)}
                                    getThemeValue=${t}
                                    styles=${Te}
                                    productVariants=${e.variants}
                                  />
                                  ${!we(e,i.name)||"color_swatch"!==e?.swatch_settings?.type&&"image_swatch"!==e?.swatch_settings?.type&&"product_image_swatch"!==e?.swatch_settings?.type?Ve`
                                        <select
                                          className=${Te.variant_select}
                                          style=${{border:`${t(e.settings,"select_border_size",1)}px solid ${t(e.settings,"select_border_color",e.settings.theme_primary_color)}`,backgroundColor:t(e.settings,"select_bg_color","#ffffff"),fontSize:t(e.settings,"product_variant_size",12),color:e.settings.product_variant_text_color,borderRadius:e.settings.select_border_radius,padding:t(e.settings,"select_border_size",0)>0?"4px 16px 4px 0":"0 16px 0 0",marginTop:"4px",display:!we(e,i.name)||"color_swatch_dropdown"!==e?.swatch_settings?.type&&"image_swatch_dropdown"!==e?.swatch_settings?.type&&"product_image_swatch_dropdown"!==e?.swatch_settings?.type?"block":"none"}}
                                          id=${`variant_select_${r}_${o}_${a}`}
                                          value=${f[o]?.[i.name]||i.values[0]}
                                          onChange=${e=>c(o,i.name,e.target.value)}
                                        >
                                          ${i.values.map((t=>{const r={...f[o],[i.name]:t},a=u(e.variants,e.options,r),n=e.variants.find((e=>String(e.id)===String(a))),s=n&&!1===n.available;return Ve`
                                              <option
                                                key=${t}
                                                className=${Te.variant_select_option}
                                                value=${t}
                                                disabled=${s}
                                                style=${{backgroundColor:e.settings.select_bg_color,color:e.settings.product_variant_text_color}}
                                              >
                                                ${t}${s?" - unavailable":""}
                                              </option>
                                            `}))}
                                        </select>
                                      `:""}
                                </div>
                              `))}
                          </div>
                        `))}
                    </div>
                  `}
                </div>
              </div>

              <div
                className=${Te.bottom_content_wrapper}
                style=${{display:"bottom"===i.badge_position&&i.enable_badge?"flex !important":"block !important",alignContent:"bottom"===i.badge_position&&i.enable_badge?"flex-end !important":"auto"}}
              >
                ${i.enable_badge&&"bottom"===i.badge_position&&Ve`
                  <div
                    className=${Te.bottom_content}
                    style=${{color:!1===e.settings.apply_badge_styling_to_all_blocks&&e.bars?.[d]?.badge_settings?.shipping_text_color?e.bars[d].badge_settings.shipping_text_color:e.settings.shipping_text_color?e.settings.shipping_text_color:"#000",borderColor:e.settings.theme_primary_color?e.settings.theme_primary_color:"",backgroundColor:!1===e.settings.apply_badge_styling_to_all_blocks&&e.bars?.[d]?.badge_settings?.shipping_background_color?e.bars[d].badge_settings.shipping_background_color:e.settings.shipping_background_color?e.settings.shipping_background_color:e.settings.theme_primary_color,fontSize:!1===e.settings.apply_badge_styling_to_all_blocks&&e.bars?.[d]?.badge_settings?.badge_size?e.bars[d].badge_settings.badge_size+"px":e.settings.badge_size||"9px",borderBottomLeftRadius:t(e.settings,"bar_border_radius",10),borderBottomRightRadius:t(e.settings,"bar_border_radius",10)}}
                  >
                    ${o(S.lang,e,"badge_text",d)}
                  </div>
                `}
              </div>
            </div>
          `))}
      </div>
      ${e?.settings?.countdown_timer?.enable&&"below"===e?.settings?.countdown_timer?.position&&x}
      ${e?.settings?.show_bottom_total_price&&Ve`
        <p
          style=${{textAlign:t(e.settings,"bottom_total_price_text_align","right"),display:"flex",gap:"4px",justifyContent:"right"===t(e.settings,"bottom_total_price_text_align","right")?"flex-end":"left"===t(e.settings,"bottom_total_price_text_align","left")?"flex-start":"center"}}
        >
          <span
            style=${{fontSize:t(e.settings,"bottom_total_price_text_size",14),color:t(e.settings,"bottom_total_price_text_color","#333"),fontWeight:500}}
          >
            ${i(S.lang,e,"bottom_total_price_text")||"Total : "}
          </span>
          <span
            style=${{fontSize:t(e.settings,"bottom_total_price_size",12),color:t(e.settings,"bottom_total_price_color","#333")}}
          >
            ${s(N?N(e,r,g,b,y,w):0,_,h,e.settings?.enable_price_rounding,e.settings?.price_rounding_value)}
          </span>
        </p>
      `}
      <div
        style=${{paddingTop:e.bars.some((e=>e.enable_free_gift))?"60px":"0"}}
      >
        <${X} temp=${e} remove_branding=${d} />
      </div>
    </div>
  `,Template4UI:({offerData:e,getThemeValue:t,getDefaultText:i,selected:r,getDefaultBarText:o,hasDiscount:a,getDiscountedPrice:n,formatPrice:s,getTotalPrice:l,handleOffer:p,handleOptionChange:c,remove_branding:d,usingCurrencyConverter:_,selectedVariants:g,currentVariantId:b,optionSelections:f,getDiscount:m,findVariantIdByOptions:u,remove_decimals:x,Timer:h,handleAddQuantity:$,handleRemoveQuantity:v,dynamicQuantities:y,selectedOffer:w,shopify_domain:z,getEachUnitPriceText:k,getSelectedBlockTotalPrice:N,admin:C=!1,...S})=>{const T=(e,i)=>{let r=t(i?.settings,"bar_vertical_padding",10);return e.enable_badge&&("Badge7"===i.settings?.badge_type&&(r=Math.max(r,30)),"Badge5"===i.settings?.badge_type&&(r=Math.max(r,25)),"Badge3"===i.settings?.badge_type&&(r=Math.max(r,20)),"Badge2"===i.settings?.badge_type&&(r=Math.max(r,22)),"Badge1"===i.settings?.badge_type&&(r=Math.max(r,20)),"Badge6"===i.settings?.badge_type&&(r=Math.max(r,18))),r};return Pe`
    <div className=${De.offer_list_wrapper}>
      ${t(e.settings,"show_title")&&Pe`
        <div className=${De.title_container}>
          <span
            style=${{backgroundColor:t(e.settings,"title_border_color",e.settings.title_text_color),height:t(e.settings,"title_border_size",4)}}
            className=${De.title_line}
          ></span>
          <p
            style=${{color:e.settings.title_text_color,fontSize:e.settings.title_size}}
            className=${De.title}
          >
            ${i(S.lang,e,"title")}
          </p>
          <span
            style=${{backgroundColor:t(e.settings,"title_border_color",e.settings.title_text_color),height:t(e.settings,"title_border_size",4)}}
            className=${De.title_line}
          ></span>
        </div>
      `}
      ${e?.settings?.countdown_timer?.enable&&"above"===e?.settings?.countdown_timer?.position&&h}
      <div
        className=${"type_3"===e.settings.type?De.offer_list_type3_wrapper:""}
      >
        ${e.bars.map(((i,d)=>Pe`
            <div>
              <div
                key=${i.id}
                className=${`${De.single_offer_container} ${r===d?De.selected_single_offer_container:""}`}
                style=${{padding:`${T(i,e)}px ${t(e?.settings,"bar_horizontal_padding",8)}px ${T(i,e)}px ${t(e?.settings,"bar_horizontal_padding",8)}px`,marginBottom:i.enable_free_gift?0:"10px",borderRadius:t(e.settings,"bar_border_radius",10),borderBottomLeftRadius:i.enable_free_gift?"0":t(e.settings,"bar_border_radius",10),borderBottomRightRadius:i.enable_free_gift?"0":t(e.settings,"bar_border_radius",10),backgroundColor:r===d?t(e.settings,"active_bar_bg_color","transparent"):t(e.settings,"inactive_bar_bg_color",`${e.settings.theme_primary_color}0D`),borderLeft:`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderRight:`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderTop:`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderBottom:i?.enable_free_gift?"none":`${t(e.settings,r===d?"active_bar_border_size":"inactive_bar_border_size",1)}px solid ${r===d?t(e.settings,"active_bar_border_color",e.settings.theme_primary_color):t(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,marginTop:i.enable_badge?"25px":""}}
                onClick=${()=>p(d)}
              >
                <div className=${De.offer_inner_container}>
                  ${i.enable_badge&&Pe`
                    <div
                      className=${(()=>{const t=!1===e.settings?.apply_badge_styling_to_all_blocks&&e.bars?.[d]?.badge_settings?.badge_type?e.bars[d].badge_settings.badge_type:e.settings?.badge_type||"Badge6";return"Badge2"===t?De.badge2_wrapper:"Badge3"===t?De.badge3_wrapper:"Badge5"===t?De.badge5_wrapper:"Badge7"===t?De.badge7_wrapper:"Badge8"===t?De.badge8_wrapper:De.badge_wrapper})()}
                    >
                      <${oe}
                        text=${o(S.lang,e,"badge_text",d)}
                        badge=${!1===e.settings?.apply_badge_styling_to_all_blocks&&e.bars?.[d]?.badge_settings?.badge_type?e.bars[d].badge_settings.badge_type:e.settings?.badge_type||"Badge6"}
                        offerData=${e}
                        getThemeValue=${t}
                        lang=${S.lang}
                        blockIndex=${d}
                      />
                    </div>
                  `}
                  <div>
                    ${i?.product_image&&"no_image"!==t(i?.product_image,"mode","no_image")?Pe`
                          ${"upload_image"===i?.product_image?.mode?Pe`
                                ${i?.product_image?.image_url&&Pe`
                                  <img
                                    src=${i?.product_image?.image_url||""}
                                    alt=${i?.heading}
                                    width=${i?.product_image?.image_size}
                                    height=${i?.product_image?.image_size}
                                    style=${{borderRadius:`${i?.product_image?.image_border_radius}px`}}
                                  />
                                `}
                              `:Pe`
                                <img
                                  src=${i?.product_image?.variant_image_url||i?.product_image?.image_url}
                                  alt=${i?.heading}
                                  width=${t(i.product_image,"image_size",20)}
                                  height=${t(i?.product_image,"image_size",20)}
                                  style=${{borderRadius:`${t(i?.product_image,"image_border_radius",5)}px`}}
                                />
                              `}
                        `:Pe`
                          <input
                            type="radio"
                            id=${i.heading}
                            name="offer"
                            checked=${r===d}
                            readonly
                            className=${De.check_input}
                            style=${{border:`${t(e.settings,"radio_border_size",2)}px solid ${t(e.settings,"radio_border_color","#ffffff")}`,backgroundColor:r===d?t(e.settings,"active_radio_bg_color",e.settings.theme_primary_color):t(e.settings,"inactive_radio_bg_color","#fff"),boxShadow:r===d?`0 0 2px ${e.settings.theme_primary_color}`:`0 0 2px ${e.settings.theme_primary_color}4D`}}
                          />
                        `}
                  </div>

                  <div className=${De.content_wrapper}>
                    <div className=${De.content_container}>
                      <div className=${De.heading_container}>
                        <div className=${De.heading_inner_container}>
                          <p
                            className=${De.heading}
                            style=${{fontSize:e.settings.bar_title_size,color:t(e.settings,"bar_title_text_color",e.settings.primary_text_color)}}
                          >
                            ${o(S.lang,e,"heading",d)}
                          </p>
                          <p
                            className=${De.discount}
                            style=${{color:t(e.settings,"subtitle_text_color","#000"),fontSize:e.settings.subtitle_size}}
                          >
                            ${o(S.lang,e,"sub_text",d)?.includes("{{discount_text}}")?o(S.lang,e,"sub_text",d).replace("{{discount_text}}",m(i,e,d,r,g,b,_)):o(S.lang,e,"sub_text",d)}
                          </p>
                        </div>
                        <div
                          className=${De.right_container}
                          style=${{color:e.settings?.primary_text_color?e.settings.primary_text_color:"#000"}}
                        >
                          <span
                            style=${{color:t(e.settings,"discounted_price_color",e.settings.primary_text_color),fontSize:t(e.settings,"discounted_price_size",13)}}
                            className=${`${De.currency} money`}
                          >
                            ${s(n(i,d,r,g,b,e,y,w),_,x,e.settings?.enable_price_rounding,e.settings?.price_rounding_value)}${e.settings?.show_each_unit_price&&k?k(S.lang,e):""}
                          </span>
                          ${a(i,d,r,g,b,e)&&Pe`
                            <span
                              className=${`${De.offer_price} money`}
                              style=${{color:t(e.settings,"total_price_color",e.settings.secondary_text_color),fontSize:t(e.settings,"total_price_size",10)}}
                            >
                              ${s(l(i,d,r,g,b,e),_,x,e.settings?.enable_price_rounding,e.settings?.price_rounding_value)}
                            </span>
                          `}
                          ${i.show_add_to_cart&&Pe`
                            <button
                              className=${De.add_to_cart_button}
                              onMouseDown=${e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}}
                              onClick=${e=>(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),e.nativeEvent&&(e.nativeEvent.stopPropagation(),e.nativeEvent.stopImmediatePropagation()),S.handleAddToCartClick&&S.handleAddToCartClick(i),!1)}
                              style=${{backgroundColor:t(e.settings,"add_to_cart_button_bg_color",e.settings.theme_primary_color||"#059669"),color:t(e.settings,"add_to_cart_button_text_color","#ffffff"),fontSize:t(e.settings,"add_to_cart_button_text_size",12),border:`${t(e.settings,"add_to_cart_button_border_size",1)}px solid ${t(e.settings,"add_to_cart_button_border_color",e.settings.theme_primary_color||"#059669")}`,borderRadius:t(e.settings,"add_to_cart_button_border_radius",6),padding:`${t(e.settings,"add_to_cart_button_vertical_padding",8)}px ${t(e.settings,"add_to_cart_button_horizontal_padding",16)}px`,marginTop:"8px",width:"100%",cursor:"pointer",fontWeight:"500",transition:"all 0.2s ease"}}
                            >
                              ${o(S.lang,e,"add_to_cart_button_text",d)||"Add"}
                            </button>
                          `}
                          ${Array.isArray(e?.variants)&&!e?.settings?.include_variants&&e?.settings?.enable_quantity_selector&&r===d&&d===e?.bars?.length-1&&Pe`
                            <div className=${De.quantity_controls}>
                              <button
                                onClick=${e=>(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),v(i.id),!1)}
                                className=${De.quantity_button}
                                style=${{color:e.settings.theme_primary_color}}
                              >
                                −
                              </button>
                              <span
                                className=${De.quantity_display}
                                style=${{color:e.settings.primary_text_color||"#333",fontSize:t(e.settings,"discounted_price_size",10)}}
                              >
                                ${y&&w&&y[w.id]||i.quantity}
                              </span>
                              <button
                                onClick=${e=>(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),$(i.id),!1)}
                                className=${De.quantity_button}
                                style=${{color:e.settings.theme_primary_color}}
                              >
                                +
                              </button>
                            </div>
                          `}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ${e?.settings?.include_variants&&Array.isArray(e?.variants)&&e?.variants?.length>1&&(e?.settings?.allow_variant_selector_single_qty||i.quantity>1)&&r===d&&Pe`
                  <div
                    className=${`${De.selected} ${De.variant_select_wrapper}`}
                    style=${{"--primary-color":e.settings.theme_primary_color}}
                  >
                    ${Array.from({length:i.quantity}).map(((i,o)=>Pe`
                        <div
                          className=${De.variant_select_container}
                          key=${o}
                        >
                          <label
                            className=${De.variant_select_label}
                            htmlFor=${`variant_select_${r}_${o}`}
                            style=${{fontSize:t(e.settings,"select_label_size",12),color:t(e.settings,"select_label_color","#333333")}}
                          >
                            #${o+1}
                          </label>
                          ${e.options.map(((i,a)=>Pe`
                              <div
                                key=${i.name}
                                style=${{marginBottom:"8px",width:"100%"}}
                              >
                                <${ye}
                                  offerData=${e}
                                  optionName=${i.name}
                                  optionValues=${i.values}
                                  selectedValue=${f[o]?.[i.name]||i.values[0]}
                                  onValueChange=${e=>c(o,i.name,e)}
                                  getThemeValue=${t}
                                  styles=${De}
                                  productVariants=${e.variants}
                                />
                                ${!we(e,i.name)||"color_swatch"!==e?.swatch_settings?.type&&"image_swatch"!==e?.swatch_settings?.type&&"product_image_swatch"!==e?.swatch_settings?.type?Pe`
                                      <select
                                        className=${De.variant_select}
                                        style=${{border:`${t(e.settings,"select_border_size",1)}px solid ${t(e.settings,"select_border_color",e.settings.theme_primary_color)}`,backgroundColor:t(e.settings,"select_bg_color","#ffffff"),fontSize:t(e.settings,"product_variant_size",12),color:e.settings.product_variant_text_color,borderRadius:e.settings.select_border_radius,padding:t(e.settings,"select_border_size",0)>0?"4px 16px 4px 0":"0 16px 0 0",marginTop:"4px",display:!we(e,i.name)||"color_swatch_dropdown"!==e?.swatch_settings?.type&&"image_swatch_dropdown"!==e?.swatch_settings?.type&&"product_image_swatch_dropdown"!==e?.swatch_settings?.type?"block":"none"}}
                                        id=${`variant_select_${r}_${o}_${a}`}
                                        value=${f[o]?.[i.name]||i.values[0]}
                                        onChange=${e=>c(o,i.name,e.target.value)}
                                      >
                                        ${i.values.map((t=>{const r={...f[o],[i.name]:t},a=u(e.variants,e.options,r),n=e.variants.find((e=>String(e.id)===String(a))),s=n&&!1===n.available;return Pe`
                                            <option
                                              key=${t}
                                              className=${De.variant_select_option}
                                              value=${t}
                                              disabled=${s}
                                              style=${{backgroundColor:e.settings.select_bg_color,color:e.settings.product_variant_text_color}}
                                            >
                                              ${t}${s?" - unavailable":""}
                                            </option>
                                          `}))}
                                      </select>
                                    `:""}
                              </div>
                            `))}
                        </div>
                      `))}
                  </div>
                `}
              </div>
              ${i.enable_free_gift&&Pe`
                <${H}
                  active=${r===d}
                  temp=${e}
                  item=${i}
                  styles=${De}
                  lang=${S.lang}
                  getThemeValue=${t}
                  formatPrice=${s}
                  shopify_domain=${z}
                  admin=${C}
                />
              `}
            </div>
          `))}
      </div>
      ${e?.settings?.countdown_timer?.enable&&"below"===e?.settings?.countdown_timer?.position&&h}
      ${e?.settings?.show_bottom_total_price&&Pe`
        <p
          style=${{textAlign:t(e.settings,"bottom_total_price_text_align","right"),display:"flex",gap:"4px",justifyContent:"right"===t(e.settings,"bottom_total_price_text_align","right")?"flex-end":"left"===t(e.settings,"bottom_total_price_text_align","left")?"flex-start":"center"}}
        >
          <span
            style=${{fontSize:t(e.settings,"bottom_total_price_text_size",14),color:t(e.settings,"bottom_total_price_text_color","#333"),fontWeight:500}}
          >
            ${i(S.lang,e,"bottom_total_price_text")||"Total : "}
          </span>
          <span
            style=${{fontSize:t(e.settings,"bottom_total_price_size",12),color:t(e.settings,"bottom_total_price_color","#333")}}
          >
            ${s(N?N(e,r,g,b,y,w):0,_,x,e.settings?.enable_price_rounding,e.settings?.price_rounding_value)}
          </span>
        </p>
      `}
      ${Pe`<${X}
        temp=${e}
        remove_branding=${d}
      />`}
    </div>
  `},BTemplate1UI:({offerData:e,getThemeValue:t,getDefaultText:i,formatPrice:r,getTotalPrice:o,getDiscountedPrice:a,handleSelection:n,handleVariantChange:s,isCheckboxDisabled:l,selectedProducts:p,selectedVariants:c,addToCart:d,Timer:_,remove_branding:g,getVariantPrice:b,usingCurrencyConverter:f,remove_decimals:m,shopify_domain:u,admin:x=!1,getDiscount:h,hasDiscount:$,...v})=>je`
    <div
      className=${Re.bundlesContainer}
      style=${{border:`${t(e.settings,"outer_border_size",1)}px solid ${e.settings.outer_border_color?e.settings.outer_border_color:e.settings.theme_primary_color}`,padding:`${t(e.settings,"outer_padding",16)}px`,borderRadius:`${t(e.settings,"outer_border_radius",16)}px`}}
    >
      <div className=${Re.offer_wrapper}>
        <div className=${Re.title_container}>
          <p
            style=${{color:e.settings.title_text_color,fontSize:e.settings.title_size}}
            className=${Re.title}
          >
            ${i(v.lang,e,"title")}
          </p>
        </div>
        ${e?.settings?.countdown_timer?.enable&&"above"===e?.settings?.countdown_timer?.position&&_}
        ${e.bundle_products&&e.bundle_products.length>0?je`
              <div className=${Re.offer_list_wrapper}>
                <div className=${Re.offer_list_container}>
                  ${e.bundle_products.map(((i,o)=>je`
                      <div
                        style=${{borderRadius:`${t(e.settings,"bar_border_radius",10)}px`,border:`${t(e.settings,"bar_border_size",1)}px solid ${e.settings.bar_border_color?e.settings.bar_border_color:`${e.settings.theme_primary_color}33`}`,backgroundColor:`${e.settings.bar_bg_color?e.settings.bar_bg_color:`${e.settings.theme_primary_color}0D`}`,padding:`${t(e.settings,"bar_vertical_padding",16)}px ${t(e.settings,"bar_horizontal_padding",16)}px`}}
                        className=${`${Re.item_container} ${e?.settings?.include_variants&&i.variants.length>1?Re.item_container_auto:""}`}
                      >
                        <div className=${Re.left_container}>
                          ${e.settings.allow_selection&&je`
                            <div className=${Re.selection_container}>
                              <input
                                type="checkbox"
                                checked=${p[i.id]||!1}
                                onChange=${e=>n(i.id,e)}
                                disabled=${l(i.id,p,e)}
                                style=${{accentColor:e.settings.checkbox_bg_color?e.settings.checkbox_bg_color:e.settings.theme_primary_color,cursor:"pointer"}}
                              />
                            </div>
                          `}
                          ${i.image&&je`
                            <a
                              target=${x?"_blank":"_self"}
                              href=${`https://${u}/products/${i.handle}`}
                              rel="noopener noreferrer"
                              className=${Re.image_container}
                            >
                              <img src=${i.image} width=${42} height=${42} />
                            </a>
                          `}
                          <div className=${Re.left_content_container}>
                            <div
                              className=${Re.title_and_variants_container}
                            >
                              <a
                                target=${x?"_blank":"_self"}
                                href=${`https://${u}/products/${i.handle}`}
                                style=${{fontSize:e.settings.product_title_size,color:e.settings.product_title_text_color?e.settings.product_title_text_color:"#000"}}
                                className=${Re.product_title}
                              >
                                ${i.title?.replace(" - Default Title","")}
                              </a>
                              ${!e?.settings?.include_variants||i.variants.length<=1?je`
                                    <div className=${Re.quantity_container}>
                                      <p
                                        style=${{fontSize:t(e.settings,"quantity_text_size",e.settings.subtitle_size),color:e.settings.quantity_text_color?e.settings.quantity_text_color:e.settings.secondary_text_color}}
                                        className=${Re.quantity}
                                      >
                                        x${i.quantity}
                                      </p>
                                    </div>
                                  `:""}
                              ${e?.settings?.include_variants&&i.variants.length>1&&je`
                                <div
                                  className=${`${Re.selected} ${Re.variant_select_wrapper}`}
                                  style=${{"--primary-color":e.settings.theme_primary_color}}
                                >
                                  ${Array.from({length:i.quantity}).map(((r,a)=>je`
                                      <div
                                        className=${Re.variant_select_container}
                                        key=${a}
                                      >
                                        <label
                                          className=${Re.variant_select_label}
                                          htmlFor=${`variant_select_${o}_${a}`}
                                        >
                                          #${a+1}
                                        </label>
                                        <select
                                          className=${Re.variant_select}
                                          style=${{border:`${t(e.settings,"select_border_size",1)}px solid ${e.settings.select_border_color?e.settings.select_border_color:e.settings.theme_primary_color}`,backgroundColor:e.settings.select_bg_color,fontSize:e.settings.product_variant_size,color:e.settings.product_variant_text_color,borderRadius:e.settings.select_border_radius,padding:t(e.settings,"select_border_size",0)>0?"4px 16px 4px 0":"0 16px 0 0"}}
                                          id=${`variant_select_${o}_${a}`}
                                          value=${String(c[`${o}-${a}`]||i.variants[0].id)}
                                          onChange=${e=>s(o,a,e.target.value)}
                                        >
                                          ${i.variants.map((t=>je`
                                              <option
                                                key=${t.id}
                                                className=${Re.variant_select_option}
                                                value=${String(t.id)}
                                                style=${{backgroundColor:e.settings.select_bg_color,color:e.settings.product_variant_text_color}}
                                              >
                                                ${t.title.replace(i.title,"")}
                                              </option>
                                            `))}
                                        </select>
                                      </div>
                                    `))}
                                </div>
                              `}
                            </div>
                          </div>
                        </div>
                        <div className=${Re.right_container}>
                          <p
                            style=${{fontSize:e.settings.price_text_size,color:e.settings.price_text_color?e.settings.price_text_color:e.settings.primary_text_color}}
                            className=${Re.price}
                          >
                            ${e.settings.include_variants&&i.variants.length>1?r(Array.from({length:i.quantity}).reduce(((e,t,r)=>e+b(i,r,o)),0),f,m):"gid://shopify/ProductVariant/54304486490438"===i.id?"FREE":r(Number(i.price)*Number(i.quantity),f,m)}
                          </p>
                        </div>
                      </div>
                      ${o!==e.bundle_products.length-1&&je`
                        <div className=${Re.plus_container}>
                          <div
                            style=${{backgroundColor:e.settings.connector_bg_color?e.settings.connector_bg_color:e.settings.theme_secondary_color,color:e.settings.connector_color?e.settings.connector_color:e.settings.theme_primary_color,fontSize:`${t(e.settings,"connector_size",16)}px`,borderRadius:`${t(e.settings,"connector_border_radius",0)}px`}}
                            className=${Re.plus}
                          >
                            +
                          </div>
                        </div>
                      `}
                    `))}
                  ${e.settings.enable_free_gift&&je`
                    <${qe}
                      temp=${e}
                      styles=${Re}
                      showPlus=${!0}
                      getThemeValue=${t}
                      formatPrice=${r}
                      usingCurrencyConverter=${f}
                      remove_decimals=${m}
                      shopify_domain=${u}
                      admin=${x}
                    />
                  `}
                </div>
              </div>
            `:je`
              <div className=${Re.offer_list_wrapper}>
                <div className=${Re.offer_list_container}>
                  ${new Array(2).fill(null).map(((i,r)=>je`
                      <div
                        style=${{borderRadius:`${t(e.settings,"bar_border_radius",10)}px`,border:`${t(e.settings,"bar_border_size",1)}px solid ${e.settings.bar_border_color?e.settings.bar_border_color:`${e.settings.theme_primary_color}33`}`,backgroundColor:`${e.settings.bar_bg_color?e.settings.bar_bg_color:`${e.settings.theme_primary_color}0D`}`,padding:`${t(e.settings,"bar_vertical_padding",16)}px ${t(e.settings,"bar_horizontal_padding",16)}px`}}
                        className=${`${Re.item_container} ${e.settings.include_variants?Re.item_container_auto:""}`}
                      >
                        <div className=${Re.left_container}>
                          ${e.settings.allow_selection&&je`
                            <div className=${Re.selection_container}>
                              <input
                                type="checkbox"
                                value=${r}
                                onChange=${e=>n(r,e)}
                                style=${{accentColor:e.settings.checkbox_bg_color?e.settings.checkbox_bg_color:e.settings.theme_primary_color,cursor:"pointer",border:`${t(e.settings,"checkbox_border_size",0)}px solid ${e.settings.checkbox_border_color?e.settings.checkbox_border_color:"transparent"}`}}
                              />
                            </div>
                          `}
                          <div className=${Re.image_container}>
                            <img
                              src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?v=1530129458"
                              width=${42}
                              height=${42}
                            />
                          </div>
                          <div className=${Re.left_content_container}>
                            <p
                              style=${{fontSize:e.settings.product_title_size,color:e.settings.product_title_text_color}}
                              className=${Re.title}
                            >
                              Product Title
                            </p>
                            <div className=${Re.quantity_container}>
                              <p
                                style=${{fontSize:t(e.settings,"quantity_text_size",e.settings.subtitle_size),color:e.settings.quantity_text_color?e.settings.quantity_text_color:t(e.settings,"quantity_text_color",e.settings.secondary_text_color)}}
                                className=${Re.quantity}
                              >
                                x1
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className=${Re.right_container}>
                          <p
                            style=${{color:e.settings.primary_text_color,fontSize:e.settings.price_text_size,color:e.settings.price_text_color}}
                            className=${Re.price}
                          >
                            ${e.settings.currency} 400
                          </p>
                        </div>
                      </div>
                      ${r<1&&je`
                        <div className=${Re.plus_container}>
                          <div
                            style=${{backgroundColor:e.settings.connector_bg_color?e.settings.connector_bg_color:e.settings.theme_secondary_color,color:e.settings.connector_color?e.settings.connector_color:e.settings.theme_primary_color,fontSize:`${e.settings.connector_size?e.settings.connector_size:16}px`,borderRadius:`${e.settings.connector_border_radius?e.settings.connector_border_radius:0}px`}}
                            className=${Re.plus}
                          >
                            +
                          </div>
                        </div>
                      `}
                    `))}
                  ${e.settings.enable_free_gift&&je`
                    <${qe}
                      temp=${e}
                      styles=${Re}
                      showPlus=${!0}
                      getThemeValue=${t}
                      formatPrice=${r}
                      usingCurrencyConverter=${f}
                      remove_decimals=${m}
                      admin=${x}
                      shopify_domain=${u}
                    />
                  `}
                </div>
              </div>
            `}
        <div className=${Re.footer_wrapper}>
          <div
            style=${{backgroundColor:`${e.settings.footer_bg_color?e.settings.footer_bg_color:e.settings.theme_secondary_color}`,border:`${t(e.settings,"footer_border_size",0)}px solid ${e.settings.footer_border_color?e.settings.footer_border_color:e.settings.theme_primary_color}`,borderRadius:`${t(e.settings,"footer_border_radius",10)}px`}}
            className=${Re.footer_container}
          >
            ${e.settings.enable_badge&&je`
              <div className=${Re.popular_tag_container}>
                <div
                  className=${Re.popular_tag}
                  style=${{backgroundColor:`${e.settings.badge_bg_color?e.settings.badge_bg_color:e.settings.theme_primary_color}`,border:`${t(e.settings,"badge_border_size",0)}px solid ${e.settings.badge_border_color?e.settings.badge_border_color:"none"}`,borderRadius:`${t(e.settings,"badge_border_radius",5)}px`}}
                >
                  <p
                    style=${{color:e.settings.popular_text_color,fontSize:`${t(e.settings,"popular_text_size",10)}px`}}
                  >
                    ${i(v.lang,e,"badge_text")}
                  </p>
                </div>
              </div>
            `}
            <div className=${Re.left_container}>
              <p
                style=${{fontSize:`${t(e.settings,"footer_text_size",14)}px`,color:e.settings.footer_text_color?e.settings.footer_text_color:"#000"}}
                className=${Re.footer_text}
              >
                ${i(v.lang,e,"footer_text")}
              </p>
              ${$(e?.bundle_products)&&je`
                <p
                  className=${Re.discount}
                  style=${{color:e.settings?.discount_text_color?e.settings.discount_text_color:"#000",backgroundColor:e.settings.discount_background_color?e.settings.discount_background_color:`${e.settings?.theme_primary_color}66`,fontSize:e.settings.subtitle_size}}
                >
                  -
                  ${h(e.bundle_products,e,f,m)}
                </p>
              `}
            </div>

            <div className=${Re.right_container}>
              <span
                className=${Re.currency}
                style=${{color:e.settings.discount_text_color,fontSize:e.settings.discount_text_size}}
              >
                ${e.bundle_products&&e.bundle_products.length>0?r(a(e.bundle_products),f,m,"fixed_amount"!==e.settings?.discount_type&&e.settings?.enable_price_rounding,"fixed_amount"!==e.settings?.discount_type?e.settings?.price_rounding_value:null):r(500,f,m)}
              </span>
              ${$(e.bundle_products)&&je`
                <p
                  className=${Re.offer_price}
                  style=${{color:e.settings.total_price_text_color?e.settings.total_price_text_color:e.settings.secondary_text_color,fontSize:e.settings.total_price_text_size}}
                >
                  ${e.bundle_products&&e.bundle_products.length>0?r(o(e.bundle_products),f,m):r(700,f,m)}
                </p>
              `}
            </div>
          </div>
        </div>
        <div className=${Re.cta_wrapper}>
          <div
            style=${{backgroundColor:e.settings.btn_bg_color?e.settings.btn_bg_color:"#fff",color:"#fff"!==e.settings.btn_text_color&&e.settings.btn_bg_color?e.settings.btn_text_color:e.settings.theme_primary_color,fontSize:e.settings.btn_size,border:`${t(e.settings,"btn_border_size",1)}px solid ${e.settings.btn_border_color?e.settings.btn_border_color:e.settings.theme_primary_color}`,borderRadius:`${t(e.settings,"btn_border_radius",5)}px`}}
            className=${Re.cta_btn}
            onClick=${d}
          >
            ${i(v.lang,e,"button_text")}
          </div>
        </div>
      </div>
      ${e?.settings?.countdown_timer?.enable&&"below"===e?.settings?.countdown_timer?.position&&je`
        <div
          style=${{paddingTop:e.bars.some((e=>e.enable_free_gift))?"60px":"0"}}
        >
          ${_}
        </div>
      `}
      <${X}
        temp=${e}
        isBundle=${!0}
        remove_branding=${g}
      />
    </div>
  `,BTemplate2UI:({offerData:e,getThemeValue:t,getDefaultText:i,formatPrice:r,getTotalPrice:o,getDiscountedPrice:a,handleSelection:n,handleVariantChange:s,isCheckboxDisabled:l,selectedProducts:p,selectedVariants:c,addToCart:d,Timer:_,remove_branding:g,getVariantPrice:b,usingCurrencyConverter:f,remove_decimals:m,admin:u=!1,shopify_domain:x,getDiscount:h,hasDiscount:$,...v})=>{const y=[{id:1,title:"Variant 1"},{id:2,title:"Variant 2"},{id:3,title:"Variant 3"}];return Ae`
    <div
      className=${Ie.bundlesContainer}
      style=${{border:`${t(e.settings,"outer_border_size",1)}px solid ${e.settings.outer_border_color?e.settings.outer_border_color:e.settings.theme_primary_color}`,padding:`${t(e.settings,"outer_padding",16)}px`,borderRadius:`${t(e.settings,"outer_border_radius",16)}px`}}
    >
      <div className=${Ie.offer_wrapper}>
        <div className=${Ie.title_container}>
          <p
            style=${{color:e.settings.title_text_color,fontSize:e.settings.title_size}}
            className=${Ie.title}
          >
            ${i(v.lang,e,"title")}
          </p>
        </div>
        ${e?.settings?.countdown_timer?.enable&&"above"===e?.settings?.countdown_timer?.position&&_}
        ${e.bundle_products&&e.bundle_products.length>0?Ae`
              <div className=${Ie.offer_list_wrapper}>
                <div className=${Ie.offer_list_container}>
                  ${e.bundle_products.map(((i,o)=>Ae`
                      <div
                        style=${{borderRadius:`${t(e.settings,"bar_border_radius",10)}px`,border:`${t(e.settings,"bar_border_size",1)}px solid ${e.settings.bar_border_color?e.settings.bar_border_color:`${e.settings.theme_primary_color}33`}`,backgroundColor:`${e.settings.bar_bg_color?e.settings.bar_bg_color:`${e.settings.theme_primary_color}0D`}`,padding:`${t(e?.settings,"bar_vertical_padding",12)}px ${t(e?.settings,"bar_horizontal_padding",16)}px`}}
                        className=${`${Ie.item_container} ${e?.settings?.include_variants&&i.variants.length>1?Ie.item_container_auto:""}`}
                      >
                        <div className=${Ie.left_container}>
                          ${e.settings.allow_selection&&Ae`
                            <div className=${Ie.selection_container}>
                              <input
                                type="checkbox"
                                checked=${p[i.id]||!1}
                                onChange=${e=>n(i.id,e)}
                                disabled=${l(i.id,p,e)}
                                style=${{accentColor:e.settings.checkbox_bg_color?e.settings.checkbox_bg_color:e.settings.theme_primary_color,cursor:"pointer"}}
                              />
                            </div>
                          `}
                          ${i.image&&Ae`
                            <a
                              target=${u?"_blank":"_self"}
                              href=${`https://${x}/products/${i.handle}`}
                              className=${Ie.image_container}
                            >
                              <img src=${i.image} width=${42} height=${42} />
                            </a>
                          `}
                          <div className=${Ie.left_content_container}>
                            <a
                              target=${u?"_blank":"_self"}
                              href=${`https://${x}/products/${i.handle}`}
                              style=${{fontSize:e.settings.product_title_size,color:e.settings.product_title_text_color?e.settings.product_title_text_color:"#000"}}
                              className=${Ie.product_title}
                            >
                              ${i.title?.replace(" - Default Title","")}
                            </a>
                            <div className=${Ie.quantity_container}>
                              ${e?.settings?.include_variants&&i.variants.length>1&&Ae`
                                <div
                                  className=${`${Ie.selected} ${Ie.variant_select_wrapper}`}
                                  style=${{"--primary-color":e.settings.theme_primary_color}}
                                >
                                  ${Array.from({length:i.quantity}).map(((r,a)=>Ae`
                                      <div
                                        className=${Ie.variant_select_container}
                                        key=${a}
                                      >
                                        <select
                                          className=${Ie.variant_select}
                                          style=${{border:`${t(e.settings,"select_border_size",1)}px solid ${e.settings.select_border_color?e.settings.select_border_color:e.settings.theme_primary_color}`,backgroundColor:e.settings.select_bg_color,fontSize:e.settings.product_variant_size,color:e.settings.product_variant_text_color,borderRadius:e.settings.select_border_radius,padding:t(e.settings,"select_border_size",0)>0?"4px 16px 4px 0":"0 16px 0 0"}}
                                          id=${`variant_select_${o}_${a}`}
                                          value=${String(c[`${o}-${a}`]||i.variants[0].id)}
                                          onChange=${e=>s(o,a,e.target.value)}
                                        >
                                          ${i.variants.map((t=>Ae`
                                              <option
                                                key=${t.id}
                                                className=${Ie.variant_select_option}
                                                value=${String(t.id)}
                                                style=${{backgroundColor:e.settings.select_bg_color,color:e.settings.product_variant_text_color}}
                                              >
                                                ${t.title.replace(i.title,"")}
                                              </option>
                                            `))}
                                        </select>
                                      </div>
                                    `))}
                                </div>
                              `}
                            </div>
                            <div className=${Ie.right_container}>
                              <p
                                style=${{fontSize:e.settings.price_text_size,color:e.settings.price_text_color?e.settings.price_text_color:e.settings.primary_text_color}}
                                className=${Ie.price}
                              >
                                ${e.settings.include_variants&&i.variants.length>1?r(Array.from({length:i.quantity}).reduce(((e,t,r)=>e+b(i,r,o)),0),f,m):r(parseFloat(i.price)*parseFloat(i.quantity),f,m)}
                              </p>
                              <p
                                style=${{fontSize:t(e.settings,"quantity_text_size",e.settings.subtitle_size),color:e.settings.quantity_text_color?e.settings.quantity_text_color:e.settings.secondary_text_color}}
                                className=${Ie.quantity}
                              >
                                x${i.quantity}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    `))}
                  ${e.settings.enable_free_gift&&Ae`
                    <${qe}
                      temp=${e}
                      styles=${Ie}
                      showPlus=${!0}
                      getThemeValue=${t}
                      formatPrice=${r}
                      usingCurrencyConverter=${f}
                      remove_decimals=${m}
                      shopify_domain=${x}
                      admin=${u}
                    />
                  `}
                </div>
              </div>
            `:Ae`
              <div className=${Ie.offer_list_wrapper}>
                <div className=${Ie.offer_list_container}>
                  ${new Array(3).fill(null).map(((i,r)=>Ae`
                      <div
                        style=${{borderRadius:`${t(e.settings,"bar_border_radius",10)}px`,border:`${t(e.settings,"bar_border_size",1)}px solid ${e.settings.bar_border_color?e.settings.bar_border_color:`${e.settings.theme_primary_color}33`}`,backgroundColor:`${e.settings.bar_bg_color?e.settings.bar_bg_color:`${e.settings.theme_primary_color}0D`}`,padding:`${t(e?.settings,"bar_vertical_padding",12)}px ${t(e?.settings,"bar_horizontal_padding",16)}px`}}
                        className=${`${Ie.item_container} ${e.settings.include_variants?Ie.item_container_auto:""}`}
                      >
                        <div className=${Ie.left_container}>
                          ${e.settings.allow_selection&&Ae`
                            <div className=${Ie.selection_container}>
                              <input
                                type="checkbox"
                                value=${r}
                                onChange=${e=>n(r,e)}
                                style=${{accentColor:e.settings.checkbox_bg_color?e.settings.checkbox_bg_color:e.settings.theme_primary_color,cursor:"pointer",border:`${e.settings.checkbox_border_size?e.settings.checkbox_border_size:0}px solid ${e.settings.checkbox_border_color?e.settings.checkbox_border_color:"transparent"}`}}
                              />
                            </div>
                          `}
                          <div className=${Ie.image_container}>
                            <img
                              src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?v=1530129458"
                              width=${42}
                              height=${42}
                            />
                          </div>
                          <div className=${Ie.left_content_container}>
                            <p
                              style=${{fontSize:e.settings.product_title_size,color:e.settings.product_title_text_color}}
                              className=${Ie.title}
                            >
                              Product Title
                            </p>
                            <div className=${Ie.quantity_container}>
                              ${e?.settings?.include_variants&&Ae`
                                <div
                                  className=${Ie.variant_select_wrapper}
                                  style=${{"--primary-color":e.settings.theme_primary_color}}
                                >
                                  ${Array.from({length:3}).map(((i,o)=>Ae`
                                      <div
                                        className=${Ie.variant_select_container}
                                        key=${o}
                                      >
                                        <select
                                          className=${Ie.variant_select}
                                          style=${{border:`${t(e.settings,"select_border_size",1)}px solid ${e.settings.select_border_color?e.settings.select_border_color:e.settings.theme_primary_color}`,backgroundColor:e.settings.select_bg_color,fontSize:e.settings.product_variant_size,color:e.settings.product_variant_text_color,borderRadius:e.settings.select_border_radius,padding:t(e.settings,"select_border_size",0)>0?"4px 16px 4px 0":"0 16px 0 0"}}
                                          id=${`variant_select_${r}_${o}`}
                                          value=${String(o)}
                                          onChange=${e=>s(o,e)}
                                        >
                                          ${y.map((t=>Ae`
                                              <option
                                                key=${t.id}
                                                className=${Ie.variant_select_option}
                                                value=${String(t.id)}
                                                style=${{backgroundColor:e.settings.select_bg_color,color:e.settings.product_variant_color}}
                                              >
                                                ${t.title}
                                              </option>
                                            `))}
                                        </select>
                                      </div>
                                    `))}
                                </div>
                              `}
                            </div>
                            <div className=${Ie.right_container}>
                              <p
                                style=${{color:e.settings.primary_text_color,fontSize:e.settings.price_text_size,color:e.settings.price_text_color}}
                                className=${Ie.price}
                              >
                                ${e.settings.currency} 400
                              </p>
                              <p
                                style=${{fontSize:e.settings.quantity_text_size?e.settings.quantity_text_size:e.settings.subtitle_size,color:e.settings.quantity_text_color?e.settings.quantity_text_color:e.settings.secondary_text_color}}
                                className=${Ie.quantity}
                              >
                                x1
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    `))}
                  ${e.settings.enable_free_gift&&Ae`
                    <${qe}
                      temp=${e}
                      styles=${Ie}
                      showPlus=${!0}
                      getThemeValue=${t}
                      formatPrice=${r}
                      usingCurrencyConverter=${f}
                      remove_decimals=${m}
                      shopify_domain=${x}
                      admin=${u}
                    />
                  `}
                </div>
              </div>
            `}
        <div className=${Ie.cta_wrapper}>
          <div
            style=${{backgroundColor:e.settings.btn_bg_color?e.settings.btn_bg_color:"#fff",color:"#fff"!==e.settings.btn_text_color&&e.settings.btn_bg_color?e.settings.btn_text_color:e.settings.theme_primary_color,fontSize:e.settings.btn_size,border:`${t(e.settings,"btn_border_size",1)}px solid ${e.settings.btn_border_color?e.settings.btn_border_color:e.settings.theme_primary_color}`,borderRadius:`${t(e.settings,"btn_border_radius",5)}px`}}
            className=${Ie.cta_btn}
            onClick=${d}
          >
            <span>${i(v.lang,e,"button_text")}</span>
            <span className=${Ie.dot}></span>
            <span
              className=${Ie.currency}
              style=${{color:e.settings.discount_text_color,fontSize:e.settings.discount_text_size}}
            >
              ${e.bundle_products&&e.bundle_products.length>0?r(a(e.bundle_products),f,m,"fixed_amount"!==e.settings?.discount_type&&e.settings?.enable_price_rounding,"fixed_amount"!==e.settings?.discount_type?e.settings?.price_rounding_value:null):r(500,f,m)}
            </span>
            ${$(e.bundle_products)&&Ae`
              <p
                className=${Ie.offer_price}
                style=${{color:e.settings.total_price_text_color?e.settings.total_price_text_color:e.settings.secondary_text_color,fontSize:e.settings.total_price_text_size}}
              >
                ${h(e.bundle_products,e,f,m)}
              </p>
            `}
          </div>
        </div>
      </div>
      ${e?.settings?.countdown_timer?.enable&&"below"===e?.settings?.countdown_timer?.position&&Ae`
        <div
          style=${{paddingTop:e.bars.some((e=>e.enable_free_gift))?"60px":"0"}}
        >
          ${_}
        </div>
      `}
      <${X}
        temp=${e}
        isBundle=${!0}
        remove_branding=${g}
      />
    </div>
  `},TimerUI:({days:e,hours:t,minutes:i,seconds:r,timerTitle:o,timerSubtitle:a,timerTextMessage:n,showTimer:s,isTimerComplete:l,timerSettings:p,temp:c,timerLabels:d})=>s?Le`
    <div
      className=${`${Me.timer_wrapper} notranslate`}
      translate="no"
      style=${{border:`${c.settings.timer_border_size||0}px solid ${c.settings.timer_border_color||`${c.settings.theme_primary_color}33`}`,borderRadius:`${c.settings.timer_border_radius||5}px`,backgroundColor:c.settings.timer_background_color||`${c.settings.theme_primary_color}0D`}}
    >
      ${o&&Le`<div className=${Me.title_container}>
        <p
          style=${{color:c.settings.timer_title_color||c.settings.primary_text_color,fontSize:c.settings.timer_title_size||18}}
          className=${Me.title}
        >
          ${o}
        </p>
      </div>`}
      ${a&&Le`<div className=${Me.title_container}>
        <p
          style=${{color:c.settings.timer_subtitle_color||c.settings.secondary_text_color,fontSize:c.settings.timer_subtitle_size||14}}
          className=${Me.subtitle}
        >
          ${a}
        </p>
      </div>`}
      ${l&&"show_custom_message"===p.timer_complete?Le`<div className=${Me.stock_container}>
            <p
              style=${{color:c.settings.timer_text_message_color||c.settings.primary_text_color,fontSize:c.settings.timer_text_message_size||16}}
              className=${Me.stock_text}
            >
              ${p.custom_message||"Timer Complete!"}
            </p>
          </div>`:Le`<div className=${Me.timer_container}>
            ${[[`${d.days}`,e],[`${d.hours}`,t],[`${d.minutes}`,i],[`${d.seconds}`,r]].map((([e,t],i)=>Le`
                ${0!==i&&Le`<span
                  className=${Me.separator}
                  style=${{color:c.settings.timer_time_color||c.settings.primary_text_color,fontSize:c.settings.timer_time_size||20}}
                >
                  :
                </span>`}
                <div className=${Me.timer_block}>
                  <span
                    className=${Me.timer_number}
                    style=${{color:c.settings.timer_time_color||c.settings.primary_text_color,fontSize:c.settings.timer_time_size||20}}
                  >
                    ${String(t).padStart(2,"0")}
                  </span>
                  <span
                    className=${Me.timer_label}
                    style=${{color:c.settings.timer_time_subtitle_color||c.settings.secondary_text_color,fontSize:c.settings.timer_time_subtitle_size||14}}
                  >
                    ${e}
                  </span>
                </div>
              `))}
          </div>`}
      ${n&&Le`<div className=${Me.stock_container}>
        <p
          style=${{color:c.settings.timer_text_message_color||c.settings.primary_text_color,fontSize:c.settings.timer_text_message_size||16}}
          className=${Me.stock_text}
        >
          ${n}
        </p>
      </div>`}
    </div>
  `:null,CrossSellTemplate1UI:({offerData:e={},products:t=[],selected:i=0,nextIndex:r=null,direction:o="next",animating:a=!1,getThemeValue:n=(e,t,i)=>i,getDefaultText:s=()=>"",getDefaultBarText:l=()=>"",getSelectedVariant:p=()=>({}),optionSelections:c=[{}],handleOptionChange:d=()=>{},handleAddToCart:_=()=>{},handlePrev:g=()=>{},handleNext:b=()=>{},handleDotClick:f=()=>{},formatPrice:m=e=>e,getDiscountedPrice:u=()=>0,getTotalPrice:x=()=>0,findVariantIdByOptions:h=()=>null,usingCurrencyConverter:$,remove_decimals:v,lang:y="default",shopify_domain:w,admin:z=!1})=>{if(!t.length)return null;const k=(t,i)=>{if(!t)return null;const r=p(t);if(!r)return null;const o=c[0]||{},a=[r.id],g=u(t,0,0,a,r.id,{variants:t.variants||[]}),b=x(t,0,0,a,r.id,{variants:t.variants||[]}),f=l(y,e,"custom_title",i)||t.title||"",k=(r.title||"").replace("- Default Title","").replace(t.title||"","").replace("Default Title","").trim();return Ee`
      <div
        className=${Oe.slider_card_wrapper}
        style=${{backgroundColor:n(e.settings,"bar_bg_color",`${e.settings?.theme_primary_color||"#000"}0D`),border:`${n(e.settings,"bar_border_size",0)}px solid ${n(e.settings,"bar_border_color",e.settings?.theme_primary_color||"#000")}`,borderRadius:`${n(e.settings,"bar_border_radius",10)}px`}}
      >
        <div className=${Oe.slider_card_left_container}>
          <a
            href=${`https://${w}/products/${t.handle}`}
            target=${z?"_blank":"_self"}
            className=${Oe.slider_card_left_inner_container}
          >
            <img
              src=${r.image||t.image||""}
              alt=${t.title||""}
            />
          </a>
          <div className=${Oe.slider_card_right_inner_container}>
            <div className=${Oe.slider_card_content}>
              <a
                href=${`https://${w}/products/${t.handle}`}
                target=${z?"_blank":"_self"}
                className=${Oe.slider_card_title}
                style=${{fontSize:n(e.settings,"bar_title_size",14),color:n(e.settings,"bar_title_text_color",e.settings?.primary_text_color||"#000")}}
              >
                ${f}
              </a>
              ${k&&Ee`
                <div
                  className=${Oe.slider_card_color}
                  style=${{fontSize:n(e.settings,"subtitle_size",12),color:n(e.settings,"subtitle_text_color",e.settings?.secondary_text_color||"#666")}}
                >
                  ${k}
                </div>
              `}
              ${t.variants?.length>1&&t.options?.length>0&&Ee`
                <div className=${Oe.variant_select_wrapper}>
                  <div className=${Oe.variant_select_container}>
                    ${t.options.map((i=>{const a=r[`option${i.position}`]||o[i.name]||i.values[0];return Ee`
                        <select
                          className=${Oe.variant_select}
                          value=${a}
                          onChange=${e=>d(0,i.name,e.target.value)}
                          style=${{border:`${n(e.settings,"select_border_size",1)}px solid ${n(e.settings,"select_border_color",e.settings?.theme_primary_color||"#000")}`,backgroundColor:n(e.settings,"select_bg_color","#ffffff"),fontSize:n(e.settings,"product_variant_size",12),color:e.settings?.product_variant_text_color||"#000",borderRadius:e.settings?.select_border_radius||0}}
                        >
                          ${i.values.map((r=>{const a={...o,[i.name]:r},n=h(t.variants,t.options,a),s=t.variants?.find((e=>String(e.id)===String(n))),l=s&&!1===s.available;return Ee`
                              <option
                                value=${r}
                                disabled=${l}
                                className=${Oe.variant_select_option}
                                style=${{backgroundColor:e.settings?.select_bg_color||"#ffffff",color:e.settings?.product_variant_text_color||"#000"}}
                              >
                                ${r}${l?" - unavailable":""}
                              </option>
                            `}))}
                        </select>
                      `}))}
                  </div>
                </div>
              `}
              <div className=${Oe.slider_card_prices}>
                <span
                  className=${Oe.slider_card_discounted}
                  style=${{fontSize:n(e.settings,"discounted_price_size",12),color:n(e.settings,"discounted_price_color",e.settings?.theme_primary_color||"#000")}}
                >
                  ${m(g,$,v)}
                </span>
                <span
                  className=${Oe.slider_card_original}
                  style=${{fontSize:n(e.settings,"total_price_size",12),color:n(e.settings,"total_price_color",e.settings?.secondary_text_color||"#666")}}
                >
                  ${m(b,$,v)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=${Oe.slider_card_right_container}>
          <button
            className=${Oe.slider_add_btn}
            onClick=${e=>_(e,t)}
            style=${{fontSize:n(e.settings,"btn_text_size",14),color:n(e.settings,"btn_text_color",e.settings?.theme_primary_color||"#000"),backgroundColor:n(e.settings,"btn_background_color","transparent"),border:`${n(e.settings,"btn_border_size",1)}px solid ${n(e.settings,"btn_border_color",e.settings?.theme_primary_color||"#000")}`,borderRadius:`${n(e.settings,"btn_border_radius",5)}px`}}
          >
            ${s(y,e,"add_button_text")}
          </button>
        </div>
      </div>
    `};return Ee`
    <div className=${Oe.slider_outer}>
      <div className=${Oe.slider_header}>
        <h2
          className=${Oe.slider_title}
          style=${{color:n(e.settings,"title_text_color","#000000"),fontSize:n(e.settings,"title_size",18)}}
        >
          ${e.settings?.show_title&&s(y,e,"title")}
        </h2>
        <div className=${Oe.button_container}>
          <button
            className=${Oe.slider_arrow}
            onClick=${g}
            style=${{fontSize:n(e.settings,"slide_change_buttons_size",16),color:n(e.settings,"slide_change_buttons_color",e.settings?.theme_primary_color||"#000"),backgroundColor:n(e.settings,"slide_change_buttons_bg_color","transparent"),border:`${n(e.settings,"slide_change_buttons_border_size",0)}px solid ${n(e.settings,"slide_change_buttons_border_color",e.settings?.theme_primary_color||"#000")}`,borderRadius:`${n(e.settings,"slide_change_buttons_border_radius",0)}px`}}
          >
            ${"<"}
          </button>
          <button
            className=${Oe.slider_arrow}
            onClick=${b}
            style=${{fontSize:n(e.settings,"slide_change_buttons_size",16),color:n(e.settings,"slide_change_buttons_color",e.settings?.theme_primary_color||"#000"),backgroundColor:n(e.settings,"slide_change_buttons_bg_color","transparent"),border:`${n(e.settings,"slide_change_buttons_border_size",0)}px solid ${n(e.settings,"slide_change_buttons_border_color",e.settings?.theme_primary_color||"#000")}`,borderRadius:`${n(e.settings,"slide_change_buttons_border_radius",0)}px`}}
          >
            ${">"}
          </button>
        </div>
      </div>

      <div className=${Oe.slider_container}>
        <div
          className=${`\n            ${Oe.slider_card}\n            ${a?"next"===o?Oe.slideOutLeft:Oe.slideOutRight:""}\n          `}
          style=${{zIndex:1}}
        >
          ${k(t[i],i)}
        </div>

        ${a&&null!==r&&Ee`
          <div
            className=${`\n              ${Oe.slider_card}\n              ${"next"===o?Oe.slideInRight:Oe.slideInLeft}\n            `}
            style=${{zIndex:2}}
          >
            ${k(t[r],r)}
          </div>
        `}
      </div>

      <div className=${Oe.dots_container}>
        ${t.map(((t,r)=>Ee`
            <button
              onClick=${e=>f(e,r)}
              className=${`\n                ${Oe.dot} ${i===r?Oe.active_dot:""}\n              `}
              style=${{backgroundColor:i===r?n(e.settings,"slide_change_buttons_color",e.settings?.theme_primary_color||"#000"):n(e.settings,"slide_change_dot_inactive_color","gray"),border:`${n(e.settings,"slide_change_buttons_border_size",0)}px solid ${n(e.settings,"slide_change_buttons_border_color",e.settings?.theme_primary_color||"#000")}`,transform:i===r?"scale(1.2)":"scale(1)",transition:"all 0.3s ease"}}
            />
          `))}
      </div>
    </div>
  `},RangedTemplate1UI:({offerData:e={},index:t=0,handleTemplate:i=()=>{},editMode:r=!1,isPreview:o=!1,lang:a,Timer:n,getDefaultBarText:s,getDefaultText:l,getThemeValue:p,getRangedDiscountText:c,...d})=>e.bars&&e.bars.length?Fe`
    <div className=${"pb-82b0"}>
      ${p(e.settings,"show_title")&&Fe`
        <div className=${"pb-d9ff"}>
          <span
            className=${Ue}
            style=${{backgroundColor:p(e.settings,"title_border_color",e.settings.title_text_color),height:p(e.settings,"title_border_size",4)}}
          ></span>
          <p
            style=${{color:e.settings.title_text_color,fontSize:e.settings.title_size}}
            className=${"pb-c167"}
          >
            ${l(a,e,"title")}
          </p>
          <span
            className=${Ue}
            style=${{backgroundColor:p(e.settings,"title_border_color",e.settings.title_text_color),height:p(e.settings,"title_border_size",4)}}
          ></span>
        </div>
      `}
      ${e?.settings?.countdown_timer?.enable&&"above"===e?.settings?.countdown_timer?.position&&n}
      <div
        className=${"type_3"===e.settings.type?"pb-3200":""}
      >
        ${e.bars.map(((t,i)=>Fe`
            <div
              key=${t.id}
              className=${"pb-8d58"}
              style=${{borderRadius:p(e.settings,"bar_border_radius",10),borderBottomLeftRadius:p(e.settings,"bar_border_radius",10),borderBottomRightRadius:p(e.settings,"bar_border_radius",10),backgroundColor:p(e.settings,"inactive_bar_bg_color",`${e.settings.theme_primary_color}0D`),borderLeft:`${p(e.settings,"inactive_bar_border_size",1)}px solid ${p(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderRight:`${p(e.settings,"inactive_bar_border_size",1)}px solid ${p(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderTop:`${p(e.settings,"inactive_bar_border_size",1)}px solid ${p(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`,borderBottom:`${p(e.settings,"inactive_bar_border_size",1)}px solid ${p(e.settings,"inactive_bar_border_color",`${e.settings.theme_primary_color}33`)}`}}
            >
              <div
                className=${"pb-b527"}
                style=${{padding:`${p(e.settings,"bar_vertical_padding",10)}px ${p(e.settings,"bar_horizontal_padding",8)}px`}}
              >
                <div>
                  ${t?.product_image&&"no_image"!==p(t?.product_image,"mode","no_image")&&Fe`
                    ${"upload_image"===t?.product_image?.mode?Fe`
                          ${t?.product_image?.image_url&&Fe`
                            <img
                              src=${t?.product_image?.image_url||""}
                              alt=${t?.heading}
                              width=${t?.product_image?.image_size}
                              height=${t?.product_image?.image_size}
                              style=${{borderRadius:`${t?.product_image?.image_border_radius}px`}}
                            />
                          `}
                        `:Fe`
                          <img
                            src=${t?.product_image?.variant_image_url||t?.product_image?.image_url}
                            alt=${t?.heading}
                            width=${p(t.product_image,"image_size",20)}
                            height=${p(t?.product_image,"image_size",20)}
                            style=${{borderRadius:`${p(t?.product_image,"image_border_radius",5)}px`}}
                          />
                        `}
                  `}
                </div>

                <div className=${"pb-acdf"}>
                  <div className=${"pb-9603"}>
                    <p
                      className=${"pb-3f45"}
                      style=${{fontSize:e.settings.bar_title_size,color:p(e.settings,"bar_title_text_color",e.settings.primary_text_color)}}
                    >
                      ${s(a,e,"heading",i)}
                    </p>
                    <p
                      className=${"pb-2e6c"}
                      style=${{color:p(e.settings,"subtitle_text_color","#000"),fontSize:e.settings.subtitle_size}}
                    >
                      ${s(a,e,"sub_text",i)?.includes("{{discount_text}}")?s(a,e,"sub_text",i).replace("{{discount_text}}",c(t,e,i)):s(a,e,"sub_text",i)}
                    </p>
                  </div>
                  <div
                    className=${"pb-d440"}
                    style=${{color:e.settings?.primary_text_color?e.settings.primary_text_color:"#000"}}
                  >
                    <p
                      style=${{color:p(e.settings,"discounted_price_color",e.settings.primary_text_color),fontSize:p(e.settings,"discounted_price_size",13)}}
                      className=${"pb-081e"}
                    >
                      ${t.offer_text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          `))}
      </div>
      ${e?.settings?.countdown_timer?.enable&&"below"===e?.settings?.countdown_timer?.position&&n}
    </div>
  `:null,BxGyTemplate1UI:({offerData:e,getThemeValue:t,getDefaultText:i,selected:r,handleBxGyProductsSelection:o,formatPrice:a,Timer:n,handleOptionChange:s,optionSelections:l,findVariantIdByOptions:p,hasDiscount:c,usingCurrencyConverter:d,getTotalPrice:_,getDiscountedPrice:g,remove_decimals:b,shopify_domain:f,admin:m=!1,getFreeTranslation:u,...x})=>We`
    <div className=${Ge.offer_list_wrapper}>
      ${t(e.settings,"show_title")&&We`
        <div className=${Ge.title_container}>
          <p
            style=${{color:e.settings.title_text_color,fontSize:e.settings.title_size}}
            className=${Ge.title}
          >
            ${i(x.lang,e,"title")}
          </p>
          <span
            style=${{color:t(e.settings,"discount_text_color",e.settings.primary_text_color),fontSize:t(e.settings,"discount_text_size",12)}}
            >${i(x.lang,e,"discount_text")}</span
          >
        </div>
      `}
      ${e?.settings?.countdown_timer?.enable&&"above"===e?.settings?.countdown_timer?.position&&n}
      ${e.bars.map(((i,n)=>We`
          <div
            key=${i.id}
            className=${Ge.single_offer_container}
            style=${{padding:`${t(e?.settings,"bar_vertical_padding",12)}px ${t(e?.settings,"bar_horizontal_padding",8)}px ${t(e?.settings,"bar_vertical_padding",12)}px ${t(e?.settings,"bar_horizontal_padding",8)}px`,borderRadius:t(e.settings,"bar_border_radius",10),backgroundColor:t(e.settings,"bar_bg_color",`${e.settings?.theme_primary_color}0D`),border:`${t(e.settings,"bar_border_size",1)}px solid ${t(e.settings,"bar_border_color",e.settings.theme_primary_color)}`}}
            onClick=${()=>o(i.id)}
          >
            <div className=${Ge.offer_inner_container}>
              ${(()=>{const a=e.settings?.selection_rules;return"all_items_required"===a?"":We`
                  <div className=${Ge.selection_container}>
                    <input
                      type="checkbox"
                      value=${n}
                      checked=${r.includes(i.id)}
                      disabled=${(()=>{const t=e.settings?.selection_types,o=r.includes(i.id);return"allow_single_selection"===t&&!o&&r.length>0})()}
                      onClick=${e=>e.stopPropagation()}
                      onChange=${e=>{e.stopPropagation(),o(i.id)}}
                      style=${{cursor:"pointer",accentColor:t(e.settings,"active_checkbox_bg_color",e.settings.theme_primary_color),border:`${t(e.settings,"checkbox_border_size",0)}px solid ${e.settings.checkbox_border_color?e.settings.checkbox_border_color:"transparent"}`,width:`${t(e.settings,"checkbox_size",22)}px`,height:`${t(e.settings,"checkbox_size",22)}px`,borderRadius:`${t(e.settings,"checkbox_border_radius",4)}px`}}
                    />
                  </div>
                `})()}
              <a
                className=${Ge.product_image_container}
                target=${m?"_blank":"_self"}
                style=${{width:`${t(e.settings,"product_image_size",70)}px`,height:`${t(e.settings,"product_image_size",70)}px`}}
              >
                <span
                  className=${Ge.quantity}
                  style=${{color:t(e.settings,"quantity_color",e.settings.primary_text_color||"#333"),fontSize:t(e.settings,"quantity_size",10),backgroundColor:t(e.settings,"quantity_bg_color","#f0f0f0"),boxShadow:`0 0 0 1px ${t(e.settings,"quantity_bg_color","#fff")}`}}
                >
                  ${i.quantity}
                </span>
                ${i.image?We`
                      <img
                        src=${i.image}
                        alt=${i.title||"Product"}
                        className=${Ge.product_image}
                        style=${{objectFit:"cover"}}
                      />
                    `:We`
                      <div
                        className=${Ge.product_image}
                        style=${{backgroundColor:"#f0f0f0",display:"flex",alignItems:"center",justifyContent:"center",color:"#999",fontSize:"8px"}}
                      >
                        No Image
                      </div>
                    `}
              </a>
              <div className=${Ge.content_wrapper}>
                <div className=${Ge.content_container}>
                  <div className=${Ge.heading_container}>
                    <div className=${Ge.heading_inner_container}>
                      <a
                        target=${m?"_blank":"_self"}
                        style=${{fontSize:e.settings.bar_title_size,color:t(e.settings,"bar_title_text_color",e.settings.primary_text_color)}}
                        className=${Ge.heading}
                      >
                        ${i?.title?.replace("- Default Title","")}
                      </a>
                    </div>
                    <div className=${Ge.right_container}>
                      ${c(i)&&We`
                        <span>
                          ${100===Number(e?.settings?.discount_amount)?u(x.lang||"en"):We`
                                ${a(g(i),d,b)}
                              `}
                        </span>
                      `}
                      <span
                        className=${`${Ge.offer_price} money`}
                        style=${{color:t(e.settings,"discounted_price_color",e.settings.primary_text_color),fontSize:t(e.settings,"discounted_price_size",13),textDecoration:"line-through"}}
                      >
                        ${a(_(i),d,b)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ${e?.settings?.include_variants&&Array.isArray(i?.variants)&&i?.variants?.length>1&&r.includes(i.id)&&We`
              <div
                className=${`${Ge.selected} ${Ge.variant_select_wrapper}`}
                style=${{"--primary-color":e.settings.theme_primary_color}}
              >
                ${Array.from({length:i.quantity}).map(((r,o)=>We`
                    <div
                      className=${Ge.variant_select_container}
                      key=${o}
                    >
                      <label
                        className=${Ge.variant_select_label}
                        htmlFor=${`variant_select_${i.id}_${o}`}
                        style=${{fontSize:t(e.settings,"select_label_size",12),color:t(e.settings,"select_label_color","#333333")}}
                      >
                        #${o+1}
                      </label>
                      ${i.options.map(((r,a)=>We`
                          <div
                            key=${r.name}
                            style=${{marginBottom:"8px",width:"100%"}}
                          >
                            <${ye}
                              offerData=${e}
                              optionName=${r.name}
                              optionValues=${r.values}
                              selectedValue=${l[o]?.[r.name]||r.values[0]}
                              onValueChange=${e=>s(o,r.name,e)}
                              getThemeValue=${t}
                              styles=${Ge}
                              productVariants=${i.variants}
                            />
                            ${!we(e,r.name)||"color_swatch"!==e?.swatch_settings?.type&&"image_swatch"!==e?.swatch_settings?.type&&"product_image_swatch"!==e?.swatch_settings?.type?We`
                                  <select
                                    className=${Ge.variant_select}
                                    style=${{border:`${t(e.settings,"select_border_size",1)}px solid ${t(e.settings,"select_border_color",e.settings.theme_primary_color)}`,backgroundColor:t(e.settings,"select_bg_color","#ffffff"),fontSize:t(e.settings,"product_variant_size",12),color:e.settings.product_variant_text_color,borderRadius:e.settings.select_border_radius,padding:t(e.settings,"select_border_size",0)>0?"4px 16px 4px 0":"0 16px 0 0",marginTop:"4px",display:!we(e,r.name)||"color_swatch_dropdown"!==e?.swatch_settings?.type&&"image_swatch_dropdown"!==e?.swatch_settings?.type&&"product_image_swatch_dropdown"!==e?.swatch_settings?.type?"block":"none"}}
                                    id=${`variant_select_${i.id}_${o}_${a}`}
                                    value=${l[o]?.[r.name]||r.values[0]}
                                    onClick=${e=>e.stopPropagation()}
                                    onChange=${e=>{e.stopPropagation(),s(o,r.name,e.target.value)}}
                                  >
                                    ${r.values.map((t=>{const a={...l[o],[r.name]:t},n=p(i.variants,i.options,a),s=i.variants.find((e=>String(e.id)===String(n))),c=s&&!1===s.available;return We`
                                        <option
                                          key=${t}
                                          className=${Ge.variant_select_option}
                                          value=${t}
                                          disabled=${c}
                                          style=${{backgroundColor:e.settings.select_bg_color,color:e.settings.product_variant_text_color}}
                                        >
                                          ${t}${c?" - unavailable":""}
                                        </option>
                                      `}))}
                                  </select>
                                `:""}
                          </div>
                        `))}
                    </div>
                  `))}
              </div>
            `}
          </div>
        `))}
      ${e?.settings?.countdown_timer?.enable&&"below"===e?.settings?.countdown_timer?.position&&n}
    </div>
  `,Badges:re,getBadge:oe,CTemplate1UI:({offerData:e,getThemeValue:t,getDefaultText:i,formatPrice:r,usingCurrencyConverter:o,remove_decimals:a,lang:n,steps:s=[],currentActiveStep:l=1,completedSteps:p=new Set,newlyCompletedStep:c=null,getDefaultBarText:d,onStepClick:_,progressPercentage:g=0,...b})=>{const f=t(e?.settings,"active_step_bg_color",e?.settings?.theme_primary_color||"#ff2267"),m=t(e?.settings,"inactive_step_bg_color","#ffffff"),u=t(e?.settings,"active_line_bg_color",e?.settings?.theme_primary_color||"#ff2267"),x=t(e?.settings,"inactive_line_bg_color","#e6e7e8"),h=t(e?.settings,"active_text_color",e?.settings?.primary_text_color||"#333333"),$=t(e?.settings,"inactive_text_color","#aeb1b5"),v=t(e?.settings,"active_step_border_color",e?.settings?.theme_primary_color||"#ff2267"),y=t(e?.settings,"inactive_step_border_color","#e6e7e8"),w=t(e?.settings,"tick_mark_color","#ffffff"),z=t(e?.settings,"active_description_text_color",e?.settings?.primary_text_color||"#333333"),k=t(e?.settings,"inactive_description_text_color","#aeb1b5");return He`
    <div
      style=${{margin:`${t(e?.settings,"step_horizontal_margin",16)}px\n        ${t(e?.settings,"step_vertical_margin",0)}px`}}
    >
      ${e?.settings?.show_title&&He`<p
        style=${{fontSize:t(e?.settings,"title_size",16),color:t(e?.settings,"title_text_color","#000000"),textAlign:t(e?.settings,"title_position","center"),fontWeight:"500"}}
      >
        ${i(n,e,"title")}
      </p>`}
      <ul
        class="${"pb-eaf2"}"
        onClick=${_}
        style="
          --progress-percentage: ${g}%;
          --active-step-bg-color: ${f};
          --inactive-step-bg-color: ${m};
          --active-line-bg-color: ${u};
          --inactive-line-bg-color: ${x};
          --active-text-color: ${h};
          --inactive-text-color: ${$};
          --active-step-border-color: ${v};
          --inactive-step-border-color: ${y};
          --tick-mark-color: ${w};
          --active-description-text-color: ${z};
          --inactive-description-text-color: ${k};
        "
      >
        ${s.map(((i,r)=>He`
            <li class="${(e=>{let t=["pb-c52c"];return p.has(e)?(t.push("pb-ed14"),e===c&&t.push("pb-5002")):t.push("pb-93d1","pb-67d4"),t.join(" ")})(i.id)}" data-step-id="${i.id}">
              ${i?.description&&He` <span
                class="${"pb-9e35"}"
                style=${{fontSize:t(e?.settings,"step_description_text_size",14)}}
                >${((e,t)=>{if(!e)return"";let i=e;if(i.includes("{{minimum_order_value}}")){const e=t?.minimum_order_value||0,r=o||"$";i=i.replace(/\{\{minimum_order_value\}\}/g,`${r}${e}`)}if(i.includes("{{minimum_cart_quantity}}")){const e=t?.minimum_quantity||0;i=i.replace(/\{\{minimum_cart_quantity\}\}/g,e)}return i})(i?.description,i)}</span
              >`}
              <span class="${"pb-a32d"}"></span>
              <span
                style=${{fontSize:t(e?.settings,"step_label_text_size",14)}}
                class="${"pb-3956"}"
                >${d(n,e,"heading",r)}
              </span>
            </li>
          `))}
      </ul>
    </div>
  `}}}();
