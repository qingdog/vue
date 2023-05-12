import { h } from "vue"

const Hello = () => {
  // 参数1: 标签名
  // 参数2: 属性
  // 参数3: 内容
  // <h5 id=''>Hello, World</h3>
  return h('h5', {id:'test'}, `Hello, World`)
}

export default Hello