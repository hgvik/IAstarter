<template>
	<div class="home">
		<h1>{{id?'编辑':'新建'}}管理员</h1>
		<el-form :model="model" label-width="120px" @submit.native.prevent="register">
			<el-form-item label="用户名">
				<el-col :span="12">
					<el-input v-model="model.phone" placeholder="请输入用户名"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="密码">
				<el-col :span="12">
					<el-input v-model="model.password" placeholder="请输入密码" show-password></el-input>
				</el-col>
			</el-form-item>
			<el-form-item>
				<!-- native-type="submit" 采取原生提交方式 -->
				<el-button type="primary" native-type="submit">保存</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import { register } from '@/api/index'
	export default {
		name: 'SystemEdit',
		props: {
			id: {}
		},
		data() {
			return {
				model: {
					// icon:''
				}
			}
		},
		methods: {
			async register(){
                const res =await register(this.model)
                this.$message({
					type: 'success',
					message: '注册成功'
				})
			},
		},
		created() {
		}
	}
</script>

<style>

</style>
