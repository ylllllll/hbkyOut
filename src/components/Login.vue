<template>
    <div id="login">
		<div class="login_box">
			<div class="header">
				<img src="../assets/images/login_tlt02.png" alt="">	
			</div>
			<el-form ref="ruleForm" :model="ruleForm" :rules="rules"> 
				<el-form-item prop="name">
					<el-input placeholder="请输入用户名" v-model="ruleForm.name" clearable @keyup.enter.native="submitForm('ruleForm')"></el-input>
				</el-form-item>
				<el-form-item prop="pwd">
					<el-input placeholder="请输入密码" v-model="ruleForm.pwd" show-password @keyup.enter.native="submitForm('ruleForm')"></el-input>
				</el-form-item>
				<el-form-item prop="type">
					<el-select placeholder="请选择用户类型" v-model="ruleForm.type">
						<el-option label="企业" value="0"></el-option>
						<el-option label="专家" value="1"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item prop="code" class="code">
					<el-input placeholder="请输入验证码" v-model="ruleForm.code" @keyup.enter.native="submitForm('ruleForm')"></el-input>
					<img :src="codeUrl" alt="" @click="handleChangeCode" />
				</el-form-item>
				<div class="handle_group">
					<div class="checkbox">
						<el-checkbox v-model="rememberPwd"></el-checkbox>记住密码
					</div>
					<router-link to="/register">账号注册</router-link>
				</div>
				<el-button @click="submitForm('ruleForm')">登录</el-button>
			</el-form>
		</div>
    </div>
</template>

<script>
	export default {
	    name: 'login',
	    data() {
	        return {
				rememberPwd: false,
	        	codeUrl: 'http://192.168.0.80:8087/code/checkCode',
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
								url: 'http://192.168.0.80:8087/company/login',
								method: "post",
								params: {
									loginName: _this.ruleForm.name,
									password: _this.ruleForm.pwd,
									code: _this.ruleForm.code
								},
								credentials: true
							}).then((res) => {
								console.log(res)
								// res.data.data.identity 0 管理员 1 员工
								if(res.data.resultFlag === "1") {
									_this.$alert(res.data.data,'提示', {
										confirmButtonText: '确定',
										type:'warning',
									}).then(() => {
										_this.handleChangeCode();
									})
								}else {
									// 记住密码
									if(this.rememberPwd) {
										localStorage.setItem("username",this.ruleForm.name);
										localStorage.setItem("password",this.ruleForm.pwd);
										localStorage.setItem("usertype",this.ruleForm.type);
									}
									// 身份(保留)
									// let i = res.data.data.identity
									// document.cookie="identity="+i;
									// 身份
									let identity = res.data.data.identity;
									document.cookie="identityIn="+identity;
									// 姓名
									let realName = res.data.data.realName;
									document.cookie="realNameOut="+realName;
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
								url: 'http://192.168.0.80:8087/extranetExpert/login',
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
									// 记住密码
									if(this.rememberPwd) {
										localStorage.setItem("username",this.ruleForm.name);
										localStorage.setItem("password",this.ruleForm.pwd);
										localStorage.setItem("usertype",this.ruleForm.type);
									}
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
	        	this.codeUrl = "http://192.168.0.80:8087/extranetCode/checkCode?"+num;
	        }
		},
		beforeMount() {
			this.handleChangeCode();
			let username = localStorage.getItem("username");
			let password = localStorage.getItem("password");
			let usertype = localStorage.getItem("usertype");
			this.$nextTick(() => {
				this.ruleForm.name = username;
				this.ruleForm.pwd = password;
				this.ruleForm.type = usertype;
				if(username != "") {
					this.rememberPwd = true;
				}
			})
		}
	}
</script>

<style lang="less">
	#login {
		width: 100%;
		height: 100%;
		position: relative;
		background-image: url(../assets/images/login_bg.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		.login_box {
			@media screen and ( min-width: 1500px ) {
				width: 508px;
				height: 552px;
			}
			@media  screen and ( max-width: 1499px ) {
				width: 360px;
				height: 375px;               
			}
			border: 1px solid #ededed;
			margin: auto;
			padding: 1.6% 3.15% 0 3.15%;
			background-color: #fff;
			position: absolute;
			top: 17.6%;
			bottom: 0;
			left: 0;
			right: 0;
			.header {
				margin-bottom: 7.8%;
				img {
					width: 100%;
				}
			}
			.el-form {
				width: 95%;
				margin: auto;
			}
			
			.el-form-item {
				@media screen and ( min-width: 1500px ) {
					height: 44px;
					line-height: 44px;
				}
				@media  screen and ( max-width: 1499px ) {
                    height: 32px;
					line-height: 32px;               
                }
				
				margin-bottom: 26px;
				.el-select {
					@media screen and ( min-width: 1500px ) {
						height: 44px;
					}
					@media  screen and ( max-width: 1499px ) {
						height: 32px;               
					}
					width: 100%;
				}
				.el-input {
					@media screen and ( min-width: 1500px ){
						height: 44px;
					}
					@media  screen and ( max-width: 1499px ) {
						height: 32px;               
					}
					.el-input__inner {
						height: 100%;
					}
				}
			}
			.code {
				.el-form-item__content {
					display: flex;
					align-items: center;
					.el-input {
						width: 65%;
						margin-right: 5px;
						.el-input__inner {
							@media  screen and ( max-width: 1499px ) {
								position: relative;
								top: -3px;
							}
						}
					}
					img {
						width: 34%;
						height: auto;
						cursor: pointer;
					}
				}	
			}
			.handle_group {
				display: flex;
				justify-content: space-between;
				margin-top: -10px;
				.checkbox {
					color: #dcdfe6;
					letter-spacing: 2px;
					.el-checkbox {
						margin-right: 10px;
					}
				}
				a {
					color: #0abd90;
					letter-spacing: 2px;
				}
			}
			.el-button {
				width: 100%;
				@media screen and ( min-width: 1500px ){
					height: 50px;
					margin-top: 60px;
				}
				@media  screen and ( max-width: 1499px ) {
					height: 38px;               
				}
				span {
					font-size: 24px;
					letter-spacing: 12px;
					padding-left: 12px;
				}
			}
			.el-input__icon {
				height: auto;
			}
		}
    }
</style>
