const canvasElem = document.getElementById("canvas");
const ctx = canvasElem.getContext("2d");
ctx.beginPath();
   // Outer circle
    ctx.arc(75,75,50,0,Math.PI*2,true);
    ctx.moveTo(110,75);
    // Mouth 
    ctx.arc(75,75,35,0,Math.PI,false); 
    // Lefy and Right eye
    ctx.moveTo(55,65);
    ctx.arc(60,65,5,0,Math.PI*2,true); 
    ctx.arc(90,65,5,0,Math.PI*2,true);
    ctx.stroke();