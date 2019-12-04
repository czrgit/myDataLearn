// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

var nums = [0,0,0,1,0,2,0,5,0,3,12]
var moveZeroes = function(nums) {
  var j = 0
  for(var i = 0; i < nums.length; i++){
    if(nums[i]===0&&j<nums.length){
      nums.splice(i,1)
      nums.push(0)
      j++//标志往后加0
      console.log(j);
      i--//删除当前的0，把i减一
    }
  }

  console.log(nums);
};
moveZeroes(nums)