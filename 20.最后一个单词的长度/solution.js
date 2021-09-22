var lengthOfLastWord = function(s) {
    s = s.trim()
    if(!s) return 0;
    let len = s.length, i;
    for (i = len - 1; i >= 0; --i) {
        if(s[i] == ' ') { return len - i - 1;}
    }
    return len;
};
const s = "  a hello1 d  ss "
console.log(lengthOfLastWord(s));;