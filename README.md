# utils

[![GitHub](https://img.shields.io/badge/GitHub-yeshimei-green.svg)](https://github.com/yeshimei/ntbl-utils) [![npm](https://img.shields.io/badge/npm-v0.0.2-blue.svg)](https://www.npmjs.com/package/@ntbl/utils) [![MIT](https://img.shields.io/npm/l/express.svg)](https://github.com/yeshimei/ntbl-utils)

utils 是一个 JavaScript 工具集。

[API Documentation](https://yeshimei.github.io/ntbl-utils/)


## Installation

```
npm i @ntbl/utils --save
```

## Usage

```javascript
// 导入所有的工具函数
import utils from '@ntbl/utils'

// 导入 objects 模块的所有工具函数
import objects from '@ntbl/utils/objects'

// 导入单独一个工具函数
import agent from '@ntbl/utils/agent'
```

## 工具函数

目前 utils 支持的模块和工具函数包括：
 

- array
    - combine - 合并多个数组
    - compact - 去假值 （0, NaN, '', false, undefined, null）
    - union - 去重
    - difference - 差集
    - intersection - 交集
    - pull - 移除所有与给定值相等的元素
    - pullAt - 移除所有与给定下标相等的元素
    - chunk - 数组分块    
- objects
    - tailSpain -  对象路径查询
    - agent - 代理对象的属性与方法
    - toPairs - 将对象转换为 pairs 数组
    - only - 对象白名单
    - default - 混合对象默认值
- strings
    - uuid - 生成 uuid 随机字符串
    - camelCas - 将以下划线、短横线或分号命名的字符串转换为驼峰命名
- functions
    - addMethod - 函数重载
    - curry - 柯里化
    - compos - 组合
 
工具函数的使用方法，请参考  [API Documentation](https://yeshimei.github.io/ntbl-utils/)