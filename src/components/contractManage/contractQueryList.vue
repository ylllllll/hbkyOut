<template>
    <div id="contractQueryList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm" >
                <el-form-item label="课题类别：" >
                    <el-select v-model="queryForm.subjectCategory">
                        <el-option label="所有类别" value=""></el-option>
                        <el-option v-for="(item,index) in optGroup1" :key="index" :label="item.content" :value="item.id"></el-option>
                    </el-select>
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
                stripe
                tooltip-effect="dark"
                width="100%"
                highlight-current-row
                @current-change="handleSelectionChange">
                <el-table-column
                    type="index"
                    label="序号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="subjectName"
                    label="课题名称"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="subjectCategory"
                    label="课题类别"
                    :show-overflow-tooltip="true"
                    align="center">
                    <template slot-scope="scope">
                        <span v-show="scope.row.subjectCategory == 76">综合示范类</span>
                        <span v-show="scope.row.subjectCategory == 77">技术研发类</span>
                        <span v-show="scope.row.subjectCategory == 78">重大技术攻关类</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="subjectObjectivesResearch"
                    min-width="135"
                    label="课题的目标和主要研究内容"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="subjectContact"
                    label="课题联系人"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="subjectContactPhone"
                    label="联系人手机"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="commitmentUnit"
                    label="承担单位"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="subjectSupervisorDepartment"
                    label="课题主管部门"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="approvalStatus"
                    label="审核状态"
                    :show-overflow-tooltip="true"
                    align="center">
                    <template slot-scope="scope">
                        <span v-show="scope.row.approvalStatus == 0">已退回</span>
                        <span v-show="scope.row.approvalStatus == 2">未审核</span>
                        <span v-show="scope.row.approvalStatus == 3">法规中心未审核</span>
                        <span v-show="scope.row.approvalStatus == 4">已审核</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="approvalStatus"
                    label="操作"
                    :show-overflow-tooltip="true"
                    align="center">
                    <template slot-scope="scope">
                        <el-button v-show="scope.row.approvalStatus == 0" @click="handleEdit(scope.row.id)">修改</el-button>
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
                    subjectCategory: null,
                    subjectName: '',
                    subjectContact: '',
                    commitmentUnit: '',
                    subjectSupervisorDepartment: '',
                    subjectContactPhone:''
                },
                optGroup1: [],
                loading: true,
                tableData: [],
                fenye: {
                    total: 0, //共有数据多少条
                    pageNum: 1,
                    pageSize: 10, //每页显示的条数
                    pageSizes: [10,20,30,40,50] //选择每页显示多少条
                }
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.$router.push({
                    name: 'ContractQueryShow',
                    params: {
                        id: val.id
                    }
                })
            },
            handleCurrentChange(val) {              //val表示当前页
                this.fenye.pageNum = val;
                this._axios();
            },
            handleSizeChange(val) {                 //val表示每页展示的条数
                this.fenye.pageSize = val;
                this._axios();
            },
            handleTableFresh(){
                this._axios;
                document.querySelector(".first-pager").click();
            },
            // 请求列表数据
            _axios() {
                let data = this.queryForm;
                    data.pageNum = this.fenye.pageNum;
                    data.pageSize = this.fenye.pageSize;
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/contract/getManageInfoByUid',
                    method: 'get',
                    params: data
                }).then((res) => {
                    console.log(res)
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
                        this.tableData = data.list;
                        this.fenye.total = data.total;
                    }
                })
            },
            handleSearch() {
                this.loading = true;
                this.queryForm.pageNum = 1;
                this._axios();
                document.querySelector(".first-pager").click();
            },
            handleEdit(val) {
                this.$router.push({
                    name: 'ContractQueryEdit',
                    params: {
                        id: val
                    }
                })
            }
        },
        beforeMount() {
            // 请求课题类别
            this.axios({
                url: 'http://192.168.0.80:8087/environment/guide/getCategoryAndDomain',
                method: 'get',
            }).then((res) => {
                let data = res.data.data;
                for(let i in data) {
                    if(data[i].classification == "所属类别") {
                        this.optGroup1.push(data[i]);
                    }
                }
            })
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
                .el-button {
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
