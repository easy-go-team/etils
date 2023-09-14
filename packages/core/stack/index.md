---
category: UA
---

## Stack堆栈
实现栈的数据结构，遵从后进先出（LIFO）原则的有序集合，用于存储数据，以及对数据的操作。

### Usage

``` ts
import { Stack } from "@etils/core"
const stack = new Stack()
```

### 文档
#### 方法
| 方法名 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| push | item: any | void | 入栈 |
| pop | - | any | 出栈 |
| peek | - | any | 返回栈顶元素 |
| isEmpty | - | boolean | 判断栈是否为空 |
| size | - | number | 返回栈的元素个数 |
| clear | - | void | 清空栈 |
| toString | - | string | 以字符串形式返回栈内容 |

### 例子
```ts
import { Stack } from "@etils/core"
const stack = new Stack()

// 入栈
stack.push(1)
stack.push({
    name: 'dnh',
    age: 18
})

// 出栈
stack.pop()

// 返回栈顶元素
stack.peek()

// 判断栈是否为空
stack.isEmpty()

// 返回栈的元素个数
stack.size()

// 清空栈
stack.clear()

// 以字符串形式返回栈内容
stack.toString()
```


## baseConverter
用于将十进制数字转换为任意进制的数字，支持2-36进制。

### Usage

``` ts
import { baseConverter } from "@etils/core"
const binary = baseConverter(10, 2)
```

### 文档
#### 参数
| 参数名 | 类型 | 是否必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| decNumber | number | 是 | - | 十进制数字 |
| base | number | 是 | - | 要转换的进制 |

#### 返回值
转后之后的进制数

### 例子
```ts
import { baseConverter } from "@etils/core"
// 将十进制数字10转换为八进制
const binary = baseConverter(10, 8) // 
```