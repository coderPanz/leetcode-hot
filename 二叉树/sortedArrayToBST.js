// 将有序数组转换为二叉搜索树
// 题目： 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null
  }

  // 找到数组中间的元素作为当前子树的根节点
  const mid = Math.floor(nums.length / 2)
  const root = new TreeNode(nums[mid])

  // 递归构建左右子树
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1))

  return root
}
