import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from "@/views/Homepage.vue";
import store from "@/store/userApi.js";

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
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/finder',
    name: 'Finder',
    component: () => import(/* webpackChunkName: "about" */ '../views/Finder'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/chat',
    name: 'ChatPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChatPage'),
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router
