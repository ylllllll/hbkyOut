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
                            <td>承担单位（乙方）</td>
                            <td>
                                <el-input v-model="showForm.responsibilityUnitB"></el-input>
                            </td>
                            <td>承担单位法定代表人</td>
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
                            <td colspan="3">计划内容及考核指标</td>
                            <!-- <i class="el-icon-circle-plus-outline"></i> -->
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
                // 主表部分
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/contract/addContractInfo',
                    method: 'post',
                    data: this.showForm
                }).then((res) => {
                    console.log(res);
                    loading.close();
                    let id = res.data.data;
                    // 子表一
                    this.axios({
                        url: 'http://192.168.0.80:8087/environment/contentindicators/insertCI',
                        method: 'post',
                        data: [{
                            "contractId": id,
                            "programContentAssessmentIndicators": '123456',
                            "time": '654321'
                        },{
                            "contractId": id,
                            "programContentAssessmentIndicators": '1234567',
                            "time": '6543210'
                        }]
                    }).then((res) => {
                        console.log(res);
                        // 子表二
                        this.axios({
                            url: 'http://192.168.0.80:8087/environment/contract/subjectkeydev/insertInfo',
                            method: 'post',
                            data: {
                                "age": 0,
                                "bearingUnits": "string",
                                "contractId": id,
                                "country": "string",
                                "gender": "男",
                                "isLeader": "string",
                                "keyResearchDevelopers": "string",
                                "leaderName": "string",
                                "overseasCooperationUnits": "string",
                                "participatingUnits": "string",
                                "professional": "string",
                                "professionalTitle": "string",
                                "unitName": "string",
                                "workTask": "string",
                                "workingTime": "string"
                            }
                        }).then((res) => {
                            console.log(res);
                            // 字表三
                            this.axios({
                                url: 'http://192.168.0.80:8087/environment/contract/subjectfundbudget/insertInfo',
                                method: 'post',
                                data: {
                                    "afterYear": "2021",
                                    "bearAfterBudget": 0,
                                    "bearBudget": 0,
                                    "bearCurrentBudget": 0,
                                    "bearNextBudget": 0,
                                    "bearNoteBudget": "1111",
                                    "contractId": id,
                                    "currentYear": "2019",
                                    "dailyAfterBudget": 0,
                                    "dailyBudget": 0,
                                    "dailyCurrentBudget": 0,
                                    "dailyNextBudget": 0,
                                    "dailyNoteBudget": "1111",
                                    "dailySupportingBudget": 0,
                                    "departmentAfterBudget": 0,
                                    "departmentBudget": 0,
                                    "departmentCurrentBudget": 0,
                                    "departmentNextBudget": 0,
                                    "departmentNoteBudget": "1",
                                    "equipmentAfterBudget": 0,
                                    "equipmentBudget": 0,
                                    "equipmentCurrentBudget": 0,
                                    "equipmentNextBudget": 0,
                                    "equipmentNoteBudget": "123",
                                    "equipmentSupportingBudget": 0,
                                    "expenditureBudget": 0,
                                    "expertsAfterBudget": 0,
                                    "expertsBudget": 0,
                                    "expertsCurrentBudget": 0,
                                    "expertsNextBudget": 0,
                                    "expertsNoteBudget": "123",
                                    "expertsSupportingBudget": 0,
                                    "fuelAfterBudget": 0,
                                    "fuelBudget": 0,
                                    "fuelCurrentBudget": 0,
                                    "fuelNextBudget": 0,
                                    "fuelNoteBudget": "123",
                                    "fuelSupportingBudget": 0,
                                    "fundingSourcesBudget": 0,
                                    "id": 1,
                                    "laborAfterBudget": 0,
                                    "laborBudget": 0,
                                    "laborCurrentBudget": 0,
                                    "laborNextBudget": 0,
                                    "laborNoteBudget": "123",
                                    "laborSupportingBudget": 0,
                                    "materialAfterBudget": 0,
                                    "materialBudget": 0,
                                    "materialCurrentBudget": 0,
                                    "materialNextBudget": 0,
                                    "materialNoteBudget": "123",
                                    "materialSupportingBudget": 0,
                                    "mettingAfterBudget": 0,
                                    "mettingBudget": 0,
                                    "mettingCurrentBudget": 0,
                                    "mettingNextBudget": 0,
                                    "mettingNoteBudget": "123",
                                    "mettingSupportingBudget": 0,
                                    "nextYear": "2020",
                                    "note": "123",
                                    "otherAfterBudget": 0,
                                    "otherBudget": 0,
                                    "otherCurrentBudget": 0,
                                    "otherNextBudget": 0,
                                    "otherNoteBudget": "123",
                                    "provincialAfterBudget": 0,
                                    "provincialBudget": 0,
                                    "provincialCurrentBudget": 0,
                                    "provincialNextBudget": 0,
                                    "provincialNoteBudget": "111",
                                    "testAfterBudget": 0,
                                    "testBudget": 0,
                                    "testCurrentBudget": "111",
                                    "testNextBudget": 0,
                                    "testNoteBudget": "111",
                                    "testSupportingBudget": 0
                                }
                            }).then((res) => {
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
                            })
                        })
                    })




                    
                }).catch(() => {
                    // this.$alert('提交失败', '提示', {
                    //     confirmButtonText: '确定',
                    //     type: 'warning',
                    //     callback: action => {}
                    // });
                })
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
            .form_table1 {
                tr {
                    position: relative;
                    i {
                        position: absolute;
                        font-size: 30px;
                        top: 10px;
                        right: 0px;
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
