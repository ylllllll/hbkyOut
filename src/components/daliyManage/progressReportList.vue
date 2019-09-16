<template>
    <div id="progressReportList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm">
                <el-form-item label="课题名称：" >
                    <el-input v-model="queryForm.subjectName"></el-input>
                </el-form-item>
                <el-form-item label="承担单位：">
                    <el-input v-model="queryForm.bearerUnit"></el-input>
                </el-form-item>
                <el-form-item label="进展情况：">
                    <el-select v-model="queryForm.progress" placeholder="请选择">
                        <el-option label="全部情况" value=""></el-option>
                        <el-option label="超前" value="45"></el-option>
                        <el-option label="正常" value="46"></el-option>
                        <el-option label="滞后" value="47"></el-option>
                    </el-select>
                </el-form-item>
                <!-- <el-form-item label="合同签订时间：">
                    <el-date-picker
                        v-model="showForm.contractAgreedClosingTime"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item> -->
            </el-form>
            <el-button @click="handleSearch">搜索</el-button>
        </div>

        <el-button @click="handleAudited">申请</el-button>

        <!-- 展示列表 -->
        <div class="showList">
            <!-- 表格 -->
            <el-table
                v-loading="loading"
                ref="multipleTable"
                :data="tableData"
                stripe
                tooltip-effect="dark"
                style="width: 100%"
                highlight-current-row
                @current-change="handleSelectionChange">
                <el-table-column
                    type="index"
                    label="序号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="subject_name"
                    label="课题名称"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="bearer_unit"
                    label="承担单位"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="progress"
                    label="进展情况"
                    :show-overflow-tooltip="true"
                    align="center">
                    <template slot-scope="scope">
                        <span class="orange" v-show="scope.row.progress == '45'">超前</span>
                        <span class="green" v-show="scope.row.progress == '46'">正常</span>
                        <span class="red" v-show="scope.row.progress == '47'">滞后</span>
                    </template>
                </el-table-column>
                <!-- <el-table-column
                    prop="time1"
                    label="合同签订时间"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column> -->
                <el-table-column
                    prop="commit_time"
                    label="进展情况报告提交时间"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <pages
                :total='fenye.total'
                :currentPage='fenye.pageNum'
                :pageSize='fenye.pageSize'
                :pageSizes="fenye.pageSizes"
                @handleCurrentChangeNum="handleCurrentChange"
                @handleSizeChangeNum="handleSizeChange"
                @handleTableFreshNum="handleTableFresh">
            </pages>
        </div>
    </div>
</template>

<script>
    export default {
        name:'progressReportList',
        data() {
            return {
                queryForm: {
                    subjectName: '',
                    bearerUnit: '',
                    progress: null
                },
                loading: true,
                tableData: [],
                fenye: {
                    total: 0, //共有数据多少条
                    pageNum: 1,
                    pageSize: 10, //每页显示的条数
                    pageSizes: [10,20,30,40,50] //选择每页显示多少条
                }
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.$router.push({
                    name: 'ProgressReportShow',
                    params: {
                        id: val.id
                    }
                })
            },
            handleCurrentChange:function(val) {//val表示当前页
                this.fenye.pageNum = val;
                this._axios();
            },
            handleSizeChange(val) {//val表示每页展示的条数
                this.fenye.pageSize = val;
                this._axios();
            },
            handleTableFresh(){
                this._axios;
                document.querySelector(".first-pager").click();
            },
            _axios() {
                let data = this.queryForm;
                    data.pageNum = this.fenye.pageNum;
                    data.pageSize = this.fenye.pageSize;
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/progress/getProgressInfoByUid',
                    method: 'get',
                    params: data
                }).then((res) => {
                    console.log(res)
                    this.loading = false;
                    let data = res.data.data;
                    if(data == "没有查到相关信息") {
                        this.tableData = [];
                    }else {
                        this.tableData = data.list;
                        this.fenye.total = data.total;
                    }
                })
            },
            handleAudited() {
                this.$router.push("/index/progressReport/progressReportAdd");
            },
            handleSearch() {
                this.loading = true;
                this.queryForm.pageNum = 1;
                this._axios();
                document.querySelector(".first-pager").click();
            }
        },
        beforeMount() {
            this._axios();
        }
    }
</script>

<style lang="less">
    #progressReportList {
        .queryForm {
            .el-form .el-form-item .el-form-item__label{
                width: 193px;
            }
        }
        .el-button{
            margin: 10px auto;
        }
        .showList {
            min-height: 690px;
            .el-table {
                min-height: 640px;
                .orange {
                    color: #f2a50b;
                }
                .green {
                    color: #09bd90;
                }
                .red {
                    color: #fe0100;
                }
            }
            .pages {
                .el-button {
                    background-color: transparent;
                    border: 0;
                    margin: 0;
                    span {
                        line-height: 1;
                    }
                }
            }
        }
    }
</style>
