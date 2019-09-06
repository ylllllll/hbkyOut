<template>
    <div id="subjectApplyShow">
         <div class="showForm">
            <el-form ref="showForm" :model="showForm">
                <table class="form_table">
                    <thead>
                        <tr><th colspan="4">验收申请详情页</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>课题名称：</td>
                            <td>
                                <el-input disabled v-model="showForm.topicName" ></el-input>
                            </td>
                            <td>课题编号：</td>
                            <td>
                                <el-input disabled v-model="showForm.topicNumber"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>承担单位：</td>
                            <td colspan="3">
                                <el-input disabled v-model="showForm.subjectUndertakingUnit" ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>单位性质：</td>
                            <td colspan="3">
                                <el-radio-group v-model="showForm.unitNature" >
                                    <span v-for="(item,index) in unitNatureOptions" :key = index>
                                        <el-radio disabled :label="item.id">{{item.content}}</el-radio>
                                    </span>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>课题责任人：</td>
                            <td>
                                <el-input disabled v-model="showForm.projectLeader" ></el-input>
                            </td>
                            <td>课题责任人联系电话：</td>
                            <td>
                                <el-input disabled v-model="showForm.projectLeaderPhone" ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>课题责任人电子邮箱：</td>
                            <td>
                                <el-input disabled v-model="showForm.projectLeaderMail" ></el-input>
                            </td>
                            <td>课题责任人通讯地址：</td>
                            <td>
                                <el-input disabled v-model="showForm.postalAddress" ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>合同开始时间：</td>
                            <td>
                                <el-input disabled v-model="showForm.agreementStartTime" ></el-input>
                            </td>
                            <td>合同结束时间：</td>
                            <td>
                                <el-input disabled v-model="showForm.agreementEndTime" ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>验收申请时间：</td>
                            <td>
                                <el-date-picker
                                    v-model="showForm.applicationAcceptanceTime"
                                    type="date"
                                    disabled
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </td>
                            <td>申请验收形式：</td>
                            <td>
                                <el-radio-group v-model="showForm.applicationAcceptanceMode" >
                                    <span v-for="(item,index) in applicationAcceptanceModeOptions" :key = index>
                                        <el-radio disabled :label="item.id">{{item.content}}</el-radio>
                                    </span>
                                </el-radio-group>
                            </td>
                        </tr>
                        <tr>
                            <td>申请验收地点：</td>
                            <td colspan="3">
                                <el-input disabled v-model="showForm.applicationAcceptancePlace" ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>验收联系人：</td>
                            <td>
                                <el-input disabled v-model="showForm.acceptanceContact" ></el-input>
                            </td>
                            <td>验收联系人联系电话：</td>
                            <td>
                                <el-input disabled v-model="showForm.acceptanceContactPhone" ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>主要研究内容完成情况：</td>
                            <td colspan="3">
                                <el-input 
                                  disabled
                                  type="textarea"
                                  v-model="showForm.mainContentSituation"
                                  >
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>提交成果情况（合同规定提交成果完成情况及其它取得成果）：</td>
                            <td colspan="3">
                                <el-input 
                                 disabled
                                 type="textarea"
                                 v-model="showForm.submissionAchievementsSituation"
                                 >
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>验收提交资料清单：</td>
                            <td colspan="3"> 
                                <el-checkbox-group v-model="showForm.submitInventory">
                                    <span v-for="(item,index) in submitInventoryOptions" :key="index">
                                        <el-checkbox disabled :label="item.id">{{item.content}}</el-checkbox>
                                    </span>
                                </el-checkbox-group>
                            </td>
                        </tr>
                        <tr>
                            <td>课题承担单位意见：</td>
                            <td colspan="3">
                                <el-input 
                                 type="textarea"
                                 disabled
                                 v-model="showForm.subjectUndertakingUnitOpinion"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>所在地环保部门意见：</td>
                            <td colspan="3">
                                <el-input 
                                 disabled
                                 type="textarea"
                                 v-model="showForm.environmentalDepartmentsOpinion"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>省生态环境评估中心初审意见：</td>
                            <td colspan="3">
                                <el-input 
                                 disabled
                                 type="textarea"
                                 v-model="showForm.provinceAssessmentCenterOpinion"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>省环保厅主管部门意见：</td>
                            <td colspan="3">
                                <el-input 
                                 disabled
                                 type="textarea"
                                 v-model="showForm.competentDepartmentOinion"
                                 ></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>提交清单文件：</td>
                            <td colspan="3" style="height:50px;padding-left:10px;">
                                <a  @click="uploadFileInventory(showForm.submitInventoryUrl,showForm.submitInventoryUrlName)"  :download="showForm.submitInventoryUrlName">{{showForm.submitInventoryUrlName}}</a>
                            </td>
                        </tr>
                        <tr>
                            <td>验收申请表附件：</td>
                            <td colspan="3" style="height:50px;padding-left:10px;">
                                <a  @click="uploadFileInventory(showForm.applicationAcceptanceUrl,showForm.applicationAcceptanceUrlName)"  :download="showForm.applicationAcceptanceUrlName">{{showForm.applicationAcceptanceUrlName}}</a>
                            </td>
                        </tr>
                        <tr>
                            <td>成果附件：</td>
                            <td colspan="3" style="height:50px;padding-left:10px;">
                                <a  @click="uploadFileInventory(showForm.achievementsUrl,showForm.achievementsName)"  :download="showForm.achievementsName">{{showForm.achievementsName}}</a>
                            </td>
                        </tr>
                    </tbody>
                 </table>
                 <!-- 上传 专项审计报告（事务所出具报告）、初审报告 step2 -->
                <div class="step2" v-if="showForm.acceptancePhaseId>=4">
                    <p>专项审计报告（事务所出具报告）、初审报告</p>
                    <table class="form_table">
                        <tbody>
                            <tr>
                                <td>专项审计报告（事务所出具报告）：</td>
                                <td colspan="3" style="height:50px;padding-left:10px;">
                                    <a  @click="uploadFileInventory(showForm.auditReportUrl,showForm.auditReportUrlName)"  :download="showForm.auditReportUrlName">{{showForm.auditReportUrlName}}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>初审报告：</td>
                                <td colspan="3" style="height:50px;padding-left:10px;">
                                    <a  @click="uploadFileInventory(showForm.firstInspectionReportUrl,showForm.firstInspectionReportUrlName)"  :download="showForm.firstInspectionReportUrlName">{{showForm.firstInspectionReportUrlName}}</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- 需要网上传专家评审表 step3 -->
                <div class="step3" v-if="showForm.acceptancePhaseId>=5">
                    <p>上传家评审</p>
                    <table class="form_table">
                        <thead>
                            <tr><th colspan="4">省环保科研课题验收专家组意见</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>项目名称：</td>
                                <td colspan="3"><el-input disabled v-model="showForm.extranetExpertGroupComment.topicName"></el-input></td>
                            </tr>
                            <tr>
                                <td>课题编号：</td>
                                <td><el-input disabled v-model="showForm.extranetExpertGroupComment.topicNumber"></el-input></td>
                                <td>课题负责人：</td>
                                <td><el-input disabled v-model="showForm.extranetExpertGroupComment.projectLeader"></el-input></td>
                            </tr>
                            <tr>
                                <td>课题承担单位：</td>
                                <td colspan="3">
                                    <el-input disabled v-model="showForm.extranetExpertGroupComment.subjectUndertakingUnit"></el-input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="form_table1">
                        <tbody>
                            <tr>
                                <td colspan="8" style="text-align:left;padding-left:20px;">一、评分表</td>
                            </tr>
                            <tr>
                                <td style="width:13%;background-color: #e5f3ff;"><span>验收专家人数：</span></td>
                                <td colspan="7" >
                                    <el-input disabled v-model="showForm.extranetExpertGroupComment.acceptanceExpertNumber"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td style="background-color: #e5f3ff;"><span>专家序号：</span></td>
                                <td style="text-align:center;background-color: #e5f3ff;">1</td>
                                <td style="text-align:center;background-color: #e5f3ff;">2</td>
                                <td style="text-align:center;background-color: #e5f3ff;">3</td>
                                <td style="text-align:center;background-color: #e5f3ff;">4</td>
                                <td style="text-align:center;background-color: #e5f3ff;">5</td>
                                <td style="text-align:center;background-color: #e5f3ff;">6</td>
                                <td style="text-align:center;background-color: #e5f3ff;">7</td>
                            </tr>
                            <tr>
                                <td style="background-color: #e5f3ff;"><span>专家评分：</span></td>
                                <td><el-input disabled v-model="showForm.extranetExpertGroupComment.expertOneGrade" ></el-input></td>
                                <td><el-input disabled v-model="showForm.extranetExpertGroupComment.expertTwoGrade" ></el-input></td>
                                <td><el-input disabled v-model="showForm.extranetExpertGroupComment.expertThreeGrade" ></el-input></td>
                                <td><el-input disabled v-model="showForm.extranetExpertGroupComment.expertFourGrade" ></el-input></td>
                                <td><el-input disabled v-model="showForm.extranetExpertGroupComment.expertFiveGrade" ></el-input></td>
                                <td><el-input disabled v-model="showForm.extranetExpertGroupComment.expertSixGrade" ></el-input></td>
                                <td><el-input disabled v-model="showForm.extranetExpertGroupComment.expertSevenGrade" ></el-input></td>
                            </tr>
                            <tr>
                                <td style="background-color: #e5f3ff;"><span>综合得分：</span></td>
                                <td colspan="7" style="text-align: right;padding-right: 10px;line-height: 0;padding-bottom: 10px;">
                                    <el-input disabled v-model="showForm.extranetExpertGroupComment.synthesizeGrade" ></el-input>
                                    <span>注：综合得分为专家评分平均分，结果保留一位小数。</span>    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="form_table1">
                        <tbody>
                            <tr><td colspan="4" style="text-align:left;padding-left:20px;">二、验收意见</td></tr>
                            <tr>
                                <td style="width:25.8%;"><span>（一）对课题情况的总体评价：</span></td>
                                <td colspan="3">
                                    <el-input disabled type="textarea" v-model="showForm.extranetExpertGroupComment.topicOverallEvaluation"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td><span>（二）建议：</span></td>
                                <td colspan="3">
                                    <el-input disabled type="textarea" v-model="showForm.extranetExpertGroupComment.suggest"></el-input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="form_table1">
                        <tbody>
                            <tr><td colspan="4" style="text-align:left;padding-left:20px;">三、验收结论</td></tr>
                            <tr>
                                <td colspan="4" style="text-align:center;font-size:0;">
                                    <el-radio-group v-model="showForm.extranetExpertGroupComment.acceptanceConclusionId">
                                        <span v-for="(item,index) in finalAcceptanceMethod" :key="index">
                                            <el-radio disabled :label="item.id">{{item.content}}</el-radio>
                                        </span>
                                    </el-radio-group>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="form_table1">
                        <tbody>
                            <tr><td colspan="4" style="text-align:left;padding-left:20px;">四、验收专家组名单</td></tr>
                            <tr>
                                <td style="text-align:center;">姓名</td>
                                <td style="text-align:center;">单位</td>
                                <td style="text-align:center;">专业</td>
                                <td style="text-align:center;">职务/职称</td>
                            </tr>
                            <tr v-for="(item,index) in showForm.extranetExpertGroupComment.extranetExpertGroupCommentsNameList" :key="index">
                                <td><el-input disabled v-model="item.expertName"></el-input></td>
                                <td><el-input disabled v-model="item.companyName"></el-input></td>
                                <td><el-input disabled v-model="item.major"></el-input></td>
                                <td><el-input disabled v-model="item.job"></el-input></td>
                            </tr>
                            <tr>
                                <td><span>验收专家组组长签字：</span></td>
                                <td><el-input disabled v-model="showForm.extranetExpertGroupComment.expertLeader"></el-input></td>
                                <td>日期：</td>
                                <td>
                                    <el-date-picker
                                        disabled
                                        v-model="showForm.extranetExpertGroupComment.writeDate"
                                        type="date"
                                        value-format="yyyy-MM-dd"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </td>
                            </tr>
                            <tr>
                                <td>专家组意见表文件：</td>
                                <td colspan="3" style="height:50px;text-align:left;padding-left:10px;">
                                    <a  @click="uploadFileInventory(showForm.expertGroupCommentsUrl,showForm.expertGroupCommentsUrlName)"  :download="showForm.expertGroupCommentsUrlName">{{showForm.expertGroupCommentsUrlName}}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>专家评议表文件：</td>
                                <td colspan="3" style="height:50px;text-align:left;padding-left:10px;">
                                    <a  @click="uploadFileInventory(showForm.expertAcceptanceFormUrl,showForm.expertAcceptanceFormUrlName)"  :download="showForm.expertAcceptanceFormUrlName">{{showForm.expertAcceptanceFormUrlName}}</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- 提交 课题验收证书 step4-->
                <div class="step4" v-if="showForm.acceptancePhaseId>=7">
                    <p>江苏省环保科研课题验收证书</p>
                    <table class="form_table">
                        <thead>
                            <tr><th colspan="4">江苏省环保科研课题验收证书</th></tr>
                            <tr><th colspan="4">{{showForm.acceptanceCertificate.translate}}</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>课题名称：</td>
                                <td colspan="3"><el-input disabled v-model="showForm.acceptanceCertificate.topicName"></el-input></td>
                            </tr>
                            <tr>
                                <td>课题编号：</td>
                                <td colspan="3"><el-input disabled v-model="showForm.acceptanceCertificate.topicNumber"></el-input></td>
                            </tr>
                            <tr>
                                <td>完成单位：</td>
                                <td colspan="3">
                                    <el-input disabled v-model="showForm.acceptanceCertificate.completionUnit"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>验收组织部门：</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.acceptanceDepartment"></el-input>
                                </td>
                                <td>验收日期：</td>
                                <td>
                                    <el-date-picker
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceTime"
                                    align="right"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                                    </el-date-picker>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h1>一、基本信息</h1>
                    <p>1.课题概况</p>
                    <table class="form_table1 form_table3">
                        <tbody>
                            <tr>
                                <td rowspan="9" style="width:5%;text-align:center;"><span style="width:16px;">完成单位</span></td>
                            </tr>
                            <tr>
                                <td style="width:20.8%;">单位名称：</td>
                                <td colspan="6">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.unitName"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>单位性质：</td>
                                <td colspan="6" style="text-align:center;font-size:0;">
                                    <el-radio-group 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.unitNature">
                                        <span v-for="(item,index) in unitNatureOptions" :key="index">
                                            <el-radio :label="item.id">{{item.content}}</el-radio>
                                        </span>
                                    </el-radio-group>
                                </td>
                            </tr>
                            <tr>
                                <td>所在地区：</td>
                                <td colspan="6">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.location">
                                    </el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>法定代表人：</td>
                                <td colspan="2">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.legalRepresentative">
                                    </el-input>
                                </td>
                                <td style="width:20.8%">电话：</td>
                                <td colspan="2">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.legalRepresentativePhone">
                                    </el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>联系人：</td>
                                <td colspan="2">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.contacts">
                                    </el-input>
                                </td>
                                <td style="width:20.8%">电话：</td>
                                <td colspan="2">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.contactsPhone">
                                    </el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>邮政编码：</td>
                                <td colspan="2">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.postalCode">
                                    </el-input>
                                </td>
                                <td style="width:20.8%">电子信箱：</td>
                                <td colspan="2">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.mail">
                                    </el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>通信地址：</td>
                                <td colspan="6">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.mailingAddress">
                                    </el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>主管部门：</td>
                                <td colspan="6">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.competentDepartment">
                                    </el-input>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">课题起始时间：</td>
                                <td colspan="2">
                                    <el-date-picker
                                    disabled
                                    v-model="showForm.acceptanceCertificate.projectStartTime"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                                    </el-date-picker>
                                </td>
                                <td style="width:20.8%">课题完成时间：</td>
                                <td colspan="2">
                                    <el-date-picker
                                    disabled
                                    v-model="showForm.acceptanceCertificate.projectCompletionTime"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                                    </el-date-picker>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2"><span>成果形式(可选多项，另页附成果资料清单)：</span></td>
                                <td colspan="5">
                                    <el-checkbox-group v-model="showForm.acceptanceCertificate.achievementForm">
                                        <span v-for="(item,index) in achievementFormOptions" :key="index">
                                            <el-checkbox 
                                            disabled
                                            :label="item.id">{{item.content}}</el-checkbox>
                                        </span>
                                    </el-checkbox-group>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">成果水平：</td>
                                <td colspan="6">
                                    <el-radio-group v-model="showForm.acceptanceCertificate.achievementLevel" class="level">
                                        <span v-for="(item,index) in achievementLevelOptions" :key="index">
                                            <el-radio 
                                            disabled
                                            :label="item.id">{{item.content}}</el-radio>
                                        </span>
                                    </el-radio-group>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="7" style="text-align:left;padding-left:10px;">专利申请(件)</td>
                            </tr>
                            <tr>
                                <td colspan="2">发明：</td>
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].applicationInvention"></el-input>
                                </td>
                                <td style="width:10%;"><span>实用新型：</span></td>
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].useNewType"></el-input>
                                </td>
                                <td style="width:10%;"><span>外观设计：</span></td>
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].patentAppearance"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="7" style="text-align:left;padding-left:10px;">专利授权(件)</td>
                            </tr>
                            <tr>
                                <td colspan="2">发明：</td>
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].patentInvention"></el-input>
                                </td>
                                <td><span>实用新型：</span></td>
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].empowerNewType"></el-input>
                                </td>
                                <td><span>外观设计：</span></td>
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].empowerAppearanceDesign"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" rowspan="3" >发表论文()：</td>
                            </tr>
                            <tr>
                                <td style="text-align:center;">论文总数</td>
                                <td style="text-align:center; background-color:#e5f3ff;" colspan="2">科学引文索引(SCI)</td>
                                <td style="text-align:center;" colspan="2">工程索引(EI)</td>
                            </tr>
                            <tr>
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].paperNumber"></el-input>
                                </td>
                                <td colspan="2">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].scienceIndexe"></el-input>
                                </td>
                                <td colspan="2">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].engineerIndex"></el-input>
                                </td>
                            </tr>
                            <tr class="patent">
                                <td colspan="2">出版科技著作：</td>
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].publishWork"></el-input>
                                    <span>(部)</span>
                                </td>
                                <td colspan="2">制定技术标准：</td>
                                <td colspan="2">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].technicalStandard"></el-input>
                                    <span>(个)</span>
                                </td>
                            </tr>
                            <tr class="patent">
                                <td colspan="2">新产品：</td>
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].newProduct"></el-input>
                                    <span>(个)</span>
                                </td>
                                <td colspan="2">制定政策制度：</td>
                                <td colspan="2">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].policySystem"></el-input>
                                    <span>(项)</span>
                                </td>
                            </tr>
                            <tr class="patent">
                                <td colspan="2">建成新装置：</td>
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].newDevice"></el-input>
                                    <span>(套)</span>
                                </td>
                                <td colspan="2">新工艺：</td>
                                <td colspan="2">
                                    <el-input 
                                    disabled
                                    v-model="showForm.acceptanceCertificate.acceptanceCertificatePatentList[0].newTechnology"></el-input>
                                    <span>(项)</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>2.课题责任人情况：</p>
                    <table class="form_table1">
                        <tbody>
                            <tr class="textalignCenter">
                                <td>姓名</td>
                                <td>性别</td>
                                <td>出生年月</td>
                                <td>专业</td>
                                <td>学历</td>
                                <td>职称</td>
                                <td>联系电话</td>
                            </tr>
                            <tr v-for="(item,index) in showForm.acceptanceCertificate.acceptanceCertificateSubjectPeopleList" :key="index">
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="item.name"></el-input>
                                </td>
                                <td>
                                    <el-select
                                    disabled
                                    v-model="item.sex" placeholder="请选择">
                                        <el-option
                                        v-for="item in sexOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                                <td>
                                    <el-date-picker
                                        disabled
                                        v-model="item.birthDate"
                                        type="date"
                                        value-format="yyyy-MM-dd"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </td>
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="item.major"></el-input>
                                </td>
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="item.education"></el-input>
                                </td>
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="item.title"></el-input>
                                </td>
                                <td>
                                    <el-input 
                                    disabled
                                    v-model="item.phone"></el-input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>3.课题研发人员情况：</p>
                    <table class="form_table2">
                        <tbody>
                            <tr>
                                <td style="width:25.8%;">课题研发人员总数</td>
                                <td colspan="3">
                                    <el-input disabled v-model="showForm.acceptanceCertificate.developmentTotalNumber"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>其中:博士</td>
                                <td  colspan="3">
                                    <el-input disabled v-model="showForm.acceptanceCertificate.doctorTotalNumber"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>硕士</td>
                                <td  colspan="3">
                                    <el-input disabled v-model="showForm.acceptanceCertificate.masterTotalNumber"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>其中:高级职称</td>
                                <td  colspan="3">
                                    <el-input disabled v-model="showForm.acceptanceCertificate.seniorTotalNumber"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>中级职称</td>
                                <td  colspan="3">
                                    <el-input disabled v-model="showForm.acceptanceCertificate.intermediateTotalNumber"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>其中:在校研究生</td>
                                <td  colspan="3">
                                    <el-input disabled v-model="showForm.acceptanceCertificate.schoolMasterNumber"></el-input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>4. 课题实际到位经费情况：</p>
                    <table class="form_table1">
                        <tbody>
                            <tr class="textalignCenter">
                                <td>项目总经费</td>
                                <td>省环保科研课题经费</td>
                                <td>主管部门配套</td>
                                <td>银行贷款</td>
                                <td>单位自筹</td>
                                <td>其它</td>
                            </tr>
                            <tr>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.totalProjectFunds"></el-input>
                                </td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.environmentTopicFunds"></el-input>
                                </td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.competentDepartmentMatch"></el-input>
                                </td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.bankLoans"></el-input>
                                </td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.unitRaiseMoney"></el-input>
                                </td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.otherActualMoney"></el-input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>5. 省环保科研课题经费支出情况(单位财务部门盖章)：  单位：万元</p>
                    <table class="form_table">
                        <tbody>
                            <tr>
                                <td>合计：</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.totalExpenditure"></el-input>
                                </td>
                                <td>6.会议费：</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.conferenceFee"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>1.设备费：</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.equipmentCost"></el-input>
                                </td>
                                <td>7.国际合作交流费：</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.internationalCommunication"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>2.材料费：</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.materialFee"></el-input>
                                </td>
                                <td>8.专家咨询费：</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.expertConsult"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>3.测试化验加工费：</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.laboratoryFees"></el-input>
                                </td>
                                <td>9.管理及人员费：</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.managementExpense"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>4.燃料动力费：</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.fuelCosts"></el-input>
                                </td>
                                <td>10.其他费用：</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.otherExpenditureMoney"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>5. 差旅费：</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.travelExpenses"></el-input>
                                </td>
                                <td><el-input disabled></el-input> </td>
                                <td>
                                    <el-input disabled></el-input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>6. 课题累计经济效益：</p>
                    <table class="form_table">
                        <tbody>
                            <tr>
                                <td>新增产值（万元）</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.newOutput"></el-input>
                                </td>
                                <td>新增销售额（万元）</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.newSalesVolume"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>新增利税（万元）</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.newProfitTax"></el-input>
                                </td>
                                <td>出口创汇（万美元）</td>
                                <td>
                                    <el-input disabled v-model="showForm.acceptanceCertificate.exitEarn"></el-input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h1>二、目标任务完成情况</h1>
                    <table class="form_table">
                        <tbody>
                            <tr>
                                <td>1. 主要解决的关键技术与创新点：</td>
                                <td colspan="3">
                                    <el-input disabled v-model="showForm.acceptanceCertificate.mainSolveTechnology" type="textarea"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>2. 主要技术、经济与环境指标完成情况：</td>
                                <td colspan="3">
                                    <el-input disabled v-model="showForm.acceptanceCertificate.mainCompletion" type="textarea"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>3. 课题实施的绩效：</td>
                                <td colspan="3">
                                    <el-input disabled v-model="showForm.acceptanceCertificate.implementationAchievement" type="textarea"></el-input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h1>三、课题主要参加人员名单</h1>
                    <table class="form_table1">
                        <tbody>
                            <tr class="textalignCenter">
                                <td>姓名</td>
                                <td>性别</td>
                                <td>出生年月</td>
                                <td>技术职称</td>
                                <td>学历</td>
                                <td>工作单位 </td>
                                <td><span>承担的主要研究任务</span></td>
                            </tr>
                            <tr v-for="(item,index) in showForm.acceptanceCertificate.acceptanceCertificatePrincipalPersonnelList" :key="index">
                                <td>
                                    <el-input disabled v-model="item.participantName"></el-input>
                                </td>
                                <td>
                                    <el-select disabled v-model="item.participantSex" placeholder="请选择">
                                        <el-option
                                        v-for="item in sexOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.label">
                                        </el-option>
                                    </el-select>
                                </td>
                                <td>
                                    <el-date-picker
                                        disabled
                                        v-model="item.participantBirthDate"
                                        type="date"
                                        value-format="yyyy-MM-dd"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </td>
                                <td>
                                    <el-input disabled v-model="item.participantTechnicalTitle"></el-input>
                                </td>
                                <td>
                                    <el-input disabled v-model="item.participantEducation"></el-input>
                                </td>
                                <td>
                                    <el-input disabled v-model="item.participantWorkUnit"></el-input>
                                </td>
                                <td>
                                    <el-input disabled v-model="item.taskTaking"></el-input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h1>四、课题管理部门意见</h1>
                    <table class="form_table">
                        <tbody>
                            <tr>
                                <td>完成单位科技部门意见：</td>
                                <td colspan="3">
                                    <el-input disabled v-model="showForm.acceptanceCertificate.scienceDepartmentOpinion"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>组织验收部门意见：</td>
                                <td colspan="3">
                                    <el-input disabled v-model="showForm.acceptanceCertificate.checkDepartmentOpinion"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>省生态环境厅意见：</td>
                                <td colspan="3">
                                    <el-input disabled v-model="showForm.acceptanceCertificate.environmentOfficeOpinion"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>上传的最终证书文件：</td>
                                <td colspan="3" style="height:50px;">
                                    <a @click="uploadFileInventory(showForm.acceptanceCertificateUrl,showForm.acceptanceCertificateUrlName)"  :download="showForm.acceptanceCertificateUrlName" >{{showForm.acceptanceCertificateUrlName}}</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- 审核流程 -->
                <table v-show="showForm.extranetCheckApplyStateList != null" class="form_table1 process">
                    <tr>
                        <td>交办人</td>
                        <td>处理人</td>
                        <td>审核步骤</td>
                        <td>交办时间</td>
                        <td>状态</td>
                        <td>处理内容</td>
                        <td>处理时间</td>
                    </tr>
                    <tr v-for="(item,index) in showForm.extranetCheckApplyStateList" :key="index">
                        <td>
                            <el-input disabled v-model="item.fistHandler"></el-input>
                        </td>
                        <td>
                            <el-input disabled v-model="item.secondHandler"></el-input>
                        </td>
                        <td>
                            <el-input disabled v-model="item.auditStep"></el-input>
                        </td>
                        <td style="width:16%;">
                            <el-input disabled v-model="item.firstHandleTime"></el-input>
                        </td>
                        <td>
                            <el-input disabled v-model="item.state"></el-input>
                        </td>
                        <td>
                            <el-input disabled v-model="item.handleContent"></el-input>
                        </td>
                        <td style="width:16%;">
                            <el-input disabled v-model="item.secondHandleTime"></el-input>
                        </td>
                    </tr>
                </table>
            </el-form>
            <el-button type="primary" v-show="this.$route.params.isShow == 2"  @click="handleExime">通过</el-button>
            <el-button type="primary" v-show="this.$route.params.isShow == 2"  @click="handleReject">驳回</el-button>
            <el-button type="primary" class="btnBack"  @click="handleBack">返回</el-button>
        </div>
        <!-- 驳回理由弹框 -->
        <el-dialog
            title="请输入退回理由"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="请输入驳回理由：" prop="reason">
                    <el-input 
                     type="textarea" 
                     v-model="form.reason"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleBtnConfirm('form')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name:'subjectApplyShow',
    data(){
        return{
            showForm:{
                topicName:'',
                topicNumber:'',
                subjectUndertakingUnit:'',
                unitNature:'',
                projectLeader:'',
                projectLeaderPhone:'',
                projectLeaderMail:'',
                postalAddress:'',
                agreementStartTime:'',
                agreementEndTime:'',
                applicationAcceptanceTime:'',
                applicationAcceptanceMode:'',
                applicationAcceptancePlace:'',
                acceptanceContact:'',
                acceptanceContactPhone:'',
                mainContentSituation:'',
                submissionAchievementsSituation:'',
                submitInventory:[],
                subjectUndertakingUnitOpinion:'',
                environmentalDepartmentsOpinion:'',
                provinceAssessmentCenterOpinion:'',
                competentDepartmentOinion:'',
                // applicationAcceptanceUrl:'',
                // achievementsUrl:''
            },
            unitNatureOptions:[{//单位性质接口
                "id": 1,
                "classification": null,
                "content": "大专院校",
                "classificationId": null,
                "contentId": null,
                "state": null
            }],
            applicationAcceptanceModeOptions:[{//申请验收形式接口
                id:'',
                content:''
            }],
            sexOptions:[{
                value:'1',
                label:'男'
            },{
                value:'2',
                label:'女'
            }],
            submitInventoryOptions:[{//验收提交资料清单
                id:'',
                content:''
            }],
            finalAcceptanceMethod:[{//验收结论
                id:'',
                content:''
            }],
            // 成果形式
            achievementFormOptions:[{
                id:'',
                content:'',
            }],
            // 成果水平
            achievementLevelOptions:[{
                id:'',
                content:''
            }],
            paramsData:{
                id:this.$route.params.id,
                arrays:this.$route.params.arrays,
                isShow:this.$route.params.isShow
            },
            form:{
                reason:''
            },
            rules: {//表单验证
                reason:[
                    { required: true, message: '请输入驳回理由', trigger: 'blur' }
                ],
            },
            dialogVisible:false,
            
        }
    },
    methods:{
        // 审核通过
        handleExime(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/apply/examine',
                params:{
                    id:_this.paramsData.id[0],
                    type:true
                }
            }).then(function(res){
                if(res.data.resultFlag == 1){
                    _this.$alert('请先登录', '提示', {
                        confirmButtonText: '确定',
                        type: 'warning'
                        }).then(() => {
                        _this.$router.push('/');
                    }).catch(() => {
                        _this.$router.push('/');
                    });
                }else{
                    _this.$alert('审核通过', '提示', {
                        confirmButtonText: '确定',
                        type: 'warning'
                        }).then(() => {
                        _this.$router.back(0)
                    }).catch(() => {
                        _this.$router.back(0)
                    });
                }
            }).catch(function(err){
                console.log(err)
            })
        },
        // 驳回
        handleReject(){
            this.dialogVisible = true
        },
        //弹框的关闭按钮点击事件
        handleClose(){
            this.dialogVisible = false
        },
        // 弹框的确认驳回
        handleBtnConfirm(formReason){
            let _this = this
            _this.$refs[formReason].validate((valid) => {
                if (valid) {
                   this.axios({
                        method:'POST',
                        url:'http://192.168.0.37:8087/apply/examine',
                        params:{
                            type:false,
                            reason:_this.form.reason,
                            id:_this.paramsData.id[0]
                        }
                    }).then(function(res){
                        _this.$alert('审核成功', '提示', {
                            confirmButtonText: '确定',
                            type:'warning',
                        }).then(() => {
                            _this.$router.back(0)
                        }).catch(() => {
                            _this.$router.back(0)
                        })
                    }).catch(function(err){
                        console.log(err)
                    })
                } else {
                    return false;
                }
            });
        },
        // 返回
        handleBack(){
            this.$router.back(-1)
        },
        // 单位性质字典类接口
        getUnitNature(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/checkApplyStyle/unitNature',
            }).then(function(res){
                _this.unitNatureOptions = res.data.data
                _this.getApplicationAcceptanceModeOptions()
            }).catch(function(err){
                console.log(err)
            })
        },
        //申请验收形式字典接口
        getApplicationAcceptanceModeOptions(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/checkApplyStyle/applicationAcceptance',
            }).then(function(res){
                _this.applicationAcceptanceModeOptions = res.data.data
                _this.getSubmitInventoryOptions()
            }).catch(function(err){
                console.log(err)
            })
        },
        // 验收提交资料清单接口
        getSubmitInventoryOptions(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/checkApplyStyle/applicationSubmitList'
            }).then(function(res){
                _this.submitInventoryOptions = res.data.data
                _this.getFinalAcceptanceMethod()
            }).catch(function(err){
                console.log(err)
            })
        },
        // 获取成果形式
        getAchievementFormOptions(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/checkApplyStyle/queryAchievementShape',
            }).then(function(res){
                _this.achievementFormOptions = res.data.data
                _this.getAchievementLevelOptions()
            }).catch(function(err){
                console.log(err)
            })
        },
        // 获取成果水平
        getAchievementLevelOptions(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/checkApplyStyle/queryAchievementLevel',
            }).then(function(res){
                _this.achievementLevelOptions = res.data.data
                // _this.getAcceptance()
            }).catch(function(err){
                console.log(err)
            })
        },
        // 获取验收结论
        getFinalAcceptanceMethod(){
            let _this = this
            this.axios({
                method:'POST',
                url:'http://192.168.0.37:8087/checkApplyStyle/finalAcceptanceMethod',
            }).then(function(res){
                _this.finalAcceptanceMethod = res.data.data
                _this.getAchievementFormOptions()
            }).catch(function(err){
                console.log(err)
            })
        },
        // 根据id获取详情信息
        getInfoById(id){
            if(this.paramsData.arrays != '' || this.paramsData.arrays != undefined || this.paramsData.arrays != null){
                this.paramsData.arrays.map((item) => {
                    if(id == item.id){
                        console.log(item)
                        this.showForm = item
                        this.showForm.submitInventory = JSON.parse(item.submitInventory)
                        if(item.acceptanceCertificate != null || item.acceptanceCertificate !=undefined){
                            this.showForm.acceptanceCertificate.achievementForm = JSON.parse(item.acceptanceCertificate.achievementForm)
                        }
                        return;
                    }
                })
            }
        },
        // 下载文件
        uploadFileInventory(fileUrl,fileName){
            window.location.href='http://192.168.0.37:8087/file/queryFileStream?fileUrl=' + fileUrl + '&fileName=' + fileName
        }
    },
    async mounted(){
       await this.getUnitNature()//单位性质
       await this.getInfoById(this.paramsData.id)
    }
}
</script>
<style lang="less">
#subjectApplyShow{
    .showForm{
        .el-form{
             p,h1{
                padding-left: 40px;
                margin: 15px auto;
                text-align: left;
                width: 59.4%;
                min-width: 900px;
                font-weight: bold;
                font-size: 18px;
            }
            h1{
                margin: 15px auto;
                font-size: 23px;
                padding-left: 20px;
            }
            th{
                .el-input{
                    display: inline-block;
                    width: auto;
                    height: 50px;
                    line-height: 50px;
                }
            }
            .el-table{
                min-width: 900px;
            }
            .form_table1{
                width: 59.4%;
                min-width: 900px;
                tr{
                    td{
                        border-left: 1px solid #e0e0e0;
                        border-bottom: 1px solid #e0e0e0;
                        height: 50px;
                        text-align: center;
                        &:last-child{
                            border-right: 1px solid #e0e0e0;
                        }
                    }
                    &:first-child{
                        border-top: 1px solid #e0e0e0;
                        td{
                            background-color:#e5f3ff;
                        }
                    }
                }
            }
            .form_table3{
                tr{
                    td:first-child,
                    td:nth-child(3),
                    td:nth-child(5){
                        background-color: #e5f3ff;
                    }
                }
            }
            .patent{
                text-align: left;
                .el-input{
                    width: 79%;
                }
            }
            .process{
                margin-top:40px;
            }
            td{
                text-align: left;
            }
            .el-select{
                width: 100%;
            }
            .el-radio{
                line-height: 50px;
                margin: 0 10px;
                .el-radio__input{
                    padding-right: 5px;
                }
                .el-radio__input.is-+span.el-radio__label{
                    color: #000;
                }
                .el-radio__input.is-checked .el-radio__inner{
                    background-color: #0abd90;
                    border-color: #0abd90;
                }
                .el-radio__input.is-.is-checked .el-radio__inner::after{
                    background-color: #fff;
                }
            }
            textarea{
                min-height: 100px !important;
                padding: 0 10px;
            }
            .el-checkbox-group,
            .el-radio-group.level{
                text-align: left;
                font-size: 0;
                line-height: 1;
                height: 100%;
                width: 100%;
                >span{
                    min-width: 200px;
                    line-height: 1;
                    padding:5px 10px;
                    .el-checkbox{
                        span{
                            line-height: 1;
                            &:last-child{
                                padding-left: 5px;
                            }
                        }
                    }
                     .el-radio{
                        line-height: 1;
                        margin: 0;
                     }
                }
            }
            .el-checkbox-group{
                >span{
                    display: inline-block;
                    .el-checkbox{
                        min-width: 120px;
                        
                        .el-checkbox__label{
                            display: inline-block;
                        }
                    } 
                }
            }
            .el-checkbox__label{
                margin-left: 5px;
            }
            #achievementsFile,#applicationAcceptanceFile,#submitInventoryFile{
                margin-left:10px;
            }
            .el-date-editor{
                .el-input__inner{
                    padding-left: 30px;
                }
                .el-input__prefix{
                    line-height: 50px;
                }
            }
        }
    }
    .btnBack{
        margin: 10px auto;
    }
    .el-dialog__wrapper{
        .el-dialog{
            margin-top: 0 !important;
        }
        .el-form{
            .el-form-item__label{
                width: 200px !important;
            }
            .el-form-item__content{
                margin-left: 200px !important;
            }
            textarea{
                min-height: 278px !important;
                padding: 10px;
            }
        }
        .el-dialog__footer{
            text-align: center;
        }
    }
}
</style>