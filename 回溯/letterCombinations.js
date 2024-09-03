// 电话号码的字母组合
// 题目：给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

function letterCombinations(digits) {
  if (digits.length === 0) return [] // 如果输入为空字符串，则直接返回空数组

  // 定义数字到字母的映射关系
  const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  }

  const result = [] // 存放所有的组合结果

  // 回溯函数，参数分别是当前位置和当前已生成的字符串
  function backtrack(index, current) {
    // 如果当前字符串长度等于输入数字字符串长度，则表示找到了一个完整的组合
    if (current.length === digits.length) {
      result.push(current) // 将当前组合加入结果集
      return
    }

    // 获取当前数字对应的字母集合
    const letters = phoneMap[digits[index]]

    // 遍历当前数字对应的每个字母
    for (let i = 0; i < letters.length; i++) {
      // 做选择：将当前字母加入当前生成的字符串
      backtrack(index + 1, current + letters[i])
    }
  }

  // 开始回溯，从第0个位置开始
  backtrack(0, "")

  return result
}
