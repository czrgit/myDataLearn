// 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
var  nums = [3,2,2,3,0,0], val = 3
var removeElement = function(nums, val) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i,1)
      i--
    }
  }
  return nums.length
};
console.log(removeElement(nums, val));