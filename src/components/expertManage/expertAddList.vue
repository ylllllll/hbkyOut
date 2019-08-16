<template>
    <div id="expertAddList">
        <div class="addForm">
            <el-form  ref="addForm" :model="addForm">
                <table class="form_table">
                    <thead>
                        <tr>
                            <th colspan="4">专家新增</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>用户名：</td>
                            <td>
                                <el-input 
                                 v-model="addForm.username">
                                </el-input>
                            </td>
                            <td>密码：</td>
                            <td>
                                <el-input
                                 v-model="addForm.password"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>姓名：</td>
                            <td>
                                <el-input 
                                 v-model="addForm.name"></el-input>
                            </td>
                            <td>确认密码：</td>
                            <td>
                                <el-input
                                 v-model="addForm.confirmPassword"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>性别：</td>
                            <td>
                                <el-select v-model="addForm.gender" placeholder="请选择">
                                    <el-option
                                    v-for="item in addForm.sexOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </td>
                            <td>从事专业：</td>
                            <td>
                                <el-input 
                                 v-model="addForm.major"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>出生日期：</td>
                            <td>
                                <el-date-picker
                                 v-model="addForm.birthday"
                                 type="date"
                                 value-format="yyyy-MM-dd"
                                 placeholder="选择日期">
                                </el-date-picker>
                            </td>
                            <td>工作单位：</td>
                            <td>
                                <el-input 
                                 v-model="addForm.unit"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>学历：</td>
                            <td>
                                <el-select v-model="addForm.education" placeholder="请选择">
                                    <el-option
                                    v-for="item in addForm.eduOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </td>
                            <td>通讯地址：</td>
                            <td>
                                <el-input 
                                 v-model="addForm.address"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>现任职务：</td>
                            <td>
                                <el-input
                                 v-model="addForm.post"></el-input>
                            </td>
                            <td>单位电话：</td>
                            <td>
                                <el-input
                                 v-model="addForm.work_telephone"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>技术职称：</td>
                            <td>
                                <el-input
                                 v-model="addForm.technical_title"></el-input>
                            </td>
                            <td>电子邮箱：</td>
                            <td>
                                <el-input
                                 v-model="addForm.email"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>所学专业：</td>
                            <td>
                                <el-input
                                 v-model="addForm.study_major"></el-input>
                            </td>
                            <td>手机：</td>
                            <td>
                                <el-input
                                 v-model="addForm.phone"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>工作性质：</td>
                            <td>
                                <el-input
                                 v-model="addForm.nature_work"></el-input>
                            </td>
                            <td>专业领域：</td>
                            <td>
                                <el-input
                                 v-model="addForm.field"></el-input>
                            </td>
                        </tr>
                        <tr>
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
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <el-button @click="handleConfirm">确认</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'expertAddList',
    data(){
        return{
            addForm:{
                username:'',
                password:'',
                name:'',
                confirmPassword:'',
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
                post:'',
                work_telephone:'',
                phone:'',
                technical_title:'',
                email:'',
                study_major:'',
                nature_work:'',
                field:''
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
            for(let i in this.addForm) {
                if(typeof(this.addForm[i]) == "string") {
                    if(this.addForm[i].match(/^[ ]*$/) || this.addForm[i] == 'null'){
                        this.$alert('请将表格填写完整', '提示', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {}
                        });
                        return false;
                    }
                }
                if(typeof(this.addForm[i]) == "object") {
                    if(this.addForm[i].length == 0) {
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
    .addForm{
        position: relative;
        min-height: 800px;
        background-color: #fff;
        text-align: center;
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
            thead{
                th{
                    font-size: 18px;
                    font-weight: normal;
                    height: 70px;
                    line-height: 70px;
                }
            }
            tbody{
                tr{
                    border-top: 1px solid #e0e0e0;
                    &:last-child{
                        border-bottom: 1px solid #e0e0e0;
                    }
                    td{
                        border-right: 1px solid #e0e0e0;
                        &:first-child{
                            width: 19.8%;
                            text-align: right;
                            border-left: 1px solid #e0e0e0;
                            background-color: #e5f3ff;
                        }
                        &:nth-child(3){
                            width: 19.7%;
                            text-align: right;
                            background-color: #e5f3ff;
                        }
                    }
                }
            }
        }
        .el-input__inner{
            border: 0px;
            height: 50px;
            line-height: 50px;
        }
        input:disabled,textarea:disabled{
            color: #000;
            background-color: #fff;
        }
        textarea{
            border: 0px;
        }
        .el-date-editor{
            width: 100%;
            .el-input__inner{
                padding-left:30px;
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

