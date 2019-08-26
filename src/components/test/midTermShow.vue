<template>
    <div id="midTermShow">
        <h3 class="form_title">{{paramsData.id}}中期检查{{paramsData.state}}</h3>
        <el-form ref="form">
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%">
                <el-table-column
                    type="index"
                    label="序号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data1"
                    label="课题名称"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data2"
                    label="课题目标和主要研究内容"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="state"
                    label="合同开始时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="shixiang"
                    label="检查结果"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="fuzeren"
                    label="进展情况报告"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="其他附件"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="专家评估表"
                    align="center">
                </el-table-column>
            </el-table>
            <div class="file_box">
                中期检查汇总表附件上传：
                <input type="file">
            </div>
            <div class="btn_group">
                <el-button @click="handleSubmit">提交</el-button>
                <el-button @click="handleBack">返回</el-button>
            </div>
        </el-form>
        
    </div>
</template>

<script>
    export default {
        name: 'midTermShow',
        data() {
            return {
                tableData: [{
                    data1: '11',
                    data2: '傲娇受东风街阿萨德发'
                },{
                    data1: '22',
                    data2: '傲娇受东风街阿萨德发'
                }],
                paramsData: {
                    state: this.$route.params.state,
                    id: this.$route.params.id
                }
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
                    this.$alert('提交成功','提示', {
                        confirmButtonText: '确定',
                        type: 'success',
                        callback: action => {
                            this.$router.go(-1);
                        }
                    });
                },2000);
            },
            handleBack() {
                this.$router.go(-1);
            }
        }  
    }
</script>

<style lang="less">
    #midTermShow {
        height: 100%;
        background-color: #fff;
        .el-form {
            width: 98%;
            margin: auto;
            
            // border-bottom: none;
            .el-table {
                border-left: 1px solid #ebeef5;
                .has-gutter {
                    th {
                        line-height: 50px;
                        background-color: #e5f3fe;
                    }
                }
                .el-table__body-wrapper {
                    td {
                        padding: 12px;
                        border-right: 1px solid #ebeef5;
                    }
                }
            }
            .file_box {
                margin: 10px 50px;
            }
        }
    }
</style>
