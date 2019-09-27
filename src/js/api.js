const host= 'http://192.168.0.80:8087';


export const service = {
// 登录
    // 验证码
    checkCode: `${ host }/extranetCode/checkCode`,
    // 企业登录
    loginByCompany: `${ host }/company/login`,
    // 专家登录
    loginByExpert: `${ host }/extranetExpert/login`,
// 注册
    // 企业注册
    registerByCompany: `${ host }/company/register`,
    // 获取单位性质
    getUnitNature: `${ host }/checkApplyStyle/unitNature`,
// 首页
    // 获取验收待审核数
    getSubjectTotal: `${ host }/extranet/subjectTotal`,
    // 获取通知公告
    getExtranetQuery: `${ host }/notification/ExtranetQuery`,
// 指南管理
    // 新增指南
    submitAddGuideInfo: `${ host }/environment/guide/insertGuideInfo`,
    // 获取领域、类别
    getCategoryAndDomain: `${ host }/environment/guide/getCategoryAndDomain`,
    // 获取单位
    getUnit: `${ host }/environment/guide/getCookieValue`,
    // 获取列表信息
    getGuideList: `${ host }/environment/guide/getUnitCollection`,
// 课题立项
    // 新增课题
    submitAddTender: `${ host }/environment/tender/insertTender`,
    // 新增课题附件
    submitAddTenderFile: `${ host }/environment/tender/TenderFileUpload`,
    // 获取列表信息
    getTenderList: `${ host }/environment/tender/getTenderByUid`,
    // 获取主表信息
    getTenderForm: `${ host }/environment/tender/getTenderById`,
    // 获取附件信息
    getTenderFormFile: `${ host }/environment/tender/getTenderFileInfo`,
    // 获取审核信息
    getTenderFormList: `${ host }/environment/tender/getAllShenHeTableRecordInfoByContractId`,
    // 下载附件
    downloadFile: `${ host }/file/queryFileStream`,
    // 修改课题信息
    submitEditTender: `${ host }/environment/tender/updateTenderStatusByReturnCommit`,
// 合同管理
    // 新增合同主表
    submitAddContract: `${ host }/environment/contract/addContractInfo`,
    // 新增合同子表1
    submitAddContract1: `${ host }/environment/contentindicators/insertCI`,
    // 新增合同子表2
    submitAddContract2: `${ host }/environment/contract/subject_participa_unit/insertInfo`,
    // 新增合同子表3
    submitAddContract3: `${ host }/environment/contract/keydev/insertKeyDev`,
    // 新增合同子表4
    submitAddContract4: `${ host }/environment/contract/subjectfundbudget/insertInfo`,
    // 新增合同附件
    submitAddContractFile: `${ host }/environment/contract/contractFileUpload`,
    // 获取回显信息
    getContractBackList: `${ host }/environment/contract/queryAllEndTenderInfo`,
    // 获取列表信息
    getContractList: `${ host }/environment/contract/getManageInfoByUid`,
    // 获取合同主表
    getContractForm: `${ host }/environment/contract/getManageInfoById`,
    // 获取合同子表1
    getContractForm1: `${ host }/environment/contentindicators/getIndicatorById`,
    // 获取合同子表2
    getContractForm2: `${ host }/environment/contract/subject_participa_unit/getDeveloperInfoById`,
    // 获取合同子表3
    getContractForm3: `${ host }/environment/contract/keydev/getKeyDevInfoById`,
    // 获取合同子表4
    getContractForm4: `${ host }/environment/contract/subjectfundbudget/getInfoById`,
    // 获取合同附件
    getContractFormFile: `${ host }/environment/contract/getContractAnnexInfo`,
    // 获取审核信息
    getContractFormList: `${ host }/environment/contract/getRecordInfoByContractId`,
    // 修改合同信息
    submitEditContract: `${ host }/environment/contract/updateContractStatusByReturnCommit`,
// 日常管理
// 中期检查
    // 获取列表信息
    getMidList: `${ host }/environment/contract/getContractByUid`,
    // 新增中期检查
    submitAddMid: `${ host }/environment/daily/WaiCommitFile`,
    // 新增中期检查附件
    submitAddMidFile: `${ host }/environment/contract/subjectSuggestFileUpload`,
    // 获取中期检查总附件
    getMidFile: `${ host }/environment/contract/getSubjectSuggestAnnexInfo`,
    // 获取专家评估表
    getMidForm1: `${ host }/environment/daily/getExpertAssessmentByCid`,
    // 获取专家评估表附件
    getMidForm1File: `${ host }/environment/daily/getEAFileInfo`,
    // 获取中期检查表
    getMidForm2: `${ host }/environment/daily/getMidCheckTemplateByCid`,
    // 获取中期检查表附件
    getMidForm2File: `${ host }/environment/daily/getMidCheckFileInfo`,
// 进展情况报告
    // 新增进展情况主表
    submitAddProgress: `${ host }/environment/progress/insertProgress`,
    // 新增进展情况子表1
    submitAddProgress1: `${ host }/environment/progress/insertCRDT`,
    // 新增进展情况子表2
    submitAddProgress2: `${ host }/environment/progress/insertCP`,
    // 新增进展情况子表3
    submitAddProgress3: `${ host }/environment/progress/insertPMP`,
    // 新增进展情况子表4
    submitAddProgress4: `${ host }/environment/progress/insertNWP`,
    // 新增进展情况附件
    submitAddProgressFile: `${ host }/environment/progress/ProgressMultiUpload`,
    // 获取列表信息
    getProgressList: `${ host }/environment/progress/getProgressInfoByUid`,
    // 获取进展情况主表
    getProgressForm: `${ host }/environment/progress/getInfoById`,
    // 获取进展情况子表1
    getProgressForm1: `${ host }/environment/progress/getCRDTByPid`,
    // 获取进展情况子表2
    getProgressForm2: `${ host }/environment/progress/getCPByPid`,
    // 获取进展情况子表3
    getProgressForm3: `${ host }/environment/progress/getPMPByPid`,
    // 获取进展情况子表4
    getProgressForm4: `${ host }/environment/progress/getNWPByPid`,
    // 获取进展情况附件
    getProgressFormFile: `${ host }/environment/progress/getProgressFileInfo`,
// 重大事项报告
    // 新增重大事项
    submitAddMatter: `${ host }/enviroment/daily/majormatter/insertMajor`,
    // 新增重大事项附件
    submitAddMatterFile: `${ host }/enviroment/daily/majormatter/majorFileUpload`,
    // 获取回显信息
    getMatterBackList: `${ host }/environment/daily/queryAllEndContractInfo`,
    // 获取列表信息
    getMatterList: `${ host }/enviroment/daily/majormatter/getAllMajorInfoByUid`,
    // 获取调整类型
    getAdjustType: `${ host }/enviroment/daily/majormatter/getAllAdjustType`,
    // 获取调整事项
    getAdjustmentMatters: `${ host }/enviroment/daily/majormatter/getAllAdjustmentMatters`,
    // 获取重大事项
    getMatterForm: `${ host }/enviroment/daily/majormatter/getMajorById`,
    // 获取重大事项附件
    getMatterFormFile: `${ host }/enviroment/daily/majormatter/getMajorFileInfo`,
}