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
                                    <el-input v-model="showForm.administratorInformation.unitNature"></el-input>
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
                contactCardFile : ''
            }
        },
        methods: {
            handleSubmit() {
                let formData = new FormData(),
                    userInformation = JSON.stringify(this.showForm);
                formData.append('userInformation',new Blob([userInformation],{type: "application/json"}));
                formData.append('businessFile',this.businessFile);
                formData.append('legalCardIdFile',this.legalCardIdFile);
                formData.append('contactCardFile',this.contactCardFile);
                this.axios({
                    url: 'http://192.168.0.37:8087/company/register',
                    method: 'post',
                    data: formData,
                    contentType: false,
                    processData: false,
                    usecredensives: true
                }).then((res) => {
                    // this.$router.push("/");
                })
            },
            handleBack() {
                this.$router.go(-1);
            },
            handleExceed() {
                this.$message.warning("最多只能上传一个附件");
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
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
