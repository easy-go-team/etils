---
category: UA
---

## Linked List
实现链表的数据结构，用于存储有序的数据。

### Usage

```ts
import { LinkedList } from '@etils/core';
const linkedList = new LinkedList();
```

### 文档

#### 方法

| 方法名   | 参数      | 返回值  | 说明                   |
| -------- | --------- | ------- | ---------------------- |
| push     | item: any | void    | 向链表尾部添加一个新项 |
| insert   | item: any | void    | 向链表的指定位置添加项 |
| getElementAt | index: number | Node | 返回链表中指定位置的元素 |
| removeAt | index: number | Node | 从链表中移除指定位置的元素 |
| remove   | item: any | Node | 从链表中移除指定元素 |
| indexOf  | item: any | number | 返回元素在链表中的索引 |
| isEmpty  | -         | boolean | 判断链表是否为空       |
| size     | -         | number  | 返回链表的元素个数     |
| getHead  | -         | Node    | 返回链表的头部         |
| toString | -         | string  | 以字符串形式返回链表内容 |

### 例子

```ts
import { LinkedList } from '@etils/core';
const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push({
  name: 'dnh',
  age: 18,
});

// 向链表的指定位置添加项
linkedList.insert(1, 2);

// 返回链表中指定位置的元素
linkedList.getElementAt(1);

// 从链表中移除指定位置的元素
linkedList.removeAt(1);

// 从链表中移除指定元素
linkedList.remove(1);

// 返回元素在链表中的索引
linkedList.indexOf(1);

// 判断链表是否为空
linkedList.isEmpty();

// 返回链表的元素个数
linkedList.size();

// 返回链表的头部
linkedList.getHead();

// 以字符串形式返回链表内容
linkedList.toString();
```



