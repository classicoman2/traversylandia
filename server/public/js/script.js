!function n(o,i,a){function c(r,t){if(!i[r]){if(!o[r]){var e="function"==typeof require&&require;if(!t&&e)return e(r,!0);if(u)return u(r,!0);throw(e=new Error("Cannot find module '"+r+"'")).code="MODULE_NOT_FOUND",e}e=i[r]={exports:{}},o[r][0].call(e.exports,function(t){return c(o[r][1][t]||t)},e,e.exports,n,o,i,a)}return i[r].exports}for(var u="function"==typeof require&&require,t=0;t<a.length;t++)c(a[t]);return c}({1:[function(t,r,e){"use strict";var n,i=(n=t("regenerator-runtime"))&&n.__esModule?n:{default:n};function u(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function a(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t)}var r,e,n,c,o;return r=t,e=null,n=[{key:"getPosts",value:(c=i.default.mark(function t(){var e;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/api/posts");case 3:return e=t.sent,t.next=6,e.text();case 6:e=t.sent,r=e,document.getElementById("resultats").innerHTML=r,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("Error:"+t.t0);case 13:case"end":return t.stop()}var r},t,null,[[0,10]])}),o=function(){var t=this,a=arguments;return new Promise(function(r,e){var n=c.apply(t,a);function o(t){u(n,r,e,o,i,"next",t)}function i(t){u(n,r,e,o,i,"throw",t)}o(void 0)})},function(){return o.apply(this,arguments)})}],e&&a(r.prototype,e),n&&a(r,n),t}();window.onload=function(){console.log("Iniciant...");var t=o.getPosts();console.log(t),console.log("Final")}},{"regenerator-runtime":2}],2:[function(t,r,e){var n=function(a){"use strict";var u,t=Object.prototype,f=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",e=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function i(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{i({},"")}catch(t){i=function(t,r,e){return t[r]=e}}function c(t,r,e,n){var o,i,a,c,r=r&&r.prototype instanceof d?r:d,r=Object.create(r.prototype),n=new O(n||[]);return r._invoke=(o=t,i=e,a=n,c=s,function(t,r){if(c===p)throw new Error("Generator is already running");if(c===y){if("throw"===t)throw r;return k()}for(a.method=t,a.arg=r;;){var e=a.delegate;if(e){var n=function t(r,e){var n=r.iterator[e.method];if(n===u){if(e.delegate=null,"throw"===e.method){if(r.iterator.return&&(e.method="return",e.arg=u,t(r,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}n=l(n,r.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;var n=n.arg;if(!n)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v;{if(!n.done)return n;e[r.resultName]=n.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=u)}e.delegate=null;return v}(e,a);if(n){if(n===v)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===s)throw c=y,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=p;n=l(o,i,a);if("normal"===n.type){if(c=a.done?y:h,n.arg!==v)return{value:n.arg,done:a.done}}else"throw"===n.type&&(c=y,a.method="throw",a.arg=n.arg)}}),r}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var s="suspendedStart",h="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[n]=function(){return this};r=Object.getPrototypeOf,r=r&&r(r(j([])));r&&r!==t&&f.call(r,n)&&(w=r);var x=m.prototype=d.prototype=Object.create(w);function L(t){["next","throw","return"].forEach(function(r){i(t,r,function(t){return this._invoke(r,t)})})}function b(a,c){var r;this._invoke=function(e,n){function t(){return new c(function(t,r){!function r(t,e,n,o){t=l(a[t],a,e);if("throw"!==t.type){var i=t.arg,e=i.value;return e&&"object"==typeof e&&f.call(e,"__await")?c.resolve(e.__await).then(function(t){r("next",t,n,o)},function(t){r("throw",t,n,o)}):c.resolve(e).then(function(t){i.value=t,n(i)},function(t){return r("throw",t,n,o)})}o(t.arg)}(e,n,t,r)})}return r=r?r.then(t,t):t()}}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(r){if(r){var t=r[n];if(t)return t.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var e=-1,t=function t(){for(;++e<r.length;)if(f.call(r,e))return t.value=r[e],t.done=!1,t;return t.value=u,t.done=!0,t};return t.next=t}}return{next:k}}function k(){return{value:u,done:!0}}return((g.prototype=x.constructor=m).constructor=g).displayName=i(m,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,i(t,o,"GeneratorFunction")),t.prototype=Object.create(x),t},a.awrap=function(t){return{__await:t}},L(b.prototype),b.prototype[e]=function(){return this},a.AsyncIterator=b,a.async=function(t,r,e,n,o){void 0===o&&(o=Promise);var i=new b(c(t,r,e,n),o);return a.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},L(x),i(x,o,"Generator"),x[n]=function(){return this},x.toString=function(){return"[object Generator]"},a.keys=function(e){var t,n=[];for(t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},a.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&f.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function t(t,r){return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=u),!!r}for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=f.call(o,"catchLoc"),c=f.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&f.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n,o=e.completion;return"throw"===o.type&&(n=o.arg,_(e)),n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:j(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=u),v}},a}("object"==typeof r?r.exports:{});try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},{}]},{},[1]);