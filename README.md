# vue-filter-number-format

> Vue.js filter for formatting numbers

This is a simple wrapper for [Numeral.js](http://numeraljs.com/).

## Suggested usage

Register globally as a Vue filter in your main.js-ish file:

```js
import numFormat from 'vue-filter-number-format';

Vue.filter('numFormat', numFormat);

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


## Development

``` bash
# install dependencies
yarn

# serve example app with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build
```

## License

MIT
