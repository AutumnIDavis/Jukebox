//var music = document.getElementById("playlist");

var myJukebox={
    currentSong: new Audio(),
    songs: [
"/Users/foreverautumn/Desktop/WebDevelopment/Projects/Jukebox/songs/Beethoven-MoonlightSonata.mp3",
"/Users/foreverautumn/Desktop/WebDevelopment/Projects/Jukebox/songs/Ancholia.mp3",
"/Users/foreverautumn/Desktop/WebDevelopment/Projects/Jukebox/songs/Unaccompanied Cello Suite No. 1 in G Major-Prelude.mp3",
"/Users/foreverautumn/Desktop/WebDevelopment/Projects/Jukebox/songs/Out of It All.mp3",
"/Users/foreverautumn/Desktop/WebDevelopment/Projects/Jukebox/songs/Feels Alright.mp3",
"/Users/foreverautumn/Desktop/WebDevelopment/Projects/Jukebox/songs/Canon in D.mp3",
"/Users/foreverautumn/Desktop/WebDevelopment/Projects/Jukebox/songs/15 Feels So Good.mp3",
"/Users/foreverautumn/Desktop/WebDevelopment/Projects/Jukebox/songs/02 Silhouette.mp3",
"/Users/foreverautumn/Desktop/WebDevelopment/Projects/Jukebox/songs/What A Wonderful World.mp3",
"/Users/foreverautumn/Desktop/WebDevelopment/Projects/Jukebox/songs/01 The Moment.mp3",
],
// setSong(id) { Set currentSong to id }
// playAudio() {currentSong.play}
// playSong(id) { setSong(id); playAudio() }

playAudio: function(id){
  this.currentSong.src = this.songs[id];
  this.currentSong.play();
},

pauseAudio: function(){
  this.currentSong.pause();
  }
}
