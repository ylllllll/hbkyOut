<template>
    <div id="mattersReportShow">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm" >
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">重大事项报告详情页</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题名称：</td>
                            <td>
                                <el-input
                                    v-model="showForm.subjectName"
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>课题编号：</td>
                            <td>
                                <el-input
                                    v-model="showForm.projectNo"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.commitmentUnit"
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>负责人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.unitHead"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>申请类型：</td>
                            <td colspan="3">
                                <el-radio v-model="showForm.adjustTypeId" label="1" disabled>变更</el-radio>
                                <el-radio v-model="showForm.adjustTypeId" label="2" disabled>备案</el-radio>
                            </td>
                        </tr>
                        <tr v-if="showForm.adjustTypeId == 1">
                            <td>变更事项：</td>
                            <td colspan="3">
                                <el-checkbox-group v-model="checkbox">
                                    <div class="item">
                                        <el-checkbox label="1" disabled></el-checkbox>
                                        <label>课题负责人</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="2" disabled></el-checkbox>
                                        <label>研究内容或示范点</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="3" disabled></el-checkbox>
                                        <label>课题延期</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="4" disabled></el-checkbox>
                                        <label>课题经费</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="5" disabled></el-checkbox>
                                        <label>其他</label>
                                    </div>
                                </el-checkbox-group>
                            </td>
                        </tr>
                        <tr v-if="showForm.adjustTypeId == 2">
                            <td>备案事项：</td>
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
                            <td>变更申请表附件：</td>
                            <td class="file_td" colspan="3">
                                <a @click="handleDownload(0)">{{ fileData.changeApplicationAttachmentFileName }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr" v-if="showForm.adjustTypeId == 2">
                            <td>备案申请表附件：</td>
                            <td class="file_td" colspan="3">
                                <a @click="handleDownload(1)">{{ fileData.filingApplicationAttachmentFileName }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>专家论证意见附件：</td>
                            <td class="file_td" colspan="3">
                                <a @click="handleDownload(2)">{{ fileData.expertArgumentationAttachmentFileName }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>批准文件附件：</td>
                            <td class="file_td" colspan="3">
                                <a @click="handleDownload(3)">{{ fileData.approvalDocumentsAttachmentFileName }}</a>
                            </td>
                        </tr>
                        <tr>
                            <td>具体情况：<br>（说明需备案的事项及其原因）
                            </td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.specificFacts"
                                    :autosize="{ minRows:11 }"
                                    type="textarea"
                                    maxlength="200"
                                    disabled>
                                </el-input>
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
        name:'mattersReportShow',
        data(){
            return{
                checkbox: [],
                showForm:{
                },
                paramsData: {
                    id: this.$route.params.id
                },
                fileData: {}
            }
        },
        methods: { 
            handleDownload(val) {
                if(val == 0) {
                    window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                     + this.fileData.changeApplicationAttachmentFileUrl 
                                     + '&fileName=' 
                                     + this.fileData.changeApplicationAttachmentFileName;
                }else if(val == 1) {
                    window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                     + this.fileData.filingApplicationAttachmentFileUrl 
                                     + '&fileName=' 
                                     + this.fileData.filingApplicationAttachmentFileName;
                }else if(val == 2) {
                    window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                     + this.fileData.expertArgumentationAttachmentFileUrl 
                                     + '&fileName=' 
                                     + this.fileData.expertArgumentationAttachmentFileName;
                }else if(val == 3) {
                    window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                     + this.fileData.approvalDocumentsAttachmentFileUrl 
                                     + '&fileName=' 
                                     + this.fileData.approvalDocumentsAttachmentFileName;
                }
            },
            handleBack() {
                this.$router.go(-1);
            }
        },
        beforeMount() {
            this.axios({
                url: 'http://192.168.0.80:8087/enviroment/daily/majormatter/getMajorById',
                method: 'get',
                params: {
                    id: this.paramsData.id
                }
            }).then((res) => {
                res.data.data.adjustTypeId = res.data.data.adjustTypeId + "";
                console.log(res);
                this.showForm = res.data.data;
                this.checkbox = (this.showForm.adjustmentMattersId + "").split(",");
                // 请求附件信息
                let id = res.data.data.id;
                this.axios({
                    url: 'http://192.168.0.80:8087/enviroment/daily/majormatter/getMajorFileInfo',
                    method: 'get',
                    params: {
                        id
                    }
                }).then((res) => {
                    console.log(res.data.data);
                    this.fileData = res.data.data;
                })
            })
        }
    }
</script>

<style lang="less">
    #mattersReportShow{
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
