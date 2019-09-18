<template>
    <div id="projectQueryEdit">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm" >
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">课题查询详情</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>项目名称 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>标书编号 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.tenderNo"></el-input>
                            </td>
                            <td>分包号 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.subcontractingNo"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题名称 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.subjectName"></el-input>
                            </td>
                            <td>投标人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.bidders"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>中标（成交）金额（万元） <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.winningAmount"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>配套经费（万元） <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.supportingFunds"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题负责人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.subjectLeader">
                                </el-input>
                            </td>
                            <td>课题负责人手机 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.leaderContact"
                                    @blur="validatePhone">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                课题联合投标单位：
                                <br>
                                （如有请填写）
                            </td>
                            <td>
                                <el-input v-model="showForm.joinTenderUnits"></el-input>
                            </td>
                            <td>责任单位 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.responsibleUnit" readonly></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>经办人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.operator"></el-input>
                            </td>
                            <td>经办人手机 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.operatorContact"
                                    @blur="validatePhone">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>备注：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.remark"
                                    :autosize="{ minRows:4 }"
                                    type="textarea"
                                    maxlength="200">
                                </el-input>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>中标文件附件 <span class="required">*</span>：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,1)" />
                                <div class="file_show">{{ fileData.winningDocumentFileName }}</div>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>成交公告附件 <span class="required">*</span>：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,2)" />
                                <div class="file_show">{{ fileData.transactionAnnouncementName }}</div>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>成交通知书附件 <span class="required">*</span>：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,3)" />
                                <div class="file_show">{{ fileData.noticeTransactionName }}</div>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>响应文件附件 <span class="required">*</span>：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,4)" />
                                <div class="file_show">{{ fileData.responseFileName }}</div>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>其他附件 <span class="required">*</span>：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,5)" />
                                <div class="file_show">{{ fileData.otherAttachmentsName }}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <div class="btn_group">
                <el-button @click="handleSubmit">提交</el-button>
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
        name:'projectQueryEdit',
        data(){
            return{
                showForm:{},
                paramsData: {
                    id: this.$route.params.id
                },
                tableData: [],
                fileData: {},
                Enclosure: {
                    winningDocument:'',
                    transactionAnnouncement:'',
                    noticeTransaction:'',
                    responseFile:'',
                    otherAttachments:'',
                }
            }
        },
        methods: {
            // 提示
            alertInfo(info,type) {
                this.$alert(info,'提示', {
                    confirmButtonText: '确定',
                    type,
                    callback: action => {}
                });
            },
            // 数字验证
            validateNum() {
                let _event = event.srcElement || event.target,
                    val = _event.value,
                    validateNum = this.validate.validateNum(val);
                if(validateNum) {
                    this.alertInfo(validateNum,"warning");
                    _event.value = "";
                    return false;
                }
            },
            // 手机验证
            validatePhone() {
                let _event = event.srcElement || event.target,
                    val = _event.value,
                    validatePhone = this.validate.validatePhone(val);
                if(validatePhone) {
                    this.alertInfo(validatePhone,"warning");
                    _event.value = "";
                    return false;
                }
            },
            // 文件
            getFile(event,index) {
                // 附件格式验证
                let _event = event.srcElement || event.target,
                    val = _event.value,
                    validateFile = this.validate.validateFile(event.target.files[0].name);
                if(validateFile) {
                    this.alertInfo(validateFile,"warning");
                    _event.value = "";
                    return false;
                }
                if(index == 1) {
                    this.Enclosure.winningDocument = event.target.files[0];
                    this.fileData.winningDocumentFileName = event.target.files[0].name;
                }else if(index == 2) {
                    this.Enclosure.transactionAnnouncement = event.target.files[0];
                    this.fileData.transactionAnnouncementName = event.target.files[0].name;
                }else if(index == 3) {
                    this.Enclosure.noticeTransaction = event.target.files[0];
                    this.fileData.noticeTransactionName = event.target.files[0].name;
                }else if(index == 4) {
                    this.Enclosure.responseFile = event.target.files[0];
                    this.fileData.responseFileName = event.target.files[0].name;
                }else if(index == 5) {
                    this.Enclosure.otherAttachments = event.target.files[0];
                    this.fileData.otherAttachmentsName = event.target.files[0].name;
                }
            },
            handleDownload(val) {
                if(val == 0) {
                    window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                     + this.fileData.winningDocumentFileUrl 
                                     + '&fileName=' 
                                     + this.fileData.winningDocumentFileName;
                }else if(val == 1) {
                    window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                     + this.fileData.transactionAnnouncementUrl 
                                     + '&fileName=' 
                                     + this.fileData.transactionAnnouncementName;
                }else if(val == 2) {
                    window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                     + this.fileData.noticeTransactionUrl 
                                     + '&fileName=' 
                                     + this.fileData.noticeTransactionName;
                }else if(val == 3) {
                    window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                     + this.fileData.responseFiletUrl 
                                     + '&fileName=' 
                                     + this.fileData.responseFileName;
                }else if(val == 4) {
                    window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                     + this.fileData.otherAttachmentsUrl 
                                     + '&fileName=' 
                                     + this.fileData.otherAttachmentsName;
                }
            },
            // 页面操作
            handleSubmit() {
                // 非空验证
                for(let i in this.showForm) {
                    if(i == "remark" || i == "joinTenderUnits") {
                        continue;
                    }
                    let str = this.showForm[i] + "";
                    if(!str.trim()) {
                        this.alertInfo("请将表格填写完整","warning");
                        return false;
                    }
                }
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                let formData = new FormData(),
                    openTender = JSON.stringify(this.showForm);
                formData.append('openTender',new Blob([openTender],{type:"application/json"}));
                if(this.Enclosure.winningDocument) {
                    formData.append('oldWinningDocumentFileUrl',this.fileData.winningDocumentFileUrl);
                    formData.append('winningDocument',this.Enclosure.winningDocument);
                }
                if(this.Enclosure.transactionAnnouncement) {
                    formData.append('oldTransactionAnnouncementFileUrl',this.fileData.transactionAnnouncementUrl);
                    formData.append('transactionAnnouncement',this.Enclosure.transactionAnnouncement);
                }
                // 顺序更改
                if(this.Enclosure.noticeTransaction) {
                    formData.append('oldNoticeTransactionFileUrl',this.fileData.noticeTransactionUrl);
                    formData.append('responseFile',this.Enclosure.noticeTransaction);
                }
                if(this.Enclosure.responseFile) {
                    formData.append('oldResponseFileFileUrl',this.fileData.responseFiletUrl);
                    formData.append('noticeTransaction',this.Enclosure.responseFile);
                }
                if(this.Enclosure.otherAttachments) {
                    formData.append('oldOtherAttachmentsFileUrl',this.fileData.otherAttachmentsUrl);
                    formData.append('otherAttachments',this.Enclosure.otherAttachments);
                }
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/tender/updateTenderStatusByReturnCommit',
                    method: 'post',
                    data: formData,
                    contentType: false,
                    processData: false,
                    usecredensives: true
                }).then((res) => {
                    console.log(res);
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
            },
            handleBack() {
                this.$router.go(-1);
            }
        },
        mounted() {
            // 主表数据
            this.axios({
                url: 'http://192.168.0.80:8087/environment/tender/getTenderById',
                method: 'get',
                params: {
                    id: this.paramsData.id
                }
            }).then((res) => {
                this.showForm = res.data.data;
                // 附件信息
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/tender/getTenderFileInfo',
                    method: 'get',
                    params: {
                        oid: this.paramsData.id
                    }
                }).then((res) => {
                    let data = res.data.data;
                    this.fileData = data;
                    console.log(this.fileData);
                    // 审核数据
                    this.axios({
                        url: 'http://192.168.0.80:8087//environment/tender/getAllShenHeTableRecordInfoByContractId',
                        method: 'get',
                        params: {
                            oid: this.paramsData.id
                        }
                    }).then((res) => {
                        this.tableData = res.data.data;
                    })
                })
            })    
        }
    }
</script>

<style lang="less">
    #projectQueryEdit{
        padding-bottom: 60px;
        background-color: #fff;
        margin-bottom: 20px;
        .showForm{
            table.form_table{
                @media  screen and ( max-width: 1600px ) {
                    width: 72.4%;
                }
                tbody{
                    tr{
                        td {
                            &:first-child{
                                @media screen and ( min-width: 1500px ) and ( max-width: 1850px ){
                                    width: 30.8%;
                                }
                                @media  screen and ( max-width: 1500px ) {
                                    width: 31.8%;
                                }
                            }
                            .el-textarea {
                                .el-textarea__inner {
                                    padding: 10px;
                                    resize: none;                                  
                                }
                            }
                            a {
                                cursor: pointer;
                            }
                        }
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
        }
        
    }
</style>
