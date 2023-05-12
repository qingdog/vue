import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Hello from './pages/Hello'
import P1 from './pages/P1'
import P2 from './pages/P2'
import P3 from './pages/P3'
import P4 from './pages/P4'
import P5 from './pages/P5'
import P6 from './pages/P6'
import P7 from './pages/P7'
import P8 from './pages/P8'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import A1 from './pages/A1'
import A2 from './pages/A2'
import A3 from './pages/A3'
import A4 from './pages/A4'
import A5 from './pages/A5'
import A6 from './pages/A6'
import A6Delete from './pages/A6Delete'
import A6Update from './pages/A6Update'
import A6DeleteSelected from './pages/A6DeleteSelected'
import A7 from './pages/A7'
import MyRouter from './router/MyRouter'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Suspense } from 'react'

/* 
  快捷键
    import导入：  alt+enter 
    注释：        ctrl+/     
*/
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const stu1 = { id: 1, name: '风清扬', sex: '男', age: 99, photo: '/imgs/1.png' }
const stu2 = { id: 2, name: '玮哥', sex: '男', age: 20, photo: '/imgs/2.png' }
const stu3 = { id: 3, name: '长宏', sex: '男', age: 30, photo: '/imgs/3.png' }

// root.render(
//   <React.StrictMode>
//     {/* <App></App> */}

//     {/* 1. 入门案例 */}
//     {/* <Hello msg='Hello, React' age={30}></Hello> */}
//     {/* <Hello msg='你好, React'></Hello> */}

//     {/* 2. 人物卡片案例 */}
//     {/* <P1 student={stu1}></P1> */}
//     {/* <P1 student={stu2}></P1> */}
//     {/* <P1 student={stu3}></P1> */}

//     {/* 列表循环, 条件判断 */}
//     {/* <P2 students={[stu1,stu2,stu3]} hideAge={false}></P2> */}

//   </React.StrictMode>
// );
/* ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
}) */
root.render(
  // 3.1 axios 发送请求、响应格式
  // <P3 id={2}></P3>

  // 3.2 函数无状态
  // <P4 id={1}></P4>

  // 3.3 useState
  // <P5 id={1}></P5>

  // 3.4 useEffect
  // <P6 id={1} age={18}></P6>

  // 3.5 useContext
  // <P7></P7>

  // 3.6 表单
  // <P8></P8>

  <ConfigProvider locale={zhCN}>
    {/* 4.1 antd 组件入门 */}
    {/* <A1></A1> */}

    {/* 4.2 antd 表格组件 */}
    {/* <A2></A2> */}

    {/* 4.3 表格+客户端分页 */}
    {/* <A3></A3> */}

    {/* 4.4 表格+服务端分页 */}
    {/* <A4></A4> */}

    {/* 4.5 表格+分页+搜索 */}
    {/* <A5></A5> */}

    {/* 4.6 删除 */}
    {/* <A6Delete id={1}></A6Delete> */}

    {/* 4.7 修改 */}
    {/* <A6Update open={true} 
      student={{id:1,name:'宋远桥',sex:'男', age:40}}></A6Update> */}

    {/* 4.8 新增 */}

    {/* 4.9 删除选中 */}
    {/* <A6DeleteSelected ids={[]}></A6DeleteSelected> */}
    {/* <A6></A6> */}

    {/* 5. MobX */}
    {/* <A7></A7> */}

    {/* 6. React Router npm install react-router-dom */}
    <BrowserRouter>
      <Suspense fallback={<h3>加载中...</h3>}>
        <MyRouter></MyRouter>
      </Suspense>
    </BrowserRouter>
  </ConfigProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
