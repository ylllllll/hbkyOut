<template>
    <div id="login">
        <el-form ref="ruleForm" :model="ruleForm" label-width="80px" :rules="rules">
			<div class="header">
				<img src="../assets/images/login_title.png" alt="" class="tlt01">
				<img src="../assets/images/login_tlt02.png" alt="" class="tlt02">	
			</div> 
            <el-form-item label="用户名:" prop="name">
                <el-input placeholder="请输入用户名" v-model="ruleForm.name" clearable @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="pwd">
                <el-input placeholder="请输入密码" v-model="ruleForm.pwd" show-password @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <el-form-item label="验证码:" prop="code" class="code">
                <el-input placeholder="请输入验证码" v-model="ruleForm.code" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                <img :src="codeUrl" alt="" @click="handleChangeCode" />
            </el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form>
    </div>
</template>

<script>
	export default {
	    name: 'Login',
	    data() {
	        return {
	        	codeUrl: 'http://192.168.0.37:8087/code/checkCode',
	            ruleForm: {
	                name: '',
	                pwd: '',
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
	            _this.$refs[formName].validate((valid) => {
	                if(valid) {
						// _this.$router.push("/index");
						this.axios({
							method:"POST",
							url:'http://192.168.0.37:8087/user/login',
							data: _this.qs.stringify({
									name:_this.ruleForm.name,
									password:_this.ruleForm.pwd,
									code:_this.ruleForm.code
								}),
							credentials: true
						})
						.then(function(res){
							if(res.data.resultFlag === "1"){
								_this.$alert(res.data.data, '提示', {
									confirmButtonText: '确定',
									type:'info',
								}).then(() => {
								}).catch(() => {
								})
							}else{
								_this.$router.push("/index");
							}
						})
						.catch(function(err){
						  console.log(err);
						});
	                }else {
	                    return false;
	                }
				});
				
	        },
	        handleChangeCode() {
	        	let num = Math.random();
	        	this.codeUrl = "http://192.168.0.37:8087/code/checkCode?"+num;
	        }
	    }
	}
</script>

<style lang="less">
#login {
		width: 100%;
		height: 100%;
		background: url(../assets/images/login_bg.jpg) no-repeat center;
		background-size: 100% 100%;
		position: relative;
        .el-form {
			background-color: rgba(255,255,255,0.7);
			border-radius: 10px;
			position: absolute;
			top: 50%;
			left: 50%;
			width: 46%;
			transform: translate(-50%,-50%);
			-moz-transform:  translate(-50%,-50%);
			-webkit-transform: translate(-50%,-50%);
			-o-transform: translate(-50%,-50%);
			-ms-transform: translate(-50%,-50%);
			.header{
				img{
					display: block;
					margin: auto;
					&.tlt01{
						width: 48.2%;
						padding: 30px 0 70px;
					}
					&.tlt02{
						width: 39%;
						padding-bottom: 10px;
					}
				}
			}
            .el-form-item {
					width: 39.7%;
					margin: auto;
	        		padding: 10px 0;
					label{
					   width: 64px !important;
					   text-align-last: justify;
					}
            }
            //.code {
            	// .el-form-item__content {
            	// 	display: flex;
            	// 	input {
	            // 		width: 320px;
	            // 	}
	            // 	img {
	            // 		margin-right: 5px;
	            // 	}
            	// }
            //}
            .el-button {
				display: block;
				margin: 20px auto 113px;
				padding: 10px 0;
				width: 37%;
				background-color: #23b38f;
            }
        }
    }
</style>
