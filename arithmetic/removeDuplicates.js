// 从排序数组中删除重复项
let nums = [0, 0, 0, 0, 0]
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// let nums = [1, 2, 3]
// let nums = [1, 2, 1, 2]

var removeDuplicates = function (nums) {
  if (nums.length !== 0) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] === nums[j] && j !== i) {
          nums.splice(j, 1)
          j--
        }
      }
    }
    console.log(nums);
    return nums.length
  }

  return 0
};
console.log(removeDuplicates(nums));