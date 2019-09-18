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
                            <td style="text-align:left;padding-left:10px;">
                                <span v-for="(item,index) in optGroup1" 
                                    :key="index" 
                                    v-show="showForm.subjectCategory == item.id">
                                    {{ item.content }}
                                </span>
                            </td>
                            <td>课题编号：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.projectNo"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题名称：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.subjectName"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>合同开始时间：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.contractStartTime" 
                                    readonly>
                                </el-input>
                            </td>
                            <td>合同结束时间：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.contractEndTime" 
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题负责人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.subjeceLeader" 
                                    readonly>
                                </el-input>
                            </td>
                            <td>课题负责人手机：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.subjectLeaderPhone"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题联系人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.subjectContact"
                                    readonly>
                                </el-input>
                            </td>
                            <td>课题联系人手机：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.subjectContactPhone" 
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.commitmentUnit"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位地址：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.commitmentUnitAddress"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位邮编：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.commitmentUnitZip"
                                    readonly>
                                </el-input>
                            </td>
                            <td>课题主管部门：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.subjectSupervisorDepartment"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>开户银行：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.openBank"
                                    readonly>
                                </el-input>
                            </td>
                            <td>开户银行账号：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.openBankAccount"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>电子信箱：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.email"
                                    readonly>
                                </el-input>
                            </td>
                            <td>保证单位：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.guaranteedUnits"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>保证单位联系人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.guaranteedUnitContact"
                                    readonly>
                                </el-input>
                            </td>
                            <td>保证单位联系人手机：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.guaranteedContactPhone"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <!-- 甲方 -->
                        <tr>
                            <td>委托单位（甲方）：</td>
                            <td> 
                                <el-input 
                                    v-model="showForm.commissioningUnit"
                                    readonly>
                                </el-input>
                            </td>
                            <td>委托单位法定代表人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.legalRepresentativeEntrustingA"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>委托单位地址：</td>
                            <td> 
                                <el-input 
                                    v-model="showForm.commissionedUnitAddressA"
                                    readonly>
                                </el-input>
                            </td>
                            <td>委托单位邮政编码：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.commissionedUnitZipA"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位（乙方）：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.responsibilityUnitB"
                                    readonly>
                                </el-input>
                            </td>
                            <td>承担单位法定代表人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.responsibilityLegalRepresentativeB"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位地址：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.commitUnitAddressB"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位邮政编码：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.commitUnitZipB"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位课题负责人：</td>
                            <td> 
                                <el-input 
                                    v-model="showForm.commitUnitLeaderB"
                                    readonly>
                                </el-input>
                            </td>
                            <td>承担单位课题负责人手机：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.commitunitLeadersPhoneB"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位课题负责人电子邮件：</td>
                            <td> 
                                <el-input 
                                    v-model="showForm.commitmentUnitEmailB"
                                    readonly>
                                </el-input>
                            </td>
                            <td>保证单位（丙方）：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.guaranteedUnitC"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>保证单位法定代表人/部门负责人：</td>
                            <td> 
                                <el-input 
                                    v-model="showForm.guaranteedUnitLeaderC"
                                    readonly>
                                </el-input>
                            </td>
                            <td>保证单位邮政编码：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.guaranteedUnitZipC"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>保证单位地址：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.guaranteedUnitAddressC"
                                    readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题签订说明：</td>
                            <td colspan="3">
                                <el-input 
                                    type="textarea" 
                                    v-model="showForm.subjectSigningDescription"
                                    readonly
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
                                    readonly
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
                                    readonly
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
                                <el-input v-model="item.time" readonly></el-input>
                            </td>
                            <td>
                                <el-input v-model="item.programContentAssessmentIndicators" readonly></el-input>
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
                            <td colspan="3"><el-input v-model="unitForm.bearingUnits" readonly></el-input></td>
                        </tr>
                        <tr>
                            <td>课题参加单位：</td>
                            <td colspan="3"><el-input v-model="unitForm.participatingUnits" readonly></el-input></td>
                        </tr>
                         <tr>
                            <td>境外合作单位：</td>
                            <td colspan="3"><el-input v-model="unitForm.overseasCooperationUnits" readonly></el-input></td>
                        </tr>
                        <tr>
                            <td>国家或地区：</td>
                            <td colspan="3"><el-input v-model="unitForm.country" readonly></el-input></td>
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
                            <td><el-input v-model="unitForm.leaderName" readonly></el-input></td>
                            <td><el-input v-model="unitForm.unitName" readonly></el-input></td>
                            <td><el-input v-model="unitForm.gender" readonly></el-input></td>
                            <td><el-input v-model="unitForm.age" readonly></el-input></td>
                            <td><el-input v-model="unitForm.professionalTitle" readonly></el-input></td>
                            <td><el-input v-model="unitForm.professional" readonly></el-input></td>
                            <td><el-input v-model="unitForm.workTask" readonly></el-input></td>
                            <td><el-input v-model="unitForm.workingTime" readonly></el-input></td>
                            <!-- <td><el-input v-model="unitForm.name"></el-input></td> -->
                        </tr>
                        <tr>
                            <td colspan="8" style="text-align:left;padding-left:10px;">主要研发人员：</td>
                        </tr>
                        <tr v-for="(item,index) in keyForm" :key="index">
                            <td><el-input v-model="item.keyDevName" readonly></el-input></td>
                            <td><el-input v-model="item.unitName" readonly></el-input></td>
                            <td><el-input v-model="item.gender" readonly></el-input></td>
                            <td><el-input v-model="item.age" readonly></el-input></td>
                            <td><el-input v-model="item.professionalTitle" readonly></el-input></td>
                            <td><el-input v-model="item.professional" readonly></el-input></td>
                            <td><el-input v-model="item.workTask" readonly></el-input></td>
                            <td><el-input v-model="item.workingTime" readonly></el-input></td>
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
                            <td><el-input v-model="budgetForm.fundingSourcesBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.currentYearSourceTotal" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.nextYearSourceTotal" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.afterYearSourceTotal" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.fundingSourcesNote" readonly></el-input></td>
                        </tr>
                        <tr>
                            <td>1、省环保科研课题经费</td>
                            <td><el-input v-model="budgetForm.provincialBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.provincialCurrentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.provincialNextBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.provincialAfterBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.provincialNoteBudget" readonly></el-input></td>
                        </tr>
                        <tr>
                            <td>2、部门、地方配套</td>
                            <td><el-input v-model="budgetForm.departmentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.departmentCurrentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.departmentNextBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.departmentAfterBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.departmentNoteBudget" readonly></el-input></td>
                        </tr>
                        <tr>
                            <td>3、承担单位自筹</td>
                            <td><el-input v-model="budgetForm.bearBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.bearCurrentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.bearNextBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.bearAfterBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.bearNoteBudget" readonly></el-input></td>
                        </tr>
                        <tr >
                            <td>4、其他来源</td>
                            <td><el-input v-model="budgetForm.otherBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.otherCurrentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.otherNextBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.otherAfterBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.otherNoteBudget" readonly></el-input></td>
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
                            <td><el-input v-model="budgetForm.expenditureBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.currentYearExpenditureTotal" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.nextYearExpenditureTotal" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.afterYearExpenditureTotal" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.selfTotalExpenditures" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.totalExpendituresNote" readonly></el-input></td>
                        </tr>
                        <tr>
                            <td>1、设备费</td>
                            <td><el-input v-model="budgetForm.equipmentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentCurrentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentNextBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentAfterBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentSupportingBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentNoteBudget" readonly></el-input></td>
                        </tr>
                        <tr>
                            <td>2、材料费</td>
                            <td><el-input v-model="budgetForm.materialBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.materialCurrentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.materialNextBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.materialAfterBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.materialSupportingBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.materialNoteBudget" readonly></el-input></td>
                        </tr>
                        <tr>
                            <td>3、测试化验加工费</td>
                            <td><el-input v-model="budgetForm.testBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.testCurrentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.testNextBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.testAfterBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.testSupportingBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.testNoteBudget" readonly></el-input></td>
                        </tr>
                        <tr >
                            <td>4、燃料动力费</td>
                            <td><el-input v-model="budgetForm.fuelBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.fuelCurrentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.fuelNextBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.fuelAfterBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.fuelSupportingBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.fuelNoteBudget" readonly></el-input></td>
                        </tr>
                        <tr >
                            <td>5、会议差旅费</td>
                            <td><el-input v-model="budgetForm.mettingBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.mettingCurrentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.mettingNextBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.mettingAfterBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.mettingSupportingBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.mettingNoteBudget" readonly></el-input></td>
                        </tr>
                        <tr >
                            <td>6、劳务费</td>
                            <td><el-input v-model="budgetForm.laborBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.laborCurrentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.laborNextBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.laborAfterBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.laborSupportingBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.laborNoteBudget" readonly></el-input></td>
                        </tr>
                        <tr >
                            <td>7、专家咨询费</td>
                            <td><el-input v-model="budgetForm.expertsBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.expertsCurrentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.expertsNextBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.expertsAfterBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.expertsSupportingBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.expertsNoteBudget" readonly></el-input></td>
                        </tr>
                        <tr >
                            <td><span>8、日常水、电、气、暖消耗等</span></td>
                            <td><el-input v-model="budgetForm.dailyBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.dailyCurrentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.dailyNextBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.dailyAfterBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.dailySupportingBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.dailyNoteBudget" readonly></el-input></td>
                        </tr>
                        <tr class="file_tr">
                            <td>附件：</td>
                            <td class="file_td" colspan="6">
                                <a @click="handleDownload">{{ fileData.upload_file_name }}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <div class="btn_group">
                <el-button @click="handleBack">返回</el-button>
            </div>
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark">
                <el-table-column
                    prop="fistHandler"
                    label="交办人"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="secondHandler"
                    label="处理人"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="auditStep"
                    label="审核步骤"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="firstHandleTime"
                    label="交办时间"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="state"
                    label="状态"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="handleContent"
                    label="处理内容"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="secondHandleTime"
                    label="处理时间"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'contractQueryShow',
        data() {
            return {
                fileData: {
                    upload_file_name: ''
                },
                optGroup1: [],
                showForm: {},
                progressForm:[],
                unitForm: {},
                keyForm: [],
                budgetForm:{},
                paramsData: {
                    id: this.$route.params.id
                },
                tableData: []
            }
        },
        methods: {
            handleBack() {
                this.$router.go(-1);
            },
            handleDownload() {
                window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                     + this.fileData.upload_file_address 
                                     + '&fileName=' 
                                     + this.fileData.upload_file_name;
            }
        },
        beforeMount() {
            // 请求所属领域、所属类别
            this.axios({
                url: 'http://192.168.0.80:8087/environment/guide/getCategoryAndDomain',
                method: 'get',
            }).then((res) => {
                let data = res.data.data;
                for(let i in data) {
                    if(data[i].classification == "所属类别") {
                        this.optGroup1.push(data[i]);
                    }
                }
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
                                    // 附件
                                    this.axios({
                                        url: 'http://192.168.0.80:8087/environment/contract/getContractAnnexInfo',
                                        method: 'get',
                                        params: {
                                            cid: this.paramsData.id
                                        }
                                    }).then((res) => {
                                        this.fileData = res.data.data[0];
                                        // 审核记录
                                        this.axios({
                                            url: 'http://192.168.0.80:8087/environment/contract/getRecordInfoByContractId',
                                            method: 'get',
                                            params: {
                                                cid: this.paramsData.id
                                            }
                                        }).then((res) => {
                                            this.tableData = res.data.data;
                                        })
                                    })
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
    #contractQueryShow{
        padding-bottom: 60px;
        background-color: #fff;
        margin-bottom: 20px;
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
        .el-table {
            width: 1130px;
            margin: auto;
            border-right: 1px solid #e0e0e0;
            border-collapse: collapse;
            tr {
                height: 50px;
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
            .el-table__empty-block {
                border-left: 1px solid #e0e0e0;
            }
        }
    }
</style>
