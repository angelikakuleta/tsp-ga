!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e||401*Math.random(),this.y=n||401*Math.random()}var e,n,o;return e=t,(n=[{key:"distanceTo",value:function(t){var e=Math.abs(this.x-t.x),n=Math.abs(this.y-t.y);return Math.floor(Math.sqrt(e*e+n*n))}}])&&r(e.prototype,n),o&&r(e,o),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cities=e,this.distance=this.getDistance()}var e,n,r;return e=t,(n=[{key:"getDistance",value:function(){var t=0;for(var e in this.cities){var n=this.cities[e],r=void 0;r=e<this.cities.length-1?this.cities[parseInt(e)+1]:this.cities[0],t+=n.distanceTo(r)}return t}}])&&i(e.prototype,n),r&&i(e,r),t}();function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.routes=e||[]}var e,n,r;return e=t,(n=[{key:"getFittest",value:function(){for(var t=this.routes[0],e=1;e<this.routes.length;e++)t.distance<this.routes[e].distance&&(t=this.routes[e]);return t}},{key:"addRoute",value:function(t){this.routes.push(t)}}])&&u(e.prototype,n),r&&u(e,r),t}();function l(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){for(var n=new c(t.routes.slice()),r=0;r<t.routes.length;r+=2){var o=t.routes[r],i=t.routes[r+1],u=Math.floor(Math.random()*o.cities.length)+1,l=d(o,i,u),s=d(i,o,u);h(l,e),h(s,e),n.addRoute(new a(l)),n.addRoute(new a(s))}return n.routes.sort((function(t,e){return t.distance-e.distance})),n.routes=n.routes.slice(0,t.routes.length),n}function d(t,e,n){for(var r=[],o=0;o<n;o++)r.push(t.cities[o]);var i,a=l(e.cities);try{var u=function(){var t=i.value;0==r.some((function(e){return e.x==t.x&&e.y==t.y}))&&r.push(t)};for(a.s();!(i=a.n()).done;)u()}catch(t){a.e(t)}finally{a.f()}return r}function h(t,e){for(var n=0;n<t.length;n++)if(Math.random()<e){var r=Math.floor(t.length*Math.random()),o=[t[r],t[n]];t[n]=o[0],t[r]=o[1]}}for(var v=document.getElementById("graph"),y=v.getContext("2d"),p=[],m=0;m<20;)p.push(new o),m++;b(p),document.getElementById("generate").addEventListener("click",(function(t){t.preventDefault();for(var e=parseInt(document.getElementById("population").value),n=parseFloat(document.getElementById("mrate").value),r=parseInt(document.getElementById("generations").value),o="",i=new c,u=0;u<e;u++){var l=(d=p,d.sort((function(){return Math.random()-.5}))).slice(),s=new a(l);i.addRoute(s)}var d;o+="<li>Initial distance: ".concat(i.getFittest().distance,"</li>");for(var h=0;h<r;h++)i=f(i,n);o+="<li>Final distance: ".concat(i.routes[0].distance,"</li>"),function(t){for(y.clearRect(0,0,v.width,v.height),y.beginPath(),b(t),y.font="14px san-serif",y.fileStyle="#000",y.moveTo(t[0].x+50,t[0].y+50),m=0;m<t.length;m++)y.lineTo(t[m].x+50,t[m].y+50),y.fillText(m+1,t[m].x+54,t[m].y+50);y.lineTo(t[0].x+50,t[0].y+50),y.closePath(),y.stroke()}(i.routes[0].cities),g.innerHTML=o}));var g=document.getElementById("result");function b(t){for(var e in t)y.moveTo(t[e].x+50,t[e].y+50),y.arc(t[e].x+50,t[e].y+50,2,0,2*Math.PI);y.fill()}}]);
//# sourceMappingURL=index.js.map