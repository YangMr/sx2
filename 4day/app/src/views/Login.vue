<template>
  <div class="home">
   
	<button @click="getSmsCode">获取验证码</button>
	
	<button @click="login">登录</button>
   
  </div>
</template>

<script>
// @ is an alias to /src
import request from "../utils/request.js"
import api from "../api/api.js"
import stroage from "../utils/stroage.js"
export default {
  name: 'home',
  methods : {
	 getSmsCode(){
		 api.getSmsCode({
			 mobile : "15910732068",
			 sms_type : "login"
		 }).then(res=>{
			 console.log(res)
		 }).catch(err=>{
			 console.log(err)
		 })
	 },
	 login(){
		 api.smsCodeLogin({
			 mobile : "15910732068",
			 sms_code : "492590",
			 type :2
		 }).then(res=>{
			 console.log(res)
			 const token = res.data.remember_token;
			 console.log(token)
			 stroage.setLocalStroageData("token",token)
		 }).catch(err=>{
			 console.log(err)
		 })
	 }
	 
  },
  created(){
	  
  }
}
</script>
