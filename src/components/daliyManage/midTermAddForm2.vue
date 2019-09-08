<template>
    <div id="midTermAddForm2">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm" >
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">省环保科研课题中期检查表</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题编号：</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>起止时间：</td>
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
                            <td>参加单位：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.tenderNo"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题负责人：</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>课题负责人联系电话：</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题联系人：</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>课题联系人联系电话：</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table" :model="showForm">
                    <thead>
                        <tr>
                            <th colspan="7" class="small_title">一、课题按合同计划进度执行情况</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="height:50px;">
                            <td>课题按合同计划进度执行情况：</td>
                            <td colspan="3" class="radio_group">
                                <el-radio v-model="radio3" label="1">超额完成</el-radio>
                                <el-radio v-model="radio3" label="2">完成</el-radio>
                                <el-radio v-model="radio3" label="3">基本完成</el-radio>
                                <el-radio v-model="radio3" label="4">未完成</el-radio>
                            </td>
                        </tr>
                        <tr style="height:50px;">
                            <td>课题进度未按时完成的，请选择以下原因（多选）：</td>
                            <td colspan="3">
                                <el-checkbox-group v-model="checkList">
                                    <div class="item">
                                        <el-checkbox label="1"></el-checkbox>
                                        <label>技术变化</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="2"></el-checkbox>
                                        <label>经济未落实</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="3"></el-checkbox>
                                        <label>协作关系影响</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="4"></el-checkbox>
                                        <label>其他原因</label>
                                    </div>
                                    <div class="item">
                                        <el-checkbox label="5"></el-checkbox>
                                        <label>项目负责人或技术骨干变动</label>
                                    </div>
                                </el-checkbox-group>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table my_table" :model="showForm">
                    <thead>
                        <tr>
                            <th colspan="7" class="small_title">二、项目资金落实与使用情况（经费单位：万元）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="height:50px;" id="my_tr">
                            <td></td>
                            <td>总经费</td>
                            <td colspan="2">省环保课题经费</td>
                            <td>单位自筹</td>
                            <td colspan="2">其他</td>
                        </tr>
                        <tr>
                            <td>课题编号：</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td colspan="2">
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td colspan="2">
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>已到位数：</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td colspan="2">
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td colspan="2">
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;" id="my_tr2">
                            <td colspan="6">省环保课题经费使用情况：目前已支出111万元，具体如下（对照合同支出范围填写）：</td>
                        </tr>
                        <tr style="height:50px;" id="my_tr">
                            <td>设备费</td>
                            <td>材料费</td>
                            <td>测试化验加工费</td>
                            <td>燃料动力费</td>
                            <td>差旅费</td>
                            <td>会议费</td>
                            <td>专家咨询费</td>
                        </tr>
                        <tr>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr style="height:50px;" id="my_tr">
                            <td colspan="2">出版/文献/信息传播/知识产权事务费</td>
                            <td>劳务费（或管理及人员费中人员费）</td>
                            <td>其他费用</td>
                            <td colspan="2">间接费用（水、电、气消耗及管理费等）</td>
                            <td>外部合作费</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td colspan="2">
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table my_table" :model="showForm">
                    <thead>
                        <tr>
                            <th colspan="7" class="small_title">三、项目已取得的主要成果情况</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="3" style="text-align:center;">经济社会效益情况</td>
                            <td>新增销售额<br>（万元）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>新增利润<br>（万元）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>新增税金<br>（万元）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>创汇<br>（万美元）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>新产品<br>（个）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>新增装备（装置）（台）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>新材料<br>（件）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>新工艺<br>（项）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>新品种<br>（个）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="4" style="text-align:center;">取得成果情况</td>
                            <td>发明专利</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>实用新型</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>外观设计</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>国外专利</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>论文总数<br>（篇）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>核心期刊<br>（篇）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>SCI索引<br>（篇）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>EI索引<br>（篇）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>出版专著<br>（部）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr id="my_tr3">
                            <td>研究（咨询）<br>报告（份）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>制定技术标准（个）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td>出台文件<br>（个）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2" style="text-align:center;">人才培养情况（人）</td>
                            <td>高级人才<br>（人）</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td colspan="4"></td>
                        </tr>
                        <tr id="my_tr3">
                            <td>培养研究生人数</td>
                            <td>
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                            <td colspan="4"></td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table my_table" :model="showForm">
                    <thead>
                        <tr>
                            <th colspan="7" class="small_title">四、课题实施情况说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="my_tr4">
                            <td>
                                <p>1、项目实际进度情况（包括经济、技术等指标完成情况，重点介绍课题进展、重大突破及工作成效等）（限300字以内）</p>
                                <el-input 
                                    v-model="showForm.remark"
                                    :autosize="{ minRows:5 }"
                                    type="textarea"
                                    maxlength="300">
                                </el-input>
                            </td>
                        </tr>
                        <tr id="my_tr4">
                            <td>
                                <p>2、课题资金使用情况（包括资金落实、使用及存在问题）（限200字以内）</p>
                                <el-input 
                                    v-model="showForm.remark"
                                    :autosize="{ minRows:5 }"
                                    type="textarea"
                                    maxlength="200">
                                </el-input>
                            </td>
                        </tr>
                        <tr id="my_tr4">
                            <td>
                                <p>3、项目执行过程中存在的问题、解决措施及有关建议（限200字以内）</p>
                                <el-input 
                                    v-model="showForm.remark"
                                    :autosize="{ minRows:5 }"
                                    type="textarea"
                                    maxlength="200">
                                </el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table my_table" :model="showForm">
                    <thead>
                        <tr>
                            <th colspan="7" class="small_title">五、项目承担单位审核意见（主要对项目填写情况是否属实作出评价）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="my_tr4">
                            <td>
                                <el-input 
                                    v-model="showForm.remark"
                                    :autosize="{ minRows:5 }"
                                    type="textarea"
                                    maxlength="300">
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
        name: 'midTermAddForm2',
        data() {
            return{
                radio: '',
                radio1: '',
                radio2: '',
                radio3: '',
                radio4: '',
                radio5: '',
                radio6: '',
                checkList: [],
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
    #midTermAddForm2 {
        padding-bottom: 20px;
        background-color: #fff;
        margin-bottom: 20px;
        .showForm {
            table.form_table {
                @media  screen and ( max-width: 1600px ) {
                    width: 72.4%;
                }
                thead {
                    tr {
                        .small_title {
                            height: 30px;
                            line-height: 30px;
                            text-align: left;
                            padding-top: 10px;
                        }
                    }
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
                            .el-checkbox-group {
                                padding: 8px 0;
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: left;
                                .item {
                                    width: 24%;
                                    white-space: nowrap;
                                    text-align: left;
                                    padding-left: 20px;
                                    line-height: 2;
                                }
                            }
                        }
                        
                    }
                }
                .radio_group {
                    text-align: left;
                    padding-left: 20px;
                    .el-radio {
                        width: 24%;
                    }
                }
            }
            .my_table {
                td {
                    width: 14.2857% !important;
                }
                #my_tr {
                    td {
                        text-align: center;
                        background-color: #e5f3ff;
                    } 
                }
                #my_tr2 {
                    td {
                        text-align: left;
                        background-color: #fff;
                        padding-left: 10px;
                    }
                }
                #my_tr3 {
                    td {
                        text-align: center;
                        background-color: #fff;
                    }
                }
                #my_tr4 {
                    td {
                        background-color: #fff;
                        text-align: left;
                        padding: 10px;
                    }
                    
                }
            }
        }
        .btn_group {
            margin: 10px 0 0 0;
        }
    }
</style>
