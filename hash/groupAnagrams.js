// 题目：给一个字符串数组，将 字母异位词 组合在一起。可以按任意顺序返回结果列表。字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

// 思路：每个字符按字典排序并作为map的key，数组作为value其中存放字母异位词，最后map.values()返回答案即可。
function groupAnagrams(strs) {
  const map = new Map()
  // 字典排序-存map
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i].split('').sort().join('')
    if (!map.has(str)) {
      map.set(str, [strs[i]])
    } else {
      map.get(str).push(strs[i])
    }
  }
  return [...map.values()]
}
