<template>
    <div id="contractQueryList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm" >
                <el-form-item label="课程类别：" >
                    <el-input v-model="queryForm.subjectCategory"></el-input>
                </el-form-item>
                <el-form-item label="课程名称：">
                    <el-input v-model="queryForm.subjectName"></el-input>
                </el-form-item>
                <el-form-item label="课题联系人：">
                     <el-input v-model="queryForm.subjectContact"></el-input>
                </el-form-item>
                <el-form-item label="承担单位：" >
                    <el-input v-model="queryForm.commitmentUnit"></el-input>
                </el-form-item>
                <el-form-item label="课题主管部门：" >
                    <el-input v-model="queryForm.subjectSupervisorDepartment"></el-input>
                </el-form-item>
                <el-form-item label="联系人手机：" >
                    <el-input v-model="queryForm.subjectContactPhone"></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="handleSearch">搜索</el-button>
        </div>

        <!-- 展示列表 -->
        <div class="showList">
            <!-- 表格 -->
            <el-table
                v-loading="loading"
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%">
                <!-- <el-table-column
                    type="selection"
                    align="center">
                </el-table-column> -->
                <el-table-column
                    type="index"
                    label="序号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="subjectCategory"
                    label="课题类别"
                    :show-overflow-tooltip="true"
                    align="center">
                 <template slot-scope="scope">
                    <router-link :to="{
                            name: 'ContractQueryShow',
                            params: {
                                id: scope.row.id
                            }
                        }"> 
                        {{ scope.row.subjectCategory }}
                    </router-link>
                </template>
                </el-table-column>
                <el-table-column
                prop="subjectName"
                label="课题名称"
                align="center">
                </el-table-column>
                <el-table-column
                prop="subjectObjectivesResearch"
                min-width="135"
                label="课题的目标和主要研究内容"
                align="center">
                </el-table-column>
                <el-table-column
                prop="subjectContact"
                label="课题联系人"
                align="center">
                </el-table-column>
                <el-table-column
                prop="subjectContactPhone"
                label="联系人手机"
                align="center">
                </el-table-column>
                <el-table-column
                prop="commitmentUnit"
                label="承担单位"
                align="center">
                </el-table-column>
                <el-table-column
                prop="subjectSupervisorDepartment"
                label="课题主管部门"
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
        name:'contractQueryList',
        data(){
            return {
                queryForm: {
                    subjectCategory: '',
                    subjectName: '',
                    subjectContact: '',
                    commitmentUnit: '',
                    subjectSupervisorDepartment: '',
                    subjectContactPhone:'',
                    pageNum: 1,
                    pageSize: 10
                },
                loading: true,
                tableData: [],
                currentPage: 4,
                fenye: {
                    total: 400, //共有数据多少条
                    pageNum: 1,
                    pageSize: 10, //每页显示的条数
                    pageSizes: [10,20,30,40,50] //选择每页显示多少条
                }
            }
        },
        methods:{
            handleCurrentChange(val) {              //val表示当前页
                this.queryForm.pageNum = val;
                this._axios();
            },
            handleSizeChange(val) {                 //val表示每页展示的条数
                this.queryForm.pageSize = val;
                this._axios();
            },
            handleTableFresh(){
                this._axios;
                document.querySelector(".first-pager").click();
            },
            // 请求列表数据
            _axios() {
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/contract/getAllInfo',
                    method: 'get',
                    params: this.queryForm
                }).then((res) => {
                    this.loading = false;
                    let data = res.data.data;
                    if(data == "没有查到相关信息") {
                        this.tableData = []; 
                        this.$alert('没有查到相关信息','提示',{
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
                    }else {
                        this.tableData = data;
                    }
                })
            },
            handleSearch() {
                this.loading = true;
                this.queryForm.pageNum = 1;
                this._axios();
                document.querySelector(".first-pager").click();
            }
        },
        beforeMount() {
            this._axios();
        }
    }
</script>

<style lang="less">
    #contractQueryList{
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
