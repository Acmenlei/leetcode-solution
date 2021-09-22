const s = "()(())()()()()(((())))((((()))))"
/**
"()(())(()((())))((((()))))" */
var longestValidParentheses = function(s) {
    let count = 0, max = 0, t = 0, stack = [];
    for (let i in s) {
        if( s[i] == ')') {
            if(stack.pop() == '(') {
                count += 2;
                if(stack.length == 0) {
                    count += t;
                    count > max && (max = count);
                    count = 0; t = 0;
                } else {
                    count > max && (max = count);
                }
                
            } else {
                count = 0;
                stack.length = 0;
            }
        } else {
            // 此时的有效括号不确定 需要后续验证
            if(stack.length > 0 && count != 0) { 
                t += count;
                count = 0;
            }
            stack.push('(');
        }
    }
    console.log(max, t);
    return max > t+count ? max : t+count;
};

console.log(longestValidParentheses(s));