# cancellable-next-tick
Wrapper around process.nextTick returning a cancel function

## example usage
```js
    var cancellableNextTick = require('cancellable-next-tick');
    var cancel = cancellableNextTick(function(){
        // execution never reaches here
    });
    cancel();
```

## use case
Check out [this example](https://github.com/zenflow/cancellable-next-tick/tree/master/examples/model)

## changelog
### 1.0.2
* Added 'model' exmaple as use-case example

### 1.0.1
* Enhanced readme
* Enhanced package.json