// 两两交换链表中的节点
// 题目：给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]


// 思路：
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  // 创建一个虚拟头结点
  const dummy = new ListNode(0)
  dummy.next = head

  let prev = dummy // prev 指针指向虚拟头结点

  while (head && head.next) {
    let first = head
    let second = head.next

    // 进行交换
    prev.next = second
    first.next = second.next
    second.next = first

    // 移动 prev 和 head 指针
    prev = first
    head = first.next
  }

  return dummy.next
};