/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums)
  let maxLen = 0
  for (let i = 0; len = nums.length; i < len, i++) {
    // 子序列起点
    if (!set.has(num - 1)) {
      let res = 1
      let index = 1
      while (set.has(num + index)) {
        res++
        index++
      }
      maxLen = Math.max(res, maxLen)
    }
  }
  return maxLen
}
