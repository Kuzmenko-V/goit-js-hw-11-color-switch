const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;
let startId = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const bodyelem = document.querySelector("body");

bodyelem.addEventListener('click', colorSwitch);

function changeColor() {
    bodyelem.setAttribute('bgcolor', colors[randomIntegerFromInterval(0, colors.length - 1)])
};

function colorSwitch(event) {
    const target = event.target;
    if (target.nodeName !== "BUTTON") return;
    if (target.dataset.action === "start") {
        target.setAttribute('disabled', true);
        timerId = setInterval(changeColor, 1000);
        startId = target;
    }
    if (target.dataset.action === "stop") {
        clearInterval(timerId);
        startId.removeAttribute('disabled');
    }   
};
