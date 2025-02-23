const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    let counter = 0;
    const countSize = (current) => {
      if (current.next) {
        countSize(current.next);
      }
      counter++;
    };
    countSize(this.head);
    return counter;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }

    return this.head;
  }

  dequeue() {
    const deletedNode = this.head.value;
    this.head = this.head.next;
    return deletedNode;
  }
}

module.exports = Queue;
