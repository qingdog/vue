import { observer } from 'mobx-react-lite'
import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import RoutesStore from '../store/RoutesStore'

// react-router 6.x

// 把字符串组件 => 组件标签
export function load(name: string) {
  const Page = lazy(() => import(`../pages/${name}`))
  return <Page></Page>
}

// 路由对象
function MyRouter() {
  const router = useRoutes(RoutesStore.routes)
  return router
}

export default observer(MyRouter)
