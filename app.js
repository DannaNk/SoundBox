// TODO :

//window.addEventListener('keydown'), play(e){

// 1 - Select corresponding audio file
//const audio = document.querySelector('audio[data-key="${e.keyCode}"]');
// 2 - Play audio file
// 3 - Rewind audio file
// 4 - Select key divs
// 5 - Transitionend listener
// 6 - Remove transition
//
window.addEventListener("keydown", play);
  function play(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add("playing")
      }
      function removeTransition(e) {
//    if(e.propertyName !== "transform") return;
    e.currentTarget.classList.remove("playing");
  };

  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => key.addEventListener("transitionend", removeTransition));	


      