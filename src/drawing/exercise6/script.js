const canvasElem = document.getElementById("canvas");
if (canvasElem.getContext) {
    const x = 25;
    const y = 25;
    const r = 20;
    const startColorPattern = 300;
    const endColorPattern = 10;
    const steps = 6;
    const ctx = canvasElem.getContext("2d");
    for (let i = 0; i < steps; i++) {
        ctx.beginPath();
        ctx.arc(x + i * 40, y + i * 45, r, 0, Math.PI * 2);
        let constCurrentColor = startColorPattern + (endColorPattern - startColorPattern) * i / steps;
        ctx.fillStyle = rgb(constCurrentColor, constCurrentColor, constCurrentColor);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}

function rgb(r, g, b) {
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    return ["rgb(", r, ",", g, ",", b, ")"].join("");
}