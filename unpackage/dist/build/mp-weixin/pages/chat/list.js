(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/list"],{"1be5":function(t,n,e){"use strict";e.r(n);var o=e("322d"),a=e("b7e2");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("76fd");var s=e("2877"),u=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports},"322d":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"540f":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("6050"));function a(t){return t&&t.__esModule?t:{default:t}}var i={globalData:{goeasy:null},data:function(){return{modalName:null,listTouchStart:0,listTouchDirection:null,chatList:[],userInfo:{},defaultAvator:"https://hudongmsite.oss-cn-hangzhou.aliyuncs.com/meeting/basicYrC5Sh1570383607306.png"}},onShow:function(){this.getchatList();this.$options.globalData;this.$options.globalData.goeasy||(console.log("show"),this.initGoeasy()),this.$store.dispatch("getusermsg")},onHide:function(){this.$options.globalData.goeasy&&(this.$options.globalData.goeasy=null)},onLoad:function(){var n=this;this.getchatList();try{t.getStorage({key:"userInfo",success:function(t){n.userInfo=JSON.parse(t.data),n.userInfo&&n.userInfo.user_id||n.$store.dispatch("getuserinfo")}})}catch(e){}this.initGoeasy()},methods:{initGoeasy:function(){var t=this,n=this.$options.globalData;n.goeasy=new o.default({host:"hangzhou.goeasy.io",appkey:"BC-0a302f5f67764730b09e4be87bf06f0f",onConnected:function(){console.log("连接成功！")},onDisconnected:function(){console.log("连接断开！")},onConnectFailed:function(t){console.log("连接失败或错误！")}}),n.goeasy.subscribe({channel:this.userInfo.user_id,onMessage:function(n){t.getchatList()}})},BackPage:function(){t.navigateBack({delta:1})},goDetail:function(n){t.navigateTo({url:"/pages/chat/detail?id=".concat(n.receive_user_id)})},getchatList:function(){var t=this;this.$api.getChatList().then(function(n){t.chatList=n.data}).catch(function(t){})}}};n.default=i}).call(this,e("543d")["default"])},"76fd":function(t,n,e){"use strict";var o=e("7757"),a=e.n(o);a.a},7757:function(t,n,e){},b7e2:function(t,n,e){"use strict";e.r(n);var o=e("540f"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},fa80:function(t,n,e){"use strict";(function(t){e("9bf5"),e("921b");o(e("66fd"));var n=o(e("1be5"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["fa80","common/runtime","common/vendor"]]]);