<template>
    <div id="guideCollectAdd">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm">
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">指南征集申报</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>指南建议名称：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.guideName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>所属领域：</td>
                            <td>
                                <el-select v-model="showForm.domain">
                                    <el-option v-for="(item,index) in optGroup1" :key="index" :label="item.content" :value="item.id"></el-option>
                                </el-select>
                            </td>
                            <td>所属类别：</td>
                            <td>
                                <el-select v-model="showForm.category">
                                    <el-option v-for="(item,index) in optGroup2" :key="index" :label="item.content" :value="item.id"></el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <td>建议理由及依据：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.reasonBasis"
                                    :autosize="{ minRows:4 }"
                                    type="textarea"
                                    maxlength="300"
                                    placeholder="请输入少于300字">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>主要研究内容和关键技术：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.researchContentTechnology"
                                    :autosize="{ minRows:4 }"
                                    type="textarea"
                                    maxlength="300"
                                    placeholder="请输入少于300字">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>预期目标和成果：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.expectedTargetOutcome"
                                    :autosize="{ minRows:4 }"
                                    type="textarea"
                                    maxlength="200"
                                    placeholder="请输入少于200字">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>填报单位：</td>
                            <td>
                                <el-input v-model="showForm.fillUnit" readonly></el-input>
                            </td>
                            <td>单位负责人：</td>
                            <td>
                                <el-input v-model="showForm.unitPrincipal"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>拟出标准、技术规范、法规名称：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.standardsSpecificationsRegulatory"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>研究经费预测（万元）：</td>
                            <td>
                                <el-input v-model="showForm.researchFund">
                                </el-input>
                            </td>
                            <td>研究期限（年）：</td>
                            <td>
                                <el-input v-model="showForm.researchPeriod"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>示范工程规模：</td>
                            <td>
                                <el-input v-model="showForm.demonstrationScale"></el-input>
                            </td>
                            <td>示范工程点：</td>
                            <td>
                                <el-input v-model="showForm.demonstrationPoint"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>省内从事该领域的主要研究机构：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.provinceDomainMechanism"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>填报联系人：</td>
                            <td>
                                <el-input v-model="showForm.fillContacts"></el-input>
                            </td>
                            <td>联系电话（手机）：</td>
                            <td>
                                <el-input v-model="showForm.contactPhone"></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <div class="btn_group">
                <el-button @click="handleSubmit">提交</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        inject: ["reload"],
        name:'guideCollectAdd',
        data() {
            return {
                showForm: {
                    guideName: '',
                    domain: '',
                    category: '',
                    reasonBasis: '',
                    researchContentTechnology: '',
                    expectedTargetOutcome: '',
                    fillUnit: '',
                    unitPrincipal: '',
                    standardsSpecificationsRegulatory: '',
                    researchFund: '',
                    researchPeriod: '',
                    demonstrationScale: '',
                    demonstrationPoint: '',
                    provinceDomainMechanism: '',
                    fillContacts: '',
                    contactPhone: ''
                },
                optGroup1: [],
                optGroup2: []
            }
        },
        methods:{
            handleSubmit() {
                // 非空验证
                for(let i in this.showForm) {
                    if((this.showForm[i] + "").match(/^[ ]*$/)){
                        this.$alert('请将表格填写完整','提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
                        return false;
                    } 
                }
                // 手机验证
                let validatePhone = this.validate.validatePhone(this.showForm.contactPhone);
                if(validatePhone) {
                    this.$alert(validatePhone,'提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        callback: action => {}
                    });
                    return false;
                }
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/guide/insertGuideInfo',
                    method: 'post',
                    data: this.showForm
                }).then((res) => {
                    loading.close();
                    let data = res.data;
                    if(data.resultFlag == 0) {
                        this.$alert('提交成功','提示', {
                            confirmButtonText: '确定',
                            type: 'success',
                            callback: action => {
                                this.reload();
                            }
                        });
                    }else {
                        this.$alert('提交失败','提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
                    }
                }).catch((err) => {
                    loading.close();
                    this.$alert('提交失败','提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        callback: action => {}
                    });
                })
            }
        },
        beforeCreate() {
            this.axios({
                url: 'http://192.168.0.80:8087/environment/guide/getCategoryAndDomain',
                method: 'get',
            }).then((res) => {
                let data = res.data.data;
                for(let i in data) {
                    if(data[i].classification == "所属领域") {
                        this.optGroup1.push(data[i]);
                    }else {
                        this.optGroup2.push(data[i]);
                    }
                }
                // 取公司类别
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/guide/getCookieValue',
                    method: 'post',
                }).then((res) => {
                    console.log(res);
                    this.$nextTick(() => {
                        this.showForm.fillUnit = res.data.data;
                    })
                })
            })
        }
    }
</script>

<style lang="less">
    #guideCollectAdd{
        background-color: #fff;
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
                            .el-select {
                                width: 100%;
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
            }
        }
    }
</style>
