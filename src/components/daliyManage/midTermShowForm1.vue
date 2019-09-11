<template>
    <div id="midTermShowForm1">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm" >
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">江苏省环保科研课题中期检查专家评估表</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题编号：</td>
                            <td>
                                <el-input v-model="showForm.subjectNo" disabled></el-input>
                            </td>
                            <td>课题负责人：</td>
                            <td>
                                <el-input v-model="showForm.subjectLeader" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题名称：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.subjectName" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.commitmentUnit" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4" style="height:50px;text-align:center;background-color:#fff;">评估内容</td>
                        </tr>
                        <tr style="height:50px;">
                            <td>汇报情况：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="showForm.evaluationContent" label="53" disabled>内容清楚</el-radio>
                                <el-radio v-model="showForm.evaluationContent" label="54" disabled>内容基本清楚</el-radio>
                                <el-radio v-model="showForm.evaluationContent" label="55" disabled>内容不够清楚</el-radio>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>进度执行情况：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="showForm.progressExecution" label="56" disabled>超额完成</el-radio>
                                <el-radio v-model="showForm.progressExecution" label="57" disabled>完成</el-radio>
                                <el-radio v-model="showForm.progressExecution" label="58" disabled>基本完成</el-radio>
                                <el-radio v-model="showForm.progressExecution" label="59" disabled>未完成</el-radio>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>课题实施所需条件：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="showForm.projectImplementationConditions" label="60" disabled>落实</el-radio>
                                <el-radio v-model="showForm.projectImplementationConditions" label="61" disabled>基本落实</el-radio>
                                <el-radio v-model="showForm.projectImplementationConditions" label="62" disabled>未落实</el-radio>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>技术、经济等考核指标：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="showForm.technicalEconomicAssessment" label="63" disabled>达到合同规定</el-radio>
                                <el-radio v-model="showForm.technicalEconomicAssessment" label="64" disabled>基本达到合同规定</el-radio>
                                <el-radio v-model="showForm.technicalEconomicAssessment" label="65" disabled>未达合同规定</el-radio>
                            </td>
                        </tr>
                        <tr>
                            <td>取得重大技术突破以及成效等情况：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.majorTechnologicalBreakthroughs" disabled></el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>经费执行情况：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="showForm.fundingPerformance" label="66" disabled>合同</el-radio>
                                <el-radio v-model="showForm.fundingPerformance" label="67" disabled>基本合理</el-radio>
                                <el-radio v-model="showForm.fundingPerformance" label="68" disabled>不合理</el-radio>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>下一步工作机会：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="showForm.nextWorkPlan" label="69" disabled>可行</el-radio>
                                <el-radio v-model="showForm.nextWorkPlan" label="70" disabled>基本可行</el-radio>
                                <el-radio v-model="showForm.nextWorkPlan" label="71" disabled>不可行</el-radio>
                            </td>
                        </tr>
                        <tr>
                            <td>存在问题：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.problem"
                                    :autosize="{ minRows:7 }"
                                    type="textarea"
                                    disabled>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>建议：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.suggestions"
                                    :autosize="{ minRows:7 }"
                                    type="textarea"
                                    disabled>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>专家组综合意见：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.expert"
                                    :autosize="{ minRows:7 }"
                                    type="textarea"
                                    disabled>
                                </el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>评价等级：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="showForm.evaluationTime" label="72" disabled>优秀</el-radio>
                                <el-radio v-model="showForm.evaluationTime" label="73" disabled>良好</el-radio>
                                <el-radio v-model="showForm.evaluationTime" label="74" disabled>一般</el-radio>
                                <el-radio v-model="showForm.evaluationTime" label="75" disabled>较差</el-radio>
                            </td>
                        </tr>
                        <tr>
                            <td>专家（使用、隔开）：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.expertName" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>日期：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.fillDate" disabled></el-input>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>专家评估表附件：</td>
                            <td colspan="3" class="file_td">
                                a
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'midTermShowForm1',
        data() {
            return {
                showForm:{
                    subjectNo: '',
                    subjectLeader: '',
                    subjectName: '',
                    commitmentUnit: '',
                    evaluationContent: '',
                    progressExecution: '',
                    projectImplementationConditions: '',
                    technicalEconomicAssessment: '',
                    majorTechnologicalBreakthroughs: '',
                    fundingPerformance: '',
                    nextWorkPlan: '',
                    problem: '',
                    suggestions: '',
                    expert: '',
                    evaluationTime: '',
                    expertName: '',
                    fillDate: ''
                },
                expertAssessmentAnnex: ''
            }
        },
        methods: {
            getFile(event) {
                this.expertAssessmentAnnex = event.target.files[0];
            }
        }
    }
</script>

<style lang="less">
    #midTermShowForm1{
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
                            .el-textarea {
                                .el-textarea__inner {
                                    padding: 10px;
                                    resize: none;
                                }
                            }
                        }
                    }
                }
                .radio_group {
                    text-align: left;
                    padding-left: 20px;
                    .el-radio {
                        width: 165px;
                    }
                }
            }
            .el-date-editor {
                width: 100%;
            }
        }
    }
</style>
