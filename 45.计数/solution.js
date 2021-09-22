const target = "111122344";

const solution = function (target) {
    if(target.length == 0) return '';
    let remake = target[0], count = 1, substr = '', len = target.length;
    for (let i = 1; i < len; i++) {
        if(remake != target[i]) {
            substr += remake + count;
            remake = target[i];
            count = 1;
        } else {
            count++;
        }
    }
    substr += remake + count;
    return substr;
}

const ans = solution(target);
console.log(ans);