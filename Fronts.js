// add front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
// Slingly-linked lists add front, remove front, front

class SLLNode{
    // consturctor
    addFront(value){
        this.value = val;
        this.next= null;
    }
}

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
}