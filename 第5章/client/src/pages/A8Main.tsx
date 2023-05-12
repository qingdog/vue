import { Button, Layout, Menu } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import RoutesStore from '../store/RoutesStore'

function A8Main() {
  /* const items: ItemType[] = [
    { label: <Link to='/student'>学生管理</Link>, key: '1', icon: <EditOutlined /> },
    { label: <Link to='/teacher'>教师管理</Link>, key: '2', icon: <CopyOutlined />},
    {
      label: '用户管理',
      key: '3',
      icon: <Icon name='EditOutlined'></Icon>,
      children: [
        { label: '功能1', key: '31' },
        { label: '功能2', key: '32' },
      ],
    },
  ] */

  const nav = useNavigate()

  function onClick() {
    RoutesStore.reset()
    nav('/login')
  }

  /* useEffect(()=>{
    if(RoutesStore.username === '') {
      nav('/login')
    }
  }, []) */

  if(RoutesStore.username === '') {
    return <Navigate to='/login'></Navigate>
  }

  return (
    <Layout>
      <Layout.Header>
        <span>欢迎您【{RoutesStore.username}】</span>
        <Button size='small' onClick={onClick}>注销</Button>
      </Layout.Header>
      <Layout>
        <Layout.Sider>
          <Menu items={RoutesStore.menus} theme='dark' mode='inline'></Menu>
        </Layout.Sider>
        <Layout.Content>
          <Outlet></Outlet>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default observer(A8Main)
