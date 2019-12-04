// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
var nums = [4, 2, 2, 2, 2, 0]
// var majorityElement = function (nums) {
//   var count = 1;
//   var group = nums[0];
//   for (var i = 1; i < nums.length; i++) {
//     //当前队伍人数为零，记录现在遇到的人的队伍号
//     if (count == 0) {
//       count = 1;
//       group = nums[i];
//       continue;
//     }
//     //现在遇到的人和当前队伍同组，人数加 1
//     if (nums[i] == group) {
//       count++;
//       //遇到了其他队伍的人，人数减 1
//     } else {
//       count--;
//     }
//   }
//   return group;
// };
var majorityElement = function (nums) {
  var obj = {},res
  nums.forEach(function (num) {
    if (!obj[num]) {
      obj[num] = 1
    } else {
      obj[num]++
    }
    if (obj[num] > nums.length / 2) {
      res =  num
    }
  })
  return res
};
console.log(majorityElement(nums));