import { Input } from 'antd'
import StudentStore from '../store/StudentStore'
import { observer } from 'mobx-react-lite'
import A71 from './A71'
import A72 from './A72'
import Search from 'antd/lib/input/Search'
import { Student } from '../model/Student'

function A7() {
  return (
    <>
      <Input
        style={{ width: 100 }}
        onChange={(e) => {
          StudentStore.setName(e.target.value)
        }}></Input>

      <Search style={{ width: 150 }} placeholder='请输入编号'
        onSearch={(v)=>{
          StudentStore.fetch(Number(v))
        }}></Search>
      {/* <h3>组件0 {StudentStore.student.name}</h3> */}
      <h3>组件0 {StudentStore.displayName}</h3>
      <A71></A71>
      <A72></A72>
    </>
  )
}
// observer 对 A7 进行包装
// 以后 A7 内的 store 数据发生变化，observer 就能感知到，重新调用 A7 渲染
export default observer(A7)
