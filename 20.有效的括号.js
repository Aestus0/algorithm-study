/* 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。


示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true


提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  var left = ['{','(', '['];
  var right = ['}', ')', ']'];
  var stack = [];
  for(var i = 0; i< s.length; i++) {
      var c = s.charAt(i);
      if (left.includes(c)) {
          stack.push(c);
      } else if (right.includes(c)) {
          var item = stack.pop();
          switch(item) {
              case '{':
                  if (c!=='}') {
                      return false;
                  }
                  break;
              case '(':
                  if (c !== ')') {
                      return false;
                  }
                  break;
              case '[':
                  if( c !== ']') {
                      return false;
                  }
                  break;
              default:
                  return false;
          }
      }
      if (i === s.length - 1 && stack.length > 0)  {
          return false;
      }
  } 
  return true;
};