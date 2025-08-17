import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/events/upcoming',
      name: 'upcomingevents',
      component: About
    },
    {
      path: '/events/prior',
      name: 'priorevents',
      component: About
    },
    {
      path: '/events/create',
      name: 'createevent',
      component: About
    },
  ]
})

export default router
