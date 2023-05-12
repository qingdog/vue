import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { R, Student } from '../model/Student'

/*
  createContext         创建上下文对象
  useContext            读取上下文对象的值
  <上下文对象.Provider>  修改上下文对象的值
*/
const HiddenContext = createContext(false)

// 给以下组件提供数据，控制年龄隐藏、显示
export default function P7() {
  const [students, setStudents] = useState<Student[]>([])
  const [hidden, setHidden] = useState(false)
  useEffect(()=>{
    async function updateStudents() {
      const resp = await axios.get<R<Student[]>>("http://localhost:8080/api/students")
      setStudents(resp.data.data)
    }
    updateStudents()
  }, [])

  /* function hide() {
    setHidden(true)
  }

  function show() {
    setHidden(false)
  } */

  function hideOrShow() {
    // 参数：上一次状态值，旧值
    // 返回值：要更新的新值
    setHidden((old)=>{
      return !old
    })
  }
  return <HiddenContext.Provider value={hidden}>
    {/* <input type="button" value="隐藏" onClick={hide}/>
    <input type="button" value="显示" onClick={show}/> */}
    <input type="button" value={hidden?'显示':'隐藏'} onClick={hideOrShow}/>
    <P71 students={students}></P71>
  </HiddenContext.Provider>  
}

// 负责处理学生集合
function P71({ students }: { students: Student[] }) {
  const list = students.map(s=><P72 student={s} key={s.id}></P72>)
  return <>{list}</>
}

// 负责显示单个学生
function P72({ student }: { student: Student }) {
  const hidden = useContext(HiddenContext)
  const jsx = !hidden && <span>{student.age}</span>
  return <div>{student.name} {jsx}</div>
}
