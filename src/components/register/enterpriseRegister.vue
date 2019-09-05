<template>
    <div id="enterpriseRegister">
        <div class="register_box">
            <h1 class="box_title">企业注册</h1>
            <section class="box_content">
                <el-form ref="showForm" :model="showForm">
                    <table class="form_table">
                        <tbody>
                            <tr>
                                <td>真实姓名：</td>
                                <td style="width:70%;">
                                    <el-input v-model="showForm.realName"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>登录名：</td>
                                <td>
                                    <el-input v-model="showForm.loginName"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>密码：</td>
                                <td>
                                    <el-input type="password" v-model="showForm.password"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>公司名称：</td>
                                <td>
                                    <el-input v-model="showForm.administratorInformation.companyName"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>公司地址：</td>
                                <td>
                                    <el-input v-model="showForm.administratorInformation.companyAddress"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>单位性质：</td>
                                <td>
                                    <el-select v-model="showForm.administratorInformation.unitNature">
                                        <el-option v-for="(item,index) in optGroup" :key="index" :label="item.content" :value="item.id"></el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td>社会信用号：</td>
                                <td>
                                    <el-input v-model="showForm.administratorInformation.socialCreditCode"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>法人姓名：</td>
                                <td>
                                    <el-input v-model="showForm.administratorInformation.legalPerson"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>联系人身份证号：</td>
                                <td>
                                    <el-input v-model="showForm.administratorInformation.contactIdCard"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>联系人手机号：</td>
                                <td>
                                    <el-input v-model="showForm.administratorInformation.contactPhone"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>电子邮件：</td>
                                <td>
                                    <el-input v-model="showForm.administratorInformation.email"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>营业执照扫描件：</td>
                                <td class="file">
                                    <input type="file" @change="getFile($event,1)">
                                </td>
                            </tr>
                            <tr>
                                <td>法人身份证文件：</td>
                                <td class="file">
                                    <input type="file" @change="getFile($event,2)">
                                </td>
                            </tr>
                            <tr>
                                <td>联系人身份证文件：</td>
                                <td class="file">
                                    <input type="file" @change="getFile($event,3)">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </el-form>
                <div class="btn_group">
                    <el-button @click="handleSubmit">注册</el-button>
                    <el-button @click="handleBack">返回</el-button>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'enterpriseRegister',
        data() {
            return {
                showForm: {
                    realName: '',
                    loginName: '',
                    password: '',
                    administratorInformation: {
                        companyName: '',
                        companyAddress: '',
                        unitNature: '',
                        socialCreditCode: '91210200317986672Y',
                        legalPerson: '',
                        contactIdCard: '',
                        contactPhone: '',
                        email: '',
                    },
                },
                businessFile: '',
                legalCardIdFile: '',
                contactCardFile : '',
                optGroup: []
            }
        },
        methods: {
            handleSubmit() {
                // 非空验证
                // for(let i in this.showForm) {
                //     if(typeof(this.showForm[i]) == "string") {
                //         if(this.showForm[i].match(/^[ ]*$/)){
                //             this.$alert('请将表格填写完整','提示', {
                //                 confirmButtonText: '确定',
                //                 type: 'warning',
                //                 callback: action => {}
                //             });
                //             return false;
                //         }
                //     }
                // }
                // for(let i in this.showForm.administratorInformation) {
                //     if((this.showForm.administratorInformation[i] + "").match(/^[ ]*$/)){
                //         this.$alert('请将表格填写完整','提示', {
                //             confirmButtonText: '确定',
                //             type: 'warning',
                //             callback: action => {}
                //         });
                //         return false;
                //     }
                // }
                // if(this.businessFile == "" || this.legalCardIdFile == "" || this.contactCardFile == "") {
                //     this.$alert('请上传全部附件','提示', {
                //         confirmButtonText: '确定',
                //         type: 'warning',
                //         callback: action => {}
                //     });
                //     return false;
                // }
                // 密码验证
                let validatePwd = this.validate.validatePwd(this.showForm.password,this.showForm.loginName);
                if(validatePwd) {
                    this.$alert(validatePwd,'提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        callback: action => {}
                    });
                    return false;
                }
                // 身份证验证
                let validateCard = this.validate.validateCard(this.showForm.administratorInformation.contactIdCard);
                if(validateCard) {
                    this.$alert(validateCard,'提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        callback: action => {}
                    });
                    return false;
                }
                // 手机号验证
                let validatePhone = this.validate.validatePhone(this.showForm.administratorInformation.contactPhone);
                if(validatePhone) {
                    this.$alert(validatePhone,'提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        callback: action => {}
                    });
                    return false;
                }
                // 邮箱验证
                let validateEmail = this.validate.validateEmail(this.showForm.administratorInformation.email);
                if(validateEmail) {
                    this.$alert(validateEmail,'提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        callback: action => {}
                    });
                    return false;
                }
                // 文件格式验证和社会信用号验证是后端做的
                let formData = new FormData(),
                    userInformation = JSON.stringify(this.showForm);
                formData.append('userInformation',new Blob([userInformation],{type: "application/json"}));
                formData.append('businessFile',this.businessFile);
                formData.append('legalCardIdFile',this.legalCardIdFile);
                formData.append('contactCardFile',this.contactCardFile);
                this.axios({
                    url: 'http://192.168.0.80:8087/company/register',
                    method: 'post',
                    data: formData,
                    contentType: false,
                    processData: false,
                    usecredensives: true
                }).then((res) => {
                    if(res.data.resultFlag == 0) {
                        this.$alert('注册成功','提示', {
                            confirmButtonText: '确定',
                            type: 'success',
                            callback: action => {
                                this.$router.push("/");
                            }
                        });
                    }else {
                        this.$alert(res.data.data,'提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
                    }
                }).catch(() => {
                    this.$alert('注册失败','提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        callback: action => {}
                    });
                })
            },
            handleBack() {
                this.$router.go(-1);
            },
            getFile(event,index) {
                if(index == 1) {
                    this.businessFile = event.target.files[0];
                }else if(index == 2) {
                    this.legalCardIdFile = event.target.files[0];
                }else if(index == 3) {
                    this.contactCardFile = event.target.files[0];
                }
            }
        },
        beforeMount() {
            // 请求单位性质
            this.axios({
                url: 'http://192.168.0.80:8087/checkApplyStyle/unitNature',
                method: 'post',
            }).then((res) => {
                let data = res.data.data;
                for(let i in data) {
                    let obj = {
                        id: data[i].id,
                        content: data[i].content
                    }
                    this.optGroup.push(obj);
                }
            })
        }
    }
</script>

<style lang="less">
    #enterpriseRegister {
        width: 100vw;
        height: 100vh;
        background-image: url(../../assets/images/login_bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        .register_box {
            width: 850px;
            height: 80%;
            margin: auto;
            background-color: #fff;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow-y: auto;
            .box_title {
                margin: 20px;
                font-size: 36px;
                font-weight: normal;
                text-align: center;
            }
            .box_content {
                .el-form {
                    width: 650px;
                    margin: auto;
                    .form_table {
                        width: 100%;
                        border-collapse: collapse;
                        td {
                            border: 1px solid #dcdfe6;
                            background-color: #e5f3fe;
                            text-align: right;
                            .el-input {
                                .el-input__inner {
                                   border: none; 
                                }
                            }
                            .el-select {
                                width: 100%;
                            }
                        }
                        .file {
                            background-color: #fff;
                        }
                        [type=file] {
                            width: 100%;
                            margin: 6.5px;
                        }
                    }
                }
                .btn_group{
                    margin: 20px;
                }
            }
        }
    }
</style>
