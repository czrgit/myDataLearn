// 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。
//
// 给定一个数字 n，找出可形成完整阶梯行的总行数。
var arrangeCoins = function (n) {
  if(n==0){
    return 0
  }else if (n == 1){
    return 1
  }
  var len = Math.floor(n / 2)
  console.log(i);
  // if(limit<len){
  //   return len - 1
  // }

};
console.log(arrangeCoins(2));