// 矩阵置零
// 题目：给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

// 输入：matrix = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1]
// ]
// 输出：[
//   [1, 0, 1],
//   [0, 0, 0],
//   [1, 0, 1]
// ]

// 思路： 使用了原地算法，即在不使用额外空间的情况下完成操作。
// 首先，遍历矩阵，找到所有为 0 的元素，并使用矩阵的第一行和第一列来标记需要置零的行和列。
// 然后，再次遍历矩阵，根据第一行和第一列的标记，将对应的行和列置零。
// 最后，处理第一行和第一列，如果它们原本包含 0，则需要将它们全部置零。

// 疑问点一：用这种方法处理不容易理解的地方就是为什么对第一列单独标记而不是从第一列开始遍历
// 举个例子：m行数、n为列数，matrix[0][0] = 0, 按照逻辑从下往上查找：matrix[0][0] = 0为零所以 matrix[m-1][0]赋值为零，
// matrix[m - 1][0]为零所以 matrix[m - 1][1]赋值为零，在matrix[0][1]不为零的情况下到这里就出现了错误。

// 疑问点二：为什么从下往上遍历，而不是自上而下。因为我们需要标记matrix[i][j] 等于零的情况下对应的第一行，所以自上而下遍历的话，由于第一行数据的变化，从而影响后续元素导致参照错乱。
// 
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length

  // flagCol0 是一个布尔值，用来标记第一列是否需要被置零
  let flagCol0 = false
  // 第一轮遍历：标记需要置零的行和列
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) flagCol0 = true
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) matrix[i][0] = matrix[0][j] = 0
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0
    }
    if (flagCol0) matrix[i][0] = 0
  }
}

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]
setZeroes(matrix)
console.log(matrix)