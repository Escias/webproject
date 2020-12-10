import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import axios from 'axios';

Vue.config.productionTip = false
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:4040/api';

Vue.prototype.$http = axios;
const auth_token = localStorage.getItem('token')
if (auth_token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = auth_token
}

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')