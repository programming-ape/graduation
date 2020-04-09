(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0e75":function(e,o,a){"use strict";(function(e,t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;r(a("9f11"));var n=r(a("0747")),s=r(a("1c26")),l=a("2f62");function r(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(o){u(e,o,a[o])})}return e}function u(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}var g={data:function(){return{modalName:null,userId:"",password:""}},computed:i({},(0,l.mapState)({isLogin:function(e){return e.isLogin},isSDKReady:function(e){return e.isSDKReady}})),onShow:function(){this.$store.commit("reset")},methods:{showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},login:function(){var o=this,a=this,l=[{name:"userId",checkType:"notnull",checkRule:"",errorMsg:"请输入账号"},{name:"password",checkType:"notnull",errorMsg:"请输入登录密码"},{name:"password",checkType:"string",checkRule:"6,32",errorMsg:"密码最为 6-32 个字符"}],r=n.default.check(a,l);if(!r)return e.showToast({title:n.default.error,icon:"none"}),void(a.isFocus=!0);e.request({url:this.Server_IP+"login",data:{userId:this.userId,password:(0,s.default)(this.password)},header:{"custom-header":"login"},sslVerify:!1,method:"POST",dataType:"json",success:function(a){console.log(t(a.data," at pages\\login\\login.vue:107")),"0"==a.data.info.code?(e.setStorageSync("userId",a.data.data.userId),e.setStorageSync("isLogin",!0),console.log(t(a.data.data.userId," at pages\\login\\login.vue:111")),console.log(t("成功"," at pages\\login\\login.vue:112")),e.request({url:o.Server_IP+"userInformation",data:{userId:o.userId},header:{"custom-header":"userInformation"},method:"POST",dataType:"json",success:function(a){if(console.log(t(a.data," at pages\\login\\login.vue:124")),"0"==a.data.info.code){e.setStorageSync("userName",a.data.data.userName),e.setStorageSync("mail",a.data.data.mail),e.setStorageSync("telephone",a.data.data.telephone),e.setStorageSync("sex",a.data.data.sex),e.setStorageSync("birthday",a.data.data.birthday),e.setStorageSync("synopsis",a.data.data.synopsis),e.setStorageSync("headUrl",a.data.data.headUrl),console.log(t(2.2222222222222223e36," at pages\\login\\login.vue:133")),console.log(t(e.getStorageSync("headUrl")," at pages\\login\\login.vue:134")),console.warn(t(o.userId," at pages\\login\\login.vue:135")),console.warn(t(a.data.data.userSig," at pages\\login\\login.vue:136")),console.log(t(2.2222222222222223e36," at pages\\login\\login.vue:137"));var n=o.tim.login({userID:o.userId,userSig:a.data.data.userSig});n.then(function(a){o.$store.commit("toggleIsLogin",!0),e.setStorageSync("userTIMInfo",JSON.stringify(a.data)),console.log(t(1.111111111111111e37," at pages\\login\\login.vue:147")),console.log(t(a," at pages\\login\\login.vue:148")),console.log(t(JSON.stringify(a.data)," at pages\\login\\login.vue:149")),console.log(t(1.111111111111111e37," at pages\\login\\login.vue:150"))}).catch(function(e){console.warn(t(o.userId," at pages\\login\\login.vue:152")),console.warn(t(a.data.data.userSig," at pages\\login\\login.vue:153")),console.warn(t("login error:",e," at pages\\login\\login.vue:154"))}),console.log(t("获取用户信息成功"," at pages\\login\\login.vue:156"))}else console.log(t("获取用户信息失败"," at pages\\login\\login.vue:158"))},fail:function(){console.log(t("登录信息请求失败"," at pages\\login\\login.vue:162"))}}),e.request({url:o.Server_IP+"queryField",data:{userId:o.userId},header:{"custom-header":"queryField"},method:"POST",dataType:"json",success:function(a){console.log(t(a.data," at pages\\login\\login.vue:177")),"0"==a.data.info.code?(e.setStorageSync("field",JSON.parse(a.data.data.field)),console.log(t("获取用户喜好成功"," at pages\\login\\login.vue:184")),e.request({url:o.Server_IP+"followsay",data:{userId:o.userId,start:0,pagesize:3},header:{"custom-header":"followsay"},method:"POST",dataType:"json",success:function(o){if(console.log(t("获取关注用户微博第一页成功"," at pages\\login\\login.vue:198")),"0"==o.data.info.code){if(""==o.data.data.sayList)var a=[];else if(console.log(t(o," at pages\\login\\login.vue:203")),console.log(t(o.data.data.sayList," at pages\\login\\login.vue:204")),""==o.data.data.sayList)a="";else{a=JSON.parse(o.data.data.sayList);for(var n=0;n<a.length;n++){var s=a[n].picUrl;a[n].picUrl=JSON.parse(s)}}e.setStorageSync("sayList",a),e.setStorageSync("Fstart",3),e.switchTab({url:"/pages/index/index"})}}})):console.log(t("获取用户喜好失败"," at pages\\login\\login.vue:225"))},fail:function(){console.log(t("登录信息请求失败"," at pages\\login\\login.vue:229"))}})):e.showToast({icon:"none",title:a.data.info.message})}})},register:function(){e.navigateTo({url:"./register"})},forgetPassword:function(){console.log(t("forgetPassword"," at pages\\login\\login.vue:255")),e.navigateTo({url:"./forget_password"})},mailLogin:function(){console.log(t("mailLogin"," at pages\\login\\login.vue:261")),e.navigateTo({url:"./mail_login"})}}};o.default=g}).call(this,a("6e42")["default"],a("0de9")["default"])},"0ec0":function(e,o,a){"use strict";(function(e){a("1c35"),a("921b");t(a("66fd"));var o=t(a("3d20"));function t(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,a("6e42")["createPage"])},"3d20":function(e,o,a){"use strict";a.r(o);var t=a("3e54"),n=a("c702");for(var s in n)"default"!==s&&function(e){a.d(o,e,function(){return n[e]})}(s);a("97cb");var l,r=a("f0c5"),i=Object(r["a"])(n["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],l);o["default"]=i.exports},"3e54":function(e,o,a){"use strict";var t,n=function(){var e=this,o=e.$createElement;e._self._c},s=[];a.d(o,"b",function(){return n}),a.d(o,"c",function(){return s}),a.d(o,"a",function(){return t})},"8dff":function(e,o,a){},"97cb":function(e,o,a){"use strict";var t=a("8dff"),n=a.n(t);n.a},c702:function(e,o,a){"use strict";a.r(o);var t=a("0e75"),n=a.n(t);for(var s in t)"default"!==s&&function(e){a.d(o,e,function(){return t[e]})}(s);o["default"]=n.a}},[["0ec0","common/runtime","common/vendor"]]]);