/**
给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 
请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 

示例 1：

输入：nums = [1,2,0]
输出：3
示例 2：

输入：nums = [3,4,-1,1]
输出：2
示例 3：

输入：nums = [7,8,9,11,12]
输出：1
*/

var getValue = function (value) {
  if (value < 0) {
    return -value;
  }
  return value;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      nums[i] = nums.length + 1;
    }
  }

  for (var i = 0; i < nums.length; i++) {
    var value = getValue(nums[i]);
    if (value >= 1 && value <= nums.length && nums[value - 1] > 0) {
      nums[value - 1] = -nums[value - 1];
    }
  }

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return nums.length + 1;
};


/**
 * 根据hash表查询改造而来
 * 
 * 假设数组长度是n
 * 
 * 首先得到的正数只可能在1到n+1之间，那么小于等于0和大于n的数就不对结果产生影响。
 * 于是我们将所有小于0的数都转换成n+1
 * 再遍历数组，取第i位数的绝对值，如果绝对值|nums[i]|大于等于1小于等于n则将nums[|nums[i]|-1]的值变成负数记录下来
 * 最后遍历数组，找到第i位数大于0，则结果位i+1;否则结果位n+1;
 * /

var swapX = function (x, nums, i) {
  if (x !== i + 1 && x > 0 && x <= nums.length && x !== nums[x - 1]) {
    var y = nums[x - 1];
    nums[x - 1] = x;
    nums[i] = y;
    swapX(y, nums, i);
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    var x = nums[i];
    if (x !== i + 1) {
      swapX(x, nums, i);
    }
  }

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};


/**
 * 假设数组长度为n
 * 
 * 首先看结果应该在1到n+1之间
 * 那么便利数组，下标为i，将值为i+1的数组元素与nums[i]交换位置
 * 最后遍历数组，取第一个下标i，对应的值不为i+1，则结果为i+1
 * 
 */
