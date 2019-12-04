//z最小栈元素
var MinStack = function () {
  this.arr = []
  this.brr = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.arr.push(x)
  if (this.brr.length == 0 || this.brr[this.brr.length - 1] >= x) {
    this.brr.push(x)
    console.log(this.brr);
  } else {

    this.brr.push(this.brr[this.brr.length - 1])
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.arr.pop()
  this.brr.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // var min = Math.min.apply(null, this.arr);
  return this.brr[this.brr.length - 1]
};


//Your MinStack object will be instantiated and called as such:
var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
console.log(obj.getMin());
obj.pop()
console.log(obj.top());
console.log(obj.getMin());

