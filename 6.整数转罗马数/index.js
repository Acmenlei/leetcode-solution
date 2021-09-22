 var intToRoman = function (num) {
    let hashTable = { 1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I' }
    num = num + '';
    let string = '', count = 0;
    for (let i in num) {
        if(num / num[i] != 0) {
            count = num / num[i];
            string += hashTable[num[i]] * count;
            num %= num[i];
        }
    }
    return string;
};

console.log(intToRoman(3999))