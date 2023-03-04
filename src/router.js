import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/joke/:id', name: 'Joke', component: () => import('@/views/JokeDetails.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
