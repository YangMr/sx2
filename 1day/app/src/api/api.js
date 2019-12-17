import request from "../utils/http"
export default {
  //登录接口
  login(options){
    console.log(options)
    return request("/apis/app/login",options.data,options.method="post");
  },

  //修改个人资料接口
  changeUserInfo(){
    return request("/apis/app/user",options.data,options.method)
  }
}
