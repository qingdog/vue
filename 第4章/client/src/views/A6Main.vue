<template>
  <div class="a6main">
    <a-layout>
      <a-layout-header>
        <span>{{serverUsername}} 【{{userInfo.name}} - {{userInfo.sex}}】</span>
      </a-layout-header>
      <a-layout>
        <a-layout-sider>
          <a-menu theme="dark" mode="inline">
            <template v-for="m1 of serverMenus">
              <a-sub-menu v-if="m1.children" :key="m1.id" :title="m1.title">
                <template #icon><a-icon :icon="m1.icon"></a-icon></template>
                <a-menu-item v-for="m2 of m1.children" :key="m2.id">
                  <template #icon><a-icon :icon="m2.icon"></a-icon></template>
                  <router-link v-if="m2.routePath" :to="m2.routePath">{{m2.title}}</router-link>
                  <span v-else>{{m2.title}}</span>
                </a-menu-item>
              </a-sub-menu>
              <a-menu-item v-else :key="m1.id">
                <template #icon><a-icon :icon="m1.icon"></a-icon></template>
                <router-link v-if="m1.routePath" :to="m1.routePath">{{m1.title}}</router-link>
                <span v-else>{{m1.title}}</span>
              </a-menu-item>
            </template>
          </a-menu>
        </a-layout-sider>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import AIcon from '../components/AIcon3' // jsx icon 组件
import { serverMenus, serverUsername } from '../router/a6router'
import { useUserInfo } from '../store/UserInfo'
const userInfo = useUserInfo()

onMounted(()=>{
  userInfo.get(serverUsername.value)
})
</script>
<style scoped>
.a6main {
  height: 100%;
  background-color: rgb(220, 225, 255);
  box-sizing: border-box;
}
.ant-layout-header {
  height: 50px;
  background-color: gold;
  border-bottom: 1px solid black;
  padding: 0 25px 0 0;
  line-height: 50px;
  text-align: right;
}

.ant-layout-sider {
  background-color: gold;
  border-right: 1px solid black;
}

.ant-layout-content {
  background-color: gold;
}

.ant-layout-footer {
  background-color:darkslateblue;
  height: 30px;
}

.ant-layout {
  height: 100%;
}

.ant-layout-has-sider {
  height: calc(100% - 50px);
}

</style>