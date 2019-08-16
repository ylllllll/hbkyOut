<template>
    <div id="resultsLibraryShow">
        <div class="showForm">
            <el-form :ref="showForm" :model="showForm">
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">成果库详情页</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题名称：</td>
                            <td>
                                <el-input v-model="showForm.topicName"></el-input>
                            </td>
                            <td>课题编号：</td>
                            <td>
                                <el-input v-model="showForm.topicNumber"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>应用单位名称：</td>
                            <td>
                                <el-input v-model="showForm.applicationUnitName"></el-input>
                            </td>
                            <td>应用单位通讯地址（邮编）：</td>
                            <td>
                                <el-input v-model="showForm.postalAddress"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>专利一览表：</td>
                            <td>
                                <el-input v-model="showForm.outcomeInformationPatentList"></el-input>
                            </td>
                            <td>论文、专著一览表：</td>
                            <td>
                                <el-input v-model="showForm.outcomeInformationPaperList"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>成果应用开始时间：</td>
                            <td>
                                <el-input v-model="showForm.achievementStartTime"></el-input>
                            </td>
                            <td>成果应用结束时间：</td>
                            <td>
                                <el-input v-model="showForm.achievementEndTime"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>应用情况、社会经济效益：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.economicPerformance"></el-input>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>成果信息附件：</td>
                            <td colspan="3"><el-input v-model="showForm.achievementUrl"></el-input></td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <el-button type="primary" @click="handleBack">返回</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name:"resultsLibraryShow",
    data(){
        return{
            showForm:{
                topicName:'',
                topicNumber:'',
                applicationUnitName:'',
                postalAddress:'',
                achievementStartTime:'',
                achievementEndTime:'',
                economicPerformance:'',
                achievementUrl:'',
                outcomeInformationPaperList:'',
                outcomeInformationPatentList:''

            }
        }
    },
    methods:{
        handleBack(){
            this.$router.back(-1);
        }
    }
}
</script>
<style lang="less">
#resultsLibraryShow{
}
</style>
