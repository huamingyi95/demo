<template>
	<div class="login-container">
		<img src="../../assets/logo.png" class="img-login" alt="大事件" />
		<!-- 登录 -->
		<el-card class="box-card">
			<div class="img-title">
				<img src="@/assets/login_title.png" alt="" />
			</div>
			<el-form ref="form" :rules="rules" :model="form" v-if="show">
				<el-form-item prop="name">
					<el-input placeholder="请输入用户名" v-model="form.name">
						<i
							slot="prefix"
							class=" el-input__icon el-icon-user-solid"
						></i>
					</el-input>
				</el-form-item>
				<el-form-item prop="pass">
					<el-input placeholder="请输入密码" v-model="form.pass">
						<i
							slot="prefix"
							class="el-input__icon el-icon-unlock"
						></i>
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit(form)"
						>登录</el-button
					>
					<el-button type="text" @click="show = false"
						>去注册账号</el-button
					>
				</el-form-item>
			</el-form>
			<!-- 未登录 -->
			<reg v-else @isShow="change" />
		</el-card>
	</div>
</template>

<script>
import reg from '@/views/reg/index.vue'
import { login } from '@/api/user'
export default {
	name: 'LoginPage',
	components: { reg },
	props: {},
	data() {
		return {
			show: true,
			form: {
				name: '',
				pass: '',
			},
			rules: {
				name: [
					{
						required: true,
						message: '请输入用户名',
						trigger: 'blur',
					},
					{
						min: 3,
						max: 5,
						message: '长度在 3 到 5 个字符',
						trigger: 'blur',
					},
				],
				pass: [
					{
						required: true,
						message: '请输入密码',
						trigger: 'blur',
					},
				],
			},
		}
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {
		change(val) {
			this.show = val
		},
		async onSubmit() {
			try {
				const { data } = await login({
					username: this.form.name,
					password: this.form.pass,
				})
				console.log(data)
				if (data.status === 0) {
					this.$store.commit('setUser', data.token)
          this.$router.push('/')
					console.log('登录成功', data)
				} else {
					console.log(data.message)
				}
			} catch (error) {
				console.log(error)
			}
		},
	},
}
</script>

<style scoped lang="less">
.login-container {
	background: url('../../assets/login_bg.jpg');
	height: 100vh;
	background-size: cover;

	.box-card {
		width: 430px;
		margin: 100px auto;
		.img-title {
			text-align: center;
			height: 50px;
		}
	}
	.el-button--primary {
		width: 389px;
	}
	.el-button--text {
		float: right;
	}
}
</style>
