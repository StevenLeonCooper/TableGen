!function(){function t(t,e,a,n){Object.defineProperty(t,e,{get:a,set:n,enumerable:!0,configurable:!0})}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire83a6;e.register("eaSE0",(function(a,n){t(a.exports,"default",(function(){return o}));var i=e("8txii"),o=function(){var t;i.default.ready().then(i.default.fetch).then((function(){console.log("FZ: ".concat(i.default.getConfig("font_size")))})),document.addEventListener("gadget_insert",(function(t){var e=t.detail;i.default.oucInsertAtCursor(e).then((function(t){t.error&&alert(t.error)})),console.log("Html Added to Page")})),console.log(null!==(t=window.message)&&void 0!==t?t:"No Message, Setup Done."),$=$||window.$,$(i.default).on({expanded:function(t){console.log("Gadget expanded.")},collapsed:function(t){console.log("Gadget collapsed.")},configuration:function(t,e){console.log("New config:",e),$("#main").css({"font-size":e.font_size})},notification:function(t,e){console.log("Notification received:",e)}})}})),e.register("8txii",(function(e,a){function n(t,e){var a=i,n=null,o=Math.random().toString().slice(2),s={name:t,gid:a.gid,origin:a.url,token:a.token,place:a.place,payload:e,callback:o};n=new $.Deferred;var r=function(t){if(t.origin==a.msghost){var e=t.data;if("string"==typeof e)try{e=JSON.parse(e)}catch(t){return void console.log("Cannot parse message from OU Campus app:",e)}console.log("Response from OU Campus:",e),e.callback==o&&(window.removeEventListener("message",r,!1),n.resolve(e.payload))}};return window.addEventListener("message",r,!1),window.top.postMessage(JSON.stringify(s),a.msghost),n}t(e.exports,"default",(function(){return r}));var i={ready:function(t){var e=new $.Deferred;return this.isReady?(t&&t(),e.resolve()):$(this).one("ready",(function(){t&&t(),e.resolve()})),e},get:function(t){return"object"==typeof this[t]?JSON.parse(JSON.stringify(this[t])):this[t]},set:function(t,e){if("string"==typeof t)this[t]=e;else for(var a in t)t.hasOwnProperty(a)&&(this[a]=t[a])},getConfig:function(t){return"object"==typeof this.config[t]?JSON.parse(JSON.stringify(this.config[t])):this.config[t]},setConfig:function(t,e){if("string"==typeof t)this.config[t]=e;else for(var a in t)t.hasOwnProperty(a)&&(this.config[a]=t[a])},fetch:function(){var t=this,e=t.apihost+"/gadgets/view",a={authorization_token:t.token,account:t.account,gadget:t.gid};return $.ajax({type:"GET",url:e,data:a,success:function(e){for(var a in t.config={},e.config)e.config.hasOwnProperty(a)&&(t.config[a]=e.config[a].value)},error:function(t,e,a){console.log("Fetch error:",e,a)}})},save:function(t,e){t&&this.setConfig(t,e);var a=this,n=a.apihost+"/gadgets/configure",i=a.config;return i.authorization_token=a.token,i.account=a.account,i.gadget=a.gid,$.ajax({type:"POST",url:n,data:i,success:function(t){},error:function(t,e,a){console.log("Save error:",e,a)}})},_sendMessageToTop:n,oucGetCurrentFileInfo:function(){return n("get-current-file-info")},oucInsertAtCursor:function(t){return n("insert-at-cursor",t)},oucGetCurrentLocation:function(){return n("get-location")},oucSetCurrentLocation:function(t){return n("set-location",t)},oucRefreshLocation:function(){return n("refresh-location")},oucGetWYSIWYGSelection:function(){return n("get-wysiwyg-selection")},oucGetWYSIWYGContent:function(){return n("get-wysiwyg-content")},oucGetSourceContent:function(){return n("get-source-content")}};for(var o in i)i[o]=i[o].bind(i);var s={gadget:i,paramValidation:function(t){if(!t)throw"Missing parameters for Metadata API request.";if(!t.action)throw"Missing 'action' property in options object";if(!(("update"!==t.action&&"delete"!==t.action&&"view"!==t.action||t.id)&&("create"!==t.action||t.mime_type&&t.metadata)&&("link"!==t.action||t.item&&t.id)&&("unlink"!==t.action||t.item)&&("grouplink"!==t.action||t.id&&t.groups)&&("groupunlink"!==t.action||t.id&&t.groups)&&("list"!==t.action||t.mime_type)))throw"Missing required parameter for '"+t.action+"' Metadata API request"},cleanProps:function(t,e){for(var a in t){var n;switch(a){case"mime_type":case"metadata":case"metadatas":case"scope":case"groups":case"item":case"item_type":case"id":case"ids":case"asset":case"page":case"directory":case"site":case"ou_site":n=!0;break;default:n=!1}n&&(e.data[a]=t[a],delete t[a])}return e},create:function(t,e){t||(t={}),e||(e={}),t.action="create",this.paramValidation(t);var a={type:"POST",dataType:"json",url:this.gadget.apihost+"/metadata/new",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},update:function(t,e){t||(t={}),e||(e={}),t.action="update",this.paramValidation(t);var a={type:"POST",dataType:"json",url:this.gadget.apihost+"/metadata/save",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},delete:function(t,e){t||(t={}),e||(e={}),t.action="delete",this.paramValidation(t);var a={type:"POST",dataType:"json",url:this.gadget.apihost+"/metadata/delete",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},list:function(t,e){t||(t={}),e||(e={}),t.action="list",this.paramValidation(t);var a={type:"GET",dataType:"json",url:this.gadget.apihost+"/metadata/list",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},view:function(t,e){t||(t={}),e||(e={}),t.action="view",this.paramValidation(t);var a={type:"GET",dataType:"json",url:this.gadget.apihost+"/metadata/view",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},link:function(t,e){t||(t={}),e||(e={}),t.action="link",this.paramValidation(t);var a={type:"POST",dataType:"json",url:this.gadget.apihost+"/metadata/"+t.link_type+"link",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},unlink:function(t,e){t||(t={}),e||(e={}),t.action="unlink",this.paramValidation(t);var a={type:"POST",dataType:"json",url:this.gadget.apihost+"/metadata/"+t.link_type+"unlink",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},groupLink:function(t,e){t||(t={}),e||(e={}),t.action="grouplink",this.paramValidation(t);var a={type:"POST",dataType:"json",url:this.gadget.apihost+"/metadata/grouplink",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},groupUnlink:function(t,e){t||(t={}),e||(e={}),t.action="groupunlink",this.paramValidation(t);var a={type:"POST",dataType:"json",url:this.gadget.apihost+"/metadata/groupunlink",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))}};i.Metadata=s,i.set(function(){var t={},e=location.href.split(/[\?&]/),a=e.splice(1);t.url=e[0];for(var n,o,s,r=0;r<a.length;r++)o=(n=a[r].split("="))[0],s=n[1],t[o]=s;i.set(t)}()),n("get-environment").then((function(t){"Unrecognized message."!=t&&i.set(t),i.isReady=!0,$(i).trigger("ready")})),window.addEventListener("message",(function(t){var e=i;if(t.origin==e.msghost){var a=t.data;if("string"==typeof a)try{a=JSON.parse(a)}catch(t){return void console.log("Cannot parse message from OU Campus app:",a)}a.callback||(console.log("Message from OU Campus:",a),"configuration"==a.name&&e.setConfig(a.payload),$(e).trigger(a.name,a.payload))}}),!1),window.gadget=i,window.Gadget=function(){},window.Gadget.prototype=i;var r=i}))}();
//# sourceMappingURL=setup_gadget.2188d193.js.map
