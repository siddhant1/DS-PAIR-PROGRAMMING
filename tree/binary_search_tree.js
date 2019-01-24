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

        inorder(node){
            if(node){
               
              //inorder(node.left);
              BinarySearchTree.prototype.inorder(node.left);
               console.log(node.data);
               BinarySearchTree.prototype.inorder(node.right);
            }
         }

         preorder(node){
            if(node){
            
                console.log(node.data);
                BinarySearchTree.prototype.preorder(node.left);
                 BinarySearchTree.prototype.preorder(node.right);
              }

         }

         postorder(node){
            if(node){
            
               
                BinarySearchTree.prototype.postorder(node.left);
                 BinarySearchTree.prototype.postorder(node.right);
                 console.log(node.data);
              }

         }


    }

    let bst=new BinarySearchTree(40);
    bst.add(25);
    bst.add(10);
    bst.add(32);
    bst.add(78);
    console.log(bst.contains(32));
    bst.inorder(bst.getRoot());
    bst.preorder(bst.getRoot());
    bst.postorder(bst.getRoot());
    



