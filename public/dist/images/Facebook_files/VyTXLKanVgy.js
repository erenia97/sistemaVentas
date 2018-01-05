if (self.CavalryLogger) { CavalryLogger.start_js(["sVBTv"]); }

__d('ChatOfflineTabSheet.react',['cx','fbt','React','WorkModeConfig'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){var n=this.props,o=n.turnOnChat,p=n.shortName,q=c('React').createElement('a',{href:'#',className:'fbChatGoOnlineLink',onClick:o},i._("act\u00edvalo")),r=void 0;if(c('WorkModeConfig').is_work_user){r=i._("Para chatear con {name} y otros compa\u00f1eros de trabajo, {link}.",[i.param('name',p),i.param('link',q)]);}else r=i._("Para chatear con {name} y otros amigos, {link}.",[i.param('name',p),i.param('link',q)]);return c('React').createElement('div',{className:"_2phz _1sk1"},c('React').createElement('div',{className:"_1skc",'data-jsid':'image'}),c('React').createElement('div',{className:"_1skd",'data-jsid':'text'},r));};m.prototype.componentWillUnmount=function(){if(this.props.privacyActionController)this.props.privacyActionController.destroy();};function m(){j.apply(this,arguments);}m.propTypes={shortName:l.string.isRequired,turnOnChat:l.func.isRequired,privacyActionController:l.object};f.exports=m;}),null);
__d('FantaTabSheetOffline.react',['ChatOfflineTabSheet.react','ChatVisibility','JSLogger','MercuryIDs','MercuryParticipants','React'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(l){i.constructor.call(this,l);this.$FantaTabSheetOffline2=c('JSLogger').create('blackbird');var m=c('MercuryIDs').getUserIDFromThreadID(l.threadID);if(m){var n=c('MercuryIDs').getParticipantIDFromUserID(m);this.$FantaTabSheetOffline1=c('MercuryParticipants').getNow(n);}}k.prototype.render=function(){var l,m=this.props,n=m.privacyController,o=m.threadID,p=this.$FantaTabSheetOffline1,q=this.$FantaTabSheetOffline2;if(p){var l=function(){var r=c('MercuryIDs').getUserIDFromThreadID(o);return {v:c('React').createElement(c('ChatOfflineTabSheet.react'),{shortName:p.short_name,privacyActionController:null,turnOnChat:function s(event){event.preventDefault();if(c('ChatVisibility').isOnline())q.error('tab_sheet_already_online');n.togglePrivacy();q.log('tab_sheet_go_online',{tab_id:r});}})};}();if(typeof l==="object")return l.v;}return null;};k.propTypes={privacyController:j.object.isRequired,threadID:j.string.isRequired};f.exports=k;}),null);