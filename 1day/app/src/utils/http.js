//引入axios
import axios from "axios"
//引入接口列表
import config from "./config"

//设置线上接口与本地开发接口--设置环境的切换
if(process.env.NODE_ENV == "development"){
  axios.defaults.baseURL = config.development;
}else if(process.env.NODE_ENV == "production"){
  axios.defaults.baseURL = config.production;
};

//创建自定义实例
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
const service = axios.create({
  timeout : 10000,
  withCredentials: true
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {

  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {

  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


function request(url,data = {},method = "post") {
  console.log(data)
  return new Promise((resolve,reject)=>{
    const options = {
      url,
      method
    };

    if(method.toLocaleLowerCase() === "get"){
      options.params = data
    }else{
      options.data = data
    }

    service(options).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err);
    })
  })
}


// 封装axios
// export default function request(url, data = {}, method = 'post') {
//   return new Promise((resolve, reject) => {
//     const options = {
//       url,
//       method
//     }
//     if (method.toLowerCase() === 'get') {
//       options.params = data
//     } else {
//       options.data = data
//     }
//     service(options)
//       .then(res => {
//         console.log('返回数据', res)
//         resolve(res.data)
//       })
//       .catch(error => {
//         reject()
//         console.error(error)
//       })
//   })




export default request
