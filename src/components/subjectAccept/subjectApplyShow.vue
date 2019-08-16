<template>
    <div id="subjectApplyShow">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm">
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">验收申请详情页</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题名称：</td>
                            <td>
                                <el-input v-model="showForm.topicName" disabled></el-input>
                            </td>
                            <td>课题编号：</td>
                            <td>
                                <el-input v-model="showForm.topicNumber" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.subjectUndertakingUnit" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>单位性质：</td>
                            <td colspan="3">
                                <el-radio v-model="showForm.unitNature" label="1" disabled>大专院校</el-radio>
                                <el-radio v-model="showForm.unitNature" label="2" disabled>科研院所</el-radio>
                                <el-radio v-model="showForm.unitNature" label="3" disabled>企业</el-radio>
                                <el-radio v-model="showForm.unitNature" label="4" disabled>其他</el-radio>
                            </td>
                        </tr>
                        <tr>
                            <td>课题责任人：</td>
                            <td>
                                <el-input v-model="showForm.projectLeader" disabled></el-input>
                            </td>
                            <td>课题责任人联系电话：</td>
                            <td>
                                <el-input v-model="showForm.projectLeaderPhone" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题责任人电子邮箱：</td>
                            <td>
                                <el-input v-model="showForm.projectLeaderMail" disabled></el-input>
                            </td>
                            <td>课题责任人通讯地址：</td>
                            <td>
                                <el-input v-model="showForm.postalAddress" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>合同开始时间：</td>
                            <td>
                                <el-input v-model="showForm.agreementStartTime" disabled></el-input>
                            </td>
                            <td>合同结束时间：</td>
                            <td>
                                <el-input v-model="showForm.agreementEndTime" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>验收申请时间：</td>
                            <td>
                                <el-input v-model="showForm.applicationAcceptanceTime" disabled></el-input>
                            </td>
                            <td>申请验收形式：</td>
                            <td>
                                <el-radio v-model="showForm.applicationAcceptanceMode" label="1" disabled>会评</el-radio>
                                <el-radio v-model="showForm.applicationAcceptanceMode" label="2" disabled>函评</el-radio>
                            </td>
                        </tr>
                        <tr>
                            <td>申请验收地点：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.applicationAcceptancePlace" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>验收联系人：</td>
                            <td>
                                <el-input v-model="showForm.acceptanceContact" disabled></el-input>
                            </td>
                            <td>验收联系人联系电话：</td>
                            <td>
                                <el-input v-model="showForm.acceptanceContactPhone" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>主要研究内容完成情况：</td>
                            <td colspan="3">
                                <el-input 
                                  type="textarea"
                                  v-model="showForm.mainContentSituation"
                                  disabled>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>提交成果情况（合同规定提交成果完成情况及其它取得成果）：</td>
                            <td colspan="3">
                                <el-input 
                                 type="textarea"
                                 v-model="showForm.submissionAchievementsSituation"
                                 disabled>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>验收提交资料清单：</td>
                            <td colspan="3"> 
                                <el-radio v-model="showForm.submitInventory" label="1" disabled>课题验收申请表</el-radio>
                                <el-radio v-model="showForm.submitInventory" label="2" disabled>课题合同书</el-radio>
                                <el-radio v-model="showForm.submitInventory" label="3" disabled>课题设计书</el-radio>
                                <el-radio v-model="showForm.submitInventory" label="4" disabled>课题工作报告</el-radio>
                                <el-radio v-model="showForm.submitInventory" label="5" disabled>课题经费决算表</el-radio>
                                <el-radio v-model="showForm.submitInventory" label="6" disabled>课题技术报告</el-radio>
                                <el-radio v-model="showForm.submitInventory" label="7" disabled>其他（发表学术论文、用户意见、监测报告等）</el-radio>
                            </td>
                        </tr>
                        <tr>
                            <td>课题承担单位意见：</td>
                            <td colspan="3">
                                <el-input 
                                 type="textarea"
                                 v-model="showForm.subjectUndertakingUnitOpinion"
                                 disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>所在地环保部门意见：</td>
                            <td colspan="3">
                                <el-input 
                                 type="textarea"
                                 v-model="showForm.environmentalDepartmentsOpinion"
                                 disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>省生态环境评估中心初审意见：</td>
                            <td colspan="3">
                                <el-input 
                                 type="textarea"
                                 v-model="showForm.provinceAssessmentCenterOpinion"
                                 disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>省环保厅主管部门意见：</td>
                            <td colspan="3">
                                <el-input 
                                 type="textarea"
                                 v-model="showForm.competentDepartmentOinion"
                                 disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>验收申请表附件：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="showForm.applicationAcceptanceUrl"
                                 disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>成果附件：</td>
                            <td colspan="3">
                                <!-- <el-input v-model="showForm.achievementsUrl" disabled></el-input> -->
                                <a class='download' :href='showForm.achievementsUrl' download=""  title="下载">下载</a>
                            </td>
                        </tr>
                    </tbody>
                 </table>
            </el-form>
            <el-button type="primary"  @click="handleBack">返回</el-button>
             <el-button type="primary" v-show="exmine" @click="handleExmine">审核</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'subjectApplyShow',
    data(){
        return{
            showForm:{
                topicName:'1',
                topicNumber:'1',
                subjectUndertakingUnit:'1',
                unitNature:'1',
                projectLeader:'1',
                projectLeaderPhone:'1',
                projectLeaderMail:'1',
                postalAddress:'1',
                agreementStartTime:'1',
                agreementEndTime:'1',
                applicationAcceptanceTime:'1',
                applicationAcceptanceMode:'1',
                applicationAcceptancePlace:'1',
                acceptanceContact:'1',
                acceptanceContactPhone:'1',
                mainContentSituation:'1',
                submissionAchievementsSituation:'1',
                submitInventory:'1',
                subjectUndertakingUnitOpinion:'1',
                environmentalDepartmentsOpinion:'1',
                provinceAssessmentCenterOpinion:'1',
                competentDepartmentOinion:'1',
                applicationAcceptanceUrl:'1',
                achievementsUrl:'1'
            },
            paramsData: {
                id: this.$route.params.id,
                arrays: this.$route.params.arrays
            },
            exmine:false,
        }
    },
    methods:{
        handleBack(){
            // this.$router.go(-1);//返回上一层
            this.$router.back(-1)
        },
        handleExmine(){
            
        },
        TicketParams(formData) { 
            let showFormID = [];//数据ID集合
            console.log(formData)
            if(formData != undefined){
                formData.map((item) => {
                    if(this.paramsData.id == item.id){
                        item.unitNature+=''
                        item.applicationAcceptanceMode+=''
                        item.achievementsUrl="1.txt"
                        this.showForm = item
                        console.log(item)
                        return;
                    }
                })
            }
        },
        
    },
    mounted(){
        this.TicketParams(this.paramsData.arrays)
        // console.log(arrayID)
    }
}
</script>
<style lang="less">
#subjectApplyShow{
    .showForm{
        .el-form{
            td{
                text-align: left;
            }
            .el-radio{
                line-height: 50px;
                margin: 0 10px;
                .el-radio__input{
                    padding-right: 5px;
                }
                .el-radio__input.is-disabled+span.el-radio__label{
                    color: #000;
                }
                .el-radio__input.is-checked .el-radio__inner{
                    background-color: #0abd90;
                    border-color: #0abd90;
                }
                .el-radio__input.is-disabled.is-checked .el-radio__inner::after{
                    background-color: #fff;
                }
            }
            textarea{
                min-height: 100px !important;
                padding: 0 10px;
            }
        }
    }
}

</style>
