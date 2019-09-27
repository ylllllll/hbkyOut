<template>
    <div id="contractMessageBox">
        <div class="showList">
            <el-table
                ref="singleTable"
                :data="tableData"
                width="100%"
                height="485"
                tooltip-effect="dark"
                highlight-current-row
                @current-change="handleCurrentChange"
                style="width: 100%">
                <el-table-column
                    type="index"
                    label="序号"
                    align="center">
                </el-table-column>
                <el-table-column
                    property="projectNo"
                    label="课题编号"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    property="subjectName"
                    label="课题名称"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    property="subjectLeader"
                    label="课题负责人"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    property="leaderContact"
                    label="课题负责人联系方式"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import { service } from '@/js/api'
    export default {
        name: 'contractMessageBox',
        data() {
            return {
                tableData: []
            }
        },
        methods: {
            handleCurrentChange(val) {
                console.log(val);
                this.$emit("receipt",val);
            }
        },
        beforeMount() {
            // 回显数据请求
            this.axios({
                url: service.getContractBackList,
                method: 'post',
            }).then((res) => {
                this.tableData = res.data.data;
                // console.log(res.data.data);
            })
        }

    }
</script>

<style lang="less">
    #contractMessageBox {
        .showList {
            min-height: 0;
            .el-table {
                min-height: 0;
            }
        }
    }
</style>
