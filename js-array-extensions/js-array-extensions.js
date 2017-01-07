// your code here
var Array = function(){
	var obj = Object.create(Array.prototype);
	obj.storage = [];
};



Array.prototype.add = function (value){
	this.storage.push(value);
};

Array.prototype.remove = function (){
	this.storage.pop();
};

Array.prototype.first = function (){
	this.storage[0];
};

Array.prototype.last = function (){
	this.storage[this.storage.length - 1];
};
// [2]