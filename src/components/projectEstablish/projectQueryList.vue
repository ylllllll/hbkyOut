<template>
    <div id="projectList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm">
                <el-form-item label="项目名称：" >
                    <el-input v-model="queryForm.projectName"></el-input>
                </el-form-item>
                <el-form-item label="课题名称：">
                    <el-input v-model="queryForm.subjectName"></el-input>
                </el-form-item>
                <el-form-item label="课题负责人：">
                    <el-input v-model="queryForm.subjectLeader"></el-input>
                </el-form-item>
                <el-form-item label="课题负责人联系方式：" >
                    <el-input v-model="queryForm.leaderContact"></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="handleSearch">搜索</el-button>
        </div>

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
                    prop="projectName"
                    label="项目名称"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="subjectName"
                    label="课题名称"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="winningAmount"
                    label="中标（成交）金额"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="supportingFunds"
                    label="配套经费"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="subjectLeader"
                    label="课题负责人"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="leaderContact"
                    label="课题负责人联系方式"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="operatorContact"
                    label="经办人及联系方式"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="auditStatus"
                    label="审批状态"
                    :show-overflow-tooltip="true"
                    align="center">
                    <template slot-scope="scope">
                        <span v-show="scope.row.auditStatus == 0">已退回</span>
                        <span v-show="scope.row.auditStatus == 2">未审批</span>
                        <span v-show="scope.row.auditStatus == 3">已通过</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="auditStatus"
                    label="操作"
                    :show-overflow-tooltip="true"
                    align="center">
                    <template slot-scope="scope">
                        <el-button v-show="scope.row.auditStatus == 0" @click="handleEdit(scope.row.id)">修改</el-button>
                    </template>
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
        name: 'projectList',
        data() {
            return {
                queryForm:{
                    projectName:'',
                    subjectName:'',
                    subjectLeader:'',
                    leaderContact:''
                },
                loading: true,
                tableData:[],
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
                    name: 'ProjectQueryShow',
                    params:{
                        id: val.id
                    }
                })
            },
            handleCurrentChange(val) {              //val表示当前页
                this.fenye.pageNum = val;
                this._axios();
            },
            handleSizeChange(val) {                 //val表示每页展示的条数
                this.fenye.pageSize = val;
                this._axios();
            },
            handleTableFresh(){
                this._axios;
                document.querySelector(".first-pager").click();
            },
            // 请求列表数据
            _axios() {
                let data = this.queryForm;
                data.pageNum = this.fenye.pageNum;
                data.pageSize = this.fenye.pageSize;
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/tender/getTenderByUid',
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
            handleSearch() {
                this.loading = true;
                this.queryForm.pageNum = 1;
                this._axios();
                document.querySelector(".first-pager").click();
            },
            handleEdit(val) {
                this.$router.push({
                    name: 'ProjectQueryEdit',
                    params: {
                        id: val
                    }
                })
            }
        },
        beforeMount() {
            this._axios();
        }
    }
</script>

<style lang="less">
    #projectList{
        .queryForm .el-form .el-form-item .el-form-item__label{
            width: 160px;
        }
        .showList{
            min-height: 680px;
            margin-top: 10px;
            .el-table{
                min-height: 630px;
                padding-bottom: 10px;
                .el-button {
                    margin: 0;
                }
            }
        }
        .pages{
            .el-button{
                background-color: transparent;
                border: 0;
                margin: 0;
                span{
                    line-height: 1;
                }
            }
        }
    }
</style>

