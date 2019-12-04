//判断有效括号
var s = ""
var isValid = function (s) {
  var arr = []
  if (s.length % 2 == 0) {
    if (s.length == 0) {
      return true
    }
    for (var i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === "[") {
        arr.push(s[i])
      } else {
        if (arr[arr.length - 1] === '(' && s[i] === ')' || arr[arr.length - 1] === '[' && s[i] === ']' || arr[arr.length - 1] === '{' && s[i] === '}') {
          arr.pop()
        } else {
          arr.push(s[i])
        }
      }
    }
    if (arr.length == 0) {
      return true
    }
    return false
  }
  return false
};
console.log(isValid(s));