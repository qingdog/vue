import { h } from "vue"
import * as Icons from '@ant-design/icons-vue'

interface Module {
  [p:string]: any
}

// 参数1: 组件属性
const AIcon = (props:{icon:string}) => {
  // console.log(props.icon)
  // console.log(Icons)
  // 参数1: 组件对象
  const im: Module = Icons
  return h(im[toCamelCase(props.icon)])
}

export default AIcon

// 将-分隔的单词转换为大驼峰命名的单词
function toCamelCase(str: string) { // highlight-outlined
  return str.split('-') // ['highlight', 'outlined']
    .map((e)=> e.charAt(0).toUpperCase() + e.slice(1) ) // ['Highlight', 'Outlined']
    .join('')
}
/*
Icons 的结构如下
{
  HighlightOutlined: HighlightOutlined 组件对象,
  MonitorOutlined: MonitorOutlined 组件对象,
  ...
}
*/