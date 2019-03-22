import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Self from './views/ApplicationForm/Self.vue'
import Detail from './views/ApplicationForm/Detail.vue'
import Experience from './views/ApplicationForm/Experience.vue'
import Question from './views/ApplicationForm/Question.vue'

import Disc from './views/Psychotest/Disc.vue'
import Apm from './views/Psychotest/Apm.vue'
import Mathematic from './views/Psychotest/Mathematic.vue'
import Sequence from './views/Psychotest/Sequence.vue'
import Story from './views/Psychotest/Story.vue'
import English from './views/Psychotest/English.vue'
import Papikostik from './views/Psychotest/Papikostik.vue'

import Finish from './views/Finish.vue'

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
      path: '/self/:examId',
      name: 'self',
      component: Self
    },
    {
      path: '/detail/:examId',
      name: 'detail',
      component: Detail
    },
    {
      path: '/experience/:examId',
      name: 'experience',
      component: Experience
    },
    {
      path: '/question/:examId',
      name: 'question',
      component: Question
    },
    {
      path: '/exam/disc/:examId',
      name: 'disc',
      component: Disc
    },
    {
      path: '/exam/apm/:examId',
      name: 'apm',
      component: Apm
    },
    {
      path: '/exam/math/:examId',
      name: 'math',
      component: Mathematic
    },
    {
      path: '/exam/seq/:examId',
      name: 'seq',
      component: Sequence
    },
    {
      path: '/exam/story/:examId',
      name: 'story',
      component: Story
    },
    {
      path: '/exam/eng/:examId',
      name: 'eng',
      component: English
    },
    {
      path: '/exam/pap/:examId',
      name: 'pap',
      component: Papikostik
    },
    {
      path: '/finish',
      name: 'finish',
      component: Finish
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
