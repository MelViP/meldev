let canvas, paper, w, h, gato, orejas, ojos, cara;

window.addEventListener("DOMContentLoaded",() => {
	canvas = document.querySelector(".gatitoPulpo");
	paper = canvas.getContext("2d");
	resizeReset();

    }
);

window.addEventListener("resize", resizeReset);
