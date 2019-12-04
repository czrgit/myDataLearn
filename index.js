const Stack = require('./data/stack-array')
const stack = new Stack()

console.log(stack.isEmpty());
stack.push(8)
stack.push(5)
// console.log(stack.peek());

stack.push(11)
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());

//十进制转二进制
function decimalToBinary(decNumber) {
    const remStack = new Stack()
    let number = decNumber
    let rem
    let binaryString = ''

    while (number > 0) {
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number / 2)
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }
    return binaryString
}

function baseConverter(decNumber, base) {
    const remStack = new Stack()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decNumber
    let rem
    let binaryString = ''
    if (!(base >= 2) && base <= 36) {
        return ''
    }
    while (number > 0) {
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }

    while (!remStack.isEmpty()) {
        binaryString += digits[remStack.pop()]
    }
    return binaryString
}

console.log('------');
console.log(decimalToBinary(333));
console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
console.log(baseConverter(100345, 35));
