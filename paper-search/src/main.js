import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from './router/router'
import VueAxios from 'vue-axios'
import axios from 'axios' 


Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
