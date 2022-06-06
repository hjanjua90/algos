// SList: Max/Min/Average
// Create three methods necessary to calculate the maximum, minimum, and average values in a Singly Linked List. 


class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    condensedMMA(){
        let max = this.head.val;
        let min = this.head.val;
        let sum = 0;
        let count = 0;

        let runner = this.head;

        while(runner != null){
            if(max < runner.val){
                max = runner.val
            }
            if(min > runner.val){
                min = runner.val
            }
            sum += runner.val;
            count++;
            runner = runner.next;
        }
        let avg = sum / count;
        return {
            "max": max,
            "min": min,
            "avg": avg
        }
    }
}