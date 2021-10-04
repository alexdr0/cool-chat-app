import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Chat from '../views/Chat.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
