import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Concerts from './views/Concerts.vue'
import Events from './views/Events.vue'
import Fifteenyear from './views/Fifteenyear.vue'
import Join from './views/Join.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/concerts',
      name: 'concerts',
      component: Concerts
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/15year',
      name: '15year',
      component: Fifteenyear
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    }
    // {
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
