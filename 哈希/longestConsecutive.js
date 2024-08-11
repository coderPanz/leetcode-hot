// 最长连续序列
// 题目：给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 限定：时间复杂度为 O(n)。

// 时间复杂度为On，就不可能对数组进行排序操作，一般考虑哈希和指针方法实现。
// 实现细节：遍历每一个元素判断是否为子序列起点(前一个元素不存在)，从起点递增并检查递增后的值是否存在，若存在则结果加一。
function longestConsecutive(nums) {
  const set = new Set(nums)
  let maxLen = 0
  for (const num of set) {
    // for...of遍历集合 arr（即 nums 转换成的 Set 对象），这种方式通常比传统的索引遍历更为简洁和高效，能大幅加快遍历速度。
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
