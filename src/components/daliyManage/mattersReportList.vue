<template>
    <div id="mattersReportList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm">
                <el-form-item label="课题名称：" >
                    <el-input v-model="queryForm.subjectName"></el-input>
                </el-form-item>
                <el-form-item label="承担单位：">
                    <el-input v-model="queryForm.commitmentUnit"></el-input>
                </el-form-item>
                <el-form-item label="调整类型：">
                    <el-select v-model="queryForm.adjustTypId" @change="bug">
                        <el-option v-for="(item,index) in optGroup1" :key="index" :label="item.adjustType" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="调整事项：">
                    <el-select placeholder="请先选择调整类型" v-if="queryForm.adjustTypId == ''" v-model="queryForm.adjustmentMattersId">
                    </el-select>
                    <el-select v-if="queryForm.adjustTypId == 1" v-model="queryForm.adjustmentMattersId">
                        <el-option v-for="(item,index) in optGroup2" :key="index" :label="item.adjustmentMatters" :value="item.id"></el-option>
                    </el-select>
                    <el-select v-if="queryForm.adjustTypId == 2" v-model="queryForm.adjustmentMattersId">
                        <el-option v-for="(item,index) in optGroup3" :key="index" :label="item.adjustmentMatters" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
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
                    prop="subjectName"
                    label="课题名称"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="commitmentUnit"
                    label="承担单位"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="adjustType"
                    label="调整类型"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="adjustmentMatters"
                    :show-overflow-tooltip="true"
                    label="调整事项"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="unitHead"
                    label="单位负责人"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <!-- <el-table-column
                    prop="phone"
                    label="单位负责人电话"
                    align="center">
                </el-table-column> -->
                <el-table-column
                    prop="shenheStatus"
                    label="审核状态"
                    :show-overflow-tooltip="true"
                    align="center">
                    <template slot-scope="scope">
                        <span v-show="scope.row.shenheStatus == '0'">未审批</span>
                        <span v-show="scope.row.shenheStatus == '1'">已审批</span>
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
        name:'mattersReportList',
        data() {
            return {
                queryForm: {
                    subjectName: '',
                    commitmentUnit: '',
                    adjustTypId: '',
                    adjustmentMattersId: '',
                },
                optGroup1: [],
                optGroup2: [],
                optGroup3: [],
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
            bug() {
                this.queryForm.adjustmentMattersId = "";
            },
            handleSelectionChange(val) {
                this.$router.push({
                    name: 'MattersReportShow',
                    params: {
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
            handleAudited() {
                this.$router.push("/index/mattersReport/mattersReportAdd");
            },
            // 请求列表数据
            _axios() {
                let data = this.queryForm;
                    data.pageNum = this.fenye.pageNum;
                    data.pageSize = this.fenye.pageSize;
                this.axios({
                    url: 'http://192.168.0.80:8087/enviroment/daily/majormatter/getAllMajorInfoByUid',
                    method: 'get',
                    params: data
                }).then((res) => {
                    console.log(res);
                    this.loading = false;
                    let data = res.data.data;
                    if(data == "没有查到相关信息") {
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
            // 请求调整类型
            this.axios({
                url: 'http://192.168.0.80:8087/enviroment/daily/majormatter/getAllAdjustType',
                method: 'get',
            }).then((res) => { 
                let data = res.data.data;
                this.optGroup1 = data;
                // 请求调整事项
                this.axios({
                    url: 'http://192.168.0.80:8087/enviroment/daily/majormatter/getAllAdjustmentMatters',
                    method: 'get',
                }).then((res) => { 
                    console.log(res)
                    let data = res.data.data;
                    for(let i in data) {
                        if(data[i].adjustTypeId == "1") {
                            this.optGroup2.push(data[i]);
                        }else {
                            this.optGroup3.push(data[i]);
                        }
                    }
                })
            })
            this._axios();
        }
    }
</script>

<style lang="less">
    #mattersReportList {
        .queryForm {
            .el-form .el-form-item .el-form-item__label{
                width: 193px;
            }
        }
        .el-button{
            margin: 10px auto;
        }
        .showList {
            min-height: 640px;
            padding: 10px;
            .el-table {
                min-height: 590px;
                .el-button {
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
