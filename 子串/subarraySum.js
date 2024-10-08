// 和为 K 的子数组
// 题目：给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。子数组是数组中元素的连续非空序列。

// 示例 1：
// 输入：nums = [1,1,1], k = 2
// 输出：2

// 思路：哈希+前缀和
// 前缀和：空间换时间思想
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // 哈希表用于记录前缀和出现的次数
  const map = new Map()
  map.set(0, 1) // 初始情况：前缀和为 0 的出现次数为 1
  let count = 0 // 记录和为 k 的子数组个数
  let sum = 0 // 当前的前缀和
// 111
  for (let num of nums) {
    sum += num
    // 查看前缀和 sum - k 是否在 map 中出现过，如果出现过，说明有 sum - (sum - k) = k
    // 有点抽象：在听我解释给你，例如当前位置索引和前缀和记为j、sumJ，若sumJ-k存在于map中，就说明j前面的某个索引i的前缀和为sumJ-k。也就是所i的前缀和为sumJ-k，j的前缀和为sumJ，那么必定有i+1到j的前缀和为k，即证明存在，所以结果值加一。
    if (map.has(sum - k)) {
      count += map.get(sum - k) // 将之前出现过的次数加到 count 中
    }
    // 更新当前前缀和 sum 在 map 中的次数
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1)
    } else {
      map.set(sum, 1)
    }
  }
  return count
}

const nums = [1, 1, 1]
const k = 2

subarraySum(nums, k)