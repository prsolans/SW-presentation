function CheckChanges(){return CMSContentManager.checkChanges()}function Changed(){CMSContentManager.changed()}var CMSContentManager={allowSubmit:!1,confirmLeave:null,confirmLeaveShort:null,confirmChanges:!0,hdnSaveChangesId:"saveChanges",hdnContentChangedId:"contentChanged",_isContentChanged:null,checkChangedFields:null,eventManager:null,fullFormScope:!0,storeContentChangedStatus:function(){var t=$cmsj("form"),n=t.attr("action");n=this.storeContentChangedInUrl(n);t.attr("action",n)},storeContentChangedInUrl:function(n){return $cmsj.param&&$cmsj.param.querystring&&(n=$cmsj.param.querystring(n,"cmscontentchanged="+this._contentChanged()),this._contentChanged()||(n=n.replace(/\?cmscontentchanged=([^&]*)$/gi,""))),n},allowChanged:function(n){if(this.checkChangedFields==null)return!0;for(var t=0;t<this.checkChangedFields.length;t++)if(this.checkChangedFields[t]==n)return!0;return!1},changed:function(n){typeof n=="undefined"&&(n=!0);this._setContentChanged(n);this.eventManager.trigger("contentChanged",n)},checkChanges:function(){return this.contentModified()&&this.confirmLeave!=null&&this.confirmChanges?confirm(this.confirmLeave)?(this.changed(!1),this._resetEditorsIsDirty(),refreshPageOnClose=!0,!0):!1:!0},submitAction:function(){return this.contentModified()&&!this.allowSubmit?$cmsj("#"+this.hdnSaveChangesId).val("1"):$cmsj("#"+this.hdnSaveChangesId).val("0"),this.allowSubmit=!0,!0},submitPage:function(){return!this.contentModified()||this.allowSubmit||this.submitAction()},initChanges:function(){var t="form *",i,n;this.fullFormScope||(t="[data-tracksavechanges='true'], [data-tracksavechanges='true'] *");i=$cmsj(t).filter(":visible").filter(":input").not(".dont-check-changes, .dont-check-changes *").not(":input[type=image]");i.each(function(){var n=$cmsj(this);CMSContentManager.allowChanged(n.attr("id"))&&(n.bind("change",function(n){CMSContentManager.fieldChanged(n.target)}),n.is("[readonly]")||n.bind("keyup",function(n){CMSContentManager.fieldChanged(n.target)}))});$cmsj.deparam&&$cmsj.deparam.querystring&&(n=$cmsj.deparam.querystring(location.href,!0),this._isContentChanged==null&&(this.changed(!1),n.cmscontentchanged!=null&&this.changed(n.cmscontentchanged)))},contentModified:function(){return this._contentChanged()||this._editorsChanged()},_fullTrim:function(n){return n.replace(/\s+/g,"")},_contentChanged:function(){return $cmsj("#"+this.hdnContentChangedId).val()=="true"},_setContentChanged:function(n){$cmsj("#"+this.hdnContentChangedId).val(n);this._isContentChanged=n},_editorsChanged:function(){var n,i,t;try{if(n=window.CKEDITOR,typeof n!="undefined"&&n.instances!=null)for(i in n.instances)if(this.allowChanged(i)&&(t=n.instances[i],t.checkDirty())){var r=t._.previousValue,u=this._fullTrim(r),f=this._fullTrim(t.getData());if(u!=f)return!0}}catch(e){}return!1},_resetEditorsIsDirty:function(){var n,t,i;try{if(n=window.CKEDITOR,typeof n!="undefined"&&n.instances!=null)for(t in n.instances)this.allowChanged(t)&&(i=n.instances[t],i.checkDirty()&&i.resetDirty())}catch(r){}return!1},isTopFrameValid:function(){return top.frames.cmsdesktop!=null},fieldChanged:function(n){n&&($cmsj(n).data("ignorechanges")||CMSContentManager.changed())}};CMSContentManager.eventManager==null&&(CMSContentManager.eventManager=$cmsj('<div id="cmsCMEventManager" style="display: none"><\/div>'),$cmsj("body").append(CMSContentManager.eventManager));$cmsj(document).ready(function(){CMSContentManager.initChanges();$cmsj("form").submit(function(){return CMSContentManager.submitPage()})})