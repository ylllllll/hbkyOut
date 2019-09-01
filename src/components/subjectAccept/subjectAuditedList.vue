<template>
    <div id="subjectAuditedList">
         <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm" >
                <el-form-item label="课题名称：" >
                    <el-input v-model="queryForm.name"></el-input>
                </el-form-item>
                <el-form-item label="承担单位：">
                    <el-input v-model="queryForm.unit"></el-input>
                </el-form-item>
                <el-form-item label="单位性质：">
                     <el-select v-model="queryForm.unit_nature" placeholder="请选择">
                        <el-option 
                         v-for="item in queryForm.unitOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
                        </el-option>
                     </el-select>
                </el-form-item>
                <el-form-item label="课题责任人：" >
                    <el-input v-model="queryForm.person_liable"></el-input>
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
                        name:'SubjectApplyShow',
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
                label="承担单位"
                align="center">
                </el-table-column>
                <el-table-column
                prop="unit_nature"
                label="单位性质"
                align="center">
                </el-table-column>
                <el-table-column
                prop="content"
                label="主要研究内容完成情况"
                align="center">
                </el-table-column>
                <el-table-column
                prop="person_liable"
                label="课题责任人"
                align="center">
                </el-table-column>
                <el-table-column
                prop="startDate"
                label="合同开始时间"
                align="center">
                </el-table-column>
                <el-table-column
                prop="endDate"
                label="合同结束时间"
                align="center">
                </el-table-column>
                <el-table-column
                prop="isUpload"
                label="是否上传评审表"
                align="center">
                </el-table-column>
                <el-table-column
                label="操作"
                align="center">
                 <template>
                    <el-button>上传附件</el-button>
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
                @handleSizeChangeNum="handleSizeChange"
            ></pages>
        </div>
    </div>
</template>
<script>
export default {
    name:'subjectAuditedList',
    data(){
        return{
            queryForm:{
                name:'',
                unit:'',
                unitOptions:[{
                    value:'0',
                    label:'大专院校'
                },{
                    value:'1',
                    label:'科研院所'
                }],
                unit_nature:'',
                person_liable:''
            },
            tableData:[{
                name:'11',
                unit:'11',
                unit_nature:'11',
                content:'11',
                person_liable:'11',
                startDate:'11',
                endDate:'11',
                isUpload:'11'
            }],
            fenye:{
                total:10, //共有数据多少条
                pageNum:1,
                pageSize:10, //每页显示的条数
                pageSizes:[10,20,30,40] //选择每页显示多少条
            },
        }
    },
    methods:{
        handleSelectionChange:function(){

        },
        handleExamine(){

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
 #subjectAuditedList{
    .queryForm .el-form .el-form-item .el-form-item__label{
        width: 130px;
    }
    .showList{
        min-height: 640px;
        margin-top: 10px;
        .el-table{
            min-height: 590px;
            padding-bottom: 10px;
            .el-button{
                margin: 0;
            }
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
