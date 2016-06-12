import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configureRoutes from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  linkActiveClass: 'active'
})

configureRoutes(router)

/* eslint-disable no-new */
router.start(App)
