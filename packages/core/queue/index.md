---
category: UA
---

## Queue队列

实现队列的数据结构，遵从先进先出（FIFO）原则的有序集合，用于存储数据，以及对数据的操作。

### Usage

```ts
import { Queue } from '@etils/core';
const queue = new Queue();
```

### 文档

#### 方法

| 方法名   | 参数      | 返回值  | 说明                     |
| -------- | --------- | ------- | ------------------------ |
| enqueue  | item: any | void    | 入队                     |
| dequeue  | -         | any     | 出队                     |
| peek     | -         | any     | 返回队首元素             |
| isEmpty  | -         | boolean | 判断队列是否为空         |
| size     | -         | number  | 返回队列的元素个数       |
| clear    | -         | void    | 清空队列                 |
| toString | -         | string  | 以字符串形式返回队列内容 |

### 例子

```ts
import { Queue } from '@etils/core';
const queue = new Queue();

// 入队
queue.enqueue(1);
queue.enqueue({
  name: 'dnh',
  age: 18,
});

// 出队
queue.dequeue(); // 1

// 返回队首元素
queue.peek(); // { name: 'dnh', age: 18 }

// 判断队列是否为空
queue.isEmpty(); // false

// 返回队列的元素个数
queue.size(); // 1

// 清空队列
queue.clear();

// 以字符串形式返回队列内容
queue.toString(); // ''
```

## baseConverter

用于将十进制数字转换为任意进制的数字，支持2-36进制。

### Usage

```ts
import { baseConverter } from '@etils/core';
baseConverter(100345, 2); // 11000011111111001
```

### 文档

#### 方法

| 方法名        | 参数                            | 返回值 | 说明                             |
| ------------- | ------------------------------- | ------ | -------------------------------- |
| baseConverter | decNumber: number, base: number | string | 将十进制数字转换为任意进制的数字 |

### 例子

```ts
import { baseConverter } from '@etils/core';
baseConverter(100345, 2); // 11000011111111001
baseConverter(100345, 8); // 303771
baseConverter(100345, 16); // 187F9
baseConverter(100345, 35); // 2BW0
```

## 双端队列

双端队列是一种允许我们同时从前端和后端添加和移除元素的特殊队列。

### Usage

```ts
import { Deque } from '@etils/core';
const deque = new Deque();
```

### 文档

#### 方法

| 方法名      | 参数      | 返回值  | 说明                         |
| ----------- | --------- | ------- | ---------------------------- |
| addFront    | item: any | void    | 向双端队列前端添加元素       |
| addBack     | item: any | void    | 向双端队列后端添加元素       |
| removeFront | -         | any     | 移除双端队列前端的第一个元素 |
| removeBack  | -         | any     | 移除双端队列后端的第一个元素 |
| peekFront   | -         | any     | 返回双端队列前端的第一个元素 |
| peekBack    | -         | any     | 返回双端队列后端的第一个元素 |
| isEmpty     | -         | boolean | 判断双端队列是否为空         |
| size        | -         | number  | 返回双端队列的元素个数       |
| clear       | -         | void    | 清空双端队列                 |
| toString    | -         | string  | 以字符串形式返回双端队列内容 |

### 例子

```ts
import { Deque } from '@etils/core';
const deque = new Deque();

// 向双端队列前端添加元素
deque.addFront(1);
deque.addFront(2);
deque.addFront(3);

// 向双端队列后端添加元素
deque.addBack(4);
deque.addBack(5);
deque.addBack(6);

// 移除双端队列前端的第一个元素
deque.removeFront(); // 3

// 移除双端队列后端的第一个元素
deque.removeBack(); // 6

// 返回双端队列前端的第一个元素
deque.peekFront(); // 2

// 返回双端队列后端的第一个元素
deque.peekBack(); // 5

// 判断双端队列是否为空
deque.isEmpty(); // false

// 返回双端队列的元素个数
deque.size(); // 4

// 清空双端队列
deque.clear();

// 以字符串形式返回双端队列内容
deque.toString(); // ''
```
