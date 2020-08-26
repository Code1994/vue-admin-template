// TODO: 该文件利用token拉取用户的权限菜单 再生成对应的侧边栏与路由表
import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false })// NProgress configuration

// const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
  return
  // if (getToken()) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //     NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
  //   } else {
  //     next()
  //     if (store.getters.roles.length === 0) {
  //       store.dispatch('GetInfo').then(res => { // 拉取用户信息
  //         next()
  //       }).catch((err) => {
  //         store.dispatch('FedLogOut').then(() => {
  //           Message.error(err || 'Verification failed, please login again')
  //           next({ path: '/' })
  //         })
  //       })
  //     } else {
  //       next()
  //     }
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
