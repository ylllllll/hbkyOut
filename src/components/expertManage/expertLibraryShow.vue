<template>
    <div id="expertLibraryShow">
        <div class="showForm">
            <el-form  ref="showForm" :model="showForm">
                <table class="form_table">
                    <thead>
                        <tr>
                            <th colspan="4">专家库详情页</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>姓名：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.name"></el-input>
                            </td>
                            <td>性别：</td>
                            <td>
                                <el-input v-model="showForm.gender"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>出生日期：</td>
                            <td>
                                <el-input v-model="showForm.birthday">  </el-input>
                            </td>
                            <td>从事专业：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.major"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>工作单位：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.unit"></el-input>
                            </td>
                            <td>学历：</td>
                            <td>
                                <el-input v-model="showForm.education">

                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>通讯地址：</td>
                            <td  colspan="3">
                                <el-input 
                                 v-model="showForm.address"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>邮政编码：</td>
                            <td>
                                <el-input 
                                 v-model="showForm.code"></el-input>
                            </td>
                            <td>现任职务：</td>
                            <td>
                                <el-input
                                 v-model="showForm.post"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>单位电话：</td>
                            <td>
                                <el-input
                                 v-model="showForm.work_telephone"></el-input>
                            </td>
                            <td>技术职称：</td>
                            <td>
                                <el-input
                                 v-model="showForm.technical_title"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>电子邮箱：</td>
                            <td>
                                <el-input
                                 v-model="showForm.email"></el-input>
                            </td>
                            <td>所学专业：</td>
                            <td>
                                <el-input
                                 v-model="showForm.study_major"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>手机：</td>
                            <td>
                                <el-input
                                 v-model="showForm.phone"></el-input>
                            </td>
                            <td>工作性质：</td>
                            <td>
                                <el-input
                                 v-model="showForm.nature_work"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>专业领域：</td>
                            <td colspan="3">
                                <el-input
                                 v-model="showForm.field"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>专家信息登记表附件：</td>
                            <td colspan="3">
                                <el-input v-model="showForm.fujian"></el-input>
                            </td>
                        </tr>

                        <!-- <tr>
                            <td>附件：</td>
                            <td colspan="3">
                                <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    multiple
                                    :limit="3"
                                    :on-exceed="handleExceed"
                                    :file-list="fileList"
                                    accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                            </td>
                        </tr> -->
                    </tbody>
                </table>
            </el-form>
            <el-button @click="handleConfirm">确认</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'expertLibraryShow',
    data(){
        return{
            showForm:{
                name:'',
                major:'',
                sexOptions:[{
                    id:'0',
                    value: '0',
                    label: '女'
                },{
                    id:'1',
                    value: '1',
                    label: '男'
                }],
                gender: '',
                birthday:'',
                unit:'',
                eduOptions:[{
                    id:'0',
                    value: '0',
                    label: '大专'
                },{
                    id:'1',
                    value: '1',
                    label: '本科'
                }],
                education:'',
                address:'',
                code:'',
                post:'',
                work_telephone:'',
                phone:'',
                technical_title:'',
                email:'',
                study_major:'',
                nature_work:'',
                field:'',
                fujian:''
            },
            fileList: []
        }
    },
    methods:{
        handleRemove(file, fileList){
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        beforeUpload(file){
            return true;
        },
        handleConfirm(){
            for(let i in this.showForm) {
                if(typeof(this.showForm[i]) == "string") {
                    if(this.showForm[i].match(/^[ ]*$/) || this.showForm[i] == 'null'){
                        this.$alert('请将表格填写完整', '提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
                        return false;
                    }
                }
                if(typeof(this.showForm[i]) == "object") {
                    if(this.showForm[i].length == 0) {
                        this.$alert('请至少选择一类', '提示', {
                            confirmButtonText: '确定',
                            callback: action => {}
                        });
                        return false;
                    }
                }
            }
            console.log("添加成功")
        }
    }
}
</script>
<style lang="less">
#expertAddList{
    .showForm{
        min-height: 800px;
        @media  screen and ( max-width: 1500px ) {
            min-height: 650px;
        }
        .el-select{
            width: 100%;
        }
        table.form_table{
            width: 59.4%;
            margin: auto;
            border-collapse: collapse;
            @media  screen and ( max-width: 1600px ) {
                width: 72.4%;
            }
        }
        .el-input__icon{
            line-height: 50px;
        }
        .upload-demo{
            overflow: hidden;
            ul.el-upload-list{
                float: left;
                padding-left: 10px;
                a.el-upload-list__item-name{
                    line-height: 32px;
                    padding-right: 40px;
                    text-align: left;
                }
                label.el-upload-list__item-status-label{
                    line-height: 32px;
                }
            }
        }
    }
}
</style>

