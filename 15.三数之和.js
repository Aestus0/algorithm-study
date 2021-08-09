// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 示例 2：

// 输入：nums = []
// 输出：[]
// 示例 3：

// 输入：nums = [0]
// 输出：[]
//

// 提示：

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const results = [];
  // 先排序
  var sortedNums = nums.sort((a, b) => a - b);

  if (sortedNums.length < 3) {
    return [];
  }

  var pre;
  for (var i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0) {
      pre = sortedNums[i - 1];
    }
    // 判断是否和前一数字相同
    var first = sortedNums[i];
    if (pre === first) {
      continue;
    }
    var left = i + 1;
    var right = sortedNums.length - 1;
    // 当确定前两个整数的情况下，只存在唯一整数使得相加为0
    // 双指针，左指针从前往后，右指针从后往前
    while (left < right) {
      if (left - 1 !== i && sortedNums[left] === sortedNums[left - 1]) {
        left++;
        continue;
      }
      if (
        right + 1 !== sortedNums.length &&
        sortedNums[right] === sortedNums[right + 1]
      ) {
        right--;
        continue;
      }
      var result = sortedNums[left] + sortedNums[right] + first;
      if (result > 0) {
        right--;
        continue;
      } else if (result === 0) {
        results.push([first, sortedNums[left], sortedNums[right]]);
      }
      left++;
    }
  }

  return results;
};
