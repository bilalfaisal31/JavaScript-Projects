const video = document.querySelector("#video");
const play = document.querySelector("#play");
const stopbtn = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const timestamp = document.querySelector("#duration");

function toggleVideo() {
  if (video.paused) {
    video.play();
    play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
  } else {
    video.pause();
    play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
  }
}
function stopVideo() {
  video.pause();
  video.currentTime = 0;
  play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
}
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let min = Math.trunc(video.currentTime / 60);
  min < 10 ? (min = `0${min}`) : (min = min);

  let sec = Math.trunc(video.currentTime % 60);
  sec < 10 ? (sec = `0${sec}`) : (sec = sec);

  timestamp.innerHTML = `${min}:${sec}`;
}
function setProgress() {
  video.currentTime = (progress.value * video.duration) / 100;
}

video.addEventListener("click", toggleVideo);
play.addEventListener("click", toggleVideo);
stopbtn.addEventListener("click", stopVideo);
progress.addEventListener("change", setProgress);
video.addEventListener("timeupdate", updateProgress);
