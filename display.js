// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!
// SLL=Singly Linked List

class SLLNode{
    // consturctor
    addFront(value){
        this.value = val;
        this.next= null;
    }
}
// hello
class SLL{
    constructor(){
        // head = first node
        this.head = null;
    }
    // built in methods to add, remove ,etc
    // add
    addFront(value){
        // passing in a value and creating new node
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        thisHead = newNode;
        return this.head; 
    }
    // remove node
    // Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront(){
        // need a if statement if the list is empty.
        if(this.head == null){
            return this.head;
        }
        var removeFront = this.head;
        this.head =removeFront.next;
        removeNode.next = null;
        return this.head;
    }
    // Front
    // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    
    front(){
        // if list is empty
        if(this.head == null){
            return null;
        }else{
            return this.head.value
        }
    }

    display(){
        var list = ""
        // edgecase = empty list
        if (this.head == null){
            return list;
        }
        // adding one node
        list += this.head.value;
        // second node
        var runner = this.head.next;
        while(runner != null){
            list +="," + runner.value;
            runner = runner.next;
        }
        return list;
    }
}
var mySLL = new SLL();
mySLL.addFront(1);
console.log(mySLL.display());

