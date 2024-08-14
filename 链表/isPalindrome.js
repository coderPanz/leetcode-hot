// 回文链表
// 题目：给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

// 输入：head = [1,2,2,1]
// 输出：true

// 思路：快慢指针+链表反转，不占用额外空间。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fast = 0
  let slow = 0
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  // 反转数组后半部分
  let prev = null
  while (slow !== null) {
    let nextNode = slow.next // 保存下个节点信息
    slow.next = prev // 下个节点置空
    prev = slow
    slow = nextNode
  }

  // 比较上半链表和下半链表
  let left = head
  let right = prev // 上个循环退出时slow刚好为空，prev在slow前一个正好是链表最后的节点，也就是下半链表的起点。
  while (right !== null) {
    if (left.val !== right.val) return false
    left = left.next
    right = right.next
  }

  return true
}
