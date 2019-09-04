// 验证手机号
let validatePhone = (val) => {
    let reg = /^1[3456789]\d{9}$/;
    if(!reg.test(val)) {
        return "请输入正确的手机号";
    }
    return false;
};

// 验证密码（待完善）
let validatePwd = (val) => {
    if(val.length < 6 || val.length > 18) {
        return "密码长度为6-18位";
    }
    return false;
}

// 验证身份证号
let validateCard = (val) => {
    let area = { 
        11: "北京", 
        12: "天津", 
        13: "河北", 
        14: "山西", 
        15: "内蒙古", 
        21: "辽宁", 
        22: "吉林", 
        23: "黑龙江", 
        31: "上海", 
        32: "江苏", 
        33: "浙江", 
        34: "安徽", 
        35: "福建", 
        36: "江西", 
        37: "山东", 
        41: "河南", 
        42: "湖北", 
        43: "湖南", 
        44: "广东", 
        45: "广西", 
        46: "海南", 
        50: "重庆", 
        51: "四川", 
        52: "贵州", 
        53: "云南", 
        54: "西藏", 
        61: "陕西", 
        62: "甘肃", 
        63: "青海", 
        64: "宁夏", 
        65: "新疆", 
        71: "台湾", 
        81: "香港", 
        82: "澳门", 
        91: "国外"
    } 
    let retflag = false; 
    let Y, JYM; 
    let S, M; 
    let idcard_array = new Array(); 
    idcard_array = val.split(""); 
    let ereg;
    //地区检验 
    if(area[parseInt(val.substr(0, 2))] == null) 
        return "请输入正确的身份证号"; 
    //身份号码位数及格式检验 
    switch(val.length) { 
        case 15: 
            if((parseInt(val.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(val.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(val.substr(6, 2)) + 1900) % 4 == 0)) { 
                ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/; //测试出生日期的合法性 
            }else { 
                ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/; //测试出生日期的合法性 
            } 
            if(ereg.test(val)) { 
                return false; 
            }else { 
                return "请输入正确的身份证号";
            }
            break; 
        case 18: 
            if(parseInt(val.substr(6, 4)) % 4 == 0 || (parseInt(val.substr(6, 4)) % 100 == 0 && parseInt(val.substr(6, 4)) % 4 == 0)) { 
                ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式 
            }else { 
                ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式 
            } 
            if (ereg.test(val)) { //测试出生日期的合法性 
            //计算校验位 
                S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 + parseInt(idcard_array[7]) * 1 + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9]) * 3; 
                Y = S % 11; 
                M = "F"; 
                JYM = "10X98765432"; 
                M = JYM.substr(Y, 1); //判断校验位 
                if (M == idcard_array[17]) 
                    return false; //检测ID的校验位 
                else 
                    return "请输入正确的身份证号"; 
            }else 
                return "请输入正确的身份证号"; 
            break; 
        default: 
            return "请输入正确的身份证号"; 
            break; 
    } 
}

// 验证邮箱
let validateEmail = (val) => {
    let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; //正则表达式
    if(!reg.test(val)){ //正则验证不通过，格式不对
        return "请输入正确的电子邮件";
    }else {
        return false;
    }
}

// 数字验证
let validateNum = (val) => {
    let reg = /(.*?)\d+(.*?)/;
    if(!reg.test(val)) {
        return "金额请输入数字";
    }else {
        return false;
    }
}

export default {
    validatePhone,
    validatePwd,
    validateCard,
    validateEmail,
    validateNum
}