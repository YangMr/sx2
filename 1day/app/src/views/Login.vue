<template>
  <div class="login">
    <div class="form">
      <div class="form-group">
        <input type="text" v-model="user.phone" id="phone" placeholder="请输入手机号">
      </div>
      <div class="form-group">
        <input type="text" v-model="user.password" id="password" placeholder="请输入密码">
      </div>
      <div class="form-group">
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
    import api from "../api/api.js"

    export default {
        name: "Login",
        data : function(){
          return {
            user : {}
          }
        },
        methods : {
          login(){
            let {phone,password} = this.user;

            api.login({
              data : {
                mobile : phone,
                password : password,
                type : 1
              }
            }).then(data=>{
              console.log(data)
            })




          }
        }
    }
</script>

<style scoped>

</style>
