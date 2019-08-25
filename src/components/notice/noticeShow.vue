<template>
    <div id="noticeShow">
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
                prop="title"
                label="公告标题"
                :show-overflow-tooltip="true"
                align="center">
                 <template slot-scope="scope">
                       <span @click="handleShow(scope.row.id)">{{scope.row.title}}</span>
                </template>
                </el-table-column>
                <el-table-column
                prop="startTime"
                label="发送时间"
                align="center">
                </el-table-column>
                <el-table-column
                prop="content"
                min-width="135"
                label="公告内容"
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
                @handleTableFreshNum="handleTableFresh"
            ></pages>
        </div>
        <!-- 查看 -->
        <el-dialog title="查看公告" :visible.sync="dialogShow" top="0">
             <el-form ref="form" :model="form" label-width="80px">
                 <div class="form-item">
                     <span>公告标题：</span>
                     <el-input v-model="form.title" disabled></el-input>
                 </div>
                <div class="form-item">
                    <div class="form-item-date">
                        <span>开始时间：</span>
                        <el-date-picker 
                        type="date" 
                        placeholder="选择日期" 
                        v-model="form.startTime"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"
                        disabled ></el-date-picker>
                        
                    </div>
                    <div class="form-item-date">
                        <span style="padding-left:10px;">结束时间：</span>
                        <el-date-picker 
                        type="date" 
                        placeholder="选择日期" 
                        v-model="form.endTime"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"
                        disabled ></el-date-picker>
                    </div>
                </div>
                <div class="form-item form-item-content">
                    <span>公告正文：</span>
                    <el-input
                     v-model="form.content"
                     disabled
                     type="textarea">
                    </el-input>
                </div>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name:'noticeShow',
    data(){
        return{
            tableData:[{
                id:'0101',
                title:'公告',
                startTime:'11',
                content:'11'
            },{
                id:'0102',
                title:'公告',
                startTime:'11',
                content:'11'
            }],
            fenye:{
                total:400, //共有数据多少条
                pageNum:1,
                pageSize:2, //每页显示的条数
                pageSizes:[2,20,30,40] //选择每页显示多少条
            },
            dialogTableVisible:false,
            dialogTableEdit:false,
            dialogShow:false,
            form:{
                title:'',
                startTime:'',
                endTime:'',
                content:''
            },
            id:'',
            selectedIDs:[],
            multipleSelection:[],
            loading:true
        }
    },
    methods:{
        // 查看公告
        handleShow(id){
            this.tableData.map((item) => {
                if(id == item.id){
                    this.form = item
                    this.dialogShow = true
                    return;
                }
            })
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            var ids = []
            this.multipleSelection.map((item)=> {
                ids.push(item.id)
            })
            this.selectedIDs = ids
        },
        // 分页
        handleCurrentChange:function(val){//val表示当前页
            this.fenye.pageNum = val
            this.getTableData(this.fenye.pageNum,this.fenye.pageSize)
        },
        handleSizeChange(val){//val表示每页展示的条数
            this.fenye.pageSize = val
            this.getTableData(this.fenye.pageNum,this.fenye.pageSize)
        },
        handleTableFresh(){
            document.querySelector(".first-pager").click()
            this.getTableData(this.fenye.pageNum,this.fenye.pageSize)
        },
        getTableData(page,total){
            let _this = this;
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/notification/query',
                params:{
                    page:page,
                    total:total
                }
            }).then(function(res){
                console.log(res.data.data)
                if(res.data.data == null){
                    _this.tableData=[]
                    _this.loading = false
                }else{
                    _this.loading = false
                    _this.fenye.total = res.data.data.alltotal
                    _this.tableData = res.data.data.data
                }
            }).catch(function(err){
                console.log(err)
            })
        }
    },
    mounted(){
        this.getTableData(this.fenye.pageNum,this.fenye.pageSize)
    }
}
</script>
<style lang="less">
#noticeShow{
    .showList{
        min-height: 810px;
        .el-table{
            min-height: 750px;
        }
    }
    .el-dialog__wrapper{
        background-color: rgba(0,0,0,0.3);
        .el-dialog{
            color: #000;
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 1000px;
            transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            -moz-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            -o-transform: translate(-50%,-50%);
            .el-dialog__header{
                text-align: center;
                font-size: 0;
                position: relative;
                padding: 20px 0;
                border-bottom: 1px solid #d9d9d9;
                span{
                    font-size: 21px;
                }
                .el-icon-close:before{
                    font-size: 23px;
                    font-weight: 600;
                }
            }
            .el-dialog__body{
                padding: 2px 34px 10px 20px;
                .el-form{
                    .form-item{
                        width: 100%;
                        font-size: 0;
                        display: inline-block;
                        padding-bottom: 10px;
                        span{
                            width: 10%;
                            text-align: right;
                        }
                        .el-input,.el-textarea{
                            width: 90%;
                            textarea{
                                min-height: 356px !important;
                                padding: 0 10px;
                            }
                        }
                        .form-item-date{
                            width: 50%;
                            font-size: 0;
                            display: inline-block;
                            .el-date-editor{
                                width: 77.7%;
                                .el-input__inner{
                                    padding-left: 30px;
                                }
                                span{
                                    width: auto;
                                }
                            }
                        }
                    }
                    .form-item-content span{
                        vertical-align: top;
                    }
                }
                .el-button{
                    display: block;
                }
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
    .el-tooltip{
        span{
            cursor: pointer;
        }
    }
}
</style>
