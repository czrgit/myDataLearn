var S = "a#c"
var T = "b"
var getStr = function (str) {
  let stack = []
  for (let item of str) {
    if (item === '#') {
      if (stack.length !== 0) {
        stack.pop()
      }
    } else {
      stack.push(item)
    }
  }
  return stack.join('')
}
var backspaceCompare = function (S, T) {
  return getStr(S) === getStr(T)
};
console.log(backspaceCompare(S, T));