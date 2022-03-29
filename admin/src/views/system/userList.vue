<template>
  <div class="home">
    <h1>管理员列表</h1>
    <el-table :data="items">
      <!-- prop 是绑定的数据字段，label是显示的名称 -->
      <el-table-column prop="_id" label="ID" width="300"> </el-table-column>
      <el-table-column prop="phone" label="用户名" width="300"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getadmin, getuser, deladmin, deluser } from '../../api/index'
export default {
  name: 'SystemList',
  data() {
    return {
      items: []
    }
  },
  methods: {
    // 删除操作
    async remove(row) {
      // console.log('row',row)
      this.$confirm(`是否删除该用户      ${row.phone}?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await deluser({ _id: row._id })
          // console.log('res',res)
          // 弹框
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          // 更新数据
          this.load()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },

    async load() {
      let res = await getuser()
      console.log(res)
      this.items = res.data.user
    }
  },
  // 页面刚初进入的时候需要做什么
  created() {
    this.load()
  }
}
</script>

<style></style>
