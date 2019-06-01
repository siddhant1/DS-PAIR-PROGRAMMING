class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(value){
        this.head=new Node(value);
        this.length=1;
    }

    push(value) {
        let node = new Node(value);
        if (this.length === 0) {
          this.head = node;
          this.length++;
          return node;
        } else {
          let current = this.head;
          while (current.next) {
            current = current.next;
          }
          current.next = node;
          this.length++;
          return node;
        }
      }

    print() {
        let values = [];
        let current = this.head;
        while (current) {
          values.push(current.value);
          current = current.next;
        }
        return values.join(" --> ");
      }

      detectLoop(){
        //floyd's algorithm to detect loop
        let ptr1=this.head;
        let ptr2=this.head;
        let isLoop=false;
        while(ptr1!=null && ptr2!=null && ptr2.next!=null){
          ptr1=ptr1.next;
          ptr2=ptr2.next.next;
          if(ptr1===ptr2){
            isLoop=true;
          } 
        }
        if(isLoop===true){
          console.log('loop detected..');
        }
        else{
          console.log('loop not detected..');
        }
        
      }
}

let ll= new LinkedList(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);
ll.detectLoop();
console.log(ll.print());