import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Self from './views/ApplicationForm/Self.vue'
import Detail from './views/ApplicationForm/Detail.vue'
import Experience from './views/ApplicationForm/Experience.vue'
import Question from './views/ApplicationForm/Question.vue'

import Disc from './views/Psychotest/Disc.vue'
import Mathematic from './views/Psychotest/Mathematic.vue'
import Sequence from './views/Psychotest/Sequence.vue'
import Story from './views/Psychotest/Story.vue'

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
      path: '/question',
      name: 'question',
      component: Question
    },
    {
      path: '/test/disc',
      name: 'disc',
      component: Disc
    },
    {
      path: '/test/math',
      name: 'math',
      component: Mathematic
    },
    {
      path: '/test/seq',
      name: 'seq',
      component: Sequence
    },
    {
      path: '/test/story',
      name: 'story',
      component: Story
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
