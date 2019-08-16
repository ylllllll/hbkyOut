<template>
    <div id="resultsAddList">
        <!-- 搜索 -->
        <div class="queryForm">
            <el-form ref="queryForm" :model="queryForm" >
                <el-form-item label="课题名称：" >
                    <el-input v-model="queryForm.name"></el-input>
                </el-form-item>
                <el-form-item label="课题编号：">
                    <el-input v-model="queryForm.num"></el-input>
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
                label="操作"
                align="center"
                width="120">
                    <template slot-scope="scope">
                        <el-button
                        @click="handleAdd(scope.$index, scope.row)"
                        >新增</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="课题名称"
                :show-overflow-tooltip="true"
                align="center">
                     <template slot-scope="scope">
                        <router-link :to="{
                            name:'ResultsLibraryShow',
                            params:{
                                name:scope.row.id
                            }
                            }"> 
                            {{scope.row.name}}
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column
                prop="num"
                label="课题编号"
                align="center">
                </el-table-column>
                <el-table-column
                prop="startDate"
                label="成果应用开始时间"
                align="center">
                </el-table-column>
                <el-table-column
                prop="endDate"
                label="成果应用结束时间"
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
    </div>
</template>
<script>
export default {
    name:'resultsAddList',
    data(){
        return{
            queryForm:{
                name:'',
                num:'222'
            },
            tableData:[{
                id:'0101',
                name: '名称1名称1名称1名称1名称1名称1名称1名称1',
                num: '111',
                startDate:'20190705',
                endDate: '20190805'
            },{
                id:'0102',
                name: '名称2',
                num: '222',
                startDate:'20190705',
                endDate: '20190805'
            }],
            multipleSelection: [],
            currentPage:4,
            fenye:{
                total:400, //共有数据多少条
                pageNum:1,
                pageSize:100, //每页显示的条数
                pageSizes:[100,30,40,50] //选择每页显示多少条
            },
        }
    },
    methods:{
        handleSelectionChange(val) {
            this.multipleSelection = val;
            let ids = []
            this.multipleSelection.map((item)=> {
                ids.push(item.id)
            })
            this.selectedIDs = ids
            console.log('多选',this.selectedIDs)
        },
        handleCurrentChange:function(val){//val表示当前页
            console.log(val)
        },
        handleSizeChange(val){//val表示每页展示的条数
            console.log(val)
        },
        handleAdd(index, row) {
            this.$router.push({
                name: 'ResultsAddShow',
                params: {
                    ids: '22',
                }
            })
        }
    },
    mounted () {
        console.log(111)
        this.axios({
            method:"POST",
            url:'http://192.168.0.37/achievement/addAchievementQuery?page=1&total=11',
            headers:{
				'Content-Type':'application/x-www-form-urlencoded'
            },
            credentials: true
        })
        .then(function(res){
            console.log(res)
            this.loading = true
        })
        .catch(function(err){
          console.log(err);
        });
    }
}
</script>
<style lang="less">
#resultsAddList{
    .showList{
        margin-top: 40px;
    }
    .el-table{
        min-height: 630px;
        padding-bottom: 10px;
        .el-button{
            margin: 0 auto;
            color: #fff;
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
