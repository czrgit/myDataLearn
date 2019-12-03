//用对象实现栈的数据结构
//后进先出

class Stack {
    constructor() {
        this.count = 0
        this.items = {}
    }

    isEmpty() {
        return this.count === 0
    }

    push(element) {
        this.items[this.count] = element
        this.count++
    }

    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count-1]
    }
    clear(){
        this.count = 0
        this.items = {}
    }
    size() {
        return this.count
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[0]}`
        for(let i =1;i<this.count;i++){
            objString =`${objString},${this.items[i]}`
        }
        return objString
    }
}

const stack = new Stack()
console.log(stack.isEmpty());
stack.push(1)
stack.push(8)
stack.push(2)
stack.push(3)
console.log(stack.size());
console.log(stack.isEmpty());
console.log('====================');
console.log(stack.pop());
// console.log(stack.size());
console.log(stack.peek());
console.log(stack.toString());
stack.clear()
console.log(stack.size());

console.log(stack.toString());

console.log('=============');

console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);
