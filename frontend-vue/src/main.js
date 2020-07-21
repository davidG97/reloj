import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
if(process.env.NODE_ENV === 'development'){
  axios.defaults.baseURL = process.env.VUE_APP_HOST_LOCAL+'/api';
}else{
  axios.defaults.baseURL = process.env.VUE_APP_HOST+'/api';
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
