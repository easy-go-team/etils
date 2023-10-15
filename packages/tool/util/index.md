---
category: UA
---

## getUrlParam
获取当前浏览器地址参数

### Usage

```ts
import { getUrlParam } from '@etils/tool';
const param = getUrlParam('name');
```

### 文档

#### 参数
| 参数名  | 类型   | 是否必填 | 默认值 | 说明  |
|------| ------ | -------- | ------ |-----|
| name | string | 是       | -      | 参数名 |

#### 返回值

| 参数名 | 类型   | 说明     |
| ------ | ------ | -------- |
| data   | string | 参数值 |

### 例子

```ts
import { getUrlParam } from '@etils/tool';
const param = getUrlParam('name');
```