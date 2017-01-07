var Stack = function() {
	var obj = Object.create(Stack.prototype);
	obj._storage = [];
};

Stack.prototype.add = function (value){
	this._storage.push(value);
};

Stack.prototype.remove = function (){
	this._storage.pop();
}

// [2]