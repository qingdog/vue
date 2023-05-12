<template>
  <div class="login">
    <a-form :label-col="{ span: 6 }" autocomplete="off">
      <a-form-item label="用户名" v-bind="validateInfos.username">
        <a-input v-model:value="dto.username" />
      </a-form-item>
      <a-form-item label="密码" v-bind="validateInfos.password">
        <a-input-password v-model:value="dto.password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 6, span: 16 }">
        <a-button type="primary" @click="onClick">登录</a-button>
      </a-form-item>      
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Form } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import axios from '../api/request'
import { useRequest } from 'vue-request'
import { AxiosRespToken, LoginDto, AxiosRespMenuAndRoute } from '../model/Model8080'
import { addServerRoutes, resetRoutes, serverMenus, serverToken, serverUsername } from '../router/a6router'

// 必须放在顶层
const router = useRouter()
const dto = ref({username:'', password:''})
const rules = ref({
  username: [
    {required: true, message:'用户名必填'}
  ],
  password:[
    {required: true, message:'密码必填'}
  ]
})
const { validateInfos, validate } = Form.useForm(dto, rules)
const { runAsync:login } = useRequest<AxiosRespToken, LoginDto[]>((dto)=> axios.post('/api/loginJwt', dto), {manual:true})
const { runAsync:menu } = useRequest<AxiosRespMenuAndRoute, string[]>((username)=> axios.get(`/api/menu/${username}`), {manual:true})
async function onClick() {
  try {
    await validate()
    const loginResp = await login(dto.value)
    if(loginResp.data.code === 200) { // 登录成功
      resetRoutes()

      const token = loginResp.data.data.token
      // 存储 token 用户名
      serverToken.value = token
      serverUsername.value = getUsername(token)
      console.log(serverUsername.value)

      const menuResp = await menu(serverUsername.value)      
      // 存储菜单, 添加路由
      serverMenus.value = menuResp.data.data.menuTree
      addServerRoutes(menuResp.data.data.routeList)

      // 跳转至主页
      router.push('/')
    }
  } catch (e) {
    console.error(e)
  }
}

onMounted(()=>{
  resetRoutes()
})

function getUsername(token:string) {
  if(!token) {
    return ''
  }
  const s = token.split('.')
  return JSON.parse(atob(s[1])).sub
}
</script>
<style scoped>
.login{
  margin: 200px auto;
  width: 300px;
  padding: 20px;
  height: 180px;
  background-color: antiquewhite;
}
</style>