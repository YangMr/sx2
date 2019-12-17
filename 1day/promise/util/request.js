import config from "./config";

function request(params) {
   return new Promise((resolve,reject)=>{
       $.ajax({
           url : config.baseUrl + params.url,
           data : params.data,
           header : params.header,
           success : function (response) {
            resolve(response)
           },
           error : function (error) {
            reject(error)
           }
       })
   })
}

export  default  request