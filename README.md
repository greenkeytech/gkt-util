gkt-util
=========

A small library providing utility methods for Greenkey

## Installation

**npm**: `npm install https://github.com/greenkeytech/gkt-util --save`

**yarn**: `yarn add https://github.com/greenkeytech/gkt-util`.

For development, you will need to install `mocha` globally for testing.

**npm**: `npm install -g mocha`

**yarn**: `yarn global add mocha`

## Usage

```js
// import whatever function you wish to use.
import { validEmail } from 'gkt-util';

validEmail('gkt@greenkeytech.com');
// true
```

## Testing

`npm test` is a shorthand for calling `mocha`. Recommended setup is a test-build within ur editor that you can call to check if ur tests pass.

**Sublime Build Setup**

`Tools -> Build System -> New Build System` will open a new file. Copy paste this in:

```
{
  "cmd": ["mocha", "${file}"],
  "working_dir": "${project_path:${folder}}"
}
```

Then set your build system for this repo by `Tools-> Build System -> Mocha`. You can now press `Command or Ctrl + B` to run tests with the results outputting on the editor console!

Other editors should have similar options, PR to show this steps on different editors/IDE is encouraged.

## Contributing

**Release**

Devs will pull the latest version that is Released via github. To update a version, submit a PR that gets approved into a branch. Then, go to the github repository website, click on `release` link between the `branches` and `contribtors`, click `Draft a new release`, release the branch your PR was submitted to.

We code using `airBnB` styleguide. Point your linters there. Again, test-driven development is encouraged - write your tests, then the function.

## Release History

* 0.1.0 Initial release
