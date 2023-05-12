// 结果格式
export interface Student {
  id: number,
  name: string,
  sex: string,
  age: number
}

// 增、删 dto
export interface StudentSaveDto {
  name: string,
  sex: string,
  age: number
}

// 查询 dto
export interface StudentQueryDto {
  name?: string,
  sex?: string | null,
  age?: string | null, // 18,20
  page: number,
  size: number
}

export interface UserInfoDto {
  username: string,
  name: string,
  sex: string
}

// 如果 spring 错误，返回的对象格式
export interface SpringError {
  timestamp: string,
  status: number,
  error: string,
  message: string,
  path: string
}

// 如果 spring 成功，返回 list 情况
export interface SpringList<T> {
  data: T[],
  message?: string,
  code: number
}

// 如果 spring 成功，返回 page 情况
export interface SpringPage<T> {
  code: number,
  data: { list: T[], total: number },
  message?: string
}

export interface SpringObject<T> {
  code: number,
  data: T,
  message?: string
}

// 如果 spring 成功，返回 string 情况
export interface SpringString {
  data: string,
  message?: string,
  code: number
}

export interface SpringToken {
  data: { token: string },
  message?: string,
  code: number
}

export interface LoginDto {
  username: string,
  password: string
}

export interface Route {
  path: string,
  component: string,
  name: string,
  parentName: string
}

export interface Menu {
  id: number,
  pid: number,
  title: string,
  icon?: string,
  routePath?: string,
  routeComponent?: string,
  routeName?: string,
  routeParentName?: string,
  children?: Menu[]
}

export interface SpringMenuAndRoute {
  data: {
    routeList: Route[],
    menuTree: Menu[]
  },
  message?: string,
  code: number
}

import { AxiosResponse } from 'axios'
export interface AxiosRespError extends AxiosResponse<SpringError> { }
export interface AxiosRespList<T> extends AxiosResponse<SpringList<T>> { }
export interface AxiosRespPage<T> extends AxiosResponse<SpringPage<T>> { }
export interface AxiosRespString extends AxiosResponse<SpringString> { }
export interface AxiosRespToken extends AxiosResponse<SpringToken> { }
export interface AxiosRespMenuAndRoute extends AxiosResponse<SpringMenuAndRoute> { }
export interface AxiosRespObject<T> extends AxiosResponse<SpringObject<T>> { }
