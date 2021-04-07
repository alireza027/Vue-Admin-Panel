// add dependencies
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'


// add routes
import Routes from './Routes/index';


// use dependency like node.js
Vue.use(VueRouter)
Vue.use(Vuex)


// define routes
const routes = Routes;


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
