<template>
    <div id="contractAdd">
        <div class="showForm">
            <el-form ref="showForm" >
                <table class="form_table" :model="showForm">
                    <thead>
                        <tr><th colspan="4">合同提交</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题类别：</td>
                            <td>
                                <el-input v-model="showForm.subjectCategory"></el-input>
                            </td>
                            <td>课题编号：</td>
                            <td>
                                <el-input v-model="showForm.projectNo"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题名称：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.subjectName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>合同开始时间（精确到月）：</td>
                            <td>
                                <el-input v-model="showForm.contractStartTime"></el-input>
                            </td>
                            <td>合同结束时间（精确到月）：</td>
                            <td>
                                <el-input v-model="showForm.contractEndTime"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题负责人：</td>
                            <td>
                                <el-input v-model="showForm.subjeceLeader"></el-input>
                            </td>
                            <td>课题负责人电话及手机：</td>
                            <td>
                                <el-input v-model="showForm.subjectLeaderPhone"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题联系人：</td>
                            <td>
                                <el-input v-model="showForm.subjectContact"></el-input>
                            </td>
                            <td>课题联系人电话及手机：</td>
                            <td>
                                <el-input v-model="showForm.subjectContactPhone"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.commitmentUnit"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位地址：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.commitmentUnitAddress"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位邮编：</td>
                            <td>
                                <el-input v-model="showForm.commitmentUnitZip"></el-input>
                            </td>
                            <td>课题主管部门：</td>
                            <td>
                                <el-input v-model="showForm.subjectSupervisorDepartment"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>开户银行：</td>
                            <td>
                                <el-input v-model="showForm.openBank"></el-input>
                            </td>
                            <td>开户银行账号：</td>
                            <td>
                                <el-input v-model="showForm.openBankAccount"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>电子信箱（E-mail）：</td>
                            <td>
                                <el-input v-model="showForm.email"></el-input>
                            </td>
                            <td>保证单位：</td>
                            <td>
                                <el-input v-model="showForm.guaranteedUnits"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>保证单位联系人：</td>
                            <td>
                                <el-input v-model="showForm.guaranteedUnitContact"></el-input>
                            </td>
                            <td>保证单位联系人电话：</td>
                            <td>
                                <el-input v-model="showForm.guaranteedContactPhone"></el-input>
                            </td>
                        </tr>
                        <!-- 甲方 -->
                        <tr>
                            <td>委托单位（甲方）：</td>
                            <td> 
                                <el-input v-model="showForm.commissioningUnit"></el-input>
                            </td>
                            <td>委托单位法定代表人：</td>
                            <td>
                                <el-input v-model="showForm.legalRepresentativeEntrustingA"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>委托单位地址：</td>
                            <td> 
                                <el-input v-model="showForm.commissionedUnitAddressA"></el-input>
                            </td>
                            <td>委托单位邮政编码：</td>
                            <td>
                                <el-input v-model="showForm.commissionedUnitZipA"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位（乙方）：</td>
                            <td>
                                <el-input v-model="showForm.responsibilityUnitB"></el-input>
                            </td>
                            <td>承担单位法定代表人：</td>
                            <td>
                                <el-input v-model="showForm.responsibilityLegalRepresentativeB"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位地址：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.commitUnitAddressB"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位邮政编码：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.commitUnitZipB"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位课题负责人：</td>
                            <td> 
                                <el-input v-model="showForm.commitUnitLeaderB"></el-input>
                            </td>
                            <td>承担单位课题负责人电话（手机号）：</td>
                            <td>
                                <el-input v-model="showForm.commitunitLeadersPhoneB"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位课题负责人电子邮件：</td>
                            <td> 
                                <el-input v-model="showForm.commitmentUnitEmailB"></el-input>
                            </td>
                            <td>保证单位（丙方）：</td>
                            <td>
                                <el-input v-model="showForm.guaranteedUnitC"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>保证单位法定代表人/部门负责人：</td>
                            <td> 
                                <el-input v-model="showForm.guaranteedUnitLeaderC"></el-input>
                            </td>
                            <td>保证单位邮政编码：</td>
                            <td>
                                <el-input v-model="showForm.guaranteedUnitZipC"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>保证单位地址：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.guaranteedUnitAddressC"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题签订说明：</td>
                            <td colspan="3">
                                <el-input 
                                    type="textarea"
                                    v-model="showForm.subjectSigningDescription"
                                    :autosize="{ minRows: 3}">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题的目标和主要研究内容：</td>
                            <td colspan="3">
                                <el-input 
                                    type="textarea" 
                                    v-model="showForm.subjectObjectivesResearch"
                                    :autosize="{ minRows: 3}">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题验收内容和考核指标：</td>
                            <td colspan="3">
                                <el-input 
                                    type="textarea" 
                                    v-model="showForm.subjectAcceptanceAssessment"
                                    :autosize="{ minRows: 3}">
                                </el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- 三、课题进度及考核指标（进度安排区间一般按3个月） -->
                <table class="form_table1" :model="progressForm">
                    <thead>
                        <tr>
                            <th colspan="4">课题进度及考核指标（进度安排区间一般按3个月）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="height:50px;line-height:50px;">时间</td>
                            <td colspan="3" style="position:relative;">
                                计划内容及考核指标
                                <i class="el-icon-circle-plus-outline" @click="handleTrAdd(1)"></i>
                            </td>
                            
                        </tr>
                        <tr v-for="(item,index) in progressForm" :key="index">
                            <td><el-input v-model="item.time"></el-input></td>
                            <td style="position:relative;">
                                <el-input v-model="item.programContentAssessmentIndicators"></el-input>
                                <i class="el-icon-remove-outline" @click="handleTrRemove(1,index)"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- 四、课题承担单位、参加单位及主要研究开发人员 -->
                <table class="form_table" :model="unitForm">
                    <thead>
                        <tr>
                            <th colspan="4">课题承担单位、参加单位及主要研究开发人员</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题承担单位：</td>
                            <td colspan="3"><el-input v-model="unitForm.bearingUnits"></el-input></td>
                        </tr>
                        <tr>
                            <td>课题参加单位：</td>
                            <td colspan="3"><el-input v-model="unitForm.participatingUnits"></el-input></td>
                        </tr>
                         <tr>
                            <td>境外合作单位：</td>
                            <td colspan="3"><el-input v-model="unitForm.overseasCooperationUnits"></el-input></td>
                        </tr>
                        <tr>
                            <td>国家或地区：</td>
                            <td colspan="3"><el-input v-model="unitForm.country"></el-input></td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table1" :model="unitForm" style="margin-top:10px;">
                    <tbody>
                        <tr style="background-color:#e5f3ff;">
                           <td><span>姓名</span></td>
                           <td><span>所在单位</span></td>
                           <td><span>性别</span></td>
                           <td><span>年龄</span></td>
                           <td><span>职称</span></td>
                           <td><span>从事专业</span></td>
                           <td style="padding:0 10px;"><span style="white-space:nowrap;">本课题中承担工作</span></td>
                           <td style="padding:0 10px;"><span style="white-space:nowrap;">为本课题工作时间（%）</span></td>
                           <!-- <td><span>本人签名</span></td> -->
                        </tr>
                        <tr>
                            <td colspan="8" style="text-align:left;padding-left:10px;background-color:#fff;">课题负责人：</td>
                        </tr>
                        <tr>
                           <td><el-input v-model="unitForm.leaderName"></el-input></td>
                           <td><el-input v-model="unitForm.unitName"></el-input></td>
                           <td><el-input v-model="unitForm.gender"></el-input></td>
                           <td><el-input v-model="unitForm.age"></el-input></td>
                           <td><el-input v-model="unitForm.professionalTitle"></el-input></td>
                           <td><el-input v-model="unitForm.professional"></el-input></td>
                           <td><el-input v-model="unitForm.workTask"></el-input></td>
                           <td><el-input v-model="unitForm.workingTime"></el-input></td>
                           <!-- <td><el-input v-model="unitForm.name"></el-input></td> -->
                       </tr>
                       <tr>
                           <td colspan="8" style="text-align:left;padding-left:10px;position:relative;">
                               主要研发人员：
                               <i class="el-icon-circle-plus-outline" @click="handleTrAdd(2)"></i>
                            </td>
                       </tr>
                       <tr v-for="(item,index) in keyForm" :key="index">
                           <td><el-input v-model="item.keyDevName"></el-input></td>
                           <td><el-input v-model="item.unitName"></el-input></td>
                           <td><el-input v-model="item.gender"></el-input></td>
                           <td><el-input v-model="item.age"></el-input></td>
                           <td><el-input v-model="item.professionalTitle"></el-input></td>
                           <td><el-input v-model="item.professional"></el-input></td>
                           <td><el-input v-model="item.workTask"></el-input></td>
                           <td style="position:relative;">
                               <el-input v-model="item.workingTime"></el-input>
                               <i class="el-icon-remove-outline" @click="handleTrRemove(2,index)"></i>
                            </td>
                           <!-- <td style="position:relative;">
                               <el-input v-model="unitForm.keyResearchDevelopers"></el-input>
                               <i class="el-icon-remove-outline" @click="handleTrRemove(index)"></i>
                           </td> -->
                       </tr>
                    </tbody>
                </table>
                <!-- 五、课题经费预算 -->
                <table class="form_table2" :model="budgetForm">
                    <thead>
                        <tr>
                            <th colspan="7">课题经费来源预算</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="3" style="background-color:#fff;">（一）课题经费来源预算</td>
                            <td colspan="3"> 经费单位：万元</td>
                        </tr>
                        <tr class="tbody_color">
                            <td style="width:20%;"></td>
                            <td>预算数</td>
                            <td>{{ budgetForm.currentYear }}年</td>
                            <td>{{ budgetForm.nextYear }}年</td>
                            <td>{{ budgetForm.afterYear }}年</td>
                            <td>备注</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">合计</td>
                            <td><el-input v-model="budgetForm.fundingSourcesBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.currentYearSourceTotal"></el-input></td>
                            <td><el-input v-model="budgetForm.nextYearSourceTotal"></el-input></td>
                            <td><el-input v-model="budgetForm.afterYearSourceTotal"></el-input></td>
                            <td><el-input v-model="budgetForm.fundingSourcesNote"></el-input></td>
                        </tr>
                        <tr>
                            <td>1、省环保科研课题经费</td>
                            <td><el-input v-model="budgetForm.provincialBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.provincialCurrentBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.provincialNextBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.provincialAfterBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.provincialNoteBudget"></el-input></td>
                        </tr>
                        <tr>
                            <td>2、部门、地方配套</td>
                            <td><el-input v-model="budgetForm.departmentBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.departmentCurrentBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.departmentNextBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.departmentAfterBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.departmentNoteBudget"></el-input></td>
                        </tr>
                        <tr>
                            <td>3、承担单位自筹</td>
                            <td><el-input v-model="budgetForm.bearBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.bearCurrentBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.bearNextBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.bearAfterBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.bearNoteBudget"></el-input></td>
                        </tr>
                        <tr >
                            <td>4、其他来源</td>
                            <td><el-input v-model="budgetForm.otherBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.otherCurrentBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.otherNextBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.otherAfterBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.otherNoteBudget"></el-input></td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table2" :model="budgetForm">
                    <tbody>
                        <tr>
                            <td colspan="3" style="background-color:#fff;">（二）课题总经费支出预算</td>
                            <td colspan="4"> 经费单位：万元</td>
                        </tr>
                        <tr class="tbody_color">
                            <td style="width:20%;" rowspan="2"></td>
                            <td colspan="4">省环保科研课题经费</td>
                            <td rowspan="2">自筹配套经费</td>
                            <td rowspan="2">备注</td>
                        </tr>
                        <tr class="tbody_color">
                            <td style="padding:0;text-align:center;">预算数</td>
                            <td>{{ budgetForm.currentYear }}年</td>
                            <td>{{ budgetForm.nextYear }}年</td>
                            <td>{{ budgetForm.afterYear }}年</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">合计</td>
                            <td><el-input v-model="budgetForm.expenditureBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.currentYearExpenditureTotal"></el-input></td>
                            <td><el-input v-model="budgetForm.nextYearExpenditureTotal"></el-input></td>
                            <td><el-input v-model="budgetForm.afterYearExpenditureTotal"></el-input></td>
                            <td><el-input v-model="budgetForm.selfTotalExpenditures"></el-input></td>
                            <td><el-input v-model="budgetForm.totalExpendituresNote"></el-input></td>
                        </tr>
                        <tr>
                            <td>1、设备费</td>
                            <td><el-input v-model="budgetForm.equipmentBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentCurrentBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentNextBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentAfterBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentSupportingBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentNoteBudget"></el-input></td>
                        </tr>
                        <tr>
                            <td>2、材料费</td>
                            <td><el-input v-model="budgetForm.materialBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.materialCurrentBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.materialNextBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.materialAfterBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.materialSupportingBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.materialNoteBudget"></el-input></td>
                        </tr>
                        <tr>
                            <td>3、测试化验加工费</td>
                            <td><el-input v-model="budgetForm.testBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.testCurrentBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.testNextBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.testAfterBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.testSupportingBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.testNoteBudget"></el-input></td>
                        </tr>
                        <tr >
                            <td>4、燃料动力费</td>
                            <td><el-input v-model="budgetForm.fuelBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.fuelCurrentBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.fuelNextBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.fuelAfterBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.fuelSupportingBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.fuelNoteBudget"></el-input></td>
                        </tr>
                        <tr >
                            <td>5、会议差旅费</td>
                            <td><el-input v-model="budgetForm.mettingBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.mettingCurrentBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.mettingNextBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.mettingAfterBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.mettingSupportingBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.mettingNoteBudget"></el-input></td>
                        </tr>
                        <tr >
                            <td>6、劳务费</td>
                            <td><el-input v-model="budgetForm.laborBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.laborCurrentBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.laborNextBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.laborAfterBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.laborSupportingBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.laborNoteBudget"></el-input></td>
                        </tr>
                        <tr >
                            <td>7、专家咨询费</td>
                            <td><el-input v-model="budgetForm.expertsBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.expertsCurrentBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.expertsNextBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.expertsAfterBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.expertsSupportingBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.expertsNoteBudget"></el-input></td>
                        </tr>
                        <tr >
                            <td><span>8、日常水、电、气、暖消耗等</span></td>
                            <td><el-input v-model="budgetForm.dailyBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.dailyCurrentBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.dailyNextBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.dailyAfterBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.dailySupportingBudget"></el-input></td>
                            <td><el-input v-model="budgetForm.dailyNoteBudget"></el-input></td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <el-button @click="handleSubmit">提交</el-button>
            <el-button @click="handleBack">返回</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'contractAdd',
        data() {
            return {
                showForm: {
                    subjectCategory: '1',
                    projectNo: '2',
                    subjectName: '3',
                    contractStartTime: '4',
                    contractEndTime: '5',
                    subjeceLeader: '6',
                    subjectLeaderPhone: '7',
                    subjectContact: '8',
                    subjectContactPhone: '9',
                    commitmentUnit: '10',
                    commitmentUnitAddress: '11',
                    commitmentUnitZip: '12',
                    subjectSupervisorDepartment: '13',
                    openBank: '14',
                    openBankAccount: '15',
                    email: '16',
                    guaranteedUnits: '17',
                    guaranteedUnitContact: '18',
                    guaranteedContactPhone: '19',
                    commissioningUnit: '20',
                    legalRepresentativeEntrustingA: '21',
                    commissionedUnitAddressA: '22',
                    commissionedUnitZipA: '23',
                    responsibilityUnitB: '24',
                    responsibilityLegalRepresentativeB: '25',
                    commitUnitAddressB: '26',
                    commitUnitZipB: '27',
                    commitUnitLeaderB: '28',
                    commitunitLeadersPhoneB: '29',
                    commitmentUnitEmailB: '30',
                    guaranteedUnitC: '31',
                    guaranteedUnitLeaderC: '32',
                    guaranteedUnitZipC: '33',
                    guaranteedUnitAddressC: '34',
                    subjectSigningDescription: '35',
                    subjectObjectivesResearch: '36',
                    subjectAcceptanceAssessment: '37',
                },
                progressForm: [{
                        contractId: 0,
                        time: "2018-8到2018-12",
                        programContentAssessmentIndicators: "让法国人tyre"
                    },{
                        contractId: 0,
                        time: "2018-8到2019-1",
                        programContentAssessmentIndicators: "现代风格的人体感染"
                    }],
                unitForm: {
                    contractId: 0,
                    bearingUnits: '1',
                    participatingUnits: '2',
                    overseasCooperationUnits: '3',
                    country: '4',
                    leaderName: '5',
                    unitName: '6',
                    gender: '7',
                    age: '8',
                    professionalTitle: '9',
                    professional: '10',
                    workTask: '11',
                    workingTime: '12'
                },
                keyForm: [{
                    contractId: 0,
                    keyDevName: '1',
                    unitName: '2',
                    gender: '3',
                    age: '4',
                    professionalTitle: '5',
                    professional: '6',
                    workTask: '7',
                    workingTime: '8'
                }],
                budgetForm: {
                    contractId: 0,
                    currentYear: '',
                    nextYear: '',
                    afterYear: '',
                    fundingSourcesBudget: 0,
                    currentYearSourceTotal: '1',
                    nextYearSourceTotal: '1',
                    afterYearSourceTotal: '1',
                    fundingSourcesNote: '1',
                    provincialBudget: 0,
                    provincialCurrentBudget: '13',
                    provincialNextBudget: '14',
                    provincialAfterBudget: '15',
                    provincialNoteBudget: '16',
                    departmentBudget: 0,
                    departmentCurrentBudget: '13',
                    departmentNextBudget: '14',
                    departmentAfterBudget: '15',
                    departmentNoteBudget: '16',
                    bearBudget: 0,
                    bearCurrentBudget: '2',
                    bearNextBudget: '3',
                    bearAfterBudget: '4',
                    bearNoteBudget: '5',
                    otherBudget: 0,
                    otherCurrentBudget: '2',
                    otherNextBudget: '3',
                    otherAfterBudget: '4',
                    otherNoteBudget: '5',
                    expenditureBudget: '119',
                    currentYearExpenditureTotal: '11',
                    nextYearExpenditureTotal: '12',
                    afterYearExpenditureTotal: '13',
                    selfTotalExpenditures: '14',
                    totalExpendituresNote: '15',
                    equipmentBudget: '17',
                    equipmentCurrentBudget: '18',
                    equipmentNextBudget: '19',
                    equipmentAfterBudget: '20',
                    equipmentSupportingBudget: '21',
                    equipmentNoteBudget: '22',
                    materialBudget: '317',
                    materialCurrentBudget: '318',
                    materialNextBudget: '319',
                    materialAfterBudget: '320',
                    materialSupportingBudget: '321',
                    materialNoteBudget: '322',
                    testBudget: '1',
                    testCurrentBudget: '2',
                    testNextBudget: '3',
                    testAfterBudget: '4',
                    testSupportingBudget: '5',
                    testNoteBudget: '6',
                    fuelBudget: '117',
                    fuelCurrentBudget: '118',
                    fuelNextBudget: '119',
                    fuelAfterBudget: '120',
                    fuelSupportingBudget: '121',
                    fuelNoteBudget: '122',
                    mettingBudget: '917',
                    mettingCurrentBudget: '918',
                    mettingNextBudget: '919',
                    mettingAfterBudget: '920',
                    mettingSupportingBudget: '921',
                    mettingNoteBudget: '922',
                    laborBudget: '0117',
                    laborCurrentBudget: '0118',
                    laborNextBudget: '0119',
                    laborAfterBudget: '0120',
                    laborSupportingBudget: '0121',
                    laborNoteBudget: '0122',
                    expertsBudget: '16',
                    expertsCurrentBudget: '17',
                    expertsNextBudget: '18',
                    expertsAfterBudget: '19',
                    expertsSupportingBudget: '20',
                    expertsNoteBudget: '21',
                    dailyBudget: '6',
                    dailyCurrentBudget: '7',
                    dailyNextBudget: '8',
                    dailyAfterBudget: '9',
                    dailySupportingBudget: '10',
                    dailyNoteBudget: '11'
                }
            }
        },
        methods:{
            handleSubmit() {
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                // 主表部分
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/contract/addContractInfo',
                    method: 'post',
                    data: this.showForm
                }).then((res) => {
                    console.log(res);
                    let id = res.data.data;
                    for(let i in this.progressForm) {
                        this.progressForm[i].contractId = id;
                    }
                    this.unitForm.contractId = id;
                    for(let i in this.keyForm) {
                        this.keyForm[i].contractId = id;
                    }
                    this.budgetForm.contractId = id;
                    // 子表一
                    this.axios({
                        url: 'http://192.168.0.80:8087/environment/contentindicators/insertCI',
                        method: 'post',
                        data: this.progressForm
                    }).then((res) => {
                        console.log(res);
                        // 子表二
                        this.axios({
                            url: 'http://192.168.0.80:8087/environment/contract/subject_participa_unit/insertInfo',
                            method: 'post',
                            data: this.unitForm
                        }).then((res) => {
                            console.log(res);
                            // 子表三
                            this.axios({
                                url: 'http://192.168.0.80:8087/environment/contract/keydev/insertKeyDev',
                                method: 'post',
                                data: this.keyForm
                            }).then((res) => {
                                console.log(res);
                                loading.close();
                                // 子表四
                                this.axios({
                                    url: 'http://192.168.0.80:8087/environment/contract/subjectfundbudget/insertInfo',
                                    method: 'post',
                                    data: this.budgetForm
                                }).then((res) => {
                                    loading.close();
                                    console.log(res);
                                    if(res.data.resultFlag == 0) {
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
                            }).catch(() => {
                                loading.close();
                                this.$alert('提交失败','提示', {
                                    confirmButtonText: '确定',
                                    type: 'warning',
                                    callback: action => {}
                                });
                            })
                        }).catch(() => {
                            loading.close();
                            this.$alert('提交失败','提示', {
                                confirmButtonText: '确定',
                                type: 'warning',
                                callback: action => {}
                            });
                        })
                    }).catch(() => {
                        loading.close();
                        this.$alert('提交失败','提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
                    })
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
            },
            handleTrAdd(val) {
                if(val == 1) {
                    let item = {
                        contractId: 0,
                        time: '',
                        programContentAssessmentIndicators: ''
                    };
                    this.progressForm.push(item);
                }else if(val == 2) {
                    let item = {
                        contractId: 0,
                        keyDevName: '1',
                        unitName: '2',
                        gender: '3',
                        age: '4',
                        professionalTitle: '5',
                        professional: '6',
                        workTask: '7',
                        workingTime: '8'
                    };
                    this.keyForm.push(item);
                }
                
            },
            handleTrRemove(index,val) {
                if(index == 1) {
                    if(this.progressForm.length == 1) {
                        this.$alert('至少保留一条','提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
                    }else {
                        this.progressForm.splice(val,1);
                    }
                }else if(index == 2) {
                    if(this.keyForm.length == 1) {
                        this.$alert('至少保留一条','提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
                    }else {
                        this.keyForm.splice(val,1);
                    }
                }
            },
            computed() {
                this.budgetForm.fundingSourcesBudget = (parseFloat(this.budgetForm.provincialBudget) * 10000
                                                     + parseFloat(this.budgetForm.departmentBudget) * 10000
                                                     + parseFloat(this.budgetForm.bearBudget) * 10000
                                                     + parseFloat(this.budgetForm.otherBudget) * 10000) / 10000;
            }
        },
        mounted() {
            let currentYear = new Date().getFullYear(),
                nextYear = currentYear + 1,
                afterYear = nextYear + 1;
            this.budgetForm.currentYear = currentYear;
            this.budgetForm.nextYear = nextYear;
            this.budgetForm.afterYear = afterYear;
        }

    }
</script>

<style lang="less">
    #contractAdd{
        .showForm{
            table.form_table,
            table.form_table1,
            table.form_table2{
                min-width: 1000px;
                width: 65.4%;
                thead{
                    th{
                        font-weight: bold;
                    }
                }
                @media  screen and ( max-width: 1600px ) {
                    width: 87.4%;
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
