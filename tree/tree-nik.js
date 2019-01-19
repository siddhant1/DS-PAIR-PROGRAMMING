class Node{
    constructor(data){
        this.data=data;
        this.parent=null;
        this.children=[];
    }
}

class Tree{

    constructor(data){
        this.root= new Node(data);
    }

    traverseDF(){
        (function traverse(currentNode){

            console.log(currentNode+"=>");
            for(let i=0,length=currentNode.children.length;i<length;i++){
                traverse(currentNode.children[i]);
            }
        })(this.root);
    }
}