import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/deret',
      name: 'deret',
      component: () => import('../views/DeretView.vue')
    },
    {
      path: '/determinan',
      name: 'determinan',
      component: () => import('../views/DeterminanView.vue')
    },
    {
      path: '/vektor',
      name: 'vektor',
      component: () => import('../views/VektorView.vue')
    },
    {
      path: '/kuis',
      name: 'kuis',
      component: () => import('../views/KuisView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
