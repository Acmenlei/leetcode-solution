var rotate = function (matrix) {
    let rotMatrix = [], len = matrix.length;
    for (let i = 0; i < len; i++) {
        rotMatrix[i] = new Array(len);
    }
    for (let y = 0; y < len; y++) {
        let i = 0;
        for (let x = len - 1; x >= 0; x--) {
            rotMatrix[y][i] = matrix[x][y];
            i++;
        }
    }
    return rotMatrix;
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));;