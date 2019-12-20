module.exports = {
	devServer: {
		port: "8888",
		open: true,
		https: false, //是否开启https
		host: "0.0.0.0", //配置主机名
		proxy: {
			'/api': {
				target: 'https://test.365msmk.com/api', //API服务器的地址
				ws: true, //代理websockets
				changeOrigin: true, // 虚拟的站点需要更管origin
				pathRewrite: { //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
					'^/api': ''
				}
			}
		},
	}
}
