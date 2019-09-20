<template>
    <div id="midTermShowForm2">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm" >
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">省环保科研课题中期检查表</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题编号：</td>
                            <td>
                                <el-input v-model="showForm.subjectNo" disabled></el-input>
                            </td>
                            <td>课题名称：</td>
                            <td>
                                <el-input v-model="showForm.subjectName" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>开始时间：</td>
                            <td>
                                <el-input v-model="showForm.subjectStartTime" disabled></el-input>
                            </td>
                            <td>结束时间：</td>
                            <td>
                                <el-input v-model="showForm.subjectEndTime" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.commitmentUnit" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>参加单位：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.participatingUnits" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题负责人：</td>
                            <td>
                                <el-input v-model="showForm.subjectLeader" disabled></el-input>
                            </td>
                            <td>课题负责人联系手机：</td>
                            <td>
                                <el-input v-model="showForm.leaderPhone" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题联系人：</td>
                            <td>
                                <el-input v-model="showForm.topicContact" disabled></el-input>
                            </td>
                            <td>课题联系人联系手机：</td>
                            <td>
                                <el-input v-model="showForm.subjectContactPhone" disabled></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table" :model="showForm">
                    <thead>
                        <tr>
                            <th colspan="7" class="small_title">一、课题按合同计划进度执行情况</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="height:50px;">
                            <td>课题按合同计划进度执行情况：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="showForm.contractPlanCrogressExecution" label="41" disabled>超额完成</el-radio>
                                <el-radio v-model="showForm.contractPlanCrogressExecution" label="42" disabled>完成</el-radio>
                                <el-radio v-model="showForm.contractPlanCrogressExecution" label="43" disabled>基本完成</el-radio>
                                <el-radio v-model="showForm.contractPlanCrogressExecution" label="44" disabled>未完成</el-radio>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>课题进度未按时完成的，请选择以下原因（多选）：</td>
                            <td colspan="3">
                                <el-checkbox-group v-model="showForm.notCompletingReason">
                                    <div class="item">
                                        <el-checkbox label="48" disabled></el-checkbox>
                                        <label>技术变化</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="49" disabled></el-checkbox>
                                        <label>经济未落实</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="50" disabled></el-checkbox>
                                        <label>协作关系影响</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="51" disabled></el-checkbox>
                                        <label>其他原因</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="52" disabled></el-checkbox>
                                        <label>项目负责人或技术骨干变动</label>
                                    </div>
                                </el-checkbox-group>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table my_table" :model="showForm">
                    <thead>
                        <tr>
                            <th colspan="7" class="small_title">二、项目资金落实与使用情况（经费单位：万元）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="height:50px;" id="my_tr">
                            <td></td>
                            <td>总经费</td>
                            <td colspan="2">省环保课题经费</td>
                            <td>单位自筹</td>
                            <td colspan="2">其他</td>
                        </tr>
                        <tr>
                            <td>课题编号：</td>
                            <td>
                                <el-input v-model="showForm.totalBudget" disabled></el-input>
                            </td>
                            <td colspan="2">
                                <el-input v-model="showForm.provincialSubjectBudget" disabled></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.unitFinancingBudget" disabled></el-input>
                            </td>
                            <td colspan="2">
                                <el-input v-model="showForm.otherBudgets" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>已到位数：</td>
                            <td>
                                <el-input v-model="showForm.totalExpenditure" disabled></el-input>
                            </td>
                            <td colspan="2">
                                <el-input v-model="showForm.provincialSubjectExpenditureBudget" disabled></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.unitInancingExpenditureBudget" disabled></el-input>
                            </td>
                            <td colspan="2">
                                <el-input v-model="showForm.otherExpenditureBudget" disabled></el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;" id="my_tr2">
                            <td colspan="7">省环保课题经费使用情况：目前已支出111万元，具体如下（对照合同支出范围填写）：</td>
                        </tr>
                        <tr style="height:50px;" id="my_tr">
                            <td>设备费</td>
                            <td>材料费</td>
                            <td>测试化验加工费</td>
                            <td>燃料动力费</td>
                            <td>差旅费</td>
                            <td>会议费</td>
                            <td>专家咨询费</td>
                        </tr>
                        <tr>
                            <td>
                                <el-input v-model="showForm.equipmentUsage" disabled></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.materialUsage" disabled></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.processingFeeUsage" disabled></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.fuelUsage" disabled></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.travelExpenses" disabled></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.meetingFeeUsage" disabled></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.expertConsultationFeesUsage" disabled></el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;" id="my_tr">
                            <td colspan="2">出版/文献/信息传播/知识产权事务费</td>
                            <td>劳务费（或管理及人员费中人员费）</td>
                            <td>其他费用</td>
                            <td colspan="2">间接费用（水、电、气消耗及管理费等）</td>
                            <td>外部合作费</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <el-input v-model="showForm.publicationDocumentationNewsIntellectualproperty" disabled></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.labourCostsUsage" disabled></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.otherExpenseUsage" disabled></el-input>
                            </td>
                            <td colspan="2">
                                <el-input v-model="showForm.indirectCostsUsage" disabled></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.externalCooperationFees" disabled></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table my_table" :model="showForm">
                    <thead>
                        <tr>
                            <th colspan="7" class="small_title">三、项目已取得的主要成果情况</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="3" style="text-align:center;">经济社会效益情况</td>
                            <td>新增销售额<br>（万元）</td>
                            <td>
                                <el-input v-model="showForm.newSales" disabled></el-input>
                            </td>
                            <td>新增利润<br>（万元）</td>
                            <td>
                                <el-input v-model="showForm.newProfit" disabled></el-input>
                            </td>
                            <td>新增税金<br>（万元）</td>
                            <td>
                                <el-input v-model="showForm.newTax" disabled></el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>创汇<br>（万美元）</td>
                            <td>
                                <el-input v-model="showForm.foreignExchange" disabled></el-input>
                            </td>
                            <td>新产品<br>（个）</td>
                            <td>
                                <el-input v-model="showForm.newProducts" disabled></el-input>
                            </td>
                            <td>新增装备（装置）（台）</td>
                            <td>
                                <el-input v-model="showForm.newEquipment" disabled></el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>新材料<br>（件）</td>
                            <td>
                                <el-input v-model="showForm.newMaterials" disabled></el-input>
                            </td>
                            <td>新工艺<br>（项）</td>
                            <td>
                                <el-input v-model="showForm.newProcess" disabled></el-input>
                            </td>
                            <td>新品种<br>（个）</td>
                            <td>
                                <el-input v-model="showForm.newVarieties" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="4" style="text-align:center;">取得成果情况</td>
                            <td>发明专利</td>
                            <td>
                                <el-input v-model="showForm.inventionPatents" disabled></el-input>
                            </td>
                            <td>实用新型</td>
                            <td>
                                <el-input v-model="showForm.utilityModel" disabled></el-input>
                            </td>
                            <td>外观设计</td>
                            <td>
                                <el-input v-model="showForm.design" disabled></el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>国外专利</td>
                            <td>
                                <el-input v-model="showForm.foreignPatents" disabled></el-input>
                            </td>
                            <td>论文总数<br>（篇）</td>
                            <td>
                                <el-input v-model="showForm.totalNumberPapers" disabled></el-input>
                            </td>
                            <td>核心期刊<br>（篇）</td>
                            <td>
                                <el-input v-model="showForm.coreJournals" disabled></el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>SCI索引<br>（篇）</td>
                            <td>
                                <el-input v-model="showForm.sciIndex" disabled></el-input>
                            </td>
                            <td>EI索引<br>（篇）</td>
                            <td>
                                <el-input v-model="showForm.eiIndex" disabled></el-input>
                            </td>
                            <td>出版专著<br>（部）</td>
                            <td>
                                <el-input v-model="showForm.publicationMonograph" disabled></el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>研究（咨询）<br>报告（份）</td>
                            <td>
                                <el-input v-model="showForm.report" disabled></el-input>
                            </td>
                            <td>制定技术标准（个）</td>
                            <td>
                                <el-input v-model="showForm.developTechnicalStandards" disabled></el-input>
                            </td>
                            <td>出台文件<br>（个）</td>
                            <td>
                                <el-input v-model="showForm.releaseDocuments" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2" style="text-align:center;">人才培养情况（人）</td>
                            <td>高级人才<br>（人）</td>
                            <td>
                                <el-input v-model="showForm.seniorTalent" disabled></el-input>
                            </td>
                            <td colspan="4"></td>
                        </tr>
                        <tr id="my_tr3">
                            <td>培养研究生人数</td>
                            <td>
                                <el-input v-model="showForm.graduateStudentsNumber" disabled></el-input>
                            </td>
                            <td colspan="4"></td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table my_table" :model="showForm">
                    <thead>
                        <tr>
                            <th colspan="7" class="small_title">四、课题实施情况说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="my_tr4">
                            <td>
                                <p>1、项目实际进度情况（包括经济、技术等指标完成情况，重点介绍课题进展、重大突破及工作成效等）（限300字以内）</p>
                                <el-input 
                                    v-model="showForm.actualProgressProject"
                                    :autosize="{ minRows:6 }"
                                    type="textarea"
                                    maxlength="300"
                                    disabled>
                                </el-input>
                            </td>
                        </tr>
                        <tr id="my_tr4">
                            <td>
                                <p>2、课题资金使用情况（包括资金落实、使用及存在问题）（限200字以内）</p>
                                <el-input 
                                    v-model="showForm.projectFundsUsage"
                                    :autosize="{ minRows:6 }"
                                    type="textarea"
                                    maxlength="200"
                                    disabled>
                                </el-input>
                            </td>
                        </tr>
                        <tr id="my_tr4">
                            <td>
                                <p>3、项目执行过程中存在的问题、解决措施及有关建议（限200字以内）</p>
                                <el-input 
                                    v-model="showForm.recommendationsProblemsSolutions"
                                    :autosize="{ minRows:6 }"
                                    type="textarea"
                                    maxlength="200"
                                    disabled>
                                </el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table my_table" :model="showForm">
                    <thead>
                        <tr>
                            <th colspan="7" class="small_title">五、项目承担单位审核意见（主要对项目填写情况是否属实作出评价）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="my_tr4">
                            <td colspan="4">
                                <el-input 
                                    v-model="showForm.projectUndertakerReviewOpinion"
                                    :autosize="{ minRows:6 }"
                                    type="textarea"
                                    maxlength="300"
                                    disabled>
                                </el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table" style="border:none;">
                    <tbody>
                        <tr class="file_tr" style="border-top:none;">
                            <td>中期检查表附件：</td>
                            <td colspan="3" class="file_td">
                                <a @click="handleDownload">{{ fileData.upload_file_name }}</a>
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
        name: 'midTermShowForm2',
        data() {
            return {
                showForm: {
                    subjectNo: '',
                    subjectName: '',
                    subjectStartTime: '',
                    subjectEndTime: '',
                    commitmentUnit: '',
                    participatingUnits: '',
                    subjectLeader: '',
                    leaderPhone: '',
                    topicContact: '',
                    subjectContactPhone: '',
                    contractPlanCrogressExecution: '',
                    notCompletingReason: [],
                    totalBudget: '',
                    provincialSubjectBudget: '',
                    unitFinancingBudget: '',
                    otherBudgets: '',
                    totalExpenditure: '',
                    provincialSubjectExpenditureBudget: '',
                    unitInancingExpenditureBudget: '',
                    otherExpenditureBudget: '',
                    equipmentUsage: '',
                    materialUsage: '',
                    processingFeeUsage: '',
                    fuelUsage: '',
                    travelExpenses: '',
                    meetingFeeUsage: '',
                    expertConsultationFeesUsage: '',
                    publicationDocumentationNewsIntellectualproperty: '',
                    labourCostsUsage: '',
                    otherExpenseUsage: '',
                    indirectCostsUsage: '',
                    externalCooperationFees: '',
                    newSales: '',
                    newProfit: '',
                    newTax: '',
                    foreignExchange: '',
                    newProducts: '',
                    newEquipment: '',
                    newMaterials: '',
                    newProcess: '',
                    newVarieties: '',
                    inventionPatents: '',
                    utilityModel: '',
                    design: '',
                    foreignPatents: '',
                    totalNumberPapers: '',
                    coreJournals: '',
                    sciIndex: '',
                    eiIndex: '',
                    publicationMonograph: '',
                    report: '',
                    developTechnicalStandards: '',
                    releaseDocuments: '',
                    seniorTalent: '',
                    graduateStudentsNumber: '',
                    actualProgressProject: '',
                    projectFundsUsage: '',
                    recommendationsProblemsSolutions: '',
                    projectUndertakerReviewOpinion: ''
                },
                midCheckAnnex: '',
                fileData: []
            }
        },
        methods: {
            handleDownload() {
                window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                    + this.fileData.upload_file_address 
                                    + '&fileName=' 
                                    + this.fileData.upload_file_name;
            },
        },
        beforeMount() {
            // 中期检查表
            setTimeout(() => {
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/daily/getMidCheckTemplateByCid',
                    method: 'post',
                    params: {
                        cid: this.$parent.paramsData.id
                    }
                }).then((res) => {
                    // console.log(res);
                    this.showForm = res.data.data;
                    for(let i in this.showForm) {
                        this.showForm[i] += "";
                    }
                    this.showForm.notCompletingReason = this.showForm.notCompletingReason.split(",");
                    let id = res.data.data.id;
                    this.axios({
                        url: 'http://192.168.0.80:8087/environment/daily/getMidCheckFileInfo',
                        method: 'get',
                        params: {
                            mid: id
                        }
                    }).then((res) => {
                        this.fileData = res.data.data[0];
                    })
                })
            },0);
        }
    }
