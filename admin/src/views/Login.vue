<template>
	<div class="login-container">
		<el-card header="登录">
			<el-form v-model="model" @submit.native.prevent="mylogin">
				<el-form-item label="用户名">
					<el-input v-model="model.phone" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="model.password" placeholder="请输入密码" show-password></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" native-type="submit">登录</el-button>
					<el-button type="primary" @click="register">跳转注册注册</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script>
import { login } from '../api/index'
	export default {
		name: 'Login',
		data() {
			return {
				model: {}
			}
		},
		methods: {
			async mylogin() {
				const res = await this.$http.post('/admin/login', this.model)
				// 存储token 关闭之后还有 关闭之后没有 sessionStorage
				localStorage.token = res.data.adminToken
				localStorage.username = this.model.phone
				this.$router.push('/')
				this.$message({
					type: 'success',
					message: '登录成功'
				})
			},
			register(){
				this.$router.push('/register')
			}
		}
	}
</script>

<style scoped>
	.login-container {
		width: 25rem;
		margin: 6rem auto;
	}
</style>
