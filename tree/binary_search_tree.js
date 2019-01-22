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

    contains(value){
        let current=this.root;

        if(value==this.root.data){
            return true;
        }
        while(current){
            if(value==current.data){
                return true;
            }
                else{
                    if(value<current.data){
                        if(!current.left){
                            return false;
                        }
                        else{
                            current=current.left;
                        }
                    }

                    else if(value>current.data){
                           if(!current.right){
                               return false;
                           }
                           else{
                               current=current.right;
                           }

                    }
                }

            }
        }

        add(value){
            let node=new Node(value);
            let current=this.root;
    
            while(current){
                if(value<current.data){
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

    let bst=new BinarySearchTree(1);
    bst.add(2);
    bst.add(5);
    console.log(bst.contains(2));



