/*
给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。



示例 1：

输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
示例 2：

输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"
示例 3：

输入：s = ""
输出：0


提示：

0 <= s.length <= 3 * 104
s[i] 为 '(' 或 ')'
 */


/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  var stack = [];
  var maxLength = 0;
  var length = 0;
  var x = null;
  for (var i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (c === '(') {
      stack.push(x === null ? i : x);
      x = null;
    } else {
      var item = stack.pop();
      if (item !== undefined) {
        x = item;
        length = i - item + 1;
        if (maxLength < length) {
          maxLength = length;
        }
      } else {
        x = null;
        length = 0;
      }
    }
  }
  return maxLength;
};