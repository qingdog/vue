<!-- 基础表格 -->
<template>
  <!-- <a-table :columns="columns" :dataSource="students" rowKey="id"></a-table> -->
  <a-table :columns="columns" :dataSource="students" :rowKey="rowKey"></a-table>
</template>
<script setup lang="ts">
import axios from "../api/request";
import { ref, computed } from "vue";
import { useRequest } from "vue-request";
import { AxiosRespList, Student } from "../model/Model8080";

const {data} = useRequest<AxiosRespList<Student>>(
  ()=>axios.get('/api/students')
)

const students = computed(()=>{
  return data.value?.data.data || []
})

function rowKey(r:Student) {
  return r.id
}

const columns = ref([
  {
    title:'编号',
    dataIndex:'id'
  },
  {
    title:'姓名',
    dataIndex:'name'
  },
  {
    title:'性别',
    dataIndex:'sex'
  },
  {
    title:'年龄',
    dataIndex:'age'
  }
])
</script>
