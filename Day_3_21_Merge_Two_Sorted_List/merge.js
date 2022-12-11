function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

var a1 = new ListNode(1);
var a2 = new ListNode(2);
var a3 = new ListNode(3);

a1.next = a2;
a2.next = a3;

var b1 = new ListNode(1);
var b2 = new ListNode(3);
var b3 = new ListNode(4);

b1.next = b2;
b2.next = b3;

console.log(mergeTwoLists(a1, b1));

/*
Time complexity: O(M+N). M is list1 and N is list2
Space  complexity: O(M+N) M and N are the function calls to the stack
*/
