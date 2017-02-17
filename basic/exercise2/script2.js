'use strict';

var side1 = 5;
var side2 = 6;
var side3 = 7
var trianglePerimeter = (side1 + side2 + side3) / 2;
var triangleArea = Math.sqrt(trianglePerimeter * ((trianglePerimeter - side1) * (trianglePerimeter - side2) * (trianglePerimeter - side3)));
document.getElementById("triangle").innerHTML = triangleArea;


