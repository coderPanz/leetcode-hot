// 最大子数组和
// 题目： 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

// 动态规划：从底部向上，解决子问题的解->根据子问题解决父问题->依次向上最终解决原始问题。
// 步骤：1. 确定dp子问题及其状态 2. dp状态转转移解决父问题从而列出状态转移方程 3. 迭代执行状态转移方程
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
if (nums.length === 0) return 0

  let maxSum = nums[0]
  // dp是以当前元素结尾的最大子数组的和
  // 初始化
  let dp = nums[0]


  for (let i = 1; i < nums.length; i++) {
    // 当前元素结尾的最大子数组和=上一个dp+上一个dp+当前元素
    dp = Math.max(dp + nums[i], nums[i])
    maxSum = Math.max(maxSum, dp)
  }

  return maxSum
};