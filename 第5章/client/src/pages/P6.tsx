import axios from "axios"
import { useEffect, useState } from "react"

/*
useEffect
  参数1：箭头函数, 在真正渲染 html 之前会执行它
  参数2：
    情况1：没有, 代表每次执行组件函数时, 都会执行副作用函数
    情况2：[], 代表副作用函数只会执行一次
    情况3：[依赖项], 依赖项变化时，副作用函数会执行
*/
/* export default function P6({ id, age }: { id: number, age: number }) {

  console.log('1.主要功能')
    
  // useEffect(() => console.log('3.副作用功能')) 
  // useEffect(() => console.log('3.副作用功能'), []) 
  useEffect(() => console.log('3.副作用功能'), [id]) 

  console.log('2.主要功能')

  return <h3>{id}</h3>
} */
export default function P6({ id, age }: { id: number, age: number }) {

  const [student, setStudent] = useState({name:'xx'})

  useEffect(()=>{
    async function updateStudent() {
      const resp = await axios.get(`http://localhost:8080/api/students/${id}`)    
      setStudent(resp.data.data)
    }
    updateStudent()
  }, [id])

  return <h3>{student.name}</h3>
}