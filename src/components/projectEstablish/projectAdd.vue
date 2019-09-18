<template>
    <div id="projectAdd">
        <div class="showForm">
            <el-form ref="showForm" :model="showForm" >
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">课题申报</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>项目名称 <span class="required">*</span>：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.projectName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>标书编号 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.tenderNo"></el-input>
                            </td>
                            <td>分包号 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.subcontractingNo"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题名称 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.subjectName"></el-input>
                            </td>
                            <td>投标人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.bidders">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>中标（成交）金额 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.winningAmount"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                            <td>配套经费 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.supportingFunds"
                                    @blur="validateNum">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题负责人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.subjectLeader">
                                </el-input>
                            </td>
                            <td>课题负责人手机 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.leaderContact"
                                    @blur="validatePhone">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                课题联合投标单位 <span class="required">*</span>：
                                <br>
                                （如有请填写）
                            </td>
                            <td>
                                <el-input v-model="showForm.joinTenderUnits"></el-input>
                            </td>
                            <td>责任单位 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.responsibleUnit" readonly></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>经办人 <span class="required">*</span>：</td>
                            <td>
                                <el-input v-model="showForm.operator"></el-input>
                            </td>
                            <td>经办人手机 <span class="required">*</span>：</td>
                            <td>
                                <el-input 
                                    v-model="showForm.operatorContact"
                                    @blur="validatePhone">
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>备注：</td>
                            <td colspan="3">
                                <el-input 
                                    v-model="showForm.remark"
                                    :autosize="{ minRows:4 }"
                                    type="textarea"
                                    maxlength="200">
                                </el-input>
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>中标文件附件 <span class="required">*</span>：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,1)">
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>成交公告附件 <span class="required">*</span>：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,2)">
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>成交通知书附件 <span class="required">*</span>：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,3)">
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>响应文件附件 <span class="required">*</span>：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,4)">
                            </td>
                        </tr>
                        <tr class="file_tr">
                            <td>其他附件 <span class="required">*</span>：</td>
                            <td colspan="3" class="file_td">
                                <input type="file" @change="getFile($event,5)">
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
        name: 'projectAdd',
        data() {
            return {
                showForm: {
                    projectName: '',
                    tenderNo: '',
                    subcontractingNo: '',
                    subjectName: '',
                    bidders: '',
                    winningAmount: '',
                    supportingFunds: '',
                    subjectLeader: '',
                    leaderContact: '',
                    joinTenderUnits: '',
                    operator: '',
                    operatorContact: '',
                    remark: '',
                    responsibleUnit: ''
                },
                Enclosure: {
                    winningDocument:'',
                    transactionAnnouncement:'',
                    noticeTransaction:'',
                    responseFile:'',
                    otherAttachments:'',
                }
            }
        },
        methods: {
            // 提示
            alertInfo(info,type) {
                this.$alert(info,'提示', {
                    confirmButtonText: '确定',
                    type: type,
                    callback: action => {}
                });
            },
            // 数字验证
            validateNum() {
                let _event = event.srcElement || event.target,
                    val = _event.value,
                    validateNum = this.validate.validateNum(val);
                if(validateNum) {
                    this.alertInfo(validateNum,"warning");
                    _event.value = "";
                    return false;
                }
            },
            // 手机验证
            validatePhone() {
                let _event = event.srcElement || event.target,
                    val = _event.value,
                    validatePhone = this.validate.validatePhone(val);
                if(validatePhone) {
                    this.alertInfo(validatePhone,"warning");
                    _event.value = "";
                    return false;
                }
            },
            // 文件
            getFile(event,index) {
                // 附件格式验证
                let _event = event.srcElement || event.target,
                    val = _event.value,
                    validateFile = this.validate.validateFile(event.target.files[0].name);
                if(validateFile) {
                    this.alertInfo(validateFile,"warning");
                    _event.value = "";
                    return false;
                }
                if(index == 1) {
                    this.Enclosure.winningDocument = event.target.files[0];
                }else if(index == 2) {
                    this.Enclosure.transactionAnnouncement = event.target.files[0];
                }else if(index == 3) {
                    this.Enclosure.noticeTransaction = event.target.files[0];
                }else if(index == 4) {
                    this.Enclosure.responseFile = event.target.files[0];
                }else if(index == 5) {
                    this.Enclosure.otherAttachments = event.target.files[0];
                }
            },
            // 页面操作
            handleSubmit() {
                // 非空验证
                for(let i in this.showForm) {
                    if(i == "remark") {
                        continue;
                    }
                    let str = this.showForm[i] + "";
                    if(!str.trim()) {
                        this.alertInfo("请将表格填写完整","warning");
                        return false;
                    }
                }
                for(let i in this.Enclosure) {
                    let str = this.Enclosure[i] + "";
                    if(!str.trim()) {
                        this.alertInfo("请上传全部附件","warning");
                        return false;
                    }
                }
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/tender/insertTender',
                    method: 'post',
                    data: this.showForm
                }).then((res) => {
                    let data = res.data;
                    if(data.resultFlag == 0) {
                        let oid = data.data;
                        let formData = new FormData();
                        formData.append('oid',oid);
                        formData.append('winningDocument',this.Enclosure.winningDocument);
                        formData.append('transactionAnnouncement',this.Enclosure.transactionAnnouncement);
                        formData.append('noticeTransaction',this.Enclosure.noticeTransaction);
                        formData.append('responseFile',this.Enclosure.responseFile);
                        formData.append('otherAttachments',this.Enclosure.otherAttachments);
                        this.axios({
                            url: 'http://192.168.0.80:8087/environment/tender/TenderFileUpload',
                            method: 'post',
                            data: formData,
                            contentType: false,
                            processData: false,
                            usecredensives: true
                        }).then((res) => {
                            loading.close();
                            if(res.data.resultFlag == 0) {
                                this.$alert('提交成功','提示', {
                                    confirmButtonText: '确定',
                                    type: 'success',
                                    callback: action => {
                                        // this.reload();
                                        document.querySelector(".is-active").nextSibling.click();
                                    }
                                });
                            }else {
                                this.alertInfo("提交失败","warning");
                            }
                        }).catch(() => { 
                            loading.close();
                            this.alertInfo("提交失败","warning"); 
                        })
                    }else { 
                        loading.close();
                        this.alertInfo("提交失败","warning"); 
                    }
                }).catch(() => {
                    loading.close();
                    this.alertInfo("提交失败","warning");
                })
            }
        },
        beforeCreate() {
            // 取公司类别
            this.axios({
                url: 'http://192.168.0.80:8087/environment/guide/getCookieValue',
                method: 'post',
            }).then((res) => {
               console.log(res);
               this.$nextTick(() => {
                   this.showForm.responsibleUnit = res.data.data;
               })
            })
        }
    }
</script>

<style lang="less">
    #projectAdd {
        .showForm {
            margin-bottom: 20px;
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
