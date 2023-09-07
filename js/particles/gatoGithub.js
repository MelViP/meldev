let canvas, paper, w, h, gato, orejas, ojos, cara;

window.addEventListener("DOMContentLoaded",() => {
	canvas = document.querySelector(".gatitoPulpo");
	paper = canvas.getContext("2d");
	resizeReset();

    }
);

//dibujar cabeza
//dibujar orejas
//dibujar ojos
//dibujar cara
window.addEventListener("resize", resizeReset);
