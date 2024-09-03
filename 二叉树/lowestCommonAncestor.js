// 二叉树的最近公共祖先
// 题目：给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

var lowestCommonAncestor = function (root, p, q) {
  function temp(root, p, q) {
    if (!root || root === p || root === q) {
      return root
    }

    // 递归查找左子树中的最近公共祖先
    let left = temp(root.left, p, q)
    // 递归查找右子树中的最近公共祖先
    let right = temp(root.right, p, q)

    // 如果左右子树分别找到了 p 和 q，则当前节点就是最近公共祖先
    if (left && right) {
      return root
    }

    // 如果只在左子树找到，则返回左子树的结果
    return left ? left : right
  }
  const res = temp(root, p, q)
  return res
}
