// 找到字符串中所有字母异位词
// 题目：给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  const result = []
  const pLen = p.length
  const sLen = s.length

  // 如果 p 的长度大于 s 的长度，则没有匹配的异位词
  if (pLen > sLen) return result

  // 频率计数数组
  const pCount = Array(26).fill(0)
  const sCount = Array(26).fill(0)

  // 填充 pCount
  for (let char of p) {
    pCount[char.charCodeAt() - "a".charCodeAt()]++
  }
  // 初始化滑动窗口
  for (let i = 0; i < pLen; i++) {
    sCount[s.charCodeAt(i) - "a".charCodeAt(0)]++
  }

  // 检查第一个窗口
  if (arraysEqual(pCount, sCount)) {
    result.push(0)
  }

  // 滑动窗口
  for (let i = pLen; i < sLen; i++) {
    // 添加新字符
    sCount[s.charCodeAt(i) - "a".charCodeAt(0)]++
    // 删除旧字符
    // s.charCodeAt(i - pLen)：为了算出滑动窗口左边的元素位于s的位置
    // s.charCodeAt(i - pLen) - "a".charCodeAt(0)：为了算出窗口左侧元素数值位于sCount的位置一遍删除频次
    sCount[s.charCodeAt(i - pLen) - "a".charCodeAt(0)]--

    // 比较窗口内的字符计数, 其中i是当前窗口的结束索引（相同的前提肯定是i走到了窗口的结束位置），所以计算开始所以需要减pLen加一
    if (arraysEqual(pCount, sCount)) {
      result.push(i - pLen + 1)
    }
  }

  return result
}

// 辅助函数：比较两个计数数组是否相等
function arraysEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}


const s = "cbaebabacd"
const p = "abc"
console.log(findAnagrams(s, p))
