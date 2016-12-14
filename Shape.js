'use strict';
// var Triangle = require('./Triangle.js')

function Shape(){
	this.type = "shape";
}

Shape.prototype.get_type = function() {
	return this.constructor;
}

module.exports = Shape;
