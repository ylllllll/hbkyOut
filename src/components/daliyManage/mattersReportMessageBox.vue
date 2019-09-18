<template>
    <div id="mattersReportMessageBox">
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
                    property="subjeceLeader"
                    label="课题负责人"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    property="subjectContact"
                    label="课题联系人"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
                <el-table-column
                    property="commitmentUnit"
                    label="承担单位"
                    :show-overflow-tooltip="true"
                    align="center">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mattersReportMessageBox',
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
                url: 'http://192.168.0.80:8087/environment/daily/queryAllEndContractInfo',
                method: 'post',
            }).then((res) => {
                this.tableData = res.data.data;
                console.log(res);
            })
        }

    }
</script>

<style lang="less">
    #mattersReportMessageBox {
        .showList {
            min-height: 0;
            .el-table {
                min-height: 0;
            }
        }
    }
</style>
