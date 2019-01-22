class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    
    constructor(value){

        this.root=new Node(value);
    }

    add(value){
        let node=new Node(value);
        let current=this.root;

        while(current){
            if(value<current.value){
                if(!current.left){
                    current.left=node;
                    return;
                }
                else{
                    current=current.left;
                }
            }

            else{
                if(!current.right){
                    current.right=node;
                    return;
                }
                else{
                    current=current.right;
                }
            }
        }

    }

}