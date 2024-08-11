// 合并区间
// 题目: 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

// 示例 1：
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((p, q) => p[0] - q[0]) // 按照左端点从小到大排序
  const ans = []
  for (const p of intervals) {
    const m = ans.length
    // 当前区间 p 的起始端点 p[0] 小于或等于 ans 中最后一个区间的结束端点 ans[m - 1][1]，说明有重叠，可以合并。
    if (m && p[0] <= ans[m - 1][1]) {
      // 可以合并
      ans[m - 1][1] = Math.max(ans[m - 1][1], p[1]) // 更新右端点最大值
    } else {
      // 不相交，无法合并
      ans.push(p) // 新的合并区间
    }
  }
  return ans
}
