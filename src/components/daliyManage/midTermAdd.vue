<template>
    <div id="midTermAdd">
        <el-form ref="form">
            <h3 class="form_title">
                <el-form-item label="中期检查名称：">
                    <el-input></el-input>
                </el-form-item>
            </h3>
            <div class="table_title">
                <h4>课题列表</h4>
                <el-button @click="handleAdd">添加课题</el-button>
            </div>
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark">
                <el-table-column
                    type="index"
                    label="序号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data1"
                    label="课题名称"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data2"
                    label="课题的目标和主要研究内容"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data3"
                    label="合同开始时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="data4"
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                        <el-button>删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- <table class="form_inner_table">
                <thead>
                    <tr>
                        <td></td>
                        <td>序号</td>
                        <td>指南建议名称</td>
                        <td>填报单位</td>
                        <td>单位类别</td>
                        <td>所属领域</td>
                        <td>填报类别</td>
                        <td>建议立项时间</td>
                        <td style="padding: 0 97px;">建议理由及依据</td>
                        <td style="padding: 0 65px;">主要研究内容和关键技术</td>
                        <td style="padding: 0 75px;">预期目标和成果</td>
                        <td>拟出标准、技术规范、法规名称</td>
                        <td>经费测算（万元）</td>
                        <td>研究期限</td>
                        <td>示范工程规模</td>
                        <td>示范工程点</td>
                        <td>省内从事该领域的主要研究机构</td>
                        <td>填报联系人</td>
                        <td>联系电话（手机）</td>
                        <td style="padding: 0 111px;">备注</td>
                        <td style="padding: 0 95px;">查重结果</td>
                        <td style="padding: 0 95px;">查重备注</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="classify_title">
                        <td>
                            <el-checkbox :indeterminate="classifyData.isIndeterminate1" v-model="classifyData.checkAll1" @change="handleCheckAllChange(1)"></el-checkbox>
                        </td>
                        <td colspan="21">
                            <span>一、综合示范类（{{ classifyData.classify1.length }}项）</span>
                            <el-button class="btn_submit" @click="handleAdd(1)">添加</el-button>
                            <el-button class="btn_delete" @click="handleDelete(1)">删除</el-button>
                        </td>
                    </tr>
                    <tr v-for="(item,index) in classifyData.classify1" class="classify_content">
                        <td>
                            <el-checkbox v-model="classifyData.checkedGroup1" @change="handleCheckedGroupChange(1)" :label="classifyData.classify1[index]"></el-checkbox>
                        </td>
                        <td>{{ index + 1 }}</td>
                        <td>哦啊单价佛氨基酸的佛家是</td>
                        <td>
                            <el-input type="textarea" autosize v-model="testData.name"></el-input>
                        </td>
                        <td>{{ classifyData.classify1[index] }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="classify_title">
                        <td>
                            <el-checkbox :indeterminate="classifyData.isIndeterminate2" v-model="classifyData.checkAll2" @change="handleCheckAllChange(2)"></el-checkbox>
                        </td>
                        <td colspan="21">
                            <span>二、重大技术公关类（{{ classifyData.classify2.length }}项）</span>
                            <el-button class="btn_submit" @click="handleAdd(2)">添加</el-button>
                            <el-button class="btn_delete" @click="handleDelete(2)">删除</el-button>
                        </td>
                    </tr>
                    <tr v-for="(item,index) in classifyData.classify2" class="classify_content">
                        <td>
                            <el-checkbox v-model="classifyData.checkedGroup2" @change="handleCheckedGroupChange(2)" :label="classifyData.classify2[index]"></el-checkbox>
                        </td>
                        <td>{{ index + 1 }}</td>
                        <td></td>
                        <td></td>
                        <td>{{ classifyData.classify2[index] }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="classify_title">
                        <td>
                            <el-checkbox :indeterminate="classifyData.isIndeterminate3" v-model="classifyData.checkAll3" @change="handleCheckAllChange(3)"></el-checkbox>
                        </td>
                        <td colspan="21">
                            <span>三、技术研发类（{{ classifyData.classify3.length }}项目）</span>
                            <el-button class="btn_submit" @click="handleAdd(3)">添加</el-button>
                            <el-button class="btn_delete" @click="handleDelete(3)">删除</el-button>
                        </td>
                    </tr>
                    <tr v-for="(item,index) in classifyData.classify3" class="classify_content">
                        <td>
                            <el-checkbox v-model="classifyData.checkedGroup3" @change="handleCheckedGroupChange(3)" :label="classifyData.classify3[index]"></el-checkbox>
                        </td>
                        <td>{{ index + 1 }}</td>
                        <td></td>
                        <td></td>
                        <td>{{ classifyData.classify3[index] }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table> -->
        </el-form>
        <div class="btn_group">
            <el-button class="btn_submit" @click="handleSubmit">提交</el-button>
            <el-button class="btn_back" @click="handleBack">返回</el-button>
        </div>
        <div class="cover_box" :class="{over_box_active:overBoxHide}">
            <div class="message_box">
                <span class="btn_close" @click="handleCloseCover"></span>
                <header class="message_box_header">
                    <h2 class="title">指南添加</h2>
                </header>
                <section class="message_box_content" v-if="refreshFlag">
                    <messageBox @receipt="receiptChildInfo"></messageBox>
                </section>
                <div class="btn_group">
                    <el-button @click="handleConfirmCover">确定</el-button>
                    <el-button @click="handleCancelCover">取消</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MidTermMessageBox from '@/components/daliyManage/midTermMessageBox'
    export default {
        name: 'midTermAdd',
        components: {
            messageBox: MidTermMessageBox
        },
        data() {
            return {
                test: 0,
                testData: {
                    name: '课题申报指南建议汇总表',
                    table: {
                        item1: {
                            
                        },
                        item2: {

                        },
                        item3: {

                        }
                    }
                },
                paramsData: {
                    id: this.$route.params.id
                },
                classifyData: {
                    classify1: [],
                    classify2: [],
                    classify3: [],
                    classifyIndex: 0,
                    checkAll1: false,
                    checkAll2: false,
                    checkAll3: false,
                    isIndeterminate1: false,
                    isIndeterminate2: false,
                    isIndeterminate3: false,
                    checkedGroup1: [],
                    checkedGroup2: [],
                    checkedGroup3: []
                },
                overBoxHide: true,
                refreshFlag: true,
                selectedIDs: [],
                tableData: [{
                    id: '1001',
                    data1: '交办人',
                    data2: '处理人',
                    data3: '审核',
                    data4: '2019-08-14',
                    data5: '状态',
                    data6: '内容',
                    data7: '意见',
                    data8: '2019-08-14'
                }]
            }
        },
        methods: {
            handleSubmit() {
                const loading = this.$loading({
                    lock: true,
                    text: '请稍后...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255,255,255,0.7)'
                });
                setTimeout(() => {
                    loading.close();
                    this.$alert('提交成功', '提示', {
                        confirmButtonText: '确定',
                        type: 'success',
                        callback: action => {
                            this.$router.go(-1);
                        }
                    });
                },2000);
            },
            handleBack() {
                this.$router.go(-1);
            },
            handleAdd(val) {
                this.overBoxHide = false;
                this.classifyData.classifyIndex = val;
            },
            handleDelete(val) {
                let isIndeterminate = ["isIndeterminate" + val],
                    checkedGroup = ["checkedGroup" + val],
                    checkAll = ["checkAll" + val],
                    classify = ["classify" + val];
                // 要删除的
                let deleteData = this.classifyData[checkedGroup];
                if(deleteData.length == 0) {
                    this.$alert('请选择一条数据', '提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        callback: action => {}
                    });
                    return false;
                }
                this.$confirm('确定要删除吗？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
                    // 现有的
                    let allData = this.classifyData[classify];
                    let indexs = [];
                    for(let i in allData) {
                        for(let j in deleteData) {
                            if(allData[i] == deleteData[j]) {
                                indexs.push(i)
                            }
                        }
                    }
                    // 倒序删除
                    indexs.reverse();
                    for(let i in indexs) {
                        this.classifyData[classify].splice(indexs[i],1);
                    }
                    this.classifyData[checkedGroup] = [];
                    this.classifyData[isIndeterminate] = false;
                    this.classifyData[checkAll] = false;
                }).catch(() => {});
            },
            receiptChildInfo(val) {
                this.selectedIDs = val;
            },
            handleCheckAllChange(val) {
                let isIndeterminate = ["isIndeterminate" + val],
                    checkedGroup = ["checkedGroup" + val],
                    checkAll = ["checkAll" + val],
                    classify = ["classify" + val];
                if(this.classifyData[checkAll]) {
                    this.classifyData[checkedGroup] = this.classifyData[classify];
                }else {
                    this.classifyData[checkedGroup] = [];
                }
                this.classifyData[isIndeterminate] = false;
            },
            handleCheckedGroupChange(val) {
                let isIndeterminate = ["isIndeterminate" + val],
                    checkedGroup = ["checkedGroup" + val],
                    checkAll = ["checkAll" + val],
                    classify = ["classify" + val],
                    checkedGroupLength = this.classifyData[checkedGroup].length,
                    classifyLength = this.classifyData[classify].length;
                if(checkedGroupLength != classifyLength) {
                    this.classifyData[isIndeterminate] = true;
                }else {
                    this.classifyData[isIndeterminate] = false;
                    this.classifyData[checkAll] = true;
                }
                if(checkedGroupLength == 0){
                    this.classifyData[isIndeterminate] = false;
                    this.classifyData[checkAll] = false;
                }
            },
            handleCloseCover() {
                this.overBoxHide = true;
            },
            handleConfirmCover() {
                let currentClassify = this.classifyData["classify" + this.classifyData.classifyIndex];
                if(this.selectedIDs.length == 0) {
                    this.$alert('请选择一条数据', '提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        callback: action => {}
                    });
                }else {
                    // 判断是否重复
                    for(let i in currentClassify) {
                        for(let j in this.selectedIDs) {
                            if(currentClassify[i] == this.selectedIDs[j]) {
                                this.$alert('请勿重复选择', '提示', {
                                    confirmButtonText: '确定',
                                    type: 'warning',
                                    callback: action => {}
                                });
                                return false;
                            }
                        }
                    }
                    // 正常操作
                    this.overBoxHide = true;
                    currentClassify.push(...this.selectedIDs);
                    this.selectedIDs = [];
                    // 刷新弹窗
                    this.refreshFlag = false;
                    setTimeout(() => {
						this.refreshFlag = true;
					},0);
                }
            },
            handleCancelCover() {
                this.overBoxHide = true;
                // 刷新弹窗
                this.refreshFlag = false;
                setTimeout(() => {
                    this.refreshFlag = true;
                },0);
            },
        }
    }
