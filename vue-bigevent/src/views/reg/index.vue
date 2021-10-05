<template>
	<div class="reg-container">
		<!--注册 -->
		<el-form ref="form" :rules="rules" :model="form">
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
					<i slot="prefix" class="el-input__icon el-icon-unlock"></i>
				</el-input>
			</el-form-item>
			<el-form-item prop="checkPass">
				<el-input placeholder="请再次输入密码" v-model="form.checkPass">
					<i slot="prefix" class="el-input__icon el-icon-unlock"></i>
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit(form)"
					>注册</el-button
				>
				<el-button type="text" @click="isShow()">去登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import {reg} from '@/api/user'
export default {
	name: 'regPage',
	components: {},
	props: {},
	data() {
		return {
			show: true,
 			form: {
				name: '',
				pass: '',
				checkPass: '',
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
				checkPass: [
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
    isShow(){
      this.$emit('isShow', this.show);
     },
		async onSubmit() {
      // 获取表单数据
       try {
        const {data}=await reg({
           username:this.form.name,
          password:this.form.pass
        })
        console.log(data);
         if(data.status==0){
        console.log('注册成功',data);
        this.show=true
         }else{
           console.log(data.message);
         }
      } catch (error) {
        console.log(error);
      }
		},

	},
}
</script>

<style scoped lang="less">
.el-button--primary {
	width: 389px;
}
.el-button--text {
	float: right;
}
</style>
