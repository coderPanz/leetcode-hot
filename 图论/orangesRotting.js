// 腐烂的橘子
// 题目：在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：

// 值 0 代表空单元格；
// 值 1 代表新鲜橘子；
// 值 2 代表腐烂的橘子。
// 每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。

// 返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。

function orangesRotting(grid) {
  const rows = grid.length
  const cols = grid[0].length

  // 方向数组，用于表示上、下、左、右四个方向移动
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  // 使用队列来进行BFS
  let queue = []
  let freshOranges = 0 // 记录新鲜橘子的数量

  // 初始化队列，同时统计新鲜橘子的数量
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c, 0]) // 第三个元素表示分钟数
      } else if (grid[r][c] === 1) {
        freshOranges++
      }
    }
  }

  let minutes = 0

  while (queue.length > 0) {
    let current = queue.shift()
    let r = current[0]
    let c = current[1]
    let minute = current[2]

    minutes = Math.max(minutes, minute) // 记录当前分钟数

    for (let dir of directions) {
      let nr = r + dir[0]
      let nc = c + dir[1]

      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
        grid[nr][nc] = 2 // 橘子变腐烂
        freshOranges--
        queue.push([nr, nc, minute + 1])
      }
    }
  }

  if (freshOranges > 0) {
    return -1 // 如果还有新鲜橘子剩下，返回-1表示不可能全部变腐烂
  } else {
    return minutes // 返回腐烂所需的总分钟数
  }
}

// 初始化：首先遍历整个网格，将所有腐烂的橘子的位置加入队列，并统计新鲜橘子的数量。
// BFS过程：从队列中依次取出腐烂的橘子位置，然后尝试向四个方向扩展，将相邻的新鲜橘子标记为腐烂并加入队列。同时记录每个橘子腐烂的分钟数。
// 计算结果：当队列为空时，检查剩余的新鲜橘子数量。如果还有新鲜橘子剩下，说明它们无法被腐烂，返回 -1；否则返回腐烂的最大分钟数。
// 这段代码通过 BFS 模拟了橘子腐烂的过程，并计算出腐烂所有新鲜橘子所需的最小分钟数或者判断不可能腐烂的情况。