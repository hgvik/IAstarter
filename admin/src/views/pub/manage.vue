// 发送语录， // 选择对象,对象最好下拉框（数据后端取） // 发送内容，随机，最好可以载次随机

<template>
  <div>
    <h1>发送语录</h1>
    <el-card>
      <el-input class="myinput" placeholder="请输入用来发送的邮箱" v-model="myemail"></el-input>
      <el-input class="myinput" placeholder="请输入smtp授权码" v-model="pass"></el-input>
      <el-input class="myinput" placeholder="请输入邮件标题" v-model="subject"></el-input>
    </el-card>
    <el-card>
      <el-select @change="handlechange" v-model="toobj" placeholder="请选择接收者">
        <el-option
          v-for="item in toobjOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input class="myinput" v-model="tomes"></el-input>
      <el-button @click="handlechange" type="primary">刷新语录</el-button>
      <el-button @click="send" type="primary">发送</el-button>
    </el-card>
  </div>
</template>

<script>
import { getsenduser, getuseryulu, sendmsg } from '../../api/index'
export default {
  props: {},
  data() {
    return {
      // 数据列表
      list: [],
      // 发送对象
      toobj: '',
      // 内容
      tomes: '',
      // 发送的邮箱
      myemail: '',
      // smtp授权码
      pass: '',
      // 标题
      subject: ''
    }
  },
  computed: {
    toobjOptions() {
      let newlist = this.list.map(item => {
        return item.toobj
      })
      // 去重
      let setlist = this.mySet3(newlist)
      let arr = setlist.map(item => {
        return { value: item, label: item }
      })
      return arr
    }
  },
  created() {
    this.load()
  },
  mounted() {},
  watch: {},
  methods: {
    async load() {
      let res = await getsenduser()
      this.list = res.data.user
    },
    mySet3(arr) {
      let obj = {}
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (obj[item] !== undefined) {
          arr.splice(i, 1)
          i--
          continue
        }
        obj[item] = item
      }
      return arr
    },
    // 选中值改变
    async handlechange(item) {
      let res = await getuseryulu({ toobj: this.toobj })
      let arr = res.data.user.map(item => {
        return item.tomes
      })
      console.log(arr)
      this.tomes = arr[Math.floor(Math.random() * arr.length)]
    },
    // 发送
    send() {
      sendmsg({
        user: this.myemail,
        pass: this.pass,
        title: this.subject,
        to: this.toobj,
        text: this.tomes
      })
    }
  },
  components: {}
}
</script>

<style scoped>
.el-card {
  margin-top: 3vw;
}
.myinput {
  width: 50%;
  margin: 1vw;
}
</style>
