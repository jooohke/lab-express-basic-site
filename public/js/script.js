
console.log("lyricsList : " + document.querySelector("p"))

axios
  .get("https://taylorswiftapi.herokuapp.com/get-all")

  .then((response) => {
    // console.log('Response from API is: ' + response);

    const lyrics = response.data[0]

    console.log('a single lyrics: ', lyrics)
    console.log(lyricsList)

    // lyrics.forEach((lyric) => {
      lyricsList.textContent = lyrics.song
    // });
  })
  .catch(function (errorResponse) {
    console.log(errorResponse);
  });