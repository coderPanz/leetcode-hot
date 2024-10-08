// 零移动
// 题目：给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。请注意 ，必须在不复制数组的情况下原地对数组进行操作。

// 思路：将不为零的元素按从左到右排序，剩下的非零空间全部用零填充即可。
// 输入: nums = [0, 1, 0, 3, 12]
// 输出: [1, 3, 12, 0, 0]
function moveZero(nums) {
  let unZeroIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[unZeroIndex] = nums[i]
      unZeroIndex++
    }
  }

  for (let j = unZeroIndex; j < nums.length; j++) {
    nums[j] = 0
  }
  return nums
}

const nums = [0, 1, 0, 3, 12]
moveZero(nums)