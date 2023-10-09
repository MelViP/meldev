const canvas = document.querySelector(".gatitoPulpo");
const contenedor = document.querySelector(".socialMedia > span")

const pincel = canvas.getContext('2d');

//canvas size
canvas.width = contenedor;
canvas.height = contenedor;

// Clear the canvas
pincel.clearRect(0, 0, canvas.width, canvas.height);

// Set the line width and color
pincel.lineWidth = 5;
pincel.strokeStyle = 'black';

// Draw the GitHub icon
pincel.beginPath();
pincel.moveTo(20, 20);
pincel.lineTo(80, 20);
pincel.lineTo(80, 80);
pincel.lineTo(20, 80);
pincel.closePath();
pincel.stroke();

// Fill the GitHub icon with black
pincel.fillStyle = 'black';
pincel.fill();

// Draw the GitHub logo
pincel.fillStyle = 'white';
pincel.font = 'bold 20px sans-serif';
pincel.fillText('GitHub', 35, 50);
