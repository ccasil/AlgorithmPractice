function Node(value){
    this.val = value ;
    this.next = null ;
}

function SLQueue() {
    var head= null;
    var tail = null;

    // add the given value to end of our queue
    this.enqueue = function(value){
        var newNode = new Node(value);

        if (!head){
            head = newNode;
            tail = newNode;
        }
        else {
            tail.next = newNode;
            tail = tail.next;
        }
        return this;
    }

    // check if queue contains no values
    this.isEmpty = function(){
        if (!head){
            return true;
        } else {
            return false;
        }
    }

    this.displayQueue = function(){
        if (!head){
            console.log(`This queue is empty.`);
        }
        else {
            var runner = head;
            var str = "";
            while(runner){
                str += runner.val + " -> ";
                runner = runner.next;
            }
            str += "null";
            console.log(str);
        }
        return this;
    }
}

var q = new SLQueue();
console.log(q.isEmpty());
q.enqueue(1).enqueue(2).enqueue(3).enqueue(4).displayQueue();
console.log(q.isEmpty());
