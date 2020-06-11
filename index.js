const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const btnStart = document.querySelector("button[data-action = 'start']");
const btnStop = document.querySelector("button[data-action = 'stop']");
const body = document.querySelector("body");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBGC = {
  isActive: false,
  changeStart() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.start = setInterval(() => {
      const randomNumber = randomIntegerFromInterval(0, colors.length - 1);
      body.style.backgroundColor = colors[randomNumber];
      console.log(colors[randomNumber]);
    }, 1000);
  },

  changeStop() {
    clearInterval(this.start);
    this.isActive = false;
  },
};

btnStart.addEventListener("click", changeBGC.changeStart.bind(changeBGC));
btnStop.addEventListener("click", changeBGC.changeStop.bind(changeBGC));
