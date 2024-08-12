// 除自身以外数组的乘积
// 题目：给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

// 示例 1:
// 输入: nums = [1,2,3,4]
// 输出: [24,12,8,6]

// 思路：通过前缀乘积和后缀乘积的结合来实现这一目标。
// 计算后缀和、前缀和*后缀和对应元素
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const n = nums.length
  const suf = new Array(n) // 初始化后缀乘积数组
  suf[n - 1] = 1 // 最后一个元素的后缀乘积为 1，因为最后一个元素的后缀乘积没有其他元素。
  // 计算后缀和
  for (let i = n - 2; i >= 0; i--) {
    suf[i] = suf[i + 1] * nums[i + 1]
  }

  // 将前缀和与后缀和数组中对于位置元素相乘即可得到res
  let pre = 1
  for (let i = 0; i < n; i++) {
    // 此时 pre 为 nums[0] 到 nums[i-1] 的乘积，直接乘到 suf[i] 中
    suf[i] *= pre
    pre *= nums[i]
  }

  return suf
}

// 例如，对于 nums = [1, 2, 3, 4]：

// suf[3] = 1
// suf[2] = suf[3] * nums[3] = 1 * 4 = 4
// suf[1] = suf[2] * nums[2] = 4 * 3 = 12
// suf[0] = suf[1] * nums[1] = 12 * 2 = 24
// 此时，suf 数组为 [24, 12, 4, 1]。

// pre 用于存储前缀乘积，初始值为 1。
// 从数组的第一个元素开始，遍历数组。
// 在每次循环中，将当前元素的前缀乘积乘以对应的 suf 数组中的值。
// 更新 pre 为当前元素的前缀乘积。
// 例如，对于 nums = [1, 2, 3, 4]：

// 初始时，pre = 1。
// suf[0] = suf[0] * pre = 24 * 1 = 24，然后 pre = pre * nums[0] = 1 * 1 = 1。
// suf[1] = suf[1] * pre = 12 * 1 = 12，然后 pre = pre * nums[1] = 1 * 2 = 2。
// suf[2] = suf[2] * pre = 4 * 2 = 8，然后 pre = pre * nums[2] = 2 * 3 = 6。
// suf[3] = suf[3] * pre = 1 * 6 = 6，然后 pre = pre * nums[3] = 6 * 4 = 24。
// 此时，suf 数组为 [24, 12, 8, 6]，即每个元素的值为除自身以外的所有元素的乘积。