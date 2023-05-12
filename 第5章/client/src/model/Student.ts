export interface Student {
  id: number,
  name: string,
  sex?: string,
  age?: number,
  photo?: string
}

export interface R<T> {
  code: number,
  data: T,
  message?: string
}

export interface PageResp<T> {
  list: T[],
  total: number
}

export interface StudentQueryForm {
  name?: string,
  sex?: string,
  age?: string
}

// 服务器返回的路由数据
export interface Route {
  path: string,
  element: string
}

// 服务器返回的菜单数据
export interface Menu {
  key: string,
  label: string,
  children?: Menu[],
  icon: string,
  routePath: string
}

// 路由 + 菜单
export interface MenuAndRoute {
  routeList: Route[]
  menuTree: Menu[]
}

// 登录请求
export interface LoginReq {
  username: string,
  password: string
}

// 登录响应
export interface LoginResp {
  token: string
}

