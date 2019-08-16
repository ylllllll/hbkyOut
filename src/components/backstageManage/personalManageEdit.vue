<template>
    <div id="personalManageEdit">
        <div class="form_title">
            修改密码
        </div>
        <el-form ref="ruleForm" :model="ruleForm" label-width="90px" :rules="rules">
            <el-form-item label="登录账号:" prop="username">
                <el-input placeholder="请输入登录账号" v-model="ruleForm.username" disabled></el-input>
            </el-form-item>
            <el-form-item label="原密码:" prop="oldPwd">
                <el-input placeholder="请输入原密码" v-model="ruleForm.oldPwd" type="password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <el-form-item label="新密码:" prop="newPwd">
                <el-input placeholder="请输入新密码" v-model="ruleForm.newPwd" type="password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" prop="rePwd">
                <el-input placeholder="请再次输入新密码" v-model="ruleForm.rePwd" type="password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <div class="btn_group">
                <el-button @click="submitForm('ruleForm')">提交</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'personalManageEdit',
        data() {
            let validateNewPwd = (rule,value,callback) => {
                //密码强度验证
                let pattern1 = /(.*?)\d+(.*?)/,pattFlag1 = 0;         //至少一个数字
                if(pattern1.test(value) == true) { pattFlag1 = 1; }else{ pattFlag1 = 0; }
                let pattern2 = /(.*?)[a-z]+(.*?)/,pattFlag2 = 0;      //至少一个小写字母
                if(pattern2.test(value) == true) { pattFlag2 = 1; }else{ pattFlag2 = 0; }
                let pattern3 = /(.*?)[A-Z]+(.*?)/,pattFlag3 = 0;      //至少一个大写字母
                if(pattern3.test(value) == true) { pattFlag3 = 1; }else{ pattFlag3 = 0; }
                let pwdFlag = pattFlag1 + pattFlag2 + pattFlag3,
                    pattFlag4 = 0;
                
                for(let i = 0;i < value.length;i++) {//至少一个特殊符号
                    let charCode = value[i].charCodeAt();
                    if(( charCode >= 33 && charCode <= 47 ) || ( charCode >= 58 && charCode <= 64 ) || ( charCode >= 91 && charCode <= 96 ) || ( charCode >= 123 && charCode <= 126 ))
                    { pattFlag4 = 1; break; }else { pattFlag4 = 0; }
                }

                if (value == '') {
                    callback(new Error('新密码不能为空'));
                }else if(value.length < 6 || value.length > 18 || pwdFlag < 3) {           
                    callback(new Error('新密码为6-18位的大、小写字母和数字组合'));
                }else if(pattFlag4 == 1) {
                    callback(new Error('新密码只能包含大、小写字母和数字'));
                }else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            let validateRePwd = (rule,value,callback) => {
                if (value == '') {
                    callback(new Error('确认密码不能为空'));
                }else if(this.ruleForm.newPwd != value) {
                    callback(new Error('确认密码必须与新密码相同'));
                }
                else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            return {
                ruleForm: {
	                username: 'admin',
	                oldPwd: '',
	                newPwd: '',
	                rePwd: ''
	            },
	            rules: {
	                oldPwd: [{
                        required: true,
						message: '原密码不能为空',
						trigger: 'blur'
					}],
	                newPwd: [{
						required: true,
                        validator: validateNewPwd,
						trigger: 'blur'
                    }],
                    rePwd: [{
						required: true,
                        validator: validateRePwd,
						trigger: 'blur'
					}]
	            }
            }
        },
        methods: {
            submitForm(formName) {
				// Axios.post('/api/order/create?token=' + token + '&goodsJsonStr=' + shopping
				// ).then(res => {
				// 	console.log(res);
				// })
				// axios.post('http://192.168.0.37:8087/user/login', {
				// 	firstName: 'Fred',        // 参数 firstName
				// 	lastName: 'Flintstone'    // 参数 lastName
				// })
				// .then(function (response) {
				// 	console.log(response);
				// })
				// .catch(function (error) {
				// 	console.log(error);
				// });
	            this.$refs[formName].validate((valid) => {
	                if(valid) {
                        // this.$router.push("/index");
                        const loading = this.$loading({
                            lock: true,
                            text: '请稍后...',
                            spinner: 'el-icon-loading',
                            background: 'rgba(255,255,255,0.7)'
                        });
                        setTimeout(() => {
                            loading.close();
                            this.$alert('密码修改成功', '提示', {
                                confirmButtonText: '确定',
                                type: 'success',
                                callback: action => {
                                    this.ruleForm.oldPwd = "";
                                    this.ruleForm.newPwd = "";
                                    this.ruleForm.rePwd = "";
                                }
                            });
                        },2000);
	                }else {
	                    return false;
	                }
				});
	        }
        }
    }
</script>

<style lang="less">
    #personalManageEdit {
        .form_title {
            padding: 20px;
        }
        .el-form {
            width: 400px;
            margin: auto;
                .el-form-item {
                margin-bottom: 20px;
                label {
                    padding-right: 10px;
                }
                .el-input {
                    
                    height: 32px;
                    .el-input__inner {
                        height: 32px;
                    }
                }
                .el-input.is-disabled {
                    .el-input__inner {
                        height: 32px;
                        background-color: #fff;
                    }
                }
                .el-form-item__error {
                    white-space: nowrap;
                }
            }    
        }
    }
</style>
