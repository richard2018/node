/**
exports.world = function() {
  console.log('Hello World');
}
exports.hello = function(){
	console.log("hello ... ");
}
**/

function Hello() { 
	var name; 
	this.setName = function(thyName) { 
		name = thyName; 
	}; 
	this.sayHello = function() { 
		console.log('Hello ' + name); 
	}; 
}; 
module.exports = Hello;