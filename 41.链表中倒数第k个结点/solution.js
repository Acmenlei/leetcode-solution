/* 快慢指针解法 */
var getKthFromEnd = function (head, k) {
  let quick = head,
    slow = head;
  while (quick && k > 0) {
    quick = quick.next;
    k--;
  }
  while (quick) {
    quick = quick.next;
    slow = slow.next;
  }
  return slow;
};

/* 改造成双链表的解法 */
var getKthFromEnd = function (head, k) {
  let parent;
  while (head.next != null) {
    // 到最后一个元素停止
    parent && (head.prior = parent); // 改造成双向链表
    parent = head;
    head = head.next;
  }
  parent && (head.prior = parent);
  while (k != 1) {
    // 这里等于1是因为上面循环的条件是在head.next为null时就停了
    head = head.prior; // 从后往前找
    k--;
  }
  return head;
};
