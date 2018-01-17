const canvasElem = document.getElementById("canvas");
const ctx = canvasElem.getContext("2d");
ctx.beginPath();
ctx.moveTo(175, 175);
ctx.lineTo(110, 175);
ctx.lineTo(110, 125);
ctx.fill();