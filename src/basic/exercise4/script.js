function validateSide(side) {
    if (isNaN(side)) {
        throw new TypeError("All sides should be number.");
    }
    if (side <= 0) {
        throw new Error("All sides should be bigger than 0.");
    }
}

function validateAsTriangleSides(propablyLongestSide, propablyShorterSide1, propablyShorterSide2) {
    if (propablyLongestSide >= propablyShorterSide1 + propablyShorterSide2) {
        throw new Error("One side should be smaller than sum of two other sides.");
    }
}

function triangleArea(side1, side2, side3) {
    validateSide(side1);
    validateSide(side2);
    validateSide(side3);
    validateAsTriangleSides(side1, side2, side3);
    validateAsTriangleSides(side2, side1, side3);
    validateAsTriangleSides(side3, side2, side1);
    var trianglePerimeter = (side1 + side2 + side3) / 2;
    var trianglePerSide1 = trianglePerimeter - side1;
    var trianglePerSide2 = trianglePerimeter - side2;
    var trianglePerSide3 = trianglePerimeter - side3;
    var triangleAreaMath = Math.sqrt(trianglePerimeter * trianglePerSide1 * trianglePerSide2 * trianglePerSide3);
    return triangleAreaMath;
}

let triangle = document.getElementById("triangle");
if (triangle!=null){
    document.getElementById("triangle").innerHTML = triangleArea(5, 6, 7);
}