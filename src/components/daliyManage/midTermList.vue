<template>
    <div id="midTermList">
        <!-- 展示列表 -->
        <div class="showList">
            <!-- 表格 -->
            <el-table
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
                    prop="subjectName"
                    label="课题名称"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="subjectObjectivesResearch"
                    label="课题目标和主要研究内容"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="contractStartTime"
                    label="合同开始时间"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="midCheckStatus"
                    label="是否完成"
                    :show-overflow-tooltip="true"
                    align="center">
                    <template slot-scope="scope">
                        <span class="red" v-show="scope.row.midCheckStatus == '0'">未全部上传</span>
                        <span class="green" v-show="scope.row.midCheckStatus == '1'">已全部上传</span>
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
        name:'midTermList',
        data() {
            return {
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
                let state = val.midCheckStatus;
                if(state == 0) {
                    this.$router.push({
                        name: 'MidTermAdd',
                        params: {
                            id: val.id
                        }
                    })
                }else if(state == 1) {
                    this.$router.push({
                        name: 'MidTermShow',
                        params: {
                            id: val.id
                        }
                    })
                }
            },
            handleCurrentChange:function(val) {//val表示当前页
                this.fenye.pageNum = val;
                this._axios();
            },
            handleSizeChange(val) {//val表示每页展示的条数
                this.fenye.pageSize = val;
                this._axios();
            },
            handleTableFresh() {
                this._axios;
                document.querySelector(".first-pager").click();
            },
            _axios() {
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/contract/getContractByUid',
                    method: 'get',
                    params: {
                        pageNum: this.fenye.pageNum,
                        pageSize: this.fenye.pageSize
                    }
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
        },
        beforeMount() {
            this._axios();
        }
    }
</script>

<style lang="less">
    #midTermList {
        .queryForm {
            .el-form .el-form-item .el-form-item__label{
                width: 193px;
            }
        }
        .el-button{
            margin: 10px auto;
        }
        .showList {
            min-height: 800px;
            margin-top: 10px;
            .el-table {
                min-height: 750px;
                .green {
                    color: #09bd90;
                }
                .red {
                    color: #fe0100;
                }
                .el-button{
                    margin: 0;
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
