
// 验证手机号
let validatePhone = (value) => {
    var reg = /^1[3456789]\d{9}$/;
    if(!reg.test(value)) {
        return true;
    }
}

export default {
    validatePhone
}