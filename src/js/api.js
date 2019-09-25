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
    // 获取列表数据
    getGuideList: `${ host }/environment/guide/getUnitCollection`,
// 课题立项
    // 新增课题
    submitAddTender: `${ host }/environment/tender/insertTender`,
    // 新增课题附件
    submitAddTenderFile: `${ host }/environment/tender/TenderFileUpload`,
    // 获取列表数据
    getTenderList: `${ host }/environment/tender/getTenderByUid`,
    // 获取主表信息
    getTenderForm: `${ host }/environment/tender/getTenderById`,
    // 获取附件信息
    getTenderFormFile: `${ host }/environment/tender/getTenderFileInfo`,
    // 获取审核信息
    getTenderFormList: `${ host }/environment/tender/getAllShenHeTableRecordInfoByContractId`,
    // 下载附件
    downloadFile: `${ host }/file/queryFileStream`,
    // 修改课题
    submitEditTender: `${ host }/environment/tender/updateTenderStatusByReturnCommit`,
// 合同管理
    // 新增合同
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
}