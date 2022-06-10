window.addEventListener("load", function () {
  let box = document.querySelector(".timer1");
  let time = 10;

  box.innerHTML = time;
  let interval = this.setInterval(function () {
    time--;
    box.innerHTML = time;


    if (time < 1) {
      clearInterval(interval);
    }
  }, 1000);
});
