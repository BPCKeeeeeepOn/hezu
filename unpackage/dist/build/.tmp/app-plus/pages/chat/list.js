(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/list"],{"1be5":function(t,e,n){"use strict";n.r(e);var a=n("322d"),o=n("b7e2");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("76fd");var s=n("2877"),u=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"322d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"540f":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("6050"));function i(t){return t&&t.__esModule?t:{default:t}}var s={globalData:{goeasy:null},data:function(){return{modalName:null,listTouchStart:0,listTouchDirection:null,chatList:[],userInfo:{},defaultAvator:"https://hudongmsite.oss-cn-hangzhou.aliyuncs.com/meeting/basicYrC5Sh1570383607306.png"}},onShow:function(){this.getchatList();this.$options.globalData;this.$options.globalData.goeasy||(console.log(t("show"," at pages\\chat\\list.vue:46")),this.initGoeasy()),this.$store.dispatch("getusermsg")},onHide:function(){this.$options.globalData.goeasy&&(this.$options.globalData.goeasy=null)},onLoad:function(){var t=this;this.getchatList();try{a.getStorage({key:"userInfo",success:function(e){t.userInfo=JSON.parse(e.data),t.userInfo&&t.userInfo.user_id||t.$store.dispatch("getuserinfo")}})}catch(e){}this.initGoeasy()},methods:{initGoeasy:function(){var e=this,n=this.$options.globalData;n.goeasy=new o.default({host:"hangzhou.goeasy.io",appkey:"BC-0a302f5f67764730b09e4be87bf06f0f",onConnected:function(){console.log(t("连接成功！"," at pages\\chat\\list.vue:79"))},onDisconnected:function(){console.log(t("连接断开！"," at pages\\chat\\list.vue:82"))},onConnectFailed:function(e){console.log(t("连接失败或错误！"," at pages\\chat\\list.vue:85"))}}),n.goeasy.subscribe({channel:this.userInfo.user_id,onMessage:function(t){e.getchatList()}})},BackPage:function(){a.navigateBack({delta:1})},goDetail:function(t){a.navigateTo({url:"/pages/chat/detail?id=".concat(t.receive_user_id)})},getchatList:function(){var t=this;this.$api.getChatList().then(function(e){t.chatList=e.data}).catch(function(t){})}}};e.default=s}).call(this,n("0de9")["default"],n("6e42")["default"])},"76fd":function(t,e,n){"use strict";var a=n("7757"),o=n.n(a);o.a},7757:function(t,e,n){},b7e2:function(t,e,n){"use strict";n.r(e);var a=n("540f"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},fa80:function(t,e,n){"use strict";(function(t){n("9bf5"),n("921b");a(n("66fd"));var e=a(n("1be5"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["fa80","common/runtime","common/vendor"]]]);