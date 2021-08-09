/**
 *  给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 *
 *
 * 示例 1：
 *
 * 输入：[3,2,3]
 * 输出：3
 * 示例 2：
 *
 * 输入：[2,2,1,1,1,2,2]
 * 输出：2
 *
 *
 * 进阶：
 *
 * 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 * /

/**
 * 排序
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  var item = nums[0];
  var count1 = 0;
  var count2 = 0;
  for (var i = 0; i < nums.length; i++) {
    if (i === 0) {
      count2 = 1;
    } else if (nums[i] === nums[i - 1]) {
      count2++;
    } else {
      count2 = 1;
    }
    if (count2 > count1) {
      count1 = count2;
      item = nums[i];
    }
  }
  return item;
};

/**
 * 时间复杂度分析
 * 排序的时间复杂度为O(nlogn)，遍历数组为O(n)，因此为O(nlogn)
 *
 * 空间复杂度
 * 排序的空间复杂度为O(logn)。
 * /

/**
 * 摩尔投票法
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var count = 0;
  var current;
  for (var i = 0; i < nums.length; i++) {
    if (count === 0) {
      current = nums[i];
    }
    if (current === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return current;
};

/**
 * 时间复杂度
 * 遍历一次O(n)
 * 
 * 空间复杂度
 * O(1)
 * /
