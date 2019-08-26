// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import qs from 'qs';
// import './assets/less/main.less'
//引入自定义全局组件
import pages from '@/components/pagination/pages'

// 解决报错
// import Router from 'vue-router'

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

import validate from './js/validate.js'
Vue.prototype.validate = validate;

Vue.use(pages)

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
axios.defaults.withCredentials = true; //让ajax携带cookie

Vue.prototype.axios = axios

Vue.prototype.qs = qs;

Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  	el: '#app',
  	router,
  	components: { App }, 
  	template: '<App/>'
})