</script>

<style lang="less">
    #midTermShowForm2 {
        .showForm {
            table.form_table {
                @media  screen and ( max-width: 1600px ) {
                    width: 72.4%;
                }
                thead {
                    tr {
                        .small_title {
                            height: 30px;
                            line-height: 30px;
                            text-align: left;
                            padding-top: 10px;
                        }
                    }
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
                            .el-checkbox-group {
                                padding: 8px 0;
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: left;
                                .item {
                                    width: 24%;
                                    white-space: nowrap;
                                    text-align: left;
                                    padding-left: 20px;
                                    line-height: 2;
                                }
                            }
                        }
                    }
                }
                .radio_group {
                    text-align: left;
                    padding-left: 20px;
                    .el-radio {
                        width: 24%;
                    }
                }
            }
            .my_table {
                td {
                    width: 14.2857% !important;
                }
                #my_tr {
                    td {
                        text-align: center;
                        background-color: #e5f3ff;
                    } 
                }
                #my_tr2 {
                    td {
                        text-align: left;
                        background-color: #fff;
                        padding-left: 10px;
                    }
                }
                #my_tr3 {
                    td {
                        text-align: center;
                        background-color: #fff;
                    }
                }
                #my_tr4 {
                    td {
                        background-color: #fff;
                        text-align: left;
                        padding: 10px;
                    }
                    
                }
            }
            .el-textarea {
                .el-textarea__inner {
                    padding: 10px;
                    resize: none;
                }
            }
            .el-date-editor {
                width: 100%;
            }
        }
    }
</style>
