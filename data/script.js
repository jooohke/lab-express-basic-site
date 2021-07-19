const lyrics = document.getElementById("lyrics")

axios 
    .get("https://taylorswiftapi.herokuapp.com/get-all")
    .then(function (response) {
    console.log(response)
    
    const lyrics = response.data;

    lyrics.forEach((lyric) => {
        list.innerHTML += `<li>${lyric.quote}</li>`
    });
})

.catch(function (errorResponse) {
    console.log(errorResponse)
});