---
category: UA
---

## getSession

用于从浏览器sessionStorage中获取数据，只能在在浏览器（客户端）中使用。

### Usage

```ts
import { getSession } from '@etils/tool';
const token = getSession('token', '123456');
// do something
```

### 文档

#### 参数

| 参数名       | 类型   | 是否必填 | 默认值 | 说明   |
| ------------ | ------ | -------- | ------ | ------ |
| key          | string | 是       | -      | 键名   |
| defaultValue | any    | 否       | -      | 默认值 |

### 例子

```ts
import { getSession } from '@etils/tool';
// 获取token
const token = getSession('token');

// 获取token1，如果没有token，则返回默认值123456
const token1 = getSession('token1', '123456');
```

## setSession

用于往浏览器sessionStorage中设置数据，只能在在浏览器（客户端）中使用。

### Usage

```ts
import { setSession } from '@etils/tool';
setSession('token', '123456');
// do something
```

### 文档

#### 参数

| 参数名 | 类型   | 是否必填 | 默认值 | 说明 |
| ------ | ------ | -------- | ------ | ---- |
| key    | string | 是       | -      | 键名 |
| value  | any    | 是       | -      | 键值 |

### 例子

```ts
import { setSession } from '@etils/tool';
// 获取token
const token = setSession('token', '123456');
```

## rmSession

用于删除浏览器sessionStorage中的数据，只能在在浏览器（客户端）中使用。

### Usage

```ts
import { rmSession } from '@etils/tool';
rmSession(); //删除所有sesstionStorage
```

### 文档

#### 参数

| 参数名 | 类型     | 是否必填 | 默认值 | 说明     |
| ------ | -------- | -------- | ------ | -------- |
| keys   | string[] | 否       | -      | 键名数组 |

### 例子

```ts
import { rmSession } from '@etils/tool';
// 删除token
rmSession(['token']);
// 删除token及name
rmSession(['token', 'name']);
```

## getLocal

用于从浏览器localStorage中获取数据，只能在在浏览器（客户端）中使用。

### Usage

```ts
import { getLocal } from '@etils/tool';
const token = getLocal('token', '123456');
// do something
```

### 文档

#### 参数

| 参数名       | 类型   | 是否必填 | 默认值 | 说明   |
| ------------ | ------ | -------- | ------ | ------ |
| key          | string | 是       | -      | 键名   |
| defaultValue | any    | 否       | -      | 默认值 |

### 例子

```ts
import { getLocal } from '@etils/tool';
// 获取token
const token = getLocal('token');

// 获取token1，如果没有token，则返回默认值123456
const token1 = getLocal('token1', '123456');
```

## setLocal

用于往浏览器localStorage中设置数据，只能在在浏览器（客户端）中使用。

### Usage

```ts
import { setLocal } from '@etils/tool';
setLocal('token', '123456');
// do something
```

### 文档

#### 参数

| 参数名 | 类型   | 是否必填 | 默认值 | 说明 |
| ------ | ------ | -------- | ------ | ---- |
| key    | string | 是       | -      | 键名 |
| value  | any    | 是       | -      | 键值 |

### 例子

```ts
import { setLocal } from '@etils/tool';
// 获取token
const token = setLocal('token', '123456');
```

## rmLocal

用于删除浏览器localStorage中的数据，只能在在浏览器（客户端）中使用。

### Usage

```ts
import { rmLocal } from '@etils/tool';
rmLocal(); //删除所有localStorage
```

### 文档

#### 参数

| 参数名 | 类型     | 是否必填 | 默认值 | 说明     |
| ------ | -------- | -------- | ------ | -------- |
| keys   | string[] | 否       | -      | 键名数组 |

### 例子

```ts
import { rmLocal } from '@etils/tool';
// 删除token
rmLocal(['token']);
// 删除token及name
rmLocal(['token', 'name']);
```
