var e,t,n,a,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=!1;function l(e){switch(e){case"preload":return n;case"prefetch":return a;default:return t}}function o(){return i||(i=!0,e={},t={},n={},a={},e=function(e,t){return function(n){let a=l(t);return a[n]?a[n]:a[n]=e.apply(null,arguments).catch((function(e){throw delete a[n],e}))}}),e}var s,u,c=!1;function d(){return c||(c=!0,s={},u=o(),s=u((function(e){return new Promise(((t,n)=>{let a=`i${(""+Math.random()).slice(2)}`;r[a]=e=>{t(e),i()};let i=()=>{delete r[a],l.onerror=null,l.remove()},l=document.createElement("script");l.async=!0,l.type="module",l.charset="utf-8",l.textContent=`import * as m from '${e}'; ${a}(m);`,l.onerror=function(e){n(e),i()},document.head.appendChild(l)}))}))),s}var h,p,m=!1;function f(){return p||(p=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return(""+e[0]).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}()),p}function g(){return m||(m=!0,p=null,(h={}).getBundleURL=f),h}var v,b=!1;
/*!
* mustache.js - Logic-less {{mustache}} templates with JavaScript
* http://github.com/janl/mustache.js
*/
var y=Object.prototype.toString,w=Array.isArray||function(e){return"[object Array]"===y.call(e)};function T(e){return"function"==typeof e}function C(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function k(e,t){return null!=e&&"object"==typeof e&&t in e}var H=RegExp.prototype.test;var x=/\S/;function E(e){return!function(e,t){return H.call(e,t)}(x,e)}var I={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};var M=/\s*/,B=/\s+/,$=/\s*=/,L=/\s*\}/,S=/#|\^|\/|>|\{|&|=|!/;function V(e){this.string=e,this.tail=e,this.pos=0}function R(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function N(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}V.prototype.eos=function(){return""===this.tail},V.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},V.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},R.prototype.push=function(e){return new R(e,this)},R.prototype.lookup=function(e){var t,n,a,r=this.cache;if(r.hasOwnProperty(e))t=r[e];else{for(var i,l,o,s=this,u=!1;s;){if(e.indexOf(".")>0)for(i=s.view,l=e.split("."),o=0;null!=i&&o<l.length;)o===l.length-1&&(u=k(i,l[o])||(n=i,a=l[o],null!=n&&"object"!=typeof n&&n.hasOwnProperty&&n.hasOwnProperty(a))),i=i[l[o++]];else i=s.view[e],u=k(s.view,e);if(u){t=i;break}s=s.parent}r[e]=t}return T(t)&&(t=t.call(this.view)),t},N.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},N.prototype.parse=function(e,t){var n=this.templateCache,a=e+":"+(t||j.tags).join(":"),r=void 0!==n,i=r?n.get(a):void 0;return null==i&&(i=function(e,t){if(!e)return[];var n,a,r,i=!1,l=[],o=[],s=[],u=!1,c=!1,d="",h=0;function p(){if(u&&!c)for(;s.length;)delete o[s.pop()];else s=[];u=!1,c=!1}function m(e){if("string"==typeof e&&(e=e.split(B,2)),!w(e)||2!==e.length)throw new Error("Invalid tags: "+e);n=new RegExp(C(e[0])+"\\s*"),a=new RegExp("\\s*"+C(e[1])),r=new RegExp("\\s*"+C("}"+e[1]))}m(t||j.tags);for(var f,g,v,b,y,T,k=new V(e);!k.eos();){if(f=k.pos,v=k.scanUntil(n))for(var H=0,x=v.length;H<x;++H)E(b=v.charAt(H))?(s.push(o.length),d+=b):(c=!0,i=!0,d+=" "),o.push(["text",b,f,f+1]),f+=1,"\n"===b&&(p(),d="",h=0,i=!1);if(!k.scan(n))break;if(u=!0,g=k.scan(S)||"name",k.scan(M),"="===g?(v=k.scanUntil($),k.scan($),k.scanUntil(a)):"{"===g?(v=k.scanUntil(r),k.scan(L),k.scanUntil(a),g="&"):v=k.scanUntil(a),!k.scan(a))throw new Error("Unclosed tag at "+k.pos);if(y=">"==g?[g,v,f,k.pos,d,h,i]:[g,v,f,k.pos],h++,o.push(y),"#"===g||"^"===g)l.push(y);else if("/"===g){if(!(T=l.pop()))throw new Error('Unopened section "'+v+'" at '+f);if(T[1]!==v)throw new Error('Unclosed section "'+T[1]+'" at '+f)}else"name"===g||"{"===g||"&"===g?c=!0:"="===g&&m(v)}if(p(),T=l.pop())throw new Error('Unclosed section "'+T[1]+'" at '+k.pos);return function(e){for(var t,n=[],a=n,r=[],i=0,l=e.length;i<l;++i)switch((t=e[i])[0]){case"#":case"^":a.push(t),r.push(t),a=t[4]=[];break;case"/":r.pop()[5]=t[2],a=r.length>0?r[r.length-1][4]:n;break;default:a.push(t)}return n}(function(e){for(var t,n,a=[],r=0,i=e.length;r<i;++r)(t=e[r])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(a.push(t),n=t));return a}(o))}(e,t),r&&n.set(a,i)),i},N.prototype.render=function(e,t,n,a){var r=this.getConfigTags(a),i=this.parse(e,r),l=t instanceof R?t:new R(t,void 0);return this.renderTokens(i,l,n,e,a)},N.prototype.renderTokens=function(e,t,n,a,r){for(var i,l,o,s="",u=0,c=e.length;u<c;++u)o=void 0,"#"===(l=(i=e[u])[0])?o=this.renderSection(i,t,n,a,r):"^"===l?o=this.renderInverted(i,t,n,a,r):">"===l?o=this.renderPartial(i,t,n,r):"&"===l?o=this.unescapedValue(i,t):"name"===l?o=this.escapedValue(i,t,r):"text"===l&&(o=this.rawValue(i)),void 0!==o&&(s+=o);return s},N.prototype.renderSection=function(e,t,n,a,r){var i=this,l="",o=t.lookup(e[1]);if(o){if(w(o))for(var s=0,u=o.length;s<u;++s)l+=this.renderTokens(e[4],t.push(o[s]),n,a,r);else if("object"==typeof o||"string"==typeof o||"number"==typeof o)l+=this.renderTokens(e[4],t.push(o),n,a,r);else if(T(o)){if("string"!=typeof a)throw new Error("Cannot use higher-order sections without the original template");null!=(o=o.call(t.view,a.slice(e[3],e[5]),(function(e){return i.render(e,t,n,r)})))&&(l+=o)}else l+=this.renderTokens(e[4],t,n,a,r);return l}},N.prototype.renderInverted=function(e,t,n,a,r){var i=t.lookup(e[1]);if(!i||w(i)&&0===i.length)return this.renderTokens(e[4],t,n,a,r)},N.prototype.indentPartial=function(e,t,n){for(var a=t.replace(/[^ \t]/g,""),r=e.split("\n"),i=0;i<r.length;i++)r[i].length&&(i>0||!n)&&(r[i]=a+r[i]);return r.join("\n")},N.prototype.renderPartial=function(e,t,n,a){if(n){var r=this.getConfigTags(a),i=T(n)?n(e[1]):n[e[1]];if(null!=i){var l=e[6],o=e[5],s=e[4],u=i;0==o&&s&&(u=this.indentPartial(i,s,l));var c=this.parse(u,r);return this.renderTokens(c,t,n,u,a)}}},N.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},N.prototype.escapedValue=function(e,t,n){var a=this.getConfigEscape(n)||j.escape,r=t.lookup(e[1]);if(null!=r)return"number"==typeof r&&a===j.escape?String(r):a(r)},N.prototype.rawValue=function(e){return e[1]},N.prototype.getConfigTags=function(e){return w(e)?e:e&&"object"==typeof e?e.tags:void 0},N.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!w(e)?e.escape:void 0};var j={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){A.templateCache=e},get templateCache(){return A.templateCache}},A=new N;j.clearCache=function(){return A.clearCache()},j.parse=function(e,t){return A.parse(e,t)},j.render=function(e,t,n,a){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+((w(r=e)?"array":typeof r)+'" was given as the first argument for mustache#render(template, view, partials)'));var r;return A.render(e,t,n,a)},j.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return I[e]}))},j.Scanner=V,j.Context=R,j.Writer=N;const U={};U.get={innerHTML:e=>e.innerHTML,textContent:e=>e.textContent,value:e=>e.value,template:e=>{let t=`[data-for='${e.id||e.name}']`,n=document.querySelector(t).innerHTML;return j.render(n,{})}},U.set={innerHTML:(e,t)=>(e.innerHTML=t,`target HTML is now ${t}`),textContent:(e,t)=>(e.textContent=t,`target text is now ${t}`),value:(e,t)=>(e.value=t,`target value is now ${t}`)},U.add={innerHTML:(e,t)=>{e.innerHTML=e.innerHTML+t},textContent:(e,t)=>{e.textContent=e.textContent+t},value:(e,t)=>{e.value=e.value+t}};const _=()=>{var e;null===(e=document.getElementById("ModalWrapper"))||void 0===e||e.remove()};U.modal=e=>{q.click.closeModal=q.click.closeModal||_;let t=`<div data-click="closeModal" id="ModalContent">${e}</div>`,n=document.createElement("div");n.id="ModalWrapper",n.dataset.click="closeModal",n.innerHTML=t,document.body.appendChild(n)},U.alert=e=>{let t=`<h1>Alert</h1><hr><div id="Alert">${e}<hr><button data-click="closeModal">Okay</button></div>`;U.modal(t)},U.warning=e=>{let t=`<h1>Warning</h1><hr><div id="Warning">${e}<hr><button data-click="closeModal">Okay</button></div>`;return U.modal(t),!1},U.confirm=(e,t,n)=>{let a=`<h1>Confirm</h1><hr>\n                    <div id="Confirm">${e}<hr>\n                    <button data-click="confirmYes">Yes</button>\n                    <button data-click="confirmNo">No</button>\n                    </div>`;q.click.confirmYes=()=>{_(),null==t||t()},q.click.confirmNo=()=>{_(),null==n||n()},U.modal(a)},U.textInput=e=>{q.click.processTextInput=t=>{let n=document.getElementById("TextInput").value;_(),e.call(t.target,n)},U.modal('<h2>Input Text</h2>\n                    <textarea id="TextInput" class="modal-input">Copy/Paste Here</textarea>\n                    <hr>\n                    <button data-click="processTextInput">Continue</button>\n                    ')};const q={click:{},change:{},keyup:{},actions:{}};q.click.addToPage=()=>{if(!mainTable.isValid)return U.warning(mainTable.validationError),!1;let e={detail:mainTable.htmlOutput};const t=new CustomEvent("gadget_insert",e);document.body.dispatchEvent(t)},q.actions.importHtml=e=>{if(!mainTable.import(e))return U.warning("Could Not Find Table in Imported HTML"),!1;mainTable.updateInterface()},q.click.textInput=e=>{let t=e.dataset.action;U.textInput((function(e){var n,a;null===(n=(a=q.actions)[t])||void 0===n||n.call(a,e)}))},q.click.resetTable=()=>{U.confirm("Are you sure you want to reset the table? All data will be lost.",(()=>{mainTable.fullReset()}),null)},q.click.addColumn=e=>{mainTable.columns>=10&&U.alert("Having more than 10 columns is not recommended.");let t=e.dataset.column??null;t=null!=t?parseInt(t)+1:null,mainTable.addColumn(t),mainTable.updateInterface(["Header","Body"])},q.click.addRow=e=>{mainTable.rows>=30&&U.alert("Tables this large can be difficult to read. Consider using multiple tables instead.");let t=e.dataset.row??null;t=null!=t?parseInt(t)+1:null,mainTable.addRow(t),mainTable.updateInterface(["Body"])},q.click.removeColumn=e=>{if(1===mainTable.columns)return U.warning("You must have at least 1 column.");mainTable.removeColumn(e.dataset.column),mainTable.updateInterface(["Header","Body"])},q.click.removeRow=e=>{if(1===mainTable.rows)return U.warning("You must have at least 1 row.");mainTable.removeRow(e.dataset.row),mainTable.updateInterface(["Body"])},q.change.syncHeading=e=>{let t=e.dataset.location.split(",");mainTable.updateTableHead(t[1],e.value),mainTable.updateInterface(["Header"])},q.change.syncValue=e=>{let t=e.dataset.location.split(",");mainTable.updateTableBody(t[0],t[1],e.value)},q.keyup.syncCaption=e=>{mainTable.caption=e.value,mainTable.updateInterface(["Caption"])},q.click.getHtmlCode=()=>{let e=`<textarea class='embed'>${mainTable.htmlOutput}</textarea>`;U.modal(e)},q.click.previewTable=()=>{U.modal(mainTable.htmlOutput)},q.keyup.syncDefaultValue=e=>{mainTable.defaultNewValue=e.value};class O{constructor(e){this.name=e,this.start=performance.now(),this.result=0}stop(){return this.result=performance.now()-this.start,this}get detailedResults(){return`Task "${this.name}" executed in ${this.result} ms.`}}export const mainTable=new class{constructor(e){this.tableId=e,this.caption="Table Caption",this.tableHeading=["Heading"],this.tableBody=[["Value"]],this.defaultNewValue="New Value",this.templates={}}get isValid(){return this.caption.length<=0?(this.validationError="The caption cannot be blank.",!1):this.tableHeading.length<1?(this.validationError="The table must have a header row.",!1):!(this.tableBody.length<1)||(this.validationError="The table most have content.",!1)}get element(){return document.getElementById(this.tableId)}get columns(){return this.tableHeading.length}get rows(){return this.tableBody.length}get tdTemplate(){var e;if(this.templates.td)return this.templates.td;let t=`.td[data-template-for="${this.tableId}"]`,n=null===(e=document.querySelector(t))||void 0===e?void 0:e.innerHTML;return this.templates.td=n,n}get thTemplate(){var e;if(this.templates.th)return this.templates.th;let t=`.th[data-template-for="${this.tableId}"]`,n=null===(e=document.querySelector(t))||void 0===e?void 0:e.innerHTML;return this.templates.th=n,n}get rowTemplate(){var e;if(this.templates.row)return this.templates.row;let t=`.row[data-template-for="${this.tableId}"]`,n=null===(e=document.querySelector(t))||void 0===e?void 0:e.innerHTML;return this.templates.row=n,n}import(e){var t,n,a;let r=document.createElement("div");if(document.body.appendChild(r),r.style.visibility="hidden",r.innerHTML=e,((null===(t=r.querySelector("table"))||void 0===t||null===(n=t.children)||void 0===n?void 0:n.length)??0)<=0)return!1;let i=(null===(a=r.querySelector("caption"))||void 0===a?void 0:a.textContent)??"No Caption",l=Array.from(r.querySelectorAll("th")).map((e=>e.textContent)),o=0,s=Array.from(r.querySelectorAll("tr")).map(((e,t)=>{let n=Array.from(e.querySelectorAll("td")).map((e=>e.textContent));return o=o<n.length?n.length:o,n})).filter((e=>e.length>0));if(o=o<l.length?l.length:o,s.forEach((e=>{let t=o-e.length,n=0;for(;n<t;n++)e.push(this.defaultNewValue)})),l.length<o){let e=o-l.length,t=0;for(;t<e;t++)l.push("Heading")}return r.parentElement.removeChild(r),this.caption=i,this.tableHeading=l,this.tableBody=s,!0}fullReset(){this.caption="Table Caption",this.tableHeading=["Heading"],this.tableBody=[["Value"]],this.defaultNewValue="New Value",this.updateInterface()}addColumn(e){e=e??this.tableHeading.length,this.tableHeading.splice(e,0,"New Heading"),this.tableBody.forEach(((t,n)=>{t.splice(e,0,this.defaultNewValue)}))}addRow(e){e=e??this.tableBody.length;let t=[];this.tableHeading.forEach(((e,n)=>{t.push(this.defaultNewValue)})),this.tableBody.splice(e,0,t)}removeColumn(e){this.tableHeading.splice(e,1),this.tableBody.forEach(((t,n)=>{t.splice(e,1)}))}removeRow(e){this.tableBody.splice(e,1)}get htmlOutput(){let e=this.tableHeading.map((e=>`\n           <th>${e}</th>`)).join(" "),t="";return this.tableBody.forEach((e=>{t+="\n      <tr>"+e.map((e=>`\n         <td>${e}</td>`)).join(" ")+"\n     </tr>"})),` \n<table>\n    <caption>${this.caption}</caption>\n    <thead>\n        <tr>${e}\n        </tr>\n    </thead>\n    <tbody>${t}\n    </tbody>\n</table>`}_calcNumber(e,t){let n=t+this.columns*e+1;return n}_uiCaption(){this.element.querySelector("caption").textContent=this.caption}_uiHeader(){let e=this._calcNumber.bind(this),t=this.tableHeading.map(((t,n)=>{let a={column:n,number:e(0,n),row:0,value:t,type:"Heading",first:0===n};return j.render(this.thTemplate,a)})).join("");this.element.querySelector("thead").innerHTML=t}_uiBody(){let e="",t=this.columns,n=this._calcNumber.bind(this);this.tableBody.forEach(((a,r)=>{let i={rowContent:a.map(((e,t)=>{let a={column:t,row:r,number:n(r,t),value:e,type:"Value"};return a.first=0==t,j.render(this.tdTemplate,a)})).join(""),row:r,nextRow:r+1,columns:t};e+=j.render(this.rowTemplate,i)})),this.element.querySelector("tbody").innerHTML=e}updateInterface(e){let t=new O("Update UI"),n=0,a=(e=e??["Caption","Header","Body"]).length;for(;n<a;n++){var r;let t=`_ui${null===(r=e)||void 0===r?void 0:r[n]}`;(null==this?void 0:this[t]).bind(this).call()}console.log(t.stop().detailedResults),t.result>50&&U.alert("The performance of this application is lower than normal. This table may be too large.")}updateTableHead(e,t){var n;null!==(n=this.tableHeading)&&void 0!==n&&n[e]&&(this.tableHeading[e]=t)}updateTableBody(e,t,n){var a,r;null!==(a=this.tableBody)&&void 0!==a&&null!==(r=a[e])&&void 0!==r&&r[t]&&(this.tableBody[e][t]=n)}}("MainTable");document.body.addEventListener("keyup",(e=>{var t,n;let a=e.target;null===(t=(n=q.keyup)[a.dataset.keyup])||void 0===t||t.call(n,a,e)})),document.body.addEventListener("change",(e=>{var t,n;let a=e.target;null===(t=(n=q.change)[a.dataset.change])||void 0===t||t.call(n,a,e)})),document.body.addEventListener("click",(e=>{var t,n;let a=e.target;null===(t=(n=q.click)[a.dataset.click])||void 0===t||t.call(n,a,e)})),document.body.onload=()=>{mainTable.updateInterface()},!0===window.isGadget&&(b||(b=!0,v={},v=d()(g().getBundleURL()+"setup_gadget.a49b2587.js")),v).then((e=>{const t=e.default;"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)}));
//# sourceMappingURL=index.1562a06d.js.map
