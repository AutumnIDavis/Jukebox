//youtube below

// var jukebox = document.querySelector('ul.Music')
// jukebox.addEventListener('click', function(e) {
//     var audioPlayer = document.createElement('audio');
//     audioPlayer.id = 'player';
//     document.body.appendChild(audioPlayer);
// },false);



//play button
// $('#play').click(function(){
//     audio.play();
    // $('#play').hide();
    // $('#pause').show();
    // $('#duration').fadeIn(400);
    // showDuration();
//});

  // var playlist = [{
  //     id: 0,
  //     src:"/Users/foreverautumn/Desktop/WebDevelopment/Projects/Jukebox/songs/Ancholia.mp3",
  //
  //   },
  //   {
  //     id: 1,
  //     src:"/Users/foreverautumn/Desktop/WebDevelopment/Projects/Jukebox/songs/Canon in D.mp3"
  //   },
  //   {
  //     id: 2,
  //     src:"/Users/foreverautumn/Desktop/WebDevelopment/Projects/Jukebox/songs/Beethoven-MoonlightSonata.mp3"
  //   },
  //   {
  //     id: 3,
  //     src:"/Users/foreverautumn/Desktop/WebDevelopment/Projects/Jukebox/songs/Unaccompanied Cello Suite No. 1 in G Major-Prelude.mp3"
  //   }];
    //
    //
    // var songs = {
    //   tune: playlist,
    //   currentTune: 3,
    //   //method to update the src of my img tag.
    //   Mp3: function(){
    //     audio.src = this.tune[this.currentTune].src;
    //     console.log(playlist);
    //   },
    //   //a method to update currentPhoto attribute.
    //   nextSong: function(){
    //     //++ increment by one
    //     this.currentTune++;
    //     //call showPhoto to update src of img tag
    //     this.Mp3Song();
    //     currentTune.play();
    //   }
    // }

    function play(){
         var audio = document.getElementById("PlayButton")
         audio.play();
       }
//
// //pause button
//
// function pause(){
//      var audio = document.getElementById("audio");
//      audio.pause();
//   }
// //skip button
//
// function skip(){
//      var audio = document.getElementById("audio");
//      audio.skip();
//   }


//rewind button

//shuffle button

//Scrub

//Volume
