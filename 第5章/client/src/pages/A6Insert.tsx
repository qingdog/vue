import { Form, Input, InputNumber, message, Modal, Radio } from 'antd'
import { Rule } from 'antd/lib/form'
import axios from 'axios'
import { useEffect } from 'react'
import { R, Student } from '../model/Student'

export default function A6Insert({
  open,
  student,
  onSuccess,
  onCancel,
}: {
  open: boolean
  student: Student
  onSuccess?: () => void
  onCancel?: () => void
}) {
  const { Item } = Form
  const { Group } = Radio
  const options = [
    { label: '男', value: '男' },
    { label: '女', value: '女' },
  ]

  const [form] = Form.useForm() // 代表了表单对象

  const nameRules: Rule[] = [
    { required: true, message: '姓名必须' },
    { min: 2, type: 'string', message: '至少两个字符' },
  ]

  const ageRules: Rule[] = [
    { required: true, message: '年龄必须' },
    { min: 1, type: 'number', message: '最小1岁' },
    { max: 120, type: 'number', message: '最大120岁' },
  ]

  async function onOk() {
    // 验证并获取表单数据
    try {
      const values = await form.validateFields()
      console.log(values)
      const resp = await axios.post<R<string>>(
        `http://localhost:8080/api/students`,
        values
      )
      message.success(resp.data.data)
      onSuccess && onSuccess()
      form.resetFields() // 重置表单
    } catch (e) {
      console.error(e)
    }
  }

  /* useEffect(() => {
    // 修改表单数据
    form.setFieldsValue(student) // id, name, sex, age
  }, [student]) */

  return (
    <Modal
      open={open}
      title='新增学生'
      onOk={onOk}
      onCancel={onCancel}
      forceRender={true}>
      <Form form={form} initialValues={student}>
        <Item label='姓名' name='name' rules={nameRules}>
          <Input></Input>
        </Item>
        <Item label='性别' name='sex'>
          <Group
            options={options}
            optionType='button'
            buttonStyle='solid'></Group>
        </Item>
        <Item label='年龄' name='age' rules={ageRules}>
          <InputNumber></InputNumber>
        </Item>
      </Form>
    </Modal>
  )
}
