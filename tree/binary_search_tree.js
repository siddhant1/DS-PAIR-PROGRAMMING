class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    
    constructor(value){

        this.arr=[];
        this.root=new Node(value);
    }

    getRoot(){
        return this.root;
    }

    getParent(data){

        if(this.root.left.data==data || this.root.right.data==data){
            return this.root;
        }

        BinarySearchTree.prototype.inorder(node.left);
        console.log(node.data);
        if(node.left.data==data || node.right.data==data){
            return node;
        }
        else{
            BinarySearchTree.prototype.inorder(node.right);
        }
        

    }

    remove(data){
        // let node=this.root;
        // BinarySearchTree.prototype.inorder(node.left);
        //        console.log(node.data);
        //        if(node.data==data){
        //            if(!node.left && !node.right){    //case for leaf node
        //               let parent= BinarySearchTree.prototype.getParent(node.data);
        //               if(parent.left.data==node.data){
        //                   parent.left=null;
        //               }

        //               if(parent.right.data==node.data){
        //                   parent.right=null;
        //               }
        //            }

        //            else if(node.left && node.right){ //case for two subtrees

        //             BinarySearchTree.prototype.inorder(node.left);
        //             console.log(node.data);
        //             this.arr.push(node);
        //             BinarySearchTree.prototype.inorder(node.right);


        //             //find inorder successor
        //             let successor=null;
        //             for(let i=0;i<this.arr.length;i++){
        //                 if(this.arr[i].data==node.data){
        //                     successor=this.arr[i+1];
        //                 }
        //             }

        //             let parent=BinarySearchTree.prototype.getParent(successor.data);
        //             parent=successor;
        //             BinarySearchTree.prototype.remove(successor.data);

        //            }

        //            else{  //case for 1 subtree
        //            let child= node.left?node.left:node.right;
        //            if(node.left){
        //                node.left=null;
        //            }
        //            else{
        //             node.right=null;
        //            }
        //            node=child;

        //            }


        //        }
        //        else{
        //         BinarySearchTree.prototype.inorder(node.right);
        //        }
        
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
    console.log(bst.getParent(25).data);
    console.log(bst.contains(78));
    bst.remove(78);
    
    



