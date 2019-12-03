// 优先级队列

class QueueElement {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.items = []
    }

    enqueue(element, priority) {
        let queueElement = new QueueElement(element, priority)

        if (this.items == 0) {
            this.items.push(queueElement)
        } else {
            let added = false

            for (let i = 0; i < this.items.length; i++) {
                if (queueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }

            if (!added) {
                this.items.push(queueElement)
            }
        }
    }

    dequeue() {
        return this.items.shift()
    }

    front() {
        return this.items[0]
    }

    isEmpty() {
        return this.items.length == 0
    }

    size() {
        return this.items.length
    }

    toString() {
        let resultString = ''
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i].element + '-' + this.items[i].priority + ' '
        }
        return resultString
    }
}

//测试代码
let pq = new PriorityQueue()
pq.enqueue('aaa', 10)
pq.enqueue('aab', 15)
pq.enqueue('aac', 1)
pq.enqueue('aad', 180)
pq.enqueue('aae', 150)
console.log(pq.toString());

