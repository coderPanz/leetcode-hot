// 搜索二维矩阵二
// 题目：编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。

// 思路：具有行列升序排列特性的矩阵中搜索目标值，要从右上角开始搜索。这种方法确保每一步都能排除一整行或一整列，从而快速缩小搜索范围。
var searchMatrix = function (matrix, target) {
  const m = matrix.length // 行
  const n = matrix[0].length // 列
  let i = 0 // 遍历行
  let j = n - 1 // 遍历列
  while (i < m && j >= 0) {
    // 还有剩余元素
    if (matrix[i][j] === target) {
      return true // 找到 target
    }
    if (matrix[i][j] < target) {
      i++ // 这一行剩余元素全部小于 target，排除
    } else {
      j-- // 这一列剩余元素全部大于 target，排除
    }
  }
  return false
}