</script>

<style lang="less">
    #midTermAdd {
        min-height: 100%;
        background-color: #fff;
        overflow-y: hidden;
        padding: 0 20px;
        .el-form {
            height: 100%;
            overflow-x: auto;
            .form_title {
                .el-form-item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .el-input {
                        width: 320px;
                    }
                }
            }
            .table_title {
                width: 1100px;
                margin: auto;
                h4 {
                    display: inline-block;
                    font-size: 20px;
                    font-weight: normal;
                    margin: 0 20px 0 10px;
                }
            }
            .el-table {
                width: 1100px;
                margin: auto;
                border-right: 1px solid #e0e0e0;
                border-collapse: collapse;
                tr {
                    height: 50px;
                    th {
                        background-color: #e5f3ff;
                    }
                }
                .el-table__header-wrapper {
                    table {
                        border-collapse: collapse;
                        th {
                            border: 1px solid #e0e0e0;
                            border-bottom: none;
                        }
                    }
                }
                .el-table__body-wrapper {
                    table {
                        border-collapse: collapse;
                        td {
                            border: 1px solid #e0e0e0;
                        }
                    }
                }
            }
            .form_inner_table {
                tbody {
                    .classify_title {
                        >:first-child {
                            text-align: center;
                        }
                        td {
                            >span {
                                display: inline-block;
                                width: 215px;
                            }
                        }
                    }
                }
            }
        }
        .btn_group {
            margin: 20px 0;
        }
        
    }
</style>
