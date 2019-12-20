import request from "../utils/request"

export default {
	//获取验证码接口
	getSmsCode(data){
		return request.post("/api/app/smsCode",data);
	},
	//验证码登录接口
	smsCodeLogin(data){
		return request.post("/api/app/login",data);
	},
	//获取个人信息接口
	getUserInfo() {
		return request.get("/api/app/userInfo");
	}
}