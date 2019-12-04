//给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
var nums = [2, 2, 1]

var singleNumber = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    //通过判断从尾部开始搜索和头部开始搜索的下标和i的值是否相同，不同就是不是一次出现的元素
    if (i === nums.lastIndexOf(nums[i]) && i === nums.indexOf(nums[i])) {
      return nums[i]
    }
  }
};
console.log(singleNumber(nums));