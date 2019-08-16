<template>
    <div id="adminManageMessageBox">
        <el-form ref="ruleForm" :model="ruleForm" label-width="90px" :rules="rules">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <el-form-item label="姓名:" prop="name">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                        </td>
                        <td>
                            <el-form-item label="登录名:" prop="username">
                                <el-input v-model="ruleForm.username"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <el-form-item label="手机号:" prop="phone">
                                <el-input v-model="ruleForm.phone"></el-input>
                            </el-form-item>
                        </td>
                        <td>
                            <el-form-item label="邮箱:" prop="email">
                                <el-input v-model="ruleForm.email"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <el-form-item label="身份证号:" prop="idCard">
                                <el-input v-model="ruleForm.idCard"></el-input>
                            </el-form-item>
                        </td>
                        <td>
                            <el-form-item label="上传附件:">
                                <el-input></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                </tbody>
            </table>
        </el-form>
        <div class="btn_group">
            <el-button v-show="btnState == 'add'" @click="submitFormAdd('ruleForm')">提交</el-button>
            <el-button v-show="btnState == 'edit'" @click="submitFormEdit('ruleForm')">提交</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'adminManageMessageBox',
        data() {
            return {
                ruleForm: {
                    name:'name',
	                username: 'admin',
                    phone: 'phone',
                    email: 'email',
                    idCard: 'idCard',
                    file: 'file'
	            },
	            rules: {
                    name: [{
                        required: true,
						message: '原密码不能为空',
						trigger: 'blur'
					}],
	                // oldPwd: [{
                    //     required: true,
					// 	message: '原密码不能为空',
					// 	trigger: 'blur'
					// }],
	                // newPwd: [{
					// 	required: true,
                    //     validator: validateNewPwd,
					// 	trigger: 'blur'
                    // }],
                    // rePwd: [{
					// 	required: true,
                    //     validator: validateRePwd,
					// 	trigger: 'blur'
					// }]
	            }
            }
        },
        props: ['btnState'],
        methods:{
            submitFormAdd(formName) {
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
                            this.$alert('添加成功', '提示', {
                                confirmButtonText: '确定',
                                type: 'success',
                                callback: action => {
                                   this.$parent.handleCloseCover();
                                   this.$parent.refreshPage();
                                }
                            });
                        },2000);
	                }else {
	                    return false;
	                }
                });
            },
            submitFormEdit(formName) {
                alert("submitEdit");
	        }
        }
    }
</script>

<style lang="less">
    #adminManageMessageBox{
        background-color: #fff;
        * {
            font-size: 16px !important;
        }
        .el-form {
            background-color: #fff;
            label {
                padding-right: 10px;
            }
            .el-input {
                height: 32px;
                
                .el-input__inner {
                    height: 32px;
                }
            }
            table {
                margin: 50px auto 20px;
                tr {
                    td {
                        padding: 0 30px;
                    }
                }
            }
        }
    }
</style>