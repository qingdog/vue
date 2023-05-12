import { Table } from 'antd'
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { R, Student } from '../model/Student'

export default function A3() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState<TablePaginationConfig>(
    {current:1, pageSize:5}
  )

  // 参数1，新的分页数据
  function onTableChange(newPagination: TablePaginationConfig) {
    // console.log(newPagination)
    setPagination(newPagination)
  }

  useEffect(() => {
    async function getStudents() {
      const resp = await axios.get<R<Student[]>>(
        'http://localhost:8080/api/students'
      )
      setStudents(resp.data.data)
      setLoading(false)
    }

    getStudents()
  }, [])

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

  // columns: 列定义
  // dataSource: 数据源，一般是数组包对象
  // rowKey: 作为唯一标识的属性名
  // loading: 显示加载图片
  return (
    <Table
      columns={columns}
      dataSource={students}
      rowKey='id'
      loading={loading}
      pagination={pagination}
      onChange={onTableChange}></Table>
  )
}
