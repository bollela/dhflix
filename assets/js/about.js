const filmes = JSON.parse(dataFilmes);

let pesquisa = window.location.search;
pesquisa = pesquisa[pesquisa.length-1];

videoId = filmes[pesquisa].trailer;

let movieSection = document.getElementById('movie-video');

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
player = new YT.Player(movieSection, {
    videoId: videoId,
    playerVars: {'autoplay': 1, 'controls':0}
});
}

// movieSection.innerHTML = "<iframe src='https://www.youtube.com/embed/"+videoId+"?autoplay=1' allow='autoplay; clipboard-write; encrypted-media;'></iframe>";

