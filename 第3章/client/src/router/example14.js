import Vue from 'vue'
import VueRouter from 'vue-router'
// import ContainerView from '@/views/example14/ContainerView.vue'
// import LoginView from '@/views/example14/LoginView.vue'
// import NotFoundView from '@/views/example14/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: () => import('@/views/example14/ContainerView.vue'),
    redirect: '/c1/p1',
    children: [
      { 
        path:'c1/p1',
        component: () => import('@/views/example14/container/P1View.vue')
      },
      { 
        path:'c1/p2',
        component: () => import('@/views/example14/container/P2View.vue')
      },
      { 
        path:'c1/p3',
        component: () => import('@/views/example14/container/P3View.vue')
      }
    ]
  },
  {
    path:'/login',
    component: () => import('@/views/example14/LoginView.vue')
  },
  {
    path:'/404',
    component: () => import('@/views/example14/NotFoundView.vue')
  },
  {
    path:'*',
    redirect: '/404'
  }
]

/* const routes = [
  {
    path:'/',
    component: ContainerView
  },
  {
    path:'/login',
    component: LoginView
  },
  {
    path:'/404',
    component: NotFoundView
  }
] */

const router = new VueRouter({
  routes
})

export default router
