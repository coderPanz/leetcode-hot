// 随机链表的复制
// 题目：给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。返回复制链表的头节点。

// 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]

/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (!head) return null

  let originalCurrent = head
  let dummyHead = new Node() // 虚拟头节点
  let newCurrent = dummyHead
  let nodeMap = new Map() // 用来映射原节点和新节点

  // 第一次遍历：复制每个节点，并将原节点和新节点存入映射表
  while (originalCurrent) {
    let newNode = new Node(originalCurrent.val)
    nodeMap.set(originalCurrent, newNode)
    newCurrent.next = newNode
    newCurrent = newCurrent.next
    originalCurrent = originalCurrent.next
  }

  // 第二次遍历：设置新节点的 random 指针
  originalCurrent = head
  newCurrent = dummyHead.next
  while (originalCurrent) {
    newCurrent.random = originalCurrent.random
      ? nodeMap.get(originalCurrent.random)
      : null
    originalCurrent = originalCurrent.next
    newCurrent = newCurrent.next
  }

  return dummyHead.next
}
