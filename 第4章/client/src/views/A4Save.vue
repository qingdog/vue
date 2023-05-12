<template>
  <a-modal :visible="visible" :title="title" 
    @ok="onOk" @cancel="onCancel">
    <a-form>
      <a-form-item label="编号" v-if="id">
        <a-input readonly v-model:value="id"></a-input>
      </a-form-item>
      <a-form-item label="姓名" v-bind="validateInfos.name">
        <a-input v-model:value="dto.name"></a-input>
      </a-form-item>
      <a-form-item label="性别" v-bind="validateInfos.sex">
        <a-radio-group v-model:value="dto.sex">
          <a-radio-button value="男">男</a-radio-button>
          <a-radio-button value="女">女</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="年龄" v-bind="validateInfos.age">
        <a-input-number v-model:value="dto.age"></a-input-number>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script setup lang="ts">
import axios from "../api/request";
import { ref, computed } from "vue";
import { useRequest } from "vue-request";
import { StudentSaveDto, AxiosRespString } from "../model/Model8080";
import { Form } from 'ant-design-vue'

// 定义属性
const props = defineProps<{id:number, dto:StudentSaveDto, visible:boolean}>()

const title = computed(()=> props.id===0?'新增学生':'修改学生')

// 定义事件
const emit = defineEmits(['update:visible', 'saved'])

async function onOk() {
  try {
    // 提交前校验
    await validate()
    if(props.id === 0) {
      await insert(props.dto)
    } else {
      await update(props.dto)
    }
    emit('saved')
    // 发送事件给父组件, 希望把 visible 改为 false
    emit('update:visible', false) 
  } catch (e) {
    console.error(e)
  }
}

function onCancel() {
  // 发送事件给父组件, 希望把 visible 改为 false
  emit('update:visible', false)
}

const {runAsync:insert} = useRequest<AxiosRespString,StudentSaveDto[]>(
  (dto)=>axios.post('/api/students', dto),
  {
    manual: true
  }
)

const {runAsync:update} = useRequest<AxiosRespString,StudentSaveDto[]>(
  (dto)=>axios.put(`/api/students/${props.id}`, dto),
  {
    manual: true
  }
)

const rules = ref({
  name: [
    {required: true, message:'姓名必须'},
    {min:2, message:'字符数至少为2'}
  ],
  sex: [
    {required: true, message:'性别必须'}
  ],
  age: [
    {required: true, message:'年龄必须'},
    {min:10, message:'年龄最小为10岁', type:'number'},
    {max:120, message:'年龄最大为120岁', type:'number'}
  ]
})

// 参数1: 待校验的数据
// 参数2: 校验规则
const { validateInfos, validate } = Form.useForm(props.dto, rules)
</script>