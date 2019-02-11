import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Self from './views/ApplicationForm/Self.vue'
import Detail from './views/ApplicationForm/Detail.vue'
import Experience from './views/ApplicationForm/Experience.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/self',
      name: 'self',
      component: Self
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
