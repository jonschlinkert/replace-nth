# replace-nth [![NPM version](https://badge.fury.io/js/replace-nth.svg)](http://badge.fury.io/js/replace-nth)


> Replace only specific occurrences of a string. e.g. if the string exists 10 times, you can replace, say, the 3rd and 8th occurrences only, etc. Returns a new string with nth specific matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

## Install
#### Install with [npm](npmjs.org)

```bash
npm i replace-nth --save
```


## Tests

Run the tests:

```bash
npm test
```

[See the tests](./test/test.js) for examples.

## Usage

```js
var replaceNth = require('replace-nth');
replaceNth( params );
```

Params:

* `num` (string): a number formatted as a string.
* `pattern` (regex|string):  The actual pattern to find and replace nth times
* `replacement` (string): the replacement to use
* `str` (string): the string to search for replacements

Example:

```js
var params = {
  // pass any string
  str: 'aaaaaaaaaaaaaaa'
  // The nth number of match(es) to replace
  num: '[135]',
  // The pattern to replace
  pattern: /a/g,
  // the replacement to use
  replacement: 'B',
};
console.log(replaceNth(params));
//=> 'BaBaBaaaaaaaaaa'
```

## num

* `'12'` returns twelvth match,
* `'[124]'` returns the first, second and fourth matchs, and so on.

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on October 04, 2014._