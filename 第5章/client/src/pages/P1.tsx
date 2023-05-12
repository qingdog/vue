import '../css/P1.css'

import { Student } from '../model/Student'

export default function P1({
  student,
  hideAge = false,
}: {
  student: Student
  hideAge?: boolean
}) {
  // e 代表事件对象
  function handleClick(e: React.MouseEvent) {
    console.log(student)
    console.log(e)
  }

  /* let ageFragment
  if(hideAge) {
    ageFragment = null
  } else {
    ageFragment = <span>年龄 {student.age}</span>
  } */

  const ageFragment = !hideAge && <span>年龄 {student.age}</span>

  return (
    <div className='student'>
      <div className='photo'>
        <img src={student.photo} onClick={handleClick} />
      </div>
      <h1>{student.name}</h1>
      <h2>{student.id}</h2>
      <p>
        性别 {student.sex} {ageFragment}
      </p>
    </div>
  )
}