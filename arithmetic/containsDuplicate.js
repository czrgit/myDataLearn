/*
* 给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
*/
var nums = [1,2,1]
var containsDuplicate = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    if (i !== nums.lastIndexOf(nums[i])) {
      return true
    }
  }
  return false
};
console.log(containsDuplicate(nums));