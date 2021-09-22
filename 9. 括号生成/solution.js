/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
     let s = '('; // 左括号开始
     let dfs = [];
     backHelper(s, 1, 0, n, dfs);
     return dfs;
 };
 
 var backHelper = function(s, left, right, n, dfs) {
     if(s.length == 2*n) { dfs.push(s); return; }
     let L = left, R = right;
     if(L < n) { backHelper(s + "(", L + 1, R, n, dfs); }
     if(L > R) { backHelper(s + ")", L, R + 1, n, dfs); }
 }
