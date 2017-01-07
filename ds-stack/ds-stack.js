var Stack = function() {
	var obj = Object.create(Stack.prototype);
	obj.storage = [];
};

Stack.prototype.add = function (value){
	this.storage.push(value);
};

Stack.prototype.remove = function (){
	this.storage.pop();
}

// [2]