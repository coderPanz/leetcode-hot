// 二叉搜索树中第 K 小的元素
// 题目：给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（从 1 开始计数）。

var kthSmallest = function (root, k) {
  const res = []
  function itertor(node) {
    if (!node) return
    itertor(node.left)
    res.push(node.val)
    itertor(node.right)
  }
  itertor(root)
  return res[k - 1]
}