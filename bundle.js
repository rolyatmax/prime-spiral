!function e(t,n,r){function i(u,f){if(!n[u]){if(!t[u]){var a="function"==typeof require&&require;if(!f&&a)return a(u,!0);if(o)return o(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var s=n[u]={exports:{}};t[u][0].call(s.exports,function(e){var n=t[u][1][e];return i(n?n:e)},s,s.exports,e,t,n,r)}return n[u].exports}for(var o="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){for(var e=0,t=0,n=b,r=1,i=h.cellSize/2,a=h.colors[Math.random()*h.colors.length|0];;){for(var s=2;s--;){for(var c=x[t],d=e,v=function(){var e=n,t=f(e,2),u=t[0],s=t[1];if((0,l.default)(r)&&setTimeout(function(){o(m,u+i,s+i,i,a)},.1*r|0),n=c(n,h.cellSize+h.padding),r+=1,r>=h.maxNumber)return{v:void 0}};d--;){var y=v();if("object"===("undefined"==typeof y?"undefined":u(y)))return y.v}t=(t+1)%x.length}e+=1}}function o(e,t,n,r,i){e.fillStyle=i,e.beginPath(),e.arc(t,n,r,0,2*Math.PI),e.fill()}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var u,f=e[Symbol.iterator]();!(r=(u=f.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&f.return&&f.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=e("quick-is-prime"),l=r(a),s=e("./lib/info-box"),c=r(s),d=new c.default(document.querySelector(".info"));setTimeout(function(){return d.show()},5e3);var h={cellSize:4,maxNumber:5e4,padding:1,colors:["rgb(109, 151, 136)"]},v=document.querySelector(".main"),y=v.width=window.innerWidth,p=v.height=window.innerHeight;v.style.width=y+"px",v.style.height=p+"px";var m=v.getContext("2d"),b=[y/2|0,p/2|0],x=[function(e,t){var n=f(e,2),r=n[0],i=n[1];return[r,i-t]},function(e,t){var n=f(e,2),r=n[0],i=n[1];return[r-t,i]},function(e,t){var n=f(e,2),r=n[0],i=n[1];return[r,i+t]},function(e,t){var n=f(e,2),r=n[0],i=n[1];return[r+t,i]}];(0,l.default)(h.maxNumber),i()},{"./lib/info-box":2,"quick-is-prime":3}],2:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return Array.isArray(e)?e[i(e.length)]:(void 0===t&&(t=e,e=0),Math.random()*(t-e)+e|0)}function o(e,t){var n=void 0;return new Promise(function(r){function i(o){n=n||o;var u=(o-n)/t;e(u),u<1?a(i):r()}a(i)})}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=window,a=f.requestAnimationFrame,l=function(){function e(t){r(this,e),this.el=t;var n=t.querySelector("h1"),i=n.textContent.trim();this.letters=this.buildLetterEls(i),n.textContent="",this.letters.forEach(n.appendChild.bind(n))}return u(e,[{key:"buildLetterEls",value:function(e){for(var t=[];e.length;){var n=document.createElement("span");n.textContent=e[0],e=e.slice(1),t.push(n)}return t}},{key:"fadeInBg",value:function(){var e=this.el.getBoundingClientRect(),t=e.height,n=e.width,r=document.createElement("canvas"),u=r.getContext("2d");r.height=t,r.width=n,r.style.height=t+"px",r.style.width=n+"px";var f=window.getComputedStyle(this.el);r.style.bottom=f.bottom,r.style.left=f.left,r.style.position="absolute",r.style.zIndex=this.el.style.zIndex||0,this.el.style.zIndex=this.el.style.zIndex?this.el.style.zIndex+1:1,this.el.parentElement.appendChild(r);var a=0|i(360);return o(function(e){e=Math.pow(e,3);var r=e*n|0,i=50*e+30|0;u.arc(n/2,t/2,r,0,2*Math.PI),u.fillStyle="hsl("+a+", 5%, "+i+"%)",u.fill()},350)}},{key:"fadeInText",value:function(){var e=this;this.letters.forEach(function(t,n){var r=15*(e.letters.length-n);t.style.transition="all 400ms cubic-bezier(.15,.62,.38,.94) "+r+"ms"}),this.el.classList.add("show")}},{key:"show",value:function(){this.fadeInBg().then(this.fadeInText.bind(this))}}]),e}();n.default=l},{}],3:[function(e,t,n){function r(e){o=i(e),u=e}var i=e("sieve-set"),o={},u=0;t.exports=function(e){return e>u&&r(e),!!o[e]}},{"sieve-set":5}],4:[function(e,t,n){!function(e){"use strict";function r(e){for(var t=[],n=[],r=2,i=e;i--;)t[e-i]=!0;for(r=2;r<Math.sqrt(e);r++)if(t[r])for(var o=r+r;o<e;o+=r)t[o]=!1;for(var u=2;u<e;u++)t[u]&&n.push(u);return n}"undefined"!=typeof n?("undefined"!=typeof t&&t.exports&&(n=t.exports=r),n.sieveOfErathosthenes=r):"function"==typeof define&&define.amd?define([],function(){return r}):e.sieveOfErathosthenes=r}(this)},{}],5:[function(e,t,n){var r=e("sieve-of-eratosthenes");t.exports=function(e){return r(e+1).reduce(function(e,t){return e[t]=!0,e},{})}},{"sieve-of-eratosthenes":4}]},{},[1]);