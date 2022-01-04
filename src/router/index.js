import Vue from 'vue'
import Router from 'vue-router'

// types
import authTypes from '@/types/auth'
// .types

// Components
import Login from '@/components/Auth/login'
import Register from '@/components/Auth/register'
import Cinema from '@/components/Cinemas/cinemas'
import Movies from '@/components/Movies/movies'
// .Components

// global store
import { store } from '@/main'
// .global store

Vue.use(Router)

// components
//TODO añadir components
// .components


// settings routes
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { Auth: false, title: 'Login' },
      beforeEnter: (to, from, next) => {

        if (store.state.authModule.logged) {
          next({ path: '/' })
          return
        }

        next()
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { Auth: false, title: 'Sign Up' },
      beforeEnter: (to, from, next) => {

        if (store.state.authModule.logged) {
          next({ path: '/' })
          return
        }

        next()
      }
    },
    {
      path: '/',
      name: 'cinemas',
      component: Cinema,
      meta: { Auth: false, title: 'Movies Theater' },
    },
    {
      path: 'cinema/:id',
      name: 'cinema',
      component: Movies,
      meta: { Auth: false, title: 'List of Movies' },
    },
  ]
})
// .settings routes

// para cada cambio de ruta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  if (to.meta.Auth && !store.state.authModule.logged) {
    next({ path: '/login' })
    return
  }

  if (store.state.authModule.logged) {
    store.commit(authTypes.mutations.setUser)
  }

  next()
})
// .para cada cambio de ruta

export default router
