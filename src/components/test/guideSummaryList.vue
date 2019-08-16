<template>
    <div id="guideSummaryList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm">
                <el-form-item label="指南汇总标题：" >
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
                <el-form-item label="填报类别：">
                    <el-select v-model="queryForm.category">
                        <el-option 
                                v-for="item in queryForm.categoryOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="填报单位：">
                    <el-input v-model="queryForm.unit"></el-input>
                </el-form-item>
                <el-form-item label="建议立项时间：">
                    <el-input v-model="queryForm.contacts"></el-input>
                </el-form-item>
                <el-form-item label="主要研究内容和关键技术：">
                    <el-input v-model="queryForm.phone"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary">搜索</el-button>
        </div>

        <!-- 按钮 -->
        <el-button type="primary" size="mini" @click="handleAdd">添加</el-button>

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
    name:'guideSummaryList',
    data() {
        return {
            queryForm: {
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
            tableData: [{
                id: '1001',
                name: '名称1名称1名称1名称1名称1名称1名称1名称1'
            },{
                id: '1002',
                name: '名称2'
            },{
                id: '1003',
                name: '名称3'
            },{
                id: '1004',
                name: '名称4'
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
        handleAdd(){
            this.$router.push("/index/guideSummary/guideSummaryAdd");
        },
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
#guideSummaryList {
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
        .el-table{
            min-height: 590px;
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
