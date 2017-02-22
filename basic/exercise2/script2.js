'use strict';

function validateSide(side) {
    if (isNaN(side)) {
        throw new TypeError("All sides should be number.");
    };
    if (side <= 0) {
        throw new Error("All sides should be bigger than 0.");
    };
};

function validateAsTriangleSides(propablyLongestSide, propablyShortestSide1, propablyShortestSide2) {
    if (propablyLongestSide > propablyShortestSide1 + propablyShortestSide2) {
        throw new Error("One side should be smaller than sum of two other sides.");
    };
};

function triangleArea(side1, side2, side3) {
    validateAsTriangleSide(side1, side2, side3);
    validateAsTriangleSide(side2, side1, side3);
    validateAsTriangleSide(side3, side2, side1);
    validateSide(side1);
    validateSide(side2);
    validateSide(side3);
    var trianglePerimeter = (side1 + side2 + side3) / 2;
    var trianglePerSide1 = trianglePerimeter - side1;
    var trianglePerSide2 = trianglePerimeter - side2;
    var trianglePerSide3 = trianglePerimeter - side3;
    var triangleAreaMath = Math.sqrt(trianglePerimeter * trianglePerSide1 * trianglePerSide2 * trianglePerSide3);
    return triangleAreaMath;
};

document.getElementById("triangle").innerHTML = triangleArea(5, 6, 7);
