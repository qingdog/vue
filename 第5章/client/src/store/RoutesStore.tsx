import { ItemType } from 'antd/lib/menu/hooks/useItems'
import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'
import { Link, Navigate, RouteObject } from 'react-router-dom'
import {
  LoginReq,
  LoginResp,
  Menu,
  MenuAndRoute,
  R,
  Route,
} from '../model/Student'
import { load } from '../router/MyRouter'
import Icon from './Icon'

function convertMenu(m: Menu): ItemType {
  const Label = m.routePath ? <Link to={m.routePath}>{m.label}</Link> : m.label
  return {
    key: m.key,
    label: Label,
    icon: <Icon name={m.icon}></Icon>,
    children: m.children && m.children.map(convertMenu),
  }
}

class RoutesStore {
  dynamicRoutes: Route[] = []
  dynamicMenus: Menu[] = []

  token: string = '' // 令牌

  state: string = 'pending' // pending 进行中 done 成功  error 失败
  message: string = ''

  async login(loginReq: LoginReq) {
    this.state = 'pending'
    const resp1 = await axios.post<R<LoginResp>>(
      'http://localhost:8080/api/loginJwt',
      loginReq
    )
    if (resp1.data.code === 999) {
      // 登录成功
      const resp2 = await axios.get<R<MenuAndRoute>>(
        `http://localhost:8080/api/menu/${loginReq.username}`
      )
      runInAction(() => {
        this.dynamicRoutes = resp2.data.data.routeList
        localStorage.setItem(
          'dynamicRoutes',
          JSON.stringify(this.dynamicRoutes)
        )

        this.dynamicMenus = resp2.data.data.menuTree
        localStorage.setItem('dynamicMenus', JSON.stringify(this.dynamicMenus))

        this.token = resp1.data.data.token
        localStorage.setItem('token', this.token)

        this.state = 'done'
      })
    } else {
      runInAction(() => {
        this.message = resp1.data.message || '未知错误'
        this.state = 'error'
      })
    }
  }

  /* async fetch(username: string) {
    const resp = await axios.get<R<MenuAndRoute>>(
      `http://localhost:8080/api/menu/${username}`
    )
    runInAction(() => {
      this.dynamicRoutes = resp.data.data.routeList
      localStorage.setItem('dynamicRoutes', JSON.stringify(this.dynamicRoutes))

      this.dynamicMenus = resp.data.data.menuTree
      localStorage.setItem('dynamicMenus', JSON.stringify(this.dynamicMenus))
    })
  } */

  /*
    localStorage
      .setItem(名, 值:string)  // 存数据
      .getItem(名) :string     // 取数据
      .removeItem(名)          // 删数据
  */

  // eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.-l-MjMPGJVOf3zoIJgoqpV3LWoqvCCgcaI1ga86ismU
  get username() {
    if(this.token.length === 0) {
      return ''
    }
    const json = atob(this.token.split('.')[1])
    return JSON.parse(json).sub
  }

  // 动态路由：组合静态 + 动态部分
  get routes() {
    const staticRoutes: RouteObject[] = [
      { path: '/login', element: load('A8Login') },
      { path: '/', element: load('A8Main'), children: [] },
      { path: '/404', element: load('A8Notfound') },
      { path: '/*', element: <Navigate to={'/404'}></Navigate> },
    ]
    staticRoutes[1].children = this.dynamicRoutes.map((r) => {
      return {
        path: r.path,
        element: load(r.element),
      }
    })
    return staticRoutes
  }

  // 动态菜单
  get menus() {
    return this.dynamicMenus.map(convertMenu)
  }

  constructor() {
    makeAutoObservable(this)
    const json = localStorage.getItem('dynamicRoutes')
    this.dynamicRoutes = json ? JSON.parse(json) : []

    const json1 = localStorage.getItem('dynamicMenus')
    this.dynamicMenus = json1 ? JSON.parse(json1) : []

    this.token = localStorage.getItem('token') ?? ''
    this.message = ''
    this.state = 'pending'
  }

  reset() {
    localStorage.removeItem('dynamicRoutes')
    this.dynamicRoutes = []

    localStorage.removeItem('dynamicMenus')
    this.dynamicMenus = []

    localStorage.removeItem('token')
    this.token = ''

    this.message = ''
    this.state = 'pending'
  }
}

export default new RoutesStore()
