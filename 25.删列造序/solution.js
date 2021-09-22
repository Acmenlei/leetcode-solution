var minDeletionSize = function(strs) {
    let count = 0, i = 0; 
        for (let j = 0; j < strs[0].length; j++) {
            while (strs[i]) {
                if( strs[i+1] && strs[i][j] > strs[i+1][j]) {
                    count++;
                    continue;
                }
                i++;
            }
            
        }
    return count;
};

console.log(minDeletionSize(["zyx","wvu","tsr"]));;