var lengthOfLongestSubstring = function (s) {
    let len = 0
    let start = 0
    for (let i = 0; i < s.length; i++) {
        const value = s.substr(start, i - start)// xl
        const index = value.indexOf(s[i]) //l
        // debugger
        console.log(value,s[i],index,i,start)
        if (index !== -1) {
            len = Math.max(len, i - start)
            start = start + index + 1
        } else {
            len = Math.max(len, i - start + 1)
        }
    }
    return len
};

var lengthOfLongestSubstring = function(s) {
    let queue = [], maxlen = 0, curlen = 0, index;    
    for (let i in s) {
        index = queue.indexOf(s[i]);
        if(index != -1) { // 有重复
            queue.splice(0, index + 1); // 切割
        }
        queue.push(s[i]); // 入队
        curlen = queue.length; // 重新计算长度
        maxlen = Math.max(maxlen, curlen);
    }
    return maxlen;
};
console.log(lengthOfLongestSubstring("xlxabaxlx"));