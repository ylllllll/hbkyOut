<template>
    <div id="midTermAdd">
        <div class="check_box">
            <a @click="handleToggleForm(1)" :class="{active:toggleFlag == 1}">专家评估表</a>
            <a @click="handleToggleForm(2)" :class="{active:toggleFlag == 2}">中期检查表</a>
        </div>
        <form1 ref="form1" v-show="toggleFlag == 1"></form1>
        <form2 ref="form2" v-show="toggleFlag == 2"></form2>
        <div class="file_box">专家意见附件：<input type="file" @change="getFile($event)" /></div>
        <div class="btn_group">
            <el-button @click="handleSubmit">提交</el-button>
            <el-button @click="handleBack">返回</el-button>
        </div>
    </div>
</template>

<script>
    import MidTermAddForm1 from '@/components/daliyManage/midTermAddForm1'
    import MidTermAddForm2 from '@/components/daliyManage/midTermAddForm2'
    export default {
        name: 'midTermAdd',
        components: {
            form1: MidTermAddForm1,
            form2: MidTermAddForm2
        },
        data() {
            return {
                toggleFlag: 1,
                paramsData: {
                    id: this.$route.params.id
                },
                subjectSuggestAnnex: ''
            }
        },
        methods: {
            errorInfo() {
                this.$alert('提交失败','提示', {
                    confirmButtonText: '确定',
                    type: 'warning',
                    callback: action => {}
                });
            },
            handleToggleForm(val) {
                this.toggleFlag = val;
            },
            getFile(event) {
                this.subjectSuggestAnnex = event.target.files[0];
            },
            handleSubmit() {
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                let formData = new FormData(),
                    midCheckTemplateDtoAndExpertAssessmentDto = {
                        midCheckTemplateDTO: this.$refs.form2.showForm,
                        expertAssessmentDTO: this.$refs.form1.showForm
                    };
                midCheckTemplateDtoAndExpertAssessmentDto.midCheckTemplateDTO.notCompletingReason = this.$refs.form2.showForm.notCompletingReason.toString();
                midCheckTemplateDtoAndExpertAssessmentDto = JSON.stringify(midCheckTemplateDtoAndExpertAssessmentDto);
                formData.append('midCheckTemplateDtoAndExpertAssessmentDto',new Blob([midCheckTemplateDtoAndExpertAssessmentDto],{type:"application/json"}));
                formData.append('expertAssessmentAnnex',this.$refs.form1.expertAssessmentAnnex);
                formData.append('midCheckAnnex',this.$refs.form2.midCheckAnnex);
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/daily/WaiCommitFile',
                    method: 'post',
                    data: formData
                }).then((res) => {
                    console.log(res);
                    if(res.data.resultFlag == 0) {
                        let formData = new FormData();
                        formData.append('cid',this.paramsData.id);
                        formData.append('subjectSuggestAnnex',this.subjectSuggestAnnex);
                        this.axios({
                            url: 'http://192.168.0.80:8087/environment/contract/subjectSuggestFileUpload',
                            method: 'post',
                            data: formData
                        }).then((res) => {
                            loading.close();
                            if(res.data.resultFlag == 0) {
                                this.$alert('提交通过','提示', {
                                    confirmButtonText: '确定',
                                    type: 'success',
                                    callback: action => {
                                        this.axios({
                                            url: 'http://192.168.0.80:8087/environment/daily/updateContractMidCheckStateOne',
                                            method: 'post'
                                        })
                                        this.$router.go(-1);
                                    }
                                });
                            }else {
                                this.errorInfo();
                            }
                        }).catch(() => {
                            loading.close();
                            this.errorInfo();
                        })
                    }else {
                        loading.close();
                        this.errorInfo();
                    }
                }).catch(() => {
                    loading.close();
                    this.errorInfo();
                })  
            },
            handleBack() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less">
    #midTermAdd {
        background-color: #fff;
        .check_box {
            background-color: #fff;
            a {
                display: inline-block;
                margin: 10px 0 0 10px;
                padding: 5px 30px;
                color: #999;
                border: 1px solid #999;
                cursor: pointer;
            }
            .active {
                border-color: #0abd90;
                font-weight: bold;
                color: #0abd90;
            }
        }
        .btn_group {
            background-color: #fff;
        }
        .file_box{
            width: 50%;
            margin: 20px auto 0;
        }
    }
</style>
