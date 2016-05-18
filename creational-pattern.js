
// the function defines a new property for an object.

var defineProp = function(obj, key, value){
  var config = {};
  config.value = value;
  Object.defineProperty(obj, key, config);
}

var man = Object.create(null);


defineProp(man, 'height', '6.0in')
