var Stack = function() {
	this.storage = [];
};

Stack.prototype.add = function (value){
	this.storage.push(value);
};

Stack.prototype.remove = function (){
	this.storage.pop();
}

// [1]