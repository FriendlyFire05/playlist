// Complete Day 1 goals here
let songName = ['1a','1b','1c','1d'];
let songImage = ['2a','2b','2c','2d'];
let songArtist = ['3a','3b','3c','3d'];
let songLength = ['4a','4b','4c','4d'];
let songLink = ['5a','5b','5c','5d'];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  console.log(songName);
  songName.forEach(function(song)  {
  //if($(".title").val() === song){
    $(".songs").append(`<li>${song}</li>`) 
  //  }
  });
  
  songImage.forEach(function(image)  {
  $(".images").append(`<li>${image}</li>`)  
  });
  
  songArtist.forEach(function(artist)  {
  $(".artists").append(`<li>${artist}</li>`)  
  });
  
  songLength.forEach(function(length)  {
  $(".lengths").append(`<li>${length}</li>`)  
  });
  
  songLink.forEach(function(link)  {
  $(".links").append(`<li>${link}</li>`)  
  });
  
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  let inputSong = $(".title").val();
  // Complete Day 3 goals inside this function
  songName.push(inputSong);
  
  let inputImage = $(".image").val();
  songImage.push(inputImage);
  
  let inputArtist = $(".artist").val();
  songArtist.push(inputArtist);

  let inputLength = $(".length").val()
  songLength.push(inputLength);
  
  let inputLink = $(".link").val()
  songLink.push(inputLink);
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
