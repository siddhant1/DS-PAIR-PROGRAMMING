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

    getRoot(){
        return this.root;
    }


    isBST(node){   //Q1. check if a given binary tree is BST or not

        if(!node){
            return true;
        }
        if((node.left!=null && node.left.data>node.data) || (node.right!=null && node.right.data<node.data)){
            return false;
        }
        if(!BinarySearchTree.prototype.isBST(node.left) || !BinarySearchTree.prototype.isBST(node.right)){

            return false;
        }

        return true;
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

      isSibling(val1,val2,current){
          //let current=this.root;
          console.log('current '+current.data);
          while(current && current.left && current.right){
            if(current.left.data==current.right.data){
                return true;
            }
            else{
                if(!current.left){
                    BinarySearchTree.prototype.isSibling(val1,val2,current.left);
                }
                else{
                    BinarySearchTree.prototype.isSibling(val1,val2,current.right);
                }
                
            }
          }
          return false;

          
      }

    }

    let bst=new BinarySearchTree(40);
    bst.add(25);
    bst.add(10);
    bst.add(32);
    bst.add(78);
    console.log(bst.isBST(bst.getRoot()));  
    let bst2=new BinarySearchTree(2);
    bst2.add(1);
    bst2.add(3);
    // console.log(bst2.getRoot());
    console.log(bst2.isSibling(1,3,bst2.getRoot()));
 