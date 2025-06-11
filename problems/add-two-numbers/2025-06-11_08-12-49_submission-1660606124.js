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
var addTwoNumbers = function (l1, l2) {
  let arr1 = [];
  let arr2 = [];
  let curr1 = l1;
  let curr2 = l2;

  while (curr1) {
    arr1.push(curr1.val);
    curr1 = curr1.next;
  }

  while (curr2) {
    arr2.push(curr2.val);
    curr2 = curr2.next;
  }

  let num1 = Number(arr1.join(""));
  let num2 = Number(arr2.join(""));
  let sum = num1 + num2;

  let dummy = new ListNode(0);
  let current = dummy;
  let digits = String(sum).split('').map(Number);

  for (let digit of digits.reverse()) {
    current.next = new ListNode(digit);
    current = current.next;
  }

  return dummy.next;
};


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}