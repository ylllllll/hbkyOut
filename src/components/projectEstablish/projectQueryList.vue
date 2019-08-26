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
                tooltip-effect="dark"
                style="width: 100%">
                <!-- <el-table-column
                    type="selection"
                    align="center">
                </el-table-column> -->
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
                    <template slot-scope="scope">
                        <router-link :to="{
                            name: 'ProjectQueryShow',
                            params:{
                                id: scope.row.id
                            }
                        }"> 
                        {{ scope.row.projectName }}
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="subjectName"
                    label="课题名称"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="winningAmount"
                    label="中标（成交）金额"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="supportingFunds"
                    label="配套经费"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="subjectLeader"
                    label="课题负责人"
                    fit="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="leaderContact"
                    label="课题负责人联系方式"
                    fit="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="operatorContact"
                    label="经办人及联系方式"
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
        name: 'projectList',
        data() {
            return {
                queryForm:{
                    projectName:'',
                    subjectName:'',
                    subjectLeader:'',
                    leaderContact:'',
                    pageNum: 1,
                    pageSize: 10
                },
                loading: true,
                tableData:[],
                fenye:{
                    total:400, //共有数据多少条
                    pageNum:1,
                    pageSize:10, //每页显示的条数
                    pageSizes:[10,20,30,40,50] //选择每页显示多少条
                }
            }
        },
        methods:{
            handleCurrentChange(val) {              //val表示当前页
                this.queryForm.pageNum = val;
                this._axios();
            },
            handleSizeChange(val) {                 //val表示每页展示的条数
                this.queryForm.pageSize = val;
                this._axios();
            },
            handleTableFresh(){
                this._axios;
                document.querySelector(".first-pager").click();
            },
            // 请求列表数据
            _axios() {
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/tender/getAllTender',
                    method: 'get',
                    params: this.queryForm
                }).then((res) => {
                    this.loading = false;
                    let data = res.data.data;
                    if(data.list.length == 0) {
                        this.tableData = []; 
                        this.$alert('没有查到相关信息','提示',{
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
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

