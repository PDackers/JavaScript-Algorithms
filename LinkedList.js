class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            this.length++;
        }
        this.tail = newNode;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        let previous = this.temp;
        while (temp.next) {
            previous = temp;
            temp = temp.next;
        }
        this.tail = previous;
        if (this.tail !== undefined) {
            this.tail.next = null;
        }
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        const temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    set(index, value) {
        const temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index === 0) {
            return this.unshift(value);
        }
        if (index === this.length) {
            return this.push(value);
        }
        if (index < 0 || index >= this.length) {
            return false;
        }
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        const before = this.get(index - 1);
        const temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let previous = null;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = previous;
            previous = temp;
            temp = next;
        }
        return this;
    }
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4);
myLinkedList.push(2);
