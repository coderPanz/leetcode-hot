// 全排列
// 题目：给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

function permute(nums) {
  const result = []
  const used = new Array(nums.length).fill(false) // 标记数组，记录每个数字是否已被使用过

  function backtrack(path) {
    // 如果当前路径长度等于 nums 的长度，说明找到了一个完整的排列
    if (path.length === nums.length) {
      result.push([...path]) // 将当前路径加入结果集中，注意要创建副本
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        // 如果当前数字未被使用过，将其加入路径，并标记为已使用
        path.push(nums[i])
        used[i] = true

        // 递归进入下一层决策树
        backtrack(path)

        // 撤销选择，回溯
        path.pop()
        used[i] = false
      }
    }
  }

  backtrack([])
  return result
}
