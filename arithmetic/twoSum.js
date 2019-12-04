//求两个数的和
let nums = [1,2,2,7]
let target =9
var twoSum = function(nums, target) {

  for(var i=0;i<nums.length;i++){
    var nums1 = target - nums[i]
    var index = nums.indexOf(nums1,i+1)
    if(index!=-1){
      return [i,index]
    }
  }
};
console.log(twoSum(nums, target));