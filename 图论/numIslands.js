// 岛屿数量
// 题目: 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。此外，你可以假设该网格的四条边均被水包围。

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  if (grid === null || grid.length === 0) {
    return 0
  }

  let numIslands = 0

  const rows = grid.length
  const cols = grid[0].length

  function dfs(row, col) {
    // 如果索引越界或者当前格子不是岛屿，直接返回
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] === "0"
    ) {
      return
    }

    // 将当前格子标记为已访问
    grid[row][col] = "0"

    // 递归访问上下左右四个方向
    dfs(row - 1, col) // 上
    dfs(row + 1, col) // 下
    dfs(row, col - 1) // 左
    dfs(row, col + 1) // 右
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "1") {
        numIslands++
        dfs(row, col) // 对每一个岛屿开始 DFS
      }
    }
  }

  return numIslands
}
