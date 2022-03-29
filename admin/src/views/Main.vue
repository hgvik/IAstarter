<template>
  <div class="main">
    <el-container style="height: 100vh;">
      <el-header style="text-align: right; font-size: 12px" :style="adminstyle">
        <el-color-picker v-model="color"></el-color-picker>
        <span class="loginUser">{{ username }}</span>

        <button class="onReturn" @click="onReturn()">退出登录</button>
      </el-header>

      <el-container>
        <el-aside width="200px" :style="adminstyle">
          <!-- 1.el-menu 添加router属性，开启路由模式
				2.unique-opened 一次展开一个
				3.:default-openeds="['3']" el-submenu 对应的index 的值
				4.:default-active="$route.path" 默认激活的选项，刷新时仍然存在 -->
          <el-menu
            :style="adminstyle"
            router
            :default-openeds="openeds"
            unique-opened
            :default-active="$route.path"
          >
            <el-submenu index="1" :style="adminstyle">
              <template slot="title"><i class="el-icon-edit-outline"></i>内容管理</template>
              <el-menu-item-group :style="adminstyle">
                <template slot="title" :style="adminstyle">发布管理</template>
                <el-menu-item :style="adminstyle" index="/pub/audit">上传语录</el-menu-item>
                <el-menu-item :style="adminstyle" index="/pub/manage">发送语录</el-menu-item>
              </el-menu-item-group>
              <!-- <el-menu-item-group>
							<template slot="title">商品管理</template>
							<el-menu-item index="/shops/create">新建商品</el-menu-item>
							<el-menu-item index="/shops/list">商品列表</el-menu-item>
						</el-menu-item-group> -->
            </el-submenu>
            <!-- 
            <el-submenu index="2" :style="adminstyle">
              <template slot="title" :style="adminstyle"
                ><i class="el-icon-thumb"></i>工具集合</template
              >
              <el-menu-item :style="adminstyle" index="/tools">工具集合</el-menu-item>
            </el-submenu> -->

            <el-submenu index="3">
              <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
              <el-menu-item-group :style="adminstyle">
                <template slot="title" :style="adminstyle">管理员</template>
                <el-menu-item :style="adminstyle" index="/systems/create">新建管理员</el-menu-item>
                <el-menu-item :style="adminstyle" index="/systems/list">管理员列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      color: '#f9f1db',
      openeds: [],
      username: window.localStorage.username
    }
  },
  methods: {
    onReturn() {
      // 清空token
      window.localStorage.removeItem('token')
      //localStorage.clear()
      // 跳转到登录页
      this.$router.push('/Login')
    }
  },
  computed: {
    adminstyle() {
      return `background-color:${this.color}`
    }
  }
}
</script>

<style>
.el-header {
  background-color: #f9f1db;
  color: #333;
}

img {
  float: left;
}

.el-aside {
  color: #333;
}

.el-menu {
  background-color: #f9f1db;
}

.loginUser {
  font-size: 20px;
  margin-right: 10px;
  margin-top: 20px;
}

.onReturn {
  border: none;
  background: none;
  margin-top: 20px;
}
.el-color-picker {
  padding: 1vw;
}
</style>
