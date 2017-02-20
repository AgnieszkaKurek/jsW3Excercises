'use strict';

function findingTriangleArea(side1, side2, side3) {
    if (!(side1 > 0)) {
        throw new Error("side1 should be a longer than 0");
    };
    if (!(side2 > 0)) {
        throw new Error("side2 should be a longer than 0");
    };
    if (!(side3 > 0)) {
        throw new Error("side3 should be a longer than 0");
    };

    var trianglePerimeter = (side1 + side2 + side3) / 2;
    var trianglePerSide1 = trianglePerimeter - side1;
    var trianglePerSide2 = trianglePerimeter - side2;
    var trianglePerSide3 = trianglePerimeter - side3;
    var triangleAreaMath = Math.sqrt(trianglePerimeter * trianglePerSide1 * trianglePerSide2 * trianglePerSide3);
    return triangleAreaMath;
};

var triangleArea = findingTriangleArea;
document.getElementById("triangle").innerHTML = triangleArea(5, 6, 7);
