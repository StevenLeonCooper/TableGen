!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequire83a6;function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},e.parcelRequire83a6=o),o.register("gm4sb",(function(e,n){var r,o;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var a={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)a[e[n]]=t[e[n]]},o=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o.register("4YlIw",(function(t,e){t.exports=o("3WFuy")(o("5waPY").getBundleURL("bizRe")+o("gm4sb").resolve("jiBhp")).then((function(){return o("eaSE0")}))})),o.register("3WFuy",(function(t,e){"use strict";var n=o("667pM");t.exports=n((function(t){return new Promise((function(e,n){var r=document.getElementsByTagName("script");if([].concat(r).some((function(e){return e.src===t})))e();else{var o=document.createElement("script");o.async=!0,o.type="text/javascript",o.charset="utf-8",o.src=t,o.onerror=function(e){var r=new TypeError("Failed to fetch dynamically imported module: ".concat(t,". Error: ").concat(e.message));o.onerror=o.onload=null,o.remove(),n(r)},o.onload=function(){o.onerror=o.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),o.register("667pM",(function(t,e){"use strict";var n={},r={},o={};function a(t){switch(t){case"preload":return r;case"prefetch":return o;default:return n}}t.exports=function(t,e){return function(n){var r=a(e);return r[n]?r[n]:r[n]=t.apply(null,arguments).catch((function(t){throw delete r[n],t}))}}})),o.register("5waPY",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var o={};function a(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return a(t[2])}return"/"}(),o[t]=e),e}})),o("gm4sb").register(JSON.parse('{"bizRe":"index.6fb5b668.js","jiBhp":"setup_gadget.2188d193.js"}'));
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var u=Object.prototype.toString,c=Array.isArray||function(t){return"[object Array]"===u.call(t)};function s(t){return"function"==typeof t}function d(t){return c(t)?"array":void 0===t?"undefined":function(t){return t&&t.constructor===Symbol?"symbol":typeof t}(t)}function f(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function h(t,e){return null!=t&&"object"==typeof t&&e in t}var p=RegExp.prototype.test;var v=/\S/;function m(t){return!function(t,e){return p.call(t,e)}(v,t)}var g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};var y=/\s*/,b=/\s+/,w=/\s*=/,k=/\s*\}/,C=/#|\^|\/|>|\{|&|=|!/;function T(t){this.string=t,this.tail=t,this.pos=0}function x(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function H(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}T.prototype.eos=function(){return""===this.tail},T.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var n=e[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},T.prototype.scanUntil=function(t){var e,n=this.tail.search(t);switch(n){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=e.length,e},x.prototype.push=function(t){return new x(t,this)},x.prototype.lookup=function(t){var e,n,r,o=this.cache;if(o.hasOwnProperty(t))e=o[t];else{for(var a,i,l,u=this,c=!1;u;){if(t.indexOf(".")>0)for(a=u.view,i=t.split("."),l=0;null!=a&&l<i.length;)l===i.length-1&&(c=h(a,i[l])||(n=a,r=i[l],null!=n&&"object"!=typeof n&&n.hasOwnProperty&&n.hasOwnProperty(r))),a=a[i[l++]];else a=u.view[t],c=h(u.view,t);if(c){e=a;break}u=u.parent}o[t]=e}return s(e)&&(e=e.call(this.view)),e},H.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},H.prototype.parse=function(t,e){var n=this.templateCache,r=t+":"+(e||E.tags).join(":"),o=void 0!==n,a=o?n.get(r):void 0;return null==a&&(a=function(t,e){if(!t)return[];var n,r,o,a=!1,i=[],l=[],u=[],s=!1,d=!1,h="",p=0;function v(){if(s&&!d)for(;u.length;)delete l[u.pop()];else u=[];s=!1,d=!1}function g(t){if("string"==typeof t&&(t=t.split(b,2)),!c(t)||2!==t.length)throw new Error("Invalid tags: "+t);n=new RegExp(f(t[0])+"\\s*"),r=new RegExp("\\s*"+f(t[1])),o=new RegExp("\\s*"+f("}"+t[1]))}g(e||E.tags);for(var x,H,I,M,B,L,R=new T(t);!R.eos();){if(x=R.pos,I=R.scanUntil(n))for(var S=0,j=I.length;S<j;++S)m(M=I.charAt(S))?(u.push(l.length),h+=M):(d=!0,a=!0,h+=" "),l.push(["text",M,x,x+1]),x+=1,"\n"===M&&(v(),h="",p=0,a=!1);if(!R.scan(n))break;if(s=!0,H=R.scan(C)||"name",R.scan(y),"="===H?(I=R.scanUntil(w),R.scan(w),R.scanUntil(r)):"{"===H?(I=R.scanUntil(o),R.scan(k),R.scanUntil(r),H="&"):I=R.scanUntil(r),!R.scan(r))throw new Error("Unclosed tag at "+R.pos);if(B=">"==H?[H,I,x,R.pos,h,p,a]:[H,I,x,R.pos],p++,l.push(B),"#"===H||"^"===H)i.push(B);else if("/"===H){if(!(L=i.pop()))throw new Error('Unopened section "'+I+'" at '+x);if(L[1]!==I)throw new Error('Unclosed section "'+L[1]+'" at '+x)}else"name"===H||"{"===H||"&"===H?d=!0:"="===H&&g(I)}if(v(),L=i.pop())throw new Error('Unclosed section "'+L[1]+'" at '+R.pos);return function(t){for(var e,n=[],r=n,o=[],a=0,i=t.length;a<i;++a)switch((e=t[a])[0]){case"#":case"^":r.push(e),o.push(e),r=e[4]=[];break;case"/":o.pop()[5]=e[2],r=o.length>0?o[o.length-1][4]:n;break;default:r.push(e)}return n}(function(t){for(var e,n,r=[],o=0,a=t.length;o<a;++o)(e=t[o])&&("text"===e[0]&&n&&"text"===n[0]?(n[1]+=e[1],n[3]=e[3]):(r.push(e),n=e));return r}(l))}(t,e),o&&n.set(r,a)),a},H.prototype.render=function(t,e,n,r){var o=this.getConfigTags(r),a=this.parse(t,o),i=e instanceof x?e:new x(e,void 0);return this.renderTokens(a,i,n,t,r)},H.prototype.renderTokens=function(t,e,n,r,o){for(var a,i,l,u="",c=0,s=t.length;c<s;++c)l=void 0,"#"===(i=(a=t[c])[0])?l=this.renderSection(a,e,n,r,o):"^"===i?l=this.renderInverted(a,e,n,r,o):">"===i?l=this.renderPartial(a,e,n,o):"&"===i?l=this.unescapedValue(a,e):"name"===i?l=this.escapedValue(a,e,o):"text"===i&&(l=this.rawValue(a)),void 0!==l&&(u+=l);return u},H.prototype.renderSection=function(t,e,n,r,o){var a=this,i="",l=e.lookup(t[1]);if(l){if(c(l))for(var u=0,d=l.length;u<d;++u)i+=this.renderTokens(t[4],e.push(l[u]),n,r,o);else if("object"==typeof l||"string"==typeof l||"number"==typeof l)i+=this.renderTokens(t[4],e.push(l),n,r,o);else if(s(l)){if("string"!=typeof r)throw new Error("Cannot use higher-order sections without the original template");null!=(l=l.call(e.view,r.slice(t[3],t[5]),(function(t){return a.render(t,e,n,o)})))&&(i+=l)}else i+=this.renderTokens(t[4],e,n,r,o);return i}},H.prototype.renderInverted=function(t,e,n,r,o){var a=e.lookup(t[1]);if(!a||c(a)&&0===a.length)return this.renderTokens(t[4],e,n,r,o)},H.prototype.indentPartial=function(t,e,n){for(var r=e.replace(/[^ \t]/g,""),o=t.split("\n"),a=0;a<o.length;a++)o[a].length&&(a>0||!n)&&(o[a]=r+o[a]);return o.join("\n")},H.prototype.renderPartial=function(t,e,n,r){if(n){var o=this.getConfigTags(r),a=s(n)?n(t[1]):n[t[1]];if(null!=a){var i=t[6],l=t[5],u=t[4],c=a;0==l&&u&&(c=this.indentPartial(a,u,i));var d=this.parse(c,o);return this.renderTokens(d,e,n,c,r)}}},H.prototype.unescapedValue=function(t,e){var n=e.lookup(t[1]);if(null!=n)return n},H.prototype.escapedValue=function(t,e,n){var r=this.getConfigEscape(n)||E.escape,o=e.lookup(t[1]);if(null!=o)return"number"==typeof o&&r===E.escape?String(o):r(o)},H.prototype.rawValue=function(t){return t[1]},H.prototype.getConfigTags=function(t){return c(t)?t:t&&"object"==typeof t?t.tags:void 0},H.prototype.getConfigEscape=function(t){return t&&"object"==typeof t&&!c(t)?t.escape:void 0};var E={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){I.templateCache=t},get templateCache(){return I.templateCache}},I=new H;E.clearCache=function(){return I.clearCache()},E.parse=function(t,e){return I.parse(t,e)},E.render=function(t,e,n,r){if("string"!=typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+d(t)+'" was given as the first argument for mustache#render(template, view, partials)');return I.render(t,e,n,r)},E.escape=function(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return g[t]}))},E.Scanner=T,E.Context=x,E.Writer=H;var M=E,B={};B.get={innerHTML:function(t){return t.innerHTML},textContent:function(t){return t.textContent},value:function(t){return t.value},template:function(t){var e="[data-for='".concat(t.id||t.name,"']"),n=document.querySelector(e).innerHTML;return M.render(n,{})}},B.set={innerHTML:function(t,e){return t.innerHTML=e,"target HTML is now ".concat(e)},textContent:function(t,e){return t.textContent=e,"target text is now ".concat(e)},value:function(t,e){return t.value=e,"target value is now ".concat(e)}},B.add={innerHTML:function(t,e){t.innerHTML=t.innerHTML+e},textContent:function(t,e){t.textContent=t.textContent+e},value:function(t,e){t.value=t.value+e}};var L=function(){var t;null===(t=document.getElementById("ModalWrapper"))||void 0===t||t.remove()};B.modal=function(t){R.click.closeModal=R.click.closeModal||L;var e='<div data-click="closeModal" id="ModalContent">'.concat(t,"</div>"),n=document.createElement("div");n.id="ModalWrapper",n.dataset.click="closeModal",n.innerHTML=e,document.body.appendChild(n)},B.alert=function(t){var e='<h1>Alert</h1><hr><div id="Alert">'.concat(t,'<hr><button data-click="closeModal">Okay</button></div>');B.modal(e)},B.warning=function(t){var e='<h1>Warning</h1><hr><div id="Warning">'.concat(t,'<hr><button data-click="closeModal">Okay</button></div>');return B.modal(e),!1},B.confirm=function(t,e,n){var r='<h1>Confirm</h1><hr>\n                    <div id="Confirm">'.concat(t,'<hr>\n                    <button data-click="confirmYes">Yes</button>\n                    <button data-click="confirmNo">No</button>\n                    </div>');R.click.confirmYes=function(){L(),null==e||e()},R.click.confirmNo=function(){L(),null==n||n()},B.modal(r)},B.textInput=function(t){R.click.processTextInput=function(e){var n=document.getElementById("TextInput").value;L(),t.call(e.target,n)},B.modal('<h2>Input Text</h2>\n                    <textarea id="TextInput" class="modal-input">Copy/Paste Here</textarea>\n                    <hr>\n                    <button data-click="processTextInput">Continue</button>\n                    ')};var R={click:{},change:{},keyup:{},actions:{}},S=function(t,e,n){var r,o={detail:e},a=new CustomEvent(t,o);null===(r=(n=null!=n?n:document).dispatchEvent)||void 0===r||r.call(n,a,o)};R.click.addToPage=function(){if(console.log("Adding HTML..."),!N.isValid)return B.warning(N.validationError),!1;S("gadget_insert",N.htmlOutput)},R.actions.importHtml=function(t){if(!N.import(t))return B.warning("Could Not Find Table in Imported HTML"),!1;N.updateInterface()},R.click.textInput=function(t){var e=t.dataset.action;B.textInput((function(t){var n,r;null===(r=(n=R.actions)[e])||void 0===r||r.call(n,t)}))},R.click.resetTable=function(){B.confirm("Are you sure you want to reset the table? All data will be lost.",(function(){N.fullReset()}),null)},R.click.addColumn=function(t){var e;N.columns>=10&&B.alert("Having more than 10 columns is not recommended.");var n=null!==(e=t.dataset.column)&&void 0!==e?e:null;n=null!=n?parseInt(n)+1:null,N.addColumn(n),N.updateInterface(["Header","Body"])},R.click.addRow=function(t){var e;N.rows>=30&&B.alert("Tables this large can be difficult to read. Consider using multiple tables instead.");var n=null!==(e=t.dataset.row)&&void 0!==e?e:null;n=null!=n?parseInt(n)+1:null,N.addRow(n),N.updateInterface(["Body"])},R.click.removeColumn=function(t){if(1===N.columns)return B.warning("You must have at least 1 column.");N.removeColumn(t.dataset.column),N.updateInterface(["Header","Body"])},R.click.removeRow=function(t){if(1===N.rows)return B.warning("You must have at least 1 row.");N.removeRow(t.dataset.row),N.updateInterface(["Body"])},R.keyup.syncColumns=function(t){var e,n=null!==(e=t.value)&&void 0!==e?e:1,r=N.columns,o=0;if(n==r)return!1;if(n>r)for(o=r;o<n;o++)N.addColumn();if(n<r)for(o=r;o>n;o--)N.removeColumn();console.log("Columns Synced")},R.keyup.syncRows=function(t){var e,n=null!==(e=t.value)&&void 0!==e?e:1,r=N.rows,o=0;if(n==r)return!1;if(n>r)for(o=r;o<n;o++)N.addRow();if(n<r)for(o=r;o>n;o--)N.removeRow();console.log("Rows Synced")},R.change.syncColumns=function(t){R.keyup.syncColumns(t)},R.change.syncRows=R.keyup.syncRows,R.click.insertIntoEditor=function(t){},R.change.syncHeading=function(t){var e=t.dataset.location.split(",");N.updateTableHead(e[1],t.value),N.updateInterface(["Header"])},R.change.syncValue=function(t){var e=t.dataset.location.split(",");N.updateTableBody(e[0],e[1],t.value)},R.keyup.syncCaption=function(t){N.caption=t.value,N.updateInterface(["Caption"])},R.click.getHtmlCode=function(){var t="<textarea class='embed'>".concat(N.htmlOutput,"</textarea>");B.modal(t)},R.click.previewTable=function(){B.modal(N.htmlOutput)},R.keyup.syncDefaultValue=function(t){N.defaultNewValue=t.value},R.click.toggleFor=function(t){var e,n=null!==(e=t.dataset.for)&&void 0!==e?e:"body";if(!(n=document.querySelector(n))instanceof HTMLElement)return!1;n.classList.toggle("hidden")};var j=function(){"use strict";function t(e){a(this,t),this.name=e,this.start=performance.now(),this.result=0}return l(t,[{key:"stop",value:function(){return this.result=performance.now()-this.start,this}},{key:"detailedResults",get:function(){return'Task "'.concat(this.name,'" executed in ').concat(this.result," ms.")}}]),t}(),N=new(function(){"use strict";function t(e){a(this,t),this.tableId=e,this.caption="Table Caption",this.tableHeading=["Heading"],this.tableBody=[["Value"]],this.defaultNewValue="New Value",this.templates={}}return l(t,[{key:"isValid",get:function(){return this.caption.length<=0?(this.validationError="The caption cannot be blank.",!1):this.tableHeading.length<1?(this.validationError="The table must have a header row.",!1):!(this.tableBody.length<1)||(this.validationError="The table most have content.",!1)}},{key:"element",get:function(){return document.getElementById(this.tableId)}},{key:"columns",get:function(){return this.tableHeading.length}},{key:"rows",get:function(){return this.tableBody.length}},{key:"tdTemplate",get:function(){var t;if(this.templates.td)return this.templates.td;var e='.td[data-template-for="'.concat(this.tableId,'"]'),n=null===(t=document.querySelector(e))||void 0===t?void 0:t.innerHTML;return this.templates.td=n,n}},{key:"thTemplate",get:function(){var t;if(this.templates.th)return this.templates.th;var e='.th[data-template-for="'.concat(this.tableId,'"]'),n=null===(t=document.querySelector(e))||void 0===t?void 0:t.innerHTML;return this.templates.th=n,n}},{key:"rowTemplate",get:function(){var t;if(this.templates.row)return this.templates.row;var e='.row[data-template-for="'.concat(this.tableId,'"]'),n=null===(t=document.querySelector(e))||void 0===t?void 0:t.innerHTML;return this.templates.row=n,n}},{key:"import",value:function(t){var e,n,r,o,a,i=this,l=document.createElement("div");if(document.body.appendChild(l),l.style.visibility="hidden",l.innerHTML=t,(null!==(o=null===(e=l.querySelector("table"))||void 0===e||null===(n=e.children)||void 0===n?void 0:n.length)&&void 0!==o?o:0)<=0)return!1;var u=null!==(a=null===(r=l.querySelector("caption"))||void 0===r?void 0:r.textContent)&&void 0!==a?a:"No Caption",c=Array.from(l.querySelectorAll("th")).map((function(t){return t.textContent})),s=0,d=Array.from(l.querySelectorAll("tr")).map((function(t,e){var n=Array.from(t.querySelectorAll("td")).map((function(t){return t.textContent}));return s=s<n.length?n.length:s,n})).filter((function(t){return t.length>0}));if(s=s<c.length?c.length:s,d.forEach((function(t){for(var e=s-t.length,n=0;n<e;n++)t.push(i.defaultNewValue)})),c.length<s)for(var f=s-c.length,h=0;h<f;h++)c.push("Heading");return l.parentElement.removeChild(l),this.caption=u,this.tableHeading=c,this.tableBody=d,!0}},{key:"fullReset",value:function(){this.caption="Table Caption",this.tableHeading=["Heading"],this.tableBody=[["Value"]],this.defaultNewValue="New Value",this.updateInterface()}},{key:"addColumn",value:function(t){var e=this;t=null!=t?t:this.tableHeading.length,this.tableHeading.splice(t,0,"New Heading"),this.tableBody.forEach((function(n,r){n.splice(t,0,e.defaultNewValue)}))}},{key:"addRow",value:function(t){var e=this;t=null!=t?t:this.tableBody.length;var n=[];this.tableHeading.forEach((function(t,r){n.push(e.defaultNewValue)})),this.tableBody.splice(t,0,n)}},{key:"removeColumn",value:function(t){this.tableHeading.splice(t,1),this.tableBody.forEach((function(e,n){e.splice(t,1)}))}},{key:"removeRow",value:function(t){this.tableBody.splice(t,1)}},{key:"htmlOutput",get:function(){var t=this.tableHeading.map((function(t){return"\n           <th>".concat(t,"</th>")})).join(" "),e="";return this.tableBody.forEach((function(t){e+="\n      <tr>"+t.map((function(t){return"\n         <td>".concat(t,"</td>")})).join(" ")+"\n     </tr>"}))," \n<table>\n    <caption>".concat(this.caption,"</caption>\n    <thead>\n        <tr>").concat(t,"\n        </tr>\n    </thead>\n    <tbody>").concat(e,"\n    </tbody>\n</table>")}},{key:"_calcNumber",value:function(t,e){var n=e+this.columns*t+1;n<10?"0".concat(n):"".concat(n);return n}},{key:"_uiCaption",value:function(){this.element.querySelector("caption").textContent=this.caption}},{key:"_uiHeader",value:function(){var t=this,e=this._calcNumber.bind(this),n=this.tableHeading.map((function(n,r){var o={column:r,number:e(0,r),row:0,value:n,type:"Heading",first:0===r};return M.render(t.thTemplate,o)})).join("");this.element.querySelector("thead").innerHTML=n}},{key:"_uiBody",value:function(){var t=this,e="",n=this.columns,r=this._calcNumber.bind(this);this.tableBody.forEach((function(o,a){var i=t,l={rowContent:o.map((function(t,e){var n={column:e,row:a,number:r(a,e),value:t,type:"Value"};return n.first=0==e,M.render(i.tdTemplate,n)})).join(""),row:a,nextRow:a+1,columns:n};e+=M.render(t.rowTemplate,l)})),this.element.querySelector("tbody").innerHTML=e}},{key:"updateInterface",value:function(t){for(var e=new j("Update UI"),n=0,r=(t=null!=t?t:["Caption","Header","Body"]).length;n<r;n++){var o="_ui".concat(null==t?void 0:t[n]);(null===this||void 0===this?void 0:this[o]).bind(this).call()}console.log(e.stop().detailedResults),e.result>50&&B.alert("The performance of this application is lower than normal. This table may be too large.")}},{key:"updateTableHead",value:function(t,e){var n;(null===(n=this.tableHeading)||void 0===n?void 0:n[t])&&(this.tableHeading[t]=e)}},{key:"updateTableBody",value:function(t,e,n){var r,o;(null===(r=this.tableBody)||void 0===r||null===(o=r[t])||void 0===o?void 0:o[e])&&(this.tableBody[t][e]=n)}}]),t}())("MainTable");document.body.addEventListener("keyup",(function(t){var e,n,r=t.target;null===(n=(e=R.keyup)[r.dataset.keyup])||void 0===n||n.call(e,r,t)})),document.body.addEventListener("change",(function(t){var e,n,r=t.target;null===(n=(e=R.change)[r.dataset.change])||void 0===n||n.call(e,r,t)})),document.body.addEventListener("click",(function(t){var e,n,r=t.target;null===(n=(e=R.click)[r.dataset.click])||void 0===n||n.call(e,r,t)})),document.body.onload=function(){N.updateInterface()},!0===window.isGadget&&o("4YlIw").then((function(t){var e=t.default;"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}))}();
//# sourceMappingURL=index.6fb5b668.js.map