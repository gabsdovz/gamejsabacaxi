const container = document.querySelector(".container");
const abacaxiCortado = document.querySelector(".abacaxiCortado");
const startBtn = document.querySelector(".startBtn");

const abacaxi = document.createElement("img");
abacaxi.setAttribute("class", "abacaxi");
abacaxi.setAttribute("src", "https://media4.giphy.com/media/xUA7aOLOWipHDDP8aY/giphy.gif?cid=ecf05e47p3vl406j6r8zvg4frd97cxot3x5xfsf637bxor57&rid=giphy.gif&ct=s");
const contHeight = container.offsetHeight;
const contWidth = container.offsetWidth;

setInterval(() => {
  const randTop = Math.random() * (contHeight - 100);
  const randLeft = Math.random() * (contWidth - 100);

  abacaxi.style.position = "absolute";
  abacaxi.style.top = randTop + "px";
  abacaxi.style.left = randLeft + "px";
}, 1000);

let score = 0;

startBtn.addEventListener("click", () => {
  container.appendChild(abacaxi);

  startBtn.innerText = "PONTOS: " + score;
});

window.addEventListener("click", (e) => {
  if (e.target === abacaxi) score++;
  if (e.target === abacaxi) document.getElementById('test').style.display = "flex";
  if (e.target === abacaxi) abacaxiCortado.style.top = e.pageY + "px", abacaxiCortado.style.left = e.pageX + "px";
  startBtn.innerText = "PONTOS: " + score;
});

const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});