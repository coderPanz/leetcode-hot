// 二叉树的右视图
// 题目: 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

var rightSideView = function (root) {
  if (!root) {
    return []
  }

  const result = []
  const queue = [root]

  while (queue.length > 0) {
    const levelSize = queue.length // 当前层的节点数
    const currentLevel = []

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift() // 取出队列的第一个节点
      currentLevel.push(currentNode.val)

      // 将左子节点加入队列
      if (currentNode.left) {
        queue.push(currentNode.left)
      }

      // 将右子节点加入队列
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    result.push(currentLevel[currentLevel.length - 1])
  }
  return result
}
