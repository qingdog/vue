import React from "react"
import { Student } from "../model/Student";
import P1 from "./P1";

/*
  已知有数组 const array = [1,2,3]
  如何生成下面的 jsx 标签
  <p>1</p>
  <p>2</p>
  <p>3</p>

  map
    1 -> <p>1</p>
    2 -> <p>2</p>
    3 -> <p>3</p>
*/
/* export default function P2() {  
  const array = [1, 2, 3]
  const jsx = array.map((e) => <p key={e}>{e}</p>)
  // jsx 的内容实际是 [<p>1</p>,<p>2</p>,<p>3</p>]
  // <React.Fragment> 或 <> 起到占位作用，不会生成最终的 html 标签
  return <>{jsx}</>
} */

// ctrl+alt+L

export default function P2({
  students,
  hideAge = false,
}: {
  students: Student[]
  hideAge?: boolean
}) {
  const jsx = students.map(
    (s) => <P1 student={s} key={s.id} hideAge={hideAge}></P1>
  )
  return <>{jsx}</>
}
