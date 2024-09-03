// 翻转二叉树
// 题目：给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

var invertTree = function (root) {
  if (root === null) {
    return null
  }
  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
}