// 实现 Trie (前缀树)
// 题目：Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补全和拼写检查。

// 请你实现 Trie 类：

// Trie() 初始化前缀树对象。
// void insert(String word) 向前缀树中插入字符串 word 。
// boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
// boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。

// TrieNode 类，表示 Trie 的节点
class TrieNode {
  constructor() {
    this.children = {} // 子节点集合，每个键为字符，值为对应的 TrieNode
    this.isEndOfWord = false // 标记是否是一个单词的结尾
  }
}

// Trie 类，表示前缀树
class Trie {
  constructor() {
    this.root = new TrieNode() // 初始化 Trie 树的根节点
  }

  // 插入一个单词到 Trie 中
  insert(word) {
    let node = this.root
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }
    node.isEndOfWord = true // 最后一个字符标记为单词结尾
  }

  // 搜索一个单词是否存在于 Trie 中
  search(word) {
    let node = this.root
    for (let char of word) {
      if (!node.children[char]) {
        return false // 如果字符不存在，直接返回 false
      }
      node = node.children[char]
    }
    return node.isEndOfWord // 到达单词末尾时，检查是否标记为单词结尾
  }

  // 检查是否有以 prefix 为前缀的单词存在于 Trie 中
  startsWith(prefix) {
    let node = this.root
    for (let char of prefix) {
      if (!node.children[char]) {
        return false // 如果字符不存在，直接返回 false
      }
      node = node.children[char]
    }
    return true // 到达 prefix 的末尾，返回 true
  }
}
