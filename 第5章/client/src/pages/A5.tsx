import { Input, Select, Table } from 'antd'
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PageResp, R, Student, StudentQueryForm } from '../model/Student'

const { Option } = Select

export default function A5() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 5,
  })
  const [form, setForm] = useState<StudentQueryForm>({})

  // 参数1，新的分页数据
  function onTableChange(newPagination: TablePaginationConfig) {
    setPagination(newPagination)
  }

  useEffect(() => {
    async function getStudents() {
      // params 用来给请求添加 url 后的 ? 参数
      const resp = await axios.get<R<PageResp<Student>>>(
        'http://localhost:8080/api/students/q',
        {
          params: {
            page: pagination.current,
            size: pagination.pageSize,
            ...form
          },
        }
      )
      // 返回结果中：list 代表当前页集合, total 代表总记录数
      setStudents(resp.data.data.list)
      setPagination((old) => {
        return { ...old, total: resp.data.data.total }
      })
      setLoading(false)
    }

    getStudents()
  }, [pagination.current, pagination.pageSize, form.name, form.sex, form.age])
  // useEffect 需要在依赖项( current 和 pageSize ) 改变时重新执行

  // title: 列标题  dataIndex: 要关联的属性名
  const columns: ColumnsType<Student> = [
    {
      title: '编号',
      dataIndex: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '性别',
      dataIndex: 'sex',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
  ]

  function onNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((old)=>{
      return {...old, name: e.target.value}
    })
  }

  function onSexChange(value: string) {
    setForm((old)=>{
      return {...old, sex: value}
    })
  }

  function onAgeChange(value: string) {
    setForm((old)=>{
      return {...old, age: value}
    })
  }


  // columns: 列定义
  // dataSource: 数据源，一般是数组包对象
  // rowKey: 作为唯一标识的属性名
  // loading: 显示加载图片
  // pagination: 分页数据
  // onChange: 当页号，页大小等发生改变时触发
  return (
    <div>
      <div>
        <Input
          style={{ width: 120 }}
          placeholder='请输入姓名'
          value={form.name}
          onChange={onNameChange}></Input>
        <Select
          style={{ width: 120 }}
          placeholder='请选择性别'
          allowClear={true}
          value={form.sex}
          onChange={onSexChange}>
          <Option value='男'>男</Option>
          <Option value='女'>女</Option>
        </Select>
        <Select
          style={{ width: 120 }}
          placeholder='请选择年龄'
          allowClear={true}
          value={form.age}
          onChange={onAgeChange}>
          <Option value='1,19'>20以下</Option>
          <Option value='20,29'>20左右</Option>
          <Option value='30,39'>30左右</Option>
          <Option value='40,120'>40以上</Option>
        </Select>
      </div>
      <Table
        columns={columns}
        dataSource={students}
        rowKey='id'
        loading={loading}
        pagination={pagination}
        onChange={onTableChange}></Table>
    </div>
  )
}
