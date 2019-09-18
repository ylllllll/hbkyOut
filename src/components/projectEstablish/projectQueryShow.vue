<template>
    <div id="projectShow">
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
                                <el-input v-model="showForm.projectName" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>标书编号：</td>
                            <td>
                                <el-input v-model="showForm.tenderNo" disabled></el-input>
                            </td>
                            <td>分包号：</td>
                            <td>
                                <el-input v-model="showForm.subcontractingNo" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题名称：</td>
                            <td>
                                <el-input v-model="showForm.subjectName" disabled></el-input>
                            </td>
                            <td>投标人：</td>
                            <td>
                                <el-input v-model="showForm.bidders" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>中标（成交）金额（万元）：</td>
                            <td>
                                <el-input v-model="showForm.winningAmount" disabled></el-input>
                            </td>
                            <td>配套经费（万元）：</td>
                            <td>
                                <el-input v-model="showForm.supportingFunds" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题负责人：</td>
                            <td>
                                <el-input v-model="showForm.subjectLeader" disabled>
                                </el-input>
                            </td>
                            <td>课题负责人联系方式：</td>
                            <td>
                                <el-input v-model="showForm.leaderContact" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                课题联合投标单位：
                                <br>
                                （如有请填写）&nbsp;&nbsp;&nbsp;
                            </td>
                            <td>
                                <el-input v-model="showForm.joinTenderUnits" disabled></el-input>
                            </td>
                            <td>责任单位：</td>
                            <td>
                                <el-input v-model="showForm.responsibleUnit" disabled></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>经办人：</td>
                            <td>
                                <el-input v-model="showForm.operator" disabled></el-input>
                            </td>
                            <td>经办人联系方式：</td>
                            <td>
                                <el-input v-model="showForm.operatorContact" disabled>
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
                                    maxlength="200"
                                    disabled>
                                </el-input>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>中标文件附件：</td>
                            <td colspan="3" class="file_td">
                                <a @click="handleDownload(0)">{{ fileData.winningDocumentFileName }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>成交公告附件：</td>
                            <td colspan="3" class="file_td">
                                <a @click="handleDownload(1)">{{ fileData.transactionAnnouncementName }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>成交通知书附件：</td>
                            <td colspan="3" class="file_td">
                                <a @click="handleDownload(2)">{{ fileData.noticeTransactionName }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>响应文件附件：</td>
                            <td colspan="3" class="file_td">
                                <a @click="handleDownload(3)">{{ fileData.responseFileName }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>其他附件：</td>
                            <td colspan="3" class="file_td">
                                <a @click="handleDownload(4)">{{ fileData.otherAttachmentsName }}</a>
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
        name: 'projectShow',
        data() {
            return{
                showForm:{},
                paramsData: {
                    id: this.$route.params.id
                },
                tableData: [],
                // 解决报错
                fileData: {
                    winningDocumentFileName: '',
                    transactionAnnouncementName: '',
                    noticeTransactionName: '',
                    responseFileName: '',
                    otherAttachmentsName: ''
                }
            }
        },
        methods: { 
            handleBack() {
                this.$router.go(-1);
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
                    console.log(12)
                    console.log(res)
                    let data = res.data.data;
                    this.fileData = data;
                    console.log(this.fileData)
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
    #projectShow{
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
