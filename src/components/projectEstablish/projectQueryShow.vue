<template>
    <div id="projectShow">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm" >
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">{{ paramsData.id }}课题查询详情</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>项目名称：</td>
                            <td colspan="3">
                                <el-input
                                    v-model="showForm.projectName"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>标书编号：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.tenderNo"
                                    :disabled="true">
                                </el-input></td>
                            <td>分包号：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.subcontractingNo"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题名称：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.subjectName" 
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>中标（成交）金额：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.winningAmount" 
                                    :disabled="true"
                                 ></el-input>
                            </td>
                            <td>配套经费：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.supportingFunds" 
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>投标人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.bidders"
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>课题负责人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.subjectLeader"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题负责人联系方式：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.leaderContact" 
                                    :disabled="true"
                                >
                            </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>备注：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.remarks"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>中标文件附件：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="Enclosure.fujian1"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>成交公告附件：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="Enclosure.fujian2"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>成交通知书附件：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="Enclosure.fujian3"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>响应文件附件：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="Enclosure.fujian4"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>其他附件：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="Enclosure.fujian5"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <div class="btn_group">
                <el-button type="primary" @click = "handleBack">返回</el-button>
            </div>
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark">
                <el-table-column
                    prop="data1"
                    label="交办人"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data2"
                    label="处理人"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data3"
                    label="审核步骤"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data4"
                    label="交办时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data5"
                    label="状态"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data6"
                    label="处理内容"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data7"
                    label="处理意见"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data8"
                    label="处理时间"
                    align="center">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name:'projectShow',
        data(){
            return{
                showForm:{
                    id:'',
                    entry_name:'',
                    tenderNo:'',
                    subjectName:'',
                    winningAmount:'',
                    supportingFunds:'',
                    bidders:'',
                    subjectLeader:'',
                    leaderContact:'',
                    forecast:''
                },
                Enclosure:{
                    fujian1:'',
                    fujian2:'',
                    fujian3:'',
                    fujian4:'',
                    fujian5:'',
                },
                paramsData: {
                    id: this.$route.params.id
                },
                tableData: []
            }
        },
        methods:{ 
            handleExamine(){
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                setTimeout(() => {
                    loading.close();
                    this.$alert('审批通过','提示', {
                        confirmButtonText: '确定',
                        type: 'success',
                        callback: action => {
                            this.$router.go(-1);
                        }
                    });
                },2000);
            },
            handleNotExamine() {
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                setTimeout(() => {
                    loading.close();
                    this.$alert('退回成功','提示', {
                        confirmButtonText: '确定',
                        type: 'success',
                        callback: action => {
                            this.$router.go(-1);
                        }
                    });
                },2000);
            },
            handleBack() {
                this.$router.go(-1);
            }
        },
        mounted(){
            
        }
    }
</script>

<style lang="less">
#projectShow{
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
    .el-table {
        width: 1130px;
        margin: auto;
        border-right: 1px solid #e0e0e0;
        border-collapse: collapse;
        tr {
            height: 50px;
            th,td {
                // border: 1px solid #e0e0e0;
            }
            th {
                background-color: #e5f3ff;
            }
        }
        .el-table__header-wrapper {
            table {
                border-collapse: collapse;
                th {
                    border: 1px solid #e0e0e0;
                    border-bottom: none;
                }
            }
        }
        .el-table__body-wrapper {
            table {
                border-collapse: collapse;
                td {
                    border: 1px solid #e0e0e0;
                }
            }
        }
    }
}
</style>
