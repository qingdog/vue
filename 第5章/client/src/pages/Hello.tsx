// properties 属性
/* export default function Hello(props : { msg : string, age?: number }) {
  // jsx  tsx
  return <h2>{props.msg} 我的年龄是 {props.age}</h2>
} */

// 解构赋值语法格式
const props = {msg:'', age:18}
const {msg, age} = props

export default function Hello({msg, age = 18}: { msg : string, age?: number }) {
  // jsx  tsx
  return <h2>{msg} 我的年龄是 {age}</h2>
}


/*
小结：
    组件标签的
    1. 字符串属性赋值直接用 '' 或 "" 即可，如 <Hello msg='Hello, React'></Hello>
    2. 除字符串以外，其它类型属性赋值需要用 {}，如 <Hello age={18}></Hello>
  
    3. 可选属性类型用 ?: 定义
    4. 定义组件属性时，可以用解构赋值简化属性使用，并且解构赋值后可以给可选属性指定默认值
*/