/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    if ( !l1 || !l2 ) return l1 ? l1 : l2;
    let Lc, curr = new ListNode();
    Lc = curr;
    while(l1 != null && l2 != null) {
        if(l1.val > l2.val ) { curr.next = l2; l2 = l2.next; }
        else { curr.next = l1; l1 = l1.next; }
        curr = curr.next;
    }
    curr.next = l2 ? l2 : l1;
    return Lc.next;
};