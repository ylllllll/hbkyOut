<template>
    <div id="guideCollectSummary">
        <h3 class="form_title">课题汇总</h3>
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="指南汇总标题：">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-checkbox-group v-model="form.checkList">
                <div class="item">
                    <label>管理类：</label>
                    <el-checkbox label="1"></el-checkbox>
                </div>
                <div class="item">
                    <label>技术研发类：</label>
                    <el-checkbox label="2"></el-checkbox>
                </div>
                <div class="item">
                    <label>综合示范类：</label>
                    <el-checkbox label="3"></el-checkbox>
                </div>
            </el-checkbox-group>
            <div class="btn_group">
                <el-button class="btn_confirm" @click="submitForm">确认</el-button>
                <el-button class="btn_cancel" @click="handleCancel">取消</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'guideCollectSummary',
        data() {
            return {
                paramsData: {
                    ids: this.$route.params.ids
                },
                form: {
                    title: '',
                    checkList: []
                }
            }
        },
        methods: {
            handleCancel() {
                this.$router.push("/index/guideCollect/guideCollectList");
            },
            openFullScreen() {
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                setTimeout(() => {
                    loading.close();
                }, 5000);
            },
            submitForm() {
                for(let i in this.form) {
                    if(typeof(this.form[i]) == "string") {
                        if(this.form["title"].match(/^[ ]*$/)){
                            this.$alert('请将表格填写完整', '提示', {
                                confirmButtonText: '确定',
                                type: 'warning',
                                callback: action => {}
                            });
                            return false;
                        }
                    }
                    if(typeof(this.form[i]) == "object") {
                        if(this.form[i].length == 0) {
                            this.$alert('请至少选择一类', '提示', {
                                confirmButtonText: '确定',
                                callback: action => {}
                            });
                            return false;
                        }
                    }
                }
                this.$router.push({
                    name: 'GuideCollectAdd',
                    params: {
                        ids: this.paramsData.ids,
                        checked: this.form.checkList
                    }
                })                
	        }
        },
        mounted() {
          this.$nextTick(function () {
            
          })  
        },
    }
</script>

<style lang="less">
    #guideCollectSummary {
        width: 100%;
        height: 100%;
        background-color: #fff;
        
        form {
            width: 480px;
            margin: auto;
            label {
                color: #333;
            }
            .el-input {
                .el-input__inner{
                    width: 350px;
                    height: 28px;
                }
            }
            .el-checkbox-group {
                display: flex;
                justify-content: space-between;
                padding: 20px 6px 30px;
                .item {
                    display: inline-block;
                }
            }
            .btn_group {
                display: flex;
                justify-content: center;
                .el-button {
                    margin: 0 5px;
                }
            }
        }
    }
</style>
