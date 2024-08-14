// 环形链表二
// 题目：给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。不允许修改 链表。

// 输入：head = [3,2,0,-4], pos = 1
// 输出：返回索引为 1 的链表节点
// 解释：链表中有一个环，其尾部连接到第二个节点。

// 思路：判断存在环，以相遇点和链表头节点开始作为两个指针，每次只走一步，相遇点即为环起点
// 设链表头节点到环起始节点的距离为 a
// 设环起始节点到相遇点的距离为 b
// 设相遇点到环起始节点的距离为 c
// 设快指针的速度是慢指针的两倍

// 快慢指针相遇时的距离关系：

// 慢指针走的总距离为：a+b
// 快指针走的总距离为：a+b+k(b+c)，其中 k是快指针在环中绕的圈数。
// 由于快指针的速度是慢指针的两倍，所以快指针走的距离是慢指针的两倍： 2(a+b)=a+b+k(b+c)
// 化简得： a+b=k(b+c)

// 解方程：将 a + b表示为环的长度的整数倍： a + b=k(b + c)其中 b + c是环的长度，设为 L： a + b=kL
// 所以： a + b=k(b + c)

// 从相遇点和头节点同时开始走：
// 当快慢指针相遇时，慢指针已经走了 a+b的距离。
// 从头节点到环起始节点的距离是 a
// 从相遇点到环起始节点的距离是 c
// 因为 a+b=k(b+c)，所以： a=(k−1)(b+c)+c
// 这意味着从头节点走 a 步和从相遇点走 c 步会同时到达环的起始节点。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let fast = head
  let slow = head
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      fast = head
      while (fast !== slow) {
        fast = fast.next
        slow = slow.next
        // 不需要在循环中每次都进行判断操作（多次判断操作会导致超时），因为fast === slow 肯定存在环，所以当这个循环退出时就可以确定环的入口了，在循环外return结果即可。
        // if (fast === slow) return fast 
      }
      return fast
    }
  }
  return null
};