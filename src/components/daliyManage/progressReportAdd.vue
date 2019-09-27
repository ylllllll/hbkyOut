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
                            <td>课题名称 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.subjectName"></el-input>
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
                            <td>承担单位 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.bearerUnit"></el-input>
                            </td>
                            <td>填报日期 <span class="required">*</span>：</td>
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
                            <td>项目负责人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.projectLeader"></el-input>
                            </td>
                            <td>项目负责人联系手机 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.projectLeaderPhone"
                                    @blur="validatePhone">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>主要联系人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.primaryContacts"></el-input>
                            </td>
                            <td>主要联系人联系手机 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.primaryContactsPhone"
                                    @blur="validatePhone">
                                </el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>进展情况 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-radio v-model="showForm.progress" label="45">超前</el-radio>
                                <el-radio v-model="showForm.progress" label="46">正常</el-radio>
                                <el-radio v-model="showForm.progress" label="47">滞后</el-radio>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>课题进展附件 <span class="required">*</span>：</td>
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
                                <el-input 
                                    class="_inline2" 
                                    v-model="showForm.progressCompletedPercentage"
                                    @blur="validateNum"></el-input>
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
                                <el-input 
                                    class="_inline" 
                                    v-model="showForm.totalFundsInplace"
                                    @blur="validateNum">
                                </el-input>
                                万元；已使用课题经费
                                <el-input 
                                    class="_inline" 
                                    v-model="showForm.projectFundsUsed"
                                    @blur="validateNum">
                                </el-input>
                                万元，占总经费
                                <el-input 
                                    class="_inline" 
                                    v-model="showForm.totalFunding"
                                    @blur="validateNum">
                                </el-input>
                                %。
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                其中：已使用省环保课题经费
                                <el-input 
                                    class="_inline" 
                                    v-model="showForm.provincialEnvironmentalFundsUsed"
                                    @blur="validateNum">
                                </el-input>
                                万元，占省环保课题经费
                                <el-input 
                                    class="_inline" 
                                    v-model="showForm.provincialEnvironmentalFundsPercent"
                                    @blur="validateNum">
                                </el-input>
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
                            <td>合同约定结题时间 <span class="required">*</span>：</td>
                            <td>
                                <el-date-picker
                                    v-model="showForm.contractAgreedClosingTime"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </td>
                            <td>预计申请课题验收时间 <span class="required">*</span>：</td>
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
                            <td>能否按合同约定时间完成课题 <span class="required">*</span>：</td>
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
                            <td>专家意见附件 <span class="required">*</span>：</td>
                            <td class="file_td" colspan="3">
                                <input type="file" @change="getFile($event,1)" />
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>开题报告附件 <span class="required">*</span>：</td>
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
    import { service } from '@/js/api'
    export default {
        name: 'progressReportAdd',
        components: {
            messageBox: mattersReportMessageBox
        },
        data() {
            return {
                radio: '',
                showForm: {
                    // 主表
                    subjectName: '',
                    projectNo: '',
                    bearerUnit: '',
                    fillTime: '',
                    projectLeader: '',
                    projectLeaderPhone: '',
                    primaryContacts: '',
                    primaryContactsPhone: '',
                    progress: '',
                    // 进展情况完成比
                    progressCompletedPercentage: '',
                    // 使用经费情况
                    totalFundsInplace: '',
                    projectFundsUsed: '',
                    totalFunding: '',
                    provincialEnvironmentalFundsUsed: '',
                    provincialEnvironmentalFundsPercent: '',
                    // 课题预计完成时间
                    contractAgreedClosingTime: '',
                    isComplateContract: '',
                    estimatedAcceptanceTime: '',
                    // 单位核审意见
                    unitAuditComments: ''
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
            // 文件
            getFile(event,index) {
                // 附件格式验证
                let _event = event.srcElement || event.target,
                    val = _event.value,
                    validateFile = this.$validate.validateFile(event.target.files[0].name);
                if(validateFile) {
                    this.alertInfo(validateFile,"warning");
                    _event.value = "";
                    return false;
                }
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
            // 多行操作
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
                this.showForm.projectLeader = this.messageBoxData.subjeceLeader;
                this.showForm.primaryContacts = this.messageBoxData.subjectContact;
                this.showForm.bearerUnit = this.messageBoxData.commitmentUnit;
            },
            // 页面操作
            handleSubmit() {
                // 非空验证
                for(let i in this.showForm) {
                    let str = this.showForm[i] + "";
                    if(!str.trim()) {
                        this.alertInfo("请将表格填写完整","warning");
                        return false;
                    }
                }
                let arr = [];
                arr.push(...this.taskForm);
                arr.push(...this.progressForm);
                arr.push(...this.problemForm);
                arr.push(...this.planForm);
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
                for(let i in this.file) {
                    if(!this.file[i]) {
                        this.alertInfo("请上传全部附件","warning");
                        return false;
                    }
                }
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                this.axios({
                    url: service.submitAddProgress,
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
                            url: service.submitAddProgress1,
                            method: 'post',
                            data: this.taskForm
                        }).then((res) => {
                            console.log(1)
                            console.log(res)
                            if(res.data.resultFlag == 0) {
                                // 二、目前进展情况
                                this.axios({
                                    url: service.submitAddProgress2,
                                    method: 'post',
                                    data: this.progressForm
                                }).then((res) => {
                                    console.log(2)
                                    console.log(res);
                                    if(res.data.resultFlag == 0) {
                                        // 四、课题实施中存在的主要问题
                                        this.axios({
                                            url: service.submitAddProgress3,
                                            method: 'post',
                                            data: this.problemForm
                                        }).then((res) => {
                                            console.log(3)
                                            console.log(res);
                                            if(res.data.resultFlag == 0) {
                                                // 五、下一步研发工作安排
                                                this.axios({
                                                    url: service.submitAddProgress4,
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
                                                            url: service.submitAddProgressFile,
                                                            method: 'post',
                                                            data: formData
                                                        }).then((res) => {
                                                            loading.close();
                                                            console.log(5)
                                                            console.log(res);
                                                            if(res.data.resultFlag == 0) {
                                                                this.$alert('提交成功','提示', {
                                                                    confirmButtonText: '确定',
                                                                    type: 'success',
                                                                    callback: action => {
                                                                        this.$router.go(-1);
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
            },
            handleBack() {
                this.$router.go(-1);
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
