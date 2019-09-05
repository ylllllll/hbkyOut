<template>
    <div id="subjectApplyAdd">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm">
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">验收申请添加页</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题名称：</td>
                            <td @click="handleSelect">
                                <el-input v-model="showForm.topicName" disabled placeholder="点击选择课题名称" ></el-input>

                            </td>
                            <td>课题编号：</td>
                            <td>
                                <el-input v-model="showForm.topicNumber" disabled ></el-input>
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
                                <el-date-picker
                                    v-model="showForm.applicationAcceptanceTime"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </td>
                            <td>申请验收形式：</td>
                            <td>
                                <el-radio-group v-model="showForm.applicationAcceptanceMode" >
                                    <span v-for="(item,index) in applicationAcceptanceModeOptions" :key = index>
                                        <el-radio :label="item.id">{{item.content}}</el-radio>
                                    </span>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>申请验收地点：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.applicationAcceptancePlace" ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>验收联系人：</td>
                            <td>
                                <el-input v-model="showForm.acceptanceContact" ></el-input>
                            </td>
                            <td>验收联系人联系电话：</td>
                            <td>
                                <el-input v-model="showForm.acceptanceContactPhone" ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>主要研究内容完成情况：</td>
                            <td colspan="3">
                                <el-input 
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
                                        <el-checkbox :label="item.id">{{item.content}}</el-checkbox>
                                    </span>
                                </el-checkbox-group>
                            </td>
                        </tr>
                        <tr>
                            <td>课题承担单位意见：</td>
                            <td colspan="3">
                                <el-input 
                                 type="textarea"
                                 v-model="showForm.subjectUndertakingUnitOpinion"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>所在地环保部门意见：</td>
                            <td colspan="3">
                                <el-input 
                                 type="textarea"
                                 v-model="showForm.environmentalDepartmentsOpinion"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>省生态环境评估中心初审意见：</td>
                            <td colspan="3">
                                <el-input 
                                 type="textarea"
                                 v-model="showForm.provinceAssessmentCenterOpinion"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>省环保厅主管部门意见：</td>
                            <td colspan="3">
                                <el-input 
                                 type="textarea"
                                 v-model="showForm.competentDepartmentOinion"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>提交清单文件：</td>
                            <td colspan="3" style="height:50px;"> 
                                <input type="file" id="submitInventoryFile">
                            </td>
                        </tr>
                        <tr>
                            <td>验收申请表附件：</td>
                            <td colspan="3" style="height:50px;">
                                 <input type="file" id="applicationAcceptanceFile">
                            </td>
                        </tr>
                        <tr>
                            <td>成果附件：</td>
                            <td colspan="3" style="height:50px;">
                                <input type="file" id="achievementsFile">
                            </td>
                        </tr>
                    </tbody>
                 </table>
            </el-form>
            <el-button type="primary"  @click="handleSubmit">提交</el-button>
        </div>
        <!-- 选择课题名称弹出框 -->
        <div class="popBox" v-if="isShowPopBox">
            <div class="popContent">
                <popBox @confirm="handleChildConfirm" @popClose="handlePopClose"></popBox>
            </div>
        </div>
    </div>
