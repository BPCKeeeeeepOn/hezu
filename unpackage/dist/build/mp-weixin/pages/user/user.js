(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"0dc1":function(e,t,n){"use strict";n.r(t);var i=n("8807"),o=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=o.a},"2cc8":function(e,t,n){},"3d52":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.certificates=1},e.e1=function(t){e.certificates=2})},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},8807:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("5be0"),o=n("df0f"),s={data:function(){return{userForm:{name:"",user_head:"",avator:"",phone:"",sex:1,school:1,hobby:"",education:"",studentPhoto:"",graduationPhoto:""},defaultAvator:"https://hudongmsite.oss-cn-hangzhou.aliyuncs.com/meeting/basicYrC5Sh1570383607306.png",userInfo:{},isEdit:!1,imgList:[],imgList1:[],imgList2:[],index:-1,xueliList:["专科","本科","硕士","博士"],certificates:1}},onLoad:function(){this.getUserInfo(),this.isEdit=!1},onShow:function(){this.isEdit||this.getUserInfo()},methods:{showExample:function(){e.previewImage({urls:["http://qiniutest001.fensibox.com/cotenant_20191219_190935_26742"],current:"http://qiniutest001.fensibox.com/cotenant_20191219_190935_26742"})},pickerChange:function(e){this.index=e.detail.value,this.userForm.degree=this.xueliList[this.index]},loginOut:function(){e.showModal({title:"提示",content:"确定退出吗？",cancelText:"取消",confirmText:"确定",success:function(t){t.confirm&&(e.showToast({icon:"none",title:"退出成功"}),e.removeStorage({key:"Authentication",success:function(e){}}),setTimeout(function(){e.reLaunch({url:"/pages/login"})},300))}})},changeSex:function(e){this.userForm.sex=e.detail.value},chooseImage:function(){var t=this;console.log("chooseImagechooseImage"),e.chooseImage({count:1,sizeType:["original"],sourceType:["album"],success:function(e){console.log("successsuccesssuccess");var n=e.tempFilePaths[0];t.$api.getQnToken().then(function(e){o.upload(n,function(e){console.log(666),console.log(e.imageURL),t.imgList.push("http://".concat(e.imageURL)),console.log(9999),console.log(t.imgList[0])},function(e){},{region:"SCN",domain:"qiniutest001.fensibox.com",key:e.data.key,uptoken:e.data.uptoken})}).catch(function(e){})},fail:function(e){console.log("chooseImage fail",e)}})},chooseImage1:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){var n=e.tempFilePaths[0];console.log("filePath",n),t.$api.getQnToken().then(function(e){o.upload(n,function(e){t.imgList1.push("http://".concat(e.imageURL))},function(e){},{region:"SCN",domain:"qiniutest001.fensibox.com",key:e.data.key,uptoken:e.data.uptoken})}).catch(function(e){})},fail:function(e){console.log("chooseImage fail",e)}})},chooseImage2:function(){var t=this;if(!this.isEdit)return!1;e.chooseImage({count:1,sizeType:["original"],sourceType:["album"],success:function(e){var n=e.tempFilePaths[0];t.$api.getQnToken().then(function(e){o.upload(n,function(e){t.userForm.user_head="http://".concat(e.imageURL)},function(e){},{region:"SCN",domain:"qiniutest001.fensibox.com",key:e.data.key,uptoken:e.data.uptoken})}).catch(function(e){})},fail:function(e){console.log("chooseImage fail",e)}})},ViewImage:function(t){e.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},ViewImage1:function(t){e.previewImage({urls:this.imgList1,current:t.currentTarget.dataset.url})},DelImg:function(t){var n=this;e.showModal({title:"提示",content:"确定要删除吗？",cancelText:"再看看",confirmText:"删除",success:function(e){e.confirm&&n.imgList.splice(t.currentTarget.dataset.index,1)}})},DelImg1:function(t){var n=this;e.showModal({title:"提示",content:"确定要删除吗？",cancelText:"再看看",confirmText:"删除",success:function(e){e.confirm&&n.imgList1.splice(t.currentTarget.dataset.index,1)}})},DelImg2:function(t){var n=this;e.showModal({title:"提示",content:"确定要删除吗？",cancelText:"再看看",confirmText:"删除",success:function(e){e.confirm&&n.imgList2.splice(t.currentTarget.dataset.index,1)}})},toCollege:function(){e.navigateTo({url:"/pages/user/college"})},cancelSave:function(){this.isEdit=!1,this.getUserInfo()},saveUserInfo:function(){this.saveUserInfoAjax()},saveUserInfoAjax:function(){var t=this;if(this.userForm.nick_name)if(this.userForm.name)if(this.userForm.college){this.userForm.end_time&&i.format(this.userForm.end_time);var n={nick_name:this.userForm.nick_name,user_name:this.userForm.name,user_head:this.userForm.user_head,sex:this.userForm.sex,college:this.userForm.college,degree:this.xueliList[this.index],id_card_url:this.imgList[0]||"",diploma_url:this.imgList1[0]||"",interest:this.userForm.hobby,mobile:""};this.$api.updateUserInfo(n).then(function(n){e.showToast({icon:"none",title:"保存成功"}),t.isEdit=!1}).catch(function(e){})}else e.showToast({icon:"none",title:"学校不能为空"});else e.showToast({icon:"none",title:"姓名不能为空"});else e.showToast({icon:"none",title:"昵称不能为空"})},editUser:function(){var e=this;this.userForm.degree?this.xueliList.forEach(function(t,n){t==e.userForm.degree&&(e.index=n)}):this.index=-1,this.isEdit=!0},getUserInfo:function(){var e=this;this.$api.getUserInfo().then(function(t){e.userForm.nick_name=t.data.nick_name,e.userForm.name=t.data.user_name,e.userForm.user_head=t.data.user_head,e.userForm.sex=t.data.sex,e.userForm.college=t.data.college,e.userForm.degree=t.data.degree,e.userForm.start_time=i.toStringDate(t.data.start_time),e.userForm.end_time=i.toStringDate(t.data.end_time),console.log(t.data.start_time),console.log(t.data.end_time),console.log("测试开始时间"+i.toStringDate(t.data.start_time)),console.log("测试结束时间"+i.toStringDate(t.data.end_time)),e.imgList=t.data.id_card_url&&t.data.id_card_url.split()||[],e.imgList1=t.data.diploma_url&&t.data.diploma_url.split()||[],e.userForm.hobby=t.data.interest,t.data.id_card_url?e.certificates=1:t.data.diploma_url&&(e.certificates=2)}).catch(function(t){e.userForm={name:"",user_head:"",avator:"",phone:"",sex:1,school:1,start_time:"2016-08",end_time:"",hobby:"",education:"",studentPhoto:"",graduationPhoto:""}})}}};t.default=s}).call(this,n("543d")["default"])},c9cf:function(e,t,n){"use strict";n.r(t);var i=n("3d52"),o=n("0dc1");for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);n("dbd4");var a=n("2877"),c=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports},d3f1:function(e,t,n){"use strict";(function(e){n("24e0"),n("921b");i(n("66fd"));var t=i(n("c9cf"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},dbd4:function(e,t,n){"use strict";var i=n("2cc8"),o=n.n(i);o.a}},[["d3f1","common/runtime","common/vendor"]]]);