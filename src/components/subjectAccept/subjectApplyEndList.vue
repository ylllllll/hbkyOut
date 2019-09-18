<template>
    <div id="subjectApplyEndList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm" >
                <el-form-item label="课题名称：" >
                    <el-input v-model="queryForm.topicName"></el-input>
                </el-form-item>
                <el-form-item label="课题编号：">
                    <el-input v-model="queryForm.topicNumber"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click="handleQueryForm">搜索</el-button>
        </div>
         <!-- 展示列表 -->
        <div class="showList">
            <!-- 表格 -->
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                v-loading="loading"
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
                prop="topicName"
                label="课题名称"
                :show-overflow-tooltip="true"
                align="center">
                 <template slot-scope="scope">
                    <router-link :to="{
                        name:'SubjectApplyEndShow',
                        params:{
                            id:scope.row.id,
                            arrays:tableData,
                        }
                        }"> 
                        {{scope.row.topicName}}
                    </router-link>
                </template>
                </el-table-column>
                <el-table-column
                prop="subjectUndertakingUnit"
                label="完成单位"
                align="center">
                </el-table-column>
                <el-table-column
                prop="acceptanceCertificate.projectStartTime"
                label="课题起始时间"
                align="center">
                </el-table-column>
                <el-table-column
                prop="acceptanceCertificate.projectCompletionTime"
                label="课题完成时间"
                align="center">
                </el-table-column><s></s>
                <el-table-column
                prop="acceptanceCertificate.achievementLevel"
                label="成果水平"
                align="center">
                    <template slot-scope="scope">
                        <!-- <el-select v-model="scope.row.acceptanceCertificate.achievementLevel" disabled>
                            <el-option 
                                v-for="item in achievementLevelOptions"
                                :key="item.id"
                                :label="item.content"
                                :value="item.id">
                            </el-option>
                        </el-select> -->
                        <span v-for="(item,index) in achievementLevelOptions" :key="index" v-show="scope.row.acceptanceCertificate.achievementLevel == item.id">{{ item.content }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="acceptanceCertificate.mainSolveTechnology"
                label="主要解决的关键技术与创新点"
                align="center"
                min-width="80">
                </el-table-column>
                <el-table-column
                prop="acceptanceCertificate.mainCompletion"
                label="主要技术、经济与环境指标完成情况"
                align="center"
                min-width="100">
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
                @handleTableFreshNum="handleTableFresh"
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
                topicName:'',
                topicNumber:''
            },
            tableData:[
            //     {
            //     id:'',
            //     name:'1',
            //     unit:'1',
            //     startDate:'1',
            //     endDate:'1',
            //     level:'1',
            //     innovate:'1',
            //     completion:'2',
            //     acceptanceCertificate:{
            //         achievementLevel:null,
            //     }
            // }
            ],
            // 成果水平
            achievementLevelOptions:[{
                id:'',
                content:''
            }],
            fenye:{
                total:10, //共有数据多少条
                pageNum:1,
                pageSize:10, //每页显示的条数
                pageSizes:[10,20,30,40] //选择每页显示多少条
            },
            loading:false
        }
    },
    methods:{
        handleSelectionChange:function(){
            
        },
        // 分页
        handleTableFresh(){
            document.querySelector(".first-pager").click()
            this.getTableData(this.queryForm.topicName,this.queryForm.companyName,this.fenye.pageNum,this.fenye.pageSize)
        },
        handleCurrentChange:function(val){
            this.fenye.pageNum = val
            this.getTableData(this.queryForm.topicName,this.queryForm.topicNumber,this.fenye.pageNum,this.fenye.pageSize)
        },
        handleSizeChange:function(val){
            this.fenye.pageSize = val
            this.getTableData(this.queryForm.topicName,this.queryForm.topicNumber,this.fenye.pageNum,this.fenye.pageSize)
        },
        // 获取成果水平
        getAchievementShapeOptions(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.80:8087/checkApplyStyle/queryAchievementLevel',
            }).then(function(res){
                // console.log(res)
                _this.achievementLevelOptions = res.data.data
            }).catch(function(err){
                console.log(err)
            })
        },
        // 搜索
        handleQueryForm(){
            this.getTableData(this.queryForm.topicName,this.queryForm.topicNumber,this.fenye.pageNum,this.fenye.pageSize)
        },
        // 获取列表信息
        getTableData(topicName,topicNumber,Page,total){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.80:8087/apply/queryResult',
                params:{
                    topicName,
                    topicNumber,
                    Page,
                    total
                }
            }).then((res)=>{
                console.log(res.data.data.data)
                if(res.data.data == null){
                    _this.tableData=[]
                    _this.loading = false
                }else{
                    _this.loading = false
                    _this.fenye.total = res.data.data.count
                    _this.tableData = res.data.data.data
                }
            }).catch((err)=>{
                console.log(err)
            })
        }
    },
    async created(){
        await this.getAchievementShapeOptions()
        await this.getTableData(this.queryForm.topicName,this.queryForm.topicNumber,this.fenye.pageNum,this.fenye.pageSize)
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
    .el-select{
        .el-input.is-disabled{
            .el-input__inner{
                border: 0 !important;
                height: 23px !important;
                text-align: center !important;
            }
            .el-input__suffix{
                display: none;
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