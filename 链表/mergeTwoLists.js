// 合并两个有序链表
// 题目：将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

// 思路：使用归并排序的思想，通过比较两个链表的头节点，选择较小的节点添加到新链表中，依次进行直到两个链表都为空。

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
  // 创建一个虚拟头节点
  let dummy = new ListNode(-1)
  let current = dummy

  // 比较两个链表的节点，选择较小的节点添加到新链表中
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }
    current = current.next
  }

  // 处理剩余节点-此时的l1/l2都是链表的头节点，将current指向l1/l2即可
  if (l1 !== null) {
    current.next = l1
  } else {
    current.next = l2
  }

  // 返回虚拟头节点的下一个节点
  return dummy.next
};

