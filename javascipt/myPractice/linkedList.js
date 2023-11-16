const Node = require("./node")
class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
}
LinkedList.prototype.isEmpty = function (){
    return this.head === null;
}
module.exports = LinkedList;