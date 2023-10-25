let canvas,
  paper,
  w,
  h,
  moon,
  stars = [],
  meteors = [];

window.addEventListener("DOMContentLoaded", () => {
  canvas = document.querySelector(".canvasu");
  paper = canvas.getContext("2d");
  resizeReset();
  moon = new Moon();
  for (let a = 0; a < w * h * 0.0001; a++) {
    stars.push(new Star());
  }
  for (let b = 0; b < 2; b++) {
    meteors.push(new Meteor());
  }
  animationLoop();
});

function resizeReset() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

function animationLoop() {
  paper.clearRect(0, 0, w, h);
  drawScene();
  requestAnimationFrame(animationLoop);
}

function drawScene() {
  moon.draw();
  stars.map((star) => {
    star.update();
    star.draw();
  });
  meteors.map((meteor) => {
    meteor.update();
    meteor.draw();
  });
}

class Moon {
  constructor() {
    this.x = 150;
    this.y = 350;
    this.size = 100;
  }
  draw() {
    paper.save();
    paper.beginPath();
    paper.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    paper.shadowColor = "rgba(254, 247, 144, 1)";
    paper.shadowBlur = 100;
    paper.fillStyle = "rgba(254, 247, 144, 1)";
    paper.fill();
    paper.closePath();
    paper.restore();
  }
}

class Star {
  constructor() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.size = Math.random() + 0.5;
    this.blinkChance = 0.005;
    this.alpha = 1;
    this.alphaChange = 0;
  }
  draw() {
    paper.beginPath();
    paper.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    paper.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    paper.fill();
    paper.closePath();
  }
  update() {
    if (this.alphaChange === 0 && Math.random() < this.blinkChance) {
      this.alphaChange = -1;
    } else if (this.alphaChange !== 0) {
      this.alpha += this.alphaChange * 0.05;
      if (this.alpha <= 0) {
        this.alphaChange = 1;
      } else if (this.alpha >= 1) {
        this.alphaChange = 0;
      }
    }
  }
}

class Meteor {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * w + 300;
    this.y = -100;
    this.size = Math.random() * 2 + 0.5;
    this.speed = (Math.random() + 0.5) * 15;
  }
  draw() {
    paper.save();
    paper.strokeStyle = "rgba(255, 255, 255, .1)";
    paper.lineCap = "round";
    paper.shadowColor = "rgba(255, 255, 255, 1)";
    paper.shadowBlur = 10;
    for (let i = 0; i < 10; i++) {
      paper.beginPath();
      paper.moveTo(this.x, this.y);
      paper.lineWidth = this.size;
      paper.lineTo(this.x + 10 * (i + 1), this.y - 10 * (i + 1));
      paper.stroke();
      paper.closePath();
    }
    paper.restore();
  }
  update() {
    this.x -= this.speed;
    this.y += this.speed;
    if (this.y >= h + 100) {
      this.reset();
    }
  }
}

window.addEventListener("resize", resizeReset);
