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
                            <td>中标（成交）金额：</td>
                            <td>
                                <el-input v-model="showForm.winningAmount" disabled></el-input>
                            </td>
                            <td>配套经费：</td>
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
                                <a @click="handleDownload(0)">{{ fileData[0].upload_file_name }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>成交公告附件：</td>
                            <td colspan="3" class="file_td">
                                <a @click="handleDownload(1)">{{ fileData[1].upload_file_name }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>成交通知书附件：</td>
                            <td colspan="3" class="file_td">
                                <a @click="handleDownload(2)">{{ fileData[2].upload_file_name }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>响应文件附件：</td>
                            <td colspan="3" class="file_td">
                                <a @click="handleDownload(3)">{{ fileData[3].upload_file_name }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>其他附件：</td>
                            <td colspan="3" class="file_td">
                                <a @click="handleDownload(4)">{{ fileData[4].upload_file_name }}</a>
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
                    prop="data1"
                    label="交办人"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data2"
                    label="处理人"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data3"
                    label="审核步骤"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data4"
                    label="交办时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data5"
                    label="状态"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data6"
                    label="处理内容"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data7"
                    label="处理意见"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data8"
                    label="处理时间"
                    align="center">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name:'projectShow',
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
                ]
            }
        },
        methods: { 
            handleBack() {
                this.$router.go(-1);
            },
            handleDownload(val) {
                window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                     + this.fileData[val].upload_file_address 
                                     + '&fileName=' 
                                     + this.fileData[val].upload_file_name;
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
            })
            // 解决接口数据混乱
            setTimeout(() => {
                 // 附件信息
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/tender/updateTenderStatusByReturnCommit',
                    method: 'get',
                    params: {
                        id: this.paramsData.id
                    }
                }).then((res) => {
                    let data = res.data.data;
                    this.fileData = data;
                })
            },0);
           

            // 审核数据
            
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
