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

            console.log(currentNode.data+"=>");
            for(let i=0,length=currentNode.children.length;i<length;i++){
                traverse(currentNode.children[i]);
            }
        })(this.root);
    }
}

var tree = new Tree('one');
 
//dummy insertions
//to check dfs
tree.root.children.push(new Node('two'));
tree.root.children[0].parent = tree;
 
tree.root.children.push(new Node('three'));
tree.root.children[1].parent = tree;
 
tree.root.children.push(new Node('four'));
tree.root.children[2].parent = tree;
 
tree.root.children[0].children.push(new Node('five'));
tree.root.children[0].children[0].parent = tree.root.children[0];
 
tree.root.children[0].children.push(new Node('six'));
tree.root.children[0].children[1].parent = tree.root.children[0];
 
tree.root.children[2].children.push(new Node('seven'));
tree.root.children[2].children[0].parent = tree.root.children[2];

tree.traverseDF();