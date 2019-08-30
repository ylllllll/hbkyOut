<template>
    <div id="subjectUploadFirst">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm">
                <table class="form_table">
                     <thead>
                        <tr><th colspan="4">省环保科研课题验收专家组意见</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>项目名称：</td>
                            <td colspan="3"><el-input disabled v-model="showForm.topicName"></el-input></td>
                        </tr>
                        <tr>
                            <td>课题编号：</td>
                            <td><el-input disabled v-model="showForm.topicNumber"></el-input></td>
                            <td>课题负责人：</td>
                            <td><el-input disabled v-model="showForm.projectLeader"></el-input></td>
                        </tr>
                        <tr>
                            <td>课题承担单位：</td>
                            <td colspan="3">
                                <el-input disabled v-model="showForm.subjectUndertakingUnit"></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table1">
                    <tbody>
                        <tr>
                            <td colspan="8">一、评分表</td>
                        </tr>
                        <tr>
                            <td style="width:13%;"><span>验收专家人数：</span></td>
                            <td colspan="7">
                                <el-input v-model="showForm.acceptanceExpertNumber"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td><span>专家序号：</span></td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td><span>专家评分：</span></td>
                            <td><el-input v-model="showForm.expertOneGrade" v-on:input="watchNum"></el-input></td>
                            <td><el-input v-model="showForm.expertTwoGrade" v-on:input="watchNum"></el-input></td>
                            <td><el-input v-model="showForm.expertThreeGrade" v-on:input="watchNum"></el-input></td>
                            <td><el-input v-model="showForm.expertFourGrade" v-on:input="watchNum"></el-input></td>
                            <td><el-input v-model="showForm.expertFiveGrade" v-on:input="watchNum"></el-input></td>
                            <td><el-input v-model="showForm.expertSixGrade" v-on:input="watchNum"></el-input></td>
                            <td><el-input v-model="showForm.expertSevenGrade" v-on:input="watchNum"></el-input></td>
                        </tr>
                        <tr>
                            <td><span>综合得分：</span></td>
                            <td colspan="7" style="text-align: right;padding-right: 10px;line-height: 0;padding-bottom: 10px;">
                                <el-input v-model="showForm.synthesizeGrade" disabled ></el-input>
                                <span>注：综合得分为专家评分平均分，结果保留一位小数。</span>    
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                <table class="form_table1">
                    <tbody>
                        <tr><td colspan="4">二、验收意见</td></tr>
                        <tr>
                            <td><span>（一）对课题情况的总体评价</span></td>
                            <td colspan="3">
                                <el-input type="textarea" v-model="showForm.topicOverallEvaluation"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td><span>（二）建议</span></td>
                            <td colspan="3">
                                <el-input type="textarea" v-model="showForm.suggest"></el-input>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                <table class="form_table1">
                    <tbody>
                        <tr><td colspan="4">三、验收结论</td></tr>
                        <tr>
                            <td colspan="4">
                                <!-- <el-radio v-model="showForm.acceptanceConclusionId" label="1">通过验收</el-radio>
                                <el-radio v-model="showForm.acceptanceConclusionId" label="2">结题</el-radio>
                                <el-radio v-model="showForm.acceptanceConclusionId" label="3">不通过验收</el-radio> -->
                                <el-radio-group v-model="showForm.acceptanceConclusionId">
                                    <span v-for="(item,index) in finalAcceptanceMethod">
                                        <el-radio :label="item.id">{{item.content}}</el-radio>
                                    </span>
                                </el-radio-group>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="form_table1">
                    <tbody>
                        <tr><td colspan="4">四、验收专家组名单</td></tr>
                        <tr>
                            <td>姓名</td>
                            <td>单位</td>
                            <td>专业</td>
                            <td>职务/职称</td>
                        </tr>
                        <span class="addCircle" @click="handleAddExpertName"><i class="el-icon-circle-plus-outline"></i></span>
                        <tr v-for="(item,index) in showForm.expertGroupCommentsNameList">
                            <td><el-input v-model="item.expertName"></el-input></td>
                            <td><el-input v-model="item.companyName"></el-input></td>
                            <td><el-input v-model="item.major"></el-input></td>
                            <td><el-input v-model="item.job"></el-input></td>
                            <span class="removeCircle" @click="handleRemoveExpertName(index)"><i class="el-icon-remove-outline"></i></span>
                        </tr>
                        <tr>
                            <td><span>验收专家组组长签字：</span></td>
                            <td><el-input v-model="showForm.expertLeader"></el-input></td>
                            <td>日期：</td>
                            <td>
                                <el-date-picker
                                    v-model="showForm.writeDate"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </td>
                        </tr>
                        <tr>
                            <td>专家组意见表文件：</td>
                            <td colspan="3">
                                <!-- <el-input v-model="showForm.expertGroupCommentsFile"></el-input> -->
                                <input type="file" id="expertGroupCommentsFile">
                            </td>
                        </tr>
                        <tr>
                            <td>专家评议表文件：</td>
                            <td colspan="3">
                                <!-- <el-input v-model="showForm.expertAcceptanceFormFile"></el-input> -->
                                <input type="file" id="expertAcceptanceFormFile">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <el-button @click="handleSubmit" type="primary">提交</el-button>
            <el-button @click="handleBack" type="primary">返回</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'subjectUploadFirst',
    data(){
        return{
            showForm:{
                topicName:'',
                topicNumber:'',
                projectLeader:'',
                subjectUndertakingUnit:'',
                acceptanceExpertNumber:'',
                expertOneGrade:'',
                expertTwoGrade:'',
                expertThreeGrade:'',
                expertFourGrade:'',
                expertFiveGrade:'',
                expertSixGrade:'',
                expertSevenGrade:'',
                synthesizeGrade:'',
                topicOverallEvaluation:'',
                suggest:'',
                acceptanceConclusionId:'',
                expertGroupCommentsNameList:[{
                    expertName:'',
                    companyName:'',
                    major:'',
                    job:''
                }],
                expertLeader:'',
                writeDate:'',
            },
            params:{
                id:this.$route.params.id,
                arrays:this.$route.params.arrays
            },
            finalAcceptanceMethod:[{
                id:'',
                content:''
            }]
        }
    },
    methods:{
        watchNum(){
            if(this.showForm.expertOneGrade != '' && this.showForm.expertTwoGrade !='' && this.showForm.expertThreeGrade !='' && this.showForm.expertFourGrade != '' && this.showForm.expertFiveGrade !='' && this.showForm.expertSixGrade !='' && this.showForm.expertSevenGrade !='' ){
                let realVal = (parseFloat(this.showForm.expertOneGrade) + parseFloat(this.showForm.expertTwoGrade)  + parseFloat(this.showForm.expertThreeGrade) 
                                                + parseFloat(this.showForm.expertFourGrade) +  parseFloat(this.showForm.expertFiveGrade) + parseFloat(this.showForm.expertSixGrade) 
                                                + parseFloat(this.showForm.expertSevenGrade))/7;
                this.showForm.synthesizeGrade = parseFloat(realVal).toFixed(1)
            }
        },
        // 点击提交
        handleSubmit(){
            for(let i in this.showForm) {
                if(typeof(this.showForm[i]) == "string" ) {
                    if(this.showForm[i].match(/^[ ]*$/) || this.showForm[i] == undefined){
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
            }
            let $expertGroupCommentsFile = document.getElementById('expertGroupCommentsFile').files[0]
            let $expertAcceptanceFormFile = document.getElementById('expertAcceptanceFormFile').files[0]
            if($expertGroupCommentsFile == undefined || $expertAcceptanceFormFile == undefined){
                this.$alert('请上传附件', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {}
                });
                return
            }
            this.submitAxios($expertGroupCommentsFile,$expertAcceptanceFormFile)
        },
        submitAxios(expertGroupCommentsFile,expertAcceptanceFormFile){
            let _this = this
            var formData = new FormData()
            formData.append('type',true)
            formData.append('id',_this.params.id)
            formData.append('type',true)
            formData.append('acceptanceFinalResultId',_this.showForm.acceptanceConclusionId)
            formData.append('expertGroupCommentsFile',expertGroupCommentsFile)
            formData.append('expertAcceptanceFormFile',expertAcceptanceFormFile)
            let expertGroupComment = JSON.stringify({
                'caId':_this.params.id,
                'topicName':_this.showForm.topicName,
                'topicNumber':_this.showForm.topicNumber,
                'projectLeader':_this.showForm.projectLeader,
                'subjectUndertakingUnit':_this.showForm.subjectUndertakingUnit,
                'acceptanceExpertNumber':_this.showForm.acceptanceExpertNumber,
                'expertOneGrade':_this.showForm.expertOneGrade,
                'expertTwoGrade':_this.showForm.expertTwoGrade,
                'expertThreeGrade':_this.showForm.expertThreeGrade,
                'expertFourGrade':_this.showForm.expertFourGrade,
                'expertFiveGrade':_this.showForm.expertFiveGrade,
                'expertSixGrade':_this.showForm.expertSixGrade,
                'expertSevenGrade':_this.showForm.expertSevenGrade,
                'synthesizeGrade':_this.showForm.synthesizeGrade,
                'topicOverallEvaluation':_this.showForm.topicOverallEvaluation,
                'suggest':_this.showForm.suggest,
                'acceptanceConclusionId':_this.showForm.acceptanceConclusionId,
                'expertGroupCommentsNameList':_this.showForm.expertGroupCommentsNameList,
                'expertLeader':_this.showForm.expertLeader,
                'writeDate':_this.showForm.writeDate
            })
            // new Blob([outcomeInformationAll], {type: "application/json"})
            formData.append('expertGroupComment',new Blob([expertGroupComment],{type:'application/json'}))
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/subjectAccept/examine',
                data:formData
            }).then(function(res){
                let data = ''
                if(res.data.resultFlag == 0){//成功
                   data = res.data.data
                }
                if(res.data.resultFlag == 1){
                   data = res.data.data
                }
                _this.$alert(data, '提示', {
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
        },
        // 添加专家组名单
        handleAddExpertName(){
            let obj = {
                expertName:'',
                companyName:'',
                major:'',
                job:''
            }
            this.showForm.expertGroupCommentsNameList.push(obj)
        },
        // 删除专家组名单
        handleRemoveExpertName(index){
            if(this.showForm.expertGroupCommentsNameList.length == 1){
                this.$alert('至少保留一条数据', '提示', {
                    confirmButtonText: '确定',
                    type:'warning',
                }).then(() => {
                }).catch(() => {
                })
            }else{
                this.showForm.expertGroupCommentsNameList.splice(index,1)
            }
        },
        // 返回
        handleBack(){
            this.$router.back(-1)
        },
        // 获取验收结论
        getAcceptance(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/checkApplyStyle/finalAcceptanceMethod',
            }).then(function(res){
                _this.finalAcceptanceMethod = res.data.data
            }).catch(function(err){
                console.log(err)
            })
        },
        // 获取数据带过来的基本数据
        getShowForm(formData){
            if(formData != undefined){
                formData.map((item) => {
                    if(this.params.id == item.id){
                        this.showForm.topicName = item.topicName
                        this.showForm.topicNumber = item.topicNumber
                        this.showForm.projectLeader = item.projectLeader
                        this.showForm.subjectUndertakingUnit = item.subjectUndertakingUnit
                        return;
                    }
                })
            }
            
        }
    },
    mounted(){
        this.getAcceptance()
        this.getShowForm(this.params.arrays)
    }
}
</script>
<style lang="less">
#subjectUploadFirst{
    .showForm{
        .el-form{
            .form_table1,.form_table{
                min-width: 900px;
            }
            .form_table1{
                position: relative;
                tr{
                    position: relative;
                }
            }
            .el-radio{
                line-height: 50px;
                margin: 0 30px;
                .el-radio__input{
                    padding-right: 5px;
                }
                .el-radio__input.is-disabled+span.el-radio__label{
                    color: #000;
                }
                .el-radio__input.is-checked+.el-radio__label{
                    color: #000;
                }
                .el-radio__input.is-checked .el-radio__inner{
                    background-color: #0abd90;
                    border-color: #0abd90;
                }
                .el-radio__input.is-disabled.is-checked .el-radio__inner::after{
                    background-color: #fff;
                }
            }
            .addCircle{
                position: absolute;
                top: 60px;
                right: -40px;
                .el-icon-circle-plus-outline:before{
                    font-size: 30px;
                }
            }
            .removeCircle{
                position: absolute;
                margin-top: 10px;
                right: -40px;
                .el-icon-remove-outline:before{
                    font-size: 30px;
                }
            }
        }
    }
}
</style>