<template>
    <div id="mattersReportAdd">
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
                                    v-model="showForm.projectName"
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>课题编号：</td>
                            <td>
                                <el-input
                                    v-model="showForm.projectName"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.tenderNo"
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>负责人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.subcontractingNo"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>申请类型：</td>
                            <td colspan="3">
                                <el-radio v-model="radio" label="1">变更</el-radio>
                                <el-radio v-model="radio" label="2">备案</el-radio>
                            </td>
                        </tr>
                        <tr v-if="radio == 1">
                            <td>变更事项：</td>
                            <td colspan="3">
                                <el-checkbox-group v-model="checkList1">
                                    <div class="item">
                                        <el-checkbox label="0"></el-checkbox>
                                        <label>课题负责人</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="1"></el-checkbox>
                                        <label>研究内容或示范点</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="2"></el-checkbox>
                                        <label>课题延期</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="3"></el-checkbox>
                                        <label>课题经费</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="4"></el-checkbox>
                                        <label>其他</label>
                                    </div>
                                </el-checkbox-group>
                            </td>
                        </tr>
                        <tr v-if="radio == 2">
                            <td>备案事项：</td>
                            <td colspan="3">
                                <el-checkbox-group v-model="checkList1">
                                    <div class="item">
                                        <el-checkbox label="0"></el-checkbox>
                                        <label>主要参加人员变动</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="1"></el-checkbox>
                                        <label>课题经费调整</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="2"></el-checkbox>
                                        <label>其他</label>
                                    </div>
                                </el-checkbox-group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                具体情况：
                                <br>
                                （说明需备案的事项及其原因）
                            </td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.remark"
                                    :autosize="{ minRows:10 }"
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
            return{
                radio: '1',
                checkList1: [],
                checkList2: [],
                showForm:{
                },
                Enclosure:{
                    fujian1:'',
                    fujian2:'',
                    fujian3:'',
                    fujian4:'',
                    fujian5:'',
                },
                paramsData: {
                    id: this.$route.params.id
                },
                tableData: []
            }
        },
        methods:{ 
            handleSubmit() {
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                setTimeout(() => {
                    loading.close();
                    this.$alert('审批通过','提示', {
                        confirmButtonText: '确定',
                        type: 'success',
                        callback: action => {
                            this.$router.go(-1);
                        }
                    });
                },2000);
            },
            handleBack() {
                this.$router.go(-1);
            }
        },
        // beforeMount() {
        //     this.axios({
        //         url: 'http://192.168.0.80:8087/environment/tender/getTenderById',
        //         method: 'get',
        //         params: {
        //             id: this.paramsData.id
        //         }
        //     }).then((res) => {
        //         this.showForm = res.data.data[0];
        //     })
        // }
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
            }
        }
        .btn_group {
            margin: 10px 0 30px 0;
        }
    }
</style>
