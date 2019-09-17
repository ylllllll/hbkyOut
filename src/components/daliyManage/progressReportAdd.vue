<template>
    <div id="progressReportAdd">
        <div class="showForm">
            <el-form ref="showForm" >
                <table class="form_table" :model="showForm">
                    <thead>
                        <tr><th colspan="4">江苏省环保科研课题进展情况表</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题名称：</td>
                            <td>
                                <el-input v-model="showForm.subjectName"></el-input>
                            </td>
                            <td>课题编号：</td>
                            <td>
                                <el-input v-model="showForm.projectNo"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位：</td>
                            <td>
                                <el-input v-model="showForm.bearerUnit"></el-input>
                            </td>
                            <td>填报日期：</td>
                            <td>
                                <el-date-picker
                                    v-model="showForm.fillTime"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </td>
                        </tr>
                        <tr>
                            <td>项目负责人：</td>
                            <td>
                                <el-input v-model="showForm.projectLeader"></el-input>
                            </td>
                            <td>项目负责人联系电话：</td>
                            <td>
                                <el-input v-model="showForm.projectLeaderPhone"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>主要联系人：</td>
                            <td>
                                <el-input v-model="showForm.primaryContacts"></el-input>
                            </td>
                            <td>主要联系人联系电话：</td>
                            <td>
                                <el-input v-model="showForm.primaryContactsPhone">
                            </el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>进展情况：</td>
                            <td colspan="3">
                                <el-radio v-model="showForm.progress" label="45">超前</el-radio>
                                <el-radio v-model="showForm.progress" label="46">正常</el-radio>
                                <el-radio v-model="showForm.progress" label="47">滞后</el-radio>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>课题进展附件：</td>
                            <td class="file_td" colspan="3">
                                <input type="file" @change="getFile($event,4)" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- 一、合同要求研发任务 -->
                <table class="form_table1" :model="taskForm">
                    <thead>
                        <tr>
                            <th colspan="2">一、合同要求研发任务</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="2" style="position:relative;">
                                合同要求研发任务共{{ taskForm.length }}项，具体如下：
                                <i class="el-icon-circle-plus-outline" @click="handleTrAdd(1)"></i>
                            </td>
                        </tr>
                        <tr v-for="(item,index) in taskForm" :key="'a' + index">
                            <td style="width:5%">{{ index + 1 }}</td>
                            <td style="position:relative;" class="align_left">
                                <el-input v-model="taskForm[index].requireStoddTaskContent"></el-input>
                                <i class="el-icon-remove-outline" @click="handleTrRemove(1,index)"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- 二、目前进展情况 -->
                <table class="form_table1" :model="progressForm">
                    <thead>
                        <tr>
                            <th colspan="2">二、目前进展情况</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="2" style="position:relative;">
                                已完成研发任务{{ progressForm.length }}项，完成工作进度
                                <el-input class="_inline2" v-model="showForm.progressCompletedPercentage"></el-input>
                                %。
                                <i class="el-icon-circle-plus-outline" @click="handleTrAdd(2)"></i>
                            </td>
                        </tr>
                        <tr v-for="(item,index) in progressForm" :key="'b' + index">
                            <td style="width:5%">{{ index + 1 }}</td>
                            <td style="position:relative;" class="align_left">
                                <el-input v-model="progressForm[index].currentProgressContent"></el-input>
                                <i class="el-icon-remove-outline" @click="handleTrRemove(2,index)"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- 三、使用经费情况 -->
                <table class="form_table1" :model="progressForm">
                    <thead>
                        <tr>
                            <th colspan="4">三、使用经费情况</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="4" style="background-color:#fff;">
                                已到位课题总经费
                                <el-input class="_inline" v-model="showForm.totalFundsInplace"></el-input>
                                万元；已使用课题经费
                                <el-input class="_inline" v-model="showForm.projectFundsUsed"></el-input>
                                万元，占总经费
                                <el-input class="_inline" v-model="showForm.totalFunding"></el-input>
                                %。
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                其中：已使用省环保课题经费
                                <el-input class="_inline" v-model="showForm.provincialEnvironmentalFundsUsed"></el-input>
                                万元，占省环保课题经费
                                <el-input class="_inline" v-model="showForm.provincialEnvironmentalFundsPercent"></el-input>
                                %。
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td style="width:25%;background-color:#e5f3ff;">进度经费使用情况附件：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,2)" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- 四、课题实施中存在的主要问题 -->
                <table class="form_table1" :model="problemForm" style="margin-top:10px;">
                    <tbody>
                        <tr>
                            <td colspan="4" style="position:relative;" class="td_head">
                                四、课题实施中存在的主要问题（研究遇到的困难及技术、方案、人员等变动情况）
                                <i class="el-icon-circle-plus-outline" @click="handleTrAdd(3)"></i>
                            </td>
                        </tr>
                        <tr v-for="(item,index) in problemForm" :key="'c' + index">
                            <td style="width:5%">{{ index + 1 }}</td>
                            <td colspan="3" style="position:relative;" class="align_left">
                                <el-input v-model="problemForm[index].mainProblems"></el-input>
                                <i class="el-icon-remove-outline" @click="handleTrRemove(3,index)"></i>
                            </td>
                        </tr>
                        <!-- 五、下一步研发工作安排 -->
                        <tr>
                            <td colspan="4" style="position:relative;" class="td_head">
                                五、下一步研发工作安排
                                <i class="el-icon-circle-plus-outline" @click="handleTrAdd(4)"></i>
                            </td>
                        </tr>
                        <tr v-for="(item,index) in planForm" :key="'d' + index">
                            <td style="width:5%">{{ index + 1 }}</td>
                            <td colspan="3" style="position:relative;" class="align_left">
                                <el-input v-model="planForm[index].nextWorkPlan"></el-input>
                                <i class="el-icon-remove-outline" @click="handleTrRemove(4,index)"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- 六、课题预计完成时间 -->
                <table class="form_table" :model="showForm">
                    <thead>
                        <tr><th colspan="4">六、课题预计完成时间</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>合同约定结题时间：</td>
                            <td>
                                <el-date-picker
                                    v-model="showForm.contractAgreedClosingTime"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </td>
                            <td>预计申请课题验收时间：</td>
                            <td>
                                <el-date-picker
                                    v-model="showForm.estimatedAcceptanceTime"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </td>
                        </tr>
                        <tr>
                            <td>能否按合同约定时间完成课题：</td>
                            <td colspan="3" style="height:50px;">
                                <el-radio v-model="showForm.isComplateContract" label="0" style="line-height:28px;">能</el-radio>
                                <el-radio v-model="showForm.isComplateContract" label="1" style="line-height:28px;">不能</el-radio>
                            </td>
                        </tr>
                        <!-- 七、单位审核意见 -->
                        <tr>
                            <td colspan="4" class="td_head"> 七、单位审核意见</td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <el-input 
                                    v-model="showForm.unitAuditComments"
                                    :autosize="{ minRows:8 }"
                                    type="textarea">
                                </el-input>
                            </td>
                        </tr>
                        <!-- 附件 -->
                        <tr class="file_tr">
                            <td>专家意见附件：</td>
                            <td class="file_td" colspan="3">
                                <input type="file" @change="getFile($event,1)" />
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>开题报告附件：</td>
                            <td class="file_td" colspan="3">
                                <input type="file" @change="getFile($event,3)" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <div class="btn_group">
                <el-button @click="handleSubmit">提交</el-button>
                <el-button @click="handleBack">返回</el-button>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'progressReportAdd',
        data() {
            return {
                radio: '',
                showForm: {
                    // 主表
                    subjectName: '17',
                    projectNo: '18',
                    bearerUnit: '1',
                    fillTime: '',
                    projectLeader: '13',
                    projectLeaderPhone: '14',
                    primaryContacts: '8',
                    primaryContactsPhone: '9',
                    progress: '45',
                    // 进展情况完成比
                    progressCompletedPercentage: '28',
                    // 使用经费情况
                    totalFundsInplace: '21',
                    projectFundsUsed: '12',
                    totalFunding: '20',
                    provincialEnvironmentalFundsUsed: '16',
                    provincialEnvironmentalFundsPercent: '15',
                    // 课题预计完成时间
                    contractAgreedClosingTime: '',
                    isComplateContract: '0',
                    estimatedAcceptanceTime: '',
                    // 单位核审意见
                    unitAuditComments: '22'
                },
                taskForm: [{
                    progressId: 0,
                    requireStoddTaskContent: ''
                }],
                progressForm: [{
                    progressId: 0,
                    currentProgressContent: ''
                }],
                problemForm: [{
                    progressId: 0,
                    mainProblems: ''
                }],
                planForm: [{
                    progressId: 0,
                    nextWorkPlan: ''
                }],
                file: {
                    expertSuggestAnnex: '',
                    fundProgressAnnex: '',
                    openReportAnnex: '',
                    subjectProgressAnnex: ''
                },
                paramsData: {
                    id: this.$route.params.id
                }
            }
        },
        methods: {
            alertInfo(info,type) {
                this.$alert(info,'提示', {
                    confirmButtonText: '确定',
                    type: type,
                    callback: action => {}
                });
            },
            errorInfo() {
                this.$alert('提交失败','提示', {
                    confirmButtonText: '确定',
                    type: 'warning',
                    callback: action => {}
                });
            },
            successInfo() {
                this.$alert('提交成功','提示', {
                    confirmButtonText: '确定',
                    type: 'success',
                    callback: action => {
                        this.$router.go(-1);
                    }
                });
            },
            handleTrAdd(val) {
                if(val == 1) {
                    let item = {
                        progressId: 0,
                    requireStoddTaskContent: ''
                    };
                    this.taskForm.push(item);
                }else if(val == 2) {
                    let item = {
                        progressId: 0,
                        currentProgressContent: ''
                    };
                    this.progressForm.push(item);
                }else if(val == 3) {
                    let item = {
                        progressId: 0,
                        mainProblems: ''
                    };
                    this.problemForm.push(item);
                }else if(val == 4) {
                    let item = {
                        progressId: 0,
                        nextWorkPlan: ''
                    };
                    this.planForm.push(item);
                }
            },
            handleTrRemove(index,val) {
                if(index == 1) {
                    if(this.taskForm.length == 1) {
                        this.alertInfo("至少保留一条","warning");
                    }else {
                        this.taskForm.splice(val,1);
                    }
                }else if(index == 2) {
                    if(this.progressForm.length == 1) {
                        this.alertInfo("至少保留一条","warning");
                    }else {
                        this.progressForm.splice(val,1);
                    }
                }else if(index == 3) {
                    if(this.problemForm.length == 1) {
                        this.alertInfo("至少保留一条","warning");
                    }else {
                        this.problemForm.splice(val,1);
                    }
                }else if(index == 4) {
                    if(this.planForm.length == 1) {
                        this.alertInfo("至少保留一条","warning");
                    }else {
                        this.planForm.splice(val,1);
                    }
                }
            },
            getFile(event,index) {
                if(index == 1) {
                    this.file.expertSuggestAnnex = event.target.files[0];
                }else if(index == 2) {
                    this.file.fundProgressAnnex = event.target.files[0];
                }else if(index == 3) {
                    this.file.openReportAnnex = event.target.files[0];
                }else if(index == 4) {
                    this.file.subjectProgressAnnex = event.target.files[0];
                }
                console.log(this.file)
            },
            handleSubmit() {
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/progress/insertProgress',
                    method: 'post',
                    data: this.showForm
                }).then((res) => {
                    console.log(0)
                    console.log(res);
                    if(res.data.resultFlag == 0) {
                        let id = res.data.data;
                        for(let i in this.taskForm) {
                            this.taskForm[i].progressId = id;
                        }
                        for(let i in this.progressForm) {
                            this.progressForm[i].progressId = id;
                        }
                        for(let i in this.problemForm) {
                            this.problemForm[i].progressId = id;
                        }
                        for(let i in this.planForm) {
                            this.planForm[i].progressId = id;
                        }
                        // 一、合同要求研发任务
                        this.axios({
                            url: 'http://192.168.0.80:8087/environment/progress/insertCRDT',
                            method: 'post',
                            data: this.taskForm
                        }).then((res) => {
                            console.log(1)
                            console.log(res)
                            if(res.data.resultFlag == 0) {
                                // 二、目前进展情况
                                this.axios({
                                    url: 'http://192.168.0.80:8087/environment/progress/insertCP',
                                    method: 'post',
                                    data: this.progressForm
                                }).then((res) => {
                                    console.log(2)
                                    console.log(res);
                                    if(res.data.resultFlag == 0) {
                                        // 四、课题实施中存在的主要问题
                                        this.axios({
                                            url: 'http://192.168.0.80:8087/environment/progress/insertPMP',
                                            method: 'post',
                                            data: this.problemForm
                                        }).then((res) => {
                                            console.log(3)
                                            console.log(res);
                                            if(res.data.resultFlag == 0) {
                                                // 五、下一步研发工作安排
                                                this.axios({
                                                    url: 'http://192.168.0.80:8087/environment/progress/insertNWP',
                                                    method: 'post',
                                                    data: this.planForm
                                                }).then((res) => {
                                                    console.log(4)
                                                    console.log(res);
                                                    if(res.data.resultFlag == 0) {
                                                        // 附件
                                                        let formData = new FormData();
                                                        formData.append('pid',id);
                                                        formData.append('expertSuggestAnnex',this.file.expertSuggestAnnex);
                                                        formData.append('fundProgressAnnex',this.file.fundProgressAnnex);
                                                        formData.append('openReportAnnex',this.file.openReportAnnex);
                                                        formData.append('subjectProgressAnnex',this.file.subjectProgressAnnex);
                                                        this.axios({
                                                            url: 'http://192.168.0.80:8087/environment/progress/ProgressMultiUpload',
                                                            method: 'post',
                                                            data: formData
                                                        }).then((res) => {
                                                            loading.close();
                                                            console.log(5)
                                                            console.log(res);
                                                            if(res.data.resultFlag == 0) {
                                                                this.successInfo();
                                                            }else {
                                                                this.errorInfo();
                                                            }
                                                        }).catch(() => {
                                                            loading.close();
                                                            this.errorInfo();
                                                        })
                                                    }else {
                                                        loading.close();
                                                        this.errorInfo();
                                                    }
                                                }).catch(() => {
                                                    loading.close();
                                                    this.errorInfo();
                                                })
                                            }else {
                                                loading.close();
                                                this.errorInfo();
                                            }
                                        }).catch(() => {
                                            loading.close();
                                            this.errorInfo();
                                        })
                                    }else {
                                        loading.close();
                                        this.errorInfo();
                                    }
                                }).catch(() => {
                                    loading.close();
                                    this.errorInfo();
                                })
                            }else {
                                loading.close();
                                this.errorInfo();
                            }
                        }).catch(() => {
                            loading.close();
                            this.errorInfo();
                        })
                    }else {
                        loading.close();
                        this.errorInfo();
                    }
                }).catch(() => {
                    loading.close();
                    this.errorInfo();
                })
            },
            handleBack() {
                this.$router.go(-1);
            },
            autoAdd() {
                let taskFormFlag = true;
                for(let i in this.taskForm) {
                    if((this.taskForm[i].requireStoddTaskContent + "").match(/^[ ]*$/)) {
                        taskFormFlag = false;
                    }
                }
                if(taskFormFlag) {
                    this.taskForm.push({
                        progressId: 0,
                        requireStoddTaskContent: ''
                    });
                }

                let progressFormFlag = true;
                for(let i in this.progressForm) {
                    if((this.progressForm[i].currentProgressContent + "").match(/^[ ]*$/)) {
                        progressFormFlag = false;
                    }
                }
                if(progressFormFlag) {
                    this.progressForm.push({
                        progressId: 0,
                        currentProgressContent: ''
                    });
                }
                
                let problemFormFlag = true;
                for(let i in this.problemForm) {
                    if((this.problemForm[i].mainProblems + "").match(/^[ ]*$/)) {
                        problemFormFlag = false;
                    }
                }
                if(problemFormFlag) {
                    this.problemForm.push({
                        progressId: 0,
                        mainProblems: ''
                    });
                }

                let planFormFlag = true;
                for(let i in this.planForm) {
                    if((this.planForm[i].nextWorkPlan + "").match(/^[ ]*$/)) {
                        planFormFlag = false;
                    }
                }
                if(planFormFlag) {
                    this.planForm.push({
                        progressId: 0,
                        nextWorkPlan: ''
                    });
                }
            }
        }
    }
