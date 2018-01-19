const canvasElem = document.getElementById("canvas");
if (canvasElem.getContext) {
    const margin = 5;
    const r = 20;
    const startColorPattern = 255;
    const endColorPattern = 0;
    const steps = 6;
    const xstep = 40;
    const ystep = 40;
    const ctx = canvasElem.getContext("2d");
    for (let i = 0; i < steps; i++) {
        ctx.beginPath();
        ctx.arc(r + margin + i * xstep, r + margin + i * ystep, r, 0, Math.PI * 2);
        let color = startColorPattern + (endColorPattern - startColorPattern) * i / (steps - 1);
        ctx.fillStyle = getColorInRgb(color, color, color);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}

function getColorInRgb(r, g, b) {
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    return ["rgb(", r, ",", g, ",", b, ")"].join("");
}