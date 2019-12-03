//用数组实现栈的数据结构
//后进先出



class Stack {
    constructor() {
        this.items = []
    }

    //添加元素到栈顶
    push(element) {
        this.items.push(element)
    }

    //删除栈里最后元素,并把这个元素返回出去
    pop(element) {
        return this.items.pop()
    }

    //查看栈顶元素，也就是最后一个元素
    peek() {
        return this.items[this.items.length - 1]
    }

    //查看栈是否为空
    isEmpty() {
        return this.items.length === 0
    }

    //查看栈的大小
    size() {
        return this.items.length
    }

    //清空栈
    clearn() {
        this.items = []
    }
}
module.exports = Stack
