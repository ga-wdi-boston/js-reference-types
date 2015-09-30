'use strict';

var globalScope = 3;

var outer = function() {
  var functionScope = 7;
  return globalScope + functionScope;
};

console.log('outer returns ' + outer());
