import Vue from 'vue'
import SearchPage from './SearchPage'
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
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(SearchPage),
  router
}).$mount('#searchApp')
