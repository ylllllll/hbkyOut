<template>
    <div id="subjectUploadSecond">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm">
                <table class="form_table">
                     <thead>
                        <tr><th colspan="4">江苏省环保科研课题验收证书</th></tr>
                        <tr><th colspan="4">苏环验字<el-input v-model="title1"></el-input>第<el-input v-model="title2"></el-input>号</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题名称：</td>
                            <td colspan="3"><el-input disabled v-model="showForm.topicName"></el-input></td>
                        </tr>
                        <tr>
                            <td>课题编号：</td>
                            <td colspan="3"><el-input disabled v-model="showForm.topicNumber"></el-input></td>
                        </tr>
                        <tr>
                            <td>完成单位：</td>
                            <td colspan="3">
                                <el-input  v-model="showForm.completionUnit"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>验收组织部门：</td>
                            <td>
                                <el-input disabled v-model="showForm.acceptanceDepartment"></el-input>
                            </td>
                            <td>验收日期：</td>
                            <td>
                                <el-date-picker
                                disabled
                                v-model="showForm.acceptanceTime"
                                align="right"
                                type="date"
                                value-format="yyyy-MM-dd"
                                placeholder="选择日期">
                                </el-date-picker>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1>一、基本信息</h1>
                <p>1.课题概况</p>
                <table class="form_table1 form_table3">
                    <tbody>
                        <tr>
                            <td rowspan="9" style="width:5%;text-align:center;"><span style="width:16px;">完成单位</span></td>
                        </tr>
                        <tr>
                            <td style="width:20.8%;">单位名称：</td>
                            <td colspan="6">
                                <el-input disabled v-model="showForm.unitName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>单位性质：</td>
                            <td colspan="6" style="text-align:center;font-size:0;">
                                 <el-radio-group v-model="showForm.unitNature">
                                     <span v-for="(item,index) in unitNatureOptions" :key="index">
                                        <el-radio disabled :label="item.id">{{item.content}}</el-radio>
                                     </span>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>所在地区：</td>
                            <td colspan="6">
                                <el-input v-model="showForm.location">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>法定代表人：</td>
                            <td colspan="2">
                                <el-input v-model="showForm.legalRepresentative">
                                </el-input>
                            </td>
                            <td style="width:20.8%">电话：</td>
                            <td colspan="2">
                                <el-input v-model="showForm.legalRepresentativePhone">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>联系人：</td>
                            <td colspan="2">
                                <el-input v-model="showForm.contacts">
                                </el-input>
                            </td>
                            <td style="width:20.8%">电话：</td>
                            <td colspan="2">
                                <el-input v-model="showForm.contactsPhone">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>邮政编码：</td>
                            <td colspan="2">
                                <el-input v-model="showForm.postalCode">
                                </el-input>
                            </td>
                            <td style="width:20.8%">电子信箱：</td>
                            <td colspan="2">
                                <el-input v-model="showForm.mail">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>通信地址：</td>
                            <td colspan="6">
                                <el-input v-model="showForm.mailingAddress">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>主管部门：</td>
                            <td colspan="6">
                                <el-input v-model="showForm.competentDepartment">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">课题起始时间：</td>
                            <td colspan="2">
                                <el-date-picker
                                v-model="showForm.projectStartTime"
                                type="date"
                                value-format="yyyy-MM-dd"
                                placeholder="选择日期">
                                </el-date-picker>
                            </td>
                            <td style="width:20.8%">课题完成时间：</td>
                            <td colspan="2">
                                <el-date-picker
                                v-model="showForm.projectCompletionTime"
                                type="date"
                                value-format="yyyy-MM-dd"
                                placeholder="选择日期">
                                </el-date-picker>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"><span>成果形式(可选多项，另页附成果资料清单)：</span></td>
                            <td colspan="5">
                                 <el-checkbox-group v-model="showForm.achievementForm">
                                     <span v-for="(item,index) in achievementFormOptions" :key="index">
                                        <el-checkbox :label="item.id">{{item.content}}</el-checkbox>
                                     </span>
                                </el-checkbox-group>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">成果水平：</td>
                            <td colspan="6">
                                 <el-radio-group v-model="showForm.achievementLevel" class="level">
                                     <span v-for="(item,index) in achievementLevelOptions" :key="index">
                                        <el-radio :label="item.id">{{item.content}}</el-radio>
                                     </span>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="7" style="text-align:left;padding-left:10px;">专利申请(件)</td>
                        </tr>
                        <tr>
                            <td colspan="2">发明：</td>
                            <td>
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].applicationInvention"></el-input>
                            </td>
                            <td style="width:10%;"><span>实用新型：</span></td>
                            <td>
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].useNewType"></el-input>
                            </td>
                            <td style="width:10%;"><span>外观设计：</span></td>
                            <td>
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].patentAppearance"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="7" style="text-align:left;padding-left:10px;">专利授权(件)</td>
                        </tr>
                        <tr>
                            <td colspan="2">发明：</td>
                            <td>
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].patentInvention"></el-input>
                            </td>
                            <td><span>实用新型：</span></td>
                            <td>
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].empowerNewType"></el-input>
                            </td>
                            <td><span>外观设计：</span></td>
                            <td>
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].empowerAppearanceDesign"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" rowspan="3" >发表论文()：</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">论文总数</td>
                            <td style="text-align:center; background-color:#e5f3ff;" colspan="2">科学引文索引(SCI)</td>
                            <td style="text-align:center;" colspan="2">工程索引(EI)</td>
                        </tr>
                        <tr>
                            <td>
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].paperNumber"></el-input>
                            </td>
                            <td colspan="2">
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].scienceIndexe"></el-input>
                            </td>
                            <td colspan="2">
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].engineerIndex"></el-input>
                            </td>
                        </tr>
                        <tr class="patent">
                            <td colspan="2">出版科技著作：</td>
                            <td>
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].publishWork"></el-input>
                                <span>(部)</span>
                            </td>
                            <td colspan="2">制定技术标准：</td>
                            <td colspan="2">
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].technicalStandard"></el-input>
                                <span>(个)</span>
                            </td>
                        </tr>
                        <tr class="patent">
                            <td colspan="2">新产品：</td>
                            <td>
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].newProduct"></el-input>
                                <span>(个)</span>
                            </td>
                            <td colspan="2">制定政策制度：</td>
                            <td colspan="2">
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].policySystem"></el-input>
                                <span>(项)</span>
                            </td>
                        </tr>
                        <tr class="patent">
                            <td colspan="2">建成新装置：</td>
                            <td>
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].newDevice"></el-input>
                                <span>(套)</span>
                            </td>
                            <td colspan="2">新工艺：</td>
                            <td colspan="2">
                                <el-input v-model="showForm.acceptanceCertificatePatentList[0].newTechnology"></el-input>
                                <span>(项)</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>2.课题责任人情况：</p>
                <table class="form_table1">
                    <tbody>
                        <tr class="textalignCenter">
                            <td>姓名</td>
                            <td>性别</td>
                            <td>出生年月</td>
                            <td>专业</td>
                            <td>学历</td>
                            <td>职称</td>
                            <td>联系电话</td>
                        </tr>
                        <tr v-for="(item,index) in showForm.acceptanceCertificateSubjectPeopleList" :key="index">

                            <td>
                                <el-input v-model="item.name"></el-input>
                            </td>
                            <td>
                                <el-select v-model="item.sex" placeholder="请选择">
                                    <el-option
                                    v-for="item in sexOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.label">
                                    </el-option>
                                </el-select>
                                <!-- <el-input v-model=""></el-input> -->
                            </td>
                            <td>
                                <el-date-picker
                                    v-model="item.birthDate"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </td>
                            <td>
                                <el-input v-model="item.major"></el-input>
                            </td>
                            <td>
                                <el-input v-model="item.education"></el-input>
                            </td>
                            <td>
                                <el-input v-model="item.title"></el-input>
                            </td>
                            <td>
                                <el-input v-model="item.phone"></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>3.课题研发人员情况：</p>
                <table class="form_table2">
                    <tbody>
                        <tr>
                            <td style="width:25.8%;">课题研发人员总数</td>
                            <td colspan="3">
                                <el-input disabled v-model="showForm.developmentTotalNumber"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>其中:博士</td>
                            <td  colspan="3">
                                <el-input v-model="showForm.doctorTotalNumber" v-on:input="watchNum"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>硕士</td>
                            <td  colspan="3">
                                <el-input v-model="showForm.masterTotalNumber" v-on:input="watchNum"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>其中:高级职称</td>
                            <td  colspan="3">
                                <el-input v-model="showForm.seniorTotalNumber" v-on:input="watchNum"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>中级职称</td>
                            <td  colspan="3">
                                <el-input v-model="showForm.intermediateTotalNumber" v-on:input="watchNum"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>其中:在校研究生</td>
                            <td  colspan="3">
                                <el-input v-model="showForm.schoolMasterNumber" v-on:input="watchNum"></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>4. 课题实际到位经费情况：</p>
                <table class="form_table1">
                    <tbody>
                        <tr class="textalignCenter">
                            <td>项目总经费</td>
                            <td>省环保科研课题经费</td>
                            <td>主管部门配套</td>
                            <td>银行贷款</td>
                            <td>单位自筹</td>
                            <td>其它</td>
                        </tr>
                        <tr>
                            <td>
                                <el-input v-model="showForm.totalProjectFunds"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.environmentTopicFunds"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.competentDepartmentMatch"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.bankLoans"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.unitRaiseMoney"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.otherActualMoney"></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>5. 省环保科研课题经费支出情况(单位财务部门盖章)：  单位：万元</p>
                <table class="form_table">
                    <tbody>
                        <tr>
                            <td>合计：</td>
                            <td>
                                <el-input disabled v-model="showForm.totalExpenditure"></el-input>
                            </td>
                            <td>6.会议费：</td>
                            <td>
                                <el-input  v-model="showForm.conferenceFee" v-on:input="watchNum"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>1.设备费：</td>
                            <td>
                                <el-input  v-model="showForm.equipmentCost" v-on:input="watchNum"></el-input>
                            </td>
                            <td>7.国际合作交流费：</td>
                            <td>
                                <el-input  v-model="showForm.internationalCommunication" v-on:input="watchNum"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>2.材料费：</td>
                            <td>
                                <el-input  v-model="showForm.materialFee" v-on:input="watchNum"></el-input>
                            </td>
                            <td>8.专家咨询费：</td>
                            <td>
                                <el-input  v-model="showForm.expertConsult" v-on:input="watchNum"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>3.测试化验加工费：</td>
                            <td>
                                <el-input  v-model="showForm.laboratoryFees" v-on:input="watchNum"></el-input>
                            </td>
                            <td>9.管理及人员费：</td>
                            <td>
                                <el-input  v-model="showForm.managementExpense" v-on:input="watchNum"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>4.燃料动力费：</td>
                            <td>
                                <el-input  v-model="showForm.fuelCosts" v-on:input="watchNum"></el-input>
                            </td>
                            <td>10.其他费用：</td>
                            <td>
                                <el-input  v-model="showForm.otherExpenditureMoney" v-on:input="watchNum"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>5. 差旅费：</td>
                            <td>
                                <el-input  v-model="showForm.travelExpenses" v-on:input="watchNum"></el-input>
                            </td>
                            <td><el-input disabled></el-input> </td>
                            <td>
                                <el-input disabled></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>6. 课题累计经济效益：</p>
                <table class="form_table">
                    <tbody>
                        <tr>
                            <td>新增产值（万元）</td>
                            <td>
                                <el-input v-model="showForm.newOutput"></el-input>
                            </td>
                            <td>新增销售额（万元）</td>
                            <td>
                                <el-input v-model="showForm.newSalesVolume"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>新增利税（万元）</td>
                            <td>
                                <el-input v-model="showForm.newProfitTax"></el-input>
                            </td>
                            <td>出口创汇（万美元）</td>
                            <td>
                                <el-input v-model="showForm.exitEarn"></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1>二、目标任务完成情况</h1>
                <table class="form_table">
                    <tbody>
                        <tr>
                            <td>1. 主要解决的关键技术与创新点：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.mainSolveTechnology" type="textarea"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>2. 主要技术、经济与环境指标完成情况：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.mainCompletion" type="textarea"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>3. 课题实施的绩效：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.implementationAchievement" type="textarea"></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1>三、课题主要参加人员名单</h1>
                <table class="form_table1">
                    <tbody>
                        <tr class="textalignCenter">
                            <td>姓名</td>
                            <td>性别</td>
                            <td>出生年月</td>
                            <td>技术职称</td>
                            <td>学历</td>
                            <td>工作单位 </td>
                            <td><span>承担的主要研究任务</span></td>
                        </tr>
                        <tr v-for="(item,index) in showForm.acceptanceCertificatePrincipalPersonnelList" :key="index">
                            <td>
                                <el-input v-model="item.participantName"></el-input>
                            </td>
                            <td>
                                <el-select v-model="item.participantSex" placeholder="请选择">
                                    <el-option
                                    v-for="item in sexOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.label">
                                    </el-option>
                                </el-select>
                            </td>
                            <td>
                                <el-date-picker
                                    v-model="item.participantBirthDate"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </td>
                            <td>
                                <el-input v-model="item.participantTechnicalTitle"></el-input>
                            </td>
                            <td>
                                <el-input v-model="item.participantEducation"></el-input>
                            </td>
                            <td>
                                <el-input v-model="item.participantWorkUnit"></el-input>
                            </td>
                            <td>
                                <el-input v-model="item.taskTaking"></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1>四、课题管理部门意见</h1>
                <table class="form_table">
                    <tbody>
                        <tr>
                            <td>完成单位科技部门意见：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.scienceDepartmentOpinion"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>组织验收部门意见：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.checkDepartmentOpinion"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>省生态环境厅意见：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.environmentOfficeOpinion"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>上传的最终证书文件：</td>
                            <td colspan="3">
                                <input type="file" id="lastReport">
                            </td>
                        </tr>
                    </tbody>
                </table>

            </el-form>
            <el-button @click="handleSubmit" type="primary">提交</el-button>
            <el-button @click="handleBack" type="primary">返回</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'subjectUploadSecond',
    data(){
        return{
            showForm:{
                translate:'',
                topicName:'',
                topicNumber:'',
                completionUnit:'',
                acceptanceDepartment:'江苏省生态环境厅',
                acceptanceTime:'',
                unitName:'',
                unitNature:'',
                location:'',
                legalRepresentative:'',
                legalRepresentativePhone:'',
                contacts:'',
                contactsPhone:'',
                postalCode:'',
                mail:'',
                mailingAddress:'',
                competentDepartment:'',
                projectStartTime:'',
                projectCompletionTime:'',
                achievementForm:[],
                achievementLevel:'',
                developmentTotalNumber:0,
                doctorTotalNumber:'',
                masterTotalNumber:'',
                seniorTotalNumber:'',
                intermediateTotalNumber:'',
                schoolMasterNumber:'',
                totalProjectFunds:'',
                environmentTopicFunds:'',
                competentDepartmentMatch:'',
                bankLoans:'',
                unitRaiseMoney:'',
                otherActualMoney:'',
                equipmentCost:'',
                materialFee:'',
                laboratoryFees:'',
                fuelCosts:'',
                travelExpenses:'',
                conferenceFee:'',
                internationalCommunication:'',
                expertConsult:'',
                managementExpense:'',
                otherExpenditureMoney:'',
                totalExpenditure:0,
                newOutput:'',
                newSalesVolume:'',
                newProfitTax:'',
                exitEarn:'',
                mainSolveTechnology:'',
                mainCompletion:'',
                implementationAchievement:'',
                scienceDepartmentOpinion:'',
                checkDepartmentOpinion:'',
                environmentOfficeOpinion:'',
                // 验收证书集合
                acceptanceCertificatePatentList:[{
                    applicationInvention:'',
                    useNewType:'',
                    patentAppearance:'',
                    patentInvention:'',
                    empowerNewType:'',
                    empowerAppearanceDesign:'',
                    paperNumber:'',
                    scienceIndexe:'',
                    engineerIndex:'',
                    publishWork:'',
                    technicalStandard:'',
                    newProduct:'',
                    policySystem:'',
                    newDevice:'',
                    newTechnology:''
                }],
                // 主要参加人员
                acceptanceCertificateSubjectPeopleList:[{
                    name:'',
                    sex:'',
                    birthDate:'',
                    major:'',
                    education:'',
                    title:'',
                    phone:''
                }],
                // 课题负责人集合
                acceptanceCertificatePrincipalPersonnelList:[{
                    participantName:'',
                    participantSex:'',
                    participantBirthDate:'',
                    participantTechnicalTitle:'',
                    participantEducation:'',
                    participantWorkUnit:'',
                    taskTaking:''
                }],
            },
            // 单位性质
            unitNatureOptions:[{
                id:'',
                content:''
            }],
            // 成果形式
            achievementFormOptions:[{
                id:'',
                content:'',
            }],
            // 成果水平
            achievementLevelOptions:[{
                id:'',
                content:''
            }],
            sexOptions:[{
                value:'1',
                label:'男'
            },{
                value:'2',
                label:'女'
            }],
            params:{
                id:this.$route.params.id,
                arrays:this.$route.params.arrays
            },
            title1:'',
            title2:''
        }
    },
    
    methods:{
        watchNum(){
            if(this.showForm.doctorTotalNumber != '' && this.showForm.masterTotalNumber !='' && this.showForm.seniorTotalNumber !='' && this.showForm.intermediateTotalNumber != '' && this.showForm.schoolMasterNumber != ''){
                let realVal = parseFloat(this.showForm.doctorTotalNumber) + parseFloat(this.showForm.masterTotalNumber)  + parseFloat(this.showForm.seniorTotalNumber) 
                                                + parseFloat(this.showForm.intermediateTotalNumber) +  parseFloat(this.showForm.schoolMasterNumber);
                this.showForm.developmentTotalNumber = realVal
            }
            if(this.showForm.equipmentCost != '' && this.showForm.laboratoryFees != '' && this.showForm.fuelCosts !='' && 
              this.showForm.travelExpenses !='' && this.showForm.conferenceFee != '' && this.showForm.internationalCommunication != ''&& 
             this.showForm.expertConsult !='' && this.showForm.managementExpense && this.showForm.otherExpenditureMoney && this.showForm.materialFee){
                let countFunds = parseFloat(this.showForm.equipmentCost) + parseFloat(this.showForm.laboratoryFees)  + parseFloat(this.showForm.fuelCosts) + 
                                 parseFloat(this.showForm.travelExpenses) +  parseFloat(this.showForm.conferenceFee) + parseFloat(this.showForm.internationalCommunication)+
                                 parseFloat(this.showForm.expertConsult) + parseFloat(this.showForm.managementExpense) + parseFloat(this.showForm.otherExpenditureMoney) + 
                                 parseFloat(this.showForm.materialFee);
                this.showForm.totalExpenditure = parseFloat(countFunds).toFixed(2)
            }
        },
        // 点击提交
        handleSubmit(){
            let str = '苏环验字'+ this.title1 +'第'+ this.title2+'号'
            this.showForm.translate = str
            for(let i in this.showForm) {
                if(typeof(this.showForm[i]) == "string" ) {
                    if(this.showForm[i].match(/^[ ]*$/) || this.showForm[i] == undefined){
                        this.$alert('请将表格填写完整', '提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
                        return false;
                    }
                }
                if(typeof(this.showForm[i]) == "object") {
                    if(this.showForm[i].length == 0) {
                        this.$alert('请至少选择一类', '提示', {
                            confirmButtonText: '确定',
                            callback: action => {}
                        });
                        return false;
                    }
                }
            }
            let $lastReport = document.getElementById('lastReport').files[0]
            if($lastReport == undefined){
                this.$alert('请上传附件', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {}
                });
                return
            }
            this.submitAxios($lastReport)
        },
        submitAxios(lastReport){
            let _this = this
            let _achievementForm = JSON.stringify(_this.showForm.achievementForm)
            _this.showForm.achievementForm = _achievementForm
            var formData = new FormData()
            formData.append('caId',_this.params.id)
            formData.append('lastReport',lastReport)
            let acceptanceCertificate = JSON.stringify(_this.showForm)
            formData.append('acceptanceCertificate',new Blob([acceptanceCertificate],{type:'application/json'}))
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/apply/submitLastReport',
                data:formData
            }).then(function(res){
                let data = ''
                if(res.data.resultFlag == 0){//成功
                   data = res.data.data
                }
                if(res.data.resultFlag == 1){
                   data = res.data.data
                }
                _this.$alert(data, '提示', {
                    confirmButtonText: '确定',
                    type:'warning',
                }).then(() => {
                    _this.$router.back(0)
                }).catch(() => {
                    _this.$router.back(0)
                })
            }).catch(function(err){
                console.log(err)
            })
        },
        // 返回
        handleBack(){
            this.$router.back(-1)
        },
        // 获取数据带过来的基本数据
        getShowForm(formData){
            if(formData != undefined){
                formData.map((item) => {
                    if(this.params.id == item.id){
                        this.showForm.topicName = item.topicName
                        this.showForm.topicNumber = item.topicNumber
                        this.showForm.projectLeader = item.projectLeader
                        this.showForm.subjectUndertakingUnit = item.subjectUndertakingUnit
                        this.showForm.unitNature = item.unitNature
                        this.showForm.completionUnit = item.subjectUndertakingUnit
                        this.showForm.unitName = item.subjectUndertakingUnit
                        this.showForm.acceptanceTime = item.applicationAcceptanceTime
                        return;
                    }
                })
            }
            
        },
        // 获取单位性质
        getUnitNaturesOptions(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/checkApplyStyle/unitNature'
            }).then(function(res){
                _this.unitNatureOptions = res.data.data
                _this.getAchievementFormOptions()
            }).catch(function(err){
                console.log(err)
            })
        },
        // 获取成果形式
        getAchievementFormOptions(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/checkApplyStyle/queryAchievementShape'
            }).then(function(res){
                _this.achievementFormOptions = res.data.data
                _this.getAchievementLevelOptions()
            }).catch(function(err){
                console.log(err)
            })
        },
        // 获取成果水平
        getAchievementLevelOptions(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/checkApplyStyle/queryAchievementLevel'
            }).then(function(res){
                _this.achievementLevelOptions = res.data.data
            }).catch(function(err){
                console.log(err)
            })
        }
    },
    async created(){
        await this.getShowForm(this.params.arrays)
        await this.getUnitNaturesOptions()
        // await this.getAchievementFormOptions()
        // await this.getAchievementLevelOptions()
    }
}
</script>
<style lang="less">
#subjectUploadSecond{
    .showForm{
        .el-form{
            p,h1{
                padding-left: 40px;
                margin: 15px auto;
                text-align: left;
                width: 59.4%;
                min-width: 900px;
                font-weight: bold;
                font-size: 18px;
            }
            h1{
                margin: 15px auto;
                font-size: 23px;
                padding-left: 20px;
            }
            th{
                .el-input{
                    display: inline-block;
                    width: auto;
                    height: 50px;
                    line-height: 50px;
                }
            }
            .form_table1,.form_table,.form_table2{
                min-width: 900px;
                td{
                    height: 50px;
                }
                .textalignCenter{
                    td{
                        text-align: center;
                    }
                }
            }
            .form_table1{
                position: relative;
                tr{
                    position: relative;
                    td{
                        text-align: right;
                        .el-input__inner{
                            text-align: left;
                        }
                    }
                }
            }
            .form_table3{
                tr{
                    td:first-child,
                    td:nth-child(3),
                    td:nth-child(5){
                        background-color: #e5f3ff;
                    }
                }
            }
            table.form_table2{
                tbody {
                    tr{
                        td:first-child{
                            text-align: right;
                            padding-right: 20px;
                        }
                    }
                    tr:first-child td{
                        border: 1px solid #e0e0e0;
                    }
                }
            }
            .el-select{
                .el-input__suffix{
                    line-height: 50px;
                }
            }
            .patent{
                text-align: left;
                .el-input{
                    width: 79%;
                }
            }
            .el-date-editor{
                width: 100%;
                line-height:50px;
                span{
                    line-height: 50px;
                }
            }
            .el-checkbox-group,
            .el-radio-group.level{
                text-align: left;
                font-size: 0;
                line-height: 1;
                height: 100%;
                width: 100%;
                >span{
                    min-width: 200px;
                    line-height: 1;
                    padding:5px 10px;
                    .el-checkbox{
                        span{
                            line-height: 1;
                            &:last-child{
                                padding-left: 5px;
                            }
                        }
                    }
                     .el-radio{
                        line-height: 1;
                        margin: 0;
                     }
                }
            }
            .el-radio{
                line-height: 50px;
                margin: 0 30px;
                .el-radio__input{
                    padding-right: 5px;
                }
                .el-radio__input.is-disabled+span.el-radio__label{
                    color: #000;
                }
                .el-radio__input.is-checked+.el-radio__label{
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
                width: 100%;
                height: 100%;
                padding: 10px;
            }
            // .addCircle{
            //     position: absolute;
            //     top: 60px;
            //     right: -40px;
            //     .el-icon-circle-plus-outline:before{
            //         font-size: 30px;
            //     }
            // }
            // .removeCircle{
            //     position: absolute;
            //     margin-top: 10px;
            //     right: -40px;
            //     .el-icon-remove-outline:before{
            //         font-size: 30px;
            //     }
            // }
        }
    }
}
</style>