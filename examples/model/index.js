var Model = require('./Model'); // check this module out first

var model = new Model;
model.on('change', function(){
    console.log('change', model.data);
});

// the following model.set calls cause only one 'change' event
model.set('ethnicity', 'Russian');
process.nextTick(function(){console.log('before change')});
model.set('hair-color', 'blonde');
process.nextTick(function(){console.log('before change')});
model.set('eye-color', 'green');
process.nextTick(function(){console.log('after change')});

// the following model.set call will cause another 'change' event
process.nextTick(function(){
    model.set('eye-color', 'blue');
});