var Shape = require('./Shape.js');

function Square(side1, side2, side3, side4){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
}

Square.prototype = new Shape();

Square.prototype.constructor = Square;

module.exports = Square;