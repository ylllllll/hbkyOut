<template>
    <div id="resultsAddShow">
        <div class="addShow">
            <el-form :model="addForm" :ref="addForm">
                <div class="tableBox">
                    <el-button type="primary" @click="handleAddRow(1)">添加</el-button>
                    <table class="table1" cellspacing=0 cellpadding=0>
                        <thead>
                            <tr>
                                <th colspan="4">课题获得成果一览表及证明材料</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>序号</td>
                                <td>名称</td>
                                <td>专利申请时间</td>
                                <td>专利申请号</td>
                            </tr>
                            <tr v-for="(item,i) in addForm.tableNum">
                                <td>
                                    <el-input v-model="addForm.tableNum[i].index"></el-input>
                                </td>
                                <td>
                                    <el-input v-model="addForm.tableNum[i].name"></el-input>
                                </td>
                                <td>
                                    <el-date-picker
                                        v-model="addForm.tableNum[i].date"
                                        align="right"
                                        type="date"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </td>
                                <td>
                                    <el-input v-model="addForm.tableNum[i].number"></el-input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="info">
                    <p>注：</p>
                    <p>1.请按表格顺序附专利申请受理通知书、专利证书等相关证明材料复印件，计算机软件需提供软件著作权登记证书；</p>
                    <p>2.专利申请时间应在课题立项时间之后，课题立项前申请的不得收入验收材料合订本。</p>
                </div>
                <div class="tableBox">
                    <el-button type="primary" @click="handleAddRow(2)">添加</el-button>
                    <table class="table2" cellspacing=0 cellpadding=0>
                        <thead>
                            <tr>
                                <th colspan="5">课题获得成果一览表及证明材料</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>序号</td>
                                <td>刊物</td>
                                <td>发表时间</td>
                                <td>作者</td>
                                <td>论文级别（SCI/EI/核心等）</td>
                            </tr>
                            <tr v-for="(item,i) in addForm.tableNum2"> 
                                <td>
                                    <el-input v-model="addForm.tableNum2[i].index"></el-input>
                                </td>
                                <td>
                                    <el-input v-model="addForm.tableNum2[i].publication"></el-input>
                                </td>
                                <td>
                                    <el-date-picker
                                        v-model="addForm.tableNum2[i].date"
                                        align="right"
                                        type="date"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </td>
                                <td>
                                    <el-input v-model="addForm.tableNum2[i].author"></el-input>
                                </td>
                                <td>
                                    <el-input v-model="addForm.tableNum2[i].sci"></el-input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="info">
                    <p>注：</p>
                    <p>1.请按表格顺序附论文正文、用稿证明或受理函等证明论文论著已发表；</p>
                    <p>2.发表的论文、论著等成果均应标注“江苏省环保科研课题”及课题编号，未标注的不得收入验收材料合订本。</p>
                </div>
                <ul>
                    <li>其它材料</li>
                    <li>项目新装备、新工艺、新产品、新材料等如合同中有要求提供，需提供实物图片、相关数据资料、有资质机构出具的有关产品测试报告、检测报告以及用户报告等（建议列表汇总，并附相关证明材料）；技术标准等其他形式及其相关证明材料。
                        附：课题成果用户使用报告</li>
                </ul>
                <table class="table3" cellspacing=0 cellpadding=0>
                    <thead>
                        <tr>
                            <th colspan="4">项目成果用户使用报告</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题编号：</td>
                            <td>
                                <el-input v-model="addForm.num"></el-input>
                            </td>
                            <td>课题名称：</td>
                            <td><el-input v-model="addForm.name"></el-input></td>
                        </tr>
                        <tr>
                            <td>应用单位名称：</td>
                            <td>
                                <el-input v-model="addForm.unitName"></el-input>
                            </td>
                            <td>通讯地址（邮编）：</td>
                            <td><el-input v-model="addForm.code"></el-input></td>
                        </tr>
                        <tr>
                            <td>成果应用开始时间：</td>
                            <td>
                                <el-date-picker
                                    v-model="addForm.startDate"
                                    align="right"
                                    type="date"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </td>
                            <td>成果应用结束时间：</td>
                            <td>
                                <el-date-picker
                                    v-model="addForm.endDate"
                                    align="right"
                                    type="date"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </td>
                        </tr>
                        <tr>
                            <td>应用情况、社会经济效益（含计算过程）：</td>
                            <td colspan="3">
                                <el-input type="textarea" v-model="addForm.process"></el-input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-form>
            <div class="button">
                <el-button type="primary" @click="handleConfirm">确认</el-button>
                <el-button type="primary" @click="handleSave">保存</el-button>
                <el-button type="primary" @click="handleBack">返回</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'resultsAddShow',
    data(){
        return{
            addForm:{
                tableNum:[{
                    index:'',
                    name:'',
                    date:'',
                    number:''
                },{
                    index:'',
                    name:'',
                    date:'',
                    number:''
                }],
                tableNum2:[{
                    index:'',
                    publication:'',
                    date:'',
                    author:'',
                    sci:''
                },{
                    index:'',
                    publication:'',
                    date:'',
                    author:'',
                    sci:''
                }],
                num:'',
                name:'',
                unitName:'',
                code:'',
                startDate:'',
                endDate:'',
                process:''
            },
        }
    },
    methods:{
        handleAddRow(obj){
            if(obj == 1){
                let $obj = {
                    index:'',
                    name:'',
                    date1:'',
                    number:''
                }
                this.addForm.tableNum.push($obj)
            }else{
                let $obj = {
                    index:'',
                    publication:'',
                    date:'',
                    author:'',
                    sci:''
                }
                this.addForm.tableNum2.push($obj)
            }
        },
        handleConfirm(){

        },
        handleSave(){

        },
        handleBack(){

        }
    }
}
</script>
<style lang="less">
#resultsAddShow{
    .addShow{
        width: 100%;
        min-height: 800px;
        background-color: #fff;
        padding-top: 14px;
        .el-form{
            width: 59%;
            margin: auto;
            min-width: 900px;
            .tableBox{
                position: relative;
                .el-button{
                    position: absolute;
                    top: 50px;
                    right: -82px;
                }
            }
            table{
                tr{
                    &:last-child{
                        td{
                            border-bottom:  1px solid #e0e0e0;
                        }
                    }
                    td{
                        border-top: 1px solid #e0e0e0;
                        border-left: 1px solid #e0e0e0;
                        &:last-child{
                            border-right:  1px solid #e0e0e0;
                        }
                        .el-input__inner{
                            height: 50px;
                            line-height: 50px;
                            border: 0px;
                        }
                        .el-textarea__inner{
                            min-height: 190px !important;
                            border: 0px;
                            padding: 0 10px;
                        }
                    }
                }
            }
            table.table1,table.table2{
                width: 100%;
                thead{
                    tr{
                        line-height: 1;
                        th{
                            width: 100%;
                            text-align: center;
                            line-height: 60px;
                            font-size: 20px;
                        }
                    } 
                }
                tbody{
                    tr{
                        font-size: 0;
                        td{
                            height: 50px;
                            &:first-child{
                                width: 10%;
                            }
                        }
                        &:first-child{
                            background-color: #e5f3ff;
                            td{
                                text-align: center;
                                height: 48px;
                               
                            }
                        }
                    }
                }
            }
            div.info{
                padding: 6.5px 0 1.5px;
                p{
                    font-size: 14px;
                    line-height: 21px;
                }
            }
            ul{
                padding: 4px 0;
                li{
                    font-size: 14px;
                    line-height: 21px;
                    text-decoration: none;
                    list-style: none;
                    &:first-child{
                        font-size: 20px;
                        line-height: 66px;
                        text-align: center;
                    }
                }
            }
            table.table3{
                width: 100%;
                thead{
                    tr{
                        line-height: 1;
                        th{
                            font-size: 20px;
                            line-height: 112px;
                        }
                    }
                }
                tbody{
                    tr{
                        td{
                            &:first-child{
                                width: 31.8%;
                                text-align: right;
                                background-color: #e5f3ff;
                            }
                            &:nth-child(3){
                                width: 22.7%;
                                text-align: right;
                                background-color: #e5f3ff;
                            }
                        }
                        &:last-child{
                            td:first-child{
                                vertical-align: text-top;
                                padding-top: 10px;
                            }
                        }
                    }
                }
            }
            .el-date-editor.el-input{
                width: 100%;
                .el-input__inner{
                    padding-left: 30px;
                }
                .el-input__icon{
                    line-height: 50px;
                }
            }
        }
        .button{
            text-align: center;
            .el-button{
                margin: 37px 0 27px;
            }
            
        }
    }
}
</style>
