<template>
    <div id="progressReportList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm">
                <el-form-item label="课题名称：" >
                    <el-input v-model="queryForm.name"></el-input>
                </el-form-item>
                <el-form-item label="承担单位：">
                    <el-input v-model="queryForm.unit"></el-input>
                </el-form-item>
                <el-form-item label="进展情况：">
                    <el-select v-model="queryForm.region" placeholder="请选择">
                        <el-option
                                v-for="item in queryForm.reginOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="合同签订时间：">
                    <el-select v-model="queryForm.category">
                        <el-option 
                                v-for="item in queryForm.categoryOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-button type="primary">搜索</el-button>
        </div>

        <!-- 展示列表 -->
        <div class="showList">
            <!-- 表格 -->
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                    type="selection"
                    align="center">
                </el-table-column>
                <el-table-column
                    type="index"
                    label="序号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="课题名称"
                    :show-overflow-tooltip="true"
                    align="center">
                    <template slot-scope="scope">
                        <router-link :to="{
                            name: 'GuideSummaryShow',
                            params: {
                                id: scope.row.id
                            }
                        }"> 
                        {{ scope.row.name }}
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="danwei"
                    label="承担单位"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="state"
                    label="进展情况"
                    align="center">
                    <template slot-scope="scope">
                        <span class="orange" v-show="scope.row.state == '0'">超前</span>
                        <span class="green" v-show="scope.row.state == '1'">正常</span>
                        <span class="red" v-show="scope.row.state == '2'">之后</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="time1"
                    label="合同签订时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="time2"
                    label="进展情况报告提交时间"
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
                @handleSizeChangeNum="handleSizeChange">
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
                    name:'',
                    unit:'',
                    contacts:'',
                    phone:'',
                    reginOptions:[{
                        value:'0',
                        label:'情况1'
                    },{
                        value:'1',
                        label:'情况2'
                    }],
                    region:'',
                    categoryOptions:[{
                        value:'0',
                        label:'时间？'
                    },{
                        value:'1',
                        label:'时间？'
                    }],
                    category:''
                },
                tableData: [{
                    id: '1001',
                    name: '名称1名称1名称1名称1名称1名称1名称1名称1',
                    danwei: '单位1',
                    state: '0',
                    time1: '2019-08-14',
                    time2: '2019-08-15'
                },{
                    id: '1002',
                    name: '名称2',
                    danwei: '单位2',
                    state: '1',
                    time1: '2019-08-14',
                    time2: '2019-08-15'
                },{
                    id: '1003',
                    name: '名称3',
                    danwei: '单位3',
                    state: '0',
                    time1: '2019-08-14',
                    time2: '2019-08-15'
                },{
                    id: '1004',
                    name: '名称4',
                    danwei: '单位4',
                    state: '2',
                    time1: '2019-08-14',
                    time2: '2019-08-15'
                }],
                currentPage: 4,
                fenye: {
                    total: 400, //共有数据多少条
                    pageNum: 1,
                    pageSize: 100, //每页显示的条数
                    pageSizes: [100,30,40,50] //选择每页显示多少条
                }
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
                let ids = [];
                this.multipleSelection.map((item)=> {
                    ids.push(item.id);
                })
                this.selectedIDs = ids;
            },
            handleCurrentChange:function(val) {//val表示当前页
                console.log(val)
            },
            handleSizeChange(val) {//val表示每页展示的条数
                console.log(val)
            }
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
            margin-top: 10px;
            min-height: 640px;;
            padding: 10px;
            .el-table {
                min-height: 590px;
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
