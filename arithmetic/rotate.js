//给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
var nums = [-1, -100, 3, 99], k = 2
// var rotate = function (nums, k) {
//   for (var i = 0; i < k; i++) {
//     var num = nums[nums.length - 1]//拿到最后一个元素
//     nums.splice(nums.length - 1, 1)//删除最后的一个元素
//     nums.unshift(num)
//   }
//   console.log(nums);
// };
// rotate(nums, k)

var rotate = function (nums, k) {
    var num = nums.splice(nums.length-k,nums.length)
    nums.splice(0,0,...num)
  }

rotate(nums, k)