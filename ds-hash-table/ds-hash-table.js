//[2]
var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      var val, element;
      element = _storage[hashFn(key)];
      // find that key by using hash function to figure out its hash index inside the hashtable
      // if a tuple is found, then match the hash with the index number inside the tuple.
      if (Array.isArray(element)){
        val = element[hashFn(key)];
      }
      else {
       val = _storage[hashFn(key)];
      }
      // return the value in the storage collection which corresponds to the key entered
      // in the retrieve function
      return val;
    },

    insert: function(key, value) {
      var arrayNew = [];
      // if the hash of the key already exists inside the hashtable, then create a tuple in that corresponding
      // hash index
      if (_storage[hashFn[key]]){
        var element1 = _storage[hashFn[key]];
      // save the element in the corresponding hash index and push it inside the tuple.
        _storage[hashFn[key]] = arrayNew;
        _storage[hashFn[key]].push(element1, value);
      }
      // otherwise just add the value to the hash table if there are no conflicts

      _storage[hashFn(key)] = value;
      }
  };
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};