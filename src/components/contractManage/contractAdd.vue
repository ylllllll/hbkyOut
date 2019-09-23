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
                            <td>课题类别 <span class="required">*</span>：</td>
                            <td>
                                <el-select v-model="showForm.subjectCategory">
                                    <el-option v-for="(item,index) in optGroup1" :key="index" :label="item.content" :value="item.id"></el-option>
                                </el-select>
                            </td>
                            <td>课题编号 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.projectNo"
                                    placeholder="请选择"
                                    @focus="handleOpenBox">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题名称 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.subjectName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>合同开始时间 <span class="required">*</span>：</td>
                            <td>
                                <el-date-picker
                                    v-model="showForm.contractStartTime"
                                    type="date"
                                    placeholder="选择日期"
                                    value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </td>
                            <td>合同结束时间 <span class="required">*</span>：</td>
                            <td>
                                <el-date-picker
                                    v-model="showForm.contractEndTime"
                                    type="date"
                                    placeholder="选择日期"
                                    value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </td>
                        </tr>
                        <tr>
                            <td>课题负责人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.subjeceLeader"></el-input>
                            </td>
                            <td>课题负责人手机 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.subjectLeaderPhone"
                                    @blur="validatePhone">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题联系人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.subjectContact"></el-input>
                            </td>
                            <td>课题联系人手机 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.subjectContactPhone"
                                    @blur="validatePhone">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.commitmentUnit"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位地址 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.commitmentUnitAddress"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位邮编 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.commitmentUnitZip"
                                    @blur="validatePostal">
                                </el-input>
                            </td>
                            <td>课题主管部门 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.subjectSupervisorDepartment"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>开户银行 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.openBank"></el-input>
                            </td>
                            <td>开户银行账号 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.openBankAccount"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>电子信箱 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.email"
                                    @blur="validateEmail">
                                </el-input>
                            </td>
                            <td>保证单位 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.guaranteedUnits"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>保证单位联系人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.guaranteedUnitContact"></el-input>
                            </td>
                            <td>保证单位联系人手机 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.guaranteedContactPhone"
                                    @blur="validatePhone">
                                </el-input>
                            </td>
                        </tr>
                        <!-- 甲方 -->
                        <tr>
                            <td>委托单位（甲方） <span class="required">*</span>：</td>
                            <td> 
                                <el-input v-model="showForm.commissioningUnit"></el-input>
                            </td>
                            <td>委托单位法定代表人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.legalRepresentativeEntrustingA"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>委托单位地址 <span class="required">*</span>：</td>
                            <td> 
                                <el-input v-model="showForm.commissionedUnitAddressA"></el-input>
                            </td>
                            <td>委托单位邮政编码 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.commissionedUnitZipA"
                                    @blur="validatePostal">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位（乙方） <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.responsibilityUnitB"></el-input>
                            </td>
                            <td>承担单位法定代表人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.responsibilityLegalRepresentativeB"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位地址 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.commitUnitAddressB"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位邮政编码 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.commitUnitZipB"
                                    @blur="validatePostal">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位课题负责人 <span class="required">*</span>：</td>
                            <td> 
                                <el-input v-model="showForm.commitUnitLeaderB"></el-input>
                            </td>
                            <td>承担单位课题负责人手机 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.commitunitLeadersPhoneB"
                                    @blur="validatePhone">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位课题负责人电子邮件 <span class="required">*</span>：</td>
                            <td> 
                                <el-input 
                                    v-model="showForm.commitmentUnitEmailB"
                                    @blur="validateEmail">
                                </el-input>
                            </td>
                            <td>保证单位（丙方） <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.guaranteedUnitC"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>保证单位法定代表人/部门负责人 <span class="required">*</span>：</td>
                            <td> 
                                <el-input v-model="showForm.guaranteedUnitLeaderC"></el-input>
                            </td>
                            <td>保证单位邮政编码 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.guaranteedUnitZipC"
                                    @blur="validatePostal">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>保证单位地址 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.guaranteedUnitAddressC"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题签订说明 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-input 
                                    type="textarea"
                                    v-model="showForm.subjectSigningDescription"
                                    :autosize="{ minRows:4 }">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题的目标和主要研究内容 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-input 
                                    type="textarea" 
                                    v-model="showForm.subjectObjectivesResearch"
                                    :autosize="{ minRows:4 }">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题验收内容和考核指标 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-input 
                                    type="textarea" 
                                    v-model="showForm.subjectAcceptanceAssessment"
                                    :autosize="{ minRows:4 }">
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
                            <td style="height:50px;line-height:50px;">时间 <span class="required">*</span></td>
                            <td colspan="3" style="position:relative;">
                                计划内容及考核指标 <span class="required">*</span>
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
                            <td>课题承担单位 <span class="required">*</span>：</td>
                            <td colspan="3"><el-input v-model="unitForm.bearingUnits"></el-input></td>
                        </tr>
                        <tr>
                            <td>课题参加单位 <span class="required">*</span>：</td>
                            <td colspan="3"><el-input v-model="unitForm.participatingUnits"></el-input></td>
                        </tr>
                         <tr>
                            <td>境外合作单位 <span class="required">*</span>：</td>
                            <td colspan="3"><el-input v-model="unitForm.overseasCooperationUnits"></el-input></td>
                        </tr>
                        <tr>
                            <td>国家或地区 <span class="required">*</span>：</td>
                            <td colspan="3"><el-input v-model="unitForm.country"></el-input></td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table1" :model="unitForm" style="margin-top:10px;">
                    <tbody>
                        <tr style="background-color:#e5f3ff;">
                            <td><span>姓名 <span class="required">*</span></span></td>
                            <td><span>所在单位 <span class="required">*</span></span></td>
                            <td><span>性别 <span class="required">*</span></span></td>
                            <td><span>年龄 <span class="required">*</span></span></td>
                            <td><span>职称 <span class="required">*</span></span></td>
                            <td><span>从事专业 <span class="required">*</span></span></td>
                            <td style="padding:0 10px;"><span style="white-space:nowrap;">本课题中承担工作 <span class="required">*</span></span></td>
                            <td style="padding:0 10px;"><span style="white-space:nowrap;">为本课题工作时间（%） <span class="required">*</span></span></td>
                            <!-- <td><span>本人签名</span></td> -->
                        </tr>
                        <tr>
                            <td colspan="8" style="text-align:left;padding-left:10px;background-color:#fff;">课题负责人：</td>
                        </tr>
                        <tr>
                            <td><el-input v-model="unitForm.leaderName"></el-input></td>
                            <td><el-input v-model="unitForm.unitName"></el-input></td>
                            <td>
                                <el-select v-model="unitForm.gender" placeholder="请选择">
                                    <el-option value="男"></el-option>
                                    <el-option value="女"></el-option>
                                </el-select>
                            </td>
                            <td>
                                <el-input 
                                    v-model="unitForm.age"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td><el-input v-model="unitForm.professionalTitle"></el-input></td>
                            <td><el-input v-model="unitForm.professional"></el-input></td>
                            <td><el-input v-model="unitForm.workTask"></el-input></td>
                            <td>
                                <el-input 
                                    v-model="unitForm.workingTime"
                                    @blur="validateNum">
                                </el-input>
                            </td>
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
                            <td>
                                <!-- <el-input v-model="item.gender"></el-input> -->
                                <el-select v-model="item.gender" placeholder="请选择">
                                    <el-option value="男"></el-option>
                                    <el-option value="女"></el-option>
                                </el-select>
                            </td>
                            <td>
                                <el-input 
                                    v-model="item.age"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td><el-input v-model="item.professionalTitle"></el-input></td>
                            <td><el-input v-model="item.professional"></el-input></td>
                            <td><el-input v-model="item.workTask"></el-input></td>
                            <td style="position:relative;">
                                <el-input 
                                    v-model="item.workingTime"
                                    @blur="validateNum">
                                </el-input>
                                <i class="el-icon-remove-outline" @click="handleTrRemove(2,index)"></i>
                            </td>
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
                            <td><el-input v-model="budgetForm.fundingSourcesNote"></el-input></td>
                        </tr>
                        <tr>
                            <td>1、省环保科研课题经费</td>
                            <td><el-input v-model="budgetForm.provincialBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.provincialCurrentBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.provincialNextBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.provincialAfterBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.provincialNoteBudget"></el-input></td>
                        </tr>
                        <tr>
                            <td>2、部门、地方配套</td>
                            <td><el-input v-model="budgetForm.departmentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.departmentCurrentBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.departmentNextBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.departmentAfterBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.departmentNoteBudget"></el-input></td>
                        </tr>
                        <tr>
                            <td>3、承担单位自筹</td>
                            <td><el-input v-model="budgetForm.bearBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.bearCurrentBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.bearNextBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.bearAfterBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.bearNoteBudget"></el-input></td>
                        </tr>
                        <tr >
                            <td>4、其他来源</td>
                            <td><el-input v-model="budgetForm.otherBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.otherCurrentBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.otherNextBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.otherAfterBudget" @input="computed"></el-input></td>
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
                            <td><el-input v-model="budgetForm.expenditureBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.currentYearExpenditureTotal" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.nextYearExpenditureTotal" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.afterYearExpenditureTotal" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.selfTotalExpenditures" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.totalExpendituresNote"></el-input></td>
                        </tr>
                        <tr>
                            <td>1、设备费</td>
                            <td><el-input v-model="budgetForm.equipmentBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentCurrentBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentNextBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentAfterBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentSupportingBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.equipmentNoteBudget"></el-input></td>
                        </tr>
                        <tr>
                            <td>2、材料费</td>
                            <td><el-input v-model="budgetForm.materialBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.materialCurrentBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.materialNextBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.materialAfterBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.materialSupportingBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.materialNoteBudget"></el-input></td>
                        </tr>
                        <tr>
                            <td>3、测试化验加工费</td>
                            <td><el-input v-model="budgetForm.testBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.testCurrentBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.testNextBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.testAfterBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.testSupportingBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.testNoteBudget"></el-input></td>
                        </tr>
                        <tr >
                            <td>4、燃料动力费</td>
                            <td><el-input v-model="budgetForm.fuelBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.fuelCurrentBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.fuelNextBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.fuelAfterBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.fuelSupportingBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.fuelNoteBudget"></el-input></td>
                        </tr>
                        <tr >
                            <td>5、会议差旅费</td>
                            <td><el-input v-model="budgetForm.mettingBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.mettingCurrentBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.mettingNextBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.mettingAfterBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.mettingSupportingBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.mettingNoteBudget" @input="computed"></el-input></td>
                        </tr>
                        <tr >
                            <td>6、劳务费</td>
                            <td><el-input v-model="budgetForm.laborBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.laborCurrentBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.laborNextBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.laborAfterBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.laborSupportingBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.laborNoteBudget" @input="computed"></el-input></td>
                        </tr>
                        <tr >
                            <td>7、专家咨询费</td>
                            <td><el-input v-model="budgetForm.expertsBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.expertsCurrentBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.expertsNextBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.expertsAfterBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.expertsSupportingBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.expertsNoteBudget" @input="computed"></el-input></td>
                        </tr>
                        <tr >
                            <td><span>8、日常水、电、气、暖消耗等</span></td>
                            <td><el-input v-model="budgetForm.dailyBudget" readonly></el-input></td>
                            <td><el-input v-model="budgetForm.dailyCurrentBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.dailyNextBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.dailyAfterBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.dailySupportingBudget" @input="computed"></el-input></td>
                            <td><el-input v-model="budgetForm.dailyNoteBudget" @input="computed"></el-input></td>
                        </tr>
                        <tr class="file_tr">
                            <td>附件：</td>
                            <td class="file_td" colspan="6">
                                <input type="file" @change="getFile($event)">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <div class="btn_group">
                <el-button @click="handleSubmit">提交</el-button>
            </div>
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
    import ContractMessageBox from '@/components/contractManage/contractMessageBox'
    export default {
        inject: ["reload"],
        name: 'contractAdd',
        components: {
            messageBox: ContractMessageBox
        },
        data() {
            return {
                file: '',
                optGroup1: [],
                showForm: {
                    subjectCategory: '',
                    projectNo: '',
                    subjectName: '',
                    contractStartTime: '',
                    contractEndTime: '',
                    subjeceLeader: '',
                    subjectLeaderPhone: '',
                    subjectContact: '',
                    subjectContactPhone: '',
                    commitmentUnit: '',
                    commitmentUnitAddress: '',
                    commitmentUnitZip: '',
                    subjectSupervisorDepartment: '',
                    openBank: '',
                    openBankAccount: '',
                    email: '',
                    guaranteedUnits: '',
                    guaranteedUnitContact: '',
                    guaranteedContactPhone: '',
                    commissioningUnit: '',
                    legalRepresentativeEntrustingA: '',
                    commissionedUnitAddressA: '',
                    commissionedUnitZipA: '',
                    responsibilityUnitB: '',
                    responsibilityLegalRepresentativeB: '',
                    commitUnitAddressB: '',
                    commitUnitZipB: '',
                    commitUnitLeaderB: '',
                    commitunitLeadersPhoneB: '',
                    commitmentUnitEmailB: '',
                    guaranteedUnitC: '',
                    guaranteedUnitLeaderC: '',
                    guaranteedUnitZipC: '',
                    guaranteedUnitAddressC: '',
                    subjectSigningDescription: '',
                    subjectObjectivesResearch: '',
                    subjectAcceptanceAssessment: '',
                },
                progressForm: [{
                    contractId: 0,
                    time: '',
                    programContentAssessmentIndicators: ''
                }],
                unitForm: {
                    contractId: 0,
                    bearingUnits: '',
                    participatingUnits: '',
                    overseasCooperationUnits: '',
                    country: '',
                    leaderName: '',
                    unitName: '',
                    gender: '',
                    age: '',
                    professionalTitle: '',
                    professional: '',
                    workTask: '',
                    workingTime: ''
                },
                keyForm: [{
                    contractId: 0,
                    keyDevName: '',
                    unitName: '',
                    gender: '',
                    age: '',
                    professionalTitle: '',
                    professional: '',
                    workTask: '',
                    workingTime: ''
                }],
                budgetForm: {
                    contractId: '',
                    currentYear: '',
                    nextYear: '',
                    afterYear: '',
                    fundingSourcesBudget: '0',
                    currentYearSourceTotal: '0',
                    nextYearSourceTotal: '0',
                    afterYearSourceTotal: '0',
                    fundingSourcesNote: '',
                    provincialBudget: '0',
                    provincialCurrentBudget: '0',
                    provincialNextBudget: '0',
                    provincialAfterBudget: '0',
                    provincialNoteBudget: '',
                    departmentBudget: '0',
                    departmentCurrentBudget: '0',
                    departmentNextBudget: '0',
                    departmentAfterBudget: '0',
                    departmentNoteBudget: '',
                    bearBudget: '0',
                    bearCurrentBudget: '0',
                    bearNextBudget: '0',
                    bearAfterBudget: '0',
                    bearNoteBudget: '',
                    otherBudget: '0',
                    otherCurrentBudget: '0',
                    otherNextBudget: '0',
                    otherAfterBudget: '0',
                    otherNoteBudget: '',
                    expenditureBudget: '0',
                    currentYearExpenditureTotal: '0',
                    nextYearExpenditureTotal: '0',
                    afterYearExpenditureTotal: '0',
                    selfTotalExpenditures: '0',
                    totalExpendituresNote: '',
                    equipmentBudget: '0',
                    equipmentCurrentBudget: '0',
                    equipmentNextBudget: '0',
                    equipmentAfterBudget: '0',
                    equipmentSupportingBudget: '0',
                    equipmentNoteBudget: '',
                    materialBudget: '0',
                    materialCurrentBudget: '0',
                    materialNextBudget: '0',
                    materialAfterBudget: '0',
                    materialSupportingBudget: '0',
                    materialNoteBudget: '',
                    testBudget: '0',
                    testCurrentBudget: '0',
                    testNextBudget: '0',
                    testAfterBudget: '0',
                    testSupportingBudget: '0',
                    testNoteBudget: '',
                    fuelBudget: '0',
                    fuelCurrentBudget: '0',
                    fuelNextBudget: '0',
                    fuelAfterBudget: '0',
                    fuelSupportingBudget: '0',
                    fuelNoteBudget: '',
                    mettingBudget: '0',
                    mettingCurrentBudget: '0',
                    mettingNextBudget: '0',
                    mettingAfterBudget: '0',
                    mettingSupportingBudget: '0',
                    mettingNoteBudget: '',
                    laborBudget: '0',
                    laborCurrentBudget: '0',
                    laborNextBudget: '0',
                    laborAfterBudget: '0',
                    laborSupportingBudget: '0',
                    laborNoteBudget: '',
                    expertsBudget: '0',
                    expertsCurrentBudget: '0',
                    expertsNextBudget: '0',
                    expertsAfterBudget: '0',
                    expertsSupportingBudget: '0',
                    expertsNoteBudget: '',
                    dailyBudget: '0',
                    dailyCurrentBudget: '0',
                    dailyNextBudget: '0',
                    dailyAfterBudget: '0',
                    dailySupportingBudget: '0',
                    dailyNoteBudget: ''
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
                    type: type,
                    callback: action => {}
                });
            },
            // 手机验证
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
            // 邮编验证
            validatePostal(event) {
                let _event = event.srcElement || event.target,
                    val = _event.value,
                    validatePostal = this.$validate.validatePostal(val);
                if(validatePostal) {
                    this.alertInfo(validatePostal,"warning");
                    _event.value = "";
                    return false;
                }
            },
            // 邮箱验证
            validateEmail(event) {
                let _event = event.srcElement || event.target,
                    val = _event.value,
                    validateEmail = this.$validate.validateEmail(val);
                if(validateEmail) {
                    this.alertInfo(validateEmail,"warning");
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
            // 计算
            computed() {
                let _computed = () => {
                    // 课题经费来源预算
                    // 省环保科研课题经费
                    this.budgetForm.provincialBudget = (parseFloat(this.budgetForm.provincialCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.provincialNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.provincialAfterBudget) * 10000) 
                                                        / 10000;
                    // 部门、地方配套
                    this.budgetForm.departmentBudget = (parseFloat(this.budgetForm.departmentCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.departmentNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.departmentAfterBudget) * 10000) 
                                                        / 10000;
                    // 承担单位自筹
                    this.budgetForm.bearBudget = (parseFloat(this.budgetForm.bearCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.bearNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.bearAfterBudget) * 10000) 
                                                        / 10000;
                    // 其他来源
                    this.budgetForm.otherBudget = (parseFloat(this.budgetForm.otherCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.otherNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.otherAfterBudget) * 10000) 
                                                        / 10000;
                    // 今年
                    this.budgetForm.currentYearSourceTotal = (parseFloat(this.budgetForm.provincialCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.departmentCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.bearCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.otherCurrentBudget) * 10000) 
                                                        / 10000;
                    // 明年
                    this.budgetForm.nextYearSourceTotal = (parseFloat(this.budgetForm.provincialNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.departmentNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.bearNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.otherNextBudget) * 10000) 
                                                        / 10000;
                    // 后年
                    this.budgetForm.afterYearSourceTotal = (parseFloat(this.budgetForm.provincialAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.departmentAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.bearAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.otherAfterBudget) * 10000) 
                                                        / 10000;
                    // 合计
                    this.budgetForm.fundingSourcesBudget = (parseFloat(this.budgetForm.currentYearSourceTotal) * 10000
                                                        + parseFloat(this.budgetForm.nextYearSourceTotal) * 10000
                                                        + parseFloat(this.budgetForm.afterYearSourceTotal) * 10000) 
                                                        / 10000;
                    // 课题总经费支出预算
                    // 设备费
                    this.budgetForm.equipmentBudget = (parseFloat(this.budgetForm.equipmentCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.equipmentNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.equipmentAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.equipmentSupportingBudget) * 10000) 
                                                        / 10000;
                    // 材料费
                    this.budgetForm.materialBudget = (parseFloat(this.budgetForm.materialCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.materialNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.materialAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.materialSupportingBudget) * 10000) 
                                                        / 10000;
                    // 测试化验加工费
                    this.budgetForm.testBudget = (parseFloat(this.budgetForm.testCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.testNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.testAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.testSupportingBudget) * 10000) 
                                                        / 10000;
                    // 燃料动力费
                    this.budgetForm.fuelBudget = (parseFloat(this.budgetForm.fuelCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.fuelNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.fuelAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.fuelSupportingBudget) * 10000) 
                                                        / 10000;
                    // 会议差旅费
                    this.budgetForm.mettingBudget = (parseFloat(this.budgetForm.mettingCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.mettingNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.mettingAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.mettingSupportingBudget) * 10000) 
                                                        / 10000;
                    // 劳务费
                    this.budgetForm.laborBudget = (parseFloat(this.budgetForm.laborCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.laborNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.laborAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.laborSupportingBudget) * 10000) 
                                                        / 10000;
                    // 专家咨询费
                    this.budgetForm.expertsBudget = (parseFloat(this.budgetForm.expertsCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.expertsNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.expertsAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.expertsSupportingBudget) * 10000) 
                                                        / 10000;
                    // 日常水、电、气、暖消耗等
                    this.budgetForm.dailyBudget = (parseFloat(this.budgetForm.dailyCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.dailyNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.dailyAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.dailySupportingBudget) * 10000) 
                                                        / 10000;
                    // 今年
                    this.budgetForm.currentYearExpenditureTotal = (parseFloat(this.budgetForm.equipmentCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.materialCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.testCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.fuelCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.mettingCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.laborCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.expertsCurrentBudget) * 10000
                                                        + parseFloat(this.budgetForm.dailyCurrentBudget) * 10000) 
                                                        / 10000;
                    // 明年
                    this.budgetForm.nextYearExpenditureTotal = (parseFloat(this.budgetForm.equipmentNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.materialNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.testNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.fuelNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.mettingNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.laborNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.expertsNextBudget) * 10000
                                                        + parseFloat(this.budgetForm.dailyNextBudget) * 10000) 
                                                        / 10000;
                    // 后年
                    this.budgetForm.afterYearExpenditureTotal = (parseFloat(this.budgetForm.equipmentAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.materialAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.testAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.fuelAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.mettingAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.laborAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.expertsAfterBudget) * 10000
                                                        + parseFloat(this.budgetForm.dailyAfterBudget) * 10000) 
                                                        / 10000;
                    // 自筹配套经费
                    this.budgetForm.selfTotalExpenditures = (parseFloat(this.budgetForm.equipmentSupportingBudget) * 10000
                                                        + parseFloat(this.budgetForm.materialSupportingBudget) * 10000
                                                        + parseFloat(this.budgetForm.testSupportingBudget) * 10000
                                                        + parseFloat(this.budgetForm.fuelSupportingBudget) * 10000
                                                        + parseFloat(this.budgetForm.mettingSupportingBudget) * 10000
                                                        + parseFloat(this.budgetForm.laborSupportingBudget) * 10000
                                                        + parseFloat(this.budgetForm.expertsSupportingBudget) * 10000
                                                        + parseFloat(this.budgetForm.dailySupportingBudget) * 10000) 
                                                        / 10000;
                    // 和计
                    this.budgetForm.expenditureBudget = (parseFloat(this.budgetForm.currentYearExpenditureTotal) * 10000
                                                        + parseFloat(this.budgetForm.nextYearExpenditureTotal) * 10000
                                                        + parseFloat(this.budgetForm.afterYearExpenditureTotal) * 10000
                                                        + parseFloat(this.budgetForm.selfTotalExpenditures) * 10000) 
                                                        / 10000;
                }
                for(let i in this.budgetForm) {
                    if(i == "fundingSourcesNote" || i == "provincialNoteBudget" || i == "departmentNoteBudget" || i == "bearNoteBudget" || i == "otherNoteBudget" || i == "totalExpendituresNote" || i == "equipmentNoteBudget" || i == "materialNoteBudget" || i == "testNoteBudget" || i == "fuelNoteBudget" || i == "mettingNoteBudget" || i == "laborSupportingBudget" || i == "expertsNoteBudget" || i == "dailyNoteBudget" || i == "laborNoteBudget") {
                        continue;
                    }
                    let str = this.budgetForm[i] + "",
                        code = str.charCodeAt(0);
                    if(!str.trim() || (code <48 || code > 57) || (str != parseFloat(str))) {
                        this.budgetForm[i] = 0;
                        _computed();
                        return false;
                    }
                }
                _computed();
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
                this.file = event.target.files[0];
            },
            // 多行操作
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
                        keyDevName: '',
                        unitName: '',
                        gender: '',
                        age: '',
                        professionalTitle: '',
                        professional: '',
                        workTask: '',
                        workingTime: ''
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
                this.showForm.projectNo = this.messageBoxData.projectNo;
                this.showForm.subjectName = this.messageBoxData.subjectName;
                this.showForm.subjeceLeader = this.messageBoxData.subjectLeader;
                this.showForm.subjectLeaderPhone = this.messageBoxData.leaderContact;
            },
            // 页面操作
            handleSubmit() {
                // 非空验证
                let obj = {};
                Object.assign(obj,this.showForm);
                Object.assign(obj,this.unitForm);
                console.log(obj)
                for(let i in obj) {
                    let str = obj[i] + "";
                    if(!str.trim()) {
                        this.alertInfo("请将表格填写完整","warning");
                        return false;
                    }
                }
                let arr = [];
                arr.push(...this.progressForm);
                arr.push(...this.keyForm);
                console.log(arr)
                for(let i in arr) {
                    for(let j in arr[i]) {
                        let str = arr[i][j] + "";
                        if(!str.trim()) {
                            this.alertInfo("请将表格填写完整","warning");
                            return false;
                        }
                    }
                }
                if(!this.file) {
                    this.alertInfo("请上传附件","warning");
                    return false;
                }
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
                    console.log(0)
                    console.log(res);
                    if(res.data.resultFlag == 0) {
                        // 给子表加id
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
                            console.log(1)
                            console.log(res);
                            if(res.data.resultFlag == 0) {
                                // 子表二
                                this.axios({
                                    url: 'http://192.168.0.80:8087/environment/contract/subject_participa_unit/insertInfo',
                                    method: 'post',
                                    data: this.unitForm
                                }).then((res) => {
                                    console.log(2)
                                    console.log(res);
                                    if(res.data.resultFlag == 0) {
                                        // 子表三
                                        this.axios({
                                            url: 'http://192.168.0.80:8087/environment/contract/keydev/insertKeyDev',
                                            method: 'post',
                                            data: this.keyForm
                                        }).then((res) => {
                                            console.log(3)
                                            console.log(res);
                                            if(res.data.resultFlag == 0) {
                                                // 子表四
                                                this.axios({
                                                    url: 'http://192.168.0.80:8087/environment/contract/subjectfundbudget/insertInfo',
                                                    method: 'post',
                                                    data: this.budgetForm
                                                }).then((res) => {
                                                    console.log(4)
                                                    console.log(res);
                                                    if(res.data.resultFlag == 0) {
                                                        // 附件
                                                        let formData = new FormData();
                                                            formData.append('cid',id);
                                                            formData.append('file',this.file);
                                                        this.axios({
                                                            url: 'http://192.168.0.80:8087/environment/contract/contractFileUpload',
                                                            method: 'post',
                                                            data: formData,
                                                            contentType: false,
                                                            processData: false,
                                                            usecredensives: true
                                                        }).then((res) => {
                                                            loading.close();
                                                            console.log(res);
                                                            if(res.data.resultFlag == 0) {
                                                                this.$alert('提交成功','提示', {
                                                                    confirmButtonText: '确定',
                                                                    type: 'success',
                                                                    callback: action => {
                                                                        // this.reload();
                                                                        document.querySelector(".is-active").nextSibling.click();
                                                                    }
                                                                });
                                                            }else {  
                                                                this.alertInfo("提交失败","warning");
                                                            }
                                                        }).catch(() => {
                                                            loading.close();
                                                            this.alertInfo("提交失败","warning");
                                                        })
                                                    }else {
                                                        loading.close();
                                                        this.alertInfo("提交失败","warning");
                                                    }
                                                }).catch(() => {
                                                    loading.close();
                                                    this.alertInfo("提交失败","warning");
                                                })
                                            }else {
                                                loading.close();
                                                this.alertInfo("提交失败","warning");
                                            }
                                        }).catch(() => {
                                            loading.close();
                                            this.alertInfo("提交失败","warning");
                                        })
                                    }else {
                                        loading.close();
                                        this.alertInfo("提交失败","warning");
                                    }
                                }).catch(() => {
                                    loading.close();
                                    this.alertInfo("提交失败","warning");
                                })
                            }else {
                                loading.close();
                                this.alertInfo("提交失败","warning");
                            }
                        }).catch(() => {
                            loading.close();
                            this.alertInfo("提交失败","warning");
                        })
                    }else {
                        loading.close();
                        this.alertInfo("提交失败","warning");
                    }
                }).catch(() => {
                    loading.close();
                    this.alertInfo("提交失败","warning");
                })
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
            })
        },
        mounted() {
            // 获取本地年份
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
    #contractAdd {
        .showForm {
            margin-bottom: 30px;
            table.form_table,
            table.form_table1,
            table.form_table2 {
                min-width: 1000px;
                width: 65.4%;
                thead {
                    th {
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
            .el-textarea {
                .el-textarea__inner {
                    padding: 10px;
                    resize: none;
                }
            }
            .el-date-editor {
                width: 100%;
                .el-input__inner {
                    width: 100%;
                }
            }
            .el-select {
                width: 100%;
            }
        }
    }
</style>
