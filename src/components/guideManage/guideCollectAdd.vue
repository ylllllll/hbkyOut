<template>
    <div id="guideCollectAdd">
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
                                 v-model="showForm.name"
                                 >
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>所属领域：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.region"
                                 ></el-input></td>
                            <td>所属类别：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.category"
                                 >
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>建议理由及依据：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="showForm.basis"
                                 :autosize="{ minRows: 3}"
                                 type="textarea">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>主要研究内容和关键技术：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="showForm.technology"
                                 :autosize="{ minRows: 3}"
                                 type="textarea"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>预期目标和成果：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="showForm.achievements"
                                 :autosize="{ minRows: 3}"
                                 type="textarea">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>填报单位：</td>
                            <td>
                                <el-input v-model="showForm.unit">
                                </el-input>
                            </td>
                            <td>单位负责人(签字)：</td>
                            <td>
                                <el-input v-model="showForm.person">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>拟出标准、技术规范、法规名称：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.regulation">
                            </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>研究经费预测：</td>
                            <td>
                                <el-input v-model="showForm.forecast">
                                </el-input>
                            </td>
                            <td>研究期限：</td>
                            <td>
                                <el-input v-model="showForm.term">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>示范工程规模：</td>
                            <td>
                                <el-input v-model="showForm.scale">
                                </el-input>
                            </td>
                            <td>示范工程点：</td>
                            <td>
                                <el-input v-model="showForm.site">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>省内从事该领域的主要研究机构：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.mechanism">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>填报联系人：</td>
                            <td>
                                <el-input v-model="showForm.contact">
                                </el-input>
                            </td>
                            <td>联系电话（手机）：</td>
                            <td>
                                <el-input v-model="showForm.phone">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>附件：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.file">
                                </el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <el-button type="primary" @click = "handleBack">返回</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'guideCollectAdd',
        data(){
            return{
                showForm:{
                    name:'名称1',
                    region:'',
                    category:'',
                    basis:'',
                    technology:'',
                    achievements:'',
                    unit:'',
                    person:'',
                    regulation:'',
                    forecast:'',
                    term:'',
                    scale:'',
                    site:'',
                    mechanism:'',
                    contact:'',
                    phone:'',
                    file:''
                }
            }
        },
        methods:{
            handleBack:function(){
                this.$router.go(-1);//返回上一页
                // this.$router.push({
                //     name:"GuideCollectList"
                // })
                // console.log(1)
            }
        }
    }
</script>

<style lang="less">
#guideCollectAdd{
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
        }
    }
}
</style>