<template>
    <div id="midTermShow">
        <div class="check_box">
            <a @click="handleToggleForm(1)" :class="{active:toggleFlag == 1}">专家评估表</a>
            <a @click="handleToggleForm(2)" :class="{active:toggleFlag == 2}">中期检查表</a>
        </div>
        <form1 ref="form1" v-show="toggleFlag == 1"></form1>
        <form2 ref="form2" v-show="toggleFlag == 2"></form2>
        <div class="file_box">专家意见附件：<a @click="handleDownload">{{ fileData.uploadFileName }}</a></div>
        <div class="btn_group">
            <el-button @click="handleBack">返回</el-button>
        </div>
    </div>
</template>

<script>
    import MidTermShowForm1 from '@/components/daliyManage/midTermShowForm1'
    import MidTermShowForm2 from '@/components/daliyManage/midTermShowForm2'
    export default {
        name: 'midTermShow',
        components: {
            form1: MidTermShowForm1,
            form2: MidTermShowForm2
        },
        data() {
            return {
                toggleFlag: 1,
                paramsData: {
                    id: this.$route.params.id
                },
                subjectSuggestAnnex: '',
                fileData: {}
            }
        },
        methods: {
            handleToggleForm(val) {
                this.toggleFlag = val;
            },
            handleBack() {
                this.$router.go(-1);
            },
            handleDownload() {
                window.location.href = 'http://192.168.0.80:8087/file/queryFileStream?fileUrl=' 
                                    + this.fileData.uploadFileAddress 
                                    + '&fileName=' 
                                    + this.fileData.uploadFileName;
            }
        },
        beforeMount() {
            setTimeout(() => {
                // 附件
                this.axios({
                    url: 'http://192.168.0.80:8087/environment/contract/getSubjectSuggestAnnexInfo',
                    method: 'get',
                    params: {
                        cid: this.paramsData.id
                    }
                }).then((res) => {
                    console.log(res);
                    // this.formData1 = res.data.data;
                    this.fileData = res.data.data;
                })
            },0);
        }
    }
</script>

<style lang="less">
    #midTermShow {
        margin-bottom: 30px;
        background-color: #fff;
        .check_box {
            background-color: #fff;
            a {
                display: inline-block;
                margin: 10px 0 0 10px;
                padding: 5px 30px;
                color: #999;
                border: 1px solid #999;
                cursor: pointer;
            }
            .active {
                border-color: #0abd90;
                font-weight: bold;
                color: #0abd90;
            }
        }
        .btn_group {
            background-color: #fff;
        }
        .file_box{
            width: 50%;
            margin: 20px auto 0;
        }
    }
</style>
