---
category: UA
---

## base64toBlob

用于将base64转换成Blob对象，只能在在浏览器（客户端）中使用。

### Usage

```ts
import { base64toBlob } from '@etils/tool';
const b = base64toBlob('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAxxx');
// do something
```

### 文档

#### 参数

| 参数名 | 类型   | 是否必填 | 默认值 | 说明       |
| ------ | ------ | -------- | ------ | ---------- |
| base64 | string | 是       | -      | base64数据 |

#### 返回值

| 参数名 | 类型 | 说明     |
| ------ | ---- | -------- |
| blob   | Blob | Blob对象 |

### 例子

```ts
import { base64toBlob } from '@etils/tool';
// 格式化base64数据
const base64Str =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAAAAXNSR0IArs4c6QAAA5NJREFUSEu1l2vI32Mcxj/XFrMIL+bwhplDyWhOCRmxkkNpineY8mZM5LiwvEHTHArLM1GSJEXNG+aNvHBYLRuTrdiKiVEUxjZkl67H/Vv3fn6///PbY7vrrqfnPvyu+/pe3+v7/Yu9HLZnAsuBcwH3HBfwC/AxsAZ4F/hE0q6JPpeDu4ftQ4ADgR2SdnQdtp3LL57o4o71DcALmZK29Z3fDcj2Q8AdwDTgcUn39QDaAhwzCUDNkW+BxZJe6bpjHJDtWcAmYErZtEzS4gGAtgOfA3swXUKZhx0HHNoD/lVgoaRf6/UG0JzEuFoYCmitpLP62LJ9cNHaAuBa4KDW3nzzcknfN///v4DWSTpzSPhsnxQpAFe19kf0cyX9kf/L9tHAUZNkaDCgBoTtm4EnW2wtkfRIA+h84PcWoKWS7u/R0NfAsWVtD0C2o5upkqKt3mF7HvAGcFjZFIs4UdKPYeh6YH0LUGL6Xc+NpxZryHIbUB5xawnNc5Ly0M5hO9bxVmEqfrZI0lgAPQM8D3w6RAutPW1AsY4lZc83wFLgpT7GbC8ExkpWvinp6gB6AshM2k/fS1CjADVXfQVEHy83wq30lKR6G7gU2ChpdgAdXvziWeC8/QCoufILYL6kjfU3bAfMO8AWSTObtL8MiBc9up8ARSOvA7dEuC1ALwI3FoZOqQFtBj4rpWMoriEhCzO3S1rVvtR2PGw1cACwclxD2WR7BnA6cAOQrEvco6mucUHlIaMAJcMey+wSte0U8Q+As8tHwt5YXVyvK61CnHP5JH3oYeCBItSw8uWItE8i3VnWU89OGPehwtARhbZLSjGcJemersts19W+zVB0mLMrR8Xcdrzq6aooPygplvFvlbZ9IZD5IbAT2CYpevrPGAVoiPBs31ZKx9Sy/31gnqQ/a0Dp/t4DwtDJxYHX7UtAtuNxy4qTN1dHHlfUmdcwlLY0Iv4JuKgA29pF/WQYsp1EiM+dVj0yDVr6od/qh9eivgu4u4RsfjHLucBTklIGxoftFcA5QDJzk6Sw2jlsh/k0emk5muYvNfLekR1j9bHENRV7l6Sdto8EUjDTaL0GfFQXTNup7H9X59OAzS6l4BrgjEq4SYawtEJSqnvnaLeefS9NSG8CriyFMOH9ucyUnszjgTRh+bsZW8svjrj0qjxyIuEPAlQxkP3pv2NmSfH0RWnwIti/gB+A9Evps9cCm/t+vfQB+we5zo0oCyrfIQAAAABJRU5ErkJggg==';
const blob = base64toBlob(base64Str); //Blob{size: 985, type: 'image/png'}
```

## urlToBase64

用于将地址图片转换成base64，只能在在浏览器（客户端）中使用。

### Usage

```ts
import { urlToBase64 } from '@etils/tool';
const base64 = await urlToBase64('https://hddata.cn/img/logo@3x.png');
// do something
```

### 文档

#### 参数

| 参数名   | 类型   | 是否必填 | 默认值    | 说明     |
| -------- | ------ | -------- | --------- | -------- |
| url      | string | 是       | -         | 图片地址 |
| mineType | string | 否       | image/png | 图片类型 |

