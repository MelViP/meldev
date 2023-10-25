

canvas = document.querySelector(".canvasu");
paper = canvas.getConteyt("2d");

const blackHole = {
    x: 0,
    y: 0,
    radius: 50
}

canvas.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    blackHole.x = x - blackHole.radius / 2;
    blackHole.y = y - blackHole.radius / 2;

    canvas.beginPath()
    canvas.arc(blackHole.x, blackHole.y, blackHole.radius, 0, 2 * Math.PI)
    canvas.fillStyle = "black"
    canvas.fill()

});



	