(()=>{var e={170:()=>{document.querySelector(".form__message").addEventListener("submit",(e=>{e.preventDefault(),fetch("http://localhost:7070/").then((e=>e.json())).then((e=>{console.log(e)})).catch((e=>{console.error("Ошибка при выполнении запроса",e)}))}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(170)})()})();