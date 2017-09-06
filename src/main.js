import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import './assets/theme/theme-green/index.css'
import store from './vuex/store'
import Vuex from 'vuex'

import router from './routes'

import 'font-awesome/css/font-awesome.min.css'

import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios=axios;

//添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    if(config.method == 'post'){ 
      config.data = qs.stringify(config.data);    
    }    
    return config;
  },
  (error) =>{    //请求错误时做些事    
    return Promise.reject(error);
    }
);


Vue.use(ElementUI);
Vue.use(Vuex);

//导航钩子拦截路由
router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    // 进入管道中的下一个管子
    next()
  }
})

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

