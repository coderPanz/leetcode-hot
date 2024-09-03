// 路径总和三
// 题目：给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

const pathSum = function (root, targetSum) {
  let ans = 0
  const cnt = { 0: 1 } // 把 s[0] = 0 统计进来
  function dfs(node, s) {
    if (node === null) {
      return
    }
    s += node.val
    ans += cnt[s - targetSum] ?? 0
    cnt[s] = (cnt[s] ?? 0) + 1
    dfs(node.left, s)
    dfs(node.right, s)
    cnt[s]-- // 恢复现场
  }
  dfs(root, 0)
  return ans
}
