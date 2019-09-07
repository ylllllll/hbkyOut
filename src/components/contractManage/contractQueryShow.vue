<template>
    <div id="contractQueryShow">
        <div class="showForm">
            <el-form ref="showForm" >
                <table class="form_table" :model="showForm">
                    <thead>
                        <tr><th colspan="4">合同中心详情页</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题类别：</td>
                            <td>
                                <el-input
                                 v-model="showForm.subjectCategory"
                                 :disabled="true"
                                 >
                                </el-input>
                            </td>
                            <td>课题编号：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.projectNo"
                                 :disabled="true"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题名称：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="showForm.subjectName"
                                 :disabled="true"
                                 >
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>合同开始时间（精确到月）：</td>
                            <td>
                                <el-input 
                                v-model="showForm.contractStartTime" 
                                :disabled="true">
                                </el-input>
                            </td>
                            <td>合同结束时间（精确到月）：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.contractEndTime" 
                                 :disabled="true"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题负责人：</td>
                            <td>
                                <el-input 
                                v-model="showForm.subjeceLeader" 
                                :disabled="true">
                                </el-input>
                            </td>
                            <td>课题负责人电话及手机：</td>
                            <td>
                                <el-input 
                                v-model="showForm.subjectLeaderPhone"
                                :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题联系人：</td>
                            <td>
                                <el-input 
                                v-model="showForm.subjectContact"
                                :disabled="true">
                                </el-input>
                            </td>
                            <td>课题联系人电话及手机：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.subjectContactPhone" 
                                 :disabled="true"
                                >
                            </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位：</td>
                            <td colspan="3">
                                <el-input 
                                v-model="showForm.commitmentUnit"
                                :disabled="true">
                                </el-input>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>承担单位地址：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="showForm.commitmentUnitAddress"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位邮编：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.commitmentUnitZip"
                                 :disabled="true">
                                </el-input>
                            </td>
                            <td>课题主管部门：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.subjectSupervisorDepartment"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>开户银行：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.openBank"
                                 :disabled="true">
                                </el-input>
                            </td>
                            <td>开户银行账号：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.openBankAccount"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>电子信箱（E-mail）：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.email"
                                 :disabled="true">
                                </el-input>
                            </td>
                            <td>保证单位：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.guaranteedUnits"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>保证单位联系人：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.guaranteedUnitContact"
                                 :disabled="true">
                                </el-input>
                            </td>
                            <td>保证单位联系人电话：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.guaranteedContactPhone"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <!-- 甲方 -->
                        <tr>
                            <td>委托单位（甲方）：</td>
                            <td> 
                                <el-input 
                                 v-model="showForm.commissioningUnit"
                                 :disabled="true">
                                </el-input>
                            </td>
                            <td>委托单位法定代表人：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.legalRepresentativeEntrustingA"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>委托单位地址：</td>
                            <td> 
                                <el-input 
                                 v-model="showForm.commissionedUnitAddressA"
                                 :disabled="true">
                                </el-input>
                            </td>
                            <td>委托单位邮政编码：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.commissionedUnitZipA"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位（乙方）：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.responsibilityUnitB"
                                 :disabled="true">
                                </el-input>
                            </td>
                            <td>承担单位法定代表人：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.responsibilityLegalRepresentativeB"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位地址：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.commitUnitAddressB"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位邮政编码：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.commitUnitZipB"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位课题负责人：</td>
                            <td> 
                                <el-input 
                                 v-model="showForm.commitUnitLeaderB"
                                 :disabled="true">
                                </el-input>
                            </td>
                            <td>承担单位课题负责人电话（手机号）：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.commitunitLeadersPhoneB"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位课题负责人电子邮件：</td>
                            <td> 
                                <el-input 
                                 v-model="showForm.commitmentUnitEmailB"
                                 :disabled="true">
                                </el-input>
                            </td>
                            <td>保证单位（丙方）：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.guaranteedUnitC"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>保证单位法定代表人/部门负责人：</td>
                            <td> 
                                <el-input 
                                 v-model="showForm.guaranteedUnitLeaderC"
                                 :disabled="true">
                                </el-input>
                            </td>
                            <td>保证单位邮政编码：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.guaranteedUnitZipC"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>保证单位地址：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="showForm.guaranteedUnitAddressC"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题签订说明：</td>
                            <td colspan="3">
                                <el-input 
                                    type="textarea" 
                                    v-model="showForm.subjectSigningDescription"
                                    :disabled="true"
                                    :autosize="{ minRows:4 }">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题的目标和主要研究内容：</td>
                            <td colspan="3">
                                <el-input 
                                    type="textarea" 
                                    v-model="showForm.subjectObjectivesResearch"
                                    :disabled="true"
                                    :autosize="{ minRows:4 }">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题验收内容和考核指标：</td>
                            <td colspan="3">
                                <el-input 
                                    type="textarea" 
                                    v-model="showForm.subjectAcceptanceAssessment"
                                    :disabled="true"
                                    :autosize="{ minRows:4 }">
                                </el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- 三、课题进度及考核指标（进度安排区间一般按3个月） -->
                <table class="form_table1" :model="progressForm" >
                    <thead>
                        <tr>
                            <th colspan="4">课题进度及考核指标（进度安排区间一般按3个月）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="height:50px;line-height:50px;">时间</td>
                            <td colspan="3">计划内容及考核指标</td>
                        </tr>
                        <tr v-for="(item,index) in progressForm" :key="index">
                            <td>
                                <el-input v-model="item.time" disabled=""></el-input>
                            </td>
                            <td>
                                <el-input v-model="item.programContentAssessmentIndicators" disabled=""></el-input>
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
                            <td colspan="3"><el-input v-model="unitForm.bearingUnits" disabled></el-input></td>
                        </tr>
                        <tr>
                            <td>课题参加单位：</td>
                            <td colspan="3"><el-input v-model="unitForm.participatingUnits" disabled></el-input></td>
                        </tr>
                         <tr>
                            <td>境外合作单位：</td>
                            <td colspan="3"><el-input v-model="unitForm.overseasCooperationUnits" disabled></el-input></td>
                        </tr>
                        <tr>
                            <td>国家或地区：</td>
                            <td colspan="3"><el-input v-model="unitForm.country" disabled></el-input></td>
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
                        </tr>
                        <tr>
                            <td colspan="8" style="text-align:left;padding-left:10px;background-color:#fff;">课题负责人：</td>
                        </tr>
                        <tr>
                            <td><el-input v-model="unitForm.leaderName" disabled></el-input></td>
                            <td><el-input v-model="unitForm.unitName" disabled></el-input></td>
                            <td><el-input v-model="unitForm.gender" disabled></el-input></td>
                            <td><el-input v-model="unitForm.age" disabled></el-input></td>
                            <td><el-input v-model="unitForm.professionalTitle" disabled></el-input></td>
                            <td><el-input v-model="unitForm.professional" disabled></el-input></td>
                            <td><el-input v-model="unitForm.workTask" disabled></el-input></td>
                            <td><el-input v-model="unitForm.workingTime" disabled></el-input></td>
                            <!-- <td><el-input v-model="unitForm.name"></el-input></td> -->
                        </tr>
                        <tr>
                            <td colspan="8" style="text-align:left;padding-left:10px;">主要研发人员：</td>
                        </tr>
                        <tr v-for="(item,index) in keyForm" :key="index">
                            <td><el-input v-model="item.keyDevName" disabled></el-input></td>
                            <td><el-input v-model="item.unitName" disabled></el-input></td>
                            <td><el-input v-model="item.gender" disabled></el-input></td>
                            <td><el-input v-model="item.age" disabled></el-input></td>
                            <td><el-input v-model="item.professionalTitle" disabled></el-input></td>
                            <td><el-input v-model="item.professional" disabled></el-input></td>
                            <td><el-input v-model="item.workTask" disabled></el-input></td>
                            <td><el-input v-model="item.workingTime" disabled></el-input></td>
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
                            <td><el-input v-model="budgetForm.fundingSourcesBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.currentYearSourceTotal" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.nextYearSourceTotal" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.afterYearSourceTotal" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.fundingSourcesNote" disabled></el-input></td>
                        </tr>
                        <tr>
                            <td>1、省环保科研课题经费</td>
                            <td><el-input v-model="budgetForm.provincialBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.provincialCurrentBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.provincialNextBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.provincialAfterBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.provincialNoteBudget" disabled></el-input></td>
                        </tr>
                        <tr>
                            <td>2、部门、地方配套</td>
                            <td><el-input v-model="budgetForm.departmentBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.departmentCurrentBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.departmentNextBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.departmentAfterBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.departmentNoteBudget" disabled></el-input></td>
                        </tr>
                        <tr>
                            <td>3、承担单位自筹</td>
                            <td><el-input v-model="budgetForm.bearBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.bearCurrentBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.bearNextBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.bearAfterBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.bearNoteBudget" disabled></el-input></td>
                        </tr>
                        <tr >
                            <td>4、其他来源</td>
                            <td><el-input v-model="budgetForm.otherBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.otherCurrentBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.otherNextBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.otherAfterBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.otherNoteBudget" disabled></el-input></td>
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
                            <td><el-input v-model="budgetForm.expenditureBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.currentYearExpenditureTotal" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.nextYearExpenditureTotal" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.afterYearExpenditureTotal" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.selfTotalExpenditures" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.totalExpendituresNote" disabled></el-input></td>
                        </tr>
                        <tr>
                            <td>1、设备费</td>
                            <td><el-input v-model="budgetForm.equipmentBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentCurrentBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentNextBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentAfterBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentSupportingBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentNoteBudget" disabled></el-input></td>
                        </tr>
                        <tr>
                            <td>2、材料费</td>
                            <td><el-input v-model="budgetForm.materialBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.materialCurrentBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.materialNextBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.materialAfterBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.materialSupportingBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.materialNoteBudget" disabled></el-input></td>
                        </tr>
                        <tr>
                            <td>3、测试化验加工费</td>
                            <td><el-input v-model="budgetForm.testBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.testCurrentBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.testNextBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.testAfterBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.testSupportingBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.testNoteBudget" disabled></el-input></td>
                        </tr>
                        <tr >
                            <td>4、燃料动力费</td>
                            <td><el-input v-model="budgetForm.fuelBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.fuelCurrentBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.fuelNextBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.fuelAfterBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.fuelSupportingBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.fuelNoteBudget" disabled></el-input></td>
                        </tr>
                        <tr >
                            <td>5、会议差旅费</td>
                            <td><el-input v-model="budgetForm.mettingBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.mettingCurrentBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.mettingNextBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.mettingAfterBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.mettingSupportingBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.mettingNoteBudget" disabled></el-input></td>
                        </tr>
                        <tr >
                            <td>6、劳务费</td>
                            <td><el-input v-model="budgetForm.laborBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.laborCurrentBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.laborNextBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.laborAfterBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.laborSupportingBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.laborNoteBudget" disabled></el-input></td>
                        </tr>
                        <tr >
                            <td>7、专家咨询费</td>
                            <td><el-input v-model="budgetForm.expertsBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.expertsCurrentBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.expertsNextBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.expertsAfterBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.expertsSupportingBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.expertsNoteBudget" disabled></el-input></td>
                        </tr>
                        <tr >
                            <td><span>8、日常水、电、气、暖消耗等</span></td>
                            <td><el-input v-model="budgetForm.dailyBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.dailyCurrentBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.dailyNextBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.dailyAfterBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.dailySupportingBudget" disabled></el-input></td>
                            <td><el-input v-model="budgetForm.dailyNoteBudget" disabled></el-input></td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <div class="btn_group">
                <el-button @click = "handleBack">返回</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'contractQueryShow',
        data() {
            return {
                showForm: {},
                progressForm:[],
                unitForm: {},
                keyForm: [],
                budgetForm:{},
                paramsData: {
                    id: this.$route.params.id
                }
            }
        },
        methods: {
            handleBack() {
                this.$router.go(-1);
            }
        },
        beforeMount() {
            // 主表
            this.axios({
                url: 'http://192.168.0.80:8087/environment/contract/getManageInfoById',
                method: 'get',
                params: {
                    id: this.paramsData.id
                }
            }).then((res) => {
                let data = res.data.data;
                this.showForm = data;
            }).catch(() => {})
            // 子表一
            this.axios({
                url: 'http://192.168.0.80:8087/environment/contentindicators/getIndicatorById',
                method: 'get',
                params: {
                    id: this.paramsData.id
                }
            }).then((res) => {
                let data = res.data.data;
                this.progressForm = data;
            }).catch(() => {})
            // 子表二
            this.axios({
                url: 'http://192.168.0.80:8087/environment/contract/subject_participa_unit/getDeveloperInfoById',
                method: 'get',
                params: {
                    id: this.paramsData.id
                }
            }).then((res) => {
                let data = res.data.data;
                this.unitForm = data;
            }).catch(() => {})
            // 子表三
            this.axios({
                url: 'http://192.168.0.80:8087/environment/contract/keydev/getKeyDevInfoById',
                method: 'get',
                params: {
                    cid: this.paramsData.id
                }
            }).then((res) => {
                let data = res.data.data;
                this.keyForm = data;
            }).catch(() => {})
            // 子表四
            this.axios({
                url: 'http://192.168.0.80:8087/environment/contract/subjectfundbudget/getInfoById',
                method: 'get',
                params: {
                    id: this.paramsData.id
                }
            }).then((res) => {
                let data = res.data.data;
                this.budgetForm = data;
            }).catch(() => {})
        }
    }
</script>

<style lang="less">
    #contractQueryShow{
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
                .el-textarea {
                    .el-textarea__inner {
                        padding: 10px;
                        resize: none;
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
