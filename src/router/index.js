import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Auth/Login.vue';
import Register from '../views/Auth/Register.vue';
import DetailPost from '../views/DetailPost.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/post/:id',
    name: 'DetailPost',
    component: DetailPost
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
