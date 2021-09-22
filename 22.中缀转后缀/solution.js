const expresstion = "A+B*(C-D)-E/F";
/** 中缀转后缀 */
const InfixTosuffix = function (expresstion) {
  let stack = [], suffix = "";
  for (let i in expresstion) {
    if (!["+", "-", "*", "/", "(", ")"].includes(expresstion[i]))
      suffix += expresstion[i];
    else {
      if (stack.length === 0 || expresstion[i] == "(") {
        stack.push(expresstion[i]); // 当栈为空或者字符为左括号时直接入栈
        continue;
      }
      if (["*", "/"].includes(expresstion[i])) {
        // 如果是乘或除，在栈中找出与他们同级的符号先出栈
        while (["*", "/"].includes(stack[stack.length - 1]))
          suffix += stack.pop();
        stack.push(expresstion[i]); // 同级符号已经都出栈完毕，将当前的符号入栈
      }
      if (["+", "-"].includes(expresstion[i])) {
        // 如果是加或减，在栈中找出优先级大于或等于该符号的符号
        while (
          ["+", "-"].includes(stack[stack.length - 1]) ||
          ["*", "/"].includes(stack[stack.length - 1])
        )
          suffix += stack.pop();
        stack.push(expresstion[i]); // 符合条件的符号全部出栈完毕，当前符号入栈
      }
      if (expresstion[i] === ")") {
        // 如果是右括号, 从栈中依次弹出符号，直到栈顶元素为左括号的时候结束
        while (stack[stack.length - 1] != "(") suffix += stack.pop();
        stack.pop(); // 左括号直接弹出（不需要）
      }
    }
  }
  // 判断栈中是否还有符号，有的话依次弹出
  while (stack.length != 0) suffix += stack.pop();
  return suffix;
};
console.log(InfixTosuffix(expresstion));
