import { Button, Input, Select, Space, Table } from 'antd'
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PageResp, R, Student, StudentQueryForm } from '../model/Student'
import A6Delete from './A6Delete'
import A6Insert from './A6Insert'
import A6SelectedDelete from './A6DeleteSelected'
import A6Update from './A6Update'
import A6DeleteSelected from './A6DeleteSelected'

const { Option } = Select

export default function A6() {
  // 各类 state
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 5,
  })
  const [form, setForm] = useState<StudentQueryForm>({})

  // 分页变化
  function onTableChange(newPagination: TablePaginationConfig) {
    setPagination(newPagination)
  }

  // 条件变化
  function onNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((old) => {
      return { ...old, name: e.target.value }
    })
  }

  function onSexChange(value: string) {
    setForm((old) => {
      return { ...old, sex: value }
    })
  }

  function onAgeChange(value: string) {
    setForm((old) => {
      return { ...old, age: value }
    })
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
            ...form,
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
  }, [pagination.current, pagination.pageSize, form])
  // useEffect 需要在依赖项( current 和 pageSize ) 改变时重新执行

  function onDeleteSuccess() {
    setForm((old) => {
      return { ...old }
    })
  }

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
    {
      title: '操作',
      dataIndex: 'operation',
      // value: 属性值, student
      render: (_, student) => {
        return (
          <>
            <Space>
              <A6Delete id={student.id} onSuccess={onDeleteSuccess}></A6Delete>
              <Button
                type='default'
                size='small'
                onClick={() => {
                  onUpdateClick(student)
                }}>
                修改
              </Button>
            </Space>
          </>
        )
      },
    },
  ]

  // -------------- 修改功能开始 -------------
  function onUpdateClick(student: Student) {
    setUpdateOpen(true)
    setUpdateForm(student)
  }

  function onUpdateCancel() {
    setUpdateOpen(false)
  }

  function onUpdateSuccess() {
    setUpdateOpen(false)
    setForm((old) => {
      return { ...old }
    })
  }

  const [updateOpen, setUpdateOpen] = useState(false)
  const [updateForm, setUpdateForm] = useState<Student>({
    id: 0,
    name: '',
    sex: '男',
    age: 18,
  })
  // -------------- 修改功能结束 -------------

  // -------------- 新增功能开始 -------------
  function onInsertClick() {
    setInsertOpen(true)
  }

  function onInsertCancel() {
    setInsertOpen(false)
  }

  function onInsertSuccess() {
    setInsertOpen(false)
    setForm((old) => {
      return { ...old }
    })
  }

  const [insertOpen, setInsertOpen] = useState(false)
  const [insertForm, setInsertForm] = useState<Student>({
    id: 0,
    name: '',
    sex: '男',
    age: 18,
  })
  // -------------- 新增功能结束 -------------

  // -------------- 删除选中功能开始 -------------
  const [ids, setIds] = useState<React.Key[]>([])
  function onIdsChange(ids:React.Key[]) {
    // console.log(ids)
    setIds(ids)
  }
  function onDeleteSelectedSuccess() {
    setForm((old)=>{
      return {...old}
    })
    setIds([])
  }
  // -------------- 删除选中功能结束 -------------
  return (
    <div>
      <A6Insert
        open={insertOpen}
        student={insertForm}
        onSuccess={onInsertSuccess}
        onCancel={onInsertCancel}></A6Insert>
      <A6Update
        open={updateOpen}
        student={updateForm}
        onSuccess={onUpdateSuccess}
        onCancel={onUpdateCancel}></A6Update>
      <div>
        <Space>
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

          <Button type='primary' onClick={onInsertClick}>新增</Button>
          <A6DeleteSelected ids={ids} onSuccess={onDeleteSelectedSuccess}></A6DeleteSelected>
        </Space>
      </div>
      <Table
        rowSelection={{
          selectedRowKeys: ids,
          onChange: onIdsChange
        }}
        columns={columns}
        dataSource={students}
        rowKey='id'
        loading={loading}
        pagination={pagination}
        onChange={onTableChange}></Table>
    </div>
  )
}
