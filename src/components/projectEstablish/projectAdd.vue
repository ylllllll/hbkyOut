<template>
    <div id="projectAdd">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm" >
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">课题申报</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>项目名称：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>标书编号：</td>
                            <td>
                                <el-input v-model="showForm.tenderNo"></el-input>
                            </td>
                            <td>分包号：</td>
                            <td>
                                <el-input v-model="showForm.subcontractingNo"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题名称：</td>
                            <td>
                                <el-input v-model="showForm.subjectName"></el-input>
                            </td>
                            <td>投标人：</td>
                            <td>
                                <el-input v-model="showForm.bidders">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>中标（成交）金额：</td>
                            <td>
                                <el-input v-model="showForm.winningAmount"></el-input>
                            </td>
                            <td>配套经费：</td>
                            <td>
                                <el-input v-model="showForm.supportingFunds"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题负责人：</td>
                            <td>
                                <el-input v-model="showForm.subjectLeader">
                                </el-input>
                            </td>
                            <td>课题负责人联系方式：</td>
                            <td>
                                <el-input v-model="showForm.leaderContact"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                课题联合投标单位：
                                <br>
                                （如有请填写）&nbsp;&nbsp;&nbsp;
                            </td>
                            <td>
                                <el-input v-model="showForm.joinTenderUnits"></el-input>
                            </td>
                            <td>责任单位：</td>
                            <td>
                                <el-input v-model="showForm.responsibleUnit"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>经办人：</td>
                            <td>
                                <el-input v-model="showForm.operator"></el-input>
                            </td>
                            <td>经办人联系方式：</td>
                            <td>
                                <el-input v-model="showForm.operatorContact">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>备注：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.remark"
                                    :autosize="{ minRows: 3}"
                                    type="textarea"
                                    maxlength="200">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>中标文件附件：</td>
                            <td colspan="3">
                                <el-input v-model="Enclosure.fujian1"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>成交公告附件：</td>
                            <td colspan="3">
                                <el-input v-model="Enclosure.fujian2"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>成交通知书附件：</td>
                            <td colspan="3">
                                <el-input v-model="Enclosure.fujian3"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>响应文件附件：</td>
                            <td colspan="3">
                                <el-input v-model="Enclosure.fujian4"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>其他附件：</td>
                            <td colspan="3">
                                <el-input v-model="Enclosure.fujian5"></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <div class="btn_group">
                <el-button @click = "handleSubmit">提交</el-button>
                <el-button @click = "handleBack">返回</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'projectAdd',
        data(){
            return{
                showForm: {
                    projectName: '',
                    tenderNo: '',
                    subcontractingNo: '',
                    subjectName: '',
                    bidders: '',
                    winningAmount: '',
                    supportingFunds: '',
                    subjectLeader: '',
                    leaderContact: '',
                    joinTenderUnits: '',
                    operator: '',
                    operatorContact: '',
                    remark: '',
                    responsibleUnit: '',
                    // 凑接口的字段
                    auditStatus: '1'
                },
                Enclosure:{
                    fujian1:'',
                    fujian2:'',
                    fujian3:'',
                    fujian4:'',
                    fujian5:'',
                }
            }
        },
        methods:{ 
            handleSubmit(){
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/tender/insertTender',
                    method: 'post',
                    data: this.showForm
                }).then((res) => {
                    loading.close();
                    let data = res.data;
                    if(data.resultFlag == 0) {
                        this.$alert('提交成功','提示', {
                            confirmButtonText: '确定',
                            type: 'success',
                            callback: action => {}
                        });
                    }else {
                        this.$alert('提交失败','提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
                    }
                }).catch(() => {
                    loading.close();
                    this.$alert('提交失败','提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        callback: action => {}
                    });
                })
            },
            handleBack() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less">
    #projectAdd {
        padding-bottom: 60px;
        background-color: #fff;
        margin-bottom: 20px;
        .showForm{
            table.form_table{
                @media  screen and ( max-width: 1600px ) {
                    width: 72.4%;
                }
                tbody{
                    tr{
                        td{
                            &:first-child{
                                @media screen and ( min-width: 1500px ) and ( max-width: 1850px ){
                                    width: 30.8%;
                                }
                                @media  screen and ( max-width: 1500px ) {
                                    width: 31.8%;
                                }
                            }
                        }
                    }
                }
            }
        }
        .btn_group {
            margin: 10px 0 30px 0;
        }
    }
</style>
