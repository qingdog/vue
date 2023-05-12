<!-- 父组件 -->
<template>
  <Child1 v-for="u of users" 
    :name="u.name" 
    :country="u.country" 
    :avatar="u.avatar"
    :key="u.username"></Child1>
</template>
<script setup lang="ts">
import axios from "axios";
import { useRequest } from "vue-request";
import { computed } from "vue";
import { AxiosRespResults, Result } from '../model/ModelRandomUser'
import Child1 from "../components/Child1.vue";

const { data } = useRequest<AxiosRespResults>(
  ()=>axios.get('https://randomuser.me/api/?results=3')
)

const users = computed(()=>{
  return data.value?.data.results.map(resultToUser) || []
})

interface User {
  name: string,
  country: string,
  avatar: string,
  username: string
}
function resultToUser(r:Result):User {
  return {
    name: r.name.first,
    country: r.location.country,
    avatar: r.picture.medium,
    username: r.login.username
  }
}
</script>
