<template>
    <div id="login">
		<header>
			<img src="../assets/images/login_title.png" alt="">
		</header>
		<section>
			<div class="box">
				<div class="box_left"></div>
				<div class="box_right">
					<el-form ref="ruleForm" :model="ruleForm" label-width="90px" :rules="rules">
						<div class="header">
							<img src="../assets/images/login_tlt02.png" alt="" class="tlt02">	
						</div> 
						<el-form-item label="用户名:" prop="name">
							<el-input placeholder="请输入用户名" v-model="ruleForm.name" clearable @keyup.enter.native="submitForm('ruleForm')"></el-input>
						</el-form-item>
						<el-form-item label="密码:" prop="pwd">
							<el-input placeholder="请输入密码" v-model="ruleForm.pwd" show-password @keyup.enter.native="submitForm('ruleForm')"></el-input>
						</el-form-item>
						<el-form-item label="用户类型:" prop="type">
							<el-select placeholder="请选择用户类型" v-model="ruleForm.type">
								<el-option label="企业" value="0"></el-option>
								<el-option label="专家" value="1"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="验证码:" prop="code" class="code">
							<el-input placeholder="请输入验证码" v-model="ruleForm.code" @keyup.enter.native="submitForm('ruleForm')"></el-input>
							<img :src="codeUrl" alt="" @click="handleChangeCode" />
						</el-form-item>
						<div class="handle_group">
							<div class="checkbox">
								<el-checkbox></el-checkbox>记住密码
							</div>
							<router-link to="/register">注册</router-link>
						</div>
						<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
					</el-form>
				</div>
			</div>
		
			
		</section>
    </div>
</template>

<script>
	export default {
	    name: 'login',
	    data() {
	        return {
	        	codeUrl: 'http://192.168.0.37:8087/code/checkCode',
	            ruleForm: {
	                name: '',
					pwd: '',
					type: '',
	                code: ''
	            },
	            rules: {
	                name: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}],
	                pwd: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}],
					type: [{
						required: true,
						message: '请选择用户类型',
						trigger: 'blur'
					}],
	                code: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					}]
	            }
	        }
	    },
	    methods: {
	        submitForm(formName) {
				let _this = this;
				let type = this.ruleForm.type;
	            _this.$refs[formName].validate((valid) => {
	                if(valid) {
						if(type == 0) {		// 企业
							_this.axios({
								url: 'http://192.168.0.37:8087/company/login',
								method: "post",
								params: {
									loginName: _this.ruleForm.name,
									password: _this.ruleForm.pwd,
									code: _this.ruleForm.code
								},
								credentials: true
							}).then((res) => {
								if(res.data.resultFlag === "1") {
									_this.$alert(res.data.data,'提示', {
										confirmButtonText: '确定',
										type:'warning',
									}).then(() => {
										_this.handleChangeCode();
									})
								}else{
									_this.$router.push("/index");
								}
							}).catch(() => {
							  	_this.$alert('登录失败','提示', {
									confirmButtonText: '确定',
									type:'warning',
								}).then(() => {
									_this.handleChangeCode();
								})
							});
						}else if(type == 1) {		// 专家
							_this.axios({
								url: 'http://192.168.0.37:8087/extranetExpert/login',
								method: "post",
								params: {
									loginName: _this.ruleForm.name,
									password: _this.ruleForm.pwd,
									code: _this.ruleForm.code
								},
								credentials: true
							}).then((res) => {
								if(res.data.resultFlag === "1") {
									_this.$alert(res.data.data,'提示', {
										confirmButtonText: '确定',
										type:'warning',
									}).then(() => {
										_this.handleChangeCode();
									})
								}else{
									_this.$router.push("/index");
								}
							}).catch(() => {
							  	_this.$alert('登录失败','提示', {
									confirmButtonText: '确定',
									type:'warning',
								}).then(() => {
									_this.handleChangeCode();
								})
							});
						}
	                }else {
	                    return false;
	                }
				});
	        },
	        handleChangeCode() {
	        	let num = Math.random();
	        	this.codeUrl = "http://192.168.0.37:8087/code/checkCode?"+num;
	        }
		},
		beforeMount() {
			this.handleChangeCode();
		}
	}
</script>

<style lang="less">
	#login {
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		position: relative;
		header {
			width: 100%;
			padding: 2.8% 0 2.8% 10%;
			background-color: #96def4;
			img {
				width: 50%;
			}
		}
		section {
			padding: 5% 0;
			background-color: #1cb6e8;
			.box {
				width: 75%;
				margin: auto;
				display: flex;
				background-color: #fff;
				.box_left {
					width: 61.5%;
					background-image: url(../assets/images/login_bg.png);
					background-repeat: no-repeat;
					background-size: cover;
					background-position: center;
				}
				.box_right {
					width: 38.5%;
					padding-bottom: 1%;
					.el-form {
						border-radius: 10px;
						.header{
							img{
								display: block;
								margin: auto;
								&.tlt02{
									width: 70.7%;
									padding: 8% 0 3%;
								}
							}
						}
						.el-form-item {
								width: 70.7%;
								// height: 30px;
								margin: 1.5% auto;
								padding: 10px 0;
								label {
									padding-right: 10px;
									text-align-last: justify;
								}
								.el-select {
									width: 100%;
								}
						}
						.code {
							.el-form-item__content {
								display: flex;
								input {
									width: 100%;
								}
								img {
									width: 60%;
									margin-left: 5px;
									cursor: pointer;
								}
							}
						}
						.handle_group {
							width: 70.7%;
							margin: 4% auto;
							display: flex;
							justify-content: space-between;
							.checkbox,a {
								color: #d8d8d8;
								.el-checkbox {
									padding-right: 10px;
								}
							}
						}
						.el-button {
							width: 70.7%;
							display: block;
							padding: 10px 0;
							background-color: #23b38f;
							span {
								font-size: 25px;
								letter-spacing: 20px;
							}
						}
					}
				}
			}
		}
    }
</style>
