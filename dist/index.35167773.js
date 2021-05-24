!function(){function t(t,a){var i=e,n=null,o=Math.random().toString().slice(2),s={name:t,gid:i.gid,origin:i.url,token:i.token,place:i.place,payload:a,callback:o};return n=new $.Deferred,window.addEventListener("message",(function t(e){if(e.origin==i.msghost){var a=e.data;if("string"==typeof a)try{a=JSON.parse(a)}catch(t){return void console.log("Cannot parse message from OU Campus app:",a)}console.log("Response from OU Campus:",a),a.callback==o&&(window.removeEventListener("message",t,!1),n.resolve(a.payload))}}),!1),window.top.postMessage(JSON.stringify(s),i.msghost),n}var e={ready:function(t){var e=new $.Deferred;return this.isReady?(t&&t(),e.resolve()):$(this).one("ready",(function(){t&&t(),e.resolve()})),e},get:function(t){return"object"==typeof this[t]?JSON.parse(JSON.stringify(this[t])):this[t]},set:function(t,e){if("string"==typeof t)this[t]=e;else for(var a in t)t.hasOwnProperty(a)&&(this[a]=t[a])},getConfig:function(t){return"object"==typeof this.config[t]?JSON.parse(JSON.stringify(this.config[t])):this.config[t]},setConfig:function(t,e){if("string"==typeof t)this.config[t]=e;else for(var a in t)t.hasOwnProperty(a)&&(this.config[a]=t[a])},fetch:function(){var t=this,e=t.apihost+"/gadgets/view",a={authorization_token:t.token,account:t.account,gadget:t.gid};return $.ajax({type:"GET",url:e,data:a,success:function(e){for(var a in t.config={},e.config)e.config.hasOwnProperty(a)&&(t.config[a]=e.config[a].value)},error:function(t,e,a){console.log("Fetch error:",e,a)}})},save:function(t,e){t&&this.setConfig(t,e);var a=this,i=a.apihost+"/gadgets/configure",n=a.config;return n.authorization_token=a.token,n.account=a.account,n.gadget=a.gid,$.ajax({type:"POST",url:i,data:n,success:function(t){},error:function(t,e,a){console.log("Save error:",e,a)}})},_sendMessageToTop:t,oucGetCurrentFileInfo:function(){return t("get-current-file-info")},oucInsertAtCursor:function(e){return t("insert-at-cursor",e)},oucGetCurrentLocation:function(){return t("get-location")},oucSetCurrentLocation:function(e){return t("set-location",e)},oucRefreshLocation:function(){return t("refresh-location")},oucGetWYSIWYGSelection:function(){return t("get-wysiwyg-selection")},oucGetWYSIWYGContent:function(){return t("get-wysiwyg-content")},oucGetSourceContent:function(){return t("get-source-content")}};for(var a in e)e[a]=e[a].bind(e);var i={gadget:e,paramValidation:function(t){if(!t)throw"Missing parameters for Metadata API request.";if(!t.action)throw"Missing 'action' property in options object";if(!(("update"!==t.action&&"delete"!==t.action&&"view"!==t.action||t.id)&&("create"!==t.action||t.mime_type&&t.metadata)&&("link"!==t.action||t.item&&t.id)&&("unlink"!==t.action||t.item)&&("grouplink"!==t.action||t.id&&t.groups)&&("groupunlink"!==t.action||t.id&&t.groups))||"list"===t.action&&!t.mime_type)throw"Missing required parameter for '"+t.action+"' Metadata API request"},cleanProps:function(t,e){for(var a in t){var i;switch(a){case"mime_type":case"metadata":case"metadatas":case"scope":case"groups":case"item":case"item_type":case"id":case"ids":case"asset":case"page":case"directory":case"site":case"ou_site":i=!0;break;default:i=!1}i&&(e.data[a]=t[a],delete t[a])}return e},create:function(t,e){t||(t={}),e||(e={}),t.action="create",this.paramValidation(t);var a={type:"POST",dataType:"json",url:this.gadget.apihost+"/metadata/new",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},update:function(t,e){t||(t={}),e||(e={}),t.action="update",this.paramValidation(t);var a={type:"POST",dataType:"json",url:this.gadget.apihost+"/metadata/save",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},delete:function(t,e){t||(t={}),e||(e={}),t.action="delete",this.paramValidation(t);var a={type:"POST",dataType:"json",url:this.gadget.apihost+"/metadata/delete",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},list:function(t,e){t||(t={}),e||(e={}),t.action="list",this.paramValidation(t);var a={type:"GET",dataType:"json",url:this.gadget.apihost+"/metadata/list",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},view:function(t,e){t||(t={}),e||(e={}),t.action="view",this.paramValidation(t);var a={type:"GET",dataType:"json",url:this.gadget.apihost+"/metadata/view",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},link:function(t,e){t||(t={}),e||(e={}),t.action="link",this.paramValidation(t);var a={type:"POST",dataType:"json",url:this.gadget.apihost+"/metadata/"+t.link_type+"link",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},unlink:function(t,e){t||(t={}),e||(e={}),t.action="unlink",this.paramValidation(t);var a={type:"POST",dataType:"json",url:this.gadget.apihost+"/metadata/"+t.link_type+"unlink",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},groupLink:function(t,e){t||(t={}),e||(e={}),t.action="grouplink",this.paramValidation(t);var a={type:"POST",dataType:"json",url:this.gadget.apihost+"/metadata/grouplink",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))},groupUnlink:function(t,e){t||(t={}),e||(e={}),t.action="groupunlink",this.paramValidation(t);var a={type:"POST",dataType:"json",url:this.gadget.apihost+"/metadata/groupunlink",data:{site:t.ou_site||this.gadget.site,authorization_token:this.gadget.token}};return a=this.cleanProps(t,a),$.ajax($.extend(a,e))}};e.Metadata=i,e.set(function(){var t={},a=location.href.split(/[\?&]/),i=a.splice(1);t.url=a[0];for(var n,o,s,r=0;r<i.length;r++)o=(n=i[r].split("="))[0],s=n[1],t[o]=s;e.set(t)}()),t("get-environment").then((function(t){"Unrecognized message."!=t&&e.set(t),e.isReady=!0,$(e).trigger("ready")})),window.addEventListener("message",(function(t){var a=e;if(t.origin==a.msghost){var i=t.data;if("string"==typeof i)try{i=JSON.parse(i)}catch(t){return void console.log("Cannot parse message from OU Campus app:",i)}i.callback||(console.log("Message from OU Campus:",i),"configuration"==i.name&&a.setConfig(i.payload),$(a).trigger(i.name,i.payload))}}),!1),window.gadget=e,window.Gadget=function(){},window.Gadget.prototype=e}();
//# sourceMappingURL=index.35167773.js.map
