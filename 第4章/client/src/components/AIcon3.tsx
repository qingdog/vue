import * as Icons from '@ant-design/icons-vue'

interface Module {
  [p:string]: any
}

function toCamelCase(str: string) { // highlight-outlined
  return str
    .split("-") // ['highlight', 'outlined']
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1)) // ['Highlight', 'Outlined']
    .join(""); // HighlightOutlined
}

export default {
  props: {
    icon: String
  },
  setup(props: {icon: string}) {
    const im: Module = Icons
    const tag = im[toCamelCase(props.icon)] // 图标组件
    // HighlightOutlined
    return ()=> <tag></tag> // 返回组件标签
  }
}

