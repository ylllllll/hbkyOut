<template>
    <div id="contractAuditedList">
         <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm" >
                <el-form-item label="课程类别：" >
                    <el-input v-model="queryForm.category"></el-input>
                </el-form-item>
                <el-form-item label="课程名称：">
                    <el-input v-model="queryForm.name"></el-input>
                </el-form-item>
                <el-form-item label="课题联系人：">
                     <el-input v-model="queryForm.contacts"></el-input>
                </el-form-item>
                <el-form-item label="承担单位：" >
                    <el-input v-model="queryForm.unit"></el-input>
                </el-form-item>
                <el-form-item label="课题主管部门：" >
                    <el-input v-model="queryForm.department"></el-input>
                </el-form-item>
                <el-form-item label="联系人手机：" >
                    <el-input v-model="queryForm.phone"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" >搜索</el-button>
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
                prop="category"
                label="课题类别"
                :show-overflow-tooltip="true"
                align="center">
                 <template slot-scope="scope">
                    <router-link :to="{
                        name:'ContractCenterShow',
                        params:{
                            name:scope.row.id
                        }
                        }"> 
                        {{scope.row.category}}
                    </router-link>
                </template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="课题名称"
                align="center">
                </el-table-column>
                <el-table-column
                prop="contents"
                min-width="135"
                label="课题的目标和主要研究内容"
                align="center">
                </el-table-column>
                <el-table-column
                prop="contacts"
                label="课题联系人"
                align="center">
                </el-table-column>
                <el-table-column
                prop="phone"
                label="联系人手机"
                align="center">
                </el-table-column>
                <el-table-column
                prop="unit"
                label="承担单位"
                align="center">
                </el-table-column>
                <el-table-column
                prop="department"
                label="课题主管部门"
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
        name:'contractAuditedList',
        data(){
            return{
                queryForm:{
                    category:'',
                    name:'',
                    contacts:'',
                    unit:'',
                    department:'',
                    phone:'',
                },
                tableData:[{
                    id:'0101',
                    category:'类别1',
                    name:'名称1',
                    contents:'内容1',
                    contacts:'联系人1',
                    phone:'178****1234',
                    unit:'单位1',
                    department:'主管部门11'
                },{
                    id:'0102',
                    category:'类别1',
                    name:'名称1',
                    contents:'内容1',
                    contacts:'联系人1',
                    phone:'178****1234',
                    unit:'单位1',
                    department:'主管部门1'
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
            handleSelectionChange:function(val){
                this.multipleSelection = val
                let ids = []
                this.multipleSelection.map((item)=>{
                    ids.push(item.id)
                })
                this.selectedIDs = ids
            },
            handleCurrentChange:function(val){
                console.log('this is currentPange:' + val)
            },
            handleSizeChange:function(val){
                console.log('这是每页显示条数:' + val)
            }
        }
    }
</script>

<style lang="less">
    #contractAuditedList{
        .showList{
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
