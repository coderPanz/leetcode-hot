// 题目：给一个整数数组 nums 和一个整数目标值 target，在该数组中找出和为 target 的两个整数，并返回下标数组。假设每种输入只会对应一个答案，不能使用相同元素。

// 暴力：两层循环，On2
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
  return -1
}

// 哈希：空间换时间，压缩为一层循环。target的补数是否存在map中，存在返回不存在添加当前遍历元素进入map。
function twoSum(nums, target) {
  // 元素-key，索引-value
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    // 计算每个元素对应的补数
    const complement = target - nums[i]

    // 检查补数是否存在map，存在则返回
    if(map.has(complement)) return [map.get(complement), i]

    // 不存在则set
    map.set(nums[i], i)
  }
  return -1
}
