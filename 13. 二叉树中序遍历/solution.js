var inorderTraversal = function(root) {
    if(!root) { return []; }
    let dfs = [], stack = [root];
    let curr = root.left; // 左子树开始
    while(curr || stack.length > 0) {
       if(curr) {
           stack.push(curr); // 左子树存在，入栈
           curr = curr.left; // 继续往左探测
       } else {
           let pnode = stack.pop(); // 左子树不存在，弹出上一个结点的值
           dfs.push(pnode.val); // 输出
           curr = pnode.right; // 左中访问完了,轮到右边了
       }
    }
    return dfs;
};