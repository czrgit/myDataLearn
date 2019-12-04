/*给定一个 n × n 的二维矩阵表示一个图像。

将图像顺时针旋转 90 度。

说明：

你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。*/

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

var rotate = function (matrix) {
  var str = ''
  var len = matrix.length - 1;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = matrix.length - 1; j >= 0; j--) {
      str += matrix[j][len]
    }
    --len;
  }
  len = matrix.length - 1
  for (var i = len; i >= 0; i--) {
    
  }
  console.log(str);
};

rotate(matrix)