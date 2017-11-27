function randomNumberPrediction(min, max) {
    return Math.ceil(Math.random() * (max - min + 1)) + min;
}

randomNumberPrediction(1, 10);