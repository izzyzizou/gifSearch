function grab_data(){
    var apiKey = "IE8IE5TFVAS4";
    var lmt = 50;
    var anon_id = "a2sd34fr5edx7th56kh";
    var search_term = "five";
    var getInputGifValue = document.getElementById("inputGif");
    console.log(getInputGifValue.value);

    // var anon_ids = Math.random().toString(36).substr(2, 9);
    // console.log(anon_ids);
    var search_url = "https://api.tenor.com/v1/search?tag=" + getInputGifValue.value + "&key=" +
    apiKey + "&limit=" + lmt + "&anon_id=" + anon_id;

    fetch(search_url)
    .then(data => {
        console.dir(data);
        return data.json();
    })
    .then(response => {
            tenorCallback_search(response);
    })
    .catch(err => {
        console.log(err);
    })
}

function tenorCallback_search(responseText){
    var randomGif = Math.floor(Math.random() * 50);
    console.log(randomGif);
    var top_10_gifs = responseText["results"];

    // document.getElementById("preview_gif").src = top_10_gifs[0]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif").src = top_10_gifs[randomGif]["media"][0]["tinygif"]["url"];

    return;
}