# cancellable-next-tick
Wrapper around process.nextTick returning a cancel function

[![build status](https://travis-ci.org/zenflow/cancellable-next-tick.svg?branch=master)](https://travis-ci.org/zenflow/cancellable-next-tick?branch=master)
[![dependencies](https://david-dm.org/zenflow/cancellable-next-tick.svg)](https://david-dm.org/zenflow/cancellable-next-tick)
[![dev-dependencies](https://david-dm.org/zenflow/cancellable-next-tick/dev-status.svg)](https://david-dm.org/zenflow/cancellable-next-tick#info=devDependencies)

[![npm](https://nodei.co/npm/cancellable-next-tick.svg?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/cancellable-next-tick)

## example usage
```js
    var cancellableNextTick = require('cancellable-next-tick');
    var cancel = cancellableNextTick(function(){
        // execution never reaches here
    });
    cancel();
```

## example use case
Check out [this example](https://github.com/zenflow/cancellable-next-tick/tree/master/examples/model)

## changelog

### 1.0.3
* Enhanced model example
* Added standard badges & shields

### 1.0.2
* Added 'model' example as use-case example

### 1.0.1
* Enhanced readme
* Enhanced package.json