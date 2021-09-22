/**
 * @param {number} x
 * @return {number}
 * 思路： 先反转，再判断首个字母是什么类型
 */
var reverse = function(x) {
    let value = x.toString()
    if(value.length === 1) return x
    let stack = Array.from(value).reverse()
    const lose = stack.indexOf("-")
    if(lose > -1) {
        stack.splice(lose, 1);
        stack.unshift("-")
    }
    if(stack[0] == '0') {
        stack.shift()
    }
    let result = parseInt(stack.join(""))
    return (result >= (-2)**31 && result <=  (2)**31 -1) ? result : 0
};