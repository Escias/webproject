export function checkPassword(value){
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;
    return pattern.test(value)
}
export function  checkUsername(check){
    if (this.username.length>=3 && this.username.length<=15 && this.username.match(/[a-z]/i)){
        check.userCheck = true
        return true
    }else{
        return false
    }
}
export function checkMail(value,check){
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+[\w-]{1,5}$/i;
    check.mailCheck = pattern.test(value)
    return pattern.test(value)
}
export function  confirmPassword(value,check){
    if (value === this.password){
        check.passCheck = true
        return true
    }else{
        return false
    }
}
export function checkName(value){
    if (value === ''){
        return false
    }else{
        return true
    }
}