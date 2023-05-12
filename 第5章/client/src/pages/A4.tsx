import { Table } from 'antd'
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { PageResp, R, Student } from '../model/Student'

export default function A4() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 4
  })

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
  }, [pagination.current, pagination.pageSize])
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

  // columns: 列定义
  // dataSource: 数据源，一般是数组包对象
  // rowKey: 作为唯一标识的属性名
  // loading: 显示加载图片
  // pagination: 分页数据
  // onChange: 当页号，页大小等发生改变时触发
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
