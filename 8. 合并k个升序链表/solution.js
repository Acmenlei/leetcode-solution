/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let Lc, curr = new ListNode();
    lists = delnullLink(lists);
    if(!lists[0]) return curr.next;
    Lc = curr;
    lists = sort(lists);
    while(lists.length > 1) {
        curr.next = lists[0];
        curr = curr.next;
        lists[0] = lists[0].next;
        lists = sort(lists);
    }
    // 此时只剩下一个链表
    curr.next = lists[0];
    return Lc.next;
}
var delnullLink = function (lists) {
    if(lists.length == 0) {
        return lists;
    }
    lists = lists.filter(link => link != null)
    return lists;
}
var sort = function (lists) {
    if(lists[0] == null) {
        lists.splice(0, 1);
    }
    let min = lists[0];
    let k = 0;
    for(let i in lists) {
        if(lists[i].val < min.val) {
            min = lists[i];
            k = i;
        }
    }
    return swap(lists, 0, k);
}
var swap = function (lists, p, q) {
    let temp = lists[p];
    lists[p] = lists[q];
    lists[q] = temp;
    return lists;
}