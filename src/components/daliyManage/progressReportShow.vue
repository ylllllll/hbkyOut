<template>
    <div id="progressReportShow">
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
                                    v-model="showForm.bearerUnit" 
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>填报日期：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.fillTime" 
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>项目负责人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.projectLeader" 
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>项目负责人联系电话：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.projectLeaderPhone"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>主要联系人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.primaryContacts"
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>主要联系人联系电话：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.primaryContactsPhone" 
                                    :disabled="true">
                            </el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>进展情况：</td>
                            <td colspan="3">
                                <el-radio v-model="showForm.progress" label="45" disabled>超前</el-radio>
                                <el-radio v-model="showForm.progress" label="46" disabled>正常</el-radio>
                                <el-radio v-model="showForm.progress" label="47" disabled>滞后</el-radio>
                            </td>
                        </tr>
                        <!-- 一、合同要求研发任务 -->
                        <tr class="item">
                            <td colspan="4">
                                <h4>一、合同要求研发任务</h4>
                                <p>合同要求研发任务共{{ taskForm.length }}项，具体如下：</p>
                                <ol>
                                    <li v-for="(item,index) in taskForm" :key="index">{{ item.requireStoddTaskContent }}</li>
                                </ol>
                            </td>
                        </tr>
                        <!-- 二、目前进展情况 -->
                        <tr class="item">
                            <td colspan="4">
                                <h4>二、目前进展情况</h4>
                                <p>已完成研发任务{{ progressForm.length }}项，完成工作进度{{ showForm.progressCompletedPercentage }}%。</p>
                                <ol>
                                    <li v-for="(item,index) in progressForm" :key="index">{{ item.currentProgressContent }}</li>
                                </ol>
                            </td>
                        </tr>
                        <!-- 三、使用经费情况 -->
                        <tr class="item">
                            <td colspan="4">
                                <h4>三、使用经费情况</h4>
                                <ol style="list-style-type:none;margin-left:-15px;">
                                    <li>已到位课题总经费{{ showForm.totalFundsInplace }}万元；已使用课题经费{{ showForm.projectFundsUsed }}万元，占总经费{{ showForm.totalFunding }}%。</li>
                                    <li>其中：已使用省环保课题经费{{ showForm.provincialEnvironmentalFundsUsed }}万元，占胜环保课题经费{{ showForm.provincialEnvironmentalFundsPercent }}%。</li>
                                </ol>
                            </td>
                        </tr>
                        <!-- 四、课题实施中存在的主要问题 -->
                        <tr class="item">
                            <td colspan="4">
                                <h4>四、课题实施中存在的主要问题（研究遇到的困难及技术、方案、人员等变动情况）</h4>
                                <ol>
                                    <li v-for="(item,index) in problemForm" :key="index">{{ item.mainProblems }}</li>
                                </ol>
                            </td>
                        </tr>
                        <!-- 五、下一步研发工作安排 -->
                        <tr class="item">
                            <td colspan="4">
                                <h4>五、下一步研发工作安排</h4>
                                <ol>
                                    <li v-for="(item,index) in planForm" :key="index">{{ item.nextWorkPlan }}</li>
                                </ol>
                            </td>
                        </tr>
                        <!-- 六、课题预计完成时间 -->
                        <tr class="item">
                            <td colspan="4">
                                <h4>六、课题预计完成时间</h4>
                                <ol>
                                    <li>合同约定结题时间：{{ showForm.contractAgreedClosingTime }}</li>
                                    <li>
                                        能否按合同约定时间完成课题？
                                        <el-radio v-model="showForm.isComplateContract" label="0" disabled>能</el-radio>
                                        <el-radio v-model="showForm.isComplateContract" label="1" disabled>不能</el-radio>
                                    </li>
                                    <li>预计申请课题验收时间：{{ showForm.estimatedAcceptanceTime }}</li>
                                </ol>
                            </td>
                        </tr>
                        <!-- 七、单位审核意见 -->
                        <tr class="item">
                            <td colspan="4">
                                <h4>七、单位审核意见</h4>
                                <el-input 
                                    v-model="showForm.unitAuditComments" 
                                    :disabled="true"
                                    :autosize="{ minRows:10 }"
                                    type="textarea">
                                </el-input>
                            </td>
                        </tr>
                        <!-- 附件 -->
                        <tr class="file_tr">
                            <td>专家意见附件：</td>
                            <td class="file_td" colspan="3">
                                <a @click="handleDownload(1)">{{ fileData[1].upload_file_name }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>进度经费使用情况附件：</td>
                            <td class="file_td" colspan="3">
                                <a @click="handleDownload(4)">{{ fileData[3].upload_file_name }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>开题报告附件：</td>
                            <td class="file_td" colspan="3">
                                <a @click="handleDownload(0)">{{ fileData[0].upload_file_name }}</a>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>课题进展附件：</td>
                            <td class="file_td" colspan="3">
                                <a @click="handleDownload(2)">{{ fileData[2].upload_file_name }}</a>
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
        name: 'progressReportShow',
        data(){
            return{
                showForm: {},
                taskForm: [],
                progressForm: [],
                problemForm: [],
                planForm: [],
                paramsData: {
                    id: this.$route.params.id
                },
                fileData: [{
                    upload_file_name: ''
                },{
                    upload_file_name: ''
                },{
                    upload_file_name: ''
                },{
                    upload_file_name: ''
                }]
            }
        },
        methods:{
            handleDownload(val) {
                window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                     + this.fileData[val].upload_file_address 
                                     + '&fileName=' 
                                     + this.fileData[val].upload_file_name;
            },
            handleBack() {
                this.$router.go(-1);//返回上一页
            }
        },
        beforeMount() {
            this.axios({
                url: 'http://192.168.0.80:8087/environment/progress/getInfoById',
                method: 'get',
                params: {
                    id: this.paramsData.id
                }
            }).then((res) => {
                console.log(0)
                console.log(res);
                this.showForm = res.data.data;
                this.showForm.isComplateContract = this.showForm.isComplateContract + "";
                this.showForm.progress = this.showForm.progress + "";
                // 二、目前进展情况
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/progress/getCRDTByPid',
                    method: 'get',
                    params: {
                        Pid: this.paramsData.id
                    }
                }).then((res) => {
                    console.log(1)
                    console.log(res);
                    this.taskForm = res.data.data;
                    // 三、使用经费情况
                    this.axios({
                        url: 'http://192.168.0.80:8087/environment/progress/getCPByPid',
                        method: 'get',
                        params: {
                            Pid: this.paramsData.id
                        }
                    }).then((res) => {
                        console.log(2)
                        console.log(res);
                        this.progressForm = res.data.data;
                        // 四、课题实施中存在的主要问题
                        this.axios({
                            url: 'http://192.168.0.80:8087/environment/progress/getPMPByPid',
                            method: 'get',
                            params: {
                                Pid: this.paramsData.id
                            }
                        }).then((res) => {
                            console.log(3)
                            console.log(res);
                            this.problemForm = res.data.data;
                            // 五、下一步研发工作安排
                            this.axios({
                                url: 'http://192.168.0.80:8087/environment/progress/getNWPByPid',
                                method: 'get',
                                params: {
                                    Pid: this.paramsData.id
                                }
                            }).then((res) => {
                                console.log(4)
                                console.log(res);
                                this.planForm = res.data.data;
                                // 附件信息
                                this.axios({
                                    url: 'http://192.168.0.80:8087/environment/progress/getProgressFileInfo',
                                    method: 'get',
                                    params: {
                                        pid :this.paramsData.id
                                    }
                                }).then((res) => {
                                    console.log(5)
                                    console.log(res);
                                    this.fileData = res.data.data;
                                })
                            })
                        })
                    })
                })
            })
        }
    }
</script>

<style lang="less">
    #progressReportShow{
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
                        background-color: #fff !important;
                        padding: 0 10px;
                        ol {
                            padding-bottom: 5px;
                            li {
                                margin-left: 20px;
                                line-height: 1.8;
                            }
                        }
                    }
                    .el-textarea {
                        margin-bottom: 10px;
                        .el-textarea__inner {
                            resize: none;
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
