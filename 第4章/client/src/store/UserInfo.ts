import axios from '../api/request'
import { defineStore } from "pinia"
import { UserInfoDto } from '../model/Model8080'

// useUserInfo 是一个函数，用来返回共享数据
export const useUserInfo = defineStore('userInfo', {
  state: () => {
    return { username: '', name: '', sex: '' }
  },
  actions: {
    async get(username: string) {
      // axios, useRequest
      const resp = await axios.get(`/api/info/${username}`)
      // this 代表上面的  state 对象
      Object.assign(this, resp.data.data)
    },
    async update(dto: UserInfoDto) {
      await axios.post('/api/info', dto)
      Object.assign(this, dto)
    }
  }
})