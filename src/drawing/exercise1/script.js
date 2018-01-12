const canvasElem = document.getElementById("canvas");
const ctx = canvasElem.getContext("2d");
ctx.fillStyle = "#6DCF00";
ctx.fillRect(20, 20, 100, 100);
ctx.clearRect(40, 40, 60, 60);
ctx.strokeRect(45, 45, 50, 50);

