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
	return this.storage[0];
};

Array.prototype.last = function (){
	return this.storage[this.storage.length - 1];
};
// [2]