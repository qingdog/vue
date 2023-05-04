import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'c',
    component: () => import('@/views/example15/ContainerView.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/example15/LoginView.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/example15/NotFoundView.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

let installed = false;
router.beforeEach((to, from, next) => {
  const routes = sessionStorage.getItem('routes');
  console.log(to, from,installed)
  if (!installed && routes) {
    const array = JSON.parse(routes);
    for (const { id, path, component } of array) {
      if (component !== null) {
        router.addRoute('c', {
          name: id,
          path: path,
          component: () => import(`@/views/example15/container/${component}`)
        })
      }
    }
    installed = true;
  }
  console.log(router.getRoutes())
  next();
})

export default router
