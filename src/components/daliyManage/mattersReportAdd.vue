<template>
    <div id="mattersReportAdd">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm" >
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">新增重大事项</th></tr>
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
                                <el-input v-model="showForm.commitmentUnit"></el-input>
                            </td>
                            <td>负责人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.unitHead"></el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>申请类型 <span class="required">*</span>：</td>
                            <td colspan="3" @click="radioChange">
                                <el-radio v-model="showForm.adjustTypeId" label="1">变更</el-radio>
                                <el-radio v-model="showForm.adjustTypeId" label="2">备案</el-radio>
                            </td>
                        </tr>
                        <tr v-if="showForm.adjustTypeId == 1">
                            <td>变更事项 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-checkbox-group v-model="checkbox">
                                    <div class="item">
                                        <el-checkbox label="1"></el-checkbox>
                                        <label>课题负责人</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="2"></el-checkbox>
                                        <label>研究内容或示范点</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="3"></el-checkbox>
                                        <label>课题延期</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="4"></el-checkbox>
                                        <label>课题经费</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="5"></el-checkbox>
                                        <label>其他</label>
                                    </div>
                                </el-checkbox-group>
                            </td>
                        </tr>
                        <tr v-if="showForm.adjustTypeId == 2">
                            <td>备案事项 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-checkbox-group v-model="checkbox">
                                    <div class="item">
                                        <el-checkbox label="6"></el-checkbox>
                                        <label>主要参加人员变动</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="7"></el-checkbox>
                                        <label>课题经费调整</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="8"></el-checkbox>
                                        <label>其他</label>
                                    </div>
                                </el-checkbox-group>
                            </td>
                        </tr>
                        <tr class="file_tr" v-if="showForm.adjustTypeId == 1">
                            <td>变更申请表附件 <span class="required">*</span>：</td>
                            <td class="file_td" colspan="3">
                                <input type="file" @change="getFile($event,1)" id="changeApplicationAttachment" />
                            </td>
                        </tr>
                        <tr class="file_tr" v-if="showForm.adjustTypeId == 2">
                            <td>备案申请表附件 <span class="required">*</span>：</td>
                            <td class="file_td" colspan="3">
                                <input type="file" @change="getFile($event,2)" id="filingApplicationAttachment" />
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>专家论证意见附件 <span class="required">*</span>：</td>
                            <td class="file_td" colspan="3">
                                <input type="file" @change="getFile($event,3)" />
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>批准文件附件 <span class="required">*</span>：</td>
                            <td class="file_td" colspan="3">
                                <input type="file" @change="getFile($event,4)" />
                            </td>
                        </tr>
                        <tr>
                            <td>具体情况 <span class="required">*</span>：<br>（说明需备案的事项及其原因）
                            </td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.specificFacts"
                                    :autosize="{ minRows:11 }"
                                    type="textarea"
                                    maxlength="200">
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
        name:'mattersReportAdd',
        components: {
            messageBox: mattersReportMessageBox
        },
        data(){
            return {
                checkbox: [],
                showForm: {
                    subjectName: '',
                    projectNo: '',
                    commitmentUnit: '',
                    unitHead: '',
                    adjustTypeId: '1',
                    adjustmentMattersId: '',
                    specificFacts: ''
                },
                paramsData: {
                    id: this.$route.params.id
                },
                file: {
                    changeApplicationAttachment: '',
                    filingApplicationAttachment: '',
                    expertArgumentationAttachment: '',
                    approvalDocumentsAttachment: ''
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
                console.log(this.showForm.adjustTypeId);
                console.log(this.file)
                let radio = this.showForm.adjustTypeId;
                if(radio == 1) {
                    this.file.filingApplicationAttachment = "";
                }else if(radio == 2) {
                    this.file.changeApplicationAttachment = "";
                }
                if(index == 1) {
                    this.file.changeApplicationAttachment = event.target.files[0];
                }else if(index == 2) {
                    this.file.filingApplicationAttachment = event.target.files[0];
                }else if(index == 3) {
                    this.file.expertArgumentationAttachment = event.target.files[0];
                }else if(index == 4) {
                    this.file.approvalDocumentsAttachment = event.target.files[0];
                }
                console.log(this.file);
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
                this.showForm.unitHead = this.messageBoxData.subjeceLeader;
                this.showForm.commitmentUnit = this.messageBoxData.commitmentUnit;
            },
            // 页面操作
            handleSubmit() {
                this.showForm.adjustmentMattersId = this.checkbox.toString();
                // 非空验证
                for(let i in this.showForm) {
                    let str = this.showForm[i] + "";
                    if(!str.trim()) {
                        this.alertInfo("请将表格填写完整","warning");
                        return false;
                    }
                }
                if((!this.file.changeApplicationAttachment && !this.file.filingApplicationAttachment) || !this.file.expertArgumentationAttachment || !this.file.approvalDocumentsAttachment) {
                    this.alertInfo("请上传全部附件","warning");
                    return false;
                }
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                this.axios({
                    url: service.submitAddMatter,
                    method: 'post',
                    data: this.showForm
                }).then((res) => {
                    console.log(res)
                    let id = res.data.data;
                    if(res.data.resultFlag == 0) {
                        // 上传附件
                        let formData = new FormData(),
                            type = this.showForm.adjustTypeId;
                        formData.append('majorid',id);
                        formData.append('typeid',type);
                        if(type == 1) {
                            formData.append('changeApplicationAttachment',this.file.changeApplicationAttachment);
                        }else if(type == 2) {
                            formData.append('filingApplicationAttachment',this.file.filingApplicationAttachment);
                        }
                        formData.append('expertArgumentationAttachment',this.file.expertArgumentationAttachment);
                        formData.append('approvalDocumentsAttachment',this.file.approvalDocumentsAttachment);
                        this.axios({
                            url: service.submitAddMatterFile,
                            method: 'post',
                            data: formData,
                            contentType: false,
                            processData: false,
                            usecredensives: true
                        }).then((res) => {
                            console.log(res)
                            loading.close();
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
            },
            handleBack() {
                this.$router.go(-1);
            },
            // 申请类型切换清除多选框
            radioChange() {
                this.checkbox = [];
                this.file.changeApplicationAttachment = "";
                this.file.filingApplicationAttachment = "";
                document.querySelector("#changeApplicationAttachment").value = "";
                document.querySelector("#filingApplicationAttachment").value = "";
            }
        }
    }
</script>

<style lang="less">
    #mattersReportAdd{
        .showForm{
            table.form_table{
                @media  screen and ( max-width: 1600px ) {
                    width: 72.4%;
                }
                tbody{
                    tr{
                        td{
                            &:first-child{
                                @media screen and ( min-width: 1500px ) and ( max-width: 1850px ){
                                    width: 30.8%;
                                }
                                @media  screen and ( max-width: 1500px ) {
                                    width: 31.8%;
                                }
                            }
                        }
                    }
                }
                .el-radio {
                    margin: 0 60px;
                }
                .el-checkbox-group {
                    display: flex;
                    flex-wrap: wrap;
                    padding-bottom: 10px;
                    min-height: 50px;
                    .item {
                        width: 33.3333%;
                        text-align: left;
                        padding: 10px 0 0 20px;
                    }
                }
                .el-textarea {
                    .el-textarea__inner {
                        padding: 10px;
                        resize: none;
                    }
                    
                }
            }
        }
    }
</style>
