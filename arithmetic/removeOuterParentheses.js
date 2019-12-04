//删除最外层的括号
// ""，"()"，"(())()" 和 "(()(()))"
var str = '(()())(())(()(()))'
// var str = '(()())(())'
// var str = '()()'
var removeOuterParentheses = function (S) {

  var arr = []
  var str = ''
  var start = 0
  for (var i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      arr.push('(')
    } else {
      arr.pop()
      if (arr.length == 0) {
        str += S.substring(start + 1, i)
        console.log(str);
        start = i + 1
      }
    }
  }
  return str

};
console.log(removeOuterParentheses(str));