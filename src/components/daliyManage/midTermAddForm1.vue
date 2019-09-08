<template>
    <div id="midTermAddForm1">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm" >
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">江苏省环保科研课题中期检查专家评估表</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题编号：</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>课题负责人：</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题名称：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.tenderNo"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.tenderNo"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4" style="height:50px;text-align:center;background-color:#fff;">评估内容</td>
                        </tr>
                        <tr style="height:50px;">
                            <td>汇报情况：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="radio" label="1">内容清楚</el-radio>
                                <el-radio v-model="radio" label="2">内容基本清楚</el-radio>
                                <el-radio v-model="radio" label="3">内容不够清楚</el-radio>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>进度执行情况：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="radio1" label="1">超额完成</el-radio>
                                <el-radio v-model="radio1" label="2">完成</el-radio>
                                <el-radio v-model="radio1" label="3">基本完成</el-radio>
                                <el-radio v-model="radio1" label="4">未完成</el-radio>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>课题实施所需条件：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="radio2" label="1">落实</el-radio>
                                <el-radio v-model="radio2" label="2">基本落实</el-radio>
                                <el-radio v-model="radio2" label="3">未落实</el-radio>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>技术、经济等考核指标：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="radio3" label="1">达到合同规定</el-radio>
                                <el-radio v-model="radio3" label="2">基本达到合同规定</el-radio>
                                <el-radio v-model="radio3" label="3">未达合同规定</el-radio>
                            </td>
                        </tr>
                        <tr>
                            <td>取得重大技术突破以及成效等情况：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.tenderNo"></el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>经费执行情况：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="radio4" label="1">合同</el-radio>
                                <el-radio v-model="radio4" label="2">基本合理</el-radio>
                                <el-radio v-model="radio4" label="3">不合理</el-radio>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>下一步工作机会：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="radio5" label="1">可行</el-radio>
                                <el-radio v-model="radio5" label="2">基本可行</el-radio>
                                <el-radio v-model="radio5" label="3">不可行</el-radio>
                            </td>
                        </tr>
                        <tr>
                            <td>存在问题：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.remark"
                                    :autosize="{ minRows:6 }"
                                    type="textarea">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>建议：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.remark"
                                    :autosize="{ minRows:6 }"
                                    type="textarea">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>专家组综合意见：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.remark"
                                    :autosize="{ minRows:6 }"
                                    type="textarea">
                                </el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>评价等级：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="radio6" label="1">优秀</el-radio>
                                <el-radio v-model="radio6" label="2">良好</el-radio>
                                <el-radio v-model="radio6" label="3">一般</el-radio>
                                <el-radio v-model="radio6" label="4">较差</el-radio>
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
        name: 'midTermAddForm1',
        data() {
            return{
                radio: '',
                radio1: '',
                radio2: '',
                radio3: '',
                radio4: '',
                radio5: '',
                radio6: '',
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
        methods: {
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
                this.$router.push("/index/midTerm/midTermList");
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
    #midTermAddForm1{
        padding-bottom: 20px;
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
                            .el-textarea {
                                padding: 10px;
                            }
                        }
                    }
                }
                .radio_group {
                    text-align: left;
                    padding-left: 20px;
                    .el-radio {
                        width: 165px;
                    }
                }
            }
        }
        .btn_group {
            margin: 10px 0 0 0;
        }
    }
</style>
