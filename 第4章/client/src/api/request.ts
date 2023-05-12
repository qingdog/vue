// 创建新的 axios 对象
import axios from 'axios'
import { message } from 'ant-design-vue'
import { serverToken } from '../router/a6router'
const _axios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_BASE_URL,
  timeout: 5000
})

// 请求拦截器
_axios.interceptors.request.use(
  (config)=>{ // 统一添加请求头
    if(serverToken.value) {
      config.headers = {
        Authorization: serverToken.value
      }
    }    
    return config
  },
  (error)=>{ // 请求出错时的处理
    return Promise.reject(error)
  }
)

// 响应拦截器
_axios.interceptors.response.use(
  (response)=>{ // 状态码  2xx
    if(response.data.message) {
      message.success(response.data.message, 3)
    }
    // 这里的code是自定义的错误码
    if(response.data.code === 200) {
      return response
    }
    else if(response.data.code === 401) {       
      // 情况1
      return response
    }
    // ... 
  },
  (error)=>{ // 状态码 > 2xx, 400,401,403,404,500
    console.error(error) // 处理了异常
    // 如果是 cors 跨域异常, response.status 是 0
    if(error.message) {
      message.success(error.message, 3)
    }
    if(error.response.status === 400) {
      // 情况1
    } else if(error.response.status === 401) {
      // 情况2
    } 
    // ...
    return Promise.resolve({ data: { data: {} } })
  }
)

export default _axios