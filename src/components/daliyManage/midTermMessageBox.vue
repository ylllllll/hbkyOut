<template>
    <div id="midTermMessageBox">
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
                    label="课题类别"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="region"
                    label="课题名称"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="category"
                    min-width="115"
                    label="课题的目标和主要研究内容"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="funds"
                    label="课题联系人"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="联系人手机"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="unit"
                    label="承担单位"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="contacts"
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
                @handleSizeChangeNum="handleSizeChange">
            </pages>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'midTermMessageBox',
        data() {
            return {
                selectedIDs: [],
                queryForm:{
                    name:'',
                    unit:'',
                    contacts:'',
                    phone:'',
                    region:'',
                    category:''
                },
                tableData:[{
                    id: '1001',
                    name: '名称1名称1名称1名称1名称1名称1名称1名称1',
                    region: '领域',
                    category: '类别1',
                    funds:'经费',
                    date:'期限',
                    unit:"单位122222222222222222222",
                    contacts:"联系人1",
                    phone:"17856567788"
                },{
                    id: '1002',
                    name: '名称2',
                    region: '领域',
                    category: '类别2',
                    funds:'经费',
                    date:'期限',
                    unit:"单位1",
                    contacts:"联系人1",
                    phone:"17856567788"
                },{
                    id: '1003',
                    name: '名称3',
                    region: '领域',
                    category: '类别3',
                    funds:'经费',
                    date:'期限',
                    unit:"单位1",
                    contacts:"联系人1",
                    phone:"17856567788"
                },{
                    id: '1004',
                    name: '名称4',
                    region: '领域',
                    category: '类别4',
                    funds:'经费',
                    date:'期限',
                    unit:"单位1",
                    contacts:"联系人1",
                    phone:"17856567788"
                },{
                    id: '1005',
                    name: '名称5',
                    region: '领域',
                    category: '类别5',
                    funds:'经费',
                    date:'期限',
                    unit:"单位1",
                    contacts:"联系人1",
                    phone:"17856567788"
                },{
                    id: '1006',
                    name: '名称6',
                    region: '领域',
                    category: '类别6',
                    funds:'经费',
                    date:'期限',
                    unit:"单位1",
                    contacts:"联系人1",
                    phone:"17856567788"
                },{
                    id: '1007',
                    name: '名称7',
                    region: '领域',
                    category: '类别7',
                    funds:'经费',
                    date:'期限',
                    unit:"单位1",
                    contacts:"联系人1",
                    phone:"17856567788"
                },{
                    id: '1008',
                    name: '名称8',
                    region: '领域',
                    category: '类别8',
                    funds:'经费',
                    date:'期限',
                    unit:"单位1",
                    contacts:"联系人1",
                    phone:"17856567788"
                },{
                    id: '1009',
                    name: '名称9',
                    region: '领域',
                    category: '类别9',
                    funds:'经费',
                    date:'期限',
                    unit:"单位1",
                    contacts:"联系人1",
                    phone:"17856567788"
                }],
                multipleSelection: [],
                currentPage: 4,
                fenye: {
                    total:400, //共有数据多少条
                    pageNum:1,
                    pageSize:10, //每页显示的条数
                    pageSizes:[10,20,30,40,50] //选择每页显示多少条
                }
            }
        },
        methods:{
            handleSelectionChange(val) {
                this.multipleSelection = val;
                let ids = [];
                this.multipleSelection.map((item)=> {
                    ids.push(item.id);
                })
                this.selectedIDs = ids;
                this.$emit("receipt",this.selectedIDs);
            },
            handleCurrentChange:function(val){  //val表示当前页
                console.log(val)
            },
            handleSizeChange(val){              //val表示每页展示的条数
                console.log(val)
            }
        }
    }
</script>

<style lang="less">