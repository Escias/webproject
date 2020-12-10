import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from "@/views/Homepage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile')
  },
  {
    path: '/finder',
    name: 'Finder',
    component: () => import(/* webpackChunkName: "about" */ '../views/Finder')
  },
  {
    path: '/chat',
    name: 'ChatPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChatPage')
  },
]

const router = new VueRouter({
  routes
})

export default router
