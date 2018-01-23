
# color-utils

[![NPM version](https://img.shields.io/npm/v/color-utils.svg?style=flat)](https://npmjs.com/package/color-utils) [![NPM downloads](https://img.shields.io/npm/dm/color-utils.svg?style=flat)](https://npmjs.com/package/color-utils) [![CircleCI](https://circleci.com/gh/zcong1993/color-utils/tree/master.svg?style=shield)](https://circleci.com/gh/zcong1993/color-utils/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/zcong1993/donate)

## Install

```bash
$ yarn add color-utils
```

## Usage

```js
const colorUtils = require('color-utils')
const log = console.log

log(colorUtils.success('a', 'b', 'c'))
log(colorUtils.info('a', 'b', 'c'))
log(colorUtils.warning('a', 'b', 'c'))
log(colorUtils.error('a', 'b', 'c'))
colorUtils.logPad(colorUtils.success, 'a', 'b', 'c')
// get chalk instance
// colorUtils.chalk
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**color-utils** © [zcong1993](https://github.com/zcong1993), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by zcong1993 with help from contributors ([list](https://github.com/zcong1993/color-utils/contributors)).

> [github.com/zcong1993](https://github.com/zcong1993) · GitHub [@zcong1993](https://github.com/zcong1993)