</script>

<style lang="less">
    #progressReportAdd{
        .showForm {
            margin-bottom: 30px;
            table.form_table,
            table.form_table1 {
                min-width: 1000px;
                width: 65.4%;
                .td_head {
                    font-weight: bold;
                    font-size: 18px;
                    background-color:#e5f3ff;
                    height: 50px;
                    text-align: center !important;
                }
                .el-textarea {
                    .el-textarea__inner {
                        padding: 10px;
                    }
                }
                thead {
                    th {
                        font-weight: bold;
                    }
                }
                @media screen and ( max-width: 1600px ) {
                    width: 87.4%;
                }
                .el-radio {
                    margin: 0 50px;
                }
                .el-date-editor {
                    width: 100%;
                    .el-input__inner {
                        width: 100%;
                    }
                }
                ._inline,._inline2 {
                    display: inline-block;
                    width: 40px;
                    height: 18px;
                    .el-input__inner {
                        height: 100%;
                        padding: 0 3px;
                        border-bottom: 1px solid #000;
                        border-radius: 0;
                    }
                }
                ._inline2 {
                    .el-input__inner {
                        background-color: #e5f3ff;
                    }
                }
                .el-textarea {
                    .el-textarea__inner {
                        resize: none;
                    }
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
                    .align_left {
                        .el-input {
                            .el-input__inner {
                                text-align: left;
                            }
                        }
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
