// LRU缓存
// 题目：请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
// 实现 LRUCache 类：
// LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

// 示例：

// 输入
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// 输出
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// 解释
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1);    // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2);    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lRUCache.get(1);    // 返回 -1 (未找到)
// lRUCache.get(3);    // 返回 3
// lRUCache.get(4);    // 返回 4

class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new ListNode(0, 0);  // 虚拟头节点
    this.tail = new ListNode(0, 0);  // 虚拟尾节点
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      this._remove(node);
      this._add(node);
      return node.value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this._remove(this.cache.get(key));
    }
    const newNode = new ListNode(key, value);
    this._add(newNode);
    this.cache.set(key, newNode);

    if (this.cache.size > this.capacity) {
      const lru = this.head.next;
      this._remove(lru);
      this.cache.delete(lru.key);
    }
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _add(node) {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
  }
}

// Example usage:
const lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1));  // 返回 1
lruCache.put(3, 3);            // 该操作会使得关键字 2 作废
console.log(lruCache.get(2));  // 返回 -1 (未找到)
lruCache.put(4, 4);            // 该操作会使得关键字 1 作废
console.log(lruCache.get(1));  // 返回 -1 (未找到)
console.log(lruCache.get(3));  // 返回 3
console.log(lruCache.get(4));  // 返回 4


// ListNode 类：

// 定义了双向链表的节点，每个节点包含键、值、前驱和后继指针。
// LRUCache 类：

// 初始化时设置容量，并创建一个哈希表 cache 和两个虚拟节点 head 和 tail。
// get 方法：
// 如果键存在于缓存中，先通过 _remove 方法将该节点从链表中移除，再通过 _add 方法将该节点添加到链表尾部（表示最近使用）。
// 返回节点的值。
// 如果键不存在，返回 -1。
// put 方法：
// 如果键已经存在，先通过 _remove 方法将旧节点移除。
// 创建新节点并通过 _add 方法添加到链表尾部，更新哈希表。
// 如果缓存大小超过容量，通过 _remove 方法移除链表头部节点（最久未使用的节点），并从哈希表中删除对应的键。
// _remove 方法：
// 将节点从链表中移除，更新前驱和后继指针。
// _add 方法：
// 将节点添加到链表尾部，更新前驱和后继指针。

