window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", function (e) {
    console.log(e);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.toggle("playing");
    console.log(key);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if (!audio) {
        return;
    }
    audio.play();
    audio.currentTime = 0;
  });
  document.addEventListener('keyup', (e)=>{
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.toggle("playing");
  });
});
