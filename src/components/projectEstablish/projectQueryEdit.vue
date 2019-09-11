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
                            <td>项目名称：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>标书编号：</td>
                            <td>
                                <el-input v-model="showForm.tenderNo"></el-input>
                            </td>
                            <td>分包号：</td>
                            <td>
                                <el-input v-model="showForm.subcontractingNo"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题名称：</td>
                            <td>
                                <el-input v-model="showForm.subjectName"></el-input>
                            </td>
                            <td>投标人：</td>
                            <td>
                                <el-input v-model="showForm.bidders"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>中标（成交）金额：</td>
                            <td>
                                <el-input v-model="showForm.winningAmount"></el-input>
                            </td>
                            <td>配套经费：</td>
                            <td>
                                <el-input v-model="showForm.supportingFunds"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题负责人：</td>
                            <td>
                                <el-input v-model="showForm.subjectLeader">
                                </el-input>
                            </td>
                            <td>课题负责人联系方式：</td>
                            <td>
                                <el-input v-model="showForm.leaderContact"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                课题联合投标单位：
                                <br>
                                （如有请填写）&nbsp;&nbsp;&nbsp;
                            </td>
                            <td>
                                <el-input v-model="showForm.joinTenderUnits"></el-input>
                            </td>
                            <td>责任单位：</td>
                            <td>
                                <el-input v-model="showForm.responsibleUnit" readonly></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>经办人：</td>
                            <td>
                                <el-input v-model="showForm.operator"></el-input>
                            </td>
                            <td>经办人联系方式：</td>
                            <td>
                                <el-input v-model="showForm.operatorContact"></el-input>
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
                            <td>中标文件附件：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,1)" />
                                <div class="file_show">{{ fileData[0].upload_file_name }}</div>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>成交公告附件：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,2)" />
                                <div class="file_show">{{ fileData[1].upload_file_name }}</div>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>成交通知书附件：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,3)" />
                                <div class="file_show">{{ fileData[2].upload_file_name }}</div>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>响应文件附件：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,4)" />
                                <div class="file_show">{{ fileData[3].upload_file_name }}</div>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>其他附件：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,5)" />
                                <div class="file_show">{{ fileData[4].upload_file_name }}</div>
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
                // 解决报错
                fileData: [
                    {upload_file_name: ''},
                    {upload_file_name: ''},
                    {upload_file_name: ''},
                    {upload_file_name: ''},
                    {upload_file_name: ''}
                ],
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
            errorInfo() {
                this.$alert('提交失败','提示', {
                    confirmButtonText: '确定',
                    type: 'warning',
                    callback: action => {}
                });
            },
            handleSubmit() {
                // 非空验证
                for(let i in this.showForm) {
                    if(typeof(this.showForm[i]) == "string") {
                        if(this.showForm[i].match(/^[ ]*$/)){
                            this.$alert('请将表格填写完整','提示', {
                                confirmButtonText: '确定',
                                type: 'warning',
                                callback: action => {}
                            });
                            return false;
                        }
                    }
                }
                // 数字验证
                let validateNum = [ this.validate.validateNum(this.showForm.winningAmount),
                                    this.validate.validateNum(this.showForm.supportingFunds)];
                for(let i in validateNum) {
                    if(validateNum[i]) {
                        this.$alert(validateNum[i],'提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
                        return false;
                    }
                }
                // 手机号验证
                let validatePhone = [   this.validate.validatePhone(this.showForm.leaderContact),
                                        this.validate.validatePhone(this.showForm.operatorContact)];
                for(let i in validatePhone) {
                    if(validatePhone[i]) {
                        this.$alert(validatePhone[i],'提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
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
                    formData.append('oldWinningDocumentFileUrl',this.fileData[0].upload_file_address);
                }
                if(this.Enclosure.transactionAnnouncement) {
                    formData.append('oldTransactionAnnouncementFileUrl',this.fileData[1].upload_file_address);
                }
                if(this.Enclosure.noticeTransaction) {
                    formData.append('oldNoticeTransactionFileUrl',this.fileData[2].upload_file_address);
                }
                if(this.Enclosure.responseFile) {
                    formData.append('oldResponseFileFileUrl',this.fileData[3].upload_file_address);
                }
                if(this.Enclosure.otherAttachments) {
                    formData.append('oldOtherAttachmentsFileUrl',this.fileData[4].upload_file_address);
                }
                formData.append('winningDocument',this.Enclosure.winningDocument);
                formData.append('transactionAnnouncement',this.Enclosure.transactionAnnouncement);
                formData.append('noticeTransaction',this.Enclosure.noticeTransaction);
                formData.append('responseFile',this.Enclosure.responseFile);
                formData.append('otherAttachments',this.Enclosure.otherAttachments);
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/tender/updateTenderStatusByReturnCommit',
                    method: 'post',
                    data: formData,
                    contentType: false,
                    processData: false,
                    usecredensives: true
                }).then((res) => {
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
            handleDownload(val) {
                window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                     + this.fileData[val].upload_file_address 
                                     + '&fileName=' 
                                     + this.fileData[val].upload_file_name;
            },
            getFile(event,index) {
                if(index == 1) {
                    this.Enclosure.winningDocument = event.target.files[0];
                    this.fileData[0].upload_file_name = event.target.files[0].name;
                }else if(index == 2) {
                    this.Enclosure.transactionAnnouncement = event.target.files[0];
                    this.fileData[1].upload_file_name = event.target.files[0].name;
                }else if(index == 3) {
                    this.Enclosure.noticeTransaction = event.target.files[0];
                    this.fileData[2].upload_file_name = event.target.files[0].name;
                }else if(index == 4) {
                    this.Enclosure.responseFile = event.target.files[0];
                    this.fileData[3].upload_file_name = event.target.files[0].name;
                }else if(index == 5) {
                    this.Enclosure.otherAttachments = event.target.files[0];
                    this.fileData[4].upload_file_name = event.target.files[0].name;
                }
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
