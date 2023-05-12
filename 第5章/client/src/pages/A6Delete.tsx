import { Button, message, Popconfirm } from 'antd'
import axios from 'axios'
import { R } from '../model/Student'

export default function A6Delete({ id, onSuccess }: { id: number, onSuccess?:()=>void }) {
  async function onConfirm() {
    const resp = await axios.delete<R<string>>(
      `http://localhost:8080/api/students/${id}`
    )
    message.success(resp.data.data)
    // 改变 form 依赖项
    onSuccess && onSuccess()
  }
  return (
    <Popconfirm title='确定要删除学生吗?' onConfirm={onConfirm}>
      <Button danger size='small'>
        删除
      </Button>
    </Popconfirm>
  )
}
