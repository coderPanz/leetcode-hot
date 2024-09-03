// 二叉树最大深度
// 题目：给定一个二叉树 root ，返回其最大深度。二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

var maxDepth = function (root) {
  if (root == null) return 0
  const leftMaxDepth = maxDepth(root.left)
  const rightMaxDepth = maxDepth(root.right)
  return 1 + Math.max(leftMaxDepth, rightMaxDepth)
}