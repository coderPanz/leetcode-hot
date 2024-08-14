// 删除链表的倒数第 N 个结点
// 题目：给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]


// 思路：
// 虚拟头结点：创建一个虚拟的头结点 dummy，它的 next 指向原链表的头结点。这样做可以简化删除头结点的处理。
// 移动指针：首先将 first 指针移动 n + 1 步。这样 second 指针与 first 指针之间的距离始终保持为 n。
// 同步移动：同时移动 first 和 second 指针，直到 first 到达链表的末尾。此时，second 指针的位置就是待删除节点的前一个节点。
// 删除操作：将 second.next 更新为 second.next.next，实现删除操作。
// 返回结果：返回虚拟头结点的 next，即实际的头结点。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
// 创建虚拟头结点，处理删除头结点的情况
  let dummyHead = new ListNode(0)
  dummyHead.next = head

  // 初始化快慢指针
  let fast = dummyHead
  let slow = dummyHead

  // fast 先向前移动 n+1 步
  for (let i = 0; i <= n; i++) {
    fast = fast.next
  }

  // 同时移动 fast 和 slow，直到 fast 到达末尾
  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }

  // 删除 slow 的下一个节点
  slow.next = slow.next.next

  // 返回虚拟头结点的下一个节点
  return dummyHead.next
}

