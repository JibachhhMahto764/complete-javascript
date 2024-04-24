console.log("Welcome to Spotify");
// Initialize the variables
let  songIndex = 0; 
let audiioElement = new Audio('1.mp3');
let Masterplay = document.gAudioetElementById('masterplay');
let myProgressBar = document.getElementById('masterplay');
let gif = document.getElementById('gif');

let songs = [
    {songName:" saleme-ishq", FilePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:" saleme-ishq", FilePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:" saleme-ishq", FilePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:" saleme-ishq", FilePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:" saleme-ishq", FilePath: "song/1.mp3", coverPath:"covers/1.jpg"}
 ]
 
 //audio Element.play;
// handle play/pause click
Masterplay.addEventListener('click',() =>{
    if(audiioElement.pause || audiioElement.currentTime<=0){
        audiioElement.play();
        Masterplay.classList.remove('fa-play-circle');
        Masterplay.classList.add('fa-pause-circle');
    }else{
        audiioElement.pause();
        Masterplay.classList.remove('fa-pause-circle');
        Masterplay.classList.add('fa-play-circle');

    }
})
 // Listen to Events
 audiioElement.addEventListener('timeupdate', () =>{
//update Seeker
progress = parseInt((audiioElement.currentTime/audiioElement.duration)*100);
myProgressBar.value = progress;
 })
 myProgressBar.addEventListener('change', ()=>{
    audiioElement.currentTime = myProgressBar.value * audiioElement.duration/100; 
 })