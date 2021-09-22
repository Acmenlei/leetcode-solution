/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if(!head || !head.next) {
        return head;
    }
    let dummy = new ListNode(), list = dummy;
    while (head != null) {
        if (head.next == null || head.val != head.next.val) {
            dummy.next = head;
            dummy = dummy.next;
        }
        // 此时结果不为空且前后两个结点值相同(只要其中一个条件不满足即可跳出)
        while (head.next != null && head.val == head.next.val)
            head = head.next; // 指针后移
        head = head.next; 
    }
    dummy.next = null;
    return list.next;    
};