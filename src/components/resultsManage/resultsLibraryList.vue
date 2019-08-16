<template>
    <div id="resultsLibraryList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm" >
                <el-form-item label="课题名称：" >
                    <el-input v-model="queryForm.name"></el-input>
                </el-form-item>
                <el-form-item label="课题编号：">
                    <el-input v-model="queryForm.num"></el-input>
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
                prop="name"
                label="课题名称"
                :show-overflow-tooltip="true"
                align="center">
                    <template slot-scope="scope">
                        <router-link :to="{
                            name:'ResultsLibraryShow',
                            params:{
                                name:scope.row.id
                            }
                            }"> 
                            {{scope.row.name}}
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column
                prop="unit_name"
                label="应用单位名称"
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
    name:'resultsLibraryList',
    data(){
        return{
            queryForm:{
                name:'',
                unit_name:'222'
            },
            tableData:[{
                id:'0101',
                name: '名称1名称1名称1名称1名称1名称1名称1名称1',
                unit_name: '111'
            },{
                id:'0102',
                name: '名称2',
                unit_name: '222'
            }],
            multipleSelection: [],
            currentPage:4,
            fenye:{
                total:400, //共有数据多少条
                pageNum:1,
                pageSize:100, //每页显示的条数
                pageSizes:[100,30,40,50] //选择每页显示多少条
            },
        }
    },
    methods:{
        handleSelectionChange(val) {
            this.multipleSelection = val;
            let ids = []
            this.multipleSelection.map((item)=> {
                ids.push(item.id)
            })
            this.selectedIDs = ids
            console.log('多选',this.selectedIDs)
        },
        handleCurrentChange:function(val){//val表示当前页
            console.log(val)
        },
        handleSizeChange(val){//val表示每页展示的条数
            console.log(val)
        }
    }
}
</script>
<style lang="less">
#resultsLibraryList{
        .showList{
            margin-top: 40px;
        }
        .el-table{
            min-height: 630px;
            padding-bottom: 10px;
            .el-button{
                margin: 0 auto;
                color: #fff;
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
