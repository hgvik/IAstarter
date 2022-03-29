/*
下载 npm i axios
新建http.js
*/

// 1.引入axios
import axios from 'axios'
import Vue from 'vue'
import router from './router'

// 2.创建axios实例
const http = axios.create({
	baseURL: 'http://localhost:5000/api'
})

// 响应拦截response
http.interceptors.response.use(res => {
	// 正常情况
	// console.log(res,'res');
	return res
}, err => {
	console.log(err,'err');
	// 错误情况下，一般返回400以后的码
	// 弹出错误信息
	if(err){
		// 加入element ui 就被挂载到vue的原型链上了
		Vue.prototype.$message({
			type:'error',
			message: err.response.data.error[0].msg
		})
		
		// 错误码401跳转到登录页
		if(err.response.status === 401){
			router.push('/login')
		}
	}
	return Promise.reject(err)
})

	// 请求拦截 request
http.interceptors.request.use(config => {
		// console.log(config);
		if(localStorage.token){
			// 'Bearer ' 半角空格
			config.headers.Authorization = 'Bearer ' + localStorage.token
		}
		return config
	},err=>{
	})

// 3.导出http
export default http
