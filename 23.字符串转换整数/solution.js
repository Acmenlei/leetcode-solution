var myAtoi = function(s) {
    let num = s.trim().match(/^(\+|-|\d)\d{0,}/g);
    if(!num) return 0; 
    if(num.length == 1 && (num[0]=='+' || num == '-')) return 0;
    if(num[0][0] == '-') {
       return Number(num) < -(2**31) ?  -(2**31)  : Number(num) 
    }
    return Number(num) > 2**31 - 1 ? 2**31 - 1 : Number(num);
};
console.log(myAtoi("word of the english -42.2 "));