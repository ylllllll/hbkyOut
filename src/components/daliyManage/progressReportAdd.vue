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
                        <!-- 一、合同要求研发任务 -->
                        <tr class="item">
                            <td colspan="4">
                                <h4>一、合同要求研发任务</h4>
                                <p>合同要求研发任务共{{ taskForm.length - 1 }}项，具体如下：</p>
                                <ol>
                                    <li v-for="(item,index) in taskForm" :key="index">
                                        <span class="index">{{ index + 1 }}.</span>
                                        <el-input 
                                            v-model="taskForm[index].requireStoddTaskContent"
                                            :autosize="{ minRows:1 }"
                                            type="textarea"
                                            @input="autoAdd">
                                        </el-input>
                                    </li>
                                </ol>
                            </td>
                        </tr>
                        <!-- 二、目前进展情况 -->
                        <tr class="item">
                            <td colspan="4">
                                <h4>二、目前进展情况</h4>
                                <p>
                                    已完成研发任务{{ progressForm.length - 1}}项，完成工作进度
                                    <el-input class="_inline" v-model="showForm.progressCompletedPercentage"></el-input>
                                    %。
                                    </p>
                                <ol>
                                    <li v-for="(item,index) in progressForm" :key="index">
                                        <span class="index">{{ index + 1 }}.</span>
                                        <el-input 
                                            v-model="progressForm[index].currentProgressContent"
                                            :autosize="{ minRows:1 }"
                                            type="textarea"
                                            @input="autoAdd">
                                        </el-input>
                                    </li>
                                </ol>
                            </td>
                        </tr>
                        <!-- 三、使用经费情况 -->
                        <tr class="item">
                            <td colspan="4">
                                <h4>三、使用经费情况</h4>
                                <ol style="line-height:1.8;">
                                    <li>已到位课题总经费
                                        <el-input class="_inline" v-model="showForm.totalFundsInplace"></el-input>
                                        万元；已使用课题经费
                                        <el-input class="_inline" v-model="showForm.projectFundsUsed"></el-input>
                                        万元，占总经费
                                        <el-input class="_inline" v-model="showForm.totalFunding"></el-input>
                                        %。
                                    </li>
                                    <li>其中：已使用省环保课题经费
                                        <el-input class="_inline" v-model="showForm.provincialEnvironmentalFundsUsed"></el-input>
                                        万元，占省环保课题经费
                                        <el-input class="_inline" v-model="showForm.provincialEnvironmentalFundsPercent"></el-input>
                                        %。
                                    </li>
                                </ol>
                            </td>
                        </tr>
                        <!-- 四、课题实施中存在的主要问题 -->
                        <tr class="item">
                            <td colspan="4">
                                <h4>四、课题实施中存在的主要问题（研究遇到的困难及技术、方案、人员等变动情况）</h4>
                                <ol>
                                    <li v-for="(item,index) in problemForm" :key="index">
                                        <span class="index">{{ index + 1 }}.</span>
                                        <el-input 
                                            v-model="problemForm[index].mainProblems"
                                            :autosize="{ minRows:1 }"
                                            type="textarea"
                                            @input="autoAdd">
                                        </el-input>
                                    </li>
                                </ol>
                            </td>
                        </tr>
                        <!-- 五、下一步研发工作安排 -->
                        <tr class="item">
                            <td colspan="4">
                                <h4>五、下一步研发工作安排</h4>
                                <ol>
                                    <li v-for="(item,index) in planForm" :key="index">
                                        <span class="index">{{ index + 1 }}.</span>
                                        <el-input 
                                            v-model="planForm[index].nextWorkPlan"
                                            :autosize="{ minRows:1 }"
                                            type="textarea"
                                            @input="autoAdd">
                                        </el-input>
                                    </li>
                                </ol>
                            </td>
                        </tr>
                        <!-- 六、课题预计完成时间 -->
                        <tr class="item">
                            <td colspan="4">
                                <h4>六、课题预计完成时间</h4>
                                <ol style="line-height:1.8;">
                                    <li>
                                        1. 合同约定结题时间：
                                        <el-date-picker
                                            class="_inline_date"
                                            v-model="showForm.contractAgreedClosingTime"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择日期">
                                        </el-date-picker>
                                    </li>
                                    <li>
                                        2. 能否按合同约定时间完成课题？
                                        <el-radio v-model="showForm.isComplateContract" label="0" style="line-height:28px;">能</el-radio>
                                        <el-radio v-model="showForm.isComplateContract" label="1" style="line-height:28px;">不能</el-radio>
                                    </li>
                                    <li>
                                        3. 预计申请课题验收时间：
                                        <el-date-picker
                                            class="_inline_date"
                                            v-model="showForm.estimatedAcceptanceTime"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择日期">
                                        </el-date-picker>
                                    </li>
                                </ol>
                            </td>
                        </tr>
                        <!-- 七、单位审核意见 -->
                        <tr class="item">
                            <td colspan="4">
                                <h4>七、单位审核意见</h4>
                                <el-input 
                                    v-model="showForm.unitAuditComments"
                                    :autosize="{ minRows:10 }"
                                    type="textarea">
                                </el-input>
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
        name:'progressReportAdd',
        data(){
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
                timeForm: {
                    date: "2019年8月24日",
                    radio: ''
                },
                paramsData: {
                    id: this.$route.params.id
                }
            }
        },
        methods:{
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
                        let data = this.taskForm.slice(0,-1);
                        this.axios({
                            url: 'http://192.168.0.80:8087/environment/progress/insertCRDT',
                            method: 'post',
                            data
                        }).then((res) => {
                            console.log(1)
                            console.log(res)
                            if(res.data.resultFlag == 0) {
                                // 二、目前进展情况
                                let data = this.progressForm.slice(0,-1);
                                this.axios({
                                    url: 'http://192.168.0.80:8087/environment/progress/insertCP',
                                    method: 'post',
                                    data
                                }).then((res) => {
                                    console.log(2)
                                    console.log(res);
                                    if(res.data.resultFlag == 0) {
                                        // 四、课题实施中存在的主要问题
                                        let data = this.problemForm.slice(0,-1);
                                        this.axios({
                                            url: 'http://192.168.0.80:8087/environment/progress/insertPMP',
                                            method: 'post',
                                            data
                                        }).then((res) => {
                                            console.log(3)
                                            console.log(res);
                                            if(res.data.resultFlag == 0) {
                                                // 五、下一步研发工作安排
                                                let data = this.planForm.slice(0,-1);
                                                this.axios({
                                                    url: 'http://192.168.0.80:8087/environment/progress/insertNWP',
                                                    method: 'post',
                                                    data
                                                }).then((res) => {
                                                    console.log(4)
                                                    console.log(res);
                                                    loading.close();
                                                    if(res.data.resultFlag == 0) {
                                                        // 提交成功
                                                        this.successInfo();
                                                    } else {
                                                        // 提交失败
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
        .showForm{
            table.form_table{
                min-width: 1000px;
                width: 65.4%;
                @media screen and ( max-width: 1600px ) {
                    width: 87.4%;
                }
                .el-radio {
                    margin: 0 50px;
                }
                .item {
                    td {
                        * {
                            text-align: left;  
                        }
                        h4 {
                            padding: 15px 0;
                        }
                        p {
                            margin-bottom: 5px;
                        }
                        background-color: #fff !important;
                        padding: 0 10px;
                        ol {
                            padding-bottom: 5px;
                            list-style-type: none;
                            li {
                                display: flex;
                                // line-height: 1.8;
                                .index {
                                    display: inline-block;
                                    padding-top: 2px;
                                    height: 16px;
                                }
                                .el-textarea {
                                    display: inline-block;
                                    .el-textarea__inner {
                                        // margin-top: 10px;
                                        padding-left: 10px;
                                    }
                                    
                                }
                            }
                        }
                    }
                    .el-textarea {
                        margin-bottom: 10px;
                    }
                }
                .el-date-editor {
                    width: 100%;
                    .el-input__inner {
                        width: 100%;
                    }
                }
                ._inline {
                    display: inline-block;
                    width: 40px;
                    height: 18px;
                    .el-input__inner{
                        height: 100%;
                        padding: 0 3px;
                        border-bottom: 1px solid #000;
                        border-radius: 0;
                    }
                    
                }
                ._inline_date{
                    width: 300px;
                    height: 28px;
                    .el-input__icon {
                        display: none;
                    }
                    .el-input__inner {
                        height: 100%;
                    }
                }
                .el-textarea {
                    .el-textarea__inner {
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
        .btn_group {
            margin-top: 10px;
            padding-bottom: 30px;
        }
    }
</style>
