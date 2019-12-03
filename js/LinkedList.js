//链表
class Node {//节点类
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    append(data) {
        //1.创建新节点
        const newNode = new Node(data)
        //2.判断是否添加第一个节点
        if (this.head === null) {//第一个节点
            this.head = newNode
        } else {//第二个节点
            //找到最后一个节点
            let current = this.head
            while (current.next) {
                current = current.next
            }

            //最后节点next指向新的节点
            current.next = newNode
        }
        //3.把length加一
        this.length += 1


    }

    insert(position, data) {
        //1.对position进行越界判断
        if (position < 0 || position > this.length) return false

        //2.创建node节点
        const newNode = new Node(data)

        //3.判断插入位置是否第一个
        if (position == 0) {
            newNode.next = this.head//交换位置
            this.head = newNode
        } else {
            let index = 0 //用于寻找position的标识
            let current = this.head //保存被添加元素的next
            let previous = null //保存被添加元素的前一个next
            while (index++ < position) {//找到需要添加的位置
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode

        }

        //4.length加一
        this.length += 1
        return true
    }

    toString() {
        let current = this.head
        let listString = ''

        while (current) {
            listString += current.data + ' '
            current = current.next
        }

        return listString
    }
}

const l = new LinkedList()
l.append('aaa')
l.append('bbb')
l.append('ccc')
l.insert(1,'abc')
console.log(l.toString());
