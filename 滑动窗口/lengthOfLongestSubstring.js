// 无重复字符的最长子串
// 题目：给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串的长度。

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// pwwkew

function lengthOfLongestSubstring(s) {
  let maxLength = 0 // 最大长度
  let left = 0 // 窗口左边界
  let right = 0 // 窗口右边界
  const set = new Set() // 用于存储窗口中的字符

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right])
      maxLength = Math.max(maxLength, set.size) // 更新最大长度
      right++ // 右边界向右移动
    } else {
      set.delete(s[left])
      left++ // 左边界向右移动
    }
  }
  return maxLength
}
 
const s = "abcabcbb"
lengthOfLongestSubstring(s)