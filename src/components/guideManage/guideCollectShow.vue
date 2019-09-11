<template>
    <div id="guideCollectShow">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm">
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">指南中心详情页</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>指南建议名称：</td>
                            <td colspan="3">
                                <el-input
                                    v-model="showForm.guide_name"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>所属领域：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.domain"
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>所属类别：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.category"
                                 :disabled="true"
                                 >
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>建议理由及依据：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.reason_basis" 
                                    :disabled="true"
                                    :autosize="{ minRows:4 }"
                                    type="textarea">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>主要研究内容和关键技术：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.research_content_technology" 
                                    :disabled="true"
                                    :autosize="{ minRows:4 }"
                                    type="textarea">
                                 </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>预期目标和成果：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.expected_target_outcome" 
                                    :disabled="true"
                                    :autosize="{ minRows:4 }"
                                    type="textarea">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>填报单位：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.fill_unit"
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>单位负责人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.unit_principal"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>拟出标准、技术规范、法规名称：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.standards_specifications_regulatory" 
                                    :disabled="true">
                            </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>研究经费预测：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.research_fund"
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>研究期限（年）：</td>
                            <td>
                                <el-input
                                    v-model="showForm.research_period"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>示范工程规模：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.demonstration_scale"
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>示范工程点：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.demonstration_point"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>省内从事该领域的主要研究机构：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.province_domain_mechanism"
                                    :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>填报联系人：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.fill_contacts"
                                    :disabled="true">
                                </el-input>
                            </td>
                            <td>联系电话（手机）：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.contact_phone"
                                    :disabled="true">
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
        name:'guideCollectShow',
        data(){
            return{
                showForm: {
                    guide_name: 1
                },
                paramsData: {
                    id: this.$route.params.id,
                    data: this.$route.params.data,
                }
            }
        },
        methods: {
            handleBack:function(){
                this.$router.go(-1);
            }
        },
        beforeMount() {
            console.log(this.paramsData.data);
            // 遍历数据
            for(let i in this.paramsData.data) {
                if(this.paramsData.id == this.paramsData.data[i].id) {
                    this.showForm = this.paramsData.data[i];
                    return false;
                }
            }
        },
    }
</script>

<style lang="less">
    #guideCollectShow{
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
