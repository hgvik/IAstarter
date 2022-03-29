// 上传语录， {问候对象,问候内容}
<template>
  <div>
    <h1>上传语录</h1>
    <el-input placeholder="请输入发送对象" v-model="toobj" clearable></el-input>
    <el-input placeholder="请输入发送内容" v-model="tomes" clearable></el-input>
    <el-button type="primary" @click="handleUP">上传语录</el-button>
  </div>
</template>

<script>
import { addyulu } from '../../api/index'
export default {
  props: {},
  data() {
    return {
      toobj: '',
      tomes: ''
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    async handleUP() {
      let admin = window.localStorage.getItem('username')
      if (this.tomes === '') {
        this.$message({
          message: '请输入问候',
          type: 'error'
        })
        return
      }
      if (!this.verifyEmail(this.toobj)) {
        this.$message({
          message: '邮箱格式错误',
          type: 'error'
        })
        return
      }
      let res = await addyulu({ admin, toobj: this.toobj, tomes: this.tomes })
      this.$message({
        message: '上传成功',
        type: 'success'
      })
    },
    verifyEmail(val) {
      // false: 邮箱不正确
      if (
        !/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          val
        )
      )
        return false
      // true: 邮箱正确
      else return true
    }
  },
  components: {}
}
</script>

<style scoped>
.el-input {
  width: 51%;
  margin-top: 2vw;
}
.el-button {
  margin-left: 2vw;
}
</style>
