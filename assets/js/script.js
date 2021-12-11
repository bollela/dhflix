const filmes = JSON.parse(dataFilmes);
// console.log(filmes);

let cards = document.querySelectorAll('.card');

let nomeFilme="";
let imagemFilme="";
let descricaoPequena="";

for (let i = 0; i < cards.length; i++){
    nomeFilme = filmes[i].nome;
    imagemFilme = filmes[i].foto;
    descricaoPequena = filmes[i].descCurta;
    cards[i].innerHTML ="<img src='./assets"+imagemFilme+"'class='card-img-top' alt=''><div class='card-body'><h1 class='card-title'>"+nomeFilme+"</h1>\n<p class='card-text'>"+descricaoPequena+"</p>\n<a href='about-item-catalog.html?filme="+i+"' class='btn btn-success'>Abrir</a>\n</div>";
}

const open = document.getElementById('open');
const close = document.getElementById('close');
const modal_container = document.getElementById('modal_container');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show')
})