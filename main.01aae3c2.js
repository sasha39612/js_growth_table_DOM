parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i,o=!0,d=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return o=e.done,e},e:function(e){d=!0,i=e},f:function(){try{o||null==l.return||l.return()}finally{if(d)throw i}}}}function n(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var r=document.querySelector(".append-row"),l=document.querySelector(".remove-row"),i=document.querySelector(".append-column"),o=document.querySelector(".remove-column"),d=document.querySelector("tbody"),c=10,a=2;r.addEventListener("click",function(){d.appendChild(d.lastElementChild.cloneNode(!0)),d.children.length===c&&(r.disabled=!0),d.children.length>a&&(l.disabled=!1)}),l.addEventListener("click",function(){d.lastElementChild.remove(),d.children.length===a&&(l.disabled=!0),d.children.length<c&&(r.disabled=!1)}),i.addEventListener("click",function(){var n,t=e(d.children);try{for(t.s();!(n=t.n()).done;){var r=n.value;r.append(r.lastElementChild.cloneNode(!0))}}catch(l){t.e(l)}finally{t.f()}d.firstElementChild.children.length===c&&(i.disabled=!0),d.firstElementChild.children.length>a&&(o.disabled=!1)}),o.addEventListener("click",function(){var n,t=e(d.children);try{for(t.s();!(n=t.n()).done;){n.value.lastElementChild.remove()}}catch(r){t.e(r)}finally{t.f()}d.firstElementChild.children.length===a&&(o.disabled=!0),d.firstElementChild.children.length<c&&(i.disabled=!1)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.01aae3c2.js.map