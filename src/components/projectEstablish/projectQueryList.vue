<template>
    <div id="projectList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm" >
                <el-form-item label="项目名称：" >
                    <el-input v-model="queryForm.entry_name"></el-input>
                </el-form-item>
                <el-form-item label="课题名称：">
                    <el-input v-model="queryForm.name"></el-input>
                </el-form-item>
                <el-form-item label="课题负责人：">
                    <el-input v-model="queryForm.contacts"></el-input>
                </el-form-item>
                <el-form-item label="课题负责人联系方式：" >
                    <el-input v-model="queryForm.phone"></el-input>
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
                    prop="entry_name"
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
                        {{ scope.row.entry_name }}
                    </router-link>
                </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="课题名称"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="money"
                    label="中标（成交）金额"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="funds"
                    label="配套经费"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="pro_phone"
                    label="课题负责人"
                    fit="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="pro_phone"
                    label="课题负责人联系方式"
                    fit="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="agent_phone"
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
            ></pages>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'projectList',
        data() {
            return {
                queryForm:{
                    entry_name:'',
                    name:'',
                    contacts:'',
                    phone:''
                },
                tableData:[{
                    id:0,
                    entry_name:'项目名称1',
                    name:'课题名称1',
                    money:'金额1',
                    funds:'配套经费1',
                    pro_phone:'联系方式1',
                    agent_phone:'经办人联系方式1'
                },{
                    id:1,
                    entry_name:'项目名称2',
                    name:'课题名称2',
                    money:'金额2',
                    funds:'配套经费2',
                    pro_phone:'联系方式2',
                    agent_phone:'经办人联系方式2'
                }],
                fenye:{
                    total:400, //共有数据多少条
                    pageNum:1,
                    pageSize:100, //每页显示的条数
                    pageSizes:[100,30,40,50] //选择每页显示多少条
                },
                selectedIDs:[]
            }
        },
        methods:{
            handleCurrentChange:function(val){

            },
            handleSizeChange:function(val){

            }
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

