# Actions Util

🚀 A util for Actions.

[![npm](https://img.shields.io/npm/v/actions-util?style=flat-square&color=orange)](https://www.npmjs.com/package/actions-util)
![](https://img.shields.io/github/actions/workflow/status/actions-cool/actions-util/test.yml?style=flat-square&branch=main)
![](https://img.shields.io/npm/l/actions-util?style=flat-square&color=blue)

## 🚀 Usage

```js
const { checkPermission } = require('actions-util');
// or
import { checkPermission } from 'actions-util';

checkPermission(require, permission);
```

## 🎁 Export

- [checkPermission](#checkPermission) `1.0.0`
- [dealStringToArr](#dealstringtoarr) `1.0.0`
- THANKS `1.1.0`

### checkPermission

```js
checkPermission(require, permission);
```

#### Input

| Params | Desc | Type | Required | Default |
| -- | -- | -- | -- | -- |
| require | Required permissions | string | ✔ | - |
| permission | Detector's permission | string | ✔ | - |

#### Output

`boolean`

### dealStringToArr

```js
dealStringToArr(para);
```

#### Input

| Params | Desc | Type | Required | Default |
| -- | -- | -- | -- | -- |
| para | Action yml input like `x1, x2, x3` | string | ✔ | - |

#### Output

```js
['x1', 'x2', 'x3']
```

## LICENSE

[MIT](./LICENSE)
