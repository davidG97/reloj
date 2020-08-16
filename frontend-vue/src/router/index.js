import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/views/Auth.vue'
import Inicio from '@/views/Inicio.vue'
import Login from '@/views/Login.vue'
import Verify from '@/views/Verify.vue'
import Settings from '@/views/Settings.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import Home from '@/views/Home.vue'
import Errors from '@/views/Error.vue'
import RecoveryPassword from '@/views/RecoveryPassword.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
require('dotenv').config();

Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
if(process.env.NODE_ENV === 'development'){
  axios.defaults.baseURL = process.env.VUE_APP_HOST_LOCAL+'/api';
}else{
  axios.defaults.baseURL = process.env.VUE_APP_HOST+'/api';
}
console.log(axios.defaults.baseURL)
console.log(process.env.NODE_ENV)

Vue.use(VueRouter)

const router = new VueRouter({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/auth'
    },
    {
      path: '/',
      redirect: '/auth'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        autentificado: false
      }
    },
    {
      path: '/auth',
      name: 'auth', 
      component: Auth,
      meta: {
        autentificado: false
      }
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: Inicio,
      meta: {
        autentificado: true
      }
    },
    {
      path: '/verify',
      name: 'verify', 
      component: Verify,
      meta: {
        autentificado: false
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: {
        autentificado: true
      }
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPassword,
      meta: {
        autentificado: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        autentificado: false
      }
    },
    {
      path: '/recoverypassword/:id',
      name: 'recoverypassword',
      component: RecoveryPassword,
      meta: {
        autentificado: false
      }
    },
    {
      path: '/error',
      name: 'error',
      component: Errors,
      meta: {
        autentificado: false
      }
    }
  ]
})

router.beforeEach((to, from, next)=> {

  console.log(to)
  let autorizacion = to.matched.some(record => record.meta.autentificado)

  axios.post('/token',{
      token: localStorage.token
  })
  .then(function (response) {
    if(autorizacion && response.data == 0){
      next('auth')
    }else if(!autorizacion && response.data == 1){
      next()
    }else if(autorizacion && response.data == 1){
      next()
    }else if(!autorizacion && response.data == 0){
      next()
    }
  })
  .catch(function (error) {
      console.log("ERROR: "+error);
  });
})

export default router