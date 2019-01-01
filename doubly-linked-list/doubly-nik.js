class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev=null;
  }
}

class DoublyLinkedList{
    constructor(value){
        this.head= new Node(value);
        this.tail=this.head;
        this.length=1;
    }

    push(value){
        let node= new Node(value);
        if(!this.head){
            this.head=node;
            this.tail=this.head;
            this.length=1;
            
        }
        else{
            node.prev=this.tail;
            this.tail.next=node;
            this.tail=node;
            this.length++;
        }

        return this;
    }

    pop(){

        if(this.length==0){
            return null;
        }

        else if(this.length==1){
            this.head=null;
            this.tail=null;
            this.length--;
            return this.head;
        }
        else{

            let node=this.tail;
            this.tail=this.tail.prev;
            this.tail.next=null;
            this.length--;
            return node;
        }

    }

    printRev(){

        let values = [];
        let current = this.tail;
        while (current) {
          values.push(current.value);
          current = current.prev;
        }
        return values.join(" <--> ");
    }

    print() {
        let values = [];
        let current = this.head;
        while (current) {
          values.push(current.value);
          current = current.next;
        }
        return values.join(" <--> ");
      }
}

let  doubly= new DoublyLinkedList(1);
console.log(doubly.print());
console.log(doubly);
doubly.push(3).push(4);
console.log(doubly);
doubly.pop();
doubly.push(5).push(6);
console.log(doubly.printRev());


