class DoublyListNode {    
    constructor (val) {
        this.val = val;
        this.next = null;
    } 
}


class DoublyLinkedList {
    constructor() {
        // Init the list with 'dummy' head and tail nodes which makes 
        // edge cases for insert & remove easier.
        this.head = new DoublyListNode(-1);
        this.tail = new DoublyListNode(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    insertFront(val) {
        const newNode = new DoublyListNode(val);
        newNode.prev = this.head;
        newNode.next = this.head.next;
        
        this.head.next.prev = newNode;
        this.head.next = newNode;
    }

    insertEnd(val) {
        const newNode = new DoublyListNode(val);
        newNode.next = this.tail;
        newNode.prev = this.tail.prev;
        
        this.tail.prev.next = newNode;
        this.tail.prev = newNode;
    }

    removeFront() {
        this.head.next.next.prev = this.head;
        this.head.next = this.head.next.next;
    }  

    removeEnd() {
        this.tail.prev.prev.next = this.tail;
        this.tail.prev = this.tail.prev.prev;
    }   

    print() { 
        let curr = this.head.next;
        let s = "";
        while (curr != this.tail) {
            s+= curr.val + "->";     
            curr = curr.next;
        }
        console.log(s);
    }
}

const list = new DoublyLinkedList();

list.insertFront(10);
list.insertEnd(20);
list.insertEnd(30);
list.insertEnd(40);
list.insertEnd(50);
list.insertFront(100);

list.print();
