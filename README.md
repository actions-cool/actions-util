# Actions Util

🚀 A util for Actions.

[![npm](https://img.shields.io/npm/v/actions-util?style=flat-square&color=orange)](https://www.npmjs.com/package/analyze-action)
![](https://img.shields.io/github/workflow/status/actions-cool/actions-util/CI?style=flat-square)
![](https://img.shields.io/npm/l/actions-util?style=flat-square&color=blue)

## 🚀 Usage

```js
const { checkPermission } = require('actions-util');
// or
import { checkPermission } from 'actions-util';

checkPermission(require, permission);
```

## 🎁 API

- [checkPermission](#checkPermission) `1.0.0`
- [dealStringToArr](#dealstringtoarr) `1.0.0`

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
