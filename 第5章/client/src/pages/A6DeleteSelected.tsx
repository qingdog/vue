import { Button, message, Popconfirm } from "antd";
import axios from "axios";
import React from "react";
import { R } from "../model/Student";

export default function A6DeleteSelected(
  {ids, onSuccess}: {ids:React.Key[], onSuccess?:()=>void} // number 或 string 的数组
){
  const disabled = ids.length === 0
  async function onConfirm() {
    const resp = await axios.delete<R<string>>('http://localhost:8080/api/students', {
      data: ids
    })
    message.success(resp.data.data)
    onSuccess && onSuccess()
  }
  return (
    <Popconfirm title='真的要删除选中的学生吗?' onConfirm={onConfirm} disabled={disabled}>
      <Button danger type='primary' disabled={disabled}>
        删除选中
      </Button>
    </Popconfirm>
  )
}
