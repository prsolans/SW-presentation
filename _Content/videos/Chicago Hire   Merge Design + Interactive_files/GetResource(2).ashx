cmsdefine(["CMS/EventHub","jQuery"],function(n,t){var i,r,s,c,u,f,a=function(n){return n.css("position","fixed"),n.css("top",t(window).height()/2-n.outerHeight()/2),n.css("left",t(window).width()/2-n.outerWidth()/2),n},l=function(n){f=n;f&&!c&&(c=!0,f.load(o));window.noProgress||e(1e3)},h=function(){u&&(clearTimeout(u),u=null)},v=function(){u&&e(1e3)},y=function(n,t){if(!window.noProgress){var i=!1;try{i=Sys.WebForms.PageRequestManager.getInstance()._postBackSettings.async}catch(r){}(!i||t)&&e(n)}},e=function(n){window.noProgress||(h(),u=setTimeout(p,n))},p=function(){var e,c,u;h();i.length===0&&(i=t(s.overlayHtml),t(document.body).append(i));r.length===0&&(r=t(s.loaderHtml),t(document.body).append(r));e="cms-bootstrap";t(document.body).hasClass(e)||(c='<div class="'+e+'"><\/div>',r.wrap(c),i.wrap(c));i.click(o);n.publish("HideLoader",{except:this});a(r);f?(u=f.offset(),i.css({left:u.left,top:u.top,width:u.width,height:u.height})):i.css({left:0,top:0,width:"100%",height:"100%"});r.show();i.show()},w=function(n){n&&n.except===this||o()},o=function(){h();r.hide();i.hide()},b=function(){l()};return function(u){s=u;i=t("#cms-overlayer")||i;r=t("#cms-loader")||r;this.delayedShow=e;this.submitForm=y;this.show=l;this.hide=o;this.delay=v;t(window).one("unload",b);window.Loader=this;n.subscribe("HideLoader",w)}})