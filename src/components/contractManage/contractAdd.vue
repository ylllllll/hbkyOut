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
                            <td>合同开始时间，精确到月：</td>
                            <td>
                                <el-input v-model="showForm.contractStartTime"></el-input>
                            </td>
                            <td>合同结束时间，精确到月：</td>
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
                            <td>承担单位（乙方）</td>
                            <td>
                                <el-input 
                                 v-model="showForm.responsibilityUnitB"
                                 :disabled="true">
                                </el-input>
                            </td>
                            <td>承担单位法定代表人</td>
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
                                <el-input type="textarea" v-model="showForm.subjectSigningDescription"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题的目标和主要研究内容：</td>
                            <td colspan="3">
                                <el-input type="textarea" v-model="showForm.subjectObjectivesResearch"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题验收内容和考核指标：</td>
                            <td colspan="3">
                                <el-input type="textarea" v-model="showForm.subjectAcceptanceAssessment"></el-input>
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
                        <tr v-for="(item,index) in progressForm">
                            <td><el-input v-model="progressForm[index].time"></el-input></td>
                            <td><el-input v-model="progressForm[index].programContentAssessmentIndicators"></el-input></td>
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
                <table class="form_table1" :model="unitForm">
                    <tbody>
                        <tr>
                            <td colspan="9" style="text-align:left;padding-left:10px;background-color:#fff;">课题负责人：</td>
                        </tr>
                        <tr>
                           <td style="background-color:#e5f3ff;"><span>姓名</span></td>
                           <td style="background-color:#e5f3ff;"><span>所在单位</span></td>
                           <td style="background-color:#e5f3ff;"><span>性别</span></td>
                           <td style="background-color:#e5f3ff;"><span>年龄</span></td>
                           <td style="background-color:#e5f3ff;"><span>职称</span></td>
                           <td style="background-color:#e5f3ff;"><span>从事专业</span></td>
                           <td style="background-color:#e5f3ff;"><span>本课题中承担工作</span></td>
                           <td style="background-color:#e5f3ff;"><span>为本课题工作时间（%）</span></td>
                           <td style="background-color:#e5f3ff;"><span>本人签名</span></td>
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
                           <td><el-input v-model="unitForm.name"></el-input></td>
                       </tr>
                       <tr>
                           <td colspan="9" style="text-align:left;padding-left:10px;">主要研发人员：</td>
                       </tr>
                       <tr>
                           <td><el-input v-model="unitForm.keyResearchDevelopers"></el-input></td>
                           <td><el-input v-model="unitForm.keyResearchDevelopers"></el-input></td>
                           <td><el-input v-model="unitForm.keyResearchDevelopers"></el-input></td>
                           <td><el-input v-model="unitForm.keyResearchDevelopers"></el-input></td>
                           <td><el-input v-model="unitForm.keyResearchDevelopers"></el-input></td>
                           <td><el-input v-model="unitForm.keyResearchDevelopers"></el-input></td>
                           <td><el-input v-model="unitForm.keyResearchDevelopers"></el-input></td>
                           <td><el-input v-model="unitForm.keyResearchDevelopers"></el-input></td>
                           <td><el-input v-model="unitForm.keyResearchDevelopers"></el-input></td>
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
                            <td>2018年</td>
                            <td>2019年</td>
                            <td>2020年</td>
                            <td>备注</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">合计</td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                        </tr>
                        <tr>
                            <td>1、省环保科研课题经费</td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                        </tr>
                        <tr>
                            <td>2、部门、地方配套</td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                        </tr>
                        <tr>
                            <td>3、承担单位自筹</td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                        </tr>
                        <tr >
                            <td>4、其他来源</td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
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
                            <td>预算数</td>
                            <td>2018年</td>
                            <td>2019年</td>
                            <td>2020年</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">合计</td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                        </tr>
                        <tr>
                            <td>1、设备费</td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                        </tr>
                        <tr>
                            <td>2、材料费</td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                        </tr>
                        <tr>
                            <td>3、测试化验加工费</td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                        </tr>
                        <tr >
                            <td>4、燃料动力费</td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                        </tr>
                        <tr >
                            <td>5、会议差旅费</td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                        </tr>
                        <tr >
                            <td>6、劳务费</td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                        </tr>
                        <tr >
                            <td>7、专家咨询费</td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                        </tr>
                        <tr >
                            <td><span>8、日常水、电、气、暖消耗等</span></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
                            <td><el-input v-model="budgetForm.money"></el-input></td>
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
    data(){
        return{
            showForm: {
                subjectCategory:'',
                projectNo:'',
                subjectName:'',
                contractStartTime:'',
                contractEndTime:'',
                subjeceLeader:'',
                subjectLeaderPhone:'',
                subjectContact:'',
                subjectContactPhone:'',
                commitmentUnit:'',
                commitmentUnitAddress:'',
                commitmentUnitZip:'',
                subjectSupervisorDepartment:'',
                openBank:'',
                openBankAccount:'',
                email:'',
                guaranteedUnits:'',
                guaranteedUnitContact:'',
                guaranteedContactPhone:'',
                commissioningUnit:'',
                legalRepresentativeEntrustingA:'',
                commissionedUnitAddressA:'',
                commissionedUnitZipA:'',
                responsibilityUnitB:'',
                responsibilityLegalRepresentativeB:'',
                commitUnitAddressB:'',
                commitUnitZipB:'',
                commitUnitLeaderB:'',
                commitunitLeadersPhoneB:'',
                commitmentUnitEmailB:'',
                guaranteedUnitC:'',
                guaranteedUnitLeaderC:'',
                guaranteedUnitZipC:'',
                guaranteedUnitAddressC:'',
                subjectSigningDescription:'',
                subjectObjectivesResearch:'',
                subjectAcceptanceAssessment:'',
            },
            progressForm: [{
                    id: 1,
                    contractId: 1,
                    time: "2018-8到2018-12",
                    programContentAssessmentIndicators: "让法国人tyre"
                },
                {
                    id: 2,
                    contractId: 2,
                    time: "2018-8到2019-1",
                    programContentAssessmentIndicators: "现代风格的人体感染"
                }],
            unitForm: {
                bearingUnits:'',
                participatingUnits:'',
                overseasCooperationUnits:'',
                country:'',
                leaderName:'',
                unitName:'',
                gender:'',
                age:'',
                professionalTitle:'',
                professional:'',
                workTask:'',
                workingTime:'',
                name:'',
            },
            budgetForm: {
                money: ''
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
            setTimeout(() => {
                loading.close();
                this.$alert('提交成功', '提示', {
                    confirmButtonText: '确定',
                    type: 'success',
                    callback: action => {}
                });
            },2000);
        },
        handleBack() {
            this.$router.go(-1);
        }
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
