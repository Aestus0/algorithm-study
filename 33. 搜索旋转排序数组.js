/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var low = 0;
    var high = nums.length - 1;    

    while(low <= high) {
        var middle = Math.floor((low + high) /2);
        if (nums[middle] === target) {
            return middle;
        }
        if (nums[middle]< nums[0]) {
            if(nums[middle] < target && target < nums[0]) {
                low = middle + 1;
            } else {
                high = middle - 1;
            }
        } else {
            if (nums[middle]> target && target >= nums[0]) {
                high = middle -1;
            } else {
                low = middle + 1;
            }
        }
    }
    return -1
};
