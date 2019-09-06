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
                                <el-input v-model="showForm.responsibleUnit"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>经办人：</td>
                            <td>
                                <el-input v-model="showForm.operator"></el-input>
                            </td>
                            <td>经办人联系方式：</td>
                            <td>
                                <el-input v-model="showForm.operatorContact">
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
                            <td>中标文件附件：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,1)">
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>成交公告附件：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,2)">
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>成交通知书附件：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,3)">
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>响应文件附件：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,4)">
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>其他附件：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,5)">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <div class="btn_group">
                <el-button @click="handleBack">返回</el-button>
            </div>
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
                    console.log(data[0].upload_file_name)
                    console.log( document.querySelector(".file_td input").value)
                    // document.querySelector(".file_td input").value = data[0].upload_file_name;
                })
            })    
        }
    }
</script>

<style lang="less">
    #projectQueryEdit{
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
