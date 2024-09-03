// 课程表
// 题目：你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

function canFinish(numCourses, prerequisites) {
  // Step 1: 创建邻接表和入度数组
  const graph = new Array(numCourses).fill(0).map(() => [])
  const inDegree = new Array(numCourses).fill(0)

  // Step 2: 构建图和入度数组
  prerequisites.forEach(([course, prereq]) => {
    graph[prereq].push(course) // 先修课程 -> 课程
    inDegree[course]++
  })

  // Step 3: 初始化队列，将所有入度为 0 的课程加入队列
  const queue = []
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i)
    }
  }

  // Step 4: BFS 拓扑排序过程
  let coursesCompleted = 0
  while (queue.length > 0) {
    const current = queue.shift()
    coursesCompleted++
    for (const neighbor of graph[current]) {
      inDegree[neighbor]--
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor)
      }
    }
  }

  // Step 5: 判断是否所有课程都可以完成学习
  return coursesCompleted === numCourses
}
