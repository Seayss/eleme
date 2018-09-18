# eleme

[![GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)

由于 2018/09/06 饿了么更新，旧版的逻辑（[mtdhb/get](https://github.com/mtdhb/get)）已失效

这里提供最新的饿了么红包接口 Node.js 封装，仅供技术交流，有任何疑问可以提 issue 反馈

## 文件说明

- [src](src) - 源代码
- [example](example) - 简易示例
  - [bind.ts](example/bind.ts) - 接码绑定手机号
  - [get.ts](example/get.ts) - 领取红包

## 在 JS 项目中引入

```bash
npm i github:mtdhb/eleme
```

```js
const { Request } = require("eleme");

const request = new Request({
  openid: "",
  sign: "",
  sid: ""
});
```

具体调用方式可参考 [example](example) 目录，在 [src](src) 中也有详细方法注释

## 运行示例

```bash
npm i
npx ts-node example/get.ts
```
