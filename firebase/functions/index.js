!function(e,t){for(var r in t)e[r]=t[r]}(this,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){e.exports=require("firebase-functions")},function(e,t){e.exports=require("firebase-admin")},function(e,t){e.exports=require("babel-runtime/regenerator")},function(e,t){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.https=t.database=void 0;u(r(0));var n=u(r(1)),o=u(r(7)),a=u(r(10));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}n.initializeApp(),n.firestore().settings({timestampsInSnapshots:!0});t.database=o,t.https=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tweetsCreate=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(8));t.tweetsCreate=n.listener},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listener=void 0;var n=u(r(2)),o=u(r(3)),a=u(r(9));function u(e){return e&&e.__esModule?e:{default:e}}var s=r(1),i=r(0).firestore.document("tweets/{tweetsId}");t.listener=i.onCreate(function(){var e=(0,o.default)(n.default.mark(function e(t,r){var o,u,i,c,l,f,d;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=s.firestore(),u=t.data(),i=u.search_metadata,c=u.statuses,e.next=5,o.collection("tweetsMetadata").doc("metadata").set(i);case 5:return l={headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},method:"post",url:"https://us-central1-trader-814b5.cloudfunctions.net/https-analyzeSentiment/",data:{statuses:c}},e.next=8,(0,a.default)(l);case 8:return f=e.sent,d=f.data,e.next=12,o.collection("tweetsSentiment").add({search_metadata:i,statuses:d});case 12:return e.abrupt("return");case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return");case 19:case"end":return e.stop()}},e,void 0,[[0,15]])}));return function(t,r){return e.apply(this,arguments)}}())},function(e,t){e.exports=require("axios")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.emailSubscribe=t.analyzeSentiment=t.twitterSearch=void 0;var n=u(r(11)),o=u(r(14)),a=u(r(16));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.twitterSearch=n.listener,t.analyzeSentiment=o.listener,t.emailSubscribe=a.listener},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listener=void 0;var n=i(r(2)),o=i(r(3)),a=s(r(0)),u=(s(r(1)),r(12));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}var c=r(4),l=r(5),f=r(13),d=c();d.use(l({origin:!0}));var p=new f(u.configTwitter);d.post("/",function(){var e=(0,o.default)(n.default.mark(function e(t,r){var o,a,u,s,i;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=t.body,a=o.until,u=o.since_id,s={q:"btc",lang:"en",result_type:"recent",count:100,until:a,since_id:u},e.next=5,p.get("search/tweets",s);case 5:i=e.sent,r.status(200).send(i),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("catch error: ",e.t0),r.status(400).send("Error: A wild Error appeared!");case 13:case"end":return e.stop()}},e,void 0,[[0,9]])}));return function(t,r){return e.apply(this,arguments)}}());t.listener=a.https.onRequest(d)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.configTwitter={consumer_key:"NRv5YlIR8iiEFgTIMJTtHYOku",consumer_secret:"XVrSbWKskLP9VpI7mvq987wEurzycEWVg6RW70t0m1dc35R4Up",access_token_key:"163765353-ZrHqDWn0EXQ74ThxsFpJs4fxFN3GzyufWvUHbg6e",access_token_secret:"8T5rs9HZgF3mKXpzTc6CL8eI2UddyOlOR0AmSyqRJMcIH"}},function(e,t){e.exports=require("twitter")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listener=void 0;var n=s(r(2)),o=s(r(3)),a=u(r(0));u(r(1));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function s(e){return e&&e.__esModule?e:{default:e}}var i=r(4),c=r(5),l=r(15),f=i();f.use(c({origin:!0}));var d=new l;f.post("/",function(){var e=(0,o.default)(n.default.mark(function e(t,r){var o,a;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{o=t.body.statuses,a=o.map(function(e){var t=e.created_at,r=e.created_at_unix,n=e.text;return{score:d.analyze(n).score,created_at:t,created_at_unix:r}}),r.status(200).send(a)}catch(e){console.error("catch error: ",e),r.status(400).send("Error: A wild Error appeared!")}case 1:case"end":return e.stop()}},e,void 0)}));return function(t,r){return e.apply(this,arguments)}}());t.listener=a.https.onRequest(f)},function(e,t){e.exports=require("sentiment")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listener=void 0;var n=i(r(2)),o=i(r(3)),a=s(r(0)),u=s(r(1));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}var c=r(4),l=r(5),f=c();f.use(l({origin:!0})),f.post("/",function(){var e=(0,o.default)(n.default.mark(function e(t,r){var o,a;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o=t.body.email){e.next=4;break}throw"Invalid email parameter.";case 4:return console.log("email: ",o),a=u.firestore().collection("emailLaunchList").doc(),e.next=8,a.set({email:o});case 8:r.status(200).send("Email successfully submitted"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("catch error: ",e.t0),r.status(400).send("Error: A wild Error appeared!");case 15:case"end":return e.stop()}},e,void 0,[[0,11]])}));return function(t,r){return e.apply(this,arguments)}}());t.listener=a.https.onRequest(f)}]));