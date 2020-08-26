import axios from 'axios'
import { Message } from 'element-ui'
// import router from '@/router'
import store from '@/store'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  baseURL: '/cbi-mis',
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  const { token } = store.state.app
  if (token) {
    config.headers['x-session-id'] = token
  }
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

// response 拦截器
service.interceptors.response.use(response => {
  const { data } = response
  if (data.code !== 'SUCCESS') {
    Message({
      message: data.message,
      type: 'error',
      duration: 5 * 1000
    })
    // 未登录 跳转到登录页
    if (data.code === 'NOT_LOGIN') {
      // TODO: 清除token并跳回登陆页
      // LoginAPI.loginOut().then((res) => {
      //   if (res.status === 200) {
      //     store.commit(types.LOGIN_OUT)
      //     router.push({ name: 'Login' })
      //   }
      // })
    }
    return Promise.reject('error')
  } else {
    return data
  }
},
error => {
  console.log('err' + error) // for debug
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
}
)

// 由于axios的get和post方法传递参数有差异 进行二次封装下
const get = (url, params, config) => {
  // 可利用paramsSerializer对params参数序列化
  return service({
    url,
    method: 'get',
    params,
    // paramsSerializer: function(params) {
    //   return qs.stringify(params, {arrayFormat: 'brackets'})
    // },
    ...config
  })
}
const post = (url, params, config) => {
  return service({
    url,
    method: 'post',
    data: {
      ...params
    },
    // 如果接口想要以application/x-www-urlencoded的形式传输，则：
    // data: qs.stringify({ ...params }),
    ...config
  })
}

export default {
  get,
  post
}
