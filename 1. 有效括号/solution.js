/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(value) {
    const stack = [];
    function cpa(o) { return stack.pop() === o; }
    for(let i = 0; i < value.length; i++) {
        switch(value[i]) {
            case "{" : stack.push(value[i]); break;
            case "(" : stack.push(value[i]); break;
            case "[" : stack.push(value[i]); break;
            case "}" : if(!cpa('{')) return false;break;
            case ")" : if(!cpa('(')) return false;break;
            case "]" : if(!cpa('[')) return false;break;
        } 
    }
    return stack.length === 0;
};