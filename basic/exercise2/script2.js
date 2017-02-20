'use strict';

var side1 = 5;
var side2 = 6;
var side3 = 7;
var trianglePerimeter = (side1 + side2 + side3) / 2;
var trianglePerSide1 = trianglePerimeter - side1;
var trianglePerSide2 = trianglePerimeter - side2;
var trianglePerSide3 = trianglePerimeter - side3;
var triangleArea = Math.sqrt(trianglePerimeter * trianglePerSide1 * trianglePerSide2 * trianglePerSide3 );
document.getElementById("triangle").innerHTML = triangleArea;