#### 返回值

| 参数名 | 类型   | 说明       |
| ------ | ------ | ---------- |
| data   | string | base64数据 |

### 例子

```ts
import { urlToBase64 } from '@etils/tool';
const base64 = await urlToBase64('https://hddata.cn/img/logo@3x.png'); // data:image/png;base64,iVBORw0KGgoAA...
```

## downloadByUrl

通过文件地址将文件下载到本地，只能在在浏览器（客户端）中使用。

### Usage

```ts
import { downloadByUrl } from '@etils/tool';
downloadByOnlineUrl('https://hddata.cn/img/logo.png', 'logo.png');
```

### 文档

#### 参数

| 参数名   | 类型   | 是否必填 | 默认值 | 说明     |
| -------- | ------ | -------- | ------ | -------- |
| url      | string | 是       | -      | 文件地址 |
| fileName | string | 是       | -      | 文件名   |

#### 返回值

无

### 例子

```ts
import { downloadByUrl } from '@etils/tool';
downloadByUrl('https://hddata.cn/img/logo.png', 'logo.png');
```

## downloadByBase64

将base64文件下载到本地，只能在在浏览器（客户端）中使用。

### Usage

```ts
import { downloadByBase64 } from '@etils/tool';
downloadByBase64('data:image/png;base64,iVBORw0KGgoAA...', 'logo.png');
```

### 文档

#### 参数

| 参数名   | 类型     | 是否必填 | 默认值                   | 说明       |
| -------- | -------- | -------- | ------------------------ | ---------- |
| base64   | string   | 是       | -                        | base64数据 |
| fileName | string   | 是       | -                        | 文件名     |
| mime     | string   | 否       | application/octet-stream | 文件类型   |
| blobPart | BlobPart | 否       | -                        | 文件内容   |

#### 返回值

无

### 例子

```ts
import { downloadByBase64 } from '@etils/tool';
downloadByBase64('data:image/png;base64,iVBORw0KGgoAA...', 'logo.png');
```

## downloadByData

下载后台接口返回的文件流，只能在在浏览器（客户端）中使用。

### Usage

```ts
import { downloadByData } from '@etils/tool';
downloadByData(blobPart, 'logo.png');
```

### 文档

#### 参数

| 参数名   | 类型     | 是否必填 | 默认值                   | 说明     |
| -------- | -------- | -------- | ------------------------ | -------- |
| data     | BlobPart | 是       | -                        | 文件内容 |
| fileName | string   | 是       | -                        | 文件名   |
| mime     | string   | 否       | application/octet-stream | 文件类型 |
| blobPart | BlobPart | 否       | -                        | 文件内容 |

#### 返回值

无

### 例子

```ts
import { downloadByData } from '@etils/tool';
downloadByData(blobPart, 'logo.png');
```

## parseJsonFileByUrl

通过文件地址解析json文件，只能在在浏览器（客户端）中使用。

### Usage

```ts
import { parseJsonFileByUrl } from '@etils/tool';
const json = await parseJsonFileByUrl('https://hddata.cn/json/test.json');
```

### 文档

#### 参数

| 参数名 | 类型   | 是否必填 | 默认值 | 说明     |
| ------ | ------ | -------- | ------ | -------- |
| url    | string | 是       | -      | 文件地址 |

#### 返回值

| 参数名 | 类型 | 说明     |
| ------ | ---- | -------- |
| data   | any  | json数据 |

### 例子

```ts
import { parseJsonFileByUrl } from '@etils/tool';
const json = await parseJsonFileByUrl('https://hddata.cn/json/test.json');
```

## fileSuffix

获取文件后缀名

### Usage

```ts
import { fileSuffix } from '@etils/tool';
const suffix = fileSuffix('https://hddata.cn/img/logo.png');
```

### 文档

#### 参数

| 参数名 | 类型   | 是否必填 | 默认值 | 说明     |
| ------ | ------ | -------- | ------ | -------- |
| url    | string | 是       | -      | 文件地址 |

#### 返回值

| 参数名 | 类型   | 说明       |
| ------ | ------ | ---------- |
| data   | string | 文件后缀名 |

### 例子

```ts
import { fileSuffix } from '@etils/tool';
const suffix = fileSuffix('https://hddata.cn/img/logo.png'); // png
```
