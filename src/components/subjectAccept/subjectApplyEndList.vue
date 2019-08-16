<template>
    <div id="subjectApplyEndList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm" >
                <el-form-item label="课题名称：" >
                    <el-input v-model="queryForm.name"></el-input>
                </el-form-item>
                <el-form-item label="完成单位：">
                    <el-input v-model="queryForm.unit"></el-input>
                </el-form-item>
                <el-form-item label="课题起始时间：">
                    <el-date-picker
                    v-model="queryForm.startDate"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="课题完成时间：" >
                    <el-date-picker
                    v-model="queryForm.endDate"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="成果水平：">
                     <el-select v-model="queryForm.level" placeholder="请选择">
                        <el-option 
                         v-for="item in queryForm.levelOptions"
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
                        name:'SubjectApplyEndShow',
                        params:{
                            name:scope.row.id
                        }
                        }"> 
                        {{scope.row.name}}
                    </router-link>
                </template>
                </el-table-column>
                <el-table-column
                prop="unit"
                label="完成单位"
                align="center">
                </el-table-column>
                <el-table-column
                prop="startDate"
                label="课题起始时间"
                align="center">
                </el-table-column>
                <el-table-column
                prop="endDate"
                label="课题完成时间"
                align="center">
                </el-table-column>
                <el-table-column
                prop="level"
                label="成果水平"
                align="center">
                </el-table-column>
                <el-table-column
                prop="innovate"
                label="主要解决的关键技术与创新点"
                align="center">
                </el-table-column>
                <el-table-column
                prop="completion"
                label="主要技术、经济与环境指标完成情况"
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
    name:'subjectApplyEndList',
    data(){
        return{
            queryForm:{
                name:'',
                unit:'',
                startDate:'',
                endDate:'',
                levelOptions:[{
                    value:'0',
                    label:'国际领先'
                }],
                level:'',
            },
             tableData:[{
                id:'',
                name:'1',
                unit:'1',
                startDate:'1',
                endDate:'1',
                level:'1',
                innovate:'1',
                completion:'2'
            }],
            fenye:{
                total:400, //共有数据多少条
                pageNum:1,
                pageSize:10, //每页显示的条数
                pageSizes:[10,30,40,50] //选择每页显示多少条
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
 #subjectApplyEndList{
    .queryForm{
        .el-date-editor.el-input{
                width:100%;
            .el-input__inner{
                padding-left: 30px;
                width: 197px;
            }
        }
    } 
    .showList{
        min-height:640px;
        margin-top: 10px;
        .el-table{
            min-height: 590px;
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