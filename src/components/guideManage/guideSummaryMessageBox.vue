<template>
    <div id="guideSummaryMessageBox">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm" >
                <el-form-item label="指南建议名称：" >
                    <el-input v-model="queryForm.name"></el-input>
                </el-form-item>
                <el-form-item label="所属领域：">
                    <el-select v-model="queryForm.region" placeholder="请选择">
                        <el-option
                            v-for="item in queryForm.reginOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属类别：">
                    <el-select v-model="queryForm.category">
                        <el-option 
                            v-for="item in queryForm.categoryOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="填报单位：" >
                    <el-input v-model="queryForm.unit"></el-input>
                </el-form-item>
                <el-form-item label="填报联系人：" >
                    <el-input v-model="queryForm.contacts"></el-input>
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
                    label="指南建议名称"
                    :show-overflow-tooltip="true"
                    align="center">
                 <template slot-scope="scope">
                    <!-- <router-link :to="{
                            name: 'GuideCollectShow',
                            params: {
                                id: scope.row.id
                            }
                        }">  -->
                        {{ scope.row.name }}
                    <!-- </router-link> -->
                </template>
                </el-table-column>
                <el-table-column
                    prop="region"
                    label="所属领域"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="category"
                    label="所属类别"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="funds"
                    label="研究经费"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="研究期限"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="unit"
                    label="填报单位"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="contacts"
                    label="填报联系人"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="联系人手机"
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
        name: 'guideSummaryMessageBox',
        data() {
            return {
                selectedIDs: [],
                queryForm:{
                    name:'',
                    unit:'',
                    contacts:'',
                    phone:'',
                    reginOptions:[{
                        value:'0',
                        label:'领域1'
                    },{
                        value:'1',
                        label:'领域2'
                    }],
                    region:'',
                    categoryOptions:[{
                        value:'0',
                        label:'类别1'
                    },{
                        value:'1',
                        label:'类别2'
                    }],
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
                currentPage:4,
                fenye: {
                    total:400, //共有数据多少条
                    pageNum:1,
                    pageSize:100, //每页显示的条数
                    pageSizes:[100,30,40,50] //选择每页显示多少条
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
    #guideSummaryMessageBox{
        background-color: #edf1f4;
        * {
           font-size: 14px; 
        }
        .queryForm {
            .el-form {
                padding: 5px 0 0 0;
                height: 90px;
                .el-form-item {
                    margin: 5px 0;
                    label {
                        width: 110px !important;
                    }
                }
            }
            .el-button {
                bottom: 10px;
                right: 35px;
            }
        }
        .showList {
            position: relative;
            height: 360px;
            min-height: 0 !important;
            background-color: #fff;
            margin-top: 5px;
            padding: 5px;
            
        }
        .el-table {
            min-height: 0 !important;
            padding-bottom: 0 !important;
            .has-gutter {
                width: 99%;
            }
            .el-table__body-wrapper {
                height: 315px;
                overflow-y: auto;
            }
            table {
                width: auto !important;
            }
            .el-table--scrollable-x,.el-table__body-wrapper{
                overflow-x: hidden;
            }
            &::before {
                background-color: #fff;
                height: 0;
            }
            td,th {
                padding: 6px 0;
            }
            td,th {
                border-left: 1px solid #EBEEF5;
                &:first-child{
                    border-right: 0;
                }
            }
        }
        .pages{
            // transform: scale(0.9);
            padding-top: 5px;
            border-top: 1px solid #d9d9d9;
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
