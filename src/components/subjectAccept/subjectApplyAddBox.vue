<template>
    <div id="subjectApplyAddBox">
        <el-button class="btnConfirm" @click="handleConfirm">确定</el-button>
        <span class="popClose" @click="handleClose"><i class="el-icon-close"></i></span>
        <!-- 展示列表 -->
        <div class="showList">
            <!-- 表格 -->
            <el-table
                v-loading="loading"
                ref="multipleTable"
                :data="tableData"
                height="475"
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
                    prop="projectNo"
                    label="课题编号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="subjectName"
                    label="课题名称"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="subjeceLeader"
                    label="课题负责人"
                    align="center">
                </el-table-column>
                <!-- <el-table-column
                    prop="unitNature"
                    label="单位性质"
                    align="center">
                </el-table-column> -->
                <el-table-column
                    prop="subjectLeaderPhone"
                    label="课题负责人联系电话"
                    width="145"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="email"
                    label="课题负责人邮箱"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="commitmentUnitAddress"
                    label="通讯地址"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="contractStartTime"
                    label="合同开始时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="contractEndTime"
                    label="合同结束时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="commitmentUnit"
                    label="承担单位"
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
                @handleTableFreshNum="handleTableFresh">
            </pages>
        </div>
    </div>
</template>
<script>

export default {
    name:'subjectApplyAddBox',
    data(){
        return{
            tableData:[{
                projectNo:'1',
                subjectName:'1',
                subjeceLeader:'1',
                unitNature:'',
                subjectLeaderPhone:'',
                email:'',
                commitmentUnitAddress:'',
                contractStartTime:'',
                contractEndTime:'',
                commitmentUnit:''
            }],
            fenye: {
                total:10, //共有数据多少条
                pageNum:1,
                pageSize:10, //每页显示的条数
                pageSizes:[10,20,30,40,50] //选择每页显示多少条
            },
            loading:true,
            selectedIDs:[]
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
        },
        // 确认
        handleConfirm(){
            this.$emit("confirm",this.selectedIDs,this.tableData)
        },
        // 关闭
        handleClose(){
            this.$emit("popClose")
        },
        // 分页
        handleCurrentChange(val) { //val表示当前页
            this.fenye.pageNum = val;
            this.getTableData(this.fenye.pageNum,this.fenye.pageSize)
        },
        handleSizeChange(val){ //val表示每页展示的条数
            this.fenye.pageSize = val;
            this.getTableData(this.fenye.pageNum,this.fenye.pageSize)
        },
        handleTableFresh(){
            document.querySelector(".first-pager").click();
            this.getTableData(this.fenye.pageNum,this.fenye.pageSize)
        },
        getTableData(Page,total){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.80:8087/apply/queryTopicNameAndNumber',
                params:{
                    Page,
                    total
                }
            }).then((res) =>{
                if(res.data.resultFlag == 1){
                    _this.$alert(res.data.data, '提示', {
                        confirmButtonText: '确定',
                        type:'warning',
                        callback: action => {
                        }
                    });
                }else{
                    if(res.data.data == null || res.data.data == undefined){
                        _this.tableData = []
                        _this.loading = false
                    }else{
                        _this.tableData = res.data.data.data
                        _this.loading = false
                        _this.fenye.total = res.data.data.count
                    }
                }
            }).catch((err) =>{
                console.log(err)
            })
        }
    },
    beforeMount(){
        this.getTableData(this.fenye.pageNum,this.fenye.pageSize)
    }
}
</script>
<style  lang="less">
#subjectApplyAddBox{
    .btnConfirm{
        margin-left: 10px;
        margin-bottom: 0;
    }
    .showList{
        min-height: auto;
        .el-table{
            min-height: 0;
            overflow: hidden;
            .el-table__body-wrapper{
                padding-bottom: 10px;
            }
        }
    }
    .popClose{
        float: right;
        margin: 10px 20px 0 0;
        cursor: pointer;
        .el-icon-close:before{
            font-size: 30px;
            font-weight: bold;
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