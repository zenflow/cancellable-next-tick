var test = require('tape');
var cancellableNextTick = require('../lib');
test('calls function if not cancelled', function(t){
	t.plan(1);
	var cancel = cancellableNextTick(function(){
		t.pass();
	});
});
test('doesn\'t call function if cancelled', function(t){
	t.plan(1);
	var function_was_called = false;
	var cancel = cancellableNextTick(function(){
		function_was_called = true;
	});
	cancel();
	process.nextTick(function(){
		t.ok(!function_was_called)
	});
});