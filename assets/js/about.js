const filmes = JSON.parse(dataFilmes);
const maxStars = 5;

let pesquisa = window.location.search;
pesquisa = pesquisa[pesquisa.length-1];

videoId = filmes[pesquisa].trailer;

let movieSection = document.getElementById('movie-video');
let movieTitle = document.getElementById('movie-title');
let longDescription = document.getElementById('long-description');
let director = document.getElementById('director');
let writters = document.getElementById('writters');
let launchDate = document.getElementById('launch-date');
let stars = document.getElementById('stars');
let notaFilme = 0
let outlineStars = "";

movieSection.innerHTML = "<iframe src='https://www.youtube.com/embed/"+videoId+"?autoplay=1&mute=1&loop=1' allow='autoplay; clipboard-write; encrypted-media;'></iframe>";
movieTitle.innerHTML = filmes[pesquisa].nome;
longDescription.innerHTML = filmes[pesquisa].descLonga;
director.innerHTML = filmes[pesquisa].diretor;
writters.innerHTML = filmes[pesquisa].roteirista;
launchDate.innerHTML = filmes[pesquisa].data;

document.title = "DH Flix | " + filmes[pesquisa].nome;

if((filmes[pesquisa].nota == 0 ) || (filmes[pesquisa].nota == undefined)){
    for(let i = maxStars; i > 0; i--){
        outlineStars+="<li>☆</li>";
    }
    stars.innerHTML = outlineStars;
}