</template>
<script>
import SubjectApplyAddBox from '@/components/subjectAccept/subjectApplyAddBox'
export default {
    inject:["reload"],
    name:'subjectApplyAdd',
    components:{
        popBox:SubjectApplyAddBox
    },
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
            },
            topicNameOptions:[{//课题名称
                "id":'',
                "subjectName":''
            }],
            topicNumberOptions:[{//课题编号
            }],
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
            isShowPopBox:false,
            contractId:''
        }
    },
    methods:{
        // 提交
        handleSubmit(){
            for(let i in this.showForm){
                if(typeof(this.showForm[i]) == "string"){
                    if(this.showForm[i].match(/^[ ]*$/) || this.showForm[i] == 'null' || this.showForm == undefined){
                        this.$alert('请将表格填写完整', '提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
                        return false;
                    }
                }
                if(typeof(this.showForm[i]) == "object") {
                    if(this.showForm[i].length == 0) {
                        this.$alert('请至少选择一类', '提示', {
                            confirmButtonText: '确定',
                            callback: action => {}
                        });
                        return false;
                    }
                }
                if(typeof(this.showForm[i]) == Array) {
                    if(this.showForm[i].length == 0) {
                        this.$alert('请至少选择一类', '提示', {
                            confirmButtonText: '确定',
                            callback: action => {}
                        });
                        return false;
                    }
                }
            }
            this.submitAxios()
        },
        submitAxios(){
            let _this = this
            let formData = new FormData()
            let submitInventoryFile = document.getElementById('submitInventoryFile').files[0]
            let applicationAcceptanceFile = document.getElementById('applicationAcceptanceFile').files[0]
            let achievementsFile = document.getElementById('achievementsFile').files[0]
            formData.append('submitInventoryFile',submitInventoryFile)
            formData.append('applicationAcceptanceFile',applicationAcceptanceFile)
            formData.append('achievementsFile',achievementsFile)
            let extranetCheckApply = JSON.stringify({
                topicName:_this.showForm.topicName,
                topicNumber:_this.showForm.topicNumber,
                subjectUndertakingUnit:_this.showForm.subjectUndertakingUnit,
                unitNature:_this.showForm.unitNature,
                projectLeader:_this.showForm.projectLeader,
                projectLeaderPhone:_this.showForm.projectLeaderPhone,
                projectLeaderMail:_this.showForm.projectLeaderMail,
                postalAddress:_this.showForm.postalAddress,
                agreementStartTime:_this.showForm.agreementStartTime,
                agreementEndTime:_this.showForm.agreementEndTime,
                applicationAcceptanceTime:_this.showForm.applicationAcceptanceTime,
                applicationAcceptanceMode:_this.showForm.applicationAcceptanceMode,
                applicationAcceptancePlace:_this.showForm.applicationAcceptancePlace,
                acceptanceContact:_this.showForm.acceptanceContact,
                acceptanceContactPhone:_this.showForm.acceptanceContactPhone,
                mainContentSituation:_this.showForm.mainContentSituation,
                submissionAchievementsSituation:_this.showForm.submissionAchievementsSituation,
                subjectUndertakingUnitOpinion:_this.showForm.subjectUndertakingUnitOpinion,
                environmentalDepartmentsOpinion:_this.showForm.environmentalDepartmentsOpinion,
                provinceAssessmentCenterOpinion:_this.showForm.provinceAssessmentCenterOpinion,
                competentDepartmentOinion:_this.showForm.competentDepartmentOinion,
                submitInventory:JSON.stringify(_this.showForm.submitInventory),
            })
            formData.append('extranetCheckApply', new Blob([extranetCheckApply], {type: "application/json"}))
            formData.append('contractId',_this.contractId)
            this.axios({
                method:'POST',
                url:'http://192.168.0.80:8087/apply/addAcceptApply',
                //忽略contentType
                contentType: false,
                //取消序列换 formData本来就是序列化好的
                processData: false,
                dataType: "json",
                data:formData
            }).then(function(res){
                let data = res.data.data
                _this.$alert(data, '提示', {
                    confirmButtonText: '确定',
                    type:'info',
                    callback: action => {
                        _this.reload()
                    }
                });
            }).catch(function(err){
                console.log(err)
            })
        },
        // 点击课题名称
        handleSelect(){
            this.isShowPopBox = true
        },
        handleChildConfirm(val,data){
            if(val.length != 1){
                this.$alert('请选择一条数据','提示',{
                    confirmButtonText: '确定',
                    type: 'warning',
                    callback: action => {}
                })
            }else{
                this.isShowPopBox = false
                data.map((item) => {
                    if(val[0] == item.id){
                        this.contractId = item.id
                        this.showForm.topicName = item.subjectName
                        this.showForm.topicNumber = item.projectNo
                        this.showForm.subjectUndertakingUnit = item.commitmentUnit
                        this.showForm.unitNature = item.unitNature
                        this.showForm.projectLeader= item.subjeceLeader
                        this.showForm.projectLeaderPhone = item.subjectLeaderPhone
                        this.showForm.projectLeaderMail = item.email 
                        this.showForm.postalAddress= item.commitmentUnitAddress
                        this.showForm.agreementStartTime = item.contractStartTime
                        this.showForm.agreementEndTime = item.contractEndTime
                        return;
                    }
                })
            }
        },
        // 关闭
        handlePopClose(){
            this.isShowPopBox = false
        },
        // 单位性质字典类接口
        getUnitNature(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.80:8087/checkApplyStyle/unitNature',
            }).then(function(res){
                _this.unitNatureOptions = res.data.data
                _this.getApplicationAcceptanceModeOptions()
            }).catch(function(err){
                console.log(err)
            })
        },
        //申请验收形式字典接口
        getApplicationAcceptanceModeOptions(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.80:8087/checkApplyStyle/applicationAcceptance',
            }).then(function(res){
                _this.applicationAcceptanceModeOptions = res.data.data
                _this.getSubmitInventoryOptions()
            }).catch(function(err){
                console.log(err)
            })
        },
        // 验收提交资料清单接口
        getSubmitInventoryOptions(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.80:8087/checkApplyStyle/applicationSubmitList'
            }).then(function(res){
                _this.submitInventoryOptions = res.data.data
            }).catch(function(err){
                console.log(err)
            })
        }
        
    },
    async created(){
        await this.getUnitNature()//单位性质
        // await this.getApplicationAcceptanceModeOptions()//申请验收形式
        // await this.getSubmitInventoryOptions()//验收提交资料清单接口
    }
}
</script>
<style lang="less">
#subjectApplyAdd{
    .showForm{
        .el-form{
            .el-table{
                min-width: 900px;
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
    .popBox{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        top: 0;
        left: 0;
        z-index: 101;
        .popContent{
            position: absolute;
            width: 85%;
            min-width: 1000px;
            height: 580px;
            overflow: auto;
            background-color: #fff;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
        }
    }
}

</style>
