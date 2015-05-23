# cancellable-next-tick
Wrapper around process.nextTick returning a cancel function

## example usage
```js
    var cancellableNextTick = require('cancellable-next-tick');
    var cancel = cancellableNextTick(function(){
        // ...
    });
    cancel();
```

## example use-case
```js
function setValue(value){
    var self = this;
    if (self._cancelEmit){
        self._cancelEmit();
    }
    self._cancelEmit = cancellableNextTick(function(){
        self.emit('value', value);
        delete self._cancelEmit;
    });
}
```
## changelog

### 1.0.1

* Enhanced readme
* Enhanced package.json