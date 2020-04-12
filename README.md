# vue-filter-number-format

> Vue.js filter for formatting numbers

This is a simple wrapper for [Numeral.js](http://numeraljs.com/).

## Numeral.js 2 required

This package requires you to install Numeral.js as a peer dependency (`numeral@^2`). This way, you can use a different version of Numeral, or even a drop-in replacement with the same API.
Use [version 1 of this package](https://www.npmjs.com/package/vue-filter-number-format/v/1.0.3) if you want it to install its own Numeral.js dependency as part of the bundle.

## Suggested usage

Pass in Numeral to create the formatter function, and register globally as a Vue filter in your main.js-ish file:

```js
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';

Vue.filter('numFormat', numFormat(numeral));

// new Vue ...
```
Use anywhere in your .vue files:

```js
// default format is '0,0'
{{ 69696969 | numFormat }} -> "69,696,969"

// use a custom format string
{{ 420 | numFormat('0.000') }} -> "420.000"
{{ 666 | numFormat('0,0o') }} -> "666th"
```

See the [Numeral.js docs](http://numeraljs.com/) for other formatting options.

## License

MIT
