axios
  .get("https://taylorswiftapi.herokuapp.com/get-all")

  .then((response) => {
    // console.log('Response from API is: ' + response);


    // RANDOM LYRICS

    const randomLyrics = document.getElementById("random-lyrics")
    const randomLyricsSong = document.querySelector("#random-lyrics-info span:first-child")
    const randomLyricsAlbum = document.querySelector("#random-lyrics-info span:last-child")
    const randomLyricsBtn = document.getElementById("random-lyrics-btn")

    function getRandomLyrics() {
      const getRandomIndex = Math.floor(Math.random() * response.data.length);
      const randomLyricsContent = response.data[getRandomIndex]
      // if (randomLyricsContent.quote.includes(" / ")) randomLyrics.textContent = randomLyricsContent.quote.replace(" / ", "\n");
      randomLyrics.textContent = randomLyricsContent.quote;
      randomLyricsSong.textContent = randomLyricsContent.song;
      randomLyricsAlbum.textContent = randomLyricsContent.album;
    }

    randomLyricsBtn.onclick = getRandomLyrics

    console.log("So I punched a hole in the roof / Let the flood carry away all my pictures of you.".replace(" / ", "\n"))

  })
  .catch(function (errorResponse) {
    console.log(errorResponse);
  });


  /* WHAT TO DO 

  * 


  */