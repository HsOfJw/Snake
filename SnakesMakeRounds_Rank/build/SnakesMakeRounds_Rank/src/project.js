require=function o(i,r,s){function l(t,e){if(!r[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}var c=r[t]={exports:{}};i[t][0].call(c.exports,function(e){return l(i[t][1][e]||e)},c,c.exports,o,i,r,s)}return r[t].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)l(s[e]);return l}({RankItem:[function(e,t,n){"use strict";cc._RF.push(t,"3ca90WQYmlN/rZa9aXTzoZa","RankItem"),cc.Class({extends:cc.Component,properties:{cupImg:cc.Node,headImg:cc.Node,playerName:cc.Node,time:cc.Node,cgNum:cc.Node,rankNum:cc.Node},start:function(){},initView:function(e,t){e<=3||(this.cupImg.active=!1),this.createImage(t.avatarUrl),this.setNodeText(this.playerName,t.nickname),this.setNodeText(this.time,t.total_pass_time),this.setNodeText(this.cgNum,t.level_num),this.setNodeText(this.rankNum,e)},setNodeText:function(e,t){var n=e.getComponent(cc.Label);n&&(n.string=t)},setNodeTexture:function(e,t){var n=e.getComponent(cc.Sprite);n&&n.spriteFrame.setTexture(cc.url.raw(t))},createImage:function(e){var t=this;try{var n=wx.createImage();n.onload=function(){try{var e=new cc.Texture2D;e.initWithElement(n),e.handleLoadedTexture(),t.headImg.getComponent(cc.Sprite).spriteFrame=new cc.SpriteFrame(e)}catch(e){cc.log(e),t.headImg.active=!1}},n.src=e}catch(e){cc.log(e),this.node.active=!1}}}),cc._RF.pop()},{}],RankListScene:[function(e,t,n){"use strict";cc._RF.push(t,"93ba9MFQmJGfpic8EWbFI/7","RankListScene"),cc.Class({extends:cc.Component,properties:{rankingScrollView:cc.ScrollView,scrollViewContent:cc.Node,prefabRankItem:cc.Prefab},start:function(){var t=this;window.wx.onMessage(function(e){cc.log("接收主域发来消息：",e),t.fetchFriendData()})},fetchFriendData:function(){var s=this;wx.getUserInfo({openIdList:["selfOpenId"],success:function(e){console.log("success",e.data);var r=e.data[0];wx.getFriendCloudStorage({keyList:["level_num","pass_time"],success:function(e){console.log("wx.getFriendCloudStorage success",e);for(var t=e.data,n=(s.dataSort(t),0);n<t.length&&!(10<=n);n++){var a=t[n],c=cc.instantiate(s.prefabRankItem),o=c.getComponent("RankItem");if(o&&(console.log("rankItem not is null"),console.log(o),o.initView(n+1,a)),s.scrollViewContent.addChild(c),c.y=-90*n,t[n].avatarUrl==r.avatarUrl){var i=cc.instantiate(s.prefabRankItem);i.getComponent("RankItem").initView(n,a),i.y=-500,s.node.addChild(i,1,1e3)}}},fail:function(e){console.log("wx.getFriendCloudStorage fail",e),s.loadingLabel.getComponent(cc.Label).string="数据加载失败，请检测网络，谢谢。"}})},fail:function(e){s.loadingLabel.getComponent(cc.Label).string="数据加载失败，请检测网络，谢谢。"}})},dataSort:function(e){for(var t=0;t<e.length;t++){var n=e[t];cc.log("item--\x3e>"+n);var a=JSON.parse(n.KVDataList[0].value),c=JSON.parse(n.KVDataList[1].value);cc.log("level_data--\x3e>"+a),cc.log("passtime_data--\x3e>"+c),n.level_num=a.length;for(t=n.total_pass_time=0;t<c.length;t++)n.total_pass_time+=c[t]}e.sort(function(e,t){return 0==e.KVDataList.length&&0==t.KVDataList.length?0:0==e.KVDataList.length?1:0==t.KVDataList.length?-1:t.level_num!=e.level_num?t.level_num-e.level_num:t.total_pass_time-e.total_pass_time})}}),cc._RF.pop()},{}]},{},["RankItem","RankListScene"]);