(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return r(t)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e){var t="function"==typeof Map?new Map:void 0;return o=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return i(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,e)},o(e)}function i(e,t,n){return i=c()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var s=document.createElement("template");s.innerHTML='\n<link rel="stylesheet" href="./css/component.css">\n        <div class="crypto_card mb-3  p-3  mx-4 py-3 rounded-1 pointer d-flex justify-content-between align-items-center ">\n            <div class="d-flex align-items-center gap-2">\n                <img src="" width="30" alt="">\n                <div>\n                    <span class="coin_name d-block "><span class="fw-bold fs-09"></span> <span class="text-green  mx-1"></span></span>\n                    <span class="text-muted  price  d-inline"></span> <span class="d-inline text-muted fs-09">|</span>\n                    <span class="d-inline ">\n                    \n                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-arrow-down text-red d-none" viewBox="0 0 16 16">\n                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>\n                    </svg>\n                    \n                     <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-arrow-up text-green d-none " viewBox="0 0 16 16">\n  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>\n                    </svg>\n                    \n                    \n                    <span class="  change_percent"></span>\n                </span>\n                </div>\n            </div>\n            <div class="add_to_favorite">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill text-muted " viewBox="0 0 16 16">\n                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n                </svg>\n            </div>\n        </div>\n\n';var u=null;const p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(y,e);var o,i,p,f,d,b=(o=y,i=c(),function(){var e,t=l(o);if(i){var r=l(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return n(this,e)});function y(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=b.call(this)).attachShadow({mode:"open"}),e.shadowRoot.appendChild(s.content.cloneNode(!0));var t=r(e).shadowRoot;return u=t,e}return p=y,(f=[{key:"connectedCallback",value:function(){u.querySelector("img").src=this.getAttribute("icon"),u.querySelector(".coin_name").children[0].innerHTML=this.getAttribute("coin-name"),u.querySelector(".coin_name").children[1].innerHTML=this.getAttribute("abb-name"),u.querySelector(".price").innerHTML=this.getAttribute("price"),this.state=this.getAttribute("state"),u.querySelector(".change_percent").innerHTML=this.getAttribute("change-state")}},{key:"state",set:function(e){"up"===e?(u.querySelector(".change_percent").classList.add("text-green"),u.querySelector(".bi-arrow-up").classList.replace("d-none","d-inline-block")):"down"===e&&(u.querySelector(".change_percent").classList.add("text-red"),u.querySelector(".bi-arrow-down").classList.replace("d-none","d-inline-block"))}},{key:"observedAttributes",get:function(){return["icon","coin-name","abb-name"," price","state","change-state"]}}])&&t(p.prototype,f),d&&t(p,d),Object.defineProperty(p,"prototype",{writable:!1}),y}(o(HTMLElement));window.customElements.define("price-card",p)})();