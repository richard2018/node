var util = require('util'); 
function Base() { 
	this.name = 'base'; 
	this.base = 1991; 
	this.sayHello = function() { 
	console.log('Hello ' + this.name); 
	}; 
} 
Base.prototype.showName = function() { 
	console.log(this.name);
}; 
function Sub() { 
	this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello();
console.log("objBase : "); 
console.log(objBase); 
var objSub = new Sub(); 
console.log("showName : ");
objSub.showName(); 
//objSub.sayHello();
console.log("objSub : "); 
console.log(objSub);
console.log("===================================");
var util = require('util'); 
function Person() { 
	this.name = 'byvoid'; 
	this.toString = function() { 
	return this.name; 
	}; 
} 
var obj = new Person(); 
console.log("obj : ");
console.log(obj);
console.log("obj inspect : ");
console.log(util.inspect(obj)); 
console.log(util.inspect(obj, true)); 
