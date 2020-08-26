import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/utils/permission' // permission control

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

Vue.prototype.$err = function(msg) {
  this.$message.error(msg)
}

Vue.prototype.$success = function(msg) {
  this.$message({
    message: msg,
    type: 'success'
  })
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
