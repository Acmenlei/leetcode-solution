var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let list = dummy;
  let crease = 0;
  while (l1 != null || l2 != null) {
    let val1 = 0,
      val2 = 0;
    if (l1 != null) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2 != null) {
      val2 = l2.val;
      l2 = l2.next;
    }
    if (crease > 0) {
      dummy.next = new ListNode((val1 + val2 + crease) % 10);
      val1 + val2 + crease < 10 && (crease = 0);
    } else {
      dummy.next = new ListNode((val1 + val2) % 10);
    }
    val1 + val2 >= 10 && (crease = 1);
    dummy = dummy.next;
  }
  crease > 0 && (dummy.next = new ListNode(crease));
  return list.next;
};
