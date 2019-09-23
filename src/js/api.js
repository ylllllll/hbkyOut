const host= 'http://192.168.0.80:8087';


export const service = {
    // 验证码
    checkCode: `${ host }/extranetCode/checkCode`,
    // 企业登录
    loginByCompany: `${ host }/company/login`,
    // 专家登录
    loginByExpert: `${ host }/extranetExpert/login`
}