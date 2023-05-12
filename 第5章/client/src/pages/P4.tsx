import axios from 'axios'
import { R, Student } from '../model/Student'

export default function P4({ id }: { id: number }) {  
  async function updateStudent() {
    // 参数1：请求 url 地址
    // 参数2：可选的，配置对象(例如可以包含请求头数据)
    const resp = await axios.get<R<Student>>(
      `http://localhost:8080/api/students/${id}`
    )
    console.log(resp.data.data)
    student.name = resp.data.data.name
    console.log(student)
  }

  updateStudent() // 调用 updateStudent 发送请求，接收响应

  const student = {name:'xx'}
  console.log(student)

  return <h3>{student.name}</h3>
}
/*
首次用到组件标签，就会执行P4函数，函数返回的 jsx 作为页面内容
    注意：
    1. 如果函数没有再次调用，那么就不会更新页面
    2. 如果函数调用了，但返回结果不变，页面也不会更新
react 中，要想重新调用组件函数，触发页面更新(渲染)
    1. 需要 props 发生改变
    2. 需要 state 发生改变
*/
