<template>
    <div id="midTermAddForm2">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm" >
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">省环保科研课题中期检查表</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题编号 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.subjectNo"
                                    placeholder="请选择"
                                    @focus="handleOpenBox">
                                </el-input>
                            </td>
                            <td>课题名称 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.subjectName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>开始时间 <span class="required">*</span>：</td>
                            <td>
                                <el-date-picker
                                    v-model="showForm.subjectStartTime"
                                    type="date"
                                    placeholder="选择日期"
                                    value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </td>
                            <td>结束时间 <span class="required">*</span>：</td>
                            <td>
                                <el-date-picker
                                    v-model="showForm.subjectEndTime"
                                    type="date"
                                    placeholder="选择日期"
                                    value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.commitmentUnit"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>参加单位 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.participatingUnits"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题负责人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.subjectLeader"></el-input>
                            </td>
                            <td>课题负责人联系手机 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.leaderPhone"
                                    @blur="validatePhone">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题联系人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.topicContact"></el-input>
                            </td>
                            <td>课题联系人联系手机 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.subjectContactPhone"
                                    @blur="validatePhone">
                                </el-input>
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
                            <td>课题按合同计划进度执行情况 <span class="required">*</span>：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="showForm.contractPlanCrogressExecution" label="41">超额完成</el-radio>
                                <el-radio v-model="showForm.contractPlanCrogressExecution" label="42">完成</el-radio>
                                <el-radio v-model="showForm.contractPlanCrogressExecution" label="43">基本完成</el-radio>
                                <el-radio v-model="showForm.contractPlanCrogressExecution" label="44">未完成</el-radio>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>课题进度未按时完成的，请选择以下原因（多选） <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-checkbox-group v-model="showForm.notCompletingReason">
                                    <div class="item">
                                        <el-checkbox label="48"></el-checkbox>
                                        <label>技术变化</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="49"></el-checkbox>
                                        <label>经济未落实</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="50"></el-checkbox>
                                        <label>协作关系影响</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="51"></el-checkbox>
                                        <label>其他原因</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="52"></el-checkbox>
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
                            <td>课题编号 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.totalBudget"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td colspan="2">
                                <el-input 
                                    v-model="showForm.provincialSubjectBudget"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.unitFinancingBudget"></el-input>
                            </td>
                            <td colspan="2">
                                <el-input 
                                    v-model="showForm.otherBudgets"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>已到位数 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.totalExpenditure"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td colspan="2">
                                <el-input 
                                    v-model="showForm.provincialSubjectExpenditureBudget"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>
                                <el-input 
                                    v-model="showForm.unitInancingExpenditureBudget"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td colspan="2">
                                <el-input 
                                    v-model="showForm.otherExpenditureBudget"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;" id="my_tr2">
                            <td colspan="7">省环保课题经费使用情况：目前已支出{{ sum }}万元，具体如下（对照合同支出范围填写）：</td>
                        </tr>
                        <tr style="height:50px;" id="my_tr">
                            <td>设备费 <span class="required">*</span></td>
                            <td>材料费 <span class="required">*</span></td>
                            <td>测试化验加工费 <span class="required">*</span></td>
                            <td>燃料动力费 <span class="required">*</span></td>
                            <td>差旅费 <span class="required">*</span></td>
                            <td>会议费 <span class="required">*</span></td>
                            <td>专家咨询费 <span class="required">*</span></td>
                        </tr>
                        <tr>
                            <td>
                                <el-input 
                                    v-model="showForm.equipmentUsage"
                                    @input="computed">
                                </el-input>
                            </td>
                            <td>
                                <el-input 
                                    v-model="showForm.materialUsage"
                                    @input="computed">
                                </el-input>
                            </td>
                            <td>
                                <el-input 
                                    v-model="showForm.processingFeeUsage" 
                                    @input="computed">
                                </el-input>
                            </td>
                            <td>
                                <el-input 
                                    v-model="showForm.fuelUsage" 
                                    @input="computed">
                                </el-input>
                            </td>
                            <td>
                                <el-input 
                                    v-model="showForm.travelExpenses" 
                                    @input="computed">
                                </el-input>
                            </td>
                            <td>
                                <el-input 
                                    v-model="showForm.meetingFeeUsage"
                                    @input="computed">
                                </el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.expertConsultationFeesUsage" @input="computed"></el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;" id="my_tr">
                            <td colspan="2">出版/文献/信息传播/知识产权事务费 <span class="required">*</span></td>
                            <td>劳务费（或管理及人员费中人员费） <span class="required">*</span></td>
                            <td>其他费用 <span class="required">*</span></td>
                            <td colspan="2">
                                间接费用 <span class="required">*</span>
                                <br>
                                （水、电、气消耗及管理费等）
                            </td>
                            <td>外部合作费 <span class="required">*</span></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <el-input 
                                    v-model="showForm.publicationDocumentationNewsIntellectualproperty"
                                    @input="computed">
                                </el-input>
                            </td>
                            <td>
                                <el-input 
                                    v-model="showForm.labourCostsUsage"
                                    @input="computed">
                                </el-input>
                            </td>
                            <td>
                                <el-input 
                                    v-model="showForm.otherExpenseUsage"
                                    @input="computed">
                                </el-input>
                            </td>
                            <td colspan="2">
                                <el-input 
                                    v-model="showForm.indirectCostsUsage"
                                    @input="computed">
                                </el-input>
                            </td>
                            <td>
                                <el-input 
                                    v-model="showForm.externalCooperationFees"
                                    @input="computed">
                                </el-input>
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
                            <td rowspan="3" style="text-align:center;">经济社会效益情况 <span class="required">*</span></td>
                            <td>新增销售额<br>（万元）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.newSales"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>新增利润<br>（万元）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.newProfit"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>新增税金<br>（万元）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.newTax"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>创汇<br>（万美元）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.foreignExchange"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>新产品<br>（个）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.newProducts"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>新增装备（装置）（台）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.newEquipment"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>新材料<br>（件）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.newMaterials"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>新工艺<br>（项）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.newProcess"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>新品种<br>（个）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.newVarieties"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="4" style="text-align:center;">取得成果情况 <span class="required">*</span></td>
                            <td>发明专利</td>
                            <td>
                                <el-input 
                                    v-model="showForm.inventionPatents"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>实用新型</td>
                            <td>
                                <el-input 
                                    v-model="showForm.utilityModel"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>外观设计</td>
                            <td>
                                <el-input 
                                    v-model="showForm.design"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>国外专利</td>
                            <td>
                                <el-input 
                                    v-model="showForm.foreignPatents"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>论文总数<br>（篇）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.totalNumberPapers"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>核心期刊<br>（篇）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.coreJournals"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>SCI索引<br>（篇）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.sciIndex"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>EI索引<br>（篇）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.eiIndex"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>出版专著<br>（部）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.publicationMonograph"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>研究（咨询）<br>报告（份）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.report"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>制定技术标准（个）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.developTechnicalStandards"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>出台文件<br>（个）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.releaseDocuments"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2" style="text-align:center;">人才培养情况（人） <span class="required">*</span></td>
                            <td>高级人才<br>（人）</td>
                            <td>
                                <el-input 
                                    v-model="showForm.seniorTalent"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td colspan="4"></td>
                        </tr>
                        <tr id="my_tr3">
                            <td>培养研究生人数</td>
                            <td>
                                <el-input 
                                    v-model="showForm.graduateStudentsNumber"
                                    @blur="validateNum">
                                </el-input>
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
                                <p>1、项目实际进度情况 <span class="required">*</span>（包括经济、技术等指标完成情况，重点介绍课题进展、重大突破及工作成效等）</p>
                                <el-input 
                                    v-model="showForm.actualProgressProject"
                                    :autosize="{ minRows:6 }"
                                    type="textarea"
                                    maxlength="300"
                                    placeholder="请输入少于300字">
                                </el-input>
                            </td>
                        </tr>
                        <tr id="my_tr4">
                            <td>
                                <p>2、课题资金使用情况 <span class="required">*</span>（包括资金落实、使用及存在问题）</p>
                                <el-input 
                                    v-model="showForm.projectFundsUsage"
                                    :autosize="{ minRows:6 }"
                                    type="textarea"
                                    maxlength="200"
                                    placeholder="请输入少于200字">
                                </el-input>
                            </td>
                        </tr>
                        <tr id="my_tr4">
                            <td>
                                <p>3、项目执行过程中存在的问题、解决措施及有关建议 <span class="required">*</span></p>
                                <el-input 
                                    v-model="showForm.recommendationsProblemsSolutions"
                                    :autosize="{ minRows:6 }"
                                    type="textarea"
                                    maxlength="200"
                                    placeholder="请输入少于200字">
                                </el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table my_table" :model="showForm">
                    <thead>
                        <tr>
                            <th colspan="7" class="small_title">五、项目承担单位审核意见 <span class="required">*</span>（主要对项目填写情况是否属实作出评价）</th>
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
                                    placeholder="请输入少于300字">
                                </el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table" style="border:none;">
                    <tbody>
                        <tr class="file_tr" style="border-top:none;">
                            <td>中期检查表附件 <span class="required">*</span>：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event)" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
        </div>
        <div class="cover_box" v-show="overBoxFlag">
            <div class="message_box">
                <span class="btn_close" @click="handleCloseCover"></span>
                <header class="message_box_header">
                    <h2 class="title">课题查询</h2>
                </header>
                <section class="message_box_content">
                    <messageBox @receipt="receiptChildInfo"></messageBox>
                </section>
                <div class="btn_group">
                    <el-button @click="handleConfirmCover">确定</el-button>
                    <el-button @click="handleCloseCover">取消</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mattersReportMessageBox from '@/components/daliyManage/mattersReportMessageBox'
    export default {
        name: 'midTermAddForm2',
        components: {
            messageBox: mattersReportMessageBox
        },
        data() {
            return {
                sum: 0,
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
                    equipmentUsage: '0',
                    materialUsage: '0',
                    processingFeeUsage: '0',
                    fuelUsage: '0',
                    travelExpenses: '0',
                    meetingFeeUsage: '0',
                    expertConsultationFeesUsage: '0',
                    publicationDocumentationNewsIntellectualproperty: '0',
                    labourCostsUsage: '0',
                    otherExpenseUsage: '0',
                    indirectCostsUsage: '0',
                    externalCooperationFees: '0',
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
                computedData: {},
                midCheckAnnex: '',
                paramsData: {
                    id: this.$route.params.id
                },
                overBoxFlag: false,
                messageBoxData: {}
            }
        },
        methods: {
            // 提示
            alertInfo(info,type) {
                this.$alert(info,'提示', {
                    confirmButtonText: '确定',
                    type,
                    callback: action => {}
                });
            },
            // 手机号验证
            validatePhone(event) {
                let _event = event.srcElement || event.target,
                    val = _event.value,
                    validatePhone = this.$validate.validatePhone(val);
                if(validatePhone) {
                    this.alertInfo(validatePhone,"warning");
                    _event.value = "";
                    return false;
                }
            },
            // 数字验证
            validateNum(event) {
                let _event = event.srcElement || event.target,
                    val = _event.value,
                    validateNum = this.$validate.validateNum(val);
                if(validateNum) {
                    this.alertInfo(validateNum,"warning");
                    _event.value = "";
                    return false;
                }
            },
            computed() {
                this.computedData = {
                    equipmentUsage: this.showForm.equipmentUsage,
                    materialUsage: this.showForm.materialUsage,
                    processingFeeUsage: this.showForm.processingFeeUsage,
                    fuelUsage: this.showForm.fuelUsage,
                    travelExpenses: this.showForm.travelExpenses,
                    meetingFeeUsage: this.showForm.meetingFeeUsage,
                    expertConsultationFeesUsage: this.showForm.expertConsultationFeesUsage,
                    publicationDocumentationNewsIntellectualproperty: this.showForm.publicationDocumentationNewsIntellectualproperty,
                    labourCostsUsage: this.showForm.labourCostsUsage,
                    otherExpenseUsage: this.showForm.otherExpenseUsage,
                    indirectCostsUsage: this.showForm.indirectCostsUsage,
                    externalCooperationFees: this.showForm.externalCooperationFees
                }
                this.sum = 0;
                let _computed = () => {
                    for(let i in this.computedData) {
                        let str = this.computedData[i] + "",
                            code = str.charCodeAt(0);
                        if(!str.trim() || (code <48 || code > 57) || (str != parseFloat(str))) {
                            this.computedData[i] = 0;
                            this.showForm[i] = 0;
                        }
                        let num = parseFloat(this.computedData[i]);
                        this.sum += num;
                    }
                }
                _computed()
            },
            // 文件
            getFile(event) {
                // 附件格式验证
                let _event = event.srcElement || event.target,
                    val = _event.value,
                    validateFile = this.$validate.validateFile(event.target.files[0].name);
                if(validateFile) {
                    this.alertInfo(validateFile,"warning");
                    _event.value = "";
                    return false;
                }
                this.midCheckAnnex = event.target.files[0];
            },
            // 弹窗操作
            handleOpenBox(event) {
                this.overBoxFlag = true;
                event.target.blur();
            },
            handleCloseCover() {
                this.overBoxFlag = false;
            },
            receiptChildInfo(val) {
                this.messageBoxData = val;
            },
            handleConfirmCover() {
                this.overBoxFlag = false;
                this.showForm.subjectNo = this.messageBoxData.projectNo;
                this.showForm.subjectName = this.messageBoxData.subjectName;
                this.showForm.subjectLeader = this.messageBoxData.subjeceLeader;
                this.showForm.commitmentUnit = this.messageBoxData.commitmentUnit;
                this.showForm.topicContact = this.messageBoxData.subjectContact;
            }
        }
    }
</script>

<style lang="less">
    #midTermAddForm2 {
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
                    padding-top: 10px;
                    resize: none;
                }
            }
            .el-date-editor {
                width: 100%;
            }
        }
    }
</style>
