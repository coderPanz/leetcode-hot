// 轮转数组
// 题目：给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]

// 思路： 将数组中的元素向右移动 k 次。右旋操作可以通过三次反转数组来实现。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
  // 定义反转函数
  function reverse(i, j) {
    while (i < j) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }

  const n = nums.length
  // n 是数组的长度。
  // 由于轮转 n 次相当于数组回到原始状态，所以轮转 k 次等于反向轮转 k % n 次等等于用k % n去进行三次反转工作。
  k %= n // 轮转 k 次等于轮转 k%n 次
  reverse(0, n - 1) // 第一次反转整个数组
  reverse(0, k - 1) // 第二次反转前 k 个元素
  reverse(k, n - 1) // 第三次反转剩余的元素
}
