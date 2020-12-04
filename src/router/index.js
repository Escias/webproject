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
    path: '/signin',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import(/* webpackChunkName: "about" */ '../views/Forum.vue')
  },
  {
    path: '/forum/:id',
    name: 'Topic',
    component: () => import(/* webpackChunkName: "about" */ '../views/Topic.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
