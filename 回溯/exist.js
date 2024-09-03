// 单词搜索
// 题目：给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

function exist(board, word) {
  const rows = board.length
  const cols = board[0].length

  function dfs(r, c, i) {
    // 如果单词匹配完成，返回 true
    if (i === word.length) return true

    // 边界检查，当前单元格是否越界或不匹配
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i])
      return false

    // 临时保存当前单元格的值并标记为已访问
    const temp = board[r][c]
    board[r][c] = "#" // 这里用一个特殊字符标记访问

    // 在四个方向上进行递归搜索
    const found =
      dfs(r + 1, c, i + 1) || // 向下
      dfs(r - 1, c, i + 1) || // 向上
      dfs(r, c + 1, i + 1) || // 向右
      dfs(r, c - 1, i + 1) // 向左

    // 恢复当前单元格的值
    board[r][c] = temp

    return found
  }

  // 遍历网格，寻找可能的起始点
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) {
        return true
      }
    }
  }

  return false
}
