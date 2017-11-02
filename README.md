gkt-util
=========

A small library providing utility methods for Greenkey

## Installation

`npm install https://github.com/greenkeytech/gkt-util --save` or
`yarn add https://github.com/greenkeytech/gkt-util`.

To develop, you will need to install Mocha for testing. Highly recommend test-driven development for this library as it's very simple to do.

`npm install -g mocha` or
`yarn global add mocha`

## Usage

```js
// import whatever function you wish to use.
import { validEmail } from 'gkt-util';

validEmail('gkt@greenkeytech.com');
// true
```

## Testing

`npm test` is a shorthand for calling `mocha`. Recommended setup is a test-build within ur editor that you can call to check if ur tests pass.

*Sublime Build Setup*
`Tools -> Build System -> New Build System` will open a new file. Copy paste this in:

```
{
  "cmd": ["mocha", "${file}"],
  "working_dir": "${project_path:${folder}}"
}
```

Then set your build system for this repo by `Tools-> Build System -> Mocha`. You can now press `Command or Ctrl + B` to run tests! Other editors should have similar options, PR to show this steps on different editors/IDE is encouraged.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Again, test-driven development is encouraged - write your tests, then the function.

## Release History

* 0.1.0 Initial release
