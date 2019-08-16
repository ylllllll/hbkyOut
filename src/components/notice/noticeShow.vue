<template>
    <div id="noticeShow">
        <div class="button">
            <el-button type="primary" @click="handleAdd">添加</el-button>
            <el-button type="primary" @click="handleEdit">修改</el-button>
            <el-button type="primary" @click="handleDelete">删除</el-button>
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
                prop="title"
                label="公告标题"
                :show-overflow-tooltip="true"
                align="center">
                 <template slot-scope="scope">
                    <router-link :to="{
                        name:'ContractCenterShow',
                        params:{
                            name:scope.row.id
                        }
                        }"> 
                        {{scope.row.title}}
                    </router-link>
                </template>
                </el-table-column>
                <el-table-column
                prop="date"
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
            ></pages>
        </div>

        <!-- 对话框 -->
        <el-dialog :title="title" :visible.sync="dialogTableVisible" top="0">
             <el-form ref="form" :model="form" label-width="80px">
                 <div class="form-item">
                     <span>公告标题：</span>
                     <el-input v-model="form.title"></el-input>
                 </div>
                <div class="form-item">
                    <div class="form-item-date">
                        <span>开始时间：</span>
                        <el-date-picker 
                        type="date" 
                        placeholder="选择日期" 
                        v-model="form.date1"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" ></el-date-picker>
                        
                    </div>
                    <div class="form-item-date">
                        <span style="padding-left:10px;">结束时间：</span>
                        <el-date-picker 
                        type="date" 
                        placeholder="选择日期" 
                        v-model="form.date2"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" ></el-date-picker>
                    </div>
                </div>
                <div class="form-item form-item-content">
                    <span>公告正文：</span>
                    <el-input
                     v-model="form.content"
                     type="textarea">
                    </el-input>
                </div>
            </el-form>
            <el-button type="primary" @click="handleSend">发送</el-button>
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
                date:'11',
                content:'11'
            },{
                id:'0102',
                title:'公告',
                date:'11',
                content:'11'
            }],
            fenye:{
                total:400, //共有数据多少条
                pageNum:1,
                pageSize:100, //每页显示的条数
                pageSizes:[100,30,40,50] //选择每页显示多少条
            },
            dialogTableVisible:false,
            form:{
                title:'',
                date1:'',
                date2:'',
                content:''
            },
            selectedIDs:[],
            multipleSelection:[],
            title:"添加公告"
        }
    },
    methods:{
        handleAdd(){
            let $this = this;
            $this.form.title=''
            $this.form.date1=''
            $this.form.date2=''
            $this.form.content=''
            this.dialogTableVisible = true
        },
        handleEdit(){
            let $this = this;
            if($this.selectedIDs.length != 1){
                $this.$alert('请选择一条数据进行修改', '提示', {
                    confirmButtonText: '确定',
                    type:'warning',
                }).then(() => {
                }).catch(() => {
                })
            }else{
                $this.title = '修改公告'
                $this.handleAdd();
                $this.form.title=$this.multipleSelection[0].title
                $this.form.date1=$this.multipleSelection[0].date
                $this.form.date2=$this.multipleSelection[0].date
                $this.form.content=$this.multipleSelection[0].content
            }
        },
        handleDelete(){

        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            let ids = []
            this.multipleSelection.map((item)=> {
                ids.push(item.id)
            })
            this.selectedIDs = ids
        },
        handleCurrentChange:function(val){//val表示当前页
            console.log(val)
        },
        handleSizeChange(val){//val表示每页展示的条数
            console.log(val)
        },
        handleSend(){//添加发送
            let $this = this;
            $this.title = "添加公告"
            for(let i in $this.form){
                if($this.form[i] == '' || $this.form[i] == null){
                    $this.$alert('请把信息填写完整', '提示', {
                        confirmButtonText: '确定',
                        type:'warning',
                    }).then(() => {
                    }).catch(() => {
                    })
                    return;
                }
            }
            let $form = {
                id:'',
                title:$this.form.title,
                date:$this.form.date1,
                content:$this.form.content
            }
            $this.tableData.push($form)
            $this.dialogTableVisible = false
        }
    }
}
</script>
<style lang="less">
#noticeShow{
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
}
</style>
