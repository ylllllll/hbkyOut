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
                                <el-input v-model="showForm.commitmentUnit"></el-input>
                            </td>
                            <td>负责人：</td>
                            <td>
                                <el-input v-model="showForm.unitHead"></el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>申请类型：</td>
                            <td colspan="3">
                                <el-radio v-model="showForm.adjustTypeId" label="1">变更</el-radio>
                                <el-radio v-model="showForm.adjustTypeId" label="2">备案</el-radio>
                            </td>
                        </tr>
                        <tr v-if="showForm.adjustTypeId == 1">
                            <td>变更事项：</td>
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
                        <tr>
                            <td>具体情况：<br>（说明需备案的事项及其原因）
                            </td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.specificFacts"
                                    :autosize="{ minRows:10 }"
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
    </div>
</template>

<script>
    export default {
        name:'mattersReportAdd',
        data(){
            return {
                checkbox: [],
                showForm: {
                    subjectName: '1',
                    projectNo: '2',
                    commitmentUnit: '3',
                    unitHead: '4',
                    adjustTypeId: '1',
                    adjustmentMattersId: '',
                    specificFacts: '5'
                },
                paramsData: {
                    id: this.$route.params.id
                }
            }
        },
        methods: { 
            handleSubmit() {
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                this.showForm.adjustmentMattersId = this.checkbox.toString();
                
                console.log(this.showForm);
                this.axios({
                    url: 'http://192.168.0.80:8087/enviroment/daily/major/insertMajor',
                    method: 'post',
                    data: this.showForm
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
                        this.$alert('提交失败','提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
                    }
                }).catch(() => {
                    this.$alert('提交失败','提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        callback: action => {}
                    });
                })
            },
            handleBack() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less">
    #mattersReportAdd{
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
                    padding: 10px;
                }
            }
        }
        .btn_group {
            margin: 10px 0 30px 0;
        }
    }
</style>
