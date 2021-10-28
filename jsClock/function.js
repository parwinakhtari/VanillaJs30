const sechand = document.querySelector(".second-hand");
const minhand = document.querySelector(".min-hand");
const hrhand = document.querySelector(".hour-hand");

function setClock() {
  const time = new Date();
  const seconds = time.getSeconds();
  const min = time.getMinutes();
  const hr = time.getHours();
  //console.log(seconds+" "+min+ " "+ hr);

  const rotatesec = (seconds / 60) * 360 + 90;
  const rotatemin = (min / 60) * 360 + (seconds / 60) * 6 + 90;
  const rotatehour = (hr / 12) * 360 + (min / 60) * 30 + 90;

  sechand.style.transform = `rotate(${rotatesec}deg)`;
  minhand.style.transform = `rotate(${rotatemin}deg)`;
  hrhand.style.transform = `rotate(${rotatehour}deg)`;
}
setInterval(setClock, 1000);
setClock();