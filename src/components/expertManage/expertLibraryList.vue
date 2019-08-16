<template>
    <div id="expertLibraryList">
         <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm" >
                <el-form-item label="姓名：" >
                    <el-input v-model="queryForm.name"></el-input>
                </el-form-item>
                <el-form-item label="工作性质：">
                    <el-select v-model="queryForm.work" placeholder="请选择">
                        <el-option
                        v-for="item in queryForm.workOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="专业领域：">
                    <el-select v-model="queryForm.field" placeholder="请选择">
                        <el-option
                        v-for="item in queryForm.fieldOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="省内专家/省外专家：" >
                    <el-input v-model="queryForm.expert"></el-input>
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
                label="姓名"
                :show-overflow-tooltip="true"
                align="center">
                 <template slot-scope="scope">
                    <router-link :to="{
                        name:'ExpertLibraryShow',
                        params:{
                            name:scope.row.id
                        }
                        }"> 
                        {{scope.row.name}}
                    </router-link>
                </template>
                </el-table-column>
                <el-table-column
                prop="work"
                label="工作性质"
                align="center">
                </el-table-column>
                <el-table-column
                prop="field"
                min-width="135"
                label="专业领域"
                align="center">
                </el-table-column>
                <el-table-column
                prop="education"
                label="学历"
                align="center">
                </el-table-column>
                <el-table-column
                prop="phone"
                label="手机"
                align="center">
                </el-table-column>
                <el-table-column
                prop="expert"
                label="省内专家/省外专家"
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
    name:'expertLibraryList',
    data(){
        return{
            queryForm:{
                name:'',
                workOptions:[{
                    value:'0',
                    label:'科研（教育）'
                },{
                    value:'1',
                    label:'咨询（设计、规划）'
                },{
                    value:'2',
                    label:'管理'
                },{
                    value:'3',
                    label:'其他'
                }],
                work:'',
                fieldOptions:[{
                    value:'0',
                    label:'水环境治理'
                },{
                    value:'1',
                    label:'大气环境保护'
                },{
                    value:'2',
                    label:'土壤环境治理'
                },{
                    value:'3',
                    label:'固体废物处置'
                }],
                field:'',
                expert:''
            },
            tableData:[{
                name:'11',
                work:'11',
                field:'11',
                education:'11',
                phone:'11',
                expert:'11'
            }],
            fenye:{
                total:400, //共有数据多少条
                pageNum:1,
                pageSize:100, //每页显示的条数
                pageSizes:[100,30,40,50] //选择每页显示多少条
            }
        }
    },
    methods:{
        handleSelectionChange:function(){

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
#expertLibraryList{
    .queryForm .el-form .el-form-item .el-form-item__label{
        width: 160px;
    }
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
