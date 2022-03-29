<template>
	<div class="login-container">
		<el-card header="注册">
			<el-form v-model="model" @submit.native.prevent="register">
				<el-form-item label="用户名">
					<el-input v-model="model.phone" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="model.password" placeholder="请输入密码" show-password></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" native-type="submit">注册</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script>
import { register } from '../api/index'
	export default {
		name: 'register',
		data() {
			return {
				model: {}
			}
		},
		methods: {
			async register(){
                const res =await register(this.model)
                this.$router.push('/login')
                this.$message({
					type: 'success',
					message: '注册成功'
				})
			},
            
		}
	}
</script>

<style scoped>
	.login-container {
		width: 25rem;
		margin: 6rem auto;
	}
</style>
