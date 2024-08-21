/**
 * function ListNode(val, next){
 *  this.val = (val === undefined ? 0 :val)
 *  this.next = (next === undefined ? null : next)
 * }
 * 
 *  @param {ListNode} Headers
    @return {ListNode}
 */

var middleNode = function(head){
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}

