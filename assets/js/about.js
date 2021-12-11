const filmes = JSON.parse(dataFilmes);

let pesquisa = window.location.search;
pesquisa = pesquisa[pesquisa.length-1];

videoId = filmes[pesquisa].trailer;

let movieSection = document.getElementById('movie-video');

movieSection.innerHTML = "<iframe src='https://www.youtube.com/embed/"+videoId+"?autoplay=1&mute=1' allow='autoplay; clipboard-write; encrypted-media;'></iframe>";

