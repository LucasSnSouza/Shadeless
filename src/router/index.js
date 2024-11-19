import { createRouter, createWebHistory } from 'vue-router'

import StartupView from '../views/StartupView.vue';
import AuthenticationView from '../views/AuthenticationView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Startup',
      component: StartupView
    },
    {
      path: '/authentication',
      name: 'Authentication',
      component: AuthenticationView
    },
  ]
})

export default router
