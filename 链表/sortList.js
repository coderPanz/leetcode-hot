// 排序链表
// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

// 输入：head = [4,2,1,3]
// 输出：[1,2,3,4]

// 思路：并归排序：时间复杂度为 O(nlogn)，适用于链表排序。归并排序的主要思想是将链表递归地分成两半，然后合并两个已排序的子链表。
// - 找到链表的中点：使用快慢指针（快指针每次走两步，慢指针每次走一步）找到链表的中点，将链表分成两半。
// - 递归排序：对两个子链表递归地进行排序。
// - 合并两个已排序的子链表：使用双指针方法合并两个已排序的子链表。

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head === null || head.next === null) {
    return head
  }

  // 找到链表的中点
  let mid = getMiddle(head)
  let left = head
  let right = mid.next
  mid.next = null // 断开链表

  // 递归排序左右两部分
  left = sortList(left)
  right = sortList(right)

  // 合并已排序的两部分
  return merge(left, right)
}

// 找到链表的中点
function getMiddle(head) {
  let slow = head
  let fast = head.next
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

// 合并两个已排序的链表
function merge(l1, l2) {
  let dummy = new ListNode(0)
  let current = dummy

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }
    current = current.next
  }

  // 处理剩余节点
  if (l1 !== null) {
    current.next = l1
  } else {
    current.next = l2
  }

  return dummy.next
}
