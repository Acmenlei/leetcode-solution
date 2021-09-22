/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function (head, k) {
    if (!head || !head.next || k == 0) {
        return head;
    }
    let i = 1, curr = head, tail;
    while (curr.next != null) {
        tail = curr;
        curr = curr.next;
        i++;
    }
    curr.next = head; // 先转成循环链表
    k = k % i;
    while (k + 1 != 0 && (i + 1 - k) != 0) {
        i--;
        tail = curr;
        curr = curr.next;
    }
    head = curr;
    tail.next = null;
    return head;
};