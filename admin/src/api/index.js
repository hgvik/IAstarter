import axios from '../http'

// 管理员注册
export const register = (data = {}) => {
  return axios.post('/admin/register', data)
}

// 管理员登录
export const login = (data = {}) => {
  return axios.post('/admin/login', data)
}

// 获取上传文件列表
export const getFileList = () => {
  return axios.get('/uploadFile/fileList')
}

/**
 * 获取发布列表
 * @return 接口返回数据
 */
 export function getPubList(){
  return axios({
      url:'/user/publist',
      method:'get'
  })
}

/**
 * 获取审核列表
 * @return 接口返回数据
 */
 export function getPubAuditList(){
  return axios({
      url:'/user/pubaudit',
      method:'get'
  })
}

/**
 * 审核通过
 * @return 接口返回数据
 */
 export function auditSucc(params){
  return axios({
      url:'/user/auditsucc',
    method: 'post',
    data:params
  })
}

/**
 * 删除
 * @param params 参数
 * @return 接口返回数据
 */
 export function delPub(params){
  return axios({
      url:'/user/pub',
      method:'delete',
      data:params
  })
}

// 获取所有admin
export function getadmin(){
  return axios({
      url:'/admin/getadmin',
      method:'get'
  })
}

// 获取所有user
export function getuser(){
  return axios({
      url:'/admin/getuser',
      method:'get'
  })
}


// 删除admin
export function deladmin(params){
  return axios({
      url:'/admin/deladmin',
    method: 'delete',
    data:params
  })
}

// 删除user
export function deluser(params){
  return axios({
      url:'/admin/deluser',
    method: 'delete',
    data:params
  })
}

// 添加语录
export function addyulu(params){
  return axios({
      url:'/yulu/addyulu',
    method: 'post',
    data:params
  })
}

// 获取所有发送对象
export function getsenduser(){
  return axios({
      url:'/yulu/getuser',
    method: 'get',
  })
}

// 获取发送对象语录
export function getuseryulu(params){
  return axios({
      url:'/yulu/getuseryulu',
    method: 'post',
    data:params
  })
}

// 发送
export function sendmsg(params){
  return axios({
      url:'/yulu/sendmsg',
    method: 'post',
    data:params
  })
}