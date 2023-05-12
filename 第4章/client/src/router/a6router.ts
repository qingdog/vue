import { createRouter, createWebHashHistory } from 'vue-router'
import { useStorage } from '@vueuse/core'
import { Route, Menu } from '../model/Model8080'
const clientRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/A6Login.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/A6NotFound.vue')
  },
  {
    path: '/',
    name: 'main',
    component: () => import('../views/A6Main.vue')
  },
  {
    path: '/:pathMatcher(.*)*',
    name: 'remaining',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: clientRoutes
})

// 每次路由跳转之前执行
// to 目标路由对象
// from 源路由对象
router.beforeEach((to, from) => {
  if(to.name === 'main' && !serverToken.value) {
    return '/login'
  }
})

// 每次路由跳转之后执行, 例如统一修改页面标题
router.afterEach((to, from)=>{
  document.title = to.name?.toString() || ''
})

export const serverUsername = useStorage<string>('serverUsername','')
export const serverToken = useStorage<string>('serverToken','')
export const serverMenus = useStorage<Menu[]>('serverMenus', [])
const serverRoutes = useStorage<Route[]>('serverRoutes', [])
addServerRoutes(serverRoutes.value)

// 重置路由、菜单、token、用户名
export function resetRoutes() {
  for(const r of clientRoutes) {
    // 参数1: 路由对象, (原始的路由对象)
    router.addRoute(r) // 替换掉同名的路由对象
  }
  serverRoutes.value = null
  serverMenus.value = null
  serverUsername.value = null
  serverToken.value = null
}

// 添加服务器端路由
export function addServerRoutes(routeList: Route[]) {
  for(const r of routeList) {
    // 参数1: 父路由名字
    // 参数2: 路由对象
    router.addRoute(r.parentName, {
      path: r.path,
      name: r.name,
      component: () => import(r.component)
    })
  }
  serverRoutes.value = routeList
}


export default router