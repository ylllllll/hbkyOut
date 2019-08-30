<template>
    <div id="subjectNotAuditedList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm" >
                <el-form-item label="课题名称：" >
                    <el-input v-model="queryForm.name"></el-input>
                </el-form-item>
                <el-form-item label="课题编号：">
                    <el-input v-model="queryForm.topicNumber"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary"  @click="handleQuery">搜索</el-button>
        </div>

        <el-button v-show="isShowExamine" @click="handleExamine">审核</el-button>
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
                        name:'SubjectApplyShow',
                        params:{
                            id:scope.row.id,
                            arrays:tableData,
                            isShow:1,
                        }
                        }"> 
                        {{scope.row.topicName}}
                    </router-link>
                </template>
                </el-table-column>
                <el-table-column
                prop="subjectUndertakingUnit"
                label="承担单位"
                align="center">
                </el-table-column>
                <el-table-column
                prop="unitNature"
                label="单位性质"
                align="center">
                    <template slot-scope="scope">
                        <span v-show="scope.row.unitNature == '1'">大专院校</span>
                        <span v-show="scope.row.unitNature == '2'">科研院所</span>
                        <span v-show="scope.row.unitNature == '3'">企业</span>
                        <span v-show="scope.row.unitNature == '4'">其它</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="mainContentSituation"
                label="主要研究内容完成情况"
                align="center">
                </el-table-column>
                <el-table-column
                prop="projectLeader"
                label="课题责任人"
                align="center">
                </el-table-column>
                <el-table-column
                prop="agreementStartTime"
                label="合同开始时间"
                align="center">
                </el-table-column>
                <el-table-column
                prop="agreementEndTime"
                label="合同结束时间"
                align="center">
                </el-table-column>
                <el-table-column
                prop="acceptancePhaseName"
                label="状态"
                align="center">
                </el-table-column>
                <el-table-column
                label="操作"
                align="center">
                    <template slot-scope="scope">
                        <el-button @click="handleUpload(scope.row.id,2)">上传附件</el-button>
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
                @handleTableFreshNum="handleTableFresh"
            ></pages>
        </div>
    </div>
</template>
<script>
export default {
    name:'subjectNotAuditedList',
    data(){
        return{
            queryForm:{
                name:'',
                topicNumber:''
            },
            tableData:[{
                topicName:'11',
                subjectUndertakingUnit:'11',
                unitNature:'11',
                mainContentSituation:'11',
                projectLeader:'11',
                agreementStartTime:'11',
                agreementEndTime:'11',
                acceptancePhaseName:'11'
            }],
            fenye:{
                total:0, //共有数据多少条
                pageNum:1,
                pageSize:10, //每页显示的条数
                pageSizes:[10,20,30,40] //选择每页显示多少条
            },
            loading:true,
            selectedIDs:[],
            acceptancePhaseIds:[],
            isShowExamine:true
        }
    },
    methods:{
        // 员工上传附件
        handleUpload(id,num){
            if(num == 1){
                this.$router.push({
                    name:'SubjectUploadFirst',
                    params:{
                        id:id,
                        arrays:this.tableData,
                    }
                })
            }else{
                this.$router.push({
                    name:'SubjectUploadSecond',
                    params:{
                        id:id,
                        arrays:this.tableData,
                    }
                })
            }
        },
        // 搜索
        handleQuery(){
            console.log(this.queryForm.unit_nature)
            this.getTableData(this.queryForm.name,this.queryForm.topicNumber,this.fenye.pageNum,this.fenye.pageSize)
        },
        handleSelectionChange:function(val){
            this.multipleSelection = val
            let ids = []
            let btnAcceptancePhaseId = []
            this.multipleSelection.map((item)=>{
                ids.push(item.id)
                btnAcceptancePhaseId.push(item.acceptancePhaseId)
            })
            this.selectedIDs = ids
            this.acceptancePhaseIds = btnAcceptancePhaseId
            this.isShowBtnExamine(btnAcceptancePhaseId)
        },
        // 是否显示上面的审核按钮
        isShowBtnExamine(ids){
            if(ids.length == 1){
                if(ids[0] != 2){
                    this.isShowExamine=false
                }else{
                    this.isShowExamine=true
                }
            }else{
                 this.isShowExamine=true
            }
        },
        handleExamine(){
            if(this.selectedIDs.length !=1){
                this.$alert('请选择一条数据', '提示', {
                    confirmButtonText: '确定',
                    type: 'warning'
                }).then(() => {}).catch(() => {}); //一定别忘了这个
            }else{
                this.$router.push({
                    name:'SubjectApplyShow',
                    params:{
                        id:this.selectedIDs,
                        arrays:this.tableData,
                        isShow:2,
                    }
                })
            }
        },
         // 点击按钮刷新表格
        handleTableFresh(){
            this.getTableData(this.queryForm.name,this.queryForm.topicNumber,this.fenye.pageNum,this.fenye.pageSize)
        },
        handleCurrentChange:function(val){
            console.log(val)
            this.fenye.pageNum = val
            this.getTableData(this.queryForm.name,this.queryForm.topicNumber,this.fenye.pageNum,this.fenye.pageSize)
        },
        handleSizeChange:function(val){
            console.log(val)
            this.fenye.pageSize = val
            this.getTableData(this.queryForm.name,this.queryForm.topicNumber,this.fenye.pageNum,this.fenye.pageSize)
        },
        getTableData(topicName,topicNumber,Page,total){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/apply/checkApplyStateQuery',
                params:{
                    topicName:topicName,
                    topicNumber:topicNumber,
                    Page:Page,
                    total:total
                },
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            }).then(function(res){
                console.log(res)
                if(res.data.resultFlag == 1){
                    _this.$alert('请先登录', '提示', {
                    confirmButtonText: '确定',
                    type: 'warning'
                    }).then(() => {
                        _this.$router.push('/');
                    }).catch(() => {
                        _this.$router.push('/');
                    }); //一定别忘了这个
                }else{
                    if(res.data.data == null){
                        _this.tableData=[]
                        _this.loading = false
                    }else{
                        _this.tableData = res.data.data.data
                        _this.loading = false
                        _this.fenye.total = res.data.data.count
                    }
                }
            }).catch(function(err){
                console.log(err)
            })
        },
        getUnitNatureData(){
            let _this = this
            this.axios({
                method:"POST",
                url:'http://192.168.0.37:8087/checkApplyStyle/unitNature',
            }).then(function(res){
                _this.queryForm.unitOptions = res.data.data
            })
            .catch(function(err){
              console.log(err);
            });
        }
    },
    mounted(){
        this.getTableData(this.queryForm.name,this.queryForm.topicNumber,this.fenye.pageNum,this.fenye.pageSize)
        this.getUnitNatureData()
    }
}
</script>

<style lang="less">
    #subjectNotAuditedList{
        .queryForm .el-form .el-form-item .el-form-item__label{
            width: 130px;
        }
        .showList{
            min-height: 640px;
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
