!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,i,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,f=setTimeout(T,t),d?p(e):a}function w(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=g();if(w(e))return O(e);f=setTimeout(T,function(e){var n=t-(e-c);return s?b(n,u-(e-l)):n}(e))}function O(e){return f=void 0,v&&r?p(e):(r=i=void 0,a)}function S(){var e=g(),n=w(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return h(c);if(s)return f=setTimeout(T,t),p(c)}return void 0===f&&(f=setTimeout(T,t)),a}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},S.flush=function(){return void 0===f?a:O(g())},S}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var h,w=document.querySelector(".feedback-form"),T=document.querySelector("feedback-form textarea"),O="feedback-form-state",S={};w.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(O)})),w.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value;var t=e.target.value;console.log(S),localStorage.setItem(O,t)}),1e3)),(h=localStorage.getItem(O))&&(T.value=h)}();
//# sourceMappingURL=03-feedback.c3413117.js.map