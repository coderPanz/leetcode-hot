// 旋转图像
// 题目：给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[7,4,1],[8,5,2],[9,6,3]]

// 思路：数组转置-行变列，变化后对行翻转。
function rotate(matrix) {
  // 获取数组的行数
  const n = matrix.length

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // 数组解构赋值 [a, b] = [b, a] 是一种简洁的交换两个变量值的方法。
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  for (let i = 0; i < n; i++) {
    matrix[i].reverse()
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
rotate(matrix)
