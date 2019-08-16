<template>
    <div id="subjectApplyEndShow">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm" >
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">验收结束详情页</th></tr>
                    </thead>
                    <!-- 
                        文号：苏环验字[        ]第    号
课题编号
课题名称
完成单位
验收组织部门
验收日期
完成单位名称
单位性质，分为：1. 大专院校、2. 科研院所、3. 企业、4. 其他
所在地区
法定代表人
法定代表人电话
联系人
联系人电话
单位邮政编码
单位电子信箱
单位通讯地址
单位主管部门
课题起始时间
课题完成时间
成 果 形 式(可选多项，另页附成果资料清单)，分为：1. 论文论著、2. 研究(咨询)报告、3. 新产品、4. 新装置、5. 新材料、6. 新工艺(或新方法、新模式) 、7. 计算机软件、8. 技术标准、9. 专利、10. 其它
成果水平，分为：1. 国际领先、2. 国际先进、3. 国内领先、4. 国内先进、5. 省内领先、6. 其它
专利申请发明（件）
专利申请实用新型（件）
专利申请外观设计（件）
专利授权发明（件）
专利授权实用新型（件）
专利授权外观设计（件）
发表论文总数（篇）
科学引文索引（SCI）论文
工程索引（EI）论文
出版科技著作（部）
制定技术标准（个）
新产品（个）
制定政策制度（项）
建成新装置（套）
新工艺（项）
                     -->
                    <tbody>
                        <tr>
                            <td>文号：</td>
                            <td colspan="3">
                                <el-input
                                 v-model="showForm.projectName"
                                 :disabled="true"
                                 >
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题编号：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.tenderNo"
                                 :disabled="true"
                                 ></el-input></td>
                            <td>课题名称：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.subcontractingNo"
                                 :disabled="true"
                                 >
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>完成单位：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="showForm.subjectName" 
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>验收组织部门：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.winningAmount" 
                                 :disabled="true"
                                 ></el-input>
                            </td>
                            <td>验收日期：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.supportingFunds" 
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>投标人：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.bidders"
                                 :disabled="true">
                                </el-input>
                            </td>
                            <td>课题负责人：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.subjectLeader"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题负责人联系方式：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="showForm.leaderContact" 
                                 :disabled="true"
                                >
                            </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>备注：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="showForm.remarks"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>中标文件附件：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="Enclosure.fujian1"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>成交公告附件：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="Enclosure.fujian2"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>成交通知书附件：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="Enclosure.fujian3"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>响应文件附件：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="Enclosure.fujian4"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>其他附件：</td>
                            <td colspan="3">
                                <el-input 
                                 v-model="Enclosure.fujian5"
                                 :disabled="true">
                                </el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <el-button type="primary" v-show="isShow" @click = "handleExamine">审核</el-button>
            <el-button type="primary" @click = "handleBack">返回</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'subjectApplyEndShow',
    data(){
        return{
            showForm:{
                id:'',
                entry_name:'111',
                tenderNo:'222',
                subjectName:'',
                winningAmount:'',
                supportingFunds:'',
                bidders:'',
                subjectLeader:'',
                leaderContact:'',
                forecast:''
            },
            Enclosure:{
                fujian1:'222',
                fujian2:'',
                fujian3:'222',
                fujian4:'',
                fujian5:'222',
            },
            isShow:true
        }
    },
    methods:{
        handleBack:function(){
            this.$router.go(-1);//返回上一页
        },
        handleExamine(){

        }
    },
}
</script>
