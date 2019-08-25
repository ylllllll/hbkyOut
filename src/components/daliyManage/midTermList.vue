<template>
    <div id="midTermList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm">
                <el-form-item label="课题名称：" >
                    <el-input v-model="queryForm.name"></el-input>
                </el-form-item>
                <el-form-item label="进度执行情况：">
                    <el-select v-model="queryForm.region" placeholder="请选择">
                        <el-option
                            v-for="item in queryForm.reginOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="技术、经济等考核指标：">
                    <el-select v-model="queryForm.category">
                        <el-option 
                            v-for="item in queryForm.categoryOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="承担单位：">
                    <el-input v-model="queryForm.unit"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary">搜索</el-button>
        </div>

        <!-- 按钮 -->
        <!-- <el-button @click="handleLaunchInspect">发起检查</el-button> -->
        <!-- <el-button @click="handleUploadEnclosure">上传附件</el-button> -->

        <!-- 展示列表 -->
        <div class="showList">
            <!-- 表格 -->
            <el-table
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
                    prop="name"
                    label="中期检查名称"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="time"
                    label="中期检查发起时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="state"
                    label="是否完成"
                    align="center">
                    <template slot-scope="scope">
                        <span class="green" v-show="scope.row.state == '0'">已全部上传</span>
                        <span class="red" v-show="scope.row.state == '1'">未全部上传</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="state"
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                        <el-button @click="handleUploadEnclosure(scope.row.id)" v-show="scope.row.state == '1'">上传附件</el-button>
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
                @handleSizeChangeNum="handleSizeChange">
            </pages>
        </div>
    </div>
</template>

<script>
    export default {
        name:'midTermList',
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
                        label:'指标1'
                    },{
                        value:'1',
                        label:'指标2'
                    }],
                    category:''
                },
                tableData: [{
                    id: '1001',
                    name: '名称1名称1名称1名称1名称1名称1名称1名称1',
                    time: '2019-08-14',
                    state: '0'
                },{
                    id: '1002',
                    name: '名称2',
                    time: '2019-08-14',
                    state: '1'
                },{
                    id: '1003',
                    name: '名称3',
                    time: '2019-08-14',
                    state: '0'
                },{
                    id: '1004',
                    name: '名称4',
                    time: '2019-08-14',
                    state: '1'
                }],
                currentPage: 4,
                fenye: {
                    total: 400, //共有数据多少条
                    pageNum: 1,
                    pageSize: 10, //每页显示的条数
                    pageSizes: [10,20,30,40,50] //选择每页显示多少条
                }
            }
        },
        methods: {
            // handleLaunchInspect() {
            //     this.$router.push("/index/midTerm/midTermAdd");
            // },
            handleUploadEnclosure(val) {
                this.$router.push({
                    name: 'MidTermAdd',
                    params: {
                        id: val
                    }
                })
            },
            // handleSelectionChange(val) {
            //     this.multipleSelection = val;
            //     let ids = [];
            //     this.multipleSelection.map((item)=> {
            //         ids.push(item.id);
            //     })
            //     this.selectedIDs = ids;
            // },
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
            min-height: 680px;;
            padding: 10px;
            margin-top: 10px;
            .el-table {
                min-height: 630px;
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
