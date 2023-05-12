import axios from 'axios'
import { R, Student } from '../model/Student'

export default function P3({ id }: { id: number }) {
  async function updateStudent() {
    // 参数1：请求 url 地址
    // 参数2：可选的，配置对象(例如可以包含请求头数据)
    const resp = await axios.get<R<Student>>(
      `http://localhost:8080/api/students/${id}`
    )
    console.log(resp.data.data)
  }

  updateStudent() // 调用 updateStudent 发送请求，接收响应

  return null
}
