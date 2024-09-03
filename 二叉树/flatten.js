// 二叉树展开为链表
// 题目：给你二叉树的根结点 root ，请你将它展开为一个单链表：
// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。

function flatten(root) {
  const list = []
  function preorderTraversal(root, list) {
    if (root != null) {
      list.push(root)
      preorderTraversal(root.left, list)
      preorderTraversal(root.right, list)
    }
  }
  preorderTraversal(root, list)
  const size = list.length
  for (let i = 1; i < size; i++) {
    const prev = list[i - 1]
    const curr = list[i]
    prev.left = null
    prev.right = curr
  }
}
