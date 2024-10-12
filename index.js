let progress=document.getElementById("progress_bar")
let song=document.getElementById("sound")
let Ctrl=document.getElementById("play-pause_icon")
song.onloadeddata=()=>{
    progress.max=song.duration;
    song.currentTime=progress.value ;
}

if(song.play()){
    setInterval(() => {
        progress.value=song.currentTime;
    }, 500);
}

progress.onchange=()=>{
    song.play()
    song.currentTime=progress.value;
    if (play.classList.contains("fa-play")) {
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    }
}
let play=document.getElementById("pause")

Ctrl.addEventListener("click", () => {

    if (play.classList.contains("fa-play")) {
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        song.play();
        
    } else if (play.classList.contains("fa-pause")) {
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        song.pause()
    }
});


let volumeSlider=document.getElementById("volume-progress")
song.volume=volumeSlider.value/100;

volumeSlider.addEventListener("input",()=>{
    song.volume=volumeSlider.value/100;
})

