// 二叉树直径
// 题目：给你一棵二叉树的根节点，返回该树的 直径 。
// 二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。
// 两节点之间路径的 长度 由它们之间边数表示。

var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0

  // 辅助函数，用于计算节点的高度
  function height(node) {
    if (!node) return 0

    // 递归计算左右子树的高度
    let leftHeight = height(node.left)
    let rightHeight = height(node.right)

    // 计算以当前节点为根的子树的直径
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight)

    // 返回当前节点的高度
    return 1 + Math.max(leftHeight, rightHeight)
  }

  height(root) // 调用递归函数从根节点开始计算高度

  return maxDiameter
}