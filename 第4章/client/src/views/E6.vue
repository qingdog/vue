<script lang="ts" setup>
// fetch xhr XMLHttpRequest
// ----------------- xhr 基本用法
/* const xhr = new XMLHttpRequest()
// 当响应返回时，会触发 onload 事件
xhr.onload = function() {
  // 2. 接收响应
  console.log(xhr.response)
}
// 1. 发请求
xhr.open('GET', "http://localhost:8080/api/students")
xhr.responseType = 'json'
xhr.send() */

// ----------------- 对比之前 fetch 的代码
/* const resp = await fetch('http://localhost:8080/api/students')
console.log(await resp.json()) */

// ----------------- 对 xhr 的 Promise 改造
try {
  const resp = await get("http://localhost:8080/api/students")
  console.log(resp)
} catch (e) {
  console.error(e)
}

function get(url: string) {
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest()
    xhr.onload = function() {
      if(xhr.status === 200){
        resolve(xhr.response)
      } else if(xhr.status === 404) {
        reject(xhr.response)
      }    
    }
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.send()
  })
}
</script>
