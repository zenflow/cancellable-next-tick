var EventEmitter = require('events').EventEmitter;
var cancellableNextTick = require('../../lib');

var Model = function(){
    var self = this;
    self.data = {}
};
Model.prototype = Object.create(EventEmitter.prototype);
Model.prototype.set = function (key, value){
    var self = this;
    if (self._cancelEmit){
        self._cancelEmit();
    }
    self.data[key] = value;
    self._cancelEmit = cancellableNextTick(function(){
        self.emit('change');
        delete self._cancelEmit;
    });
};

module.exports = Model;