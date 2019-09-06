<template>
    <div id="adminManageList">
        <!-- 按钮 -->
        <el-button type="primary" size="mini" @click="handleAdd">添加</el-button>
        <el-button type="primary" size="mini" @click="handleEdit">修改</el-button>

        <!-- 展示列表 -->
        <div class="showList" v-if="refreshFlag">
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
                    label="姓名"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="userName"
                    label="登录名"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="手机号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="email"
                    label="邮箱"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="idCard"
                    label="身份证号"
                    :show-overflow-tooltip="true"
                    align="center">
                    <template slot-scope="scope">
                        <a href="../../assets/images/home/check.png" download="123">{{ scope.row.idCard }}</a>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="handle"
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                        <div class="el-button" v-show="scope.row.handle == 0" @click="handleStartUse">启用</div>                        
                        <div class="el-button" v-show="scope.row.handle == 1" @click="handleStopUse">停用</div>                        
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
                @handleSizeChangeNum="handleSizeChange">
            </pages>
        </div>
        <div class="cover_box" :class="{over_box_active:overBoxHide}">
            <div class="message_box">
                <span class="btn_close" @click="handleCloseCover"></span>
                <header class="message_box_header">
                    <h2 class="title" v-show="titleFlag.add">员工新增</h2>
                    <h2 class="title" v-show="titleFlag.edit">员工信息修改</h2>
                </header>
                <section class="message_box_content" v-if="refreshFlag">
                    <messageBox :btnState="btnState"></messageBox>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import AdminManageMessageBox from '@/components/backstageManage/adminManageMessageBox'
    export default {
        name: 'adminManageList',
        components: {
            messageBox: AdminManageMessageBox
        },
        data() {
            return {
                btnState: '',
                titleFlag: {
                    add: false,
                    edit: false
                },
                selectedIDs: [],
                refreshFlag: true,
                overBoxHide: true,
                tableData: [{
                    id: '1001',
                    name: '姓名1',
                    userName: '登录名1',
                    phone: '13999999999',
                    email: '10086@qq.com',
                    idCard: '320333333333333333',
                    handle: '0'
                },{
                    id: '1002',
                    name: '姓名2',
                    userName: '登录名2',
                    phone: '13999999999',
                    email: '10086@qq.com',
                    idCard: '320333333333333333',
                    handle: '1'
                },{
                    id: '1003',
                    name: '姓名3',
                    userName: '登录名3',
                    phone: '13999999999',
                    email: '10086@qq.com',
                    idCard: '320333333333333333'
                }],
                currentPage: 4,
                fenye: {
                    total: 400, //共有数据多少条
                    pageNum: 1,
                    pageSize: 100, //每页显示的条数
                    pageSizes: [100,30,40,50] //选择每页显示多少条
                }
            }
        },
        methods: {
            handleAdd() {
                this.overBoxHide = false;
                this.titleFlag.add = true;
                this.btnState = "add";
            },
            handleEdit() {
                if(this.selectedIDs.length != 1) {
                    this.$confirm('请选择一条数据','提示',{
                        confirmButtonText: '确定',
                        type: 'warning'
                        }).then(() => {}).catch(() => {}); //一定别忘了这个
                }else {
                    this.overBoxHide = false;
                    this.titleFlag.edit = true;
                    this.btnState = "edit";
                }
            },
            handleStartUse() {
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                setTimeout(() => {
                    loading.close();
                    this.$alert('启用成功', '提示', {
                        confirmButtonText: '确定',
                        type: 'success',
                        callback: action => {}
                    });
                },2000);
            },
            handleStopUse() {
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                setTimeout(() => {
                    loading.close();
                    this.$alert('停用成功', '提示', {
                        confirmButtonText: '确定',
                        type: 'success',
                        callback: action => {}
                    });
                },2000);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                let ids = [];
                this.multipleSelection.map((item)=> {
                    ids.push(item.id);
                })
                this.selectedIDs = ids;
            },
            handleCurrentChange:function(val) {//val表示当前页
                console.log(val)
            },
            handleSizeChange(val) {//val表示每页展示的条数
                console.log(val)
            },
            handleCloseCover() {
                this.overBoxHide = true;
                this.titleFlag.add = false;
                this.titleFlag.edit = false;
            },
            refreshPage() {
                this.refreshFlag = false;
                setTimeout(() => {
                   this.refreshFlag = true; 
                },0);
            },
            // 获取后台管理的信息
            getBackManageInfo(){

            }
        },
        created(){
            this.getBackManageInfo()
        }
    }
</script>

<style lang="less">
    #adminManageList {
        .el-button {
            margin: 0 auto 10px;
        }
        .showList {
            min-height: 680px;
            .el-table {
                min-height: 640px;
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
                    border-left: 1px solid #EBEEF5;
                    &:first-child {
                        border-right: 0;
                    }
                    .el-button {
                        margin: 0;
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
