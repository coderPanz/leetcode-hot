// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。注意：答案中不可以包含重复的三元组。

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

// 思路：排序后用双指针遍历每个元素，双指针的位置：left=currentIndex+1, right=arr.length - 1
// 易错点：sort排序问题，跳过重复元素问题
function threeSum(nums) {
  let result = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    // 跳过重复的元素
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        const subArr = [nums[i], nums[left], nums[right]]
        result.push(subArr)

        // 跳过重复的元素
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        // 跳过重复的元素后还需要再此基础上加一才能真正跳到不重复元素的启示位置
        left++
        right--
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--
      }
    }
  }
  return result
}

const nums = [-1, 0, 1, 2, -1, -4]
threeSum(nums)
console.log(nums.sort((a, b) => a - b))

// 跳过重复的元素的目的就是避免出现重复答案
const a = [-2, 0, 0, 2, 2] // 输入
// -202 -202 输出