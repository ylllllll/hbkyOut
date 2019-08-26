<template>
    <div id="subjectApplyShow">
         <div class="showForm">
            <el-form ref="showForm" :model="showForm">
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">验收申请详情页</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题名称：</td>
                            <td>
                                <el-input disabled v-model="showForm.topicName" ></el-input>
                            </td>
                            <td>课题编号：</td>
                            <td>
                                <el-input disabled v-model="showForm.topicNumber"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位：</td>
                            <td colspan="3">
                                <el-input disabled v-model="showForm.subjectUndertakingUnit" ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>单位性质：</td>
                            <td colspan="3">
                                <el-radio-group v-model="showForm.unitNature" >
                                    <span v-for="(item,index) in unitNatureOptions" :key = index>
                                        <el-radio disabled :label="item.id">{{item.content}}</el-radio>
                                    </span>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>课题责任人：</td>
                            <td>
                                <el-input disabled v-model="showForm.projectLeader" ></el-input>
                            </td>
                            <td>课题责任人联系电话：</td>
                            <td>
                                <el-input disabled v-model="showForm.projectLeaderPhone" ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题责任人电子邮箱：</td>
                            <td>
                                <el-input disabled v-model="showForm.projectLeaderMail" ></el-input>
                            </td>
                            <td>课题责任人通讯地址：</td>
                            <td>
                                <el-input disabled v-model="showForm.postalAddress" ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>合同开始时间：</td>
                            <td>
                                <el-input disabled v-model="showForm.agreementStartTime" ></el-input>
                            </td>
                            <td>合同结束时间：</td>
                            <td>
                                <el-input disabled v-model="showForm.agreementEndTime" ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>验收申请时间：</td>
                            <td>
                                <!-- <el-input v-model="showForm.applicationAcceptanceTime" ></el-input> -->
                                <el-date-picker
                                    v-model="showForm.applicationAcceptanceTime"
                                    type="date"
                                    disabled
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </td>
                            <td>申请验收形式：</td>
                            <td>
                                <el-radio-group v-model="showForm.applicationAcceptanceMode" >
                                    <span v-for="(item,index) in applicationAcceptanceModeOptions" :key = index>
                                        <el-radio disabled :label="item.id">{{item.content}}</el-radio>
                                    </span>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>申请验收地点：</td>
                            <td colspan="3">
                                <el-input disabled v-model="showForm.applicationAcceptancePlace" ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>验收联系人：</td>
                            <td>
                                <el-input disabled v-model="showForm.acceptanceContact" ></el-input>
                            </td>
                            <td>验收联系人联系电话：</td>
                            <td>
                                <el-input disabled v-model="showForm.acceptanceContactPhone" ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>主要研究内容完成情况：</td>
                            <td colspan="3">
                                <el-input 
                                  disabled
                                  type="textarea"
                                  v-model="showForm.mainContentSituation"
                                  >
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>提交成果情况（合同规定提交成果完成情况及其它取得成果）：</td>
                            <td colspan="3">
                                <el-input 
                                 disabled
                                 type="textarea"
                                 v-model="showForm.submissionAchievementsSituation"
                                 >
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>验收提交资料清单：</td>
                            <td colspan="3"> 
                                <el-checkbox-group v-model="showForm.submitInventory">
                                    <span v-for="(item,index) in submitInventoryOptions" :key="index">
                                        <el-checkbox disabled :label="item.id">{{item.content}}</el-checkbox>
                                    </span>
                                </el-checkbox-group>
                            </td>
                        </tr>
                        <tr>
                            <td>课题承担单位意见：</td>
                            <td colspan="3">
                                <el-input 
                                 type="textarea"
                                 disabled
                                 v-model="showForm.subjectUndertakingUnitOpinion"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>所在地环保部门意见：</td>
                            <td colspan="3">
                                <el-input 
                                 disabled
                                 type="textarea"
                                 v-model="showForm.environmentalDepartmentsOpinion"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>省生态环境评估中心初审意见：</td>
                            <td colspan="3">
                                <el-input 
                                 disabled
                                 type="textarea"
                                 v-model="showForm.provinceAssessmentCenterOpinion"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>省环保厅主管部门意见：</td>
                            <td colspan="3">
                                <el-input 
                                 disabled
                                 type="textarea"
                                 v-model="showForm.competentDepartmentOinion"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>提交清单文件：</td>
                            <td colspan="3" style="height:50px;"> 
                                <el-input disabled v-model="showForm.submitInventoryUrl"></el-input>
                                <!-- <input type="file" id="submitInventoryFile"> -->
                            </td>
                        </tr>
                        <tr>
                            <td>验收申请表附件：</td>
                            <td colspan="3" style="height:50px;">
                                <el-input 
                                 disabled
                                 v-model="showForm.applicationAcceptanceUrl"
                                 ></el-input>
                                 <!-- <input type="file" id="applicationAcceptanceFile"> -->
                            </td>
                        </tr>
                        <tr>
                            <td>成果附件：</td>
                            <td colspan="3" style="height:50px;">
                                <el-input disabled v-model="showForm.achievementsUrl" ></el-input>
                                <!-- <a class='download' :href='showForm.achievementsUrl' download=""  title="下载">{{}}</a> -->
                                <!-- <input type="file" id="achievementsFile"> -->
                            </td>
                        </tr>
                    </tbody>
                 </table>

                <!-- 审核流程 -->
                <table v-show="showForm.extranetCheckApplyStateList.length>0" class="form_table1">
                    <tr>
                        <td>交办人</td>
                        <td>处理人</td>
                        <td>审核步骤</td>
                        <td>交办时间</td>
                        <td>状态</td>
                        <td>处理内容</td>
                        <td>处理时间</td>
                    </tr>
                    <tr v-for="(item,index) in showForm.extranetCheckApplyStateList">
                        <td>
                            <el-input disabled v-model="item.fistHandler"></el-input>
                        </td>
                        <td>
                            <el-input disabled v-model="item.secondHandler"></el-input>
                        </td>
                        <td>
                            <el-input disabled v-model="item.auditStep"></el-input>
                        </td>
                        <td style="width:16%;">
                            <el-input disabled v-model="item.firstHandleTime"></el-input>
                        </td>
                        <td>
                            <el-input disabled v-model="item.state"></el-input>
                        </td>
                        <td>
                            <el-input disabled v-model="item.handleContent"></el-input>
                        </td>
                        <td style="width:16%;">
                            <el-input disabled v-model="item.secondHandleTime"></el-input>
                        </td>
                    </tr>
                </table>
            </el-form>
            <el-button type="primary" v-show="this.$route.params.isShow == 2"  @click="handleExime">通过</el-button>
            <el-button type="primary" v-show="this.$route.params.isShow == 2"  @click="handleReject">驳回</el-button>
            <el-button type="primary"  @click="handleBack">返回</el-button>
        </div>
        <!-- 驳回理由弹框 -->
        <el-dialog
            title="请输入退回理由"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="请输入驳回理由：" prop="reason">
                    <el-input 
                     type="textarea" 
                     v-model="form.reason"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleBtnConfirm('form')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name:'subjectApplyShow',
    data(){
        return{
            showForm:{
                topicName:'',
                topicNumber:'',
                subjectUndertakingUnit:'',
                unitNature:'',
                projectLeader:'',
                projectLeaderPhone:'',
                projectLeaderMail:'',
                postalAddress:'',
                agreementStartTime:'',
                agreementEndTime:'',
                applicationAcceptanceTime:'',
                applicationAcceptanceMode:'',
                applicationAcceptancePlace:'',
                acceptanceContact:'',
                acceptanceContactPhone:'',
                mainContentSituation:'',
                submissionAchievementsSituation:'',
                submitInventory:[],
                subjectUndertakingUnitOpinion:'',
                environmentalDepartmentsOpinion:'',
                provinceAssessmentCenterOpinion:'',
                competentDepartmentOinion:'',
                // applicationAcceptanceUrl:'',
                // achievementsUrl:''
            },
            unitNatureOptions:[{//单位性质接口
                "id": 1,
                "classification": null,
                "content": "大专院校",
                "classificationId": null,
                "contentId": null,
                "state": null
            }],
            applicationAcceptanceModeOptions:[{//申请验收形式接口
                id:'',
                content:''
            }],
            submitInventoryOptions:[{//验收提交资料清单
                id:'',
                content:''
            }],
            paramsData:{
                id:this.$route.params.id,
                arrays:this.$route.params.arrays,
                isShow:this.$route.params.isShow
            },
            form:{
                reason:''
            },
            rules: {//表单验证
                reason:[
                    { required: true, message: '请输入驳回理由', trigger: 'blur' }
                ],
            },
            dialogVisible:false
        }
    },
    methods:{
        // 审核通过
        handleExime(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/apply/examine',
                params:{
                    id:_this.paramsData.id[0],
                    type:true
                }
            }).then(function(res){
                if(res.data.resultFlag == 1){
                    _this.$alert('请先登录', '提示', {
                        confirmButtonText: '确定',
                        type: 'warning'
                    }).then(() => {
                        _this.$router.push('/');
                    }).catch(() => {
                        _this.$router.push('/');
                    });
                }else{
                    _this.$alert('审核通过', '提示', {
                        confirmButtonText: '确定',
                        type: 'warning'
                    }).then(() => {
                        _this.$router.back(0)
                    }).catch(() => {
                        _this.$router.back(0)
                    });
                }
            }).catch(function(err){
                console.log(err)
            })
        },
        // 驳回
        handleReject(){
            this.dialogVisible = true
        },
        //弹框的关闭按钮点击事件
        handleClose(){
            this.dialogVisible = false
        },
        // 弹框的确认驳回
        handleBtnConfirm(formReason){
            let _this = this
            _this.$refs[formReason].validate((valid) => {
                if (valid) {
                   this.axios({
                        method:'POST',
                        url:'http://192.168.0.37:8087/apply/examine',
                        params:{
                            type:false,
                            reason:_this.form.reason,
                            id:_this.paramsData.id[0]
                        }
                    }).then(function(res){
                        _this.$alert('审核成功', '提示', {
                            confirmButtonText: '确定',
                            type:'warning',
                        }).then(() => {
                            _this.$router.back(0)
                        }).catch(() => {
                            _this.$router.back(0)
                        })
                    }).catch(function(err){
                        console.log(err)
                    })
                } else {
                    return false;
                }
            });
        },
        // 返回
        handleBack(){
            this.$router.back(-1)
        },
        // 单位性质字典类接口
        getUnitNature(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/checkApplyStyle/unitNature',
            }).then(function(res){
                _this.unitNatureOptions = res.data.data
            }).catch(function(err){
                console.log(err)
            })
        },
        //申请验收形式字典接口
        getApplicationAcceptanceModeOptions(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/checkApplyStyle/applicationAcceptance',
            }).then(function(res){
                _this.applicationAcceptanceModeOptions = res.data.data
            }).catch(function(err){
                console.log(err)
            })
        },
        // 验收提交资料清单接口
        getSubmitInventoryOptions(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/checkApplyStyle/applicationSubmitList'
            }).then(function(res){
                _this.submitInventoryOptions = res.data.data
            }).catch(function(err){
                console.log(err)
            })
        },
        // 根据id获取详情信息
        getInfoById(id){
            if(this.paramsData.arrays != '' || this.paramsData.arrays != undefined){
                this.paramsData.arrays.map((item) => {
                    if(id == item.id){
                        this.showForm = item
                        this.showForm.submitInventory = JSON.parse(item.submitInventory)
                        return;
                    }
                })
            }
        }
        
    },
    mounted(){
        this.getUnitNature()//单位性质
        this.getApplicationAcceptanceModeOptions()//申请验收形式
        this.getSubmitInventoryOptions()//验收提交资料清单接口
        this.getInfoById(this.paramsData.id)
    }
}
</script>
<style lang="less">
#subjectApplyShow{
    .showForm{
        .el-form{
            .el-table{
                min-width: 900px;
            }
            .form_table1{
                margin-top: 40px;
                width: 70%;
                min-width: 100px;
                tr{
                    td{
                        border-left: 1px solid #e0e0e0;
                        border-bottom: 1px solid #e0e0e0;
                        height: 50px;
                        text-align: center;
                        &:last-child{
                            border-right: 1px solid #e0e0e0;
                        }
                    }
                    &:first-child{
                        border-top: 1px solid #e0e0e0;
                        td{
                            background-color:#e5f3ff;
                        }
                    }
                }
            }
            td{
                text-align: left;
            }
            .el-select{
                width: 100%;
            }
            .el-radio{
                line-height: 50px;
                margin: 0 10px;
                .el-radio__input{
                    padding-right: 5px;
                }
                .el-radio__input.is-+span.el-radio__label{
                    color: #000;
                }
                .el-radio__input.is-checked .el-radio__inner{
                    background-color: #0abd90;
                    border-color: #0abd90;
                }
                .el-radio__input.is-.is-checked .el-radio__inner::after{
                    background-color: #fff;
                }
            }
            textarea{
                min-height: 100px !important;
                padding: 0 10px;
            }
            .el-checkbox-group{
                >span{
                    margin:5px 10px;
                    display: inline-block;
                    .el-checkbox{
                        min-width: 120px;
                        
                        .el-checkbox__label{
                            display: inline-block;
                        }
                    } 
                }
            }
            .el-checkbox__label{
                margin-left: 5px;
            }
            #achievementsFile,#applicationAcceptanceFile,#submitInventoryFile{
                margin-left:10px;
            }
            .el-date-editor{
                .el-input__inner{
                    padding-left: 30px;
                }
                .el-input__prefix{
                    line-height: 50px;
                }
            }
        }
    }
    .el-dialog__wrapper{
        .el-dialog{
            margin-top: 0 !important;
        }
        .el-form{
            .el-form-item__label{
                width: 200px !important;
            }
            .el-form-item__content{
                margin-left: 200px !important;
            }
            textarea{
                min-height: 278px !important;
                padding: 10px;
            }
        }
        .el-dialog__footer{
            text-align: center;
        }
    }
}
</style>