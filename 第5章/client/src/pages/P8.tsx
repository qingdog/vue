import axios from 'axios'
import React, { useState } from 'react'
import '../css/P8.css'

export default function P8() {

  const [student, setStudent] = useState({name:'', sex:'男', age:18})
  const [message, setMessage] = useState('')

  const options = ['男', '女']
  const jsx = options.map(e => <option key={e}>{e}</option>)

  // e 事件对象, e.target 事件源
  function onChange(e : React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) {
    // setStudent({name:'11', sex:'女', age:20})
    console.log(e.target.name + "=" + e.target.value)

    setStudent((old)=>{
      console.log('old', old)

      // 返回的新值，不能与旧值是同一个对象
      const n = {...old, [e.target.name]:e.target.value}
      // n = {name:'', sex:'男', age:18, name:'a'}
      // n = {name:'', sex:'男', age:18, sex:'女'}
      console.log('new', n)
      return n
    })
  }

  async function onClick() {
    const resp = await axios.post('http://localhost:8080/api/students', student)
    console.log(resp.data.data)
    setMessage(resp.data.data)
  }
  
  const messageJsx = message && <div className='success'>{message}</div>

  return (
    <form>
      <div>
        <label>姓名</label>
        <input type="text" value={student.name} onChange={onChange} name='name'/>
      </div>
      <div>
        <label>性别</label>
        <select value={student.sex} onChange={onChange} name='sex'>
          {jsx}
        </select>
      </div>
      <div>
        <label>年龄</label>
        <input type="text" value={student.age} onChange={onChange} name='age' />
      </div>
      <div>
        <input type='button' value='新增' onClick={onClick}/>
      </div>
      {messageJsx}
    </form>
  )
}
