import axios from 'axios'
import { useState } from 'react'
import { R, Student } from '../model/Student'

export default function P5({ id }: { id: number }) {  
  async function updateStudent() {
    const resp = await axios.get<R<Student>>(
      `http://localhost:8080/api/students/${id}`
    )
    console.log(resp.data.data)
    setStudent(resp.data.data)
    // student.name = resp.data.data.name
    console.log(student)
  }
  
  // const student = {name:'xx'}
  /*
    参数：数据的初始值
    返回值：[a, b]
      a: 状态数据
      b: 方法，修改状态数据的
  */
  const [student, setStudent] = useState({name:'xx'})
  const [fetch, setFetch] = useState(false)

  if(!fetch) {
    setFetch(true)
    updateStudent() // 调用 updateStudent 发送请求，接收响应
  }

  console.log(student)

  return <h3>{student.name}</h3>
}
/*
首次用到组件标签，就会执行P5函数，函数返回的 jsx 作为页面内容
    注意：
    1. 如果函数没有再次调用，那么就不会更新页面
    2. 如果函数调用了，但返回结果不变，页面也不会更新
react 中，要想重新调用组件函数，触发页面更新(渲染)
    1. 需要 props 发生改变
    2. 需要 state 发生改变，state 状态(函数之外的一组数据)
*/
