// 两数相加
// 题目：给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。请你将两个数相加，并以相同形式返回一个表示和的链表。你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807

// 初始化指针和进位：使用指针分别指向两个链表的头节点，初始化一个进位变量 carry 为 0。
// 逐位相加：遍历两个链表，逐位相加对应节点的值和进位，计算新的节点值和新的进位。
// 处理剩余节点和进位：如果一个链表遍历完了，但另一个链表还有剩余节点，继续处理剩余节点。如果遍历完所有节点后还有进位，需要增加一个新的节点。

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
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(0);  // 创建一个虚拟头节点
  let current = dummy;          // 指针指向当前节点
  let carry = 0;                // 初始化进位为0

  // 遍历两个链表，直到两个链表都为空
  while (l1 !== null || l2 !== null) {
    let x = (l1 !== null) ? l1.val : 0;  // 获取l1当前节点的值
    let y = (l2 !== null) ? l2.val : 0;  // 获取l2当前节点的值
    let sum = carry + x + y;             // 计算当前位的和

    carry = Math.floor(sum / 10);        // 更新进位
    current.next = new ListNode(sum % 10); // 创建新节点存储当前位的值
    current = current.next;              // 移动指针到新节点

    if (l1 !== null) l1 = l1.next;       // 移动l1指针到下一个节点
    if (l2 !== null) l2 = l2.next;       // 移动l2指针到下一个节点
  }

  // 如果最后还有进位，创建新节点存储进位
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummy.next;  // 返回结果链表的头节点
};

// Example usage:
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// 创建两个链表 [2, 4, 3] 和 [5, 6, 4]，表示数字 342 和 465
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const result = addTwoNumbers(l1, l2);

// 打印结果链表
let current = result;
while (current !== null) {
  // console.log(current.val);
  current = current.next;
}
// Output: 7 0 8

console.log(18 % 10)