const Node = require("./node")

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
}
LinkedList.prototype.head = function(){
    if(this.head !== null) return this.head;
}


LinkedList.prototype.isEmpty = function() {
    return this.head === null;
}


LinkedList.prototype.insertAtHead = function(value){
    let newNode = new Node(value);
    newNode.nextEelement = this.head;
    this.head = newNode;

}


LinkedList.prototype.printElement = function(){
    let element = this.head;
    while(element !== null){
        process.stdout.write('${element,value} ->');
        element = element.nextEelement;
    }
    process.stdout.write('null\n');
}


LinkedList.prototype.deleteHead = function(){
    let element = this.head;
    this.head = element.nextElement;
}


LinkedList.prototype.getSize = function(){
    let count = 0;
    let element = this.head;
    while (element !== null){
        count++;
        element = element.nextElement
    }
    return count;
}

LinkedList.prototype.detectNumber = function(){
    let node = new Node(value);
    let element = this.head;
    while (element.next !== null){
        element = element.next
    }
}


module.exports = LinkedList;