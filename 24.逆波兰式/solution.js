var evalRPN = function (tokens) {
    let stack = [];
    for (let i in tokens) {
        if (['+', '-', '*', '/'].includes(tokens[i])) {
            let pre = Number(stack.pop());
            let post = Number(stack.pop());
            switch (tokens[i]) {
                case '+' : stack.push(post + (pre)); break;
                case '-' : stack.push(post - (pre)); break;
                case '*' : stack.push(post * (pre)); break;
                case '/' : stack.push(parseInt(post / (pre))); break;
            }
            continue;
        }
        stack.push(tokens[i]);
    }
    return stack[0];
};
evalRPN(["4","13","5","/","+"])