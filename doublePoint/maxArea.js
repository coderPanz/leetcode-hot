// 盛最多水的容器
// 题目：给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水，返回容器可以储存的最大水量。

// 思路：双指针，左右指针从两边开始计算容积，(因为容器垂线x轴的间隔是相等的，所以低边的变化可以不用考虑，只考虑高度就行了), 根据木桶装水原理移动高度较短的边下一次的体积才有可能比上一次大。

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
function maxArea(height) {
  let left = 0
  let right = height.length - 1
  // 最大面积
  let maxArea = 0
  // 计算面积的公式
  let area = 0
  while (left < right) {
    area = (right - left) * Math.min(height[right], height[left])
    maxArea = Math.max(maxArea, area)
    if (height[right] > height[left]) {
      left++
    } else {
      right--
    }
  }
  return maxArea
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
maxArea(height)