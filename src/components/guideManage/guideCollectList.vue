<template>
    <div id="guideCollectList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm" >
                <el-form-item label="指南建议名称：" >
                    <el-input v-model="queryForm.guideName"></el-input>
                </el-form-item>
                <el-form-item label="所属领域：">
                    <el-select v-model="queryForm.domain">
                        <el-option label="所有领域" value=""></el-option>
                        <el-option v-for="(item,index) in optGroup1" :key="index" :label="item.content" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属类别：">
                    <el-select v-model="queryForm.category">
                        <el-option label="所有类别" value=""></el-option>
                        <el-option v-for="(item,index) in optGroup2" :key="index" :label="item.content" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="填报联系人：">
                    <el-input v-model="queryForm.fillContacts"></el-input>
                </el-form-item>
                <el-form-item label="联系人手机：">
                    <el-input v-model="queryForm.contactPhone"></el-input>
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
                <el-table-column
                    type="index"
                    label="序号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="guide_name"
                    label="指南建议名称"
                    :show-overflow-tooltip="true"
                    align="center">
                 <template slot-scope="scope">
                    <router-link :to="{
                            name: 'GuideCollectShow',
                            params: {
                                id: scope.row.id,
                                data: tableData
                            }
                        }"> 
                        {{ scope.row.guide_name }}
                    </router-link>
                </template>
                </el-table-column>
                <el-table-column
                    prop="domain"
                    label="所属领域"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="category"
                    label="所属类别"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="research_fund"
                    label="研究经费"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="research_period"
                    label="研究期限"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="fill_unit"
                    label="填报单位"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="fill_contacts"
                    label="填报联系人"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="contact_phone"
                    label="联系人手机"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="is_select"
                    label="选中状态"
                    :show-overflow-tooltip="true"
                    align="center">
                    <template slot-scope="scope">
                        <span v-show="scope.row.is_select == '0'">未选中</span>
                        <span v-show="scope.row.is_select == '1'">已选中</span>
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
        name:'guideCollectList',
        data(){
            return {
                queryForm: {
                    // null为接口需要
                    guideName: null,
                    domain: null,
                    category: null,
                    fillUnit: null,
                    fillContacts: null,
                    contactPhone: null,
                    // 凑字段
                    uid: '0'
                },
                optGroup1: [],
                optGroup2: [],
                loading: true,
                tableData: [],
                currentPage: 4,
                fenye: {
                    total: 0, //共有数据多少条
                    pageNum: 1,
                    pageSize: 10, //每页显示的条数
                    pageSizes: [10,20,30,40,50] //选择每页显示多少条
                }
            }
        },
        methods: {
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
                    url: 'http://192.168.0.80:8087/environment/guide/getUnitCollection',
                    method: 'post',
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
            }
        },
        beforeMount() {
            // 请求所属领域、所属类别
            this.axios({
                url: 'http://192.168.0.80:8087/environment/guide/getCategoryAndDomain',
                method: 'get',
            }).then((res) => {
                let data = res.data.data;
                for(let i in data) {
                    if(data[i].classification == "所属领域") {
                        this.optGroup1.push(data[i]);
                    }else {
                        this.optGroup2.push(data[i]);
                    }
                }
            })
            this._axios();
        }
    }
</script>

<style lang="less">
    #guideCollectList {
        .showList {
            position: relative;
            min-height: 680px;
            background-color: #fff;
            margin-top: 10px;
            padding: 10px;
            .el-table {
                min-height: 630px;
                padding-bottom: 10px;
                table {
                    width: auto !important;
                }
                .el-table--scrollable-x,.el-table__body-wrapper {
                    overflow-x: hidden;
                }
                &::before {
                    background-color: #fff;
                    height: 0;
                }
                td,th {
                    padding: 12px 0;
                }
                td,th {
                    border-left: 1px solid #EBEEF5;
                    &:first-child {
                        border-right: 0;
                    }
                }
            }
            .pages {
                .el-button {
                    background-color: transparent;
                    border: 0;
                    margin: 0;
                    span {
                        line-height: 1;
                    }
                }
            }
        }    
    }
</style>
