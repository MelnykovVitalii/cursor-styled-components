(this["webpackJsonpcursor-styled-components"]=this["webpackJsonpcursor-styled-components"]||[]).push([[3],{38:function(t,e,n){"use strict";n.r(e),n.d(e,"getCLS",(function(){return d})),n.d(e,"getFCP",(function(){return y})),n.d(e,"getFID",(function(){return F})),n.d(e,"getLCP",(function(){return k})),n.d(e,"getTTFB",(function(){return C}));var i,r,a,o,u=function(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){if("first-input"===t&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},s=function(t,e){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},f=function(t){addEventListener("pageshow",(function(e){e.persisted&&t(e)}),!0)},m="function"==typeof WeakSet?new WeakSet:new Set,p=function(t,e,n){var i;return function(){e.value>=0&&(n||m.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(i||0),(e.delta||void 0===i)&&(i=e.value,t(e)))}},d=function(t,e){var n,i=u("CLS",0),r=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),n())},a=c("layout-shift",r);a&&(n=p(t,i,e),s((function(){a.takeRecords().map(r),n()})),f((function(){i=u("CLS",0),n=p(t,i,e)})))},v=-1,l=function(){return"hidden"===document.visibilityState?0:1/0},h=function(){s((function(t){var e=t.timeStamp;v=e}),!0)},g=function(){return v<0&&(v=l(),h(),f((function(){setTimeout((function(){v=l(),h()}),0)}))),{get timeStamp(){return v}}},y=function(t,e){var n,i=g(),r=u("FCP"),a=function(t){"first-contentful-paint"===t.name&&(s&&s.disconnect(),t.startTime<i.timeStamp&&(r.value=t.startTime,r.entries.push(t),m.add(r),n()))},o=performance.getEntriesByName("first-contentful-paint")[0],s=o?null:c("paint",a);(o||s)&&(n=p(t,r,e),o&&a(o),f((function(i){r=u("FCP"),n=p(t,r,e),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,m.add(r),n()}))}))})))},S={passive:!0,capture:!0},E=new Date,w=function(t,e){i||(i=e,r=t,a=new Date,b(removeEventListener),L())},L=function(){if(r>=0&&r<a-E){var t={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(e){e(t)})),o=[]}},T=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){w(t,e),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,S),removeEventListener("pointercancel",i,S)};addEventListener("pointerup",n,S),addEventListener("pointercancel",i,S)}(e,t):w(e,t)}},b=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,T,S)}))},F=function(t,e){var n,a=g(),d=u("FID"),v=function(t){t.startTime<a.timeStamp&&(d.value=t.processingStart-t.startTime,d.entries.push(t),m.add(d),n())},l=c("first-input",v);n=p(t,d,e),l&&s((function(){l.takeRecords().map(v),l.disconnect()}),!0),l&&f((function(){var a;d=u("FID"),n=p(t,d,e),o=[],r=-1,i=null,b(addEventListener),a=v,o.push(a),L()}))},k=function(t,e){var n,i=g(),r=u("LCP"),a=function(t){var e=t.startTime;e<i.timeStamp&&(r.value=e,r.entries.push(t)),n()},o=c("largest-contentful-paint",a);if(o){n=p(t,r,e);var d=function(){m.has(r)||(o.takeRecords().map(a),o.disconnect(),m.add(r),n())};["keydown","click"].forEach((function(t){addEventListener(t,d,{once:!0,capture:!0})})),s(d,!0),f((function(i){r=u("LCP"),n=p(t,r,e),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,m.add(r),n()}))}))}))}},C=function(t){var e,n=u("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();if(n.value=n.delta=e.responseStart,n.value<0)return;n.entries=[e],t(n)}catch(t){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)}}}]);
//# sourceMappingURL=3.fb3ad446.chunk.js.map