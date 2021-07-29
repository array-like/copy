:barber: [@array-like/copy](https://array-like.github.io/copy)
==

ArrayLike copying for JavaScript.
See [docs](https://array-like.github.io/copy/index.html).

```js
import {range} from '@iterable-iterator/range';
const n = 100;
const a = Array.from(range(n))
const ai = 0;
const aj = n;
const b = new Uint8Array(n);
const bi = 0;

import {copy} from '@array-like/copy';
copy(a, ai, aj, b, bi);
```

[![License](https://img.shields.io/github/license/array-like/copy.svg)](https://raw.githubusercontent.com/array-like/copy/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@array-like/copy.svg)](https://www.npmjs.org/package/@array-like/copy)
[![Tests](https://img.shields.io/github/workflow/status/array-like/copy/ci:test?event=push&label=tests)](https://github.com/array-like/copy/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/array-like/copy.svg)](https://david-dm.org/array-like/copy)
[![Dev dependencies](https://img.shields.io/david/dev/array-like/copy.svg)](https://david-dm.org/array-like/copy?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/array-like/copy.svg)](https://github.com/array-like/copy/issues)
[![Downloads](https://img.shields.io/npm/dm/@array-like/copy.svg)](https://www.npmjs.org/package/@array-like/copy)

[![Code issues](https://img.shields.io/codeclimate/issues/array-like/copy.svg)](https://codeclimate.com/github/array-like/copy/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/array-like/copy.svg)](https://codeclimate.com/github/array-like/copy/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/array-like/copy/main.svg)](https://codecov.io/gh/array-like/copy)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/array-like/copy.svg)](https://codeclimate.com/github/array-like/copy/trends/technical_debt)
[![Documentation](https://array-like.github.io/copy/badge.svg)](https://array-like.github.io/copy/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@array-like/copy)](https://bundlephobia.com/result?p=@array-like/copy)
