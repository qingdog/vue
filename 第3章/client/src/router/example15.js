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

// 从 sessionStorage 中恢复路由数据
const serverRoutes = sessionStorage.getItem('serverRoutes');
if(serverRoutes) {
  const array = JSON.parse(serverRoutes);
  addServerRoutes(array)
}

// 重置路由
export function resetRouter() {
  router.matcher = new VueRouter({ routes }).matcher
}

// 添加服务器返回的路由信息
export function addServerRoutes(array) {
  // console.log(router.getRoutes());
  for (const { id, path, component } of array) {
    if (component !== null) {
      // 动态添加路由
      // 参数1：父路由名称
      // 参数2：路由信息对象
      router.addRoute('c', {
        path: path,
        name: id,
        component: () => import(`@/views/example15/container/${component}`)
      });
    }
  }
  // console.log(router.getRoutes());
}

export default router
