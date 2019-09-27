<template>
    <div id="progressReportShow">
        <div class="showForm">
            <el-form ref="showForm" >
                <table class="form_table" :model="showForm">
                    <thead>
                        <tr><th colspan="4">江苏省环保科研课题进展情况表</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题名称：</td>
                            <td>
                                <el-input
                                    v-model="showForm.subjectName"
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>课题编号：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.projectNo"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.bearerUnit" 
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>填报日期：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.fillTime" 
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>项目负责人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.projectLeader" 
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>项目负责人联系手机：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.projectLeaderPhone"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>主要联系人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.primaryContacts"
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>主要联系人联系电话：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.primaryContactsPhone" 
                                    :disabled="true">
                            </el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>进展情况：</td>
                            <td colspan="3">
                                <el-radio v-model="showForm.progress" label="45" disabled>超前</el-radio>
                                <el-radio v-model="showForm.progress" label="46" disabled>正常</el-radio>
                                <el-radio v-model="showForm.progress" label="47" disabled>滞后</el-radio>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>课题进展附件：</td>
                            <td class="file_td" colspan="3">
                                <a @click="handleDownload(3)">{{ fileData.subjectProgressAnnexFileName }}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- 一、合同要求研发任务 -->
                <table class="form_table1" :model="taskForm">
                    <thead>
                        <tr>
                            <th colspan="2">一、合同要求研发任务</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="2">
                                合同要求研发任务共{{ taskForm.length }}项，具体如下：
                            </td>
                        </tr>
                        <tr v-for="(item,index) in taskForm" :key="'a' + index">
                            <td style="width:5%">{{ index + 1 }}</td>
                            <td class="align_left">
                                <el-input 
                                    v-model="taskForm[index].requireStoddTaskContent"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- 二、目前进展情况 -->
                <table class="form_table1" :model="progressForm">
                    <thead>
                        <tr>
                            <th colspan="2">二、目前进展情况</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="2">
                                已完成研发任务{{ progressForm.length }}项，完成工作进度{{ showForm.progressCompletedPercentage }}%。
                            </td>
                        </tr>
                        <tr v-for="(item,index) in progressForm" :key="'b' + index">
                            <td style="width:5%">{{ index + 1 }}</td>
                            <td class="align_left">
                                <el-input 
                                    v-model="progressForm[index].currentProgressContent"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- 三、使用经费情况 -->
                <table class="form_table1" :model="progressForm">
                    <thead>
                        <tr>
                            <th colspan="4">三、使用经费情况</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="4" style="background-color:#fff;">
                                已到位课题总经费{{ showForm.totalFundsInplace }}万元；已使用课题经费{{ showForm.projectFundsUsed }}万元，占总经费{{ showForm.totalFunding }}%。
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                其中：已使用省环保课题经费{{ showForm.provincialEnvironmentalFundsUsed }}万元，占省环保课题经费{{ showForm.provincialEnvironmentalFundsPercent }}%。
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td style="width:25%;background-color:#e5f3ff;">进度经费使用情况附件：</td>
                            <td colspan="3" class="file_td">
                                <a @click="handleDownload(1)">{{ fileData.fundProgressAnnexFileName }}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- 四、课题实施中存在的主要问题 -->
                <table class="form_table1" :model="problemForm" style="margin-top:10px;">
                    <tbody>
                        <tr>
                            <td colspan="4" class="td_head">
                                四、课题实施中存在的主要问题（研究遇到的困难及技术、方案、人员等变动情况）
                            </td>
                        </tr>
                        <tr v-for="(item,index) in problemForm" :key="'c' + index">
                            <td style="width:5%">{{ index + 1 }}</td>
                            <td colspan="3" class="align_left">
                                <el-input 
                                    v-model="problemForm[index].mainProblems"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <!-- 五、下一步研发工作安排 -->
                        <tr>
                            <td colspan="4" class="td_head">
                                五、下一步研发工作安排
                            </td>
                        </tr>
                        <tr v-for="(item,index) in planForm" :key="'d' + index">
                            <td style="width:5%">{{ index + 1 }}</td>
                            <td colspan="3" class="align_left">
                                <el-input 
                                    v-model="planForm[index].nextWorkPlan"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- 六、课题预计完成时间 -->
                <table class="form_table" :model="showForm">
                    <thead>
                        <tr><th colspan="4">六、课题预计完成时间</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>合同约定结题时间：</td>
                            <td>
                                <el-input v-model="showForm.contractAgreedClosingTime"></el-input>
                            </td>
                            <td>预计申请课题验收时间：</td>
                            <td>
                                <el-input v-model="showForm.estimatedAcceptanceTime"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>能否按合同约定时间完成课题：</td>
                            <td colspan="3" style="height:50px;">
                                <el-radio 
                                    v-model="showForm.isComplateContract" 
                                    label="0" 
                                    style="line-height:28px;" 
                                    disabled>
                                    能
                                </el-radio>
                                <el-radio 
                                    v-model="showForm.isComplateContract" 
                                    label="1" 
                                    style="line-height:28px;" 
                                    disabled>
                                    不能
                                </el-radio>
                            </td>
                        </tr>
                        <!-- 七、单位审核意见 -->
                        <tr>
                            <td colspan="4" class="td_head"> 七、单位审核意见</td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <el-input 
                                    v-model="showForm.unitAuditComments"
                                    :autosize="{ minRows:8 }"
                                    type="textarea"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <!-- 附件 -->
                        <tr class="file_tr">
                            <td>专家意见附件：</td>
                            <td colspan="3" class="file_td">
                                <a @click="handleDownload(0)">{{ fileData.expertSuggestAnnexFileName }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>开题报告附件：</td>
                            <td class="file_td" colspan="3">
                                <a @click="handleDownload(2)">{{ fileData.openReportAnnexFileName }}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <div class="btn_group">
                <el-button @click="handleBack">返回</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { service } from '@/js/api'
    export default {
        name: 'progressReportShow',
        data() {
            return{
                showForm: {},
                taskForm: [],
                progressForm: [],
                problemForm: [],
                planForm: [],
                paramsData: {
                    id: this.$route.params.id
                },
                fileData: {}
            }
        },
        methods:{
            handleDownload(val) {
                if(val == 0) {
                    window.location.href = `${ service.downloadFile }?fileUrl=${ this.fileData.expertSuggestAnnexFileUrl }&fileName=${ this.fileData.expertSuggestAnnexFileName }`;
                }else if(val == 1) {
                    window.location.href = `${ service.downloadFile }?fileUrl=${ this.fileData.fundProgressAnnexFileUrl }&fileName=${ this.fileData.fundProgressAnnexFileName }`;
                }else if(val == 2) {
                    window.location.href = `${ service.downloadFile }?fileUrl=${ this.fileData.openReportAnnexFileUrl }&fileName=${ this.fileData.openReportAnnexFileName }`;
                }else if(val == 3) {
                    window.location.href = `${ service.downloadFile }?fileUrl=${ this.fileData.subjectProgressAnnexFileUrl }&fileName=${ this.fileData.subjectProgressAnnexFileName }`;
                }
            },
            handleBack() {
                this.$router.go(-1);    //返回上一页
            }
        },
        beforeMount() {
            this.axios({
                url: service.getProgressForm,
                method: 'get',
                params: {
                    id: this.paramsData.id
                }
            }).then((res) => {
                console.log(0)
                console.log(res);
                this.showForm = res.data.data;
                this.showForm.isComplateContract = this.showForm.isComplateContract + "";
                this.showForm.progress = this.showForm.progress + "";
                // 二、目前进展情况
                this.axios({
                    url: service.getProgressForm1,
                    method: 'get',
                    params: {
                        Pid: this.paramsData.id
                    }
                }).then((res) => {
                    console.log(1)
                    console.log(res);
                    this.taskForm = res.data.data;
                    // 三、使用经费情况
                    this.axios({
                        url: service.getProgressForm2,
                        method: 'get',
                        params: {
                            Pid: this.paramsData.id
                        }
                    }).then((res) => {
                        console.log(2)
                        console.log(res);
                        this.progressForm = res.data.data;
                        // 四、课题实施中存在的主要问题
                        this.axios({
                            url: service.getProgressForm3,
                            method: 'get',
                            params: {
                                Pid: this.paramsData.id
                            }
                        }).then((res) => {
                            console.log(3)
                            console.log(res);
                            this.problemForm = res.data.data;
                            // 五、下一步研发工作安排
                            this.axios({
                                url: service.getProgressForm4,
                                method: 'get',
                                params: {
                                    Pid: this.paramsData.id
                                }
                            }).then((res) => {
                                console.log(4)
                                console.log(res);
                                this.planForm = res.data.data;
                                // 附件信息
                                this.axios({
                                    url: service.getProgressFormFile,
                                    method: 'get',
                                    params: {
                                        pid :this.paramsData.id
                                    }
                                }).then((res) => {
                                    console.log(5)
                                    console.log(res.data.data);
                                    this.fileData = res.data.data;
                                })
                            })
                        })
                    })
                })
            })
        }
    }
</script>

<style lang="less">
    #progressReportShow{
        .showForm {
            margin-bottom: 30px;
            table.form_table,
            table.form_table1 {
                min-width: 1000px;
                width: 65.4%;
                .td_head {
                    font-weight: bold;
                    font-size: 18px;
                    background-color:#e5f3ff;
                    height: 50px;
                    text-align: center !important;
                }
                .el-textarea {
                    .el-textarea__inner {
                        padding: 10px;
                    }
                }
                thead {
                    th {
                        font-weight: bold;
                    }
                }
                @media screen and ( max-width: 1600px ) {
                    width: 87.4%;
                }
                .el-radio {
                    margin: 0 50px;
                }
                .el-date-editor {
                    width: 100%;
                    .el-input__inner {
                        width: 100%;
                    }
                }
                ._inline,._inline2 {
                    display: inline-block;
                    width: 40px;
                    height: 18px;
                    .el-input__inner {
                        height: 100%;
                        padding: 0 3px;
                        border-bottom: 1px solid #000;
                        border-radius: 0;
                    }
                }
                ._inline2 {
                    .el-input__inner {
                        background-color: #e5f3ff;
                    }
                }
                .el-textarea {
                    .el-textarea__inner {
                        resize: none;
                    }
                }
            }
            .form_table1 {
                tr {
                    position: relative;
                    i {
                        position: absolute;
                        font-size: 30px;
                        top: 10px;
                        right: -40px;
                        cursor: pointer;
                    }
                    .align_left {
                        .el-input {
                            .el-input__inner {
                                text-align: left;
                            }
                        }
                    }
                    
                }
            }
            .qianding{
                padding: 10px 0;
                span{
                    line-height: 30px;
                }
                .el-input{
                    width: auto;
                    .el-input__inner{
                        line-height: 30px;
                        height: 30px;
                    }
                }
            }
        }
    }
</style>
