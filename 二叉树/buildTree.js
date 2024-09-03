// 从前序与中序遍历序列构造二叉树
// 题目：给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

var buildTree = function (preorder, inorder) {
  const inorderMap = new Map()
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i)
  }

  const build = (preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd || inStart > inEnd) {
      return null
    }

    const rootVal = preorder[preStart]
    const root = new TreeNode(rootVal)
    const rootIndexInorder = inorderMap.get(rootVal)
    const leftSubtreeSize = rootIndexInorder - inStart

    root.left = build(
      preStart + 1,
      preStart + leftSubtreeSize,
      inStart,
      rootIndexInorder - 1
    )
    root.right = build(
      preStart + leftSubtreeSize + 1,
      preEnd,
      rootIndexInorder + 1,
      inEnd
    )

    return root
  }

  return build(0, preorder.length - 1, 0, inorder.length - 1)
}
