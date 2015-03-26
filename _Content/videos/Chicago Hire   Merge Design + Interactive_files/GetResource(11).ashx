function InitializePage(){IsIExplorer(8)?AddEvent(window,"load",function(){InitializePageStart()}):InitializePageStart()}function InitializePageStart(){window.cmsHeader=null;window.cmsHeaderPad=null;window.cmsFooter=null;window.cmsFooterPad=null;InitializeHeader();InitializeFooter();InitializeToolbarResize();AddEvent(window,"resize",function(){typeof EnsureToolbarWidth=="function"&&EnsureToolbarWidth();typeof InitializeToolbarResize=="function"&&InitializeToolbarResize()})}function InitializeToolbarResize(){var n,r;if(window.cmsHeader!=null)if(window.CKEDITOR)if(window.CKEDITOR.on){function t(){setTimeout(function(){ResizeToolbar()},100)}function i(n){n.editor.on("focus",t);n.editor.on("afterCommandExec",function(n){n.data.name==="toolbarCollapse"&&t()});t()}CKEDITOR.on("loaded",function(){CKEDITOR.on("instanceReady",i)});CKEDITOR.on("instanceReady",i);if(n=null,CKEDITOR.instances)for(n in CKEDITOR.instances)n&&(r=CKEDITOR.instances[n],i({editor:r}));n===null&&ResizeToolbar()}else setTimeout(function(){InitializeHeader();InitializeFooter();InitializeToolbarResize()},100);else ResizeToolbar();else setTimeout(function(){InitializeHeader();InitializeFooter();InitializeToolbarResize()},100)}function InitializeHeader(){try{var n=window.frames.pageview?window.frames.pageview.document:window.document;window.cmsHeader=n.getElementById("CMSHeaderDiv");window.cmsHeader!==null&&(window.cmsHeader.style.position!=="fixed"&&(window.cmsHeader.style.position="fixed",window.cmsHeader.style.top="0",window.cmsHeader.style.left="0",window.cmsHeader.style.right="0",window.cmsHeader.style.bottom="auto",window.cmsHeader.style.zIndex="10000",EnsureToolbarWidth()),window.cmsHeaderPad=n.getElementById("CMSHeaderPad"),window.cmsHeaderPad===null&&(window.cmsHeaderPad=n.createElement("div"),window.cmsHeaderPad.id="CMSHeaderPad",window.cmsHeaderPad.style.height="0px",window.cmsHeaderPad.style.lineHeight="0px",window.cmsHeader.parentNode.insertBefore(window.cmsHeaderPad,window.cmsHeader),CheckBackgroundPosition(n.body),window.CMSRfrLblsPos&&window.CMSRfrLblsPos()))}catch(t){}}function InitializeFooter(){try{var n=window.frames.pageview?window.frames.pageview.document:window.document;window.cmsFooter=n.getElementById("CMSFooterDiv");window.cmsFooter!==null&&(window.cmsFooter.style.position!=="fixed"&&(window.cmsFooter.style.position="fixed",window.cmsFooter.style.bottom="0",window.cmsFooter.style.left="0",window.cmsFooter.style.width="100%",window.cmsFooter.style.overflow="hidden",window.cmsFooter.style.zIndex="10000"),window.cmsFooterPad=n.getElementById("CMSFooterPad"),window.cmsFooterPad===null&&(window.cmsFooterPad=n.createElement("div"),window.cmsFooterPad.id="CMSFooterPad",window.cmsFooterPad.style.height="0px",n.body.appendChild(window.cmsFooterPad)))}catch(t){}}function CheckBackgroundPosition(n){var t="",i="",r,u;document.defaultView&&document.defaultView.getComputedStyle?(r=document.defaultView.getComputedStyle(n,"").getPropertyValue("background-position"),i=r.match(/^[\w-%]+/)[0],t=r.match(/[\w-%]+$/)[0]):n.currentStyle&&(t=n.currentStyle.backgroundPositionY,i=n.currentStyle.backgroundPositionX);u=/px$/.test(t);(t==="0%"||u||t==="top")&&(window.moveBodyBg=!0,window.bodyBgLeftPos=i,window.bodyBgTopPos=u?parseInt(t,10):0)}function GetHeight(){var t=-1,n;return window.cmsHeader&&(t=window.cmsHeader.innerHTML.indexOf("<")!==-1&&window.cmsHeader.innerHTML.indexOf(">")!==-1?window.cmsHeader.offsetHeight:0),n=-1,window.cmsFooter&&(n=window.cmsFooter.innerHTML.indexOf("<")!==-1&&window.cmsFooter.innerHTML.indexOf(">")!==-1?window.cmsFooter.offsetHeight:0),t===-1&&n===-1&&(InitializePage(),t=0,n=0),{header:t,footer:n}}function ResizeToolbar(){var n,t;try{n=GetHeight();window.cmsHeaderPad&&(window.cmsHeaderPad.style.height=n.header+"px",window.moveBodyBg&&(t=window.bodyBgLeftPos+" "+(window.bodyBgTopPos+n.header)+"px",window.document.body.style.backgroundPosition=t),window.CMSRfrLblsPos&&window.CMSRfrLblsPos(),window.cmsfixpanelheight&&(window.cmsHeader.style.top=cmsfixpanelheight+"px"));window.cmsFooterPad&&(window.cmsFooterPad.style.height=n.footer+"px")}catch(i){InitializeHeader();InitializeFooter()}}function ShowToolbar(){InitializeHeader();InitializeFooter();ResizeToolbar()}function EnsureToolbarWidth(){if(window.cmsHeader)if(IsIExplorer()){var n=window.cmsHeader.style.paddingLeft.replace(/px/,""),t=window.cmsHeader.style.paddingRight.replace(/px/,"");window.cmsHeader.style.width=document.documentElement.clientWidth-n-t+"px"}else window.cmsHeader.style.width="auto"}function Approve(n,t){try{window.frames.pageview.Approve?window.frames.pageview.Approve(n,t):alert(notAllowedAction)}catch(i){alert(notAllowedAction)}}function Reject(n){window.frames.pageview.Reject&&window.frames.pageview.Reject(n)}function CheckIn(n){try{window.frames.pageview.CheckIn?window.frames.pageview.CheckIn(n):alert(notAllowedAction)}catch(t){alert(notAllowedAction)}}function FramesRefresh(n,t){parent!==this&&parent.FramesRefresh&&parent.FramesRefresh(n,t)}function RefreshTree(n,t){return parent!==this&&parent.RefreshTree?parent.RefreshTree(n,t):!1}function SelectNode(n,t,i){if(parent!==this&&parent.SelectNode)return parent.SelectNode(n,t,i)}function SetMode(n,t){parent!=this&&parent.SetMode(n,t)}function CreateAnother(){parent!==this&&parent.CreateAnother?parent.CreateAnother():window.location.replace(window.location.href)}function CreateAnotherWithParam(n){parent!==this&&parent.CreateAnother?parent.CreateAnother():window.location.replace(window.location.href+n)}function NotAllowed(n,t){parent!==this&&parent.NotAllowed&&parent.NotAllowed(n,t)}function NewDocument(n,t){parent!==this&&parent.NewDocument&&parent.NewDocument(n,t)}function ConvertDocument(n,t){parent!==this&&parent.ConvertDocument&&parent.ConvertDocument(n,t)}function DeleteDocument(n){parent!==this&&parent.DeleteDocument&&parent.DeleteDocument(n)}function EditDocument(n,t){parent!==this&&parent.EditDocument&&parent.EditDocument(n,t)}function SpellCheck(n){try{window.frames.pageview.SpellCheck?window.frames.pageview.SpellCheck(n):alert(notAllowedAction)}catch(t){alert(notAllowedAction)}}function FileCreated(n,t,i){parent!==this&&parent.FileCreated&&parent.FileCreated(n,t,i)}function FocusFrame(){var n=document.getElementById("pageview");try{document.all?n.document.body.focus():n.contentDocument.body.focus()}catch(t){}}function AddEvent(n,t,i){n!==null&&n!==undefined&&(n.addEventListener?n.addEventListener(t,i,!1):n.attachEvent&&n.attachEvent("on"+t,i))}function IsIExplorer(n){if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){if(n){var t=new Number(RegExp.$1);return t==n}return!0}return!1}function SplitModeRefreshFrame(){parent!==this&&parent.SplitModeRefreshFrame&&parent.SplitModeRefreshFrame()}function ChangeDevice(n){parent!==this&&parent.ChangeDevice&&parent.ChangeDevice(n)}function CKRenameWidgetTextareas(n,t){var s,f,e,o,r;if(cmsDragEditableItem!==null&&typeof CKEDITOR!="undefined"&&CKEDITOR!==null&&CKEDITOR.instances!==null){s=cmsDragEditableItem;for(f in cmsDragEditableItem){var u=f,h=cmsDragEditableItem[f],i=document.getElementById(u);i!==null&&(e=n.replace(/\$/g,"_"),o=t.replace(/\$/g,"_"),u=i.id.replace(e,o),i.id=u,i.name=i.name.replace(n,t),r=$cmsj(i),r.val(r.data("value")),r.html(r.val()),i.defaultValue=r.html(),typeof CKReplace=="function"&&CKReplace(u,h))}}cmsDragEditableItem={}}function BeforeDropWebPart(n,t){cmsDragEditableItem={};typeof CKEDITOR!="undefined"&&CKEDITOR!==null&&CKEDITOR.instances!==null&&$cmsj("textarea",t).each(function(){var n=$cmsj(this),i=n.attr("id"),t=CKEDITOR.instances[i];typeof t!="undefined"&&(n.val(t.getData()),n.data("value",n.val()),cmsDragEditableItem[i]=t.config,t.destroy())})}window.cmsResizeIntervalIsSet=!1;var cmsDragEditableItem={}