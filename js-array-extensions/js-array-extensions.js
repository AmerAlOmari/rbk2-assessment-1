// your code here

// as Array is a class, then adding new functions to its prototype can be done by using the .fn
Array.prototype.first = function (array){
	return array[0];
};

Array.prototype.last = function (array){
	return array[array.length - 1];
};
// [2]