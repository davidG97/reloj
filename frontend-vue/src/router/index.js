import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/views/Auth.vue'
import Inicio from '@/views/Inicio.vue'
import Login from '@/views/Login.vue'
import Verify from '@/views/Verify.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'  

Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'https://your-clock.herokuapp.com/api';

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