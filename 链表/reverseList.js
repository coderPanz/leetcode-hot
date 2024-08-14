// 返转链表
// 题目：给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]

// 反转数组思路：
// - 定义prev = null，current = 当前节点，prev始终是current的前一个节点
// - 为防止指针指向错乱，需要将current的下一个节点临时保存
// - 开始反转，current.next = prev
// - current，prev分别前进一步

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
var reverseList = function(head) {
  let prev = null
  let current = head

  while (current !== null) {
    let nextNode = current.next // 暂存下一个节点
    current.next = prev // 反转当前节点的指针
    prev = current // 将 prev 指针移动到当前节点
    current = nextNode // 将 current 指针移动到下一个节点
  }

  return prev // 新的头节点
};