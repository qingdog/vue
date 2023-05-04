<template>
  <div>
    <el-table :data="students">
      <el-table-column label="编号" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="性别" prop="sex"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleUpdate(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog width="22%" :visible.sync="updateDialogVisible">
      <el-form :model="updateForm">
        <el-form-item label="编号">
          <el-input size="mini" :readonly="true" v-model="updateForm.id"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input size="mini" v-model="updateForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select size="mini" v-model="updateForm.sex">
            <el-option value="男"></el-option>
            <el-option value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input size="mini" v-model="updateForm.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="confirmUpdate()">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { all, deleteById, update, insert } from '@/api/student'
const options = {
  mounted() {
    this.all()
  },
  data() {
    return {
      students: [],
      updateDialogVisible: false,
      updateForm: {
        id: 0,
        name: '',
        sex: '男',
        age: 0
      }
    }
  },
  methods: {
    async confirmUpdate() {
      await update(this.updateForm.id, this.updateForm)
      this.updateDialogVisible = false
      this.all()
    },
    handleUpdate(row) { // {id, name, sex, age}
      this.updateDialogVisible = true
      this.updateForm = { ...row }
      // this.updateForm.id = row.id
      // this.updateForm.name = row.name
      // this.updateForm.sex = row.sex
      // this.updateForm.age = row.age
      // this.updateForm = row // 错误写法，不能让他俩指向同一个对象
    },
    async handleDelete(row) {
      // console.log(row.id)
      try {
        await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await deleteById(row.id)
        this.all()
      } catch (e) {
        console.log('取消删除')
      }
    },
    async all() {
      const { data } = await all()
      this.students = data
    }
  }
}
export default options
</script>
<style scoped>
.el-input,
.el-select {
  width: 180px;
}
</style>
