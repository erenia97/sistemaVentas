if (self.CavalryLogger) { CavalryLogger.start_js(["FrY2N"]); }

__d('CurationModeDeps',['SUIAtlasTheme','SUIToggle.react','XUIButton.react','XUIButtonGroup.react','XUICard.react','XUIText.react'],(function a(b,c,d,e,f,g){var h={SUIAtlasTheme:c('SUIAtlasTheme'),SUIToggle:c('SUIToggle.react'),XUIButton:c('XUIButton.react'),XUIButtonGroup:c('XUIButtonGroup.react'),XUICard:c('XUICard.react'),XUIText:c('XUIText.react')};f.exports=h;}),null);
__d('ToggleCurateCommentPlaceInfo.react',['cx','fbt','CurationModeDeps','CurationModeEvents','PlaceListEventEmitter','React','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('CurationModeDeps').SUIAtlasTheme,m=c('CurationModeDeps').SUIToggle,n=c('CurationModeDeps').XUICard,o=c('CurationModeDeps').XUIText;j=babelHelpers.inherits(p,c('React').Component);k=j&&j.prototype;function p(q){'use strict';k.constructor.call(this,q);this.$ToggleCurateCommentPlaceInfo2=function(){c('PlaceListEventEmitter').emit(c('CurationModeEvents').TOGGLE_STATUS_CHANGE,{postID:this.props.postID,is_shown:!this.state.toggleValue});this.setState({toggleValue:!this.state.toggleValue});}.bind(this);this.$ToggleCurateCommentPlaceInfo1=new (c('SubscriptionsHandler'))();this.state={toggleValue:false};}p.prototype.componentDidMount=function(){'use strict';this.$ToggleCurateCommentPlaceInfo1.addSubscriptions(c('PlaceListEventEmitter').addListener(c('CurationModeEvents').TOGGLE_STATUS_REQUEST,function(q){if(this.props.postID===q.postID)q.response(this.state.toggleValue);}.bind(this)));};p.prototype.componentWillUnmount=function(){'use strict';this.$ToggleCurateCommentPlaceInfo1&&this.$ToggleCurateCommentPlaceInfo1.release();};p.prototype.render=function(){'use strict';return c('React').createElement(n,{className:"_2ph- _3-8x _e14",background:'light-wash'},c('React').createElement(o,{size:'medium',background:'light-wash',className:"_3-90"},i._("Curate Mode")),c('React').createElement(m,{value:this.state.toggleValue,onClick:this.$ToggleCurateCommentPlaceInfo2,display:'inline',theme:l}));};f.exports=p;}),null);