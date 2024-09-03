// 分割回文串
// 题目：给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串。返回 s 所有可能的分割方案。

var isPalindrome = function (s, left, right) {
  while (left < right) if (s.charAt(left++) !== s.charAt(right--)) return false
  return true
}

var partition = function (s) {
  const n = s.length
  let ans = [],
    path = []

  // start 表示当前这段回文子串的开始位置
  function dfs(i, start) {
    if (i === n) {
      ans.push(path.slice()) // 复制 path
      return
    }

    // 不选 i 和 i+1 之间的逗号（i=n-1 时一定要选）
    if (i < n - 1) dfs(i + 1, start)

    // 选 i 和 i+1 之间的逗号（把 s[i] 作为子串的最后一个字符）
    if (isPalindrome(s, start, i)) {
      path.push(s.substring(start, i + 1))
      dfs(i + 1, i + 1) // 下一个子串从 i+1 开始
      path.pop() // 恢复现场
    }
  }
  dfs(0, 0)

  return ans
}
